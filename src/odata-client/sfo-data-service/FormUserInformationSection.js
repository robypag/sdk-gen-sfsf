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
var FormUserInformationSectionRequestBuilder_1 = require("./FormUserInformationSectionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormUserInformationSection" of service "SFOData".
 */
var FormUserInformationSection = /** @class */ (function (_super) {
    __extends(FormUserInformationSection, _super);
    function FormUserInformationSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormUserInformationSection`.
     * @returns A builder that constructs instances of entity type `FormUserInformationSection`.
     */
    FormUserInformationSection.builder = function () {
        return core_1.Entity.entityBuilder(FormUserInformationSection);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormUserInformationSection` entity type.
     * @returns A `FormUserInformationSection` request builder.
     */
    FormUserInformationSection.requestBuilder = function () {
        return new FormUserInformationSectionRequestBuilder_1.FormUserInformationSectionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormUserInformationSection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormUserInformationSection`.
     */
    FormUserInformationSection.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormUserInformationSection);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormUserInformationSection.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormUserInformationSection.
     */
    FormUserInformationSection._entityName = 'FormUserInformationSection';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormUserInformationSection.
     */
    FormUserInformationSection._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormUserInformationSection._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormUserInformationSection;
}(core_1.Entity));
exports.FormUserInformationSection = FormUserInformationSection;
var FormCustomElement_1 = require("./FormCustomElement");
(function (FormUserInformationSection) {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormUserInformationSection.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormUserInformationSection, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormUserInformationSection.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormUserInformationSection, 'Edm.Int64');
    /**
     * Static representation of the [[sectionDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormUserInformationSection.SECTION_DESCRIPTION = new core_1.StringField('sectionDescription', FormUserInformationSection, 'Edm.String');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormUserInformationSection.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormUserInformationSection, 'Edm.Int32');
    /**
     * Static representation of the [[sectionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormUserInformationSection.SECTION_NAME = new core_1.StringField('sectionName', FormUserInformationSection, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[userInformationElements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormUserInformationSection.USER_INFORMATION_ELEMENTS = new core_1.Link('userInformationElements', FormUserInformationSection, FormCustomElement_1.FormCustomElement);
    /**
     * All fields of the FormUserInformationSection entity.
     */
    FormUserInformationSection._allFields = [
        FormUserInformationSection.FORM_CONTENT_ID,
        FormUserInformationSection.FORM_DATA_ID,
        FormUserInformationSection.SECTION_DESCRIPTION,
        FormUserInformationSection.SECTION_INDEX,
        FormUserInformationSection.SECTION_NAME,
        FormUserInformationSection.USER_INFORMATION_ELEMENTS
    ];
    /**
     * All fields selector.
     */
    FormUserInformationSection.ALL_FIELDS = new core_1.AllFields('*', FormUserInformationSection);
    /**
     * All key fields of the FormUserInformationSection entity.
     */
    FormUserInformationSection._keyFields = [FormUserInformationSection.FORM_CONTENT_ID, FormUserInformationSection.FORM_DATA_ID];
    /**
     * Mapping of all key field names to the respective static field property FormUserInformationSection.
     */
    FormUserInformationSection._keys = FormUserInformationSection._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormUserInformationSection = exports.FormUserInformationSection || (exports.FormUserInformationSection = {}));
exports.FormUserInformationSection = FormUserInformationSection;
//# sourceMappingURL=FormUserInformationSection.js.map