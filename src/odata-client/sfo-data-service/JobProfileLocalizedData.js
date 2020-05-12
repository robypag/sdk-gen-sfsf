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
var JobProfileLocalizedDataRequestBuilder_1 = require("./JobProfileLocalizedDataRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobProfileLocalizedData" of service "SFOData".
 */
var JobProfileLocalizedData = /** @class */ (function (_super) {
    __extends(JobProfileLocalizedData, _super);
    function JobProfileLocalizedData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobProfileLocalizedData`.
     * @returns A builder that constructs instances of entity type `JobProfileLocalizedData`.
     */
    JobProfileLocalizedData.builder = function () {
        return core_1.Entity.entityBuilder(JobProfileLocalizedData);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobProfileLocalizedData` entity type.
     * @returns A `JobProfileLocalizedData` request builder.
     */
    JobProfileLocalizedData.requestBuilder = function () {
        return new JobProfileLocalizedDataRequestBuilder_1.JobProfileLocalizedDataRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobProfileLocalizedData`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobProfileLocalizedData`.
     */
    JobProfileLocalizedData.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobProfileLocalizedData);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobProfileLocalizedData.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobProfileLocalizedData.
     */
    JobProfileLocalizedData._entityName = 'JobProfileLocalizedData';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobProfileLocalizedData.
     */
    JobProfileLocalizedData._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobProfileLocalizedData._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobProfileLocalizedData;
}(core_1.Entity));
exports.JobProfileLocalizedData = JobProfileLocalizedData;
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (JobProfileLocalizedData) {
    /**
     * Static representation of the [[jobProfileExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.JOB_PROFILE_EXTERNAL_CODE = new core_1.StringField('JobProfile_externalCode', JobProfileLocalizedData, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.CREATED_BY = new core_1.StringField('createdBy', JobProfileLocalizedData, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', JobProfileLocalizedData, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[descDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.DESC_DE_DE = new core_1.StringField('desc_de_DE', JobProfileLocalizedData, 'Edm.String');
    /**
     * Static representation of the [[descDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.DESC_DEFAULT_VALUE = new core_1.StringField('desc_defaultValue', JobProfileLocalizedData, 'Edm.String');
    /**
     * Static representation of the [[descEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.DESC_EN_DEBUG = new core_1.StringField('desc_en_DEBUG', JobProfileLocalizedData, 'Edm.String');
    /**
     * Static representation of the [[descEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.DESC_EN_GB = new core_1.StringField('desc_en_GB', JobProfileLocalizedData, 'Edm.String');
    /**
     * Static representation of the [[descEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.DESC_EN_US = new core_1.StringField('desc_en_US', JobProfileLocalizedData, 'Edm.String');
    /**
     * Static representation of the [[descEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.DESC_ES_ES = new core_1.StringField('desc_es_ES', JobProfileLocalizedData, 'Edm.String');
    /**
     * Static representation of the [[descEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.DESC_ES_MX = new core_1.StringField('desc_es_MX', JobProfileLocalizedData, 'Edm.String');
    /**
     * Static representation of the [[descFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.DESC_FR_CA = new core_1.StringField('desc_fr_CA', JobProfileLocalizedData, 'Edm.String');
    /**
     * Static representation of the [[descFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.DESC_FR_FR = new core_1.StringField('desc_fr_FR', JobProfileLocalizedData, 'Edm.String');
    /**
     * Static representation of the [[descItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.DESC_IT_IT = new core_1.StringField('desc_it_IT', JobProfileLocalizedData, 'Edm.String');
    /**
     * Static representation of the [[descLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.DESC_LOCALIZED = new core_1.StringField('desc_localized', JobProfileLocalizedData, 'Edm.String');
    /**
     * Static representation of the [[descNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.DESC_NL_NL = new core_1.StringField('desc_nl_NL', JobProfileLocalizedData, 'Edm.String');
    /**
     * Static representation of the [[descPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.DESC_PT_BR = new core_1.StringField('desc_pt_BR', JobProfileLocalizedData, 'Edm.String');
    /**
     * Static representation of the [[descZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.DESC_ZH_CN = new core_1.StringField('desc_zh_CN', JobProfileLocalizedData, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.EXTERNAL_CODE = new core_1.StringField('externalCode', JobProfileLocalizedData, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', JobProfileLocalizedData, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', JobProfileLocalizedData, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', JobProfileLocalizedData, 'Edm.String');
    /**
     * Static representation of the [[sectionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.SECTION_ID = new core_1.StringField('sectionId', JobProfileLocalizedData, 'Edm.String');
    /**
     * Static representation of the [[sectionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.SECTION_TYPE = new core_1.StringField('sectionType', JobProfileLocalizedData, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.STATUS = new core_1.StringField('status', JobProfileLocalizedData, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.SUB_MODULE = new core_1.StringField('subModule', JobProfileLocalizedData, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', JobProfileLocalizedData, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[descTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.DESC_TRANSLATION_TEXT_NAV = new core_1.Link('descTranslationTextNav', JobProfileLocalizedData, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', JobProfileLocalizedData, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', JobProfileLocalizedData, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobProfileLocalizedData.STATUS_NAV = new core_1.OneToOneLink('statusNav', JobProfileLocalizedData, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the JobProfileLocalizedData entity.
     */
    JobProfileLocalizedData._allFields = [
        JobProfileLocalizedData.JOB_PROFILE_EXTERNAL_CODE,
        JobProfileLocalizedData.CREATED_BY,
        JobProfileLocalizedData.CREATED_DATE_TIME,
        JobProfileLocalizedData.DESC_DE_DE,
        JobProfileLocalizedData.DESC_DEFAULT_VALUE,
        JobProfileLocalizedData.DESC_EN_DEBUG,
        JobProfileLocalizedData.DESC_EN_GB,
        JobProfileLocalizedData.DESC_EN_US,
        JobProfileLocalizedData.DESC_ES_ES,
        JobProfileLocalizedData.DESC_ES_MX,
        JobProfileLocalizedData.DESC_FR_CA,
        JobProfileLocalizedData.DESC_FR_FR,
        JobProfileLocalizedData.DESC_IT_IT,
        JobProfileLocalizedData.DESC_LOCALIZED,
        JobProfileLocalizedData.DESC_NL_NL,
        JobProfileLocalizedData.DESC_PT_BR,
        JobProfileLocalizedData.DESC_ZH_CN,
        JobProfileLocalizedData.EXTERNAL_CODE,
        JobProfileLocalizedData.LAST_MODIFIED_BY,
        JobProfileLocalizedData.LAST_MODIFIED_DATE_TIME,
        JobProfileLocalizedData.MDF_SYSTEM_RECORD_STATUS,
        JobProfileLocalizedData.SECTION_ID,
        JobProfileLocalizedData.SECTION_TYPE,
        JobProfileLocalizedData.STATUS,
        JobProfileLocalizedData.SUB_MODULE,
        JobProfileLocalizedData.CREATED_BY_NAV,
        JobProfileLocalizedData.DESC_TRANSLATION_TEXT_NAV,
        JobProfileLocalizedData.LAST_MODIFIED_BY_NAV,
        JobProfileLocalizedData.MDF_SYSTEM_RECORD_STATUS_NAV,
        JobProfileLocalizedData.STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    JobProfileLocalizedData.ALL_FIELDS = new core_1.AllFields('*', JobProfileLocalizedData);
    /**
     * All key fields of the JobProfileLocalizedData entity.
     */
    JobProfileLocalizedData._keyFields = [JobProfileLocalizedData.JOB_PROFILE_EXTERNAL_CODE, JobProfileLocalizedData.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property JobProfileLocalizedData.
     */
    JobProfileLocalizedData._keys = JobProfileLocalizedData._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobProfileLocalizedData = exports.JobProfileLocalizedData || (exports.JobProfileLocalizedData = {}));
exports.JobProfileLocalizedData = JobProfileLocalizedData;
//# sourceMappingURL=JobProfileLocalizedData.js.map