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
var PaymentInformationV3_1 = require("./PaymentInformationV3");
/**
 * Request builder class for operations supported on the [[PaymentInformationV3]] entity.
 */
var PaymentInformationV3RequestBuilder = /** @class */ (function (_super) {
    __extends(PaymentInformationV3RequestBuilder, _super);
    function PaymentInformationV3RequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PaymentInformationV3` entity based on its keys.
     * @param effectiveStartDate Key property. See [[PaymentInformationV3.effectiveStartDate]].
     * @param worker Key property. See [[PaymentInformationV3.worker]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationV3` entity based on its keys.
     */
    PaymentInformationV3RequestBuilder.prototype.getByKey = function (effectiveStartDate, worker) {
        return new core_1.GetByKeyRequestBuilder(PaymentInformationV3_1.PaymentInformationV3, {
            effectiveStartDate: effectiveStartDate,
            worker: worker
        });
    };
    /**
     * Returns a request builder for querying all `PaymentInformationV3` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationV3` entities.
     */
    PaymentInformationV3RequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PaymentInformationV3_1.PaymentInformationV3);
    };
    /**
     * Returns a request builder for creating a `PaymentInformationV3` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationV3`.
     */
    PaymentInformationV3RequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PaymentInformationV3_1.PaymentInformationV3, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationV3`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationV3`.
     */
    PaymentInformationV3RequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PaymentInformationV3_1.PaymentInformationV3, entity);
    };
    PaymentInformationV3RequestBuilder.prototype.delete = function (effectiveStartDateOrEntity, worker) {
        return new core_1.DeleteRequestBuilder(PaymentInformationV3_1.PaymentInformationV3, effectiveStartDateOrEntity instanceof PaymentInformationV3_1.PaymentInformationV3 ? effectiveStartDateOrEntity : {
            effectiveStartDate: effectiveStartDateOrEntity,
            worker: worker
        });
    };
    return PaymentInformationV3RequestBuilder;
}(core_1.RequestBuilder));
exports.PaymentInformationV3RequestBuilder = PaymentInformationV3RequestBuilder;
//# sourceMappingURL=PaymentInformationV3RequestBuilder.js.map