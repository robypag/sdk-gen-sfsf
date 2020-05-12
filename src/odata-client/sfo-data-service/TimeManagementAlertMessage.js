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
var TimeManagementAlertMessageRequestBuilder_1 = require("./TimeManagementAlertMessageRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TimeManagementAlertMessage" of service "SFOData".
 */
var TimeManagementAlertMessage = /** @class */ (function (_super) {
    __extends(TimeManagementAlertMessage, _super);
    function TimeManagementAlertMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TimeManagementAlertMessage`.
     * @returns A builder that constructs instances of entity type `TimeManagementAlertMessage`.
     */
    TimeManagementAlertMessage.builder = function () {
        return core_1.Entity.entityBuilder(TimeManagementAlertMessage);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TimeManagementAlertMessage` entity type.
     * @returns A `TimeManagementAlertMessage` request builder.
     */
    TimeManagementAlertMessage.requestBuilder = function () {
        return new TimeManagementAlertMessageRequestBuilder_1.TimeManagementAlertMessageRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeManagementAlertMessage`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeManagementAlertMessage`.
     */
    TimeManagementAlertMessage.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TimeManagementAlertMessage);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TimeManagementAlertMessage.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TimeManagementAlertMessage.
     */
    TimeManagementAlertMessage._entityName = 'TimeManagementAlertMessage';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeManagementAlertMessage.
     */
    TimeManagementAlertMessage._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TimeManagementAlertMessage._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return TimeManagementAlertMessage;
}(core_1.Entity));
exports.TimeManagementAlertMessage = TimeManagementAlertMessage;
var User_1 = require("./User");
var EmployeeTime_1 = require("./EmployeeTime");
var EmployeeTimeSheet_1 = require("./EmployeeTimeSheet");
var MdfEnumValue_1 = require("./MdfEnumValue");
var TimeAccount_1 = require("./TimeAccount");
(function (TimeManagementAlertMessage) {
    /**
     * Static representation of the [[timeManagementAlertExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlertMessage.TIME_MANAGEMENT_ALERT_EXTERNAL_CODE = new core_1.StringField('TimeManagementAlert_externalCode', TimeManagementAlertMessage, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlertMessage.CREATED_BY = new core_1.StringField('createdBy', TimeManagementAlertMessage, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlertMessage.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', TimeManagementAlertMessage, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[date]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlertMessage.DATE = new core_1.DateField('date', TimeManagementAlertMessage, 'Edm.DateTime');
    /**
     * Static representation of the [[defaultMessageText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlertMessage.DEFAULT_MESSAGE_TEXT = new core_1.StringField('defaultMessageText', TimeManagementAlertMessage, 'Edm.String');
    /**
     * Static representation of the [[employeeTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlertMessage.EMPLOYEE_TIME = new core_1.StringField('employeeTime', TimeManagementAlertMessage, 'Edm.String');
    /**
     * Static representation of the [[employeeTimeSheet]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlertMessage.EMPLOYEE_TIME_SHEET = new core_1.StringField('employeeTimeSheet', TimeManagementAlertMessage, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlertMessage.EXTERNAL_CODE = new core_1.StringField('externalCode', TimeManagementAlertMessage, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlertMessage.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', TimeManagementAlertMessage, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlertMessage.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', TimeManagementAlertMessage, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlertMessage.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', TimeManagementAlertMessage, 'Edm.String');
    /**
     * Static representation of the [[messageKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlertMessage.MESSAGE_KEY = new core_1.StringField('messageKey', TimeManagementAlertMessage, 'Edm.String');
    /**
     * Static representation of the [[messageParameter1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlertMessage.MESSAGE_PARAMETER_1 = new core_1.StringField('messageParameter1', TimeManagementAlertMessage, 'Edm.String');
    /**
     * Static representation of the [[messageParameter2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlertMessage.MESSAGE_PARAMETER_2 = new core_1.StringField('messageParameter2', TimeManagementAlertMessage, 'Edm.String');
    /**
     * Static representation of the [[messageParameter3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlertMessage.MESSAGE_PARAMETER_3 = new core_1.StringField('messageParameter3', TimeManagementAlertMessage, 'Edm.String');
    /**
     * Static representation of the [[messageParameter4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlertMessage.MESSAGE_PARAMETER_4 = new core_1.StringField('messageParameter4', TimeManagementAlertMessage, 'Edm.String');
    /**
     * Static representation of the [[timeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlertMessage.TIME_ACCOUNT = new core_1.StringField('timeAccount', TimeManagementAlertMessage, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlertMessage.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', TimeManagementAlertMessage, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[employeeTimeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlertMessage.EMPLOYEE_TIME_NAV = new core_1.OneToOneLink('employeeTimeNav', TimeManagementAlertMessage, EmployeeTime_1.EmployeeTime);
    /**
     * Static representation of the one-to-one navigation property [[employeeTimeSheetNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlertMessage.EMPLOYEE_TIME_SHEET_NAV = new core_1.OneToOneLink('employeeTimeSheetNav', TimeManagementAlertMessage, EmployeeTimeSheet_1.EmployeeTimeSheet);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlertMessage.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', TimeManagementAlertMessage, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlertMessage.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', TimeManagementAlertMessage, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[timeAccountNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlertMessage.TIME_ACCOUNT_NAV = new core_1.OneToOneLink('timeAccountNav', TimeManagementAlertMessage, TimeAccount_1.TimeAccount);
    /**
     * All fields of the TimeManagementAlertMessage entity.
     */
    TimeManagementAlertMessage._allFields = [
        TimeManagementAlertMessage.TIME_MANAGEMENT_ALERT_EXTERNAL_CODE,
        TimeManagementAlertMessage.CREATED_BY,
        TimeManagementAlertMessage.CREATED_DATE_TIME,
        TimeManagementAlertMessage.DATE,
        TimeManagementAlertMessage.DEFAULT_MESSAGE_TEXT,
        TimeManagementAlertMessage.EMPLOYEE_TIME,
        TimeManagementAlertMessage.EMPLOYEE_TIME_SHEET,
        TimeManagementAlertMessage.EXTERNAL_CODE,
        TimeManagementAlertMessage.LAST_MODIFIED_BY,
        TimeManagementAlertMessage.LAST_MODIFIED_DATE_TIME,
        TimeManagementAlertMessage.MDF_SYSTEM_RECORD_STATUS,
        TimeManagementAlertMessage.MESSAGE_KEY,
        TimeManagementAlertMessage.MESSAGE_PARAMETER_1,
        TimeManagementAlertMessage.MESSAGE_PARAMETER_2,
        TimeManagementAlertMessage.MESSAGE_PARAMETER_3,
        TimeManagementAlertMessage.MESSAGE_PARAMETER_4,
        TimeManagementAlertMessage.TIME_ACCOUNT,
        TimeManagementAlertMessage.CREATED_BY_NAV,
        TimeManagementAlertMessage.EMPLOYEE_TIME_NAV,
        TimeManagementAlertMessage.EMPLOYEE_TIME_SHEET_NAV,
        TimeManagementAlertMessage.LAST_MODIFIED_BY_NAV,
        TimeManagementAlertMessage.MDF_SYSTEM_RECORD_STATUS_NAV,
        TimeManagementAlertMessage.TIME_ACCOUNT_NAV
    ];
    /**
     * All fields selector.
     */
    TimeManagementAlertMessage.ALL_FIELDS = new core_1.AllFields('*', TimeManagementAlertMessage);
    /**
     * All key fields of the TimeManagementAlertMessage entity.
     */
    TimeManagementAlertMessage._keyFields = [TimeManagementAlertMessage.TIME_MANAGEMENT_ALERT_EXTERNAL_CODE, TimeManagementAlertMessage.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property TimeManagementAlertMessage.
     */
    TimeManagementAlertMessage._keys = TimeManagementAlertMessage._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TimeManagementAlertMessage = exports.TimeManagementAlertMessage || (exports.TimeManagementAlertMessage = {}));
exports.TimeManagementAlertMessage = TimeManagementAlertMessage;
//# sourceMappingURL=TimeManagementAlertMessage.js.map