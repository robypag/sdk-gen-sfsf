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
var DevGoalPermission_2005_1 = require("./DevGoalPermission_2005");
/**
 * Request builder class for operations supported on the [[DevGoalPermission_2005]] entity.
 */
var DevGoalPermission_2005RequestBuilder = /** @class */ (function (_super) {
    __extends(DevGoalPermission_2005RequestBuilder, _super);
    function DevGoalPermission_2005RequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DevGoalPermission_2005` entity based on its keys.
     * @param id Key property. See [[DevGoalPermission_2005.id]].
     * @returns A request builder for creating requests to retrieve one `DevGoalPermission_2005` entity based on its keys.
     */
    DevGoalPermission_2005RequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(DevGoalPermission_2005_1.DevGoalPermission_2005, { id: id });
    };
    /**
     * Returns a request builder for querying all `DevGoalPermission_2005` entities.
     * @returns A request builder for creating requests to retrieve all `DevGoalPermission_2005` entities.
     */
    DevGoalPermission_2005RequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(DevGoalPermission_2005_1.DevGoalPermission_2005);
    };
    return DevGoalPermission_2005RequestBuilder;
}(core_1.RequestBuilder));
exports.DevGoalPermission_2005RequestBuilder = DevGoalPermission_2005RequestBuilder;
//# sourceMappingURL=DevGoalPermission_2005RequestBuilder.js.map