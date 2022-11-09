import profileReducer, {actions} from './profile-reducer';
import React from 'react';

let state = {
  posts: [
    { id: 1, post: 'Did you have a nice day?', likesCount: 14 },
    { id: 2, post: 'My first post', likesCount: 29 }
  ],
  profile: null,
  status: ''
};

test('length of posts should be incremented', () => {
  let action = actions.addPostActionCreator("Kotik is awersome");

  

  let newState = profileReducer (state, action);

  expect (newState.posts.length).toBe(3);
  
});


test('message of new post should be correct', () => {
  let action = actions.addPostActionCreator("Kotik is awersome");

  let newState = profileReducer (state, action);

  expect (newState.posts[2].post).toBe("Kotik is awersome");
});

test('after deleting legth of messages should be decrement', () => {
  let action = actions.deletePost(1);

  let newState = profileReducer (state, action);

  expect (newState.posts.length).toBe(1);
});

test(`after deleting legth of messages should not be decrement if id is incorrect`, () => {
  let action = actions.deletePost(1000);

  let newState = profileReducer (state, action);

  expect (newState.posts.length).toBe(2);
});
