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
var WorkScheduleRequestBuilder_1 = require("./WorkScheduleRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "WorkSchedule" of service "SFOData".
 */
var WorkSchedule = /** @class */ (function (_super) {
    __extends(WorkSchedule, _super);
    function WorkSchedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `WorkSchedule`.
     * @returns A builder that constructs instances of entity type `WorkSchedule`.
     */
    WorkSchedule.builder = function () {
        return core_1.Entity.entityBuilder(WorkSchedule);
    };
    /**
     * Returns a request builder to construct requests for operations on the `WorkSchedule` entity type.
     * @returns A `WorkSchedule` request builder.
     */
    WorkSchedule.requestBuilder = function () {
        return new WorkScheduleRequestBuilder_1.WorkScheduleRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WorkSchedule`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WorkSchedule`.
     */
    WorkSchedule.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, WorkSchedule);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    WorkSchedule.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for WorkSchedule.
     */
    WorkSchedule._entityName = 'WorkSchedule';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WorkSchedule.
     */
    WorkSchedule._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    WorkSchedule._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return WorkSchedule;
}(core_1.Entity));
exports.WorkSchedule = WorkSchedule;
var Country_1 = require("./Country");
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
var ShiftClassification_1 = require("./ShiftClassification");
var WfRequest_1 = require("./WfRequest");
var WorkScheduleDayModelAssignment_1 = require("./WorkScheduleDayModelAssignment");
var WorkScheduleDay_1 = require("./WorkScheduleDay");
(function (WorkSchedule) {
    /**
     * Static representation of the [[averageHoursPerDay]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.AVERAGE_HOURS_PER_DAY = new core_1.BigNumberField('averageHoursPerDay', WorkSchedule, 'Edm.Decimal');
    /**
     * Static representation of the [[averageHoursPerMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.AVERAGE_HOURS_PER_MONTH = new core_1.BigNumberField('averageHoursPerMonth', WorkSchedule, 'Edm.Decimal');
    /**
     * Static representation of the [[averageHoursPerWeek]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.AVERAGE_HOURS_PER_WEEK = new core_1.BigNumberField('averageHoursPerWeek', WorkSchedule, 'Edm.Decimal');
    /**
     * Static representation of the [[averageHoursPerYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.AVERAGE_HOURS_PER_YEAR = new core_1.BigNumberField('averageHoursPerYear', WorkSchedule, 'Edm.Decimal');
    /**
     * Static representation of the [[averageWorkingDaysPerWeek]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.AVERAGE_WORKING_DAYS_PER_WEEK = new core_1.BigNumberField('averageWorkingDaysPerWeek', WorkSchedule, 'Edm.Decimal');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.COUNTRY = new core_1.StringField('country', WorkSchedule, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.CREATED_BY = new core_1.StringField('createdBy', WorkSchedule, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', WorkSchedule, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.EXTERNAL_CODE = new core_1.StringField('externalCode', WorkSchedule, 'Edm.String');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', WorkSchedule, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', WorkSchedule, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.EXTERNAL_NAME_EN_DEBUG = new core_1.StringField('externalName_en_DEBUG', WorkSchedule, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', WorkSchedule, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', WorkSchedule, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', WorkSchedule, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.EXTERNAL_NAME_ES_MX = new core_1.StringField('externalName_es_MX', WorkSchedule, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.EXTERNAL_NAME_FR_CA = new core_1.StringField('externalName_fr_CA', WorkSchedule, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', WorkSchedule, 'Edm.String');
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.EXTERNAL_NAME_IT_IT = new core_1.StringField('externalName_it_IT', WorkSchedule, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', WorkSchedule, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', WorkSchedule, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', WorkSchedule, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', WorkSchedule, 'Edm.String');
    /**
     * Static representation of the [[flexibleRequestingAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.FLEXIBLE_REQUESTING_ALLOWED = new core_1.BooleanField('flexibleRequestingAllowed', WorkSchedule, 'Edm.Boolean');
    /**
     * Static representation of the [[individualWorkSchedule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.INDIVIDUAL_WORK_SCHEDULE = new core_1.BooleanField('individualWorkSchedule', WorkSchedule, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', WorkSchedule, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', WorkSchedule, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', WorkSchedule, 'Edm.String');
    /**
     * Static representation of the [[modelCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.MODEL_CATEGORY = new core_1.StringField('modelCategory', WorkSchedule, 'Edm.String');
    /**
     * Static representation of the [[periodModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.PERIOD_MODEL = new core_1.StringField('periodModel', WorkSchedule, 'Edm.String');
    /**
     * Static representation of the [[searchString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.SEARCH_STRING = new core_1.StringField('searchString', WorkSchedule, 'Edm.String');
    /**
     * Static representation of the [[shiftClassification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.SHIFT_CLASSIFICATION = new core_1.StringField('shiftClassification', WorkSchedule, 'Edm.String');
    /**
     * Static representation of the [[startingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.STARTING_DATE = new core_1.DateField('startingDate', WorkSchedule, 'Edm.DateTime');
    /**
     * Static representation of the [[timeRecordingVariant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.TIME_RECORDING_VARIANT = new core_1.StringField('timeRecordingVariant', WorkSchedule, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.USER_ID = new core_1.StringField('userId', WorkSchedule, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.COUNTRY_NAV = new core_1.Link('countryNav', WorkSchedule, Country_1.Country);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', WorkSchedule, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.EXTERNAL_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('externalNameTranslationTextNav', WorkSchedule, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', WorkSchedule, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', WorkSchedule, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[modelCategoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.MODEL_CATEGORY_NAV = new core_1.OneToOneLink('modelCategoryNav', WorkSchedule, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[periodModelNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.PERIOD_MODEL_NAV = new core_1.OneToOneLink('periodModelNav', WorkSchedule, WorkSchedule);
    /**
     * Static representation of the one-to-one navigation property [[shiftClassificationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.SHIFT_CLASSIFICATION_NAV = new core_1.OneToOneLink('shiftClassificationNav', WorkSchedule, ShiftClassification_1.ShiftClassification);
    /**
     * Static representation of the one-to-one navigation property [[timeRecordingVariantNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.TIME_RECORDING_VARIANT_NAV = new core_1.OneToOneLink('timeRecordingVariantNav', WorkSchedule, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', WorkSchedule, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', WorkSchedule, WfRequest_1.WfRequest);
    /**
     * Static representation of the one-to-many navigation property [[workScheduleDayModels]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.WORK_SCHEDULE_DAY_MODELS = new core_1.Link('workScheduleDayModels', WorkSchedule, WorkScheduleDayModelAssignment_1.WorkScheduleDayModelAssignment);
    /**
     * Static representation of the one-to-many navigation property [[workScheduleDays]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkSchedule.WORK_SCHEDULE_DAYS = new core_1.Link('workScheduleDays', WorkSchedule, WorkScheduleDay_1.WorkScheduleDay);
    /**
     * All fields of the WorkSchedule entity.
     */
    WorkSchedule._allFields = [
        WorkSchedule.AVERAGE_HOURS_PER_DAY,
        WorkSchedule.AVERAGE_HOURS_PER_MONTH,
        WorkSchedule.AVERAGE_HOURS_PER_WEEK,
        WorkSchedule.AVERAGE_HOURS_PER_YEAR,
        WorkSchedule.AVERAGE_WORKING_DAYS_PER_WEEK,
        WorkSchedule.COUNTRY,
        WorkSchedule.CREATED_BY,
        WorkSchedule.CREATED_DATE_TIME,
        WorkSchedule.EXTERNAL_CODE,
        WorkSchedule.EXTERNAL_NAME_DE_DE,
        WorkSchedule.EXTERNAL_NAME_DEFAULT_VALUE,
        WorkSchedule.EXTERNAL_NAME_EN_DEBUG,
        WorkSchedule.EXTERNAL_NAME_EN_GB,
        WorkSchedule.EXTERNAL_NAME_EN_US,
        WorkSchedule.EXTERNAL_NAME_ES_ES,
        WorkSchedule.EXTERNAL_NAME_ES_MX,
        WorkSchedule.EXTERNAL_NAME_FR_CA,
        WorkSchedule.EXTERNAL_NAME_FR_FR,
        WorkSchedule.EXTERNAL_NAME_IT_IT,
        WorkSchedule.EXTERNAL_NAME_LOCALIZED,
        WorkSchedule.EXTERNAL_NAME_NL_NL,
        WorkSchedule.EXTERNAL_NAME_PT_BR,
        WorkSchedule.EXTERNAL_NAME_ZH_CN,
        WorkSchedule.FLEXIBLE_REQUESTING_ALLOWED,
        WorkSchedule.INDIVIDUAL_WORK_SCHEDULE,
        WorkSchedule.LAST_MODIFIED_BY,
        WorkSchedule.LAST_MODIFIED_DATE_TIME,
        WorkSchedule.MDF_SYSTEM_RECORD_STATUS,
        WorkSchedule.MODEL_CATEGORY,
        WorkSchedule.PERIOD_MODEL,
        WorkSchedule.SEARCH_STRING,
        WorkSchedule.SHIFT_CLASSIFICATION,
        WorkSchedule.STARTING_DATE,
        WorkSchedule.TIME_RECORDING_VARIANT,
        WorkSchedule.USER_ID,
        WorkSchedule.COUNTRY_NAV,
        WorkSchedule.CREATED_BY_NAV,
        WorkSchedule.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
        WorkSchedule.LAST_MODIFIED_BY_NAV,
        WorkSchedule.MDF_SYSTEM_RECORD_STATUS_NAV,
        WorkSchedule.MODEL_CATEGORY_NAV,
        WorkSchedule.PERIOD_MODEL_NAV,
        WorkSchedule.SHIFT_CLASSIFICATION_NAV,
        WorkSchedule.TIME_RECORDING_VARIANT_NAV,
        WorkSchedule.USER_ID_NAV,
        WorkSchedule.WF_REQUEST_NAV,
        WorkSchedule.WORK_SCHEDULE_DAY_MODELS,
        WorkSchedule.WORK_SCHEDULE_DAYS
    ];
    /**
     * All fields selector.
     */
    WorkSchedule.ALL_FIELDS = new core_1.AllFields('*', WorkSchedule);
    /**
     * All key fields of the WorkSchedule entity.
     */
    WorkSchedule._keyFields = [WorkSchedule.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property WorkSchedule.
     */
    WorkSchedule._keys = WorkSchedule._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(WorkSchedule = exports.WorkSchedule || (exports.WorkSchedule = {}));
exports.WorkSchedule = WorkSchedule;
//# sourceMappingURL=WorkSchedule.js.map