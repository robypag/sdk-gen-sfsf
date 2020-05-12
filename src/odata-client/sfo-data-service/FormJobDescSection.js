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
var FormJobDescSectionRequestBuilder_1 = require("./FormJobDescSectionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormJobDescSection" of service "SFOData".
 */
var FormJobDescSection = /** @class */ (function (_super) {
    __extends(FormJobDescSection, _super);
    function FormJobDescSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormJobDescSection`.
     * @returns A builder that constructs instances of entity type `FormJobDescSection`.
     */
    FormJobDescSection.builder = function () {
        return core_1.Entity.entityBuilder(FormJobDescSection);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormJobDescSection` entity type.
     * @returns A `FormJobDescSection` request builder.
     */
    FormJobDescSection.requestBuilder = function () {
        return new FormJobDescSectionRequestBuilder_1.FormJobDescSectionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormJobDescSection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormJobDescSection`.
     */
    FormJobDescSection.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormJobDescSection);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormJobDescSection.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormJobDescSection.
     */
    FormJobDescSection._entityName = 'FormJobDescSection';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormJobDescSection.
     */
    FormJobDescSection._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormJobDescSection._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormJobDescSection;
}(core_1.Entity));
exports.FormJobDescSection = FormJobDescSection;
var FormJobRole_1 = require("./FormJobRole");
(function (FormJobDescSection) {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormJobDescSection.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormJobDescSection, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormJobDescSection.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormJobDescSection, 'Edm.Int64');
    /**
     * Static representation of the [[sectionDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormJobDescSection.SECTION_DESCRIPTION = new core_1.StringField('sectionDescription', FormJobDescSection, 'Edm.String');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormJobDescSection.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormJobDescSection, 'Edm.Int32');
    /**
     * Static representation of the [[sectionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormJobDescSection.SECTION_NAME = new core_1.StringField('sectionName', FormJobDescSection, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[jobRoles]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormJobDescSection.JOB_ROLES = new core_1.Link('jobRoles', FormJobDescSection, FormJobRole_1.FormJobRole);
    /**
     * All fields of the FormJobDescSection entity.
     */
    FormJobDescSection._allFields = [
        FormJobDescSection.FORM_CONTENT_ID,
        FormJobDescSection.FORM_DATA_ID,
        FormJobDescSection.SECTION_DESCRIPTION,
        FormJobDescSection.SECTION_INDEX,
        FormJobDescSection.SECTION_NAME,
        FormJobDescSection.JOB_ROLES
    ];
    /**
     * All fields selector.
     */
    FormJobDescSection.ALL_FIELDS = new core_1.AllFields('*', FormJobDescSection);
    /**
     * All key fields of the FormJobDescSection entity.
     */
    FormJobDescSection._keyFields = [FormJobDescSection.FORM_CONTENT_ID, FormJobDescSection.FORM_DATA_ID, FormJobDescSection.SECTION_INDEX];
    /**
     * Mapping of all key field names to the respective static field property FormJobDescSection.
     */
    FormJobDescSection._keys = FormJobDescSection._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormJobDescSection = exports.FormJobDescSection || (exports.FormJobDescSection = {}));
exports.FormJobDescSection = FormJobDescSection;
//# sourceMappingURL=FormJobDescSection.js.map