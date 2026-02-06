const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring

const book = getBook(2);
book;
// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

const newGenres = ["epic fantasy", ...genres];
newGenres;

const updateBook = {
  ...book,

  //adicionando uma nova propriedade
  moviePublicationDate: "2001-12-19",
  // sobrescrevendo uma propriedade existente.
  pages: 1210,
};
updateBook;

//vamos substituir a publicationDate.Split em uma função menor
// function getYear(str) {
//   return str.split("-")[0];
// }

const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

const summary = `${title}, tem ${pages}-paginas livro comprido, foi escrito por ${author} e publicado em ${getYear(publicationDate).split("-")[0]}. O livro tem ${hasMovieAdaptation ? "" : "não tem"} adaptação para filme`;
summary;

const pagesRange = pages > 1000 ? "mais que 1000" : "menos que 1000";
pagesRange;
console.log(`O livre tem ${pagesRange} pages`);

//vamos ver alguns exemplos de &&

// o 'and' que é o mesmo q && ele sempre le a segunda linha e ignora a primeira, caso a primeira seja verdadeira
// o  'and' que é o mesmo q && ele sempre le somente a primeira linha, caso ela seja falsa.
console.log(true && "Some string");
console.log(false && "Some string");
console.log(hasMovieAdaptation && "This book has a movie");

//falsy: 0, '', null, undefined (sao os valores falsos que são chamados de "falsy")
//esses valores são definidos como "falsos pelo js, exemplo abaixo:"
console.log("jonas" && "Some string");
console.log(0 && "Some string");

//agora vamos ver o 'diferente de'||
// quando o verdadeiro é na frente ele trás o primeiro
//quando o falso é na frente ele trás o segundo

console.log(true || "Some string");
console.log(false || "Some string");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.reviewsCount || "NOT TRANSLATED";
spanishTranslation;

//aqui temos um problema por conta dos "falsys", o valor retornou 0 em relacao a conta do 'reviewsCount' ele trás 0, e o certo era trazer '0'
// e tem uma forma de como contornar essa situação, que é com o '??' ele é como se fosse o if e else
console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || "no data";
countWrong;

//como aqui podemos ver o resultado trazendo 0, ao inves de no data
const count = book.reviews.librarything.reviewsCount ?? "no data";
count;
