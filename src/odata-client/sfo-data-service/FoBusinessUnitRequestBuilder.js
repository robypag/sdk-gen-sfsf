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
var FoBusinessUnit_1 = require("./FoBusinessUnit");
/**
 * Request builder class for operations supported on the [[FoBusinessUnit]] entity.
 */
var FoBusinessUnitRequestBuilder = /** @class */ (function (_super) {
    __extends(FoBusinessUnitRequestBuilder, _super);
    function FoBusinessUnitRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoBusinessUnit` entity based on its keys.
     * @param externalCode Key property. See [[FoBusinessUnit.externalCode]].
     * @param startDate Key property. See [[FoBusinessUnit.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoBusinessUnit` entity based on its keys.
     */
    FoBusinessUnitRequestBuilder.prototype.getByKey = function (externalCode, startDate) {
        return new core_1.GetByKeyRequestBuilder(FoBusinessUnit_1.FoBusinessUnit, {
            externalCode: externalCode,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `FoBusinessUnit` entities.
     * @returns A request builder for creating requests to retrieve all `FoBusinessUnit` entities.
     */
    FoBusinessUnitRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoBusinessUnit_1.FoBusinessUnit);
    };
    /**
     * Returns a request builder for creating a `FoBusinessUnit` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FoBusinessUnit`.
     */
    FoBusinessUnitRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(FoBusinessUnit_1.FoBusinessUnit, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `FoBusinessUnit`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FoBusinessUnit`.
     */
    FoBusinessUnitRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(FoBusinessUnit_1.FoBusinessUnit, entity);
    };
    FoBusinessUnitRequestBuilder.prototype.delete = function (externalCodeOrEntity, startDate) {
        return new core_1.DeleteRequestBuilder(FoBusinessUnit_1.FoBusinessUnit, externalCodeOrEntity instanceof FoBusinessUnit_1.FoBusinessUnit ? externalCodeOrEntity : {
            externalCode: externalCodeOrEntity,
            startDate: startDate
        });
    };
    return FoBusinessUnitRequestBuilder;
}(core_1.RequestBuilder));
exports.FoBusinessUnitRequestBuilder = FoBusinessUnitRequestBuilder;
//# sourceMappingURL=FoBusinessUnitRequestBuilder.js.map