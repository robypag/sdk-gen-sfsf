import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { ActivityFeedback } from './ActivityFeedback';
/**
 * Request builder class for operations supported on the [[ActivityFeedback]] entity.
 */
export declare class ActivityFeedbackRequestBuilder extends RequestBuilder<ActivityFeedback> {
    /**
     * Returns a request builder for retrieving one `ActivityFeedback` entity based on its keys.
     * @param activityActivityId Key property. See [[ActivityFeedback.activityActivityId]].
     * @param activityFeedbackId Key property. See [[ActivityFeedback.activityFeedbackId]].
     * @returns A request builder for creating requests to retrieve one `ActivityFeedback` entity based on its keys.
     */
    getByKey(activityActivityId: BigNumber, activityFeedbackId: BigNumber): GetByKeyRequestBuilder<ActivityFeedback>;
    /**
     * Returns a request builder for querying all `ActivityFeedback` entities.
     * @returns A request builder for creating requests to retrieve all `ActivityFeedback` entities.
     */
    getAll(): GetAllRequestBuilder<ActivityFeedback>;
    /**
     * Returns a request builder for creating a `ActivityFeedback` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ActivityFeedback`.
     */
    create(entity: ActivityFeedback): CreateRequestBuilder<ActivityFeedback>;
    /**
     * Returns a request builder for updating an entity of type `ActivityFeedback`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ActivityFeedback`.
     */
    update(entity: ActivityFeedback): UpdateRequestBuilder<ActivityFeedback>;
    /**
     * Returns a request builder for deleting an entity of type `ActivityFeedback`.
     * @param activityActivityId Key property. See [[ActivityFeedback.activityActivityId]].
     * @param activityFeedbackId Key property. See [[ActivityFeedback.activityFeedbackId]].
     * @returns A request builder for creating requests that delete an entity of type `ActivityFeedback`.
     */
    delete(activityActivityId: BigNumber, activityFeedbackId: BigNumber): DeleteRequestBuilder<ActivityFeedback>;
    /**
     * Returns a request builder for deleting an entity of type `ActivityFeedback`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ActivityFeedback` by taking the entity as a parameter.
     */
    delete(entity: ActivityFeedback): DeleteRequestBuilder<ActivityFeedback>;
}
//# sourceMappingURL=ActivityFeedbackRequestBuilder.d.ts.map