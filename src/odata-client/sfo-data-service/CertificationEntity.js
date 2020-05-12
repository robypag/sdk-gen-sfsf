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
var CertificationEntityRequestBuilder_1 = require("./CertificationEntityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CertificationEntity" of service "SFOData".
 */
var CertificationEntity = /** @class */ (function (_super) {
    __extends(CertificationEntity, _super);
    function CertificationEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CertificationEntity`.
     * @returns A builder that constructs instances of entity type `CertificationEntity`.
     */
    CertificationEntity.builder = function () {
        return core_1.Entity.entityBuilder(CertificationEntity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CertificationEntity` entity type.
     * @returns A `CertificationEntity` request builder.
     */
    CertificationEntity.requestBuilder = function () {
        return new CertificationEntityRequestBuilder_1.CertificationEntityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CertificationEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CertificationEntity`.
     */
    CertificationEntity.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, CertificationEntity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CertificationEntity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CertificationEntity.
     */
    CertificationEntity._entityName = 'CertificationEntity';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CertificationEntity.
     */
    CertificationEntity._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CertificationEntity._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CertificationEntity;
}(core_1.Entity));
exports.CertificationEntity = CertificationEntity;
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (CertificationEntity) {
    /**
     * Static representation of the [[certificationDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.CERTIFICATION_DE_DE = new core_1.StringField('certification_de_DE', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[certificationDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.CERTIFICATION_DEFAULT_VALUE = new core_1.StringField('certification_defaultValue', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[certificationEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.CERTIFICATION_EN_DEBUG = new core_1.StringField('certification_en_DEBUG', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[certificationEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.CERTIFICATION_EN_GB = new core_1.StringField('certification_en_GB', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[certificationEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.CERTIFICATION_EN_US = new core_1.StringField('certification_en_US', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[certificationEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.CERTIFICATION_ES_ES = new core_1.StringField('certification_es_ES', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[certificationEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.CERTIFICATION_ES_MX = new core_1.StringField('certification_es_MX', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[certificationFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.CERTIFICATION_FR_CA = new core_1.StringField('certification_fr_CA', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[certificationFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.CERTIFICATION_FR_FR = new core_1.StringField('certification_fr_FR', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[certificationItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.CERTIFICATION_IT_IT = new core_1.StringField('certification_it_IT', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[certificationLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.CERTIFICATION_LOCALIZED = new core_1.StringField('certification_localized', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[certificationNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.CERTIFICATION_NL_NL = new core_1.StringField('certification_nl_NL', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[certificationPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.CERTIFICATION_PT_BR = new core_1.StringField('certification_pt_BR', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[certificationZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.CERTIFICATION_ZH_CN = new core_1.StringField('certification_zh_CN', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.CREATED_BY = new core_1.StringField('createdBy', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', CertificationEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.DESCRIPTION_DE_DE = new core_1.StringField('description_de_DE', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.DESCRIPTION_DEFAULT_VALUE = new core_1.StringField('description_defaultValue', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.DESCRIPTION_EN_DEBUG = new core_1.StringField('description_en_DEBUG', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.DESCRIPTION_EN_GB = new core_1.StringField('description_en_GB', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.DESCRIPTION_EN_US = new core_1.StringField('description_en_US', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.DESCRIPTION_ES_ES = new core_1.StringField('description_es_ES', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.DESCRIPTION_ES_MX = new core_1.StringField('description_es_MX', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.DESCRIPTION_FR_CA = new core_1.StringField('description_fr_CA', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.DESCRIPTION_FR_FR = new core_1.StringField('description_fr_FR', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.DESCRIPTION_IT_IT = new core_1.StringField('description_it_IT', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.DESCRIPTION_LOCALIZED = new core_1.StringField('description_localized', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.DESCRIPTION_NL_NL = new core_1.StringField('description_nl_NL', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.DESCRIPTION_PT_BR = new core_1.StringField('description_pt_BR', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.DESCRIPTION_ZH_CN = new core_1.StringField('description_zh_CN', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.EXTERNAL_CODE = new core_1.StringField('externalCode', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', CertificationEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.STATUS = new core_1.StringField('status', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.SUB_MODULE = new core_1.StringField('subModule', CertificationEntity, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[certificationTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.CERTIFICATION_TRANSLATION_TEXT_NAV = new core_1.Link('certificationTranslationTextNav', CertificationEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', CertificationEntity, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.DESCRIPTION_TRANSLATION_TEXT_NAV = new core_1.Link('descriptionTranslationTextNav', CertificationEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', CertificationEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', CertificationEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.STATUS_NAV = new core_1.OneToOneLink('statusNav', CertificationEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationEntity.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', CertificationEntity, WfRequest_1.WfRequest);
    /**
     * All fields of the CertificationEntity entity.
     */
    CertificationEntity._allFields = [
        CertificationEntity.CERTIFICATION_DE_DE,
        CertificationEntity.CERTIFICATION_DEFAULT_VALUE,
        CertificationEntity.CERTIFICATION_EN_DEBUG,
        CertificationEntity.CERTIFICATION_EN_GB,
        CertificationEntity.CERTIFICATION_EN_US,
        CertificationEntity.CERTIFICATION_ES_ES,
        CertificationEntity.CERTIFICATION_ES_MX,
        CertificationEntity.CERTIFICATION_FR_CA,
        CertificationEntity.CERTIFICATION_FR_FR,
        CertificationEntity.CERTIFICATION_IT_IT,
        CertificationEntity.CERTIFICATION_LOCALIZED,
        CertificationEntity.CERTIFICATION_NL_NL,
        CertificationEntity.CERTIFICATION_PT_BR,
        CertificationEntity.CERTIFICATION_ZH_CN,
        CertificationEntity.CREATED_BY,
        CertificationEntity.CREATED_DATE_TIME,
        CertificationEntity.DESCRIPTION_DE_DE,
        CertificationEntity.DESCRIPTION_DEFAULT_VALUE,
        CertificationEntity.DESCRIPTION_EN_DEBUG,
        CertificationEntity.DESCRIPTION_EN_GB,
        CertificationEntity.DESCRIPTION_EN_US,
        CertificationEntity.DESCRIPTION_ES_ES,
        CertificationEntity.DESCRIPTION_ES_MX,
        CertificationEntity.DESCRIPTION_FR_CA,
        CertificationEntity.DESCRIPTION_FR_FR,
        CertificationEntity.DESCRIPTION_IT_IT,
        CertificationEntity.DESCRIPTION_LOCALIZED,
        CertificationEntity.DESCRIPTION_NL_NL,
        CertificationEntity.DESCRIPTION_PT_BR,
        CertificationEntity.DESCRIPTION_ZH_CN,
        CertificationEntity.EXTERNAL_CODE,
        CertificationEntity.LAST_MODIFIED_BY,
        CertificationEntity.LAST_MODIFIED_DATE_TIME,
        CertificationEntity.MDF_SYSTEM_RECORD_STATUS,
        CertificationEntity.STATUS,
        CertificationEntity.SUB_MODULE,
        CertificationEntity.CERTIFICATION_TRANSLATION_TEXT_NAV,
        CertificationEntity.CREATED_BY_NAV,
        CertificationEntity.DESCRIPTION_TRANSLATION_TEXT_NAV,
        CertificationEntity.LAST_MODIFIED_BY_NAV,
        CertificationEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
        CertificationEntity.STATUS_NAV,
        CertificationEntity.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    CertificationEntity.ALL_FIELDS = new core_1.AllFields('*', CertificationEntity);
    /**
     * All key fields of the CertificationEntity entity.
     */
    CertificationEntity._keyFields = [CertificationEntity.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property CertificationEntity.
     */
    CertificationEntity._keys = CertificationEntity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CertificationEntity = exports.CertificationEntity || (exports.CertificationEntity = {}));
exports.CertificationEntity = CertificationEntity;
//# sourceMappingURL=CertificationEntity.js.map