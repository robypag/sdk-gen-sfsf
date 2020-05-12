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
var HolidayRequestBuilder_1 = require("./HolidayRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Holiday" of service "SFOData".
 */
var Holiday = /** @class */ (function (_super) {
    __extends(Holiday, _super);
    function Holiday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Holiday`.
     * @returns A builder that constructs instances of entity type `Holiday`.
     */
    Holiday.builder = function () {
        return core_1.Entity.entityBuilder(Holiday);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Holiday` entity type.
     * @returns A `Holiday` request builder.
     */
    Holiday.requestBuilder = function () {
        return new HolidayRequestBuilder_1.HolidayRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Holiday`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Holiday`.
     */
    Holiday.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Holiday);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Holiday.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Holiday.
     */
    Holiday._entityName = 'Holiday';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Holiday.
     */
    Holiday._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Holiday._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Holiday;
}(core_1.Entity));
exports.Holiday = Holiday;
var Country_1 = require("./Country");
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var WfRequest_1 = require("./WfRequest");
(function (Holiday) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.COUNTRY = new core_1.StringField('country', Holiday, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.CREATED_BY = new core_1.StringField('createdBy', Holiday, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', Holiday, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[holidayCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.HOLIDAY_CODE = new core_1.StringField('holidayCode', Holiday, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', Holiday, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', Holiday, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', Holiday, 'Edm.String');
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_DE_DE = new core_1.StringField('name_de_DE', Holiday, 'Edm.String');
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_DEFAULT_VALUE = new core_1.StringField('name_defaultValue', Holiday, 'Edm.String');
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_EN_DEBUG = new core_1.StringField('name_en_DEBUG', Holiday, 'Edm.String');
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_EN_GB = new core_1.StringField('name_en_GB', Holiday, 'Edm.String');
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_EN_US = new core_1.StringField('name_en_US', Holiday, 'Edm.String');
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_ES_ES = new core_1.StringField('name_es_ES', Holiday, 'Edm.String');
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_ES_MX = new core_1.StringField('name_es_MX', Holiday, 'Edm.String');
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_FR_CA = new core_1.StringField('name_fr_CA', Holiday, 'Edm.String');
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_FR_FR = new core_1.StringField('name_fr_FR', Holiday, 'Edm.String');
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_IT_IT = new core_1.StringField('name_it_IT', Holiday, 'Edm.String');
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_LOCALIZED = new core_1.StringField('name_localized', Holiday, 'Edm.String');
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_NL_NL = new core_1.StringField('name_nl_NL', Holiday, 'Edm.String');
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_PT_BR = new core_1.StringField('name_pt_BR', Holiday, 'Edm.String');
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_ZH_CN = new core_1.StringField('name_zh_CN', Holiday, 'Edm.String');
    /**
     * Static representation of the [[oldName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.OLD_NAME = new core_1.StringField('oldName', Holiday, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.COUNTRY_NAV = new core_1.Link('countryNav', Holiday, Country_1.Country);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', Holiday, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', Holiday, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', Holiday, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_TRANSLATION_TEXT_NAV = new core_1.Link('nameTranslationTextNav', Holiday, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', Holiday, WfRequest_1.WfRequest);
    /**
     * All fields of the Holiday entity.
     */
    Holiday._allFields = [
        Holiday.COUNTRY,
        Holiday.CREATED_BY,
        Holiday.CREATED_DATE_TIME,
        Holiday.HOLIDAY_CODE,
        Holiday.LAST_MODIFIED_BY,
        Holiday.LAST_MODIFIED_DATE_TIME,
        Holiday.MDF_SYSTEM_RECORD_STATUS,
        Holiday.NAME_DE_DE,
        Holiday.NAME_DEFAULT_VALUE,
        Holiday.NAME_EN_DEBUG,
        Holiday.NAME_EN_GB,
        Holiday.NAME_EN_US,
        Holiday.NAME_ES_ES,
        Holiday.NAME_ES_MX,
        Holiday.NAME_FR_CA,
        Holiday.NAME_FR_FR,
        Holiday.NAME_IT_IT,
        Holiday.NAME_LOCALIZED,
        Holiday.NAME_NL_NL,
        Holiday.NAME_PT_BR,
        Holiday.NAME_ZH_CN,
        Holiday.OLD_NAME,
        Holiday.COUNTRY_NAV,
        Holiday.CREATED_BY_NAV,
        Holiday.LAST_MODIFIED_BY_NAV,
        Holiday.MDF_SYSTEM_RECORD_STATUS_NAV,
        Holiday.NAME_TRANSLATION_TEXT_NAV,
        Holiday.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    Holiday.ALL_FIELDS = new core_1.AllFields('*', Holiday);
    /**
     * All key fields of the Holiday entity.
     */
    Holiday._keyFields = [Holiday.HOLIDAY_CODE];
    /**
     * Mapping of all key field names to the respective static field property Holiday.
     */
    Holiday._keys = Holiday._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Holiday = exports.Holiday || (exports.Holiday = {}));
exports.Holiday = Holiday;
//# sourceMappingURL=Holiday.js.map