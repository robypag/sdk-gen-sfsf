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
var TimeTypeRequestBuilder_1 = require("./TimeTypeRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TimeType" of service "SFOData".
 */
var TimeType = /** @class */ (function (_super) {
    __extends(TimeType, _super);
    function TimeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TimeType`.
     * @returns A builder that constructs instances of entity type `TimeType`.
     */
    TimeType.builder = function () {
        return core_1.Entity.entityBuilder(TimeType);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TimeType` entity type.
     * @returns A `TimeType` request builder.
     */
    TimeType.requestBuilder = function () {
        return new TimeTypeRequestBuilder_1.TimeTypeRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeType`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeType`.
     */
    TimeType.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TimeType);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TimeType.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TimeType.
     */
    TimeType._entityName = 'TimeType';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeType.
     */
    TimeType._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TimeType._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return TimeType;
}(core_1.Entity));
exports.TimeType = TimeType;
var MdfEnumValue_1 = require("./MdfEnumValue");
var FoWfConfig_1 = require("./FoWfConfig");
var AbsenceCountingMethod_1 = require("./AbsenceCountingMethod");
var TimeTypeAus_1 = require("./TimeTypeAus");
var Country_1 = require("./Country");
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var FoEventReason_1 = require("./FoEventReason");
var TimeAccountPostingRule_1 = require("./TimeAccountPostingRule");
var WfRequest_1 = require("./WfRequest");
(function (TimeType) {
    /**
     * Static representation of the [[absenceClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.ABSENCE_CLASS = new core_1.StringField('absenceClass', TimeType, 'Edm.String');
    /**
     * Static representation of the [[absenceRetentionGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.ABSENCE_RETENTION_GROUP = new core_1.StringField('absenceRetentionGroup', TimeType, 'Edm.String');
    /**
     * Static representation of the [[accrualRecalculationRelevance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.ACCRUAL_RECALCULATION_RELEVANCE = new core_1.StringField('accrualRecalculationRelevance', TimeType, 'Edm.String');
    /**
     * Static representation of the [[activateCancellationWorkflow]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.ACTIVATE_CANCELLATION_WORKFLOW = new core_1.BooleanField('activateCancellationWorkflow', TimeType, 'Edm.Boolean');
    /**
     * Static representation of the [[adminWorkflow]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.ADMIN_WORKFLOW = new core_1.StringField('adminWorkflow', TimeType, 'Edm.String');
    /**
     * Static representation of the [[allocationStrategy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.ALLOCATION_STRATEGY = new core_1.StringField('allocationStrategy', TimeType, 'Edm.String');
    /**
     * Static representation of the [[allowedFractionsUnitDay]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.ALLOWED_FRACTIONS_UNIT_DAY = new core_1.StringField('allowedFractionsUnitDay', TimeType, 'Edm.String');
    /**
     * Static representation of the [[allowedFractionsUnitHour]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.ALLOWED_FRACTIONS_UNIT_HOUR = new core_1.StringField('allowedFractionsUnitHour', TimeType, 'Edm.String');
    /**
     * Static representation of the [[allowedRequestingIncrement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.ALLOWED_REQUESTING_INCREMENT = new core_1.BigNumberField('allowedRequestingIncrement', TimeType, 'Edm.Int64');
    /**
     * Static representation of the [[balanceCalculationSetting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.BALANCE_CALCULATION_SETTING = new core_1.StringField('balanceCalculationSetting', TimeType, 'Edm.String');
    /**
     * Static representation of the [[calculationMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.CALCULATION_METHOD = new core_1.StringField('calculationMethod', TimeType, 'Edm.String');
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.CATEGORY = new core_1.StringField('category', TimeType, 'Edm.String');
    /**
     * Static representation of the [[collisionGrouping]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.COLLISION_GROUPING = new core_1.StringField('collisionGrouping', TimeType, 'Edm.String');
    /**
     * Static representation of the [[countingMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.COUNTING_METHOD = new core_1.StringField('countingMethod', TimeType, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.COUNTRY = new core_1.StringField('country', TimeType, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.CREATED_BY = new core_1.StringField('createdBy', TimeType, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', TimeType, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.EXTERNAL_CODE = new core_1.StringField('externalCode', TimeType, 'Edm.String');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', TimeType, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', TimeType, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.EXTERNAL_NAME_EN_DEBUG = new core_1.StringField('externalName_en_DEBUG', TimeType, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', TimeType, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', TimeType, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', TimeType, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.EXTERNAL_NAME_ES_MX = new core_1.StringField('externalName_es_MX', TimeType, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.EXTERNAL_NAME_FR_CA = new core_1.StringField('externalName_fr_CA', TimeType, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', TimeType, 'Edm.String');
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.EXTERNAL_NAME_IT_IT = new core_1.StringField('externalName_it_IT', TimeType, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', TimeType, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', TimeType, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', TimeType, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', TimeType, 'Edm.String');
    /**
     * Static representation of the [[flexibleRequestingAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.FLEXIBLE_REQUESTING_ALLOWED = new core_1.BooleanField('flexibleRequestingAllowed', TimeType, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', TimeType, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', TimeType, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[loaEndEventReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.LOA_END_EVENT_REASON = new core_1.StringField('loaEndEventReason', TimeType, 'Edm.String');
    /**
     * Static representation of the [[loaStartEventReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.LOA_START_EVENT_REASON = new core_1.StringField('loaStartEventReason', TimeType, 'Edm.String');
    /**
     * Static representation of the [[maximumDurationInMonths]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.MAXIMUM_DURATION_IN_MONTHS = new core_1.BigNumberField('maximumDurationInMonths', TimeType, 'Edm.Int64');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', TimeType, 'Edm.String');
    /**
     * Static representation of the [[postingOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.POSTING_ORDER = new core_1.StringField('postingOrder', TimeType, 'Edm.String');
    /**
     * Static representation of the [[postingPriority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.POSTING_PRIORITY = new core_1.StringField('postingPriority', TimeType, 'Edm.String');
    /**
     * Static representation of the [[requestingOnNonWorkingDaysAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.REQUESTING_ON_NON_WORKING_DAYS_ALLOWED = new core_1.BooleanField('requestingOnNonWorkingDaysAllowed', TimeType, 'Edm.Boolean');
    /**
     * Static representation of the [[undeterminedEndDateAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.UNDETERMINED_END_DATE_ALLOWED = new core_1.BooleanField('undeterminedEndDateAllowed', TimeType, 'Edm.Boolean');
    /**
     * Static representation of the [[unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.UNIT = new core_1.StringField('unit', TimeType, 'Edm.String');
    /**
     * Static representation of the [[workflowConfiguration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.WORKFLOW_CONFIGURATION = new core_1.StringField('workflowConfiguration', TimeType, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[absenceClassNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.ABSENCE_CLASS_NAV = new core_1.OneToOneLink('absenceClassNav', TimeType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[accrualRecalculationRelevanceNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.ACCRUAL_RECALCULATION_RELEVANCE_NAV = new core_1.OneToOneLink('accrualRecalculationRelevanceNav', TimeType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[adminWorkflowNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.ADMIN_WORKFLOW_NAV = new core_1.OneToOneLink('adminWorkflowNav', TimeType, FoWfConfig_1.FoWfConfig);
    /**
     * Static representation of the one-to-one navigation property [[allocationStrategyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.ALLOCATION_STRATEGY_NAV = new core_1.OneToOneLink('allocationStrategyNav', TimeType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[allowedFractionsUnitDayNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.ALLOWED_FRACTIONS_UNIT_DAY_NAV = new core_1.OneToOneLink('allowedFractionsUnitDayNav', TimeType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[allowedFractionsUnitHourNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.ALLOWED_FRACTIONS_UNIT_HOUR_NAV = new core_1.OneToOneLink('allowedFractionsUnitHourNav', TimeType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[balanceCalculationSettingNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.BALANCE_CALCULATION_SETTING_NAV = new core_1.OneToOneLink('balanceCalculationSettingNav', TimeType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[calculationMethodNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.CALCULATION_METHOD_NAV = new core_1.OneToOneLink('calculationMethodNav', TimeType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[categoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.CATEGORY_NAV = new core_1.OneToOneLink('categoryNav', TimeType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[countingMethodNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.COUNTING_METHOD_NAV = new core_1.OneToOneLink('countingMethodNav', TimeType, AbsenceCountingMethod_1.AbsenceCountingMethod);
    /**
     * Static representation of the one-to-one navigation property [[countryExtensionAus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.COUNTRY_EXTENSION_AUS = new core_1.OneToOneLink('countryExtensionAUS', TimeType, TimeTypeAus_1.TimeTypeAus);
    /**
     * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.COUNTRY_NAV = new core_1.Link('countryNav', TimeType, Country_1.Country);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', TimeType, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.EXTERNAL_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('externalNameTranslationTextNav', TimeType, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', TimeType, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[loaEndEventReasonNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.LOA_END_EVENT_REASON_NAV = new core_1.Link('loaEndEventReasonNav', TimeType, FoEventReason_1.FoEventReason);
    /**
     * Static representation of the one-to-many navigation property [[loaStartEventReasonNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.LOA_START_EVENT_REASON_NAV = new core_1.Link('loaStartEventReasonNav', TimeType, FoEventReason_1.FoEventReason);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', TimeType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[postingOrderNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.POSTING_ORDER_NAV = new core_1.OneToOneLink('postingOrderNav', TimeType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[postingPriorityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.POSTING_PRIORITY_NAV = new core_1.OneToOneLink('postingPriorityNav', TimeType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[timeAccountPostingRules]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.TIME_ACCOUNT_POSTING_RULES = new core_1.Link('timeAccountPostingRules', TimeType, TimeAccountPostingRule_1.TimeAccountPostingRule);
    /**
     * Static representation of the one-to-one navigation property [[unitNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.UNIT_NAV = new core_1.OneToOneLink('unitNav', TimeType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', TimeType, WfRequest_1.WfRequest);
    /**
     * Static representation of the one-to-one navigation property [[workflowConfigurationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeType.WORKFLOW_CONFIGURATION_NAV = new core_1.OneToOneLink('workflowConfigurationNav', TimeType, FoWfConfig_1.FoWfConfig);
    /**
     * All fields of the TimeType entity.
     */
    TimeType._allFields = [
        TimeType.ABSENCE_CLASS,
        TimeType.ABSENCE_RETENTION_GROUP,
        TimeType.ACCRUAL_RECALCULATION_RELEVANCE,
        TimeType.ACTIVATE_CANCELLATION_WORKFLOW,
        TimeType.ADMIN_WORKFLOW,
        TimeType.ALLOCATION_STRATEGY,
        TimeType.ALLOWED_FRACTIONS_UNIT_DAY,
        TimeType.ALLOWED_FRACTIONS_UNIT_HOUR,
        TimeType.ALLOWED_REQUESTING_INCREMENT,
        TimeType.BALANCE_CALCULATION_SETTING,
        TimeType.CALCULATION_METHOD,
        TimeType.CATEGORY,
        TimeType.COLLISION_GROUPING,
        TimeType.COUNTING_METHOD,
        TimeType.COUNTRY,
        TimeType.CREATED_BY,
        TimeType.CREATED_DATE_TIME,
        TimeType.EXTERNAL_CODE,
        TimeType.EXTERNAL_NAME_DE_DE,
        TimeType.EXTERNAL_NAME_DEFAULT_VALUE,
        TimeType.EXTERNAL_NAME_EN_DEBUG,
        TimeType.EXTERNAL_NAME_EN_GB,
        TimeType.EXTERNAL_NAME_EN_US,
        TimeType.EXTERNAL_NAME_ES_ES,
        TimeType.EXTERNAL_NAME_ES_MX,
        TimeType.EXTERNAL_NAME_FR_CA,
        TimeType.EXTERNAL_NAME_FR_FR,
        TimeType.EXTERNAL_NAME_IT_IT,
        TimeType.EXTERNAL_NAME_LOCALIZED,
        TimeType.EXTERNAL_NAME_NL_NL,
        TimeType.EXTERNAL_NAME_PT_BR,
        TimeType.EXTERNAL_NAME_ZH_CN,
        TimeType.FLEXIBLE_REQUESTING_ALLOWED,
        TimeType.LAST_MODIFIED_BY,
        TimeType.LAST_MODIFIED_DATE_TIME,
        TimeType.LOA_END_EVENT_REASON,
        TimeType.LOA_START_EVENT_REASON,
        TimeType.MAXIMUM_DURATION_IN_MONTHS,
        TimeType.MDF_SYSTEM_RECORD_STATUS,
        TimeType.POSTING_ORDER,
        TimeType.POSTING_PRIORITY,
        TimeType.REQUESTING_ON_NON_WORKING_DAYS_ALLOWED,
        TimeType.UNDETERMINED_END_DATE_ALLOWED,
        TimeType.UNIT,
        TimeType.WORKFLOW_CONFIGURATION,
        TimeType.ABSENCE_CLASS_NAV,
        TimeType.ACCRUAL_RECALCULATION_RELEVANCE_NAV,
        TimeType.ADMIN_WORKFLOW_NAV,
        TimeType.ALLOCATION_STRATEGY_NAV,
        TimeType.ALLOWED_FRACTIONS_UNIT_DAY_NAV,
        TimeType.ALLOWED_FRACTIONS_UNIT_HOUR_NAV,
        TimeType.BALANCE_CALCULATION_SETTING_NAV,
        TimeType.CALCULATION_METHOD_NAV,
        TimeType.CATEGORY_NAV,
        TimeType.COUNTING_METHOD_NAV,
        TimeType.COUNTRY_EXTENSION_AUS,
        TimeType.COUNTRY_NAV,
        TimeType.CREATED_BY_NAV,
        TimeType.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
        TimeType.LAST_MODIFIED_BY_NAV,
        TimeType.LOA_END_EVENT_REASON_NAV,
        TimeType.LOA_START_EVENT_REASON_NAV,
        TimeType.MDF_SYSTEM_RECORD_STATUS_NAV,
        TimeType.POSTING_ORDER_NAV,
        TimeType.POSTING_PRIORITY_NAV,
        TimeType.TIME_ACCOUNT_POSTING_RULES,
        TimeType.UNIT_NAV,
        TimeType.WF_REQUEST_NAV,
        TimeType.WORKFLOW_CONFIGURATION_NAV
    ];
    /**
     * All fields selector.
     */
    TimeType.ALL_FIELDS = new core_1.AllFields('*', TimeType);
    /**
     * All key fields of the TimeType entity.
     */
    TimeType._keyFields = [TimeType.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property TimeType.
     */
    TimeType._keys = TimeType._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TimeType = exports.TimeType || (exports.TimeType = {}));
exports.TimeType = TimeType;
//# sourceMappingURL=TimeType.js.map