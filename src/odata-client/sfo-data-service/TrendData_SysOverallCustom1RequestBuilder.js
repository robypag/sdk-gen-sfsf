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
var TrendData_SysOverallCustom1_1 = require("./TrendData_SysOverallCustom1");
/**
 * Request builder class for operations supported on the [[TrendData_SysOverallCustom1]] entity.
 */
var TrendData_SysOverallCustom1RequestBuilder = /** @class */ (function (_super) {
    __extends(TrendData_SysOverallCustom1RequestBuilder, _super);
    function TrendData_SysOverallCustom1RequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TrendData_SysOverallCustom1` entity based on its keys.
     * @param id Key property. See [[TrendData_SysOverallCustom1.id]].
     * @returns A request builder for creating requests to retrieve one `TrendData_SysOverallCustom1` entity based on its keys.
     */
    TrendData_SysOverallCustom1RequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(TrendData_SysOverallCustom1_1.TrendData_SysOverallCustom1, { id: id });
    };
    /**
     * Returns a request builder for querying all `TrendData_SysOverallCustom1` entities.
     * @returns A request builder for creating requests to retrieve all `TrendData_SysOverallCustom1` entities.
     */
    TrendData_SysOverallCustom1RequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TrendData_SysOverallCustom1_1.TrendData_SysOverallCustom1);
    };
    /**
     * Returns a request builder for creating a `TrendData_SysOverallCustom1` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TrendData_SysOverallCustom1`.
     */
    TrendData_SysOverallCustom1RequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(TrendData_SysOverallCustom1_1.TrendData_SysOverallCustom1, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `TrendData_SysOverallCustom1`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TrendData_SysOverallCustom1`.
     */
    TrendData_SysOverallCustom1RequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(TrendData_SysOverallCustom1_1.TrendData_SysOverallCustom1, entity);
    };
    TrendData_SysOverallCustom1RequestBuilder.prototype.delete = function (idOrEntity) {
        return new core_1.DeleteRequestBuilder(TrendData_SysOverallCustom1_1.TrendData_SysOverallCustom1, idOrEntity instanceof TrendData_SysOverallCustom1_1.TrendData_SysOverallCustom1 ? idOrEntity : { id: idOrEntity });
    };
    return TrendData_SysOverallCustom1RequestBuilder;
}(core_1.RequestBuilder));
exports.TrendData_SysOverallCustom1RequestBuilder = TrendData_SysOverallCustom1RequestBuilder;
//# sourceMappingURL=TrendData_SysOverallCustom1RequestBuilder.js.map