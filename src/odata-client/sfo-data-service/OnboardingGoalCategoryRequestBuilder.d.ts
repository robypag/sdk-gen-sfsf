import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { OnboardingGoalCategory } from './OnboardingGoalCategory';
/**
 * Request builder class for operations supported on the [[OnboardingGoalCategory]] entity.
 */
export declare class OnboardingGoalCategoryRequestBuilder extends RequestBuilder<OnboardingGoalCategory> {
    /**
     * Returns a request builder for retrieving one `OnboardingGoalCategory` entity based on its keys.
     * @param onboardingGoalActivityActivityId Key property. See [[OnboardingGoalCategory.onboardingGoalActivityActivityId]].
     * @param onboardingNewHireActivitiesStepProcessStepId Key property. See [[OnboardingGoalCategory.onboardingNewHireActivitiesStepProcessStepId]].
     * @param onboardingProcessOnboardingProcessId Key property. See [[OnboardingGoalCategory.onboardingProcessOnboardingProcessId]].
     * @param externalCode Key property. See [[OnboardingGoalCategory.externalCode]].
     * @returns A request builder for creating requests to retrieve one `OnboardingGoalCategory` entity based on its keys.
     */
    getByKey(onboardingGoalActivityActivityId: BigNumber, onboardingNewHireActivitiesStepProcessStepId: BigNumber, onboardingProcessOnboardingProcessId: BigNumber, externalCode: BigNumber): GetByKeyRequestBuilder<OnboardingGoalCategory>;
    /**
     * Returns a request builder for querying all `OnboardingGoalCategory` entities.
     * @returns A request builder for creating requests to retrieve all `OnboardingGoalCategory` entities.
     */
    getAll(): GetAllRequestBuilder<OnboardingGoalCategory>;
}
//# sourceMappingURL=OnboardingGoalCategoryRequestBuilder.d.ts.map