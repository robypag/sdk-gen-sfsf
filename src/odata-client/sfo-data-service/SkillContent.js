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
var SkillContentRequestBuilder_1 = require("./SkillContentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SkillContent" of service "SFOData".
 */
var SkillContent = /** @class */ (function (_super) {
    __extends(SkillContent, _super);
    function SkillContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SkillContent`.
     * @returns A builder that constructs instances of entity type `SkillContent`.
     */
    SkillContent.builder = function () {
        return core_1.Entity.entityBuilder(SkillContent);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SkillContent` entity type.
     * @returns A `SkillContent` request builder.
     */
    SkillContent.requestBuilder = function () {
        return new SkillContentRequestBuilder_1.SkillContentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SkillContent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SkillContent`.
     */
    SkillContent.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, SkillContent);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SkillContent.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SkillContent.
     */
    SkillContent._entityName = 'SkillContent';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SkillContent.
     */
    SkillContent._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    SkillContent._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SkillContent;
}(core_1.Entity));
exports.SkillContent = SkillContent;
var User_1 = require("./User");
var SkillEntity_1 = require("./SkillEntity");
var MdfEnumValue_1 = require("./MdfEnumValue");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var RoleEntity_1 = require("./RoleEntity");
(function (SkillContent) {
    /**
     * Static representation of the [[jobProfileExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.JOB_PROFILE_EXTERNAL_CODE = new core_1.StringField('JobProfile_externalCode', SkillContent, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.CREATED_BY = new core_1.StringField('createdBy', SkillContent, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', SkillContent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[entity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.ENTITY = new core_1.StringField('entity', SkillContent, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.EXTERNAL_CODE = new core_1.StringField('externalCode', SkillContent, 'Edm.String');
    /**
     * Static representation of the [[jobProfileId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.JOB_PROFILE_ID = new core_1.StringField('jobProfileId', SkillContent, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', SkillContent, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', SkillContent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', SkillContent, 'Edm.String');
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.ORDER = new core_1.BigNumberField('order', SkillContent, 'Edm.Int64');
    /**
     * Static representation of the [[proLevelDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.PRO_LEVEL_DE_DE = new core_1.StringField('proLevel_de_DE', SkillContent, 'Edm.String');
    /**
     * Static representation of the [[proLevelDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.PRO_LEVEL_DEFAULT_VALUE = new core_1.StringField('proLevel_defaultValue', SkillContent, 'Edm.String');
    /**
     * Static representation of the [[proLevelEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.PRO_LEVEL_EN_DEBUG = new core_1.StringField('proLevel_en_DEBUG', SkillContent, 'Edm.String');
    /**
     * Static representation of the [[proLevelEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.PRO_LEVEL_EN_GB = new core_1.StringField('proLevel_en_GB', SkillContent, 'Edm.String');
    /**
     * Static representation of the [[proLevelEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.PRO_LEVEL_EN_US = new core_1.StringField('proLevel_en_US', SkillContent, 'Edm.String');
    /**
     * Static representation of the [[proLevelEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.PRO_LEVEL_ES_ES = new core_1.StringField('proLevel_es_ES', SkillContent, 'Edm.String');
    /**
     * Static representation of the [[proLevelEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.PRO_LEVEL_ES_MX = new core_1.StringField('proLevel_es_MX', SkillContent, 'Edm.String');
    /**
     * Static representation of the [[proLevelFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.PRO_LEVEL_FR_CA = new core_1.StringField('proLevel_fr_CA', SkillContent, 'Edm.String');
    /**
     * Static representation of the [[proLevelFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.PRO_LEVEL_FR_FR = new core_1.StringField('proLevel_fr_FR', SkillContent, 'Edm.String');
    /**
     * Static representation of the [[proLevelItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.PRO_LEVEL_IT_IT = new core_1.StringField('proLevel_it_IT', SkillContent, 'Edm.String');
    /**
     * Static representation of the [[proLevelLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.PRO_LEVEL_LOCALIZED = new core_1.StringField('proLevel_localized', SkillContent, 'Edm.String');
    /**
     * Static representation of the [[proLevelNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.PRO_LEVEL_NL_NL = new core_1.StringField('proLevel_nl_NL', SkillContent, 'Edm.String');
    /**
     * Static representation of the [[proLevelPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.PRO_LEVEL_PT_BR = new core_1.StringField('proLevel_pt_BR', SkillContent, 'Edm.String');
    /**
     * Static representation of the [[proLevelZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.PRO_LEVEL_ZH_CN = new core_1.StringField('proLevel_zh_CN', SkillContent, 'Edm.String');
    /**
     * Static representation of the [[role]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.ROLE = new core_1.StringField('role', SkillContent, 'Edm.String');
    /**
     * Static representation of the [[sectionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.SECTION_ID = new core_1.StringField('sectionId', SkillContent, 'Edm.String');
    /**
     * Static representation of the [[sectionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.SECTION_TYPE = new core_1.StringField('sectionType', SkillContent, 'Edm.String');
    /**
     * Static representation of the [[skillMappingId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.SKILL_MAPPING_ID = new core_1.StringField('skillMappingId', SkillContent, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.STATUS = new core_1.StringField('status', SkillContent, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.SUB_MODULE = new core_1.StringField('subModule', SkillContent, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', SkillContent, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[entityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.ENTITY_NAV = new core_1.OneToOneLink('entityNav', SkillContent, SkillEntity_1.SkillEntity);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', SkillContent, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', SkillContent, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[proLevelTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.PRO_LEVEL_TRANSLATION_TEXT_NAV = new core_1.Link('proLevelTranslationTextNav', SkillContent, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[roleNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.ROLE_NAV = new core_1.OneToOneLink('roleNav', SkillContent, RoleEntity_1.RoleEntity);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillContent.STATUS_NAV = new core_1.OneToOneLink('statusNav', SkillContent, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the SkillContent entity.
     */
    SkillContent._allFields = [
        SkillContent.JOB_PROFILE_EXTERNAL_CODE,
        SkillContent.CREATED_BY,
        SkillContent.CREATED_DATE_TIME,
        SkillContent.ENTITY,
        SkillContent.EXTERNAL_CODE,
        SkillContent.JOB_PROFILE_ID,
        SkillContent.LAST_MODIFIED_BY,
        SkillContent.LAST_MODIFIED_DATE_TIME,
        SkillContent.MDF_SYSTEM_RECORD_STATUS,
        SkillContent.ORDER,
        SkillContent.PRO_LEVEL_DE_DE,
        SkillContent.PRO_LEVEL_DEFAULT_VALUE,
        SkillContent.PRO_LEVEL_EN_DEBUG,
        SkillContent.PRO_LEVEL_EN_GB,
        SkillContent.PRO_LEVEL_EN_US,
        SkillContent.PRO_LEVEL_ES_ES,
        SkillContent.PRO_LEVEL_ES_MX,
        SkillContent.PRO_LEVEL_FR_CA,
        SkillContent.PRO_LEVEL_FR_FR,
        SkillContent.PRO_LEVEL_IT_IT,
        SkillContent.PRO_LEVEL_LOCALIZED,
        SkillContent.PRO_LEVEL_NL_NL,
        SkillContent.PRO_LEVEL_PT_BR,
        SkillContent.PRO_LEVEL_ZH_CN,
        SkillContent.ROLE,
        SkillContent.SECTION_ID,
        SkillContent.SECTION_TYPE,
        SkillContent.SKILL_MAPPING_ID,
        SkillContent.STATUS,
        SkillContent.SUB_MODULE,
        SkillContent.CREATED_BY_NAV,
        SkillContent.ENTITY_NAV,
        SkillContent.LAST_MODIFIED_BY_NAV,
        SkillContent.MDF_SYSTEM_RECORD_STATUS_NAV,
        SkillContent.PRO_LEVEL_TRANSLATION_TEXT_NAV,
        SkillContent.ROLE_NAV,
        SkillContent.STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    SkillContent.ALL_FIELDS = new core_1.AllFields('*', SkillContent);
    /**
     * All key fields of the SkillContent entity.
     */
    SkillContent._keyFields = [SkillContent.JOB_PROFILE_EXTERNAL_CODE, SkillContent.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property SkillContent.
     */
    SkillContent._keys = SkillContent._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SkillContent = exports.SkillContent || (exports.SkillContent = {}));
exports.SkillContent = SkillContent;
//# sourceMappingURL=SkillContent.js.map