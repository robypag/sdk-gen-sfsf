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
var JobRequisitionFieldControlsRequestBuilder_1 = require("./JobRequisitionFieldControlsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobRequisitionFieldControls" of service "SFOData".
 */
var JobRequisitionFieldControls = /** @class */ (function (_super) {
    __extends(JobRequisitionFieldControls, _super);
    function JobRequisitionFieldControls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobRequisitionFieldControls`.
     * @returns A builder that constructs instances of entity type `JobRequisitionFieldControls`.
     */
    JobRequisitionFieldControls.builder = function () {
        return core_1.Entity.entityBuilder(JobRequisitionFieldControls);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobRequisitionFieldControls` entity type.
     * @returns A `JobRequisitionFieldControls` request builder.
     */
    JobRequisitionFieldControls.requestBuilder = function () {
        return new JobRequisitionFieldControlsRequestBuilder_1.JobRequisitionFieldControlsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobRequisitionFieldControls`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobRequisitionFieldControls`.
     */
    JobRequisitionFieldControls.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobRequisitionFieldControls);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobRequisitionFieldControls.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobRequisitionFieldControls.
     */
    JobRequisitionFieldControls._entityName = 'JobRequisitionFieldControls';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobRequisitionFieldControls.
     */
    JobRequisitionFieldControls._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobRequisitionFieldControls._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobRequisitionFieldControls;
}(core_1.Entity));
exports.JobRequisitionFieldControls = JobRequisitionFieldControls;
(function (JobRequisitionFieldControls) {
    /**
     * Static representation of the [[age]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.AGE = new core_1.NumberField('age', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[appTemplateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.APP_TEMPLATE_ID = new core_1.NumberField('appTemplateId', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[approver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.APPROVER = new core_1.NumberField('approver', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[assessRatingScaleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.ASSESS_RATING_SCALE_NAME = new core_1.NumberField('assessRatingScaleName', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[assessment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.ASSESSMENT = new core_1.NumberField('assessment', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[businessUnitObj]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.BUSINESS_UNIT_OBJ = new core_1.NumberField('businessUnit_obj', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[businessUnitObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.BUSINESS_UNIT_OBJ_CODE = new core_1.NumberField('businessUnit_obj_code', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[candidateHired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.CANDIDATE_HIRED = new core_1.NumberField('candidateHired', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[candidateProgress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.CANDIDATE_PROGRESS = new core_1.NumberField('candidateProgress', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[closedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.CLOSED_DATE_TIME = new core_1.NumberField('closedDateTime', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[competencies]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.COMPETENCIES = new core_1.NumberField('competencies', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[coordinator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.COORDINATOR = new core_1.NumberField('coordinator', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[coordinatorTeam]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.COORDINATOR_TEAM = new core_1.NumberField('coordinatorTeam', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[coordinatorTeamGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.COORDINATOR_TEAM_GROUP = new core_1.NumberField('coordinatorTeamGroup', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[corporatePosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.CORPORATE_POSTING = new core_1.NumberField('corporatePosting', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[costCenterObj]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.COST_CENTER_OBJ = new core_1.NumberField('costCenter_obj', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[costCenterObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.COST_CENTER_OBJ_CODE = new core_1.NumberField('costCenter_obj_code', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.COUNTRY = new core_1.NumberField('country', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.CREATED_DATE_TIME = new core_1.NumberField('createdDateTime', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.CURRENCY = new core_1.NumberField('currency', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[currentOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.CURRENT_OWNER = new core_1.NumberField('currentOwner', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[custDuration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.CUST_DURATION = new core_1.NumberField('custDuration', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[custEmployeeClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.CUST_EMPLOYEE_CLASS = new core_1.NumberField('custEmployeeClass', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[custFte]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.CUST_FTE = new core_1.NumberField('custFTE', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[custGlobalJobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.CUST_GLOBAL_JOB_TITLE = new core_1.NumberField('custGlobalJobTitle', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[custHoursPerWeek]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.CUST_HOURS_PER_WEEK = new core_1.NumberField('custHoursPerWeek', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[custInstrAssessments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.CUST_INSTR_ASSESSMENTS = new core_1.NumberField('custInstrAssessments', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[custInstrCountryFields]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.CUST_INSTR_COUNTRY_FIELDS = new core_1.NumberField('custInstrCountryFields', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[custInstrFadv]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.CUST_INSTR_FADV = new core_1.NumberField('custInstrFADV', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[custInstrJobPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.CUST_INSTR_JOB_POSTING = new core_1.NumberField('custInstrJobPosting', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[custInstrPosMgmt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.CUST_INSTR_POS_MGMT = new core_1.NumberField('custInstrPosMgmt', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[custInstrReqDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.CUST_INSTR_REQ_DETAILS = new core_1.NumberField('custInstrReqDetails', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[custInstrTeamDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.CUST_INSTR_TEAM_DETAILS = new core_1.NumberField('custInstrTeamDetails', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[customComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.CUSTOM_COMMENTS = new core_1.NumberField('customComments', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[defaultLanguage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.DEFAULT_LANGUAGE = new core_1.NumberField('defaultLanguage', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[deleted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.DELETED = new core_1.NumberField('deleted', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[departmentObj]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.DEPARTMENT_OBJ = new core_1.NumberField('department_obj', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[departmentObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.DEPARTMENT_OBJ_CODE = new core_1.NumberField('department_obj_code', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[divisionObj]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.DIVISION_OBJ = new core_1.NumberField('division_obj', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[divisionObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.DIVISION_OBJ_CODE = new core_1.NumberField('division_obj_code', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[eeoGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.EEO_GROUP = new core_1.NumberField('eeoGroup', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[eeoJobCat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.EEO_JOB_CAT = new core_1.NumberField('eeoJobCat', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[erpAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.ERP_AMOUNT = new core_1.NumberField('erpAmount', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[filter1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.FILTER_1 = new core_1.NumberField('filter1', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[filter3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.FILTER_3 = new core_1.NumberField('filter3', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[filter4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.FILTER_4 = new core_1.NumberField('filter4', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[flsa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.FLSA = new core_1.NumberField('flsa', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.FORM_DATA_ID = new core_1.NumberField('formDataId', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[formDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.FORM_DUE_DATE = new core_1.NumberField('formDueDate', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[hardstopStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.HARDSTOP_STATUS = new core_1.NumberField('hardstopStatus', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[hiringManager]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.HIRING_MANAGER = new core_1.NumberField('hiringManager', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[hiringManagerTeam]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.HIRING_MANAGER_TEAM = new core_1.NumberField('hiringManagerTeam', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[hiringManagerTeamGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.HIRING_MANAGER_TEAM_GROUP = new core_1.NumberField('hiringManagerTeamGroup', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[instrInternalComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.INSTR_INTERNAL_COMMENTS = new core_1.NumberField('instrInternalComments', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[intEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.INT_END_DATE = new core_1.NumberField('intEndDate', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[intStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.INT_START_DATE = new core_1.NumberField('intStartDate', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[internalStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.INTERNAL_STATUS = new core_1.NumberField('internalStatus', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[interviewGuide]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.INTERVIEW_GUIDE = new core_1.NumberField('interviewGuide', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[intrPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.INTR_POSTING = new core_1.NumberField('intrPosting', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[intranetPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.INTRANET_POSTING = new core_1.NumberField('intranetPosting', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[isDraft]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.IS_DRAFT = new core_1.NumberField('isDraft', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobAnalyzerReportingData]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.JOB_ANALYZER_REPORTING_DATA = new core_1.NumberField('jobAnalyzerReportingData', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobApplications]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.JOB_APPLICATIONS = new core_1.NumberField('jobApplications', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.JOB_CODE = new core_1.NumberField('jobCode', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobGrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.JOB_GRADE = new core_1.NumberField('jobGrade', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.JOB_LEVEL = new core_1.NumberField('jobLevel', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobProfile]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.JOB_PROFILE = new core_1.NumberField('jobProfile', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobReqFwdCandidates]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.JOB_REQ_FWD_CANDIDATES = new core_1.NumberField('jobReqFwdCandidates', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobReqGuId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.JOB_REQ_GU_ID = new core_1.NumberField('jobReqGUId', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.JOB_REQ_ID = new core_1.NumberField('jobReqId', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobReqLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.JOB_REQ_LOCALE = new core_1.NumberField('jobReqLocale', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobReqPermissionsNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.JOB_REQ_PERMISSIONS_NAV = new core_1.NumberField('jobReqPermissionsNav', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobReqPostings]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.JOB_REQ_POSTINGS = new core_1.NumberField('jobReqPostings', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobReqScreeningQuestions]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.JOB_REQ_SCREENING_QUESTIONS = new core_1.NumberField('jobReqScreeningQuestions', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobRole]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.JOB_ROLE = new core_1.NumberField('jobRole', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.JOB_START_DATE = new core_1.NumberField('jobStartDate', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.LAST_MODIFIED_BY = new core_1.NumberField('lastModifiedBy', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[lastModifiedByNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.LAST_MODIFIED_BY_NAV = new core_1.NumberField('lastModifiedByNav', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.LAST_MODIFIED_DATE_TIME = new core_1.NumberField('lastModifiedDateTime', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[lastModifiedProxyUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.LAST_MODIFIED_PROXY_USER_ID = new core_1.NumberField('lastModifiedProxyUserId', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[lastModifiedProxyUserNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.LAST_MODIFIED_PROXY_USER_NAV = new core_1.NumberField('lastModifiedProxyUserNav', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[legalEntityObj]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.LEGAL_ENTITY_OBJ = new core_1.NumberField('legalEntity_obj', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[legalEntityObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.LEGAL_ENTITY_OBJ_CODE = new core_1.NumberField('legalEntity_obj_code', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[locationObj]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.LOCATION_OBJ = new core_1.NumberField('location_obj', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[locationObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.LOCATION_OBJ_CODE = new core_1.NumberField('location_obj_code', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[locationObjlist]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.LOCATION_OBJLIST = new core_1.NumberField('location_objlist', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[mfield1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.MFIELD_1 = new core_1.NumberField('mfield1', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[mfield2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.MFIELD_2 = new core_1.NumberField('mfield2', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[numberOpenings]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.NUMBER_OPENINGS = new core_1.NumberField('numberOpenings', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[openingsFilled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.OPENINGS_FILLED = new core_1.NumberField('openingsFilled', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[originator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.ORIGINATOR = new core_1.NumberField('originator', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[overallScaleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.OVERALL_SCALE_NAME = new core_1.NumberField('overallScaleName', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[parentJobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.PARENT_JOB_REQ_ID = new core_1.NumberField('parentJobReqId', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[positionNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.POSITION_NUMBER = new core_1.NumberField('positionNumber', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[questions]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.QUESTIONS = new core_1.NumberField('questions', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[ratedApplicantCount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.RATED_APPLICANT_COUNT = new core_1.NumberField('ratedApplicantCount', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[recruiter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.RECRUITER = new core_1.NumberField('recruiter', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[recruiterTeam]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.RECRUITER_TEAM = new core_1.NumberField('recruiterTeam', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[recruiterTeamGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.RECRUITER_TEAM_GROUP = new core_1.NumberField('recruiterTeamGroup', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[restorecoordinatorTeamAdminDefaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.RESTORECOORDINATOR_TEAM_ADMIN_DEFAULTS = new core_1.NumberField('restorecoordinatorTeamAdminDefaults', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[restorehiringManagerTeamAdminDefaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.RESTOREHIRING_MANAGER_TEAM_ADMIN_DEFAULTS = new core_1.NumberField('restorehiringManagerTeamAdminDefaults', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[restorerecruiterTeamAdminDefaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.RESTORERECRUITER_TEAM_ADMIN_DEFAULTS = new core_1.NumberField('restorerecruiterTeamAdminDefaults', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[restoresecondRecruiterTeamAdminDefaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.RESTORESECOND_RECRUITER_TEAM_ADMIN_DEFAULTS = new core_1.NumberField('restoresecondRecruiterTeamAdminDefaults', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[restoresourcerTeamAdminDefaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.RESTORESOURCER_TEAM_ADMIN_DEFAULTS = new core_1.NumberField('restoresourcerTeamAdminDefaults', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[restorevTeamAdminDefaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.RESTOREV_TEAM_ADMIN_DEFAULTS = new core_1.NumberField('restorevTeamAdminDefaults', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[restorevpOfStaffingTeamAdminDefaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.RESTOREVP_OF_STAFFING_TEAM_ADMIN_DEFAULTS = new core_1.NumberField('restorevpOfStaffingTeamAdminDefaults', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[reverseScale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.REVERSE_SCALE = new core_1.NumberField('reverseScale', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[routeMap]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.ROUTE_MAP = new core_1.NumberField('routeMap', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[salaryMax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.SALARY_MAX = new core_1.NumberField('salaryMax', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[salaryMid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.SALARY_MID = new core_1.NumberField('salaryMid', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[salaryMin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.SALARY_MIN = new core_1.NumberField('salaryMin', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[secondRecruiter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.SECOND_RECRUITER = new core_1.NumberField('secondRecruiter', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[secondRecruiterTeam]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.SECOND_RECRUITER_TEAM = new core_1.NumberField('secondRecruiterTeam', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[secondRecruiterTeamGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.SECOND_RECRUITER_TEAM_GROUP = new core_1.NumberField('secondRecruiterTeamGroup', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[sourcer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.SOURCER = new core_1.NumberField('sourcer', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[sourcerTeam]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.SOURCER_TEAM = new core_1.NumberField('sourcerTeam', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[sourcerTeamGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.SOURCER_TEAM_GROUP = new core_1.NumberField('sourcerTeamGroup', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.STATUS = new core_1.NumberField('status', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[statusSetId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.STATUS_SET_ID = new core_1.NumberField('statusSetId', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[templateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.TEMPLATE_ID = new core_1.NumberField('templateId', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[templateName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.TEMPLATE_NAME = new core_1.NumberField('templateName', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[templateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.TEMPLATE_TYPE = new core_1.NumberField('templateType', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[timeToFill]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.TIME_TO_FILL = new core_1.NumberField('timeToFill', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[vTeam]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.V_TEAM = new core_1.NumberField('vTeam', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[vTeamGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.V_TEAM_GROUP = new core_1.NumberField('vTeamGroup', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[vpOfStaffing]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.VP_OF_STAFFING = new core_1.NumberField('vpOfStaffing', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[vpOfStaffingTeam]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.VP_OF_STAFFING_TEAM = new core_1.NumberField('vpOfStaffingTeam', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[vpOfStaffingTeamGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionFieldControls.VP_OF_STAFFING_TEAM_GROUP = new core_1.NumberField('vpOfStaffingTeamGroup', JobRequisitionFieldControls, 'Edm.Byte');
    /**
     * All fields of the JobRequisitionFieldControls entity.
     */
    JobRequisitionFieldControls._allFields = [
        JobRequisitionFieldControls.AGE,
        JobRequisitionFieldControls.APP_TEMPLATE_ID,
        JobRequisitionFieldControls.APPROVER,
        JobRequisitionFieldControls.ASSESS_RATING_SCALE_NAME,
        JobRequisitionFieldControls.ASSESSMENT,
        JobRequisitionFieldControls.BUSINESS_UNIT_OBJ,
        JobRequisitionFieldControls.BUSINESS_UNIT_OBJ_CODE,
        JobRequisitionFieldControls.CANDIDATE_HIRED,
        JobRequisitionFieldControls.CANDIDATE_PROGRESS,
        JobRequisitionFieldControls.CLOSED_DATE_TIME,
        JobRequisitionFieldControls.COMPETENCIES,
        JobRequisitionFieldControls.COORDINATOR,
        JobRequisitionFieldControls.COORDINATOR_TEAM,
        JobRequisitionFieldControls.COORDINATOR_TEAM_GROUP,
        JobRequisitionFieldControls.CORPORATE_POSTING,
        JobRequisitionFieldControls.COST_CENTER_OBJ,
        JobRequisitionFieldControls.COST_CENTER_OBJ_CODE,
        JobRequisitionFieldControls.COUNTRY,
        JobRequisitionFieldControls.CREATED_DATE_TIME,
        JobRequisitionFieldControls.CURRENCY,
        JobRequisitionFieldControls.CURRENT_OWNER,
        JobRequisitionFieldControls.CUST_DURATION,
        JobRequisitionFieldControls.CUST_EMPLOYEE_CLASS,
        JobRequisitionFieldControls.CUST_FTE,
        JobRequisitionFieldControls.CUST_GLOBAL_JOB_TITLE,
        JobRequisitionFieldControls.CUST_HOURS_PER_WEEK,
        JobRequisitionFieldControls.CUST_INSTR_ASSESSMENTS,
        JobRequisitionFieldControls.CUST_INSTR_COUNTRY_FIELDS,
        JobRequisitionFieldControls.CUST_INSTR_FADV,
        JobRequisitionFieldControls.CUST_INSTR_JOB_POSTING,
        JobRequisitionFieldControls.CUST_INSTR_POS_MGMT,
        JobRequisitionFieldControls.CUST_INSTR_REQ_DETAILS,
        JobRequisitionFieldControls.CUST_INSTR_TEAM_DETAILS,
        JobRequisitionFieldControls.CUSTOM_COMMENTS,
        JobRequisitionFieldControls.DEFAULT_LANGUAGE,
        JobRequisitionFieldControls.DELETED,
        JobRequisitionFieldControls.DEPARTMENT_OBJ,
        JobRequisitionFieldControls.DEPARTMENT_OBJ_CODE,
        JobRequisitionFieldControls.DIVISION_OBJ,
        JobRequisitionFieldControls.DIVISION_OBJ_CODE,
        JobRequisitionFieldControls.EEO_GROUP,
        JobRequisitionFieldControls.EEO_JOB_CAT,
        JobRequisitionFieldControls.ERP_AMOUNT,
        JobRequisitionFieldControls.FILTER_1,
        JobRequisitionFieldControls.FILTER_3,
        JobRequisitionFieldControls.FILTER_4,
        JobRequisitionFieldControls.FLSA,
        JobRequisitionFieldControls.FORM_DATA_ID,
        JobRequisitionFieldControls.FORM_DUE_DATE,
        JobRequisitionFieldControls.HARDSTOP_STATUS,
        JobRequisitionFieldControls.HIRING_MANAGER,
        JobRequisitionFieldControls.HIRING_MANAGER_TEAM,
        JobRequisitionFieldControls.HIRING_MANAGER_TEAM_GROUP,
        JobRequisitionFieldControls.INSTR_INTERNAL_COMMENTS,
        JobRequisitionFieldControls.INT_END_DATE,
        JobRequisitionFieldControls.INT_START_DATE,
        JobRequisitionFieldControls.INTERNAL_STATUS,
        JobRequisitionFieldControls.INTERVIEW_GUIDE,
        JobRequisitionFieldControls.INTR_POSTING,
        JobRequisitionFieldControls.INTRANET_POSTING,
        JobRequisitionFieldControls.IS_DRAFT,
        JobRequisitionFieldControls.JOB_ANALYZER_REPORTING_DATA,
        JobRequisitionFieldControls.JOB_APPLICATIONS,
        JobRequisitionFieldControls.JOB_CODE,
        JobRequisitionFieldControls.JOB_GRADE,
        JobRequisitionFieldControls.JOB_LEVEL,
        JobRequisitionFieldControls.JOB_PROFILE,
        JobRequisitionFieldControls.JOB_REQ_FWD_CANDIDATES,
        JobRequisitionFieldControls.JOB_REQ_GU_ID,
        JobRequisitionFieldControls.JOB_REQ_ID,
        JobRequisitionFieldControls.JOB_REQ_LOCALE,
        JobRequisitionFieldControls.JOB_REQ_PERMISSIONS_NAV,
        JobRequisitionFieldControls.JOB_REQ_POSTINGS,
        JobRequisitionFieldControls.JOB_REQ_SCREENING_QUESTIONS,
        JobRequisitionFieldControls.JOB_ROLE,
        JobRequisitionFieldControls.JOB_START_DATE,
        JobRequisitionFieldControls.LAST_MODIFIED_BY,
        JobRequisitionFieldControls.LAST_MODIFIED_BY_NAV,
        JobRequisitionFieldControls.LAST_MODIFIED_DATE_TIME,
        JobRequisitionFieldControls.LAST_MODIFIED_PROXY_USER_ID,
        JobRequisitionFieldControls.LAST_MODIFIED_PROXY_USER_NAV,
        JobRequisitionFieldControls.LEGAL_ENTITY_OBJ,
        JobRequisitionFieldControls.LEGAL_ENTITY_OBJ_CODE,
        JobRequisitionFieldControls.LOCATION_OBJ,
        JobRequisitionFieldControls.LOCATION_OBJ_CODE,
        JobRequisitionFieldControls.LOCATION_OBJLIST,
        JobRequisitionFieldControls.MFIELD_1,
        JobRequisitionFieldControls.MFIELD_2,
        JobRequisitionFieldControls.NUMBER_OPENINGS,
        JobRequisitionFieldControls.OPENINGS_FILLED,
        JobRequisitionFieldControls.ORIGINATOR,
        JobRequisitionFieldControls.OVERALL_SCALE_NAME,
        JobRequisitionFieldControls.PARENT_JOB_REQ_ID,
        JobRequisitionFieldControls.POSITION_NUMBER,
        JobRequisitionFieldControls.QUESTIONS,
        JobRequisitionFieldControls.RATED_APPLICANT_COUNT,
        JobRequisitionFieldControls.RECRUITER,
        JobRequisitionFieldControls.RECRUITER_TEAM,
        JobRequisitionFieldControls.RECRUITER_TEAM_GROUP,
        JobRequisitionFieldControls.RESTORECOORDINATOR_TEAM_ADMIN_DEFAULTS,
        JobRequisitionFieldControls.RESTOREHIRING_MANAGER_TEAM_ADMIN_DEFAULTS,
        JobRequisitionFieldControls.RESTORERECRUITER_TEAM_ADMIN_DEFAULTS,
        JobRequisitionFieldControls.RESTORESECOND_RECRUITER_TEAM_ADMIN_DEFAULTS,
        JobRequisitionFieldControls.RESTORESOURCER_TEAM_ADMIN_DEFAULTS,
        JobRequisitionFieldControls.RESTOREV_TEAM_ADMIN_DEFAULTS,
        JobRequisitionFieldControls.RESTOREVP_OF_STAFFING_TEAM_ADMIN_DEFAULTS,
        JobRequisitionFieldControls.REVERSE_SCALE,
        JobRequisitionFieldControls.ROUTE_MAP,
        JobRequisitionFieldControls.SALARY_MAX,
        JobRequisitionFieldControls.SALARY_MID,
        JobRequisitionFieldControls.SALARY_MIN,
        JobRequisitionFieldControls.SECOND_RECRUITER,
        JobRequisitionFieldControls.SECOND_RECRUITER_TEAM,
        JobRequisitionFieldControls.SECOND_RECRUITER_TEAM_GROUP,
        JobRequisitionFieldControls.SOURCER,
        JobRequisitionFieldControls.SOURCER_TEAM,
        JobRequisitionFieldControls.SOURCER_TEAM_GROUP,
        JobRequisitionFieldControls.STATUS,
        JobRequisitionFieldControls.STATUS_SET_ID,
        JobRequisitionFieldControls.TEMPLATE_ID,
        JobRequisitionFieldControls.TEMPLATE_NAME,
        JobRequisitionFieldControls.TEMPLATE_TYPE,
        JobRequisitionFieldControls.TIME_TO_FILL,
        JobRequisitionFieldControls.V_TEAM,
        JobRequisitionFieldControls.V_TEAM_GROUP,
        JobRequisitionFieldControls.VP_OF_STAFFING,
        JobRequisitionFieldControls.VP_OF_STAFFING_TEAM,
        JobRequisitionFieldControls.VP_OF_STAFFING_TEAM_GROUP
    ];
    /**
     * All fields selector.
     */
    JobRequisitionFieldControls.ALL_FIELDS = new core_1.AllFields('*', JobRequisitionFieldControls);
    /**
     * All key fields of the JobRequisitionFieldControls entity.
     */
    JobRequisitionFieldControls._keyFields = [JobRequisitionFieldControls.JOB_REQ_ID];
    /**
     * Mapping of all key field names to the respective static field property JobRequisitionFieldControls.
     */
    JobRequisitionFieldControls._keys = JobRequisitionFieldControls._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobRequisitionFieldControls = exports.JobRequisitionFieldControls || (exports.JobRequisitionFieldControls = {}));
exports.JobRequisitionFieldControls = JobRequisitionFieldControls;
//# sourceMappingURL=JobRequisitionFieldControls.js.map