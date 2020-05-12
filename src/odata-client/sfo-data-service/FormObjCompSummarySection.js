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
var FormObjCompSummarySectionRequestBuilder_1 = require("./FormObjCompSummarySectionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormObjCompSummarySection" of service "SFOData".
 */
var FormObjCompSummarySection = /** @class */ (function (_super) {
    __extends(FormObjCompSummarySection, _super);
    function FormObjCompSummarySection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormObjCompSummarySection`.
     * @returns A builder that constructs instances of entity type `FormObjCompSummarySection`.
     */
    FormObjCompSummarySection.builder = function () {
        return core_1.Entity.entityBuilder(FormObjCompSummarySection);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormObjCompSummarySection` entity type.
     * @returns A `FormObjCompSummarySection` request builder.
     */
    FormObjCompSummarySection.requestBuilder = function () {
        return new FormObjCompSummarySectionRequestBuilder_1.FormObjCompSummarySectionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormObjCompSummarySection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormObjCompSummarySection`.
     */
    FormObjCompSummarySection.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormObjCompSummarySection);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormObjCompSummarySection.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormObjCompSummarySection.
     */
    FormObjCompSummarySection._entityName = 'FormObjCompSummarySection';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormObjCompSummarySection.
     */
    FormObjCompSummarySection._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormObjCompSummarySection._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormObjCompSummarySection;
}(core_1.Entity));
exports.FormObjCompSummarySection = FormObjCompSummarySection;
var FormUserRatingComment_1 = require("./FormUserRatingComment");
var FormSectionConfiguration_1 = require("./FormSectionConfiguration");
(function (FormObjCompSummarySection) {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjCompSummarySection.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormObjCompSummarySection, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjCompSummarySection.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormObjCompSummarySection, 'Edm.Int64');
    /**
     * Static representation of the [[sectionCommentsLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjCompSummarySection.SECTION_COMMENTS_LABEL = new core_1.StringField('sectionCommentsLabel', FormObjCompSummarySection, 'Edm.String');
    /**
     * Static representation of the [[sectionDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjCompSummarySection.SECTION_DESCRIPTION = new core_1.StringField('sectionDescription', FormObjCompSummarySection, 'Edm.String');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjCompSummarySection.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormObjCompSummarySection, 'Edm.Int32');
    /**
     * Static representation of the [[sectionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjCompSummarySection.SECTION_NAME = new core_1.StringField('sectionName', FormObjCompSummarySection, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[adjustedCompRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjCompSummarySection.ADJUSTED_COMP_RATING = new core_1.OneToOneLink('adjustedCompRating', FormObjCompSummarySection, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * Static representation of the one-to-one navigation property [[adjustedObjRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjCompSummarySection.ADJUSTED_OBJ_RATING = new core_1.OneToOneLink('adjustedObjRating', FormObjCompSummarySection, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * Static representation of the one-to-one navigation property [[calculatedCompRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjCompSummarySection.CALCULATED_COMP_RATING = new core_1.OneToOneLink('calculatedCompRating', FormObjCompSummarySection, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * Static representation of the one-to-one navigation property [[calculatedObjRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjCompSummarySection.CALCULATED_OBJ_RATING = new core_1.OneToOneLink('calculatedObjRating', FormObjCompSummarySection, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * Static representation of the one-to-one navigation property [[ococRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjCompSummarySection.OCOC_RATING = new core_1.OneToOneLink('ococRating', FormObjCompSummarySection, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * Static representation of the one-to-many navigation property [[othersSectionComments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjCompSummarySection.OTHERS_SECTION_COMMENTS = new core_1.Link('othersSectionComments', FormObjCompSummarySection, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * Static representation of the one-to-one navigation property [[overallCompRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjCompSummarySection.OVERALL_COMP_RATING = new core_1.OneToOneLink('overallCompRating', FormObjCompSummarySection, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * Static representation of the one-to-one navigation property [[overallObjRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjCompSummarySection.OVERALL_OBJ_RATING = new core_1.OneToOneLink('overallObjRating', FormObjCompSummarySection, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * Static representation of the one-to-one navigation property [[sectComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjCompSummarySection.SECT_COMMENT = new core_1.OneToOneLink('sectComment', FormObjCompSummarySection, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * Static representation of the one-to-one navigation property [[sectionConfiguration]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjCompSummarySection.SECTION_CONFIGURATION = new core_1.OneToOneLink('sectionConfiguration', FormObjCompSummarySection, FormSectionConfiguration_1.FormSectionConfiguration);
    /**
     * All fields of the FormObjCompSummarySection entity.
     */
    FormObjCompSummarySection._allFields = [
        FormObjCompSummarySection.FORM_CONTENT_ID,
        FormObjCompSummarySection.FORM_DATA_ID,
        FormObjCompSummarySection.SECTION_COMMENTS_LABEL,
        FormObjCompSummarySection.SECTION_DESCRIPTION,
        FormObjCompSummarySection.SECTION_INDEX,
        FormObjCompSummarySection.SECTION_NAME,
        FormObjCompSummarySection.ADJUSTED_COMP_RATING,
        FormObjCompSummarySection.ADJUSTED_OBJ_RATING,
        FormObjCompSummarySection.CALCULATED_COMP_RATING,
        FormObjCompSummarySection.CALCULATED_OBJ_RATING,
        FormObjCompSummarySection.OCOC_RATING,
        FormObjCompSummarySection.OTHERS_SECTION_COMMENTS,
        FormObjCompSummarySection.OVERALL_COMP_RATING,
        FormObjCompSummarySection.OVERALL_OBJ_RATING,
        FormObjCompSummarySection.SECT_COMMENT,
        FormObjCompSummarySection.SECTION_CONFIGURATION
    ];
    /**
     * All fields selector.
     */
    FormObjCompSummarySection.ALL_FIELDS = new core_1.AllFields('*', FormObjCompSummarySection);
    /**
     * All key fields of the FormObjCompSummarySection entity.
     */
    FormObjCompSummarySection._keyFields = [FormObjCompSummarySection.FORM_CONTENT_ID, FormObjCompSummarySection.FORM_DATA_ID];
    /**
     * Mapping of all key field names to the respective static field property FormObjCompSummarySection.
     */
    FormObjCompSummarySection._keys = FormObjCompSummarySection._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormObjCompSummarySection = exports.FormObjCompSummarySection || (exports.FormObjCompSummarySection = {}));
exports.FormObjCompSummarySection = FormObjCompSummarySection;
//# sourceMappingURL=FormObjCompSummarySection.js.map