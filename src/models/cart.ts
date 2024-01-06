export interface Cart{
    id:number;
    userId:number;
    items:CartItem[]
}

export interface CartItem{
    cartId:number;
    productId:number;
    productName:string;
    count:number;
    price:number
}
