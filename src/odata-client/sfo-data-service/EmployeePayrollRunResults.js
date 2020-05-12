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
var EmployeePayrollRunResultsRequestBuilder_1 = require("./EmployeePayrollRunResultsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeePayrollRunResults" of service "SFOData".
 */
var EmployeePayrollRunResults = /** @class */ (function (_super) {
    __extends(EmployeePayrollRunResults, _super);
    function EmployeePayrollRunResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeePayrollRunResults`.
     * @returns A builder that constructs instances of entity type `EmployeePayrollRunResults`.
     */
    EmployeePayrollRunResults.builder = function () {
        return core_1.Entity.entityBuilder(EmployeePayrollRunResults);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeePayrollRunResults` entity type.
     * @returns A `EmployeePayrollRunResults` request builder.
     */
    EmployeePayrollRunResults.requestBuilder = function () {
        return new EmployeePayrollRunResultsRequestBuilder_1.EmployeePayrollRunResultsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeePayrollRunResults`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeePayrollRunResults`.
     */
    EmployeePayrollRunResults.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmployeePayrollRunResults);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeePayrollRunResults.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeePayrollRunResults.
     */
    EmployeePayrollRunResults._entityName = 'EmployeePayrollRunResults';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeePayrollRunResults.
     */
    EmployeePayrollRunResults._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmployeePayrollRunResults._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmployeePayrollRunResults;
}(core_1.Entity));
exports.EmployeePayrollRunResults = EmployeePayrollRunResults;
var FoCompany_1 = require("./FoCompany");
var User_1 = require("./User");
var Currency_1 = require("./Currency");
var EmployeePayrollRunResultsItems_1 = require("./EmployeePayrollRunResultsItems");
var MdfEnumValue_1 = require("./MdfEnumValue");
var PickListValueV2_1 = require("./PickListValueV2");
var WfRequest_1 = require("./WfRequest");
(function (EmployeePayrollRunResults) {
    /**
     * Static representation of the [[clientId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.CLIENT_ID = new core_1.StringField('clientId', EmployeePayrollRunResults, 'Edm.String');
    /**
     * Static representation of the [[companyId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.COMPANY_ID = new core_1.StringField('companyId', EmployeePayrollRunResults, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.CREATED_BY = new core_1.StringField('createdBy', EmployeePayrollRunResults, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmployeePayrollRunResults, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.CURRENCY = new core_1.StringField('currency', EmployeePayrollRunResults, 'Edm.String');
    /**
     * Static representation of the [[employmentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.EMPLOYMENT_ID = new core_1.StringField('employmentId', EmployeePayrollRunResults, 'Edm.String');
    /**
     * Static representation of the [[endDateWhenPaid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.END_DATE_WHEN_PAID = new core_1.DateField('endDateWhenPaid', EmployeePayrollRunResults, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.EXTERNAL_CODE = new core_1.StringField('externalCode', EmployeePayrollRunResults, 'Edm.String');
    /**
     * Static representation of the [[externalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.EXTERNAL_NAME = new core_1.StringField('externalName', EmployeePayrollRunResults, 'Edm.String');
    /**
     * Static representation of the [[isVoid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.IS_VOID = new core_1.BooleanField('isVoid', EmployeePayrollRunResults, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmployeePayrollRunResults, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmployeePayrollRunResults, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.MDF_SYSTEM_EFFECTIVE_END_DATE = new core_1.DateField('mdfSystemEffectiveEndDate', EmployeePayrollRunResults, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.MDF_SYSTEM_EFFECTIVE_START_DATE = new core_1.DateField('mdfSystemEffectiveStartDate', EmployeePayrollRunResults, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmployeePayrollRunResults, 'Edm.String');
    /**
     * Static representation of the [[payDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.PAY_DATE = new core_1.DateField('payDate', EmployeePayrollRunResults, 'Edm.DateTime');
    /**
     * Static representation of the [[payStatementAvailability]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.PAY_STATEMENT_AVAILABILITY = new core_1.StringField('payStatementAvailability', EmployeePayrollRunResults, 'Edm.String');
    /**
     * Static representation of the [[payrollId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.PAYROLL_ID = new core_1.StringField('payrollId', EmployeePayrollRunResults, 'Edm.String');
    /**
     * Static representation of the [[payrollProviderId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.PAYROLL_PROVIDER_ID = new core_1.StringField('payrollProviderId', EmployeePayrollRunResults, 'Edm.String');
    /**
     * Static representation of the [[payrollProviderPayrollRunType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.PAYROLL_PROVIDER_PAYROLL_RUN_TYPE = new core_1.StringField('payrollProviderPayrollRunType', EmployeePayrollRunResults, 'Edm.String');
    /**
     * Static representation of the [[payrollRunType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.PAYROLL_RUN_TYPE = new core_1.StringField('payrollRunType', EmployeePayrollRunResults, 'Edm.String');
    /**
     * Static representation of the [[personId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.PERSON_ID = new core_1.StringField('personId', EmployeePayrollRunResults, 'Edm.String');
    /**
     * Static representation of the [[sequenceNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.SEQUENCE_NUMBER = new core_1.StringField('sequenceNumber', EmployeePayrollRunResults, 'Edm.String');
    /**
     * Static representation of the [[startDateWhenPaid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.START_DATE_WHEN_PAID = new core_1.DateField('startDateWhenPaid', EmployeePayrollRunResults, 'Edm.DateTime');
    /**
     * Static representation of the [[systemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.SYSTEM_ID = new core_1.StringField('systemId', EmployeePayrollRunResults, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.USER_ID = new core_1.StringField('userId', EmployeePayrollRunResults, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[companyIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.COMPANY_ID_NAV = new core_1.OneToOneLink('companyIdNav', EmployeePayrollRunResults, FoCompany_1.FoCompany);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', EmployeePayrollRunResults, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[currencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.CURRENCY_NAV = new core_1.OneToOneLink('currencyNav', EmployeePayrollRunResults, Currency_1.Currency);
    /**
     * Static representation of the one-to-many navigation property [[employeePayrollRunResultsItems]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.EMPLOYEE_PAYROLL_RUN_RESULTS_ITEMS = new core_1.Link('employeePayrollRunResultsItems', EmployeePayrollRunResults, EmployeePayrollRunResultsItems_1.EmployeePayrollRunResultsItems);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', EmployeePayrollRunResults, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', EmployeePayrollRunResults, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[payStatementAvailabilityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.PAY_STATEMENT_AVAILABILITY_NAV = new core_1.OneToOneLink('payStatementAvailabilityNav', EmployeePayrollRunResults, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[payrollRunTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.PAYROLL_RUN_TYPE_NAV = new core_1.OneToOneLink('payrollRunTypeNav', EmployeePayrollRunResults, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', EmployeePayrollRunResults, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePayrollRunResults.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', EmployeePayrollRunResults, WfRequest_1.WfRequest);
    /**
     * All fields of the EmployeePayrollRunResults entity.
     */
    EmployeePayrollRunResults._allFields = [
        EmployeePayrollRunResults.CLIENT_ID,
        EmployeePayrollRunResults.COMPANY_ID,
        EmployeePayrollRunResults.CREATED_BY,
        EmployeePayrollRunResults.CREATED_DATE_TIME,
        EmployeePayrollRunResults.CURRENCY,
        EmployeePayrollRunResults.EMPLOYMENT_ID,
        EmployeePayrollRunResults.END_DATE_WHEN_PAID,
        EmployeePayrollRunResults.EXTERNAL_CODE,
        EmployeePayrollRunResults.EXTERNAL_NAME,
        EmployeePayrollRunResults.IS_VOID,
        EmployeePayrollRunResults.LAST_MODIFIED_BY,
        EmployeePayrollRunResults.LAST_MODIFIED_DATE_TIME,
        EmployeePayrollRunResults.MDF_SYSTEM_EFFECTIVE_END_DATE,
        EmployeePayrollRunResults.MDF_SYSTEM_EFFECTIVE_START_DATE,
        EmployeePayrollRunResults.MDF_SYSTEM_RECORD_STATUS,
        EmployeePayrollRunResults.PAY_DATE,
        EmployeePayrollRunResults.PAY_STATEMENT_AVAILABILITY,
        EmployeePayrollRunResults.PAYROLL_ID,
        EmployeePayrollRunResults.PAYROLL_PROVIDER_ID,
        EmployeePayrollRunResults.PAYROLL_PROVIDER_PAYROLL_RUN_TYPE,
        EmployeePayrollRunResults.PAYROLL_RUN_TYPE,
        EmployeePayrollRunResults.PERSON_ID,
        EmployeePayrollRunResults.SEQUENCE_NUMBER,
        EmployeePayrollRunResults.START_DATE_WHEN_PAID,
        EmployeePayrollRunResults.SYSTEM_ID,
        EmployeePayrollRunResults.USER_ID,
        EmployeePayrollRunResults.COMPANY_ID_NAV,
        EmployeePayrollRunResults.CREATED_BY_NAV,
        EmployeePayrollRunResults.CURRENCY_NAV,
        EmployeePayrollRunResults.EMPLOYEE_PAYROLL_RUN_RESULTS_ITEMS,
        EmployeePayrollRunResults.LAST_MODIFIED_BY_NAV,
        EmployeePayrollRunResults.MDF_SYSTEM_RECORD_STATUS_NAV,
        EmployeePayrollRunResults.PAY_STATEMENT_AVAILABILITY_NAV,
        EmployeePayrollRunResults.PAYROLL_RUN_TYPE_NAV,
        EmployeePayrollRunResults.USER_ID_NAV,
        EmployeePayrollRunResults.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    EmployeePayrollRunResults.ALL_FIELDS = new core_1.AllFields('*', EmployeePayrollRunResults);
    /**
     * All key fields of the EmployeePayrollRunResults entity.
     */
    EmployeePayrollRunResults._keyFields = [EmployeePayrollRunResults.EXTERNAL_CODE, EmployeePayrollRunResults.MDF_SYSTEM_EFFECTIVE_START_DATE];
    /**
     * Mapping of all key field names to the respective static field property EmployeePayrollRunResults.
     */
    EmployeePayrollRunResults._keys = EmployeePayrollRunResults._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeePayrollRunResults = exports.EmployeePayrollRunResults || (exports.EmployeePayrollRunResults = {}));
exports.EmployeePayrollRunResults = EmployeePayrollRunResults;
//# sourceMappingURL=EmployeePayrollRunResults.js.map