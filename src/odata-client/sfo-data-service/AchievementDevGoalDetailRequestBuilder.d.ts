import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { AchievementDevGoalDetail } from './AchievementDevGoalDetail';
/**
 * Request builder class for operations supported on the [[AchievementDevGoalDetail]] entity.
 */
export declare class AchievementDevGoalDetailRequestBuilder extends RequestBuilder<AchievementDevGoalDetail> {
    /**
     * Returns a request builder for retrieving one `AchievementDevGoalDetail` entity based on its keys.
     * @param achievementAchievementId Key property. See [[AchievementDevGoalDetail.achievementAchievementId]].
     * @param externalCode Key property. See [[AchievementDevGoalDetail.externalCode]].
     * @returns A request builder for creating requests to retrieve one `AchievementDevGoalDetail` entity based on its keys.
     */
    getByKey(achievementAchievementId: BigNumber, externalCode: BigNumber): GetByKeyRequestBuilder<AchievementDevGoalDetail>;
    /**
     * Returns a request builder for querying all `AchievementDevGoalDetail` entities.
     * @returns A request builder for creating requests to retrieve all `AchievementDevGoalDetail` entities.
     */
    getAll(): GetAllRequestBuilder<AchievementDevGoalDetail>;
    /**
     * Returns a request builder for creating a `AchievementDevGoalDetail` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AchievementDevGoalDetail`.
     */
    create(entity: AchievementDevGoalDetail): CreateRequestBuilder<AchievementDevGoalDetail>;
    /**
     * Returns a request builder for updating an entity of type `AchievementDevGoalDetail`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AchievementDevGoalDetail`.
     */
    update(entity: AchievementDevGoalDetail): UpdateRequestBuilder<AchievementDevGoalDetail>;
    /**
     * Returns a request builder for deleting an entity of type `AchievementDevGoalDetail`.
     * @param achievementAchievementId Key property. See [[AchievementDevGoalDetail.achievementAchievementId]].
     * @param externalCode Key property. See [[AchievementDevGoalDetail.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `AchievementDevGoalDetail`.
     */
    delete(achievementAchievementId: BigNumber, externalCode: BigNumber): DeleteRequestBuilder<AchievementDevGoalDetail>;
    /**
     * Returns a request builder for deleting an entity of type `AchievementDevGoalDetail`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `AchievementDevGoalDetail` by taking the entity as a parameter.
     */
    delete(entity: AchievementDevGoalDetail): DeleteRequestBuilder<AchievementDevGoalDetail>;
}
//# sourceMappingURL=AchievementDevGoalDetailRequestBuilder.d.ts.map