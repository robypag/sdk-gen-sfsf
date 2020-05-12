import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Background_Community } from './Background_Community';
/**
 * Request builder class for operations supported on the [[Background_Community]] entity.
 */
export declare class Background_CommunityRequestBuilder extends RequestBuilder<Background_Community> {
    /**
     * Returns a request builder for retrieving one `Background_Community` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_Community.backgroundElementId]].
     * @param userId Key property. See [[Background_Community.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_Community` entity based on its keys.
     */
    getByKey(backgroundElementId: BigNumber, userId: string): GetByKeyRequestBuilder<Background_Community>;
    /**
     * Returns a request builder for querying all `Background_Community` entities.
     * @returns A request builder for creating requests to retrieve all `Background_Community` entities.
     */
    getAll(): GetAllRequestBuilder<Background_Community>;
    /**
     * Returns a request builder for creating a `Background_Community` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_Community`.
     */
    create(entity: Background_Community): CreateRequestBuilder<Background_Community>;
    /**
     * Returns a request builder for updating an entity of type `Background_Community`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_Community`.
     */
    update(entity: Background_Community): UpdateRequestBuilder<Background_Community>;
    /**
     * Returns a request builder for deleting an entity of type `Background_Community`.
     * @param backgroundElementId Key property. See [[Background_Community.backgroundElementId]].
     * @param userId Key property. See [[Background_Community.userId]].
     * @returns A request builder for creating requests that delete an entity of type `Background_Community`.
     */
    delete(backgroundElementId: BigNumber, userId: string): DeleteRequestBuilder<Background_Community>;
    /**
     * Returns a request builder for deleting an entity of type `Background_Community`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Background_Community` by taking the entity as a parameter.
     */
    delete(entity: Background_Community): DeleteRequestBuilder<Background_Community>;
}
//# sourceMappingURL=Background_CommunityRequestBuilder.d.ts.map