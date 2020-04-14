import BookModel from "../models/bookModel";
import { IBook, IBookModel } from "../types/IBook";
export default class BookService {
  static bookModel: IBookModel = new BookModel();

  static async addBooks(myBook: IBook): Promise<void> {
    const book = this.bookModel;
    book.title = myBook.title;
    book.author = myBook.author;
    book.img = myBook.img;
    book.videos = myBook.videos || [];
    book.podcasts = myBook.podcasts || [];
    await book.save();
  }
  static async getBooks(): Promise<IBook[]> {
    return await BookModel.find({});
  }
  static async deleteBook(_id: string): Promise<boolean> {
    try {
      await BookModel.deleteOne({ _id });
      return true;
    } catch (e) {
      return false;
    }
  }
  static async getBookById(bookId: string): Promise<IBookModel | null> {
    return await BookModel.findById(bookId);
  }
}
