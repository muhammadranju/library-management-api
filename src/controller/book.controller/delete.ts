import Book from "../../models/Book.model/Book.model";
import { Request, Response } from "express";

const deleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    await book.deleteOne();
    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: null,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default deleteBook;
