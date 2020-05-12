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
var OnboardingGoalActivity_1 = require("./OnboardingGoalActivity");
/**
 * Request builder class for operations supported on the [[OnboardingGoalActivity]] entity.
 */
var OnboardingGoalActivityRequestBuilder = /** @class */ (function (_super) {
    __extends(OnboardingGoalActivityRequestBuilder, _super);
    function OnboardingGoalActivityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `OnboardingGoalActivity` entity based on its keys.
     * @param onboardingNewHireActivitiesStepProcessStepId Key property. See [[OnboardingGoalActivity.onboardingNewHireActivitiesStepProcessStepId]].
     * @param onboardingProcessOnboardingProcessId Key property. See [[OnboardingGoalActivity.onboardingProcessOnboardingProcessId]].
     * @param activityId Key property. See [[OnboardingGoalActivity.activityId]].
     * @returns A request builder for creating requests to retrieve one `OnboardingGoalActivity` entity based on its keys.
     */
    OnboardingGoalActivityRequestBuilder.prototype.getByKey = function (onboardingNewHireActivitiesStepProcessStepId, onboardingProcessOnboardingProcessId, activityId) {
        return new core_1.GetByKeyRequestBuilder(OnboardingGoalActivity_1.OnboardingGoalActivity, {
            OnboardingNewHireActivitiesStep_processStepId: onboardingNewHireActivitiesStepProcessStepId,
            OnboardingProcess_onboardingProcessId: onboardingProcessOnboardingProcessId,
            activityId: activityId
        });
    };
    /**
     * Returns a request builder for querying all `OnboardingGoalActivity` entities.
     * @returns A request builder for creating requests to retrieve all `OnboardingGoalActivity` entities.
     */
    OnboardingGoalActivityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(OnboardingGoalActivity_1.OnboardingGoalActivity);
    };
    return OnboardingGoalActivityRequestBuilder;
}(core_1.RequestBuilder));
exports.OnboardingGoalActivityRequestBuilder = OnboardingGoalActivityRequestBuilder;
//# sourceMappingURL=OnboardingGoalActivityRequestBuilder.js.map