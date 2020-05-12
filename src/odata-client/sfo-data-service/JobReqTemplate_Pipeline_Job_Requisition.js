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
var JobReqTemplate_Pipeline_Job_RequisitionRequestBuilder_1 = require("./JobReqTemplate_Pipeline_Job_RequisitionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobReqTemplate_Pipeline_Job_Requisition" of service "SFOData".
 */
var JobReqTemplate_Pipeline_Job_Requisition = /** @class */ (function (_super) {
    __extends(JobReqTemplate_Pipeline_Job_Requisition, _super);
    function JobReqTemplate_Pipeline_Job_Requisition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobReqTemplate_Pipeline_Job_Requisition`.
     * @returns A builder that constructs instances of entity type `JobReqTemplate_Pipeline_Job_Requisition`.
     */
    JobReqTemplate_Pipeline_Job_Requisition.builder = function () {
        return core_1.Entity.entityBuilder(JobReqTemplate_Pipeline_Job_Requisition);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobReqTemplate_Pipeline_Job_Requisition` entity type.
     * @returns A `JobReqTemplate_Pipeline_Job_Requisition` request builder.
     */
    JobReqTemplate_Pipeline_Job_Requisition.requestBuilder = function () {
        return new JobReqTemplate_Pipeline_Job_RequisitionRequestBuilder_1.JobReqTemplate_Pipeline_Job_RequisitionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobReqTemplate_Pipeline_Job_Requisition`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobReqTemplate_Pipeline_Job_Requisition`.
     */
    JobReqTemplate_Pipeline_Job_Requisition.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobReqTemplate_Pipeline_Job_Requisition);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobReqTemplate_Pipeline_Job_Requisition.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobReqTemplate_Pipeline_Job_Requisition.
     */
    JobReqTemplate_Pipeline_Job_Requisition._entityName = 'JobReqTemplate_Pipeline_Job_Requisition';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobReqTemplate_Pipeline_Job_Requisition.
     */
    JobReqTemplate_Pipeline_Job_Requisition._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobReqTemplate_Pipeline_Job_Requisition._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobReqTemplate_Pipeline_Job_Requisition;
}(core_1.Entity));
exports.JobReqTemplate_Pipeline_Job_Requisition = JobReqTemplate_Pipeline_Job_Requisition;
var FoBusinessUnit_1 = require("./FoBusinessUnit");
var JobRequisitionOperator_1 = require("./JobRequisitionOperator");
var FoCostCenter_1 = require("./FoCostCenter");
var FoDepartment_1 = require("./FoDepartment");
var FoDivision_1 = require("./FoDivision");
var PicklistOption_1 = require("./PicklistOption");
var Attachment_1 = require("./Attachment");
var FoCompany_1 = require("./FoCompany");
var FoLocation_1 = require("./FoLocation");
(function (JobReqTemplate_Pipeline_Job_Requisition) {
    /**
     * Static representation of the [[assessment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.ASSESSMENT = new core_1.StringField('assessment', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[candidateHired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.CANDIDATE_HIRED = new core_1.BigNumberField('candidateHired', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.Decimal');
    /**
     * Static representation of the [[coordinatorEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.COORDINATOR_EMAIL = new core_1.StringField('coordinatorEmail', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[coordinatorFax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.COORDINATOR_FAX = new core_1.StringField('coordinatorFax', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[coordinatorPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.COORDINATOR_PHONE = new core_1.StringField('coordinatorPhone', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[corporatePosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.CORPORATE_POSTING = new core_1.BooleanField('corporatePosting', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.Boolean');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.COUNTRY = new core_1.StringField('country', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[custInstrAssessments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.CUST_INSTR_ASSESSMENTS = new core_1.StringField('custInstrAssessments', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[custInstrJobPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.CUST_INSTR_JOB_POSTING = new core_1.StringField('custInstrJobPosting', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[custInstrPosMgmt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.CUST_INSTR_POS_MGMT = new core_1.StringField('custInstrPosMgmt', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[custInstrReqDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.CUST_INSTR_REQ_DETAILS = new core_1.StringField('custInstrReqDetails', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[custInstrTeamDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.CUST_INSTR_TEAM_DETAILS = new core_1.StringField('custInstrTeamDetails', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[customComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.CUSTOM_COMMENTS = new core_1.StringField('customComments', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[defaultLanguage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.DEFAULT_LANGUAGE = new core_1.StringField('defaultLanguage', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[end]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.END = new core_1.DateField('end', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[extEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.EXT_END_DATE = new core_1.DateField('extEndDate', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[extJobDescFooter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.EXT_JOB_DESC_FOOTER = new core_1.StringField('extJobDescFooter', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[extJobDescHeader]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.EXT_JOB_DESC_HEADER = new core_1.StringField('extJobDescHeader', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[extListingLayout]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.EXT_LISTING_LAYOUT = new core_1.StringField('extListingLayout', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[extStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.EXT_START_DATE = new core_1.DateField('extStartDate', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[extTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.EXT_TITLE = new core_1.StringField('extTitle', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[externalPrivatePosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.EXTERNAL_PRIVATE_POSTING = new core_1.BooleanField('externalPrivatePosting', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.Boolean');
    /**
     * Static representation of the [[formDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.FORM_DUE_DATE = new core_1.DateField('formDueDate', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[hiringManagerEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.HIRING_MANAGER_EMAIL = new core_1.StringField('hiringManagerEmail', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[hiringManagerFax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.HIRING_MANAGER_FAX = new core_1.StringField('hiringManagerFax', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[hiringManagerPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.HIRING_MANAGER_PHONE = new core_1.StringField('hiringManagerPhone', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.ID = new core_1.StringField('id', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[instrInternalComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.INSTR_INTERNAL_COMMENTS = new core_1.StringField('instrInternalComments', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[intEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.INT_END_DATE = new core_1.DateField('intEndDate', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[intJobDescFooter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.INT_JOB_DESC_FOOTER = new core_1.StringField('intJobDescFooter', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[intJobDescHeader]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.INT_JOB_DESC_HEADER = new core_1.StringField('intJobDescHeader', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[intStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.INT_START_DATE = new core_1.DateField('intStartDate', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[intrPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.INTR_POSTING = new core_1.StringField('intrPosting', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[intranetPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.INTRANET_POSTING = new core_1.BooleanField('intranetPosting', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.Boolean');
    /**
     * Static representation of the [[intranetPrivatePosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.INTRANET_PRIVATE_POSTING = new core_1.BooleanField('intranetPrivatePosting', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.Boolean');
    /**
     * Static representation of the [[jobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.JOB_CODE = new core_1.StringField('jobCode', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[jobPostLanguage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.JOB_POST_LANGUAGE = new core_1.StringField('jobPostLanguage', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[jobRole]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.JOB_ROLE = new core_1.StringField('jobRole', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[jobStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.JOB_START_DATE = new core_1.DateField('jobStartDate', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[listingLayout]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.LISTING_LAYOUT = new core_1.StringField('listingLayout', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[numberOpenings]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.NUMBER_OPENINGS = new core_1.BigNumberField('numberOpenings', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.Decimal');
    /**
     * Static representation of the [[positionNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.POSITION_NUMBER = new core_1.StringField('positionNumber', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[questions]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.QUESTIONS = new core_1.StringField('questions', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[recruiterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.RECRUITER_EMAIL = new core_1.StringField('recruiterEmail', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[recruiterFax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.RECRUITER_FAX = new core_1.StringField('recruiterFax', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[recruiterPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.RECRUITER_PHONE = new core_1.StringField('recruiterPhone', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[secondRecruiterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.SECOND_RECRUITER_EMAIL = new core_1.StringField('secondRecruiterEmail', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[secondRecruiterFax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.SECOND_RECRUITER_FAX = new core_1.StringField('secondRecruiterFax', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[secondRecruiterPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.SECOND_RECRUITER_PHONE = new core_1.StringField('secondRecruiterPhone', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[sourcerEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.SOURCER_EMAIL = new core_1.StringField('sourcerEmail', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[sourcerFax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.SOURCER_FAX = new core_1.StringField('sourcerFax', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[sourcerPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.SOURCER_PHONE = new core_1.StringField('sourcerPhone', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[start]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.START = new core_1.DateField('start', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[templateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.TEMPLATE_ID = new core_1.BigNumberField('templateId', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.Int64');
    /**
     * Static representation of the [[title]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.TITLE = new core_1.StringField('title', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[vpOfStaffingEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.VP_OF_STAFFING_EMAIL = new core_1.StringField('vpOfStaffingEmail', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[vpOfStaffingFax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.VP_OF_STAFFING_FAX = new core_1.StringField('vpOfStaffingFax', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[vpOfStaffingPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.VP_OF_STAFFING_PHONE = new core_1.StringField('vpOfStaffingPhone', JobReqTemplate_Pipeline_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[businessUnitObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.BUSINESS_UNIT_OBJ = new core_1.OneToOneLink('businessUnit_obj', JobReqTemplate_Pipeline_Job_Requisition, FoBusinessUnit_1.FoBusinessUnit);
    /**
     * Static representation of the one-to-many navigation property [[coordinatorName]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.COORDINATOR_NAME = new core_1.Link('coordinatorName', JobReqTemplate_Pipeline_Job_Requisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[coordinatorTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.COORDINATOR_TEAM = new core_1.Link('coordinatorTeam', JobReqTemplate_Pipeline_Job_Requisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-one navigation property [[costCenterObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.COST_CENTER_OBJ = new core_1.OneToOneLink('costCenter_obj', JobReqTemplate_Pipeline_Job_Requisition, FoCostCenter_1.FoCostCenter);
    /**
     * Static representation of the one-to-one navigation property [[departmentObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.DEPARTMENT_OBJ = new core_1.OneToOneLink('department_obj', JobReqTemplate_Pipeline_Job_Requisition, FoDepartment_1.FoDepartment);
    /**
     * Static representation of the one-to-one navigation property [[divisionObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.DIVISION_OBJ = new core_1.OneToOneLink('division_obj', JobReqTemplate_Pipeline_Job_Requisition, FoDivision_1.FoDivision);
    /**
     * Static representation of the one-to-one navigation property [[filter1]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.FILTER_1 = new core_1.OneToOneLink('filter1', JobReqTemplate_Pipeline_Job_Requisition, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[filter3]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.FILTER_3 = new core_1.OneToOneLink('filter3', JobReqTemplate_Pipeline_Job_Requisition, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[filter4]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.FILTER_4 = new core_1.OneToOneLink('filter4', JobReqTemplate_Pipeline_Job_Requisition, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[hardstopStatus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.HARDSTOP_STATUS = new core_1.OneToOneLink('hardstopStatus', JobReqTemplate_Pipeline_Job_Requisition, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[hiringManagerName]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.HIRING_MANAGER_NAME = new core_1.Link('hiringManagerName', JobReqTemplate_Pipeline_Job_Requisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[hiringManagerTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.HIRING_MANAGER_TEAM = new core_1.Link('hiringManagerTeam', JobReqTemplate_Pipeline_Job_Requisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[interviewGuide]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.INTERVIEW_GUIDE = new core_1.Link('interviewGuide', JobReqTemplate_Pipeline_Job_Requisition, Attachment_1.Attachment);
    /**
     * Static representation of the one-to-one navigation property [[legalEntityObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.LEGAL_ENTITY_OBJ = new core_1.OneToOneLink('legalEntity_obj', JobReqTemplate_Pipeline_Job_Requisition, FoCompany_1.FoCompany);
    /**
     * Static representation of the one-to-many navigation property [[locationObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.LOCATION_OBJ = new core_1.Link('location_obj', JobReqTemplate_Pipeline_Job_Requisition, FoLocation_1.FoLocation);
    /**
     * Static representation of the one-to-one navigation property [[mfield1]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.MFIELD_1 = new core_1.OneToOneLink('mfield1', JobReqTemplate_Pipeline_Job_Requisition, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[mfield2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.MFIELD_2 = new core_1.OneToOneLink('mfield2', JobReqTemplate_Pipeline_Job_Requisition, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[recruiterName]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.RECRUITER_NAME = new core_1.Link('recruiterName', JobReqTemplate_Pipeline_Job_Requisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[recruiterTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.RECRUITER_TEAM = new core_1.Link('recruiterTeam', JobReqTemplate_Pipeline_Job_Requisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[secondRecruiterName]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.SECOND_RECRUITER_NAME = new core_1.Link('secondRecruiterName', JobReqTemplate_Pipeline_Job_Requisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[secondRecruiterTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.SECOND_RECRUITER_TEAM = new core_1.Link('secondRecruiterTeam', JobReqTemplate_Pipeline_Job_Requisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[sourcerName]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.SOURCER_NAME = new core_1.Link('sourcerName', JobReqTemplate_Pipeline_Job_Requisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[sourcerTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.SOURCER_TEAM = new core_1.Link('sourcerTeam', JobReqTemplate_Pipeline_Job_Requisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-one navigation property [[status]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.STATUS = new core_1.OneToOneLink('status', JobReqTemplate_Pipeline_Job_Requisition, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[vTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.V_TEAM = new core_1.Link('vTeam', JobReqTemplate_Pipeline_Job_Requisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[vpOfStaffingName]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.VP_OF_STAFFING_NAME = new core_1.Link('vpOfStaffingName', JobReqTemplate_Pipeline_Job_Requisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[vpOfStaffingTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Pipeline_Job_Requisition.VP_OF_STAFFING_TEAM = new core_1.Link('vpOfStaffingTeam', JobReqTemplate_Pipeline_Job_Requisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * All fields of the JobReqTemplate_Pipeline_Job_Requisition entity.
     */
    JobReqTemplate_Pipeline_Job_Requisition._allFields = [
        JobReqTemplate_Pipeline_Job_Requisition.ASSESSMENT,
        JobReqTemplate_Pipeline_Job_Requisition.CANDIDATE_HIRED,
        JobReqTemplate_Pipeline_Job_Requisition.COORDINATOR_EMAIL,
        JobReqTemplate_Pipeline_Job_Requisition.COORDINATOR_FAX,
        JobReqTemplate_Pipeline_Job_Requisition.COORDINATOR_PHONE,
        JobReqTemplate_Pipeline_Job_Requisition.CORPORATE_POSTING,
        JobReqTemplate_Pipeline_Job_Requisition.COUNTRY,
        JobReqTemplate_Pipeline_Job_Requisition.CUST_INSTR_ASSESSMENTS,
        JobReqTemplate_Pipeline_Job_Requisition.CUST_INSTR_JOB_POSTING,
        JobReqTemplate_Pipeline_Job_Requisition.CUST_INSTR_POS_MGMT,
        JobReqTemplate_Pipeline_Job_Requisition.CUST_INSTR_REQ_DETAILS,
        JobReqTemplate_Pipeline_Job_Requisition.CUST_INSTR_TEAM_DETAILS,
        JobReqTemplate_Pipeline_Job_Requisition.CUSTOM_COMMENTS,
        JobReqTemplate_Pipeline_Job_Requisition.DEFAULT_LANGUAGE,
        JobReqTemplate_Pipeline_Job_Requisition.END,
        JobReqTemplate_Pipeline_Job_Requisition.EXT_END_DATE,
        JobReqTemplate_Pipeline_Job_Requisition.EXT_JOB_DESC_FOOTER,
        JobReqTemplate_Pipeline_Job_Requisition.EXT_JOB_DESC_HEADER,
        JobReqTemplate_Pipeline_Job_Requisition.EXT_LISTING_LAYOUT,
        JobReqTemplate_Pipeline_Job_Requisition.EXT_START_DATE,
        JobReqTemplate_Pipeline_Job_Requisition.EXT_TITLE,
        JobReqTemplate_Pipeline_Job_Requisition.EXTERNAL_PRIVATE_POSTING,
        JobReqTemplate_Pipeline_Job_Requisition.FORM_DUE_DATE,
        JobReqTemplate_Pipeline_Job_Requisition.HIRING_MANAGER_EMAIL,
        JobReqTemplate_Pipeline_Job_Requisition.HIRING_MANAGER_FAX,
        JobReqTemplate_Pipeline_Job_Requisition.HIRING_MANAGER_PHONE,
        JobReqTemplate_Pipeline_Job_Requisition.ID,
        JobReqTemplate_Pipeline_Job_Requisition.INSTR_INTERNAL_COMMENTS,
        JobReqTemplate_Pipeline_Job_Requisition.INT_END_DATE,
        JobReqTemplate_Pipeline_Job_Requisition.INT_JOB_DESC_FOOTER,
        JobReqTemplate_Pipeline_Job_Requisition.INT_JOB_DESC_HEADER,
        JobReqTemplate_Pipeline_Job_Requisition.INT_START_DATE,
        JobReqTemplate_Pipeline_Job_Requisition.INTR_POSTING,
        JobReqTemplate_Pipeline_Job_Requisition.INTRANET_POSTING,
        JobReqTemplate_Pipeline_Job_Requisition.INTRANET_PRIVATE_POSTING,
        JobReqTemplate_Pipeline_Job_Requisition.JOB_CODE,
        JobReqTemplate_Pipeline_Job_Requisition.JOB_POST_LANGUAGE,
        JobReqTemplate_Pipeline_Job_Requisition.JOB_ROLE,
        JobReqTemplate_Pipeline_Job_Requisition.JOB_START_DATE,
        JobReqTemplate_Pipeline_Job_Requisition.LISTING_LAYOUT,
        JobReqTemplate_Pipeline_Job_Requisition.NUMBER_OPENINGS,
        JobReqTemplate_Pipeline_Job_Requisition.POSITION_NUMBER,
        JobReqTemplate_Pipeline_Job_Requisition.QUESTIONS,
        JobReqTemplate_Pipeline_Job_Requisition.RECRUITER_EMAIL,
        JobReqTemplate_Pipeline_Job_Requisition.RECRUITER_FAX,
        JobReqTemplate_Pipeline_Job_Requisition.RECRUITER_PHONE,
        JobReqTemplate_Pipeline_Job_Requisition.SECOND_RECRUITER_EMAIL,
        JobReqTemplate_Pipeline_Job_Requisition.SECOND_RECRUITER_FAX,
        JobReqTemplate_Pipeline_Job_Requisition.SECOND_RECRUITER_PHONE,
        JobReqTemplate_Pipeline_Job_Requisition.SOURCER_EMAIL,
        JobReqTemplate_Pipeline_Job_Requisition.SOURCER_FAX,
        JobReqTemplate_Pipeline_Job_Requisition.SOURCER_PHONE,
        JobReqTemplate_Pipeline_Job_Requisition.START,
        JobReqTemplate_Pipeline_Job_Requisition.TEMPLATE_ID,
        JobReqTemplate_Pipeline_Job_Requisition.TITLE,
        JobReqTemplate_Pipeline_Job_Requisition.VP_OF_STAFFING_EMAIL,
        JobReqTemplate_Pipeline_Job_Requisition.VP_OF_STAFFING_FAX,
        JobReqTemplate_Pipeline_Job_Requisition.VP_OF_STAFFING_PHONE,
        JobReqTemplate_Pipeline_Job_Requisition.BUSINESS_UNIT_OBJ,
        JobReqTemplate_Pipeline_Job_Requisition.COORDINATOR_NAME,
        JobReqTemplate_Pipeline_Job_Requisition.COORDINATOR_TEAM,
        JobReqTemplate_Pipeline_Job_Requisition.COST_CENTER_OBJ,
        JobReqTemplate_Pipeline_Job_Requisition.DEPARTMENT_OBJ,
        JobReqTemplate_Pipeline_Job_Requisition.DIVISION_OBJ,
        JobReqTemplate_Pipeline_Job_Requisition.FILTER_1,
        JobReqTemplate_Pipeline_Job_Requisition.FILTER_3,
        JobReqTemplate_Pipeline_Job_Requisition.FILTER_4,
        JobReqTemplate_Pipeline_Job_Requisition.HARDSTOP_STATUS,
        JobReqTemplate_Pipeline_Job_Requisition.HIRING_MANAGER_NAME,
        JobReqTemplate_Pipeline_Job_Requisition.HIRING_MANAGER_TEAM,
        JobReqTemplate_Pipeline_Job_Requisition.INTERVIEW_GUIDE,
        JobReqTemplate_Pipeline_Job_Requisition.LEGAL_ENTITY_OBJ,
        JobReqTemplate_Pipeline_Job_Requisition.LOCATION_OBJ,
        JobReqTemplate_Pipeline_Job_Requisition.MFIELD_1,
        JobReqTemplate_Pipeline_Job_Requisition.MFIELD_2,
        JobReqTemplate_Pipeline_Job_Requisition.RECRUITER_NAME,
        JobReqTemplate_Pipeline_Job_Requisition.RECRUITER_TEAM,
        JobReqTemplate_Pipeline_Job_Requisition.SECOND_RECRUITER_NAME,
        JobReqTemplate_Pipeline_Job_Requisition.SECOND_RECRUITER_TEAM,
        JobReqTemplate_Pipeline_Job_Requisition.SOURCER_NAME,
        JobReqTemplate_Pipeline_Job_Requisition.SOURCER_TEAM,
        JobReqTemplate_Pipeline_Job_Requisition.STATUS,
        JobReqTemplate_Pipeline_Job_Requisition.V_TEAM,
        JobReqTemplate_Pipeline_Job_Requisition.VP_OF_STAFFING_NAME,
        JobReqTemplate_Pipeline_Job_Requisition.VP_OF_STAFFING_TEAM
    ];
    /**
     * All fields selector.
     */
    JobReqTemplate_Pipeline_Job_Requisition.ALL_FIELDS = new core_1.AllFields('*', JobReqTemplate_Pipeline_Job_Requisition);
    /**
     * All key fields of the JobReqTemplate_Pipeline_Job_Requisition entity.
     */
    JobReqTemplate_Pipeline_Job_Requisition._keyFields = [JobReqTemplate_Pipeline_Job_Requisition.TEMPLATE_ID];
    /**
     * Mapping of all key field names to the respective static field property JobReqTemplate_Pipeline_Job_Requisition.
     */
    JobReqTemplate_Pipeline_Job_Requisition._keys = JobReqTemplate_Pipeline_Job_Requisition._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobReqTemplate_Pipeline_Job_Requisition = exports.JobReqTemplate_Pipeline_Job_Requisition || (exports.JobReqTemplate_Pipeline_Job_Requisition = {}));
exports.JobReqTemplate_Pipeline_Job_Requisition = JobReqTemplate_Pipeline_Job_Requisition;
//# sourceMappingURL=JobReqTemplate_Pipeline_Job_Requisition.js.map