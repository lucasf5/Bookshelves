import { IUser } from "../Interfaces/user.interface";
import UserModel from "../Models/User";
import UserDomain from "../Domain/User";

class UserService {

  private createUserDomain(User: IUser | null): UserDomain | null {
    if (User) {
      return new UserDomain(User.name, User.email, User.password);
    }
    return null;
  }

  public async createUser(user: IUser): Promise<IUser> {
    const newUser = await UserModel.create(user);
    return newUser;
  }

  public async findUserByEmail(user: Omit<IUser, 'name'>) {
    const { email } = user;
    const User = await UserModel.findOne(email);
    return User;
  }
}

export default new UserService();
