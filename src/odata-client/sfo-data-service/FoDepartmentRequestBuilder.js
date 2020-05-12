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
var FoDepartment_1 = require("./FoDepartment");
/**
 * Request builder class for operations supported on the [[FoDepartment]] entity.
 */
var FoDepartmentRequestBuilder = /** @class */ (function (_super) {
    __extends(FoDepartmentRequestBuilder, _super);
    function FoDepartmentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoDepartment` entity based on its keys.
     * @param externalCode Key property. See [[FoDepartment.externalCode]].
     * @param startDate Key property. See [[FoDepartment.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoDepartment` entity based on its keys.
     */
    FoDepartmentRequestBuilder.prototype.getByKey = function (externalCode, startDate) {
        return new core_1.GetByKeyRequestBuilder(FoDepartment_1.FoDepartment, {
            externalCode: externalCode,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `FoDepartment` entities.
     * @returns A request builder for creating requests to retrieve all `FoDepartment` entities.
     */
    FoDepartmentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoDepartment_1.FoDepartment);
    };
    /**
     * Returns a request builder for creating a `FoDepartment` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FoDepartment`.
     */
    FoDepartmentRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(FoDepartment_1.FoDepartment, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `FoDepartment`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FoDepartment`.
     */
    FoDepartmentRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(FoDepartment_1.FoDepartment, entity);
    };
    FoDepartmentRequestBuilder.prototype.delete = function (externalCodeOrEntity, startDate) {
        return new core_1.DeleteRequestBuilder(FoDepartment_1.FoDepartment, externalCodeOrEntity instanceof FoDepartment_1.FoDepartment ? externalCodeOrEntity : {
            externalCode: externalCodeOrEntity,
            startDate: startDate
        });
    };
    return FoDepartmentRequestBuilder;
}(core_1.RequestBuilder));
exports.FoDepartmentRequestBuilder = FoDepartmentRequestBuilder;
//# sourceMappingURL=FoDepartmentRequestBuilder.js.map