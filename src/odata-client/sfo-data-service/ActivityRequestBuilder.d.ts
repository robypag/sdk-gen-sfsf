import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Activity } from './Activity';
/**
 * Request builder class for operations supported on the [[Activity]] entity.
 */
export declare class ActivityRequestBuilder extends RequestBuilder<Activity> {
    /**
     * Returns a request builder for retrieving one `Activity` entity based on its keys.
     * @param activityId Key property. See [[Activity.activityId]].
     * @returns A request builder for creating requests to retrieve one `Activity` entity based on its keys.
     */
    getByKey(activityId: BigNumber): GetByKeyRequestBuilder<Activity>;
    /**
     * Returns a request builder for querying all `Activity` entities.
     * @returns A request builder for creating requests to retrieve all `Activity` entities.
     */
    getAll(): GetAllRequestBuilder<Activity>;
    /**
     * Returns a request builder for creating a `Activity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Activity`.
     */
    create(entity: Activity): CreateRequestBuilder<Activity>;
    /**
     * Returns a request builder for updating an entity of type `Activity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Activity`.
     */
    update(entity: Activity): UpdateRequestBuilder<Activity>;
    /**
     * Returns a request builder for deleting an entity of type `Activity`.
     * @param activityId Key property. See [[Activity.activityId]].
     * @returns A request builder for creating requests that delete an entity of type `Activity`.
     */
    delete(activityId: BigNumber): DeleteRequestBuilder<Activity>;
    /**
     * Returns a request builder for deleting an entity of type `Activity`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Activity` by taking the entity as a parameter.
     */
    delete(entity: Activity): DeleteRequestBuilder<Activity>;
}
//# sourceMappingURL=ActivityRequestBuilder.d.ts.map