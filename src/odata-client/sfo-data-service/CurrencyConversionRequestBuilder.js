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
var CurrencyConversion_1 = require("./CurrencyConversion");
/**
 * Request builder class for operations supported on the [[CurrencyConversion]] entity.
 */
var CurrencyConversionRequestBuilder = /** @class */ (function (_super) {
    __extends(CurrencyConversionRequestBuilder, _super);
    function CurrencyConversionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CurrencyConversion` entity based on its keys.
     * @param code Key property. See [[CurrencyConversion.code]].
     * @param effectiveStartDate Key property. See [[CurrencyConversion.effectiveStartDate]].
     * @returns A request builder for creating requests to retrieve one `CurrencyConversion` entity based on its keys.
     */
    CurrencyConversionRequestBuilder.prototype.getByKey = function (code, effectiveStartDate) {
        return new core_1.GetByKeyRequestBuilder(CurrencyConversion_1.CurrencyConversion, {
            code: code,
            effectiveStartDate: effectiveStartDate
        });
    };
    /**
     * Returns a request builder for querying all `CurrencyConversion` entities.
     * @returns A request builder for creating requests to retrieve all `CurrencyConversion` entities.
     */
    CurrencyConversionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(CurrencyConversion_1.CurrencyConversion);
    };
    /**
     * Returns a request builder for creating a `CurrencyConversion` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CurrencyConversion`.
     */
    CurrencyConversionRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(CurrencyConversion_1.CurrencyConversion, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CurrencyConversion`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CurrencyConversion`.
     */
    CurrencyConversionRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(CurrencyConversion_1.CurrencyConversion, entity);
    };
    CurrencyConversionRequestBuilder.prototype.delete = function (codeOrEntity, effectiveStartDate) {
        return new core_1.DeleteRequestBuilder(CurrencyConversion_1.CurrencyConversion, codeOrEntity instanceof CurrencyConversion_1.CurrencyConversion ? codeOrEntity : {
            code: codeOrEntity,
            effectiveStartDate: effectiveStartDate
        });
    };
    return CurrencyConversionRequestBuilder;
}(core_1.RequestBuilder));
exports.CurrencyConversionRequestBuilder = CurrencyConversionRequestBuilder;
//# sourceMappingURL=CurrencyConversionRequestBuilder.js.map