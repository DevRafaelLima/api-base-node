import TCustomer from "../../types/Customer";
/**
 * @class CustomerResource
 * @description Classe para retornar os dados do cliente no formato correto
 * 
 */
class CustomerResource {

    /**
     * @param data 
     * @returns {TCustomer}
     */
   public static index(data: any): TCustomer {
    return {} as TCustomer;
  }
}

export default CustomerResource;