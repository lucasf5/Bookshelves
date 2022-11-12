import mongoose, { model, models } from "mongoose";
import { IBook } from "../Interfaces/book.interface";

class BookModel {
    private schema: mongoose.Schema;
    private model: mongoose.Model<IBook>;

    constructor() {
        this.schema = new mongoose.Schema({
            id: { type: String, required: true },
            title: String,
            isbn: String,
            pageCount: Number,
            publishedDate: Date,
            thumbnailUrl: String,
            shortDescription: String,
            longDescription: String,
            status: String,
            authors: [String],
            categories: [String],
        });

        this.model = models.Book || model("books", this.schema);
    }

    public async find(): Promise<IBook[]> {
        return this.model.find();
    }
}

export default new BookModel();
