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
var DevGoalTask_2005_1 = require("./DevGoalTask_2005");
/**
 * Request builder class for operations supported on the [[DevGoalTask_2005]] entity.
 */
var DevGoalTask_2005RequestBuilder = /** @class */ (function (_super) {
    __extends(DevGoalTask_2005RequestBuilder, _super);
    function DevGoalTask_2005RequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DevGoalTask_2005` entity based on its keys.
     * @param id Key property. See [[DevGoalTask_2005.id]].
     * @returns A request builder for creating requests to retrieve one `DevGoalTask_2005` entity based on its keys.
     */
    DevGoalTask_2005RequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(DevGoalTask_2005_1.DevGoalTask_2005, { id: id });
    };
    /**
     * Returns a request builder for querying all `DevGoalTask_2005` entities.
     * @returns A request builder for creating requests to retrieve all `DevGoalTask_2005` entities.
     */
    DevGoalTask_2005RequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(DevGoalTask_2005_1.DevGoalTask_2005);
    };
    DevGoalTask_2005RequestBuilder.prototype.delete = function (idOrEntity) {
        return new core_1.DeleteRequestBuilder(DevGoalTask_2005_1.DevGoalTask_2005, idOrEntity instanceof DevGoalTask_2005_1.DevGoalTask_2005 ? idOrEntity : { id: idOrEntity });
    };
    return DevGoalTask_2005RequestBuilder;
}(core_1.RequestBuilder));
exports.DevGoalTask_2005RequestBuilder = DevGoalTask_2005RequestBuilder;
//# sourceMappingURL=DevGoalTask_2005RequestBuilder.js.map