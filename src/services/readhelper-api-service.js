import axios from 'axios'

export default class ReadhelperApiService {

    apiBase = 'http://readhelper.ml:8000';
    //apiBase = 'http://127.0.0.1:8000';



    getBooks() {
        return new Promise((resolve, reject) => {
            axios.get(this.apiBase + `/api/v1/books/`)
                .then(res => {
                    resolve(res.data.books);
                })
                .catch(error => { reject(error) }
                )
        })
    }

    getWords(bookId, page) {
        return new Promise((resolve, reject) => {
            const furl = this.apiBase + '/api/v1/books/page/?book=' + bookId + '&page=' + (page - 1)
            axios.get(furl)
                .then(res => {
                    resolve(res.data.words);
                })
                .catch(error => { reject(error) }
                )
        })
    }

    addBook(file) {
        return new Promise((resolve, reject) => {
            const furl = this.apiBase + '/api/v1/books/upload'
            axios.post(furl)
                .then(res => {
                })
                .catch(error => { reject(error) }
                )
        })
    }

    login(data) {
        const qs = require('querystring')
        const requestBody = {
            username: data.username,
            password: data.password
        }

        return new Promise((resolve, reject) => {
            const furl = this.apiBase + '/api/v1/auth/token/login/';

            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }

            axios.post(furl, qs.stringify(requestBody), config)
                .then((res) => {
                    resolve(res.data);
                })
                .catch(error => { reject(error) })
        })
    }



}