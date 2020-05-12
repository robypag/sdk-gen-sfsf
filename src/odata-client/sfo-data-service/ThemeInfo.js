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
var ThemeInfoRequestBuilder_1 = require("./ThemeInfoRequestBuilder");
var AccessibilityPreferences_1 = require("./AccessibilityPreferences");
var ThemeFingerprintsBean_1 = require("./ThemeFingerprintsBean");
var ThemeUrlsBean_1 = require("./ThemeUrlsBean");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ThemeInfo" of service "SFOData".
 */
var ThemeInfo = /** @class */ (function (_super) {
    __extends(ThemeInfo, _super);
    function ThemeInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ThemeInfo`.
     * @returns A builder that constructs instances of entity type `ThemeInfo`.
     */
    ThemeInfo.builder = function () {
        return core_1.Entity.entityBuilder(ThemeInfo);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ThemeInfo` entity type.
     * @returns A `ThemeInfo` request builder.
     */
    ThemeInfo.requestBuilder = function () {
        return new ThemeInfoRequestBuilder_1.ThemeInfoRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ThemeInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ThemeInfo`.
     */
    ThemeInfo.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, ThemeInfo);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ThemeInfo.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ThemeInfo.
     */
    ThemeInfo._entityName = 'ThemeInfo';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ThemeInfo.
     */
    ThemeInfo._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    ThemeInfo._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ThemeInfo;
}(core_1.Entity));
exports.ThemeInfo = ThemeInfo;
(function (ThemeInfo) {
    /**
     * Static representation of the [[accessibilityPreferences]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ThemeInfo.ACCESSIBILITY_PREFERENCES = new AccessibilityPreferences_1.AccessibilityPreferencesField('accessibilityPreferences', ThemeInfo);
    /**
     * Static representation of the [[fingerprints]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ThemeInfo.FINGERPRINTS = new ThemeFingerprintsBean_1.ThemeFingerprintsBeanField('fingerprints', ThemeInfo);
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ThemeInfo.ID = new core_1.StringField('id', ThemeInfo, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ThemeInfo.LAST_MODIFIED_DATE = new core_1.BigNumberField('lastModifiedDate', ThemeInfo, 'Edm.Int64');
    /**
     * Static representation of the [[locale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ThemeInfo.LOCALE = new core_1.StringField('locale', ThemeInfo, 'Edm.String');
    /**
     * Static representation of the [[modules]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ThemeInfo.MODULES = new core_1.StringField('modules', ThemeInfo, 'Edm.String');
    /**
     * Static representation of the [[ui5Theme]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ThemeInfo.UI_5_THEME = new core_1.StringField('ui5Theme', ThemeInfo, 'Edm.String');
    /**
     * Static representation of the [[urls]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ThemeInfo.URLS = new ThemeUrlsBean_1.ThemeUrlsBeanField('urls', ThemeInfo);
    /**
     * All fields of the ThemeInfo entity.
     */
    ThemeInfo._allFields = [
        ThemeInfo.ACCESSIBILITY_PREFERENCES,
        ThemeInfo.FINGERPRINTS,
        ThemeInfo.ID,
        ThemeInfo.LAST_MODIFIED_DATE,
        ThemeInfo.LOCALE,
        ThemeInfo.MODULES,
        ThemeInfo.UI_5_THEME,
        ThemeInfo.URLS
    ];
    /**
     * All fields selector.
     */
    ThemeInfo.ALL_FIELDS = new core_1.AllFields('*', ThemeInfo);
    /**
     * All key fields of the ThemeInfo entity.
     */
    ThemeInfo._keyFields = [ThemeInfo.ID];
    /**
     * Mapping of all key field names to the respective static field property ThemeInfo.
     */
    ThemeInfo._keys = ThemeInfo._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ThemeInfo = exports.ThemeInfo || (exports.ThemeInfo = {}));
exports.ThemeInfo = ThemeInfo;
//# sourceMappingURL=ThemeInfo.js.map