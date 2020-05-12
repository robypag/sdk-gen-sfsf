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
var PhysicalReqEntityRequestBuilder_1 = require("./PhysicalReqEntityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PhysicalReqEntity" of service "SFOData".
 */
var PhysicalReqEntity = /** @class */ (function (_super) {
    __extends(PhysicalReqEntity, _super);
    function PhysicalReqEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PhysicalReqEntity`.
     * @returns A builder that constructs instances of entity type `PhysicalReqEntity`.
     */
    PhysicalReqEntity.builder = function () {
        return core_1.Entity.entityBuilder(PhysicalReqEntity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PhysicalReqEntity` entity type.
     * @returns A `PhysicalReqEntity` request builder.
     */
    PhysicalReqEntity.requestBuilder = function () {
        return new PhysicalReqEntityRequestBuilder_1.PhysicalReqEntityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PhysicalReqEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PhysicalReqEntity`.
     */
    PhysicalReqEntity.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PhysicalReqEntity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PhysicalReqEntity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PhysicalReqEntity.
     */
    PhysicalReqEntity._entityName = 'PhysicalReqEntity';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PhysicalReqEntity.
     */
    PhysicalReqEntity._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PhysicalReqEntity._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PhysicalReqEntity;
}(core_1.Entity));
exports.PhysicalReqEntity = PhysicalReqEntity;
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (PhysicalReqEntity) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.CREATED_BY = new core_1.StringField('createdBy', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PhysicalReqEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.DESCRIPTION_DE_DE = new core_1.StringField('description_de_DE', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.DESCRIPTION_DEFAULT_VALUE = new core_1.StringField('description_defaultValue', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.DESCRIPTION_EN_DEBUG = new core_1.StringField('description_en_DEBUG', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.DESCRIPTION_EN_GB = new core_1.StringField('description_en_GB', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.DESCRIPTION_EN_US = new core_1.StringField('description_en_US', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.DESCRIPTION_ES_ES = new core_1.StringField('description_es_ES', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.DESCRIPTION_ES_MX = new core_1.StringField('description_es_MX', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.DESCRIPTION_FR_CA = new core_1.StringField('description_fr_CA', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.DESCRIPTION_FR_FR = new core_1.StringField('description_fr_FR', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.DESCRIPTION_IT_IT = new core_1.StringField('description_it_IT', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.DESCRIPTION_LOCALIZED = new core_1.StringField('description_localized', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.DESCRIPTION_NL_NL = new core_1.StringField('description_nl_NL', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.DESCRIPTION_PT_BR = new core_1.StringField('description_pt_BR', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.DESCRIPTION_ZH_CN = new core_1.StringField('description_zh_CN', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.EXTERNAL_CODE = new core_1.StringField('externalCode', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PhysicalReqEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[requirementDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.REQUIREMENT_DE_DE = new core_1.StringField('requirement_de_DE', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[requirementDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.REQUIREMENT_DEFAULT_VALUE = new core_1.StringField('requirement_defaultValue', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[requirementEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.REQUIREMENT_EN_DEBUG = new core_1.StringField('requirement_en_DEBUG', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[requirementEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.REQUIREMENT_EN_GB = new core_1.StringField('requirement_en_GB', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[requirementEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.REQUIREMENT_EN_US = new core_1.StringField('requirement_en_US', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[requirementEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.REQUIREMENT_ES_ES = new core_1.StringField('requirement_es_ES', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[requirementEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.REQUIREMENT_ES_MX = new core_1.StringField('requirement_es_MX', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[requirementFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.REQUIREMENT_FR_CA = new core_1.StringField('requirement_fr_CA', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[requirementFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.REQUIREMENT_FR_FR = new core_1.StringField('requirement_fr_FR', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[requirementItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.REQUIREMENT_IT_IT = new core_1.StringField('requirement_it_IT', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[requirementLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.REQUIREMENT_LOCALIZED = new core_1.StringField('requirement_localized', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[requirementNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.REQUIREMENT_NL_NL = new core_1.StringField('requirement_nl_NL', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[requirementPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.REQUIREMENT_PT_BR = new core_1.StringField('requirement_pt_BR', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[requirementZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.REQUIREMENT_ZH_CN = new core_1.StringField('requirement_zh_CN', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.STATUS = new core_1.StringField('status', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.SUB_MODULE = new core_1.StringField('subModule', PhysicalReqEntity, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PhysicalReqEntity, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.DESCRIPTION_TRANSLATION_TEXT_NAV = new core_1.Link('descriptionTranslationTextNav', PhysicalReqEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PhysicalReqEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PhysicalReqEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[requirementTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.REQUIREMENT_TRANSLATION_TEXT_NAV = new core_1.Link('requirementTranslationTextNav', PhysicalReqEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.STATUS_NAV = new core_1.OneToOneLink('statusNav', PhysicalReqEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqEntity.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', PhysicalReqEntity, WfRequest_1.WfRequest);
    /**
     * All fields of the PhysicalReqEntity entity.
     */
    PhysicalReqEntity._allFields = [
        PhysicalReqEntity.CREATED_BY,
        PhysicalReqEntity.CREATED_DATE_TIME,
        PhysicalReqEntity.DESCRIPTION_DE_DE,
        PhysicalReqEntity.DESCRIPTION_DEFAULT_VALUE,
        PhysicalReqEntity.DESCRIPTION_EN_DEBUG,
        PhysicalReqEntity.DESCRIPTION_EN_GB,
        PhysicalReqEntity.DESCRIPTION_EN_US,
        PhysicalReqEntity.DESCRIPTION_ES_ES,
        PhysicalReqEntity.DESCRIPTION_ES_MX,
        PhysicalReqEntity.DESCRIPTION_FR_CA,
        PhysicalReqEntity.DESCRIPTION_FR_FR,
        PhysicalReqEntity.DESCRIPTION_IT_IT,
        PhysicalReqEntity.DESCRIPTION_LOCALIZED,
        PhysicalReqEntity.DESCRIPTION_NL_NL,
        PhysicalReqEntity.DESCRIPTION_PT_BR,
        PhysicalReqEntity.DESCRIPTION_ZH_CN,
        PhysicalReqEntity.EXTERNAL_CODE,
        PhysicalReqEntity.LAST_MODIFIED_BY,
        PhysicalReqEntity.LAST_MODIFIED_DATE_TIME,
        PhysicalReqEntity.MDF_SYSTEM_RECORD_STATUS,
        PhysicalReqEntity.REQUIREMENT_DE_DE,
        PhysicalReqEntity.REQUIREMENT_DEFAULT_VALUE,
        PhysicalReqEntity.REQUIREMENT_EN_DEBUG,
        PhysicalReqEntity.REQUIREMENT_EN_GB,
        PhysicalReqEntity.REQUIREMENT_EN_US,
        PhysicalReqEntity.REQUIREMENT_ES_ES,
        PhysicalReqEntity.REQUIREMENT_ES_MX,
        PhysicalReqEntity.REQUIREMENT_FR_CA,
        PhysicalReqEntity.REQUIREMENT_FR_FR,
        PhysicalReqEntity.REQUIREMENT_IT_IT,
        PhysicalReqEntity.REQUIREMENT_LOCALIZED,
        PhysicalReqEntity.REQUIREMENT_NL_NL,
        PhysicalReqEntity.REQUIREMENT_PT_BR,
        PhysicalReqEntity.REQUIREMENT_ZH_CN,
        PhysicalReqEntity.STATUS,
        PhysicalReqEntity.SUB_MODULE,
        PhysicalReqEntity.CREATED_BY_NAV,
        PhysicalReqEntity.DESCRIPTION_TRANSLATION_TEXT_NAV,
        PhysicalReqEntity.LAST_MODIFIED_BY_NAV,
        PhysicalReqEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
        PhysicalReqEntity.REQUIREMENT_TRANSLATION_TEXT_NAV,
        PhysicalReqEntity.STATUS_NAV,
        PhysicalReqEntity.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    PhysicalReqEntity.ALL_FIELDS = new core_1.AllFields('*', PhysicalReqEntity);
    /**
     * All key fields of the PhysicalReqEntity entity.
     */
    PhysicalReqEntity._keyFields = [PhysicalReqEntity.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property PhysicalReqEntity.
     */
    PhysicalReqEntity._keys = PhysicalReqEntity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PhysicalReqEntity = exports.PhysicalReqEntity || (exports.PhysicalReqEntity = {}));
exports.PhysicalReqEntity = PhysicalReqEntity;
//# sourceMappingURL=PhysicalReqEntity.js.map