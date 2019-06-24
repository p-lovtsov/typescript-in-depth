import * as Interfaces from '../interfaces';
import { sealed, logger, writable, logParameter, logMethod, format } from '../decorators';

// @logger
@sealed('UniversityLibrarian')
class UniversityLibrarian implements Interfaces.Librarian {
  name: string;
  email: string;
  department: string;
  // addF: string;

  @logMethod
  assistCustomer(
    custName: string
  ): void {
    console.log(`${this.name} is assisting ${custName}`);
  }

  @writable(true)
  assistFaculty() {
    console.log('Assisting Faculty');
  }

  @writable(false)
  teachCommunity() {
    console.log(`Teaching Community`);
  }
}

export { UniversityLibrarian };