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
var SpotAwardProgramAdvancedSettings_1 = require("./SpotAwardProgramAdvancedSettings");
/**
 * Request builder class for operations supported on the [[SpotAwardProgramAdvancedSettings]] entity.
 */
var SpotAwardProgramAdvancedSettingsRequestBuilder = /** @class */ (function (_super) {
    __extends(SpotAwardProgramAdvancedSettingsRequestBuilder, _super);
    function SpotAwardProgramAdvancedSettingsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SpotAwardProgramAdvancedSettings` entity based on its keys.
     * @param spotAwardProgramExternalCode Key property. See [[SpotAwardProgramAdvancedSettings.spotAwardProgramExternalCode]].
     * @param externalCode Key property. See [[SpotAwardProgramAdvancedSettings.externalCode]].
     * @returns A request builder for creating requests to retrieve one `SpotAwardProgramAdvancedSettings` entity based on its keys.
     */
    SpotAwardProgramAdvancedSettingsRequestBuilder.prototype.getByKey = function (spotAwardProgramExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(SpotAwardProgramAdvancedSettings_1.SpotAwardProgramAdvancedSettings, {
            SpotAwardProgram_externalCode: spotAwardProgramExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `SpotAwardProgramAdvancedSettings` entities.
     * @returns A request builder for creating requests to retrieve all `SpotAwardProgramAdvancedSettings` entities.
     */
    SpotAwardProgramAdvancedSettingsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SpotAwardProgramAdvancedSettings_1.SpotAwardProgramAdvancedSettings);
    };
    /**
     * Returns a request builder for creating a `SpotAwardProgramAdvancedSettings` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SpotAwardProgramAdvancedSettings`.
     */
    SpotAwardProgramAdvancedSettingsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(SpotAwardProgramAdvancedSettings_1.SpotAwardProgramAdvancedSettings, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SpotAwardProgramAdvancedSettings`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SpotAwardProgramAdvancedSettings`.
     */
    SpotAwardProgramAdvancedSettingsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(SpotAwardProgramAdvancedSettings_1.SpotAwardProgramAdvancedSettings, entity);
    };
    SpotAwardProgramAdvancedSettingsRequestBuilder.prototype.delete = function (spotAwardProgramExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(SpotAwardProgramAdvancedSettings_1.SpotAwardProgramAdvancedSettings, spotAwardProgramExternalCodeOrEntity instanceof SpotAwardProgramAdvancedSettings_1.SpotAwardProgramAdvancedSettings ? spotAwardProgramExternalCodeOrEntity : {
            SpotAwardProgram_externalCode: spotAwardProgramExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return SpotAwardProgramAdvancedSettingsRequestBuilder;
}(core_1.RequestBuilder));
exports.SpotAwardProgramAdvancedSettingsRequestBuilder = SpotAwardProgramAdvancedSettingsRequestBuilder;
//# sourceMappingURL=SpotAwardProgramAdvancedSettingsRequestBuilder.js.map