// Задача 1
class PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {

        this.name = name;
        this.ReleaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100; 
        this.type = null;

    }

    fix() {
        this._state = this._state * 1.5; //
    }

    set _state(stateNumber) {

        if (stateNumber < 0) {
            this.state = 0;
        } else if (stateNumber > 100) {
            this.state = 100;
        } else {
            this.state = stateNumber;
        }

    }

    get _state() {
        return this.state;
    }

}

class Magazine extends PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {

        super(name, releaseDate, pagesCount);
        this.type = "magazine";

    }

}

class Book extends Magazine {

    constructor(author, name, releaseDate, pagesCount) {

        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";

    }

}

class NovelBook extends Book {

    type = "novel";

}

class FantasticBook extends Book {

    type = "fantastic";

}

class DetectiveBook extends Book {

    type = "detective";

}
 


//Задача 2
class Library {

    books = [];

    constructor(name) {

        this.name = name;

    }

    addBook(book) {

        if (book.state > 30) {
            this.books.push(book);
        } else {
            this.books.push(null);
        }

    }

    findBookBy(type, value) { //

        let bookIndex = this.books.findIndex((item) => item[type] === value);

        return this.books[bookIndex] = (bookIndex != -1) ? this.books[bookIndex] : null;

    }

    giveBookByName(bookName) {

        let bookIndex = this.books.findIndex((item) => item.name === bookName);

        if (bookIndex != -1) {
          let bookReturn = this.books[bookIndex];
          this.books.splice([bookIndex], [1]);
          return bookReturn;
        } else {
          return null;
        }

    }
}



// Задача 3
class Student {
    marks = {};
  
    constructor(name, gender, age) {
      this.name = name;
      this.gender = gender;
      this.age = age;
    }
  
    addMark(mark, discipline) {

      if (mark < 1 || mark > 5) {
        return console.log('Ошибка, оценка должна быть числом от 1 до 5');
      } else if (this.marks[discipline] != undefined) {
          this.marks[discipline].push(mark);
      } else {
          this.addDiscipline(discipline);
          this.marks[discipline].push(mark);
      }

    }
  
    addDiscipline(discipline) {

      this.marks[discipline] = [];

    }
  
    getAverageBySubject(discipline) {

      if (this.marks[discipline] != undefined || this.marks[discipline].length > 0) {
        let sum = this.marks[discipline].reduce((acc, item) => acc += item);
        return sum / this.marks[discipline].length
      } else if (this.marks[discipline] != undefined || this.marks[discipline].length === 0) {
        return console.log('оценок нет');
      } else {
        return console.log(`Предмета ${discipline} не существует`);
      }

    }
  
    getAverage() {

      let length = 0;
      let sum = 0;

      for (let key in this.marks) {
        sum += this.marks[key].reduce((acc, item) => acc += item);
        length += this.marks[key].length;
      }

      return sum / length

    }
  
    exclude(reason) {

      delete this.marks;
      this.excluded = reason;
      console.log(reason);

    }
  }