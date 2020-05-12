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
var PayrollConfigurationCategoryLink_1 = require("./PayrollConfigurationCategoryLink");
/**
 * Request builder class for operations supported on the [[PayrollConfigurationCategoryLink]] entity.
 */
var PayrollConfigurationCategoryLinkRequestBuilder = /** @class */ (function (_super) {
    __extends(PayrollConfigurationCategoryLinkRequestBuilder, _super);
    function PayrollConfigurationCategoryLinkRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PayrollConfigurationCategoryLink` entity based on its keys.
     * @param payrollConfigurationCategoryExternalCode Key property. See [[PayrollConfigurationCategoryLink.payrollConfigurationCategoryExternalCode]].
     * @param payrollSystemConfigurationExternalCode Key property. See [[PayrollConfigurationCategoryLink.payrollSystemConfigurationExternalCode]].
     * @param externalCode Key property. See [[PayrollConfigurationCategoryLink.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PayrollConfigurationCategoryLink` entity based on its keys.
     */
    PayrollConfigurationCategoryLinkRequestBuilder.prototype.getByKey = function (payrollConfigurationCategoryExternalCode, payrollSystemConfigurationExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(PayrollConfigurationCategoryLink_1.PayrollConfigurationCategoryLink, {
            PayrollConfigurationCategory_externalCode: payrollConfigurationCategoryExternalCode,
            PayrollSystemConfiguration_externalCode: payrollSystemConfigurationExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `PayrollConfigurationCategoryLink` entities.
     * @returns A request builder for creating requests to retrieve all `PayrollConfigurationCategoryLink` entities.
     */
    PayrollConfigurationCategoryLinkRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PayrollConfigurationCategoryLink_1.PayrollConfigurationCategoryLink);
    };
    /**
     * Returns a request builder for creating a `PayrollConfigurationCategoryLink` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PayrollConfigurationCategoryLink`.
     */
    PayrollConfigurationCategoryLinkRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PayrollConfigurationCategoryLink_1.PayrollConfigurationCategoryLink, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PayrollConfigurationCategoryLink`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PayrollConfigurationCategoryLink`.
     */
    PayrollConfigurationCategoryLinkRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PayrollConfigurationCategoryLink_1.PayrollConfigurationCategoryLink, entity);
    };
    PayrollConfigurationCategoryLinkRequestBuilder.prototype.delete = function (payrollConfigurationCategoryExternalCodeOrEntity, payrollSystemConfigurationExternalCode, externalCode) {
        return new core_1.DeleteRequestBuilder(PayrollConfigurationCategoryLink_1.PayrollConfigurationCategoryLink, payrollConfigurationCategoryExternalCodeOrEntity instanceof PayrollConfigurationCategoryLink_1.PayrollConfigurationCategoryLink ? payrollConfigurationCategoryExternalCodeOrEntity : {
            PayrollConfigurationCategory_externalCode: payrollConfigurationCategoryExternalCodeOrEntity,
            PayrollSystemConfiguration_externalCode: payrollSystemConfigurationExternalCode,
            externalCode: externalCode
        });
    };
    return PayrollConfigurationCategoryLinkRequestBuilder;
}(core_1.RequestBuilder));
exports.PayrollConfigurationCategoryLinkRequestBuilder = PayrollConfigurationCategoryLinkRequestBuilder;
//# sourceMappingURL=PayrollConfigurationCategoryLinkRequestBuilder.js.map