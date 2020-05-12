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
var FormReviewInfoSectionRequestBuilder_1 = require("./FormReviewInfoSectionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormReviewInfoSection" of service "SFOData".
 */
var FormReviewInfoSection = /** @class */ (function (_super) {
    __extends(FormReviewInfoSection, _super);
    function FormReviewInfoSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormReviewInfoSection`.
     * @returns A builder that constructs instances of entity type `FormReviewInfoSection`.
     */
    FormReviewInfoSection.builder = function () {
        return core_1.Entity.entityBuilder(FormReviewInfoSection);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormReviewInfoSection` entity type.
     * @returns A `FormReviewInfoSection` request builder.
     */
    FormReviewInfoSection.requestBuilder = function () {
        return new FormReviewInfoSectionRequestBuilder_1.FormReviewInfoSectionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormReviewInfoSection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormReviewInfoSection`.
     */
    FormReviewInfoSection.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormReviewInfoSection);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormReviewInfoSection.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormReviewInfoSection.
     */
    FormReviewInfoSection._entityName = 'FormReviewInfoSection';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormReviewInfoSection.
     */
    FormReviewInfoSection._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormReviewInfoSection._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormReviewInfoSection;
}(core_1.Entity));
exports.FormReviewInfoSection = FormReviewInfoSection;
(function (FormReviewInfoSection) {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewInfoSection.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormReviewInfoSection, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewInfoSection.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormReviewInfoSection, 'Edm.Int64');
    /**
     * Static representation of the [[formDateFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewInfoSection.FORM_DATE_FORMAT = new core_1.StringField('formDateFormat', FormReviewInfoSection, 'Edm.String');
    /**
     * Static representation of the [[formOriginator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewInfoSection.FORM_ORIGINATOR = new core_1.StringField('formOriginator', FormReviewInfoSection, 'Edm.String');
    /**
     * Static representation of the [[isDueDateValidationDisabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewInfoSection.IS_DUE_DATE_VALIDATION_DISABLED = new core_1.BooleanField('isDueDateValidationDisabled', FormReviewInfoSection, 'Edm.Boolean');
    /**
     * Static representation of the [[isReviewDatesEditable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewInfoSection.IS_REVIEW_DATES_EDITABLE = new core_1.BooleanField('isReviewDatesEditable', FormReviewInfoSection, 'Edm.Boolean');
    /**
     * Static representation of the [[reviewDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewInfoSection.REVIEW_DUE_DATE = new core_1.StringField('reviewDueDate', FormReviewInfoSection, 'Edm.String');
    /**
     * Static representation of the [[reviewEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewInfoSection.REVIEW_END_DATE = new core_1.StringField('reviewEndDate', FormReviewInfoSection, 'Edm.String');
    /**
     * Static representation of the [[reviewStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewInfoSection.REVIEW_START_DATE = new core_1.StringField('reviewStartDate', FormReviewInfoSection, 'Edm.String');
    /**
     * Static representation of the [[sectionDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewInfoSection.SECTION_DESCRIPTION = new core_1.StringField('sectionDescription', FormReviewInfoSection, 'Edm.String');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewInfoSection.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormReviewInfoSection, 'Edm.Int32');
    /**
     * Static representation of the [[sectionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewInfoSection.SECTION_NAME = new core_1.StringField('sectionName', FormReviewInfoSection, 'Edm.String');
    /**
     * All fields of the FormReviewInfoSection entity.
     */
    FormReviewInfoSection._allFields = [
        FormReviewInfoSection.FORM_CONTENT_ID,
        FormReviewInfoSection.FORM_DATA_ID,
        FormReviewInfoSection.FORM_DATE_FORMAT,
        FormReviewInfoSection.FORM_ORIGINATOR,
        FormReviewInfoSection.IS_DUE_DATE_VALIDATION_DISABLED,
        FormReviewInfoSection.IS_REVIEW_DATES_EDITABLE,
        FormReviewInfoSection.REVIEW_DUE_DATE,
        FormReviewInfoSection.REVIEW_END_DATE,
        FormReviewInfoSection.REVIEW_START_DATE,
        FormReviewInfoSection.SECTION_DESCRIPTION,
        FormReviewInfoSection.SECTION_INDEX,
        FormReviewInfoSection.SECTION_NAME
    ];
    /**
     * All fields selector.
     */
    FormReviewInfoSection.ALL_FIELDS = new core_1.AllFields('*', FormReviewInfoSection);
    /**
     * All key fields of the FormReviewInfoSection entity.
     */
    FormReviewInfoSection._keyFields = [FormReviewInfoSection.FORM_CONTENT_ID, FormReviewInfoSection.FORM_DATA_ID];
    /**
     * Mapping of all key field names to the respective static field property FormReviewInfoSection.
     */
    FormReviewInfoSection._keys = FormReviewInfoSection._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormReviewInfoSection = exports.FormReviewInfoSection || (exports.FormReviewInfoSection = {}));
exports.FormReviewInfoSection = FormReviewInfoSection;
//# sourceMappingURL=FormReviewInfoSection.js.map