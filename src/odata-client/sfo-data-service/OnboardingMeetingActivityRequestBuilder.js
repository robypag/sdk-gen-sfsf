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
var OnboardingMeetingActivity_1 = require("./OnboardingMeetingActivity");
/**
 * Request builder class for operations supported on the [[OnboardingMeetingActivity]] entity.
 */
var OnboardingMeetingActivityRequestBuilder = /** @class */ (function (_super) {
    __extends(OnboardingMeetingActivityRequestBuilder, _super);
    function OnboardingMeetingActivityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `OnboardingMeetingActivity` entity based on its keys.
     * @param onboardingNewHireActivitiesStepProcessStepId Key property. See [[OnboardingMeetingActivity.onboardingNewHireActivitiesStepProcessStepId]].
     * @param onboardingProcessOnboardingProcessId Key property. See [[OnboardingMeetingActivity.onboardingProcessOnboardingProcessId]].
     * @param activityId Key property. See [[OnboardingMeetingActivity.activityId]].
     * @returns A request builder for creating requests to retrieve one `OnboardingMeetingActivity` entity based on its keys.
     */
    OnboardingMeetingActivityRequestBuilder.prototype.getByKey = function (onboardingNewHireActivitiesStepProcessStepId, onboardingProcessOnboardingProcessId, activityId) {
        return new core_1.GetByKeyRequestBuilder(OnboardingMeetingActivity_1.OnboardingMeetingActivity, {
            OnboardingNewHireActivitiesStep_processStepId: onboardingNewHireActivitiesStepProcessStepId,
            OnboardingProcess_onboardingProcessId: onboardingProcessOnboardingProcessId,
            activityId: activityId
        });
    };
    /**
     * Returns a request builder for querying all `OnboardingMeetingActivity` entities.
     * @returns A request builder for creating requests to retrieve all `OnboardingMeetingActivity` entities.
     */
    OnboardingMeetingActivityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(OnboardingMeetingActivity_1.OnboardingMeetingActivity);
    };
    /**
     * Returns a request builder for creating a `OnboardingMeetingActivity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `OnboardingMeetingActivity`.
     */
    OnboardingMeetingActivityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(OnboardingMeetingActivity_1.OnboardingMeetingActivity, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `OnboardingMeetingActivity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `OnboardingMeetingActivity`.
     */
    OnboardingMeetingActivityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(OnboardingMeetingActivity_1.OnboardingMeetingActivity, entity);
    };
    OnboardingMeetingActivityRequestBuilder.prototype.delete = function (onboardingNewHireActivitiesStepProcessStepIdOrEntity, onboardingProcessOnboardingProcessId, activityId) {
        return new core_1.DeleteRequestBuilder(OnboardingMeetingActivity_1.OnboardingMeetingActivity, onboardingNewHireActivitiesStepProcessStepIdOrEntity instanceof OnboardingMeetingActivity_1.OnboardingMeetingActivity ? onboardingNewHireActivitiesStepProcessStepIdOrEntity : {
            OnboardingNewHireActivitiesStep_processStepId: onboardingNewHireActivitiesStepProcessStepIdOrEntity,
            OnboardingProcess_onboardingProcessId: onboardingProcessOnboardingProcessId,
            activityId: activityId
        });
    };
    return OnboardingMeetingActivityRequestBuilder;
}(core_1.RequestBuilder));
exports.OnboardingMeetingActivityRequestBuilder = OnboardingMeetingActivityRequestBuilder;
//# sourceMappingURL=OnboardingMeetingActivityRequestBuilder.js.map