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
var CurrencyRequestBuilder_1 = require("./CurrencyRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Currency" of service "SFOData".
 */
var Currency = /** @class */ (function (_super) {
    __extends(Currency, _super);
    function Currency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Currency`.
     * @returns A builder that constructs instances of entity type `Currency`.
     */
    Currency.builder = function () {
        return core_1.Entity.entityBuilder(Currency);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Currency` entity type.
     * @returns A `Currency` request builder.
     */
    Currency.requestBuilder = function () {
        return new CurrencyRequestBuilder_1.CurrencyRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Currency`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Currency`.
     */
    Currency.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Currency);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Currency.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Currency.
     */
    Currency._entityName = 'Currency';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Currency.
     */
    Currency._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Currency._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Currency;
}(core_1.Entity));
exports.Currency = Currency;
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (Currency) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.CODE = new core_1.StringField('code', Currency, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.CREATED_BY = new core_1.StringField('createdBy', Currency, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', Currency, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[defaultDecimals]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.DEFAULT_DECIMALS = new core_1.BigNumberField('defaultDecimals', Currency, 'Edm.Int64');
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.DESCRIPTION_DE_DE = new core_1.StringField('description_de_DE', Currency, 'Edm.String');
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.DESCRIPTION_DEFAULT_VALUE = new core_1.StringField('description_defaultValue', Currency, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.DESCRIPTION_EN_DEBUG = new core_1.StringField('description_en_DEBUG', Currency, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.DESCRIPTION_EN_GB = new core_1.StringField('description_en_GB', Currency, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.DESCRIPTION_EN_US = new core_1.StringField('description_en_US', Currency, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.DESCRIPTION_ES_ES = new core_1.StringField('description_es_ES', Currency, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.DESCRIPTION_ES_MX = new core_1.StringField('description_es_MX', Currency, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.DESCRIPTION_FR_CA = new core_1.StringField('description_fr_CA', Currency, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.DESCRIPTION_FR_FR = new core_1.StringField('description_fr_FR', Currency, 'Edm.String');
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.DESCRIPTION_IT_IT = new core_1.StringField('description_it_IT', Currency, 'Edm.String');
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.DESCRIPTION_LOCALIZED = new core_1.StringField('description_localized', Currency, 'Edm.String');
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.DESCRIPTION_NL_NL = new core_1.StringField('description_nl_NL', Currency, 'Edm.String');
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.DESCRIPTION_PT_BR = new core_1.StringField('description_pt_BR', Currency, 'Edm.String');
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.DESCRIPTION_ZH_CN = new core_1.StringField('description_zh_CN', Currency, 'Edm.String');
    /**
     * Static representation of the [[effectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.EFFECTIVE_END_DATE = new core_1.DateField('effectiveEndDate', Currency, 'Edm.DateTime');
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.EFFECTIVE_START_DATE = new core_1.DateField('effectiveStartDate', Currency, 'Edm.DateTime');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', Currency, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', Currency, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.EXTERNAL_NAME_EN_DEBUG = new core_1.StringField('externalName_en_DEBUG', Currency, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', Currency, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', Currency, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', Currency, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.EXTERNAL_NAME_ES_MX = new core_1.StringField('externalName_es_MX', Currency, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.EXTERNAL_NAME_FR_CA = new core_1.StringField('externalName_fr_CA', Currency, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', Currency, 'Edm.String');
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.EXTERNAL_NAME_IT_IT = new core_1.StringField('externalName_it_IT', Currency, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', Currency, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', Currency, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', Currency, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', Currency, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', Currency, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', Currency, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', Currency, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.STATUS = new core_1.StringField('status', Currency, 'Edm.String');
    /**
     * Static representation of the [[symbol]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.SYMBOL = new core_1.StringField('symbol', Currency, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', Currency, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.DESCRIPTION_TRANSLATION_TEXT_NAV = new core_1.Link('descriptionTranslationTextNav', Currency, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.EXTERNAL_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('externalNameTranslationTextNav', Currency, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', Currency, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', Currency, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.STATUS_NAV = new core_1.OneToOneLink('statusNav', Currency, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currency.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', Currency, WfRequest_1.WfRequest);
    /**
     * All fields of the Currency entity.
     */
    Currency._allFields = [
        Currency.CODE,
        Currency.CREATED_BY,
        Currency.CREATED_DATE_TIME,
        Currency.DEFAULT_DECIMALS,
        Currency.DESCRIPTION_DE_DE,
        Currency.DESCRIPTION_DEFAULT_VALUE,
        Currency.DESCRIPTION_EN_DEBUG,
        Currency.DESCRIPTION_EN_GB,
        Currency.DESCRIPTION_EN_US,
        Currency.DESCRIPTION_ES_ES,
        Currency.DESCRIPTION_ES_MX,
        Currency.DESCRIPTION_FR_CA,
        Currency.DESCRIPTION_FR_FR,
        Currency.DESCRIPTION_IT_IT,
        Currency.DESCRIPTION_LOCALIZED,
        Currency.DESCRIPTION_NL_NL,
        Currency.DESCRIPTION_PT_BR,
        Currency.DESCRIPTION_ZH_CN,
        Currency.EFFECTIVE_END_DATE,
        Currency.EFFECTIVE_START_DATE,
        Currency.EXTERNAL_NAME_DE_DE,
        Currency.EXTERNAL_NAME_DEFAULT_VALUE,
        Currency.EXTERNAL_NAME_EN_DEBUG,
        Currency.EXTERNAL_NAME_EN_GB,
        Currency.EXTERNAL_NAME_EN_US,
        Currency.EXTERNAL_NAME_ES_ES,
        Currency.EXTERNAL_NAME_ES_MX,
        Currency.EXTERNAL_NAME_FR_CA,
        Currency.EXTERNAL_NAME_FR_FR,
        Currency.EXTERNAL_NAME_IT_IT,
        Currency.EXTERNAL_NAME_LOCALIZED,
        Currency.EXTERNAL_NAME_NL_NL,
        Currency.EXTERNAL_NAME_PT_BR,
        Currency.EXTERNAL_NAME_ZH_CN,
        Currency.LAST_MODIFIED_BY,
        Currency.LAST_MODIFIED_DATE_TIME,
        Currency.MDF_SYSTEM_RECORD_STATUS,
        Currency.STATUS,
        Currency.SYMBOL,
        Currency.CREATED_BY_NAV,
        Currency.DESCRIPTION_TRANSLATION_TEXT_NAV,
        Currency.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
        Currency.LAST_MODIFIED_BY_NAV,
        Currency.MDF_SYSTEM_RECORD_STATUS_NAV,
        Currency.STATUS_NAV,
        Currency.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    Currency.ALL_FIELDS = new core_1.AllFields('*', Currency);
    /**
     * All key fields of the Currency entity.
     */
    Currency._keyFields = [Currency.CODE, Currency.EFFECTIVE_START_DATE];
    /**
     * Mapping of all key field names to the respective static field property Currency.
     */
    Currency._keys = Currency._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Currency = exports.Currency || (exports.Currency = {}));
exports.Currency = Currency;
//# sourceMappingURL=Currency.js.map