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
var OnboardingEquipment_1 = require("./OnboardingEquipment");
/**
 * Request builder class for operations supported on the [[OnboardingEquipment]] entity.
 */
var OnboardingEquipmentRequestBuilder = /** @class */ (function (_super) {
    __extends(OnboardingEquipmentRequestBuilder, _super);
    function OnboardingEquipmentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `OnboardingEquipment` entity based on its keys.
     * @param onboardingEquipmentActivityActivityId Key property. See [[OnboardingEquipment.onboardingEquipmentActivityActivityId]].
     * @param onboardingNewHireActivitiesStepProcessStepId Key property. See [[OnboardingEquipment.onboardingNewHireActivitiesStepProcessStepId]].
     * @param onboardingProcessOnboardingProcessId Key property. See [[OnboardingEquipment.onboardingProcessOnboardingProcessId]].
     * @param equipmentId Key property. See [[OnboardingEquipment.equipmentId]].
     * @returns A request builder for creating requests to retrieve one `OnboardingEquipment` entity based on its keys.
     */
    OnboardingEquipmentRequestBuilder.prototype.getByKey = function (onboardingEquipmentActivityActivityId, onboardingNewHireActivitiesStepProcessStepId, onboardingProcessOnboardingProcessId, equipmentId) {
        return new core_1.GetByKeyRequestBuilder(OnboardingEquipment_1.OnboardingEquipment, {
            OnboardingEquipmentActivity_activityId: onboardingEquipmentActivityActivityId,
            OnboardingNewHireActivitiesStep_processStepId: onboardingNewHireActivitiesStepProcessStepId,
            OnboardingProcess_onboardingProcessId: onboardingProcessOnboardingProcessId,
            equipmentId: equipmentId
        });
    };
    /**
     * Returns a request builder for querying all `OnboardingEquipment` entities.
     * @returns A request builder for creating requests to retrieve all `OnboardingEquipment` entities.
     */
    OnboardingEquipmentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(OnboardingEquipment_1.OnboardingEquipment);
    };
    /**
     * Returns a request builder for creating a `OnboardingEquipment` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `OnboardingEquipment`.
     */
    OnboardingEquipmentRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(OnboardingEquipment_1.OnboardingEquipment, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `OnboardingEquipment`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `OnboardingEquipment`.
     */
    OnboardingEquipmentRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(OnboardingEquipment_1.OnboardingEquipment, entity);
    };
    OnboardingEquipmentRequestBuilder.prototype.delete = function (onboardingEquipmentActivityActivityIdOrEntity, onboardingNewHireActivitiesStepProcessStepId, onboardingProcessOnboardingProcessId, equipmentId) {
        return new core_1.DeleteRequestBuilder(OnboardingEquipment_1.OnboardingEquipment, onboardingEquipmentActivityActivityIdOrEntity instanceof OnboardingEquipment_1.OnboardingEquipment ? onboardingEquipmentActivityActivityIdOrEntity : {
            OnboardingEquipmentActivity_activityId: onboardingEquipmentActivityActivityIdOrEntity,
            OnboardingNewHireActivitiesStep_processStepId: onboardingNewHireActivitiesStepProcessStepId,
            OnboardingProcess_onboardingProcessId: onboardingProcessOnboardingProcessId,
            equipmentId: equipmentId
        });
    };
    return OnboardingEquipmentRequestBuilder;
}(core_1.RequestBuilder));
exports.OnboardingEquipmentRequestBuilder = OnboardingEquipmentRequestBuilder;
//# sourceMappingURL=OnboardingEquipmentRequestBuilder.js.map