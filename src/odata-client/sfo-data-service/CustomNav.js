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
var CustomNavRequestBuilder_1 = require("./CustomNavRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CustomNav" of service "SFOData".
 */
var CustomNav = /** @class */ (function (_super) {
    __extends(CustomNav, _super);
    function CustomNav() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CustomNav`.
     * @returns A builder that constructs instances of entity type `CustomNav`.
     */
    CustomNav.builder = function () {
        return core_1.Entity.entityBuilder(CustomNav);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CustomNav` entity type.
     * @returns A `CustomNav` request builder.
     */
    CustomNav.requestBuilder = function () {
        return new CustomNavRequestBuilder_1.CustomNavRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomNav`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustomNav`.
     */
    CustomNav.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, CustomNav);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CustomNav.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CustomNav.
     */
    CustomNav._entityName = 'CustomNav';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CustomNav.
     */
    CustomNav._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CustomNav._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CustomNav;
}(core_1.Entity));
exports.CustomNav = CustomNav;
(function (CustomNav) {
    /**
     * Static representation of the [[altText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomNav.ALT_TEXT = new core_1.StringField('altText', CustomNav, 'Edm.String');
    /**
     * Static representation of the [[alwaysShow]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomNav.ALWAYS_SHOW = new core_1.BooleanField('alwaysShow', CustomNav, 'Edm.Boolean');
    /**
     * Static representation of the [[isModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomNav.IS_MODULE = new core_1.BooleanField('isModule', CustomNav, 'Edm.Boolean');
    /**
     * Static representation of the [[isSelected]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomNav.IS_SELECTED = new core_1.BooleanField('isSelected', CustomNav, 'Edm.Boolean');
    /**
     * Static representation of the [[label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomNav.LABEL = new core_1.StringField('label', CustomNav, 'Edm.String');
    /**
     * Static representation of the [[newWindow]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomNav.NEW_WINDOW = new core_1.BooleanField('newWindow', CustomNav, 'Edm.Boolean');
    /**
     * Static representation of the [[title]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomNav.TITLE = new core_1.StringField('title', CustomNav, 'Edm.String');
    /**
     * Static representation of the [[url]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomNav.URL = new core_1.StringField('url', CustomNav, 'Edm.String');
    /**
     * All fields of the CustomNav entity.
     */
    CustomNav._allFields = [
        CustomNav.ALT_TEXT,
        CustomNav.ALWAYS_SHOW,
        CustomNav.IS_MODULE,
        CustomNav.IS_SELECTED,
        CustomNav.LABEL,
        CustomNav.NEW_WINDOW,
        CustomNav.TITLE,
        CustomNav.URL
    ];
    /**
     * All fields selector.
     */
    CustomNav.ALL_FIELDS = new core_1.AllFields('*', CustomNav);
    /**
     * All key fields of the CustomNav entity.
     */
    CustomNav._keyFields = [CustomNav.TITLE];
    /**
     * Mapping of all key field names to the respective static field property CustomNav.
     */
    CustomNav._keys = CustomNav._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CustomNav = exports.CustomNav || (exports.CustomNav = {}));
exports.CustomNav = CustomNav;
//# sourceMappingURL=CustomNav.js.map