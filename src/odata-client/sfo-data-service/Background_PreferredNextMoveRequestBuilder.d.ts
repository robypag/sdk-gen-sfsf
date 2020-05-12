import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Background_PreferredNextMove } from './Background_PreferredNextMove';
/**
 * Request builder class for operations supported on the [[Background_PreferredNextMove]] entity.
 */
export declare class Background_PreferredNextMoveRequestBuilder extends RequestBuilder<Background_PreferredNextMove> {
    /**
     * Returns a request builder for retrieving one `Background_PreferredNextMove` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_PreferredNextMove.backgroundElementId]].
     * @param userId Key property. See [[Background_PreferredNextMove.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_PreferredNextMove` entity based on its keys.
     */
    getByKey(backgroundElementId: BigNumber, userId: string): GetByKeyRequestBuilder<Background_PreferredNextMove>;
    /**
     * Returns a request builder for querying all `Background_PreferredNextMove` entities.
     * @returns A request builder for creating requests to retrieve all `Background_PreferredNextMove` entities.
     */
    getAll(): GetAllRequestBuilder<Background_PreferredNextMove>;
    /**
     * Returns a request builder for creating a `Background_PreferredNextMove` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_PreferredNextMove`.
     */
    create(entity: Background_PreferredNextMove): CreateRequestBuilder<Background_PreferredNextMove>;
    /**
     * Returns a request builder for updating an entity of type `Background_PreferredNextMove`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_PreferredNextMove`.
     */
    update(entity: Background_PreferredNextMove): UpdateRequestBuilder<Background_PreferredNextMove>;
    /**
     * Returns a request builder for deleting an entity of type `Background_PreferredNextMove`.
     * @param backgroundElementId Key property. See [[Background_PreferredNextMove.backgroundElementId]].
     * @param userId Key property. See [[Background_PreferredNextMove.userId]].
     * @returns A request builder for creating requests that delete an entity of type `Background_PreferredNextMove`.
     */
    delete(backgroundElementId: BigNumber, userId: string): DeleteRequestBuilder<Background_PreferredNextMove>;
    /**
     * Returns a request builder for deleting an entity of type `Background_PreferredNextMove`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Background_PreferredNextMove` by taking the entity as a parameter.
     */
    delete(entity: Background_PreferredNextMove): DeleteRequestBuilder<Background_PreferredNextMove>;
}
//# sourceMappingURL=Background_PreferredNextMoveRequestBuilder.d.ts.map