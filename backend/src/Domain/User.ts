class UserDomain {
  private name: string;
  private email: string;
  private password: string;

  constructor(
    name: string,
    email: string,
    password: string
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string): void {
    this.email = email;
  }
}

export default UserDomain;