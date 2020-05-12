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
var SimpleGoal_1 = require("./SimpleGoal");
/**
 * Request builder class for operations supported on the [[SimpleGoal]] entity.
 */
var SimpleGoalRequestBuilder = /** @class */ (function (_super) {
    __extends(SimpleGoalRequestBuilder, _super);
    function SimpleGoalRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SimpleGoal` entity based on its keys.
     * @param id Key property. See [[SimpleGoal.id]].
     * @returns A request builder for creating requests to retrieve one `SimpleGoal` entity based on its keys.
     */
    SimpleGoalRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(SimpleGoal_1.SimpleGoal, { id: id });
    };
    /**
     * Returns a request builder for querying all `SimpleGoal` entities.
     * @returns A request builder for creating requests to retrieve all `SimpleGoal` entities.
     */
    SimpleGoalRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SimpleGoal_1.SimpleGoal);
    };
    return SimpleGoalRequestBuilder;
}(core_1.RequestBuilder));
exports.SimpleGoalRequestBuilder = SimpleGoalRequestBuilder;
//# sourceMappingURL=SimpleGoalRequestBuilder.js.map