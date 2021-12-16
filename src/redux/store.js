import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
  _state: {

    profilePage: {
      posts: [
        { id: 1, post: 'Did you have a nice day?', likesCount: 14 },
        { id: 2, post: 'My first post', likesCount: 29 }
      ],
      newPostText: 'Kotik'

    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Sveta' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Olga' },
        { id: 5, name: 'Tom' },
        { id: 6, name: 'Alex' }
      ],

      messages: [
        { id: 1, message: 'Hey' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Did you have a nice day?' }
      ],
      newMessageBody: ""

    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('State changed');
  },


  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);

    
  }
}


export default store;
window.store = store;
