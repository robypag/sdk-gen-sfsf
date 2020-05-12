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
var RightToReturn_1 = require("./RightToReturn");
/**
 * Request builder class for operations supported on the [[RightToReturn]] entity.
 */
var RightToReturnRequestBuilder = /** @class */ (function (_super) {
    __extends(RightToReturnRequestBuilder, _super);
    function RightToReturnRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `RightToReturn` entity based on its keys.
     * @param positionCode Key property. See [[RightToReturn.positionCode]].
     * @param positionEffectiveStartDate Key property. See [[RightToReturn.positionEffectiveStartDate]].
     * @param code Key property. See [[RightToReturn.code]].
     * @returns A request builder for creating requests to retrieve one `RightToReturn` entity based on its keys.
     */
    RightToReturnRequestBuilder.prototype.getByKey = function (positionCode, positionEffectiveStartDate, code) {
        return new core_1.GetByKeyRequestBuilder(RightToReturn_1.RightToReturn, {
            Position_code: positionCode,
            Position_effectiveStartDate: positionEffectiveStartDate,
            code: code
        });
    };
    /**
     * Returns a request builder for querying all `RightToReturn` entities.
     * @returns A request builder for creating requests to retrieve all `RightToReturn` entities.
     */
    RightToReturnRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(RightToReturn_1.RightToReturn);
    };
    /**
     * Returns a request builder for creating a `RightToReturn` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `RightToReturn`.
     */
    RightToReturnRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(RightToReturn_1.RightToReturn, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `RightToReturn`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `RightToReturn`.
     */
    RightToReturnRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(RightToReturn_1.RightToReturn, entity);
    };
    RightToReturnRequestBuilder.prototype.delete = function (positionCodeOrEntity, positionEffectiveStartDate, code) {
        return new core_1.DeleteRequestBuilder(RightToReturn_1.RightToReturn, positionCodeOrEntity instanceof RightToReturn_1.RightToReturn ? positionCodeOrEntity : {
            Position_code: positionCodeOrEntity,
            Position_effectiveStartDate: positionEffectiveStartDate,
            code: code
        });
    };
    return RightToReturnRequestBuilder;
}(core_1.RequestBuilder));
exports.RightToReturnRequestBuilder = RightToReturnRequestBuilder;
//# sourceMappingURL=RightToReturnRequestBuilder.js.map