import React, { useEffect } from "react";
import Image from "next/image";

interface IBook {
  book: {
    id?: string;
    title: string;
    isbn: string;
    pageCount: number;
    publishedDate: Date;
    thumbnailUrl: string;
    shortDescription: string;
    longDescription: string;
    status: string;
    authors: string[];
    categories: string[];
  };
}

const Book = ({ book }: IBook) => {
  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.authors}</p>
      <img src={book.thumbnailUrl} alt="" />
    </div>
  );
};

export default Book;
