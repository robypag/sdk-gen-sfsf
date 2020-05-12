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
var LegalEntityFra_1 = require("./LegalEntityFra");
/**
 * Request builder class for operations supported on the [[LegalEntityFra]] entity.
 */
var LegalEntityFraRequestBuilder = /** @class */ (function (_super) {
    __extends(LegalEntityFraRequestBuilder, _super);
    function LegalEntityFraRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `LegalEntityFra` entity based on its keys.
     * @param legalEntityEffectiveStartDate Key property. See [[LegalEntityFra.legalEntityEffectiveStartDate]].
     * @param legalEntityExternalCode Key property. See [[LegalEntityFra.legalEntityExternalCode]].
     * @param externalCode Key property. See [[LegalEntityFra.externalCode]].
     * @returns A request builder for creating requests to retrieve one `LegalEntityFra` entity based on its keys.
     */
    LegalEntityFraRequestBuilder.prototype.getByKey = function (legalEntityEffectiveStartDate, legalEntityExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(LegalEntityFra_1.LegalEntityFra, {
            LegalEntity_effectiveStartDate: legalEntityEffectiveStartDate,
            LegalEntity_externalCode: legalEntityExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `LegalEntityFra` entities.
     * @returns A request builder for creating requests to retrieve all `LegalEntityFra` entities.
     */
    LegalEntityFraRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(LegalEntityFra_1.LegalEntityFra);
    };
    /**
     * Returns a request builder for creating a `LegalEntityFra` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `LegalEntityFra`.
     */
    LegalEntityFraRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(LegalEntityFra_1.LegalEntityFra, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `LegalEntityFra`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `LegalEntityFra`.
     */
    LegalEntityFraRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(LegalEntityFra_1.LegalEntityFra, entity);
    };
    LegalEntityFraRequestBuilder.prototype.delete = function (legalEntityEffectiveStartDateOrEntity, legalEntityExternalCode, externalCode) {
        return new core_1.DeleteRequestBuilder(LegalEntityFra_1.LegalEntityFra, legalEntityEffectiveStartDateOrEntity instanceof LegalEntityFra_1.LegalEntityFra ? legalEntityEffectiveStartDateOrEntity : {
            LegalEntity_effectiveStartDate: legalEntityEffectiveStartDateOrEntity,
            LegalEntity_externalCode: legalEntityExternalCode,
            externalCode: externalCode
        });
    };
    return LegalEntityFraRequestBuilder;
}(core_1.RequestBuilder));
exports.LegalEntityFraRequestBuilder = LegalEntityFraRequestBuilder;
//# sourceMappingURL=LegalEntityFraRequestBuilder.js.map