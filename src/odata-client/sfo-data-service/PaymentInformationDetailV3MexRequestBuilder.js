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
var PaymentInformationDetailV3Mex_1 = require("./PaymentInformationDetailV3Mex");
/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Mex]] entity.
 */
var PaymentInformationDetailV3MexRequestBuilder = /** @class */ (function (_super) {
    __extends(PaymentInformationDetailV3MexRequestBuilder, _super);
    function PaymentInformationDetailV3MexRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PaymentInformationDetailV3Mex` entity based on its keys.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Mex.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Mex.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Mex.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Mex.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Mex` entity based on its keys.
     */
    PaymentInformationDetailV3MexRequestBuilder.prototype.getByKey = function (paymentInformationDetailV3ExternalCode, paymentInformationV3EffectiveStartDate, paymentInformationV3Worker, externalCode) {
        return new core_1.GetByKeyRequestBuilder(PaymentInformationDetailV3Mex_1.PaymentInformationDetailV3Mex, {
            PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCode,
            PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate,
            PaymentInformationV3_worker: paymentInformationV3Worker,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `PaymentInformationDetailV3Mex` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Mex` entities.
     */
    PaymentInformationDetailV3MexRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PaymentInformationDetailV3Mex_1.PaymentInformationDetailV3Mex);
    };
    /**
     * Returns a request builder for creating a `PaymentInformationDetailV3Mex` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Mex`.
     */
    PaymentInformationDetailV3MexRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PaymentInformationDetailV3Mex_1.PaymentInformationDetailV3Mex, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Mex`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Mex`.
     */
    PaymentInformationDetailV3MexRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PaymentInformationDetailV3Mex_1.PaymentInformationDetailV3Mex, entity);
    };
    PaymentInformationDetailV3MexRequestBuilder.prototype.delete = function (paymentInformationDetailV3ExternalCodeOrEntity, paymentInformationV3EffectiveStartDate, paymentInformationV3Worker, externalCode) {
        return new core_1.DeleteRequestBuilder(PaymentInformationDetailV3Mex_1.PaymentInformationDetailV3Mex, paymentInformationDetailV3ExternalCodeOrEntity instanceof PaymentInformationDetailV3Mex_1.PaymentInformationDetailV3Mex ? paymentInformationDetailV3ExternalCodeOrEntity : {
            PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCodeOrEntity,
            PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate,
            PaymentInformationV3_worker: paymentInformationV3Worker,
            externalCode: externalCode
        });
    };
    return PaymentInformationDetailV3MexRequestBuilder;
}(core_1.RequestBuilder));
exports.PaymentInformationDetailV3MexRequestBuilder = PaymentInformationDetailV3MexRequestBuilder;
//# sourceMappingURL=PaymentInformationDetailV3MexRequestBuilder.js.map