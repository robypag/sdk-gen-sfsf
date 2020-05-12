import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { OnboardingNewHireActivitiesStep } from './OnboardingNewHireActivitiesStep';
/**
 * Request builder class for operations supported on the [[OnboardingNewHireActivitiesStep]] entity.
 */
export declare class OnboardingNewHireActivitiesStepRequestBuilder extends RequestBuilder<OnboardingNewHireActivitiesStep> {
    /**
     * Returns a request builder for retrieving one `OnboardingNewHireActivitiesStep` entity based on its keys.
     * @param onboardingProcessOnboardingProcessId Key property. See [[OnboardingNewHireActivitiesStep.onboardingProcessOnboardingProcessId]].
     * @param processStepId Key property. See [[OnboardingNewHireActivitiesStep.processStepId]].
     * @returns A request builder for creating requests to retrieve one `OnboardingNewHireActivitiesStep` entity based on its keys.
     */
    getByKey(onboardingProcessOnboardingProcessId: BigNumber, processStepId: BigNumber): GetByKeyRequestBuilder<OnboardingNewHireActivitiesStep>;
    /**
     * Returns a request builder for querying all `OnboardingNewHireActivitiesStep` entities.
     * @returns A request builder for creating requests to retrieve all `OnboardingNewHireActivitiesStep` entities.
     */
    getAll(): GetAllRequestBuilder<OnboardingNewHireActivitiesStep>;
    /**
     * Returns a request builder for creating a `OnboardingNewHireActivitiesStep` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `OnboardingNewHireActivitiesStep`.
     */
    create(entity: OnboardingNewHireActivitiesStep): CreateRequestBuilder<OnboardingNewHireActivitiesStep>;
    /**
     * Returns a request builder for updating an entity of type `OnboardingNewHireActivitiesStep`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `OnboardingNewHireActivitiesStep`.
     */
    update(entity: OnboardingNewHireActivitiesStep): UpdateRequestBuilder<OnboardingNewHireActivitiesStep>;
    /**
     * Returns a request builder for deleting an entity of type `OnboardingNewHireActivitiesStep`.
     * @param onboardingProcessOnboardingProcessId Key property. See [[OnboardingNewHireActivitiesStep.onboardingProcessOnboardingProcessId]].
     * @param processStepId Key property. See [[OnboardingNewHireActivitiesStep.processStepId]].
     * @returns A request builder for creating requests that delete an entity of type `OnboardingNewHireActivitiesStep`.
     */
    delete(onboardingProcessOnboardingProcessId: BigNumber, processStepId: BigNumber): DeleteRequestBuilder<OnboardingNewHireActivitiesStep>;
    /**
     * Returns a request builder for deleting an entity of type `OnboardingNewHireActivitiesStep`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `OnboardingNewHireActivitiesStep` by taking the entity as a parameter.
     */
    delete(entity: OnboardingNewHireActivitiesStep): DeleteRequestBuilder<OnboardingNewHireActivitiesStep>;
}
//# sourceMappingURL=OnboardingNewHireActivitiesStepRequestBuilder.d.ts.map