import BookModel from "../models/bookModel";
import { IBook, IBookModel } from "../types/IBook";

export default class BookService {
  static async addBook(myBook: IBook): Promise<{ _id: string }> {
    const book = new BookModel();
    book.title = myBook.title;
    book.author = myBook.author;
    book.img = myBook.img;
    book.videos = myBook.videos || [];
    book.podcasts = myBook.podcasts || [];
    const bookBdd = await book.save();
    //@TODO add a builder
    return { _id: bookBdd._id };
  }
  static async addVideoBook(
    _id: string,
    url: string
  ): Promise<{ url: string }> {
    await BookModel.update({ _id }, { $push: { videos: url } });
    return { url };
  }
  static async addPodcastBook(
    _id: string,
    url: string
  ): Promise<{ url: string }> {
    await BookModel.update({ _id }, { $push: { videos: url } });
    return { url };
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
