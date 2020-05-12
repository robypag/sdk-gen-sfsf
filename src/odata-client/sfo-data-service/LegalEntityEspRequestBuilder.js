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
var LegalEntityEsp_1 = require("./LegalEntityEsp");
/**
 * Request builder class for operations supported on the [[LegalEntityEsp]] entity.
 */
var LegalEntityEspRequestBuilder = /** @class */ (function (_super) {
    __extends(LegalEntityEspRequestBuilder, _super);
    function LegalEntityEspRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `LegalEntityEsp` entity based on its keys.
     * @param legalEntityEffectiveStartDate Key property. See [[LegalEntityEsp.legalEntityEffectiveStartDate]].
     * @param legalEntityExternalCode Key property. See [[LegalEntityEsp.legalEntityExternalCode]].
     * @param externalCode Key property. See [[LegalEntityEsp.externalCode]].
     * @returns A request builder for creating requests to retrieve one `LegalEntityEsp` entity based on its keys.
     */
    LegalEntityEspRequestBuilder.prototype.getByKey = function (legalEntityEffectiveStartDate, legalEntityExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(LegalEntityEsp_1.LegalEntityEsp, {
            LegalEntity_effectiveStartDate: legalEntityEffectiveStartDate,
            LegalEntity_externalCode: legalEntityExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `LegalEntityEsp` entities.
     * @returns A request builder for creating requests to retrieve all `LegalEntityEsp` entities.
     */
    LegalEntityEspRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(LegalEntityEsp_1.LegalEntityEsp);
    };
    /**
     * Returns a request builder for creating a `LegalEntityEsp` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `LegalEntityEsp`.
     */
    LegalEntityEspRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(LegalEntityEsp_1.LegalEntityEsp, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `LegalEntityEsp`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `LegalEntityEsp`.
     */
    LegalEntityEspRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(LegalEntityEsp_1.LegalEntityEsp, entity);
    };
    LegalEntityEspRequestBuilder.prototype.delete = function (legalEntityEffectiveStartDateOrEntity, legalEntityExternalCode, externalCode) {
        return new core_1.DeleteRequestBuilder(LegalEntityEsp_1.LegalEntityEsp, legalEntityEffectiveStartDateOrEntity instanceof LegalEntityEsp_1.LegalEntityEsp ? legalEntityEffectiveStartDateOrEntity : {
            LegalEntity_effectiveStartDate: legalEntityEffectiveStartDateOrEntity,
            LegalEntity_externalCode: legalEntityExternalCode,
            externalCode: externalCode
        });
    };
    return LegalEntityEspRequestBuilder;
}(core_1.RequestBuilder));
exports.LegalEntityEspRequestBuilder = LegalEntityEspRequestBuilder;
//# sourceMappingURL=LegalEntityEspRequestBuilder.js.map