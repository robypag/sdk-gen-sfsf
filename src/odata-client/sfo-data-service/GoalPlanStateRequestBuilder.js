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
var GoalPlanState_1 = require("./GoalPlanState");
/**
 * Request builder class for operations supported on the [[GoalPlanState]] entity.
 */
var GoalPlanStateRequestBuilder = /** @class */ (function (_super) {
    __extends(GoalPlanStateRequestBuilder, _super);
    function GoalPlanStateRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `GoalPlanState` entity based on its keys.
     * @param planId Key property. See [[GoalPlanState.planId]].
     * @param stateId Key property. See [[GoalPlanState.stateId]].
     * @param userId Key property. See [[GoalPlanState.userId]].
     * @returns A request builder for creating requests to retrieve one `GoalPlanState` entity based on its keys.
     */
    GoalPlanStateRequestBuilder.prototype.getByKey = function (planId, stateId, userId) {
        return new core_1.GetByKeyRequestBuilder(GoalPlanState_1.GoalPlanState, {
            planId: planId,
            stateId: stateId,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `GoalPlanState` entities.
     * @returns A request builder for creating requests to retrieve all `GoalPlanState` entities.
     */
    GoalPlanStateRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(GoalPlanState_1.GoalPlanState);
    };
    /**
     * Returns a request builder for updating an entity of type `GoalPlanState`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `GoalPlanState`.
     */
    GoalPlanStateRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(GoalPlanState_1.GoalPlanState, entity);
    };
    GoalPlanStateRequestBuilder.prototype.delete = function (planIdOrEntity, stateId, userId) {
        return new core_1.DeleteRequestBuilder(GoalPlanState_1.GoalPlanState, planIdOrEntity instanceof GoalPlanState_1.GoalPlanState ? planIdOrEntity : {
            planId: planIdOrEntity,
            stateId: stateId,
            userId: userId
        });
    };
    return GoalPlanStateRequestBuilder;
}(core_1.RequestBuilder));
exports.GoalPlanStateRequestBuilder = GoalPlanStateRequestBuilder;
//# sourceMappingURL=GoalPlanStateRequestBuilder.js.map