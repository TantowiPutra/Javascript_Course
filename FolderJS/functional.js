// const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
// const newNamesWithExcMark = [];

// for(let i = 0; i < names.length; i++) {
//   newNamesWithExcMark.push(`${names[i]}!`);
// }

// console.log(newNamesWithExcMark);


// const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

// const newNamesWithExcMark = names.map((name) => `${name}!`);

// console.log(newNamesWithExcMark);

const books = [
  { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
  { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
  { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
  { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
  { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
  { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
  { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
];

var greatAuthors = books.filter((book) => book.sales > 1000000).map((book) => `${book.author} adalah penulis buku ${book.title} yang sangat hebat!`);
console.log(greatAuthors);