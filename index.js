const bookList = document.getElementById('book-list');

//This function, createBookListItem(book)
// takes a single parameter book, which is an 
// object representing a book.

function createBookListItem(book) {
  const li = document.createElement('li');
  const h3 = document.createElement('h3');
  h3.textContent = book.title;
  const p1 = document.createElement('p');
  p1.textContent = `Author: ${book.author}`;
  const p2 = document.createElement('p');
  p2.textContent = `ISBN: ${book.isbn}`;
  const commentList = document.createElement('ul');
}
// function loops through each comment in the book's 
// comments array and creates a li element for each comment.
  for (const comment of book.comments) {
    const commentListItem = document.createElement('li');
    const h4 = document.createElement('h4');
    h4.textContent = 'Comment';
    const p = document.createElement('p');
    p.textContent = comment;
    commentListItem.classList.add('comment');
    commentListItem.appendChild(h4);
    commentListItem.appendChild(p);
    commentList.appendChild(commentListItem);
  }
  const commentForm = document.createElement('form');
  const commentLabel = document.createElement('label');
  commentLabel.textContent = 'Add a Comment:';
  const commentInput = document.createElement('input');
  commentInput.type = 'text';
  commentInput.required = true;
  const commentButton = document.createElement('button');
  commentButton.type = 'submit';
  commentButton.textContent = 'Add';
  commentForm.appendChild(commentLabel);
  commentForm.appendChild(commentInput);
  commentForm.appendChild(commentButton);
  commentForm.addEventListener('submit'); {
    // calls the addComment() method on the book 
    // object to add the new comment to the book's comments array
    const comment = commentInput.value;
    book.addComment(comment);
    commentInput.value = '';
    const commentListItem = document.createElement('li');
    const h4 = document.createElement('h4');
    h4.textContent = 'Comment';
    const p = document.createElement('p');
    p.textContent = comment;
    commentListItem.classList.add('comment');
    commentListItem.appendChild(h4);
    commentListItem.appendChild(p);
    commentList.appendChild(commentListItem);
  }
