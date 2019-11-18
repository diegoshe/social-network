import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi hi', likesCount: 12},
                {id: 2, message: 'Hi are u', likesCount: 1},
                {id: 3, message: 'Hi gues', likesCount: 11}
            ],
            newPostText: 'abrabara'
        },
        dialogsPage: {
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
            newMessageBody: " "
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

        addPost() {

        },
        updateNewPostText(newText) {

        },

        dispatch(action) {

            this._state.profilePage = profileReducer(this._state.profilePage, action);
            this._state.dialogsPage =dialogsReducer(this._state.dialogsPage, action);
            this._state.sidebar = sidebarReducer(this._state.sidebar, action);

            this._callSubscriber(this._state);
        }


};






export default store;
window.store = store;