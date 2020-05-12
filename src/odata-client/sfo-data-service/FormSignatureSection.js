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
var FormSignatureSectionRequestBuilder_1 = require("./FormSignatureSectionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormSignatureSection" of service "SFOData".
 */
var FormSignatureSection = /** @class */ (function (_super) {
    __extends(FormSignatureSection, _super);
    function FormSignatureSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormSignatureSection`.
     * @returns A builder that constructs instances of entity type `FormSignatureSection`.
     */
    FormSignatureSection.builder = function () {
        return core_1.Entity.entityBuilder(FormSignatureSection);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormSignatureSection` entity type.
     * @returns A `FormSignatureSection` request builder.
     */
    FormSignatureSection.requestBuilder = function () {
        return new FormSignatureSectionRequestBuilder_1.FormSignatureSectionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormSignatureSection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormSignatureSection`.
     */
    FormSignatureSection.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormSignatureSection);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormSignatureSection.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormSignatureSection.
     */
    FormSignatureSection._entityName = 'FormSignatureSection';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormSignatureSection.
     */
    FormSignatureSection._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormSignatureSection._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormSignatureSection;
}(core_1.Entity));
exports.FormSignatureSection = FormSignatureSection;
var FormSignature_1 = require("./FormSignature");
(function (FormSignatureSection) {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSignatureSection.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormSignatureSection, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSignatureSection.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormSignatureSection, 'Edm.Int64');
    /**
     * Static representation of the [[sectionDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSignatureSection.SECTION_DESCRIPTION = new core_1.StringField('sectionDescription', FormSignatureSection, 'Edm.String');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSignatureSection.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormSignatureSection, 'Edm.Int32');
    /**
     * Static representation of the [[sectionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSignatureSection.SECTION_NAME = new core_1.StringField('sectionName', FormSignatureSection, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[signatures]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSignatureSection.SIGNATURES = new core_1.Link('signatures', FormSignatureSection, FormSignature_1.FormSignature);
    /**
     * All fields of the FormSignatureSection entity.
     */
    FormSignatureSection._allFields = [
        FormSignatureSection.FORM_CONTENT_ID,
        FormSignatureSection.FORM_DATA_ID,
        FormSignatureSection.SECTION_DESCRIPTION,
        FormSignatureSection.SECTION_INDEX,
        FormSignatureSection.SECTION_NAME,
        FormSignatureSection.SIGNATURES
    ];
    /**
     * All fields selector.
     */
    FormSignatureSection.ALL_FIELDS = new core_1.AllFields('*', FormSignatureSection);
    /**
     * All key fields of the FormSignatureSection entity.
     */
    FormSignatureSection._keyFields = [FormSignatureSection.FORM_CONTENT_ID, FormSignatureSection.FORM_DATA_ID, FormSignatureSection.SECTION_INDEX];
    /**
     * Mapping of all key field names to the respective static field property FormSignatureSection.
     */
    FormSignatureSection._keys = FormSignatureSection._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormSignatureSection = exports.FormSignatureSection || (exports.FormSignatureSection = {}));
exports.FormSignatureSection = FormSignatureSection;
//# sourceMappingURL=FormSignatureSection.js.map