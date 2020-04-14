import { Document } from "mongoose";
export interface IBook {
  title: string;
  author: string;
  img?: string;
  videos?: string[];
  podcasts?: string[];
}

export interface IBookModel extends IBook, Document {}
