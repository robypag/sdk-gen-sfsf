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
var PaymentInformationDetailV3Svn_1 = require("./PaymentInformationDetailV3Svn");
/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Svn]] entity.
 */
var PaymentInformationDetailV3SvnRequestBuilder = /** @class */ (function (_super) {
    __extends(PaymentInformationDetailV3SvnRequestBuilder, _super);
    function PaymentInformationDetailV3SvnRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PaymentInformationDetailV3Svn` entity based on its keys.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Svn.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Svn.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Svn.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Svn.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Svn` entity based on its keys.
     */
    PaymentInformationDetailV3SvnRequestBuilder.prototype.getByKey = function (paymentInformationDetailV3ExternalCode, paymentInformationV3EffectiveStartDate, paymentInformationV3Worker, externalCode) {
        return new core_1.GetByKeyRequestBuilder(PaymentInformationDetailV3Svn_1.PaymentInformationDetailV3Svn, {
            PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCode,
            PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate,
            PaymentInformationV3_worker: paymentInformationV3Worker,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `PaymentInformationDetailV3Svn` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Svn` entities.
     */
    PaymentInformationDetailV3SvnRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PaymentInformationDetailV3Svn_1.PaymentInformationDetailV3Svn);
    };
    /**
     * Returns a request builder for creating a `PaymentInformationDetailV3Svn` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Svn`.
     */
    PaymentInformationDetailV3SvnRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PaymentInformationDetailV3Svn_1.PaymentInformationDetailV3Svn, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Svn`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Svn`.
     */
    PaymentInformationDetailV3SvnRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PaymentInformationDetailV3Svn_1.PaymentInformationDetailV3Svn, entity);
    };
    PaymentInformationDetailV3SvnRequestBuilder.prototype.delete = function (paymentInformationDetailV3ExternalCodeOrEntity, paymentInformationV3EffectiveStartDate, paymentInformationV3Worker, externalCode) {
        return new core_1.DeleteRequestBuilder(PaymentInformationDetailV3Svn_1.PaymentInformationDetailV3Svn, paymentInformationDetailV3ExternalCodeOrEntity instanceof PaymentInformationDetailV3Svn_1.PaymentInformationDetailV3Svn ? paymentInformationDetailV3ExternalCodeOrEntity : {
            PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCodeOrEntity,
            PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate,
            PaymentInformationV3_worker: paymentInformationV3Worker,
            externalCode: externalCode
        });
    };
    return PaymentInformationDetailV3SvnRequestBuilder;
}(core_1.RequestBuilder));
exports.PaymentInformationDetailV3SvnRequestBuilder = PaymentInformationDetailV3SvnRequestBuilder;
//# sourceMappingURL=PaymentInformationDetailV3SvnRequestBuilder.js.map