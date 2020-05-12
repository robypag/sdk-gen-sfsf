import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { GoalAchievements } from './GoalAchievements';
/**
 * Request builder class for operations supported on the [[GoalAchievements]] entity.
 */
export declare class GoalAchievementsRequestBuilder extends RequestBuilder<GoalAchievements> {
    /**
     * Returns a request builder for retrieving one `GoalAchievements` entity based on its keys.
     * @param goalId Key property. See [[GoalAchievements.goalId]].
     * @param subjectUserId Key property. See [[GoalAchievements.subjectUserId]].
     * @returns A request builder for creating requests to retrieve one `GoalAchievements` entity based on its keys.
     */
    getByKey(goalId: string, subjectUserId: string): GetByKeyRequestBuilder<GoalAchievements>;
    /**
     * Returns a request builder for querying all `GoalAchievements` entities.
     * @returns A request builder for creating requests to retrieve all `GoalAchievements` entities.
     */
    getAll(): GetAllRequestBuilder<GoalAchievements>;
}
//# sourceMappingURL=GoalAchievementsRequestBuilder.d.ts.map