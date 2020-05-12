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
var JobResponsibilityEntityRequestBuilder_1 = require("./JobResponsibilityEntityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobResponsibilityEntity" of service "SFOData".
 */
var JobResponsibilityEntity = /** @class */ (function (_super) {
    __extends(JobResponsibilityEntity, _super);
    function JobResponsibilityEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobResponsibilityEntity`.
     * @returns A builder that constructs instances of entity type `JobResponsibilityEntity`.
     */
    JobResponsibilityEntity.builder = function () {
        return core_1.Entity.entityBuilder(JobResponsibilityEntity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobResponsibilityEntity` entity type.
     * @returns A `JobResponsibilityEntity` request builder.
     */
    JobResponsibilityEntity.requestBuilder = function () {
        return new JobResponsibilityEntityRequestBuilder_1.JobResponsibilityEntityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobResponsibilityEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobResponsibilityEntity`.
     */
    JobResponsibilityEntity.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobResponsibilityEntity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobResponsibilityEntity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobResponsibilityEntity.
     */
    JobResponsibilityEntity._entityName = 'JobResponsibilityEntity';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobResponsibilityEntity.
     */
    JobResponsibilityEntity._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobResponsibilityEntity._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobResponsibilityEntity;
}(core_1.Entity));
exports.JobResponsibilityEntity = JobResponsibilityEntity;
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (JobResponsibilityEntity) {
    /**
     * Static representation of the [[categoryDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.CATEGORY_DE_DE = new core_1.StringField('category_de_DE', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.CATEGORY_DEFAULT_VALUE = new core_1.StringField('category_defaultValue', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.CATEGORY_EN_DEBUG = new core_1.StringField('category_en_DEBUG', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.CATEGORY_EN_GB = new core_1.StringField('category_en_GB', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.CATEGORY_EN_US = new core_1.StringField('category_en_US', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.CATEGORY_ES_ES = new core_1.StringField('category_es_ES', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.CATEGORY_ES_MX = new core_1.StringField('category_es_MX', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.CATEGORY_FR_CA = new core_1.StringField('category_fr_CA', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.CATEGORY_FR_FR = new core_1.StringField('category_fr_FR', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.CATEGORY_IT_IT = new core_1.StringField('category_it_IT', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.CATEGORY_LOCALIZED = new core_1.StringField('category_localized', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.CATEGORY_NL_NL = new core_1.StringField('category_nl_NL', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.CATEGORY_PT_BR = new core_1.StringField('category_pt_BR', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[categoryZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.CATEGORY_ZH_CN = new core_1.StringField('category_zh_CN', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.CREATED_BY = new core_1.StringField('createdBy', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', JobResponsibilityEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DESCRIPTION_DE_DE = new core_1.StringField('description_de_DE', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DESCRIPTION_DEFAULT_VALUE = new core_1.StringField('description_defaultValue', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DESCRIPTION_EN_DEBUG = new core_1.StringField('description_en_DEBUG', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DESCRIPTION_EN_GB = new core_1.StringField('description_en_GB', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DESCRIPTION_EN_US = new core_1.StringField('description_en_US', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DESCRIPTION_ES_ES = new core_1.StringField('description_es_ES', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DESCRIPTION_ES_MX = new core_1.StringField('description_es_MX', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DESCRIPTION_FR_CA = new core_1.StringField('description_fr_CA', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DESCRIPTION_FR_FR = new core_1.StringField('description_fr_FR', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DESCRIPTION_IT_IT = new core_1.StringField('description_it_IT', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DESCRIPTION_LOCALIZED = new core_1.StringField('description_localized', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DESCRIPTION_NL_NL = new core_1.StringField('description_nl_NL', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DESCRIPTION_PT_BR = new core_1.StringField('description_pt_BR', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DESCRIPTION_ZH_CN = new core_1.StringField('description_zh_CN', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[dutyDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DUTY_DE_DE = new core_1.StringField('duty_de_DE', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[dutyDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DUTY_DEFAULT_VALUE = new core_1.StringField('duty_defaultValue', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[dutyEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DUTY_EN_DEBUG = new core_1.StringField('duty_en_DEBUG', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[dutyEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DUTY_EN_GB = new core_1.StringField('duty_en_GB', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[dutyEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DUTY_EN_US = new core_1.StringField('duty_en_US', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[dutyEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DUTY_ES_ES = new core_1.StringField('duty_es_ES', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[dutyEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DUTY_ES_MX = new core_1.StringField('duty_es_MX', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[dutyFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DUTY_FR_CA = new core_1.StringField('duty_fr_CA', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[dutyFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DUTY_FR_FR = new core_1.StringField('duty_fr_FR', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[dutyItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DUTY_IT_IT = new core_1.StringField('duty_it_IT', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[dutyLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DUTY_LOCALIZED = new core_1.StringField('duty_localized', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[dutyNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DUTY_NL_NL = new core_1.StringField('duty_nl_NL', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[dutyPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DUTY_PT_BR = new core_1.StringField('duty_pt_BR', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[dutyZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DUTY_ZH_CN = new core_1.StringField('duty_zh_CN', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.EXTERNAL_CODE = new core_1.StringField('externalCode', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', JobResponsibilityEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[libNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.LIB_NAME_DE_DE = new core_1.StringField('libName_de_DE', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.LIB_NAME_DEFAULT_VALUE = new core_1.StringField('libName_defaultValue', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.LIB_NAME_EN_DEBUG = new core_1.StringField('libName_en_DEBUG', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.LIB_NAME_EN_GB = new core_1.StringField('libName_en_GB', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.LIB_NAME_EN_US = new core_1.StringField('libName_en_US', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.LIB_NAME_ES_ES = new core_1.StringField('libName_es_ES', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.LIB_NAME_ES_MX = new core_1.StringField('libName_es_MX', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.LIB_NAME_FR_CA = new core_1.StringField('libName_fr_CA', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.LIB_NAME_FR_FR = new core_1.StringField('libName_fr_FR', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.LIB_NAME_IT_IT = new core_1.StringField('libName_it_IT', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.LIB_NAME_LOCALIZED = new core_1.StringField('libName_localized', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.LIB_NAME_NL_NL = new core_1.StringField('libName_nl_NL', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[libNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.LIB_NAME_PT_BR = new core_1.StringField('libName_pt_BR', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[libNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.LIB_NAME_ZH_CN = new core_1.StringField('libName_zh_CN', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.NAME_DE_DE = new core_1.StringField('name_de_DE', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.NAME_DEFAULT_VALUE = new core_1.StringField('name_defaultValue', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.NAME_EN_DEBUG = new core_1.StringField('name_en_DEBUG', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.NAME_EN_GB = new core_1.StringField('name_en_GB', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.NAME_EN_US = new core_1.StringField('name_en_US', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.NAME_ES_ES = new core_1.StringField('name_es_ES', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.NAME_ES_MX = new core_1.StringField('name_es_MX', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.NAME_FR_CA = new core_1.StringField('name_fr_CA', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.NAME_FR_FR = new core_1.StringField('name_fr_FR', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.NAME_IT_IT = new core_1.StringField('name_it_IT', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.NAME_LOCALIZED = new core_1.StringField('name_localized', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.NAME_NL_NL = new core_1.StringField('name_nl_NL', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.NAME_PT_BR = new core_1.StringField('name_pt_BR', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.NAME_ZH_CN = new core_1.StringField('name_zh_CN', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.STATUS = new core_1.StringField('status', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.SUB_MODULE = new core_1.StringField('subModule', JobResponsibilityEntity, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[categoryTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.CATEGORY_TRANSLATION_TEXT_NAV = new core_1.Link('categoryTranslationTextNav', JobResponsibilityEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', JobResponsibilityEntity, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DESCRIPTION_TRANSLATION_TEXT_NAV = new core_1.Link('descriptionTranslationTextNav', JobResponsibilityEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[dutyTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.DUTY_TRANSLATION_TEXT_NAV = new core_1.Link('dutyTranslationTextNav', JobResponsibilityEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', JobResponsibilityEntity, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[libNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.LIB_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('libNameTranslationTextNav', JobResponsibilityEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', JobResponsibilityEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.NAME_TRANSLATION_TEXT_NAV = new core_1.Link('nameTranslationTextNav', JobResponsibilityEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.STATUS_NAV = new core_1.OneToOneLink('statusNav', JobResponsibilityEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityEntity.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', JobResponsibilityEntity, WfRequest_1.WfRequest);
    /**
     * All fields of the JobResponsibilityEntity entity.
     */
    JobResponsibilityEntity._allFields = [
        JobResponsibilityEntity.CATEGORY_DE_DE,
        JobResponsibilityEntity.CATEGORY_DEFAULT_VALUE,
        JobResponsibilityEntity.CATEGORY_EN_DEBUG,
        JobResponsibilityEntity.CATEGORY_EN_GB,
        JobResponsibilityEntity.CATEGORY_EN_US,
        JobResponsibilityEntity.CATEGORY_ES_ES,
        JobResponsibilityEntity.CATEGORY_ES_MX,
        JobResponsibilityEntity.CATEGORY_FR_CA,
        JobResponsibilityEntity.CATEGORY_FR_FR,
        JobResponsibilityEntity.CATEGORY_IT_IT,
        JobResponsibilityEntity.CATEGORY_LOCALIZED,
        JobResponsibilityEntity.CATEGORY_NL_NL,
        JobResponsibilityEntity.CATEGORY_PT_BR,
        JobResponsibilityEntity.CATEGORY_ZH_CN,
        JobResponsibilityEntity.CREATED_BY,
        JobResponsibilityEntity.CREATED_DATE_TIME,
        JobResponsibilityEntity.DESCRIPTION_DE_DE,
        JobResponsibilityEntity.DESCRIPTION_DEFAULT_VALUE,
        JobResponsibilityEntity.DESCRIPTION_EN_DEBUG,
        JobResponsibilityEntity.DESCRIPTION_EN_GB,
        JobResponsibilityEntity.DESCRIPTION_EN_US,
        JobResponsibilityEntity.DESCRIPTION_ES_ES,
        JobResponsibilityEntity.DESCRIPTION_ES_MX,
        JobResponsibilityEntity.DESCRIPTION_FR_CA,
        JobResponsibilityEntity.DESCRIPTION_FR_FR,
        JobResponsibilityEntity.DESCRIPTION_IT_IT,
        JobResponsibilityEntity.DESCRIPTION_LOCALIZED,
        JobResponsibilityEntity.DESCRIPTION_NL_NL,
        JobResponsibilityEntity.DESCRIPTION_PT_BR,
        JobResponsibilityEntity.DESCRIPTION_ZH_CN,
        JobResponsibilityEntity.DUTY_DE_DE,
        JobResponsibilityEntity.DUTY_DEFAULT_VALUE,
        JobResponsibilityEntity.DUTY_EN_DEBUG,
        JobResponsibilityEntity.DUTY_EN_GB,
        JobResponsibilityEntity.DUTY_EN_US,
        JobResponsibilityEntity.DUTY_ES_ES,
        JobResponsibilityEntity.DUTY_ES_MX,
        JobResponsibilityEntity.DUTY_FR_CA,
        JobResponsibilityEntity.DUTY_FR_FR,
        JobResponsibilityEntity.DUTY_IT_IT,
        JobResponsibilityEntity.DUTY_LOCALIZED,
        JobResponsibilityEntity.DUTY_NL_NL,
        JobResponsibilityEntity.DUTY_PT_BR,
        JobResponsibilityEntity.DUTY_ZH_CN,
        JobResponsibilityEntity.EXTERNAL_CODE,
        JobResponsibilityEntity.LAST_MODIFIED_BY,
        JobResponsibilityEntity.LAST_MODIFIED_DATE_TIME,
        JobResponsibilityEntity.LIB_NAME_DE_DE,
        JobResponsibilityEntity.LIB_NAME_DEFAULT_VALUE,
        JobResponsibilityEntity.LIB_NAME_EN_DEBUG,
        JobResponsibilityEntity.LIB_NAME_EN_GB,
        JobResponsibilityEntity.LIB_NAME_EN_US,
        JobResponsibilityEntity.LIB_NAME_ES_ES,
        JobResponsibilityEntity.LIB_NAME_ES_MX,
        JobResponsibilityEntity.LIB_NAME_FR_CA,
        JobResponsibilityEntity.LIB_NAME_FR_FR,
        JobResponsibilityEntity.LIB_NAME_IT_IT,
        JobResponsibilityEntity.LIB_NAME_LOCALIZED,
        JobResponsibilityEntity.LIB_NAME_NL_NL,
        JobResponsibilityEntity.LIB_NAME_PT_BR,
        JobResponsibilityEntity.LIB_NAME_ZH_CN,
        JobResponsibilityEntity.MDF_SYSTEM_RECORD_STATUS,
        JobResponsibilityEntity.NAME_DE_DE,
        JobResponsibilityEntity.NAME_DEFAULT_VALUE,
        JobResponsibilityEntity.NAME_EN_DEBUG,
        JobResponsibilityEntity.NAME_EN_GB,
        JobResponsibilityEntity.NAME_EN_US,
        JobResponsibilityEntity.NAME_ES_ES,
        JobResponsibilityEntity.NAME_ES_MX,
        JobResponsibilityEntity.NAME_FR_CA,
        JobResponsibilityEntity.NAME_FR_FR,
        JobResponsibilityEntity.NAME_IT_IT,
        JobResponsibilityEntity.NAME_LOCALIZED,
        JobResponsibilityEntity.NAME_NL_NL,
        JobResponsibilityEntity.NAME_PT_BR,
        JobResponsibilityEntity.NAME_ZH_CN,
        JobResponsibilityEntity.STATUS,
        JobResponsibilityEntity.SUB_MODULE,
        JobResponsibilityEntity.CATEGORY_TRANSLATION_TEXT_NAV,
        JobResponsibilityEntity.CREATED_BY_NAV,
        JobResponsibilityEntity.DESCRIPTION_TRANSLATION_TEXT_NAV,
        JobResponsibilityEntity.DUTY_TRANSLATION_TEXT_NAV,
        JobResponsibilityEntity.LAST_MODIFIED_BY_NAV,
        JobResponsibilityEntity.LIB_NAME_TRANSLATION_TEXT_NAV,
        JobResponsibilityEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
        JobResponsibilityEntity.NAME_TRANSLATION_TEXT_NAV,
        JobResponsibilityEntity.STATUS_NAV,
        JobResponsibilityEntity.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    JobResponsibilityEntity.ALL_FIELDS = new core_1.AllFields('*', JobResponsibilityEntity);
    /**
     * All key fields of the JobResponsibilityEntity entity.
     */
    JobResponsibilityEntity._keyFields = [JobResponsibilityEntity.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property JobResponsibilityEntity.
     */
    JobResponsibilityEntity._keys = JobResponsibilityEntity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobResponsibilityEntity = exports.JobResponsibilityEntity || (exports.JobResponsibilityEntity = {}));
exports.JobResponsibilityEntity = JobResponsibilityEntity;
//# sourceMappingURL=JobResponsibilityEntity.js.map