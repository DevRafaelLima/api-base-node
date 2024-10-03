import TPaymentMethod from '../../../types/paymentMethod/TPayment';

export interface IPaymentMethodService {
    create(paymentMethod: Omit<TPaymentMethod, 'id'>): Promise<void>;
    // update(paymentMethod: TPaymentMethod): Promise<void>;
    // delete(id: number): Promise<void>;
    // getById(id: number): Promise<TPaymentMethod>;
    // getAll(): Promise<TPaymentMethod[]>;
}