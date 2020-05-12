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
var EmployeeProfileBlockContent_1 = require("./EmployeeProfileBlockContent");
/**
 * Request builder class for operations supported on the [[EmployeeProfileBlockContent]] entity.
 */
var EmployeeProfileBlockContentRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeeProfileBlockContentRequestBuilder, _super);
    function EmployeeProfileBlockContentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeeProfileBlockContent` entity based on its keys.
     * @param employeeProfilePageConfigCode Key property. See [[EmployeeProfileBlockContent.employeeProfilePageConfigCode]].
     * @param employeeProfileSectionConfigCode Key property. See [[EmployeeProfileBlockContent.employeeProfileSectionConfigCode]].
     * @param employeeProfileSubSectionConfigCode Key property. See [[EmployeeProfileBlockContent.employeeProfileSubSectionConfigCode]].
     * @param code Key property. See [[EmployeeProfileBlockContent.code]].
     * @returns A request builder for creating requests to retrieve one `EmployeeProfileBlockContent` entity based on its keys.
     */
    EmployeeProfileBlockContentRequestBuilder.prototype.getByKey = function (employeeProfilePageConfigCode, employeeProfileSectionConfigCode, employeeProfileSubSectionConfigCode, code) {
        return new core_1.GetByKeyRequestBuilder(EmployeeProfileBlockContent_1.EmployeeProfileBlockContent, {
            EmployeeProfilePageConfig_code: employeeProfilePageConfigCode,
            EmployeeProfileSectionConfig_code: employeeProfileSectionConfigCode,
            EmployeeProfileSubSectionConfig_code: employeeProfileSubSectionConfigCode,
            code: code
        });
    };
    /**
     * Returns a request builder for querying all `EmployeeProfileBlockContent` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeProfileBlockContent` entities.
     */
    EmployeeProfileBlockContentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmployeeProfileBlockContent_1.EmployeeProfileBlockContent);
    };
    return EmployeeProfileBlockContentRequestBuilder;
}(core_1.RequestBuilder));
exports.EmployeeProfileBlockContentRequestBuilder = EmployeeProfileBlockContentRequestBuilder;
//# sourceMappingURL=EmployeeProfileBlockContentRequestBuilder.js.map