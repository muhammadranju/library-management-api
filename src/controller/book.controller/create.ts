import Book from "../../models/Book.model/Book.model";

import { Request, Response } from "express";
const createBook = async (req: Request, res: Response) => {
  try {
    const { title, author, isbn, price, description, imageUrl } = req.body;
    const book = new Book({
      title,
      author,
      isbn,
      price,
      description,
      imageUrl,
    });
    await book.save();
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: book,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default createBook;
