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
var EmployeePayrollRunResultsItemsRequestBuilder_1 = require("./EmployeePayrollRunResultsItemsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeePayrollRunResultsItems" of service "SFOData".
 */
var EmployeePayrollRunResultsItems = /** @class */ (function (_super) {
    __extends(EmployeePayrollRunResultsItems, _super);
    function EmployeePayrollRunResultsItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeePayrollRunResultsItems`.
     * @returns A builder that constructs instances of entity type `EmployeePayrollRunResultsItems`.
     */
    EmployeePayrollRunResultsItems.builder = function () {
        return core_1.Entity.entityBuilder(EmployeePayrollRunResultsItems);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeePayrollRunResultsItems` entity type.
     * @returns A `EmployeePayrollRunResultsItems` request builder.
     */
    EmployeePayrollRunResultsItems.requestBuilder = function () {
        return new EmployeePayrollRunResultsItemsRequestBuilder_1.EmployeePayrollRunResultsItemsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeePayrollRunResultsItems`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeePayrollRunResultsItems`.
     */
    EmployeePayrollRunResultsItems.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmployeePayrollRunResultsItems);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeePayrollRunResultsItems.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeePayrollRunResultsItems.
     */
    EmployeePayrollRunResultsItems._entityName = 'EmployeePayrollRunResultsItems';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeePayrollRunResultsItems.
     */
    EmployeePayrollRunResultsItems._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmployeePayrollRunResultsItems._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmployeePayrollRunResultsItems;
}(core_1.Entity));
exports.EmployeePayrollRunResultsItems = EmployeePayrollRunResultsItems;
var User_1 = require("./User");
var PickListValueV2_1 = require("./PickListValueV2");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (EmployeePayrollRunResultsItems) {
    /**
     * Static representation of the [[employeePayrollRunResultsExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResultsItems.EMPLOYEE_PAYROLL_RUN_RESULTS_EXTERNAL_CODE = new core_1.StringField('EmployeePayrollRunResults_externalCode', EmployeePayrollRunResultsItems, 'Edm.String');
    /**
     * Static representation of the [[employeePayrollRunResultsMdfSystemEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResultsItems.EMPLOYEE_PAYROLL_RUN_RESULTS_MDF_SYSTEM_EFFECTIVE_START_DATE = new core_1.DateField('EmployeePayrollRunResults_mdfSystemEffectiveStartDate', EmployeePayrollRunResultsItems, 'Edm.DateTime');
    /**
     * Static representation of the [[amount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResultsItems.AMOUNT = new core_1.BigNumberField('amount', EmployeePayrollRunResultsItems, 'Edm.Decimal');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResultsItems.CREATED_BY = new core_1.StringField('createdBy', EmployeePayrollRunResultsItems, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResultsItems.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmployeePayrollRunResultsItems, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDateWhenEarned]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResultsItems.END_DATE_WHEN_EARNED = new core_1.DateField('endDateWhenEarned', EmployeePayrollRunResultsItems, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResultsItems.EXTERNAL_CODE = new core_1.StringField('externalCode', EmployeePayrollRunResultsItems, 'Edm.String');
    /**
     * Static representation of the [[externalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResultsItems.EXTERNAL_NAME = new core_1.StringField('externalName', EmployeePayrollRunResultsItems, 'Edm.String');
    /**
     * Static representation of the [[groupingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResultsItems.GROUPING_REASON = new core_1.StringField('groupingReason', EmployeePayrollRunResultsItems, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResultsItems.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmployeePayrollRunResultsItems, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResultsItems.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmployeePayrollRunResultsItems, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResultsItems.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmployeePayrollRunResultsItems, 'Edm.String');
    /**
     * Static representation of the [[payrollProviderGroupingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResultsItems.PAYROLL_PROVIDER_GROUPING_REASON = new core_1.StringField('payrollProviderGroupingReason', EmployeePayrollRunResultsItems, 'Edm.String');
    /**
     * Static representation of the [[payrollProviderGroupingValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResultsItems.PAYROLL_PROVIDER_GROUPING_VALUE = new core_1.StringField('payrollProviderGroupingValue', EmployeePayrollRunResultsItems, 'Edm.String');
    /**
     * Static representation of the [[payrollProviderUnitOfMeasurement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResultsItems.PAYROLL_PROVIDER_UNIT_OF_MEASUREMENT = new core_1.StringField('payrollProviderUnitOfMeasurement', EmployeePayrollRunResultsItems, 'Edm.String');
    /**
     * Static representation of the [[payrollProviderWageType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResultsItems.PAYROLL_PROVIDER_WAGE_TYPE = new core_1.StringField('payrollProviderWageType', EmployeePayrollRunResultsItems, 'Edm.String');
    /**
     * Static representation of the [[quantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResultsItems.QUANTITY = new core_1.BigNumberField('quantity', EmployeePayrollRunResultsItems, 'Edm.Decimal');
    /**
     * Static representation of the [[startDateWhenEarned]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResultsItems.START_DATE_WHEN_EARNED = new core_1.DateField('startDateWhenEarned', EmployeePayrollRunResultsItems, 'Edm.DateTime');
    /**
     * Static representation of the [[unitOfMeasurement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResultsItems.UNIT_OF_MEASUREMENT = new core_1.StringField('unitOfMeasurement', EmployeePayrollRunResultsItems, 'Edm.String');
    /**
     * Static representation of the [[wageType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResultsItems.WAGE_TYPE = new core_1.StringField('wageType', EmployeePayrollRunResultsItems, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResultsItems.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', EmployeePayrollRunResultsItems, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[groupingReasonNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResultsItems.GROUPING_REASON_NAV = new core_1.Link('groupingReasonNav', EmployeePayrollRunResultsItems, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResultsItems.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', EmployeePayrollRunResultsItems, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResultsItems.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', EmployeePayrollRunResultsItems, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wageTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResultsItems.WAGE_TYPE_NAV = new core_1.Link('wageTypeNav', EmployeePayrollRunResultsItems, PickListValueV2_1.PickListValueV2);
    /**
     * All fields of the EmployeePayrollRunResultsItems entity.
     */
    EmployeePayrollRunResultsItems._allFields = [
        EmployeePayrollRunResultsItems.EMPLOYEE_PAYROLL_RUN_RESULTS_EXTERNAL_CODE,
        EmployeePayrollRunResultsItems.EMPLOYEE_PAYROLL_RUN_RESULTS_MDF_SYSTEM_EFFECTIVE_START_DATE,
        EmployeePayrollRunResultsItems.AMOUNT,
        EmployeePayrollRunResultsItems.CREATED_BY,
        EmployeePayrollRunResultsItems.CREATED_DATE_TIME,
        EmployeePayrollRunResultsItems.END_DATE_WHEN_EARNED,
        EmployeePayrollRunResultsItems.EXTERNAL_CODE,
        EmployeePayrollRunResultsItems.EXTERNAL_NAME,
        EmployeePayrollRunResultsItems.GROUPING_REASON,
        EmployeePayrollRunResultsItems.LAST_MODIFIED_BY,
        EmployeePayrollRunResultsItems.LAST_MODIFIED_DATE_TIME,
        EmployeePayrollRunResultsItems.MDF_SYSTEM_RECORD_STATUS,
        EmployeePayrollRunResultsItems.PAYROLL_PROVIDER_GROUPING_REASON,
        EmployeePayrollRunResultsItems.PAYROLL_PROVIDER_GROUPING_VALUE,
        EmployeePayrollRunResultsItems.PAYROLL_PROVIDER_UNIT_OF_MEASUREMENT,
        EmployeePayrollRunResultsItems.PAYROLL_PROVIDER_WAGE_TYPE,
        EmployeePayrollRunResultsItems.QUANTITY,
        EmployeePayrollRunResultsItems.START_DATE_WHEN_EARNED,
        EmployeePayrollRunResultsItems.UNIT_OF_MEASUREMENT,
        EmployeePayrollRunResultsItems.WAGE_TYPE,
        EmployeePayrollRunResultsItems.CREATED_BY_NAV,
        EmployeePayrollRunResultsItems.GROUPING_REASON_NAV,
        EmployeePayrollRunResultsItems.LAST_MODIFIED_BY_NAV,
        EmployeePayrollRunResultsItems.MDF_SYSTEM_RECORD_STATUS_NAV,
        EmployeePayrollRunResultsItems.WAGE_TYPE_NAV
    ];
    /**
     * All fields selector.
     */
    EmployeePayrollRunResultsItems.ALL_FIELDS = new core_1.AllFields('*', EmployeePayrollRunResultsItems);
    /**
     * All key fields of the EmployeePayrollRunResultsItems entity.
     */
    EmployeePayrollRunResultsItems._keyFields = [EmployeePayrollRunResultsItems.EMPLOYEE_PAYROLL_RUN_RESULTS_EXTERNAL_CODE, EmployeePayrollRunResultsItems.EMPLOYEE_PAYROLL_RUN_RESULTS_MDF_SYSTEM_EFFECTIVE_START_DATE, EmployeePayrollRunResultsItems.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property EmployeePayrollRunResultsItems.
     */
    EmployeePayrollRunResultsItems._keys = EmployeePayrollRunResultsItems._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeePayrollRunResultsItems = exports.EmployeePayrollRunResultsItems || (exports.EmployeePayrollRunResultsItems = {}));
exports.EmployeePayrollRunResultsItems = EmployeePayrollRunResultsItems;
//# sourceMappingURL=EmployeePayrollRunResultsItems.js.map