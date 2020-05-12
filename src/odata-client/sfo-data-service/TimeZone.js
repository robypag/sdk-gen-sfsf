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
var TimeZoneRequestBuilder_1 = require("./TimeZoneRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TimeZone" of service "SFOData".
 */
var TimeZone = /** @class */ (function (_super) {
    __extends(TimeZone, _super);
    function TimeZone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TimeZone`.
     * @returns A builder that constructs instances of entity type `TimeZone`.
     */
    TimeZone.builder = function () {
        return core_1.Entity.entityBuilder(TimeZone);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TimeZone` entity type.
     * @returns A `TimeZone` request builder.
     */
    TimeZone.requestBuilder = function () {
        return new TimeZoneRequestBuilder_1.TimeZoneRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeZone`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeZone`.
     */
    TimeZone.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TimeZone);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TimeZone.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TimeZone.
     */
    TimeZone._entityName = 'TimeZone';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeZone.
     */
    TimeZone._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TimeZone._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return TimeZone;
}(core_1.Entity));
exports.TimeZone = TimeZone;
var Country_1 = require("./Country");
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var WfRequest_1 = require("./WfRequest");
(function (TimeZone) {
    /**
     * Static representation of the [[comment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.COMMENT = new core_1.StringField('comment', TimeZone, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.COUNTRY = new core_1.StringField('country', TimeZone, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.CREATED_BY = new core_1.StringField('createdBy', TimeZone, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', TimeZone, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.EFFECTIVE_START_DATE = new core_1.DateField('effectiveStartDate', TimeZone, 'Edm.DateTime');
    /**
     * Static representation of the [[effectiveStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.EFFECTIVE_STATUS = new core_1.StringField('effectiveStatus', TimeZone, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.EXTERNAL_CODE = new core_1.StringField('externalCode', TimeZone, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', TimeZone, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', TimeZone, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.MDF_SYSTEM_EFFECTIVE_END_DATE = new core_1.DateField('mdfSystemEffectiveEndDate', TimeZone, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', TimeZone, 'Edm.String');
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.NAME_DE_DE = new core_1.StringField('name_de_DE', TimeZone, 'Edm.String');
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.NAME_DEFAULT_VALUE = new core_1.StringField('name_defaultValue', TimeZone, 'Edm.String');
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.NAME_EN_DEBUG = new core_1.StringField('name_en_DEBUG', TimeZone, 'Edm.String');
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.NAME_EN_GB = new core_1.StringField('name_en_GB', TimeZone, 'Edm.String');
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.NAME_EN_US = new core_1.StringField('name_en_US', TimeZone, 'Edm.String');
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.NAME_ES_ES = new core_1.StringField('name_es_ES', TimeZone, 'Edm.String');
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.NAME_ES_MX = new core_1.StringField('name_es_MX', TimeZone, 'Edm.String');
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.NAME_FR_CA = new core_1.StringField('name_fr_CA', TimeZone, 'Edm.String');
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.NAME_FR_FR = new core_1.StringField('name_fr_FR', TimeZone, 'Edm.String');
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.NAME_IT_IT = new core_1.StringField('name_it_IT', TimeZone, 'Edm.String');
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.NAME_LOCALIZED = new core_1.StringField('name_localized', TimeZone, 'Edm.String');
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.NAME_NL_NL = new core_1.StringField('name_nl_NL', TimeZone, 'Edm.String');
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.NAME_PT_BR = new core_1.StringField('name_pt_BR', TimeZone, 'Edm.String');
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.NAME_ZH_CN = new core_1.StringField('name_zh_CN', TimeZone, 'Edm.String');
    /**
     * Static representation of the [[supported]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.SUPPORTED = new core_1.BooleanField('supported', TimeZone, 'Edm.Boolean');
    /**
     * Static representation of the [[utcDstOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.UTC_DST_OFFSET = new core_1.StringField('utcDstOffset', TimeZone, 'Edm.String');
    /**
     * Static representation of the [[utcOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.UTC_OFFSET = new core_1.StringField('utcOffset', TimeZone, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', TimeZone, Country_1.Country);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', TimeZone, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.EFFECTIVE_STATUS_NAV = new core_1.OneToOneLink('effectiveStatusNav', TimeZone, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', TimeZone, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', TimeZone, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.NAME_TRANSLATION_TEXT_NAV = new core_1.Link('nameTranslationTextNav', TimeZone, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeZone.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', TimeZone, WfRequest_1.WfRequest);
    /**
     * All fields of the TimeZone entity.
     */
    TimeZone._allFields = [
        TimeZone.COMMENT,
        TimeZone.COUNTRY,
        TimeZone.CREATED_BY,
        TimeZone.CREATED_DATE_TIME,
        TimeZone.EFFECTIVE_START_DATE,
        TimeZone.EFFECTIVE_STATUS,
        TimeZone.EXTERNAL_CODE,
        TimeZone.LAST_MODIFIED_BY,
        TimeZone.LAST_MODIFIED_DATE_TIME,
        TimeZone.MDF_SYSTEM_EFFECTIVE_END_DATE,
        TimeZone.MDF_SYSTEM_RECORD_STATUS,
        TimeZone.NAME_DE_DE,
        TimeZone.NAME_DEFAULT_VALUE,
        TimeZone.NAME_EN_DEBUG,
        TimeZone.NAME_EN_GB,
        TimeZone.NAME_EN_US,
        TimeZone.NAME_ES_ES,
        TimeZone.NAME_ES_MX,
        TimeZone.NAME_FR_CA,
        TimeZone.NAME_FR_FR,
        TimeZone.NAME_IT_IT,
        TimeZone.NAME_LOCALIZED,
        TimeZone.NAME_NL_NL,
        TimeZone.NAME_PT_BR,
        TimeZone.NAME_ZH_CN,
        TimeZone.SUPPORTED,
        TimeZone.UTC_DST_OFFSET,
        TimeZone.UTC_OFFSET,
        TimeZone.COUNTRY_NAV,
        TimeZone.CREATED_BY_NAV,
        TimeZone.EFFECTIVE_STATUS_NAV,
        TimeZone.LAST_MODIFIED_BY_NAV,
        TimeZone.MDF_SYSTEM_RECORD_STATUS_NAV,
        TimeZone.NAME_TRANSLATION_TEXT_NAV,
        TimeZone.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    TimeZone.ALL_FIELDS = new core_1.AllFields('*', TimeZone);
    /**
     * All key fields of the TimeZone entity.
     */
    TimeZone._keyFields = [TimeZone.EFFECTIVE_START_DATE, TimeZone.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property TimeZone.
     */
    TimeZone._keys = TimeZone._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TimeZone = exports.TimeZone || (exports.TimeZone = {}));
exports.TimeZone = TimeZone;
//# sourceMappingURL=TimeZone.js.map