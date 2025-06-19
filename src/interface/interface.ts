import { Document, Types } from "mongoose";

export interface IBook extends Document {
  title: string;
  author: string;
  genre:
    | "FICTION"
    | "NON_FICTION"
    | "SCIENCE"
    | "HISTORY"
    | "BIOGRAPHY"
    | "FANTASY";
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IBorrow extends Document {
  book: Types.ObjectId; // or IBook if populated
  quantity: number;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
