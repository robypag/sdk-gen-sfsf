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
var PaymentInformationDetailV3Isr_1 = require("./PaymentInformationDetailV3Isr");
/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Isr]] entity.
 */
var PaymentInformationDetailV3IsrRequestBuilder = /** @class */ (function (_super) {
    __extends(PaymentInformationDetailV3IsrRequestBuilder, _super);
    function PaymentInformationDetailV3IsrRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PaymentInformationDetailV3Isr` entity based on its keys.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Isr.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Isr.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Isr.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Isr.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Isr` entity based on its keys.
     */
    PaymentInformationDetailV3IsrRequestBuilder.prototype.getByKey = function (paymentInformationDetailV3ExternalCode, paymentInformationV3EffectiveStartDate, paymentInformationV3Worker, externalCode) {
        return new core_1.GetByKeyRequestBuilder(PaymentInformationDetailV3Isr_1.PaymentInformationDetailV3Isr, {
            PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCode,
            PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate,
            PaymentInformationV3_worker: paymentInformationV3Worker,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `PaymentInformationDetailV3Isr` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Isr` entities.
     */
    PaymentInformationDetailV3IsrRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PaymentInformationDetailV3Isr_1.PaymentInformationDetailV3Isr);
    };
    /**
     * Returns a request builder for creating a `PaymentInformationDetailV3Isr` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Isr`.
     */
    PaymentInformationDetailV3IsrRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PaymentInformationDetailV3Isr_1.PaymentInformationDetailV3Isr, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Isr`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Isr`.
     */
    PaymentInformationDetailV3IsrRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PaymentInformationDetailV3Isr_1.PaymentInformationDetailV3Isr, entity);
    };
    PaymentInformationDetailV3IsrRequestBuilder.prototype.delete = function (paymentInformationDetailV3ExternalCodeOrEntity, paymentInformationV3EffectiveStartDate, paymentInformationV3Worker, externalCode) {
        return new core_1.DeleteRequestBuilder(PaymentInformationDetailV3Isr_1.PaymentInformationDetailV3Isr, paymentInformationDetailV3ExternalCodeOrEntity instanceof PaymentInformationDetailV3Isr_1.PaymentInformationDetailV3Isr ? paymentInformationDetailV3ExternalCodeOrEntity : {
            PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCodeOrEntity,
            PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate,
            PaymentInformationV3_worker: paymentInformationV3Worker,
            externalCode: externalCode
        });
    };
    return PaymentInformationDetailV3IsrRequestBuilder;
}(core_1.RequestBuilder));
exports.PaymentInformationDetailV3IsrRequestBuilder = PaymentInformationDetailV3IsrRequestBuilder;
//# sourceMappingURL=PaymentInformationDetailV3IsrRequestBuilder.js.map