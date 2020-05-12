import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { AchievementGoalDetail } from './AchievementGoalDetail';
/**
 * Request builder class for operations supported on the [[AchievementGoalDetail]] entity.
 */
export declare class AchievementGoalDetailRequestBuilder extends RequestBuilder<AchievementGoalDetail> {
    /**
     * Returns a request builder for retrieving one `AchievementGoalDetail` entity based on its keys.
     * @param achievementAchievementId Key property. See [[AchievementGoalDetail.achievementAchievementId]].
     * @param externalCode Key property. See [[AchievementGoalDetail.externalCode]].
     * @returns A request builder for creating requests to retrieve one `AchievementGoalDetail` entity based on its keys.
     */
    getByKey(achievementAchievementId: BigNumber, externalCode: BigNumber): GetByKeyRequestBuilder<AchievementGoalDetail>;
    /**
     * Returns a request builder for querying all `AchievementGoalDetail` entities.
     * @returns A request builder for creating requests to retrieve all `AchievementGoalDetail` entities.
     */
    getAll(): GetAllRequestBuilder<AchievementGoalDetail>;
    /**
     * Returns a request builder for creating a `AchievementGoalDetail` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AchievementGoalDetail`.
     */
    create(entity: AchievementGoalDetail): CreateRequestBuilder<AchievementGoalDetail>;
    /**
     * Returns a request builder for updating an entity of type `AchievementGoalDetail`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AchievementGoalDetail`.
     */
    update(entity: AchievementGoalDetail): UpdateRequestBuilder<AchievementGoalDetail>;
    /**
     * Returns a request builder for deleting an entity of type `AchievementGoalDetail`.
     * @param achievementAchievementId Key property. See [[AchievementGoalDetail.achievementAchievementId]].
     * @param externalCode Key property. See [[AchievementGoalDetail.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `AchievementGoalDetail`.
     */
    delete(achievementAchievementId: BigNumber, externalCode: BigNumber): DeleteRequestBuilder<AchievementGoalDetail>;
    /**
     * Returns a request builder for deleting an entity of type `AchievementGoalDetail`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `AchievementGoalDetail` by taking the entity as a parameter.
     */
    delete(entity: AchievementGoalDetail): DeleteRequestBuilder<AchievementGoalDetail>;
}
//# sourceMappingURL=AchievementGoalDetailRequestBuilder.d.ts.map