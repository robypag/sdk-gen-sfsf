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
var SkillEntityRequestBuilder_1 = require("./SkillEntityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SkillEntity" of service "SFOData".
 */
var SkillEntity = /** @class */ (function (_super) {
    __extends(SkillEntity, _super);
    function SkillEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SkillEntity`.
     * @returns A builder that constructs instances of entity type `SkillEntity`.
     */
    SkillEntity.builder = function () {
        return core_1.Entity.entityBuilder(SkillEntity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SkillEntity` entity type.
     * @returns A `SkillEntity` request builder.
     */
    SkillEntity.requestBuilder = function () {
        return new SkillEntityRequestBuilder_1.SkillEntityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SkillEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SkillEntity`.
     */
    SkillEntity.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, SkillEntity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SkillEntity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SkillEntity.
     */
    SkillEntity._entityName = 'SkillEntity';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SkillEntity.
     */
    SkillEntity._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    SkillEntity._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SkillEntity;
}(core_1.Entity));
exports.SkillEntity = SkillEntity;
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (SkillEntity) {
    /**
     * Static representation of the [[categoryDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.CATEGORY_DE_DE = new core_1.StringField('category_de_DE', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.CATEGORY_DEFAULT_VALUE = new core_1.StringField('category_defaultValue', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.CATEGORY_EN_DEBUG = new core_1.StringField('category_en_DEBUG', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.CATEGORY_EN_GB = new core_1.StringField('category_en_GB', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.CATEGORY_EN_US = new core_1.StringField('category_en_US', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.CATEGORY_ES_ES = new core_1.StringField('category_es_ES', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.CATEGORY_ES_MX = new core_1.StringField('category_es_MX', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.CATEGORY_FR_CA = new core_1.StringField('category_fr_CA', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.CATEGORY_FR_FR = new core_1.StringField('category_fr_FR', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.CATEGORY_IT_IT = new core_1.StringField('category_it_IT', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.CATEGORY_LOCALIZED = new core_1.StringField('category_localized', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.CATEGORY_NL_NL = new core_1.StringField('category_nl_NL', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.CATEGORY_PT_BR = new core_1.StringField('category_pt_BR', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.CATEGORY_ZH_CN = new core_1.StringField('category_zh_CN', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.CREATED_BY = new core_1.StringField('createdBy', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', SkillEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[definitionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.DEFINITION_DE_DE = new core_1.StringField('definition_de_DE', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[definitionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.DEFINITION_DEFAULT_VALUE = new core_1.StringField('definition_defaultValue', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[definitionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.DEFINITION_EN_DEBUG = new core_1.StringField('definition_en_DEBUG', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[definitionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.DEFINITION_EN_GB = new core_1.StringField('definition_en_GB', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[definitionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.DEFINITION_EN_US = new core_1.StringField('definition_en_US', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[definitionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.DEFINITION_ES_ES = new core_1.StringField('definition_es_ES', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[definitionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.DEFINITION_ES_MX = new core_1.StringField('definition_es_MX', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[definitionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.DEFINITION_FR_CA = new core_1.StringField('definition_fr_CA', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[definitionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.DEFINITION_FR_FR = new core_1.StringField('definition_fr_FR', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[definitionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.DEFINITION_IT_IT = new core_1.StringField('definition_it_IT', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[definitionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.DEFINITION_LOCALIZED = new core_1.StringField('definition_localized', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[definitionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.DEFINITION_NL_NL = new core_1.StringField('definition_nl_NL', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[definitionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.DEFINITION_PT_BR = new core_1.StringField('definition_pt_BR', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[definitionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.DEFINITION_ZH_CN = new core_1.StringField('definition_zh_CN', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.EXTERNAL_CODE = new core_1.StringField('externalCode', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[groupDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.GROUP_DE_DE = new core_1.StringField('group_de_DE', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[groupDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.GROUP_DEFAULT_VALUE = new core_1.StringField('group_defaultValue', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[groupEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.GROUP_EN_DEBUG = new core_1.StringField('group_en_DEBUG', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[groupEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.GROUP_EN_GB = new core_1.StringField('group_en_GB', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[groupEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.GROUP_EN_US = new core_1.StringField('group_en_US', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[groupEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.GROUP_ES_ES = new core_1.StringField('group_es_ES', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[groupEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.GROUP_ES_MX = new core_1.StringField('group_es_MX', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[groupFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.GROUP_FR_CA = new core_1.StringField('group_fr_CA', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[groupFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.GROUP_FR_FR = new core_1.StringField('group_fr_FR', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[groupItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.GROUP_IT_IT = new core_1.StringField('group_it_IT', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[groupLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.GROUP_LOCALIZED = new core_1.StringField('group_localized', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[groupNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.GROUP_NL_NL = new core_1.StringField('group_nl_NL', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[groupPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.GROUP_PT_BR = new core_1.StringField('group_pt_BR', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[groupZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.GROUP_ZH_CN = new core_1.StringField('group_zh_CN', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', SkillEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[libNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.LIB_NAME_DE_DE = new core_1.StringField('libName_de_DE', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.LIB_NAME_DEFAULT_VALUE = new core_1.StringField('libName_defaultValue', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.LIB_NAME_EN_DEBUG = new core_1.StringField('libName_en_DEBUG', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.LIB_NAME_EN_GB = new core_1.StringField('libName_en_GB', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.LIB_NAME_EN_US = new core_1.StringField('libName_en_US', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.LIB_NAME_ES_ES = new core_1.StringField('libName_es_ES', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.LIB_NAME_ES_MX = new core_1.StringField('libName_es_MX', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.LIB_NAME_FR_CA = new core_1.StringField('libName_fr_CA', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.LIB_NAME_FR_FR = new core_1.StringField('libName_fr_FR', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.LIB_NAME_IT_IT = new core_1.StringField('libName_it_IT', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.LIB_NAME_LOCALIZED = new core_1.StringField('libName_localized', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.LIB_NAME_NL_NL = new core_1.StringField('libName_nl_NL', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[libNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.LIB_NAME_PT_BR = new core_1.StringField('libName_pt_BR', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.LIB_NAME_ZH_CN = new core_1.StringField('libName_zh_CN', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.NAME_DE_DE = new core_1.StringField('name_de_DE', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.NAME_DEFAULT_VALUE = new core_1.StringField('name_defaultValue', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.NAME_EN_DEBUG = new core_1.StringField('name_en_DEBUG', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.NAME_EN_GB = new core_1.StringField('name_en_GB', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.NAME_EN_US = new core_1.StringField('name_en_US', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.NAME_ES_ES = new core_1.StringField('name_es_ES', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.NAME_ES_MX = new core_1.StringField('name_es_MX', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.NAME_FR_CA = new core_1.StringField('name_fr_CA', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.NAME_FR_FR = new core_1.StringField('name_fr_FR', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.NAME_IT_IT = new core_1.StringField('name_it_IT', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.NAME_LOCALIZED = new core_1.StringField('name_localized', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.NAME_NL_NL = new core_1.StringField('name_nl_NL', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.NAME_PT_BR = new core_1.StringField('name_pt_BR', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.NAME_ZH_CN = new core_1.StringField('name_zh_CN', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel1DeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_1_DE_DE = new core_1.StringField('proLevel1_de_DE', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel1DefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_1_DEFAULT_VALUE = new core_1.StringField('proLevel1_defaultValue', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel1EnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_1_EN_DEBUG = new core_1.StringField('proLevel1_en_DEBUG', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel1EnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_1_EN_GB = new core_1.StringField('proLevel1_en_GB', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel1EnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_1_EN_US = new core_1.StringField('proLevel1_en_US', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel1EsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_1_ES_ES = new core_1.StringField('proLevel1_es_ES', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel1EsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_1_ES_MX = new core_1.StringField('proLevel1_es_MX', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel1FrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_1_FR_CA = new core_1.StringField('proLevel1_fr_CA', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel1FrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_1_FR_FR = new core_1.StringField('proLevel1_fr_FR', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel1ItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_1_IT_IT = new core_1.StringField('proLevel1_it_IT', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel1Localized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_1_LOCALIZED = new core_1.StringField('proLevel1_localized', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel1NlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_1_NL_NL = new core_1.StringField('proLevel1_nl_NL', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel1PtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_1_PT_BR = new core_1.StringField('proLevel1_pt_BR', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel1ZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_1_ZH_CN = new core_1.StringField('proLevel1_zh_CN', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel2DeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_2_DE_DE = new core_1.StringField('proLevel2_de_DE', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel2DefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_2_DEFAULT_VALUE = new core_1.StringField('proLevel2_defaultValue', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel2EnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_2_EN_DEBUG = new core_1.StringField('proLevel2_en_DEBUG', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel2EnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_2_EN_GB = new core_1.StringField('proLevel2_en_GB', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel2EnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_2_EN_US = new core_1.StringField('proLevel2_en_US', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel2EsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_2_ES_ES = new core_1.StringField('proLevel2_es_ES', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel2EsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_2_ES_MX = new core_1.StringField('proLevel2_es_MX', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel2FrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_2_FR_CA = new core_1.StringField('proLevel2_fr_CA', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel2FrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_2_FR_FR = new core_1.StringField('proLevel2_fr_FR', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel2ItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_2_IT_IT = new core_1.StringField('proLevel2_it_IT', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel2Localized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_2_LOCALIZED = new core_1.StringField('proLevel2_localized', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel2NlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_2_NL_NL = new core_1.StringField('proLevel2_nl_NL', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel2PtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_2_PT_BR = new core_1.StringField('proLevel2_pt_BR', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel2ZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_2_ZH_CN = new core_1.StringField('proLevel2_zh_CN', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel3DeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_3_DE_DE = new core_1.StringField('proLevel3_de_DE', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel3DefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_3_DEFAULT_VALUE = new core_1.StringField('proLevel3_defaultValue', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel3EnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_3_EN_DEBUG = new core_1.StringField('proLevel3_en_DEBUG', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel3EnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_3_EN_GB = new core_1.StringField('proLevel3_en_GB', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel3EnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_3_EN_US = new core_1.StringField('proLevel3_en_US', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel3EsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_3_ES_ES = new core_1.StringField('proLevel3_es_ES', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel3EsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_3_ES_MX = new core_1.StringField('proLevel3_es_MX', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel3FrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_3_FR_CA = new core_1.StringField('proLevel3_fr_CA', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel3FrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_3_FR_FR = new core_1.StringField('proLevel3_fr_FR', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel3ItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_3_IT_IT = new core_1.StringField('proLevel3_it_IT', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel3Localized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_3_LOCALIZED = new core_1.StringField('proLevel3_localized', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel3NlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_3_NL_NL = new core_1.StringField('proLevel3_nl_NL', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel3PtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_3_PT_BR = new core_1.StringField('proLevel3_pt_BR', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel3ZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_3_ZH_CN = new core_1.StringField('proLevel3_zh_CN', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel4DeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_4_DE_DE = new core_1.StringField('proLevel4_de_DE', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel4DefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_4_DEFAULT_VALUE = new core_1.StringField('proLevel4_defaultValue', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel4EnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_4_EN_DEBUG = new core_1.StringField('proLevel4_en_DEBUG', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel4EnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_4_EN_GB = new core_1.StringField('proLevel4_en_GB', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel4EnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_4_EN_US = new core_1.StringField('proLevel4_en_US', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel4EsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_4_ES_ES = new core_1.StringField('proLevel4_es_ES', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel4EsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_4_ES_MX = new core_1.StringField('proLevel4_es_MX', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel4FrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_4_FR_CA = new core_1.StringField('proLevel4_fr_CA', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel4FrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_4_FR_FR = new core_1.StringField('proLevel4_fr_FR', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel4ItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_4_IT_IT = new core_1.StringField('proLevel4_it_IT', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel4Localized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_4_LOCALIZED = new core_1.StringField('proLevel4_localized', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel4NlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_4_NL_NL = new core_1.StringField('proLevel4_nl_NL', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel4PtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_4_PT_BR = new core_1.StringField('proLevel4_pt_BR', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel4ZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_4_ZH_CN = new core_1.StringField('proLevel4_zh_CN', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel5DeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_5_DE_DE = new core_1.StringField('proLevel5_de_DE', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel5DefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_5_DEFAULT_VALUE = new core_1.StringField('proLevel5_defaultValue', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel5EnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_5_EN_DEBUG = new core_1.StringField('proLevel5_en_DEBUG', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel5EnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_5_EN_GB = new core_1.StringField('proLevel5_en_GB', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel5EnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_5_EN_US = new core_1.StringField('proLevel5_en_US', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel5EsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_5_ES_ES = new core_1.StringField('proLevel5_es_ES', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel5EsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_5_ES_MX = new core_1.StringField('proLevel5_es_MX', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel5FrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_5_FR_CA = new core_1.StringField('proLevel5_fr_CA', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel5FrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_5_FR_FR = new core_1.StringField('proLevel5_fr_FR', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel5ItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_5_IT_IT = new core_1.StringField('proLevel5_it_IT', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel5Localized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_5_LOCALIZED = new core_1.StringField('proLevel5_localized', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel5NlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_5_NL_NL = new core_1.StringField('proLevel5_nl_NL', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel5PtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_5_PT_BR = new core_1.StringField('proLevel5_pt_BR', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[proLevel5ZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_5_ZH_CN = new core_1.StringField('proLevel5_zh_CN', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.STATUS = new core_1.StringField('status', SkillEntity, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.SUB_MODULE = new core_1.StringField('subModule', SkillEntity, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[categoryTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.CATEGORY_TRANSLATION_TEXT_NAV = new core_1.Link('categoryTranslationTextNav', SkillEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', SkillEntity, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[definitionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.DEFINITION_TRANSLATION_TEXT_NAV = new core_1.Link('definitionTranslationTextNav', SkillEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[groupTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.GROUP_TRANSLATION_TEXT_NAV = new core_1.Link('groupTranslationTextNav', SkillEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', SkillEntity, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[libNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.LIB_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('libNameTranslationTextNav', SkillEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', SkillEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.NAME_TRANSLATION_TEXT_NAV = new core_1.Link('nameTranslationTextNav', SkillEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[proLevel1TranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_1_TRANSLATION_TEXT_NAV = new core_1.Link('proLevel1TranslationTextNav', SkillEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[proLevel2TranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_2_TRANSLATION_TEXT_NAV = new core_1.Link('proLevel2TranslationTextNav', SkillEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[proLevel3TranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_3_TRANSLATION_TEXT_NAV = new core_1.Link('proLevel3TranslationTextNav', SkillEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[proLevel4TranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_4_TRANSLATION_TEXT_NAV = new core_1.Link('proLevel4TranslationTextNav', SkillEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[proLevel5TranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.PRO_LEVEL_5_TRANSLATION_TEXT_NAV = new core_1.Link('proLevel5TranslationTextNav', SkillEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.STATUS_NAV = new core_1.OneToOneLink('statusNav', SkillEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillEntity.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', SkillEntity, WfRequest_1.WfRequest);
    /**
     * All fields of the SkillEntity entity.
     */
    SkillEntity._allFields = [
        SkillEntity.CATEGORY_DE_DE,
        SkillEntity.CATEGORY_DEFAULT_VALUE,
        SkillEntity.CATEGORY_EN_DEBUG,
        SkillEntity.CATEGORY_EN_GB,
        SkillEntity.CATEGORY_EN_US,
        SkillEntity.CATEGORY_ES_ES,
        SkillEntity.CATEGORY_ES_MX,
        SkillEntity.CATEGORY_FR_CA,
        SkillEntity.CATEGORY_FR_FR,
        SkillEntity.CATEGORY_IT_IT,
        SkillEntity.CATEGORY_LOCALIZED,
        SkillEntity.CATEGORY_NL_NL,
        SkillEntity.CATEGORY_PT_BR,
        SkillEntity.CATEGORY_ZH_CN,
        SkillEntity.CREATED_BY,
        SkillEntity.CREATED_DATE_TIME,
        SkillEntity.DEFINITION_DE_DE,
        SkillEntity.DEFINITION_DEFAULT_VALUE,
        SkillEntity.DEFINITION_EN_DEBUG,
        SkillEntity.DEFINITION_EN_GB,
        SkillEntity.DEFINITION_EN_US,
        SkillEntity.DEFINITION_ES_ES,
        SkillEntity.DEFINITION_ES_MX,
        SkillEntity.DEFINITION_FR_CA,
        SkillEntity.DEFINITION_FR_FR,
        SkillEntity.DEFINITION_IT_IT,
        SkillEntity.DEFINITION_LOCALIZED,
        SkillEntity.DEFINITION_NL_NL,
        SkillEntity.DEFINITION_PT_BR,
        SkillEntity.DEFINITION_ZH_CN,
        SkillEntity.EXTERNAL_CODE,
        SkillEntity.GROUP_DE_DE,
        SkillEntity.GROUP_DEFAULT_VALUE,
        SkillEntity.GROUP_EN_DEBUG,
        SkillEntity.GROUP_EN_GB,
        SkillEntity.GROUP_EN_US,
        SkillEntity.GROUP_ES_ES,
        SkillEntity.GROUP_ES_MX,
        SkillEntity.GROUP_FR_CA,
        SkillEntity.GROUP_FR_FR,
        SkillEntity.GROUP_IT_IT,
        SkillEntity.GROUP_LOCALIZED,
        SkillEntity.GROUP_NL_NL,
        SkillEntity.GROUP_PT_BR,
        SkillEntity.GROUP_ZH_CN,
        SkillEntity.LAST_MODIFIED_BY,
        SkillEntity.LAST_MODIFIED_DATE_TIME,
        SkillEntity.LIB_NAME_DE_DE,
        SkillEntity.LIB_NAME_DEFAULT_VALUE,
        SkillEntity.LIB_NAME_EN_DEBUG,
        SkillEntity.LIB_NAME_EN_GB,
        SkillEntity.LIB_NAME_EN_US,
        SkillEntity.LIB_NAME_ES_ES,
        SkillEntity.LIB_NAME_ES_MX,
        SkillEntity.LIB_NAME_FR_CA,
        SkillEntity.LIB_NAME_FR_FR,
        SkillEntity.LIB_NAME_IT_IT,
        SkillEntity.LIB_NAME_LOCALIZED,
        SkillEntity.LIB_NAME_NL_NL,
        SkillEntity.LIB_NAME_PT_BR,
        SkillEntity.LIB_NAME_ZH_CN,
        SkillEntity.MDF_SYSTEM_RECORD_STATUS,
        SkillEntity.NAME_DE_DE,
        SkillEntity.NAME_DEFAULT_VALUE,
        SkillEntity.NAME_EN_DEBUG,
        SkillEntity.NAME_EN_GB,
        SkillEntity.NAME_EN_US,
        SkillEntity.NAME_ES_ES,
        SkillEntity.NAME_ES_MX,
        SkillEntity.NAME_FR_CA,
        SkillEntity.NAME_FR_FR,
        SkillEntity.NAME_IT_IT,
        SkillEntity.NAME_LOCALIZED,
        SkillEntity.NAME_NL_NL,
        SkillEntity.NAME_PT_BR,
        SkillEntity.NAME_ZH_CN,
        SkillEntity.PRO_LEVEL_1_DE_DE,
        SkillEntity.PRO_LEVEL_1_DEFAULT_VALUE,
        SkillEntity.PRO_LEVEL_1_EN_DEBUG,
        SkillEntity.PRO_LEVEL_1_EN_GB,
        SkillEntity.PRO_LEVEL_1_EN_US,
        SkillEntity.PRO_LEVEL_1_ES_ES,
        SkillEntity.PRO_LEVEL_1_ES_MX,
        SkillEntity.PRO_LEVEL_1_FR_CA,
        SkillEntity.PRO_LEVEL_1_FR_FR,
        SkillEntity.PRO_LEVEL_1_IT_IT,
        SkillEntity.PRO_LEVEL_1_LOCALIZED,
        SkillEntity.PRO_LEVEL_1_NL_NL,
        SkillEntity.PRO_LEVEL_1_PT_BR,
        SkillEntity.PRO_LEVEL_1_ZH_CN,
        SkillEntity.PRO_LEVEL_2_DE_DE,
        SkillEntity.PRO_LEVEL_2_DEFAULT_VALUE,
        SkillEntity.PRO_LEVEL_2_EN_DEBUG,
        SkillEntity.PRO_LEVEL_2_EN_GB,
        SkillEntity.PRO_LEVEL_2_EN_US,
        SkillEntity.PRO_LEVEL_2_ES_ES,
        SkillEntity.PRO_LEVEL_2_ES_MX,
        SkillEntity.PRO_LEVEL_2_FR_CA,
        SkillEntity.PRO_LEVEL_2_FR_FR,
        SkillEntity.PRO_LEVEL_2_IT_IT,
        SkillEntity.PRO_LEVEL_2_LOCALIZED,
        SkillEntity.PRO_LEVEL_2_NL_NL,
        SkillEntity.PRO_LEVEL_2_PT_BR,
        SkillEntity.PRO_LEVEL_2_ZH_CN,
        SkillEntity.PRO_LEVEL_3_DE_DE,
        SkillEntity.PRO_LEVEL_3_DEFAULT_VALUE,
        SkillEntity.PRO_LEVEL_3_EN_DEBUG,
        SkillEntity.PRO_LEVEL_3_EN_GB,
        SkillEntity.PRO_LEVEL_3_EN_US,
        SkillEntity.PRO_LEVEL_3_ES_ES,
        SkillEntity.PRO_LEVEL_3_ES_MX,
        SkillEntity.PRO_LEVEL_3_FR_CA,
        SkillEntity.PRO_LEVEL_3_FR_FR,
        SkillEntity.PRO_LEVEL_3_IT_IT,
        SkillEntity.PRO_LEVEL_3_LOCALIZED,
        SkillEntity.PRO_LEVEL_3_NL_NL,
        SkillEntity.PRO_LEVEL_3_PT_BR,
        SkillEntity.PRO_LEVEL_3_ZH_CN,
        SkillEntity.PRO_LEVEL_4_DE_DE,
        SkillEntity.PRO_LEVEL_4_DEFAULT_VALUE,
        SkillEntity.PRO_LEVEL_4_EN_DEBUG,
        SkillEntity.PRO_LEVEL_4_EN_GB,
        SkillEntity.PRO_LEVEL_4_EN_US,
        SkillEntity.PRO_LEVEL_4_ES_ES,
        SkillEntity.PRO_LEVEL_4_ES_MX,
        SkillEntity.PRO_LEVEL_4_FR_CA,
        SkillEntity.PRO_LEVEL_4_FR_FR,
        SkillEntity.PRO_LEVEL_4_IT_IT,
        SkillEntity.PRO_LEVEL_4_LOCALIZED,
        SkillEntity.PRO_LEVEL_4_NL_NL,
        SkillEntity.PRO_LEVEL_4_PT_BR,
        SkillEntity.PRO_LEVEL_4_ZH_CN,
        SkillEntity.PRO_LEVEL_5_DE_DE,
        SkillEntity.PRO_LEVEL_5_DEFAULT_VALUE,
        SkillEntity.PRO_LEVEL_5_EN_DEBUG,
        SkillEntity.PRO_LEVEL_5_EN_GB,
        SkillEntity.PRO_LEVEL_5_EN_US,
        SkillEntity.PRO_LEVEL_5_ES_ES,
        SkillEntity.PRO_LEVEL_5_ES_MX,
        SkillEntity.PRO_LEVEL_5_FR_CA,
        SkillEntity.PRO_LEVEL_5_FR_FR,
        SkillEntity.PRO_LEVEL_5_IT_IT,
        SkillEntity.PRO_LEVEL_5_LOCALIZED,
        SkillEntity.PRO_LEVEL_5_NL_NL,
        SkillEntity.PRO_LEVEL_5_PT_BR,
        SkillEntity.PRO_LEVEL_5_ZH_CN,
        SkillEntity.STATUS,
        SkillEntity.SUB_MODULE,
        SkillEntity.CATEGORY_TRANSLATION_TEXT_NAV,
        SkillEntity.CREATED_BY_NAV,
        SkillEntity.DEFINITION_TRANSLATION_TEXT_NAV,
        SkillEntity.GROUP_TRANSLATION_TEXT_NAV,
        SkillEntity.LAST_MODIFIED_BY_NAV,
        SkillEntity.LIB_NAME_TRANSLATION_TEXT_NAV,
        SkillEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
        SkillEntity.NAME_TRANSLATION_TEXT_NAV,
        SkillEntity.PRO_LEVEL_1_TRANSLATION_TEXT_NAV,
        SkillEntity.PRO_LEVEL_2_TRANSLATION_TEXT_NAV,
        SkillEntity.PRO_LEVEL_3_TRANSLATION_TEXT_NAV,
        SkillEntity.PRO_LEVEL_4_TRANSLATION_TEXT_NAV,
        SkillEntity.PRO_LEVEL_5_TRANSLATION_TEXT_NAV,
        SkillEntity.STATUS_NAV,
        SkillEntity.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    SkillEntity.ALL_FIELDS = new core_1.AllFields('*', SkillEntity);
    /**
     * All key fields of the SkillEntity entity.
     */
    SkillEntity._keyFields = [SkillEntity.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property SkillEntity.
     */
    SkillEntity._keys = SkillEntity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SkillEntity = exports.SkillEntity || (exports.SkillEntity = {}));
exports.SkillEntity = SkillEntity;
//# sourceMappingURL=SkillEntity.js.map