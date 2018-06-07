export const REQUEST_HELLO_WORLD = 'REQUEST_HELLO_WORLD';
export const RECEIVE_HELLO_WORLD = 'RECEIVE_HELLO_WORLD';

export const requestHelloWorld = () => ({ type: REQUEST_HELLO_WORLD });
export const receiveHelloWorld = (text) => ({ type: RECEIVE_HELLO_WORLD, text });


// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add comment
export function addComment(postId, author, comment) {
  console.log('Dispatching add comment');
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}