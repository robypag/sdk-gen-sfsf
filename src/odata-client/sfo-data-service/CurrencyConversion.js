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
var CurrencyConversionRequestBuilder_1 = require("./CurrencyConversionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CurrencyConversion" of service "SFOData".
 */
var CurrencyConversion = /** @class */ (function (_super) {
    __extends(CurrencyConversion, _super);
    function CurrencyConversion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CurrencyConversion`.
     * @returns A builder that constructs instances of entity type `CurrencyConversion`.
     */
    CurrencyConversion.builder = function () {
        return core_1.Entity.entityBuilder(CurrencyConversion);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CurrencyConversion` entity type.
     * @returns A `CurrencyConversion` request builder.
     */
    CurrencyConversion.requestBuilder = function () {
        return new CurrencyConversionRequestBuilder_1.CurrencyConversionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CurrencyConversion`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CurrencyConversion`.
     */
    CurrencyConversion.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, CurrencyConversion);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CurrencyConversion.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CurrencyConversion.
     */
    CurrencyConversion._entityName = 'CurrencyConversion';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CurrencyConversion.
     */
    CurrencyConversion._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CurrencyConversion._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CurrencyConversion;
}(core_1.Entity));
exports.CurrencyConversion = CurrencyConversion;
var Currency_1 = require("./Currency");
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var PickListValueV2_1 = require("./PickListValueV2");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var WfRequest_1 = require("./WfRequest");
(function (CurrencyConversion) {
    /**
     * Static representation of the [[baseCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.BASE_CURRENCY = new core_1.StringField('baseCurrency', CurrencyConversion, 'Edm.String');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.CODE = new core_1.StringField('code', CurrencyConversion, 'Edm.String');
    /**
     * Static representation of the [[conversionRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.CONVERSION_RATE = new core_1.BigNumberField('conversionRate', CurrencyConversion, 'Edm.Decimal');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.CREATED_BY = new core_1.StringField('createdBy', CurrencyConversion, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', CurrencyConversion, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[effectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.EFFECTIVE_END_DATE = new core_1.DateField('effectiveEndDate', CurrencyConversion, 'Edm.DateTime');
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.EFFECTIVE_START_DATE = new core_1.DateField('effectiveStartDate', CurrencyConversion, 'Edm.DateTime');
    /**
     * Static representation of the [[effectiveStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.EFFECTIVE_STATUS = new core_1.StringField('effectiveStatus', CurrencyConversion, 'Edm.String');
    /**
     * Static representation of the [[exchangeRateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.EXCHANGE_RATE_TYPE = new core_1.StringField('exchangeRateType', CurrencyConversion, 'Edm.String');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', CurrencyConversion, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', CurrencyConversion, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.EXTERNAL_NAME_EN_DEBUG = new core_1.StringField('externalName_en_DEBUG', CurrencyConversion, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', CurrencyConversion, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', CurrencyConversion, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', CurrencyConversion, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.EXTERNAL_NAME_ES_MX = new core_1.StringField('externalName_es_MX', CurrencyConversion, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.EXTERNAL_NAME_FR_CA = new core_1.StringField('externalName_fr_CA', CurrencyConversion, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', CurrencyConversion, 'Edm.String');
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.EXTERNAL_NAME_IT_IT = new core_1.StringField('externalName_it_IT', CurrencyConversion, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', CurrencyConversion, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', CurrencyConversion, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', CurrencyConversion, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', CurrencyConversion, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', CurrencyConversion, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', CurrencyConversion, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', CurrencyConversion, 'Edm.String');
    /**
     * Static representation of the [[toCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.TO_CURRENCY = new core_1.StringField('toCurrency', CurrencyConversion, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[baseCurrencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.BASE_CURRENCY_NAV = new core_1.OneToOneLink('baseCurrencyNav', CurrencyConversion, Currency_1.Currency);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', CurrencyConversion, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.EFFECTIVE_STATUS_NAV = new core_1.OneToOneLink('effectiveStatusNav', CurrencyConversion, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[exchangeRateTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.EXCHANGE_RATE_TYPE_NAV = new core_1.OneToOneLink('exchangeRateTypeNav', CurrencyConversion, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.EXTERNAL_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('externalNameTranslationTextNav', CurrencyConversion, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', CurrencyConversion, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', CurrencyConversion, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[toCurrencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.TO_CURRENCY_NAV = new core_1.OneToOneLink('toCurrencyNav', CurrencyConversion, Currency_1.Currency);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyConversion.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', CurrencyConversion, WfRequest_1.WfRequest);
    /**
     * All fields of the CurrencyConversion entity.
     */
    CurrencyConversion._allFields = [
        CurrencyConversion.BASE_CURRENCY,
        CurrencyConversion.CODE,
        CurrencyConversion.CONVERSION_RATE,
        CurrencyConversion.CREATED_BY,
        CurrencyConversion.CREATED_DATE_TIME,
        CurrencyConversion.EFFECTIVE_END_DATE,
        CurrencyConversion.EFFECTIVE_START_DATE,
        CurrencyConversion.EFFECTIVE_STATUS,
        CurrencyConversion.EXCHANGE_RATE_TYPE,
        CurrencyConversion.EXTERNAL_NAME_DE_DE,
        CurrencyConversion.EXTERNAL_NAME_DEFAULT_VALUE,
        CurrencyConversion.EXTERNAL_NAME_EN_DEBUG,
        CurrencyConversion.EXTERNAL_NAME_EN_GB,
        CurrencyConversion.EXTERNAL_NAME_EN_US,
        CurrencyConversion.EXTERNAL_NAME_ES_ES,
        CurrencyConversion.EXTERNAL_NAME_ES_MX,
        CurrencyConversion.EXTERNAL_NAME_FR_CA,
        CurrencyConversion.EXTERNAL_NAME_FR_FR,
        CurrencyConversion.EXTERNAL_NAME_IT_IT,
        CurrencyConversion.EXTERNAL_NAME_LOCALIZED,
        CurrencyConversion.EXTERNAL_NAME_NL_NL,
        CurrencyConversion.EXTERNAL_NAME_PT_BR,
        CurrencyConversion.EXTERNAL_NAME_ZH_CN,
        CurrencyConversion.LAST_MODIFIED_BY,
        CurrencyConversion.LAST_MODIFIED_DATE_TIME,
        CurrencyConversion.MDF_SYSTEM_RECORD_STATUS,
        CurrencyConversion.TO_CURRENCY,
        CurrencyConversion.BASE_CURRENCY_NAV,
        CurrencyConversion.CREATED_BY_NAV,
        CurrencyConversion.EFFECTIVE_STATUS_NAV,
        CurrencyConversion.EXCHANGE_RATE_TYPE_NAV,
        CurrencyConversion.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
        CurrencyConversion.LAST_MODIFIED_BY_NAV,
        CurrencyConversion.MDF_SYSTEM_RECORD_STATUS_NAV,
        CurrencyConversion.TO_CURRENCY_NAV,
        CurrencyConversion.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    CurrencyConversion.ALL_FIELDS = new core_1.AllFields('*', CurrencyConversion);
    /**
     * All key fields of the CurrencyConversion entity.
     */
    CurrencyConversion._keyFields = [CurrencyConversion.CODE, CurrencyConversion.EFFECTIVE_START_DATE];
    /**
     * Mapping of all key field names to the respective static field property CurrencyConversion.
     */
    CurrencyConversion._keys = CurrencyConversion._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CurrencyConversion = exports.CurrencyConversion || (exports.CurrencyConversion = {}));
exports.CurrencyConversion = CurrencyConversion;
//# sourceMappingURL=CurrencyConversion.js.map