import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { InlineResult } from './InlineResult';
/**
 * Request builder class for operations supported on the [[InlineResult]] entity.
 */
export declare class InlineResultRequestBuilder extends RequestBuilder<InlineResult> {
    /**
     * Returns a request builder for retrieving one `InlineResult` entity based on its keys.
     * @param inlineProperty Key property. See [[InlineResult.inlineProperty]].
     * @returns A request builder for creating requests to retrieve one `InlineResult` entity based on its keys.
     */
    getByKey(inlineProperty: string): GetByKeyRequestBuilder<InlineResult>;
    /**
     * Returns a request builder for querying all `InlineResult` entities.
     * @returns A request builder for creating requests to retrieve all `InlineResult` entities.
     */
    getAll(): GetAllRequestBuilder<InlineResult>;
    /**
     * Returns a request builder for creating a `InlineResult` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InlineResult`.
     */
    create(entity: InlineResult): CreateRequestBuilder<InlineResult>;
    /**
     * Returns a request builder for updating an entity of type `InlineResult`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InlineResult`.
     */
    update(entity: InlineResult): UpdateRequestBuilder<InlineResult>;
    /**
     * Returns a request builder for deleting an entity of type `InlineResult`.
     * @param inlineProperty Key property. See [[InlineResult.inlineProperty]].
     * @returns A request builder for creating requests that delete an entity of type `InlineResult`.
     */
    delete(inlineProperty: string): DeleteRequestBuilder<InlineResult>;
    /**
     * Returns a request builder for deleting an entity of type `InlineResult`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `InlineResult` by taking the entity as a parameter.
     */
    delete(entity: InlineResult): DeleteRequestBuilder<InlineResult>;
}
//# sourceMappingURL=InlineResultRequestBuilder.d.ts.map