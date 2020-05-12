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
var PayrollConfigurationCategory_1 = require("./PayrollConfigurationCategory");
/**
 * Request builder class for operations supported on the [[PayrollConfigurationCategory]] entity.
 */
var PayrollConfigurationCategoryRequestBuilder = /** @class */ (function (_super) {
    __extends(PayrollConfigurationCategoryRequestBuilder, _super);
    function PayrollConfigurationCategoryRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PayrollConfigurationCategory` entity based on its keys.
     * @param payrollSystemConfigurationExternalCode Key property. See [[PayrollConfigurationCategory.payrollSystemConfigurationExternalCode]].
     * @param externalCode Key property. See [[PayrollConfigurationCategory.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PayrollConfigurationCategory` entity based on its keys.
     */
    PayrollConfigurationCategoryRequestBuilder.prototype.getByKey = function (payrollSystemConfigurationExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(PayrollConfigurationCategory_1.PayrollConfigurationCategory, {
            PayrollSystemConfiguration_externalCode: payrollSystemConfigurationExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `PayrollConfigurationCategory` entities.
     * @returns A request builder for creating requests to retrieve all `PayrollConfigurationCategory` entities.
     */
    PayrollConfigurationCategoryRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PayrollConfigurationCategory_1.PayrollConfigurationCategory);
    };
    /**
     * Returns a request builder for creating a `PayrollConfigurationCategory` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PayrollConfigurationCategory`.
     */
    PayrollConfigurationCategoryRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PayrollConfigurationCategory_1.PayrollConfigurationCategory, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PayrollConfigurationCategory`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PayrollConfigurationCategory`.
     */
    PayrollConfigurationCategoryRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PayrollConfigurationCategory_1.PayrollConfigurationCategory, entity);
    };
    PayrollConfigurationCategoryRequestBuilder.prototype.delete = function (payrollSystemConfigurationExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(PayrollConfigurationCategory_1.PayrollConfigurationCategory, payrollSystemConfigurationExternalCodeOrEntity instanceof PayrollConfigurationCategory_1.PayrollConfigurationCategory ? payrollSystemConfigurationExternalCodeOrEntity : {
            PayrollSystemConfiguration_externalCode: payrollSystemConfigurationExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return PayrollConfigurationCategoryRequestBuilder;
}(core_1.RequestBuilder));
exports.PayrollConfigurationCategoryRequestBuilder = PayrollConfigurationCategoryRequestBuilder;
//# sourceMappingURL=PayrollConfigurationCategoryRequestBuilder.js.map