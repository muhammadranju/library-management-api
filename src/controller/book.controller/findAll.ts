import Book from "../../models/Book.model/Book.model";
import { Request, Response } from "express";

const findAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      success: true,
      message: "Books retrieved successfully",
      data: books,
    });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Books retrieval failed",
        success: false,
        error: error,
      });
  }
};

export default findAllBooks;
