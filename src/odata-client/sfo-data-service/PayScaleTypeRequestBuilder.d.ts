import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PayScaleType } from './PayScaleType';
/**
 * Request builder class for operations supported on the [[PayScaleType]] entity.
 */
export declare class PayScaleTypeRequestBuilder extends RequestBuilder<PayScaleType> {
    /**
     * Returns a request builder for retrieving one `PayScaleType` entity based on its keys.
     * @param code Key property. See [[PayScaleType.code]].
     * @returns A request builder for creating requests to retrieve one `PayScaleType` entity based on its keys.
     */
    getByKey(code: string): GetByKeyRequestBuilder<PayScaleType>;
    /**
     * Returns a request builder for querying all `PayScaleType` entities.
     * @returns A request builder for creating requests to retrieve all `PayScaleType` entities.
     */
    getAll(): GetAllRequestBuilder<PayScaleType>;
    /**
     * Returns a request builder for creating a `PayScaleType` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PayScaleType`.
     */
    create(entity: PayScaleType): CreateRequestBuilder<PayScaleType>;
    /**
     * Returns a request builder for updating an entity of type `PayScaleType`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PayScaleType`.
     */
    update(entity: PayScaleType): UpdateRequestBuilder<PayScaleType>;
    /**
     * Returns a request builder for deleting an entity of type `PayScaleType`.
     * @param code Key property. See [[PayScaleType.code]].
     * @returns A request builder for creating requests that delete an entity of type `PayScaleType`.
     */
    delete(code: string): DeleteRequestBuilder<PayScaleType>;
    /**
     * Returns a request builder for deleting an entity of type `PayScaleType`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PayScaleType` by taking the entity as a parameter.
     */
    delete(entity: PayScaleType): DeleteRequestBuilder<PayScaleType>;
}
//# sourceMappingURL=PayScaleTypeRequestBuilder.d.ts.map