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
var PayrollSystemConfiguration_1 = require("./PayrollSystemConfiguration");
/**
 * Request builder class for operations supported on the [[PayrollSystemConfiguration]] entity.
 */
var PayrollSystemConfigurationRequestBuilder = /** @class */ (function (_super) {
    __extends(PayrollSystemConfigurationRequestBuilder, _super);
    function PayrollSystemConfigurationRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PayrollSystemConfiguration` entity based on its keys.
     * @param externalCode Key property. See [[PayrollSystemConfiguration.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PayrollSystemConfiguration` entity based on its keys.
     */
    PayrollSystemConfigurationRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(PayrollSystemConfiguration_1.PayrollSystemConfiguration, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `PayrollSystemConfiguration` entities.
     * @returns A request builder for creating requests to retrieve all `PayrollSystemConfiguration` entities.
     */
    PayrollSystemConfigurationRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PayrollSystemConfiguration_1.PayrollSystemConfiguration);
    };
    /**
     * Returns a request builder for creating a `PayrollSystemConfiguration` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PayrollSystemConfiguration`.
     */
    PayrollSystemConfigurationRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PayrollSystemConfiguration_1.PayrollSystemConfiguration, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PayrollSystemConfiguration`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PayrollSystemConfiguration`.
     */
    PayrollSystemConfigurationRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PayrollSystemConfiguration_1.PayrollSystemConfiguration, entity);
    };
    PayrollSystemConfigurationRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(PayrollSystemConfiguration_1.PayrollSystemConfiguration, externalCodeOrEntity instanceof PayrollSystemConfiguration_1.PayrollSystemConfiguration ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return PayrollSystemConfigurationRequestBuilder;
}(core_1.RequestBuilder));
exports.PayrollSystemConfigurationRequestBuilder = PayrollSystemConfigurationRequestBuilder;
//# sourceMappingURL=PayrollSystemConfigurationRequestBuilder.js.map