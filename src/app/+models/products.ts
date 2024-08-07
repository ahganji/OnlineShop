export interface Product {
    pictureURL:string;
    name:string;
    group:string;
    stockCount:number;
    starCount?:number;
    price:number;
    discountPct?:number;
    spec:string;
}