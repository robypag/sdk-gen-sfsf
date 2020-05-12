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
var LegalEntityUsa_1 = require("./LegalEntityUsa");
/**
 * Request builder class for operations supported on the [[LegalEntityUsa]] entity.
 */
var LegalEntityUsaRequestBuilder = /** @class */ (function (_super) {
    __extends(LegalEntityUsaRequestBuilder, _super);
    function LegalEntityUsaRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `LegalEntityUsa` entity based on its keys.
     * @param legalEntityEffectiveStartDate Key property. See [[LegalEntityUsa.legalEntityEffectiveStartDate]].
     * @param legalEntityExternalCode Key property. See [[LegalEntityUsa.legalEntityExternalCode]].
     * @param externalCode Key property. See [[LegalEntityUsa.externalCode]].
     * @returns A request builder for creating requests to retrieve one `LegalEntityUsa` entity based on its keys.
     */
    LegalEntityUsaRequestBuilder.prototype.getByKey = function (legalEntityEffectiveStartDate, legalEntityExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(LegalEntityUsa_1.LegalEntityUsa, {
            LegalEntity_effectiveStartDate: legalEntityEffectiveStartDate,
            LegalEntity_externalCode: legalEntityExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `LegalEntityUsa` entities.
     * @returns A request builder for creating requests to retrieve all `LegalEntityUsa` entities.
     */
    LegalEntityUsaRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(LegalEntityUsa_1.LegalEntityUsa);
    };
    /**
     * Returns a request builder for creating a `LegalEntityUsa` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `LegalEntityUsa`.
     */
    LegalEntityUsaRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(LegalEntityUsa_1.LegalEntityUsa, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `LegalEntityUsa`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `LegalEntityUsa`.
     */
    LegalEntityUsaRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(LegalEntityUsa_1.LegalEntityUsa, entity);
    };
    LegalEntityUsaRequestBuilder.prototype.delete = function (legalEntityEffectiveStartDateOrEntity, legalEntityExternalCode, externalCode) {
        return new core_1.DeleteRequestBuilder(LegalEntityUsa_1.LegalEntityUsa, legalEntityEffectiveStartDateOrEntity instanceof LegalEntityUsa_1.LegalEntityUsa ? legalEntityEffectiveStartDateOrEntity : {
            LegalEntity_effectiveStartDate: legalEntityEffectiveStartDateOrEntity,
            LegalEntity_externalCode: legalEntityExternalCode,
            externalCode: externalCode
        });
    };
    return LegalEntityUsaRequestBuilder;
}(core_1.RequestBuilder));
exports.LegalEntityUsaRequestBuilder = LegalEntityUsaRequestBuilder;
//# sourceMappingURL=LegalEntityUsaRequestBuilder.js.map