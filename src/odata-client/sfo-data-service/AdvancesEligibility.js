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
var AdvancesEligibilityRequestBuilder_1 = require("./AdvancesEligibilityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "AdvancesEligibility" of service "SFOData".
 */
var AdvancesEligibility = /** @class */ (function (_super) {
    __extends(AdvancesEligibility, _super);
    function AdvancesEligibility() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `AdvancesEligibility`.
     * @returns A builder that constructs instances of entity type `AdvancesEligibility`.
     */
    AdvancesEligibility.builder = function () {
        return core_1.Entity.entityBuilder(AdvancesEligibility);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AdvancesEligibility` entity type.
     * @returns A `AdvancesEligibility` request builder.
     */
    AdvancesEligibility.requestBuilder = function () {
        return new AdvancesEligibilityRequestBuilder_1.AdvancesEligibilityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AdvancesEligibility`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AdvancesEligibility`.
     */
    AdvancesEligibility.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, AdvancesEligibility);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AdvancesEligibility.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AdvancesEligibility.
     */
    AdvancesEligibility._entityName = 'AdvancesEligibility';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AdvancesEligibility.
     */
    AdvancesEligibility._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    AdvancesEligibility._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return AdvancesEligibility;
}(core_1.Entity));
exports.AdvancesEligibility = AdvancesEligibility;
var FoPayComponent_1 = require("./FoPayComponent");
var FoPayComponentGroup_1 = require("./FoPayComponentGroup");
var MdfEnumValue_1 = require("./MdfEnumValue");
var FoCompany_1 = require("./FoCompany");
var User_1 = require("./User");
var Currency_1 = require("./Currency");
var PickListValueV2_1 = require("./PickListValueV2");
var FoWfConfig_1 = require("./FoWfConfig");
var FoDepartment_1 = require("./FoDepartment");
var FoFrequency_1 = require("./FoFrequency");
var FoPayGrade_1 = require("./FoPayGrade");
var WfRequest_1 = require("./WfRequest");
(function (AdvancesEligibility) {
    /**
     * Static representation of the [[advanceType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.ADVANCE_TYPE = new core_1.StringField('advanceType', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[basePayComponent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.BASE_PAY_COMPONENT = new core_1.StringField('basePayComponent', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[basePayComponentGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.BASE_PAY_COMPONENT_GROUP = new core_1.StringField('basePayComponentGroup', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[calculationPercentageOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.CALCULATION_PERCENTAGE_ON = new core_1.StringField('calculationPercentageOn', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[company]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.COMPANY = new core_1.StringField('company', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.CREATED_BY = new core_1.StringField('createdBy', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', AdvancesEligibility, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.CURRENCY = new core_1.StringField('currency', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[currencyGo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.CURRENCY_GO = new core_1.StringField('currencyGO', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[dayOfDeduction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.DAY_OF_DEDUCTION = new core_1.StringField('dayOfDeduction', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[deductionDateFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.DEDUCTION_DATE_FORMAT = new core_1.StringField('deductionDateFormat', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[deductionPayCompOtd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.DEDUCTION_PAY_COMP_OTD = new core_1.StringField('deductionPayCompOTD', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[deductionPayCompRd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.DEDUCTION_PAY_COMP_RD = new core_1.StringField('deductionPayCompRD', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[defaultWorkflow]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.DEFAULT_WORKFLOW = new core_1.StringField('defaultWorkflow', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.DEPARTMENT = new core_1.StringField('department', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[effectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.EFFECTIVE_END_DATE = new core_1.DateField('effectiveEndDate', AdvancesEligibility, 'Edm.DateTime');
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.EFFECTIVE_START_DATE = new core_1.DateField('effectiveStartDate', AdvancesEligibility, 'Edm.DateTime');
    /**
     * Static representation of the [[effectiveStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.EFFECTIVE_STATUS = new core_1.StringField('effectiveStatus', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[eligibilityAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.ELIGIBILITY_AMOUNT = new core_1.BigNumberField('eligibilityAmount', AdvancesEligibility, 'Edm.Decimal');
    /**
     * Static representation of the [[eligibilityRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.ELIGIBILITY_RULE = new core_1.StringField('eligibilityRule', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[enableAutoRecovery]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.ENABLE_AUTO_RECOVERY = new core_1.StringField('enableAutoRecovery', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[exceptionForNumberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.EXCEPTION_FOR_NUMBER_OF_INSTALLMENTS = new core_1.BooleanField('exceptionForNumberOfInstallments', AdvancesEligibility, 'Edm.Boolean');
    /**
     * Static representation of the [[exceptionForRequestedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.EXCEPTION_FOR_REQUESTED_AMOUNT = new core_1.BooleanField('exceptionForRequestedAmount', AdvancesEligibility, 'Edm.Boolean');
    /**
     * Static representation of the [[exceptionWorkflow]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.EXCEPTION_WORKFLOW = new core_1.StringField('exceptionWorkflow', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.EXTERNAL_CODE = new core_1.StringField('externalCode', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[externalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.EXTERNAL_NAME = new core_1.StringField('externalName', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[firstOccurenceStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.FIRST_OCCURENCE_START_DATE = new core_1.DateField('firstOccurenceStartDate', AdvancesEligibility, 'Edm.DateTime');
    /**
     * Static representation of the [[installmentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.INSTALLMENT_AMOUNT = new core_1.BigNumberField('installmentAmount', AdvancesEligibility, 'Edm.Decimal');
    /**
     * Static representation of the [[installmentFrequency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.INSTALLMENT_FREQUENCY = new core_1.StringField('installmentFrequency', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[interestRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.INTEREST_RATE = new core_1.BigNumberField('interestRate', AdvancesEligibility, 'Edm.Decimal');
    /**
     * Static representation of the [[interestType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.INTEREST_TYPE = new core_1.StringField('interestType', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[isUnlimitedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.IS_UNLIMITED_AMOUNT = new core_1.BooleanField('isUnlimitedAmount', AdvancesEligibility, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', AdvancesEligibility, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[maximumEligibilityAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.MAXIMUM_ELIGIBILITY_AMOUNT = new core_1.BigNumberField('maximumEligibilityAmount', AdvancesEligibility, 'Edm.Decimal');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[monthDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.MONTH_DATE = new core_1.StringField('monthDate', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.NUMBER_OF_INSTALLMENTS = new core_1.BigNumberField('numberOfInstallments', AdvancesEligibility, 'Edm.Int64');
    /**
     * Static representation of the [[numberOfInstallmentsEditableByEmployee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.NUMBER_OF_INSTALLMENTS_EDITABLE_BY_EMPLOYEE = new core_1.StringField('numberOfInstallmentsEditableByEmployee', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[numberOfOccurences]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.NUMBER_OF_OCCURENCES = new core_1.BigNumberField('numberOfOccurences', AdvancesEligibility, 'Edm.Int64');
    /**
     * Static representation of the [[occuranceOfDay]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.OCCURANCE_OF_DAY = new core_1.StringField('occuranceOfDay', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[payComponentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.PAY_COMPONENT_TYPE = new core_1.StringField('payComponentType', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[paygrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.PAYGRADE = new core_1.StringField('paygrade', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[periodEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.PERIOD_END_DATE = new core_1.DateField('periodEndDate', AdvancesEligibility, 'Edm.DateTime');
    /**
     * Static representation of the [[periodStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.PERIOD_START_DATE = new core_1.DateField('periodStartDate', AdvancesEligibility, 'Edm.DateTime');
    /**
     * Static representation of the [[recoveryMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.RECOVERY_MODE = new core_1.StringField('recoveryMode', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[recoveryModeEditableByEmployee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.RECOVERY_MODE_EDITABLE_BY_EMPLOYEE = new core_1.StringField('recoveryModeEditableByEmployee', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[unitOfPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.UNIT_OF_PERIOD = new core_1.StringField('unitOfPeriod', AdvancesEligibility, 'Edm.String');
    /**
     * Static representation of the [[validityPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.VALIDITY_PERIOD = new core_1.BigNumberField('validityPeriod', AdvancesEligibility, 'Edm.Int64');
    /**
     * Static representation of the one-to-one navigation property [[advanceTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.ADVANCE_TYPE_NAV = new core_1.OneToOneLink('advanceTypeNav', AdvancesEligibility, FoPayComponent_1.FoPayComponent);
    /**
     * Static representation of the one-to-one navigation property [[basePayComponentGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.BASE_PAY_COMPONENT_GROUP_NAV = new core_1.OneToOneLink('basePayComponentGroupNav', AdvancesEligibility, FoPayComponentGroup_1.FoPayComponentGroup);
    /**
     * Static representation of the one-to-one navigation property [[basePayComponentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.BASE_PAY_COMPONENT_NAV = new core_1.OneToOneLink('basePayComponentNav', AdvancesEligibility, FoPayComponent_1.FoPayComponent);
    /**
     * Static representation of the one-to-one navigation property [[calculationPercentageOnNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.CALCULATION_PERCENTAGE_ON_NAV = new core_1.OneToOneLink('calculationPercentageOnNav', AdvancesEligibility, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[companyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.COMPANY_NAV = new core_1.OneToOneLink('companyNav', AdvancesEligibility, FoCompany_1.FoCompany);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', AdvancesEligibility, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[currencyGoNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.CURRENCY_GO_NAV = new core_1.OneToOneLink('currencyGONav', AdvancesEligibility, Currency_1.Currency);
    /**
     * Static representation of the one-to-one navigation property [[currencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.CURRENCY_NAV = new core_1.OneToOneLink('currencyNav', AdvancesEligibility, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-one navigation property [[dayOfDeductionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.DAY_OF_DEDUCTION_NAV = new core_1.OneToOneLink('dayOfDeductionNav', AdvancesEligibility, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[deductionDateFormatNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.DEDUCTION_DATE_FORMAT_NAV = new core_1.OneToOneLink('deductionDateFormatNav', AdvancesEligibility, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[defaultWorkflowNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.DEFAULT_WORKFLOW_NAV = new core_1.OneToOneLink('defaultWorkflowNav', AdvancesEligibility, FoWfConfig_1.FoWfConfig);
    /**
     * Static representation of the one-to-one navigation property [[departmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.DEPARTMENT_NAV = new core_1.OneToOneLink('departmentNav', AdvancesEligibility, FoDepartment_1.FoDepartment);
    /**
     * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.EFFECTIVE_STATUS_NAV = new core_1.OneToOneLink('effectiveStatusNav', AdvancesEligibility, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[enableAutoRecoveryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.ENABLE_AUTO_RECOVERY_NAV = new core_1.OneToOneLink('enableAutoRecoveryNav', AdvancesEligibility, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[exceptionWorkflowNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.EXCEPTION_WORKFLOW_NAV = new core_1.OneToOneLink('exceptionWorkflowNav', AdvancesEligibility, FoWfConfig_1.FoWfConfig);
    /**
     * Static representation of the one-to-one navigation property [[installmentFrequencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.INSTALLMENT_FREQUENCY_NAV = new core_1.OneToOneLink('installmentFrequencyNav', AdvancesEligibility, FoFrequency_1.FoFrequency);
    /**
     * Static representation of the one-to-one navigation property [[interestTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.INTEREST_TYPE_NAV = new core_1.OneToOneLink('interestTypeNav', AdvancesEligibility, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', AdvancesEligibility, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', AdvancesEligibility, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[monthDateNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.MONTH_DATE_NAV = new core_1.OneToOneLink('monthDateNav', AdvancesEligibility, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[numberOfInstallmentsEditableByEmployeeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.NUMBER_OF_INSTALLMENTS_EDITABLE_BY_EMPLOYEE_NAV = new core_1.OneToOneLink('numberOfInstallmentsEditableByEmployeeNav', AdvancesEligibility, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[occuranceOfDayNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.OCCURANCE_OF_DAY_NAV = new core_1.OneToOneLink('occuranceOfDayNav', AdvancesEligibility, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[payComponentTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.PAY_COMPONENT_TYPE_NAV = new core_1.OneToOneLink('payComponentTypeNav', AdvancesEligibility, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[paygradeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.PAYGRADE_NAV = new core_1.OneToOneLink('paygradeNav', AdvancesEligibility, FoPayGrade_1.FoPayGrade);
    /**
     * Static representation of the one-to-one navigation property [[recoveryModeEditableByEmployeeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.RECOVERY_MODE_EDITABLE_BY_EMPLOYEE_NAV = new core_1.OneToOneLink('recoveryModeEditableByEmployeeNav', AdvancesEligibility, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[recoveryModeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.RECOVERY_MODE_NAV = new core_1.OneToOneLink('recoveryModeNav', AdvancesEligibility, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[unitOfPeriodNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.UNIT_OF_PERIOD_NAV = new core_1.OneToOneLink('unitOfPeriodNav', AdvancesEligibility, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesEligibility.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', AdvancesEligibility, WfRequest_1.WfRequest);
    /**
     * All fields of the AdvancesEligibility entity.
     */
    AdvancesEligibility._allFields = [
        AdvancesEligibility.ADVANCE_TYPE,
        AdvancesEligibility.BASE_PAY_COMPONENT,
        AdvancesEligibility.BASE_PAY_COMPONENT_GROUP,
        AdvancesEligibility.CALCULATION_PERCENTAGE_ON,
        AdvancesEligibility.COMPANY,
        AdvancesEligibility.CREATED_BY,
        AdvancesEligibility.CREATED_DATE_TIME,
        AdvancesEligibility.CURRENCY,
        AdvancesEligibility.CURRENCY_GO,
        AdvancesEligibility.DAY_OF_DEDUCTION,
        AdvancesEligibility.DEDUCTION_DATE_FORMAT,
        AdvancesEligibility.DEDUCTION_PAY_COMP_OTD,
        AdvancesEligibility.DEDUCTION_PAY_COMP_RD,
        AdvancesEligibility.DEFAULT_WORKFLOW,
        AdvancesEligibility.DEPARTMENT,
        AdvancesEligibility.EFFECTIVE_END_DATE,
        AdvancesEligibility.EFFECTIVE_START_DATE,
        AdvancesEligibility.EFFECTIVE_STATUS,
        AdvancesEligibility.ELIGIBILITY_AMOUNT,
        AdvancesEligibility.ELIGIBILITY_RULE,
        AdvancesEligibility.ENABLE_AUTO_RECOVERY,
        AdvancesEligibility.EXCEPTION_FOR_NUMBER_OF_INSTALLMENTS,
        AdvancesEligibility.EXCEPTION_FOR_REQUESTED_AMOUNT,
        AdvancesEligibility.EXCEPTION_WORKFLOW,
        AdvancesEligibility.EXTERNAL_CODE,
        AdvancesEligibility.EXTERNAL_NAME,
        AdvancesEligibility.FIRST_OCCURENCE_START_DATE,
        AdvancesEligibility.INSTALLMENT_AMOUNT,
        AdvancesEligibility.INSTALLMENT_FREQUENCY,
        AdvancesEligibility.INTEREST_RATE,
        AdvancesEligibility.INTEREST_TYPE,
        AdvancesEligibility.IS_UNLIMITED_AMOUNT,
        AdvancesEligibility.LAST_MODIFIED_BY,
        AdvancesEligibility.LAST_MODIFIED_DATE_TIME,
        AdvancesEligibility.MAXIMUM_ELIGIBILITY_AMOUNT,
        AdvancesEligibility.MDF_SYSTEM_RECORD_STATUS,
        AdvancesEligibility.MONTH_DATE,
        AdvancesEligibility.NUMBER_OF_INSTALLMENTS,
        AdvancesEligibility.NUMBER_OF_INSTALLMENTS_EDITABLE_BY_EMPLOYEE,
        AdvancesEligibility.NUMBER_OF_OCCURENCES,
        AdvancesEligibility.OCCURANCE_OF_DAY,
        AdvancesEligibility.PAY_COMPONENT_TYPE,
        AdvancesEligibility.PAYGRADE,
        AdvancesEligibility.PERIOD_END_DATE,
        AdvancesEligibility.PERIOD_START_DATE,
        AdvancesEligibility.RECOVERY_MODE,
        AdvancesEligibility.RECOVERY_MODE_EDITABLE_BY_EMPLOYEE,
        AdvancesEligibility.UNIT_OF_PERIOD,
        AdvancesEligibility.VALIDITY_PERIOD,
        AdvancesEligibility.ADVANCE_TYPE_NAV,
        AdvancesEligibility.BASE_PAY_COMPONENT_GROUP_NAV,
        AdvancesEligibility.BASE_PAY_COMPONENT_NAV,
        AdvancesEligibility.CALCULATION_PERCENTAGE_ON_NAV,
        AdvancesEligibility.COMPANY_NAV,
        AdvancesEligibility.CREATED_BY_NAV,
        AdvancesEligibility.CURRENCY_GO_NAV,
        AdvancesEligibility.CURRENCY_NAV,
        AdvancesEligibility.DAY_OF_DEDUCTION_NAV,
        AdvancesEligibility.DEDUCTION_DATE_FORMAT_NAV,
        AdvancesEligibility.DEFAULT_WORKFLOW_NAV,
        AdvancesEligibility.DEPARTMENT_NAV,
        AdvancesEligibility.EFFECTIVE_STATUS_NAV,
        AdvancesEligibility.ENABLE_AUTO_RECOVERY_NAV,
        AdvancesEligibility.EXCEPTION_WORKFLOW_NAV,
        AdvancesEligibility.INSTALLMENT_FREQUENCY_NAV,
        AdvancesEligibility.INTEREST_TYPE_NAV,
        AdvancesEligibility.LAST_MODIFIED_BY_NAV,
        AdvancesEligibility.MDF_SYSTEM_RECORD_STATUS_NAV,
        AdvancesEligibility.MONTH_DATE_NAV,
        AdvancesEligibility.NUMBER_OF_INSTALLMENTS_EDITABLE_BY_EMPLOYEE_NAV,
        AdvancesEligibility.OCCURANCE_OF_DAY_NAV,
        AdvancesEligibility.PAY_COMPONENT_TYPE_NAV,
        AdvancesEligibility.PAYGRADE_NAV,
        AdvancesEligibility.RECOVERY_MODE_EDITABLE_BY_EMPLOYEE_NAV,
        AdvancesEligibility.RECOVERY_MODE_NAV,
        AdvancesEligibility.UNIT_OF_PERIOD_NAV,
        AdvancesEligibility.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    AdvancesEligibility.ALL_FIELDS = new core_1.AllFields('*', AdvancesEligibility);
    /**
     * All key fields of the AdvancesEligibility entity.
     */
    AdvancesEligibility._keyFields = [AdvancesEligibility.EFFECTIVE_START_DATE, AdvancesEligibility.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property AdvancesEligibility.
     */
    AdvancesEligibility._keys = AdvancesEligibility._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AdvancesEligibility = exports.AdvancesEligibility || (exports.AdvancesEligibility = {}));
exports.AdvancesEligibility = AdvancesEligibility;
//# sourceMappingURL=AdvancesEligibility.js.map