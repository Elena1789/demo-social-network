import React, { Component, Suspense } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, withRouter, HashRouter, Switch, Link } from "react-router-dom";
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store, { AppStateType } from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';
import { UsersPage } from './components/Users/UsersContainer';
import { LoginPage } from './components/Login/LoginPage';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Header } from './components/Header/Header'


const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'));

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeApp: () => void
}

const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)
const SuspendedChatPage = withSuspense(ChatPage)

class App extends Component<MapPropsType & DispatchPropsType> {

  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    alert("Some error occured");
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (

      <Layout>
        <Header />
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                /*defaultOpenKeys={['sub1']}*/
                style={{ height: '100%' }}
              >

                <SubMenu key="sub1" icon={<UserOutlined />} title="My profile">
                  <Menu.Item key="1"><Link to="/profile"> Profile </Link></Menu.Item>
                  <Menu.Item key="2"><Link to="/dialogs"> Messages </Link></Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="Developers">
                  <Menu.Item key="5"><Link to="/developers"> Developers </Link></Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                  <Menu.Item key="9"><Link to="/chat"> Chat </Link></Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>

              <Switch>

                <Route path='/dialogs'
                  render={() => <SuspendedDialogs />} />

                <Route path='/profile:userId?'
                  render={() => <SuspendedProfile />} />

                <Route path='/news'
                  render={() => <News />} />

                <Route path='/music'
                  render={() => <Music />} />

                <Route path='/settings'
                  render={() => <Settings />} />

                <Route path='/developers'
                  render={() => <UsersPage pageTitle={"Samurajs"} />} />

                <Route path='/login'
                  render={() => <LoginPage />} />

                <Route path='/chat'
                  render={() => <SuspendedChatPage/>} />

                <Route path='*'
                  render={() => <div>404 NOT FOUND </div>} />

              </Switch>

            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Samuraj Social Network 2022</Footer>
      </Layout>


    )
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
})

let AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp: React.FC = () => {
  return <HashRouter >
    <Provider store={store}>
      <React.StrictMode>
        <AppContainer />

      </React.StrictMode>
    </Provider>
  </HashRouter>
}

export default SamuraiJSApp;