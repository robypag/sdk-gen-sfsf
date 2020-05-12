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
var FamilyEntityRequestBuilder_1 = require("./FamilyEntityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FamilyEntity" of service "SFOData".
 */
var FamilyEntity = /** @class */ (function (_super) {
    __extends(FamilyEntity, _super);
    function FamilyEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FamilyEntity`.
     * @returns A builder that constructs instances of entity type `FamilyEntity`.
     */
    FamilyEntity.builder = function () {
        return core_1.Entity.entityBuilder(FamilyEntity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FamilyEntity` entity type.
     * @returns A `FamilyEntity` request builder.
     */
    FamilyEntity.requestBuilder = function () {
        return new FamilyEntityRequestBuilder_1.FamilyEntityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FamilyEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FamilyEntity`.
     */
    FamilyEntity.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FamilyEntity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FamilyEntity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FamilyEntity.
     */
    FamilyEntity._entityName = 'FamilyEntity';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FamilyEntity.
     */
    FamilyEntity._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FamilyEntity._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FamilyEntity;
}(core_1.Entity));
exports.FamilyEntity = FamilyEntity;
var FamilyCompetencyMappingEntity_1 = require("./FamilyCompetencyMappingEntity");
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var FamilySkillMappingEntity_1 = require("./FamilySkillMappingEntity");
var WfRequest_1 = require("./WfRequest");
(function (FamilyEntity) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.CREATED_BY = new core_1.StringField('createdBy', FamilyEntity, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FamilyEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.CREATED_LOCALE = new core_1.StringField('createdLocale', FamilyEntity, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.EXTERNAL_CODE = new core_1.StringField('externalCode', FamilyEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FamilyEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FamilyEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', FamilyEntity, 'Edm.String');
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.NAME_DE_DE = new core_1.StringField('name_de_DE', FamilyEntity, 'Edm.String');
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.NAME_DEFAULT_VALUE = new core_1.StringField('name_defaultValue', FamilyEntity, 'Edm.String');
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.NAME_EN_DEBUG = new core_1.StringField('name_en_DEBUG', FamilyEntity, 'Edm.String');
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.NAME_EN_GB = new core_1.StringField('name_en_GB', FamilyEntity, 'Edm.String');
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.NAME_EN_US = new core_1.StringField('name_en_US', FamilyEntity, 'Edm.String');
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.NAME_ES_ES = new core_1.StringField('name_es_ES', FamilyEntity, 'Edm.String');
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.NAME_ES_MX = new core_1.StringField('name_es_MX', FamilyEntity, 'Edm.String');
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.NAME_FR_CA = new core_1.StringField('name_fr_CA', FamilyEntity, 'Edm.String');
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.NAME_FR_FR = new core_1.StringField('name_fr_FR', FamilyEntity, 'Edm.String');
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.NAME_IT_IT = new core_1.StringField('name_it_IT', FamilyEntity, 'Edm.String');
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.NAME_LOCALIZED = new core_1.StringField('name_localized', FamilyEntity, 'Edm.String');
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.NAME_NL_NL = new core_1.StringField('name_nl_NL', FamilyEntity, 'Edm.String');
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.NAME_PT_BR = new core_1.StringField('name_pt_BR', FamilyEntity, 'Edm.String');
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.NAME_ZH_CN = new core_1.StringField('name_zh_CN', FamilyEntity, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.STATUS = new core_1.StringField('status', FamilyEntity, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.SUB_MODULE = new core_1.StringField('subModule', FamilyEntity, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[competencies]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.COMPETENCIES = new core_1.Link('competencies', FamilyEntity, FamilyCompetencyMappingEntity_1.FamilyCompetencyMappingEntity);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', FamilyEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', FamilyEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', FamilyEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.NAME_TRANSLATION_TEXT_NAV = new core_1.Link('nameTranslationTextNav', FamilyEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[skills]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.SKILLS = new core_1.Link('skills', FamilyEntity, FamilySkillMappingEntity_1.FamilySkillMappingEntity);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.STATUS_NAV = new core_1.OneToOneLink('statusNav', FamilyEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyEntity.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', FamilyEntity, WfRequest_1.WfRequest);
    /**
     * All fields of the FamilyEntity entity.
     */
    FamilyEntity._allFields = [
        FamilyEntity.CREATED_BY,
        FamilyEntity.CREATED_DATE_TIME,
        FamilyEntity.CREATED_LOCALE,
        FamilyEntity.EXTERNAL_CODE,
        FamilyEntity.LAST_MODIFIED_BY,
        FamilyEntity.LAST_MODIFIED_DATE_TIME,
        FamilyEntity.MDF_SYSTEM_RECORD_STATUS,
        FamilyEntity.NAME_DE_DE,
        FamilyEntity.NAME_DEFAULT_VALUE,
        FamilyEntity.NAME_EN_DEBUG,
        FamilyEntity.NAME_EN_GB,
        FamilyEntity.NAME_EN_US,
        FamilyEntity.NAME_ES_ES,
        FamilyEntity.NAME_ES_MX,
        FamilyEntity.NAME_FR_CA,
        FamilyEntity.NAME_FR_FR,
        FamilyEntity.NAME_IT_IT,
        FamilyEntity.NAME_LOCALIZED,
        FamilyEntity.NAME_NL_NL,
        FamilyEntity.NAME_PT_BR,
        FamilyEntity.NAME_ZH_CN,
        FamilyEntity.STATUS,
        FamilyEntity.SUB_MODULE,
        FamilyEntity.COMPETENCIES,
        FamilyEntity.CREATED_BY_NAV,
        FamilyEntity.LAST_MODIFIED_BY_NAV,
        FamilyEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
        FamilyEntity.NAME_TRANSLATION_TEXT_NAV,
        FamilyEntity.SKILLS,
        FamilyEntity.STATUS_NAV,
        FamilyEntity.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    FamilyEntity.ALL_FIELDS = new core_1.AllFields('*', FamilyEntity);
    /**
     * All key fields of the FamilyEntity entity.
     */
    FamilyEntity._keyFields = [FamilyEntity.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property FamilyEntity.
     */
    FamilyEntity._keys = FamilyEntity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FamilyEntity = exports.FamilyEntity || (exports.FamilyEntity = {}));
exports.FamilyEntity = FamilyEntity;
//# sourceMappingURL=FamilyEntity.js.map