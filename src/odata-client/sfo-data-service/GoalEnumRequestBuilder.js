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
var GoalEnum_1 = require("./GoalEnum");
/**
 * Request builder class for operations supported on the [[GoalEnum]] entity.
 */
var GoalEnumRequestBuilder = /** @class */ (function (_super) {
    __extends(GoalEnumRequestBuilder, _super);
    function GoalEnumRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `GoalEnum` entity based on its keys.
     * @param fieldId Key property. See [[GoalEnum.fieldId]].
     * @param planId Key property. See [[GoalEnum.planId]].
     * @param value Key property. See [[GoalEnum.value]].
     * @returns A request builder for creating requests to retrieve one `GoalEnum` entity based on its keys.
     */
    GoalEnumRequestBuilder.prototype.getByKey = function (fieldId, planId, value) {
        return new core_1.GetByKeyRequestBuilder(GoalEnum_1.GoalEnum, {
            fieldId: fieldId,
            planId: planId,
            value: value
        });
    };
    /**
     * Returns a request builder for querying all `GoalEnum` entities.
     * @returns A request builder for creating requests to retrieve all `GoalEnum` entities.
     */
    GoalEnumRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(GoalEnum_1.GoalEnum);
    };
    return GoalEnumRequestBuilder;
}(core_1.RequestBuilder));
exports.GoalEnumRequestBuilder = GoalEnumRequestBuilder;
//# sourceMappingURL=GoalEnumRequestBuilder.js.map