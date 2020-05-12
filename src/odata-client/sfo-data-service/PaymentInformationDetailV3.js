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
var PaymentInformationDetailV3RequestBuilder_1 = require("./PaymentInformationDetailV3RequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PaymentInformationDetailV3" of service "SFOData".
 */
var PaymentInformationDetailV3 = /** @class */ (function (_super) {
    __extends(PaymentInformationDetailV3, _super);
    function PaymentInformationDetailV3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PaymentInformationDetailV3`.
     * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3`.
     */
    PaymentInformationDetailV3.builder = function () {
        return core_1.Entity.entityBuilder(PaymentInformationDetailV3);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PaymentInformationDetailV3` entity type.
     * @returns A `PaymentInformationDetailV3` request builder.
     */
    PaymentInformationDetailV3.requestBuilder = function () {
        return new PaymentInformationDetailV3RequestBuilder_1.PaymentInformationDetailV3RequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentInformationDetailV3`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3`.
     */
    PaymentInformationDetailV3.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PaymentInformationDetailV3);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PaymentInformationDetailV3.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PaymentInformationDetailV3.
     */
    PaymentInformationDetailV3._entityName = 'PaymentInformationDetailV3';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PaymentInformationDetailV3.
     */
    PaymentInformationDetailV3._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PaymentInformationDetailV3._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PaymentInformationDetailV3;
}(core_1.Entity));
exports.PaymentInformationDetailV3 = PaymentInformationDetailV3;
var Country_1 = require("./Country");
var Bank_1 = require("./Bank");
var User_1 = require("./User");
var Currency_1 = require("./Currency");
var CustomPayType_1 = require("./CustomPayType");
var MdfEnumValue_1 = require("./MdfEnumValue");
var PaymentMethodV3_1 = require("./PaymentMethodV3");
var PaymentInformationDetailV3Arg_1 = require("./PaymentInformationDetailV3Arg");
var PaymentInformationDetailV3Blr_1 = require("./PaymentInformationDetailV3Blr");
var PaymentInformationDetailV3Bra_1 = require("./PaymentInformationDetailV3Bra");
var PaymentInformationDetailV3Chl_1 = require("./PaymentInformationDetailV3Chl");
var PaymentInformationDetailV3Col_1 = require("./PaymentInformationDetailV3Col");
var PaymentInformationDetailV3Ecu_1 = require("./PaymentInformationDetailV3Ecu");
var PaymentInformationDetailV3Esp_1 = require("./PaymentInformationDetailV3Esp");
var PaymentInformationDetailV3Fra_1 = require("./PaymentInformationDetailV3Fra");
var PaymentInformationDetailV3Gbr_1 = require("./PaymentInformationDetailV3Gbr");
var PaymentInformationDetailV3Irq_1 = require("./PaymentInformationDetailV3Irq");
var PaymentInformationDetailV3Isr_1 = require("./PaymentInformationDetailV3Isr");
var PaymentInformationDetailV3Ita_1 = require("./PaymentInformationDetailV3Ita");
var PaymentInformationDetailV3Jpn_1 = require("./PaymentInformationDetailV3Jpn");
var PaymentInformationDetailV3Ken_1 = require("./PaymentInformationDetailV3Ken");
var PaymentInformationDetailV3Mex_1 = require("./PaymentInformationDetailV3Mex");
var PaymentInformationDetailV3Mkd_1 = require("./PaymentInformationDetailV3Mkd");
var PaymentInformationDetailV3Mmr_1 = require("./PaymentInformationDetailV3Mmr");
var PaymentInformationDetailV3Moz_1 = require("./PaymentInformationDetailV3Moz");
var PaymentInformationDetailV3Mwi_1 = require("./PaymentInformationDetailV3Mwi");
var PaymentInformationDetailV3Nam_1 = require("./PaymentInformationDetailV3Nam");
var PaymentInformationDetailV3Nga_1 = require("./PaymentInformationDetailV3Nga");
var PaymentInformationDetailV3Nzl_1 = require("./PaymentInformationDetailV3Nzl");
var PaymentInformationDetailV3Per_1 = require("./PaymentInformationDetailV3Per");
var PaymentInformationDetailV3Svn_1 = require("./PaymentInformationDetailV3Svn");
var PaymentInformationDetailV3Usa_1 = require("./PaymentInformationDetailV3Usa");
var PaymentInformationDetailV3Ven_1 = require("./PaymentInformationDetailV3Ven");
var PaymentInformationDetailV3Zaf_1 = require("./PaymentInformationDetailV3Zaf");
var PaymentInformationDetailV3Zwe_1 = require("./PaymentInformationDetailV3Zwe");
(function (PaymentInformationDetailV3) {
    /**
     * Static representation of the [[paymentInformationV3EffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE = new core_1.DateField('PaymentInformationV3_effectiveStartDate', PaymentInformationDetailV3, 'Edm.DateTime');
    /**
     * Static representation of the [[paymentInformationV3Worker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.PAYMENT_INFORMATION_V_3_WORKER = new core_1.StringField('PaymentInformationV3_worker', PaymentInformationDetailV3, 'Edm.String');
    /**
     * Static representation of the [[accountNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.ACCOUNT_NUMBER = new core_1.StringField('accountNumber', PaymentInformationDetailV3, 'Edm.String');
    /**
     * Static representation of the [[accountOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.ACCOUNT_OWNER = new core_1.StringField('accountOwner', PaymentInformationDetailV3, 'Edm.String');
    /**
     * Static representation of the [[amount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.AMOUNT = new core_1.BigNumberField('amount', PaymentInformationDetailV3, 'Edm.Decimal');
    /**
     * Static representation of the [[bank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.BANK = new core_1.StringField('bank', PaymentInformationDetailV3, 'Edm.String');
    /**
     * Static representation of the [[bankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.BANK_COUNTRY = new core_1.StringField('bankCountry', PaymentInformationDetailV3, 'Edm.String');
    /**
     * Static representation of the [[businessIdentifierCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.BUSINESS_IDENTIFIER_CODE = new core_1.StringField('businessIdentifierCode', PaymentInformationDetailV3, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.CREATED_BY = new core_1.StringField('createdBy', PaymentInformationDetailV3, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PaymentInformationDetailV3, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.CURRENCY = new core_1.StringField('currency', PaymentInformationDetailV3, 'Edm.String');
    /**
     * Static representation of the [[customPayType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.CUSTOM_PAY_TYPE = new core_1.StringField('customPayType', PaymentInformationDetailV3, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', PaymentInformationDetailV3, 'Edm.Int64');
    /**
     * Static representation of the [[iban]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.IBAN = new core_1.StringField('iban', PaymentInformationDetailV3, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PaymentInformationDetailV3, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PaymentInformationDetailV3, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PaymentInformationDetailV3, 'Edm.String');
    /**
     * Static representation of the [[paySequence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.PAY_SEQUENCE = new core_1.BigNumberField('paySequence', PaymentInformationDetailV3, 'Edm.Int64');
    /**
     * Static representation of the [[payType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.PAY_TYPE = new core_1.StringField('payType', PaymentInformationDetailV3, 'Edm.String');
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.PAYMENT_METHOD = new core_1.StringField('paymentMethod', PaymentInformationDetailV3, 'Edm.String');
    /**
     * Static representation of the [[percent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.PERCENT = new core_1.BigNumberField('percent', PaymentInformationDetailV3, 'Edm.Decimal');
    /**
     * Static representation of the [[purpose]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.PURPOSE = new core_1.StringField('purpose', PaymentInformationDetailV3, 'Edm.String');
    /**
     * Static representation of the [[routingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.ROUTING_NUMBER = new core_1.StringField('routingNumber', PaymentInformationDetailV3, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[bankCountryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.BANK_COUNTRY_NAV = new core_1.Link('bankCountryNav', PaymentInformationDetailV3, Country_1.Country);
    /**
     * Static representation of the one-to-one navigation property [[bankNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.BANK_NAV = new core_1.OneToOneLink('bankNav', PaymentInformationDetailV3, Bank_1.Bank);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PaymentInformationDetailV3, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[currencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.CURRENCY_NAV = new core_1.Link('currencyNav', PaymentInformationDetailV3, Currency_1.Currency);
    /**
     * Static representation of the one-to-one navigation property [[customPayTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.CUSTOM_PAY_TYPE_NAV = new core_1.OneToOneLink('customPayTypeNav', PaymentInformationDetailV3, CustomPayType_1.CustomPayType);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PaymentInformationDetailV3, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PaymentInformationDetailV3, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[payTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.PAY_TYPE_NAV = new core_1.OneToOneLink('payTypeNav', PaymentInformationDetailV3, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[paymentMethodNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.PAYMENT_METHOD_NAV = new core_1.OneToOneLink('paymentMethodNav', PaymentInformationDetailV3, PaymentMethodV3_1.PaymentMethodV3);
    /**
     * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Arg]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_ARG = new core_1.OneToOneLink('toPaymentInformationDetailV3ARG', PaymentInformationDetailV3, PaymentInformationDetailV3Arg_1.PaymentInformationDetailV3Arg);
    /**
     * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Blr]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_BLR = new core_1.OneToOneLink('toPaymentInformationDetailV3BLR', PaymentInformationDetailV3, PaymentInformationDetailV3Blr_1.PaymentInformationDetailV3Blr);
    /**
     * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Bra]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_BRA = new core_1.OneToOneLink('toPaymentInformationDetailV3BRA', PaymentInformationDetailV3, PaymentInformationDetailV3Bra_1.PaymentInformationDetailV3Bra);
    /**
     * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Chl]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_CHL = new core_1.OneToOneLink('toPaymentInformationDetailV3CHL', PaymentInformationDetailV3, PaymentInformationDetailV3Chl_1.PaymentInformationDetailV3Chl);
    /**
     * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Col]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_COL = new core_1.OneToOneLink('toPaymentInformationDetailV3COL', PaymentInformationDetailV3, PaymentInformationDetailV3Col_1.PaymentInformationDetailV3Col);
    /**
     * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Ecu]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_ECU = new core_1.OneToOneLink('toPaymentInformationDetailV3ECU', PaymentInformationDetailV3, PaymentInformationDetailV3Ecu_1.PaymentInformationDetailV3Ecu);
    /**
     * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Esp]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_ESP = new core_1.OneToOneLink('toPaymentInformationDetailV3ESP', PaymentInformationDetailV3, PaymentInformationDetailV3Esp_1.PaymentInformationDetailV3Esp);
    /**
     * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Fra]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_FRA = new core_1.OneToOneLink('toPaymentInformationDetailV3FRA', PaymentInformationDetailV3, PaymentInformationDetailV3Fra_1.PaymentInformationDetailV3Fra);
    /**
     * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Gbr]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_GBR = new core_1.OneToOneLink('toPaymentInformationDetailV3GBR', PaymentInformationDetailV3, PaymentInformationDetailV3Gbr_1.PaymentInformationDetailV3Gbr);
    /**
     * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Irq]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_IRQ = new core_1.OneToOneLink('toPaymentInformationDetailV3IRQ', PaymentInformationDetailV3, PaymentInformationDetailV3Irq_1.PaymentInformationDetailV3Irq);
    /**
     * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Isr]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_ISR = new core_1.OneToOneLink('toPaymentInformationDetailV3ISR', PaymentInformationDetailV3, PaymentInformationDetailV3Isr_1.PaymentInformationDetailV3Isr);
    /**
     * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Ita]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_ITA = new core_1.OneToOneLink('toPaymentInformationDetailV3ITA', PaymentInformationDetailV3, PaymentInformationDetailV3Ita_1.PaymentInformationDetailV3Ita);
    /**
     * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Jpn]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_JPN = new core_1.OneToOneLink('toPaymentInformationDetailV3JPN', PaymentInformationDetailV3, PaymentInformationDetailV3Jpn_1.PaymentInformationDetailV3Jpn);
    /**
     * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Ken]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_KEN = new core_1.OneToOneLink('toPaymentInformationDetailV3KEN', PaymentInformationDetailV3, PaymentInformationDetailV3Ken_1.PaymentInformationDetailV3Ken);
    /**
     * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Mex]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_MEX = new core_1.OneToOneLink('toPaymentInformationDetailV3MEX', PaymentInformationDetailV3, PaymentInformationDetailV3Mex_1.PaymentInformationDetailV3Mex);
    /**
     * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Mkd]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_MKD = new core_1.OneToOneLink('toPaymentInformationDetailV3MKD', PaymentInformationDetailV3, PaymentInformationDetailV3Mkd_1.PaymentInformationDetailV3Mkd);
    /**
     * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Mmr]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_MMR = new core_1.OneToOneLink('toPaymentInformationDetailV3MMR', PaymentInformationDetailV3, PaymentInformationDetailV3Mmr_1.PaymentInformationDetailV3Mmr);
    /**
     * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Moz]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_MOZ = new core_1.OneToOneLink('toPaymentInformationDetailV3MOZ', PaymentInformationDetailV3, PaymentInformationDetailV3Moz_1.PaymentInformationDetailV3Moz);
    /**
     * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Mwi]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_MWI = new core_1.OneToOneLink('toPaymentInformationDetailV3MWI', PaymentInformationDetailV3, PaymentInformationDetailV3Mwi_1.PaymentInformationDetailV3Mwi);
    /**
     * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Nam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_NAM = new core_1.OneToOneLink('toPaymentInformationDetailV3NAM', PaymentInformationDetailV3, PaymentInformationDetailV3Nam_1.PaymentInformationDetailV3Nam);
    /**
     * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Nga]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_NGA = new core_1.OneToOneLink('toPaymentInformationDetailV3NGA', PaymentInformationDetailV3, PaymentInformationDetailV3Nga_1.PaymentInformationDetailV3Nga);
    /**
     * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Nzl]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_NZL = new core_1.OneToOneLink('toPaymentInformationDetailV3NZL', PaymentInformationDetailV3, PaymentInformationDetailV3Nzl_1.PaymentInformationDetailV3Nzl);
    /**
     * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Per]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_PER = new core_1.OneToOneLink('toPaymentInformationDetailV3PER', PaymentInformationDetailV3, PaymentInformationDetailV3Per_1.PaymentInformationDetailV3Per);
    /**
     * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Svn]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_SVN = new core_1.OneToOneLink('toPaymentInformationDetailV3SVN', PaymentInformationDetailV3, PaymentInformationDetailV3Svn_1.PaymentInformationDetailV3Svn);
    /**
     * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Usa]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_USA = new core_1.OneToOneLink('toPaymentInformationDetailV3USA', PaymentInformationDetailV3, PaymentInformationDetailV3Usa_1.PaymentInformationDetailV3Usa);
    /**
     * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Ven]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_VEN = new core_1.OneToOneLink('toPaymentInformationDetailV3VEN', PaymentInformationDetailV3, PaymentInformationDetailV3Ven_1.PaymentInformationDetailV3Ven);
    /**
     * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Zaf]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_ZAF = new core_1.OneToOneLink('toPaymentInformationDetailV3ZAF', PaymentInformationDetailV3, PaymentInformationDetailV3Zaf_1.PaymentInformationDetailV3Zaf);
    /**
     * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Zwe]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_ZWE = new core_1.OneToOneLink('toPaymentInformationDetailV3ZWE', PaymentInformationDetailV3, PaymentInformationDetailV3Zwe_1.PaymentInformationDetailV3Zwe);
    /**
     * All fields of the PaymentInformationDetailV3 entity.
     */
    PaymentInformationDetailV3._allFields = [
        PaymentInformationDetailV3.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE,
        PaymentInformationDetailV3.PAYMENT_INFORMATION_V_3_WORKER,
        PaymentInformationDetailV3.ACCOUNT_NUMBER,
        PaymentInformationDetailV3.ACCOUNT_OWNER,
        PaymentInformationDetailV3.AMOUNT,
        PaymentInformationDetailV3.BANK,
        PaymentInformationDetailV3.BANK_COUNTRY,
        PaymentInformationDetailV3.BUSINESS_IDENTIFIER_CODE,
        PaymentInformationDetailV3.CREATED_BY,
        PaymentInformationDetailV3.CREATED_DATE_TIME,
        PaymentInformationDetailV3.CURRENCY,
        PaymentInformationDetailV3.CUSTOM_PAY_TYPE,
        PaymentInformationDetailV3.EXTERNAL_CODE,
        PaymentInformationDetailV3.IBAN,
        PaymentInformationDetailV3.LAST_MODIFIED_BY,
        PaymentInformationDetailV3.LAST_MODIFIED_DATE_TIME,
        PaymentInformationDetailV3.MDF_SYSTEM_RECORD_STATUS,
        PaymentInformationDetailV3.PAY_SEQUENCE,
        PaymentInformationDetailV3.PAY_TYPE,
        PaymentInformationDetailV3.PAYMENT_METHOD,
        PaymentInformationDetailV3.PERCENT,
        PaymentInformationDetailV3.PURPOSE,
        PaymentInformationDetailV3.ROUTING_NUMBER,
        PaymentInformationDetailV3.BANK_COUNTRY_NAV,
        PaymentInformationDetailV3.BANK_NAV,
        PaymentInformationDetailV3.CREATED_BY_NAV,
        PaymentInformationDetailV3.CURRENCY_NAV,
        PaymentInformationDetailV3.CUSTOM_PAY_TYPE_NAV,
        PaymentInformationDetailV3.LAST_MODIFIED_BY_NAV,
        PaymentInformationDetailV3.MDF_SYSTEM_RECORD_STATUS_NAV,
        PaymentInformationDetailV3.PAY_TYPE_NAV,
        PaymentInformationDetailV3.PAYMENT_METHOD_NAV,
        PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_ARG,
        PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_BLR,
        PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_BRA,
        PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_CHL,
        PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_COL,
        PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_ECU,
        PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_ESP,
        PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_FRA,
        PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_GBR,
        PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_IRQ,
        PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_ISR,
        PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_ITA,
        PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_JPN,
        PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_KEN,
        PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_MEX,
        PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_MKD,
        PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_MMR,
        PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_MOZ,
        PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_MWI,
        PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_NAM,
        PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_NGA,
        PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_NZL,
        PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_PER,
        PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_SVN,
        PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_USA,
        PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_VEN,
        PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_ZAF,
        PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_ZWE
    ];
    /**
     * All fields selector.
     */
    PaymentInformationDetailV3.ALL_FIELDS = new core_1.AllFields('*', PaymentInformationDetailV3);
    /**
     * All key fields of the PaymentInformationDetailV3 entity.
     */
    PaymentInformationDetailV3._keyFields = [PaymentInformationDetailV3.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE, PaymentInformationDetailV3.PAYMENT_INFORMATION_V_3_WORKER, PaymentInformationDetailV3.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property PaymentInformationDetailV3.
     */
    PaymentInformationDetailV3._keys = PaymentInformationDetailV3._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PaymentInformationDetailV3 = exports.PaymentInformationDetailV3 || (exports.PaymentInformationDetailV3 = {}));
exports.PaymentInformationDetailV3 = PaymentInformationDetailV3;
//# sourceMappingURL=PaymentInformationDetailV3.js.map