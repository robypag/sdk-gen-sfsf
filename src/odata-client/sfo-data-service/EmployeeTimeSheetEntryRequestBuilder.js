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
var EmployeeTimeSheetEntry_1 = require("./EmployeeTimeSheetEntry");
/**
 * Request builder class for operations supported on the [[EmployeeTimeSheetEntry]] entity.
 */
var EmployeeTimeSheetEntryRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeeTimeSheetEntryRequestBuilder, _super);
    function EmployeeTimeSheetEntryRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeeTimeSheetEntry` entity based on its keys.
     * @param employeeTimeSheetExternalCode Key property. See [[EmployeeTimeSheetEntry.employeeTimeSheetExternalCode]].
     * @param externalCode Key property. See [[EmployeeTimeSheetEntry.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeSheetEntry` entity based on its keys.
     */
    EmployeeTimeSheetEntryRequestBuilder.prototype.getByKey = function (employeeTimeSheetExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(EmployeeTimeSheetEntry_1.EmployeeTimeSheetEntry, {
            EmployeeTimeSheet_externalCode: employeeTimeSheetExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `EmployeeTimeSheetEntry` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeSheetEntry` entities.
     */
    EmployeeTimeSheetEntryRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmployeeTimeSheetEntry_1.EmployeeTimeSheetEntry);
    };
    return EmployeeTimeSheetEntryRequestBuilder;
}(core_1.RequestBuilder));
exports.EmployeeTimeSheetEntryRequestBuilder = EmployeeTimeSheetEntryRequestBuilder;
//# sourceMappingURL=EmployeeTimeSheetEntryRequestBuilder.js.map