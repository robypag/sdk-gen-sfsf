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
var PaymentMethodAssignmentV3_1 = require("./PaymentMethodAssignmentV3");
/**
 * Request builder class for operations supported on the [[PaymentMethodAssignmentV3]] entity.
 */
var PaymentMethodAssignmentV3RequestBuilder = /** @class */ (function (_super) {
    __extends(PaymentMethodAssignmentV3RequestBuilder, _super);
    function PaymentMethodAssignmentV3RequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PaymentMethodAssignmentV3` entity based on its keys.
     * @param paymentMethodV3ExternalCode Key property. See [[PaymentMethodAssignmentV3.paymentMethodV3ExternalCode]].
     * @param externalCode Key property. See [[PaymentMethodAssignmentV3.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentMethodAssignmentV3` entity based on its keys.
     */
    PaymentMethodAssignmentV3RequestBuilder.prototype.getByKey = function (paymentMethodV3ExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(PaymentMethodAssignmentV3_1.PaymentMethodAssignmentV3, {
            PaymentMethodV3_externalCode: paymentMethodV3ExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `PaymentMethodAssignmentV3` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentMethodAssignmentV3` entities.
     */
    PaymentMethodAssignmentV3RequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PaymentMethodAssignmentV3_1.PaymentMethodAssignmentV3);
    };
    /**
     * Returns a request builder for creating a `PaymentMethodAssignmentV3` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentMethodAssignmentV3`.
     */
    PaymentMethodAssignmentV3RequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PaymentMethodAssignmentV3_1.PaymentMethodAssignmentV3, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PaymentMethodAssignmentV3`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentMethodAssignmentV3`.
     */
    PaymentMethodAssignmentV3RequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PaymentMethodAssignmentV3_1.PaymentMethodAssignmentV3, entity);
    };
    PaymentMethodAssignmentV3RequestBuilder.prototype.delete = function (paymentMethodV3ExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(PaymentMethodAssignmentV3_1.PaymentMethodAssignmentV3, paymentMethodV3ExternalCodeOrEntity instanceof PaymentMethodAssignmentV3_1.PaymentMethodAssignmentV3 ? paymentMethodV3ExternalCodeOrEntity : {
            PaymentMethodV3_externalCode: paymentMethodV3ExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return PaymentMethodAssignmentV3RequestBuilder;
}(core_1.RequestBuilder));
exports.PaymentMethodAssignmentV3RequestBuilder = PaymentMethodAssignmentV3RequestBuilder;
//# sourceMappingURL=PaymentMethodAssignmentV3RequestBuilder.js.map