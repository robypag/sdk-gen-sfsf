import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { OnboardingMeetingEvent } from './OnboardingMeetingEvent';
/**
 * Request builder class for operations supported on the [[OnboardingMeetingEvent]] entity.
 */
export declare class OnboardingMeetingEventRequestBuilder extends RequestBuilder<OnboardingMeetingEvent> {
    /**
     * Returns a request builder for retrieving one `OnboardingMeetingEvent` entity based on its keys.
     * @param onboardingMeetingActivityActivityId Key property. See [[OnboardingMeetingEvent.onboardingMeetingActivityActivityId]].
     * @param onboardingNewHireActivitiesStepProcessStepId Key property. See [[OnboardingMeetingEvent.onboardingNewHireActivitiesStepProcessStepId]].
     * @param onboardingProcessOnboardingProcessId Key property. See [[OnboardingMeetingEvent.onboardingProcessOnboardingProcessId]].
     * @param externalCode Key property. See [[OnboardingMeetingEvent.externalCode]].
     * @returns A request builder for creating requests to retrieve one `OnboardingMeetingEvent` entity based on its keys.
     */
    getByKey(onboardingMeetingActivityActivityId: BigNumber, onboardingNewHireActivitiesStepProcessStepId: BigNumber, onboardingProcessOnboardingProcessId: BigNumber, externalCode: string): GetByKeyRequestBuilder<OnboardingMeetingEvent>;
    /**
     * Returns a request builder for querying all `OnboardingMeetingEvent` entities.
     * @returns A request builder for creating requests to retrieve all `OnboardingMeetingEvent` entities.
     */
    getAll(): GetAllRequestBuilder<OnboardingMeetingEvent>;
    /**
     * Returns a request builder for creating a `OnboardingMeetingEvent` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `OnboardingMeetingEvent`.
     */
    create(entity: OnboardingMeetingEvent): CreateRequestBuilder<OnboardingMeetingEvent>;
    /**
     * Returns a request builder for updating an entity of type `OnboardingMeetingEvent`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `OnboardingMeetingEvent`.
     */
    update(entity: OnboardingMeetingEvent): UpdateRequestBuilder<OnboardingMeetingEvent>;
    /**
     * Returns a request builder for deleting an entity of type `OnboardingMeetingEvent`.
     * @param onboardingMeetingActivityActivityId Key property. See [[OnboardingMeetingEvent.onboardingMeetingActivityActivityId]].
     * @param onboardingNewHireActivitiesStepProcessStepId Key property. See [[OnboardingMeetingEvent.onboardingNewHireActivitiesStepProcessStepId]].
     * @param onboardingProcessOnboardingProcessId Key property. See [[OnboardingMeetingEvent.onboardingProcessOnboardingProcessId]].
     * @param externalCode Key property. See [[OnboardingMeetingEvent.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `OnboardingMeetingEvent`.
     */
    delete(onboardingMeetingActivityActivityId: BigNumber, onboardingNewHireActivitiesStepProcessStepId: BigNumber, onboardingProcessOnboardingProcessId: BigNumber, externalCode: string): DeleteRequestBuilder<OnboardingMeetingEvent>;
    /**
     * Returns a request builder for deleting an entity of type `OnboardingMeetingEvent`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `OnboardingMeetingEvent` by taking the entity as a parameter.
     */
    delete(entity: OnboardingMeetingEvent): DeleteRequestBuilder<OnboardingMeetingEvent>;
}
//# sourceMappingURL=OnboardingMeetingEventRequestBuilder.d.ts.map