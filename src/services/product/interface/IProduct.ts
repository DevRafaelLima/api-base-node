import { TProduct } from "../../../types/product/TProduct";


export interface IProduct {
    create(product: Omit<TProduct, '_id'>): Promise<void>;
}