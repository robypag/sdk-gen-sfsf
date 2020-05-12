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
var GoalWeight_1 = require("./GoalWeight");
/**
 * Request builder class for operations supported on the [[GoalWeight]] entity.
 */
var GoalWeightRequestBuilder = /** @class */ (function (_super) {
    __extends(GoalWeightRequestBuilder, _super);
    function GoalWeightRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `GoalWeight` entity based on its keys.
     * @param planId Key property. See [[GoalWeight.planId]].
     * @param type Key property. See [[GoalWeight.type]].
     * @returns A request builder for creating requests to retrieve one `GoalWeight` entity based on its keys.
     */
    GoalWeightRequestBuilder.prototype.getByKey = function (planId, type) {
        return new core_1.GetByKeyRequestBuilder(GoalWeight_1.GoalWeight, {
            planId: planId,
            type: type
        });
    };
    /**
     * Returns a request builder for querying all `GoalWeight` entities.
     * @returns A request builder for creating requests to retrieve all `GoalWeight` entities.
     */
    GoalWeightRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(GoalWeight_1.GoalWeight);
    };
    return GoalWeightRequestBuilder;
}(core_1.RequestBuilder));
exports.GoalWeightRequestBuilder = GoalWeightRequestBuilder;
//# sourceMappingURL=GoalWeightRequestBuilder.js.map