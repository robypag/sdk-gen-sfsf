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
var TimeAccountTypeRequestBuilder_1 = require("./TimeAccountTypeRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TimeAccountType" of service "SFOData".
 */
var TimeAccountType = /** @class */ (function (_super) {
    __extends(TimeAccountType, _super);
    function TimeAccountType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TimeAccountType`.
     * @returns A builder that constructs instances of entity type `TimeAccountType`.
     */
    TimeAccountType.builder = function () {
        return core_1.Entity.entityBuilder(TimeAccountType);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TimeAccountType` entity type.
     * @returns A `TimeAccountType` request builder.
     */
    TimeAccountType.requestBuilder = function () {
        return new TimeAccountTypeRequestBuilder_1.TimeAccountTypeRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccountType`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeAccountType`.
     */
    TimeAccountType.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TimeAccountType);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TimeAccountType.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TimeAccountType.
     */
    TimeAccountType._entityName = 'TimeAccountType';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeAccountType.
     */
    TimeAccountType._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TimeAccountType._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return TimeAccountType;
}(core_1.Entity));
exports.TimeAccountType = TimeAccountType;
var MdfEnumValue_1 = require("./MdfEnumValue");
var Country_1 = require("./Country");
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var FoPayComponent_1 = require("./FoPayComponent");
var FoPayComponentGroup_1 = require("./FoPayComponentGroup");
var WfRequest_1 = require("./WfRequest");
(function (TimeAccountType) {
    /**
     * Static representation of the [[accountBookingOffsetInMonths]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ACCOUNT_BOOKING_OFFSET_IN_MONTHS = new core_1.BigNumberField('accountBookingOffsetInMonths', TimeAccountType, 'Edm.Int64');
    /**
     * Static representation of the [[accountCreationAutomationLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ACCOUNT_CREATION_AUTOMATION_LEVEL = new core_1.StringField('accountCreationAutomationLevel', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[accountCreationDay]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ACCOUNT_CREATION_DAY = new core_1.BigNumberField('accountCreationDay', TimeAccountType, 'Edm.Int64');
    /**
     * Static representation of the [[accountCreationMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ACCOUNT_CREATION_MONTH = new core_1.BigNumberField('accountCreationMonth', TimeAccountType, 'Edm.Int64');
    /**
     * Static representation of the [[accountCreationOffsetInMonths]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ACCOUNT_CREATION_OFFSET_IN_MONTHS = new core_1.BigNumberField('accountCreationOffsetInMonths', TimeAccountType, 'Edm.Int64');
    /**
     * Static representation of the [[accountCreationReferenceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ACCOUNT_CREATION_REFERENCE_DATE = new core_1.StringField('accountCreationReferenceDate', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[accountDetailRetentionGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ACCOUNT_DETAIL_RETENTION_GROUP = new core_1.StringField('accountDetailRetentionGroup', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[accountRetentionGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ACCOUNT_RETENTION_GROUP = new core_1.StringField('accountRetentionGroup', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[accrualAutomationLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ACCRUAL_AUTOMATION_LEVEL = new core_1.StringField('accrualAutomationLevel', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[accrualCalculationMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ACCRUAL_CALCULATION_METHOD = new core_1.StringField('accrualCalculationMethod', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[accrualCreationOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ACCRUAL_CREATION_OFFSET = new core_1.BigNumberField('accrualCreationOffset', TimeAccountType, 'Edm.Int64');
    /**
     * Static representation of the [[accrualFrequency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ACCRUAL_FREQUENCY = new core_1.StringField('accrualFrequency', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[accrualFrequencyStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ACCRUAL_FREQUENCY_START_DATE = new core_1.DateField('accrualFrequencyStartDate', TimeAccountType, 'Edm.DateTime');
    /**
     * Static representation of the [[accrualPeriodStartDay]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ACCRUAL_PERIOD_START_DAY = new core_1.BigNumberField('accrualPeriodStartDay', TimeAccountType, 'Edm.Int64');
    /**
     * Static representation of the [[accrualPeriodStartMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ACCRUAL_PERIOD_START_MONTH = new core_1.BigNumberField('accrualPeriodStartMonth', TimeAccountType, 'Edm.Int64');
    /**
     * Static representation of the [[accrualRecalculationPostingMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ACCRUAL_RECALCULATION_POSTING_METHOD = new core_1.StringField('accrualRecalculationPostingMethod', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[accrualRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ACCRUAL_RULE = new core_1.StringField('accrualRule', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[accrualTransferDateRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ACCRUAL_TRANSFER_DATE_RULE = new core_1.StringField('accrualTransferDateRule', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[accrualTransferRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ACCRUAL_TRANSFER_RULE = new core_1.StringField('accrualTransferRule', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[accrualWaitingPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ACCRUAL_WAITING_PERIOD = new core_1.BigNumberField('accrualWaitingPeriod', TimeAccountType, 'Edm.Int64');
    /**
     * Static representation of the [[accrualWaitingPeriodUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ACCRUAL_WAITING_PERIOD_UNIT = new core_1.StringField('accrualWaitingPeriodUnit', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[advancesAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ADVANCES_ALLOWED = new core_1.BooleanField('advancesAllowed', TimeAccountType, 'Edm.Boolean');
    /**
     * Static representation of the [[allowPayoutWithSimulation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ALLOW_PAYOUT_WITH_SIMULATION = new core_1.StringField('allowPayoutWithSimulation', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[calculateSnapshotApprovedAbsenceBalance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.CALCULATE_SNAPSHOT_APPROVED_ABSENCE_BALANCE = new core_1.BooleanField('calculateSnapshotApprovedAbsenceBalance', TimeAccountType, 'Edm.Boolean');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.COUNTRY = new core_1.StringField('country', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.CREATED_BY = new core_1.StringField('createdBy', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', TimeAccountType, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[creation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.CREATION = new core_1.StringField('creation', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[entitlementMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ENTITLEMENT_METHOD = new core_1.StringField('entitlementMethod', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.EXTERNAL_CODE = new core_1.StringField('externalCode', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.EXTERNAL_NAME_EN_DEBUG = new core_1.StringField('externalName_en_DEBUG', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.EXTERNAL_NAME_ES_MX = new core_1.StringField('externalName_es_MX', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.EXTERNAL_NAME_FR_CA = new core_1.StringField('externalName_fr_CA', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.EXTERNAL_NAME_IT_IT = new core_1.StringField('externalName_it_IT', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[hireRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.HIRE_RULE = new core_1.StringField('hireRule', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[initialAccrualTransferDateRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.INITIAL_ACCRUAL_TRANSFER_DATE_RULE = new core_1.StringField('initialAccrualTransferDateRule', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[initialFlexibleAccountStartDateRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.INITIAL_FLEXIBLE_ACCOUNT_START_DATE_RULE = new core_1.StringField('initialFlexibleAccountStartDateRule', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[interimRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.INTERIM_RULE = new core_1.StringField('interimRule', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', TimeAccountType, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[levelOfSimulationPrecision]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.LEVEL_OF_SIMULATION_PRECISION = new core_1.StringField('levelOfSimulationPrecision', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[maximumSimulationHorizonInMonths]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.MAXIMUM_SIMULATION_HORIZON_IN_MONTHS = new core_1.BigNumberField('maximumSimulationHorizonInMonths', TimeAccountType, 'Edm.Int64');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[minimumBalanceAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.MINIMUM_BALANCE_ALLOWED = new core_1.BigNumberField('minimumBalanceAllowed', TimeAccountType, 'Edm.Decimal');
    /**
     * Static representation of the [[payComponent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.PAY_COMPONENT = new core_1.StringField('payComponent', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[payComponentAccrualSeparated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.PAY_COMPONENT_ACCRUAL_SEPARATED = new core_1.StringField('payComponentAccrualSeparated', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[payComponentGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.PAY_COMPONENT_GROUP = new core_1.StringField('payComponentGroup', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[payComponentTermination]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.PAY_COMPONENT_TERMINATION = new core_1.StringField('payComponentTermination', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[payComponentTerminationAccrualSeparated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.PAY_COMPONENT_TERMINATION_ACCRUAL_SEPARATED = new core_1.StringField('payComponentTerminationAccrualSeparated', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[payoutEligibility]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.PAYOUT_ELIGIBILITY = new core_1.StringField('payoutEligibility', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[pepCalendarAutomationLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.PEP_CALENDAR_AUTOMATION_LEVEL = new core_1.StringField('pepCalendarAutomationLevel', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[periodEndProcessingRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.PERIOD_END_PROCESSING_RULE = new core_1.StringField('periodEndProcessingRule', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[periodicTimeAccountUpdateProfile]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.PERIODIC_TIME_ACCOUNT_UPDATE_PROFILE = new core_1.StringField('periodicTimeAccountUpdateProfile', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[postingOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.POSTING_ORDER = new core_1.StringField('postingOrder', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[secondAccrualCreationOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.SECOND_ACCRUAL_CREATION_OFFSET = new core_1.BigNumberField('secondAccrualCreationOffset', TimeAccountType, 'Edm.Int64');
    /**
     * Static representation of the [[simulateAccruals]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.SIMULATE_ACCRUALS = new core_1.BooleanField('simulateAccruals', TimeAccountType, 'Edm.Boolean');
    /**
     * Static representation of the [[simulationRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.SIMULATION_RULE = new core_1.StringField('simulationRule', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[snapshotsAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.SNAPSHOTS_ALLOWED = new core_1.BooleanField('snapshotsAllowed', TimeAccountType, 'Edm.Boolean');
    /**
     * Static representation of the [[terminationRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.TERMINATION_RULE = new core_1.StringField('terminationRule', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[terminationRuleDataEffectiveDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.TERMINATION_RULE_DATA_EFFECTIVE_DATE = new core_1.StringField('terminationRuleDataEffectiveDate', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[timeAccountPayoutProfile]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.TIME_ACCOUNT_PAYOUT_PROFILE = new core_1.StringField('timeAccountPayoutProfile', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the [[unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.UNIT = new core_1.StringField('unit', TimeAccountType, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[accountCreationAutomationLevelNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ACCOUNT_CREATION_AUTOMATION_LEVEL_NAV = new core_1.OneToOneLink('accountCreationAutomationLevelNav', TimeAccountType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[accountCreationReferenceDateNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ACCOUNT_CREATION_REFERENCE_DATE_NAV = new core_1.OneToOneLink('accountCreationReferenceDateNav', TimeAccountType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[accrualAutomationLevelNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ACCRUAL_AUTOMATION_LEVEL_NAV = new core_1.OneToOneLink('accrualAutomationLevelNav', TimeAccountType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[accrualCalculationMethodNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ACCRUAL_CALCULATION_METHOD_NAV = new core_1.OneToOneLink('accrualCalculationMethodNav', TimeAccountType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[accrualFrequencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ACCRUAL_FREQUENCY_NAV = new core_1.OneToOneLink('accrualFrequencyNav', TimeAccountType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[accrualRecalculationPostingMethodNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ACCRUAL_RECALCULATION_POSTING_METHOD_NAV = new core_1.OneToOneLink('accrualRecalculationPostingMethodNav', TimeAccountType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[accrualWaitingPeriodUnitNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ACCRUAL_WAITING_PERIOD_UNIT_NAV = new core_1.OneToOneLink('accrualWaitingPeriodUnitNav', TimeAccountType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[allowPayoutWithSimulationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ALLOW_PAYOUT_WITH_SIMULATION_NAV = new core_1.OneToOneLink('allowPayoutWithSimulationNav', TimeAccountType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.COUNTRY_NAV = new core_1.Link('countryNav', TimeAccountType, Country_1.Country);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', TimeAccountType, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[creationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.CREATION_NAV = new core_1.OneToOneLink('creationNav', TimeAccountType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[entitlementMethodNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.ENTITLEMENT_METHOD_NAV = new core_1.OneToOneLink('entitlementMethodNav', TimeAccountType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.EXTERNAL_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('externalNameTranslationTextNav', TimeAccountType, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', TimeAccountType, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[levelOfSimulationPrecisionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.LEVEL_OF_SIMULATION_PRECISION_NAV = new core_1.OneToOneLink('levelOfSimulationPrecisionNav', TimeAccountType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', TimeAccountType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[payComponentAccrualSeparatedNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.PAY_COMPONENT_ACCRUAL_SEPARATED_NAV = new core_1.Link('payComponentAccrualSeparatedNav', TimeAccountType, FoPayComponent_1.FoPayComponent);
    /**
     * Static representation of the one-to-many navigation property [[payComponentGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.PAY_COMPONENT_GROUP_NAV = new core_1.Link('payComponentGroupNav', TimeAccountType, FoPayComponentGroup_1.FoPayComponentGroup);
    /**
     * Static representation of the one-to-many navigation property [[payComponentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.PAY_COMPONENT_NAV = new core_1.Link('payComponentNav', TimeAccountType, FoPayComponent_1.FoPayComponent);
    /**
     * Static representation of the one-to-many navigation property [[payComponentTerminationAccrualSeparatedNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.PAY_COMPONENT_TERMINATION_ACCRUAL_SEPARATED_NAV = new core_1.Link('payComponentTerminationAccrualSeparatedNav', TimeAccountType, FoPayComponent_1.FoPayComponent);
    /**
     * Static representation of the one-to-many navigation property [[payComponentTerminationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.PAY_COMPONENT_TERMINATION_NAV = new core_1.Link('payComponentTerminationNav', TimeAccountType, FoPayComponent_1.FoPayComponent);
    /**
     * Static representation of the one-to-one navigation property [[payoutEligibilityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.PAYOUT_ELIGIBILITY_NAV = new core_1.OneToOneLink('payoutEligibilityNav', TimeAccountType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[pepCalendarAutomationLevelNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.PEP_CALENDAR_AUTOMATION_LEVEL_NAV = new core_1.OneToOneLink('pepCalendarAutomationLevelNav', TimeAccountType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[postingOrderNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.POSTING_ORDER_NAV = new core_1.OneToOneLink('postingOrderNav', TimeAccountType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[terminationRuleDataEffectiveDateNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.TERMINATION_RULE_DATA_EFFECTIVE_DATE_NAV = new core_1.OneToOneLink('terminationRuleDataEffectiveDateNav', TimeAccountType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[unitNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.UNIT_NAV = new core_1.OneToOneLink('unitNav', TimeAccountType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', TimeAccountType, WfRequest_1.WfRequest);
    /**
     * All fields of the TimeAccountType entity.
     */
    TimeAccountType._allFields = [
        TimeAccountType.ACCOUNT_BOOKING_OFFSET_IN_MONTHS,
        TimeAccountType.ACCOUNT_CREATION_AUTOMATION_LEVEL,
        TimeAccountType.ACCOUNT_CREATION_DAY,
        TimeAccountType.ACCOUNT_CREATION_MONTH,
        TimeAccountType.ACCOUNT_CREATION_OFFSET_IN_MONTHS,
        TimeAccountType.ACCOUNT_CREATION_REFERENCE_DATE,
        TimeAccountType.ACCOUNT_DETAIL_RETENTION_GROUP,
        TimeAccountType.ACCOUNT_RETENTION_GROUP,
        TimeAccountType.ACCRUAL_AUTOMATION_LEVEL,
        TimeAccountType.ACCRUAL_CALCULATION_METHOD,
        TimeAccountType.ACCRUAL_CREATION_OFFSET,
        TimeAccountType.ACCRUAL_FREQUENCY,
        TimeAccountType.ACCRUAL_FREQUENCY_START_DATE,
        TimeAccountType.ACCRUAL_PERIOD_START_DAY,
        TimeAccountType.ACCRUAL_PERIOD_START_MONTH,
        TimeAccountType.ACCRUAL_RECALCULATION_POSTING_METHOD,
        TimeAccountType.ACCRUAL_RULE,
        TimeAccountType.ACCRUAL_TRANSFER_DATE_RULE,
        TimeAccountType.ACCRUAL_TRANSFER_RULE,
        TimeAccountType.ACCRUAL_WAITING_PERIOD,
        TimeAccountType.ACCRUAL_WAITING_PERIOD_UNIT,
        TimeAccountType.ADVANCES_ALLOWED,
        TimeAccountType.ALLOW_PAYOUT_WITH_SIMULATION,
        TimeAccountType.CALCULATE_SNAPSHOT_APPROVED_ABSENCE_BALANCE,
        TimeAccountType.COUNTRY,
        TimeAccountType.CREATED_BY,
        TimeAccountType.CREATED_DATE_TIME,
        TimeAccountType.CREATION,
        TimeAccountType.ENTITLEMENT_METHOD,
        TimeAccountType.EXTERNAL_CODE,
        TimeAccountType.EXTERNAL_NAME_DE_DE,
        TimeAccountType.EXTERNAL_NAME_DEFAULT_VALUE,
        TimeAccountType.EXTERNAL_NAME_EN_DEBUG,
        TimeAccountType.EXTERNAL_NAME_EN_GB,
        TimeAccountType.EXTERNAL_NAME_EN_US,
        TimeAccountType.EXTERNAL_NAME_ES_ES,
        TimeAccountType.EXTERNAL_NAME_ES_MX,
        TimeAccountType.EXTERNAL_NAME_FR_CA,
        TimeAccountType.EXTERNAL_NAME_FR_FR,
        TimeAccountType.EXTERNAL_NAME_IT_IT,
        TimeAccountType.EXTERNAL_NAME_LOCALIZED,
        TimeAccountType.EXTERNAL_NAME_NL_NL,
        TimeAccountType.EXTERNAL_NAME_PT_BR,
        TimeAccountType.EXTERNAL_NAME_ZH_CN,
        TimeAccountType.HIRE_RULE,
        TimeAccountType.INITIAL_ACCRUAL_TRANSFER_DATE_RULE,
        TimeAccountType.INITIAL_FLEXIBLE_ACCOUNT_START_DATE_RULE,
        TimeAccountType.INTERIM_RULE,
        TimeAccountType.LAST_MODIFIED_BY,
        TimeAccountType.LAST_MODIFIED_DATE_TIME,
        TimeAccountType.LEVEL_OF_SIMULATION_PRECISION,
        TimeAccountType.MAXIMUM_SIMULATION_HORIZON_IN_MONTHS,
        TimeAccountType.MDF_SYSTEM_RECORD_STATUS,
        TimeAccountType.MINIMUM_BALANCE_ALLOWED,
        TimeAccountType.PAY_COMPONENT,
        TimeAccountType.PAY_COMPONENT_ACCRUAL_SEPARATED,
        TimeAccountType.PAY_COMPONENT_GROUP,
        TimeAccountType.PAY_COMPONENT_TERMINATION,
        TimeAccountType.PAY_COMPONENT_TERMINATION_ACCRUAL_SEPARATED,
        TimeAccountType.PAYOUT_ELIGIBILITY,
        TimeAccountType.PEP_CALENDAR_AUTOMATION_LEVEL,
        TimeAccountType.PERIOD_END_PROCESSING_RULE,
        TimeAccountType.PERIODIC_TIME_ACCOUNT_UPDATE_PROFILE,
        TimeAccountType.POSTING_ORDER,
        TimeAccountType.SECOND_ACCRUAL_CREATION_OFFSET,
        TimeAccountType.SIMULATE_ACCRUALS,
        TimeAccountType.SIMULATION_RULE,
        TimeAccountType.SNAPSHOTS_ALLOWED,
        TimeAccountType.TERMINATION_RULE,
        TimeAccountType.TERMINATION_RULE_DATA_EFFECTIVE_DATE,
        TimeAccountType.TIME_ACCOUNT_PAYOUT_PROFILE,
        TimeAccountType.UNIT,
        TimeAccountType.ACCOUNT_CREATION_AUTOMATION_LEVEL_NAV,
        TimeAccountType.ACCOUNT_CREATION_REFERENCE_DATE_NAV,
        TimeAccountType.ACCRUAL_AUTOMATION_LEVEL_NAV,
        TimeAccountType.ACCRUAL_CALCULATION_METHOD_NAV,
        TimeAccountType.ACCRUAL_FREQUENCY_NAV,
        TimeAccountType.ACCRUAL_RECALCULATION_POSTING_METHOD_NAV,
        TimeAccountType.ACCRUAL_WAITING_PERIOD_UNIT_NAV,
        TimeAccountType.ALLOW_PAYOUT_WITH_SIMULATION_NAV,
        TimeAccountType.COUNTRY_NAV,
        TimeAccountType.CREATED_BY_NAV,
        TimeAccountType.CREATION_NAV,
        TimeAccountType.ENTITLEMENT_METHOD_NAV,
        TimeAccountType.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
        TimeAccountType.LAST_MODIFIED_BY_NAV,
        TimeAccountType.LEVEL_OF_SIMULATION_PRECISION_NAV,
        TimeAccountType.MDF_SYSTEM_RECORD_STATUS_NAV,
        TimeAccountType.PAY_COMPONENT_ACCRUAL_SEPARATED_NAV,
        TimeAccountType.PAY_COMPONENT_GROUP_NAV,
        TimeAccountType.PAY_COMPONENT_NAV,
        TimeAccountType.PAY_COMPONENT_TERMINATION_ACCRUAL_SEPARATED_NAV,
        TimeAccountType.PAY_COMPONENT_TERMINATION_NAV,
        TimeAccountType.PAYOUT_ELIGIBILITY_NAV,
        TimeAccountType.PEP_CALENDAR_AUTOMATION_LEVEL_NAV,
        TimeAccountType.POSTING_ORDER_NAV,
        TimeAccountType.TERMINATION_RULE_DATA_EFFECTIVE_DATE_NAV,
        TimeAccountType.UNIT_NAV,
        TimeAccountType.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    TimeAccountType.ALL_FIELDS = new core_1.AllFields('*', TimeAccountType);
    /**
     * All key fields of the TimeAccountType entity.
     */
    TimeAccountType._keyFields = [TimeAccountType.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property TimeAccountType.
     */
    TimeAccountType._keys = TimeAccountType._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TimeAccountType = exports.TimeAccountType || (exports.TimeAccountType = {}));
exports.TimeAccountType = TimeAccountType;
//# sourceMappingURL=TimeAccountType.js.map