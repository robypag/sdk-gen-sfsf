import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Background_SpecialAssign } from './Background_SpecialAssign';
/**
 * Request builder class for operations supported on the [[Background_SpecialAssign]] entity.
 */
export declare class Background_SpecialAssignRequestBuilder extends RequestBuilder<Background_SpecialAssign> {
    /**
     * Returns a request builder for retrieving one `Background_SpecialAssign` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_SpecialAssign.backgroundElementId]].
     * @param userId Key property. See [[Background_SpecialAssign.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_SpecialAssign` entity based on its keys.
     */
    getByKey(backgroundElementId: BigNumber, userId: string): GetByKeyRequestBuilder<Background_SpecialAssign>;
    /**
     * Returns a request builder for querying all `Background_SpecialAssign` entities.
     * @returns A request builder for creating requests to retrieve all `Background_SpecialAssign` entities.
     */
    getAll(): GetAllRequestBuilder<Background_SpecialAssign>;
    /**
     * Returns a request builder for creating a `Background_SpecialAssign` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_SpecialAssign`.
     */
    create(entity: Background_SpecialAssign): CreateRequestBuilder<Background_SpecialAssign>;
    /**
     * Returns a request builder for updating an entity of type `Background_SpecialAssign`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_SpecialAssign`.
     */
    update(entity: Background_SpecialAssign): UpdateRequestBuilder<Background_SpecialAssign>;
    /**
     * Returns a request builder for deleting an entity of type `Background_SpecialAssign`.
     * @param backgroundElementId Key property. See [[Background_SpecialAssign.backgroundElementId]].
     * @param userId Key property. See [[Background_SpecialAssign.userId]].
     * @returns A request builder for creating requests that delete an entity of type `Background_SpecialAssign`.
     */
    delete(backgroundElementId: BigNumber, userId: string): DeleteRequestBuilder<Background_SpecialAssign>;
    /**
     * Returns a request builder for deleting an entity of type `Background_SpecialAssign`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Background_SpecialAssign` by taking the entity as a parameter.
     */
    delete(entity: Background_SpecialAssign): DeleteRequestBuilder<Background_SpecialAssign>;
}
//# sourceMappingURL=Background_SpecialAssignRequestBuilder.d.ts.map