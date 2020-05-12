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
var Cust_SubBusinessUnit_1 = require("./Cust_SubBusinessUnit");
/**
 * Request builder class for operations supported on the [[Cust_SubBusinessUnit]] entity.
 */
var Cust_SubBusinessUnitRequestBuilder = /** @class */ (function (_super) {
    __extends(Cust_SubBusinessUnitRequestBuilder, _super);
    function Cust_SubBusinessUnitRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Cust_SubBusinessUnit` entity based on its keys.
     * @param effectiveStartDate Key property. See [[Cust_SubBusinessUnit.effectiveStartDate]].
     * @param externalCode Key property. See [[Cust_SubBusinessUnit.externalCode]].
     * @returns A request builder for creating requests to retrieve one `Cust_SubBusinessUnit` entity based on its keys.
     */
    Cust_SubBusinessUnitRequestBuilder.prototype.getByKey = function (effectiveStartDate, externalCode) {
        return new core_1.GetByKeyRequestBuilder(Cust_SubBusinessUnit_1.Cust_SubBusinessUnit, {
            effectiveStartDate: effectiveStartDate,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `Cust_SubBusinessUnit` entities.
     * @returns A request builder for creating requests to retrieve all `Cust_SubBusinessUnit` entities.
     */
    Cust_SubBusinessUnitRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Cust_SubBusinessUnit_1.Cust_SubBusinessUnit);
    };
    /**
     * Returns a request builder for creating a `Cust_SubBusinessUnit` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Cust_SubBusinessUnit`.
     */
    Cust_SubBusinessUnitRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Cust_SubBusinessUnit_1.Cust_SubBusinessUnit, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Cust_SubBusinessUnit`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Cust_SubBusinessUnit`.
     */
    Cust_SubBusinessUnitRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Cust_SubBusinessUnit_1.Cust_SubBusinessUnit, entity);
    };
    Cust_SubBusinessUnitRequestBuilder.prototype.delete = function (effectiveStartDateOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(Cust_SubBusinessUnit_1.Cust_SubBusinessUnit, effectiveStartDateOrEntity instanceof Cust_SubBusinessUnit_1.Cust_SubBusinessUnit ? effectiveStartDateOrEntity : {
            effectiveStartDate: effectiveStartDateOrEntity,
            externalCode: externalCode
        });
    };
    return Cust_SubBusinessUnitRequestBuilder;
}(core_1.RequestBuilder));
exports.Cust_SubBusinessUnitRequestBuilder = Cust_SubBusinessUnitRequestBuilder;
//# sourceMappingURL=Cust_SubBusinessUnitRequestBuilder.js.map