const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
	dialogs: [
		{id: 1, name: "Dimych"},
		{id: 2, name: "Drey"},
		{id: 3, name: "Sasha"},
		{id: 4, name: "Olga"},
		{id: 5, name: "Pety"},
		{id: 6, name: "Vasy"}
	],

	messages: [
		{id: 1, message: "Hi"},
		{id: 2, message: "Hi"},
		{id: 3, message: "Hi are you"},
		{id: 4, message: "Hohohohoh"}
	],
};

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case SEND_MESSAGE:
			let body = action.newMessageBody;
			return {
				...state,
				messages: [...state.messages, {id: 6, message: body}]
			};
		default:
			return state;
	}
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;