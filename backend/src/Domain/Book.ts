class Book {
  private id: string;
  private title: string;
  private isbn: string;
  private pageCount: number;
  private publishedDate: Date;
  private thumbnailUrl: string;
  private shortDescription: string;
  private longDescription: string;
  private status: string;
  private authors: string[];
  private categories: string[];

  constructor(
    id: string | undefined,
    title: string,
    isbn: string,
    pageCount: number,
    publishedDate: Date,
    thumbnailUrl: string,
    shortDescription: string,
    longDescription: string,
    status: string,
    authors: string[],
    categories: string[]
  ) {
    this.id = id || "";
    this.title = title;
    this.isbn = isbn;
    this.pageCount = pageCount;
    this.publishedDate = publishedDate;
    this.thumbnailUrl = thumbnailUrl;
    this.shortDescription = shortDescription;
    this.longDescription = longDescription;
    this.status = status;
    this.authors = authors;
    this.categories = categories;
  }

  public getId(): string {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getIsbn(): string {
    return this.isbn;
  }

  public getPageCount(): number {
    return this.pageCount;
  }

  public getPublishedDate(): Date {
    return this.publishedDate;
  }

  public getThumbnailUrl(): string {
    return this.thumbnailUrl;
  }

  public getShortDescription(): string {
    return this.shortDescription;
  }

  public getLongDescription(): string {
    return this.longDescription;
  }

  public getStatus(): string {
    return this.status;
  }

  public getAuthors(): string[] {
    return this.authors;
  }

  public getCategories(): string[] {
    return this.categories;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public setIsbn(isbn: string): void {
    this.isbn = isbn;
  }

  public setPageCount(pageCount: number): void {
    this.pageCount = pageCount;
  }

  public setPublishedDate(publishedDate: Date): void {
    this.publishedDate = publishedDate;
  }

  public setThumbnailUrl(thumbnailUrl: string): void {
    this.thumbnailUrl = thumbnailUrl;
  }

  public setShortDescription(shortDescription: string): void {
    this.shortDescription = shortDescription;
  }

  public setLongDescription(longDescription: string): void {
    this.longDescription = longDescription;
  }

  public setStatus(status: string): void {
    this.status = status;
  }

  public setAuthors(authors: string[]): void {
    this.authors = authors;
  }

  public setCategories(categories: string[]): void {
    this.categories = categories;
  }
}

export default Book;