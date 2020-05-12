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
var FoJobCode_1 = require("./FoJobCode");
/**
 * Request builder class for operations supported on the [[FoJobCode]] entity.
 */
var FoJobCodeRequestBuilder = /** @class */ (function (_super) {
    __extends(FoJobCodeRequestBuilder, _super);
    function FoJobCodeRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoJobCode` entity based on its keys.
     * @param externalCode Key property. See [[FoJobCode.externalCode]].
     * @param startDate Key property. See [[FoJobCode.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoJobCode` entity based on its keys.
     */
    FoJobCodeRequestBuilder.prototype.getByKey = function (externalCode, startDate) {
        return new core_1.GetByKeyRequestBuilder(FoJobCode_1.FoJobCode, {
            externalCode: externalCode,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `FoJobCode` entities.
     * @returns A request builder for creating requests to retrieve all `FoJobCode` entities.
     */
    FoJobCodeRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoJobCode_1.FoJobCode);
    };
    /**
     * Returns a request builder for creating a `FoJobCode` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FoJobCode`.
     */
    FoJobCodeRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(FoJobCode_1.FoJobCode, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `FoJobCode`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FoJobCode`.
     */
    FoJobCodeRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(FoJobCode_1.FoJobCode, entity);
    };
    FoJobCodeRequestBuilder.prototype.delete = function (externalCodeOrEntity, startDate) {
        return new core_1.DeleteRequestBuilder(FoJobCode_1.FoJobCode, externalCodeOrEntity instanceof FoJobCode_1.FoJobCode ? externalCodeOrEntity : {
            externalCode: externalCodeOrEntity,
            startDate: startDate
        });
    };
    return FoJobCodeRequestBuilder;
}(core_1.RequestBuilder));
exports.FoJobCodeRequestBuilder = FoJobCodeRequestBuilder;
//# sourceMappingURL=FoJobCodeRequestBuilder.js.map