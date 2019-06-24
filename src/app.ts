import { Category } from "./enums";
import { Book, Logger, Author, Librarian, Magazine } from "./interfaces";
import { ReferenceItem, UniversityLibrarian, Shelf, Encyclopedia } from "./classes";

import { purge, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults } from "./lib/utility-functions";

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// type Book = { 
//   id: number,
//   title: string,
//   author: string,
//   available: boolean,
//   category: Category
// };

// Task 01 ================================
// logFirstAvailable(getAllBooks());

// Task 02 ================================
// const titles = getBookTitlesByCategory(Category.JavaScript);
// logBookTitles(titles);

// Task 03 
// const titles = getBookTitlesByCategory(Category.JavaScript);
// titles.forEach(title => console.log(title));
// console.log(getBookByID(3));

// Task 04
// let myID = createCustomerID('Ann', 10);
// console.log(myID);
// type GeneratorType = (name: string, id: number) => string;
// let idGenerator: GeneratorType = (name: string, id: number): string => `${name}${id}`;
// idGenerator = createCustomerID;
// myID = idGenerator('Boris', 11);
// console.log(myID);

// Task 05
// createCustomer('Ann');
// createCustomer('Ann', 20);
// createCustomer('Ann', 20, 'Kiev');
// const titles = getBookTitlesByCategory();
// console.log(titles);
// logFirstAvailable();
// const titles = checkoutBooks('Anna', 1, 2, 4);
// console.log(titles);

// Task 06
// const checkedOutBooks = getTitles(false);
// console.log(checkedOutBooks);

// Task 07
// const myBook: Book = {
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
//   pages: 200,
//   markDamaged: (reason: string) => console.log(`Damaged: ${reason}`),
// }
// printBook(myBook);
// myBook.markDamaged('missing back cover');

// Task 08
// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('some problems');

// Task 09
// const favoriteAuthor: Author  = {
//   name: 'Anna',
//   email: 'anna@example.com',
//   numBooksPublished: 3
// };

// const favoriteLibrarian: Librarian = {
//   name: 'Boris',
//   email: 'boris@example.com',
//   department: 'Fiction',
//   assistCustomer: (name: string) => console.log(`Assist ${name}`)
// };

// Task 10
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.name = 'Boris';
// (favoriteLibrarian as UniversityLibrarian).addF = 'aslakdjf;ak';
// (<UniversityLibrarian>favoriteLibrarian).addF = 'aslakdjf;ak';

// Task 11
// const ref = new ReferenceItem('My Title', 2019);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'Anna';
// console.log(ref.publisher);

//Task 12
// const refBook = new Encyclopedia('Title 100', 2010, 10);
// console.log(refBook);
// refBook.printItem();

// // Task 13
// refBook.printCitation();

// Task 16
// const refBook = new RefBook('Title 100', 2010, 10);
// console.log(refBook);
// refBook.printItem();
// refBook.printCitation();

// Task 18
// const inventory: Array<Book> = [
//   { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//   { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//   { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//   { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },  
// ];

// let result: Array<Book | number> = purge<Book>(inventory);
// // let result: Book[] | number[] = purge<Book>(inventory);
// console.log(result);
// result = purge([1, 2, 3, 4]);
// console.log(result)

//Array<number | Book> === (number | Book)[]

// Task 19
// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// bookShelf.add(...inventory)
// console.log(bookShelf.getFirst());

// const magazines: Array<Magazine> = [
//   { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//   { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//   { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazineShelf.add(...magazines);
// console.log(magazineShelf.getFirst())


// Task 20
// const magazines: Array<Magazine> = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
//   ];
  
// const magazineShelf = new Shelf<Magazine>();
// magazineShelf.add(...magazines);
// magazineShelf.printTitles();
// const result = magazineShelf.find('Five Points');
// console.log(result);

// Task 21, 22
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');
// // favoriteLibrarian['printLibrarian']();

// Task 23
// const favoriteLibrarian = new UniversityLibrarian();
// console.log(favoriteLibrarian);
// favoriteLibrarian.assistFaculty = () => console.log('Changed assistFaculty');
// favoriteLibrarian.teachCommunity = () => console.log('Changed assistFaculty');

// Task 24
// const refBook = new Encyclopedia('Title 100', 2010, 10);
// console.log(refBook);
// refBook.printItem();

// Task 25, 26
// const favoriteLibrarian = new UniversityLibrarian();
// console.log(favoriteLibrarian);
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');

// Task 27
// const refBook = new RefBook('Title 100', 2010, 10);
// console.log(refBook);
// refBook.copies = 5;

// Task 28
// console.log(`Start`);
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log(`Finish`);

// Task 29
// console.log(`Start`);
// getBooksByCategoryPromise(Category.JavaScript)
//   .then(titles => {
//     console.log(titles);
//     return Promise.resolve(titles.length);
//   })
//   .then(count => console.log(count))
//   .catch(err => console.log(err))
//   .finally(() => console.log('Complete!'));
// console.log(`Finish`);

// Task 30
// console.log('Beginning search...');
// logSearchResults(Category.Software)
//     .catch(reason => console.log(reason));
// console.log('Search submitted...');

// Task 31
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
// Examples:
// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']
function solution(str: string): string[] {
  return (str + "_").match(/../g);
}

console.log(solution('abc'));
console.log(solution('abcd'));
console.log(solution('abcde'));
console.log(solution('abcdef'));
// Оформить на github и добавить задание от себя