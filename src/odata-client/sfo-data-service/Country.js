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
var CountryRequestBuilder_1 = require("./CountryRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Country" of service "SFOData".
 */
var Country = /** @class */ (function (_super) {
    __extends(Country, _super);
    function Country() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Country`.
     * @returns A builder that constructs instances of entity type `Country`.
     */
    Country.builder = function () {
        return core_1.Entity.entityBuilder(Country);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Country` entity type.
     * @returns A `Country` request builder.
     */
    Country.requestBuilder = function () {
        return new CountryRequestBuilder_1.CountryRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Country`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Country`.
     */
    Country.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Country);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Country.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Country.
     */
    Country._entityName = 'Country';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Country.
     */
    Country._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Country._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Country;
}(core_1.Entity));
exports.Country = Country;
var User_1 = require("./User");
var Currency_1 = require("./Currency");
var FoEventReason_1 = require("./FoEventReason");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (Country) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.CODE = new core_1.StringField('code', Country, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.CREATED_BY = new core_1.StringField('createdBy', Country, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', Country, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.CURRENCY = new core_1.StringField('currency', Country, 'Edm.String');
    /**
     * Static representation of the [[effectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.EFFECTIVE_END_DATE = new core_1.DateField('effectiveEndDate', Country, 'Edm.DateTime');
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.EFFECTIVE_START_DATE = new core_1.DateField('effectiveStartDate', Country, 'Edm.DateTime');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', Country, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', Country, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.EXTERNAL_NAME_EN_DEBUG = new core_1.StringField('externalName_en_DEBUG', Country, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', Country, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', Country, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', Country, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.EXTERNAL_NAME_ES_MX = new core_1.StringField('externalName_es_MX', Country, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.EXTERNAL_NAME_FR_CA = new core_1.StringField('externalName_fr_CA', Country, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', Country, 'Edm.String');
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.EXTERNAL_NAME_IT_IT = new core_1.StringField('externalName_it_IT', Country, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', Country, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', Country, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', Country, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', Country, 'Edm.String');
    /**
     * Static representation of the [[isDrmEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.IS_DRM_ENABLED = new core_1.BooleanField('isDRMEnabled', Country, 'Edm.Boolean');
    /**
     * Static representation of the [[isSetByMigrate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.IS_SET_BY_MIGRATE = new core_1.BooleanField('isSetByMigrate', Country, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', Country, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', Country, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', Country, 'Edm.String');
    /**
     * Static representation of the [[numericCountryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.NUMERIC_COUNTRY_CODE = new core_1.BigNumberField('numericCountryCode', Country, 'Edm.Int64');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.STATUS = new core_1.StringField('status', Country, 'Edm.String');
    /**
     * Static representation of the [[territoryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.TERRITORY_ID = new core_1.BigNumberField('territoryId', Country, 'Edm.Int64');
    /**
     * Static representation of the [[twoCharCountryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.TWO_CHAR_COUNTRY_CODE = new core_1.StringField('twoCharCountryCode', Country, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', Country, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[currencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.CURRENCY_NAV = new core_1.OneToOneLink('currencyNav', Country, Currency_1.Currency);
    /**
     * Static representation of the one-to-many navigation property [[custFowEventReason]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.CUST_FOW_EVENT_REASON = new core_1.Link('cust_FOWEventReason', Country, FoEventReason_1.FoEventReason);
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.EXTERNAL_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('externalNameTranslationTextNav', Country, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', Country, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', Country, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.STATUS_NAV = new core_1.OneToOneLink('statusNav', Country, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Country.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', Country, WfRequest_1.WfRequest);
    /**
     * All fields of the Country entity.
     */
    Country._allFields = [
        Country.CODE,
        Country.CREATED_BY,
        Country.CREATED_DATE_TIME,
        Country.CURRENCY,
        Country.EFFECTIVE_END_DATE,
        Country.EFFECTIVE_START_DATE,
        Country.EXTERNAL_NAME_DE_DE,
        Country.EXTERNAL_NAME_DEFAULT_VALUE,
        Country.EXTERNAL_NAME_EN_DEBUG,
        Country.EXTERNAL_NAME_EN_GB,
        Country.EXTERNAL_NAME_EN_US,
        Country.EXTERNAL_NAME_ES_ES,
        Country.EXTERNAL_NAME_ES_MX,
        Country.EXTERNAL_NAME_FR_CA,
        Country.EXTERNAL_NAME_FR_FR,
        Country.EXTERNAL_NAME_IT_IT,
        Country.EXTERNAL_NAME_LOCALIZED,
        Country.EXTERNAL_NAME_NL_NL,
        Country.EXTERNAL_NAME_PT_BR,
        Country.EXTERNAL_NAME_ZH_CN,
        Country.IS_DRM_ENABLED,
        Country.IS_SET_BY_MIGRATE,
        Country.LAST_MODIFIED_BY,
        Country.LAST_MODIFIED_DATE_TIME,
        Country.MDF_SYSTEM_RECORD_STATUS,
        Country.NUMERIC_COUNTRY_CODE,
        Country.STATUS,
        Country.TERRITORY_ID,
        Country.TWO_CHAR_COUNTRY_CODE,
        Country.CREATED_BY_NAV,
        Country.CURRENCY_NAV,
        Country.CUST_FOW_EVENT_REASON,
        Country.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
        Country.LAST_MODIFIED_BY_NAV,
        Country.MDF_SYSTEM_RECORD_STATUS_NAV,
        Country.STATUS_NAV,
        Country.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    Country.ALL_FIELDS = new core_1.AllFields('*', Country);
    /**
     * All key fields of the Country entity.
     */
    Country._keyFields = [Country.CODE, Country.EFFECTIVE_START_DATE];
    /**
     * Mapping of all key field names to the respective static field property Country.
     */
    Country._keys = Country._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Country = exports.Country || (exports.Country = {}));
exports.Country = Country;
//# sourceMappingURL=Country.js.map