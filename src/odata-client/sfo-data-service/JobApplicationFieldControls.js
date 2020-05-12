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
var JobApplicationFieldControlsRequestBuilder_1 = require("./JobApplicationFieldControlsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobApplicationFieldControls" of service "SFOData".
 */
var JobApplicationFieldControls = /** @class */ (function (_super) {
    __extends(JobApplicationFieldControls, _super);
    function JobApplicationFieldControls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobApplicationFieldControls`.
     * @returns A builder that constructs instances of entity type `JobApplicationFieldControls`.
     */
    JobApplicationFieldControls.builder = function () {
        return core_1.Entity.entityBuilder(JobApplicationFieldControls);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationFieldControls` entity type.
     * @returns A `JobApplicationFieldControls` request builder.
     */
    JobApplicationFieldControls.requestBuilder = function () {
        return new JobApplicationFieldControlsRequestBuilder_1.JobApplicationFieldControlsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationFieldControls`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationFieldControls`.
     */
    JobApplicationFieldControls.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobApplicationFieldControls);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobApplicationFieldControls.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobApplicationFieldControls.
     */
    JobApplicationFieldControls._entityName = 'JobApplicationFieldControls';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationFieldControls.
     */
    JobApplicationFieldControls._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobApplicationFieldControls._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobApplicationFieldControls;
}(core_1.Entity));
exports.JobApplicationFieldControls = JobApplicationFieldControls;
(function (JobApplicationFieldControls) {
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.ADDRESS = new core_1.NumberField('address', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[agencyInfo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.AGENCY_INFO = new core_1.NumberField('agencyInfo', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[anonymizedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.ANONYMIZED_DATE = new core_1.NumberField('anonymizedDate', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[anonymizedFlag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.ANONYMIZED_FLAG = new core_1.NumberField('anonymizedFlag', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[appLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.APP_LOCALE = new core_1.NumberField('appLocale', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[appStatusSetItemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.APP_STATUS_SET_ITEM_ID = new core_1.NumberField('appStatusSetItemId', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[applicationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.APPLICATION_DATE = new core_1.NumberField('applicationDate', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.APPLICATION_ID = new core_1.NumberField('applicationId', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[applicationTemplateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.APPLICATION_TEMPLATE_ID = new core_1.NumberField('applicationTemplateId', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[averageRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.AVERAGE_RATING = new core_1.NumberField('averageRating', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[bkgrndChkAttachment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.BKGRND_CHK_ATTACHMENT = new core_1.NumberField('bkgrndChkAttachment', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[bkgrndChkStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.BKGRND_CHK_STATUS = new core_1.NumberField('bkgrndChkStatus', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[businessPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.BUSINESS_PHONE = new core_1.NumberField('businessPhone', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[candConversionProcessed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CAND_CONVERSION_PROCESSED = new core_1.NumberField('candConversionProcessed', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[candTypeWhenHired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CAND_TYPE_WHEN_HIRED = new core_1.NumberField('candTypeWhenHired', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[candidate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CANDIDATE = new core_1.NumberField('candidate', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CANDIDATE_ID = new core_1.NumberField('candidateId', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[cellPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CELL_PHONE = new core_1.NumberField('cellPhone', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CITY = new core_1.NumberField('city', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[contactEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CONTACT_EMAIL = new core_1.NumberField('contactEmail', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.COUNTRY = new core_1.NumberField('country', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[countryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.COUNTRY_CODE = new core_1.NumberField('countryCode', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[countryPicklist]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.COUNTRY_PICKLIST = new core_1.NumberField('countryPicklist', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[coverLetter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.COVER_LETTER = new core_1.NumberField('coverLetter', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[currentCompany]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CURRENT_COMPANY = new core_1.NumberField('currentCompany', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[currentTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CURRENT_TITLE = new core_1.NumberField('currentTitle', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[custOnbPrefLang]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUST_ONB_PREF_LANG = new core_1.NumberField('custONBPrefLang', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[custSalaryDesired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUST_SALARY_DESIRED = new core_1.NumberField('custSalaryDesired', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[custTravel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUST_TRAVEL = new core_1.NumberField('custTravel', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customAdditionalAttach]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_ADDITIONAL_ATTACH = new core_1.NumberField('customAdditionalAttach', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customAdjustments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_ADJUSTMENTS = new core_1.NumberField('customAdjustments', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customAdjustmentsOther]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_ADJUSTMENTS_OTHER = new core_1.NumberField('customAdjustmentsOther', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customAgeGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_AGE_GROUP = new core_1.NumberField('customAgeGroup', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customBasePayFreq]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_BASE_PAY_FREQ = new core_1.NumberField('customBasePayFreq', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customBaseSal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_BASE_SAL = new core_1.NumberField('customBaseSal', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customCarAllowAmt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_CAR_ALLOW_AMT = new core_1.NumberField('customCarAllowAmt', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customCarAllowRequired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_CAR_ALLOW_REQUIRED = new core_1.NumberField('customCarAllowRequired', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customCarAllowanceMonths]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_CAR_ALLOWANCE_MONTHS = new core_1.NumberField('customCarAllowanceMonths', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customEeoPoster]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_EEO_POSTER = new core_1.NumberField('customEEOPoster', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customEarlyTalent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_EARLY_TALENT = new core_1.NumberField('customEarlyTalent', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customEligibleOther]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_ELIGIBLE_OTHER = new core_1.NumberField('customEligibleOther', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customEligibleToWork]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_ELIGIBLE_TO_WORK = new core_1.NumberField('customEligibleToWork', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customFinalSignOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_FINAL_SIGN_ON = new core_1.NumberField('customFinalSignOn', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customInternalPolicy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_INTERNAL_POLICY = new core_1.NumberField('customInternalPolicy', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customInterviewComments1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_INTERVIEW_COMMENTS_1 = new core_1.NumberField('customInterviewComments1', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customInterviewDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_INTERVIEW_DATE_TIME = new core_1.NumberField('customInterviewDateTime', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customInterviewList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_INTERVIEW_LIST = new core_1.NumberField('customInterviewList', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customInterviewRound]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_INTERVIEW_ROUND = new core_1.NumberField('customInterviewRound', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customInterviewType1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_INTERVIEW_TYPE_1 = new core_1.NumberField('customInterviewType1', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customLti]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_LTI = new core_1.NumberField('customLTI', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customLegalAuth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_LEGAL_AUTH = new core_1.NumberField('customLegalAuth', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customNationality]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_NATIONALITY = new core_1.NumberField('customNationality', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customNoticeDuringProbPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_NOTICE_DURING_PROB_PERIOD = new core_1.NumberField('customNoticeDuringProbPeriod', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customNoticePeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_NOTICE_PERIOD = new core_1.NumberField('customNoticePeriod', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customOtherAllowanceDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_OTHER_ALLOWANCE_DETAILS = new core_1.NumberField('customOtherAllowanceDetails', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customOtherCompDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_OTHER_COMP_DETAILS = new core_1.NumberField('customOtherCompDetails', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customProbPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_PROB_PERIOD = new core_1.NumberField('customProbPeriod', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customRelocAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_RELOC_AMOUNT = new core_1.NumberField('customRelocAmount', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customSexualOrientation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_SEXUAL_ORIENTATION = new core_1.NumberField('customSexualOrientation', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customSourcePrimary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_SOURCE_PRIMARY = new core_1.NumberField('customSourcePrimary', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customSourceSecondary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_SOURCE_SECONDARY = new core_1.NumberField('customSourceSecondary', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customTargetBonusAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_TARGET_BONUS_AMOUNT = new core_1.NumberField('customTargetBonusAmount', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customTypeHire]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_TYPE_HIRE = new core_1.NumberField('customTypeHire', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customUkEthnicity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_UK_ETHNICITY = new core_1.NumberField('customUKEthnicity', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customVirtualHire]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_VIRTUAL_HIRE = new core_1.NumberField('customVirtualHire', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customVisa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_VISA = new core_1.NumberField('customVisa', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customVisaYes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.CUSTOM_VISA_YES = new core_1.NumberField('customVisaYes', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[dataSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.DATA_SOURCE = new core_1.NumberField('dataSource', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[disabilityStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.DISABILITY_STATUS = new core_1.NumberField('disabilityStatus', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[disclaimerAcknowledge]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.DISCLAIMER_ACKNOWLEDGE = new core_1.NumberField('disclaimerAcknowledge', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[duplicateProfile]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.DUPLICATE_PROFILE = new core_1.NumberField('duplicateProfile', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[education]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.EDUCATION = new core_1.NumberField('education', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[endDateContract]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.END_DATE_CONTRACT = new core_1.NumberField('endDateContract', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[exportedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.EXPORTED_ON = new core_1.NumberField('exportedOn', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.FIRST_NAME = new core_1.NumberField('firstName', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[gender]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.GENDER = new core_1.NumberField('gender', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[hiredOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.HIRED_ON = new core_1.NumberField('hiredOn', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[homePhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.HOME_PHONE = new core_1.NumberField('homePhone', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[insideWorkExperience]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.INSIDE_WORK_EXPERIENCE = new core_1.NumberField('insideWorkExperience', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[instrAccommodations]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.INSTR_ACCOMMODATIONS = new core_1.NumberField('instrAccommodations', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[instrApplcation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.INSTR_APPLCATION = new core_1.NumberField('instrApplcation', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[instrContractInfo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.INSTR_CONTRACT_INFO = new core_1.NumberField('instrContractInfo', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[instrDisability1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.INSTR_DISABILITY_1 = new core_1.NumberField('instrDisability1', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[instrDisability2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.INSTR_DISABILITY_2 = new core_1.NumberField('instrDisability2', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[instrDisclaimer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.INSTR_DISCLAIMER = new core_1.NumberField('instrDisclaimer', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[instrEeo1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.INSTR_EEO_1 = new core_1.NumberField('instrEEO1', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[instrEeo2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.INSTR_EEO_2 = new core_1.NumberField('instrEEO2', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[instrEeoFooter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.INSTR_EEO_FOOTER = new core_1.NumberField('instrEEOFooter', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[instrEligWork]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.INSTR_ELIG_WORK = new core_1.NumberField('instrEligWork', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[instrEmpInfo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.INSTR_EMP_INFO = new core_1.NumberField('instrEmpInfo', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[instrGlobalEeo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.INSTR_GLOBAL_EEO = new core_1.NumberField('instrGlobalEEO', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[instrInternalPolicy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.INSTR_INTERNAL_POLICY = new core_1.NumberField('instrInternalPolicy', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[instrInterview]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.INSTR_INTERVIEW = new core_1.NumberField('instrInterview', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[instrRewardInfo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.INSTR_REWARD_INFO = new core_1.NumberField('instrRewardInfo', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[instrUkDisability]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.INSTR_UK_DISABILITY = new core_1.NumberField('instrUKDisability', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[instrVets1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.INSTR_VETS_1 = new core_1.NumberField('instrVets1', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[instrVets2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.INSTR_VETS_2 = new core_1.NumberField('instrVets2', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobAppGuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.JOB_APP_GUID = new core_1.NumberField('jobAppGuid', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobAppPermissionsNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.JOB_APP_PERMISSIONS_NAV = new core_1.NumberField('jobAppPermissionsNav', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobAppStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.JOB_APP_STATUS = new core_1.NumberField('jobAppStatus', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobApplicationAssessmentOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.JOB_APPLICATION_ASSESSMENT_ORDER = new core_1.NumberField('jobApplicationAssessmentOrder', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobApplicationAudit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.JOB_APPLICATION_AUDIT = new core_1.NumberField('jobApplicationAudit', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobApplicationComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.JOB_APPLICATION_COMMENTS = new core_1.NumberField('jobApplicationComments', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobApplicationInterview]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.JOB_APPLICATION_INTERVIEW = new core_1.NumberField('jobApplicationInterview', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobApplicationOnboardingData]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.JOB_APPLICATION_ONBOARDING_DATA = new core_1.NumberField('jobApplicationOnboardingData', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobApplicationQuestionResponse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.JOB_APPLICATION_QUESTION_RESPONSE = new core_1.NumberField('jobApplicationQuestionResponse', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobApplicationStatusAuditTrail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.JOB_APPLICATION_STATUS_AUDIT_TRAIL = new core_1.NumberField('jobApplicationStatusAuditTrail', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobOffer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.JOB_OFFER = new core_1.NumberField('jobOffer', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.JOB_REQ_ID = new core_1.NumberField('jobReqId', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobRequisition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.JOB_REQUISITION = new core_1.NumberField('jobRequisition', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.JOB_TITLE = new core_1.NumberField('jobTitle', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[languages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.LANGUAGES = new core_1.NumberField('languages', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.LAST_MODIFIED_BY = new core_1.NumberField('lastModifiedBy', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[lastModifiedByProxy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.LAST_MODIFIED_BY_PROXY = new core_1.NumberField('lastModifiedByProxy', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.LAST_MODIFIED_DATE_TIME = new core_1.NumberField('lastModifiedDateTime', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.LAST_NAME = new core_1.NumberField('lastName', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[middleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.MIDDLE_NAME = new core_1.NumberField('middleName', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[mobility]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.MOBILITY = new core_1.NumberField('mobility', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[nonApplicantStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.NON_APPLICANT_STATUS = new core_1.NumberField('nonApplicantStatus', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[offerLetter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.OFFER_LETTER = new core_1.NumberField('offerLetter', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[outsideWorkExperience]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.OUTSIDE_WORK_EXPERIENCE = new core_1.NumberField('outsideWorkExperience', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[owner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.OWNER = new core_1.NumberField('owner', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[ownershpDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.OWNERSHP_DATE = new core_1.NumberField('ownershpDate', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[profileUpdated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.PROFILE_UPDATED = new core_1.NumberField('profileUpdated', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[race]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.RACE = new core_1.NumberField('race', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[rating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.RATING = new core_1.NumberField('rating', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[reference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.REFERENCE = new core_1.NumberField('reference', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[referenceComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.REFERENCE_COMMENTS = new core_1.NumberField('referenceComments', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[referredBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.REFERRED_BY = new core_1.NumberField('referredBy', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[referredByNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.REFERRED_BY_NAV = new core_1.NumberField('referredByNav', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[resume]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.RESUME = new core_1.NumberField('resume', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[resumeUploadDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.RESUME_UPLOAD_DATE = new core_1.NumberField('resumeUploadDate', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[sectDisclaimer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.SECT_DISCLAIMER = new core_1.NumberField('sectDisclaimer', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[snapShotDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.SNAP_SHOT_DATE = new core_1.NumberField('snapShotDate', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[source]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.SOURCE = new core_1.NumberField('source', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[sourceLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.SOURCE_LABEL = new core_1.NumberField('sourceLabel', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.START_DATE = new core_1.NumberField('startDate', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.STATE = new core_1.NumberField('state', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.STATUS = new core_1.NumberField('status', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[statusComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.STATUS_COMMENTS = new core_1.NumberField('statusComments', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[statusId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.STATUS_ID = new core_1.NumberField('statusId', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[timeToHire]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.TIME_TO_HIRE = new core_1.NumberField('timeToHire', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[userNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.USER_NAV = new core_1.NumberField('userNav', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[usersSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.USERS_SYS_ID = new core_1.NumberField('usersSysId', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[veteranStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.VETERAN_STATUS = new core_1.NumberField('veteranStatus', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[zip]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationFieldControls.ZIP = new core_1.NumberField('zip', JobApplicationFieldControls, 'Edm.Byte');
    /**
     * All fields of the JobApplicationFieldControls entity.
     */
    JobApplicationFieldControls._allFields = [
        JobApplicationFieldControls.ADDRESS,
        JobApplicationFieldControls.AGENCY_INFO,
        JobApplicationFieldControls.ANONYMIZED_DATE,
        JobApplicationFieldControls.ANONYMIZED_FLAG,
        JobApplicationFieldControls.APP_LOCALE,
        JobApplicationFieldControls.APP_STATUS_SET_ITEM_ID,
        JobApplicationFieldControls.APPLICATION_DATE,
        JobApplicationFieldControls.APPLICATION_ID,
        JobApplicationFieldControls.APPLICATION_TEMPLATE_ID,
        JobApplicationFieldControls.AVERAGE_RATING,
        JobApplicationFieldControls.BKGRND_CHK_ATTACHMENT,
        JobApplicationFieldControls.BKGRND_CHK_STATUS,
        JobApplicationFieldControls.BUSINESS_PHONE,
        JobApplicationFieldControls.CAND_CONVERSION_PROCESSED,
        JobApplicationFieldControls.CAND_TYPE_WHEN_HIRED,
        JobApplicationFieldControls.CANDIDATE,
        JobApplicationFieldControls.CANDIDATE_ID,
        JobApplicationFieldControls.CELL_PHONE,
        JobApplicationFieldControls.CITY,
        JobApplicationFieldControls.CONTACT_EMAIL,
        JobApplicationFieldControls.COUNTRY,
        JobApplicationFieldControls.COUNTRY_CODE,
        JobApplicationFieldControls.COUNTRY_PICKLIST,
        JobApplicationFieldControls.COVER_LETTER,
        JobApplicationFieldControls.CURRENT_COMPANY,
        JobApplicationFieldControls.CURRENT_TITLE,
        JobApplicationFieldControls.CUST_ONB_PREF_LANG,
        JobApplicationFieldControls.CUST_SALARY_DESIRED,
        JobApplicationFieldControls.CUST_TRAVEL,
        JobApplicationFieldControls.CUSTOM_ADDITIONAL_ATTACH,
        JobApplicationFieldControls.CUSTOM_ADJUSTMENTS,
        JobApplicationFieldControls.CUSTOM_ADJUSTMENTS_OTHER,
        JobApplicationFieldControls.CUSTOM_AGE_GROUP,
        JobApplicationFieldControls.CUSTOM_BASE_PAY_FREQ,
        JobApplicationFieldControls.CUSTOM_BASE_SAL,
        JobApplicationFieldControls.CUSTOM_CAR_ALLOW_AMT,
        JobApplicationFieldControls.CUSTOM_CAR_ALLOW_REQUIRED,
        JobApplicationFieldControls.CUSTOM_CAR_ALLOWANCE_MONTHS,
        JobApplicationFieldControls.CUSTOM_EEO_POSTER,
        JobApplicationFieldControls.CUSTOM_EARLY_TALENT,
        JobApplicationFieldControls.CUSTOM_ELIGIBLE_OTHER,
        JobApplicationFieldControls.CUSTOM_ELIGIBLE_TO_WORK,
        JobApplicationFieldControls.CUSTOM_FINAL_SIGN_ON,
        JobApplicationFieldControls.CUSTOM_INTERNAL_POLICY,
        JobApplicationFieldControls.CUSTOM_INTERVIEW_COMMENTS_1,
        JobApplicationFieldControls.CUSTOM_INTERVIEW_DATE_TIME,
        JobApplicationFieldControls.CUSTOM_INTERVIEW_LIST,
        JobApplicationFieldControls.CUSTOM_INTERVIEW_ROUND,
        JobApplicationFieldControls.CUSTOM_INTERVIEW_TYPE_1,
        JobApplicationFieldControls.CUSTOM_LTI,
        JobApplicationFieldControls.CUSTOM_LEGAL_AUTH,
        JobApplicationFieldControls.CUSTOM_NATIONALITY,
        JobApplicationFieldControls.CUSTOM_NOTICE_DURING_PROB_PERIOD,
        JobApplicationFieldControls.CUSTOM_NOTICE_PERIOD,
        JobApplicationFieldControls.CUSTOM_OTHER_ALLOWANCE_DETAILS,
        JobApplicationFieldControls.CUSTOM_OTHER_COMP_DETAILS,
        JobApplicationFieldControls.CUSTOM_PROB_PERIOD,
        JobApplicationFieldControls.CUSTOM_RELOC_AMOUNT,
        JobApplicationFieldControls.CUSTOM_SEXUAL_ORIENTATION,
        JobApplicationFieldControls.CUSTOM_SOURCE_PRIMARY,
        JobApplicationFieldControls.CUSTOM_SOURCE_SECONDARY,
        JobApplicationFieldControls.CUSTOM_TARGET_BONUS_AMOUNT,
        JobApplicationFieldControls.CUSTOM_TYPE_HIRE,
        JobApplicationFieldControls.CUSTOM_UK_ETHNICITY,
        JobApplicationFieldControls.CUSTOM_VIRTUAL_HIRE,
        JobApplicationFieldControls.CUSTOM_VISA,
        JobApplicationFieldControls.CUSTOM_VISA_YES,
        JobApplicationFieldControls.DATA_SOURCE,
        JobApplicationFieldControls.DISABILITY_STATUS,
        JobApplicationFieldControls.DISCLAIMER_ACKNOWLEDGE,
        JobApplicationFieldControls.DUPLICATE_PROFILE,
        JobApplicationFieldControls.EDUCATION,
        JobApplicationFieldControls.END_DATE_CONTRACT,
        JobApplicationFieldControls.EXPORTED_ON,
        JobApplicationFieldControls.FIRST_NAME,
        JobApplicationFieldControls.GENDER,
        JobApplicationFieldControls.HIRED_ON,
        JobApplicationFieldControls.HOME_PHONE,
        JobApplicationFieldControls.INSIDE_WORK_EXPERIENCE,
        JobApplicationFieldControls.INSTR_ACCOMMODATIONS,
        JobApplicationFieldControls.INSTR_APPLCATION,
        JobApplicationFieldControls.INSTR_CONTRACT_INFO,
        JobApplicationFieldControls.INSTR_DISABILITY_1,
        JobApplicationFieldControls.INSTR_DISABILITY_2,
        JobApplicationFieldControls.INSTR_DISCLAIMER,
        JobApplicationFieldControls.INSTR_EEO_1,
        JobApplicationFieldControls.INSTR_EEO_2,
        JobApplicationFieldControls.INSTR_EEO_FOOTER,
        JobApplicationFieldControls.INSTR_ELIG_WORK,
        JobApplicationFieldControls.INSTR_EMP_INFO,
        JobApplicationFieldControls.INSTR_GLOBAL_EEO,
        JobApplicationFieldControls.INSTR_INTERNAL_POLICY,
        JobApplicationFieldControls.INSTR_INTERVIEW,
        JobApplicationFieldControls.INSTR_REWARD_INFO,
        JobApplicationFieldControls.INSTR_UK_DISABILITY,
        JobApplicationFieldControls.INSTR_VETS_1,
        JobApplicationFieldControls.INSTR_VETS_2,
        JobApplicationFieldControls.JOB_APP_GUID,
        JobApplicationFieldControls.JOB_APP_PERMISSIONS_NAV,
        JobApplicationFieldControls.JOB_APP_STATUS,
        JobApplicationFieldControls.JOB_APPLICATION_ASSESSMENT_ORDER,
        JobApplicationFieldControls.JOB_APPLICATION_AUDIT,
        JobApplicationFieldControls.JOB_APPLICATION_COMMENTS,
        JobApplicationFieldControls.JOB_APPLICATION_INTERVIEW,
        JobApplicationFieldControls.JOB_APPLICATION_ONBOARDING_DATA,
        JobApplicationFieldControls.JOB_APPLICATION_QUESTION_RESPONSE,
        JobApplicationFieldControls.JOB_APPLICATION_STATUS_AUDIT_TRAIL,
        JobApplicationFieldControls.JOB_OFFER,
        JobApplicationFieldControls.JOB_REQ_ID,
        JobApplicationFieldControls.JOB_REQUISITION,
        JobApplicationFieldControls.JOB_TITLE,
        JobApplicationFieldControls.LANGUAGES,
        JobApplicationFieldControls.LAST_MODIFIED_BY,
        JobApplicationFieldControls.LAST_MODIFIED_BY_PROXY,
        JobApplicationFieldControls.LAST_MODIFIED_DATE_TIME,
        JobApplicationFieldControls.LAST_NAME,
        JobApplicationFieldControls.MIDDLE_NAME,
        JobApplicationFieldControls.MOBILITY,
        JobApplicationFieldControls.NON_APPLICANT_STATUS,
        JobApplicationFieldControls.OFFER_LETTER,
        JobApplicationFieldControls.OUTSIDE_WORK_EXPERIENCE,
        JobApplicationFieldControls.OWNER,
        JobApplicationFieldControls.OWNERSHP_DATE,
        JobApplicationFieldControls.PROFILE_UPDATED,
        JobApplicationFieldControls.RACE,
        JobApplicationFieldControls.RATING,
        JobApplicationFieldControls.REFERENCE,
        JobApplicationFieldControls.REFERENCE_COMMENTS,
        JobApplicationFieldControls.REFERRED_BY,
        JobApplicationFieldControls.REFERRED_BY_NAV,
        JobApplicationFieldControls.RESUME,
        JobApplicationFieldControls.RESUME_UPLOAD_DATE,
        JobApplicationFieldControls.SECT_DISCLAIMER,
        JobApplicationFieldControls.SNAP_SHOT_DATE,
        JobApplicationFieldControls.SOURCE,
        JobApplicationFieldControls.SOURCE_LABEL,
        JobApplicationFieldControls.START_DATE,
        JobApplicationFieldControls.STATE,
        JobApplicationFieldControls.STATUS,
        JobApplicationFieldControls.STATUS_COMMENTS,
        JobApplicationFieldControls.STATUS_ID,
        JobApplicationFieldControls.TIME_TO_HIRE,
        JobApplicationFieldControls.USER_NAV,
        JobApplicationFieldControls.USERS_SYS_ID,
        JobApplicationFieldControls.VETERAN_STATUS,
        JobApplicationFieldControls.ZIP
    ];
    /**
     * All fields selector.
     */
    JobApplicationFieldControls.ALL_FIELDS = new core_1.AllFields('*', JobApplicationFieldControls);
    /**
     * All key fields of the JobApplicationFieldControls entity.
     */
    JobApplicationFieldControls._keyFields = [JobApplicationFieldControls.APPLICATION_ID];
    /**
     * Mapping of all key field names to the respective static field property JobApplicationFieldControls.
     */
    JobApplicationFieldControls._keys = JobApplicationFieldControls._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobApplicationFieldControls = exports.JobApplicationFieldControls || (exports.JobApplicationFieldControls = {}));
exports.JobApplicationFieldControls = JobApplicationFieldControls;
//# sourceMappingURL=JobApplicationFieldControls.js.map