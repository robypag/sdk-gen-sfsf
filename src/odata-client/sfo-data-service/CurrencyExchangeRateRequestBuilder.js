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
var CurrencyExchangeRate_1 = require("./CurrencyExchangeRate");
/**
 * Request builder class for operations supported on the [[CurrencyExchangeRate]] entity.
 */
var CurrencyExchangeRateRequestBuilder = /** @class */ (function (_super) {
    __extends(CurrencyExchangeRateRequestBuilder, _super);
    function CurrencyExchangeRateRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CurrencyExchangeRate` entity based on its keys.
     * @param effectiveStartDate Key property. See [[CurrencyExchangeRate.effectiveStartDate]].
     * @param externalCode Key property. See [[CurrencyExchangeRate.externalCode]].
     * @returns A request builder for creating requests to retrieve one `CurrencyExchangeRate` entity based on its keys.
     */
    CurrencyExchangeRateRequestBuilder.prototype.getByKey = function (effectiveStartDate, externalCode) {
        return new core_1.GetByKeyRequestBuilder(CurrencyExchangeRate_1.CurrencyExchangeRate, {
            effectiveStartDate: effectiveStartDate,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `CurrencyExchangeRate` entities.
     * @returns A request builder for creating requests to retrieve all `CurrencyExchangeRate` entities.
     */
    CurrencyExchangeRateRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(CurrencyExchangeRate_1.CurrencyExchangeRate);
    };
    /**
     * Returns a request builder for creating a `CurrencyExchangeRate` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CurrencyExchangeRate`.
     */
    CurrencyExchangeRateRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(CurrencyExchangeRate_1.CurrencyExchangeRate, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CurrencyExchangeRate`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CurrencyExchangeRate`.
     */
    CurrencyExchangeRateRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(CurrencyExchangeRate_1.CurrencyExchangeRate, entity);
    };
    CurrencyExchangeRateRequestBuilder.prototype.delete = function (effectiveStartDateOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(CurrencyExchangeRate_1.CurrencyExchangeRate, effectiveStartDateOrEntity instanceof CurrencyExchangeRate_1.CurrencyExchangeRate ? effectiveStartDateOrEntity : {
            effectiveStartDate: effectiveStartDateOrEntity,
            externalCode: externalCode
        });
    };
    return CurrencyExchangeRateRequestBuilder;
}(core_1.RequestBuilder));
exports.CurrencyExchangeRateRequestBuilder = CurrencyExchangeRateRequestBuilder;
//# sourceMappingURL=CurrencyExchangeRateRequestBuilder.js.map