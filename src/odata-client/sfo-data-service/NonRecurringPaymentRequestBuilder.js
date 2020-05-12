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
var NonRecurringPayment_1 = require("./NonRecurringPayment");
/**
 * Request builder class for operations supported on the [[NonRecurringPayment]] entity.
 */
var NonRecurringPaymentRequestBuilder = /** @class */ (function (_super) {
    __extends(NonRecurringPaymentRequestBuilder, _super);
    function NonRecurringPaymentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `NonRecurringPayment` entity based on its keys.
     * @param externalCode Key property. See [[NonRecurringPayment.externalCode]].
     * @returns A request builder for creating requests to retrieve one `NonRecurringPayment` entity based on its keys.
     */
    NonRecurringPaymentRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(NonRecurringPayment_1.NonRecurringPayment, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `NonRecurringPayment` entities.
     * @returns A request builder for creating requests to retrieve all `NonRecurringPayment` entities.
     */
    NonRecurringPaymentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(NonRecurringPayment_1.NonRecurringPayment);
    };
    return NonRecurringPaymentRequestBuilder;
}(core_1.RequestBuilder));
exports.NonRecurringPaymentRequestBuilder = NonRecurringPaymentRequestBuilder;
//# sourceMappingURL=NonRecurringPaymentRequestBuilder.js.map