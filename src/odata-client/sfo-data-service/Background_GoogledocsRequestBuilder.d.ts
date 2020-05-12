import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Background_Googledocs } from './Background_Googledocs';
/**
 * Request builder class for operations supported on the [[Background_Googledocs]] entity.
 */
export declare class Background_GoogledocsRequestBuilder extends RequestBuilder<Background_Googledocs> {
    /**
     * Returns a request builder for retrieving one `Background_Googledocs` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_Googledocs.backgroundElementId]].
     * @param userId Key property. See [[Background_Googledocs.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_Googledocs` entity based on its keys.
     */
    getByKey(backgroundElementId: BigNumber, userId: string): GetByKeyRequestBuilder<Background_Googledocs>;
    /**
     * Returns a request builder for querying all `Background_Googledocs` entities.
     * @returns A request builder for creating requests to retrieve all `Background_Googledocs` entities.
     */
    getAll(): GetAllRequestBuilder<Background_Googledocs>;
    /**
     * Returns a request builder for creating a `Background_Googledocs` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_Googledocs`.
     */
    create(entity: Background_Googledocs): CreateRequestBuilder<Background_Googledocs>;
    /**
     * Returns a request builder for updating an entity of type `Background_Googledocs`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_Googledocs`.
     */
    update(entity: Background_Googledocs): UpdateRequestBuilder<Background_Googledocs>;
    /**
     * Returns a request builder for deleting an entity of type `Background_Googledocs`.
     * @param backgroundElementId Key property. See [[Background_Googledocs.backgroundElementId]].
     * @param userId Key property. See [[Background_Googledocs.userId]].
     * @returns A request builder for creating requests that delete an entity of type `Background_Googledocs`.
     */
    delete(backgroundElementId: BigNumber, userId: string): DeleteRequestBuilder<Background_Googledocs>;
    /**
     * Returns a request builder for deleting an entity of type `Background_Googledocs`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Background_Googledocs` by taking the entity as a parameter.
     */
    delete(entity: Background_Googledocs): DeleteRequestBuilder<Background_Googledocs>;
}
//# sourceMappingURL=Background_GoogledocsRequestBuilder.d.ts.map