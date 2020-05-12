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
var TrendData_SysOverallPotential_1 = require("./TrendData_SysOverallPotential");
/**
 * Request builder class for operations supported on the [[TrendData_SysOverallPotential]] entity.
 */
var TrendData_SysOverallPotentialRequestBuilder = /** @class */ (function (_super) {
    __extends(TrendData_SysOverallPotentialRequestBuilder, _super);
    function TrendData_SysOverallPotentialRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TrendData_SysOverallPotential` entity based on its keys.
     * @param id Key property. See [[TrendData_SysOverallPotential.id]].
     * @returns A request builder for creating requests to retrieve one `TrendData_SysOverallPotential` entity based on its keys.
     */
    TrendData_SysOverallPotentialRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(TrendData_SysOverallPotential_1.TrendData_SysOverallPotential, { id: id });
    };
    /**
     * Returns a request builder for querying all `TrendData_SysOverallPotential` entities.
     * @returns A request builder for creating requests to retrieve all `TrendData_SysOverallPotential` entities.
     */
    TrendData_SysOverallPotentialRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TrendData_SysOverallPotential_1.TrendData_SysOverallPotential);
    };
    /**
     * Returns a request builder for creating a `TrendData_SysOverallPotential` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TrendData_SysOverallPotential`.
     */
    TrendData_SysOverallPotentialRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(TrendData_SysOverallPotential_1.TrendData_SysOverallPotential, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `TrendData_SysOverallPotential`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TrendData_SysOverallPotential`.
     */
    TrendData_SysOverallPotentialRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(TrendData_SysOverallPotential_1.TrendData_SysOverallPotential, entity);
    };
    TrendData_SysOverallPotentialRequestBuilder.prototype.delete = function (idOrEntity) {
        return new core_1.DeleteRequestBuilder(TrendData_SysOverallPotential_1.TrendData_SysOverallPotential, idOrEntity instanceof TrendData_SysOverallPotential_1.TrendData_SysOverallPotential ? idOrEntity : { id: idOrEntity });
    };
    return TrendData_SysOverallPotentialRequestBuilder;
}(core_1.RequestBuilder));
exports.TrendData_SysOverallPotentialRequestBuilder = TrendData_SysOverallPotentialRequestBuilder;
//# sourceMappingURL=TrendData_SysOverallPotentialRequestBuilder.js.map