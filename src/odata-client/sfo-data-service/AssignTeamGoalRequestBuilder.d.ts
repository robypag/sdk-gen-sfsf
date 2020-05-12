import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { AssignTeamGoal } from './AssignTeamGoal';
/**
 * Request builder class for operations supported on the [[AssignTeamGoal]] entity.
 */
export declare class AssignTeamGoalRequestBuilder extends RequestBuilder<AssignTeamGoal> {
    /**
     * Returns a request builder for retrieving one `AssignTeamGoal` entity based on its keys.
     * @param id Key property. See [[AssignTeamGoal.id]].
     * @returns A request builder for creating requests to retrieve one `AssignTeamGoal` entity based on its keys.
     */
    getByKey(id: BigNumber): GetByKeyRequestBuilder<AssignTeamGoal>;
    /**
     * Returns a request builder for querying all `AssignTeamGoal` entities.
     * @returns A request builder for creating requests to retrieve all `AssignTeamGoal` entities.
     */
    getAll(): GetAllRequestBuilder<AssignTeamGoal>;
    /**
     * Returns a request builder for creating a `AssignTeamGoal` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AssignTeamGoal`.
     */
    create(entity: AssignTeamGoal): CreateRequestBuilder<AssignTeamGoal>;
    /**
     * Returns a request builder for updating an entity of type `AssignTeamGoal`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AssignTeamGoal`.
     */
    update(entity: AssignTeamGoal): UpdateRequestBuilder<AssignTeamGoal>;
    /**
     * Returns a request builder for deleting an entity of type `AssignTeamGoal`.
     * @param id Key property. See [[AssignTeamGoal.id]].
     * @returns A request builder for creating requests that delete an entity of type `AssignTeamGoal`.
     */
    delete(id: BigNumber): DeleteRequestBuilder<AssignTeamGoal>;
    /**
     * Returns a request builder for deleting an entity of type `AssignTeamGoal`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `AssignTeamGoal` by taking the entity as a parameter.
     */
    delete(entity: AssignTeamGoal): DeleteRequestBuilder<AssignTeamGoal>;
}
//# sourceMappingURL=AssignTeamGoalRequestBuilder.d.ts.map