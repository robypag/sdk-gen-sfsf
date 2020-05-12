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
var PaymentInformationDetailV3_1 = require("./PaymentInformationDetailV3");
/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3]] entity.
 */
var PaymentInformationDetailV3RequestBuilder = /** @class */ (function (_super) {
    __extends(PaymentInformationDetailV3RequestBuilder, _super);
    function PaymentInformationDetailV3RequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PaymentInformationDetailV3` entity based on its keys.
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3` entity based on its keys.
     */
    PaymentInformationDetailV3RequestBuilder.prototype.getByKey = function (paymentInformationV3EffectiveStartDate, paymentInformationV3Worker, externalCode) {
        return new core_1.GetByKeyRequestBuilder(PaymentInformationDetailV3_1.PaymentInformationDetailV3, {
            PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate,
            PaymentInformationV3_worker: paymentInformationV3Worker,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `PaymentInformationDetailV3` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3` entities.
     */
    PaymentInformationDetailV3RequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PaymentInformationDetailV3_1.PaymentInformationDetailV3);
    };
    /**
     * Returns a request builder for creating a `PaymentInformationDetailV3` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3`.
     */
    PaymentInformationDetailV3RequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PaymentInformationDetailV3_1.PaymentInformationDetailV3, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationDetailV3`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3`.
     */
    PaymentInformationDetailV3RequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PaymentInformationDetailV3_1.PaymentInformationDetailV3, entity);
    };
    PaymentInformationDetailV3RequestBuilder.prototype.delete = function (paymentInformationV3EffectiveStartDateOrEntity, paymentInformationV3Worker, externalCode) {
        return new core_1.DeleteRequestBuilder(PaymentInformationDetailV3_1.PaymentInformationDetailV3, paymentInformationV3EffectiveStartDateOrEntity instanceof PaymentInformationDetailV3_1.PaymentInformationDetailV3 ? paymentInformationV3EffectiveStartDateOrEntity : {
            PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDateOrEntity,
            PaymentInformationV3_worker: paymentInformationV3Worker,
            externalCode: externalCode
        });
    };
    return PaymentInformationDetailV3RequestBuilder;
}(core_1.RequestBuilder));
exports.PaymentInformationDetailV3RequestBuilder = PaymentInformationDetailV3RequestBuilder;
//# sourceMappingURL=PaymentInformationDetailV3RequestBuilder.js.map