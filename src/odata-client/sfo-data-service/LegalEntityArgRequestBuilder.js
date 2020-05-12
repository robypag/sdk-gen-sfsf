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
var LegalEntityArg_1 = require("./LegalEntityArg");
/**
 * Request builder class for operations supported on the [[LegalEntityArg]] entity.
 */
var LegalEntityArgRequestBuilder = /** @class */ (function (_super) {
    __extends(LegalEntityArgRequestBuilder, _super);
    function LegalEntityArgRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `LegalEntityArg` entity based on its keys.
     * @param legalEntityEffectiveStartDate Key property. See [[LegalEntityArg.legalEntityEffectiveStartDate]].
     * @param legalEntityExternalCode Key property. See [[LegalEntityArg.legalEntityExternalCode]].
     * @param externalCode Key property. See [[LegalEntityArg.externalCode]].
     * @returns A request builder for creating requests to retrieve one `LegalEntityArg` entity based on its keys.
     */
    LegalEntityArgRequestBuilder.prototype.getByKey = function (legalEntityEffectiveStartDate, legalEntityExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(LegalEntityArg_1.LegalEntityArg, {
            LegalEntity_effectiveStartDate: legalEntityEffectiveStartDate,
            LegalEntity_externalCode: legalEntityExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `LegalEntityArg` entities.
     * @returns A request builder for creating requests to retrieve all `LegalEntityArg` entities.
     */
    LegalEntityArgRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(LegalEntityArg_1.LegalEntityArg);
    };
    /**
     * Returns a request builder for creating a `LegalEntityArg` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `LegalEntityArg`.
     */
    LegalEntityArgRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(LegalEntityArg_1.LegalEntityArg, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `LegalEntityArg`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `LegalEntityArg`.
     */
    LegalEntityArgRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(LegalEntityArg_1.LegalEntityArg, entity);
    };
    LegalEntityArgRequestBuilder.prototype.delete = function (legalEntityEffectiveStartDateOrEntity, legalEntityExternalCode, externalCode) {
        return new core_1.DeleteRequestBuilder(LegalEntityArg_1.LegalEntityArg, legalEntityEffectiveStartDateOrEntity instanceof LegalEntityArg_1.LegalEntityArg ? legalEntityEffectiveStartDateOrEntity : {
            LegalEntity_effectiveStartDate: legalEntityEffectiveStartDateOrEntity,
            LegalEntity_externalCode: legalEntityExternalCode,
            externalCode: externalCode
        });
    };
    return LegalEntityArgRequestBuilder;
}(core_1.RequestBuilder));
exports.LegalEntityArgRequestBuilder = LegalEntityArgRequestBuilder;
//# sourceMappingURL=LegalEntityArgRequestBuilder.js.map