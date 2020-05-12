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
var EmployeeTimeValuationResult_1 = require("./EmployeeTimeValuationResult");
/**
 * Request builder class for operations supported on the [[EmployeeTimeValuationResult]] entity.
 */
var EmployeeTimeValuationResultRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeeTimeValuationResultRequestBuilder, _super);
    function EmployeeTimeValuationResultRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeeTimeValuationResult` entity based on its keys.
     * @param employeeTimeSheetExternalCode Key property. See [[EmployeeTimeValuationResult.employeeTimeSheetExternalCode]].
     * @param externalCode Key property. See [[EmployeeTimeValuationResult.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeValuationResult` entity based on its keys.
     */
    EmployeeTimeValuationResultRequestBuilder.prototype.getByKey = function (employeeTimeSheetExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(EmployeeTimeValuationResult_1.EmployeeTimeValuationResult, {
            EmployeeTimeSheet_externalCode: employeeTimeSheetExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `EmployeeTimeValuationResult` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeValuationResult` entities.
     */
    EmployeeTimeValuationResultRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmployeeTimeValuationResult_1.EmployeeTimeValuationResult);
    };
    return EmployeeTimeValuationResultRequestBuilder;
}(core_1.RequestBuilder));
exports.EmployeeTimeValuationResultRequestBuilder = EmployeeTimeValuationResultRequestBuilder;
//# sourceMappingURL=EmployeeTimeValuationResultRequestBuilder.js.map