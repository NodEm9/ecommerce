export default interface NewestProducts {
    _id: string;
    name: string;
    price: number;
    slug: string;
    imageUrl: string;
    categoryName: string;
}

export default interface Products {
    _id: string;
    name: string;
    price: number;
    slug: string;
    imageUrl: string;
    description: string;
    categoryName: string;
    price_id: string;
}
export default interface ProductDetail {
    _id: string;
    name: string;
    price: number;
    slug: string;
    images: any;
    description: string;
    categoryName: string;
}