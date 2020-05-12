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
var Country_1 = require("./Country");
/**
 * Request builder class for operations supported on the [[Country]] entity.
 */
var CountryRequestBuilder = /** @class */ (function (_super) {
    __extends(CountryRequestBuilder, _super);
    function CountryRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Country` entity based on its keys.
     * @param code Key property. See [[Country.code]].
     * @param effectiveStartDate Key property. See [[Country.effectiveStartDate]].
     * @returns A request builder for creating requests to retrieve one `Country` entity based on its keys.
     */
    CountryRequestBuilder.prototype.getByKey = function (code, effectiveStartDate) {
        return new core_1.GetByKeyRequestBuilder(Country_1.Country, {
            code: code,
            effectiveStartDate: effectiveStartDate
        });
    };
    /**
     * Returns a request builder for querying all `Country` entities.
     * @returns A request builder for creating requests to retrieve all `Country` entities.
     */
    CountryRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Country_1.Country);
    };
    /**
     * Returns a request builder for creating a `Country` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Country`.
     */
    CountryRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Country_1.Country, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Country`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Country`.
     */
    CountryRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Country_1.Country, entity);
    };
    CountryRequestBuilder.prototype.delete = function (codeOrEntity, effectiveStartDate) {
        return new core_1.DeleteRequestBuilder(Country_1.Country, codeOrEntity instanceof Country_1.Country ? codeOrEntity : {
            code: codeOrEntity,
            effectiveStartDate: effectiveStartDate
        });
    };
    return CountryRequestBuilder;
}(core_1.RequestBuilder));
exports.CountryRequestBuilder = CountryRequestBuilder;
//# sourceMappingURL=CountryRequestBuilder.js.map