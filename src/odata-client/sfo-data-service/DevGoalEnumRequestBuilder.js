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
var DevGoalEnum_1 = require("./DevGoalEnum");
/**
 * Request builder class for operations supported on the [[DevGoalEnum]] entity.
 */
var DevGoalEnumRequestBuilder = /** @class */ (function (_super) {
    __extends(DevGoalEnumRequestBuilder, _super);
    function DevGoalEnumRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DevGoalEnum` entity based on its keys.
     * @param fieldId Key property. See [[DevGoalEnum.fieldId]].
     * @param planId Key property. See [[DevGoalEnum.planId]].
     * @param value Key property. See [[DevGoalEnum.value]].
     * @returns A request builder for creating requests to retrieve one `DevGoalEnum` entity based on its keys.
     */
    DevGoalEnumRequestBuilder.prototype.getByKey = function (fieldId, planId, value) {
        return new core_1.GetByKeyRequestBuilder(DevGoalEnum_1.DevGoalEnum, {
            fieldId: fieldId,
            planId: planId,
            value: value
        });
    };
    /**
     * Returns a request builder for querying all `DevGoalEnum` entities.
     * @returns A request builder for creating requests to retrieve all `DevGoalEnum` entities.
     */
    DevGoalEnumRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(DevGoalEnum_1.DevGoalEnum);
    };
    return DevGoalEnumRequestBuilder;
}(core_1.RequestBuilder));
exports.DevGoalEnumRequestBuilder = DevGoalEnumRequestBuilder;
//# sourceMappingURL=DevGoalEnumRequestBuilder.js.map