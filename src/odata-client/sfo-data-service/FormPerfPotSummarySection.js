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
var FormPerfPotSummarySectionRequestBuilder_1 = require("./FormPerfPotSummarySectionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormPerfPotSummarySection" of service "SFOData".
 */
var FormPerfPotSummarySection = /** @class */ (function (_super) {
    __extends(FormPerfPotSummarySection, _super);
    function FormPerfPotSummarySection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormPerfPotSummarySection`.
     * @returns A builder that constructs instances of entity type `FormPerfPotSummarySection`.
     */
    FormPerfPotSummarySection.builder = function () {
        return core_1.Entity.entityBuilder(FormPerfPotSummarySection);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormPerfPotSummarySection` entity type.
     * @returns A `FormPerfPotSummarySection` request builder.
     */
    FormPerfPotSummarySection.requestBuilder = function () {
        return new FormPerfPotSummarySectionRequestBuilder_1.FormPerfPotSummarySectionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormPerfPotSummarySection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormPerfPotSummarySection`.
     */
    FormPerfPotSummarySection.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormPerfPotSummarySection);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormPerfPotSummarySection.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormPerfPotSummarySection.
     */
    FormPerfPotSummarySection._entityName = 'FormPerfPotSummarySection';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormPerfPotSummarySection.
     */
    FormPerfPotSummarySection._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormPerfPotSummarySection._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormPerfPotSummarySection;
}(core_1.Entity));
exports.FormPerfPotSummarySection = FormPerfPotSummarySection;
var FormUserRatingComment_1 = require("./FormUserRatingComment");
var FormSectionConfiguration_1 = require("./FormSectionConfiguration");
(function (FormPerfPotSummarySection) {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPerfPotSummarySection.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormPerfPotSummarySection, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPerfPotSummarySection.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormPerfPotSummarySection, 'Edm.Int64');
    /**
     * Static representation of the [[sectionDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPerfPotSummarySection.SECTION_DESCRIPTION = new core_1.StringField('sectionDescription', FormPerfPotSummarySection, 'Edm.String');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPerfPotSummarySection.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormPerfPotSummarySection, 'Edm.Int32');
    /**
     * Static representation of the [[sectionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPerfPotSummarySection.SECTION_NAME = new core_1.StringField('sectionName', FormPerfPotSummarySection, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[othersSectionComments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPerfPotSummarySection.OTHERS_SECTION_COMMENTS = new core_1.Link('othersSectionComments', FormPerfPotSummarySection, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * Static representation of the one-to-one navigation property [[performanceRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPerfPotSummarySection.PERFORMANCE_RATING = new core_1.OneToOneLink('performanceRating', FormPerfPotSummarySection, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * Static representation of the one-to-one navigation property [[potentialRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPerfPotSummarySection.POTENTIAL_RATING = new core_1.OneToOneLink('potentialRating', FormPerfPotSummarySection, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * Static representation of the one-to-one navigation property [[sectionComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPerfPotSummarySection.SECTION_COMMENT = new core_1.OneToOneLink('sectionComment', FormPerfPotSummarySection, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * Static representation of the one-to-one navigation property [[sectionConfiguration]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPerfPotSummarySection.SECTION_CONFIGURATION = new core_1.OneToOneLink('sectionConfiguration', FormPerfPotSummarySection, FormSectionConfiguration_1.FormSectionConfiguration);
    /**
     * All fields of the FormPerfPotSummarySection entity.
     */
    FormPerfPotSummarySection._allFields = [
        FormPerfPotSummarySection.FORM_CONTENT_ID,
        FormPerfPotSummarySection.FORM_DATA_ID,
        FormPerfPotSummarySection.SECTION_DESCRIPTION,
        FormPerfPotSummarySection.SECTION_INDEX,
        FormPerfPotSummarySection.SECTION_NAME,
        FormPerfPotSummarySection.OTHERS_SECTION_COMMENTS,
        FormPerfPotSummarySection.PERFORMANCE_RATING,
        FormPerfPotSummarySection.POTENTIAL_RATING,
        FormPerfPotSummarySection.SECTION_COMMENT,
        FormPerfPotSummarySection.SECTION_CONFIGURATION
    ];
    /**
     * All fields selector.
     */
    FormPerfPotSummarySection.ALL_FIELDS = new core_1.AllFields('*', FormPerfPotSummarySection);
    /**
     * All key fields of the FormPerfPotSummarySection entity.
     */
    FormPerfPotSummarySection._keyFields = [FormPerfPotSummarySection.FORM_CONTENT_ID, FormPerfPotSummarySection.FORM_DATA_ID];
    /**
     * Mapping of all key field names to the respective static field property FormPerfPotSummarySection.
     */
    FormPerfPotSummarySection._keys = FormPerfPotSummarySection._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormPerfPotSummarySection = exports.FormPerfPotSummarySection || (exports.FormPerfPotSummarySection = {}));
exports.FormPerfPotSummarySection = FormPerfPotSummarySection;
//# sourceMappingURL=FormPerfPotSummarySection.js.map