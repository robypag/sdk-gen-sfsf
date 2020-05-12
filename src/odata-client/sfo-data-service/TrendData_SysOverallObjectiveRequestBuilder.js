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
var TrendData_SysOverallObjective_1 = require("./TrendData_SysOverallObjective");
/**
 * Request builder class for operations supported on the [[TrendData_SysOverallObjective]] entity.
 */
var TrendData_SysOverallObjectiveRequestBuilder = /** @class */ (function (_super) {
    __extends(TrendData_SysOverallObjectiveRequestBuilder, _super);
    function TrendData_SysOverallObjectiveRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TrendData_SysOverallObjective` entity based on its keys.
     * @param id Key property. See [[TrendData_SysOverallObjective.id]].
     * @returns A request builder for creating requests to retrieve one `TrendData_SysOverallObjective` entity based on its keys.
     */
    TrendData_SysOverallObjectiveRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(TrendData_SysOverallObjective_1.TrendData_SysOverallObjective, { id: id });
    };
    /**
     * Returns a request builder for querying all `TrendData_SysOverallObjective` entities.
     * @returns A request builder for creating requests to retrieve all `TrendData_SysOverallObjective` entities.
     */
    TrendData_SysOverallObjectiveRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TrendData_SysOverallObjective_1.TrendData_SysOverallObjective);
    };
    /**
     * Returns a request builder for creating a `TrendData_SysOverallObjective` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TrendData_SysOverallObjective`.
     */
    TrendData_SysOverallObjectiveRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(TrendData_SysOverallObjective_1.TrendData_SysOverallObjective, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `TrendData_SysOverallObjective`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TrendData_SysOverallObjective`.
     */
    TrendData_SysOverallObjectiveRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(TrendData_SysOverallObjective_1.TrendData_SysOverallObjective, entity);
    };
    TrendData_SysOverallObjectiveRequestBuilder.prototype.delete = function (idOrEntity) {
        return new core_1.DeleteRequestBuilder(TrendData_SysOverallObjective_1.TrendData_SysOverallObjective, idOrEntity instanceof TrendData_SysOverallObjective_1.TrendData_SysOverallObjective ? idOrEntity : { id: idOrEntity });
    };
    return TrendData_SysOverallObjectiveRequestBuilder;
}(core_1.RequestBuilder));
exports.TrendData_SysOverallObjectiveRequestBuilder = TrendData_SysOverallObjectiveRequestBuilder;
//# sourceMappingURL=TrendData_SysOverallObjectiveRequestBuilder.js.map