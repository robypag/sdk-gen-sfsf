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
var PayScaleLevel_1 = require("./PayScaleLevel");
/**
 * Request builder class for operations supported on the [[PayScaleLevel]] entity.
 */
var PayScaleLevelRequestBuilder = /** @class */ (function (_super) {
    __extends(PayScaleLevelRequestBuilder, _super);
    function PayScaleLevelRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PayScaleLevel` entity based on its keys.
     * @param code Key property. See [[PayScaleLevel.code]].
     * @param effectiveStartDate Key property. See [[PayScaleLevel.effectiveStartDate]].
     * @returns A request builder for creating requests to retrieve one `PayScaleLevel` entity based on its keys.
     */
    PayScaleLevelRequestBuilder.prototype.getByKey = function (code, effectiveStartDate) {
        return new core_1.GetByKeyRequestBuilder(PayScaleLevel_1.PayScaleLevel, {
            code: code,
            effectiveStartDate: effectiveStartDate
        });
    };
    /**
     * Returns a request builder for querying all `PayScaleLevel` entities.
     * @returns A request builder for creating requests to retrieve all `PayScaleLevel` entities.
     */
    PayScaleLevelRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PayScaleLevel_1.PayScaleLevel);
    };
    /**
     * Returns a request builder for creating a `PayScaleLevel` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PayScaleLevel`.
     */
    PayScaleLevelRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PayScaleLevel_1.PayScaleLevel, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PayScaleLevel`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PayScaleLevel`.
     */
    PayScaleLevelRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PayScaleLevel_1.PayScaleLevel, entity);
    };
    PayScaleLevelRequestBuilder.prototype.delete = function (codeOrEntity, effectiveStartDate) {
        return new core_1.DeleteRequestBuilder(PayScaleLevel_1.PayScaleLevel, codeOrEntity instanceof PayScaleLevel_1.PayScaleLevel ? codeOrEntity : {
            code: codeOrEntity,
            effectiveStartDate: effectiveStartDate
        });
    };
    return PayScaleLevelRequestBuilder;
}(core_1.RequestBuilder));
exports.PayScaleLevelRequestBuilder = PayScaleLevelRequestBuilder;
//# sourceMappingURL=PayScaleLevelRequestBuilder.js.map