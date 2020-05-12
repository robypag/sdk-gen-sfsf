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
var EmpJobRequestBuilder_1 = require("./EmpJobRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmpJob" of service "SFOData".
 */
var EmpJob = /** @class */ (function (_super) {
    __extends(EmpJob, _super);
    function EmpJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmpJob`.
     * @returns A builder that constructs instances of entity type `EmpJob`.
     */
    EmpJob.builder = function () {
        return core_1.Entity.entityBuilder(EmpJob);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmpJob` entity type.
     * @returns A `EmpJob` request builder.
     */
    EmpJob.requestBuilder = function () {
        return new EmpJobRequestBuilder_1.EmpJobRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpJob`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpJob`.
     */
    EmpJob.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmpJob);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmpJob.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmpJob.
     */
    EmpJob._entityName = 'EmpJob';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpJob.
     */
    EmpJob._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmpJob._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmpJob;
}(core_1.Entity));
exports.EmpJob = EmpJob;
var FoBusinessUnit_1 = require("./FoBusinessUnit");
var PicklistOption_1 = require("./PicklistOption");
var FoCompany_1 = require("./FoCompany");
var FoCostCenter_1 = require("./FoCostCenter");
var FoDepartment_1 = require("./FoDepartment");
var FoDivision_1 = require("./FoDivision");
var EmpEmployment_1 = require("./EmpEmployment");
var FoEventReason_1 = require("./FoEventReason");
var HolidayCalendar_1 = require("./HolidayCalendar");
var FoJobCode_1 = require("./FoJobCode");
var FoLocation_1 = require("./FoLocation");
var User_1 = require("./User");
var FoPayGrade_1 = require("./FoPayGrade");
var PayScaleArea_1 = require("./PayScaleArea");
var PayScaleGroup_1 = require("./PayScaleGroup");
var PayScaleLevel_1 = require("./PayScaleLevel");
var PayScaleType_1 = require("./PayScaleType");
var Position_1 = require("./Position");
var TimeTypeProfile_1 = require("./TimeTypeProfile");
var WfRequest_1 = require("./WfRequest");
var WorkSchedule_1 = require("./WorkSchedule");
(function (EmpJob) {
    /**
     * Static representation of the [[assedicCertInitialStateNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.ASSEDIC_CERT_INITIAL_STATE_NUM = new core_1.BigNumberField('assedicCertInitialStateNum', EmpJob, 'Edm.Int64');
    /**
     * Static representation of the [[assedicCertObjectNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.ASSEDIC_CERT_OBJECT_NUM = new core_1.BigNumberField('assedicCertObjectNum', EmpJob, 'Edm.Int64');
    /**
     * Static representation of the [[attachment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.ATTACHMENT = new core_1.BinaryField('attachment', EmpJob, 'Edm.Binary');
    /**
     * Static representation of the [[attachmentFileName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.ATTACHMENT_FILE_NAME = new core_1.StringField('attachmentFileName', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[attachmentFileSize]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.ATTACHMENT_FILE_SIZE = new core_1.BigNumberField('attachmentFileSize', EmpJob, 'Edm.Decimal');
    /**
     * Static representation of the [[attachmentFileType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.ATTACHMENT_FILE_TYPE = new core_1.StringField('attachmentFileType', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[attachmentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.ATTACHMENT_ID = new core_1.StringField('attachmentId', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[attachmentMimeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.ATTACHMENT_MIME_TYPE = new core_1.StringField('attachmentMimeType', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[attachmentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.ATTACHMENT_STATUS = new core_1.BigNumberField('attachmentStatus', EmpJob, 'Edm.Decimal');
    /**
     * Static representation of the [[businessUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.BUSINESS_UNIT = new core_1.StringField('businessUnit', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[calcMethodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.CALC_METHOD_INDICATOR = new core_1.BooleanField('calcMethodIndicator', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[commitmentIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.COMMITMENT_INDICATOR = new core_1.StringField('commitmentIndicator', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[company]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.COMPANY = new core_1.StringField('company', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[continuedSicknessPayMeasure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.CONTINUED_SICKNESS_PAY_MEASURE = new core_1.StringField('continuedSicknessPayMeasure', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[continuedSicknessPayPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.CONTINUED_SICKNESS_PAY_PERIOD = new core_1.BigNumberField('continuedSicknessPayPeriod', EmpJob, 'Edm.Int64');
    /**
     * Static representation of the [[contractEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.CONTRACT_END_DATE = new core_1.DateField('contractEndDate', EmpJob, 'Edm.DateTime');
    /**
     * Static representation of the [[contractReferenceForAed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.CONTRACT_REFERENCE_FOR_AED = new core_1.StringField('contractReferenceForAed', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[contractType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.CONTRACT_TYPE = new core_1.StringField('contractType', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[corporation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.CORPORATION = new core_1.StringField('corporation', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[costCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.COST_CENTER = new core_1.StringField('costCenter', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[countryOfCompany]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.COUNTRY_OF_COMPANY = new core_1.StringField('countryOfCompany', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.CREATED_BY = new core_1.StringField('createdBy', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmpJob, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.CREATED_ON = new core_1.DateField('createdOn', EmpJob, 'Edm.DateTime');
    /**
     * Static representation of the [[customString11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.CUSTOM_STRING_11 = new core_1.StringField('customString11', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[customString3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.CUSTOM_STRING_3 = new core_1.StringField('customString3', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[customString4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.CUSTOM_STRING_4 = new core_1.StringField('customString4', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[customString5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.CUSTOM_STRING_5 = new core_1.StringField('customString5', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[customString6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.CUSTOM_STRING_6 = new core_1.StringField('customString6', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[customString7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.CUSTOM_STRING_7 = new core_1.StringField('customString7', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[customString8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.CUSTOM_STRING_8 = new core_1.StringField('customString8', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[customString9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.CUSTOM_STRING_9 = new core_1.StringField('customString9', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.DEPARTMENT = new core_1.StringField('department', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.DIVISION = new core_1.StringField('division', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[eeo1JobCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EEO_1_JOB_CATEGORY = new core_1.StringField('eeo1JobCategory', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[eeo4JobCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EEO_4_JOB_CATEGORY = new core_1.StringField('eeo4JobCategory', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[eeo5JobCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EEO_5_JOB_CATEGORY = new core_1.StringField('eeo5JobCategory', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[eeo6JobCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EEO_6_JOB_CATEGORY = new core_1.StringField('eeo6JobCategory', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[eeoClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EEO_CLASS = new core_1.StringField('eeoClass', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[electoralCollegeForLaborCourt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.ELECTORAL_COLLEGE_FOR_LABOR_COURT = new core_1.StringField('electoralCollegeForLaborCourt', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[electoralCollegeForWorkersRepresentatives]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.ELECTORAL_COLLEGE_FOR_WORKERS_REPRESENTATIVES = new core_1.StringField('electoralCollegeForWorkersRepresentatives', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[electoralCollegeForWorksCouncil]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.ELECTORAL_COLLEGE_FOR_WORKS_COUNCIL = new core_1.StringField('electoralCollegeForWorksCouncil', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[empRelationship]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EMP_RELATIONSHIP = new core_1.StringField('empRelationship', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[emplStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EMPL_STATUS = new core_1.StringField('emplStatus', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[employeeClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EMPLOYEE_CLASS = new core_1.StringField('employeeClass', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[employmentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EMPLOYMENT_TYPE = new core_1.StringField('employmentType', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.END_DATE = new core_1.DateField('endDate', EmpJob, 'Edm.DateTime');
    /**
     * Static representation of the [[entryIntoGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.ENTRY_INTO_GROUP = new core_1.DateField('entryIntoGroup', EmpJob, 'Edm.DateTime');
    /**
     * Static representation of the [[event]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EVENT = new core_1.StringField('event', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[eventReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EVENT_REASON = new core_1.StringField('eventReason', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[exclExecutiveSector]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EXCL_EXECUTIVE_SECTOR = new core_1.BooleanField('exclExecutiveSector', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[expectedReturnDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EXPECTED_RETURN_DATE = new core_1.DateField('expectedReturnDate', EmpJob, 'Edm.DateTime');
    /**
     * Static representation of the [[familyRelationshipWithEmployer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.FAMILY_RELATIONSHIP_WITH_EMPLOYER = new core_1.StringField('familyRelationshipWithEmployer', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[fgtsDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.FGTS_DATE = new core_1.DateField('fgtsDate', EmpJob, 'Edm.DateTime');
    /**
     * Static representation of the [[fgtsOptant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.FGTS_OPTANT = new core_1.BooleanField('fgtsOptant', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[fgtsPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.FGTS_PERCENT = new core_1.NumberField('fgtsPercent', EmpJob, 'Edm.Double');
    /**
     * Static representation of the [[flsaStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.FLSA_STATUS = new core_1.StringField('flsaStatus', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[fte]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.FTE = new core_1.NumberField('fte', EmpJob, 'Edm.Double');
    /**
     * Static representation of the [[harmfulAgentExposure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.HARMFUL_AGENT_EXPOSURE = new core_1.StringField('harmfulAgentExposure', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[hazard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.HAZARD = new core_1.BooleanField('hazard', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[healthRisk]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.HEALTH_RISK = new core_1.BooleanField('healthRisk', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[holidayCalendarCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.HOLIDAY_CALENDAR_CODE = new core_1.StringField('holidayCalendarCode', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[initialEntryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.INITIAL_ENTRY_DATE = new core_1.DateField('initialEntryDate', EmpJob, 'Edm.DateTime');
    /**
     * Static representation of the [[isCompetitionClauseActive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.IS_COMPETITION_CLAUSE_ACTIVE = new core_1.BooleanField('isCompetitionClauseActive', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[isSideLineJobAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.IS_SIDE_LINE_JOB_ALLOWED = new core_1.BooleanField('isSideLineJobAllowed', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[jobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.JOB_CODE = new core_1.StringField('jobCode', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[jobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.JOB_TITLE = new core_1.StringField('jobTitle', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[laborCourtSector]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.LABOR_COURT_SECTOR = new core_1.StringField('laborCourtSector', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[laborProtection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.LABOR_PROTECTION = new core_1.BooleanField('laborProtection', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmpJob, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', EmpJob, 'Edm.DateTime');
    /**
     * Static representation of the [[localJobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.LOCAL_JOB_TITLE = new core_1.StringField('localJobTitle', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.LOCATION = new core_1.StringField('location', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[managerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.MANAGER_ID = new core_1.StringField('managerId', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[mandatoryRange]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.MANDATORY_RANGE = new core_1.BooleanField('mandatoryRange', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[noticePeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.NOTICE_PERIOD = new core_1.StringField('noticePeriod', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[noticePeriodStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.NOTICE_PERIOD_START_DATE = new core_1.DateField('noticePeriodStartDate', EmpJob, 'Edm.DateTime');
    /**
     * Static representation of the [[occupationalLevels]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.OCCUPATIONAL_LEVELS = new core_1.StringField('occupationalLevels', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.OPERATION = new core_1.StringField('operation', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[payGrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.PAY_GRADE = new core_1.StringField('payGrade', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[payScaleArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.PAY_SCALE_AREA = new core_1.StringField('payScaleArea', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[payScaleGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.PAY_SCALE_GROUP = new core_1.StringField('payScaleGroup', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[payScaleLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.PAY_SCALE_LEVEL = new core_1.StringField('payScaleLevel', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[payScaleType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.PAY_SCALE_TYPE = new core_1.StringField('payScaleType', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[pcfm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.PCFM = new core_1.BooleanField('pcfm', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[pensionProtection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.PENSION_PROTECTION = new core_1.BooleanField('pensionProtection', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.PERIOD_INDICATOR = new core_1.StringField('periodIndicator', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[permitIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.PERMIT_INDICATOR = new core_1.BooleanField('permitIndicator', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[position]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.POSITION = new core_1.StringField('position', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[positionEntryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.POSITION_ENTRY_DATE = new core_1.DateField('positionEntryDate', EmpJob, 'Edm.DateTime');
    /**
     * Static representation of the [[probationPeriodEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.PROBATION_PERIOD_END_DATE = new core_1.DateField('probationPeriodEndDate', EmpJob, 'Edm.DateTime');
    /**
     * Static representation of the [[probationaryPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.PROBATIONARY_PERIOD = new core_1.BigNumberField('probationaryPeriod', EmpJob, 'Edm.Int64');
    /**
     * Static representation of the [[probationaryPeriodMeasure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.PROBATIONARY_PERIOD_MEASURE = new core_1.StringField('probationaryPeriodMeasure', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[retired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.RETIRED = new core_1.BooleanField('retired', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[seqNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.SEQ_NUMBER = new core_1.BigNumberField('seqNumber', EmpJob, 'Edm.Int64');
    /**
     * Static representation of the [[sickPaySupplement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.SICK_PAY_SUPPLEMENT = new core_1.StringField('sickPaySupplement', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[standardHours]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.STANDARD_HOURS = new core_1.NumberField('standardHours', EmpJob, 'Edm.Double');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.START_DATE = new core_1.DateField('startDate', EmpJob, 'Edm.DateTime');
    /**
     * Static representation of the [[teachersPension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.TEACHERS_PENSION = new core_1.BooleanField('teachersPension', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[timeTypeProfileCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.TIME_TYPE_PROFILE_CODE = new core_1.StringField('timeTypeProfileCode', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[timezone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.TIMEZONE = new core_1.StringField('timezone', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[travelDistance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.TRAVEL_DISTANCE = new core_1.NumberField('travelDistance', EmpJob, 'Edm.Double');
    /**
     * Static representation of the [[tupeOrgNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.TUPE_ORG_NUMBER = new core_1.StringField('tupeOrgNumber', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.USER_ID = new core_1.StringField('userId', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[workLocation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.WORK_LOCATION = new core_1.StringField('workLocation', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[workPermitExpiry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.WORK_PERMIT_EXPIRY = new core_1.DateField('workPermitExpiry', EmpJob, 'Edm.DateTime');
    /**
     * Static representation of the [[workerCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.WORKER_CATEGORY = new core_1.StringField('workerCategory', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[workingTimeDirective]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.WORKING_TIME_DIRECTIVE = new core_1.BooleanField('workingTimeDirective', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[workscheduleCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.WORKSCHEDULE_CODE = new core_1.StringField('workscheduleCode', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[wtdHoursLimit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.WTD_HOURS_LIMIT = new core_1.StringField('wtdHoursLimit', EmpJob, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[businessUnitNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.BUSINESS_UNIT_NAV = new core_1.OneToOneLink('businessUnitNav', EmpJob, FoBusinessUnit_1.FoBusinessUnit);
    /**
     * Static representation of the one-to-one navigation property [[commitmentIndicatorNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.COMMITMENT_INDICATOR_NAV = new core_1.OneToOneLink('commitmentIndicatorNav', EmpJob, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[companyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.COMPANY_NAV = new core_1.OneToOneLink('companyNav', EmpJob, FoCompany_1.FoCompany);
    /**
     * Static representation of the one-to-one navigation property [[continuedSicknessPayMeasureNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.CONTINUED_SICKNESS_PAY_MEASURE_NAV = new core_1.OneToOneLink('continuedSicknessPayMeasureNav', EmpJob, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[contractTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.CONTRACT_TYPE_NAV = new core_1.OneToOneLink('contractTypeNav', EmpJob, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[costCenterNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.COST_CENTER_NAV = new core_1.OneToOneLink('costCenterNav', EmpJob, FoCostCenter_1.FoCostCenter);
    /**
     * Static representation of the one-to-one navigation property [[countryOfCompanyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.COUNTRY_OF_COMPANY_NAV = new core_1.OneToOneLink('countryOfCompanyNav', EmpJob, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[customString11Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.CUSTOM_STRING_11_NAV = new core_1.OneToOneLink('customString11Nav', EmpJob, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[customString4Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.CUSTOM_STRING_4_NAV = new core_1.OneToOneLink('customString4Nav', EmpJob, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[customString6Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.CUSTOM_STRING_6_NAV = new core_1.OneToOneLink('customString6Nav', EmpJob, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[departmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.DEPARTMENT_NAV = new core_1.OneToOneLink('departmentNav', EmpJob, FoDepartment_1.FoDepartment);
    /**
     * Static representation of the one-to-one navigation property [[divisionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.DIVISION_NAV = new core_1.OneToOneLink('divisionNav', EmpJob, FoDivision_1.FoDivision);
    /**
     * Static representation of the one-to-one navigation property [[eeo1JobCategoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EEO_1_JOB_CATEGORY_NAV = new core_1.OneToOneLink('eeo1JobCategoryNav', EmpJob, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[eeoClassNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EEO_CLASS_NAV = new core_1.OneToOneLink('eeoClassNav', EmpJob, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[empRelationshipNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EMP_RELATIONSHIP_NAV = new core_1.OneToOneLink('empRelationshipNav', EmpJob, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[emplStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EMPL_STATUS_NAV = new core_1.OneToOneLink('emplStatusNav', EmpJob, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[employeeClassNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EMPLOYEE_CLASS_NAV = new core_1.OneToOneLink('employeeClassNav', EmpJob, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[employmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EMPLOYMENT_NAV = new core_1.OneToOneLink('employmentNav', EmpJob, EmpEmployment_1.EmpEmployment);
    /**
     * Static representation of the one-to-one navigation property [[employmentTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EMPLOYMENT_TYPE_NAV = new core_1.OneToOneLink('employmentTypeNav', EmpJob, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[eventNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EVENT_NAV = new core_1.OneToOneLink('eventNav', EmpJob, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[eventReasonNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EVENT_REASON_NAV = new core_1.OneToOneLink('eventReasonNav', EmpJob, FoEventReason_1.FoEventReason);
    /**
     * Static representation of the one-to-one navigation property [[flsaStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.FLSA_STATUS_NAV = new core_1.OneToOneLink('flsaStatusNav', EmpJob, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[harmfulAgentExposureNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.HARMFUL_AGENT_EXPOSURE_NAV = new core_1.OneToOneLink('harmfulAgentExposureNav', EmpJob, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[holidayCalendarCodeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.HOLIDAY_CALENDAR_CODE_NAV = new core_1.OneToOneLink('holidayCalendarCodeNav', EmpJob, HolidayCalendar_1.HolidayCalendar);
    /**
     * Static representation of the one-to-one navigation property [[jobCodeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.JOB_CODE_NAV = new core_1.OneToOneLink('jobCodeNav', EmpJob, FoJobCode_1.FoJobCode);
    /**
     * Static representation of the one-to-one navigation property [[locationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.LOCATION_NAV = new core_1.OneToOneLink('locationNav', EmpJob, FoLocation_1.FoLocation);
    /**
     * Static representation of the one-to-one navigation property [[managerEmploymentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.MANAGER_EMPLOYMENT_NAV = new core_1.OneToOneLink('managerEmploymentNav', EmpJob, EmpEmployment_1.EmpEmployment);
    /**
     * Static representation of the one-to-one navigation property [[managerUserNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.MANAGER_USER_NAV = new core_1.OneToOneLink('managerUserNav', EmpJob, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[noticePeriodNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.NOTICE_PERIOD_NAV = new core_1.OneToOneLink('noticePeriodNav', EmpJob, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[occupationalLevelsNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.OCCUPATIONAL_LEVELS_NAV = new core_1.OneToOneLink('occupationalLevelsNav', EmpJob, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[payGradeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.PAY_GRADE_NAV = new core_1.OneToOneLink('payGradeNav', EmpJob, FoPayGrade_1.FoPayGrade);
    /**
     * Static representation of the one-to-one navigation property [[payScaleAreaNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.PAY_SCALE_AREA_NAV = new core_1.OneToOneLink('payScaleAreaNav', EmpJob, PayScaleArea_1.PayScaleArea);
    /**
     * Static representation of the one-to-one navigation property [[payScaleGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.PAY_SCALE_GROUP_NAV = new core_1.OneToOneLink('payScaleGroupNav', EmpJob, PayScaleGroup_1.PayScaleGroup);
    /**
     * Static representation of the one-to-one navigation property [[payScaleLevelNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.PAY_SCALE_LEVEL_NAV = new core_1.OneToOneLink('payScaleLevelNav', EmpJob, PayScaleLevel_1.PayScaleLevel);
    /**
     * Static representation of the one-to-one navigation property [[payScaleTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.PAY_SCALE_TYPE_NAV = new core_1.OneToOneLink('payScaleTypeNav', EmpJob, PayScaleType_1.PayScaleType);
    /**
     * Static representation of the one-to-one navigation property [[periodIndicatorNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.PERIOD_INDICATOR_NAV = new core_1.OneToOneLink('periodIndicatorNav', EmpJob, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[positionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.POSITION_NAV = new core_1.OneToOneLink('positionNav', EmpJob, Position_1.Position);
    /**
     * Static representation of the one-to-one navigation property [[probationaryPeriodMeasureNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.PROBATIONARY_PERIOD_MEASURE_NAV = new core_1.OneToOneLink('probationaryPeriodMeasureNav', EmpJob, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[timeTypeProfileCodeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.TIME_TYPE_PROFILE_CODE_NAV = new core_1.OneToOneLink('timeTypeProfileCodeNav', EmpJob, TimeTypeProfile_1.TimeTypeProfile);
    /**
     * Static representation of the one-to-one navigation property [[userNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.USER_NAV = new core_1.OneToOneLink('userNav', EmpJob, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.WF_REQUEST_NAV = new core_1.OneToOneLink('wfRequestNav', EmpJob, WfRequest_1.WfRequest);
    /**
     * Static representation of the one-to-one navigation property [[workerCategoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.WORKER_CATEGORY_NAV = new core_1.OneToOneLink('workerCategoryNav', EmpJob, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[workscheduleCodeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.WORKSCHEDULE_CODE_NAV = new core_1.OneToOneLink('workscheduleCodeNav', EmpJob, WorkSchedule_1.WorkSchedule);
    /**
     * All fields of the EmpJob entity.
     */
    EmpJob._allFields = [
        EmpJob.ASSEDIC_CERT_INITIAL_STATE_NUM,
        EmpJob.ASSEDIC_CERT_OBJECT_NUM,
        EmpJob.ATTACHMENT,
        EmpJob.ATTACHMENT_FILE_NAME,
        EmpJob.ATTACHMENT_FILE_SIZE,
        EmpJob.ATTACHMENT_FILE_TYPE,
        EmpJob.ATTACHMENT_ID,
        EmpJob.ATTACHMENT_MIME_TYPE,
        EmpJob.ATTACHMENT_STATUS,
        EmpJob.BUSINESS_UNIT,
        EmpJob.CALC_METHOD_INDICATOR,
        EmpJob.COMMITMENT_INDICATOR,
        EmpJob.COMPANY,
        EmpJob.CONTINUED_SICKNESS_PAY_MEASURE,
        EmpJob.CONTINUED_SICKNESS_PAY_PERIOD,
        EmpJob.CONTRACT_END_DATE,
        EmpJob.CONTRACT_REFERENCE_FOR_AED,
        EmpJob.CONTRACT_TYPE,
        EmpJob.CORPORATION,
        EmpJob.COST_CENTER,
        EmpJob.COUNTRY_OF_COMPANY,
        EmpJob.CREATED_BY,
        EmpJob.CREATED_DATE_TIME,
        EmpJob.CREATED_ON,
        EmpJob.CUSTOM_STRING_11,
        EmpJob.CUSTOM_STRING_3,
        EmpJob.CUSTOM_STRING_4,
        EmpJob.CUSTOM_STRING_5,
        EmpJob.CUSTOM_STRING_6,
        EmpJob.CUSTOM_STRING_7,
        EmpJob.CUSTOM_STRING_8,
        EmpJob.CUSTOM_STRING_9,
        EmpJob.DEPARTMENT,
        EmpJob.DIVISION,
        EmpJob.EEO_1_JOB_CATEGORY,
        EmpJob.EEO_4_JOB_CATEGORY,
        EmpJob.EEO_5_JOB_CATEGORY,
        EmpJob.EEO_6_JOB_CATEGORY,
        EmpJob.EEO_CLASS,
        EmpJob.ELECTORAL_COLLEGE_FOR_LABOR_COURT,
        EmpJob.ELECTORAL_COLLEGE_FOR_WORKERS_REPRESENTATIVES,
        EmpJob.ELECTORAL_COLLEGE_FOR_WORKS_COUNCIL,
        EmpJob.EMP_RELATIONSHIP,
        EmpJob.EMPL_STATUS,
        EmpJob.EMPLOYEE_CLASS,
        EmpJob.EMPLOYMENT_TYPE,
        EmpJob.END_DATE,
        EmpJob.ENTRY_INTO_GROUP,
        EmpJob.EVENT,
        EmpJob.EVENT_REASON,
        EmpJob.EXCL_EXECUTIVE_SECTOR,
        EmpJob.EXPECTED_RETURN_DATE,
        EmpJob.FAMILY_RELATIONSHIP_WITH_EMPLOYER,
        EmpJob.FGTS_DATE,
        EmpJob.FGTS_OPTANT,
        EmpJob.FGTS_PERCENT,
        EmpJob.FLSA_STATUS,
        EmpJob.FTE,
        EmpJob.HARMFUL_AGENT_EXPOSURE,
        EmpJob.HAZARD,
        EmpJob.HEALTH_RISK,
        EmpJob.HOLIDAY_CALENDAR_CODE,
        EmpJob.INITIAL_ENTRY_DATE,
        EmpJob.IS_COMPETITION_CLAUSE_ACTIVE,
        EmpJob.IS_SIDE_LINE_JOB_ALLOWED,
        EmpJob.JOB_CODE,
        EmpJob.JOB_TITLE,
        EmpJob.LABOR_COURT_SECTOR,
        EmpJob.LABOR_PROTECTION,
        EmpJob.LAST_MODIFIED_BY,
        EmpJob.LAST_MODIFIED_DATE_TIME,
        EmpJob.LAST_MODIFIED_ON,
        EmpJob.LOCAL_JOB_TITLE,
        EmpJob.LOCATION,
        EmpJob.MANAGER_ID,
        EmpJob.MANDATORY_RANGE,
        EmpJob.NOTICE_PERIOD,
        EmpJob.NOTICE_PERIOD_START_DATE,
        EmpJob.OCCUPATIONAL_LEVELS,
        EmpJob.OPERATION,
        EmpJob.PAY_GRADE,
        EmpJob.PAY_SCALE_AREA,
        EmpJob.PAY_SCALE_GROUP,
        EmpJob.PAY_SCALE_LEVEL,
        EmpJob.PAY_SCALE_TYPE,
        EmpJob.PCFM,
        EmpJob.PENSION_PROTECTION,
        EmpJob.PERIOD_INDICATOR,
        EmpJob.PERMIT_INDICATOR,
        EmpJob.POSITION,
        EmpJob.POSITION_ENTRY_DATE,
        EmpJob.PROBATION_PERIOD_END_DATE,
        EmpJob.PROBATIONARY_PERIOD,
        EmpJob.PROBATIONARY_PERIOD_MEASURE,
        EmpJob.RETIRED,
        EmpJob.SEQ_NUMBER,
        EmpJob.SICK_PAY_SUPPLEMENT,
        EmpJob.STANDARD_HOURS,
        EmpJob.START_DATE,
        EmpJob.TEACHERS_PENSION,
        EmpJob.TIME_TYPE_PROFILE_CODE,
        EmpJob.TIMEZONE,
        EmpJob.TRAVEL_DISTANCE,
        EmpJob.TUPE_ORG_NUMBER,
        EmpJob.USER_ID,
        EmpJob.WORK_LOCATION,
        EmpJob.WORK_PERMIT_EXPIRY,
        EmpJob.WORKER_CATEGORY,
        EmpJob.WORKING_TIME_DIRECTIVE,
        EmpJob.WORKSCHEDULE_CODE,
        EmpJob.WTD_HOURS_LIMIT,
        EmpJob.BUSINESS_UNIT_NAV,
        EmpJob.COMMITMENT_INDICATOR_NAV,
        EmpJob.COMPANY_NAV,
        EmpJob.CONTINUED_SICKNESS_PAY_MEASURE_NAV,
        EmpJob.CONTRACT_TYPE_NAV,
        EmpJob.COST_CENTER_NAV,
        EmpJob.COUNTRY_OF_COMPANY_NAV,
        EmpJob.CUSTOM_STRING_11_NAV,
        EmpJob.CUSTOM_STRING_4_NAV,
        EmpJob.CUSTOM_STRING_6_NAV,
        EmpJob.DEPARTMENT_NAV,
        EmpJob.DIVISION_NAV,
        EmpJob.EEO_1_JOB_CATEGORY_NAV,
        EmpJob.EEO_CLASS_NAV,
        EmpJob.EMP_RELATIONSHIP_NAV,
        EmpJob.EMPL_STATUS_NAV,
        EmpJob.EMPLOYEE_CLASS_NAV,
        EmpJob.EMPLOYMENT_NAV,
        EmpJob.EMPLOYMENT_TYPE_NAV,
        EmpJob.EVENT_NAV,
        EmpJob.EVENT_REASON_NAV,
        EmpJob.FLSA_STATUS_NAV,
        EmpJob.HARMFUL_AGENT_EXPOSURE_NAV,
        EmpJob.HOLIDAY_CALENDAR_CODE_NAV,
        EmpJob.JOB_CODE_NAV,
        EmpJob.LOCATION_NAV,
        EmpJob.MANAGER_EMPLOYMENT_NAV,
        EmpJob.MANAGER_USER_NAV,
        EmpJob.NOTICE_PERIOD_NAV,
        EmpJob.OCCUPATIONAL_LEVELS_NAV,
        EmpJob.PAY_GRADE_NAV,
        EmpJob.PAY_SCALE_AREA_NAV,
        EmpJob.PAY_SCALE_GROUP_NAV,
        EmpJob.PAY_SCALE_LEVEL_NAV,
        EmpJob.PAY_SCALE_TYPE_NAV,
        EmpJob.PERIOD_INDICATOR_NAV,
        EmpJob.POSITION_NAV,
        EmpJob.PROBATIONARY_PERIOD_MEASURE_NAV,
        EmpJob.TIME_TYPE_PROFILE_CODE_NAV,
        EmpJob.USER_NAV,
        EmpJob.WF_REQUEST_NAV,
        EmpJob.WORKER_CATEGORY_NAV,
        EmpJob.WORKSCHEDULE_CODE_NAV
    ];
    /**
     * All fields selector.
     */
    EmpJob.ALL_FIELDS = new core_1.AllFields('*', EmpJob);
    /**
     * All key fields of the EmpJob entity.
     */
    EmpJob._keyFields = [EmpJob.SEQ_NUMBER, EmpJob.START_DATE, EmpJob.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property EmpJob.
     */
    EmpJob._keys = EmpJob._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmpJob = exports.EmpJob || (exports.EmpJob = {}));
exports.EmpJob = EmpJob;
//# sourceMappingURL=EmpJob.js.map