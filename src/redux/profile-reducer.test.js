import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";


it ('new post should be add', () => {
	let action = addPostActionCreator('new post')
	let state = {
		posts: [
			{id: 1, message: 'Hi hi', likesCount: 12},
			{id: 2, message: 'Hi are u', likesCount: 1},
			{id: 3, message: 'Hi gues', likesCount: 11}
		]
	};
	let newState = profileReducer(state, action);

	expect (newState.posts.length).toBe(4);
})

it ('post should be delete', () => {
	let action = deletePost(1)
	let state = {
		posts: [
			{id: 1, message: 'Hi hi', likesCount: 12},
			{id: 2, message: 'Hi are u', likesCount: 1},
			{id: 3, message: 'Hi gues', likesCount: 11}
		]
	};
	let newState = profileReducer(state, action);

	expect (newState.posts.length).toBe(2);
})

