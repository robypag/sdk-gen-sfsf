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
var FoCostCenter_1 = require("./FoCostCenter");
/**
 * Request builder class for operations supported on the [[FoCostCenter]] entity.
 */
var FoCostCenterRequestBuilder = /** @class */ (function (_super) {
    __extends(FoCostCenterRequestBuilder, _super);
    function FoCostCenterRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoCostCenter` entity based on its keys.
     * @param externalCode Key property. See [[FoCostCenter.externalCode]].
     * @param startDate Key property. See [[FoCostCenter.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoCostCenter` entity based on its keys.
     */
    FoCostCenterRequestBuilder.prototype.getByKey = function (externalCode, startDate) {
        return new core_1.GetByKeyRequestBuilder(FoCostCenter_1.FoCostCenter, {
            externalCode: externalCode,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `FoCostCenter` entities.
     * @returns A request builder for creating requests to retrieve all `FoCostCenter` entities.
     */
    FoCostCenterRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoCostCenter_1.FoCostCenter);
    };
    /**
     * Returns a request builder for creating a `FoCostCenter` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FoCostCenter`.
     */
    FoCostCenterRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(FoCostCenter_1.FoCostCenter, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `FoCostCenter`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FoCostCenter`.
     */
    FoCostCenterRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(FoCostCenter_1.FoCostCenter, entity);
    };
    FoCostCenterRequestBuilder.prototype.delete = function (externalCodeOrEntity, startDate) {
        return new core_1.DeleteRequestBuilder(FoCostCenter_1.FoCostCenter, externalCodeOrEntity instanceof FoCostCenter_1.FoCostCenter ? externalCodeOrEntity : {
            externalCode: externalCodeOrEntity,
            startDate: startDate
        });
    };
    return FoCostCenterRequestBuilder;
}(core_1.RequestBuilder));
exports.FoCostCenterRequestBuilder = FoCostCenterRequestBuilder;
//# sourceMappingURL=FoCostCenterRequestBuilder.js.map