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
var JobAppTemplate_Candidate_Detail_GlobalRequestBuilder_1 = require("./JobAppTemplate_Candidate_Detail_GlobalRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobAppTemplate_Candidate_Detail_Global" of service "SFOData".
 */
var JobAppTemplate_Candidate_Detail_Global = /** @class */ (function (_super) {
    __extends(JobAppTemplate_Candidate_Detail_Global, _super);
    function JobAppTemplate_Candidate_Detail_Global() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobAppTemplate_Candidate_Detail_Global`.
     * @returns A builder that constructs instances of entity type `JobAppTemplate_Candidate_Detail_Global`.
     */
    JobAppTemplate_Candidate_Detail_Global.builder = function () {
        return core_1.Entity.entityBuilder(JobAppTemplate_Candidate_Detail_Global);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobAppTemplate_Candidate_Detail_Global` entity type.
     * @returns A `JobAppTemplate_Candidate_Detail_Global` request builder.
     */
    JobAppTemplate_Candidate_Detail_Global.requestBuilder = function () {
        return new JobAppTemplate_Candidate_Detail_GlobalRequestBuilder_1.JobAppTemplate_Candidate_Detail_GlobalRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobAppTemplate_Candidate_Detail_Global`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobAppTemplate_Candidate_Detail_Global`.
     */
    JobAppTemplate_Candidate_Detail_Global.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobAppTemplate_Candidate_Detail_Global);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobAppTemplate_Candidate_Detail_Global.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobAppTemplate_Candidate_Detail_Global.
     */
    JobAppTemplate_Candidate_Detail_Global._entityName = 'JobAppTemplate_Candidate_Detail_Global';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobAppTemplate_Candidate_Detail_Global.
     */
    JobAppTemplate_Candidate_Detail_Global._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobAppTemplate_Candidate_Detail_Global._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobAppTemplate_Candidate_Detail_Global;
}(core_1.Entity));
exports.JobAppTemplate_Candidate_Detail_Global = JobAppTemplate_Candidate_Detail_Global;
var Attachment_1 = require("./Attachment");
var PicklistOption_1 = require("./PicklistOption");
(function (JobAppTemplate_Candidate_Detail_Global) {
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.ADDRESS = new core_1.StringField('address', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[applicationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.APPLICATION_DATE = new core_1.DateField('applicationDate', JobAppTemplate_Candidate_Detail_Global, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[averageRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.AVERAGE_RATING = new core_1.BigNumberField('averageRating', JobAppTemplate_Candidate_Detail_Global, 'Edm.Decimal');
    /**
     * Static representation of the [[bkgrndChkStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.BKGRND_CHK_STATUS = new core_1.StringField('bkgrndChkStatus', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[candidateName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CANDIDATE_NAME = new core_1.StringField('candidateName', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[cellPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CELL_PHONE = new core_1.StringField('cellPhone', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CITY = new core_1.StringField('city', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.COMMENTS = new core_1.StringField('comments', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[contactEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CONTACT_EMAIL = new core_1.StringField('contactEmail', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[currentCompany]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CURRENT_COMPANY = new core_1.StringField('currentCompany', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[currentTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CURRENT_TITLE = new core_1.StringField('currentTitle', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[custSalaryDesired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUST_SALARY_DESIRED = new core_1.StringField('custSalaryDesired', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[customAdjustmentsOther]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_ADJUSTMENTS_OTHER = new core_1.StringField('customAdjustmentsOther', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[customBaseSal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_BASE_SAL = new core_1.BigNumberField('customBaseSal', JobAppTemplate_Candidate_Detail_Global, 'Edm.Decimal');
    /**
     * Static representation of the [[customCarAllowAmt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_CAR_ALLOW_AMT = new core_1.BigNumberField('customCarAllowAmt', JobAppTemplate_Candidate_Detail_Global, 'Edm.Decimal');
    /**
     * Static representation of the [[customCarAllowanceMonths]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_CAR_ALLOWANCE_MONTHS = new core_1.StringField('customCarAllowanceMonths', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[customEeoPoster]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_EEO_POSTER = new core_1.StringField('customEEOPoster', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[customEligibleOther]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_ELIGIBLE_OTHER = new core_1.StringField('customEligibleOther', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[customFinalSignOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_FINAL_SIGN_ON = new core_1.BigNumberField('customFinalSignOn', JobAppTemplate_Candidate_Detail_Global, 'Edm.Decimal');
    /**
     * Static representation of the [[customInterviewComments1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_INTERVIEW_COMMENTS_1 = new core_1.StringField('customInterviewComments1', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[customInterviewDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_INTERVIEW_DATE_TIME = new core_1.StringField('customInterviewDateTime', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[customInterviewList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_INTERVIEW_LIST = new core_1.StringField('customInterviewList', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[customLti]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_LTI = new core_1.StringField('customLTI', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[customOtherAllowanceDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_OTHER_ALLOWANCE_DETAILS = new core_1.StringField('customOtherAllowanceDetails', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[customOtherCompDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_OTHER_COMP_DETAILS = new core_1.StringField('customOtherCompDetails', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[customRelocAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_RELOC_AMOUNT = new core_1.BigNumberField('customRelocAmount', JobAppTemplate_Candidate_Detail_Global, 'Edm.Decimal');
    /**
     * Static representation of the [[customTargetBonusAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_TARGET_BONUS_AMOUNT = new core_1.BigNumberField('customTargetBonusAmount', JobAppTemplate_Candidate_Detail_Global, 'Edm.Decimal');
    /**
     * Static representation of the [[customVisaYes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_VISA_YES = new core_1.StringField('customVisaYes', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[disclaimerAcknowledge]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.DISCLAIMER_ACKNOWLEDGE = new core_1.StringField('disclaimerAcknowledge', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[endDateContract]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.END_DATE_CONTRACT = new core_1.DateField('endDateContract', JobAppTemplate_Candidate_Detail_Global, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.FIRST_NAME = new core_1.StringField('firstName', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[homePhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.HOME_PHONE = new core_1.StringField('homePhone', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.ID = new core_1.StringField('id', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[instrAccommodations]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.INSTR_ACCOMMODATIONS = new core_1.StringField('instrAccommodations', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[instrApplcation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.INSTR_APPLCATION = new core_1.StringField('instrApplcation', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[instrContractInfo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.INSTR_CONTRACT_INFO = new core_1.StringField('instrContractInfo', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[instrDisability1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.INSTR_DISABILITY_1 = new core_1.StringField('instrDisability1', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[instrDisability2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.INSTR_DISABILITY_2 = new core_1.StringField('instrDisability2', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[instrDisclaimer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.INSTR_DISCLAIMER = new core_1.StringField('instrDisclaimer', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[instrEeo1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.INSTR_EEO_1 = new core_1.StringField('instrEEO1', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[instrEeo2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.INSTR_EEO_2 = new core_1.StringField('instrEEO2', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[instrEeoFooter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.INSTR_EEO_FOOTER = new core_1.StringField('instrEEOFooter', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[instrEligWork]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.INSTR_ELIG_WORK = new core_1.StringField('instrEligWork', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[instrEmpInfo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.INSTR_EMP_INFO = new core_1.StringField('instrEmpInfo', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[instrGlobalEeo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.INSTR_GLOBAL_EEO = new core_1.StringField('instrGlobalEEO', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[instrInternalPolicy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.INSTR_INTERNAL_POLICY = new core_1.StringField('instrInternalPolicy', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[instrInterview]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.INSTR_INTERVIEW = new core_1.StringField('instrInterview', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[instrRewardInfo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.INSTR_REWARD_INFO = new core_1.StringField('instrRewardInfo', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[instrUkDisability]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.INSTR_UK_DISABILITY = new core_1.StringField('instrUKDisability', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[instrVets1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.INSTR_VETS_1 = new core_1.StringField('instrVets1', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[instrVets2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.INSTR_VETS_2 = new core_1.StringField('instrVets2', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[interviewResult]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.INTERVIEW_RESULT = new core_1.StringField('interviewResult', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[jobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.JOB_TITLE = new core_1.StringField('jobTitle', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.LAST_MODIFIED = new core_1.DateField('lastModified', JobAppTemplate_Candidate_Detail_Global, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.LAST_NAME = new core_1.StringField('lastName', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[middleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.MIDDLE_NAME = new core_1.StringField('middleName', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[overdueInterviews]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.OVERDUE_INTERVIEWS = new core_1.StringField('overdueInterviews', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[questionResponse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.QUESTION_RESPONSE = new core_1.StringField('questionResponse', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[sectDisclaimer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.SECT_DISCLAIMER = new core_1.StringField('sectDisclaimer', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[source]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.SOURCE = new core_1.StringField('source', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.START_DATE = new core_1.DateField('startDate', JobAppTemplate_Candidate_Detail_Global, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[templateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.TEMPLATE_ID = new core_1.BigNumberField('templateId', JobAppTemplate_Candidate_Detail_Global, 'Edm.Int64');
    /**
     * Static representation of the [[zip]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.ZIP = new core_1.StringField('zip', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[bkgrndChkAttachment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.BKGRND_CHK_ATTACHMENT = new core_1.Link('bkgrndChkAttachment', JobAppTemplate_Candidate_Detail_Global, Attachment_1.Attachment);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.COUNTRY = new core_1.OneToOneLink('country', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[coverLetter]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.COVER_LETTER = new core_1.OneToOneLink('coverLetter', JobAppTemplate_Candidate_Detail_Global, Attachment_1.Attachment);
    /**
     * Static representation of the one-to-one navigation property [[custOnbPrefLang]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUST_ONB_PREF_LANG = new core_1.OneToOneLink('custONBPrefLang', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[custTravel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUST_TRAVEL = new core_1.OneToOneLink('custTravel', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[customAdditionalAttach]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_ADDITIONAL_ATTACH = new core_1.Link('customAdditionalAttach', JobAppTemplate_Candidate_Detail_Global, Attachment_1.Attachment);
    /**
     * Static representation of the one-to-one navigation property [[customAdjustments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_ADJUSTMENTS = new core_1.OneToOneLink('customAdjustments', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[customAgeGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_AGE_GROUP = new core_1.OneToOneLink('customAgeGroup', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[customBasePayFreq]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_BASE_PAY_FREQ = new core_1.OneToOneLink('customBasePayFreq', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[customCarAllowRequired]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_CAR_ALLOW_REQUIRED = new core_1.OneToOneLink('customCarAllowRequired', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[customEarlyTalent]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_EARLY_TALENT = new core_1.OneToOneLink('customEarlyTalent', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[customEligibleToWork]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_ELIGIBLE_TO_WORK = new core_1.OneToOneLink('customEligibleToWork', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[customInternalPolicy]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_INTERNAL_POLICY = new core_1.OneToOneLink('customInternalPolicy', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[customInterviewRound]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_INTERVIEW_ROUND = new core_1.OneToOneLink('customInterviewRound', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[customInterviewType1]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_INTERVIEW_TYPE_1 = new core_1.OneToOneLink('customInterviewType1', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[customLegalAuth]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_LEGAL_AUTH = new core_1.OneToOneLink('customLegalAuth', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[customNationality]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_NATIONALITY = new core_1.OneToOneLink('customNationality', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[customNoticeDuringProbPeriod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_NOTICE_DURING_PROB_PERIOD = new core_1.OneToOneLink('customNoticeDuringProbPeriod', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[customNoticePeriod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_NOTICE_PERIOD = new core_1.OneToOneLink('customNoticePeriod', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[customProbPeriod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_PROB_PERIOD = new core_1.OneToOneLink('customProbPeriod', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[customSexualOrientation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_SEXUAL_ORIENTATION = new core_1.OneToOneLink('customSexualOrientation', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[customSourcePrimary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_SOURCE_PRIMARY = new core_1.OneToOneLink('customSourcePrimary', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[customSourceSecondary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_SOURCE_SECONDARY = new core_1.OneToOneLink('customSourceSecondary', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[customTypeHire]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_TYPE_HIRE = new core_1.OneToOneLink('customTypeHire', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[customUkEthnicity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_UK_ETHNICITY = new core_1.OneToOneLink('customUKEthnicity', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[customVirtualHire]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_VIRTUAL_HIRE = new core_1.OneToOneLink('customVirtualHire', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[customVisa]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_VISA = new core_1.OneToOneLink('customVisa', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[disabilityStatus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.DISABILITY_STATUS = new core_1.OneToOneLink('disabilityStatus', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[gender]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.GENDER = new core_1.OneToOneLink('gender', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[race]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.RACE = new core_1.OneToOneLink('race', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[resume]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.RESUME = new core_1.OneToOneLink('resume', JobAppTemplate_Candidate_Detail_Global, Attachment_1.Attachment);
    /**
     * Static representation of the one-to-one navigation property [[state]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.STATE = new core_1.OneToOneLink('state', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[statusId]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.STATUS_ID = new core_1.OneToOneLink('statusId', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[veteranStatus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAppTemplate_Candidate_Detail_Global.VETERAN_STATUS = new core_1.OneToOneLink('veteranStatus', JobAppTemplate_Candidate_Detail_Global, PicklistOption_1.PicklistOption);
    /**
     * All fields of the JobAppTemplate_Candidate_Detail_Global entity.
     */
    JobAppTemplate_Candidate_Detail_Global._allFields = [
        JobAppTemplate_Candidate_Detail_Global.ADDRESS,
        JobAppTemplate_Candidate_Detail_Global.APPLICATION_DATE,
        JobAppTemplate_Candidate_Detail_Global.AVERAGE_RATING,
        JobAppTemplate_Candidate_Detail_Global.BKGRND_CHK_STATUS,
        JobAppTemplate_Candidate_Detail_Global.CANDIDATE_NAME,
        JobAppTemplate_Candidate_Detail_Global.CELL_PHONE,
        JobAppTemplate_Candidate_Detail_Global.CITY,
        JobAppTemplate_Candidate_Detail_Global.COMMENTS,
        JobAppTemplate_Candidate_Detail_Global.CONTACT_EMAIL,
        JobAppTemplate_Candidate_Detail_Global.CURRENT_COMPANY,
        JobAppTemplate_Candidate_Detail_Global.CURRENT_TITLE,
        JobAppTemplate_Candidate_Detail_Global.CUST_SALARY_DESIRED,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_ADJUSTMENTS_OTHER,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_BASE_SAL,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_CAR_ALLOW_AMT,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_CAR_ALLOWANCE_MONTHS,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_EEO_POSTER,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_ELIGIBLE_OTHER,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_FINAL_SIGN_ON,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_INTERVIEW_COMMENTS_1,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_INTERVIEW_DATE_TIME,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_INTERVIEW_LIST,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_LTI,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_OTHER_ALLOWANCE_DETAILS,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_OTHER_COMP_DETAILS,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_RELOC_AMOUNT,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_TARGET_BONUS_AMOUNT,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_VISA_YES,
        JobAppTemplate_Candidate_Detail_Global.DISCLAIMER_ACKNOWLEDGE,
        JobAppTemplate_Candidate_Detail_Global.END_DATE_CONTRACT,
        JobAppTemplate_Candidate_Detail_Global.FIRST_NAME,
        JobAppTemplate_Candidate_Detail_Global.HOME_PHONE,
        JobAppTemplate_Candidate_Detail_Global.ID,
        JobAppTemplate_Candidate_Detail_Global.INSTR_ACCOMMODATIONS,
        JobAppTemplate_Candidate_Detail_Global.INSTR_APPLCATION,
        JobAppTemplate_Candidate_Detail_Global.INSTR_CONTRACT_INFO,
        JobAppTemplate_Candidate_Detail_Global.INSTR_DISABILITY_1,
        JobAppTemplate_Candidate_Detail_Global.INSTR_DISABILITY_2,
        JobAppTemplate_Candidate_Detail_Global.INSTR_DISCLAIMER,
        JobAppTemplate_Candidate_Detail_Global.INSTR_EEO_1,
        JobAppTemplate_Candidate_Detail_Global.INSTR_EEO_2,
        JobAppTemplate_Candidate_Detail_Global.INSTR_EEO_FOOTER,
        JobAppTemplate_Candidate_Detail_Global.INSTR_ELIG_WORK,
        JobAppTemplate_Candidate_Detail_Global.INSTR_EMP_INFO,
        JobAppTemplate_Candidate_Detail_Global.INSTR_GLOBAL_EEO,
        JobAppTemplate_Candidate_Detail_Global.INSTR_INTERNAL_POLICY,
        JobAppTemplate_Candidate_Detail_Global.INSTR_INTERVIEW,
        JobAppTemplate_Candidate_Detail_Global.INSTR_REWARD_INFO,
        JobAppTemplate_Candidate_Detail_Global.INSTR_UK_DISABILITY,
        JobAppTemplate_Candidate_Detail_Global.INSTR_VETS_1,
        JobAppTemplate_Candidate_Detail_Global.INSTR_VETS_2,
        JobAppTemplate_Candidate_Detail_Global.INTERVIEW_RESULT,
        JobAppTemplate_Candidate_Detail_Global.JOB_TITLE,
        JobAppTemplate_Candidate_Detail_Global.LAST_MODIFIED,
        JobAppTemplate_Candidate_Detail_Global.LAST_NAME,
        JobAppTemplate_Candidate_Detail_Global.MIDDLE_NAME,
        JobAppTemplate_Candidate_Detail_Global.OVERDUE_INTERVIEWS,
        JobAppTemplate_Candidate_Detail_Global.QUESTION_RESPONSE,
        JobAppTemplate_Candidate_Detail_Global.SECT_DISCLAIMER,
        JobAppTemplate_Candidate_Detail_Global.SOURCE,
        JobAppTemplate_Candidate_Detail_Global.START_DATE,
        JobAppTemplate_Candidate_Detail_Global.TEMPLATE_ID,
        JobAppTemplate_Candidate_Detail_Global.ZIP,
        JobAppTemplate_Candidate_Detail_Global.BKGRND_CHK_ATTACHMENT,
        JobAppTemplate_Candidate_Detail_Global.COUNTRY,
        JobAppTemplate_Candidate_Detail_Global.COVER_LETTER,
        JobAppTemplate_Candidate_Detail_Global.CUST_ONB_PREF_LANG,
        JobAppTemplate_Candidate_Detail_Global.CUST_TRAVEL,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_ADDITIONAL_ATTACH,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_ADJUSTMENTS,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_AGE_GROUP,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_BASE_PAY_FREQ,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_CAR_ALLOW_REQUIRED,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_EARLY_TALENT,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_ELIGIBLE_TO_WORK,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_INTERNAL_POLICY,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_INTERVIEW_ROUND,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_INTERVIEW_TYPE_1,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_LEGAL_AUTH,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_NATIONALITY,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_NOTICE_DURING_PROB_PERIOD,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_NOTICE_PERIOD,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_PROB_PERIOD,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_SEXUAL_ORIENTATION,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_SOURCE_PRIMARY,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_SOURCE_SECONDARY,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_TYPE_HIRE,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_UK_ETHNICITY,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_VIRTUAL_HIRE,
        JobAppTemplate_Candidate_Detail_Global.CUSTOM_VISA,
        JobAppTemplate_Candidate_Detail_Global.DISABILITY_STATUS,
        JobAppTemplate_Candidate_Detail_Global.GENDER,
        JobAppTemplate_Candidate_Detail_Global.RACE,
        JobAppTemplate_Candidate_Detail_Global.RESUME,
        JobAppTemplate_Candidate_Detail_Global.STATE,
        JobAppTemplate_Candidate_Detail_Global.STATUS_ID,
        JobAppTemplate_Candidate_Detail_Global.VETERAN_STATUS
    ];
    /**
     * All fields selector.
     */
    JobAppTemplate_Candidate_Detail_Global.ALL_FIELDS = new core_1.AllFields('*', JobAppTemplate_Candidate_Detail_Global);
    /**
     * All key fields of the JobAppTemplate_Candidate_Detail_Global entity.
     */
    JobAppTemplate_Candidate_Detail_Global._keyFields = [JobAppTemplate_Candidate_Detail_Global.TEMPLATE_ID];
    /**
     * Mapping of all key field names to the respective static field property JobAppTemplate_Candidate_Detail_Global.
     */
    JobAppTemplate_Candidate_Detail_Global._keys = JobAppTemplate_Candidate_Detail_Global._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobAppTemplate_Candidate_Detail_Global = exports.JobAppTemplate_Candidate_Detail_Global || (exports.JobAppTemplate_Candidate_Detail_Global = {}));
exports.JobAppTemplate_Candidate_Detail_Global = JobAppTemplate_Candidate_Detail_Global;
//# sourceMappingURL=JobAppTemplate_Candidate_Detail_Global.js.map