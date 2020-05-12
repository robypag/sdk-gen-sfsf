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
var OnboardingGoalCategory_1 = require("./OnboardingGoalCategory");
/**
 * Request builder class for operations supported on the [[OnboardingGoalCategory]] entity.
 */
var OnboardingGoalCategoryRequestBuilder = /** @class */ (function (_super) {
    __extends(OnboardingGoalCategoryRequestBuilder, _super);
    function OnboardingGoalCategoryRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `OnboardingGoalCategory` entity based on its keys.
     * @param onboardingGoalActivityActivityId Key property. See [[OnboardingGoalCategory.onboardingGoalActivityActivityId]].
     * @param onboardingNewHireActivitiesStepProcessStepId Key property. See [[OnboardingGoalCategory.onboardingNewHireActivitiesStepProcessStepId]].
     * @param onboardingProcessOnboardingProcessId Key property. See [[OnboardingGoalCategory.onboardingProcessOnboardingProcessId]].
     * @param externalCode Key property. See [[OnboardingGoalCategory.externalCode]].
     * @returns A request builder for creating requests to retrieve one `OnboardingGoalCategory` entity based on its keys.
     */
    OnboardingGoalCategoryRequestBuilder.prototype.getByKey = function (onboardingGoalActivityActivityId, onboardingNewHireActivitiesStepProcessStepId, onboardingProcessOnboardingProcessId, externalCode) {
        return new core_1.GetByKeyRequestBuilder(OnboardingGoalCategory_1.OnboardingGoalCategory, {
            OnboardingGoalActivity_activityId: onboardingGoalActivityActivityId,
            OnboardingNewHireActivitiesStep_processStepId: onboardingNewHireActivitiesStepProcessStepId,
            OnboardingProcess_onboardingProcessId: onboardingProcessOnboardingProcessId,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `OnboardingGoalCategory` entities.
     * @returns A request builder for creating requests to retrieve all `OnboardingGoalCategory` entities.
     */
    OnboardingGoalCategoryRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(OnboardingGoalCategory_1.OnboardingGoalCategory);
    };
    return OnboardingGoalCategoryRequestBuilder;
}(core_1.RequestBuilder));
exports.OnboardingGoalCategoryRequestBuilder = OnboardingGoalCategoryRequestBuilder;
//# sourceMappingURL=OnboardingGoalCategoryRequestBuilder.js.map