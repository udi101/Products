import { CategoryType } from '../enums/product-type.enum';

export interface IProduct {
    productId: number;
    productName: string;
    introductionDate: Date;
    url: string;
    categoryId: CategoryType;
}
