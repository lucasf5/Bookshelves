import Book from 'components/Book'
import React, { useEffect, useState } from 'react'
import { getTodos } from 'api/requests'

interface IBook {
  id?: string
  title: string
  isbn: string
  pageCount: number
  publishedDate: Date
  thumbnailUrl: string
  shortDescription: string
  longDescription: string
  status: string
  authors: string[]
  categories: string[]
}

const Books = () => {
  const [books, setBooks] = useState([])
  useEffect(() => {
    getTodos().then((response) => {
      console.log(response)
      setBooks(response.data)
    })
  }, [])
  return (
    <div>
      {books.map((book: IBook) => (
        <Book
          key={`${book.isbn}.${book.title}.${book.thumbnailUrl}`}
          book={book}
        />
      ))}
    </div>
  )
}

export default Books
