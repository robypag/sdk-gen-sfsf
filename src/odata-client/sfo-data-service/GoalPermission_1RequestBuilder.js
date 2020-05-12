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
var GoalPermission_1_1 = require("./GoalPermission_1");
/**
 * Request builder class for operations supported on the [[GoalPermission_1]] entity.
 */
var GoalPermission_1RequestBuilder = /** @class */ (function (_super) {
    __extends(GoalPermission_1RequestBuilder, _super);
    function GoalPermission_1RequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `GoalPermission_1` entity based on its keys.
     * @param id Key property. See [[GoalPermission_1.id]].
     * @returns A request builder for creating requests to retrieve one `GoalPermission_1` entity based on its keys.
     */
    GoalPermission_1RequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(GoalPermission_1_1.GoalPermission_1, { id: id });
    };
    /**
     * Returns a request builder for querying all `GoalPermission_1` entities.
     * @returns A request builder for creating requests to retrieve all `GoalPermission_1` entities.
     */
    GoalPermission_1RequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(GoalPermission_1_1.GoalPermission_1);
    };
    return GoalPermission_1RequestBuilder;
}(core_1.RequestBuilder));
exports.GoalPermission_1RequestBuilder = GoalPermission_1RequestBuilder;
//# sourceMappingURL=GoalPermission_1RequestBuilder.js.map