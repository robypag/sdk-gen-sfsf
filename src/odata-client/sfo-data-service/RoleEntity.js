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
var RoleEntityRequestBuilder_1 = require("./RoleEntityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "RoleEntity" of service "SFOData".
 */
var RoleEntity = /** @class */ (function (_super) {
    __extends(RoleEntity, _super);
    function RoleEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `RoleEntity`.
     * @returns A builder that constructs instances of entity type `RoleEntity`.
     */
    RoleEntity.builder = function () {
        return core_1.Entity.entityBuilder(RoleEntity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `RoleEntity` entity type.
     * @returns A `RoleEntity` request builder.
     */
    RoleEntity.requestBuilder = function () {
        return new RoleEntityRequestBuilder_1.RoleEntityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RoleEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RoleEntity`.
     */
    RoleEntity.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, RoleEntity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    RoleEntity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for RoleEntity.
     */
    RoleEntity._entityName = 'RoleEntity';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for RoleEntity.
     */
    RoleEntity._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    RoleEntity._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return RoleEntity;
}(core_1.Entity));
exports.RoleEntity = RoleEntity;
var User_1 = require("./User");
var FamilyEntity_1 = require("./FamilyEntity");
var JobCodeMappingEntity_1 = require("./JobCodeMappingEntity");
var MdfEnumValue_1 = require("./MdfEnumValue");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var RoleCompetencyBehaviorMappingEntity_1 = require("./RoleCompetencyBehaviorMappingEntity");
var RoleCompetencyMappingEntity_1 = require("./RoleCompetencyMappingEntity");
var RoleSkillMappingEntity_1 = require("./RoleSkillMappingEntity");
var RoleTalentPoolMappingEntity_1 = require("./RoleTalentPoolMappingEntity");
var WfRequest_1 = require("./WfRequest");
(function (RoleEntity) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.CREATED_BY = new core_1.StringField('createdBy', RoleEntity, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', RoleEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.CREATED_LOCALE = new core_1.StringField('createdLocale', RoleEntity, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.EXTERNAL_CODE = new core_1.StringField('externalCode', RoleEntity, 'Edm.String');
    /**
     * Static representation of the [[family]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.FAMILY = new core_1.StringField('family', RoleEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', RoleEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', RoleEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', RoleEntity, 'Edm.String');
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.NAME_DE_DE = new core_1.StringField('name_de_DE', RoleEntity, 'Edm.String');
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.NAME_DEFAULT_VALUE = new core_1.StringField('name_defaultValue', RoleEntity, 'Edm.String');
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.NAME_EN_DEBUG = new core_1.StringField('name_en_DEBUG', RoleEntity, 'Edm.String');
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.NAME_EN_GB = new core_1.StringField('name_en_GB', RoleEntity, 'Edm.String');
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.NAME_EN_US = new core_1.StringField('name_en_US', RoleEntity, 'Edm.String');
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.NAME_ES_ES = new core_1.StringField('name_es_ES', RoleEntity, 'Edm.String');
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.NAME_ES_MX = new core_1.StringField('name_es_MX', RoleEntity, 'Edm.String');
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.NAME_FR_CA = new core_1.StringField('name_fr_CA', RoleEntity, 'Edm.String');
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.NAME_FR_FR = new core_1.StringField('name_fr_FR', RoleEntity, 'Edm.String');
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.NAME_IT_IT = new core_1.StringField('name_it_IT', RoleEntity, 'Edm.String');
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.NAME_LOCALIZED = new core_1.StringField('name_localized', RoleEntity, 'Edm.String');
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.NAME_NL_NL = new core_1.StringField('name_nl_NL', RoleEntity, 'Edm.String');
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.NAME_PT_BR = new core_1.StringField('name_pt_BR', RoleEntity, 'Edm.String');
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.NAME_ZH_CN = new core_1.StringField('name_zh_CN', RoleEntity, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.STATUS = new core_1.StringField('status', RoleEntity, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.SUB_MODULE = new core_1.StringField('subModule', RoleEntity, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', RoleEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[familyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.FAMILY_NAV = new core_1.OneToOneLink('familyNav', RoleEntity, FamilyEntity_1.FamilyEntity);
    /**
     * Static representation of the one-to-many navigation property [[jobCodeMappings]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.JOB_CODE_MAPPINGS = new core_1.Link('jobCodeMappings', RoleEntity, JobCodeMappingEntity_1.JobCodeMappingEntity);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', RoleEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', RoleEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.NAME_TRANSLATION_TEXT_NAV = new core_1.Link('nameTranslationTextNav', RoleEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[roleCompetencyBehaviorMappings]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.ROLE_COMPETENCY_BEHAVIOR_MAPPINGS = new core_1.Link('roleCompetencyBehaviorMappings', RoleEntity, RoleCompetencyBehaviorMappingEntity_1.RoleCompetencyBehaviorMappingEntity);
    /**
     * Static representation of the one-to-many navigation property [[roleCompetencyMappings]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.ROLE_COMPETENCY_MAPPINGS = new core_1.Link('roleCompetencyMappings', RoleEntity, RoleCompetencyMappingEntity_1.RoleCompetencyMappingEntity);
    /**
     * Static representation of the one-to-many navigation property [[roleSkillMappings]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.ROLE_SKILL_MAPPINGS = new core_1.Link('roleSkillMappings', RoleEntity, RoleSkillMappingEntity_1.RoleSkillMappingEntity);
    /**
     * Static representation of the one-to-many navigation property [[roleTalentPoolMappings]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.ROLE_TALENT_POOL_MAPPINGS = new core_1.Link('roleTalentPoolMappings', RoleEntity, RoleTalentPoolMappingEntity_1.RoleTalentPoolMappingEntity);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.STATUS_NAV = new core_1.OneToOneLink('statusNav', RoleEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleEntity.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', RoleEntity, WfRequest_1.WfRequest);
    /**
     * All fields of the RoleEntity entity.
     */
    RoleEntity._allFields = [
        RoleEntity.CREATED_BY,
        RoleEntity.CREATED_DATE_TIME,
        RoleEntity.CREATED_LOCALE,
        RoleEntity.EXTERNAL_CODE,
        RoleEntity.FAMILY,
        RoleEntity.LAST_MODIFIED_BY,
        RoleEntity.LAST_MODIFIED_DATE_TIME,
        RoleEntity.MDF_SYSTEM_RECORD_STATUS,
        RoleEntity.NAME_DE_DE,
        RoleEntity.NAME_DEFAULT_VALUE,
        RoleEntity.NAME_EN_DEBUG,
        RoleEntity.NAME_EN_GB,
        RoleEntity.NAME_EN_US,
        RoleEntity.NAME_ES_ES,
        RoleEntity.NAME_ES_MX,
        RoleEntity.NAME_FR_CA,
        RoleEntity.NAME_FR_FR,
        RoleEntity.NAME_IT_IT,
        RoleEntity.NAME_LOCALIZED,
        RoleEntity.NAME_NL_NL,
        RoleEntity.NAME_PT_BR,
        RoleEntity.NAME_ZH_CN,
        RoleEntity.STATUS,
        RoleEntity.SUB_MODULE,
        RoleEntity.CREATED_BY_NAV,
        RoleEntity.FAMILY_NAV,
        RoleEntity.JOB_CODE_MAPPINGS,
        RoleEntity.LAST_MODIFIED_BY_NAV,
        RoleEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
        RoleEntity.NAME_TRANSLATION_TEXT_NAV,
        RoleEntity.ROLE_COMPETENCY_BEHAVIOR_MAPPINGS,
        RoleEntity.ROLE_COMPETENCY_MAPPINGS,
        RoleEntity.ROLE_SKILL_MAPPINGS,
        RoleEntity.ROLE_TALENT_POOL_MAPPINGS,
        RoleEntity.STATUS_NAV,
        RoleEntity.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    RoleEntity.ALL_FIELDS = new core_1.AllFields('*', RoleEntity);
    /**
     * All key fields of the RoleEntity entity.
     */
    RoleEntity._keyFields = [RoleEntity.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property RoleEntity.
     */
    RoleEntity._keys = RoleEntity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(RoleEntity = exports.RoleEntity || (exports.RoleEntity = {}));
exports.RoleEntity = RoleEntity;
//# sourceMappingURL=RoleEntity.js.map