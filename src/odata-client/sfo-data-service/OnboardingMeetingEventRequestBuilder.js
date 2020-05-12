"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@sap-cloud-sdk/core");
var OnboardingMeetingEvent_1 = require("./OnboardingMeetingEvent");
/**
 * Request builder class for operations supported on the [[OnboardingMeetingEvent]] entity.
 */
var OnboardingMeetingEventRequestBuilder = /** @class */ (function (_super) {
    __extends(OnboardingMeetingEventRequestBuilder, _super);
    function OnboardingMeetingEventRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `OnboardingMeetingEvent` entity based on its keys.
     * @param onboardingMeetingActivityActivityId Key property. See [[OnboardingMeetingEvent.onboardingMeetingActivityActivityId]].
     * @param onboardingNewHireActivitiesStepProcessStepId Key property. See [[OnboardingMeetingEvent.onboardingNewHireActivitiesStepProcessStepId]].
     * @param onboardingProcessOnboardingProcessId Key property. See [[OnboardingMeetingEvent.onboardingProcessOnboardingProcessId]].
     * @param externalCode Key property. See [[OnboardingMeetingEvent.externalCode]].
     * @returns A request builder for creating requests to retrieve one `OnboardingMeetingEvent` entity based on its keys.
     */
    OnboardingMeetingEventRequestBuilder.prototype.getByKey = function (onboardingMeetingActivityActivityId, onboardingNewHireActivitiesStepProcessStepId, onboardingProcessOnboardingProcessId, externalCode) {
        return new core_1.GetByKeyRequestBuilder(OnboardingMeetingEvent_1.OnboardingMeetingEvent, {
            OnboardingMeetingActivity_activityId: onboardingMeetingActivityActivityId,
            OnboardingNewHireActivitiesStep_processStepId: onboardingNewHireActivitiesStepProcessStepId,
            OnboardingProcess_onboardingProcessId: onboardingProcessOnboardingProcessId,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `OnboardingMeetingEvent` entities.
     * @returns A request builder for creating requests to retrieve all `OnboardingMeetingEvent` entities.
     */
    OnboardingMeetingEventRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(OnboardingMeetingEvent_1.OnboardingMeetingEvent);
    };
    /**
     * Returns a request builder for creating a `OnboardingMeetingEvent` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `OnboardingMeetingEvent`.
     */
    OnboardingMeetingEventRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(OnboardingMeetingEvent_1.OnboardingMeetingEvent, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `OnboardingMeetingEvent`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `OnboardingMeetingEvent`.
     */
    OnboardingMeetingEventRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(OnboardingMeetingEvent_1.OnboardingMeetingEvent, entity);
    };
    OnboardingMeetingEventRequestBuilder.prototype.delete = function (onboardingMeetingActivityActivityIdOrEntity, onboardingNewHireActivitiesStepProcessStepId, onboardingProcessOnboardingProcessId, externalCode) {
        return new core_1.DeleteRequestBuilder(OnboardingMeetingEvent_1.OnboardingMeetingEvent, onboardingMeetingActivityActivityIdOrEntity instanceof OnboardingMeetingEvent_1.OnboardingMeetingEvent ? onboardingMeetingActivityActivityIdOrEntity : {
            OnboardingMeetingActivity_activityId: onboardingMeetingActivityActivityIdOrEntity,
            OnboardingNewHireActivitiesStep_processStepId: onboardingNewHireActivitiesStepProcessStepId,
            OnboardingProcess_onboardingProcessId: onboardingProcessOnboardingProcessId,
            externalCode: externalCode
        });
    };
    return OnboardingMeetingEventRequestBuilder;
}(core_1.RequestBuilder));
exports.OnboardingMeetingEventRequestBuilder = OnboardingMeetingEventRequestBuilder;
//# sourceMappingURL=OnboardingMeetingEventRequestBuilder.js.map