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
var LegalEntityRus_1 = require("./LegalEntityRus");
/**
 * Request builder class for operations supported on the [[LegalEntityRus]] entity.
 */
var LegalEntityRusRequestBuilder = /** @class */ (function (_super) {
    __extends(LegalEntityRusRequestBuilder, _super);
    function LegalEntityRusRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `LegalEntityRus` entity based on its keys.
     * @param legalEntityEffectiveStartDate Key property. See [[LegalEntityRus.legalEntityEffectiveStartDate]].
     * @param legalEntityExternalCode Key property. See [[LegalEntityRus.legalEntityExternalCode]].
     * @param externalCode Key property. See [[LegalEntityRus.externalCode]].
     * @returns A request builder for creating requests to retrieve one `LegalEntityRus` entity based on its keys.
     */
    LegalEntityRusRequestBuilder.prototype.getByKey = function (legalEntityEffectiveStartDate, legalEntityExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(LegalEntityRus_1.LegalEntityRus, {
            LegalEntity_effectiveStartDate: legalEntityEffectiveStartDate,
            LegalEntity_externalCode: legalEntityExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `LegalEntityRus` entities.
     * @returns A request builder for creating requests to retrieve all `LegalEntityRus` entities.
     */
    LegalEntityRusRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(LegalEntityRus_1.LegalEntityRus);
    };
    /**
     * Returns a request builder for creating a `LegalEntityRus` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `LegalEntityRus`.
     */
    LegalEntityRusRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(LegalEntityRus_1.LegalEntityRus, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `LegalEntityRus`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `LegalEntityRus`.
     */
    LegalEntityRusRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(LegalEntityRus_1.LegalEntityRus, entity);
    };
    LegalEntityRusRequestBuilder.prototype.delete = function (legalEntityEffectiveStartDateOrEntity, legalEntityExternalCode, externalCode) {
        return new core_1.DeleteRequestBuilder(LegalEntityRus_1.LegalEntityRus, legalEntityEffectiveStartDateOrEntity instanceof LegalEntityRus_1.LegalEntityRus ? legalEntityEffectiveStartDateOrEntity : {
            LegalEntity_effectiveStartDate: legalEntityEffectiveStartDateOrEntity,
            LegalEntity_externalCode: legalEntityExternalCode,
            externalCode: externalCode
        });
    };
    return LegalEntityRusRequestBuilder;
}(core_1.RequestBuilder));
exports.LegalEntityRusRequestBuilder = LegalEntityRusRequestBuilder;
//# sourceMappingURL=LegalEntityRusRequestBuilder.js.map