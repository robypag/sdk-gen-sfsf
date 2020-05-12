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
var EducationMajorEntityRequestBuilder_1 = require("./EducationMajorEntityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EducationMajorEntity" of service "SFOData".
 */
var EducationMajorEntity = /** @class */ (function (_super) {
    __extends(EducationMajorEntity, _super);
    function EducationMajorEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EducationMajorEntity`.
     * @returns A builder that constructs instances of entity type `EducationMajorEntity`.
     */
    EducationMajorEntity.builder = function () {
        return core_1.Entity.entityBuilder(EducationMajorEntity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EducationMajorEntity` entity type.
     * @returns A `EducationMajorEntity` request builder.
     */
    EducationMajorEntity.requestBuilder = function () {
        return new EducationMajorEntityRequestBuilder_1.EducationMajorEntityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EducationMajorEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EducationMajorEntity`.
     */
    EducationMajorEntity.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EducationMajorEntity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EducationMajorEntity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EducationMajorEntity.
     */
    EducationMajorEntity._entityName = 'EducationMajorEntity';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EducationMajorEntity.
     */
    EducationMajorEntity._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EducationMajorEntity._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EducationMajorEntity;
}(core_1.Entity));
exports.EducationMajorEntity = EducationMajorEntity;
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (EducationMajorEntity) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorEntity.CREATED_BY = new core_1.StringField('createdBy', EducationMajorEntity, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorEntity.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EducationMajorEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorEntity.EXTERNAL_CODE = new core_1.StringField('externalCode', EducationMajorEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorEntity.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EducationMajorEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorEntity.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EducationMajorEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[majorDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorEntity.MAJOR_DE_DE = new core_1.StringField('major_de_DE', EducationMajorEntity, 'Edm.String');
    /**
     * Static representation of the [[majorDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorEntity.MAJOR_DEFAULT_VALUE = new core_1.StringField('major_defaultValue', EducationMajorEntity, 'Edm.String');
    /**
     * Static representation of the [[majorEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorEntity.MAJOR_EN_DEBUG = new core_1.StringField('major_en_DEBUG', EducationMajorEntity, 'Edm.String');
    /**
     * Static representation of the [[majorEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorEntity.MAJOR_EN_GB = new core_1.StringField('major_en_GB', EducationMajorEntity, 'Edm.String');
    /**
     * Static representation of the [[majorEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorEntity.MAJOR_EN_US = new core_1.StringField('major_en_US', EducationMajorEntity, 'Edm.String');
    /**
     * Static representation of the [[majorEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorEntity.MAJOR_ES_ES = new core_1.StringField('major_es_ES', EducationMajorEntity, 'Edm.String');
    /**
     * Static representation of the [[majorEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorEntity.MAJOR_ES_MX = new core_1.StringField('major_es_MX', EducationMajorEntity, 'Edm.String');
    /**
     * Static representation of the [[majorFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorEntity.MAJOR_FR_CA = new core_1.StringField('major_fr_CA', EducationMajorEntity, 'Edm.String');
    /**
     * Static representation of the [[majorFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorEntity.MAJOR_FR_FR = new core_1.StringField('major_fr_FR', EducationMajorEntity, 'Edm.String');
    /**
     * Static representation of the [[majorItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorEntity.MAJOR_IT_IT = new core_1.StringField('major_it_IT', EducationMajorEntity, 'Edm.String');
    /**
     * Static representation of the [[majorLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorEntity.MAJOR_LOCALIZED = new core_1.StringField('major_localized', EducationMajorEntity, 'Edm.String');
    /**
     * Static representation of the [[majorNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorEntity.MAJOR_NL_NL = new core_1.StringField('major_nl_NL', EducationMajorEntity, 'Edm.String');
    /**
     * Static representation of the [[majorPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorEntity.MAJOR_PT_BR = new core_1.StringField('major_pt_BR', EducationMajorEntity, 'Edm.String');
    /**
     * Static representation of the [[majorZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorEntity.MAJOR_ZH_CN = new core_1.StringField('major_zh_CN', EducationMajorEntity, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorEntity.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EducationMajorEntity, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorEntity.STATUS = new core_1.StringField('status', EducationMajorEntity, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorEntity.SUB_MODULE = new core_1.StringField('subModule', EducationMajorEntity, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorEntity.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', EducationMajorEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorEntity.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', EducationMajorEntity, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[majorTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorEntity.MAJOR_TRANSLATION_TEXT_NAV = new core_1.Link('majorTranslationTextNav', EducationMajorEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorEntity.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', EducationMajorEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorEntity.STATUS_NAV = new core_1.OneToOneLink('statusNav', EducationMajorEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorEntity.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', EducationMajorEntity, WfRequest_1.WfRequest);
    /**
     * All fields of the EducationMajorEntity entity.
     */
    EducationMajorEntity._allFields = [
        EducationMajorEntity.CREATED_BY,
        EducationMajorEntity.CREATED_DATE_TIME,
        EducationMajorEntity.EXTERNAL_CODE,
        EducationMajorEntity.LAST_MODIFIED_BY,
        EducationMajorEntity.LAST_MODIFIED_DATE_TIME,
        EducationMajorEntity.MAJOR_DE_DE,
        EducationMajorEntity.MAJOR_DEFAULT_VALUE,
        EducationMajorEntity.MAJOR_EN_DEBUG,
        EducationMajorEntity.MAJOR_EN_GB,
        EducationMajorEntity.MAJOR_EN_US,
        EducationMajorEntity.MAJOR_ES_ES,
        EducationMajorEntity.MAJOR_ES_MX,
        EducationMajorEntity.MAJOR_FR_CA,
        EducationMajorEntity.MAJOR_FR_FR,
        EducationMajorEntity.MAJOR_IT_IT,
        EducationMajorEntity.MAJOR_LOCALIZED,
        EducationMajorEntity.MAJOR_NL_NL,
        EducationMajorEntity.MAJOR_PT_BR,
        EducationMajorEntity.MAJOR_ZH_CN,
        EducationMajorEntity.MDF_SYSTEM_RECORD_STATUS,
        EducationMajorEntity.STATUS,
        EducationMajorEntity.SUB_MODULE,
        EducationMajorEntity.CREATED_BY_NAV,
        EducationMajorEntity.LAST_MODIFIED_BY_NAV,
        EducationMajorEntity.MAJOR_TRANSLATION_TEXT_NAV,
        EducationMajorEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
        EducationMajorEntity.STATUS_NAV,
        EducationMajorEntity.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    EducationMajorEntity.ALL_FIELDS = new core_1.AllFields('*', EducationMajorEntity);
    /**
     * All key fields of the EducationMajorEntity entity.
     */
    EducationMajorEntity._keyFields = [EducationMajorEntity.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property EducationMajorEntity.
     */
    EducationMajorEntity._keys = EducationMajorEntity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EducationMajorEntity = exports.EducationMajorEntity || (exports.EducationMajorEntity = {}));
exports.EducationMajorEntity = EducationMajorEntity;
//# sourceMappingURL=EducationMajorEntity.js.map