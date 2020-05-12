import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { GoalAchievementsList } from './GoalAchievementsList';
/**
 * Request builder class for operations supported on the [[GoalAchievementsList]] entity.
 */
export declare class GoalAchievementsListRequestBuilder extends RequestBuilder<GoalAchievementsList> {
    /**
     * Returns a request builder for retrieving one `GoalAchievementsList` entity based on its keys.
     * @param goalId Key property. See [[GoalAchievementsList.goalId]].
     * @param subjectUserId Key property. See [[GoalAchievementsList.subjectUserId]].
     * @returns A request builder for creating requests to retrieve one `GoalAchievementsList` entity based on its keys.
     */
    getByKey(goalId: string, subjectUserId: string): GetByKeyRequestBuilder<GoalAchievementsList>;
    /**
     * Returns a request builder for querying all `GoalAchievementsList` entities.
     * @returns A request builder for creating requests to retrieve all `GoalAchievementsList` entities.
     */
    getAll(): GetAllRequestBuilder<GoalAchievementsList>;
}
//# sourceMappingURL=GoalAchievementsListRequestBuilder.d.ts.map