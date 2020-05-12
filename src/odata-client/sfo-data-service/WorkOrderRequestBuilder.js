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
var WorkOrder_1 = require("./WorkOrder");
/**
 * Request builder class for operations supported on the [[WorkOrder]] entity.
 */
var WorkOrderRequestBuilder = /** @class */ (function (_super) {
    __extends(WorkOrderRequestBuilder, _super);
    function WorkOrderRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `WorkOrder` entity based on its keys.
     * @param effectiveStartDate Key property. See [[WorkOrder.effectiveStartDate]].
     * @param userSysId Key property. See [[WorkOrder.userSysId]].
     * @returns A request builder for creating requests to retrieve one `WorkOrder` entity based on its keys.
     */
    WorkOrderRequestBuilder.prototype.getByKey = function (effectiveStartDate, userSysId) {
        return new core_1.GetByKeyRequestBuilder(WorkOrder_1.WorkOrder, {
            effectiveStartDate: effectiveStartDate,
            userSysId: userSysId
        });
    };
    /**
     * Returns a request builder for querying all `WorkOrder` entities.
     * @returns A request builder for creating requests to retrieve all `WorkOrder` entities.
     */
    WorkOrderRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(WorkOrder_1.WorkOrder);
    };
    /**
     * Returns a request builder for creating a `WorkOrder` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WorkOrder`.
     */
    WorkOrderRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(WorkOrder_1.WorkOrder, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `WorkOrder`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WorkOrder`.
     */
    WorkOrderRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(WorkOrder_1.WorkOrder, entity);
    };
    WorkOrderRequestBuilder.prototype.delete = function (effectiveStartDateOrEntity, userSysId) {
        return new core_1.DeleteRequestBuilder(WorkOrder_1.WorkOrder, effectiveStartDateOrEntity instanceof WorkOrder_1.WorkOrder ? effectiveStartDateOrEntity : {
            effectiveStartDate: effectiveStartDateOrEntity,
            userSysId: userSysId
        });
    };
    return WorkOrderRequestBuilder;
}(core_1.RequestBuilder));
exports.WorkOrderRequestBuilder = WorkOrderRequestBuilder;
//# sourceMappingURL=WorkOrderRequestBuilder.js.map