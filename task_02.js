const books = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
  ];

  function getTitles(bookArray) {
    return bookArray.map(book => book.title);
  }
  const titles = getTitles(books);
  console.log(titles);
  