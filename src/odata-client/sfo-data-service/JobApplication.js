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
var JobApplicationRequestBuilder_1 = require("./JobApplicationRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobApplication" of service "SFOData".
 */
var JobApplication = /** @class */ (function (_super) {
    __extends(JobApplication, _super);
    function JobApplication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobApplication`.
     * @returns A builder that constructs instances of entity type `JobApplication`.
     */
    JobApplication.builder = function () {
        return core_1.Entity.entityBuilder(JobApplication);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobApplication` entity type.
     * @returns A `JobApplication` request builder.
     */
    JobApplication.requestBuilder = function () {
        return new JobApplicationRequestBuilder_1.JobApplicationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplication`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplication`.
     */
    JobApplication.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobApplication);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobApplication.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobApplication.
     */
    JobApplication._entityName = 'JobApplication';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplication.
     */
    JobApplication._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobApplication._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobApplication;
}(core_1.Entity));
exports.JobApplication = JobApplication;
var Attachment_1 = require("./Attachment");
var Candidate_1 = require("./Candidate");
var PicklistOption_1 = require("./PicklistOption");
var JobApplicationSnapshot_Education_1 = require("./JobApplicationSnapshot_Education");
var JobApplicationSnapshot_InsideWorkExperience_1 = require("./JobApplicationSnapshot_InsideWorkExperience");
var JobApplicationFieldControls_1 = require("./JobApplicationFieldControls");
var JobApplicationStatus_1 = require("./JobApplicationStatus");
var JobApplicationAssessmentOrder_1 = require("./JobApplicationAssessmentOrder");
var JobApplicationAudit_1 = require("./JobApplicationAudit");
var JobApplicationComments_1 = require("./JobApplicationComments");
var JobApplicationInterview_1 = require("./JobApplicationInterview");
var JobApplicationOnboardingData_1 = require("./JobApplicationOnboardingData");
var JobApplicationQuestionResponse_1 = require("./JobApplicationQuestionResponse");
var JobApplicationStatusAuditTrail_1 = require("./JobApplicationStatusAuditTrail");
var JobOffer_1 = require("./JobOffer");
var JobRequisition_1 = require("./JobRequisition");
var JobApplicationSnapshot_Languages_1 = require("./JobApplicationSnapshot_Languages");
var JobApplicationSnapshot_Mobility_1 = require("./JobApplicationSnapshot_Mobility");
var OfferLetter_1 = require("./OfferLetter");
var JobApplicationSnapshot_OutsideWorkExperience_1 = require("./JobApplicationSnapshot_OutsideWorkExperience");
var User_1 = require("./User");
(function (JobApplication) {
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.ADDRESS = new core_1.StringField('address', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[agencyInfo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.AGENCY_INFO = new core_1.StringField('agencyInfo', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[anonymizedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.ANONYMIZED_DATE = new core_1.DateField('anonymizedDate', JobApplication, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[anonymizedFlag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.ANONYMIZED_FLAG = new core_1.StringField('anonymizedFlag', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[appLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.APP_LOCALE = new core_1.StringField('appLocale', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[appStatusSetItemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.APP_STATUS_SET_ITEM_ID = new core_1.BigNumberField('appStatusSetItemId', JobApplication, 'Edm.Int64');
    /**
     * Static representation of the [[applicationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.APPLICATION_DATE = new core_1.DateField('applicationDate', JobApplication, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.APPLICATION_ID = new core_1.BigNumberField('applicationId', JobApplication, 'Edm.Int64');
    /**
     * Static representation of the [[applicationTemplateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.APPLICATION_TEMPLATE_ID = new core_1.BigNumberField('applicationTemplateId', JobApplication, 'Edm.Int64');
    /**
     * Static representation of the [[averageRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.AVERAGE_RATING = new core_1.BigNumberField('averageRating', JobApplication, 'Edm.Decimal');
    /**
     * Static representation of the [[bkgrndChkStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.BKGRND_CHK_STATUS = new core_1.StringField('bkgrndChkStatus', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[businessPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.BUSINESS_PHONE = new core_1.StringField('businessPhone', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[candConversionProcessed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CAND_CONVERSION_PROCESSED = new core_1.StringField('candConversionProcessed', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[candTypeWhenHired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CAND_TYPE_WHEN_HIRED = new core_1.StringField('candTypeWhenHired', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CANDIDATE_ID = new core_1.BigNumberField('candidateId', JobApplication, 'Edm.Int64');
    /**
     * Static representation of the [[cellPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CELL_PHONE = new core_1.StringField('cellPhone', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CITY = new core_1.StringField('city', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[contactEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CONTACT_EMAIL = new core_1.StringField('contactEmail', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.COUNTRY = new core_1.StringField('country', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[countryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.COUNTRY_CODE = new core_1.StringField('countryCode', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[currentCompany]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CURRENT_COMPANY = new core_1.StringField('currentCompany', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[currentTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CURRENT_TITLE = new core_1.StringField('currentTitle', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[custSalaryDesired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUST_SALARY_DESIRED = new core_1.StringField('custSalaryDesired', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[customAdjustmentsOther]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_ADJUSTMENTS_OTHER = new core_1.StringField('customAdjustmentsOther', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[customBaseSal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_BASE_SAL = new core_1.BigNumberField('customBaseSal', JobApplication, 'Edm.Decimal');
    /**
     * Static representation of the [[customCarAllowAmt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_CAR_ALLOW_AMT = new core_1.BigNumberField('customCarAllowAmt', JobApplication, 'Edm.Decimal');
    /**
     * Static representation of the [[customCarAllowanceMonths]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_CAR_ALLOWANCE_MONTHS = new core_1.StringField('customCarAllowanceMonths', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[customEeoPoster]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_EEO_POSTER = new core_1.StringField('customEEOPoster', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[customEligibleOther]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_ELIGIBLE_OTHER = new core_1.StringField('customEligibleOther', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[customFinalSignOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_FINAL_SIGN_ON = new core_1.BigNumberField('customFinalSignOn', JobApplication, 'Edm.Decimal');
    /**
     * Static representation of the [[customInterviewComments1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_INTERVIEW_COMMENTS_1 = new core_1.StringField('customInterviewComments1', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[customInterviewDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_INTERVIEW_DATE_TIME = new core_1.StringField('customInterviewDateTime', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[customInterviewList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_INTERVIEW_LIST = new core_1.StringField('customInterviewList', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[customLti]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_LTI = new core_1.StringField('customLTI', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[customOtherAllowanceDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_OTHER_ALLOWANCE_DETAILS = new core_1.StringField('customOtherAllowanceDetails', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[customOtherCompDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_OTHER_COMP_DETAILS = new core_1.StringField('customOtherCompDetails', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[customRelocAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_RELOC_AMOUNT = new core_1.BigNumberField('customRelocAmount', JobApplication, 'Edm.Decimal');
    /**
     * Static representation of the [[customTargetBonusAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_TARGET_BONUS_AMOUNT = new core_1.BigNumberField('customTargetBonusAmount', JobApplication, 'Edm.Decimal');
    /**
     * Static representation of the [[customVisaYes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_VISA_YES = new core_1.StringField('customVisaYes', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[dataSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.DATA_SOURCE = new core_1.StringField('dataSource', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[disclaimerAcknowledge]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.DISCLAIMER_ACKNOWLEDGE = new core_1.StringField('disclaimerAcknowledge', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[duplicateProfile]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.DUPLICATE_PROFILE = new core_1.StringField('duplicateProfile', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[endDateContract]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.END_DATE_CONTRACT = new core_1.DateField('endDateContract', JobApplication, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exportedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.EXPORTED_ON = new core_1.DateField('exportedOn', JobApplication, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.FIRST_NAME = new core_1.StringField('firstName', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[gender]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.GENDER = new core_1.StringField('gender', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[hiredOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.HIRED_ON = new core_1.DateField('hiredOn', JobApplication, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[homePhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.HOME_PHONE = new core_1.StringField('homePhone', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[instrAccommodations]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.INSTR_ACCOMMODATIONS = new core_1.StringField('instrAccommodations', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[instrApplcation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.INSTR_APPLCATION = new core_1.StringField('instrApplcation', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[instrContractInfo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.INSTR_CONTRACT_INFO = new core_1.StringField('instrContractInfo', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[instrDisability1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.INSTR_DISABILITY_1 = new core_1.StringField('instrDisability1', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[instrDisability2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.INSTR_DISABILITY_2 = new core_1.StringField('instrDisability2', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[instrDisclaimer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.INSTR_DISCLAIMER = new core_1.StringField('instrDisclaimer', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[instrEeo1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.INSTR_EEO_1 = new core_1.StringField('instrEEO1', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[instrEeo2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.INSTR_EEO_2 = new core_1.StringField('instrEEO2', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[instrEeoFooter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.INSTR_EEO_FOOTER = new core_1.StringField('instrEEOFooter', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[instrEligWork]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.INSTR_ELIG_WORK = new core_1.StringField('instrEligWork', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[instrEmpInfo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.INSTR_EMP_INFO = new core_1.StringField('instrEmpInfo', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[instrGlobalEeo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.INSTR_GLOBAL_EEO = new core_1.StringField('instrGlobalEEO', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[instrInternalPolicy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.INSTR_INTERNAL_POLICY = new core_1.StringField('instrInternalPolicy', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[instrInterview]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.INSTR_INTERVIEW = new core_1.StringField('instrInterview', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[instrRewardInfo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.INSTR_REWARD_INFO = new core_1.StringField('instrRewardInfo', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[instrUkDisability]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.INSTR_UK_DISABILITY = new core_1.StringField('instrUKDisability', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[instrVets1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.INSTR_VETS_1 = new core_1.StringField('instrVets1', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[instrVets2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.INSTR_VETS_2 = new core_1.StringField('instrVets2', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[jobAppGuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.JOB_APP_GUID = new core_1.StringField('jobAppGuid', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.JOB_REQ_ID = new core_1.BigNumberField('jobReqId', JobApplication, 'Edm.Int64');
    /**
     * Static representation of the [[jobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.JOB_TITLE = new core_1.StringField('jobTitle', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedByProxy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.LAST_MODIFIED_BY_PROXY = new core_1.StringField('lastModifiedByProxy', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', JobApplication, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.LAST_NAME = new core_1.StringField('lastName', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[middleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.MIDDLE_NAME = new core_1.StringField('middleName', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[nonApplicantStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.NON_APPLICANT_STATUS = new core_1.StringField('nonApplicantStatus', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[owner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.OWNER = new core_1.StringField('owner', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[ownershpDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.OWNERSHP_DATE = new core_1.DateField('ownershpDate', JobApplication, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[profileUpdated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.PROFILE_UPDATED = new core_1.StringField('profileUpdated', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[rating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.RATING = new core_1.StringField('rating', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[reference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.REFERENCE = new core_1.StringField('reference', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[referenceComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.REFERENCE_COMMENTS = new core_1.StringField('referenceComments', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[referredBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.REFERRED_BY = new core_1.StringField('referredBy', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[resumeUploadDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.RESUME_UPLOAD_DATE = new core_1.DateField('resumeUploadDate', JobApplication, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sectDisclaimer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.SECT_DISCLAIMER = new core_1.StringField('sectDisclaimer', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[snapShotDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.SNAP_SHOT_DATE = new core_1.DateField('snapShotDate', JobApplication, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[source]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.SOURCE = new core_1.StringField('source', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[sourceLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.SOURCE_LABEL = new core_1.StringField('sourceLabel', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.START_DATE = new core_1.DateField('startDate', JobApplication, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.STATUS = new core_1.StringField('status', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[statusComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.STATUS_COMMENTS = new core_1.StringField('statusComments', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[timeToHire]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.TIME_TO_HIRE = new core_1.NumberField('timeToHire', JobApplication, 'Edm.Double');
    /**
     * Static representation of the [[usersSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.USERS_SYS_ID = new core_1.StringField('usersSysId', JobApplication, 'Edm.String');
    /**
     * Static representation of the [[zip]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.ZIP = new core_1.StringField('zip', JobApplication, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[bkgrndChkAttachment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.BKGRND_CHK_ATTACHMENT = new core_1.Link('bkgrndChkAttachment', JobApplication, Attachment_1.Attachment);
    /**
     * Static representation of the one-to-one navigation property [[candidate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CANDIDATE = new core_1.OneToOneLink('candidate', JobApplication, Candidate_1.Candidate);
    /**
     * Static representation of the one-to-many navigation property [[countryPicklist]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.COUNTRY_PICKLIST = new core_1.Link('countryPicklist', JobApplication, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[coverLetter]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.COVER_LETTER = new core_1.OneToOneLink('coverLetter', JobApplication, Attachment_1.Attachment);
    /**
     * Static representation of the one-to-many navigation property [[custOnbPrefLang]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUST_ONB_PREF_LANG = new core_1.Link('custONBPrefLang', JobApplication, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[custTravel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUST_TRAVEL = new core_1.Link('custTravel', JobApplication, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[customAdditionalAttach]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_ADDITIONAL_ATTACH = new core_1.Link('customAdditionalAttach', JobApplication, Attachment_1.Attachment);
    /**
     * Static representation of the one-to-many navigation property [[customAdjustments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_ADJUSTMENTS = new core_1.Link('customAdjustments', JobApplication, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[customAgeGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_AGE_GROUP = new core_1.Link('customAgeGroup', JobApplication, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[customBasePayFreq]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_BASE_PAY_FREQ = new core_1.Link('customBasePayFreq', JobApplication, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[customCarAllowRequired]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_CAR_ALLOW_REQUIRED = new core_1.Link('customCarAllowRequired', JobApplication, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[customEarlyTalent]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_EARLY_TALENT = new core_1.Link('customEarlyTalent', JobApplication, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[customEligibleToWork]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_ELIGIBLE_TO_WORK = new core_1.Link('customEligibleToWork', JobApplication, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[customInternalPolicy]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_INTERNAL_POLICY = new core_1.Link('customInternalPolicy', JobApplication, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[customInterviewRound]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_INTERVIEW_ROUND = new core_1.Link('customInterviewRound', JobApplication, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[customInterviewType1]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_INTERVIEW_TYPE_1 = new core_1.Link('customInterviewType1', JobApplication, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[customLegalAuth]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_LEGAL_AUTH = new core_1.Link('customLegalAuth', JobApplication, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[customNationality]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_NATIONALITY = new core_1.Link('customNationality', JobApplication, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[customNoticeDuringProbPeriod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_NOTICE_DURING_PROB_PERIOD = new core_1.Link('customNoticeDuringProbPeriod', JobApplication, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[customNoticePeriod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_NOTICE_PERIOD = new core_1.Link('customNoticePeriod', JobApplication, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[customProbPeriod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_PROB_PERIOD = new core_1.Link('customProbPeriod', JobApplication, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[customSexualOrientation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_SEXUAL_ORIENTATION = new core_1.Link('customSexualOrientation', JobApplication, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[customSourcePrimary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_SOURCE_PRIMARY = new core_1.Link('customSourcePrimary', JobApplication, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[customSourceSecondary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_SOURCE_SECONDARY = new core_1.Link('customSourceSecondary', JobApplication, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[customTypeHire]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_TYPE_HIRE = new core_1.Link('customTypeHire', JobApplication, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[customUkEthnicity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_UK_ETHNICITY = new core_1.Link('customUKEthnicity', JobApplication, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[customVirtualHire]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_VIRTUAL_HIRE = new core_1.Link('customVirtualHire', JobApplication, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[customVisa]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.CUSTOM_VISA = new core_1.Link('customVisa', JobApplication, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[disabilityStatus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.DISABILITY_STATUS = new core_1.Link('disabilityStatus', JobApplication, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[education]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.EDUCATION = new core_1.Link('education', JobApplication, JobApplicationSnapshot_Education_1.JobApplicationSnapshot_Education);
    /**
     * Static representation of the one-to-many navigation property [[insideWorkExperience]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.INSIDE_WORK_EXPERIENCE = new core_1.Link('insideWorkExperience', JobApplication, JobApplicationSnapshot_InsideWorkExperience_1.JobApplicationSnapshot_InsideWorkExperience);
    /**
     * Static representation of the one-to-one navigation property [[jobAppPermissionsNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.JOB_APP_PERMISSIONS_NAV = new core_1.OneToOneLink('jobAppPermissionsNav', JobApplication, JobApplicationFieldControls_1.JobApplicationFieldControls);
    /**
     * Static representation of the one-to-one navigation property [[jobAppStatus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.JOB_APP_STATUS = new core_1.OneToOneLink('jobAppStatus', JobApplication, JobApplicationStatus_1.JobApplicationStatus);
    /**
     * Static representation of the one-to-many navigation property [[jobApplicationAssessmentOrder]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.JOB_APPLICATION_ASSESSMENT_ORDER = new core_1.Link('jobApplicationAssessmentOrder', JobApplication, JobApplicationAssessmentOrder_1.JobApplicationAssessmentOrder);
    /**
     * Static representation of the one-to-many navigation property [[jobApplicationAudit]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.JOB_APPLICATION_AUDIT = new core_1.Link('jobApplicationAudit', JobApplication, JobApplicationAudit_1.JobApplicationAudit);
    /**
     * Static representation of the one-to-many navigation property [[jobApplicationComments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.JOB_APPLICATION_COMMENTS = new core_1.Link('jobApplicationComments', JobApplication, JobApplicationComments_1.JobApplicationComments);
    /**
     * Static representation of the one-to-many navigation property [[jobApplicationInterview]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.JOB_APPLICATION_INTERVIEW = new core_1.Link('jobApplicationInterview', JobApplication, JobApplicationInterview_1.JobApplicationInterview);
    /**
     * Static representation of the one-to-many navigation property [[jobApplicationOnboardingData]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.JOB_APPLICATION_ONBOARDING_DATA = new core_1.Link('jobApplicationOnboardingData', JobApplication, JobApplicationOnboardingData_1.JobApplicationOnboardingData);
    /**
     * Static representation of the one-to-many navigation property [[jobApplicationQuestionResponse]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.JOB_APPLICATION_QUESTION_RESPONSE = new core_1.Link('jobApplicationQuestionResponse', JobApplication, JobApplicationQuestionResponse_1.JobApplicationQuestionResponse);
    /**
     * Static representation of the one-to-many navigation property [[jobApplicationStatusAuditTrail]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.JOB_APPLICATION_STATUS_AUDIT_TRAIL = new core_1.Link('jobApplicationStatusAuditTrail', JobApplication, JobApplicationStatusAuditTrail_1.JobApplicationStatusAuditTrail);
    /**
     * Static representation of the one-to-many navigation property [[jobOffer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.JOB_OFFER = new core_1.Link('jobOffer', JobApplication, JobOffer_1.JobOffer);
    /**
     * Static representation of the one-to-one navigation property [[jobRequisition]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.JOB_REQUISITION = new core_1.OneToOneLink('jobRequisition', JobApplication, JobRequisition_1.JobRequisition);
    /**
     * Static representation of the one-to-many navigation property [[languages]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.LANGUAGES = new core_1.Link('languages', JobApplication, JobApplicationSnapshot_Languages_1.JobApplicationSnapshot_Languages);
    /**
     * Static representation of the one-to-many navigation property [[mobility]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.MOBILITY = new core_1.Link('mobility', JobApplication, JobApplicationSnapshot_Mobility_1.JobApplicationSnapshot_Mobility);
    /**
     * Static representation of the one-to-many navigation property [[offerLetter]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.OFFER_LETTER = new core_1.Link('offerLetter', JobApplication, OfferLetter_1.OfferLetter);
    /**
     * Static representation of the one-to-many navigation property [[outsideWorkExperience]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.OUTSIDE_WORK_EXPERIENCE = new core_1.Link('outsideWorkExperience', JobApplication, JobApplicationSnapshot_OutsideWorkExperience_1.JobApplicationSnapshot_OutsideWorkExperience);
    /**
     * Static representation of the one-to-many navigation property [[race]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.RACE = new core_1.Link('race', JobApplication, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[referredByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.REFERRED_BY_NAV = new core_1.OneToOneLink('referredByNav', JobApplication, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[resume]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.RESUME = new core_1.OneToOneLink('resume', JobApplication, Attachment_1.Attachment);
    /**
     * Static representation of the one-to-many navigation property [[state]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.STATE = new core_1.Link('state', JobApplication, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[statusId]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.STATUS_ID = new core_1.Link('statusId', JobApplication, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[userNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.USER_NAV = new core_1.OneToOneLink('userNav', JobApplication, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[veteranStatus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplication.VETERAN_STATUS = new core_1.Link('veteranStatus', JobApplication, PicklistOption_1.PicklistOption);
    /**
     * All fields of the JobApplication entity.
     */
    JobApplication._allFields = [
        JobApplication.ADDRESS,
        JobApplication.AGENCY_INFO,
        JobApplication.ANONYMIZED_DATE,
        JobApplication.ANONYMIZED_FLAG,
        JobApplication.APP_LOCALE,
        JobApplication.APP_STATUS_SET_ITEM_ID,
        JobApplication.APPLICATION_DATE,
        JobApplication.APPLICATION_ID,
        JobApplication.APPLICATION_TEMPLATE_ID,
        JobApplication.AVERAGE_RATING,
        JobApplication.BKGRND_CHK_STATUS,
        JobApplication.BUSINESS_PHONE,
        JobApplication.CAND_CONVERSION_PROCESSED,
        JobApplication.CAND_TYPE_WHEN_HIRED,
        JobApplication.CANDIDATE_ID,
        JobApplication.CELL_PHONE,
        JobApplication.CITY,
        JobApplication.CONTACT_EMAIL,
        JobApplication.COUNTRY,
        JobApplication.COUNTRY_CODE,
        JobApplication.CURRENT_COMPANY,
        JobApplication.CURRENT_TITLE,
        JobApplication.CUST_SALARY_DESIRED,
        JobApplication.CUSTOM_ADJUSTMENTS_OTHER,
        JobApplication.CUSTOM_BASE_SAL,
        JobApplication.CUSTOM_CAR_ALLOW_AMT,
        JobApplication.CUSTOM_CAR_ALLOWANCE_MONTHS,
        JobApplication.CUSTOM_EEO_POSTER,
        JobApplication.CUSTOM_ELIGIBLE_OTHER,
        JobApplication.CUSTOM_FINAL_SIGN_ON,
        JobApplication.CUSTOM_INTERVIEW_COMMENTS_1,
        JobApplication.CUSTOM_INTERVIEW_DATE_TIME,
        JobApplication.CUSTOM_INTERVIEW_LIST,
        JobApplication.CUSTOM_LTI,
        JobApplication.CUSTOM_OTHER_ALLOWANCE_DETAILS,
        JobApplication.CUSTOM_OTHER_COMP_DETAILS,
        JobApplication.CUSTOM_RELOC_AMOUNT,
        JobApplication.CUSTOM_TARGET_BONUS_AMOUNT,
        JobApplication.CUSTOM_VISA_YES,
        JobApplication.DATA_SOURCE,
        JobApplication.DISCLAIMER_ACKNOWLEDGE,
        JobApplication.DUPLICATE_PROFILE,
        JobApplication.END_DATE_CONTRACT,
        JobApplication.EXPORTED_ON,
        JobApplication.FIRST_NAME,
        JobApplication.GENDER,
        JobApplication.HIRED_ON,
        JobApplication.HOME_PHONE,
        JobApplication.INSTR_ACCOMMODATIONS,
        JobApplication.INSTR_APPLCATION,
        JobApplication.INSTR_CONTRACT_INFO,
        JobApplication.INSTR_DISABILITY_1,
        JobApplication.INSTR_DISABILITY_2,
        JobApplication.INSTR_DISCLAIMER,
        JobApplication.INSTR_EEO_1,
        JobApplication.INSTR_EEO_2,
        JobApplication.INSTR_EEO_FOOTER,
        JobApplication.INSTR_ELIG_WORK,
        JobApplication.INSTR_EMP_INFO,
        JobApplication.INSTR_GLOBAL_EEO,
        JobApplication.INSTR_INTERNAL_POLICY,
        JobApplication.INSTR_INTERVIEW,
        JobApplication.INSTR_REWARD_INFO,
        JobApplication.INSTR_UK_DISABILITY,
        JobApplication.INSTR_VETS_1,
        JobApplication.INSTR_VETS_2,
        JobApplication.JOB_APP_GUID,
        JobApplication.JOB_REQ_ID,
        JobApplication.JOB_TITLE,
        JobApplication.LAST_MODIFIED_BY,
        JobApplication.LAST_MODIFIED_BY_PROXY,
        JobApplication.LAST_MODIFIED_DATE_TIME,
        JobApplication.LAST_NAME,
        JobApplication.MIDDLE_NAME,
        JobApplication.NON_APPLICANT_STATUS,
        JobApplication.OWNER,
        JobApplication.OWNERSHP_DATE,
        JobApplication.PROFILE_UPDATED,
        JobApplication.RATING,
        JobApplication.REFERENCE,
        JobApplication.REFERENCE_COMMENTS,
        JobApplication.REFERRED_BY,
        JobApplication.RESUME_UPLOAD_DATE,
        JobApplication.SECT_DISCLAIMER,
        JobApplication.SNAP_SHOT_DATE,
        JobApplication.SOURCE,
        JobApplication.SOURCE_LABEL,
        JobApplication.START_DATE,
        JobApplication.STATUS,
        JobApplication.STATUS_COMMENTS,
        JobApplication.TIME_TO_HIRE,
        JobApplication.USERS_SYS_ID,
        JobApplication.ZIP,
        JobApplication.BKGRND_CHK_ATTACHMENT,
        JobApplication.CANDIDATE,
        JobApplication.COUNTRY_PICKLIST,
        JobApplication.COVER_LETTER,
        JobApplication.CUST_ONB_PREF_LANG,
        JobApplication.CUST_TRAVEL,
        JobApplication.CUSTOM_ADDITIONAL_ATTACH,
        JobApplication.CUSTOM_ADJUSTMENTS,
        JobApplication.CUSTOM_AGE_GROUP,
        JobApplication.CUSTOM_BASE_PAY_FREQ,
        JobApplication.CUSTOM_CAR_ALLOW_REQUIRED,
        JobApplication.CUSTOM_EARLY_TALENT,
        JobApplication.CUSTOM_ELIGIBLE_TO_WORK,
        JobApplication.CUSTOM_INTERNAL_POLICY,
        JobApplication.CUSTOM_INTERVIEW_ROUND,
        JobApplication.CUSTOM_INTERVIEW_TYPE_1,
        JobApplication.CUSTOM_LEGAL_AUTH,
        JobApplication.CUSTOM_NATIONALITY,
        JobApplication.CUSTOM_NOTICE_DURING_PROB_PERIOD,
        JobApplication.CUSTOM_NOTICE_PERIOD,
        JobApplication.CUSTOM_PROB_PERIOD,
        JobApplication.CUSTOM_SEXUAL_ORIENTATION,
        JobApplication.CUSTOM_SOURCE_PRIMARY,
        JobApplication.CUSTOM_SOURCE_SECONDARY,
        JobApplication.CUSTOM_TYPE_HIRE,
        JobApplication.CUSTOM_UK_ETHNICITY,
        JobApplication.CUSTOM_VIRTUAL_HIRE,
        JobApplication.CUSTOM_VISA,
        JobApplication.DISABILITY_STATUS,
        JobApplication.EDUCATION,
        JobApplication.INSIDE_WORK_EXPERIENCE,
        JobApplication.JOB_APP_PERMISSIONS_NAV,
        JobApplication.JOB_APP_STATUS,
        JobApplication.JOB_APPLICATION_ASSESSMENT_ORDER,
        JobApplication.JOB_APPLICATION_AUDIT,
        JobApplication.JOB_APPLICATION_COMMENTS,
        JobApplication.JOB_APPLICATION_INTERVIEW,
        JobApplication.JOB_APPLICATION_ONBOARDING_DATA,
        JobApplication.JOB_APPLICATION_QUESTION_RESPONSE,
        JobApplication.JOB_APPLICATION_STATUS_AUDIT_TRAIL,
        JobApplication.JOB_OFFER,
        JobApplication.JOB_REQUISITION,
        JobApplication.LANGUAGES,
        JobApplication.MOBILITY,
        JobApplication.OFFER_LETTER,
        JobApplication.OUTSIDE_WORK_EXPERIENCE,
        JobApplication.RACE,
        JobApplication.REFERRED_BY_NAV,
        JobApplication.RESUME,
        JobApplication.STATE,
        JobApplication.STATUS_ID,
        JobApplication.USER_NAV,
        JobApplication.VETERAN_STATUS
    ];
    /**
     * All fields selector.
     */
    JobApplication.ALL_FIELDS = new core_1.AllFields('*', JobApplication);
    /**
     * All key fields of the JobApplication entity.
     */
    JobApplication._keyFields = [JobApplication.APPLICATION_ID];
    /**
     * Mapping of all key field names to the respective static field property JobApplication.
     */
    JobApplication._keys = JobApplication._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobApplication = exports.JobApplication || (exports.JobApplication = {}));
exports.JobApplication = JobApplication;
//# sourceMappingURL=JobApplication.js.map