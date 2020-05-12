import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { UpsertResult } from './UpsertResult';
/**
 * Request builder class for operations supported on the [[UpsertResult]] entity.
 */
export declare class UpsertResultRequestBuilder extends RequestBuilder<UpsertResult> {
    /**
     * Returns a request builder for retrieving one `UpsertResult` entity based on its keys.
     * @param key Key property. See [[UpsertResult.key]].
     * @returns A request builder for creating requests to retrieve one `UpsertResult` entity based on its keys.
     */
    getByKey(key: string): GetByKeyRequestBuilder<UpsertResult>;
    /**
     * Returns a request builder for querying all `UpsertResult` entities.
     * @returns A request builder for creating requests to retrieve all `UpsertResult` entities.
     */
    getAll(): GetAllRequestBuilder<UpsertResult>;
    /**
     * Returns a request builder for creating a `UpsertResult` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `UpsertResult`.
     */
    create(entity: UpsertResult): CreateRequestBuilder<UpsertResult>;
    /**
     * Returns a request builder for updating an entity of type `UpsertResult`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `UpsertResult`.
     */
    update(entity: UpsertResult): UpdateRequestBuilder<UpsertResult>;
    /**
     * Returns a request builder for deleting an entity of type `UpsertResult`.
     * @param key Key property. See [[UpsertResult.key]].
     * @returns A request builder for creating requests that delete an entity of type `UpsertResult`.
     */
    delete(key: string): DeleteRequestBuilder<UpsertResult>;
    /**
     * Returns a request builder for deleting an entity of type `UpsertResult`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `UpsertResult` by taking the entity as a parameter.
     */
    delete(entity: UpsertResult): DeleteRequestBuilder<UpsertResult>;
}
//# sourceMappingURL=UpsertResultRequestBuilder.d.ts.map