import { InferActionsTypes } from "./redux-store";

type DialogType = {
  id: number
  name: string
}

type MessageType = {
  id: number
  message: string
}

let initialState = {
  dialogs: [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Sveta' },
    { id: 3, name: 'Sasha' },
    { id: 4, name: 'Olga' },
    { id: 5, name: 'Tom' },
    { id: 6, name: 'Alex' }
  ] as Array<DialogType>,

  messages: [
    { id: 1, message: 'Hey' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Did you have a nice day?' }
  ] as Array<MessageType>

};

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {

  switch (action.type) {
    case 'SN/DIALOGS/SEND-MESSAGE':
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 4, message: body }]
      };


    default:
      return state;
  }
}

export const actions = {
 sendMessage: (newMessageBody: string) => ({ type: 'SN/DIALOGS/SEND-MESSAGE', newMessageBody } as const)
}

export default dialogsReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>