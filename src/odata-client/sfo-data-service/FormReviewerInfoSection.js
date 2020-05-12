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
var FormReviewerInfoSectionRequestBuilder_1 = require("./FormReviewerInfoSectionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormReviewerInfoSection" of service "SFOData".
 */
var FormReviewerInfoSection = /** @class */ (function (_super) {
    __extends(FormReviewerInfoSection, _super);
    function FormReviewerInfoSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormReviewerInfoSection`.
     * @returns A builder that constructs instances of entity type `FormReviewerInfoSection`.
     */
    FormReviewerInfoSection.builder = function () {
        return core_1.Entity.entityBuilder(FormReviewerInfoSection);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormReviewerInfoSection` entity type.
     * @returns A `FormReviewerInfoSection` request builder.
     */
    FormReviewerInfoSection.requestBuilder = function () {
        return new FormReviewerInfoSectionRequestBuilder_1.FormReviewerInfoSectionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormReviewerInfoSection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormReviewerInfoSection`.
     */
    FormReviewerInfoSection.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormReviewerInfoSection);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormReviewerInfoSection.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormReviewerInfoSection.
     */
    FormReviewerInfoSection._entityName = 'FormReviewerInfoSection';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormReviewerInfoSection.
     */
    FormReviewerInfoSection._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormReviewerInfoSection._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormReviewerInfoSection;
}(core_1.Entity));
exports.FormReviewerInfoSection = FormReviewerInfoSection;
var FormCustomElement_1 = require("./FormCustomElement");
(function (FormReviewerInfoSection) {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewerInfoSection.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormReviewerInfoSection, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewerInfoSection.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormReviewerInfoSection, 'Edm.Int64');
    /**
     * Static representation of the [[sectionDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewerInfoSection.SECTION_DESCRIPTION = new core_1.StringField('sectionDescription', FormReviewerInfoSection, 'Edm.String');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewerInfoSection.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormReviewerInfoSection, 'Edm.Int32');
    /**
     * Static representation of the [[sectionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewerInfoSection.SECTION_NAME = new core_1.StringField('sectionName', FormReviewerInfoSection, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[reviewerInfoElements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewerInfoSection.REVIEWER_INFO_ELEMENTS = new core_1.Link('reviewerInfoElements', FormReviewerInfoSection, FormCustomElement_1.FormCustomElement);
    /**
     * All fields of the FormReviewerInfoSection entity.
     */
    FormReviewerInfoSection._allFields = [
        FormReviewerInfoSection.FORM_CONTENT_ID,
        FormReviewerInfoSection.FORM_DATA_ID,
        FormReviewerInfoSection.SECTION_DESCRIPTION,
        FormReviewerInfoSection.SECTION_INDEX,
        FormReviewerInfoSection.SECTION_NAME,
        FormReviewerInfoSection.REVIEWER_INFO_ELEMENTS
    ];
    /**
     * All fields selector.
     */
    FormReviewerInfoSection.ALL_FIELDS = new core_1.AllFields('*', FormReviewerInfoSection);
    /**
     * All key fields of the FormReviewerInfoSection entity.
     */
    FormReviewerInfoSection._keyFields = [FormReviewerInfoSection.FORM_CONTENT_ID, FormReviewerInfoSection.FORM_DATA_ID];
    /**
     * Mapping of all key field names to the respective static field property FormReviewerInfoSection.
     */
    FormReviewerInfoSection._keys = FormReviewerInfoSection._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormReviewerInfoSection = exports.FormReviewerInfoSection || (exports.FormReviewerInfoSection = {}));
exports.FormReviewerInfoSection = FormReviewerInfoSection;
//# sourceMappingURL=FormReviewerInfoSection.js.map