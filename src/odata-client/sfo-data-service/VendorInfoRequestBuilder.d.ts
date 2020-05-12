import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { VendorInfo } from './VendorInfo';
/**
 * Request builder class for operations supported on the [[VendorInfo]] entity.
 */
export declare class VendorInfoRequestBuilder extends RequestBuilder<VendorInfo> {
    /**
     * Returns a request builder for retrieving one `VendorInfo` entity based on its keys.
     * @param effectiveStartDate Key property. See [[VendorInfo.effectiveStartDate]].
     * @param vendorCode Key property. See [[VendorInfo.vendorCode]].
     * @returns A request builder for creating requests to retrieve one `VendorInfo` entity based on its keys.
     */
    getByKey(effectiveStartDate: Moment, vendorCode: string): GetByKeyRequestBuilder<VendorInfo>;
    /**
     * Returns a request builder for querying all `VendorInfo` entities.
     * @returns A request builder for creating requests to retrieve all `VendorInfo` entities.
     */
    getAll(): GetAllRequestBuilder<VendorInfo>;
    /**
     * Returns a request builder for creating a `VendorInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `VendorInfo`.
     */
    create(entity: VendorInfo): CreateRequestBuilder<VendorInfo>;
    /**
     * Returns a request builder for updating an entity of type `VendorInfo`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `VendorInfo`.
     */
    update(entity: VendorInfo): UpdateRequestBuilder<VendorInfo>;
    /**
     * Returns a request builder for deleting an entity of type `VendorInfo`.
     * @param effectiveStartDate Key property. See [[VendorInfo.effectiveStartDate]].
     * @param vendorCode Key property. See [[VendorInfo.vendorCode]].
     * @returns A request builder for creating requests that delete an entity of type `VendorInfo`.
     */
    delete(effectiveStartDate: Moment, vendorCode: string): DeleteRequestBuilder<VendorInfo>;
    /**
     * Returns a request builder for deleting an entity of type `VendorInfo`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `VendorInfo` by taking the entity as a parameter.
     */
    delete(entity: VendorInfo): DeleteRequestBuilder<VendorInfo>;
}
//# sourceMappingURL=VendorInfoRequestBuilder.d.ts.map