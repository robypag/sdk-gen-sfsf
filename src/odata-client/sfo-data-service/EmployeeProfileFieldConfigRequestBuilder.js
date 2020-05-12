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
var EmployeeProfileFieldConfig_1 = require("./EmployeeProfileFieldConfig");
/**
 * Request builder class for operations supported on the [[EmployeeProfileFieldConfig]] entity.
 */
var EmployeeProfileFieldConfigRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeeProfileFieldConfigRequestBuilder, _super);
    function EmployeeProfileFieldConfigRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeeProfileFieldConfig` entity based on its keys.
     * @param employeeProfileBlockContentCode Key property. See [[EmployeeProfileFieldConfig.employeeProfileBlockContentCode]].
     * @param employeeProfilePageConfigCode Key property. See [[EmployeeProfileFieldConfig.employeeProfilePageConfigCode]].
     * @param employeeProfileSectionConfigCode Key property. See [[EmployeeProfileFieldConfig.employeeProfileSectionConfigCode]].
     * @param employeeProfileSubSectionConfigCode Key property. See [[EmployeeProfileFieldConfig.employeeProfileSubSectionConfigCode]].
     * @param code Key property. See [[EmployeeProfileFieldConfig.code]].
     * @returns A request builder for creating requests to retrieve one `EmployeeProfileFieldConfig` entity based on its keys.
     */
    EmployeeProfileFieldConfigRequestBuilder.prototype.getByKey = function (employeeProfileBlockContentCode, employeeProfilePageConfigCode, employeeProfileSectionConfigCode, employeeProfileSubSectionConfigCode, code) {
        return new core_1.GetByKeyRequestBuilder(EmployeeProfileFieldConfig_1.EmployeeProfileFieldConfig, {
            EmployeeProfileBlockContent_code: employeeProfileBlockContentCode,
            EmployeeProfilePageConfig_code: employeeProfilePageConfigCode,
            EmployeeProfileSectionConfig_code: employeeProfileSectionConfigCode,
            EmployeeProfileSubSectionConfig_code: employeeProfileSubSectionConfigCode,
            code: code
        });
    };
    /**
     * Returns a request builder for querying all `EmployeeProfileFieldConfig` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeProfileFieldConfig` entities.
     */
    EmployeeProfileFieldConfigRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmployeeProfileFieldConfig_1.EmployeeProfileFieldConfig);
    };
    return EmployeeProfileFieldConfigRequestBuilder;
}(core_1.RequestBuilder));
exports.EmployeeProfileFieldConfigRequestBuilder = EmployeeProfileFieldConfigRequestBuilder;
//# sourceMappingURL=EmployeeProfileFieldConfigRequestBuilder.js.map