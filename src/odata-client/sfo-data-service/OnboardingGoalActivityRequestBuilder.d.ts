import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { OnboardingGoalActivity } from './OnboardingGoalActivity';
/**
 * Request builder class for operations supported on the [[OnboardingGoalActivity]] entity.
 */
export declare class OnboardingGoalActivityRequestBuilder extends RequestBuilder<OnboardingGoalActivity> {
    /**
     * Returns a request builder for retrieving one `OnboardingGoalActivity` entity based on its keys.
     * @param onboardingNewHireActivitiesStepProcessStepId Key property. See [[OnboardingGoalActivity.onboardingNewHireActivitiesStepProcessStepId]].
     * @param onboardingProcessOnboardingProcessId Key property. See [[OnboardingGoalActivity.onboardingProcessOnboardingProcessId]].
     * @param activityId Key property. See [[OnboardingGoalActivity.activityId]].
     * @returns A request builder for creating requests to retrieve one `OnboardingGoalActivity` entity based on its keys.
     */
    getByKey(onboardingNewHireActivitiesStepProcessStepId: BigNumber, onboardingProcessOnboardingProcessId: BigNumber, activityId: BigNumber): GetByKeyRequestBuilder<OnboardingGoalActivity>;
    /**
     * Returns a request builder for querying all `OnboardingGoalActivity` entities.
     * @returns A request builder for creating requests to retrieve all `OnboardingGoalActivity` entities.
     */
    getAll(): GetAllRequestBuilder<OnboardingGoalActivity>;
}
//# sourceMappingURL=OnboardingGoalActivityRequestBuilder.d.ts.map