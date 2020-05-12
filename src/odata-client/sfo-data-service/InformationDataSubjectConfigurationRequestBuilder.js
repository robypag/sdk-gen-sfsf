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
var InformationDataSubjectConfiguration_1 = require("./InformationDataSubjectConfiguration");
/**
 * Request builder class for operations supported on the [[InformationDataSubjectConfiguration]] entity.
 */
var InformationDataSubjectConfigurationRequestBuilder = /** @class */ (function (_super) {
    __extends(InformationDataSubjectConfigurationRequestBuilder, _super);
    function InformationDataSubjectConfigurationRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `InformationDataSubjectConfiguration` entity based on its keys.
     * @param externalCode Key property. See [[InformationDataSubjectConfiguration.externalCode]].
     * @returns A request builder for creating requests to retrieve one `InformationDataSubjectConfiguration` entity based on its keys.
     */
    InformationDataSubjectConfigurationRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(InformationDataSubjectConfiguration_1.InformationDataSubjectConfiguration, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `InformationDataSubjectConfiguration` entities.
     * @returns A request builder for creating requests to retrieve all `InformationDataSubjectConfiguration` entities.
     */
    InformationDataSubjectConfigurationRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(InformationDataSubjectConfiguration_1.InformationDataSubjectConfiguration);
    };
    /**
     * Returns a request builder for creating a `InformationDataSubjectConfiguration` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InformationDataSubjectConfiguration`.
     */
    InformationDataSubjectConfigurationRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(InformationDataSubjectConfiguration_1.InformationDataSubjectConfiguration, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `InformationDataSubjectConfiguration`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InformationDataSubjectConfiguration`.
     */
    InformationDataSubjectConfigurationRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(InformationDataSubjectConfiguration_1.InformationDataSubjectConfiguration, entity);
    };
    InformationDataSubjectConfigurationRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(InformationDataSubjectConfiguration_1.InformationDataSubjectConfiguration, externalCodeOrEntity instanceof InformationDataSubjectConfiguration_1.InformationDataSubjectConfiguration ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return InformationDataSubjectConfigurationRequestBuilder;
}(core_1.RequestBuilder));
exports.InformationDataSubjectConfigurationRequestBuilder = InformationDataSubjectConfigurationRequestBuilder;
//# sourceMappingURL=InformationDataSubjectConfigurationRequestBuilder.js.map