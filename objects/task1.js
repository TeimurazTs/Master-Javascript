let Books = [
  {
    author: "Bill",
    title: "The Road Ahead",
    haveRead: true,
    dateOfRead: new Date(2020, 10, 10),
  },
  {
    author: "Steve",
    title: "Walter Isaacson",
    haveRead: true,
    dateOfRead: new Date(2020, 10, 5),
  },
  {
    author: "Jhon",
    title: "The Hunger Games",
    haveRead: false,
    dateOfRead: NaN,
  },
];

function readingStatus(books) {
  books.forEach((element) => {
    let toBeConsoled; 
    if(element.haveRead) {
      toBeConsoled = `${element.author} has read ${element.title}`;
    } else {
      toBeConsoled = `${element.author} has not read ${element.title} yet`;
    }
    console.log(toBeConsoled);
  });
}

readingStatus(Books);
