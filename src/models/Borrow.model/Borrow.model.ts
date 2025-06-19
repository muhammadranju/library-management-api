import { Schema, model } from "mongoose";
import { IBorrow } from "../../interface/interface";

const BorrowSchema = new Schema<IBorrow>(
  {
    book: {
      type: Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, "Quantity must be at least 1"],
    },
    dueDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Borrow = model<IBorrow>("Borrow", BorrowSchema);

export default Borrow;
