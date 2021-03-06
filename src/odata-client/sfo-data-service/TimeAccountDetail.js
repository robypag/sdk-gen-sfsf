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
var TimeAccountDetailRequestBuilder_1 = require("./TimeAccountDetailRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TimeAccountDetail" of service "SFOData".
 */
var TimeAccountDetail = /** @class */ (function (_super) {
    __extends(TimeAccountDetail, _super);
    function TimeAccountDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TimeAccountDetail`.
     * @returns A builder that constructs instances of entity type `TimeAccountDetail`.
     */
    TimeAccountDetail.builder = function () {
        return core_1.Entity.entityBuilder(TimeAccountDetail);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TimeAccountDetail` entity type.
     * @returns A `TimeAccountDetail` request builder.
     */
    TimeAccountDetail.requestBuilder = function () {
        return new TimeAccountDetailRequestBuilder_1.TimeAccountDetailRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccountDetail`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeAccountDetail`.
     */
    TimeAccountDetail.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TimeAccountDetail);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TimeAccountDetail.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TimeAccountDetail.
     */
    TimeAccountDetail._entityName = 'TimeAccountDetail';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeAccountDetail.
     */
    TimeAccountDetail._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TimeAccountDetail._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return TimeAccountDetail;
}(core_1.Entity));
exports.TimeAccountDetail = TimeAccountDetail;
var MdfEnumValue_1 = require("./MdfEnumValue");
var EmployeeTimeCalendar_1 = require("./EmployeeTimeCalendar");
var User_1 = require("./User");
var EmployeeTime_1 = require("./EmployeeTime");
(function (TimeAccountDetail) {
    /**
     * Static representation of the [[timeAccountExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountDetail.TIME_ACCOUNT_EXTERNAL_CODE = new core_1.StringField('TimeAccount_externalCode', TimeAccountDetail, 'Edm.String');
    /**
     * Static representation of the [[accrualPeriodId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountDetail.ACCRUAL_PERIOD_ID = new core_1.StringField('accrualPeriodId', TimeAccountDetail, 'Edm.String');
    /**
     * Static representation of the [[advanced]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountDetail.ADVANCED = new core_1.BooleanField('advanced', TimeAccountDetail, 'Edm.Boolean');
    /**
     * Static representation of the [[bookingAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountDetail.BOOKING_AMOUNT = new core_1.BigNumberField('bookingAmount', TimeAccountDetail, 'Edm.Decimal');
    /**
     * Static representation of the [[bookingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountDetail.BOOKING_DATE = new core_1.DateField('bookingDate', TimeAccountDetail, 'Edm.DateTime');
    /**
     * Static representation of the [[bookingType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountDetail.BOOKING_TYPE = new core_1.StringField('bookingType', TimeAccountDetail, 'Edm.String');
    /**
     * Static representation of the [[bookingUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountDetail.BOOKING_UNIT = new core_1.StringField('bookingUnit', TimeAccountDetail, 'Edm.String');
    /**
     * Static representation of the [[calendarEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountDetail.CALENDAR_ENTRY = new core_1.StringField('calendarEntry', TimeAccountDetail, 'Edm.String');
    /**
     * Static representation of the [[changeCalendar]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountDetail.CHANGE_CALENDAR = new core_1.StringField('changeCalendar', TimeAccountDetail, 'Edm.String');
    /**
     * Static representation of the [[comment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountDetail.COMMENT = new core_1.StringField('comment', TimeAccountDetail, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountDetail.CREATED_BY = new core_1.StringField('createdBy', TimeAccountDetail, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountDetail.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', TimeAccountDetail, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[employeeTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountDetail.EMPLOYEE_TIME = new core_1.StringField('employeeTime', TimeAccountDetail, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountDetail.EXTERNAL_CODE = new core_1.StringField('externalCode', TimeAccountDetail, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountDetail.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', TimeAccountDetail, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountDetail.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', TimeAccountDetail, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountDetail.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', TimeAccountDetail, 'Edm.String');
    /**
     * Static representation of the [[payoutAccrualSeparated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountDetail.PAYOUT_ACCRUAL_SEPARATED = new core_1.BooleanField('payoutAccrualSeparated', TimeAccountDetail, 'Edm.Boolean');
    /**
     * Static representation of the [[periodicUpdatePeriodId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountDetail.PERIODIC_UPDATE_PERIOD_ID = new core_1.StringField('periodicUpdatePeriodId', TimeAccountDetail, 'Edm.String');
    /**
     * Static representation of the [[referenceObject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountDetail.REFERENCE_OBJECT = new core_1.StringField('referenceObject', TimeAccountDetail, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[bookingTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountDetail.BOOKING_TYPE_NAV = new core_1.OneToOneLink('bookingTypeNav', TimeAccountDetail, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[bookingUnitNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountDetail.BOOKING_UNIT_NAV = new core_1.OneToOneLink('bookingUnitNav', TimeAccountDetail, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[calendarEntryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountDetail.CALENDAR_ENTRY_NAV = new core_1.OneToOneLink('calendarEntryNav', TimeAccountDetail, EmployeeTimeCalendar_1.EmployeeTimeCalendar);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountDetail.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', TimeAccountDetail, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[employeeTimeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountDetail.EMPLOYEE_TIME_NAV = new core_1.OneToOneLink('employeeTimeNav', TimeAccountDetail, EmployeeTime_1.EmployeeTime);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountDetail.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', TimeAccountDetail, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountDetail.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', TimeAccountDetail, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the TimeAccountDetail entity.
     */
    TimeAccountDetail._allFields = [
        TimeAccountDetail.TIME_ACCOUNT_EXTERNAL_CODE,
        TimeAccountDetail.ACCRUAL_PERIOD_ID,
        TimeAccountDetail.ADVANCED,
        TimeAccountDetail.BOOKING_AMOUNT,
        TimeAccountDetail.BOOKING_DATE,
        TimeAccountDetail.BOOKING_TYPE,
        TimeAccountDetail.BOOKING_UNIT,
        TimeAccountDetail.CALENDAR_ENTRY,
        TimeAccountDetail.CHANGE_CALENDAR,
        TimeAccountDetail.COMMENT,
        TimeAccountDetail.CREATED_BY,
        TimeAccountDetail.CREATED_DATE_TIME,
        TimeAccountDetail.EMPLOYEE_TIME,
        TimeAccountDetail.EXTERNAL_CODE,
        TimeAccountDetail.LAST_MODIFIED_BY,
        TimeAccountDetail.LAST_MODIFIED_DATE_TIME,
        TimeAccountDetail.MDF_SYSTEM_RECORD_STATUS,
        TimeAccountDetail.PAYOUT_ACCRUAL_SEPARATED,
        TimeAccountDetail.PERIODIC_UPDATE_PERIOD_ID,
        TimeAccountDetail.REFERENCE_OBJECT,
        TimeAccountDetail.BOOKING_TYPE_NAV,
        TimeAccountDetail.BOOKING_UNIT_NAV,
        TimeAccountDetail.CALENDAR_ENTRY_NAV,
        TimeAccountDetail.CREATED_BY_NAV,
        TimeAccountDetail.EMPLOYEE_TIME_NAV,
        TimeAccountDetail.LAST_MODIFIED_BY_NAV,
        TimeAccountDetail.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    TimeAccountDetail.ALL_FIELDS = new core_1.AllFields('*', TimeAccountDetail);
    /**
     * All key fields of the TimeAccountDetail entity.
     */
    TimeAccountDetail._keyFields = [TimeAccountDetail.TIME_ACCOUNT_EXTERNAL_CODE, TimeAccountDetail.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property TimeAccountDetail.
     */
    TimeAccountDetail._keys = TimeAccountDetail._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TimeAccountDetail = exports.TimeAccountDetail || (exports.TimeAccountDetail = {}));
exports.TimeAccountDetail = TimeAccountDetail;
//# sourceMappingURL=TimeAccountDetail.js.map