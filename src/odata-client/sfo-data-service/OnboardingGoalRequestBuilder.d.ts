import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { OnboardingGoal } from './OnboardingGoal';
/**
 * Request builder class for operations supported on the [[OnboardingGoal]] entity.
 */
export declare class OnboardingGoalRequestBuilder extends RequestBuilder<OnboardingGoal> {
    /**
     * Returns a request builder for retrieving one `OnboardingGoal` entity based on its keys.
     * @param onboardingGoalActivityActivityId Key property. See [[OnboardingGoal.onboardingGoalActivityActivityId]].
     * @param onboardingGoalCategoryExternalCode Key property. See [[OnboardingGoal.onboardingGoalCategoryExternalCode]].
     * @param onboardingNewHireActivitiesStepProcessStepId Key property. See [[OnboardingGoal.onboardingNewHireActivitiesStepProcessStepId]].
     * @param onboardingProcessOnboardingProcessId Key property. See [[OnboardingGoal.onboardingProcessOnboardingProcessId]].
     * @param goalId Key property. See [[OnboardingGoal.goalId]].
     * @returns A request builder for creating requests to retrieve one `OnboardingGoal` entity based on its keys.
     */
    getByKey(onboardingGoalActivityActivityId: BigNumber, onboardingGoalCategoryExternalCode: BigNumber, onboardingNewHireActivitiesStepProcessStepId: BigNumber, onboardingProcessOnboardingProcessId: BigNumber, goalId: BigNumber): GetByKeyRequestBuilder<OnboardingGoal>;
    /**
     * Returns a request builder for querying all `OnboardingGoal` entities.
     * @returns A request builder for creating requests to retrieve all `OnboardingGoal` entities.
     */
    getAll(): GetAllRequestBuilder<OnboardingGoal>;
}
//# sourceMappingURL=OnboardingGoalRequestBuilder.d.ts.map