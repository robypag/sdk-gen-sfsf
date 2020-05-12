import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { DevGoalAchievementsList } from './DevGoalAchievementsList';
/**
 * Request builder class for operations supported on the [[DevGoalAchievementsList]] entity.
 */
export declare class DevGoalAchievementsListRequestBuilder extends RequestBuilder<DevGoalAchievementsList> {
    /**
     * Returns a request builder for retrieving one `DevGoalAchievementsList` entity based on its keys.
     * @param goalId Key property. See [[DevGoalAchievementsList.goalId]].
     * @param subjectUserId Key property. See [[DevGoalAchievementsList.subjectUserId]].
     * @returns A request builder for creating requests to retrieve one `DevGoalAchievementsList` entity based on its keys.
     */
    getByKey(goalId: string, subjectUserId: string): GetByKeyRequestBuilder<DevGoalAchievementsList>;
    /**
     * Returns a request builder for querying all `DevGoalAchievementsList` entities.
     * @returns A request builder for creating requests to retrieve all `DevGoalAchievementsList` entities.
     */
    getAll(): GetAllRequestBuilder<DevGoalAchievementsList>;
}
//# sourceMappingURL=DevGoalAchievementsListRequestBuilder.d.ts.map