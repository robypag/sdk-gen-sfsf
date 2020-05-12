import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder } from '@sap-cloud-sdk/core';
import { ExtAddressInfo } from './ExtAddressInfo';
/**
 * Request builder class for operations supported on the [[ExtAddressInfo]] entity.
 */
export declare class ExtAddressInfoRequestBuilder extends RequestBuilder<ExtAddressInfo> {
    /**
     * Returns a request builder for retrieving one `ExtAddressInfo` entity based on its keys.
     * @param addressId Key property. See [[ExtAddressInfo.addressId]].
     * @returns A request builder for creating requests to retrieve one `ExtAddressInfo` entity based on its keys.
     */
    getByKey(addressId: BigNumber): GetByKeyRequestBuilder<ExtAddressInfo>;
    /**
     * Returns a request builder for querying all `ExtAddressInfo` entities.
     * @returns A request builder for creating requests to retrieve all `ExtAddressInfo` entities.
     */
    getAll(): GetAllRequestBuilder<ExtAddressInfo>;
    /**
     * Returns a request builder for creating a `ExtAddressInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExtAddressInfo`.
     */
    create(entity: ExtAddressInfo): CreateRequestBuilder<ExtAddressInfo>;
}
//# sourceMappingURL=ExtAddressInfoRequestBuilder.d.ts.map