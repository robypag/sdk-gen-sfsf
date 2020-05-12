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
var FormCustomElementListValueRequestBuilder_1 = require("./FormCustomElementListValueRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormCustomElementListValue" of service "SFOData".
 */
var FormCustomElementListValue = /** @class */ (function (_super) {
    __extends(FormCustomElementListValue, _super);
    function FormCustomElementListValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormCustomElementListValue`.
     * @returns A builder that constructs instances of entity type `FormCustomElementListValue`.
     */
    FormCustomElementListValue.builder = function () {
        return core_1.Entity.entityBuilder(FormCustomElementListValue);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormCustomElementListValue` entity type.
     * @returns A `FormCustomElementListValue` request builder.
     */
    FormCustomElementListValue.requestBuilder = function () {
        return new FormCustomElementListValueRequestBuilder_1.FormCustomElementListValueRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormCustomElementListValue`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormCustomElementListValue`.
     */
    FormCustomElementListValue.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormCustomElementListValue);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormCustomElementListValue.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormCustomElementListValue.
     */
    FormCustomElementListValue._entityName = 'FormCustomElementListValue';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormCustomElementListValue.
     */
    FormCustomElementListValue._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormCustomElementListValue._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormCustomElementListValue;
}(core_1.Entity));
exports.FormCustomElementListValue = FormCustomElementListValue;
(function (FormCustomElementListValue) {
    /**
     * Static representation of the [[elementKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomElementListValue.ELEMENT_KEY = new core_1.StringField('elementKey', FormCustomElementListValue, 'Edm.String');
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomElementListValue.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormCustomElementListValue, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomElementListValue.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormCustomElementListValue, 'Edm.Int64');
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomElementListValue.ITEM_ID = new core_1.BigNumberField('itemId', FormCustomElementListValue, 'Edm.Int64');
    /**
     * Static representation of the [[listIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomElementListValue.LIST_INDEX = new core_1.NumberField('listIndex', FormCustomElementListValue, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomElementListValue.NAME = new core_1.StringField('name', FormCustomElementListValue, 'Edm.String');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomElementListValue.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormCustomElementListValue, 'Edm.Int32');
    /**
     * Static representation of the [[selected]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomElementListValue.SELECTED = new core_1.BooleanField('selected', FormCustomElementListValue, 'Edm.Boolean');
    /**
     * Static representation of the [[value]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomElementListValue.VALUE = new core_1.StringField('value', FormCustomElementListValue, 'Edm.String');
    /**
     * All fields of the FormCustomElementListValue entity.
     */
    FormCustomElementListValue._allFields = [
        FormCustomElementListValue.ELEMENT_KEY,
        FormCustomElementListValue.FORM_CONTENT_ID,
        FormCustomElementListValue.FORM_DATA_ID,
        FormCustomElementListValue.ITEM_ID,
        FormCustomElementListValue.LIST_INDEX,
        FormCustomElementListValue.NAME,
        FormCustomElementListValue.SECTION_INDEX,
        FormCustomElementListValue.SELECTED,
        FormCustomElementListValue.VALUE
    ];
    /**
     * All fields selector.
     */
    FormCustomElementListValue.ALL_FIELDS = new core_1.AllFields('*', FormCustomElementListValue);
    /**
     * All key fields of the FormCustomElementListValue entity.
     */
    FormCustomElementListValue._keyFields = [FormCustomElementListValue.ELEMENT_KEY, FormCustomElementListValue.FORM_CONTENT_ID, FormCustomElementListValue.FORM_DATA_ID, FormCustomElementListValue.ITEM_ID, FormCustomElementListValue.NAME, FormCustomElementListValue.SECTION_INDEX];
    /**
     * Mapping of all key field names to the respective static field property FormCustomElementListValue.
     */
    FormCustomElementListValue._keys = FormCustomElementListValue._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormCustomElementListValue = exports.FormCustomElementListValue || (exports.FormCustomElementListValue = {}));
exports.FormCustomElementListValue = FormCustomElementListValue;
//# sourceMappingURL=FormCustomElementListValue.js.map