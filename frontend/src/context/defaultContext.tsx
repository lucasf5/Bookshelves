import { createContext } from "react";

// interface IBook {
//   id?: string;
//   title: string;
//   isbn: string;
//   pageCount: number;
//   publishedDate: Date;
//   thumbnailUrl: string;
//   shortDescription: string;
//   longDescription: string;
//   status: string;
//   authors: string[];
//   categories: string[];
// }

// interface IDefaultContext {
//   books: IBook[];
// }

interface IDefaultContext {
  children: React.ReactNode;
}

export const defaultContext = createContext({});

const defaultProvider = ({ children }: IDefaultContext) => {
  return (
    <defaultContext.Provider
      value={{
        books: [],
      }}
    >
      {children}
    </defaultContext.Provider>
  );
};

export default defaultProvider;
