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
var SimpleDevGoal_1 = require("./SimpleDevGoal");
/**
 * Request builder class for operations supported on the [[SimpleDevGoal]] entity.
 */
var SimpleDevGoalRequestBuilder = /** @class */ (function (_super) {
    __extends(SimpleDevGoalRequestBuilder, _super);
    function SimpleDevGoalRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SimpleDevGoal` entity based on its keys.
     * @param id Key property. See [[SimpleDevGoal.id]].
     * @returns A request builder for creating requests to retrieve one `SimpleDevGoal` entity based on its keys.
     */
    SimpleDevGoalRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(SimpleDevGoal_1.SimpleDevGoal, { id: id });
    };
    /**
     * Returns a request builder for querying all `SimpleDevGoal` entities.
     * @returns A request builder for creating requests to retrieve all `SimpleDevGoal` entities.
     */
    SimpleDevGoalRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SimpleDevGoal_1.SimpleDevGoal);
    };
    return SimpleDevGoalRequestBuilder;
}(core_1.RequestBuilder));
exports.SimpleDevGoalRequestBuilder = SimpleDevGoalRequestBuilder;
//# sourceMappingURL=SimpleDevGoalRequestBuilder.js.map