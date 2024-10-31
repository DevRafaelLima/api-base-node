import TAddress from "../../types/Address";
import TCustomer from "../../types/Customer";
/**
 * @class CustomerResource
 * @description Classe para retornar os dados do cliente no formato correto
 * 
 */
class CustomerResource {


  private static parseToAddress(data: any): TAddress {
    return {
      id: data.id_city,
      city: data.city.name,
      customer: data.id,
      road: data.road,
      neighborhood: data.neighborhood,
      number: data.number,
      complement: data.complement,
      referencePoint: data.reference_point
    }
  }
  /**
   * @param data 
   * @returns {TCustomer}
   */
  public static index(data: any): TCustomer[] {
    
    const response = data.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        email: item.email,
        phone: item.phone,
        whatsapp: item.whatsapp == 1 ? true : false,
        dob: item.dob,
        address: item.address
      } as TCustomer;
    })
    return response;
  }


}

export default CustomerResource;