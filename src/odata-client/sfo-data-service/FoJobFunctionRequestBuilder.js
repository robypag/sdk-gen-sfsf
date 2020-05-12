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
var FoJobFunction_1 = require("./FoJobFunction");
/**
 * Request builder class for operations supported on the [[FoJobFunction]] entity.
 */
var FoJobFunctionRequestBuilder = /** @class */ (function (_super) {
    __extends(FoJobFunctionRequestBuilder, _super);
    function FoJobFunctionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoJobFunction` entity based on its keys.
     * @param externalCode Key property. See [[FoJobFunction.externalCode]].
     * @param startDate Key property. See [[FoJobFunction.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoJobFunction` entity based on its keys.
     */
    FoJobFunctionRequestBuilder.prototype.getByKey = function (externalCode, startDate) {
        return new core_1.GetByKeyRequestBuilder(FoJobFunction_1.FoJobFunction, {
            externalCode: externalCode,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `FoJobFunction` entities.
     * @returns A request builder for creating requests to retrieve all `FoJobFunction` entities.
     */
    FoJobFunctionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoJobFunction_1.FoJobFunction);
    };
    /**
     * Returns a request builder for creating a `FoJobFunction` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FoJobFunction`.
     */
    FoJobFunctionRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(FoJobFunction_1.FoJobFunction, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `FoJobFunction`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FoJobFunction`.
     */
    FoJobFunctionRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(FoJobFunction_1.FoJobFunction, entity);
    };
    FoJobFunctionRequestBuilder.prototype.delete = function (externalCodeOrEntity, startDate) {
        return new core_1.DeleteRequestBuilder(FoJobFunction_1.FoJobFunction, externalCodeOrEntity instanceof FoJobFunction_1.FoJobFunction ? externalCodeOrEntity : {
            externalCode: externalCodeOrEntity,
            startDate: startDate
        });
    };
    return FoJobFunctionRequestBuilder;
}(core_1.RequestBuilder));
exports.FoJobFunctionRequestBuilder = FoJobFunctionRequestBuilder;
//# sourceMappingURL=FoJobFunctionRequestBuilder.js.map