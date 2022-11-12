import BookDomain from "../Domain/Book";
import BookModel from "../Models/Book";
import { IBook } from "../Interfaces/book.interface";

class BookService {
  private createBookDomain(book: IBook | null): BookDomain | null {
    if (book) {
      return new BookDomain(
        book.id,
        book.title,
        book.isbn,
        book.pageCount,
        book.publishedDate,
        book.thumbnailUrl,
        book.shortDescription,
        book.longDescription,
        book.status,
        book.authors,
        book.categories
      );
    }
    return null;
  }

  public async getBooks(): Promise<IBook[]> {
    const books = await BookModel.find();
    return books;
  }
}

export default new BookService();