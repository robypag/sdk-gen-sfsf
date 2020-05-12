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
var PaymentInformationDetailV3Zwe_1 = require("./PaymentInformationDetailV3Zwe");
/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Zwe]] entity.
 */
var PaymentInformationDetailV3ZweRequestBuilder = /** @class */ (function (_super) {
    __extends(PaymentInformationDetailV3ZweRequestBuilder, _super);
    function PaymentInformationDetailV3ZweRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PaymentInformationDetailV3Zwe` entity based on its keys.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Zwe.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Zwe.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Zwe.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Zwe.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Zwe` entity based on its keys.
     */
    PaymentInformationDetailV3ZweRequestBuilder.prototype.getByKey = function (paymentInformationDetailV3ExternalCode, paymentInformationV3EffectiveStartDate, paymentInformationV3Worker, externalCode) {
        return new core_1.GetByKeyRequestBuilder(PaymentInformationDetailV3Zwe_1.PaymentInformationDetailV3Zwe, {
            PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCode,
            PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate,
            PaymentInformationV3_worker: paymentInformationV3Worker,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `PaymentInformationDetailV3Zwe` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Zwe` entities.
     */
    PaymentInformationDetailV3ZweRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PaymentInformationDetailV3Zwe_1.PaymentInformationDetailV3Zwe);
    };
    /**
     * Returns a request builder for creating a `PaymentInformationDetailV3Zwe` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Zwe`.
     */
    PaymentInformationDetailV3ZweRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PaymentInformationDetailV3Zwe_1.PaymentInformationDetailV3Zwe, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Zwe`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Zwe`.
     */
    PaymentInformationDetailV3ZweRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PaymentInformationDetailV3Zwe_1.PaymentInformationDetailV3Zwe, entity);
    };
    PaymentInformationDetailV3ZweRequestBuilder.prototype.delete = function (paymentInformationDetailV3ExternalCodeOrEntity, paymentInformationV3EffectiveStartDate, paymentInformationV3Worker, externalCode) {
        return new core_1.DeleteRequestBuilder(PaymentInformationDetailV3Zwe_1.PaymentInformationDetailV3Zwe, paymentInformationDetailV3ExternalCodeOrEntity instanceof PaymentInformationDetailV3Zwe_1.PaymentInformationDetailV3Zwe ? paymentInformationDetailV3ExternalCodeOrEntity : {
            PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCodeOrEntity,
            PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate,
            PaymentInformationV3_worker: paymentInformationV3Worker,
            externalCode: externalCode
        });
    };
    return PaymentInformationDetailV3ZweRequestBuilder;
}(core_1.RequestBuilder));
exports.PaymentInformationDetailV3ZweRequestBuilder = PaymentInformationDetailV3ZweRequestBuilder;
//# sourceMappingURL=PaymentInformationDetailV3ZweRequestBuilder.js.map