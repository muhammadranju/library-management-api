import { Request, Response } from "express";
import Borrow from "../../models/Borrow.model/Borrow.model";

const createBorrow = async (req: Request, res: Response): Promise<void> => {
  try {
    const { book, quantity, dueDate } = req.body;

    const borrow = new Borrow({
      book,
      quantity,
      dueDate,
    });

    await borrow.save();

    res.status(201).json({
      success: true,
      message: "Borrow created successfully",
      data: borrow,
    });
  } catch (error) {
    res.status(500).json({
      message: "Borrow creation failed",
      success: false,
      error,
    });
  }
};

export default createBorrow;
