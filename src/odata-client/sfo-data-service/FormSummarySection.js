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
var FormSummarySectionRequestBuilder_1 = require("./FormSummarySectionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormSummarySection" of service "SFOData".
 */
var FormSummarySection = /** @class */ (function (_super) {
    __extends(FormSummarySection, _super);
    function FormSummarySection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormSummarySection`.
     * @returns A builder that constructs instances of entity type `FormSummarySection`.
     */
    FormSummarySection.builder = function () {
        return core_1.Entity.entityBuilder(FormSummarySection);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormSummarySection` entity type.
     * @returns A `FormSummarySection` request builder.
     */
    FormSummarySection.requestBuilder = function () {
        return new FormSummarySectionRequestBuilder_1.FormSummarySectionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormSummarySection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormSummarySection`.
     */
    FormSummarySection.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormSummarySection);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormSummarySection.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormSummarySection.
     */
    FormSummarySection._entityName = 'FormSummarySection';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormSummarySection.
     */
    FormSummarySection._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormSummarySection._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormSummarySection;
}(core_1.Entity));
exports.FormSummarySection = FormSummarySection;
var FormUserRatingComment_1 = require("./FormUserRatingComment");
var FormSectionConfiguration_1 = require("./FormSectionConfiguration");
(function (FormSummarySection) {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSummarySection.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormSummarySection, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSummarySection.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormSummarySection, 'Edm.Int64');
    /**
     * Static representation of the [[sectionDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSummarySection.SECTION_DESCRIPTION = new core_1.StringField('sectionDescription', FormSummarySection, 'Edm.String');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSummarySection.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormSummarySection, 'Edm.Int32');
    /**
     * Static representation of the [[sectionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSummarySection.SECTION_NAME = new core_1.StringField('sectionName', FormSummarySection, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[calculatedFormRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSummarySection.CALCULATED_FORM_RATING = new core_1.OneToOneLink('calculatedFormRating', FormSummarySection, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * Static representation of the one-to-many navigation property [[othersRatingComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSummarySection.OTHERS_RATING_COMMENT = new core_1.Link('othersRatingComment', FormSummarySection, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * Static representation of the one-to-one navigation property [[overallAdjustedRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSummarySection.OVERALL_ADJUSTED_RATING = new core_1.OneToOneLink('overallAdjustedRating', FormSummarySection, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * Static representation of the one-to-one navigation property [[overallFormRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSummarySection.OVERALL_FORM_RATING = new core_1.OneToOneLink('overallFormRating', FormSummarySection, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * Static representation of the one-to-one navigation property [[sectionConfiguration]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSummarySection.SECTION_CONFIGURATION = new core_1.OneToOneLink('sectionConfiguration', FormSummarySection, FormSectionConfiguration_1.FormSectionConfiguration);
    /**
     * Static representation of the one-to-one navigation property [[selfRatingComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSummarySection.SELF_RATING_COMMENT = new core_1.OneToOneLink('selfRatingComment', FormSummarySection, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * All fields of the FormSummarySection entity.
     */
    FormSummarySection._allFields = [
        FormSummarySection.FORM_CONTENT_ID,
        FormSummarySection.FORM_DATA_ID,
        FormSummarySection.SECTION_DESCRIPTION,
        FormSummarySection.SECTION_INDEX,
        FormSummarySection.SECTION_NAME,
        FormSummarySection.CALCULATED_FORM_RATING,
        FormSummarySection.OTHERS_RATING_COMMENT,
        FormSummarySection.OVERALL_ADJUSTED_RATING,
        FormSummarySection.OVERALL_FORM_RATING,
        FormSummarySection.SECTION_CONFIGURATION,
        FormSummarySection.SELF_RATING_COMMENT
    ];
    /**
     * All fields selector.
     */
    FormSummarySection.ALL_FIELDS = new core_1.AllFields('*', FormSummarySection);
    /**
     * All key fields of the FormSummarySection entity.
     */
    FormSummarySection._keyFields = [FormSummarySection.FORM_CONTENT_ID, FormSummarySection.FORM_DATA_ID];
    /**
     * Mapping of all key field names to the respective static field property FormSummarySection.
     */
    FormSummarySection._keys = FormSummarySection._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormSummarySection = exports.FormSummarySection || (exports.FormSummarySection = {}));
exports.FormSummarySection = FormSummarySection;
//# sourceMappingURL=FormSummarySection.js.map