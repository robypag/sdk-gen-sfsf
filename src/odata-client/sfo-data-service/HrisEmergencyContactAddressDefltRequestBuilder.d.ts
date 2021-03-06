import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { HrisEmergencyContactAddressDeflt } from './HrisEmergencyContactAddressDeflt';
/**
 * Request builder class for operations supported on the [[HrisEmergencyContactAddressDeflt]] entity.
 */
export declare class HrisEmergencyContactAddressDefltRequestBuilder extends RequestBuilder<HrisEmergencyContactAddressDeflt> {
    /**
     * Returns a request builder for retrieving one `HrisEmergencyContactAddressDeflt` entity based on its keys.
     * @param addressId Key property. See [[HrisEmergencyContactAddressDeflt.addressId]].
     * @returns A request builder for creating requests to retrieve one `HrisEmergencyContactAddressDeflt` entity based on its keys.
     */
    getByKey(addressId: BigNumber): GetByKeyRequestBuilder<HrisEmergencyContactAddressDeflt>;
    /**
     * Returns a request builder for querying all `HrisEmergencyContactAddressDeflt` entities.
     * @returns A request builder for creating requests to retrieve all `HrisEmergencyContactAddressDeflt` entities.
     */
    getAll(): GetAllRequestBuilder<HrisEmergencyContactAddressDeflt>;
}
//# sourceMappingURL=HrisEmergencyContactAddressDefltRequestBuilder.d.ts.map