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
var EmployeeTimeSheetRequestBuilder_1 = require("./EmployeeTimeSheetRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeeTimeSheet" of service "SFOData".
 */
var EmployeeTimeSheet = /** @class */ (function (_super) {
    __extends(EmployeeTimeSheet, _super);
    function EmployeeTimeSheet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeTimeSheet`.
     * @returns A builder that constructs instances of entity type `EmployeeTimeSheet`.
     */
    EmployeeTimeSheet.builder = function () {
        return core_1.Entity.entityBuilder(EmployeeTimeSheet);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeTimeSheet` entity type.
     * @returns A `EmployeeTimeSheet` request builder.
     */
    EmployeeTimeSheet.requestBuilder = function () {
        return new EmployeeTimeSheetRequestBuilder_1.EmployeeTimeSheetRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeSheet`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeTimeSheet`.
     */
    EmployeeTimeSheet.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmployeeTimeSheet);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeTimeSheet.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeTimeSheet.
     */
    EmployeeTimeSheet._entityName = 'EmployeeTimeSheet';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeTimeSheet.
     */
    EmployeeTimeSheet._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmployeeTimeSheet._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmployeeTimeSheet;
}(core_1.Entity));
exports.EmployeeTimeSheet = EmployeeTimeSheet;
var MdfEnumValue_1 = require("./MdfEnumValue");
var User_1 = require("./User");
var EmployeeTimeSheetEntry_1 = require("./EmployeeTimeSheetEntry");
var EmployeeTimeValuationResult_1 = require("./EmployeeTimeValuationResult");
var WfRequest_1 = require("./WfRequest");
(function (EmployeeTimeSheet) {
    /**
     * Static representation of the [[absencesExist]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.ABSENCES_EXIST = new core_1.StringField('absencesExist', EmployeeTimeSheet, 'Edm.String');
    /**
     * Static representation of the [[approvalStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.APPROVAL_STATUS = new core_1.StringField('approvalStatus', EmployeeTimeSheet, 'Edm.String');
    /**
     * Static representation of the [[comment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.COMMENT = new core_1.StringField('comment', EmployeeTimeSheet, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.CREATED_BY = new core_1.StringField('createdBy', EmployeeTimeSheet, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmployeeTimeSheet, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[editable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.EDITABLE = new core_1.BooleanField('editable', EmployeeTimeSheet, 'Edm.Boolean');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.END_DATE = new core_1.DateField('endDate', EmployeeTimeSheet, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.EXTERNAL_CODE = new core_1.StringField('externalCode', EmployeeTimeSheet, 'Edm.String');
    /**
     * Static representation of the [[externalTimesExist]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.EXTERNAL_TIMES_EXIST = new core_1.StringField('externalTimesExist', EmployeeTimeSheet, 'Edm.String');
    /**
     * Static representation of the [[fullWorkscheduleCovered]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.FULL_WORKSCHEDULE_COVERED = new core_1.StringField('fullWorkscheduleCovered', EmployeeTimeSheet, 'Edm.String');
    /**
     * Static representation of the [[generatedEntriesExist]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.GENERATED_ENTRIES_EXIST = new core_1.StringField('generatedEntriesExist', EmployeeTimeSheet, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmployeeTimeSheet, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmployeeTimeSheet, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[manualEntriesExist]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.MANUAL_ENTRIES_EXIST = new core_1.StringField('manualEntriesExist', EmployeeTimeSheet, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmployeeTimeSheet, 'Edm.String');
    /**
     * Static representation of the [[period]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.PERIOD = new core_1.StringField('period', EmployeeTimeSheet, 'Edm.String');
    /**
     * Static representation of the [[plannedHoursAndMinutes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.PLANNED_HOURS_AND_MINUTES = new core_1.StringField('plannedHoursAndMinutes', EmployeeTimeSheet, 'Edm.String');
    /**
     * Static representation of the [[plannedWorkingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.PLANNED_WORKING_TIME = new core_1.BigNumberField('plannedWorkingTime', EmployeeTimeSheet, 'Edm.Int64');
    /**
     * Static representation of the [[recordedHoursAndMinutes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.RECORDED_HOURS_AND_MINUTES = new core_1.StringField('recordedHoursAndMinutes', EmployeeTimeSheet, 'Edm.String');
    /**
     * Static representation of the [[recordedWorkingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.RECORDED_WORKING_TIME = new core_1.BigNumberField('recordedWorkingTime', EmployeeTimeSheet, 'Edm.Int64');
    /**
     * Static representation of the [[replacedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.REPLACED_BY = new core_1.StringField('replacedBy', EmployeeTimeSheet, 'Edm.String');
    /**
     * Static representation of the [[replaces]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.REPLACES = new core_1.StringField('replaces', EmployeeTimeSheet, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.START_DATE = new core_1.DateField('startDate', EmployeeTimeSheet, 'Edm.DateTime');
    /**
     * Static representation of the [[timeRecordingMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.TIME_RECORDING_METHOD = new core_1.StringField('timeRecordingMethod', EmployeeTimeSheet, 'Edm.String');
    /**
     * Static representation of the [[timeSheetHash]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.TIME_SHEET_HASH = new core_1.StringField('timeSheetHash', EmployeeTimeSheet, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.USER_ID = new core_1.StringField('userId', EmployeeTimeSheet, 'Edm.String');
    /**
     * Static representation of the [[workflowAction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.WORKFLOW_ACTION = new core_1.StringField('workflowAction', EmployeeTimeSheet, 'Edm.String');
    /**
     * Static representation of the [[workflowRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.WORKFLOW_REQUEST_ID = new core_1.BigNumberField('workflowRequestId', EmployeeTimeSheet, 'Edm.Int64');
    /**
     * Static representation of the [[workingTimeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.WORKING_TIME_ACCOUNT = new core_1.BigNumberField('workingTimeAccount', EmployeeTimeSheet, 'Edm.Int64');
    /**
     * Static representation of the [[workingTimeAccountHoursAndMinutes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.WORKING_TIME_ACCOUNT_HOURS_AND_MINUTES = new core_1.StringField('workingTimeAccountHoursAndMinutes', EmployeeTimeSheet, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[absencesExistNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.ABSENCES_EXIST_NAV = new core_1.OneToOneLink('absencesExistNav', EmployeeTimeSheet, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[approvalStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.APPROVAL_STATUS_NAV = new core_1.OneToOneLink('approvalStatusNav', EmployeeTimeSheet, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', EmployeeTimeSheet, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[employeeTimeSheetEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.EMPLOYEE_TIME_SHEET_ENTRY = new core_1.Link('employeeTimeSheetEntry', EmployeeTimeSheet, EmployeeTimeSheetEntry_1.EmployeeTimeSheetEntry);
    /**
     * Static representation of the one-to-many navigation property [[employeeTimeValuationResult]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.EMPLOYEE_TIME_VALUATION_RESULT = new core_1.Link('employeeTimeValuationResult', EmployeeTimeSheet, EmployeeTimeValuationResult_1.EmployeeTimeValuationResult);
    /**
     * Static representation of the one-to-one navigation property [[externalTimesExistNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.EXTERNAL_TIMES_EXIST_NAV = new core_1.OneToOneLink('externalTimesExistNav', EmployeeTimeSheet, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[fullWorkscheduleCoveredNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.FULL_WORKSCHEDULE_COVERED_NAV = new core_1.OneToOneLink('fullWorkscheduleCoveredNav', EmployeeTimeSheet, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[generatedEntriesExistNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.GENERATED_ENTRIES_EXIST_NAV = new core_1.OneToOneLink('generatedEntriesExistNav', EmployeeTimeSheet, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', EmployeeTimeSheet, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[manualEntriesExistNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.MANUAL_ENTRIES_EXIST_NAV = new core_1.OneToOneLink('manualEntriesExistNav', EmployeeTimeSheet, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', EmployeeTimeSheet, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[replacedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.REPLACED_BY_NAV = new core_1.OneToOneLink('replacedByNav', EmployeeTimeSheet, EmployeeTimeSheet);
    /**
     * Static representation of the one-to-one navigation property [[replacesNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.REPLACES_NAV = new core_1.OneToOneLink('replacesNav', EmployeeTimeSheet, EmployeeTimeSheet);
    /**
     * Static representation of the one-to-one navigation property [[timeRecordingMethodNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.TIME_RECORDING_METHOD_NAV = new core_1.OneToOneLink('timeRecordingMethodNav', EmployeeTimeSheet, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', EmployeeTimeSheet, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', EmployeeTimeSheet, WfRequest_1.WfRequest);
    /**
     * Static representation of the one-to-one navigation property [[workflowActionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheet.WORKFLOW_ACTION_NAV = new core_1.OneToOneLink('workflowActionNav', EmployeeTimeSheet, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the EmployeeTimeSheet entity.
     */
    EmployeeTimeSheet._allFields = [
        EmployeeTimeSheet.ABSENCES_EXIST,
        EmployeeTimeSheet.APPROVAL_STATUS,
        EmployeeTimeSheet.COMMENT,
        EmployeeTimeSheet.CREATED_BY,
        EmployeeTimeSheet.CREATED_DATE_TIME,
        EmployeeTimeSheet.EDITABLE,
        EmployeeTimeSheet.END_DATE,
        EmployeeTimeSheet.EXTERNAL_CODE,
        EmployeeTimeSheet.EXTERNAL_TIMES_EXIST,
        EmployeeTimeSheet.FULL_WORKSCHEDULE_COVERED,
        EmployeeTimeSheet.GENERATED_ENTRIES_EXIST,
        EmployeeTimeSheet.LAST_MODIFIED_BY,
        EmployeeTimeSheet.LAST_MODIFIED_DATE_TIME,
        EmployeeTimeSheet.MANUAL_ENTRIES_EXIST,
        EmployeeTimeSheet.MDF_SYSTEM_RECORD_STATUS,
        EmployeeTimeSheet.PERIOD,
        EmployeeTimeSheet.PLANNED_HOURS_AND_MINUTES,
        EmployeeTimeSheet.PLANNED_WORKING_TIME,
        EmployeeTimeSheet.RECORDED_HOURS_AND_MINUTES,
        EmployeeTimeSheet.RECORDED_WORKING_TIME,
        EmployeeTimeSheet.REPLACED_BY,
        EmployeeTimeSheet.REPLACES,
        EmployeeTimeSheet.START_DATE,
        EmployeeTimeSheet.TIME_RECORDING_METHOD,
        EmployeeTimeSheet.TIME_SHEET_HASH,
        EmployeeTimeSheet.USER_ID,
        EmployeeTimeSheet.WORKFLOW_ACTION,
        EmployeeTimeSheet.WORKFLOW_REQUEST_ID,
        EmployeeTimeSheet.WORKING_TIME_ACCOUNT,
        EmployeeTimeSheet.WORKING_TIME_ACCOUNT_HOURS_AND_MINUTES,
        EmployeeTimeSheet.ABSENCES_EXIST_NAV,
        EmployeeTimeSheet.APPROVAL_STATUS_NAV,
        EmployeeTimeSheet.CREATED_BY_NAV,
        EmployeeTimeSheet.EMPLOYEE_TIME_SHEET_ENTRY,
        EmployeeTimeSheet.EMPLOYEE_TIME_VALUATION_RESULT,
        EmployeeTimeSheet.EXTERNAL_TIMES_EXIST_NAV,
        EmployeeTimeSheet.FULL_WORKSCHEDULE_COVERED_NAV,
        EmployeeTimeSheet.GENERATED_ENTRIES_EXIST_NAV,
        EmployeeTimeSheet.LAST_MODIFIED_BY_NAV,
        EmployeeTimeSheet.MANUAL_ENTRIES_EXIST_NAV,
        EmployeeTimeSheet.MDF_SYSTEM_RECORD_STATUS_NAV,
        EmployeeTimeSheet.REPLACED_BY_NAV,
        EmployeeTimeSheet.REPLACES_NAV,
        EmployeeTimeSheet.TIME_RECORDING_METHOD_NAV,
        EmployeeTimeSheet.USER_ID_NAV,
        EmployeeTimeSheet.WF_REQUEST_NAV,
        EmployeeTimeSheet.WORKFLOW_ACTION_NAV
    ];
    /**
     * All fields selector.
     */
    EmployeeTimeSheet.ALL_FIELDS = new core_1.AllFields('*', EmployeeTimeSheet);
    /**
     * All key fields of the EmployeeTimeSheet entity.
     */
    EmployeeTimeSheet._keyFields = [EmployeeTimeSheet.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property EmployeeTimeSheet.
     */
    EmployeeTimeSheet._keys = EmployeeTimeSheet._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeTimeSheet = exports.EmployeeTimeSheet || (exports.EmployeeTimeSheet = {}));
exports.EmployeeTimeSheet = EmployeeTimeSheet;
//# sourceMappingURL=EmployeeTimeSheet.js.map