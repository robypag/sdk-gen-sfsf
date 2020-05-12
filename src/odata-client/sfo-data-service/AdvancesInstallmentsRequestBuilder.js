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
var AdvancesInstallments_1 = require("./AdvancesInstallments");
/**
 * Request builder class for operations supported on the [[AdvancesInstallments]] entity.
 */
var AdvancesInstallmentsRequestBuilder = /** @class */ (function (_super) {
    __extends(AdvancesInstallmentsRequestBuilder, _super);
    function AdvancesInstallmentsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AdvancesInstallments` entity based on its keys.
     * @param advanceExternalCode Key property. See [[AdvancesInstallments.advanceExternalCode]].
     * @param nonRecurringPaymentExternalCode Key property. See [[AdvancesInstallments.nonRecurringPaymentExternalCode]].
     * @param externalCode Key property. See [[AdvancesInstallments.externalCode]].
     * @returns A request builder for creating requests to retrieve one `AdvancesInstallments` entity based on its keys.
     */
    AdvancesInstallmentsRequestBuilder.prototype.getByKey = function (advanceExternalCode, nonRecurringPaymentExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(AdvancesInstallments_1.AdvancesInstallments, {
            Advance_externalCode: advanceExternalCode,
            NonRecurringPayment_externalCode: nonRecurringPaymentExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `AdvancesInstallments` entities.
     * @returns A request builder for creating requests to retrieve all `AdvancesInstallments` entities.
     */
    AdvancesInstallmentsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(AdvancesInstallments_1.AdvancesInstallments);
    };
    return AdvancesInstallmentsRequestBuilder;
}(core_1.RequestBuilder));
exports.AdvancesInstallmentsRequestBuilder = AdvancesInstallmentsRequestBuilder;
//# sourceMappingURL=AdvancesInstallmentsRequestBuilder.js.map