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
var Advance_1 = require("./Advance");
/**
 * Request builder class for operations supported on the [[Advance]] entity.
 */
var AdvanceRequestBuilder = /** @class */ (function (_super) {
    __extends(AdvanceRequestBuilder, _super);
    function AdvanceRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Advance` entity based on its keys.
     * @param nonRecurringPaymentExternalCode Key property. See [[Advance.nonRecurringPaymentExternalCode]].
     * @param externalCode Key property. See [[Advance.externalCode]].
     * @returns A request builder for creating requests to retrieve one `Advance` entity based on its keys.
     */
    AdvanceRequestBuilder.prototype.getByKey = function (nonRecurringPaymentExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(Advance_1.Advance, {
            NonRecurringPayment_externalCode: nonRecurringPaymentExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `Advance` entities.
     * @returns A request builder for creating requests to retrieve all `Advance` entities.
     */
    AdvanceRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Advance_1.Advance);
    };
    return AdvanceRequestBuilder;
}(core_1.RequestBuilder));
exports.AdvanceRequestBuilder = AdvanceRequestBuilder;
//# sourceMappingURL=AdvanceRequestBuilder.js.map