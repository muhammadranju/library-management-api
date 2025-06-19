import { Request, Response } from "express";
import Borrow from "../../models/Borrow.model/Borrow.model";

const findAllBorrows = async (req: Request, res: Response) => {
  try {
    const borrows = await Borrow.find();
    res.status(200).json({
      success: true,
      message: "Borrows retrieved successfully",
      data: borrows,
    });
  } catch (error) {
    res.status(500).json({
      message: "Borrows retrieval failed",
      success: false,
      error: error,
    });
  }
};

export default findAllBorrows;
