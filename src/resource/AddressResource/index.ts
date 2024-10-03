import { rowsStateInitializer } from "@mui/x-data-grid/internals";
import TAddress from "../../types/Address";


/**
 * 
 */
class AddressResource {
    public static index(data: any): TAddress[] {
        return data.map((address: any) => {
            return {
                id: address.id,
                road: address.road,
                neighborhood: address.neighborhood,
                number: address.number,
                complement: address.complement,
                referencePoint: address.referencePoint,
                city: {
                    id: address.cityId,
                    name: address.cityName,
                },
                customer: {
                    id: address.customerId,
                    name: address.nameCustomer,
                }
            }
        })
    }
}

export default AddressResource;