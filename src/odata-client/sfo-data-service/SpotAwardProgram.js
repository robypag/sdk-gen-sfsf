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
var SpotAwardProgramRequestBuilder_1 = require("./SpotAwardProgramRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SpotAwardProgram" of service "SFOData".
 */
var SpotAwardProgram = /** @class */ (function (_super) {
    __extends(SpotAwardProgram, _super);
    function SpotAwardProgram() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SpotAwardProgram`.
     * @returns A builder that constructs instances of entity type `SpotAwardProgram`.
     */
    SpotAwardProgram.builder = function () {
        return core_1.Entity.entityBuilder(SpotAwardProgram);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SpotAwardProgram` entity type.
     * @returns A `SpotAwardProgram` request builder.
     */
    SpotAwardProgram.requestBuilder = function () {
        return new SpotAwardProgramRequestBuilder_1.SpotAwardProgramRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAwardProgram`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SpotAwardProgram`.
     */
    SpotAwardProgram.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, SpotAwardProgram);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SpotAwardProgram.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SpotAwardProgram.
     */
    SpotAwardProgram._entityName = 'SpotAwardProgram';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SpotAwardProgram.
     */
    SpotAwardProgram._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    SpotAwardProgram._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SpotAwardProgram;
}(core_1.Entity));
exports.SpotAwardProgram = SpotAwardProgram;
var SpotAwardProgramAdvancedSettings_1 = require("./SpotAwardProgramAdvancedSettings");
var SpotAwardCategory_1 = require("./SpotAwardCategory");
var User_1 = require("./User");
var SpotAwardEligibilityRule_1 = require("./SpotAwardEligibilityRule");
var SpotAwardGuidelinesRule_1 = require("./SpotAwardGuidelinesRule");
var SpotAwardLevel_1 = require("./SpotAwardLevel");
var MdfEnumValue_1 = require("./MdfEnumValue");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var Attachment_1 = require("./Attachment");
var SpotAwardBudget_1 = require("./SpotAwardBudget");
var WfRequest_1 = require("./WfRequest");
(function (SpotAwardProgram) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.CREATED_BY = new core_1.StringField('createdBy', SpotAwardProgram, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', SpotAwardProgram, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[currencyConversionTable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.CURRENCY_CONVERSION_TABLE = new core_1.StringField('currencyConversionTable', SpotAwardProgram, 'Edm.String');
    /**
     * Static representation of the [[enabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.ENABLED = new core_1.BooleanField('enabled', SpotAwardProgram, 'Edm.Boolean');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.END_DATE = new core_1.DateField('endDate', SpotAwardProgram, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.EXTERNAL_CODE = new core_1.StringField('externalCode', SpotAwardProgram, 'Edm.String');
    /**
     * Static representation of the [[functionalCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.FUNCTIONAL_CURRENCY = new core_1.StringField('functionalCurrency', SpotAwardProgram, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', SpotAwardProgram, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', SpotAwardProgram, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', SpotAwardProgram, 'Edm.String');
    /**
     * Static representation of the [[programDescriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.PROGRAM_DESCRIPTION_DE_DE = new core_1.StringField('programDescription_de_DE', SpotAwardProgram, 'Edm.String');
    /**
     * Static representation of the [[programDescriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.PROGRAM_DESCRIPTION_DEFAULT_VALUE = new core_1.StringField('programDescription_defaultValue', SpotAwardProgram, 'Edm.String');
    /**
     * Static representation of the [[programDescriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.PROGRAM_DESCRIPTION_EN_DEBUG = new core_1.StringField('programDescription_en_DEBUG', SpotAwardProgram, 'Edm.String');
    /**
     * Static representation of the [[programDescriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.PROGRAM_DESCRIPTION_EN_GB = new core_1.StringField('programDescription_en_GB', SpotAwardProgram, 'Edm.String');
    /**
     * Static representation of the [[programDescriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.PROGRAM_DESCRIPTION_EN_US = new core_1.StringField('programDescription_en_US', SpotAwardProgram, 'Edm.String');
    /**
     * Static representation of the [[programDescriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.PROGRAM_DESCRIPTION_ES_ES = new core_1.StringField('programDescription_es_ES', SpotAwardProgram, 'Edm.String');
    /**
     * Static representation of the [[programDescriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.PROGRAM_DESCRIPTION_ES_MX = new core_1.StringField('programDescription_es_MX', SpotAwardProgram, 'Edm.String');
    /**
     * Static representation of the [[programDescriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.PROGRAM_DESCRIPTION_FR_CA = new core_1.StringField('programDescription_fr_CA', SpotAwardProgram, 'Edm.String');
    /**
     * Static representation of the [[programDescriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.PROGRAM_DESCRIPTION_FR_FR = new core_1.StringField('programDescription_fr_FR', SpotAwardProgram, 'Edm.String');
    /**
     * Static representation of the [[programDescriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.PROGRAM_DESCRIPTION_IT_IT = new core_1.StringField('programDescription_it_IT', SpotAwardProgram, 'Edm.String');
    /**
     * Static representation of the [[programDescriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.PROGRAM_DESCRIPTION_LOCALIZED = new core_1.StringField('programDescription_localized', SpotAwardProgram, 'Edm.String');
    /**
     * Static representation of the [[programDescriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.PROGRAM_DESCRIPTION_NL_NL = new core_1.StringField('programDescription_nl_NL', SpotAwardProgram, 'Edm.String');
    /**
     * Static representation of the [[programDescriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.PROGRAM_DESCRIPTION_PT_BR = new core_1.StringField('programDescription_pt_BR', SpotAwardProgram, 'Edm.String');
    /**
     * Static representation of the [[programDescriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.PROGRAM_DESCRIPTION_ZH_CN = new core_1.StringField('programDescription_zh_CN', SpotAwardProgram, 'Edm.String');
    /**
     * Static representation of the [[programType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.PROGRAM_TYPE = new core_1.StringField('programType', SpotAwardProgram, 'Edm.String');
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.RECORD_ID = new core_1.StringField('recordId', SpotAwardProgram, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.START_DATE = new core_1.DateField('startDate', SpotAwardProgram, 'Edm.DateTime');
    /**
     * Static representation of the one-to-one navigation property [[advancedSettings]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.ADVANCED_SETTINGS = new core_1.OneToOneLink('advancedSettings', SpotAwardProgram, SpotAwardProgramAdvancedSettings_1.SpotAwardProgramAdvancedSettings);
    /**
     * Static representation of the one-to-many navigation property [[categories]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.CATEGORIES = new core_1.Link('categories', SpotAwardProgram, SpotAwardCategory_1.SpotAwardCategory);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', SpotAwardProgram, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[eligRules]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.ELIG_RULES = new core_1.Link('eligRules', SpotAwardProgram, SpotAwardEligibilityRule_1.SpotAwardEligibilityRule);
    /**
     * Static representation of the one-to-many navigation property [[guidelineRules]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.GUIDELINE_RULES = new core_1.Link('guidelineRules', SpotAwardProgram, SpotAwardGuidelinesRule_1.SpotAwardGuidelinesRule);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', SpotAwardProgram, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[levels]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.LEVELS = new core_1.Link('levels', SpotAwardProgram, SpotAwardLevel_1.SpotAwardLevel);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', SpotAwardProgram, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[programDescriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.PROGRAM_DESCRIPTION_TRANSLATION_TEXT_NAV = new core_1.Link('programDescriptionTranslationTextNav', SpotAwardProgram, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[programImageNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.PROGRAM_IMAGE_NAV = new core_1.OneToOneLink('programImageNav', SpotAwardProgram, Attachment_1.Attachment);
    /**
     * Static representation of the one-to-one navigation property [[programTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.PROGRAM_TYPE_NAV = new core_1.OneToOneLink('programTypeNav', SpotAwardProgram, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[spotAwardBudgets]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.SPOT_AWARD_BUDGETS = new core_1.Link('spotAwardBudgets', SpotAwardProgram, SpotAwardBudget_1.SpotAwardBudget);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgram.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', SpotAwardProgram, WfRequest_1.WfRequest);
    /**
     * All fields of the SpotAwardProgram entity.
     */
    SpotAwardProgram._allFields = [
        SpotAwardProgram.CREATED_BY,
        SpotAwardProgram.CREATED_DATE_TIME,
        SpotAwardProgram.CURRENCY_CONVERSION_TABLE,
        SpotAwardProgram.ENABLED,
        SpotAwardProgram.END_DATE,
        SpotAwardProgram.EXTERNAL_CODE,
        SpotAwardProgram.FUNCTIONAL_CURRENCY,
        SpotAwardProgram.LAST_MODIFIED_BY,
        SpotAwardProgram.LAST_MODIFIED_DATE_TIME,
        SpotAwardProgram.MDF_SYSTEM_RECORD_STATUS,
        SpotAwardProgram.PROGRAM_DESCRIPTION_DE_DE,
        SpotAwardProgram.PROGRAM_DESCRIPTION_DEFAULT_VALUE,
        SpotAwardProgram.PROGRAM_DESCRIPTION_EN_DEBUG,
        SpotAwardProgram.PROGRAM_DESCRIPTION_EN_GB,
        SpotAwardProgram.PROGRAM_DESCRIPTION_EN_US,
        SpotAwardProgram.PROGRAM_DESCRIPTION_ES_ES,
        SpotAwardProgram.PROGRAM_DESCRIPTION_ES_MX,
        SpotAwardProgram.PROGRAM_DESCRIPTION_FR_CA,
        SpotAwardProgram.PROGRAM_DESCRIPTION_FR_FR,
        SpotAwardProgram.PROGRAM_DESCRIPTION_IT_IT,
        SpotAwardProgram.PROGRAM_DESCRIPTION_LOCALIZED,
        SpotAwardProgram.PROGRAM_DESCRIPTION_NL_NL,
        SpotAwardProgram.PROGRAM_DESCRIPTION_PT_BR,
        SpotAwardProgram.PROGRAM_DESCRIPTION_ZH_CN,
        SpotAwardProgram.PROGRAM_TYPE,
        SpotAwardProgram.RECORD_ID,
        SpotAwardProgram.START_DATE,
        SpotAwardProgram.ADVANCED_SETTINGS,
        SpotAwardProgram.CATEGORIES,
        SpotAwardProgram.CREATED_BY_NAV,
        SpotAwardProgram.ELIG_RULES,
        SpotAwardProgram.GUIDELINE_RULES,
        SpotAwardProgram.LAST_MODIFIED_BY_NAV,
        SpotAwardProgram.LEVELS,
        SpotAwardProgram.MDF_SYSTEM_RECORD_STATUS_NAV,
        SpotAwardProgram.PROGRAM_DESCRIPTION_TRANSLATION_TEXT_NAV,
        SpotAwardProgram.PROGRAM_IMAGE_NAV,
        SpotAwardProgram.PROGRAM_TYPE_NAV,
        SpotAwardProgram.SPOT_AWARD_BUDGETS,
        SpotAwardProgram.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    SpotAwardProgram.ALL_FIELDS = new core_1.AllFields('*', SpotAwardProgram);
    /**
     * All key fields of the SpotAwardProgram entity.
     */
    SpotAwardProgram._keyFields = [SpotAwardProgram.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property SpotAwardProgram.
     */
    SpotAwardProgram._keys = SpotAwardProgram._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SpotAwardProgram = exports.SpotAwardProgram || (exports.SpotAwardProgram = {}));
exports.SpotAwardProgram = SpotAwardProgram;
//# sourceMappingURL=SpotAwardProgram.js.map