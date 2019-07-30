import React, {Component, lazy, Suspense} from 'react';
import Header from './components/Header';
import UserContext from './context/userContext';
import Loading from './components/Spinner';
// import Public from './components/Public';
// import Protected from './components/Protected';

const Protected = lazy(() => import('./components/Protected'));
const Public = lazy(() => import('./components/Public'));
class App extends Component {
  state = {
    user: null,
    loading: false,
  };
  componentDidMount() {
    if (localStorage.userToken) {
      this.setState({loading: true});
      const token = localStorage.userToken;
      fetch('https://conduit.productionready.io/api/user', {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Token ${token}`,
        },
      })
        .then(res => res.json())
        .then(userInfo => this.setState({user: userInfo.user, loading: false}));
    }
  }

  setUser = user => {
    this.setState({user});
  };
  render() {
    return (
      <UserContext.Provider value={{...this.state, setUser: this.setUser}}>
        {this.state.loading ? (
          <Loading />
        ) : (
          <div>
            <Header />
            <Suspense fallback={<Loading />}>
              {this.state.user ? <Protected /> : <Public />}
            </Suspense>
          </div>
        )}
      </UserContext.Provider>
    );
  }
}
export default App;
