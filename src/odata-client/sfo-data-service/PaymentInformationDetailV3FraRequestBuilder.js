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
var PaymentInformationDetailV3Fra_1 = require("./PaymentInformationDetailV3Fra");
/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Fra]] entity.
 */
var PaymentInformationDetailV3FraRequestBuilder = /** @class */ (function (_super) {
    __extends(PaymentInformationDetailV3FraRequestBuilder, _super);
    function PaymentInformationDetailV3FraRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PaymentInformationDetailV3Fra` entity based on its keys.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Fra.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Fra.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Fra.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Fra.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Fra` entity based on its keys.
     */
    PaymentInformationDetailV3FraRequestBuilder.prototype.getByKey = function (paymentInformationDetailV3ExternalCode, paymentInformationV3EffectiveStartDate, paymentInformationV3Worker, externalCode) {
        return new core_1.GetByKeyRequestBuilder(PaymentInformationDetailV3Fra_1.PaymentInformationDetailV3Fra, {
            PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCode,
            PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate,
            PaymentInformationV3_worker: paymentInformationV3Worker,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `PaymentInformationDetailV3Fra` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Fra` entities.
     */
    PaymentInformationDetailV3FraRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PaymentInformationDetailV3Fra_1.PaymentInformationDetailV3Fra);
    };
    /**
     * Returns a request builder for creating a `PaymentInformationDetailV3Fra` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Fra`.
     */
    PaymentInformationDetailV3FraRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PaymentInformationDetailV3Fra_1.PaymentInformationDetailV3Fra, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Fra`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Fra`.
     */
    PaymentInformationDetailV3FraRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PaymentInformationDetailV3Fra_1.PaymentInformationDetailV3Fra, entity);
    };
    PaymentInformationDetailV3FraRequestBuilder.prototype.delete = function (paymentInformationDetailV3ExternalCodeOrEntity, paymentInformationV3EffectiveStartDate, paymentInformationV3Worker, externalCode) {
        return new core_1.DeleteRequestBuilder(PaymentInformationDetailV3Fra_1.PaymentInformationDetailV3Fra, paymentInformationDetailV3ExternalCodeOrEntity instanceof PaymentInformationDetailV3Fra_1.PaymentInformationDetailV3Fra ? paymentInformationDetailV3ExternalCodeOrEntity : {
            PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCodeOrEntity,
            PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate,
            PaymentInformationV3_worker: paymentInformationV3Worker,
            externalCode: externalCode
        });
    };
    return PaymentInformationDetailV3FraRequestBuilder;
}(core_1.RequestBuilder));
exports.PaymentInformationDetailV3FraRequestBuilder = PaymentInformationDetailV3FraRequestBuilder;
//# sourceMappingURL=PaymentInformationDetailV3FraRequestBuilder.js.map