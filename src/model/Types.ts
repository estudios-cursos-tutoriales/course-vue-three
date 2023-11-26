export interface Product {
    name: string;
    price: number;
    id: number;
    image: string;
}

export interface CartDetail {
    product: Product;
    quantity: number;
}

export interface Category {
    id: number;
    name: string;
}

/*
    https://picsum.photos/id/96/600/400

*/