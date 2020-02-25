import Faker from 'faker';
Faker.locale = "ru";


export default class FakeApiService {


    _BooksResponse(limit) {
        let books = []

        for (let i = 0; i < limit; i++) {
            books.push({
                id: i,
                filename: 'Алиса в стране диплом',
                date: '2019-11-30',
                current: 1,
                count: 10,
                page_size: 2
            })
        }

        return books
    }

    _PageResponse(bookId, page) {
        let words = []

        for (let i = 0; i < 50; i++) {
            words.push({
                dict_id: i,
                position: 20,
                word: "Слово",
                level: 0.5,
                status: "NEW",
                translate: "перевод",
                postfix: ","
            })
        }

        return words
    }

    getBooks(limit = 10) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this._BooksResponse(limit));
            }, 700);
        });
    }

    getWords(bookId, page) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this._PageResponse(bookId, page));
            }, 700);
        });
    }


}