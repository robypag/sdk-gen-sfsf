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
var EmployeeTimeSheetEntryRequestBuilder_1 = require("./EmployeeTimeSheetEntryRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeeTimeSheetEntry" of service "SFOData".
 */
var EmployeeTimeSheetEntry = /** @class */ (function (_super) {
    __extends(EmployeeTimeSheetEntry, _super);
    function EmployeeTimeSheetEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeTimeSheetEntry`.
     * @returns A builder that constructs instances of entity type `EmployeeTimeSheetEntry`.
     */
    EmployeeTimeSheetEntry.builder = function () {
        return core_1.Entity.entityBuilder(EmployeeTimeSheetEntry);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeTimeSheetEntry` entity type.
     * @returns A `EmployeeTimeSheetEntry` request builder.
     */
    EmployeeTimeSheetEntry.requestBuilder = function () {
        return new EmployeeTimeSheetEntryRequestBuilder_1.EmployeeTimeSheetEntryRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeSheetEntry`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeTimeSheetEntry`.
     */
    EmployeeTimeSheetEntry.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmployeeTimeSheetEntry);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeTimeSheetEntry.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeTimeSheetEntry.
     */
    EmployeeTimeSheetEntry._entityName = 'EmployeeTimeSheetEntry';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeTimeSheetEntry.
     */
    EmployeeTimeSheetEntry._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmployeeTimeSheetEntry._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmployeeTimeSheetEntry;
}(core_1.Entity));
exports.EmployeeTimeSheetEntry = EmployeeTimeSheetEntry;
var FoCostCenter_1 = require("./FoCostCenter");
var User_1 = require("./User");
var EmployeeTime_1 = require("./EmployeeTime");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (EmployeeTimeSheetEntry) {
    /**
     * Static representation of the [[employeeTimeSheetExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheetEntry.EMPLOYEE_TIME_SHEET_EXTERNAL_CODE = new core_1.StringField('EmployeeTimeSheet_externalCode', EmployeeTimeSheetEntry, 'Edm.String');
    /**
     * Static representation of the [[costCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheetEntry.COST_CENTER = new core_1.StringField('costCenter', EmployeeTimeSheetEntry, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheetEntry.CREATED_BY = new core_1.StringField('createdBy', EmployeeTimeSheetEntry, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheetEntry.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmployeeTimeSheetEntry, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[employeeTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheetEntry.EMPLOYEE_TIME = new core_1.StringField('employeeTime', EmployeeTimeSheetEntry, 'Edm.String');
    /**
     * Static representation of the [[endTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheetEntry.END_TIME = new core_1.TimeField('endTime', EmployeeTimeSheetEntry, 'Edm.Time');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheetEntry.EXTERNAL_CODE = new core_1.StringField('externalCode', EmployeeTimeSheetEntry, 'Edm.String');
    /**
     * Static representation of the [[externalTimeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheetEntry.EXTERNAL_TIME_CODE = new core_1.StringField('externalTimeCode', EmployeeTimeSheetEntry, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheetEntry.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmployeeTimeSheetEntry, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheetEntry.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmployeeTimeSheetEntry, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheetEntry.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmployeeTimeSheetEntry, 'Edm.String');
    /**
     * Static representation of the [[quantityInHours]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheetEntry.QUANTITY_IN_HOURS = new core_1.BigNumberField('quantityInHours', EmployeeTimeSheetEntry, 'Edm.Decimal');
    /**
     * Static representation of the [[quantityInHoursAndMinutes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheetEntry.QUANTITY_IN_HOURS_AND_MINUTES = new core_1.StringField('quantityInHoursAndMinutes', EmployeeTimeSheetEntry, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheetEntry.START_DATE = new core_1.DateField('startDate', EmployeeTimeSheetEntry, 'Edm.DateTime');
    /**
     * Static representation of the [[startTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheetEntry.START_TIME = new core_1.TimeField('startTime', EmployeeTimeSheetEntry, 'Edm.Time');
    /**
     * Static representation of the [[timeTypeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheetEntry.TIME_TYPE_NAME = new core_1.StringField('timeTypeName', EmployeeTimeSheetEntry, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[costCenterNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheetEntry.COST_CENTER_NAV = new core_1.Link('costCenterNav', EmployeeTimeSheetEntry, FoCostCenter_1.FoCostCenter);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheetEntry.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', EmployeeTimeSheetEntry, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[employeeTimeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheetEntry.EMPLOYEE_TIME_NAV = new core_1.OneToOneLink('employeeTimeNav', EmployeeTimeSheetEntry, EmployeeTime_1.EmployeeTime);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheetEntry.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', EmployeeTimeSheetEntry, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeSheetEntry.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', EmployeeTimeSheetEntry, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the EmployeeTimeSheetEntry entity.
     */
    EmployeeTimeSheetEntry._allFields = [
        EmployeeTimeSheetEntry.EMPLOYEE_TIME_SHEET_EXTERNAL_CODE,
        EmployeeTimeSheetEntry.COST_CENTER,
        EmployeeTimeSheetEntry.CREATED_BY,
        EmployeeTimeSheetEntry.CREATED_DATE_TIME,
        EmployeeTimeSheetEntry.EMPLOYEE_TIME,
        EmployeeTimeSheetEntry.END_TIME,
        EmployeeTimeSheetEntry.EXTERNAL_CODE,
        EmployeeTimeSheetEntry.EXTERNAL_TIME_CODE,
        EmployeeTimeSheetEntry.LAST_MODIFIED_BY,
        EmployeeTimeSheetEntry.LAST_MODIFIED_DATE_TIME,
        EmployeeTimeSheetEntry.MDF_SYSTEM_RECORD_STATUS,
        EmployeeTimeSheetEntry.QUANTITY_IN_HOURS,
        EmployeeTimeSheetEntry.QUANTITY_IN_HOURS_AND_MINUTES,
        EmployeeTimeSheetEntry.START_DATE,
        EmployeeTimeSheetEntry.START_TIME,
        EmployeeTimeSheetEntry.TIME_TYPE_NAME,
        EmployeeTimeSheetEntry.COST_CENTER_NAV,
        EmployeeTimeSheetEntry.CREATED_BY_NAV,
        EmployeeTimeSheetEntry.EMPLOYEE_TIME_NAV,
        EmployeeTimeSheetEntry.LAST_MODIFIED_BY_NAV,
        EmployeeTimeSheetEntry.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    EmployeeTimeSheetEntry.ALL_FIELDS = new core_1.AllFields('*', EmployeeTimeSheetEntry);
    /**
     * All key fields of the EmployeeTimeSheetEntry entity.
     */
    EmployeeTimeSheetEntry._keyFields = [EmployeeTimeSheetEntry.EMPLOYEE_TIME_SHEET_EXTERNAL_CODE, EmployeeTimeSheetEntry.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property EmployeeTimeSheetEntry.
     */
    EmployeeTimeSheetEntry._keys = EmployeeTimeSheetEntry._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeTimeSheetEntry = exports.EmployeeTimeSheetEntry || (exports.EmployeeTimeSheetEntry = {}));
exports.EmployeeTimeSheetEntry = EmployeeTimeSheetEntry;
//# sourceMappingURL=EmployeeTimeSheetEntry.js.map