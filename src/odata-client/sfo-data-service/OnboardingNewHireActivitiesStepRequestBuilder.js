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
var OnboardingNewHireActivitiesStep_1 = require("./OnboardingNewHireActivitiesStep");
/**
 * Request builder class for operations supported on the [[OnboardingNewHireActivitiesStep]] entity.
 */
var OnboardingNewHireActivitiesStepRequestBuilder = /** @class */ (function (_super) {
    __extends(OnboardingNewHireActivitiesStepRequestBuilder, _super);
    function OnboardingNewHireActivitiesStepRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `OnboardingNewHireActivitiesStep` entity based on its keys.
     * @param onboardingProcessOnboardingProcessId Key property. See [[OnboardingNewHireActivitiesStep.onboardingProcessOnboardingProcessId]].
     * @param processStepId Key property. See [[OnboardingNewHireActivitiesStep.processStepId]].
     * @returns A request builder for creating requests to retrieve one `OnboardingNewHireActivitiesStep` entity based on its keys.
     */
    OnboardingNewHireActivitiesStepRequestBuilder.prototype.getByKey = function (onboardingProcessOnboardingProcessId, processStepId) {
        return new core_1.GetByKeyRequestBuilder(OnboardingNewHireActivitiesStep_1.OnboardingNewHireActivitiesStep, {
            OnboardingProcess_onboardingProcessId: onboardingProcessOnboardingProcessId,
            processStepId: processStepId
        });
    };
    /**
     * Returns a request builder for querying all `OnboardingNewHireActivitiesStep` entities.
     * @returns A request builder for creating requests to retrieve all `OnboardingNewHireActivitiesStep` entities.
     */
    OnboardingNewHireActivitiesStepRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(OnboardingNewHireActivitiesStep_1.OnboardingNewHireActivitiesStep);
    };
    /**
     * Returns a request builder for creating a `OnboardingNewHireActivitiesStep` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `OnboardingNewHireActivitiesStep`.
     */
    OnboardingNewHireActivitiesStepRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(OnboardingNewHireActivitiesStep_1.OnboardingNewHireActivitiesStep, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `OnboardingNewHireActivitiesStep`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `OnboardingNewHireActivitiesStep`.
     */
    OnboardingNewHireActivitiesStepRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(OnboardingNewHireActivitiesStep_1.OnboardingNewHireActivitiesStep, entity);
    };
    OnboardingNewHireActivitiesStepRequestBuilder.prototype.delete = function (onboardingProcessOnboardingProcessIdOrEntity, processStepId) {
        return new core_1.DeleteRequestBuilder(OnboardingNewHireActivitiesStep_1.OnboardingNewHireActivitiesStep, onboardingProcessOnboardingProcessIdOrEntity instanceof OnboardingNewHireActivitiesStep_1.OnboardingNewHireActivitiesStep ? onboardingProcessOnboardingProcessIdOrEntity : {
            OnboardingProcess_onboardingProcessId: onboardingProcessOnboardingProcessIdOrEntity,
            processStepId: processStepId
        });
    };
    return OnboardingNewHireActivitiesStepRequestBuilder;
}(core_1.RequestBuilder));
exports.OnboardingNewHireActivitiesStepRequestBuilder = OnboardingNewHireActivitiesStepRequestBuilder;
//# sourceMappingURL=OnboardingNewHireActivitiesStepRequestBuilder.js.map