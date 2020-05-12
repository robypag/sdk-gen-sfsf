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
var FamilySkillMappingEntityRequestBuilder_1 = require("./FamilySkillMappingEntityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FamilySkillMappingEntity" of service "SFOData".
 */
var FamilySkillMappingEntity = /** @class */ (function (_super) {
    __extends(FamilySkillMappingEntity, _super);
    function FamilySkillMappingEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FamilySkillMappingEntity`.
     * @returns A builder that constructs instances of entity type `FamilySkillMappingEntity`.
     */
    FamilySkillMappingEntity.builder = function () {
        return core_1.Entity.entityBuilder(FamilySkillMappingEntity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FamilySkillMappingEntity` entity type.
     * @returns A `FamilySkillMappingEntity` request builder.
     */
    FamilySkillMappingEntity.requestBuilder = function () {
        return new FamilySkillMappingEntityRequestBuilder_1.FamilySkillMappingEntityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FamilySkillMappingEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FamilySkillMappingEntity`.
     */
    FamilySkillMappingEntity.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FamilySkillMappingEntity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FamilySkillMappingEntity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FamilySkillMappingEntity.
     */
    FamilySkillMappingEntity._entityName = 'FamilySkillMappingEntity';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FamilySkillMappingEntity.
     */
    FamilySkillMappingEntity._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FamilySkillMappingEntity._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FamilySkillMappingEntity;
}(core_1.Entity));
exports.FamilySkillMappingEntity = FamilySkillMappingEntity;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var SkillEntity_1 = require("./SkillEntity");
(function (FamilySkillMappingEntity) {
    /**
     * Static representation of the [[familyEntityExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.FAMILY_ENTITY_EXTERNAL_CODE = new core_1.StringField('FamilyEntity_externalCode', FamilySkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.CREATED_BY = new core_1.StringField('createdBy', FamilySkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FamilySkillMappingEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.EXTERNAL_CODE = new core_1.StringField('externalCode', FamilySkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FamilySkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FamilySkillMappingEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', FamilySkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.PRO_LEVEL_DE_DE = new core_1.StringField('proLevel_de_DE', FamilySkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.PRO_LEVEL_DEFAULT_VALUE = new core_1.StringField('proLevel_defaultValue', FamilySkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.PRO_LEVEL_EN_DEBUG = new core_1.StringField('proLevel_en_DEBUG', FamilySkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.PRO_LEVEL_EN_GB = new core_1.StringField('proLevel_en_GB', FamilySkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.PRO_LEVEL_EN_US = new core_1.StringField('proLevel_en_US', FamilySkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.PRO_LEVEL_ES_ES = new core_1.StringField('proLevel_es_ES', FamilySkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.PRO_LEVEL_ES_MX = new core_1.StringField('proLevel_es_MX', FamilySkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.PRO_LEVEL_FR_CA = new core_1.StringField('proLevel_fr_CA', FamilySkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.PRO_LEVEL_FR_FR = new core_1.StringField('proLevel_fr_FR', FamilySkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.PRO_LEVEL_IT_IT = new core_1.StringField('proLevel_it_IT', FamilySkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.PRO_LEVEL_LOCALIZED = new core_1.StringField('proLevel_localized', FamilySkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.PRO_LEVEL_NL_NL = new core_1.StringField('proLevel_nl_NL', FamilySkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.PRO_LEVEL_PT_BR = new core_1.StringField('proLevel_pt_BR', FamilySkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.PRO_LEVEL_ZH_CN = new core_1.StringField('proLevel_zh_CN', FamilySkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[skill]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.SKILL = new core_1.StringField('skill', FamilySkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.STATUS = new core_1.StringField('status', FamilySkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.SUB_MODULE = new core_1.StringField('subModule', FamilySkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', FamilySkillMappingEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', FamilySkillMappingEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', FamilySkillMappingEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[proLevelTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.PRO_LEVEL_TRANSLATION_TEXT_NAV = new core_1.Link('proLevelTranslationTextNav', FamilySkillMappingEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[skillNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.SKILL_NAV = new core_1.OneToOneLink('skillNav', FamilySkillMappingEntity, SkillEntity_1.SkillEntity);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilySkillMappingEntity.STATUS_NAV = new core_1.OneToOneLink('statusNav', FamilySkillMappingEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the FamilySkillMappingEntity entity.
     */
    FamilySkillMappingEntity._allFields = [
        FamilySkillMappingEntity.FAMILY_ENTITY_EXTERNAL_CODE,
        FamilySkillMappingEntity.CREATED_BY,
        FamilySkillMappingEntity.CREATED_DATE_TIME,
        FamilySkillMappingEntity.EXTERNAL_CODE,
        FamilySkillMappingEntity.LAST_MODIFIED_BY,
        FamilySkillMappingEntity.LAST_MODIFIED_DATE_TIME,
        FamilySkillMappingEntity.MDF_SYSTEM_RECORD_STATUS,
        FamilySkillMappingEntity.PRO_LEVEL_DE_DE,
        FamilySkillMappingEntity.PRO_LEVEL_DEFAULT_VALUE,
        FamilySkillMappingEntity.PRO_LEVEL_EN_DEBUG,
        FamilySkillMappingEntity.PRO_LEVEL_EN_GB,
        FamilySkillMappingEntity.PRO_LEVEL_EN_US,
        FamilySkillMappingEntity.PRO_LEVEL_ES_ES,
        FamilySkillMappingEntity.PRO_LEVEL_ES_MX,
        FamilySkillMappingEntity.PRO_LEVEL_FR_CA,
        FamilySkillMappingEntity.PRO_LEVEL_FR_FR,
        FamilySkillMappingEntity.PRO_LEVEL_IT_IT,
        FamilySkillMappingEntity.PRO_LEVEL_LOCALIZED,
        FamilySkillMappingEntity.PRO_LEVEL_NL_NL,
        FamilySkillMappingEntity.PRO_LEVEL_PT_BR,
        FamilySkillMappingEntity.PRO_LEVEL_ZH_CN,
        FamilySkillMappingEntity.SKILL,
        FamilySkillMappingEntity.STATUS,
        FamilySkillMappingEntity.SUB_MODULE,
        FamilySkillMappingEntity.CREATED_BY_NAV,
        FamilySkillMappingEntity.LAST_MODIFIED_BY_NAV,
        FamilySkillMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
        FamilySkillMappingEntity.PRO_LEVEL_TRANSLATION_TEXT_NAV,
        FamilySkillMappingEntity.SKILL_NAV,
        FamilySkillMappingEntity.STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    FamilySkillMappingEntity.ALL_FIELDS = new core_1.AllFields('*', FamilySkillMappingEntity);
    /**
     * All key fields of the FamilySkillMappingEntity entity.
     */
    FamilySkillMappingEntity._keyFields = [FamilySkillMappingEntity.FAMILY_ENTITY_EXTERNAL_CODE, FamilySkillMappingEntity.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property FamilySkillMappingEntity.
     */
    FamilySkillMappingEntity._keys = FamilySkillMappingEntity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FamilySkillMappingEntity = exports.FamilySkillMappingEntity || (exports.FamilySkillMappingEntity = {}));
exports.FamilySkillMappingEntity = FamilySkillMappingEntity;
//# sourceMappingURL=FamilySkillMappingEntity.js.map