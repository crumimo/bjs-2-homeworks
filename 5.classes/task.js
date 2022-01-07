//Задача №1.

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    set state(state) {
      if (state <= 0) {
        this._state = 0;
      } else if (state >= 100) {
        this._state = 100;
      } else {
        this._state = state;
      }
    }
  
    get state() {
      return this._state;
    }
  
    fix() {
      this.state *= 1.5;
    }
  
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = 'magazine';
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = 'book';
      this.author = author;
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = 'novel';
    }
  }
    
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = 'fantastic';
    }
  }
    
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = 'detective';
    }
  }

  //Задача №2.

class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
    
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
    
    findBookBy(type, value) {
      for (let book of this.books) {
        if (book[type] === value) {
          return book;
        } 
      }
      return null;
    }
    
    giveBookByName(bookName) {
      for (let book in this.books) {
        if (this.books[book].name === bookName) {
          const giveBook = this.books[book];
          this.books.splice(book, 1);
          return giveBook;
        } 
      }
      return null;
    }
  }