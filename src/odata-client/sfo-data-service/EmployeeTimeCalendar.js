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
var EmployeeTimeCalendarRequestBuilder_1 = require("./EmployeeTimeCalendarRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeeTimeCalendar" of service "SFOData".
 */
var EmployeeTimeCalendar = /** @class */ (function (_super) {
    __extends(EmployeeTimeCalendar, _super);
    function EmployeeTimeCalendar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeTimeCalendar`.
     * @returns A builder that constructs instances of entity type `EmployeeTimeCalendar`.
     */
    EmployeeTimeCalendar.builder = function () {
        return core_1.Entity.entityBuilder(EmployeeTimeCalendar);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeTimeCalendar` entity type.
     * @returns A `EmployeeTimeCalendar` request builder.
     */
    EmployeeTimeCalendar.requestBuilder = function () {
        return new EmployeeTimeCalendarRequestBuilder_1.EmployeeTimeCalendarRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeCalendar`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeTimeCalendar`.
     */
    EmployeeTimeCalendar.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmployeeTimeCalendar);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeTimeCalendar.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeTimeCalendar.
     */
    EmployeeTimeCalendar._entityName = 'EmployeeTimeCalendar';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeTimeCalendar.
     */
    EmployeeTimeCalendar._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmployeeTimeCalendar._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmployeeTimeCalendar;
}(core_1.Entity));
exports.EmployeeTimeCalendar = EmployeeTimeCalendar;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var TimeAccountDetail_1 = require("./TimeAccountDetail");
(function (EmployeeTimeCalendar) {
    /**
     * Static representation of the [[employeeTimeExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCalendar.EMPLOYEE_TIME_EXTERNAL_CODE = new core_1.StringField('EmployeeTime_externalCode', EmployeeTimeCalendar, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCalendar.CREATED_BY = new core_1.StringField('createdBy', EmployeeTimeCalendar, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCalendar.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmployeeTimeCalendar, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[date]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCalendar.DATE = new core_1.DateField('date', EmployeeTimeCalendar, 'Edm.DateTime');
    /**
     * Static representation of the [[deductionQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCalendar.DEDUCTION_QUANTITY = new core_1.BigNumberField('deductionQuantity', EmployeeTimeCalendar, 'Edm.Decimal');
    /**
     * Static representation of the [[endTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCalendar.END_TIME = new core_1.TimeField('endTime', EmployeeTimeCalendar, 'Edm.Time');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCalendar.EXTERNAL_CODE = new core_1.StringField('externalCode', EmployeeTimeCalendar, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCalendar.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmployeeTimeCalendar, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCalendar.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmployeeTimeCalendar, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCalendar.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmployeeTimeCalendar, 'Edm.String');
    /**
     * Static representation of the [[quantityInDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCalendar.QUANTITY_IN_DAYS = new core_1.BigNumberField('quantityInDays', EmployeeTimeCalendar, 'Edm.Decimal');
    /**
     * Static representation of the [[quantityInHours]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCalendar.QUANTITY_IN_HOURS = new core_1.BigNumberField('quantityInHours', EmployeeTimeCalendar, 'Edm.Decimal');
    /**
     * Static representation of the [[startTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCalendar.START_TIME = new core_1.TimeField('startTime', EmployeeTimeCalendar, 'Edm.Time');
    /**
     * Static representation of the [[workScheduleInternalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCalendar.WORK_SCHEDULE_INTERNAL_ID = new core_1.BigNumberField('workScheduleInternalId', EmployeeTimeCalendar, 'Edm.Int64');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCalendar.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', EmployeeTimeCalendar, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCalendar.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', EmployeeTimeCalendar, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCalendar.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', EmployeeTimeCalendar, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[timeAccountDetail]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCalendar.TIME_ACCOUNT_DETAIL = new core_1.Link('timeAccountDetail', EmployeeTimeCalendar, TimeAccountDetail_1.TimeAccountDetail);
    /**
     * All fields of the EmployeeTimeCalendar entity.
     */
    EmployeeTimeCalendar._allFields = [
        EmployeeTimeCalendar.EMPLOYEE_TIME_EXTERNAL_CODE,
        EmployeeTimeCalendar.CREATED_BY,
        EmployeeTimeCalendar.CREATED_DATE_TIME,
        EmployeeTimeCalendar.DATE,
        EmployeeTimeCalendar.DEDUCTION_QUANTITY,
        EmployeeTimeCalendar.END_TIME,
        EmployeeTimeCalendar.EXTERNAL_CODE,
        EmployeeTimeCalendar.LAST_MODIFIED_BY,
        EmployeeTimeCalendar.LAST_MODIFIED_DATE_TIME,
        EmployeeTimeCalendar.MDF_SYSTEM_RECORD_STATUS,
        EmployeeTimeCalendar.QUANTITY_IN_DAYS,
        EmployeeTimeCalendar.QUANTITY_IN_HOURS,
        EmployeeTimeCalendar.START_TIME,
        EmployeeTimeCalendar.WORK_SCHEDULE_INTERNAL_ID,
        EmployeeTimeCalendar.CREATED_BY_NAV,
        EmployeeTimeCalendar.LAST_MODIFIED_BY_NAV,
        EmployeeTimeCalendar.MDF_SYSTEM_RECORD_STATUS_NAV,
        EmployeeTimeCalendar.TIME_ACCOUNT_DETAIL
    ];
    /**
     * All fields selector.
     */
    EmployeeTimeCalendar.ALL_FIELDS = new core_1.AllFields('*', EmployeeTimeCalendar);
    /**
     * All key fields of the EmployeeTimeCalendar entity.
     */
    EmployeeTimeCalendar._keyFields = [EmployeeTimeCalendar.EMPLOYEE_TIME_EXTERNAL_CODE, EmployeeTimeCalendar.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property EmployeeTimeCalendar.
     */
    EmployeeTimeCalendar._keys = EmployeeTimeCalendar._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeTimeCalendar = exports.EmployeeTimeCalendar || (exports.EmployeeTimeCalendar = {}));
exports.EmployeeTimeCalendar = EmployeeTimeCalendar;
//# sourceMappingURL=EmployeeTimeCalendar.js.map