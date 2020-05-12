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
var OnboardingEquipmentActivity_1 = require("./OnboardingEquipmentActivity");
/**
 * Request builder class for operations supported on the [[OnboardingEquipmentActivity]] entity.
 */
var OnboardingEquipmentActivityRequestBuilder = /** @class */ (function (_super) {
    __extends(OnboardingEquipmentActivityRequestBuilder, _super);
    function OnboardingEquipmentActivityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `OnboardingEquipmentActivity` entity based on its keys.
     * @param onboardingNewHireActivitiesStepProcessStepId Key property. See [[OnboardingEquipmentActivity.onboardingNewHireActivitiesStepProcessStepId]].
     * @param onboardingProcessOnboardingProcessId Key property. See [[OnboardingEquipmentActivity.onboardingProcessOnboardingProcessId]].
     * @param activityId Key property. See [[OnboardingEquipmentActivity.activityId]].
     * @returns A request builder for creating requests to retrieve one `OnboardingEquipmentActivity` entity based on its keys.
     */
    OnboardingEquipmentActivityRequestBuilder.prototype.getByKey = function (onboardingNewHireActivitiesStepProcessStepId, onboardingProcessOnboardingProcessId, activityId) {
        return new core_1.GetByKeyRequestBuilder(OnboardingEquipmentActivity_1.OnboardingEquipmentActivity, {
            OnboardingNewHireActivitiesStep_processStepId: onboardingNewHireActivitiesStepProcessStepId,
            OnboardingProcess_onboardingProcessId: onboardingProcessOnboardingProcessId,
            activityId: activityId
        });
    };
    /**
     * Returns a request builder for querying all `OnboardingEquipmentActivity` entities.
     * @returns A request builder for creating requests to retrieve all `OnboardingEquipmentActivity` entities.
     */
    OnboardingEquipmentActivityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(OnboardingEquipmentActivity_1.OnboardingEquipmentActivity);
    };
    /**
     * Returns a request builder for creating a `OnboardingEquipmentActivity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `OnboardingEquipmentActivity`.
     */
    OnboardingEquipmentActivityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(OnboardingEquipmentActivity_1.OnboardingEquipmentActivity, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `OnboardingEquipmentActivity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `OnboardingEquipmentActivity`.
     */
    OnboardingEquipmentActivityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(OnboardingEquipmentActivity_1.OnboardingEquipmentActivity, entity);
    };
    OnboardingEquipmentActivityRequestBuilder.prototype.delete = function (onboardingNewHireActivitiesStepProcessStepIdOrEntity, onboardingProcessOnboardingProcessId, activityId) {
        return new core_1.DeleteRequestBuilder(OnboardingEquipmentActivity_1.OnboardingEquipmentActivity, onboardingNewHireActivitiesStepProcessStepIdOrEntity instanceof OnboardingEquipmentActivity_1.OnboardingEquipmentActivity ? onboardingNewHireActivitiesStepProcessStepIdOrEntity : {
            OnboardingNewHireActivitiesStep_processStepId: onboardingNewHireActivitiesStepProcessStepIdOrEntity,
            OnboardingProcess_onboardingProcessId: onboardingProcessOnboardingProcessId,
            activityId: activityId
        });
    };
    return OnboardingEquipmentActivityRequestBuilder;
}(core_1.RequestBuilder));
exports.OnboardingEquipmentActivityRequestBuilder = OnboardingEquipmentActivityRequestBuilder;
//# sourceMappingURL=OnboardingEquipmentActivityRequestBuilder.js.map