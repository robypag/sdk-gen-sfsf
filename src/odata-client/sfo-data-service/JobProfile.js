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
var JobProfileRequestBuilder_1 = require("./JobProfileRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobProfile" of service "SFOData".
 */
var JobProfile = /** @class */ (function (_super) {
    __extends(JobProfile, _super);
    function JobProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobProfile`.
     * @returns A builder that constructs instances of entity type `JobProfile`.
     */
    JobProfile.builder = function () {
        return core_1.Entity.entityBuilder(JobProfile);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobProfile` entity type.
     * @returns A `JobProfile` request builder.
     */
    JobProfile.requestBuilder = function () {
        return new JobProfileRequestBuilder_1.JobProfileRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobProfile`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobProfile`.
     */
    JobProfile.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobProfile);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobProfile.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobProfile.
     */
    JobProfile._entityName = 'JobProfile';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobProfile.
     */
    JobProfile._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobProfile._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobProfile;
}(core_1.Entity));
exports.JobProfile = JobProfile;
var CertificationContent_1 = require("./CertificationContent");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var JobProfileLocalizedData_1 = require("./JobProfileLocalizedData");
var CompetencyContent_1 = require("./CompetencyContent");
var User_1 = require("./User");
var EducationDegreeContent_1 = require("./EducationDegreeContent");
var EducationMajorContent_1 = require("./EducationMajorContent");
var EmploymentConditionContent_1 = require("./EmploymentConditionContent");
var InterviewQuestionContent_1 = require("./InterviewQuestionContent");
var JobResponsibilityContent_1 = require("./JobResponsibilityContent");
var MdfEnumValue_1 = require("./MdfEnumValue");
var PhysicalReqContent_1 = require("./PhysicalReqContent");
var PositionEntity_1 = require("./PositionEntity");
var RelevantIndustryContent_1 = require("./RelevantIndustryContent");
var RoleEntity_1 = require("./RoleEntity");
var SkillContent_1 = require("./SkillContent");
var JobDescTemplate_1 = require("./JobDescTemplate");
var WfRequest_1 = require("./WfRequest");
(function (JobProfile) {
    /**
     * Static representation of the [[compDataDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.COMP_DATA_DE_DE = new core_1.StringField('compData_de_DE', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[compDataDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.COMP_DATA_DEFAULT_VALUE = new core_1.StringField('compData_defaultValue', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[compDataEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.COMP_DATA_EN_DEBUG = new core_1.StringField('compData_en_DEBUG', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[compDataEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.COMP_DATA_EN_GB = new core_1.StringField('compData_en_GB', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[compDataEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.COMP_DATA_EN_US = new core_1.StringField('compData_en_US', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[compDataEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.COMP_DATA_ES_ES = new core_1.StringField('compData_es_ES', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[compDataEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.COMP_DATA_ES_MX = new core_1.StringField('compData_es_MX', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[compDataFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.COMP_DATA_FR_CA = new core_1.StringField('compData_fr_CA', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[compDataFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.COMP_DATA_FR_FR = new core_1.StringField('compData_fr_FR', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[compDataItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.COMP_DATA_IT_IT = new core_1.StringField('compData_it_IT', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[compDataLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.COMP_DATA_LOCALIZED = new core_1.StringField('compData_localized', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[compDataNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.COMP_DATA_NL_NL = new core_1.StringField('compData_nl_NL', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[compDataPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.COMP_DATA_PT_BR = new core_1.StringField('compData_pt_BR', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[compDataZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.COMP_DATA_ZH_CN = new core_1.StringField('compData_zh_CN', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.CREATED_BY = new core_1.StringField('createdBy', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', JobProfile, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[draft]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.DRAFT = new core_1.BooleanField('draft', JobProfile, 'Edm.Boolean');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.EXTERNAL_CODE = new core_1.StringField('externalCode', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[footerDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.FOOTER_DE_DE = new core_1.StringField('footer_de_DE', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[footerDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.FOOTER_DEFAULT_VALUE = new core_1.StringField('footer_defaultValue', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[footerEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.FOOTER_EN_DEBUG = new core_1.StringField('footer_en_DEBUG', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[footerEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.FOOTER_EN_GB = new core_1.StringField('footer_en_GB', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[footerEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.FOOTER_EN_US = new core_1.StringField('footer_en_US', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[footerEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.FOOTER_ES_ES = new core_1.StringField('footer_es_ES', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[footerEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.FOOTER_ES_MX = new core_1.StringField('footer_es_MX', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[footerFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.FOOTER_FR_CA = new core_1.StringField('footer_fr_CA', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[footerFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.FOOTER_FR_FR = new core_1.StringField('footer_fr_FR', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[footerItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.FOOTER_IT_IT = new core_1.StringField('footer_it_IT', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[footerLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.FOOTER_LOCALIZED = new core_1.StringField('footer_localized', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[footerNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.FOOTER_NL_NL = new core_1.StringField('footer_nl_NL', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[footerPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.FOOTER_PT_BR = new core_1.StringField('footer_pt_BR', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[footerZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.FOOTER_ZH_CN = new core_1.StringField('footer_zh_CN', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[headerDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.HEADER_DE_DE = new core_1.StringField('header_de_DE', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[headerDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.HEADER_DEFAULT_VALUE = new core_1.StringField('header_defaultValue', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[headerEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.HEADER_EN_DEBUG = new core_1.StringField('header_en_DEBUG', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[headerEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.HEADER_EN_GB = new core_1.StringField('header_en_GB', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[headerEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.HEADER_EN_US = new core_1.StringField('header_en_US', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[headerEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.HEADER_ES_ES = new core_1.StringField('header_es_ES', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[headerEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.HEADER_ES_MX = new core_1.StringField('header_es_MX', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[headerFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.HEADER_FR_CA = new core_1.StringField('header_fr_CA', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[headerFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.HEADER_FR_FR = new core_1.StringField('header_fr_FR', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[headerItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.HEADER_IT_IT = new core_1.StringField('header_it_IT', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[headerLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.HEADER_LOCALIZED = new core_1.StringField('header_localized', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[headerNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.HEADER_NL_NL = new core_1.StringField('header_nl_NL', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[headerPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.HEADER_PT_BR = new core_1.StringField('header_pt_BR', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[headerZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.HEADER_ZH_CN = new core_1.StringField('header_zh_CN', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', JobProfile, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifierName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.LAST_MODIFIER_NAME = new core_1.StringField('lastModifierName', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[longDescDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.LONG_DESC_DE_DE = new core_1.StringField('longDesc_de_DE', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[longDescDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.LONG_DESC_DEFAULT_VALUE = new core_1.StringField('longDesc_defaultValue', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[longDescEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.LONG_DESC_EN_DEBUG = new core_1.StringField('longDesc_en_DEBUG', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[longDescEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.LONG_DESC_EN_GB = new core_1.StringField('longDesc_en_GB', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[longDescEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.LONG_DESC_EN_US = new core_1.StringField('longDesc_en_US', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[longDescEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.LONG_DESC_ES_ES = new core_1.StringField('longDesc_es_ES', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[longDescEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.LONG_DESC_ES_MX = new core_1.StringField('longDesc_es_MX', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[longDescFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.LONG_DESC_FR_CA = new core_1.StringField('longDesc_fr_CA', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[longDescFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.LONG_DESC_FR_FR = new core_1.StringField('longDesc_fr_FR', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[longDescItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.LONG_DESC_IT_IT = new core_1.StringField('longDesc_it_IT', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[longDescLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.LONG_DESC_LOCALIZED = new core_1.StringField('longDesc_localized', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[longDescNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.LONG_DESC_NL_NL = new core_1.StringField('longDesc_nl_NL', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[longDescPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.LONG_DESC_PT_BR = new core_1.StringField('longDesc_pt_BR', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[longDescZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.LONG_DESC_ZH_CN = new core_1.StringField('longDesc_zh_CN', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[migrated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.MIGRATED = new core_1.BooleanField('migrated', JobProfile, 'Edm.Boolean');
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.NAME_DE_DE = new core_1.StringField('name_de_DE', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.NAME_DEFAULT_VALUE = new core_1.StringField('name_defaultValue', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.NAME_EN_DEBUG = new core_1.StringField('name_en_DEBUG', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.NAME_EN_GB = new core_1.StringField('name_en_GB', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.NAME_EN_US = new core_1.StringField('name_en_US', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.NAME_ES_ES = new core_1.StringField('name_es_ES', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.NAME_ES_MX = new core_1.StringField('name_es_MX', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.NAME_FR_CA = new core_1.StringField('name_fr_CA', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.NAME_FR_FR = new core_1.StringField('name_fr_FR', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.NAME_IT_IT = new core_1.StringField('name_it_IT', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.NAME_LOCALIZED = new core_1.StringField('name_localized', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.NAME_NL_NL = new core_1.StringField('name_nl_NL', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.NAME_PT_BR = new core_1.StringField('name_pt_BR', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.NAME_ZH_CN = new core_1.StringField('name_zh_CN', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[position]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.POSITION = new core_1.StringField('position', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[role]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.ROLE = new core_1.StringField('role', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[shortDescDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.SHORT_DESC_DE_DE = new core_1.StringField('shortDesc_de_DE', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[shortDescDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.SHORT_DESC_DEFAULT_VALUE = new core_1.StringField('shortDesc_defaultValue', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[shortDescEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.SHORT_DESC_EN_DEBUG = new core_1.StringField('shortDesc_en_DEBUG', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[shortDescEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.SHORT_DESC_EN_GB = new core_1.StringField('shortDesc_en_GB', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[shortDescEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.SHORT_DESC_EN_US = new core_1.StringField('shortDesc_en_US', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[shortDescEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.SHORT_DESC_ES_ES = new core_1.StringField('shortDesc_es_ES', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[shortDescEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.SHORT_DESC_ES_MX = new core_1.StringField('shortDesc_es_MX', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[shortDescFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.SHORT_DESC_FR_CA = new core_1.StringField('shortDesc_fr_CA', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[shortDescFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.SHORT_DESC_FR_FR = new core_1.StringField('shortDesc_fr_FR', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[shortDescItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.SHORT_DESC_IT_IT = new core_1.StringField('shortDesc_it_IT', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[shortDescLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.SHORT_DESC_LOCALIZED = new core_1.StringField('shortDesc_localized', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[shortDescNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.SHORT_DESC_NL_NL = new core_1.StringField('shortDesc_nl_NL', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[shortDescPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.SHORT_DESC_PT_BR = new core_1.StringField('shortDesc_pt_BR', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[shortDescZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.SHORT_DESC_ZH_CN = new core_1.StringField('shortDesc_zh_CN', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.STATUS = new core_1.StringField('status', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.SUB_MODULE = new core_1.StringField('subModule', JobProfile, 'Edm.String');
    /**
     * Static representation of the [[template]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.TEMPLATE = new core_1.StringField('template', JobProfile, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[certificationContents]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.CERTIFICATION_CONTENTS = new core_1.Link('certificationContents', JobProfile, CertificationContent_1.CertificationContent);
    /**
     * Static representation of the one-to-many navigation property [[compDataTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.COMP_DATA_TRANSLATION_TEXT_NAV = new core_1.Link('compDataTranslationTextNav', JobProfile, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[compDatas]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.COMP_DATAS = new core_1.Link('compDatas', JobProfile, JobProfileLocalizedData_1.JobProfileLocalizedData);
    /**
     * Static representation of the one-to-many navigation property [[competencyContents]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.COMPETENCY_CONTENTS = new core_1.Link('competencyContents', JobProfile, CompetencyContent_1.CompetencyContent);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', JobProfile, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[educationDegreeContents]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.EDUCATION_DEGREE_CONTENTS = new core_1.Link('educationDegreeContents', JobProfile, EducationDegreeContent_1.EducationDegreeContent);
    /**
     * Static representation of the one-to-many navigation property [[educationMajorContents]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.EDUCATION_MAJOR_CONTENTS = new core_1.Link('educationMajorContents', JobProfile, EducationMajorContent_1.EducationMajorContent);
    /**
     * Static representation of the one-to-many navigation property [[employmentConditionContents]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.EMPLOYMENT_CONDITION_CONTENTS = new core_1.Link('employmentConditionContents', JobProfile, EmploymentConditionContent_1.EmploymentConditionContent);
    /**
     * Static representation of the one-to-many navigation property [[footerTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.FOOTER_TRANSLATION_TEXT_NAV = new core_1.Link('footerTranslationTextNav', JobProfile, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[footers]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.FOOTERS = new core_1.Link('footers', JobProfile, JobProfileLocalizedData_1.JobProfileLocalizedData);
    /**
     * Static representation of the one-to-many navigation property [[headerTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.HEADER_TRANSLATION_TEXT_NAV = new core_1.Link('headerTranslationTextNav', JobProfile, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[headers]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.HEADERS = new core_1.Link('headers', JobProfile, JobProfileLocalizedData_1.JobProfileLocalizedData);
    /**
     * Static representation of the one-to-many navigation property [[interviewQuestionContents]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.INTERVIEW_QUESTION_CONTENTS = new core_1.Link('interviewQuestionContents', JobProfile, InterviewQuestionContent_1.InterviewQuestionContent);
    /**
     * Static representation of the one-to-many navigation property [[jobResponsibilityContents]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.JOB_RESPONSIBILITY_CONTENTS = new core_1.Link('jobResponsibilityContents', JobProfile, JobResponsibilityContent_1.JobResponsibilityContent);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', JobProfile, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[longDescTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.LONG_DESC_TRANSLATION_TEXT_NAV = new core_1.Link('longDescTranslationTextNav', JobProfile, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[longDesciptions]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.LONG_DESCIPTIONS = new core_1.Link('longDesciptions', JobProfile, JobProfileLocalizedData_1.JobProfileLocalizedData);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', JobProfile, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.NAME_TRANSLATION_TEXT_NAV = new core_1.Link('nameTranslationTextNav', JobProfile, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[physicalReqContents]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.PHYSICAL_REQ_CONTENTS = new core_1.Link('physicalReqContents', JobProfile, PhysicalReqContent_1.PhysicalReqContent);
    /**
     * Static representation of the one-to-one navigation property [[positionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.POSITION_NAV = new core_1.OneToOneLink('positionNav', JobProfile, PositionEntity_1.PositionEntity);
    /**
     * Static representation of the one-to-many navigation property [[relevantIndustryContents]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.RELEVANT_INDUSTRY_CONTENTS = new core_1.Link('relevantIndustryContents', JobProfile, RelevantIndustryContent_1.RelevantIndustryContent);
    /**
     * Static representation of the one-to-one navigation property [[roleNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.ROLE_NAV = new core_1.OneToOneLink('roleNav', JobProfile, RoleEntity_1.RoleEntity);
    /**
     * Static representation of the one-to-many navigation property [[shortDescTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.SHORT_DESC_TRANSLATION_TEXT_NAV = new core_1.Link('shortDescTranslationTextNav', JobProfile, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[shortDesciptions]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.SHORT_DESCIPTIONS = new core_1.Link('shortDesciptions', JobProfile, JobProfileLocalizedData_1.JobProfileLocalizedData);
    /**
     * Static representation of the one-to-many navigation property [[skillContents]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.SKILL_CONTENTS = new core_1.Link('skillContents', JobProfile, SkillContent_1.SkillContent);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.STATUS_NAV = new core_1.OneToOneLink('statusNav', JobProfile, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[templateNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.TEMPLATE_NAV = new core_1.OneToOneLink('templateNav', JobProfile, JobDescTemplate_1.JobDescTemplate);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfile.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', JobProfile, WfRequest_1.WfRequest);
    /**
     * All fields of the JobProfile entity.
     */
    JobProfile._allFields = [
        JobProfile.COMP_DATA_DE_DE,
        JobProfile.COMP_DATA_DEFAULT_VALUE,
        JobProfile.COMP_DATA_EN_DEBUG,
        JobProfile.COMP_DATA_EN_GB,
        JobProfile.COMP_DATA_EN_US,
        JobProfile.COMP_DATA_ES_ES,
        JobProfile.COMP_DATA_ES_MX,
        JobProfile.COMP_DATA_FR_CA,
        JobProfile.COMP_DATA_FR_FR,
        JobProfile.COMP_DATA_IT_IT,
        JobProfile.COMP_DATA_LOCALIZED,
        JobProfile.COMP_DATA_NL_NL,
        JobProfile.COMP_DATA_PT_BR,
        JobProfile.COMP_DATA_ZH_CN,
        JobProfile.CREATED_BY,
        JobProfile.CREATED_DATE_TIME,
        JobProfile.DRAFT,
        JobProfile.EXTERNAL_CODE,
        JobProfile.FOOTER_DE_DE,
        JobProfile.FOOTER_DEFAULT_VALUE,
        JobProfile.FOOTER_EN_DEBUG,
        JobProfile.FOOTER_EN_GB,
        JobProfile.FOOTER_EN_US,
        JobProfile.FOOTER_ES_ES,
        JobProfile.FOOTER_ES_MX,
        JobProfile.FOOTER_FR_CA,
        JobProfile.FOOTER_FR_FR,
        JobProfile.FOOTER_IT_IT,
        JobProfile.FOOTER_LOCALIZED,
        JobProfile.FOOTER_NL_NL,
        JobProfile.FOOTER_PT_BR,
        JobProfile.FOOTER_ZH_CN,
        JobProfile.HEADER_DE_DE,
        JobProfile.HEADER_DEFAULT_VALUE,
        JobProfile.HEADER_EN_DEBUG,
        JobProfile.HEADER_EN_GB,
        JobProfile.HEADER_EN_US,
        JobProfile.HEADER_ES_ES,
        JobProfile.HEADER_ES_MX,
        JobProfile.HEADER_FR_CA,
        JobProfile.HEADER_FR_FR,
        JobProfile.HEADER_IT_IT,
        JobProfile.HEADER_LOCALIZED,
        JobProfile.HEADER_NL_NL,
        JobProfile.HEADER_PT_BR,
        JobProfile.HEADER_ZH_CN,
        JobProfile.LAST_MODIFIED_BY,
        JobProfile.LAST_MODIFIED_DATE_TIME,
        JobProfile.LAST_MODIFIER_NAME,
        JobProfile.LONG_DESC_DE_DE,
        JobProfile.LONG_DESC_DEFAULT_VALUE,
        JobProfile.LONG_DESC_EN_DEBUG,
        JobProfile.LONG_DESC_EN_GB,
        JobProfile.LONG_DESC_EN_US,
        JobProfile.LONG_DESC_ES_ES,
        JobProfile.LONG_DESC_ES_MX,
        JobProfile.LONG_DESC_FR_CA,
        JobProfile.LONG_DESC_FR_FR,
        JobProfile.LONG_DESC_IT_IT,
        JobProfile.LONG_DESC_LOCALIZED,
        JobProfile.LONG_DESC_NL_NL,
        JobProfile.LONG_DESC_PT_BR,
        JobProfile.LONG_DESC_ZH_CN,
        JobProfile.MDF_SYSTEM_RECORD_STATUS,
        JobProfile.MIGRATED,
        JobProfile.NAME_DE_DE,
        JobProfile.NAME_DEFAULT_VALUE,
        JobProfile.NAME_EN_DEBUG,
        JobProfile.NAME_EN_GB,
        JobProfile.NAME_EN_US,
        JobProfile.NAME_ES_ES,
        JobProfile.NAME_ES_MX,
        JobProfile.NAME_FR_CA,
        JobProfile.NAME_FR_FR,
        JobProfile.NAME_IT_IT,
        JobProfile.NAME_LOCALIZED,
        JobProfile.NAME_NL_NL,
        JobProfile.NAME_PT_BR,
        JobProfile.NAME_ZH_CN,
        JobProfile.POSITION,
        JobProfile.ROLE,
        JobProfile.SHORT_DESC_DE_DE,
        JobProfile.SHORT_DESC_DEFAULT_VALUE,
        JobProfile.SHORT_DESC_EN_DEBUG,
        JobProfile.SHORT_DESC_EN_GB,
        JobProfile.SHORT_DESC_EN_US,
        JobProfile.SHORT_DESC_ES_ES,
        JobProfile.SHORT_DESC_ES_MX,
        JobProfile.SHORT_DESC_FR_CA,
        JobProfile.SHORT_DESC_FR_FR,
        JobProfile.SHORT_DESC_IT_IT,
        JobProfile.SHORT_DESC_LOCALIZED,
        JobProfile.SHORT_DESC_NL_NL,
        JobProfile.SHORT_DESC_PT_BR,
        JobProfile.SHORT_DESC_ZH_CN,
        JobProfile.STATUS,
        JobProfile.SUB_MODULE,
        JobProfile.TEMPLATE,
        JobProfile.CERTIFICATION_CONTENTS,
        JobProfile.COMP_DATA_TRANSLATION_TEXT_NAV,
        JobProfile.COMP_DATAS,
        JobProfile.COMPETENCY_CONTENTS,
        JobProfile.CREATED_BY_NAV,
        JobProfile.EDUCATION_DEGREE_CONTENTS,
        JobProfile.EDUCATION_MAJOR_CONTENTS,
        JobProfile.EMPLOYMENT_CONDITION_CONTENTS,
        JobProfile.FOOTER_TRANSLATION_TEXT_NAV,
        JobProfile.FOOTERS,
        JobProfile.HEADER_TRANSLATION_TEXT_NAV,
        JobProfile.HEADERS,
        JobProfile.INTERVIEW_QUESTION_CONTENTS,
        JobProfile.JOB_RESPONSIBILITY_CONTENTS,
        JobProfile.LAST_MODIFIED_BY_NAV,
        JobProfile.LONG_DESC_TRANSLATION_TEXT_NAV,
        JobProfile.LONG_DESCIPTIONS,
        JobProfile.MDF_SYSTEM_RECORD_STATUS_NAV,
        JobProfile.NAME_TRANSLATION_TEXT_NAV,
        JobProfile.PHYSICAL_REQ_CONTENTS,
        JobProfile.POSITION_NAV,
        JobProfile.RELEVANT_INDUSTRY_CONTENTS,
        JobProfile.ROLE_NAV,
        JobProfile.SHORT_DESC_TRANSLATION_TEXT_NAV,
        JobProfile.SHORT_DESCIPTIONS,
        JobProfile.SKILL_CONTENTS,
        JobProfile.STATUS_NAV,
        JobProfile.TEMPLATE_NAV,
        JobProfile.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    JobProfile.ALL_FIELDS = new core_1.AllFields('*', JobProfile);
    /**
     * All key fields of the JobProfile entity.
     */
    JobProfile._keyFields = [JobProfile.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property JobProfile.
     */
    JobProfile._keys = JobProfile._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobProfile = exports.JobProfile || (exports.JobProfile = {}));
exports.JobProfile = JobProfile;
//# sourceMappingURL=JobProfile.js.map