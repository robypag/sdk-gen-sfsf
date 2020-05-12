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
var TrendData_SysOverallPerformance_1 = require("./TrendData_SysOverallPerformance");
/**
 * Request builder class for operations supported on the [[TrendData_SysOverallPerformance]] entity.
 */
var TrendData_SysOverallPerformanceRequestBuilder = /** @class */ (function (_super) {
    __extends(TrendData_SysOverallPerformanceRequestBuilder, _super);
    function TrendData_SysOverallPerformanceRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TrendData_SysOverallPerformance` entity based on its keys.
     * @param id Key property. See [[TrendData_SysOverallPerformance.id]].
     * @returns A request builder for creating requests to retrieve one `TrendData_SysOverallPerformance` entity based on its keys.
     */
    TrendData_SysOverallPerformanceRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(TrendData_SysOverallPerformance_1.TrendData_SysOverallPerformance, { id: id });
    };
    /**
     * Returns a request builder for querying all `TrendData_SysOverallPerformance` entities.
     * @returns A request builder for creating requests to retrieve all `TrendData_SysOverallPerformance` entities.
     */
    TrendData_SysOverallPerformanceRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TrendData_SysOverallPerformance_1.TrendData_SysOverallPerformance);
    };
    /**
     * Returns a request builder for creating a `TrendData_SysOverallPerformance` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TrendData_SysOverallPerformance`.
     */
    TrendData_SysOverallPerformanceRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(TrendData_SysOverallPerformance_1.TrendData_SysOverallPerformance, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `TrendData_SysOverallPerformance`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TrendData_SysOverallPerformance`.
     */
    TrendData_SysOverallPerformanceRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(TrendData_SysOverallPerformance_1.TrendData_SysOverallPerformance, entity);
    };
    TrendData_SysOverallPerformanceRequestBuilder.prototype.delete = function (idOrEntity) {
        return new core_1.DeleteRequestBuilder(TrendData_SysOverallPerformance_1.TrendData_SysOverallPerformance, idOrEntity instanceof TrendData_SysOverallPerformance_1.TrendData_SysOverallPerformance ? idOrEntity : { id: idOrEntity });
    };
    return TrendData_SysOverallPerformanceRequestBuilder;
}(core_1.RequestBuilder));
exports.TrendData_SysOverallPerformanceRequestBuilder = TrendData_SysOverallPerformanceRequestBuilder;
//# sourceMappingURL=TrendData_SysOverallPerformanceRequestBuilder.js.map