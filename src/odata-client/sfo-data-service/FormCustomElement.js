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
var FormCustomElementRequestBuilder_1 = require("./FormCustomElementRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormCustomElement" of service "SFOData".
 */
var FormCustomElement = /** @class */ (function (_super) {
    __extends(FormCustomElement, _super);
    function FormCustomElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormCustomElement`.
     * @returns A builder that constructs instances of entity type `FormCustomElement`.
     */
    FormCustomElement.builder = function () {
        return core_1.Entity.entityBuilder(FormCustomElement);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormCustomElement` entity type.
     * @returns A `FormCustomElement` request builder.
     */
    FormCustomElement.requestBuilder = function () {
        return new FormCustomElementRequestBuilder_1.FormCustomElementRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormCustomElement`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormCustomElement`.
     */
    FormCustomElement.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormCustomElement);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormCustomElement.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormCustomElement.
     */
    FormCustomElement._entityName = 'FormCustomElement';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormCustomElement.
     */
    FormCustomElement._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormCustomElement._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormCustomElement;
}(core_1.Entity));
exports.FormCustomElement = FormCustomElement;
var FormCustomElementListValue_1 = require("./FormCustomElementListValue");
(function (FormCustomElement) {
    /**
     * Static representation of the [[checked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomElement.CHECKED = new core_1.BooleanField('checked', FormCustomElement, 'Edm.Boolean');
    /**
     * Static representation of the [[dateFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomElement.DATE_FORMAT = new core_1.StringField('dateFormat', FormCustomElement, 'Edm.String');
    /**
     * Static representation of the [[editable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomElement.EDITABLE = new core_1.BooleanField('editable', FormCustomElement, 'Edm.Boolean');
    /**
     * Static representation of the [[elementIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomElement.ELEMENT_INDEX = new core_1.NumberField('elementIndex', FormCustomElement, 'Edm.Int32');
    /**
     * Static representation of the [[elementKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomElement.ELEMENT_KEY = new core_1.StringField('elementKey', FormCustomElement, 'Edm.String');
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomElement.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormCustomElement, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomElement.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormCustomElement, 'Edm.Int64');
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomElement.ITEM_ID = new core_1.BigNumberField('itemId', FormCustomElement, 'Edm.Int64');
    /**
     * Static representation of the [[maximumValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomElement.MAXIMUM_VALUE = new core_1.NumberField('maximumValue', FormCustomElement, 'Edm.Double');
    /**
     * Static representation of the [[minimumValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomElement.MINIMUM_VALUE = new core_1.NumberField('minimumValue', FormCustomElement, 'Edm.Double');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomElement.NAME = new core_1.StringField('name', FormCustomElement, 'Edm.String');
    /**
     * Static representation of the [[required]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomElement.REQUIRED = new core_1.BooleanField('required', FormCustomElement, 'Edm.Boolean');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomElement.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormCustomElement, 'Edm.Int32');
    /**
     * Static representation of the [[textMaximumLength]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomElement.TEXT_MAXIMUM_LENGTH = new core_1.NumberField('textMaximumLength', FormCustomElement, 'Edm.Int32');
    /**
     * Static representation of the [[textSize]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomElement.TEXT_SIZE = new core_1.NumberField('textSize', FormCustomElement, 'Edm.Int32');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomElement.TYPE = new core_1.StringField('type', FormCustomElement, 'Edm.String');
    /**
     * Static representation of the [[value]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomElement.VALUE = new core_1.StringField('value', FormCustomElement, 'Edm.String');
    /**
     * Static representation of the [[valueKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomElement.VALUE_KEY = new core_1.StringField('valueKey', FormCustomElement, 'Edm.String');
    /**
     * Static representation of the [[writingAssistant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomElement.WRITING_ASSISTANT = new core_1.BooleanField('writingAssistant', FormCustomElement, 'Edm.Boolean');
    /**
     * Static representation of the one-to-many navigation property [[elementListValues]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomElement.ELEMENT_LIST_VALUES = new core_1.Link('elementListValues', FormCustomElement, FormCustomElementListValue_1.FormCustomElementListValue);
    /**
     * All fields of the FormCustomElement entity.
     */
    FormCustomElement._allFields = [
        FormCustomElement.CHECKED,
        FormCustomElement.DATE_FORMAT,
        FormCustomElement.EDITABLE,
        FormCustomElement.ELEMENT_INDEX,
        FormCustomElement.ELEMENT_KEY,
        FormCustomElement.FORM_CONTENT_ID,
        FormCustomElement.FORM_DATA_ID,
        FormCustomElement.ITEM_ID,
        FormCustomElement.MAXIMUM_VALUE,
        FormCustomElement.MINIMUM_VALUE,
        FormCustomElement.NAME,
        FormCustomElement.REQUIRED,
        FormCustomElement.SECTION_INDEX,
        FormCustomElement.TEXT_MAXIMUM_LENGTH,
        FormCustomElement.TEXT_SIZE,
        FormCustomElement.TYPE,
        FormCustomElement.VALUE,
        FormCustomElement.VALUE_KEY,
        FormCustomElement.WRITING_ASSISTANT,
        FormCustomElement.ELEMENT_LIST_VALUES
    ];
    /**
     * All fields selector.
     */
    FormCustomElement.ALL_FIELDS = new core_1.AllFields('*', FormCustomElement);
    /**
     * All key fields of the FormCustomElement entity.
     */
    FormCustomElement._keyFields = [FormCustomElement.ELEMENT_KEY, FormCustomElement.FORM_CONTENT_ID, FormCustomElement.FORM_DATA_ID, FormCustomElement.ITEM_ID, FormCustomElement.SECTION_INDEX];
    /**
     * Mapping of all key field names to the respective static field property FormCustomElement.
     */
    FormCustomElement._keys = FormCustomElement._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormCustomElement = exports.FormCustomElement || (exports.FormCustomElement = {}));
exports.FormCustomElement = FormCustomElement;
//# sourceMappingURL=FormCustomElement.js.map