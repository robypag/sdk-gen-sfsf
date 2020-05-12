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
var FoCompanyRequestBuilder_1 = require("./FoCompanyRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOCompany" of service "SFOData".
 */
var FoCompany = /** @class */ (function (_super) {
    __extends(FoCompany, _super);
    function FoCompany() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoCompany`.
     * @returns A builder that constructs instances of entity type `FoCompany`.
     */
    FoCompany.builder = function () {
        return core_1.Entity.entityBuilder(FoCompany);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoCompany` entity type.
     * @returns A `FoCompany` request builder.
     */
    FoCompany.requestBuilder = function () {
        return new FoCompanyRequestBuilder_1.FoCompanyRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoCompany`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoCompany`.
     */
    FoCompany.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoCompany);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoCompany.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoCompany.
     */
    FoCompany._entityName = 'FOCompany';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoCompany.
     */
    FoCompany._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoCompany._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoCompany;
}(core_1.Entity));
exports.FoCompany = FoCompany;
var Territory_1 = require("./Territory");
var Country_1 = require("./Country");
var Currency_1 = require("./Currency");
var NameFormatGo_1 = require("./NameFormatGo");
var FoLocation_1 = require("./FoLocation");
var FoPayGroup_1 = require("./FoPayGroup");
var FoTranslation_1 = require("./FoTranslation");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var FoLegalEntityLocalArg_1 = require("./FoLegalEntityLocalArg");
var FoLegalEntityLocalDeflt_1 = require("./FoLegalEntityLocalDeflt");
var FoLegalEntityLocalDeu_1 = require("./FoLegalEntityLocalDeu");
var FoLegalEntityLocalEsp_1 = require("./FoLegalEntityLocalEsp");
var FoLegalEntityLocalFra_1 = require("./FoLegalEntityLocalFra");
var FoLegalEntityLocalUsa_1 = require("./FoLegalEntityLocalUsa");
var MdfEnumValue_1 = require("./MdfEnumValue");
var LegalEntityArg_1 = require("./LegalEntityArg");
var LegalEntityDeu_1 = require("./LegalEntityDeu");
var LegalEntityEsp_1 = require("./LegalEntityEsp");
var LegalEntityFra_1 = require("./LegalEntityFra");
var LegalEntityRus_1 = require("./LegalEntityRus");
var LegalEntityUsa_1 = require("./LegalEntityUsa");
(function (FoCompany) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.COUNTRY = new core_1.StringField('country', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.CREATED_BY = new core_1.StringField('createdBy', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoCompany, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.CREATED_ON = new core_1.DateField('createdOn', FoCompany, 'Edm.DateTime');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.CURRENCY = new core_1.StringField('currency', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[custToNameFormatGoProp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.CUST_TO_NAME_FORMAT_GO_PROP = new core_1.StringField('cust_toNameFormatGOProp', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[defaultLocation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.DEFAULT_LOCATION = new core_1.StringField('defaultLocation', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[defaultPayGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.DEFAULT_PAY_GROUP = new core_1.StringField('defaultPayGroup', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.DESCRIPTION = new core_1.StringField('description', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.DESCRIPTION_DE_DE = new core_1.StringField('description_de_DE', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.DESCRIPTION_DEFAULT_VALUE = new core_1.StringField('description_defaultValue', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.DESCRIPTION_EN_DEBUG = new core_1.StringField('description_en_DEBUG', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.DESCRIPTION_EN_GB = new core_1.StringField('description_en_GB', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.DESCRIPTION_EN_US = new core_1.StringField('description_en_US', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.DESCRIPTION_ES_ES = new core_1.StringField('description_es_ES', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.DESCRIPTION_ES_MX = new core_1.StringField('description_es_MX', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.DESCRIPTION_FR_CA = new core_1.StringField('description_fr_CA', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.DESCRIPTION_FR_FR = new core_1.StringField('description_fr_FR', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.DESCRIPTION_IT_IT = new core_1.StringField('description_it_IT', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.DESCRIPTION_LOCALIZED = new core_1.StringField('description_localized', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.DESCRIPTION_NL_NL = new core_1.StringField('description_nl_NL', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.DESCRIPTION_PT_BR = new core_1.StringField('description_pt_BR', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.DESCRIPTION_ZH_CN = new core_1.StringField('description_zh_CN', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.END_DATE = new core_1.DateField('endDate', FoCompany, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.EXTERNAL_CODE = new core_1.StringField('externalCode', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoCompany, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoCompany, 'Edm.DateTime');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.NAME = new core_1.StringField('name', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.NAME_DE_DE = new core_1.StringField('name_de_DE', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.NAME_DEFAULT_VALUE = new core_1.StringField('name_defaultValue', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.NAME_EN_DEBUG = new core_1.StringField('name_en_DEBUG', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.NAME_EN_GB = new core_1.StringField('name_en_GB', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.NAME_EN_US = new core_1.StringField('name_en_US', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.NAME_ES_ES = new core_1.StringField('name_es_ES', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.NAME_ES_MX = new core_1.StringField('name_es_MX', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.NAME_FR_CA = new core_1.StringField('name_fr_CA', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.NAME_FR_FR = new core_1.StringField('name_fr_FR', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.NAME_IT_IT = new core_1.StringField('name_it_IT', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.NAME_LOCALIZED = new core_1.StringField('name_localized', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.NAME_NL_NL = new core_1.StringField('name_nl_NL', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.NAME_PT_BR = new core_1.StringField('name_pt_BR', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.NAME_ZH_CN = new core_1.StringField('name_zh_CN', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[officialLanguage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.OFFICIAL_LANGUAGE = new core_1.StringField('officialLanguage', FoCompany, 'Edm.String');
    /**
     * Static representation of the [[standardHours]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.STANDARD_HOURS = new core_1.NumberField('standardHours', FoCompany, 'Edm.Double');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.START_DATE = new core_1.DateField('startDate', FoCompany, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.STATUS = new core_1.StringField('status', FoCompany, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', FoCompany, Territory_1.Territory);
    /**
     * Static representation of the one-to-one navigation property [[countryOfRegistrationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.COUNTRY_OF_REGISTRATION_NAV = new core_1.OneToOneLink('countryOfRegistrationNav', FoCompany, Country_1.Country);
    /**
     * Static representation of the one-to-one navigation property [[currencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.CURRENCY_NAV = new core_1.OneToOneLink('currencyNav', FoCompany, Currency_1.Currency);
    /**
     * Static representation of the one-to-one navigation property [[custToNameFormatGo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.CUST_TO_NAME_FORMAT_GO = new core_1.OneToOneLink('cust_toNameFormatGO', FoCompany, NameFormatGo_1.NameFormatGo);
    /**
     * Static representation of the one-to-one navigation property [[defaultLocationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.DEFAULT_LOCATION_NAV = new core_1.OneToOneLink('defaultLocationNav', FoCompany, FoLocation_1.FoLocation);
    /**
     * Static representation of the one-to-one navigation property [[defaultPayGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.DEFAULT_PAY_GROUP_NAV = new core_1.OneToOneLink('defaultPayGroupNav', FoCompany, FoPayGroup_1.FoPayGroup);
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.DESCRIPTION_TRANSLATION_NAV = new core_1.OneToOneLink('descriptionTranslationNav', FoCompany, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.DESCRIPTION_TRANSLATION_TEXT_NAV = new core_1.Link('descriptionTranslationTextNav', FoCompany, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[localNavArg]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.LOCAL_NAV_ARG = new core_1.OneToOneLink('localNavARG', FoCompany, FoLegalEntityLocalArg_1.FoLegalEntityLocalArg);
    /**
     * Static representation of the one-to-one navigation property [[localNavDeflt]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.LOCAL_NAV_DEFLT = new core_1.OneToOneLink('localNavDEFLT', FoCompany, FoLegalEntityLocalDeflt_1.FoLegalEntityLocalDeflt);
    /**
     * Static representation of the one-to-one navigation property [[localNavDeu]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.LOCAL_NAV_DEU = new core_1.OneToOneLink('localNavDEU', FoCompany, FoLegalEntityLocalDeu_1.FoLegalEntityLocalDeu);
    /**
     * Static representation of the one-to-one navigation property [[localNavEsp]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.LOCAL_NAV_ESP = new core_1.OneToOneLink('localNavESP', FoCompany, FoLegalEntityLocalEsp_1.FoLegalEntityLocalEsp);
    /**
     * Static representation of the one-to-one navigation property [[localNavFra]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.LOCAL_NAV_FRA = new core_1.OneToOneLink('localNavFRA', FoCompany, FoLegalEntityLocalFra_1.FoLegalEntityLocalFra);
    /**
     * Static representation of the one-to-one navigation property [[localNavUsa]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.LOCAL_NAV_USA = new core_1.OneToOneLink('localNavUSA', FoCompany, FoLegalEntityLocalUsa_1.FoLegalEntityLocalUsa);
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.NAME_TRANSLATION_NAV = new core_1.OneToOneLink('nameTranslationNav', FoCompany, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.NAME_TRANSLATION_TEXT_NAV = new core_1.Link('nameTranslationTextNav', FoCompany, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.STATUS_NAV = new core_1.OneToOneLink('statusNav', FoCompany, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[toLegalEntityArg]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.TO_LEGAL_ENTITY_ARG = new core_1.OneToOneLink('toLegalEntityARG', FoCompany, LegalEntityArg_1.LegalEntityArg);
    /**
     * Static representation of the one-to-one navigation property [[toLegalEntityDeu]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.TO_LEGAL_ENTITY_DEU = new core_1.OneToOneLink('toLegalEntityDEU', FoCompany, LegalEntityDeu_1.LegalEntityDeu);
    /**
     * Static representation of the one-to-one navigation property [[toLegalEntityEsp]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.TO_LEGAL_ENTITY_ESP = new core_1.OneToOneLink('toLegalEntityESP', FoCompany, LegalEntityEsp_1.LegalEntityEsp);
    /**
     * Static representation of the one-to-one navigation property [[toLegalEntityFra]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.TO_LEGAL_ENTITY_FRA = new core_1.OneToOneLink('toLegalEntityFRA', FoCompany, LegalEntityFra_1.LegalEntityFra);
    /**
     * Static representation of the one-to-one navigation property [[toLegalEntityRus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.TO_LEGAL_ENTITY_RUS = new core_1.OneToOneLink('toLegalEntityRUS', FoCompany, LegalEntityRus_1.LegalEntityRus);
    /**
     * Static representation of the one-to-one navigation property [[toLegalEntityUsa]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCompany.TO_LEGAL_ENTITY_USA = new core_1.OneToOneLink('toLegalEntityUSA', FoCompany, LegalEntityUsa_1.LegalEntityUsa);
    /**
     * All fields of the FoCompany entity.
     */
    FoCompany._allFields = [
        FoCompany.COUNTRY,
        FoCompany.CREATED_BY,
        FoCompany.CREATED_DATE_TIME,
        FoCompany.CREATED_ON,
        FoCompany.CURRENCY,
        FoCompany.CUST_TO_NAME_FORMAT_GO_PROP,
        FoCompany.DEFAULT_LOCATION,
        FoCompany.DEFAULT_PAY_GROUP,
        FoCompany.DESCRIPTION,
        FoCompany.DESCRIPTION_DE_DE,
        FoCompany.DESCRIPTION_DEFAULT_VALUE,
        FoCompany.DESCRIPTION_EN_DEBUG,
        FoCompany.DESCRIPTION_EN_GB,
        FoCompany.DESCRIPTION_EN_US,
        FoCompany.DESCRIPTION_ES_ES,
        FoCompany.DESCRIPTION_ES_MX,
        FoCompany.DESCRIPTION_FR_CA,
        FoCompany.DESCRIPTION_FR_FR,
        FoCompany.DESCRIPTION_IT_IT,
        FoCompany.DESCRIPTION_LOCALIZED,
        FoCompany.DESCRIPTION_NL_NL,
        FoCompany.DESCRIPTION_PT_BR,
        FoCompany.DESCRIPTION_ZH_CN,
        FoCompany.END_DATE,
        FoCompany.EXTERNAL_CODE,
        FoCompany.LAST_MODIFIED_BY,
        FoCompany.LAST_MODIFIED_DATE_TIME,
        FoCompany.LAST_MODIFIED_ON,
        FoCompany.NAME,
        FoCompany.NAME_DE_DE,
        FoCompany.NAME_DEFAULT_VALUE,
        FoCompany.NAME_EN_DEBUG,
        FoCompany.NAME_EN_GB,
        FoCompany.NAME_EN_US,
        FoCompany.NAME_ES_ES,
        FoCompany.NAME_ES_MX,
        FoCompany.NAME_FR_CA,
        FoCompany.NAME_FR_FR,
        FoCompany.NAME_IT_IT,
        FoCompany.NAME_LOCALIZED,
        FoCompany.NAME_NL_NL,
        FoCompany.NAME_PT_BR,
        FoCompany.NAME_ZH_CN,
        FoCompany.OFFICIAL_LANGUAGE,
        FoCompany.STANDARD_HOURS,
        FoCompany.START_DATE,
        FoCompany.STATUS,
        FoCompany.COUNTRY_NAV,
        FoCompany.COUNTRY_OF_REGISTRATION_NAV,
        FoCompany.CURRENCY_NAV,
        FoCompany.CUST_TO_NAME_FORMAT_GO,
        FoCompany.DEFAULT_LOCATION_NAV,
        FoCompany.DEFAULT_PAY_GROUP_NAV,
        FoCompany.DESCRIPTION_TRANSLATION_NAV,
        FoCompany.DESCRIPTION_TRANSLATION_TEXT_NAV,
        FoCompany.LOCAL_NAV_ARG,
        FoCompany.LOCAL_NAV_DEFLT,
        FoCompany.LOCAL_NAV_DEU,
        FoCompany.LOCAL_NAV_ESP,
        FoCompany.LOCAL_NAV_FRA,
        FoCompany.LOCAL_NAV_USA,
        FoCompany.NAME_TRANSLATION_NAV,
        FoCompany.NAME_TRANSLATION_TEXT_NAV,
        FoCompany.STATUS_NAV,
        FoCompany.TO_LEGAL_ENTITY_ARG,
        FoCompany.TO_LEGAL_ENTITY_DEU,
        FoCompany.TO_LEGAL_ENTITY_ESP,
        FoCompany.TO_LEGAL_ENTITY_FRA,
        FoCompany.TO_LEGAL_ENTITY_RUS,
        FoCompany.TO_LEGAL_ENTITY_USA
    ];
    /**
     * All fields selector.
     */
    FoCompany.ALL_FIELDS = new core_1.AllFields('*', FoCompany);
    /**
     * All key fields of the FoCompany entity.
     */
    FoCompany._keyFields = [FoCompany.EXTERNAL_CODE, FoCompany.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoCompany.
     */
    FoCompany._keys = FoCompany._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoCompany = exports.FoCompany || (exports.FoCompany = {}));
exports.FoCompany = FoCompany;
//# sourceMappingURL=FoCompany.js.map