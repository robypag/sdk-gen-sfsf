import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Background_Awards } from './Background_Awards';
/**
 * Request builder class for operations supported on the [[Background_Awards]] entity.
 */
export declare class Background_AwardsRequestBuilder extends RequestBuilder<Background_Awards> {
    /**
     * Returns a request builder for retrieving one `Background_Awards` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_Awards.backgroundElementId]].
     * @param userId Key property. See [[Background_Awards.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_Awards` entity based on its keys.
     */
    getByKey(backgroundElementId: BigNumber, userId: string): GetByKeyRequestBuilder<Background_Awards>;
    /**
     * Returns a request builder for querying all `Background_Awards` entities.
     * @returns A request builder for creating requests to retrieve all `Background_Awards` entities.
     */
    getAll(): GetAllRequestBuilder<Background_Awards>;
    /**
     * Returns a request builder for creating a `Background_Awards` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_Awards`.
     */
    create(entity: Background_Awards): CreateRequestBuilder<Background_Awards>;
    /**
     * Returns a request builder for updating an entity of type `Background_Awards`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_Awards`.
     */
    update(entity: Background_Awards): UpdateRequestBuilder<Background_Awards>;
    /**
     * Returns a request builder for deleting an entity of type `Background_Awards`.
     * @param backgroundElementId Key property. See [[Background_Awards.backgroundElementId]].
     * @param userId Key property. See [[Background_Awards.userId]].
     * @returns A request builder for creating requests that delete an entity of type `Background_Awards`.
     */
    delete(backgroundElementId: BigNumber, userId: string): DeleteRequestBuilder<Background_Awards>;
    /**
     * Returns a request builder for deleting an entity of type `Background_Awards`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Background_Awards` by taking the entity as a parameter.
     */
    delete(entity: Background_Awards): DeleteRequestBuilder<Background_Awards>;
}
//# sourceMappingURL=Background_AwardsRequestBuilder.d.ts.map