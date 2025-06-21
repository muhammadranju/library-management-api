import Book from "../../models/Book.model/Book.model";
import { Request, Response } from "express";

const findAllBooks = async (req: Request, res: Response) => {
  try {
    const {
      filter,
      sortBy = "createdAt",
      sort = "desc",
      limit = 10,
    } = req.query;

    const query: Record<string, any> = {};
    if (filter) {
      query.genre = filter;
    }

    const sortField = sortBy as string;
    const sortOrder = sort === "desc" ? -1 : 1;
    const limitNumber = parseInt(limit as string, 10); // radix 10 for clarity

    const books = await Book.find(query)
      .sort({ [sortField]: sortOrder })
      .limit(limitNumber);

    res.status(200).json({
      success: true,
      message: "Books retrieved successfully",
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      message: "Books retrieval failed",
      success: false,
      error: error,
    });
  }
};

export default findAllBooks;
