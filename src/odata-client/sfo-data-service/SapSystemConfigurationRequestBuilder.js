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
var SapSystemConfiguration_1 = require("./SapSystemConfiguration");
/**
 * Request builder class for operations supported on the [[SapSystemConfiguration]] entity.
 */
var SapSystemConfigurationRequestBuilder = /** @class */ (function (_super) {
    __extends(SapSystemConfigurationRequestBuilder, _super);
    function SapSystemConfigurationRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SapSystemConfiguration` entity based on its keys.
     * @param externalCode Key property. See [[SapSystemConfiguration.externalCode]].
     * @returns A request builder for creating requests to retrieve one `SapSystemConfiguration` entity based on its keys.
     */
    SapSystemConfigurationRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(SapSystemConfiguration_1.SapSystemConfiguration, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `SapSystemConfiguration` entities.
     * @returns A request builder for creating requests to retrieve all `SapSystemConfiguration` entities.
     */
    SapSystemConfigurationRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SapSystemConfiguration_1.SapSystemConfiguration);
    };
    /**
     * Returns a request builder for creating a `SapSystemConfiguration` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SapSystemConfiguration`.
     */
    SapSystemConfigurationRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(SapSystemConfiguration_1.SapSystemConfiguration, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SapSystemConfiguration`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SapSystemConfiguration`.
     */
    SapSystemConfigurationRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(SapSystemConfiguration_1.SapSystemConfiguration, entity);
    };
    SapSystemConfigurationRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(SapSystemConfiguration_1.SapSystemConfiguration, externalCodeOrEntity instanceof SapSystemConfiguration_1.SapSystemConfiguration ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return SapSystemConfigurationRequestBuilder;
}(core_1.RequestBuilder));
exports.SapSystemConfigurationRequestBuilder = SapSystemConfigurationRequestBuilder;
//# sourceMappingURL=SapSystemConfigurationRequestBuilder.js.map