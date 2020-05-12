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
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var PaymentMethodV3_1 = require("./PaymentMethodV3");
/**
 * Request builder class for operations supported on the [[PaymentMethodV3]] entity.
 */
var PaymentMethodV3RequestBuilder = /** @class */ (function (_super) {
    __extends(PaymentMethodV3RequestBuilder, _super);
    function PaymentMethodV3RequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PaymentMethodV3` entity based on its keys.
     * @param externalCode Key property. See [[PaymentMethodV3.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentMethodV3` entity based on its keys.
     */
    PaymentMethodV3RequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(PaymentMethodV3_1.PaymentMethodV3, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `PaymentMethodV3` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentMethodV3` entities.
     */
    PaymentMethodV3RequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PaymentMethodV3_1.PaymentMethodV3);
    };
    /**
     * Returns a request builder for creating a `PaymentMethodV3` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentMethodV3`.
     */
    PaymentMethodV3RequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PaymentMethodV3_1.PaymentMethodV3, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PaymentMethodV3`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentMethodV3`.
     */
    PaymentMethodV3RequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PaymentMethodV3_1.PaymentMethodV3, entity);
    };
    PaymentMethodV3RequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(PaymentMethodV3_1.PaymentMethodV3, externalCodeOrEntity instanceof PaymentMethodV3_1.PaymentMethodV3 ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return PaymentMethodV3RequestBuilder;
}(core_1.RequestBuilder));
exports.PaymentMethodV3RequestBuilder = PaymentMethodV3RequestBuilder;
//# sourceMappingURL=PaymentMethodV3RequestBuilder.js.map