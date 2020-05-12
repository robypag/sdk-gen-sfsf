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
var EmployeeTimeSheet_1 = require("./EmployeeTimeSheet");
/**
 * Request builder class for operations supported on the [[EmployeeTimeSheet]] entity.
 */
var EmployeeTimeSheetRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeeTimeSheetRequestBuilder, _super);
    function EmployeeTimeSheetRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeeTimeSheet` entity based on its keys.
     * @param externalCode Key property. See [[EmployeeTimeSheet.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeSheet` entity based on its keys.
     */
    EmployeeTimeSheetRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(EmployeeTimeSheet_1.EmployeeTimeSheet, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `EmployeeTimeSheet` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeSheet` entities.
     */
    EmployeeTimeSheetRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmployeeTimeSheet_1.EmployeeTimeSheet);
    };
    return EmployeeTimeSheetRequestBuilder;
}(core_1.RequestBuilder));
exports.EmployeeTimeSheetRequestBuilder = EmployeeTimeSheetRequestBuilder;
//# sourceMappingURL=EmployeeTimeSheetRequestBuilder.js.map