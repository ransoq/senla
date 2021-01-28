export default class BookstoreService {

    data = [
        { 
            id: 1, 
            title: 'Alice in wonderland', 
            author: "Lewis Carroll",
            price: 32,
            coverImg: "https://images-na.ssl-images-amazon.com/images/I/91ve5QjrJBL.jpg"
        },
        { 
            id: 2,
            title: "The Old Man and the Sea",
            author: "Ernest Hemingway",
            price: 28,
            coverImg: "https://images-na.ssl-images-amazon.com/images/I/71dUEXcxJzL.jpg"
        }
    ];

    getBooks():Promise<object> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data)
            }, 500);
        })
    }
    
}