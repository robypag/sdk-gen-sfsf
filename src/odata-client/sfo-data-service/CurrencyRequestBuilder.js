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
var Currency_1 = require("./Currency");
/**
 * Request builder class for operations supported on the [[Currency]] entity.
 */
var CurrencyRequestBuilder = /** @class */ (function (_super) {
    __extends(CurrencyRequestBuilder, _super);
    function CurrencyRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Currency` entity based on its keys.
     * @param code Key property. See [[Currency.code]].
     * @param effectiveStartDate Key property. See [[Currency.effectiveStartDate]].
     * @returns A request builder for creating requests to retrieve one `Currency` entity based on its keys.
     */
    CurrencyRequestBuilder.prototype.getByKey = function (code, effectiveStartDate) {
        return new core_1.GetByKeyRequestBuilder(Currency_1.Currency, {
            code: code,
            effectiveStartDate: effectiveStartDate
        });
    };
    /**
     * Returns a request builder for querying all `Currency` entities.
     * @returns A request builder for creating requests to retrieve all `Currency` entities.
     */
    CurrencyRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Currency_1.Currency);
    };
    /**
     * Returns a request builder for creating a `Currency` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Currency`.
     */
    CurrencyRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Currency_1.Currency, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Currency`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Currency`.
     */
    CurrencyRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Currency_1.Currency, entity);
    };
    CurrencyRequestBuilder.prototype.delete = function (codeOrEntity, effectiveStartDate) {
        return new core_1.DeleteRequestBuilder(Currency_1.Currency, codeOrEntity instanceof Currency_1.Currency ? codeOrEntity : {
            code: codeOrEntity,
            effectiveStartDate: effectiveStartDate
        });
    };
    return CurrencyRequestBuilder;
}(core_1.RequestBuilder));
exports.CurrencyRequestBuilder = CurrencyRequestBuilder;
//# sourceMappingURL=CurrencyRequestBuilder.js.map