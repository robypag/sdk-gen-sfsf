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
var JobDescTemplateRequestBuilder_1 = require("./JobDescTemplateRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobDescTemplate" of service "SFOData".
 */
var JobDescTemplate = /** @class */ (function (_super) {
    __extends(JobDescTemplate, _super);
    function JobDescTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobDescTemplate`.
     * @returns A builder that constructs instances of entity type `JobDescTemplate`.
     */
    JobDescTemplate.builder = function () {
        return core_1.Entity.entityBuilder(JobDescTemplate);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobDescTemplate` entity type.
     * @returns A `JobDescTemplate` request builder.
     */
    JobDescTemplate.requestBuilder = function () {
        return new JobDescTemplateRequestBuilder_1.JobDescTemplateRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobDescTemplate`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobDescTemplate`.
     */
    JobDescTemplate.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobDescTemplate);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobDescTemplate.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobDescTemplate.
     */
    JobDescTemplate._entityName = 'JobDescTemplate';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobDescTemplate.
     */
    JobDescTemplate._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobDescTemplate._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobDescTemplate;
}(core_1.Entity));
exports.JobDescTemplate = JobDescTemplate;
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var JdTemplateFamilyMapping_1 = require("./JdTemplateFamilyMapping");
var MdfEnumValue_1 = require("./MdfEnumValue");
var JobDescSection_1 = require("./JobDescSection");
var WfRequest_1 = require("./WfRequest");
(function (JobDescTemplate) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.CREATED_BY = new core_1.StringField('createdBy', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', JobDescTemplate, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.EXTERNAL_CODE = new core_1.StringField('externalCode', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[footerDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.FOOTER_DE_DE = new core_1.StringField('footer_de_DE', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[footerDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.FOOTER_DEFAULT_VALUE = new core_1.StringField('footer_defaultValue', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[footerEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.FOOTER_EN_DEBUG = new core_1.StringField('footer_en_DEBUG', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[footerEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.FOOTER_EN_GB = new core_1.StringField('footer_en_GB', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[footerEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.FOOTER_EN_US = new core_1.StringField('footer_en_US', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[footerEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.FOOTER_ES_ES = new core_1.StringField('footer_es_ES', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[footerEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.FOOTER_ES_MX = new core_1.StringField('footer_es_MX', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[footerFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.FOOTER_FR_CA = new core_1.StringField('footer_fr_CA', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[footerFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.FOOTER_FR_FR = new core_1.StringField('footer_fr_FR', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[footerItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.FOOTER_IT_IT = new core_1.StringField('footer_it_IT', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[footerLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.FOOTER_LOCALIZED = new core_1.StringField('footer_localized', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[footerNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.FOOTER_NL_NL = new core_1.StringField('footer_nl_NL', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[footerPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.FOOTER_PT_BR = new core_1.StringField('footer_pt_BR', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[footerZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.FOOTER_ZH_CN = new core_1.StringField('footer_zh_CN', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[headerDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.HEADER_DE_DE = new core_1.StringField('header_de_DE', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[headerDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.HEADER_DEFAULT_VALUE = new core_1.StringField('header_defaultValue', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[headerEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.HEADER_EN_DEBUG = new core_1.StringField('header_en_DEBUG', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[headerEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.HEADER_EN_GB = new core_1.StringField('header_en_GB', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[headerEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.HEADER_EN_US = new core_1.StringField('header_en_US', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[headerEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.HEADER_ES_ES = new core_1.StringField('header_es_ES', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[headerEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.HEADER_ES_MX = new core_1.StringField('header_es_MX', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[headerFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.HEADER_FR_CA = new core_1.StringField('header_fr_CA', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[headerFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.HEADER_FR_FR = new core_1.StringField('header_fr_FR', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[headerItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.HEADER_IT_IT = new core_1.StringField('header_it_IT', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[headerLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.HEADER_LOCALIZED = new core_1.StringField('header_localized', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[headerNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.HEADER_NL_NL = new core_1.StringField('header_nl_NL', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[headerPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.HEADER_PT_BR = new core_1.StringField('header_pt_BR', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[headerZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.HEADER_ZH_CN = new core_1.StringField('header_zh_CN', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', JobDescTemplate, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.STATUS = new core_1.StringField('status', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.SUB_MODULE = new core_1.StringField('subModule', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[titleDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.TITLE_DE_DE = new core_1.StringField('title_de_DE', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[titleDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.TITLE_DEFAULT_VALUE = new core_1.StringField('title_defaultValue', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[titleEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.TITLE_EN_DEBUG = new core_1.StringField('title_en_DEBUG', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[titleEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.TITLE_EN_GB = new core_1.StringField('title_en_GB', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[titleEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.TITLE_EN_US = new core_1.StringField('title_en_US', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[titleEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.TITLE_ES_ES = new core_1.StringField('title_es_ES', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[titleEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.TITLE_ES_MX = new core_1.StringField('title_es_MX', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[titleFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.TITLE_FR_CA = new core_1.StringField('title_fr_CA', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[titleFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.TITLE_FR_FR = new core_1.StringField('title_fr_FR', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[titleItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.TITLE_IT_IT = new core_1.StringField('title_it_IT', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[titleLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.TITLE_LOCALIZED = new core_1.StringField('title_localized', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[titleNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.TITLE_NL_NL = new core_1.StringField('title_nl_NL', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[titlePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.TITLE_PT_BR = new core_1.StringField('title_pt_BR', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the [[titleZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.TITLE_ZH_CN = new core_1.StringField('title_zh_CN', JobDescTemplate, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', JobDescTemplate, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[footerTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.FOOTER_TRANSLATION_TEXT_NAV = new core_1.Link('footerTranslationTextNav', JobDescTemplate, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[headerTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.HEADER_TRANSLATION_TEXT_NAV = new core_1.Link('headerTranslationTextNav', JobDescTemplate, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[jdFamilyMappings]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.JD_FAMILY_MAPPINGS = new core_1.Link('jdFamilyMappings', JobDescTemplate, JdTemplateFamilyMapping_1.JdTemplateFamilyMapping);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', JobDescTemplate, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', JobDescTemplate, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[sections]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.SECTIONS = new core_1.Link('sections', JobDescTemplate, JobDescSection_1.JobDescSection);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.STATUS_NAV = new core_1.OneToOneLink('statusNav', JobDescTemplate, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[titleTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.TITLE_TRANSLATION_TEXT_NAV = new core_1.Link('titleTranslationTextNav', JobDescTemplate, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescTemplate.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', JobDescTemplate, WfRequest_1.WfRequest);
    /**
     * All fields of the JobDescTemplate entity.
     */
    JobDescTemplate._allFields = [
        JobDescTemplate.CREATED_BY,
        JobDescTemplate.CREATED_DATE_TIME,
        JobDescTemplate.EXTERNAL_CODE,
        JobDescTemplate.FOOTER_DE_DE,
        JobDescTemplate.FOOTER_DEFAULT_VALUE,
        JobDescTemplate.FOOTER_EN_DEBUG,
        JobDescTemplate.FOOTER_EN_GB,
        JobDescTemplate.FOOTER_EN_US,
        JobDescTemplate.FOOTER_ES_ES,
        JobDescTemplate.FOOTER_ES_MX,
        JobDescTemplate.FOOTER_FR_CA,
        JobDescTemplate.FOOTER_FR_FR,
        JobDescTemplate.FOOTER_IT_IT,
        JobDescTemplate.FOOTER_LOCALIZED,
        JobDescTemplate.FOOTER_NL_NL,
        JobDescTemplate.FOOTER_PT_BR,
        JobDescTemplate.FOOTER_ZH_CN,
        JobDescTemplate.HEADER_DE_DE,
        JobDescTemplate.HEADER_DEFAULT_VALUE,
        JobDescTemplate.HEADER_EN_DEBUG,
        JobDescTemplate.HEADER_EN_GB,
        JobDescTemplate.HEADER_EN_US,
        JobDescTemplate.HEADER_ES_ES,
        JobDescTemplate.HEADER_ES_MX,
        JobDescTemplate.HEADER_FR_CA,
        JobDescTemplate.HEADER_FR_FR,
        JobDescTemplate.HEADER_IT_IT,
        JobDescTemplate.HEADER_LOCALIZED,
        JobDescTemplate.HEADER_NL_NL,
        JobDescTemplate.HEADER_PT_BR,
        JobDescTemplate.HEADER_ZH_CN,
        JobDescTemplate.LAST_MODIFIED_BY,
        JobDescTemplate.LAST_MODIFIED_DATE_TIME,
        JobDescTemplate.MDF_SYSTEM_RECORD_STATUS,
        JobDescTemplate.STATUS,
        JobDescTemplate.SUB_MODULE,
        JobDescTemplate.TITLE_DE_DE,
        JobDescTemplate.TITLE_DEFAULT_VALUE,
        JobDescTemplate.TITLE_EN_DEBUG,
        JobDescTemplate.TITLE_EN_GB,
        JobDescTemplate.TITLE_EN_US,
        JobDescTemplate.TITLE_ES_ES,
        JobDescTemplate.TITLE_ES_MX,
        JobDescTemplate.TITLE_FR_CA,
        JobDescTemplate.TITLE_FR_FR,
        JobDescTemplate.TITLE_IT_IT,
        JobDescTemplate.TITLE_LOCALIZED,
        JobDescTemplate.TITLE_NL_NL,
        JobDescTemplate.TITLE_PT_BR,
        JobDescTemplate.TITLE_ZH_CN,
        JobDescTemplate.CREATED_BY_NAV,
        JobDescTemplate.FOOTER_TRANSLATION_TEXT_NAV,
        JobDescTemplate.HEADER_TRANSLATION_TEXT_NAV,
        JobDescTemplate.JD_FAMILY_MAPPINGS,
        JobDescTemplate.LAST_MODIFIED_BY_NAV,
        JobDescTemplate.MDF_SYSTEM_RECORD_STATUS_NAV,
        JobDescTemplate.SECTIONS,
        JobDescTemplate.STATUS_NAV,
        JobDescTemplate.TITLE_TRANSLATION_TEXT_NAV,
        JobDescTemplate.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    JobDescTemplate.ALL_FIELDS = new core_1.AllFields('*', JobDescTemplate);
    /**
     * All key fields of the JobDescTemplate entity.
     */
    JobDescTemplate._keyFields = [JobDescTemplate.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property JobDescTemplate.
     */
    JobDescTemplate._keys = JobDescTemplate._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobDescTemplate = exports.JobDescTemplate || (exports.JobDescTemplate = {}));
exports.JobDescTemplate = JobDescTemplate;
//# sourceMappingURL=JobDescTemplate.js.map