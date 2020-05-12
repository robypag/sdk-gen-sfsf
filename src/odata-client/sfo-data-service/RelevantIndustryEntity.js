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
var RelevantIndustryEntityRequestBuilder_1 = require("./RelevantIndustryEntityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "RelevantIndustryEntity" of service "SFOData".
 */
var RelevantIndustryEntity = /** @class */ (function (_super) {
    __extends(RelevantIndustryEntity, _super);
    function RelevantIndustryEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `RelevantIndustryEntity`.
     * @returns A builder that constructs instances of entity type `RelevantIndustryEntity`.
     */
    RelevantIndustryEntity.builder = function () {
        return core_1.Entity.entityBuilder(RelevantIndustryEntity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `RelevantIndustryEntity` entity type.
     * @returns A `RelevantIndustryEntity` request builder.
     */
    RelevantIndustryEntity.requestBuilder = function () {
        return new RelevantIndustryEntityRequestBuilder_1.RelevantIndustryEntityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RelevantIndustryEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RelevantIndustryEntity`.
     */
    RelevantIndustryEntity.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, RelevantIndustryEntity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    RelevantIndustryEntity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for RelevantIndustryEntity.
     */
    RelevantIndustryEntity._entityName = 'RelevantIndustryEntity';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for RelevantIndustryEntity.
     */
    RelevantIndustryEntity._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    RelevantIndustryEntity._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return RelevantIndustryEntity;
}(core_1.Entity));
exports.RelevantIndustryEntity = RelevantIndustryEntity;
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (RelevantIndustryEntity) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryEntity.CREATED_BY = new core_1.StringField('createdBy', RelevantIndustryEntity, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryEntity.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', RelevantIndustryEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryEntity.EXTERNAL_CODE = new core_1.StringField('externalCode', RelevantIndustryEntity, 'Edm.String');
    /**
     * Static representation of the [[industryDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryEntity.INDUSTRY_DE_DE = new core_1.StringField('industry_de_DE', RelevantIndustryEntity, 'Edm.String');
    /**
     * Static representation of the [[industryDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryEntity.INDUSTRY_DEFAULT_VALUE = new core_1.StringField('industry_defaultValue', RelevantIndustryEntity, 'Edm.String');
    /**
     * Static representation of the [[industryEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryEntity.INDUSTRY_EN_DEBUG = new core_1.StringField('industry_en_DEBUG', RelevantIndustryEntity, 'Edm.String');
    /**
     * Static representation of the [[industryEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryEntity.INDUSTRY_EN_GB = new core_1.StringField('industry_en_GB', RelevantIndustryEntity, 'Edm.String');
    /**
     * Static representation of the [[industryEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryEntity.INDUSTRY_EN_US = new core_1.StringField('industry_en_US', RelevantIndustryEntity, 'Edm.String');
    /**
     * Static representation of the [[industryEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryEntity.INDUSTRY_ES_ES = new core_1.StringField('industry_es_ES', RelevantIndustryEntity, 'Edm.String');
    /**
     * Static representation of the [[industryEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryEntity.INDUSTRY_ES_MX = new core_1.StringField('industry_es_MX', RelevantIndustryEntity, 'Edm.String');
    /**
     * Static representation of the [[industryFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryEntity.INDUSTRY_FR_CA = new core_1.StringField('industry_fr_CA', RelevantIndustryEntity, 'Edm.String');
    /**
     * Static representation of the [[industryFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryEntity.INDUSTRY_FR_FR = new core_1.StringField('industry_fr_FR', RelevantIndustryEntity, 'Edm.String');
    /**
     * Static representation of the [[industryItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryEntity.INDUSTRY_IT_IT = new core_1.StringField('industry_it_IT', RelevantIndustryEntity, 'Edm.String');
    /**
     * Static representation of the [[industryLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryEntity.INDUSTRY_LOCALIZED = new core_1.StringField('industry_localized', RelevantIndustryEntity, 'Edm.String');
    /**
     * Static representation of the [[industryNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryEntity.INDUSTRY_NL_NL = new core_1.StringField('industry_nl_NL', RelevantIndustryEntity, 'Edm.String');
    /**
     * Static representation of the [[industryPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryEntity.INDUSTRY_PT_BR = new core_1.StringField('industry_pt_BR', RelevantIndustryEntity, 'Edm.String');
    /**
     * Static representation of the [[industryZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryEntity.INDUSTRY_ZH_CN = new core_1.StringField('industry_zh_CN', RelevantIndustryEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryEntity.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', RelevantIndustryEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryEntity.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', RelevantIndustryEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryEntity.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', RelevantIndustryEntity, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryEntity.STATUS = new core_1.StringField('status', RelevantIndustryEntity, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryEntity.SUB_MODULE = new core_1.StringField('subModule', RelevantIndustryEntity, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryEntity.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', RelevantIndustryEntity, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[industryTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryEntity.INDUSTRY_TRANSLATION_TEXT_NAV = new core_1.Link('industryTranslationTextNav', RelevantIndustryEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryEntity.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', RelevantIndustryEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryEntity.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', RelevantIndustryEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryEntity.STATUS_NAV = new core_1.OneToOneLink('statusNav', RelevantIndustryEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryEntity.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', RelevantIndustryEntity, WfRequest_1.WfRequest);
    /**
     * All fields of the RelevantIndustryEntity entity.
     */
    RelevantIndustryEntity._allFields = [
        RelevantIndustryEntity.CREATED_BY,
        RelevantIndustryEntity.CREATED_DATE_TIME,
        RelevantIndustryEntity.EXTERNAL_CODE,
        RelevantIndustryEntity.INDUSTRY_DE_DE,
        RelevantIndustryEntity.INDUSTRY_DEFAULT_VALUE,
        RelevantIndustryEntity.INDUSTRY_EN_DEBUG,
        RelevantIndustryEntity.INDUSTRY_EN_GB,
        RelevantIndustryEntity.INDUSTRY_EN_US,
        RelevantIndustryEntity.INDUSTRY_ES_ES,
        RelevantIndustryEntity.INDUSTRY_ES_MX,
        RelevantIndustryEntity.INDUSTRY_FR_CA,
        RelevantIndustryEntity.INDUSTRY_FR_FR,
        RelevantIndustryEntity.INDUSTRY_IT_IT,
        RelevantIndustryEntity.INDUSTRY_LOCALIZED,
        RelevantIndustryEntity.INDUSTRY_NL_NL,
        RelevantIndustryEntity.INDUSTRY_PT_BR,
        RelevantIndustryEntity.INDUSTRY_ZH_CN,
        RelevantIndustryEntity.LAST_MODIFIED_BY,
        RelevantIndustryEntity.LAST_MODIFIED_DATE_TIME,
        RelevantIndustryEntity.MDF_SYSTEM_RECORD_STATUS,
        RelevantIndustryEntity.STATUS,
        RelevantIndustryEntity.SUB_MODULE,
        RelevantIndustryEntity.CREATED_BY_NAV,
        RelevantIndustryEntity.INDUSTRY_TRANSLATION_TEXT_NAV,
        RelevantIndustryEntity.LAST_MODIFIED_BY_NAV,
        RelevantIndustryEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
        RelevantIndustryEntity.STATUS_NAV,
        RelevantIndustryEntity.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    RelevantIndustryEntity.ALL_FIELDS = new core_1.AllFields('*', RelevantIndustryEntity);
    /**
     * All key fields of the RelevantIndustryEntity entity.
     */
    RelevantIndustryEntity._keyFields = [RelevantIndustryEntity.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property RelevantIndustryEntity.
     */
    RelevantIndustryEntity._keys = RelevantIndustryEntity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(RelevantIndustryEntity = exports.RelevantIndustryEntity || (exports.RelevantIndustryEntity = {}));
exports.RelevantIndustryEntity = RelevantIndustryEntity;
//# sourceMappingURL=RelevantIndustryEntity.js.map