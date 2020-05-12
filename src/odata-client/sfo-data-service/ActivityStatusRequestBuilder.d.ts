import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { ActivityStatus } from './ActivityStatus';
/**
 * Request builder class for operations supported on the [[ActivityStatus]] entity.
 */
export declare class ActivityStatusRequestBuilder extends RequestBuilder<ActivityStatus> {
    /**
     * Returns a request builder for retrieving one `ActivityStatus` entity based on its keys.
     * @param activityStatusId Key property. See [[ActivityStatus.activityStatusId]].
     * @returns A request builder for creating requests to retrieve one `ActivityStatus` entity based on its keys.
     */
    getByKey(activityStatusId: string): GetByKeyRequestBuilder<ActivityStatus>;
    /**
     * Returns a request builder for querying all `ActivityStatus` entities.
     * @returns A request builder for creating requests to retrieve all `ActivityStatus` entities.
     */
    getAll(): GetAllRequestBuilder<ActivityStatus>;
    /**
     * Returns a request builder for creating a `ActivityStatus` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ActivityStatus`.
     */
    create(entity: ActivityStatus): CreateRequestBuilder<ActivityStatus>;
    /**
     * Returns a request builder for updating an entity of type `ActivityStatus`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ActivityStatus`.
     */
    update(entity: ActivityStatus): UpdateRequestBuilder<ActivityStatus>;
    /**
     * Returns a request builder for deleting an entity of type `ActivityStatus`.
     * @param activityStatusId Key property. See [[ActivityStatus.activityStatusId]].
     * @returns A request builder for creating requests that delete an entity of type `ActivityStatus`.
     */
    delete(activityStatusId: string): DeleteRequestBuilder<ActivityStatus>;
    /**
     * Returns a request builder for deleting an entity of type `ActivityStatus`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ActivityStatus` by taking the entity as a parameter.
     */
    delete(entity: ActivityStatus): DeleteRequestBuilder<ActivityStatus>;
}
//# sourceMappingURL=ActivityStatusRequestBuilder.d.ts.map