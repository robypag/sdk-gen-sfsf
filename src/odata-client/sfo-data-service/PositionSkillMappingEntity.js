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
var PositionSkillMappingEntityRequestBuilder_1 = require("./PositionSkillMappingEntityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PositionSkillMappingEntity" of service "SFOData".
 */
var PositionSkillMappingEntity = /** @class */ (function (_super) {
    __extends(PositionSkillMappingEntity, _super);
    function PositionSkillMappingEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PositionSkillMappingEntity`.
     * @returns A builder that constructs instances of entity type `PositionSkillMappingEntity`.
     */
    PositionSkillMappingEntity.builder = function () {
        return core_1.Entity.entityBuilder(PositionSkillMappingEntity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PositionSkillMappingEntity` entity type.
     * @returns A `PositionSkillMappingEntity` request builder.
     */
    PositionSkillMappingEntity.requestBuilder = function () {
        return new PositionSkillMappingEntityRequestBuilder_1.PositionSkillMappingEntityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PositionSkillMappingEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PositionSkillMappingEntity`.
     */
    PositionSkillMappingEntity.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PositionSkillMappingEntity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PositionSkillMappingEntity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PositionSkillMappingEntity.
     */
    PositionSkillMappingEntity._entityName = 'PositionSkillMappingEntity';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PositionSkillMappingEntity.
     */
    PositionSkillMappingEntity._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PositionSkillMappingEntity._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PositionSkillMappingEntity;
}(core_1.Entity));
exports.PositionSkillMappingEntity = PositionSkillMappingEntity;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var SkillEntity_1 = require("./SkillEntity");
(function (PositionSkillMappingEntity) {
    /**
     * Static representation of the [[positionEntityExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.POSITION_ENTITY_EXTERNAL_CODE = new core_1.StringField('PositionEntity_externalCode', PositionSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.CREATED_BY = new core_1.StringField('createdBy', PositionSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PositionSkillMappingEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.EXTERNAL_CODE = new core_1.StringField('externalCode', PositionSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PositionSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PositionSkillMappingEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PositionSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.PRO_LEVEL_DE_DE = new core_1.StringField('proLevel_de_DE', PositionSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.PRO_LEVEL_DEFAULT_VALUE = new core_1.StringField('proLevel_defaultValue', PositionSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.PRO_LEVEL_EN_DEBUG = new core_1.StringField('proLevel_en_DEBUG', PositionSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.PRO_LEVEL_EN_GB = new core_1.StringField('proLevel_en_GB', PositionSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.PRO_LEVEL_EN_US = new core_1.StringField('proLevel_en_US', PositionSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.PRO_LEVEL_ES_ES = new core_1.StringField('proLevel_es_ES', PositionSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.PRO_LEVEL_ES_MX = new core_1.StringField('proLevel_es_MX', PositionSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.PRO_LEVEL_FR_CA = new core_1.StringField('proLevel_fr_CA', PositionSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.PRO_LEVEL_FR_FR = new core_1.StringField('proLevel_fr_FR', PositionSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.PRO_LEVEL_IT_IT = new core_1.StringField('proLevel_it_IT', PositionSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.PRO_LEVEL_LOCALIZED = new core_1.StringField('proLevel_localized', PositionSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.PRO_LEVEL_NL_NL = new core_1.StringField('proLevel_nl_NL', PositionSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.PRO_LEVEL_PT_BR = new core_1.StringField('proLevel_pt_BR', PositionSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevelZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.PRO_LEVEL_ZH_CN = new core_1.StringField('proLevel_zh_CN', PositionSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[skill]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.SKILL = new core_1.StringField('skill', PositionSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.STATUS = new core_1.StringField('status', PositionSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.SUB_MODULE = new core_1.StringField('subModule', PositionSkillMappingEntity, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PositionSkillMappingEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PositionSkillMappingEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PositionSkillMappingEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[proLevelTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.PRO_LEVEL_TRANSLATION_TEXT_NAV = new core_1.Link('proLevelTranslationTextNav', PositionSkillMappingEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[skillNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.SKILL_NAV = new core_1.OneToOneLink('skillNav', PositionSkillMappingEntity, SkillEntity_1.SkillEntity);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionSkillMappingEntity.STATUS_NAV = new core_1.OneToOneLink('statusNav', PositionSkillMappingEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the PositionSkillMappingEntity entity.
     */
    PositionSkillMappingEntity._allFields = [
        PositionSkillMappingEntity.POSITION_ENTITY_EXTERNAL_CODE,
        PositionSkillMappingEntity.CREATED_BY,
        PositionSkillMappingEntity.CREATED_DATE_TIME,
        PositionSkillMappingEntity.EXTERNAL_CODE,
        PositionSkillMappingEntity.LAST_MODIFIED_BY,
        PositionSkillMappingEntity.LAST_MODIFIED_DATE_TIME,
        PositionSkillMappingEntity.MDF_SYSTEM_RECORD_STATUS,
        PositionSkillMappingEntity.PRO_LEVEL_DE_DE,
        PositionSkillMappingEntity.PRO_LEVEL_DEFAULT_VALUE,
        PositionSkillMappingEntity.PRO_LEVEL_EN_DEBUG,
        PositionSkillMappingEntity.PRO_LEVEL_EN_GB,
        PositionSkillMappingEntity.PRO_LEVEL_EN_US,
        PositionSkillMappingEntity.PRO_LEVEL_ES_ES,
        PositionSkillMappingEntity.PRO_LEVEL_ES_MX,
        PositionSkillMappingEntity.PRO_LEVEL_FR_CA,
        PositionSkillMappingEntity.PRO_LEVEL_FR_FR,
        PositionSkillMappingEntity.PRO_LEVEL_IT_IT,
        PositionSkillMappingEntity.PRO_LEVEL_LOCALIZED,
        PositionSkillMappingEntity.PRO_LEVEL_NL_NL,
        PositionSkillMappingEntity.PRO_LEVEL_PT_BR,
        PositionSkillMappingEntity.PRO_LEVEL_ZH_CN,
        PositionSkillMappingEntity.SKILL,
        PositionSkillMappingEntity.STATUS,
        PositionSkillMappingEntity.SUB_MODULE,
        PositionSkillMappingEntity.CREATED_BY_NAV,
        PositionSkillMappingEntity.LAST_MODIFIED_BY_NAV,
        PositionSkillMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
        PositionSkillMappingEntity.PRO_LEVEL_TRANSLATION_TEXT_NAV,
        PositionSkillMappingEntity.SKILL_NAV,
        PositionSkillMappingEntity.STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    PositionSkillMappingEntity.ALL_FIELDS = new core_1.AllFields('*', PositionSkillMappingEntity);
    /**
     * All key fields of the PositionSkillMappingEntity entity.
     */
    PositionSkillMappingEntity._keyFields = [PositionSkillMappingEntity.POSITION_ENTITY_EXTERNAL_CODE, PositionSkillMappingEntity.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property PositionSkillMappingEntity.
     */
    PositionSkillMappingEntity._keys = PositionSkillMappingEntity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PositionSkillMappingEntity = exports.PositionSkillMappingEntity || (exports.PositionSkillMappingEntity = {}));
exports.PositionSkillMappingEntity = PositionSkillMappingEntity;
//# sourceMappingURL=PositionSkillMappingEntity.js.map