import { Customer } from "./customer";
import { Measurement } from "./measurement";

export interface Dress {
    dressId: number;
    dressTypeId: number;
    customerId: number;
    orderDate: string;
    deliveryDate?: string;
    deliveryStatus?: string;
    numberOfDress?: number;
    price?: number;
    discountedPrice: number;
    paymentStatus?: string;
    createdAt: string;
    updatedAt?: string;
    comment?: string;
    dressImage?: string;
    customer?: Customer;
    measurements?: Measurement[];
}