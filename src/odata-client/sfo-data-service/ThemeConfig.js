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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ThemeConfigRequestBuilder_1 = require("./ThemeConfigRequestBuilder");
var GlobalThemeConfiguration_1 = require("./GlobalThemeConfiguration");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ThemeConfig" of service "SFOData".
 */
var ThemeConfig = /** @class */ (function (_super) {
    __extends(ThemeConfig, _super);
    function ThemeConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ThemeConfig`.
     * @returns A builder that constructs instances of entity type `ThemeConfig`.
     */
    ThemeConfig.builder = function () {
        return core_1.Entity.entityBuilder(ThemeConfig);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ThemeConfig` entity type.
     * @returns A `ThemeConfig` request builder.
     */
    ThemeConfig.requestBuilder = function () {
        return new ThemeConfigRequestBuilder_1.ThemeConfigRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ThemeConfig`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ThemeConfig`.
     */
    ThemeConfig.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, ThemeConfig);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ThemeConfig.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ThemeConfig.
     */
    ThemeConfig._entityName = 'ThemeConfig';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ThemeConfig.
     */
    ThemeConfig._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    ThemeConfig._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ThemeConfig;
}(core_1.Entity));
exports.ThemeConfig = ThemeConfig;
(function (ThemeConfig) {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ThemeConfig.ID = new core_1.StringField('id', ThemeConfig, 'Edm.String');
    /**
     * Static representation of the [[themeConfiguration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ThemeConfig.THEME_CONFIGURATION = new GlobalThemeConfiguration_1.GlobalThemeConfigurationField('themeConfiguration', ThemeConfig);
    /**
     * All fields of the ThemeConfig entity.
     */
    ThemeConfig._allFields = [
        ThemeConfig.ID,
        ThemeConfig.THEME_CONFIGURATION
    ];
    /**
     * All fields selector.
     */
    ThemeConfig.ALL_FIELDS = new core_1.AllFields('*', ThemeConfig);
    /**
     * All key fields of the ThemeConfig entity.
     */
    ThemeConfig._keyFields = [ThemeConfig.ID];
    /**
     * Mapping of all key field names to the respective static field property ThemeConfig.
     */
    ThemeConfig._keys = ThemeConfig._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ThemeConfig = exports.ThemeConfig || (exports.ThemeConfig = {}));
exports.ThemeConfig = ThemeConfig;
//# sourceMappingURL=ThemeConfig.js.map