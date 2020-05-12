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
var RoleSkillMappingEntityRequestBuilder_1 = require("./RoleSkillMappingEntityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "RoleSkillMappingEntity" of service "SFOData".
 */
var RoleSkillMappingEntity = /** @class */ (function (_super) {
    __extends(RoleSkillMappingEntity, _super);
    function RoleSkillMappingEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `RoleSkillMappingEntity`.
     * @returns A builder that constructs instances of entity type `RoleSkillMappingEntity`.
     */
    RoleSkillMappingEntity.builder = function () {
        return core_1.Entity.entityBuilder(RoleSkillMappingEntity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `RoleSkillMappingEntity` entity type.
     * @returns A `RoleSkillMappingEntity` request builder.
     */
    RoleSkillMappingEntity.requestBuilder = function () {
        return new RoleSkillMappingEntityRequestBuilder_1.RoleSkillMappingEntityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RoleSkillMappingEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RoleSkillMappingEntity`.
     */
    RoleSkillMappingEntity.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, RoleSkillMappingEntity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    RoleSkillMappingEntity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for RoleSkillMappingEntity.
     */
    RoleSkillMappingEntity._entityName = 'RoleSkillMappingEntity';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for RoleSkillMappingEntity.
     */
    RoleSkillMappingEntity._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    RoleSkillMappingEntity._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return RoleSkillMappingEntity;
}(core_1.Entity));
exports.RoleSkillMappingEntity = RoleSkillMappingEntity;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var SkillEntity_1 = require("./SkillEntity");
(function (RoleSkillMappingEntity) {
    /**
     * Static representation of the [[roleEntityExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.ROLE_ENTITY_EXTERNAL_CODE = new core_1.StringField('RoleEntity_externalCode', RoleSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.CREATED_BY = new core_1.StringField('createdBy', RoleSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', RoleSkillMappingEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.EXTERNAL_CODE = new core_1.StringField('externalCode', RoleSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', RoleSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', RoleSkillMappingEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', RoleSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.PRO_LEVEL_DE_DE = new core_1.StringField('proLevel_de_DE', RoleSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.PRO_LEVEL_DEFAULT_VALUE = new core_1.StringField('proLevel_defaultValue', RoleSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.PRO_LEVEL_EN_DEBUG = new core_1.StringField('proLevel_en_DEBUG', RoleSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.PRO_LEVEL_EN_GB = new core_1.StringField('proLevel_en_GB', RoleSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.PRO_LEVEL_EN_US = new core_1.StringField('proLevel_en_US', RoleSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.PRO_LEVEL_ES_ES = new core_1.StringField('proLevel_es_ES', RoleSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.PRO_LEVEL_ES_MX = new core_1.StringField('proLevel_es_MX', RoleSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.PRO_LEVEL_FR_CA = new core_1.StringField('proLevel_fr_CA', RoleSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.PRO_LEVEL_FR_FR = new core_1.StringField('proLevel_fr_FR', RoleSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.PRO_LEVEL_IT_IT = new core_1.StringField('proLevel_it_IT', RoleSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.PRO_LEVEL_LOCALIZED = new core_1.StringField('proLevel_localized', RoleSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.PRO_LEVEL_NL_NL = new core_1.StringField('proLevel_nl_NL', RoleSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.PRO_LEVEL_PT_BR = new core_1.StringField('proLevel_pt_BR', RoleSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.PRO_LEVEL_ZH_CN = new core_1.StringField('proLevel_zh_CN', RoleSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[skill]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.SKILL = new core_1.StringField('skill', RoleSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.STATUS = new core_1.StringField('status', RoleSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.SUB_MODULE = new core_1.StringField('subModule', RoleSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', RoleSkillMappingEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', RoleSkillMappingEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', RoleSkillMappingEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[proLevelTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.PRO_LEVEL_TRANSLATION_TEXT_NAV = new core_1.Link('proLevelTranslationTextNav', RoleSkillMappingEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[skillNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.SKILL_NAV = new core_1.OneToOneLink('skillNav', RoleSkillMappingEntity, SkillEntity_1.SkillEntity);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleSkillMappingEntity.STATUS_NAV = new core_1.OneToOneLink('statusNav', RoleSkillMappingEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the RoleSkillMappingEntity entity.
     */
    RoleSkillMappingEntity._allFields = [
        RoleSkillMappingEntity.ROLE_ENTITY_EXTERNAL_CODE,
        RoleSkillMappingEntity.CREATED_BY,
        RoleSkillMappingEntity.CREATED_DATE_TIME,
        RoleSkillMappingEntity.EXTERNAL_CODE,
        RoleSkillMappingEntity.LAST_MODIFIED_BY,
        RoleSkillMappingEntity.LAST_MODIFIED_DATE_TIME,
        RoleSkillMappingEntity.MDF_SYSTEM_RECORD_STATUS,
        RoleSkillMappingEntity.PRO_LEVEL_DE_DE,
        RoleSkillMappingEntity.PRO_LEVEL_DEFAULT_VALUE,
        RoleSkillMappingEntity.PRO_LEVEL_EN_DEBUG,
        RoleSkillMappingEntity.PRO_LEVEL_EN_GB,
        RoleSkillMappingEntity.PRO_LEVEL_EN_US,
        RoleSkillMappingEntity.PRO_LEVEL_ES_ES,
        RoleSkillMappingEntity.PRO_LEVEL_ES_MX,
        RoleSkillMappingEntity.PRO_LEVEL_FR_CA,
        RoleSkillMappingEntity.PRO_LEVEL_FR_FR,
        RoleSkillMappingEntity.PRO_LEVEL_IT_IT,
        RoleSkillMappingEntity.PRO_LEVEL_LOCALIZED,
        RoleSkillMappingEntity.PRO_LEVEL_NL_NL,
        RoleSkillMappingEntity.PRO_LEVEL_PT_BR,
        RoleSkillMappingEntity.PRO_LEVEL_ZH_CN,
        RoleSkillMappingEntity.SKILL,
        RoleSkillMappingEntity.STATUS,
        RoleSkillMappingEntity.SUB_MODULE,
        RoleSkillMappingEntity.CREATED_BY_NAV,
        RoleSkillMappingEntity.LAST_MODIFIED_BY_NAV,
        RoleSkillMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
        RoleSkillMappingEntity.PRO_LEVEL_TRANSLATION_TEXT_NAV,
        RoleSkillMappingEntity.SKILL_NAV,
        RoleSkillMappingEntity.STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    RoleSkillMappingEntity.ALL_FIELDS = new core_1.AllFields('*', RoleSkillMappingEntity);
    /**
     * All key fields of the RoleSkillMappingEntity entity.
     */
    RoleSkillMappingEntity._keyFields = [RoleSkillMappingEntity.ROLE_ENTITY_EXTERNAL_CODE, RoleSkillMappingEntity.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property RoleSkillMappingEntity.
     */
    RoleSkillMappingEntity._keys = RoleSkillMappingEntity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(RoleSkillMappingEntity = exports.RoleSkillMappingEntity || (exports.RoleSkillMappingEntity = {}));
exports.RoleSkillMappingEntity = RoleSkillMappingEntity;
//# sourceMappingURL=RoleSkillMappingEntity.js.map