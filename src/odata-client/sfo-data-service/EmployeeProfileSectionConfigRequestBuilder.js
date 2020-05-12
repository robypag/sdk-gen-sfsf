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
var EmployeeProfileSectionConfig_1 = require("./EmployeeProfileSectionConfig");
/**
 * Request builder class for operations supported on the [[EmployeeProfileSectionConfig]] entity.
 */
var EmployeeProfileSectionConfigRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeeProfileSectionConfigRequestBuilder, _super);
    function EmployeeProfileSectionConfigRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeeProfileSectionConfig` entity based on its keys.
     * @param employeeProfilePageConfigCode Key property. See [[EmployeeProfileSectionConfig.employeeProfilePageConfigCode]].
     * @param code Key property. See [[EmployeeProfileSectionConfig.code]].
     * @returns A request builder for creating requests to retrieve one `EmployeeProfileSectionConfig` entity based on its keys.
     */
    EmployeeProfileSectionConfigRequestBuilder.prototype.getByKey = function (employeeProfilePageConfigCode, code) {
        return new core_1.GetByKeyRequestBuilder(EmployeeProfileSectionConfig_1.EmployeeProfileSectionConfig, {
            EmployeeProfilePageConfig_code: employeeProfilePageConfigCode,
            code: code
        });
    };
    /**
     * Returns a request builder for querying all `EmployeeProfileSectionConfig` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeProfileSectionConfig` entities.
     */
    EmployeeProfileSectionConfigRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmployeeProfileSectionConfig_1.EmployeeProfileSectionConfig);
    };
    return EmployeeProfileSectionConfigRequestBuilder;
}(core_1.RequestBuilder));
exports.EmployeeProfileSectionConfigRequestBuilder = EmployeeProfileSectionConfigRequestBuilder;
//# sourceMappingURL=EmployeeProfileSectionConfigRequestBuilder.js.map