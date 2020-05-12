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
var LegalEntityDeu_1 = require("./LegalEntityDeu");
/**
 * Request builder class for operations supported on the [[LegalEntityDeu]] entity.
 */
var LegalEntityDeuRequestBuilder = /** @class */ (function (_super) {
    __extends(LegalEntityDeuRequestBuilder, _super);
    function LegalEntityDeuRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `LegalEntityDeu` entity based on its keys.
     * @param legalEntityEffectiveStartDate Key property. See [[LegalEntityDeu.legalEntityEffectiveStartDate]].
     * @param legalEntityExternalCode Key property. See [[LegalEntityDeu.legalEntityExternalCode]].
     * @param externalCode Key property. See [[LegalEntityDeu.externalCode]].
     * @returns A request builder for creating requests to retrieve one `LegalEntityDeu` entity based on its keys.
     */
    LegalEntityDeuRequestBuilder.prototype.getByKey = function (legalEntityEffectiveStartDate, legalEntityExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(LegalEntityDeu_1.LegalEntityDeu, {
            LegalEntity_effectiveStartDate: legalEntityEffectiveStartDate,
            LegalEntity_externalCode: legalEntityExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `LegalEntityDeu` entities.
     * @returns A request builder for creating requests to retrieve all `LegalEntityDeu` entities.
     */
    LegalEntityDeuRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(LegalEntityDeu_1.LegalEntityDeu);
    };
    /**
     * Returns a request builder for creating a `LegalEntityDeu` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `LegalEntityDeu`.
     */
    LegalEntityDeuRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(LegalEntityDeu_1.LegalEntityDeu, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `LegalEntityDeu`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `LegalEntityDeu`.
     */
    LegalEntityDeuRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(LegalEntityDeu_1.LegalEntityDeu, entity);
    };
    LegalEntityDeuRequestBuilder.prototype.delete = function (legalEntityEffectiveStartDateOrEntity, legalEntityExternalCode, externalCode) {
        return new core_1.DeleteRequestBuilder(LegalEntityDeu_1.LegalEntityDeu, legalEntityEffectiveStartDateOrEntity instanceof LegalEntityDeu_1.LegalEntityDeu ? legalEntityEffectiveStartDateOrEntity : {
            LegalEntity_effectiveStartDate: legalEntityEffectiveStartDateOrEntity,
            LegalEntity_externalCode: legalEntityExternalCode,
            externalCode: externalCode
        });
    };
    return LegalEntityDeuRequestBuilder;
}(core_1.RequestBuilder));
exports.LegalEntityDeuRequestBuilder = LegalEntityDeuRequestBuilder;
//# sourceMappingURL=LegalEntityDeuRequestBuilder.js.map