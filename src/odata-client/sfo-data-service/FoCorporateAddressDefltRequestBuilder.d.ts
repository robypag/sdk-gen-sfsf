import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoCorporateAddressDeflt } from './FoCorporateAddressDeflt';
/**
 * Request builder class for operations supported on the [[FoCorporateAddressDeflt]] entity.
 */
export declare class FoCorporateAddressDefltRequestBuilder extends RequestBuilder<FoCorporateAddressDeflt> {
    /**
     * Returns a request builder for retrieving one `FoCorporateAddressDeflt` entity based on its keys.
     * @param addressId Key property. See [[FoCorporateAddressDeflt.addressId]].
     * @returns A request builder for creating requests to retrieve one `FoCorporateAddressDeflt` entity based on its keys.
     */
    getByKey(addressId: BigNumber): GetByKeyRequestBuilder<FoCorporateAddressDeflt>;
    /**
     * Returns a request builder for querying all `FoCorporateAddressDeflt` entities.
     * @returns A request builder for creating requests to retrieve all `FoCorporateAddressDeflt` entities.
     */
    getAll(): GetAllRequestBuilder<FoCorporateAddressDeflt>;
}
//# sourceMappingURL=FoCorporateAddressDefltRequestBuilder.d.ts.map