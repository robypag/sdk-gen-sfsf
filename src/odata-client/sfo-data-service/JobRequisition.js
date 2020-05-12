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
var JobRequisitionRequestBuilder_1 = require("./JobRequisitionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobRequisition" of service "SFOData".
 */
var JobRequisition = /** @class */ (function (_super) {
    __extends(JobRequisition, _super);
    function JobRequisition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobRequisition`.
     * @returns A builder that constructs instances of entity type `JobRequisition`.
     */
    JobRequisition.builder = function () {
        return core_1.Entity.entityBuilder(JobRequisition);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobRequisition` entity type.
     * @returns A `JobRequisition` request builder.
     */
    JobRequisition.requestBuilder = function () {
        return new JobRequisitionRequestBuilder_1.JobRequisitionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobRequisition`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobRequisition`.
     */
    JobRequisition.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobRequisition);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobRequisition.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobRequisition.
     */
    JobRequisition._entityName = 'JobRequisition';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobRequisition.
     */
    JobRequisition._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobRequisition._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobRequisition;
}(core_1.Entity));
exports.JobRequisition = JobRequisition;
var JobRequisitionOperator_1 = require("./JobRequisitionOperator");
var JobRequisitionAssessment_1 = require("./JobRequisitionAssessment");
var FoBusinessUnit_1 = require("./FoBusinessUnit");
var RcmCompetency_1 = require("./RcmCompetency");
var JobRequisitionGroupOperator_1 = require("./JobRequisitionGroupOperator");
var FoCostCenter_1 = require("./FoCostCenter");
var PicklistOption_1 = require("./PicklistOption");
var FoDepartment_1 = require("./FoDepartment");
var FoDivision_1 = require("./FoDivision");
var Attachment_1 = require("./Attachment");
var JobAnalyzerReportingData_1 = require("./JobAnalyzerReportingData");
var JobApplication_1 = require("./JobApplication");
var JobProfile_1 = require("./JobProfile");
var JobReqFwdCandidates_1 = require("./JobReqFwdCandidates");
var JobRequisitionLocale_1 = require("./JobRequisitionLocale");
var JobRequisitionFieldControls_1 = require("./JobRequisitionFieldControls");
var JobRequisitionPosting_1 = require("./JobRequisitionPosting");
var JobReqScreeningQuestion_1 = require("./JobReqScreeningQuestion");
var User_1 = require("./User");
var FoCompany_1 = require("./FoCompany");
var FoLocation_1 = require("./FoLocation");
var JobReqFoLocation_1 = require("./JobReqFoLocation");
var JobReqQuestion_1 = require("./JobReqQuestion");
var FormRouteMap_1 = require("./FormRouteMap");
(function (JobRequisition) {
    /**
     * Static representation of the [[age]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.AGE = new core_1.BigNumberField('age', JobRequisition, 'Edm.Int64');
    /**
     * Static representation of the [[appTemplateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.APP_TEMPLATE_ID = new core_1.BigNumberField('appTemplateId', JobRequisition, 'Edm.Int64');
    /**
     * Static representation of the [[assessRatingScaleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.ASSESS_RATING_SCALE_NAME = new core_1.StringField('assessRatingScaleName', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[businessUnitObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.BUSINESS_UNIT_OBJ_CODE = new core_1.StringField('businessUnit_obj_code', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[candidateHired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.CANDIDATE_HIRED = new core_1.BigNumberField('candidateHired', JobRequisition, 'Edm.Decimal');
    /**
     * Static representation of the [[candidateProgress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.CANDIDATE_PROGRESS = new core_1.BigNumberField('candidateProgress', JobRequisition, 'Edm.Int64');
    /**
     * Static representation of the [[closedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.CLOSED_DATE_TIME = new core_1.DateField('closedDateTime', JobRequisition, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[corporatePosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.CORPORATE_POSTING = new core_1.BooleanField('corporatePosting', JobRequisition, 'Edm.Boolean');
    /**
     * Static representation of the [[costCenterObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.COST_CENTER_OBJ_CODE = new core_1.StringField('costCenter_obj_code', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.COUNTRY = new core_1.StringField('country', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', JobRequisition, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.CURRENCY = new core_1.StringField('currency', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[custEmployeeClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.CUST_EMPLOYEE_CLASS = new core_1.StringField('custEmployeeClass', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[custFte]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.CUST_FTE = new core_1.StringField('custFTE', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[custGlobalJobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.CUST_GLOBAL_JOB_TITLE = new core_1.StringField('custGlobalJobTitle', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[custHoursPerWeek]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.CUST_HOURS_PER_WEEK = new core_1.StringField('custHoursPerWeek', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[custInstrAssessments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.CUST_INSTR_ASSESSMENTS = new core_1.StringField('custInstrAssessments', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[custInstrCountryFields]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.CUST_INSTR_COUNTRY_FIELDS = new core_1.StringField('custInstrCountryFields', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[custInstrFadv]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.CUST_INSTR_FADV = new core_1.StringField('custInstrFADV', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[custInstrJobPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.CUST_INSTR_JOB_POSTING = new core_1.StringField('custInstrJobPosting', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[custInstrPosMgmt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.CUST_INSTR_POS_MGMT = new core_1.StringField('custInstrPosMgmt', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[custInstrReqDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.CUST_INSTR_REQ_DETAILS = new core_1.StringField('custInstrReqDetails', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[custInstrTeamDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.CUST_INSTR_TEAM_DETAILS = new core_1.StringField('custInstrTeamDetails', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[customComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.CUSTOM_COMMENTS = new core_1.StringField('customComments', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[defaultLanguage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.DEFAULT_LANGUAGE = new core_1.StringField('defaultLanguage', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[deleted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.DELETED = new core_1.StringField('deleted', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[departmentObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.DEPARTMENT_OBJ_CODE = new core_1.StringField('department_obj_code', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[divisionObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.DIVISION_OBJ_CODE = new core_1.StringField('division_obj_code', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[eeoGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.EEO_GROUP = new core_1.StringField('eeoGroup', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[eeoJobCat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.EEO_JOB_CAT = new core_1.StringField('eeoJobCat', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[erpAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.ERP_AMOUNT = new core_1.BigNumberField('erpAmount', JobRequisition, 'Edm.Decimal');
    /**
     * Static representation of the [[flsa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.FLSA = new core_1.StringField('flsa', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.FORM_DATA_ID = new core_1.BigNumberField('formDataId', JobRequisition, 'Edm.Int64');
    /**
     * Static representation of the [[formDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.FORM_DUE_DATE = new core_1.DateField('formDueDate', JobRequisition, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[instrInternalComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.INSTR_INTERNAL_COMMENTS = new core_1.StringField('instrInternalComments', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[intEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.INT_END_DATE = new core_1.DateField('intEndDate', JobRequisition, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[intStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.INT_START_DATE = new core_1.DateField('intStartDate', JobRequisition, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[internalStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.INTERNAL_STATUS = new core_1.StringField('internalStatus', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[intrPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.INTR_POSTING = new core_1.StringField('intrPosting', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[intranetPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.INTRANET_POSTING = new core_1.BooleanField('intranetPosting', JobRequisition, 'Edm.Boolean');
    /**
     * Static representation of the [[isDraft]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.IS_DRAFT = new core_1.BooleanField('isDraft', JobRequisition, 'Edm.Boolean');
    /**
     * Static representation of the [[jobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.JOB_CODE = new core_1.StringField('jobCode', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[jobGrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.JOB_GRADE = new core_1.StringField('jobGrade', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[jobLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.JOB_LEVEL = new core_1.StringField('jobLevel', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[jobReqGuId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.JOB_REQ_GU_ID = new core_1.StringField('jobReqGUId', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.JOB_REQ_ID = new core_1.BigNumberField('jobReqId', JobRequisition, 'Edm.Int64');
    /**
     * Static representation of the [[jobRole]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.JOB_ROLE = new core_1.StringField('jobRole', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[jobStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.JOB_START_DATE = new core_1.DateField('jobStartDate', JobRequisition, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', JobRequisition, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedProxyUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.LAST_MODIFIED_PROXY_USER_ID = new core_1.StringField('lastModifiedProxyUserId', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[legalEntityObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.LEGAL_ENTITY_OBJ_CODE = new core_1.StringField('legalEntity_obj_code', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[locationObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.LOCATION_OBJ_CODE = new core_1.StringField('location_obj_code', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[numberOpenings]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.NUMBER_OPENINGS = new core_1.BigNumberField('numberOpenings', JobRequisition, 'Edm.Decimal');
    /**
     * Static representation of the [[openingsFilled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.OPENINGS_FILLED = new core_1.BigNumberField('openingsFilled', JobRequisition, 'Edm.Int64');
    /**
     * Static representation of the [[overallScaleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.OVERALL_SCALE_NAME = new core_1.StringField('overallScaleName', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[parentJobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.PARENT_JOB_REQ_ID = new core_1.BigNumberField('parentJobReqId', JobRequisition, 'Edm.Int64');
    /**
     * Static representation of the [[positionNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.POSITION_NUMBER = new core_1.StringField('positionNumber', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[ratedApplicantCount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.RATED_APPLICANT_COUNT = new core_1.BigNumberField('ratedApplicantCount', JobRequisition, 'Edm.Int64');
    /**
     * Static representation of the [[restorecoordinatorTeamAdminDefaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.RESTORECOORDINATOR_TEAM_ADMIN_DEFAULTS = new core_1.BooleanField('restorecoordinatorTeamAdminDefaults', JobRequisition, 'Edm.Boolean');
    /**
     * Static representation of the [[restorehiringManagerTeamAdminDefaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.RESTOREHIRING_MANAGER_TEAM_ADMIN_DEFAULTS = new core_1.BooleanField('restorehiringManagerTeamAdminDefaults', JobRequisition, 'Edm.Boolean');
    /**
     * Static representation of the [[restorerecruiterTeamAdminDefaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.RESTORERECRUITER_TEAM_ADMIN_DEFAULTS = new core_1.BooleanField('restorerecruiterTeamAdminDefaults', JobRequisition, 'Edm.Boolean');
    /**
     * Static representation of the [[restoresecondRecruiterTeamAdminDefaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.RESTORESECOND_RECRUITER_TEAM_ADMIN_DEFAULTS = new core_1.BooleanField('restoresecondRecruiterTeamAdminDefaults', JobRequisition, 'Edm.Boolean');
    /**
     * Static representation of the [[restoresourcerTeamAdminDefaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.RESTORESOURCER_TEAM_ADMIN_DEFAULTS = new core_1.BooleanField('restoresourcerTeamAdminDefaults', JobRequisition, 'Edm.Boolean');
    /**
     * Static representation of the [[restorevTeamAdminDefaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.RESTOREV_TEAM_ADMIN_DEFAULTS = new core_1.BooleanField('restorevTeamAdminDefaults', JobRequisition, 'Edm.Boolean');
    /**
     * Static representation of the [[restorevpOfStaffingTeamAdminDefaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.RESTOREVP_OF_STAFFING_TEAM_ADMIN_DEFAULTS = new core_1.BooleanField('restorevpOfStaffingTeamAdminDefaults', JobRequisition, 'Edm.Boolean');
    /**
     * Static representation of the [[reverseScale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.REVERSE_SCALE = new core_1.StringField('reverseScale', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[salaryMax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.SALARY_MAX = new core_1.BigNumberField('salaryMax', JobRequisition, 'Edm.Decimal');
    /**
     * Static representation of the [[salaryMid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.SALARY_MID = new core_1.BigNumberField('salaryMid', JobRequisition, 'Edm.Decimal');
    /**
     * Static representation of the [[salaryMin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.SALARY_MIN = new core_1.BigNumberField('salaryMin', JobRequisition, 'Edm.Decimal');
    /**
     * Static representation of the [[statusSetId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.STATUS_SET_ID = new core_1.BigNumberField('statusSetId', JobRequisition, 'Edm.Int64');
    /**
     * Static representation of the [[templateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.TEMPLATE_ID = new core_1.BigNumberField('templateId', JobRequisition, 'Edm.Int64');
    /**
     * Static representation of the [[templateName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.TEMPLATE_NAME = new core_1.StringField('templateName', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[templateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.TEMPLATE_TYPE = new core_1.StringField('templateType', JobRequisition, 'Edm.String');
    /**
     * Static representation of the [[timeToFill]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.TIME_TO_FILL = new core_1.NumberField('timeToFill', JobRequisition, 'Edm.Double');
    /**
     * Static representation of the one-to-many navigation property [[approver]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.APPROVER = new core_1.Link('approver', JobRequisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[assessment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.ASSESSMENT = new core_1.Link('assessment', JobRequisition, JobRequisitionAssessment_1.JobRequisitionAssessment);
    /**
     * Static representation of the one-to-one navigation property [[businessUnitObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.BUSINESS_UNIT_OBJ = new core_1.OneToOneLink('businessUnit_obj', JobRequisition, FoBusinessUnit_1.FoBusinessUnit);
    /**
     * Static representation of the one-to-many navigation property [[competencies]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.COMPETENCIES = new core_1.Link('competencies', JobRequisition, RcmCompetency_1.RcmCompetency);
    /**
     * Static representation of the one-to-many navigation property [[coordinator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.COORDINATOR = new core_1.Link('coordinator', JobRequisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[coordinatorTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.COORDINATOR_TEAM = new core_1.Link('coordinatorTeam', JobRequisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[coordinatorTeamGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.COORDINATOR_TEAM_GROUP = new core_1.Link('coordinatorTeamGroup', JobRequisition, JobRequisitionGroupOperator_1.JobRequisitionGroupOperator);
    /**
     * Static representation of the one-to-one navigation property [[costCenterObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.COST_CENTER_OBJ = new core_1.OneToOneLink('costCenter_obj', JobRequisition, FoCostCenter_1.FoCostCenter);
    /**
     * Static representation of the one-to-many navigation property [[currentOwner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.CURRENT_OWNER = new core_1.Link('currentOwner', JobRequisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[custDuration]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.CUST_DURATION = new core_1.Link('custDuration', JobRequisition, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[departmentObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.DEPARTMENT_OBJ = new core_1.OneToOneLink('department_obj', JobRequisition, FoDepartment_1.FoDepartment);
    /**
     * Static representation of the one-to-one navigation property [[divisionObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.DIVISION_OBJ = new core_1.OneToOneLink('division_obj', JobRequisition, FoDivision_1.FoDivision);
    /**
     * Static representation of the one-to-many navigation property [[filter1]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.FILTER_1 = new core_1.Link('filter1', JobRequisition, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[filter3]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.FILTER_3 = new core_1.Link('filter3', JobRequisition, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[filter4]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.FILTER_4 = new core_1.Link('filter4', JobRequisition, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[hardstopStatus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.HARDSTOP_STATUS = new core_1.Link('hardstopStatus', JobRequisition, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[hiringManager]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.HIRING_MANAGER = new core_1.Link('hiringManager', JobRequisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[hiringManagerTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.HIRING_MANAGER_TEAM = new core_1.Link('hiringManagerTeam', JobRequisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[hiringManagerTeamGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.HIRING_MANAGER_TEAM_GROUP = new core_1.Link('hiringManagerTeamGroup', JobRequisition, JobRequisitionGroupOperator_1.JobRequisitionGroupOperator);
    /**
     * Static representation of the one-to-many navigation property [[interviewGuide]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.INTERVIEW_GUIDE = new core_1.Link('interviewGuide', JobRequisition, Attachment_1.Attachment);
    /**
     * Static representation of the one-to-many navigation property [[jobAnalyzerReportingData]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.JOB_ANALYZER_REPORTING_DATA = new core_1.Link('jobAnalyzerReportingData', JobRequisition, JobAnalyzerReportingData_1.JobAnalyzerReportingData);
    /**
     * Static representation of the one-to-many navigation property [[jobApplications]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.JOB_APPLICATIONS = new core_1.Link('jobApplications', JobRequisition, JobApplication_1.JobApplication);
    /**
     * Static representation of the one-to-one navigation property [[jobProfile]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.JOB_PROFILE = new core_1.OneToOneLink('jobProfile', JobRequisition, JobProfile_1.JobProfile);
    /**
     * Static representation of the one-to-many navigation property [[jobReqFwdCandidates]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.JOB_REQ_FWD_CANDIDATES = new core_1.Link('jobReqFwdCandidates', JobRequisition, JobReqFwdCandidates_1.JobReqFwdCandidates);
    /**
     * Static representation of the one-to-many navigation property [[jobReqLocale]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.JOB_REQ_LOCALE = new core_1.Link('jobReqLocale', JobRequisition, JobRequisitionLocale_1.JobRequisitionLocale);
    /**
     * Static representation of the one-to-one navigation property [[jobReqPermissionsNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.JOB_REQ_PERMISSIONS_NAV = new core_1.OneToOneLink('jobReqPermissionsNav', JobRequisition, JobRequisitionFieldControls_1.JobRequisitionFieldControls);
    /**
     * Static representation of the one-to-many navigation property [[jobReqPostings]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.JOB_REQ_POSTINGS = new core_1.Link('jobReqPostings', JobRequisition, JobRequisitionPosting_1.JobRequisitionPosting);
    /**
     * Static representation of the one-to-many navigation property [[jobReqScreeningQuestions]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.JOB_REQ_SCREENING_QUESTIONS = new core_1.Link('jobReqScreeningQuestions', JobRequisition, JobReqScreeningQuestion_1.JobReqScreeningQuestion);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', JobRequisition, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedProxyUserNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.LAST_MODIFIED_PROXY_USER_NAV = new core_1.OneToOneLink('lastModifiedProxyUserNav', JobRequisition, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[legalEntityObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.LEGAL_ENTITY_OBJ = new core_1.OneToOneLink('legalEntity_obj', JobRequisition, FoCompany_1.FoCompany);
    /**
     * Static representation of the one-to-many navigation property [[locationObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.LOCATION_OBJ = new core_1.Link('location_obj', JobRequisition, FoLocation_1.FoLocation);
    /**
     * Static representation of the one-to-many navigation property [[locationObjlist]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.LOCATION_OBJLIST = new core_1.Link('location_objlist', JobRequisition, JobReqFoLocation_1.JobReqFoLocation);
    /**
     * Static representation of the one-to-many navigation property [[mfield1]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.MFIELD_1 = new core_1.Link('mfield1', JobRequisition, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[mfield2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.MFIELD_2 = new core_1.Link('mfield2', JobRequisition, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[originator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.ORIGINATOR = new core_1.Link('originator', JobRequisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[questions]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.QUESTIONS = new core_1.Link('questions', JobRequisition, JobReqQuestion_1.JobReqQuestion);
    /**
     * Static representation of the one-to-many navigation property [[recruiter]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.RECRUITER = new core_1.Link('recruiter', JobRequisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[recruiterTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.RECRUITER_TEAM = new core_1.Link('recruiterTeam', JobRequisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[recruiterTeamGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.RECRUITER_TEAM_GROUP = new core_1.Link('recruiterTeamGroup', JobRequisition, JobRequisitionGroupOperator_1.JobRequisitionGroupOperator);
    /**
     * Static representation of the one-to-one navigation property [[routeMap]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.ROUTE_MAP = new core_1.OneToOneLink('routeMap', JobRequisition, FormRouteMap_1.FormRouteMap);
    /**
     * Static representation of the one-to-many navigation property [[secondRecruiter]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.SECOND_RECRUITER = new core_1.Link('secondRecruiter', JobRequisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[secondRecruiterTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.SECOND_RECRUITER_TEAM = new core_1.Link('secondRecruiterTeam', JobRequisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[secondRecruiterTeamGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.SECOND_RECRUITER_TEAM_GROUP = new core_1.Link('secondRecruiterTeamGroup', JobRequisition, JobRequisitionGroupOperator_1.JobRequisitionGroupOperator);
    /**
     * Static representation of the one-to-many navigation property [[sourcer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.SOURCER = new core_1.Link('sourcer', JobRequisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[sourcerTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.SOURCER_TEAM = new core_1.Link('sourcerTeam', JobRequisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[sourcerTeamGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.SOURCER_TEAM_GROUP = new core_1.Link('sourcerTeamGroup', JobRequisition, JobRequisitionGroupOperator_1.JobRequisitionGroupOperator);
    /**
     * Static representation of the one-to-many navigation property [[status]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.STATUS = new core_1.Link('status', JobRequisition, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[vTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.V_TEAM = new core_1.Link('vTeam', JobRequisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[vTeamGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.V_TEAM_GROUP = new core_1.Link('vTeamGroup', JobRequisition, JobRequisitionGroupOperator_1.JobRequisitionGroupOperator);
    /**
     * Static representation of the one-to-many navigation property [[vpOfStaffing]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.VP_OF_STAFFING = new core_1.Link('vpOfStaffing', JobRequisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[vpOfStaffingTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.VP_OF_STAFFING_TEAM = new core_1.Link('vpOfStaffingTeam', JobRequisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[vpOfStaffingTeamGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisition.VP_OF_STAFFING_TEAM_GROUP = new core_1.Link('vpOfStaffingTeamGroup', JobRequisition, JobRequisitionGroupOperator_1.JobRequisitionGroupOperator);
    /**
     * All fields of the JobRequisition entity.
     */
    JobRequisition._allFields = [
        JobRequisition.AGE,
        JobRequisition.APP_TEMPLATE_ID,
        JobRequisition.ASSESS_RATING_SCALE_NAME,
        JobRequisition.BUSINESS_UNIT_OBJ_CODE,
        JobRequisition.CANDIDATE_HIRED,
        JobRequisition.CANDIDATE_PROGRESS,
        JobRequisition.CLOSED_DATE_TIME,
        JobRequisition.CORPORATE_POSTING,
        JobRequisition.COST_CENTER_OBJ_CODE,
        JobRequisition.COUNTRY,
        JobRequisition.CREATED_DATE_TIME,
        JobRequisition.CURRENCY,
        JobRequisition.CUST_EMPLOYEE_CLASS,
        JobRequisition.CUST_FTE,
        JobRequisition.CUST_GLOBAL_JOB_TITLE,
        JobRequisition.CUST_HOURS_PER_WEEK,
        JobRequisition.CUST_INSTR_ASSESSMENTS,
        JobRequisition.CUST_INSTR_COUNTRY_FIELDS,
        JobRequisition.CUST_INSTR_FADV,
        JobRequisition.CUST_INSTR_JOB_POSTING,
        JobRequisition.CUST_INSTR_POS_MGMT,
        JobRequisition.CUST_INSTR_REQ_DETAILS,
        JobRequisition.CUST_INSTR_TEAM_DETAILS,
        JobRequisition.CUSTOM_COMMENTS,
        JobRequisition.DEFAULT_LANGUAGE,
        JobRequisition.DELETED,
        JobRequisition.DEPARTMENT_OBJ_CODE,
        JobRequisition.DIVISION_OBJ_CODE,
        JobRequisition.EEO_GROUP,
        JobRequisition.EEO_JOB_CAT,
        JobRequisition.ERP_AMOUNT,
        JobRequisition.FLSA,
        JobRequisition.FORM_DATA_ID,
        JobRequisition.FORM_DUE_DATE,
        JobRequisition.INSTR_INTERNAL_COMMENTS,
        JobRequisition.INT_END_DATE,
        JobRequisition.INT_START_DATE,
        JobRequisition.INTERNAL_STATUS,
        JobRequisition.INTR_POSTING,
        JobRequisition.INTRANET_POSTING,
        JobRequisition.IS_DRAFT,
        JobRequisition.JOB_CODE,
        JobRequisition.JOB_GRADE,
        JobRequisition.JOB_LEVEL,
        JobRequisition.JOB_REQ_GU_ID,
        JobRequisition.JOB_REQ_ID,
        JobRequisition.JOB_ROLE,
        JobRequisition.JOB_START_DATE,
        JobRequisition.LAST_MODIFIED_BY,
        JobRequisition.LAST_MODIFIED_DATE_TIME,
        JobRequisition.LAST_MODIFIED_PROXY_USER_ID,
        JobRequisition.LEGAL_ENTITY_OBJ_CODE,
        JobRequisition.LOCATION_OBJ_CODE,
        JobRequisition.NUMBER_OPENINGS,
        JobRequisition.OPENINGS_FILLED,
        JobRequisition.OVERALL_SCALE_NAME,
        JobRequisition.PARENT_JOB_REQ_ID,
        JobRequisition.POSITION_NUMBER,
        JobRequisition.RATED_APPLICANT_COUNT,
        JobRequisition.RESTORECOORDINATOR_TEAM_ADMIN_DEFAULTS,
        JobRequisition.RESTOREHIRING_MANAGER_TEAM_ADMIN_DEFAULTS,
        JobRequisition.RESTORERECRUITER_TEAM_ADMIN_DEFAULTS,
        JobRequisition.RESTORESECOND_RECRUITER_TEAM_ADMIN_DEFAULTS,
        JobRequisition.RESTORESOURCER_TEAM_ADMIN_DEFAULTS,
        JobRequisition.RESTOREV_TEAM_ADMIN_DEFAULTS,
        JobRequisition.RESTOREVP_OF_STAFFING_TEAM_ADMIN_DEFAULTS,
        JobRequisition.REVERSE_SCALE,
        JobRequisition.SALARY_MAX,
        JobRequisition.SALARY_MID,
        JobRequisition.SALARY_MIN,
        JobRequisition.STATUS_SET_ID,
        JobRequisition.TEMPLATE_ID,
        JobRequisition.TEMPLATE_NAME,
        JobRequisition.TEMPLATE_TYPE,
        JobRequisition.TIME_TO_FILL,
        JobRequisition.APPROVER,
        JobRequisition.ASSESSMENT,
        JobRequisition.BUSINESS_UNIT_OBJ,
        JobRequisition.COMPETENCIES,
        JobRequisition.COORDINATOR,
        JobRequisition.COORDINATOR_TEAM,
        JobRequisition.COORDINATOR_TEAM_GROUP,
        JobRequisition.COST_CENTER_OBJ,
        JobRequisition.CURRENT_OWNER,
        JobRequisition.CUST_DURATION,
        JobRequisition.DEPARTMENT_OBJ,
        JobRequisition.DIVISION_OBJ,
        JobRequisition.FILTER_1,
        JobRequisition.FILTER_3,
        JobRequisition.FILTER_4,
        JobRequisition.HARDSTOP_STATUS,
        JobRequisition.HIRING_MANAGER,
        JobRequisition.HIRING_MANAGER_TEAM,
        JobRequisition.HIRING_MANAGER_TEAM_GROUP,
        JobRequisition.INTERVIEW_GUIDE,
        JobRequisition.JOB_ANALYZER_REPORTING_DATA,
        JobRequisition.JOB_APPLICATIONS,
        JobRequisition.JOB_PROFILE,
        JobRequisition.JOB_REQ_FWD_CANDIDATES,
        JobRequisition.JOB_REQ_LOCALE,
        JobRequisition.JOB_REQ_PERMISSIONS_NAV,
        JobRequisition.JOB_REQ_POSTINGS,
        JobRequisition.JOB_REQ_SCREENING_QUESTIONS,
        JobRequisition.LAST_MODIFIED_BY_NAV,
        JobRequisition.LAST_MODIFIED_PROXY_USER_NAV,
        JobRequisition.LEGAL_ENTITY_OBJ,
        JobRequisition.LOCATION_OBJ,
        JobRequisition.LOCATION_OBJLIST,
        JobRequisition.MFIELD_1,
        JobRequisition.MFIELD_2,
        JobRequisition.ORIGINATOR,
        JobRequisition.QUESTIONS,
        JobRequisition.RECRUITER,
        JobRequisition.RECRUITER_TEAM,
        JobRequisition.RECRUITER_TEAM_GROUP,
        JobRequisition.ROUTE_MAP,
        JobRequisition.SECOND_RECRUITER,
        JobRequisition.SECOND_RECRUITER_TEAM,
        JobRequisition.SECOND_RECRUITER_TEAM_GROUP,
        JobRequisition.SOURCER,
        JobRequisition.SOURCER_TEAM,
        JobRequisition.SOURCER_TEAM_GROUP,
        JobRequisition.STATUS,
        JobRequisition.V_TEAM,
        JobRequisition.V_TEAM_GROUP,
        JobRequisition.VP_OF_STAFFING,
        JobRequisition.VP_OF_STAFFING_TEAM,
        JobRequisition.VP_OF_STAFFING_TEAM_GROUP
    ];
    /**
     * All fields selector.
     */
    JobRequisition.ALL_FIELDS = new core_1.AllFields('*', JobRequisition);
    /**
     * All key fields of the JobRequisition entity.
     */
    JobRequisition._keyFields = [JobRequisition.JOB_REQ_ID];
    /**
     * Mapping of all key field names to the respective static field property JobRequisition.
     */
    JobRequisition._keys = JobRequisition._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobRequisition = exports.JobRequisition || (exports.JobRequisition = {}));
exports.JobRequisition = JobRequisition;
//# sourceMappingURL=JobRequisition.js.map