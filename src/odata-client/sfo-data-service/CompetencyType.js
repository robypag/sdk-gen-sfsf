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
var CompetencyTypeRequestBuilder_1 = require("./CompetencyTypeRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CompetencyType" of service "SFOData".
 */
var CompetencyType = /** @class */ (function (_super) {
    __extends(CompetencyType, _super);
    function CompetencyType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CompetencyType`.
     * @returns A builder that constructs instances of entity type `CompetencyType`.
     */
    CompetencyType.builder = function () {
        return core_1.Entity.entityBuilder(CompetencyType);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CompetencyType` entity type.
     * @returns A `CompetencyType` request builder.
     */
    CompetencyType.requestBuilder = function () {
        return new CompetencyTypeRequestBuilder_1.CompetencyTypeRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CompetencyType`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CompetencyType`.
     */
    CompetencyType.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, CompetencyType);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CompetencyType.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CompetencyType.
     */
    CompetencyType._entityName = 'CompetencyType';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CompetencyType.
     */
    CompetencyType._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CompetencyType._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CompetencyType;
}(core_1.Entity));
exports.CompetencyType = CompetencyType;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var WfRequest_1 = require("./WfRequest");
(function (CompetencyType) {
    /**
     * Static representation of the [[guid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyType.GUID = new core_1.BigNumberField('GUID', CompetencyType, 'Edm.Int64');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyType.CREATED_BY = new core_1.StringField('createdBy', CompetencyType, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyType.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', CompetencyType, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyType.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', CompetencyType, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyType.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', CompetencyType, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyType.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', CompetencyType, 'Edm.String');
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyType.NAME_DE_DE = new core_1.StringField('name_de_DE', CompetencyType, 'Edm.String');
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyType.NAME_DEFAULT_VALUE = new core_1.StringField('name_defaultValue', CompetencyType, 'Edm.String');
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyType.NAME_EN_DEBUG = new core_1.StringField('name_en_DEBUG', CompetencyType, 'Edm.String');
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyType.NAME_EN_GB = new core_1.StringField('name_en_GB', CompetencyType, 'Edm.String');
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyType.NAME_EN_US = new core_1.StringField('name_en_US', CompetencyType, 'Edm.String');
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyType.NAME_ES_ES = new core_1.StringField('name_es_ES', CompetencyType, 'Edm.String');
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyType.NAME_ES_MX = new core_1.StringField('name_es_MX', CompetencyType, 'Edm.String');
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyType.NAME_FR_CA = new core_1.StringField('name_fr_CA', CompetencyType, 'Edm.String');
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyType.NAME_FR_FR = new core_1.StringField('name_fr_FR', CompetencyType, 'Edm.String');
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyType.NAME_IT_IT = new core_1.StringField('name_it_IT', CompetencyType, 'Edm.String');
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyType.NAME_LOCALIZED = new core_1.StringField('name_localized', CompetencyType, 'Edm.String');
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyType.NAME_NL_NL = new core_1.StringField('name_nl_NL', CompetencyType, 'Edm.String');
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyType.NAME_PT_BR = new core_1.StringField('name_pt_BR', CompetencyType, 'Edm.String');
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyType.NAME_ZH_CN = new core_1.StringField('name_zh_CN', CompetencyType, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyType.SUB_MODULE = new core_1.StringField('subModule', CompetencyType, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyType.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', CompetencyType, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyType.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', CompetencyType, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyType.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', CompetencyType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyType.NAME_TRANSLATION_TEXT_NAV = new core_1.Link('nameTranslationTextNav', CompetencyType, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyType.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', CompetencyType, WfRequest_1.WfRequest);
    /**
     * All fields of the CompetencyType entity.
     */
    CompetencyType._allFields = [
        CompetencyType.GUID,
        CompetencyType.CREATED_BY,
        CompetencyType.CREATED_DATE_TIME,
        CompetencyType.LAST_MODIFIED_BY,
        CompetencyType.LAST_MODIFIED_DATE_TIME,
        CompetencyType.MDF_SYSTEM_RECORD_STATUS,
        CompetencyType.NAME_DE_DE,
        CompetencyType.NAME_DEFAULT_VALUE,
        CompetencyType.NAME_EN_DEBUG,
        CompetencyType.NAME_EN_GB,
        CompetencyType.NAME_EN_US,
        CompetencyType.NAME_ES_ES,
        CompetencyType.NAME_ES_MX,
        CompetencyType.NAME_FR_CA,
        CompetencyType.NAME_FR_FR,
        CompetencyType.NAME_IT_IT,
        CompetencyType.NAME_LOCALIZED,
        CompetencyType.NAME_NL_NL,
        CompetencyType.NAME_PT_BR,
        CompetencyType.NAME_ZH_CN,
        CompetencyType.SUB_MODULE,
        CompetencyType.CREATED_BY_NAV,
        CompetencyType.LAST_MODIFIED_BY_NAV,
        CompetencyType.MDF_SYSTEM_RECORD_STATUS_NAV,
        CompetencyType.NAME_TRANSLATION_TEXT_NAV,
        CompetencyType.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    CompetencyType.ALL_FIELDS = new core_1.AllFields('*', CompetencyType);
    /**
     * All key fields of the CompetencyType entity.
     */
    CompetencyType._keyFields = [CompetencyType.GUID];
    /**
     * Mapping of all key field names to the respective static field property CompetencyType.
     */
    CompetencyType._keys = CompetencyType._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CompetencyType = exports.CompetencyType || (exports.CompetencyType = {}));
exports.CompetencyType = CompetencyType;
//# sourceMappingURL=CompetencyType.js.map