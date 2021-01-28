import React from "react";
import { BookstoreServiceConsumer } from "../bookstore-service-context/bookstore-service-context";

const withBookstoreService = () => <P extends object>(Wrapped: React.ComponentType<P>): React.FC<P> => {

    return (props:P) => {
        return (
            <BookstoreServiceConsumer>
                {
                    (bookstoreService: {}) => {
                        return (
                            <Wrapped {...props as P} bookstoreService={bookstoreService}/>
                        )
                    }
                }
            </BookstoreServiceConsumer>
        )
    }
}

export default withBookstoreService;