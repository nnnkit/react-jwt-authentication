import React, {Component} from 'react';
import Header from './components/Header';
import UserContext from './components/context/userContext';
import Protected from './components/Protected';
import Public from './components/Public';
import Loading from './components/Spinner';
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
            {this.state.user ? <Protected /> : <Public />}
          </div>
        )}
      </UserContext.Provider>
    );
  }
}
export default App;
