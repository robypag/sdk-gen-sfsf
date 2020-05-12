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
var EmployeeTimeValuationResultRequestBuilder_1 = require("./EmployeeTimeValuationResultRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeeTimeValuationResult" of service "SFOData".
 */
var EmployeeTimeValuationResult = /** @class */ (function (_super) {
    __extends(EmployeeTimeValuationResult, _super);
    function EmployeeTimeValuationResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeTimeValuationResult`.
     * @returns A builder that constructs instances of entity type `EmployeeTimeValuationResult`.
     */
    EmployeeTimeValuationResult.builder = function () {
        return core_1.Entity.entityBuilder(EmployeeTimeValuationResult);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeTimeValuationResult` entity type.
     * @returns A `EmployeeTimeValuationResult` request builder.
     */
    EmployeeTimeValuationResult.requestBuilder = function () {
        return new EmployeeTimeValuationResultRequestBuilder_1.EmployeeTimeValuationResultRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeValuationResult`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeTimeValuationResult`.
     */
    EmployeeTimeValuationResult.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmployeeTimeValuationResult);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeTimeValuationResult.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeTimeValuationResult.
     */
    EmployeeTimeValuationResult._entityName = 'EmployeeTimeValuationResult';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeTimeValuationResult.
     */
    EmployeeTimeValuationResult._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmployeeTimeValuationResult._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmployeeTimeValuationResult;
}(core_1.Entity));
exports.EmployeeTimeValuationResult = EmployeeTimeValuationResult;
var MdfEnumValue_1 = require("./MdfEnumValue");
var FoCostCenter_1 = require("./FoCostCenter");
var User_1 = require("./User");
(function (EmployeeTimeValuationResult) {
    /**
     * Static representation of the [[employeeTimeSheetExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeValuationResult.EMPLOYEE_TIME_SHEET_EXTERNAL_CODE = new core_1.StringField('EmployeeTimeSheet_externalCode', EmployeeTimeValuationResult, 'Edm.String');
    /**
     * Static representation of the [[allowanceType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeValuationResult.ALLOWANCE_TYPE = new core_1.StringField('allowanceType', EmployeeTimeValuationResult, 'Edm.String');
    /**
     * Static representation of the [[approvalStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeValuationResult.APPROVAL_STATUS = new core_1.StringField('approvalStatus', EmployeeTimeValuationResult, 'Edm.String');
    /**
     * Static representation of the [[bookingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeValuationResult.BOOKING_DATE = new core_1.DateField('bookingDate', EmployeeTimeValuationResult, 'Edm.DateTime');
    /**
     * Static representation of the [[costCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeValuationResult.COST_CENTER = new core_1.StringField('costCenter', EmployeeTimeValuationResult, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeValuationResult.CREATED_BY = new core_1.StringField('createdBy', EmployeeTimeValuationResult, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeValuationResult.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmployeeTimeValuationResult, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeValuationResult.EXTERNAL_CODE = new core_1.StringField('externalCode', EmployeeTimeValuationResult, 'Edm.String');
    /**
     * Static representation of the [[hours]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeValuationResult.HOURS = new core_1.BigNumberField('hours', EmployeeTimeValuationResult, 'Edm.Decimal');
    /**
     * Static representation of the [[hoursAndMinutes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeValuationResult.HOURS_AND_MINUTES = new core_1.StringField('hoursAndMinutes', EmployeeTimeValuationResult, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeValuationResult.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmployeeTimeValuationResult, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeValuationResult.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmployeeTimeValuationResult, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeValuationResult.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmployeeTimeValuationResult, 'Edm.String');
    /**
     * Static representation of the [[payTypeExternalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeValuationResult.PAY_TYPE_EXTERNAL_NAME = new core_1.StringField('payTypeExternalName', EmployeeTimeValuationResult, 'Edm.String');
    /**
     * Static representation of the [[payTypeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeValuationResult.PAY_TYPE_NAME = new core_1.StringField('payTypeName', EmployeeTimeValuationResult, 'Edm.String');
    /**
     * Static representation of the [[postingTarget]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeValuationResult.POSTING_TARGET = new core_1.StringField('postingTarget', EmployeeTimeValuationResult, 'Edm.String');
    /**
     * Static representation of the [[timeTypeGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeValuationResult.TIME_TYPE_GROUP = new core_1.StringField('timeTypeGroup', EmployeeTimeValuationResult, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[approvalStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeValuationResult.APPROVAL_STATUS_NAV = new core_1.OneToOneLink('approvalStatusNav', EmployeeTimeValuationResult, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[costCenterNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeValuationResult.COST_CENTER_NAV = new core_1.Link('costCenterNav', EmployeeTimeValuationResult, FoCostCenter_1.FoCostCenter);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeValuationResult.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', EmployeeTimeValuationResult, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeValuationResult.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', EmployeeTimeValuationResult, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeValuationResult.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', EmployeeTimeValuationResult, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[postingTargetNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeValuationResult.POSTING_TARGET_NAV = new core_1.OneToOneLink('postingTargetNav', EmployeeTimeValuationResult, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the EmployeeTimeValuationResult entity.
     */
    EmployeeTimeValuationResult._allFields = [
        EmployeeTimeValuationResult.EMPLOYEE_TIME_SHEET_EXTERNAL_CODE,
        EmployeeTimeValuationResult.ALLOWANCE_TYPE,
        EmployeeTimeValuationResult.APPROVAL_STATUS,
        EmployeeTimeValuationResult.BOOKING_DATE,
        EmployeeTimeValuationResult.COST_CENTER,
        EmployeeTimeValuationResult.CREATED_BY,
        EmployeeTimeValuationResult.CREATED_DATE_TIME,
        EmployeeTimeValuationResult.EXTERNAL_CODE,
        EmployeeTimeValuationResult.HOURS,
        EmployeeTimeValuationResult.HOURS_AND_MINUTES,
        EmployeeTimeValuationResult.LAST_MODIFIED_BY,
        EmployeeTimeValuationResult.LAST_MODIFIED_DATE_TIME,
        EmployeeTimeValuationResult.MDF_SYSTEM_RECORD_STATUS,
        EmployeeTimeValuationResult.PAY_TYPE_EXTERNAL_NAME,
        EmployeeTimeValuationResult.PAY_TYPE_NAME,
        EmployeeTimeValuationResult.POSTING_TARGET,
        EmployeeTimeValuationResult.TIME_TYPE_GROUP,
        EmployeeTimeValuationResult.APPROVAL_STATUS_NAV,
        EmployeeTimeValuationResult.COST_CENTER_NAV,
        EmployeeTimeValuationResult.CREATED_BY_NAV,
        EmployeeTimeValuationResult.LAST_MODIFIED_BY_NAV,
        EmployeeTimeValuationResult.MDF_SYSTEM_RECORD_STATUS_NAV,
        EmployeeTimeValuationResult.POSTING_TARGET_NAV
    ];
    /**
     * All fields selector.
     */
    EmployeeTimeValuationResult.ALL_FIELDS = new core_1.AllFields('*', EmployeeTimeValuationResult);
    /**
     * All key fields of the EmployeeTimeValuationResult entity.
     */
    EmployeeTimeValuationResult._keyFields = [EmployeeTimeValuationResult.EMPLOYEE_TIME_SHEET_EXTERNAL_CODE, EmployeeTimeValuationResult.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property EmployeeTimeValuationResult.
     */
    EmployeeTimeValuationResult._keys = EmployeeTimeValuationResult._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeTimeValuationResult = exports.EmployeeTimeValuationResult || (exports.EmployeeTimeValuationResult = {}));
exports.EmployeeTimeValuationResult = EmployeeTimeValuationResult;
//# sourceMappingURL=EmployeeTimeValuationResult.js.map