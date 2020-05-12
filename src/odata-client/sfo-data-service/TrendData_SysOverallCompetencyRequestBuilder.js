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
var TrendData_SysOverallCompetency_1 = require("./TrendData_SysOverallCompetency");
/**
 * Request builder class for operations supported on the [[TrendData_SysOverallCompetency]] entity.
 */
var TrendData_SysOverallCompetencyRequestBuilder = /** @class */ (function (_super) {
    __extends(TrendData_SysOverallCompetencyRequestBuilder, _super);
    function TrendData_SysOverallCompetencyRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TrendData_SysOverallCompetency` entity based on its keys.
     * @param id Key property. See [[TrendData_SysOverallCompetency.id]].
     * @returns A request builder for creating requests to retrieve one `TrendData_SysOverallCompetency` entity based on its keys.
     */
    TrendData_SysOverallCompetencyRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(TrendData_SysOverallCompetency_1.TrendData_SysOverallCompetency, { id: id });
    };
    /**
     * Returns a request builder for querying all `TrendData_SysOverallCompetency` entities.
     * @returns A request builder for creating requests to retrieve all `TrendData_SysOverallCompetency` entities.
     */
    TrendData_SysOverallCompetencyRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TrendData_SysOverallCompetency_1.TrendData_SysOverallCompetency);
    };
    /**
     * Returns a request builder for creating a `TrendData_SysOverallCompetency` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TrendData_SysOverallCompetency`.
     */
    TrendData_SysOverallCompetencyRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(TrendData_SysOverallCompetency_1.TrendData_SysOverallCompetency, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `TrendData_SysOverallCompetency`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TrendData_SysOverallCompetency`.
     */
    TrendData_SysOverallCompetencyRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(TrendData_SysOverallCompetency_1.TrendData_SysOverallCompetency, entity);
    };
    TrendData_SysOverallCompetencyRequestBuilder.prototype.delete = function (idOrEntity) {
        return new core_1.DeleteRequestBuilder(TrendData_SysOverallCompetency_1.TrendData_SysOverallCompetency, idOrEntity instanceof TrendData_SysOverallCompetency_1.TrendData_SysOverallCompetency ? idOrEntity : { id: idOrEntity });
    };
    return TrendData_SysOverallCompetencyRequestBuilder;
}(core_1.RequestBuilder));
exports.TrendData_SysOverallCompetencyRequestBuilder = TrendData_SysOverallCompetencyRequestBuilder;
//# sourceMappingURL=TrendData_SysOverallCompetencyRequestBuilder.js.map