class User {
  constructor(name, surname, year) {
    this.name = name;
    this.surname = surname;
    this.year = year;
    if(this.year < 2018) throw new RangeError('Year needs to be greater')
  }

  getFullName() {
    return this.name + ' ' + this.surname;
  }

  getCourse() {
    let currentDate = new Date();
    return currentDate.getFullYear() - this.year;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname, year);
  }
}

let student = new Student("John", "Smith", 201);

console.log(student.name); // print 'John'
console.log(student.surname); // print 'smith'
console.log(student.getFullName()); // print 'John Smith'
console.log(student.year); // print 2018
console.log(student.getCourse()); // print 4 - fourth