function Bookshelf() {
  this.books = [];

  this.addBook = function(book) {
    this.books.push(book);
  };

  this.removeBook = function(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  };

  this.getBooks = function() {
    return this.books;
  };

  this.searchByTitle = function(title) {
    return this.books.filter(book => book.title === title);
  };

  this.searchByAuthor = function(author) {
    return this.books.filter(book => book.author === author);
  };

  this.searchByISBN = function(isbn) {
    return this.books.filter(book => book.isbn === isbn);
  };
}
