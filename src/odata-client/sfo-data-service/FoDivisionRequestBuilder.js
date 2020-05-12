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
var FoDivision_1 = require("./FoDivision");
/**
 * Request builder class for operations supported on the [[FoDivision]] entity.
 */
var FoDivisionRequestBuilder = /** @class */ (function (_super) {
    __extends(FoDivisionRequestBuilder, _super);
    function FoDivisionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoDivision` entity based on its keys.
     * @param externalCode Key property. See [[FoDivision.externalCode]].
     * @param startDate Key property. See [[FoDivision.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoDivision` entity based on its keys.
     */
    FoDivisionRequestBuilder.prototype.getByKey = function (externalCode, startDate) {
        return new core_1.GetByKeyRequestBuilder(FoDivision_1.FoDivision, {
            externalCode: externalCode,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `FoDivision` entities.
     * @returns A request builder for creating requests to retrieve all `FoDivision` entities.
     */
    FoDivisionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoDivision_1.FoDivision);
    };
    /**
     * Returns a request builder for creating a `FoDivision` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FoDivision`.
     */
    FoDivisionRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(FoDivision_1.FoDivision, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `FoDivision`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FoDivision`.
     */
    FoDivisionRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(FoDivision_1.FoDivision, entity);
    };
    FoDivisionRequestBuilder.prototype.delete = function (externalCodeOrEntity, startDate) {
        return new core_1.DeleteRequestBuilder(FoDivision_1.FoDivision, externalCodeOrEntity instanceof FoDivision_1.FoDivision ? externalCodeOrEntity : {
            externalCode: externalCodeOrEntity,
            startDate: startDate
        });
    };
    return FoDivisionRequestBuilder;
}(core_1.RequestBuilder));
exports.FoDivisionRequestBuilder = FoDivisionRequestBuilder;
//# sourceMappingURL=FoDivisionRequestBuilder.js.map