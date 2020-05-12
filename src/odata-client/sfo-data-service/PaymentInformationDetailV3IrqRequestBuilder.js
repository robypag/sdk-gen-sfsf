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
var PaymentInformationDetailV3Irq_1 = require("./PaymentInformationDetailV3Irq");
/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Irq]] entity.
 */
var PaymentInformationDetailV3IrqRequestBuilder = /** @class */ (function (_super) {
    __extends(PaymentInformationDetailV3IrqRequestBuilder, _super);
    function PaymentInformationDetailV3IrqRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PaymentInformationDetailV3Irq` entity based on its keys.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Irq.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Irq.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Irq.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Irq.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Irq` entity based on its keys.
     */
    PaymentInformationDetailV3IrqRequestBuilder.prototype.getByKey = function (paymentInformationDetailV3ExternalCode, paymentInformationV3EffectiveStartDate, paymentInformationV3Worker, externalCode) {
        return new core_1.GetByKeyRequestBuilder(PaymentInformationDetailV3Irq_1.PaymentInformationDetailV3Irq, {
            PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCode,
            PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate,
            PaymentInformationV3_worker: paymentInformationV3Worker,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `PaymentInformationDetailV3Irq` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Irq` entities.
     */
    PaymentInformationDetailV3IrqRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PaymentInformationDetailV3Irq_1.PaymentInformationDetailV3Irq);
    };
    /**
     * Returns a request builder for creating a `PaymentInformationDetailV3Irq` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Irq`.
     */
    PaymentInformationDetailV3IrqRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PaymentInformationDetailV3Irq_1.PaymentInformationDetailV3Irq, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Irq`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Irq`.
     */
    PaymentInformationDetailV3IrqRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PaymentInformationDetailV3Irq_1.PaymentInformationDetailV3Irq, entity);
    };
    PaymentInformationDetailV3IrqRequestBuilder.prototype.delete = function (paymentInformationDetailV3ExternalCodeOrEntity, paymentInformationV3EffectiveStartDate, paymentInformationV3Worker, externalCode) {
        return new core_1.DeleteRequestBuilder(PaymentInformationDetailV3Irq_1.PaymentInformationDetailV3Irq, paymentInformationDetailV3ExternalCodeOrEntity instanceof PaymentInformationDetailV3Irq_1.PaymentInformationDetailV3Irq ? paymentInformationDetailV3ExternalCodeOrEntity : {
            PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCodeOrEntity,
            PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate,
            PaymentInformationV3_worker: paymentInformationV3Worker,
            externalCode: externalCode
        });
    };
    return PaymentInformationDetailV3IrqRequestBuilder;
}(core_1.RequestBuilder));
exports.PaymentInformationDetailV3IrqRequestBuilder = PaymentInformationDetailV3IrqRequestBuilder;
//# sourceMappingURL=PaymentInformationDetailV3IrqRequestBuilder.js.map