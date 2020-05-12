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
var EmployeeProfileHeaderConfig_1 = require("./EmployeeProfileHeaderConfig");
/**
 * Request builder class for operations supported on the [[EmployeeProfileHeaderConfig]] entity.
 */
var EmployeeProfileHeaderConfigRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeeProfileHeaderConfigRequestBuilder, _super);
    function EmployeeProfileHeaderConfigRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeeProfileHeaderConfig` entity based on its keys.
     * @param employeeProfilePageConfigCode Key property. See [[EmployeeProfileHeaderConfig.employeeProfilePageConfigCode]].
     * @param code Key property. See [[EmployeeProfileHeaderConfig.code]].
     * @returns A request builder for creating requests to retrieve one `EmployeeProfileHeaderConfig` entity based on its keys.
     */
    EmployeeProfileHeaderConfigRequestBuilder.prototype.getByKey = function (employeeProfilePageConfigCode, code) {
        return new core_1.GetByKeyRequestBuilder(EmployeeProfileHeaderConfig_1.EmployeeProfileHeaderConfig, {
            EmployeeProfilePageConfig_code: employeeProfilePageConfigCode,
            code: code
        });
    };
    /**
     * Returns a request builder for querying all `EmployeeProfileHeaderConfig` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeProfileHeaderConfig` entities.
     */
    EmployeeProfileHeaderConfigRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmployeeProfileHeaderConfig_1.EmployeeProfileHeaderConfig);
    };
    return EmployeeProfileHeaderConfigRequestBuilder;
}(core_1.RequestBuilder));
exports.EmployeeProfileHeaderConfigRequestBuilder = EmployeeProfileHeaderConfigRequestBuilder;
//# sourceMappingURL=EmployeeProfileHeaderConfigRequestBuilder.js.map