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
var Form360ReviewContentDetailRequestBuilder_1 = require("./Form360ReviewContentDetailRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Form360ReviewContentDetail" of service "SFOData".
 */
var Form360ReviewContentDetail = /** @class */ (function (_super) {
    __extends(Form360ReviewContentDetail, _super);
    function Form360ReviewContentDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Form360ReviewContentDetail`.
     * @returns A builder that constructs instances of entity type `Form360ReviewContentDetail`.
     */
    Form360ReviewContentDetail.builder = function () {
        return core_1.Entity.entityBuilder(Form360ReviewContentDetail);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Form360ReviewContentDetail` entity type.
     * @returns A `Form360ReviewContentDetail` request builder.
     */
    Form360ReviewContentDetail.requestBuilder = function () {
        return new Form360ReviewContentDetailRequestBuilder_1.Form360ReviewContentDetailRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Form360ReviewContentDetail`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Form360ReviewContentDetail`.
     */
    Form360ReviewContentDetail.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Form360ReviewContentDetail);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Form360ReviewContentDetail.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Form360ReviewContentDetail.
     */
    Form360ReviewContentDetail._entityName = 'Form360ReviewContentDetail';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Form360ReviewContentDetail.
     */
    Form360ReviewContentDetail._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Form360ReviewContentDetail._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Form360ReviewContentDetail;
}(core_1.Entity));
exports.Form360ReviewContentDetail = Form360ReviewContentDetail;
var FormCompetencySection_1 = require("./FormCompetencySection");
var FormCustomSection_1 = require("./FormCustomSection");
var Form360RaterSection_1 = require("./Form360RaterSection");
var FormIntroductionSection_1 = require("./FormIntroductionSection");
var FormJobDescSection_1 = require("./FormJobDescSection");
var FormObjectiveSection_1 = require("./FormObjectiveSection");
var User_1 = require("./User");
var Form360ParticipantSection_1 = require("./Form360ParticipantSection");
var FormRaterListSection_1 = require("./FormRaterListSection");
var FormReviewInfoSection_1 = require("./FormReviewInfoSection");
var FormReviewerInfoSection_1 = require("./FormReviewerInfoSection");
var FormSignatureSection_1 = require("./FormSignatureSection");
var FormSummarySection_1 = require("./FormSummarySection");
var Form360SummaryViewSection_1 = require("./Form360SummaryViewSection");
var FormUserInformationSection_1 = require("./FormUserInformationSection");
(function (Form360ReviewContentDetail) {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ReviewContentDetail.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', Form360ReviewContentDetail, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ReviewContentDetail.FORM_DATA_ID = new core_1.BigNumberField('formDataId', Form360ReviewContentDetail, 'Edm.Int64');
    /**
     * Static representation of the [[formLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ReviewContentDetail.FORM_LOCALE = new core_1.StringField('formLocale', Form360ReviewContentDetail, 'Edm.String');
    /**
     * Static representation of the [[formMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ReviewContentDetail.FORM_MODE = new core_1.StringField('formMode', Form360ReviewContentDetail, 'Edm.String');
    /**
     * Static representation of the [[formTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ReviewContentDetail.FORM_TITLE = new core_1.StringField('formTitle', Form360ReviewContentDetail, 'Edm.String');
    /**
     * Static representation of the [[originatorUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ReviewContentDetail.ORIGINATOR_USER_ID = new core_1.StringField('originatorUserId', Form360ReviewContentDetail, 'Edm.String');
    /**
     * Static representation of the [[originatorUserName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ReviewContentDetail.ORIGINATOR_USER_NAME = new core_1.StringField('originatorUserName', Form360ReviewContentDetail, 'Edm.String');
    /**
     * Static representation of the [[sectionsInSummaryView]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ReviewContentDetail.SECTIONS_IN_SUMMARY_VIEW = new core_1.StringField('sectionsInSummaryView', Form360ReviewContentDetail, 'Edm.String');
    /**
     * Static representation of the [[subjectFirstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ReviewContentDetail.SUBJECT_FIRST_NAME = new core_1.StringField('subjectFirstName', Form360ReviewContentDetail, 'Edm.String');
    /**
     * Static representation of the [[subjectUserGender]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ReviewContentDetail.SUBJECT_USER_GENDER = new core_1.StringField('subjectUserGender', Form360ReviewContentDetail, 'Edm.String');
    /**
     * Static representation of the [[subjectUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ReviewContentDetail.SUBJECT_USER_ID = new core_1.StringField('subjectUserId', Form360ReviewContentDetail, 'Edm.String');
    /**
     * Static representation of the [[subjectUserName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ReviewContentDetail.SUBJECT_USER_NAME = new core_1.StringField('subjectUserName', Form360ReviewContentDetail, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[competencySections]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ReviewContentDetail.COMPETENCY_SECTIONS = new core_1.Link('competencySections', Form360ReviewContentDetail, FormCompetencySection_1.FormCompetencySection);
    /**
     * Static representation of the one-to-many navigation property [[customSections]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ReviewContentDetail.CUSTOM_SECTIONS = new core_1.Link('customSections', Form360ReviewContentDetail, FormCustomSection_1.FormCustomSection);
    /**
     * Static representation of the one-to-one navigation property [[form360RaterSection]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ReviewContentDetail.FORM_360_RATER_SECTION = new core_1.OneToOneLink('form360RaterSection', Form360ReviewContentDetail, Form360RaterSection_1.Form360RaterSection);
    /**
     * Static representation of the one-to-one navigation property [[introductionSection]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ReviewContentDetail.INTRODUCTION_SECTION = new core_1.OneToOneLink('introductionSection', Form360ReviewContentDetail, FormIntroductionSection_1.FormIntroductionSection);
    /**
     * Static representation of the one-to-one navigation property [[jobDescSection]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ReviewContentDetail.JOB_DESC_SECTION = new core_1.OneToOneLink('jobDescSection', Form360ReviewContentDetail, FormJobDescSection_1.FormJobDescSection);
    /**
     * Static representation of the one-to-many navigation property [[objectiveSections]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ReviewContentDetail.OBJECTIVE_SECTIONS = new core_1.Link('objectiveSections', Form360ReviewContentDetail, FormObjectiveSection_1.FormObjectiveSection);
    /**
     * Static representation of the one-to-one navigation property [[originatorUser]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ReviewContentDetail.ORIGINATOR_USER = new core_1.OneToOneLink('originatorUser', Form360ReviewContentDetail, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[participantSection]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ReviewContentDetail.PARTICIPANT_SECTION = new core_1.OneToOneLink('participantSection', Form360ReviewContentDetail, Form360ParticipantSection_1.Form360ParticipantSection);
    /**
     * Static representation of the one-to-many navigation property [[raterListSection]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ReviewContentDetail.RATER_LIST_SECTION = new core_1.Link('raterListSection', Form360ReviewContentDetail, FormRaterListSection_1.FormRaterListSection);
    /**
     * Static representation of the one-to-one navigation property [[reviewInfoSection]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ReviewContentDetail.REVIEW_INFO_SECTION = new core_1.OneToOneLink('reviewInfoSection', Form360ReviewContentDetail, FormReviewInfoSection_1.FormReviewInfoSection);
    /**
     * Static representation of the one-to-one navigation property [[reviewerInfoSection]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ReviewContentDetail.REVIEWER_INFO_SECTION = new core_1.OneToOneLink('reviewerInfoSection', Form360ReviewContentDetail, FormReviewerInfoSection_1.FormReviewerInfoSection);
    /**
     * Static representation of the one-to-one navigation property [[signatureSection]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ReviewContentDetail.SIGNATURE_SECTION = new core_1.OneToOneLink('signatureSection', Form360ReviewContentDetail, FormSignatureSection_1.FormSignatureSection);
    /**
     * Static representation of the one-to-one navigation property [[subjectUser]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ReviewContentDetail.SUBJECT_USER = new core_1.OneToOneLink('subjectUser', Form360ReviewContentDetail, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[summarySection]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ReviewContentDetail.SUMMARY_SECTION = new core_1.OneToOneLink('summarySection', Form360ReviewContentDetail, FormSummarySection_1.FormSummarySection);
    /**
     * Static representation of the one-to-one navigation property [[summaryViewSection]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ReviewContentDetail.SUMMARY_VIEW_SECTION = new core_1.OneToOneLink('summaryViewSection', Form360ReviewContentDetail, Form360SummaryViewSection_1.Form360SummaryViewSection);
    /**
     * Static representation of the one-to-one navigation property [[userInformationSection]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ReviewContentDetail.USER_INFORMATION_SECTION = new core_1.OneToOneLink('userInformationSection', Form360ReviewContentDetail, FormUserInformationSection_1.FormUserInformationSection);
    /**
     * All fields of the Form360ReviewContentDetail entity.
     */
    Form360ReviewContentDetail._allFields = [
        Form360ReviewContentDetail.FORM_CONTENT_ID,
        Form360ReviewContentDetail.FORM_DATA_ID,
        Form360ReviewContentDetail.FORM_LOCALE,
        Form360ReviewContentDetail.FORM_MODE,
        Form360ReviewContentDetail.FORM_TITLE,
        Form360ReviewContentDetail.ORIGINATOR_USER_ID,
        Form360ReviewContentDetail.ORIGINATOR_USER_NAME,
        Form360ReviewContentDetail.SECTIONS_IN_SUMMARY_VIEW,
        Form360ReviewContentDetail.SUBJECT_FIRST_NAME,
        Form360ReviewContentDetail.SUBJECT_USER_GENDER,
        Form360ReviewContentDetail.SUBJECT_USER_ID,
        Form360ReviewContentDetail.SUBJECT_USER_NAME,
        Form360ReviewContentDetail.COMPETENCY_SECTIONS,
        Form360ReviewContentDetail.CUSTOM_SECTIONS,
        Form360ReviewContentDetail.FORM_360_RATER_SECTION,
        Form360ReviewContentDetail.INTRODUCTION_SECTION,
        Form360ReviewContentDetail.JOB_DESC_SECTION,
        Form360ReviewContentDetail.OBJECTIVE_SECTIONS,
        Form360ReviewContentDetail.ORIGINATOR_USER,
        Form360ReviewContentDetail.PARTICIPANT_SECTION,
        Form360ReviewContentDetail.RATER_LIST_SECTION,
        Form360ReviewContentDetail.REVIEW_INFO_SECTION,
        Form360ReviewContentDetail.REVIEWER_INFO_SECTION,
        Form360ReviewContentDetail.SIGNATURE_SECTION,
        Form360ReviewContentDetail.SUBJECT_USER,
        Form360ReviewContentDetail.SUMMARY_SECTION,
        Form360ReviewContentDetail.SUMMARY_VIEW_SECTION,
        Form360ReviewContentDetail.USER_INFORMATION_SECTION
    ];
    /**
     * All fields selector.
     */
    Form360ReviewContentDetail.ALL_FIELDS = new core_1.AllFields('*', Form360ReviewContentDetail);
    /**
     * All key fields of the Form360ReviewContentDetail entity.
     */
    Form360ReviewContentDetail._keyFields = [Form360ReviewContentDetail.FORM_CONTENT_ID, Form360ReviewContentDetail.FORM_DATA_ID];
    /**
     * Mapping of all key field names to the respective static field property Form360ReviewContentDetail.
     */
    Form360ReviewContentDetail._keys = Form360ReviewContentDetail._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Form360ReviewContentDetail = exports.Form360ReviewContentDetail || (exports.Form360ReviewContentDetail = {}));
exports.Form360ReviewContentDetail = Form360ReviewContentDetail;
//# sourceMappingURL=Form360ReviewContentDetail.js.map