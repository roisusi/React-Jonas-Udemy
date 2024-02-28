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


//Code
const book = getBook(3);
book;
const {title, author, pages, publicationDate, genres, hasMovieAdaptation} = book;

//Rest Operator
const [generes1, generes2, ...others] = genres;
console.log(generes1, generes2)
console.log(others)


//Spread Operator
//add to array
const newGeneres = [...genres, "Epic Fantasy"];
const newGeneres1 = ["Epic Fantasy", ...genres];
console.log(newGeneres)
console.log(newGeneres1)
//add to object
const updatedBook = {...book, moviePublicationDate: "1996-08-01", pages: 123}; //page override
updatedBook;

//Template Literals
const summary = `Title: ${title}`
console.log(summary)

//Ternaries
const hasMovieAdaptation1 = hasMovieAdaptation ? "Yes" : "No";
const p = pages > 1000 ? "Over than 1000" : "Less than  1000";

console.log(hasMovieAdaptation1, p)

//Arrow Functions
//1. Traditional Function - Function Expression
function getYear(string) {
    return string.split("-")[0];
}

console.log(getYear(publicationDate));
//2. Arrow Function - Function Declaration
const year = string => string.split("-")[0]; //without {} - no return needed
const year2 = string => {
    return string.split("-")[0]
}; //return needed else undefined

console.log(year(publicationDate));
console.log(year2(publicationDate));


//Short-Circuiting And Logical Operators: &&, ||, ??
//&&
console.log(true && "something") //no short-circuiting
console.log(false && "something") //short-circuiting
console.log(hasMovieAdaptation1 && "something")

//falsy values: 0, false, null, undefined,"", NaN
console.log(0 && "something") //falsy values

//||
console.log(true || "something") //true
console.log(false || "something") //something

//but if we got 0 that is falsy operator but is a count meaning and not falsy value
const count = 0
console.log(count || "no count") //no count but we want 0 then we use :

//?? - nullish coalescing operator
//check if null or undefined
console.log(count ?? "no count") // => 0


//Optional Chaining - obj?.review
function getTotalReviewsCount(book) {
    const goodreads = book.reviews.goodreads.reviewsCount;
    const librarything = book.reviews.librarything?.reviewsCount ?? 0;
    //--------// if undefined make a default value with nullish coalescing operator
    return goodreads + librarything;
}


console.log(getTotalReviewsCount(book))
