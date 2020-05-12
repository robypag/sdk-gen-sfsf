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
var RatedSkillMappingRequestBuilder_1 = require("./RatedSkillMappingRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "RatedSkillMapping" of service "SFOData".
 */
var RatedSkillMapping = /** @class */ (function (_super) {
    __extends(RatedSkillMapping, _super);
    function RatedSkillMapping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `RatedSkillMapping`.
     * @returns A builder that constructs instances of entity type `RatedSkillMapping`.
     */
    RatedSkillMapping.builder = function () {
        return core_1.Entity.entityBuilder(RatedSkillMapping);
    };
    /**
     * Returns a request builder to construct requests for operations on the `RatedSkillMapping` entity type.
     * @returns A `RatedSkillMapping` request builder.
     */
    RatedSkillMapping.requestBuilder = function () {
        return new RatedSkillMappingRequestBuilder_1.RatedSkillMappingRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RatedSkillMapping`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RatedSkillMapping`.
     */
    RatedSkillMapping.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, RatedSkillMapping);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    RatedSkillMapping.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for RatedSkillMapping.
     */
    RatedSkillMapping._entityName = 'RatedSkillMapping';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for RatedSkillMapping.
     */
    RatedSkillMapping._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    RatedSkillMapping._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return RatedSkillMapping;
}(core_1.Entity));
exports.RatedSkillMapping = RatedSkillMapping;
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
var SkillEntity_1 = require("./SkillEntity");
(function (RatedSkillMapping) {
    /**
     * Static representation of the [[skillProfileExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.SKILL_PROFILE_EXTERNAL_CODE = new core_1.StringField('SkillProfile_externalCode', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.CREATED_BY = new core_1.StringField('createdBy', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', RatedSkillMapping, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[expectedLevelDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.EXPECTED_LEVEL_DE_DE = new core_1.StringField('expectedLevel_de_DE', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[expectedLevelDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.EXPECTED_LEVEL_DEFAULT_VALUE = new core_1.StringField('expectedLevel_defaultValue', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[expectedLevelEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.EXPECTED_LEVEL_EN_DEBUG = new core_1.StringField('expectedLevel_en_DEBUG', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[expectedLevelEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.EXPECTED_LEVEL_EN_GB = new core_1.StringField('expectedLevel_en_GB', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[expectedLevelEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.EXPECTED_LEVEL_EN_US = new core_1.StringField('expectedLevel_en_US', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[expectedLevelEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.EXPECTED_LEVEL_ES_ES = new core_1.StringField('expectedLevel_es_ES', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[expectedLevelEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.EXPECTED_LEVEL_ES_MX = new core_1.StringField('expectedLevel_es_MX', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[expectedLevelFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.EXPECTED_LEVEL_FR_CA = new core_1.StringField('expectedLevel_fr_CA', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[expectedLevelFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.EXPECTED_LEVEL_FR_FR = new core_1.StringField('expectedLevel_fr_FR', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[expectedLevelItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.EXPECTED_LEVEL_IT_IT = new core_1.StringField('expectedLevel_it_IT', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[expectedLevelLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.EXPECTED_LEVEL_LOCALIZED = new core_1.StringField('expectedLevel_localized', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[expectedLevelNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.EXPECTED_LEVEL_NL_NL = new core_1.StringField('expectedLevel_nl_NL', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[expectedLevelPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.EXPECTED_LEVEL_PT_BR = new core_1.StringField('expectedLevel_pt_BR', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[expectedLevelZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.EXPECTED_LEVEL_ZH_CN = new core_1.StringField('expectedLevel_zh_CN', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.EXTERNAL_CODE = new core_1.StringField('externalCode', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', RatedSkillMapping, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[managerRatedLevelDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.MANAGER_RATED_LEVEL_DE_DE = new core_1.StringField('managerRatedLevel_de_DE', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[managerRatedLevelDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.MANAGER_RATED_LEVEL_DEFAULT_VALUE = new core_1.StringField('managerRatedLevel_defaultValue', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[managerRatedLevelEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.MANAGER_RATED_LEVEL_EN_DEBUG = new core_1.StringField('managerRatedLevel_en_DEBUG', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[managerRatedLevelEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.MANAGER_RATED_LEVEL_EN_GB = new core_1.StringField('managerRatedLevel_en_GB', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[managerRatedLevelEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.MANAGER_RATED_LEVEL_EN_US = new core_1.StringField('managerRatedLevel_en_US', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[managerRatedLevelEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.MANAGER_RATED_LEVEL_ES_ES = new core_1.StringField('managerRatedLevel_es_ES', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[managerRatedLevelEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.MANAGER_RATED_LEVEL_ES_MX = new core_1.StringField('managerRatedLevel_es_MX', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[managerRatedLevelFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.MANAGER_RATED_LEVEL_FR_CA = new core_1.StringField('managerRatedLevel_fr_CA', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[managerRatedLevelFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.MANAGER_RATED_LEVEL_FR_FR = new core_1.StringField('managerRatedLevel_fr_FR', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[managerRatedLevelItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.MANAGER_RATED_LEVEL_IT_IT = new core_1.StringField('managerRatedLevel_it_IT', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[managerRatedLevelLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.MANAGER_RATED_LEVEL_LOCALIZED = new core_1.StringField('managerRatedLevel_localized', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[managerRatedLevelNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.MANAGER_RATED_LEVEL_NL_NL = new core_1.StringField('managerRatedLevel_nl_NL', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[managerRatedLevelPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.MANAGER_RATED_LEVEL_PT_BR = new core_1.StringField('managerRatedLevel_pt_BR', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[managerRatedLevelZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.MANAGER_RATED_LEVEL_ZH_CN = new core_1.StringField('managerRatedLevel_zh_CN', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[selfRatedLevelDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.SELF_RATED_LEVEL_DE_DE = new core_1.StringField('selfRatedLevel_de_DE', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[selfRatedLevelDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.SELF_RATED_LEVEL_DEFAULT_VALUE = new core_1.StringField('selfRatedLevel_defaultValue', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[selfRatedLevelEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.SELF_RATED_LEVEL_EN_DEBUG = new core_1.StringField('selfRatedLevel_en_DEBUG', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[selfRatedLevelEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.SELF_RATED_LEVEL_EN_GB = new core_1.StringField('selfRatedLevel_en_GB', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[selfRatedLevelEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.SELF_RATED_LEVEL_EN_US = new core_1.StringField('selfRatedLevel_en_US', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[selfRatedLevelEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.SELF_RATED_LEVEL_ES_ES = new core_1.StringField('selfRatedLevel_es_ES', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[selfRatedLevelEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.SELF_RATED_LEVEL_ES_MX = new core_1.StringField('selfRatedLevel_es_MX', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[selfRatedLevelFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.SELF_RATED_LEVEL_FR_CA = new core_1.StringField('selfRatedLevel_fr_CA', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[selfRatedLevelFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.SELF_RATED_LEVEL_FR_FR = new core_1.StringField('selfRatedLevel_fr_FR', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[selfRatedLevelItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.SELF_RATED_LEVEL_IT_IT = new core_1.StringField('selfRatedLevel_it_IT', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[selfRatedLevelLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.SELF_RATED_LEVEL_LOCALIZED = new core_1.StringField('selfRatedLevel_localized', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[selfRatedLevelNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.SELF_RATED_LEVEL_NL_NL = new core_1.StringField('selfRatedLevel_nl_NL', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[selfRatedLevelPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.SELF_RATED_LEVEL_PT_BR = new core_1.StringField('selfRatedLevel_pt_BR', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[selfRatedLevelZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.SELF_RATED_LEVEL_ZH_CN = new core_1.StringField('selfRatedLevel_zh_CN', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[skill]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.SKILL = new core_1.StringField('skill', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.STATUS = new core_1.StringField('status', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.SUB_MODULE = new core_1.StringField('subModule', RatedSkillMapping, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', RatedSkillMapping, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[expectedLevelTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.EXPECTED_LEVEL_TRANSLATION_TEXT_NAV = new core_1.Link('expectedLevelTranslationTextNav', RatedSkillMapping, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', RatedSkillMapping, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[managerRatedLevelTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.MANAGER_RATED_LEVEL_TRANSLATION_TEXT_NAV = new core_1.Link('managerRatedLevelTranslationTextNav', RatedSkillMapping, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', RatedSkillMapping, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[selfRatedLevelTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.SELF_RATED_LEVEL_TRANSLATION_TEXT_NAV = new core_1.Link('selfRatedLevelTranslationTextNav', RatedSkillMapping, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[skillNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.SKILL_NAV = new core_1.OneToOneLink('skillNav', RatedSkillMapping, SkillEntity_1.SkillEntity);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RatedSkillMapping.STATUS_NAV = new core_1.OneToOneLink('statusNav', RatedSkillMapping, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the RatedSkillMapping entity.
     */
    RatedSkillMapping._allFields = [
        RatedSkillMapping.SKILL_PROFILE_EXTERNAL_CODE,
        RatedSkillMapping.CREATED_BY,
        RatedSkillMapping.CREATED_DATE_TIME,
        RatedSkillMapping.EXPECTED_LEVEL_DE_DE,
        RatedSkillMapping.EXPECTED_LEVEL_DEFAULT_VALUE,
        RatedSkillMapping.EXPECTED_LEVEL_EN_DEBUG,
        RatedSkillMapping.EXPECTED_LEVEL_EN_GB,
        RatedSkillMapping.EXPECTED_LEVEL_EN_US,
        RatedSkillMapping.EXPECTED_LEVEL_ES_ES,
        RatedSkillMapping.EXPECTED_LEVEL_ES_MX,
        RatedSkillMapping.EXPECTED_LEVEL_FR_CA,
        RatedSkillMapping.EXPECTED_LEVEL_FR_FR,
        RatedSkillMapping.EXPECTED_LEVEL_IT_IT,
        RatedSkillMapping.EXPECTED_LEVEL_LOCALIZED,
        RatedSkillMapping.EXPECTED_LEVEL_NL_NL,
        RatedSkillMapping.EXPECTED_LEVEL_PT_BR,
        RatedSkillMapping.EXPECTED_LEVEL_ZH_CN,
        RatedSkillMapping.EXTERNAL_CODE,
        RatedSkillMapping.LAST_MODIFIED_BY,
        RatedSkillMapping.LAST_MODIFIED_DATE_TIME,
        RatedSkillMapping.MANAGER_RATED_LEVEL_DE_DE,
        RatedSkillMapping.MANAGER_RATED_LEVEL_DEFAULT_VALUE,
        RatedSkillMapping.MANAGER_RATED_LEVEL_EN_DEBUG,
        RatedSkillMapping.MANAGER_RATED_LEVEL_EN_GB,
        RatedSkillMapping.MANAGER_RATED_LEVEL_EN_US,
        RatedSkillMapping.MANAGER_RATED_LEVEL_ES_ES,
        RatedSkillMapping.MANAGER_RATED_LEVEL_ES_MX,
        RatedSkillMapping.MANAGER_RATED_LEVEL_FR_CA,
        RatedSkillMapping.MANAGER_RATED_LEVEL_FR_FR,
        RatedSkillMapping.MANAGER_RATED_LEVEL_IT_IT,
        RatedSkillMapping.MANAGER_RATED_LEVEL_LOCALIZED,
        RatedSkillMapping.MANAGER_RATED_LEVEL_NL_NL,
        RatedSkillMapping.MANAGER_RATED_LEVEL_PT_BR,
        RatedSkillMapping.MANAGER_RATED_LEVEL_ZH_CN,
        RatedSkillMapping.MDF_SYSTEM_RECORD_STATUS,
        RatedSkillMapping.SELF_RATED_LEVEL_DE_DE,
        RatedSkillMapping.SELF_RATED_LEVEL_DEFAULT_VALUE,
        RatedSkillMapping.SELF_RATED_LEVEL_EN_DEBUG,
        RatedSkillMapping.SELF_RATED_LEVEL_EN_GB,
        RatedSkillMapping.SELF_RATED_LEVEL_EN_US,
        RatedSkillMapping.SELF_RATED_LEVEL_ES_ES,
        RatedSkillMapping.SELF_RATED_LEVEL_ES_MX,
        RatedSkillMapping.SELF_RATED_LEVEL_FR_CA,
        RatedSkillMapping.SELF_RATED_LEVEL_FR_FR,
        RatedSkillMapping.SELF_RATED_LEVEL_IT_IT,
        RatedSkillMapping.SELF_RATED_LEVEL_LOCALIZED,
        RatedSkillMapping.SELF_RATED_LEVEL_NL_NL,
        RatedSkillMapping.SELF_RATED_LEVEL_PT_BR,
        RatedSkillMapping.SELF_RATED_LEVEL_ZH_CN,
        RatedSkillMapping.SKILL,
        RatedSkillMapping.STATUS,
        RatedSkillMapping.SUB_MODULE,
        RatedSkillMapping.CREATED_BY_NAV,
        RatedSkillMapping.EXPECTED_LEVEL_TRANSLATION_TEXT_NAV,
        RatedSkillMapping.LAST_MODIFIED_BY_NAV,
        RatedSkillMapping.MANAGER_RATED_LEVEL_TRANSLATION_TEXT_NAV,
        RatedSkillMapping.MDF_SYSTEM_RECORD_STATUS_NAV,
        RatedSkillMapping.SELF_RATED_LEVEL_TRANSLATION_TEXT_NAV,
        RatedSkillMapping.SKILL_NAV,
        RatedSkillMapping.STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    RatedSkillMapping.ALL_FIELDS = new core_1.AllFields('*', RatedSkillMapping);
    /**
     * All key fields of the RatedSkillMapping entity.
     */
    RatedSkillMapping._keyFields = [RatedSkillMapping.SKILL_PROFILE_EXTERNAL_CODE, RatedSkillMapping.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property RatedSkillMapping.
     */
    RatedSkillMapping._keys = RatedSkillMapping._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(RatedSkillMapping = exports.RatedSkillMapping || (exports.RatedSkillMapping = {}));
exports.RatedSkillMapping = RatedSkillMapping;
//# sourceMappingURL=RatedSkillMapping.js.map