import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ProposalPage from './pages/proposalpage/proposalpage.components';
//import {getUser} from  './components/auth/userauth';
import UserContext from './context/user/user.context';
// import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      username : 'Okorie Veronica Adannaya'
    }
  }

  // componentDidMount(){
  //   const user = getUser();
  //   console.log('from App ' + user);
  //   this.setState({username : user})
  // }

  render(){
  return (
  <div>
    <BrowserRouter>
     <Switch>
       <Route exact path='/' component={HomePage}/>
       
       <UserContext.Provider value={this.state.username}>
       <Route exact path='/proposal' component={ProposalPage}/>
       </UserContext.Provider>
       
     </Switch>
     </BrowserRouter>
  </div>
  );
}
}

export default App;
