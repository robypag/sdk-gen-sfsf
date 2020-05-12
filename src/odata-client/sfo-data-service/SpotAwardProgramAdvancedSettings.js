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
var SpotAwardProgramAdvancedSettingsRequestBuilder_1 = require("./SpotAwardProgramAdvancedSettingsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SpotAwardProgramAdvancedSettings" of service "SFOData".
 */
var SpotAwardProgramAdvancedSettings = /** @class */ (function (_super) {
    __extends(SpotAwardProgramAdvancedSettings, _super);
    function SpotAwardProgramAdvancedSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SpotAwardProgramAdvancedSettings`.
     * @returns A builder that constructs instances of entity type `SpotAwardProgramAdvancedSettings`.
     */
    SpotAwardProgramAdvancedSettings.builder = function () {
        return core_1.Entity.entityBuilder(SpotAwardProgramAdvancedSettings);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SpotAwardProgramAdvancedSettings` entity type.
     * @returns A `SpotAwardProgramAdvancedSettings` request builder.
     */
    SpotAwardProgramAdvancedSettings.requestBuilder = function () {
        return new SpotAwardProgramAdvancedSettingsRequestBuilder_1.SpotAwardProgramAdvancedSettingsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAwardProgramAdvancedSettings`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SpotAwardProgramAdvancedSettings`.
     */
    SpotAwardProgramAdvancedSettings.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, SpotAwardProgramAdvancedSettings);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SpotAwardProgramAdvancedSettings.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SpotAwardProgramAdvancedSettings.
     */
    SpotAwardProgramAdvancedSettings._entityName = 'SpotAwardProgramAdvancedSettings';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SpotAwardProgramAdvancedSettings.
     */
    SpotAwardProgramAdvancedSettings._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    SpotAwardProgramAdvancedSettings._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SpotAwardProgramAdvancedSettings;
}(core_1.Entity));
exports.SpotAwardProgramAdvancedSettings = SpotAwardProgramAdvancedSettings;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var FoPayComponent_1 = require("./FoPayComponent");
(function (SpotAwardProgramAdvancedSettings) {
    /**
     * Static representation of the [[spotAwardProgramExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.SPOT_AWARD_PROGRAM_EXTERNAL_CODE = new core_1.StringField('SpotAwardProgram_externalCode', SpotAwardProgramAdvancedSettings, 'Edm.String');
    /**
     * Static representation of the [[canOverrideGuidelineAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.CAN_OVERRIDE_GUIDELINE_AMOUNT = new core_1.BooleanField('canOverrideGuidelineAmount', SpotAwardProgramAdvancedSettings, 'Edm.Boolean');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.CREATED_BY = new core_1.StringField('createdBy', SpotAwardProgramAdvancedSettings, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', SpotAwardProgramAdvancedSettings, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentTemplateGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.DOCUMENT_TEMPLATE_GROUP = new core_1.StringField('documentTemplateGroup', SpotAwardProgramAdvancedSettings, 'Edm.String');
    /**
     * Static representation of the [[enableEcIntegration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.ENABLE_EC_INTEGRATION = new core_1.BooleanField('enableECIntegration', SpotAwardProgramAdvancedSettings, 'Edm.Boolean');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.EXTERNAL_CODE = new core_1.StringField('externalCode', SpotAwardProgramAdvancedSettings, 'Edm.String');
    /**
     * Static representation of the [[isBudgetAssociated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.IS_BUDGET_ASSOCIATED = new core_1.BooleanField('isBudgetAssociated', SpotAwardProgramAdvancedSettings, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', SpotAwardProgramAdvancedSettings, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', SpotAwardProgramAdvancedSettings, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', SpotAwardProgramAdvancedSettings, 'Edm.String');
    /**
     * Static representation of the [[overrideGuidelineAmountMsgDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_DE_DE = new core_1.StringField('overrideGuidelineAmountMsg_de_DE', SpotAwardProgramAdvancedSettings, 'Edm.String');
    /**
     * Static representation of the [[overrideGuidelineAmountMsgDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_DEFAULT_VALUE = new core_1.StringField('overrideGuidelineAmountMsg_defaultValue', SpotAwardProgramAdvancedSettings, 'Edm.String');
    /**
     * Static representation of the [[overrideGuidelineAmountMsgEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_EN_DEBUG = new core_1.StringField('overrideGuidelineAmountMsg_en_DEBUG', SpotAwardProgramAdvancedSettings, 'Edm.String');
    /**
     * Static representation of the [[overrideGuidelineAmountMsgEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_EN_GB = new core_1.StringField('overrideGuidelineAmountMsg_en_GB', SpotAwardProgramAdvancedSettings, 'Edm.String');
    /**
     * Static representation of the [[overrideGuidelineAmountMsgEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_EN_US = new core_1.StringField('overrideGuidelineAmountMsg_en_US', SpotAwardProgramAdvancedSettings, 'Edm.String');
    /**
     * Static representation of the [[overrideGuidelineAmountMsgEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_ES_ES = new core_1.StringField('overrideGuidelineAmountMsg_es_ES', SpotAwardProgramAdvancedSettings, 'Edm.String');
    /**
     * Static representation of the [[overrideGuidelineAmountMsgEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_ES_MX = new core_1.StringField('overrideGuidelineAmountMsg_es_MX', SpotAwardProgramAdvancedSettings, 'Edm.String');
    /**
     * Static representation of the [[overrideGuidelineAmountMsgFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_FR_CA = new core_1.StringField('overrideGuidelineAmountMsg_fr_CA', SpotAwardProgramAdvancedSettings, 'Edm.String');
    /**
     * Static representation of the [[overrideGuidelineAmountMsgFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_FR_FR = new core_1.StringField('overrideGuidelineAmountMsg_fr_FR', SpotAwardProgramAdvancedSettings, 'Edm.String');
    /**
     * Static representation of the [[overrideGuidelineAmountMsgItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_IT_IT = new core_1.StringField('overrideGuidelineAmountMsg_it_IT', SpotAwardProgramAdvancedSettings, 'Edm.String');
    /**
     * Static representation of the [[overrideGuidelineAmountMsgLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_LOCALIZED = new core_1.StringField('overrideGuidelineAmountMsg_localized', SpotAwardProgramAdvancedSettings, 'Edm.String');
    /**
     * Static representation of the [[overrideGuidelineAmountMsgNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_NL_NL = new core_1.StringField('overrideGuidelineAmountMsg_nl_NL', SpotAwardProgramAdvancedSettings, 'Edm.String');
    /**
     * Static representation of the [[overrideGuidelineAmountMsgPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_PT_BR = new core_1.StringField('overrideGuidelineAmountMsg_pt_BR', SpotAwardProgramAdvancedSettings, 'Edm.String');
    /**
     * Static representation of the [[overrideGuidelineAmountMsgZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_ZH_CN = new core_1.StringField('overrideGuidelineAmountMsg_zh_CN', SpotAwardProgramAdvancedSettings, 'Edm.String');
    /**
     * Static representation of the [[payComponent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.PAY_COMPONENT = new core_1.StringField('payComponent', SpotAwardProgramAdvancedSettings, 'Edm.String');
    /**
     * Static representation of the [[useEcAsDataSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.USE_EC_AS_DATA_SOURCE = new core_1.BooleanField('useECAsDataSource', SpotAwardProgramAdvancedSettings, 'Edm.Boolean');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', SpotAwardProgramAdvancedSettings, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', SpotAwardProgramAdvancedSettings, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', SpotAwardProgramAdvancedSettings, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[overrideGuidelineAmountMsgTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_TRANSLATION_TEXT_NAV = new core_1.Link('overrideGuidelineAmountMsgTranslationTextNav', SpotAwardProgramAdvancedSettings, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[payComponentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardProgramAdvancedSettings.PAY_COMPONENT_NAV = new core_1.Link('payComponentNav', SpotAwardProgramAdvancedSettings, FoPayComponent_1.FoPayComponent);
    /**
     * All fields of the SpotAwardProgramAdvancedSettings entity.
     */
    SpotAwardProgramAdvancedSettings._allFields = [
        SpotAwardProgramAdvancedSettings.SPOT_AWARD_PROGRAM_EXTERNAL_CODE,
        SpotAwardProgramAdvancedSettings.CAN_OVERRIDE_GUIDELINE_AMOUNT,
        SpotAwardProgramAdvancedSettings.CREATED_BY,
        SpotAwardProgramAdvancedSettings.CREATED_DATE_TIME,
        SpotAwardProgramAdvancedSettings.DOCUMENT_TEMPLATE_GROUP,
        SpotAwardProgramAdvancedSettings.ENABLE_EC_INTEGRATION,
        SpotAwardProgramAdvancedSettings.EXTERNAL_CODE,
        SpotAwardProgramAdvancedSettings.IS_BUDGET_ASSOCIATED,
        SpotAwardProgramAdvancedSettings.LAST_MODIFIED_BY,
        SpotAwardProgramAdvancedSettings.LAST_MODIFIED_DATE_TIME,
        SpotAwardProgramAdvancedSettings.MDF_SYSTEM_RECORD_STATUS,
        SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_DE_DE,
        SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_DEFAULT_VALUE,
        SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_EN_DEBUG,
        SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_EN_GB,
        SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_EN_US,
        SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_ES_ES,
        SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_ES_MX,
        SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_FR_CA,
        SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_FR_FR,
        SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_IT_IT,
        SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_LOCALIZED,
        SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_NL_NL,
        SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_PT_BR,
        SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_ZH_CN,
        SpotAwardProgramAdvancedSettings.PAY_COMPONENT,
        SpotAwardProgramAdvancedSettings.USE_EC_AS_DATA_SOURCE,
        SpotAwardProgramAdvancedSettings.CREATED_BY_NAV,
        SpotAwardProgramAdvancedSettings.LAST_MODIFIED_BY_NAV,
        SpotAwardProgramAdvancedSettings.MDF_SYSTEM_RECORD_STATUS_NAV,
        SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_TRANSLATION_TEXT_NAV,
        SpotAwardProgramAdvancedSettings.PAY_COMPONENT_NAV
    ];
    /**
     * All fields selector.
     */
    SpotAwardProgramAdvancedSettings.ALL_FIELDS = new core_1.AllFields('*', SpotAwardProgramAdvancedSettings);
    /**
     * All key fields of the SpotAwardProgramAdvancedSettings entity.
     */
    SpotAwardProgramAdvancedSettings._keyFields = [SpotAwardProgramAdvancedSettings.SPOT_AWARD_PROGRAM_EXTERNAL_CODE, SpotAwardProgramAdvancedSettings.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property SpotAwardProgramAdvancedSettings.
     */
    SpotAwardProgramAdvancedSettings._keys = SpotAwardProgramAdvancedSettings._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SpotAwardProgramAdvancedSettings = exports.SpotAwardProgramAdvancedSettings || (exports.SpotAwardProgramAdvancedSettings = {}));
exports.SpotAwardProgramAdvancedSettings = SpotAwardProgramAdvancedSettings;
//# sourceMappingURL=SpotAwardProgramAdvancedSettings.js.map