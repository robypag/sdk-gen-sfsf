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
var EmployeeProfileSubSectionConfig_1 = require("./EmployeeProfileSubSectionConfig");
/**
 * Request builder class for operations supported on the [[EmployeeProfileSubSectionConfig]] entity.
 */
var EmployeeProfileSubSectionConfigRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeeProfileSubSectionConfigRequestBuilder, _super);
    function EmployeeProfileSubSectionConfigRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeeProfileSubSectionConfig` entity based on its keys.
     * @param employeeProfilePageConfigCode Key property. See [[EmployeeProfileSubSectionConfig.employeeProfilePageConfigCode]].
     * @param employeeProfileSectionConfigCode Key property. See [[EmployeeProfileSubSectionConfig.employeeProfileSectionConfigCode]].
     * @param code Key property. See [[EmployeeProfileSubSectionConfig.code]].
     * @returns A request builder for creating requests to retrieve one `EmployeeProfileSubSectionConfig` entity based on its keys.
     */
    EmployeeProfileSubSectionConfigRequestBuilder.prototype.getByKey = function (employeeProfilePageConfigCode, employeeProfileSectionConfigCode, code) {
        return new core_1.GetByKeyRequestBuilder(EmployeeProfileSubSectionConfig_1.EmployeeProfileSubSectionConfig, {
            EmployeeProfilePageConfig_code: employeeProfilePageConfigCode,
            EmployeeProfileSectionConfig_code: employeeProfileSectionConfigCode,
            code: code
        });
    };
    /**
     * Returns a request builder for querying all `EmployeeProfileSubSectionConfig` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeProfileSubSectionConfig` entities.
     */
    EmployeeProfileSubSectionConfigRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmployeeProfileSubSectionConfig_1.EmployeeProfileSubSectionConfig);
    };
    return EmployeeProfileSubSectionConfigRequestBuilder;
}(core_1.RequestBuilder));
exports.EmployeeProfileSubSectionConfigRequestBuilder = EmployeeProfileSubSectionConfigRequestBuilder;
//# sourceMappingURL=EmployeeProfileSubSectionConfigRequestBuilder.js.map