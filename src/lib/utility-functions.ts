import { Book, LibMgrCallback } from "../interfaces";
import { Category } from "../enums";

export function purge<T>(inventory: Array<T>): Array<T> {
  return inventory.splice(2, inventory.length);
}

export function getAllBooks(): Array<Book> {
  let books: Array<Book> = [
    {
      id: 1,
      title: 'Refactoring JavaScript',
      author: 'Evan Burchard',
      available: true,
      category: Category.JavaScript,
    },
    {
      id: 2,
      title: 'JavaScript Testing',
      author: 'Liang Yuxian Eugene',
      available: false,
      category: Category.JavaScript,
    },
    {
      id: 3,
      title: 'CSS Secrets',
      author: 'Lea Verou',
      available: true,
      category: Category.CSS,
    },
    {
      id: 4,
      title: 'Mastering JavaScript Object-Oriented Programming',
      author: 'Andrea Chiarelli',
      available: true,
      category: Category.JavaScript,
    }

  ];
  return books;
}

// function getBooksPromise(): Promise<any> {
//   const p = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(getAllBooks());
//     }, 3000)
//   });

//   return p;
// }

// async function getBooks() {
//   return getBooksPromise();
// }

export function logFirstAvailable(books: Array<Book> = getAllBooks()): void {
  const numBooks: number = books.length;
  let title: string = '';

  for(const book of books) {
    if(book.available) {
      title = book.title;
      break;
    }
  }

  console.log(`Total books ${numBooks}`);
  console.log(`First available book title: ${title}`);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
  const books = getAllBooks();
  const titles: string[] = [];

  for(const book of books) {
    if(book.category === category) {
      titles.push(book.title);
    }
  }

  return titles;
}

export function logBookTitles(titles: string[]): void {
  for(const title of titles) {
    console.log(title);
  }
}

export function getBookByID(id: number): Book | undefined {
  const books = getAllBooks();
  return books.find(book => book.id === id);
}

export function createCustomerID(name: string, id: number): string {
  return `${name}${id}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
  console.log(`Customer name: ${name}`);

  if(age) {
    console.log(`Customer age: ${age}`);
  }

  if(city) {
    console.log(`Customer city: ${city}`);
  }
}

export function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
  console.log(`Customer: ${customer}`);

  const titles = bookIDs
    .map((id: number):Book => getBookByID(id))
    .filter((book: Book): boolean => book.available)
    .map(book => book.title);

  return titles;
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(property: string | boolean): string[] {
  const books = getAllBooks();

  if(typeof property === 'string') {
    return books
      .filter(book => book.author === property)
      .map(book => book.title);
  }

  if(typeof property === 'boolean') {
    return books
      .filter(book => book.available === property)
      .map(book => book.title);
  }
}

export function printBook(book: Book): void {
  console.log(`${book.title} by ${book.author}`);
}

export function getBooksByCategory(
  category: Category,
  callback: LibMgrCallback
): void {

  setTimeout(() => {
    try {
      const titles: string[] = getBookTitlesByCategory(category);
      
      if(titles.length > 0) {
        callback(null, titles);
      } else {
        throw new Error('No Books Found');
      }
    } catch(err) {
      callback(err, null);
    }
  }, 2000)
}

export function logCategorySearch(err: Error, titles: string[]): void {
  if(err) {
    console.log(`Error message: ${err.message}`);
  } else {
    console.log(`Book Titles:`, titles);
  }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
  const p: Promise<string[]> = new Promise((resolve, reject) => {
    setTimeout(() => {
        const titles: string[] = getBookTitlesByCategory(category);
        
        if(titles.length > 0) {
          resolve(titles);
        } else {
          reject('No Books Found');
        }
    }, 2000);
  });
  
  return p;
}

export async function logSearchResults(category: Category) {
  let foundBooks = await getBooksByCategoryPromise(category);
  console.log(foundBooks);
}
