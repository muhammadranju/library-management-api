import { Request, Response } from "express";
import Book from "../../models/Book.model/Book.model";
const findSingleBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res
      .status(200)
      .json({
        success: true,
        message: "Book retrieved successfully",
        data: book,
      });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default findSingleBook;
