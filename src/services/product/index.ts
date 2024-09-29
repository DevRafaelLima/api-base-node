import { ProductRepository } from "../../repository/ProductRepository";
import { TProduct } from "../../types/product/TProduct";
import { IProduct } from "./interface/IProduct";


class ProductService implements IProduct {
    
    async create(product: Omit<TProduct, '_id'>): Promise<void> {
        await ProductRepository.create(product);
    }
}

export default ProductService;