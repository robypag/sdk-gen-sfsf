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
var ThemeTemplateRequestBuilder_1 = require("./ThemeTemplateRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ThemeTemplate" of service "SFOData".
 */
var ThemeTemplate = /** @class */ (function (_super) {
    __extends(ThemeTemplate, _super);
    function ThemeTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ThemeTemplate`.
     * @returns A builder that constructs instances of entity type `ThemeTemplate`.
     */
    ThemeTemplate.builder = function () {
        return core_1.Entity.entityBuilder(ThemeTemplate);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ThemeTemplate` entity type.
     * @returns A `ThemeTemplate` request builder.
     */
    ThemeTemplate.requestBuilder = function () {
        return new ThemeTemplateRequestBuilder_1.ThemeTemplateRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ThemeTemplate`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ThemeTemplate`.
     */
    ThemeTemplate.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, ThemeTemplate);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ThemeTemplate.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ThemeTemplate.
     */
    ThemeTemplate._entityName = 'ThemeTemplate';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ThemeTemplate.
     */
    ThemeTemplate._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    ThemeTemplate._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ThemeTemplate;
}(core_1.Entity));
exports.ThemeTemplate = ThemeTemplate;
(function (ThemeTemplate) {
    /**
     * Static representation of the [[bodyStyleClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ThemeTemplate.BODY_STYLE_CLASS = new core_1.StringField('bodyStyleClass', ThemeTemplate, 'Edm.String');
    /**
     * Static representation of the [[footer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ThemeTemplate.FOOTER = new core_1.StringField('footer', ThemeTemplate, 'Edm.String');
    /**
     * Static representation of the [[header]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ThemeTemplate.HEADER = new core_1.StringField('header', ThemeTemplate, 'Edm.String');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ThemeTemplate.ID = new core_1.StringField('id', ThemeTemplate, 'Edm.String');
    /**
     * Static representation of the [[langDir]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ThemeTemplate.LANG_DIR = new core_1.StringField('langDir', ThemeTemplate, 'Edm.String');
    /**
     * Static representation of the [[locale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ThemeTemplate.LOCALE = new core_1.StringField('locale', ThemeTemplate, 'Edm.String');
    /**
     * Static representation of the [[scripts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ThemeTemplate.SCRIPTS = new core_1.StringField('scripts', ThemeTemplate, 'Edm.String');
    /**
     * Static representation of the [[styles]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ThemeTemplate.STYLES = new core_1.StringField('styles', ThemeTemplate, 'Edm.String');
    /**
     * Static representation of the [[template]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ThemeTemplate.TEMPLATE = new core_1.StringField('template', ThemeTemplate, 'Edm.String');
    /**
     * Static representation of the [[ui5BaseThemeRootUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ThemeTemplate.UI_5_BASE_THEME_ROOT_URL = new core_1.StringField('ui5BaseThemeRootUrl', ThemeTemplate, 'Edm.String');
    /**
     * All fields of the ThemeTemplate entity.
     */
    ThemeTemplate._allFields = [
        ThemeTemplate.BODY_STYLE_CLASS,
        ThemeTemplate.FOOTER,
        ThemeTemplate.HEADER,
        ThemeTemplate.ID,
        ThemeTemplate.LANG_DIR,
        ThemeTemplate.LOCALE,
        ThemeTemplate.SCRIPTS,
        ThemeTemplate.STYLES,
        ThemeTemplate.TEMPLATE,
        ThemeTemplate.UI_5_BASE_THEME_ROOT_URL
    ];
    /**
     * All fields selector.
     */
    ThemeTemplate.ALL_FIELDS = new core_1.AllFields('*', ThemeTemplate);
    /**
     * All key fields of the ThemeTemplate entity.
     */
    ThemeTemplate._keyFields = [ThemeTemplate.ID];
    /**
     * Mapping of all key field names to the respective static field property ThemeTemplate.
     */
    ThemeTemplate._keys = ThemeTemplate._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ThemeTemplate = exports.ThemeTemplate || (exports.ThemeTemplate = {}));
exports.ThemeTemplate = ThemeTemplate;
//# sourceMappingURL=ThemeTemplate.js.map