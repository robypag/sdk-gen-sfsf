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
var PayScalePayComponent_1 = require("./PayScalePayComponent");
/**
 * Request builder class for operations supported on the [[PayScalePayComponent]] entity.
 */
var PayScalePayComponentRequestBuilder = /** @class */ (function (_super) {
    __extends(PayScalePayComponentRequestBuilder, _super);
    function PayScalePayComponentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PayScalePayComponent` entity based on its keys.
     * @param payScaleLevelCode Key property. See [[PayScalePayComponent.payScaleLevelCode]].
     * @param payScaleLevelEffectiveStartDate Key property. See [[PayScalePayComponent.payScaleLevelEffectiveStartDate]].
     * @param code Key property. See [[PayScalePayComponent.code]].
     * @returns A request builder for creating requests to retrieve one `PayScalePayComponent` entity based on its keys.
     */
    PayScalePayComponentRequestBuilder.prototype.getByKey = function (payScaleLevelCode, payScaleLevelEffectiveStartDate, code) {
        return new core_1.GetByKeyRequestBuilder(PayScalePayComponent_1.PayScalePayComponent, {
            PayScaleLevel_code: payScaleLevelCode,
            PayScaleLevel_effectiveStartDate: payScaleLevelEffectiveStartDate,
            code: code
        });
    };
    /**
     * Returns a request builder for querying all `PayScalePayComponent` entities.
     * @returns A request builder for creating requests to retrieve all `PayScalePayComponent` entities.
     */
    PayScalePayComponentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PayScalePayComponent_1.PayScalePayComponent);
    };
    /**
     * Returns a request builder for creating a `PayScalePayComponent` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PayScalePayComponent`.
     */
    PayScalePayComponentRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PayScalePayComponent_1.PayScalePayComponent, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PayScalePayComponent`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PayScalePayComponent`.
     */
    PayScalePayComponentRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PayScalePayComponent_1.PayScalePayComponent, entity);
    };
    PayScalePayComponentRequestBuilder.prototype.delete = function (payScaleLevelCodeOrEntity, payScaleLevelEffectiveStartDate, code) {
        return new core_1.DeleteRequestBuilder(PayScalePayComponent_1.PayScalePayComponent, payScaleLevelCodeOrEntity instanceof PayScalePayComponent_1.PayScalePayComponent ? payScaleLevelCodeOrEntity : {
            PayScaleLevel_code: payScaleLevelCodeOrEntity,
            PayScaleLevel_effectiveStartDate: payScaleLevelEffectiveStartDate,
            code: code
        });
    };
    return PayScalePayComponentRequestBuilder;
}(core_1.RequestBuilder));
exports.PayScalePayComponentRequestBuilder = PayScalePayComponentRequestBuilder;
//# sourceMappingURL=PayScalePayComponentRequestBuilder.js.map