export interface IProduct{
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    quantity?: number;
    category: string;
}