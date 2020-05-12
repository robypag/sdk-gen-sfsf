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
var Cust_Rcm_Operator_Lookup_1 = require("./Cust_Rcm_Operator_Lookup");
/**
 * Request builder class for operations supported on the [[Cust_Rcm_Operator_Lookup]] entity.
 */
var Cust_Rcm_Operator_LookupRequestBuilder = /** @class */ (function (_super) {
    __extends(Cust_Rcm_Operator_LookupRequestBuilder, _super);
    function Cust_Rcm_Operator_LookupRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Cust_Rcm_Operator_Lookup` entity based on its keys.
     * @param effectiveStartDate Key property. See [[Cust_Rcm_Operator_Lookup.effectiveStartDate]].
     * @param externalCode Key property. See [[Cust_Rcm_Operator_Lookup.externalCode]].
     * @returns A request builder for creating requests to retrieve one `Cust_Rcm_Operator_Lookup` entity based on its keys.
     */
    Cust_Rcm_Operator_LookupRequestBuilder.prototype.getByKey = function (effectiveStartDate, externalCode) {
        return new core_1.GetByKeyRequestBuilder(Cust_Rcm_Operator_Lookup_1.Cust_Rcm_Operator_Lookup, {
            effectiveStartDate: effectiveStartDate,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `Cust_Rcm_Operator_Lookup` entities.
     * @returns A request builder for creating requests to retrieve all `Cust_Rcm_Operator_Lookup` entities.
     */
    Cust_Rcm_Operator_LookupRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Cust_Rcm_Operator_Lookup_1.Cust_Rcm_Operator_Lookup);
    };
    /**
     * Returns a request builder for creating a `Cust_Rcm_Operator_Lookup` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Cust_Rcm_Operator_Lookup`.
     */
    Cust_Rcm_Operator_LookupRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Cust_Rcm_Operator_Lookup_1.Cust_Rcm_Operator_Lookup, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Cust_Rcm_Operator_Lookup`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Cust_Rcm_Operator_Lookup`.
     */
    Cust_Rcm_Operator_LookupRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Cust_Rcm_Operator_Lookup_1.Cust_Rcm_Operator_Lookup, entity);
    };
    Cust_Rcm_Operator_LookupRequestBuilder.prototype.delete = function (effectiveStartDateOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(Cust_Rcm_Operator_Lookup_1.Cust_Rcm_Operator_Lookup, effectiveStartDateOrEntity instanceof Cust_Rcm_Operator_Lookup_1.Cust_Rcm_Operator_Lookup ? effectiveStartDateOrEntity : {
            effectiveStartDate: effectiveStartDateOrEntity,
            externalCode: externalCode
        });
    };
    return Cust_Rcm_Operator_LookupRequestBuilder;
}(core_1.RequestBuilder));
exports.Cust_Rcm_Operator_LookupRequestBuilder = Cust_Rcm_Operator_LookupRequestBuilder;
//# sourceMappingURL=Cust_Rcm_Operator_LookupRequestBuilder.js.map