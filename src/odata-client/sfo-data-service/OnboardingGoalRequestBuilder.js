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
var OnboardingGoal_1 = require("./OnboardingGoal");
/**
 * Request builder class for operations supported on the [[OnboardingGoal]] entity.
 */
var OnboardingGoalRequestBuilder = /** @class */ (function (_super) {
    __extends(OnboardingGoalRequestBuilder, _super);
    function OnboardingGoalRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `OnboardingGoal` entity based on its keys.
     * @param onboardingGoalActivityActivityId Key property. See [[OnboardingGoal.onboardingGoalActivityActivityId]].
     * @param onboardingGoalCategoryExternalCode Key property. See [[OnboardingGoal.onboardingGoalCategoryExternalCode]].
     * @param onboardingNewHireActivitiesStepProcessStepId Key property. See [[OnboardingGoal.onboardingNewHireActivitiesStepProcessStepId]].
     * @param onboardingProcessOnboardingProcessId Key property. See [[OnboardingGoal.onboardingProcessOnboardingProcessId]].
     * @param goalId Key property. See [[OnboardingGoal.goalId]].
     * @returns A request builder for creating requests to retrieve one `OnboardingGoal` entity based on its keys.
     */
    OnboardingGoalRequestBuilder.prototype.getByKey = function (onboardingGoalActivityActivityId, onboardingGoalCategoryExternalCode, onboardingNewHireActivitiesStepProcessStepId, onboardingProcessOnboardingProcessId, goalId) {
        return new core_1.GetByKeyRequestBuilder(OnboardingGoal_1.OnboardingGoal, {
            OnboardingGoalActivity_activityId: onboardingGoalActivityActivityId,
            OnboardingGoalCategory_externalCode: onboardingGoalCategoryExternalCode,
            OnboardingNewHireActivitiesStep_processStepId: onboardingNewHireActivitiesStepProcessStepId,
            OnboardingProcess_onboardingProcessId: onboardingProcessOnboardingProcessId,
            goalId: goalId
        });
    };
    /**
     * Returns a request builder for querying all `OnboardingGoal` entities.
     * @returns A request builder for creating requests to retrieve all `OnboardingGoal` entities.
     */
    OnboardingGoalRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(OnboardingGoal_1.OnboardingGoal);
    };
    return OnboardingGoalRequestBuilder;
}(core_1.RequestBuilder));
exports.OnboardingGoalRequestBuilder = OnboardingGoalRequestBuilder;
//# sourceMappingURL=OnboardingGoalRequestBuilder.js.map