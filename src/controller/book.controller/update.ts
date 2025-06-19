import { Request, Response } from "express";
import Book from "../../models/Book.model/Book.model";

const updateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, author, isbn, price, description, imageUrl } = req.body;
    const book = await Book.findByIdAndUpdate(id, {
      title,
      author,
      isbn,
      price,
      description,
      imageUrl,
    });
    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: book,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Book update failed", success: false, error: error });
  }
};

export default updateBook;
