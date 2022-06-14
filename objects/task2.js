let books = [
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

function daysAgo(dataOfDates) {
  let date1 = new Date();
  let date2 = dataOfDates.dateOfRead;
  let miliseconds = date1.getTime() - date2.getTime();
  let totalDays = Math.ceil(miliseconds / (1000 * 3600 * 24));
  return totalDays;
}

function readingStatus(books) {
  books.forEach((element) => {
    let toBeConsoled;
    if (element.haveRead) {
      toBeConsoled = `${element.author} has read ${element.title} ${daysAgo(element)} days ago`;
    } else {
      toBeConsoled = `${element.author} has not read ${element.title} yet`;
    }
    console.log(toBeConsoled);
  });
}

readingStatus(books);
