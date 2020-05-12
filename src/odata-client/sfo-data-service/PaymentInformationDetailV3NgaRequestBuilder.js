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
var PaymentInformationDetailV3Nga_1 = require("./PaymentInformationDetailV3Nga");
/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Nga]] entity.
 */
var PaymentInformationDetailV3NgaRequestBuilder = /** @class */ (function (_super) {
    __extends(PaymentInformationDetailV3NgaRequestBuilder, _super);
    function PaymentInformationDetailV3NgaRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PaymentInformationDetailV3Nga` entity based on its keys.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Nga.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Nga.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Nga.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Nga.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Nga` entity based on its keys.
     */
    PaymentInformationDetailV3NgaRequestBuilder.prototype.getByKey = function (paymentInformationDetailV3ExternalCode, paymentInformationV3EffectiveStartDate, paymentInformationV3Worker, externalCode) {
        return new core_1.GetByKeyRequestBuilder(PaymentInformationDetailV3Nga_1.PaymentInformationDetailV3Nga, {
            PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCode,
            PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate,
            PaymentInformationV3_worker: paymentInformationV3Worker,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `PaymentInformationDetailV3Nga` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Nga` entities.
     */
    PaymentInformationDetailV3NgaRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PaymentInformationDetailV3Nga_1.PaymentInformationDetailV3Nga);
    };
    /**
     * Returns a request builder for creating a `PaymentInformationDetailV3Nga` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Nga`.
     */
    PaymentInformationDetailV3NgaRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PaymentInformationDetailV3Nga_1.PaymentInformationDetailV3Nga, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Nga`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Nga`.
     */
    PaymentInformationDetailV3NgaRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PaymentInformationDetailV3Nga_1.PaymentInformationDetailV3Nga, entity);
    };
    PaymentInformationDetailV3NgaRequestBuilder.prototype.delete = function (paymentInformationDetailV3ExternalCodeOrEntity, paymentInformationV3EffectiveStartDate, paymentInformationV3Worker, externalCode) {
        return new core_1.DeleteRequestBuilder(PaymentInformationDetailV3Nga_1.PaymentInformationDetailV3Nga, paymentInformationDetailV3ExternalCodeOrEntity instanceof PaymentInformationDetailV3Nga_1.PaymentInformationDetailV3Nga ? paymentInformationDetailV3ExternalCodeOrEntity : {
            PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCodeOrEntity,
            PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate,
            PaymentInformationV3_worker: paymentInformationV3Worker,
            externalCode: externalCode
        });
    };
    return PaymentInformationDetailV3NgaRequestBuilder;
}(core_1.RequestBuilder));
exports.PaymentInformationDetailV3NgaRequestBuilder = PaymentInformationDetailV3NgaRequestBuilder;
//# sourceMappingURL=PaymentInformationDetailV3NgaRequestBuilder.js.map