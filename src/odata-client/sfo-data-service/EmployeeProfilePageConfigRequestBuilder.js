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
var EmployeeProfilePageConfig_1 = require("./EmployeeProfilePageConfig");
/**
 * Request builder class for operations supported on the [[EmployeeProfilePageConfig]] entity.
 */
var EmployeeProfilePageConfigRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeeProfilePageConfigRequestBuilder, _super);
    function EmployeeProfilePageConfigRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeeProfilePageConfig` entity based on its keys.
     * @param code Key property. See [[EmployeeProfilePageConfig.code]].
     * @returns A request builder for creating requests to retrieve one `EmployeeProfilePageConfig` entity based on its keys.
     */
    EmployeeProfilePageConfigRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilder(EmployeeProfilePageConfig_1.EmployeeProfilePageConfig, { code: code });
    };
    /**
     * Returns a request builder for querying all `EmployeeProfilePageConfig` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeProfilePageConfig` entities.
     */
    EmployeeProfilePageConfigRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmployeeProfilePageConfig_1.EmployeeProfilePageConfig);
    };
    return EmployeeProfilePageConfigRequestBuilder;
}(core_1.RequestBuilder));
exports.EmployeeProfilePageConfigRequestBuilder = EmployeeProfilePageConfigRequestBuilder;
//# sourceMappingURL=EmployeeProfilePageConfigRequestBuilder.js.map