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
var JobReqTemplate_Standard_Job_RequisitionRequestBuilder_1 = require("./JobReqTemplate_Standard_Job_RequisitionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobReqTemplate_Standard_Job_Requisition" of service "SFOData".
 */
var JobReqTemplate_Standard_Job_Requisition = /** @class */ (function (_super) {
    __extends(JobReqTemplate_Standard_Job_Requisition, _super);
    function JobReqTemplate_Standard_Job_Requisition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobReqTemplate_Standard_Job_Requisition`.
     * @returns A builder that constructs instances of entity type `JobReqTemplate_Standard_Job_Requisition`.
     */
    JobReqTemplate_Standard_Job_Requisition.builder = function () {
        return core_1.Entity.entityBuilder(JobReqTemplate_Standard_Job_Requisition);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobReqTemplate_Standard_Job_Requisition` entity type.
     * @returns A `JobReqTemplate_Standard_Job_Requisition` request builder.
     */
    JobReqTemplate_Standard_Job_Requisition.requestBuilder = function () {
        return new JobReqTemplate_Standard_Job_RequisitionRequestBuilder_1.JobReqTemplate_Standard_Job_RequisitionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobReqTemplate_Standard_Job_Requisition`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobReqTemplate_Standard_Job_Requisition`.
     */
    JobReqTemplate_Standard_Job_Requisition.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobReqTemplate_Standard_Job_Requisition);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobReqTemplate_Standard_Job_Requisition.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobReqTemplate_Standard_Job_Requisition.
     */
    JobReqTemplate_Standard_Job_Requisition._entityName = 'JobReqTemplate_Standard_Job_Requisition';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobReqTemplate_Standard_Job_Requisition.
     */
    JobReqTemplate_Standard_Job_Requisition._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobReqTemplate_Standard_Job_Requisition._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobReqTemplate_Standard_Job_Requisition;
}(core_1.Entity));
exports.JobReqTemplate_Standard_Job_Requisition = JobReqTemplate_Standard_Job_Requisition;
var FoBusinessUnit_1 = require("./FoBusinessUnit");
var JobRequisitionOperator_1 = require("./JobRequisitionOperator");
var FoCostCenter_1 = require("./FoCostCenter");
var PicklistOption_1 = require("./PicklistOption");
var FoDepartment_1 = require("./FoDepartment");
var FoDivision_1 = require("./FoDivision");
var Attachment_1 = require("./Attachment");
var FoCompany_1 = require("./FoCompany");
var FoLocation_1 = require("./FoLocation");
(function (JobReqTemplate_Standard_Job_Requisition) {
    /**
     * Static representation of the [[agencyPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.AGENCY_POSTING = new core_1.BooleanField('agencyPosting', JobReqTemplate_Standard_Job_Requisition, 'Edm.Boolean');
    /**
     * Static representation of the [[assessment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.ASSESSMENT = new core_1.StringField('assessment', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[businessUnitObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.BUSINESS_UNIT_OBJ_CODE = new core_1.StringField('businessUnit_obj_code', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[candidateHired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.CANDIDATE_HIRED = new core_1.BigNumberField('candidateHired', JobReqTemplate_Standard_Job_Requisition, 'Edm.Decimal');
    /**
     * Static representation of the [[coordinatorEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.COORDINATOR_EMAIL = new core_1.StringField('coordinatorEmail', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[coordinatorFax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.COORDINATOR_FAX = new core_1.StringField('coordinatorFax', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[coordinatorPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.COORDINATOR_PHONE = new core_1.StringField('coordinatorPhone', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[corporatePosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.CORPORATE_POSTING = new core_1.BooleanField('corporatePosting', JobReqTemplate_Standard_Job_Requisition, 'Edm.Boolean');
    /**
     * Static representation of the [[costCenterObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.COST_CENTER_OBJ_CODE = new core_1.StringField('costCenter_obj_code', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.COUNTRY = new core_1.StringField('country', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.CURRENCY = new core_1.StringField('currency', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[custEmployeeClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.CUST_EMPLOYEE_CLASS = new core_1.StringField('custEmployeeClass', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[custFte]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.CUST_FTE = new core_1.StringField('custFTE', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[custGlobalJobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.CUST_GLOBAL_JOB_TITLE = new core_1.StringField('custGlobalJobTitle', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[custHoursPerWeek]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.CUST_HOURS_PER_WEEK = new core_1.StringField('custHoursPerWeek', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[custInstrAssessments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.CUST_INSTR_ASSESSMENTS = new core_1.StringField('custInstrAssessments', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[custInstrCountryFields]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.CUST_INSTR_COUNTRY_FIELDS = new core_1.StringField('custInstrCountryFields', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[custInstrFadv]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.CUST_INSTR_FADV = new core_1.StringField('custInstrFADV', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[custInstrJobPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.CUST_INSTR_JOB_POSTING = new core_1.StringField('custInstrJobPosting', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[custInstrPosMgmt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.CUST_INSTR_POS_MGMT = new core_1.StringField('custInstrPosMgmt', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[custInstrReqDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.CUST_INSTR_REQ_DETAILS = new core_1.StringField('custInstrReqDetails', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[custInstrTeamDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.CUST_INSTR_TEAM_DETAILS = new core_1.StringField('custInstrTeamDetails', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[customComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.CUSTOM_COMMENTS = new core_1.StringField('customComments', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[defaultLanguage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.DEFAULT_LANGUAGE = new core_1.StringField('defaultLanguage', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[departmentObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.DEPARTMENT_OBJ_CODE = new core_1.StringField('department_obj_code', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[divisionObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.DIVISION_OBJ_CODE = new core_1.StringField('division_obj_code', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[eeoGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.EEO_GROUP = new core_1.StringField('eeoGroup', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[eeoJobCat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.EEO_JOB_CAT = new core_1.StringField('eeoJobCat', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[end]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.END = new core_1.DateField('end', JobReqTemplate_Standard_Job_Requisition, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[erpAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.ERP_AMOUNT = new core_1.BigNumberField('erpAmount', JobReqTemplate_Standard_Job_Requisition, 'Edm.Decimal');
    /**
     * Static representation of the [[extEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.EXT_END_DATE = new core_1.DateField('extEndDate', JobReqTemplate_Standard_Job_Requisition, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[extJobDescFooter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.EXT_JOB_DESC_FOOTER = new core_1.StringField('extJobDescFooter', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[extJobDescHeader]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.EXT_JOB_DESC_HEADER = new core_1.StringField('extJobDescHeader', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[extListingLayout]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.EXT_LISTING_LAYOUT = new core_1.StringField('extListingLayout', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[extStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.EXT_START_DATE = new core_1.DateField('extStartDate', JobReqTemplate_Standard_Job_Requisition, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[extTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.EXT_TITLE = new core_1.StringField('extTitle', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[externalPrivatePosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.EXTERNAL_PRIVATE_POSTING = new core_1.BooleanField('externalPrivatePosting', JobReqTemplate_Standard_Job_Requisition, 'Edm.Boolean');
    /**
     * Static representation of the [[fadvAccountPackage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.FADV_ACCOUNT_PACKAGE = new core_1.StringField('fadvAccountPackage', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[flsa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.FLSA = new core_1.StringField('flsa', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[formDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.FORM_DUE_DATE = new core_1.DateField('formDueDate', JobReqTemplate_Standard_Job_Requisition, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[hiringManagerEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.HIRING_MANAGER_EMAIL = new core_1.StringField('hiringManagerEmail', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[hiringManagerFax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.HIRING_MANAGER_FAX = new core_1.StringField('hiringManagerFax', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[hiringManagerPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.HIRING_MANAGER_PHONE = new core_1.StringField('hiringManagerPhone', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.ID = new core_1.StringField('id', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[instrInternalComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.INSTR_INTERNAL_COMMENTS = new core_1.StringField('instrInternalComments', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[intEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.INT_END_DATE = new core_1.DateField('intEndDate', JobReqTemplate_Standard_Job_Requisition, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[intJobDescFooter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.INT_JOB_DESC_FOOTER = new core_1.StringField('intJobDescFooter', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[intJobDescHeader]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.INT_JOB_DESC_HEADER = new core_1.StringField('intJobDescHeader', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[intStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.INT_START_DATE = new core_1.DateField('intStartDate', JobReqTemplate_Standard_Job_Requisition, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[intrPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.INTR_POSTING = new core_1.StringField('intrPosting', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[intranetPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.INTRANET_POSTING = new core_1.BooleanField('intranetPosting', JobReqTemplate_Standard_Job_Requisition, 'Edm.Boolean');
    /**
     * Static representation of the [[intranetPrivatePosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.INTRANET_PRIVATE_POSTING = new core_1.BooleanField('intranetPrivatePosting', JobReqTemplate_Standard_Job_Requisition, 'Edm.Boolean');
    /**
     * Static representation of the [[jobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.JOB_CODE = new core_1.StringField('jobCode', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[jobGrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.JOB_GRADE = new core_1.StringField('jobGrade', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[jobLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.JOB_LEVEL = new core_1.StringField('jobLevel', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[jobPostLanguage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.JOB_POST_LANGUAGE = new core_1.StringField('jobPostLanguage', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[jobRole]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.JOB_ROLE = new core_1.StringField('jobRole', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[jobStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.JOB_START_DATE = new core_1.DateField('jobStartDate', JobReqTemplate_Standard_Job_Requisition, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[legalEntityObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.LEGAL_ENTITY_OBJ_CODE = new core_1.StringField('legalEntity_obj_code', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[listingLayout]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.LISTING_LAYOUT = new core_1.StringField('listingLayout', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[locationObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.LOCATION_OBJ_CODE = new core_1.StringField('location_obj_code', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[numberOpenings]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.NUMBER_OPENINGS = new core_1.BigNumberField('numberOpenings', JobReqTemplate_Standard_Job_Requisition, 'Edm.Decimal');
    /**
     * Static representation of the [[positionNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.POSITION_NUMBER = new core_1.StringField('positionNumber', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[questions]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.QUESTIONS = new core_1.StringField('questions', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[recruiterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.RECRUITER_EMAIL = new core_1.StringField('recruiterEmail', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[recruiterFax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.RECRUITER_FAX = new core_1.StringField('recruiterFax', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[recruiterPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.RECRUITER_PHONE = new core_1.StringField('recruiterPhone', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[salaryMax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.SALARY_MAX = new core_1.BigNumberField('salaryMax', JobReqTemplate_Standard_Job_Requisition, 'Edm.Decimal');
    /**
     * Static representation of the [[salaryMid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.SALARY_MID = new core_1.BigNumberField('salaryMid', JobReqTemplate_Standard_Job_Requisition, 'Edm.Decimal');
    /**
     * Static representation of the [[salaryMin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.SALARY_MIN = new core_1.BigNumberField('salaryMin', JobReqTemplate_Standard_Job_Requisition, 'Edm.Decimal');
    /**
     * Static representation of the [[secondRecruiterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.SECOND_RECRUITER_EMAIL = new core_1.StringField('secondRecruiterEmail', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[secondRecruiterFax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.SECOND_RECRUITER_FAX = new core_1.StringField('secondRecruiterFax', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[secondRecruiterPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.SECOND_RECRUITER_PHONE = new core_1.StringField('secondRecruiterPhone', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[sourcerEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.SOURCER_EMAIL = new core_1.StringField('sourcerEmail', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[sourcerFax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.SOURCER_FAX = new core_1.StringField('sourcerFax', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[sourcerPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.SOURCER_PHONE = new core_1.StringField('sourcerPhone', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[start]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.START = new core_1.DateField('start', JobReqTemplate_Standard_Job_Requisition, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[templateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.TEMPLATE_ID = new core_1.BigNumberField('templateId', JobReqTemplate_Standard_Job_Requisition, 'Edm.Int64');
    /**
     * Static representation of the [[title]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.TITLE = new core_1.StringField('title', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[vpOfStaffingEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.VP_OF_STAFFING_EMAIL = new core_1.StringField('vpOfStaffingEmail', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[vpOfStaffingFax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.VP_OF_STAFFING_FAX = new core_1.StringField('vpOfStaffingFax', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the [[vpOfStaffingPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.VP_OF_STAFFING_PHONE = new core_1.StringField('vpOfStaffingPhone', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[businessUnitObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.BUSINESS_UNIT_OBJ = new core_1.OneToOneLink('businessUnit_obj', JobReqTemplate_Standard_Job_Requisition, FoBusinessUnit_1.FoBusinessUnit);
    /**
     * Static representation of the one-to-many navigation property [[coordinatorName]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.COORDINATOR_NAME = new core_1.Link('coordinatorName', JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[coordinatorTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.COORDINATOR_TEAM = new core_1.Link('coordinatorTeam', JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-one navigation property [[costCenterObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.COST_CENTER_OBJ = new core_1.OneToOneLink('costCenter_obj', JobReqTemplate_Standard_Job_Requisition, FoCostCenter_1.FoCostCenter);
    /**
     * Static representation of the one-to-one navigation property [[custDuration]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.CUST_DURATION = new core_1.OneToOneLink('custDuration', JobReqTemplate_Standard_Job_Requisition, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[departmentObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.DEPARTMENT_OBJ = new core_1.OneToOneLink('department_obj', JobReqTemplate_Standard_Job_Requisition, FoDepartment_1.FoDepartment);
    /**
     * Static representation of the one-to-one navigation property [[divisionObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.DIVISION_OBJ = new core_1.OneToOneLink('division_obj', JobReqTemplate_Standard_Job_Requisition, FoDivision_1.FoDivision);
    /**
     * Static representation of the one-to-one navigation property [[filter1]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.FILTER_1 = new core_1.OneToOneLink('filter1', JobReqTemplate_Standard_Job_Requisition, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[filter3]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.FILTER_3 = new core_1.OneToOneLink('filter3', JobReqTemplate_Standard_Job_Requisition, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[filter4]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.FILTER_4 = new core_1.OneToOneLink('filter4', JobReqTemplate_Standard_Job_Requisition, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[hardstopStatus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.HARDSTOP_STATUS = new core_1.OneToOneLink('hardstopStatus', JobReqTemplate_Standard_Job_Requisition, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[hiringManagerName]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.HIRING_MANAGER_NAME = new core_1.Link('hiringManagerName', JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[hiringManagerTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.HIRING_MANAGER_TEAM = new core_1.Link('hiringManagerTeam', JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[interviewGuide]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.INTERVIEW_GUIDE = new core_1.Link('interviewGuide', JobReqTemplate_Standard_Job_Requisition, Attachment_1.Attachment);
    /**
     * Static representation of the one-to-one navigation property [[legalEntityObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.LEGAL_ENTITY_OBJ = new core_1.OneToOneLink('legalEntity_obj', JobReqTemplate_Standard_Job_Requisition, FoCompany_1.FoCompany);
    /**
     * Static representation of the one-to-many navigation property [[locationObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.LOCATION_OBJ = new core_1.Link('location_obj', JobReqTemplate_Standard_Job_Requisition, FoLocation_1.FoLocation);
    /**
     * Static representation of the one-to-one navigation property [[mfield1]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.MFIELD_1 = new core_1.OneToOneLink('mfield1', JobReqTemplate_Standard_Job_Requisition, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[mfield2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.MFIELD_2 = new core_1.OneToOneLink('mfield2', JobReqTemplate_Standard_Job_Requisition, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[recruiterName]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.RECRUITER_NAME = new core_1.Link('recruiterName', JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[recruiterTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.RECRUITER_TEAM = new core_1.Link('recruiterTeam', JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[secondRecruiterName]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.SECOND_RECRUITER_NAME = new core_1.Link('secondRecruiterName', JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[secondRecruiterTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.SECOND_RECRUITER_TEAM = new core_1.Link('secondRecruiterTeam', JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[sourcerName]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.SOURCER_NAME = new core_1.Link('sourcerName', JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[sourcerTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.SOURCER_TEAM = new core_1.Link('sourcerTeam', JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-one navigation property [[status]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.STATUS = new core_1.OneToOneLink('status', JobReqTemplate_Standard_Job_Requisition, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[vTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.V_TEAM = new core_1.Link('vTeam', JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[vpOfStaffingName]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.VP_OF_STAFFING_NAME = new core_1.Link('vpOfStaffingName', JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[vpOfStaffingTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqTemplate_Standard_Job_Requisition.VP_OF_STAFFING_TEAM = new core_1.Link('vpOfStaffingTeam', JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * All fields of the JobReqTemplate_Standard_Job_Requisition entity.
     */
    JobReqTemplate_Standard_Job_Requisition._allFields = [
        JobReqTemplate_Standard_Job_Requisition.AGENCY_POSTING,
        JobReqTemplate_Standard_Job_Requisition.ASSESSMENT,
        JobReqTemplate_Standard_Job_Requisition.BUSINESS_UNIT_OBJ_CODE,
        JobReqTemplate_Standard_Job_Requisition.CANDIDATE_HIRED,
        JobReqTemplate_Standard_Job_Requisition.COORDINATOR_EMAIL,
        JobReqTemplate_Standard_Job_Requisition.COORDINATOR_FAX,
        JobReqTemplate_Standard_Job_Requisition.COORDINATOR_PHONE,
        JobReqTemplate_Standard_Job_Requisition.CORPORATE_POSTING,
        JobReqTemplate_Standard_Job_Requisition.COST_CENTER_OBJ_CODE,
        JobReqTemplate_Standard_Job_Requisition.COUNTRY,
        JobReqTemplate_Standard_Job_Requisition.CURRENCY,
        JobReqTemplate_Standard_Job_Requisition.CUST_EMPLOYEE_CLASS,
        JobReqTemplate_Standard_Job_Requisition.CUST_FTE,
        JobReqTemplate_Standard_Job_Requisition.CUST_GLOBAL_JOB_TITLE,
        JobReqTemplate_Standard_Job_Requisition.CUST_HOURS_PER_WEEK,
        JobReqTemplate_Standard_Job_Requisition.CUST_INSTR_ASSESSMENTS,
        JobReqTemplate_Standard_Job_Requisition.CUST_INSTR_COUNTRY_FIELDS,
        JobReqTemplate_Standard_Job_Requisition.CUST_INSTR_FADV,
        JobReqTemplate_Standard_Job_Requisition.CUST_INSTR_JOB_POSTING,
        JobReqTemplate_Standard_Job_Requisition.CUST_INSTR_POS_MGMT,
        JobReqTemplate_Standard_Job_Requisition.CUST_INSTR_REQ_DETAILS,
        JobReqTemplate_Standard_Job_Requisition.CUST_INSTR_TEAM_DETAILS,
        JobReqTemplate_Standard_Job_Requisition.CUSTOM_COMMENTS,
        JobReqTemplate_Standard_Job_Requisition.DEFAULT_LANGUAGE,
        JobReqTemplate_Standard_Job_Requisition.DEPARTMENT_OBJ_CODE,
        JobReqTemplate_Standard_Job_Requisition.DIVISION_OBJ_CODE,
        JobReqTemplate_Standard_Job_Requisition.EEO_GROUP,
        JobReqTemplate_Standard_Job_Requisition.EEO_JOB_CAT,
        JobReqTemplate_Standard_Job_Requisition.END,
        JobReqTemplate_Standard_Job_Requisition.ERP_AMOUNT,
        JobReqTemplate_Standard_Job_Requisition.EXT_END_DATE,
        JobReqTemplate_Standard_Job_Requisition.EXT_JOB_DESC_FOOTER,
        JobReqTemplate_Standard_Job_Requisition.EXT_JOB_DESC_HEADER,
        JobReqTemplate_Standard_Job_Requisition.EXT_LISTING_LAYOUT,
        JobReqTemplate_Standard_Job_Requisition.EXT_START_DATE,
        JobReqTemplate_Standard_Job_Requisition.EXT_TITLE,
        JobReqTemplate_Standard_Job_Requisition.EXTERNAL_PRIVATE_POSTING,
        JobReqTemplate_Standard_Job_Requisition.FADV_ACCOUNT_PACKAGE,
        JobReqTemplate_Standard_Job_Requisition.FLSA,
        JobReqTemplate_Standard_Job_Requisition.FORM_DUE_DATE,
        JobReqTemplate_Standard_Job_Requisition.HIRING_MANAGER_EMAIL,
        JobReqTemplate_Standard_Job_Requisition.HIRING_MANAGER_FAX,
        JobReqTemplate_Standard_Job_Requisition.HIRING_MANAGER_PHONE,
        JobReqTemplate_Standard_Job_Requisition.ID,
        JobReqTemplate_Standard_Job_Requisition.INSTR_INTERNAL_COMMENTS,
        JobReqTemplate_Standard_Job_Requisition.INT_END_DATE,
        JobReqTemplate_Standard_Job_Requisition.INT_JOB_DESC_FOOTER,
        JobReqTemplate_Standard_Job_Requisition.INT_JOB_DESC_HEADER,
        JobReqTemplate_Standard_Job_Requisition.INT_START_DATE,
        JobReqTemplate_Standard_Job_Requisition.INTR_POSTING,
        JobReqTemplate_Standard_Job_Requisition.INTRANET_POSTING,
        JobReqTemplate_Standard_Job_Requisition.INTRANET_PRIVATE_POSTING,
        JobReqTemplate_Standard_Job_Requisition.JOB_CODE,
        JobReqTemplate_Standard_Job_Requisition.JOB_GRADE,
        JobReqTemplate_Standard_Job_Requisition.JOB_LEVEL,
        JobReqTemplate_Standard_Job_Requisition.JOB_POST_LANGUAGE,
        JobReqTemplate_Standard_Job_Requisition.JOB_ROLE,
        JobReqTemplate_Standard_Job_Requisition.JOB_START_DATE,
        JobReqTemplate_Standard_Job_Requisition.LEGAL_ENTITY_OBJ_CODE,
        JobReqTemplate_Standard_Job_Requisition.LISTING_LAYOUT,
        JobReqTemplate_Standard_Job_Requisition.LOCATION_OBJ_CODE,
        JobReqTemplate_Standard_Job_Requisition.NUMBER_OPENINGS,
        JobReqTemplate_Standard_Job_Requisition.POSITION_NUMBER,
        JobReqTemplate_Standard_Job_Requisition.QUESTIONS,
        JobReqTemplate_Standard_Job_Requisition.RECRUITER_EMAIL,
        JobReqTemplate_Standard_Job_Requisition.RECRUITER_FAX,
        JobReqTemplate_Standard_Job_Requisition.RECRUITER_PHONE,
        JobReqTemplate_Standard_Job_Requisition.SALARY_MAX,
        JobReqTemplate_Standard_Job_Requisition.SALARY_MID,
        JobReqTemplate_Standard_Job_Requisition.SALARY_MIN,
        JobReqTemplate_Standard_Job_Requisition.SECOND_RECRUITER_EMAIL,
        JobReqTemplate_Standard_Job_Requisition.SECOND_RECRUITER_FAX,
        JobReqTemplate_Standard_Job_Requisition.SECOND_RECRUITER_PHONE,
        JobReqTemplate_Standard_Job_Requisition.SOURCER_EMAIL,
        JobReqTemplate_Standard_Job_Requisition.SOURCER_FAX,
        JobReqTemplate_Standard_Job_Requisition.SOURCER_PHONE,
        JobReqTemplate_Standard_Job_Requisition.START,
        JobReqTemplate_Standard_Job_Requisition.TEMPLATE_ID,
        JobReqTemplate_Standard_Job_Requisition.TITLE,
        JobReqTemplate_Standard_Job_Requisition.VP_OF_STAFFING_EMAIL,
        JobReqTemplate_Standard_Job_Requisition.VP_OF_STAFFING_FAX,
        JobReqTemplate_Standard_Job_Requisition.VP_OF_STAFFING_PHONE,
        JobReqTemplate_Standard_Job_Requisition.BUSINESS_UNIT_OBJ,
        JobReqTemplate_Standard_Job_Requisition.COORDINATOR_NAME,
        JobReqTemplate_Standard_Job_Requisition.COORDINATOR_TEAM,
        JobReqTemplate_Standard_Job_Requisition.COST_CENTER_OBJ,
        JobReqTemplate_Standard_Job_Requisition.CUST_DURATION,
        JobReqTemplate_Standard_Job_Requisition.DEPARTMENT_OBJ,
        JobReqTemplate_Standard_Job_Requisition.DIVISION_OBJ,
        JobReqTemplate_Standard_Job_Requisition.FILTER_1,
        JobReqTemplate_Standard_Job_Requisition.FILTER_3,
        JobReqTemplate_Standard_Job_Requisition.FILTER_4,
        JobReqTemplate_Standard_Job_Requisition.HARDSTOP_STATUS,
        JobReqTemplate_Standard_Job_Requisition.HIRING_MANAGER_NAME,
        JobReqTemplate_Standard_Job_Requisition.HIRING_MANAGER_TEAM,
        JobReqTemplate_Standard_Job_Requisition.INTERVIEW_GUIDE,
        JobReqTemplate_Standard_Job_Requisition.LEGAL_ENTITY_OBJ,
        JobReqTemplate_Standard_Job_Requisition.LOCATION_OBJ,
        JobReqTemplate_Standard_Job_Requisition.MFIELD_1,
        JobReqTemplate_Standard_Job_Requisition.MFIELD_2,
        JobReqTemplate_Standard_Job_Requisition.RECRUITER_NAME,
        JobReqTemplate_Standard_Job_Requisition.RECRUITER_TEAM,
        JobReqTemplate_Standard_Job_Requisition.SECOND_RECRUITER_NAME,
        JobReqTemplate_Standard_Job_Requisition.SECOND_RECRUITER_TEAM,
        JobReqTemplate_Standard_Job_Requisition.SOURCER_NAME,
        JobReqTemplate_Standard_Job_Requisition.SOURCER_TEAM,
        JobReqTemplate_Standard_Job_Requisition.STATUS,
        JobReqTemplate_Standard_Job_Requisition.V_TEAM,
        JobReqTemplate_Standard_Job_Requisition.VP_OF_STAFFING_NAME,
        JobReqTemplate_Standard_Job_Requisition.VP_OF_STAFFING_TEAM
    ];
    /**
     * All fields selector.
     */
    JobReqTemplate_Standard_Job_Requisition.ALL_FIELDS = new core_1.AllFields('*', JobReqTemplate_Standard_Job_Requisition);
    /**
     * All key fields of the JobReqTemplate_Standard_Job_Requisition entity.
     */
    JobReqTemplate_Standard_Job_Requisition._keyFields = [JobReqTemplate_Standard_Job_Requisition.TEMPLATE_ID];
    /**
     * Mapping of all key field names to the respective static field property JobReqTemplate_Standard_Job_Requisition.
     */
    JobReqTemplate_Standard_Job_Requisition._keys = JobReqTemplate_Standard_Job_Requisition._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobReqTemplate_Standard_Job_Requisition = exports.JobReqTemplate_Standard_Job_Requisition || (exports.JobReqTemplate_Standard_Job_Requisition = {}));
exports.JobReqTemplate_Standard_Job_Requisition = JobReqTemplate_Standard_Job_Requisition;
//# sourceMappingURL=JobReqTemplate_Standard_Job_Requisition.js.map