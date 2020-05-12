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
var CurrencyExchangeRateRequestBuilder_1 = require("./CurrencyExchangeRateRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CurrencyExchangeRate" of service "SFOData".
 */
var CurrencyExchangeRate = /** @class */ (function (_super) {
    __extends(CurrencyExchangeRate, _super);
    function CurrencyExchangeRate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CurrencyExchangeRate`.
     * @returns A builder that constructs instances of entity type `CurrencyExchangeRate`.
     */
    CurrencyExchangeRate.builder = function () {
        return core_1.Entity.entityBuilder(CurrencyExchangeRate);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CurrencyExchangeRate` entity type.
     * @returns A `CurrencyExchangeRate` request builder.
     */
    CurrencyExchangeRate.requestBuilder = function () {
        return new CurrencyExchangeRateRequestBuilder_1.CurrencyExchangeRateRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CurrencyExchangeRate`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CurrencyExchangeRate`.
     */
    CurrencyExchangeRate.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, CurrencyExchangeRate);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CurrencyExchangeRate.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CurrencyExchangeRate.
     */
    CurrencyExchangeRate._entityName = 'CurrencyExchangeRate';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CurrencyExchangeRate.
     */
    CurrencyExchangeRate._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CurrencyExchangeRate._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CurrencyExchangeRate;
}(core_1.Entity));
exports.CurrencyExchangeRate = CurrencyExchangeRate;
var User_1 = require("./User");
var PickListValueV2_1 = require("./PickListValueV2");
var MdfEnumValue_1 = require("./MdfEnumValue");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var Currency_1 = require("./Currency");
var WfRequest_1 = require("./WfRequest");
(function (CurrencyExchangeRate) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.CREATED_BY = new core_1.StringField('createdBy', CurrencyExchangeRate, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', CurrencyExchangeRate, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[currencyExchangeRateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.CURRENCY_EXCHANGE_RATE_TYPE = new core_1.StringField('currencyExchangeRateType', CurrencyExchangeRate, 'Edm.String');
    /**
     * Static representation of the [[effectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.EFFECTIVE_END_DATE = new core_1.DateField('effectiveEndDate', CurrencyExchangeRate, 'Edm.DateTime');
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.EFFECTIVE_START_DATE = new core_1.DateField('effectiveStartDate', CurrencyExchangeRate, 'Edm.DateTime');
    /**
     * Static representation of the [[effectiveStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.EFFECTIVE_STATUS = new core_1.StringField('effectiveStatus', CurrencyExchangeRate, 'Edm.String');
    /**
     * Static representation of the [[exchangeRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.EXCHANGE_RATE = new core_1.BigNumberField('exchangeRate', CurrencyExchangeRate, 'Edm.Decimal');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.EXTERNAL_CODE = new core_1.StringField('externalCode', CurrencyExchangeRate, 'Edm.String');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', CurrencyExchangeRate, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', CurrencyExchangeRate, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.EXTERNAL_NAME_EN_DEBUG = new core_1.StringField('externalName_en_DEBUG', CurrencyExchangeRate, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', CurrencyExchangeRate, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', CurrencyExchangeRate, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', CurrencyExchangeRate, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.EXTERNAL_NAME_ES_MX = new core_1.StringField('externalName_es_MX', CurrencyExchangeRate, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.EXTERNAL_NAME_FR_CA = new core_1.StringField('externalName_fr_CA', CurrencyExchangeRate, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', CurrencyExchangeRate, 'Edm.String');
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.EXTERNAL_NAME_IT_IT = new core_1.StringField('externalName_it_IT', CurrencyExchangeRate, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', CurrencyExchangeRate, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', CurrencyExchangeRate, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', CurrencyExchangeRate, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', CurrencyExchangeRate, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', CurrencyExchangeRate, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', CurrencyExchangeRate, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', CurrencyExchangeRate, 'Edm.String');
    /**
     * Static representation of the [[sourceCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.SOURCE_CURRENCY = new core_1.StringField('sourceCurrency', CurrencyExchangeRate, 'Edm.String');
    /**
     * Static representation of the [[targetCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.TARGET_CURRENCY = new core_1.StringField('targetCurrency', CurrencyExchangeRate, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', CurrencyExchangeRate, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[currencyExchangeRateTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.CURRENCY_EXCHANGE_RATE_TYPE_NAV = new core_1.OneToOneLink('currencyExchangeRateTypeNav', CurrencyExchangeRate, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.EFFECTIVE_STATUS_NAV = new core_1.OneToOneLink('effectiveStatusNav', CurrencyExchangeRate, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.EXTERNAL_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('externalNameTranslationTextNav', CurrencyExchangeRate, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', CurrencyExchangeRate, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', CurrencyExchangeRate, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[sourceCurrencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.SOURCE_CURRENCY_NAV = new core_1.OneToOneLink('sourceCurrencyNav', CurrencyExchangeRate, Currency_1.Currency);
    /**
     * Static representation of the one-to-one navigation property [[targetCurrencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.TARGET_CURRENCY_NAV = new core_1.OneToOneLink('targetCurrencyNav', CurrencyExchangeRate, Currency_1.Currency);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CurrencyExchangeRate.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', CurrencyExchangeRate, WfRequest_1.WfRequest);
    /**
     * All fields of the CurrencyExchangeRate entity.
     */
    CurrencyExchangeRate._allFields = [
        CurrencyExchangeRate.CREATED_BY,
        CurrencyExchangeRate.CREATED_DATE_TIME,
        CurrencyExchangeRate.CURRENCY_EXCHANGE_RATE_TYPE,
        CurrencyExchangeRate.EFFECTIVE_END_DATE,
        CurrencyExchangeRate.EFFECTIVE_START_DATE,
        CurrencyExchangeRate.EFFECTIVE_STATUS,
        CurrencyExchangeRate.EXCHANGE_RATE,
        CurrencyExchangeRate.EXTERNAL_CODE,
        CurrencyExchangeRate.EXTERNAL_NAME_DE_DE,
        CurrencyExchangeRate.EXTERNAL_NAME_DEFAULT_VALUE,
        CurrencyExchangeRate.EXTERNAL_NAME_EN_DEBUG,
        CurrencyExchangeRate.EXTERNAL_NAME_EN_GB,
        CurrencyExchangeRate.EXTERNAL_NAME_EN_US,
        CurrencyExchangeRate.EXTERNAL_NAME_ES_ES,
        CurrencyExchangeRate.EXTERNAL_NAME_ES_MX,
        CurrencyExchangeRate.EXTERNAL_NAME_FR_CA,
        CurrencyExchangeRate.EXTERNAL_NAME_FR_FR,
        CurrencyExchangeRate.EXTERNAL_NAME_IT_IT,
        CurrencyExchangeRate.EXTERNAL_NAME_LOCALIZED,
        CurrencyExchangeRate.EXTERNAL_NAME_NL_NL,
        CurrencyExchangeRate.EXTERNAL_NAME_PT_BR,
        CurrencyExchangeRate.EXTERNAL_NAME_ZH_CN,
        CurrencyExchangeRate.LAST_MODIFIED_BY,
        CurrencyExchangeRate.LAST_MODIFIED_DATE_TIME,
        CurrencyExchangeRate.MDF_SYSTEM_RECORD_STATUS,
        CurrencyExchangeRate.SOURCE_CURRENCY,
        CurrencyExchangeRate.TARGET_CURRENCY,
        CurrencyExchangeRate.CREATED_BY_NAV,
        CurrencyExchangeRate.CURRENCY_EXCHANGE_RATE_TYPE_NAV,
        CurrencyExchangeRate.EFFECTIVE_STATUS_NAV,
        CurrencyExchangeRate.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
        CurrencyExchangeRate.LAST_MODIFIED_BY_NAV,
        CurrencyExchangeRate.MDF_SYSTEM_RECORD_STATUS_NAV,
        CurrencyExchangeRate.SOURCE_CURRENCY_NAV,
        CurrencyExchangeRate.TARGET_CURRENCY_NAV,
        CurrencyExchangeRate.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    CurrencyExchangeRate.ALL_FIELDS = new core_1.AllFields('*', CurrencyExchangeRate);
    /**
     * All key fields of the CurrencyExchangeRate entity.
     */
    CurrencyExchangeRate._keyFields = [CurrencyExchangeRate.EFFECTIVE_START_DATE, CurrencyExchangeRate.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property CurrencyExchangeRate.
     */
    CurrencyExchangeRate._keys = CurrencyExchangeRate._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CurrencyExchangeRate = exports.CurrencyExchangeRate || (exports.CurrencyExchangeRate = {}));
exports.CurrencyExchangeRate = CurrencyExchangeRate;
//# sourceMappingURL=CurrencyExchangeRate.js.map