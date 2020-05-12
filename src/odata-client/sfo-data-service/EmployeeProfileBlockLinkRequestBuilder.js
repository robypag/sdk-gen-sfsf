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
var EmployeeProfileBlockLink_1 = require("./EmployeeProfileBlockLink");
/**
 * Request builder class for operations supported on the [[EmployeeProfileBlockLink]] entity.
 */
var EmployeeProfileBlockLinkRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeeProfileBlockLinkRequestBuilder, _super);
    function EmployeeProfileBlockLinkRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeeProfileBlockLink` entity based on its keys.
     * @param employeeProfileBlockContentCode Key property. See [[EmployeeProfileBlockLink.employeeProfileBlockContentCode]].
     * @param employeeProfilePageConfigCode Key property. See [[EmployeeProfileBlockLink.employeeProfilePageConfigCode]].
     * @param employeeProfileSectionConfigCode Key property. See [[EmployeeProfileBlockLink.employeeProfileSectionConfigCode]].
     * @param employeeProfileSubSectionConfigCode Key property. See [[EmployeeProfileBlockLink.employeeProfileSubSectionConfigCode]].
     * @param code Key property. See [[EmployeeProfileBlockLink.code]].
     * @returns A request builder for creating requests to retrieve one `EmployeeProfileBlockLink` entity based on its keys.
     */
    EmployeeProfileBlockLinkRequestBuilder.prototype.getByKey = function (employeeProfileBlockContentCode, employeeProfilePageConfigCode, employeeProfileSectionConfigCode, employeeProfileSubSectionConfigCode, code) {
        return new core_1.GetByKeyRequestBuilder(EmployeeProfileBlockLink_1.EmployeeProfileBlockLink, {
            EmployeeProfileBlockContent_code: employeeProfileBlockContentCode,
            EmployeeProfilePageConfig_code: employeeProfilePageConfigCode,
            EmployeeProfileSectionConfig_code: employeeProfileSectionConfigCode,
            EmployeeProfileSubSectionConfig_code: employeeProfileSubSectionConfigCode,
            code: code
        });
    };
    /**
     * Returns a request builder for querying all `EmployeeProfileBlockLink` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeProfileBlockLink` entities.
     */
    EmployeeProfileBlockLinkRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmployeeProfileBlockLink_1.EmployeeProfileBlockLink);
    };
    return EmployeeProfileBlockLinkRequestBuilder;
}(core_1.RequestBuilder));
exports.EmployeeProfileBlockLinkRequestBuilder = EmployeeProfileBlockLinkRequestBuilder;
//# sourceMappingURL=EmployeeProfileBlockLinkRequestBuilder.js.map