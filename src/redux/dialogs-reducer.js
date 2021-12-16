const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
  ]

};

const dialogsReducer = (state = initialState, action) => {


  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 4, message: body }]
      };


    default:
      return state;
  }

}
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })
export default dialogsReducer;