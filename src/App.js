import React, {Component, Suspense} from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, withRouter, HashRouter } from "react-router-dom";
//import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';

const DialogsContainer = React.lazy(()=> import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(()=> import('./components/Profile/ProfileContainer'));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
}
render() {
  if (!this.props.initialized){ 
    return <Preloader/>
  }
  return (
    
      <div className='app-wrapper'>
        <HeaderContainer />
        <Nav />
        <div className='app-wrapper-content'>

        <Suspense fallback={<Preloader/>}>

          <Route path="/dialogs" 
          render={() => <DialogsContainer />} />

          <Route path="/profile:userId?" 
          render={() => <ProfileContainer />} />

          <Route path="/news" 
          render={() => <News />} />

          <Route path="/music"
           render={() => <Music />} />

          <Route path="/settings"
           render={() => <Settings />} />

          <Route path="/users" 
          render={() => <UsersContainer/>} />

          <Route path="/login"
           render={() => <Login/>} />

</Suspense>

        </div>
      </div>
      
    )
}
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })) (App);

const  SamuraiJSApp = (props) => {
    return <HashRouter >
    <Provider store={store}>
        <React.StrictMode>
   <AppContainer />

   </React.StrictMode>
   </Provider>
   </HashRouter>
  }

export default SamuraiJSApp;