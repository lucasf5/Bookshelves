import mongoose, { model, models } from "mongoose";
import { IUser } from "../Interfaces/user.interface";
import bcrypt from "bcrypt";

class UserModel {
  private schema: mongoose.Schema;
  private model: mongoose.Model<IUser>;

  constructor() {
    this.schema = new mongoose.Schema({
      name: String,
      email: {
        type: String,
        unique: true,
      },
      password: {
        type: String,
      },
    });

    this.schema.pre("save", async function (next) {
      if (this.isNew || this.isModified("password")) {
        bcrypt.hash(this.password, 10, (err, hashedPassword) => {
          if (err) {
            next(err);
          } else {
            this.password = hashedPassword;
            next();
          }
        });
      }
    });

    this.schema.methods.comparePassword = function (password: any, callback: any) {
      bcrypt.compare(password, this.password, function (err, isMatch) {
        if (err) {
          callback(err);
        } else {
          callback(null, isMatch);
        }
      });
    };

    this.model = models.Book || model("users", this.schema);
  }

  public async create(user: IUser): Promise<IUser> {
    return this.model.create(user);
  }

  public async findOne(email: string): Promise<IUser | null> {
    return this.model.findOne({ email });
  }
}

export default new UserModel();
