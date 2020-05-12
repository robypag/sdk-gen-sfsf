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
var CompetencyEntityRequestBuilder_1 = require("./CompetencyEntityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CompetencyEntity" of service "SFOData".
 */
var CompetencyEntity = /** @class */ (function (_super) {
    __extends(CompetencyEntity, _super);
    function CompetencyEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CompetencyEntity`.
     * @returns A builder that constructs instances of entity type `CompetencyEntity`.
     */
    CompetencyEntity.builder = function () {
        return core_1.Entity.entityBuilder(CompetencyEntity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CompetencyEntity` entity type.
     * @returns A `CompetencyEntity` request builder.
     */
    CompetencyEntity.requestBuilder = function () {
        return new CompetencyEntityRequestBuilder_1.CompetencyEntityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CompetencyEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CompetencyEntity`.
     */
    CompetencyEntity.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, CompetencyEntity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CompetencyEntity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CompetencyEntity.
     */
    CompetencyEntity._entityName = 'CompetencyEntity';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CompetencyEntity.
     */
    CompetencyEntity._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CompetencyEntity._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CompetencyEntity;
}(core_1.Entity));
exports.CompetencyEntity = CompetencyEntity;
var BehaviorMappingEntity_1 = require("./BehaviorMappingEntity");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var CompetencyType_1 = require("./CompetencyType");
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (CompetencyEntity) {
    /**
     * Static representation of the [[categoryDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.CATEGORY_DE_DE = new core_1.StringField('category_de_DE', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.CATEGORY_DEFAULT_VALUE = new core_1.StringField('category_defaultValue', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.CATEGORY_EN_DEBUG = new core_1.StringField('category_en_DEBUG', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.CATEGORY_EN_GB = new core_1.StringField('category_en_GB', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.CATEGORY_EN_US = new core_1.StringField('category_en_US', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.CATEGORY_ES_ES = new core_1.StringField('category_es_ES', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.CATEGORY_ES_MX = new core_1.StringField('category_es_MX', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.CATEGORY_FR_CA = new core_1.StringField('category_fr_CA', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.CATEGORY_FR_FR = new core_1.StringField('category_fr_FR', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.CATEGORY_IT_IT = new core_1.StringField('category_it_IT', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.CATEGORY_LOCALIZED = new core_1.StringField('category_localized', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.CATEGORY_NL_NL = new core_1.StringField('category_nl_NL', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.CATEGORY_PT_BR = new core_1.StringField('category_pt_BR', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.CATEGORY_ZH_CN = new core_1.StringField('category_zh_CN', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[collection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.COLLECTION = new core_1.BooleanField('collection', CompetencyEntity, 'Edm.Boolean');
    /**
     * Static representation of the [[core]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.CORE = new core_1.BooleanField('core', CompetencyEntity, 'Edm.Boolean');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.CREATED_BY = new core_1.StringField('createdBy', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', CompetencyEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.DESCRIPTION_DE_DE = new core_1.StringField('description_de_DE', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.DESCRIPTION_DEFAULT_VALUE = new core_1.StringField('description_defaultValue', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.DESCRIPTION_EN_DEBUG = new core_1.StringField('description_en_DEBUG', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.DESCRIPTION_EN_GB = new core_1.StringField('description_en_GB', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.DESCRIPTION_EN_US = new core_1.StringField('description_en_US', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.DESCRIPTION_ES_ES = new core_1.StringField('description_es_ES', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.DESCRIPTION_ES_MX = new core_1.StringField('description_es_MX', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.DESCRIPTION_FR_CA = new core_1.StringField('description_fr_CA', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.DESCRIPTION_FR_FR = new core_1.StringField('description_fr_FR', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.DESCRIPTION_IT_IT = new core_1.StringField('description_it_IT', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.DESCRIPTION_LOCALIZED = new core_1.StringField('description_localized', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.DESCRIPTION_NL_NL = new core_1.StringField('description_nl_NL', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.DESCRIPTION_PT_BR = new core_1.StringField('description_pt_BR', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.DESCRIPTION_ZH_CN = new core_1.StringField('description_zh_CN', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.EXTERNAL_CODE = new core_1.StringField('externalCode', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', CompetencyEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[libNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.LIB_NAME_DE_DE = new core_1.StringField('libName_de_DE', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.LIB_NAME_DEFAULT_VALUE = new core_1.StringField('libName_defaultValue', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.LIB_NAME_EN_DEBUG = new core_1.StringField('libName_en_DEBUG', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.LIB_NAME_EN_GB = new core_1.StringField('libName_en_GB', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.LIB_NAME_EN_US = new core_1.StringField('libName_en_US', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.LIB_NAME_ES_ES = new core_1.StringField('libName_es_ES', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.LIB_NAME_ES_MX = new core_1.StringField('libName_es_MX', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.LIB_NAME_FR_CA = new core_1.StringField('libName_fr_CA', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.LIB_NAME_FR_FR = new core_1.StringField('libName_fr_FR', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.LIB_NAME_IT_IT = new core_1.StringField('libName_it_IT', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.LIB_NAME_LOCALIZED = new core_1.StringField('libName_localized', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.LIB_NAME_NL_NL = new core_1.StringField('libName_nl_NL', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[libNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.LIB_NAME_PT_BR = new core_1.StringField('libName_pt_BR', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.LIB_NAME_ZH_CN = new core_1.StringField('libName_zh_CN', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.NAME_DE_DE = new core_1.StringField('name_de_DE', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.NAME_DEFAULT_VALUE = new core_1.StringField('name_defaultValue', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.NAME_EN_DEBUG = new core_1.StringField('name_en_DEBUG', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.NAME_EN_GB = new core_1.StringField('name_en_GB', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.NAME_EN_US = new core_1.StringField('name_en_US', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.NAME_ES_ES = new core_1.StringField('name_es_ES', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.NAME_ES_MX = new core_1.StringField('name_es_MX', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.NAME_FR_CA = new core_1.StringField('name_fr_CA', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.NAME_FR_FR = new core_1.StringField('name_fr_FR', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.NAME_IT_IT = new core_1.StringField('name_it_IT', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.NAME_LOCALIZED = new core_1.StringField('name_localized', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.NAME_NL_NL = new core_1.StringField('name_nl_NL', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.NAME_PT_BR = new core_1.StringField('name_pt_BR', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.NAME_ZH_CN = new core_1.StringField('name_zh_CN', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.STATUS = new core_1.StringField('status', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.SUB_MODULE = new core_1.StringField('subModule', CompetencyEntity, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[behaviors]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.BEHAVIORS = new core_1.Link('behaviors', CompetencyEntity, BehaviorMappingEntity_1.BehaviorMappingEntity);
    /**
     * Static representation of the one-to-many navigation property [[categoryTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.CATEGORY_TRANSLATION_TEXT_NAV = new core_1.Link('categoryTranslationTextNav', CompetencyEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[competencies]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.COMPETENCIES = new core_1.Link('competencies', CompetencyEntity, CompetencyEntity);
    /**
     * Static representation of the one-to-many navigation property [[competencyTypes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.COMPETENCY_TYPES = new core_1.Link('competencyTypes', CompetencyEntity, CompetencyType_1.CompetencyType);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', CompetencyEntity, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.DESCRIPTION_TRANSLATION_TEXT_NAV = new core_1.Link('descriptionTranslationTextNav', CompetencyEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', CompetencyEntity, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[libNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.LIB_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('libNameTranslationTextNav', CompetencyEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', CompetencyEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.NAME_TRANSLATION_TEXT_NAV = new core_1.Link('nameTranslationTextNav', CompetencyEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.STATUS_NAV = new core_1.OneToOneLink('statusNav', CompetencyEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyEntity.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', CompetencyEntity, WfRequest_1.WfRequest);
    /**
     * All fields of the CompetencyEntity entity.
     */
    CompetencyEntity._allFields = [
        CompetencyEntity.CATEGORY_DE_DE,
        CompetencyEntity.CATEGORY_DEFAULT_VALUE,
        CompetencyEntity.CATEGORY_EN_DEBUG,
        CompetencyEntity.CATEGORY_EN_GB,
        CompetencyEntity.CATEGORY_EN_US,
        CompetencyEntity.CATEGORY_ES_ES,
        CompetencyEntity.CATEGORY_ES_MX,
        CompetencyEntity.CATEGORY_FR_CA,
        CompetencyEntity.CATEGORY_FR_FR,
        CompetencyEntity.CATEGORY_IT_IT,
        CompetencyEntity.CATEGORY_LOCALIZED,
        CompetencyEntity.CATEGORY_NL_NL,
        CompetencyEntity.CATEGORY_PT_BR,
        CompetencyEntity.CATEGORY_ZH_CN,
        CompetencyEntity.COLLECTION,
        CompetencyEntity.CORE,
        CompetencyEntity.CREATED_BY,
        CompetencyEntity.CREATED_DATE_TIME,
        CompetencyEntity.DESCRIPTION_DE_DE,
        CompetencyEntity.DESCRIPTION_DEFAULT_VALUE,
        CompetencyEntity.DESCRIPTION_EN_DEBUG,
        CompetencyEntity.DESCRIPTION_EN_GB,
        CompetencyEntity.DESCRIPTION_EN_US,
        CompetencyEntity.DESCRIPTION_ES_ES,
        CompetencyEntity.DESCRIPTION_ES_MX,
        CompetencyEntity.DESCRIPTION_FR_CA,
        CompetencyEntity.DESCRIPTION_FR_FR,
        CompetencyEntity.DESCRIPTION_IT_IT,
        CompetencyEntity.DESCRIPTION_LOCALIZED,
        CompetencyEntity.DESCRIPTION_NL_NL,
        CompetencyEntity.DESCRIPTION_PT_BR,
        CompetencyEntity.DESCRIPTION_ZH_CN,
        CompetencyEntity.EXTERNAL_CODE,
        CompetencyEntity.LAST_MODIFIED_BY,
        CompetencyEntity.LAST_MODIFIED_DATE_TIME,
        CompetencyEntity.LIB_NAME_DE_DE,
        CompetencyEntity.LIB_NAME_DEFAULT_VALUE,
        CompetencyEntity.LIB_NAME_EN_DEBUG,
        CompetencyEntity.LIB_NAME_EN_GB,
        CompetencyEntity.LIB_NAME_EN_US,
        CompetencyEntity.LIB_NAME_ES_ES,
        CompetencyEntity.LIB_NAME_ES_MX,
        CompetencyEntity.LIB_NAME_FR_CA,
        CompetencyEntity.LIB_NAME_FR_FR,
        CompetencyEntity.LIB_NAME_IT_IT,
        CompetencyEntity.LIB_NAME_LOCALIZED,
        CompetencyEntity.LIB_NAME_NL_NL,
        CompetencyEntity.LIB_NAME_PT_BR,
        CompetencyEntity.LIB_NAME_ZH_CN,
        CompetencyEntity.MDF_SYSTEM_RECORD_STATUS,
        CompetencyEntity.NAME_DE_DE,
        CompetencyEntity.NAME_DEFAULT_VALUE,
        CompetencyEntity.NAME_EN_DEBUG,
        CompetencyEntity.NAME_EN_GB,
        CompetencyEntity.NAME_EN_US,
        CompetencyEntity.NAME_ES_ES,
        CompetencyEntity.NAME_ES_MX,
        CompetencyEntity.NAME_FR_CA,
        CompetencyEntity.NAME_FR_FR,
        CompetencyEntity.NAME_IT_IT,
        CompetencyEntity.NAME_LOCALIZED,
        CompetencyEntity.NAME_NL_NL,
        CompetencyEntity.NAME_PT_BR,
        CompetencyEntity.NAME_ZH_CN,
        CompetencyEntity.STATUS,
        CompetencyEntity.SUB_MODULE,
        CompetencyEntity.BEHAVIORS,
        CompetencyEntity.CATEGORY_TRANSLATION_TEXT_NAV,
        CompetencyEntity.COMPETENCIES,
        CompetencyEntity.COMPETENCY_TYPES,
        CompetencyEntity.CREATED_BY_NAV,
        CompetencyEntity.DESCRIPTION_TRANSLATION_TEXT_NAV,
        CompetencyEntity.LAST_MODIFIED_BY_NAV,
        CompetencyEntity.LIB_NAME_TRANSLATION_TEXT_NAV,
        CompetencyEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
        CompetencyEntity.NAME_TRANSLATION_TEXT_NAV,
        CompetencyEntity.STATUS_NAV,
        CompetencyEntity.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    CompetencyEntity.ALL_FIELDS = new core_1.AllFields('*', CompetencyEntity);
    /**
     * All key fields of the CompetencyEntity entity.
     */
    CompetencyEntity._keyFields = [CompetencyEntity.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property CompetencyEntity.
     */
    CompetencyEntity._keys = CompetencyEntity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CompetencyEntity = exports.CompetencyEntity || (exports.CompetencyEntity = {}));
exports.CompetencyEntity = CompetencyEntity;
//# sourceMappingURL=CompetencyEntity.js.map