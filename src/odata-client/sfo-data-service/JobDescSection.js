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
var JobDescSectionRequestBuilder_1 = require("./JobDescSectionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobDescSection" of service "SFOData".
 */
var JobDescSection = /** @class */ (function (_super) {
    __extends(JobDescSection, _super);
    function JobDescSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobDescSection`.
     * @returns A builder that constructs instances of entity type `JobDescSection`.
     */
    JobDescSection.builder = function () {
        return core_1.Entity.entityBuilder(JobDescSection);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobDescSection` entity type.
     * @returns A `JobDescSection` request builder.
     */
    JobDescSection.requestBuilder = function () {
        return new JobDescSectionRequestBuilder_1.JobDescSectionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobDescSection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobDescSection`.
     */
    JobDescSection.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobDescSection);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobDescSection.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobDescSection.
     */
    JobDescSection._entityName = 'JobDescSection';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobDescSection.
     */
    JobDescSection._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobDescSection._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobDescSection;
}(core_1.Entity));
exports.JobDescSection = JobDescSection;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
(function (JobDescSection) {
    /**
     * Static representation of the [[jobDescTemplateExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.JOB_DESC_TEMPLATE_EXTERNAL_CODE = new core_1.StringField('JobDescTemplate_externalCode', JobDescSection, 'Edm.String');
    /**
     * Static representation of the [[bold]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.BOLD = new core_1.BooleanField('bold', JobDescSection, 'Edm.Boolean');
    /**
     * Static representation of the [[boldHeader]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.BOLD_HEADER = new core_1.BooleanField('boldHeader', JobDescSection, 'Edm.Boolean');
    /**
     * Static representation of the [[bulletType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.BULLET_TYPE = new core_1.StringField('bulletType', JobDescSection, 'Edm.String');
    /**
     * Static representation of the [[contentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.CONTENT_TYPE = new core_1.StringField('contentType', JobDescSection, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.CREATED_BY = new core_1.StringField('createdBy', JobDescSection, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', JobDescSection, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.EXTERNAL_CODE = new core_1.StringField('externalCode', JobDescSection, 'Edm.String');
    /**
     * Static representation of the [[externalPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.EXTERNAL_POSTING = new core_1.BooleanField('externalPosting', JobDescSection, 'Edm.Boolean');
    /**
     * Static representation of the [[fontSizeHeader]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.FONT_SIZE_HEADER = new core_1.BigNumberField('fontSizeHeader', JobDescSection, 'Edm.Int64');
    /**
     * Static representation of the [[internalPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.INTERNAL_POSTING = new core_1.BooleanField('internalPosting', JobDescSection, 'Edm.Boolean');
    /**
     * Static representation of the [[italic]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.ITALIC = new core_1.BooleanField('italic', JobDescSection, 'Edm.Boolean');
    /**
     * Static representation of the [[italicHeader]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.ITALIC_HEADER = new core_1.BooleanField('italicHeader', JobDescSection, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', JobDescSection, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', JobDescSection, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', JobDescSection, 'Edm.String');
    /**
     * Static representation of the [[multiContents]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.MULTI_CONTENTS = new core_1.BooleanField('multiContents', JobDescSection, 'Edm.Boolean');
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.NAME_DE_DE = new core_1.StringField('name_de_DE', JobDescSection, 'Edm.String');
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.NAME_DEFAULT_VALUE = new core_1.StringField('name_defaultValue', JobDescSection, 'Edm.String');
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.NAME_EN_DEBUG = new core_1.StringField('name_en_DEBUG', JobDescSection, 'Edm.String');
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.NAME_EN_GB = new core_1.StringField('name_en_GB', JobDescSection, 'Edm.String');
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.NAME_EN_US = new core_1.StringField('name_en_US', JobDescSection, 'Edm.String');
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.NAME_ES_ES = new core_1.StringField('name_es_ES', JobDescSection, 'Edm.String');
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.NAME_ES_MX = new core_1.StringField('name_es_MX', JobDescSection, 'Edm.String');
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.NAME_FR_CA = new core_1.StringField('name_fr_CA', JobDescSection, 'Edm.String');
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.NAME_FR_FR = new core_1.StringField('name_fr_FR', JobDescSection, 'Edm.String');
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.NAME_IT_IT = new core_1.StringField('name_it_IT', JobDescSection, 'Edm.String');
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.NAME_LOCALIZED = new core_1.StringField('name_localized', JobDescSection, 'Edm.String');
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.NAME_NL_NL = new core_1.StringField('name_nl_NL', JobDescSection, 'Edm.String');
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.NAME_PT_BR = new core_1.StringField('name_pt_BR', JobDescSection, 'Edm.String');
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.NAME_ZH_CN = new core_1.StringField('name_zh_CN', JobDescSection, 'Edm.String');
    /**
     * Static representation of the [[onlyAdmin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.ONLY_ADMIN = new core_1.BooleanField('onlyAdmin', JobDescSection, 'Edm.Boolean');
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.ORDER = new core_1.BigNumberField('order', JobDescSection, 'Edm.Int64');
    /**
     * Static representation of the [[removable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.REMOVABLE = new core_1.BooleanField('removable', JobDescSection, 'Edm.Boolean');
    /**
     * Static representation of the [[required]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.REQUIRED = new core_1.BooleanField('required', JobDescSection, 'Edm.Boolean');
    /**
     * Static representation of the [[showInJobReq]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.SHOW_IN_JOB_REQ = new core_1.BooleanField('showInJobReq', JobDescSection, 'Edm.Boolean');
    /**
     * Static representation of the [[smallIcon]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.SMALL_ICON = new core_1.StringField('smallIcon', JobDescSection, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.STATUS = new core_1.StringField('status', JobDescSection, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.SUB_MODULE = new core_1.StringField('subModule', JobDescSection, 'Edm.String');
    /**
     * Static representation of the [[underline]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.UNDERLINE = new core_1.BooleanField('underline', JobDescSection, 'Edm.Boolean');
    /**
     * Static representation of the [[underlineHeader]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.UNDERLINE_HEADER = new core_1.BooleanField('underlineHeader', JobDescSection, 'Edm.Boolean');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', JobDescSection, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', JobDescSection, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', JobDescSection, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.NAME_TRANSLATION_TEXT_NAV = new core_1.Link('nameTranslationTextNav', JobDescSection, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobDescSection.STATUS_NAV = new core_1.OneToOneLink('statusNav', JobDescSection, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the JobDescSection entity.
     */
    JobDescSection._allFields = [
        JobDescSection.JOB_DESC_TEMPLATE_EXTERNAL_CODE,
        JobDescSection.BOLD,
        JobDescSection.BOLD_HEADER,
        JobDescSection.BULLET_TYPE,
        JobDescSection.CONTENT_TYPE,
        JobDescSection.CREATED_BY,
        JobDescSection.CREATED_DATE_TIME,
        JobDescSection.EXTERNAL_CODE,
        JobDescSection.EXTERNAL_POSTING,
        JobDescSection.FONT_SIZE_HEADER,
        JobDescSection.INTERNAL_POSTING,
        JobDescSection.ITALIC,
        JobDescSection.ITALIC_HEADER,
        JobDescSection.LAST_MODIFIED_BY,
        JobDescSection.LAST_MODIFIED_DATE_TIME,
        JobDescSection.MDF_SYSTEM_RECORD_STATUS,
        JobDescSection.MULTI_CONTENTS,
        JobDescSection.NAME_DE_DE,
        JobDescSection.NAME_DEFAULT_VALUE,
        JobDescSection.NAME_EN_DEBUG,
        JobDescSection.NAME_EN_GB,
        JobDescSection.NAME_EN_US,
        JobDescSection.NAME_ES_ES,
        JobDescSection.NAME_ES_MX,
        JobDescSection.NAME_FR_CA,
        JobDescSection.NAME_FR_FR,
        JobDescSection.NAME_IT_IT,
        JobDescSection.NAME_LOCALIZED,
        JobDescSection.NAME_NL_NL,
        JobDescSection.NAME_PT_BR,
        JobDescSection.NAME_ZH_CN,
        JobDescSection.ONLY_ADMIN,
        JobDescSection.ORDER,
        JobDescSection.REMOVABLE,
        JobDescSection.REQUIRED,
        JobDescSection.SHOW_IN_JOB_REQ,
        JobDescSection.SMALL_ICON,
        JobDescSection.STATUS,
        JobDescSection.SUB_MODULE,
        JobDescSection.UNDERLINE,
        JobDescSection.UNDERLINE_HEADER,
        JobDescSection.CREATED_BY_NAV,
        JobDescSection.LAST_MODIFIED_BY_NAV,
        JobDescSection.MDF_SYSTEM_RECORD_STATUS_NAV,
        JobDescSection.NAME_TRANSLATION_TEXT_NAV,
        JobDescSection.STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    JobDescSection.ALL_FIELDS = new core_1.AllFields('*', JobDescSection);
    /**
     * All key fields of the JobDescSection entity.
     */
    JobDescSection._keyFields = [JobDescSection.JOB_DESC_TEMPLATE_EXTERNAL_CODE, JobDescSection.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property JobDescSection.
     */
    JobDescSection._keys = JobDescSection._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobDescSection = exports.JobDescSection || (exports.JobDescSection = {}));
exports.JobDescSection = JobDescSection;
//# sourceMappingURL=JobDescSection.js.map