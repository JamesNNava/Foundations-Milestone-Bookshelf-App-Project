class Book {
  constructor(author, language, subject, title) {
    this.author = author;
    this.language = language;
    this.subject = subject;
    this.title = title;
    //allows comments to books
    this.addComment = function(comment) {
      this.comments.push(comment);
    }
  }
  // returns the newly created list item.


  render() {
    const li = document.createElement("li");
    li.textContent = this.title;
    return li;
  }
}
