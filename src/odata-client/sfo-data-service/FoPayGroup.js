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
var FoPayGroupRequestBuilder_1 = require("./FoPayGroupRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOPayGroup" of service "SFOData".
 */
var FoPayGroup = /** @class */ (function (_super) {
    __extends(FoPayGroup, _super);
    function FoPayGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoPayGroup`.
     * @returns A builder that constructs instances of entity type `FoPayGroup`.
     */
    FoPayGroup.builder = function () {
        return core_1.Entity.entityBuilder(FoPayGroup);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoPayGroup` entity type.
     * @returns A `FoPayGroup` request builder.
     */
    FoPayGroup.requestBuilder = function () {
        return new FoPayGroupRequestBuilder_1.FoPayGroupRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoPayGroup`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoPayGroup`.
     */
    FoPayGroup.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoPayGroup);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoPayGroup.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoPayGroup.
     */
    FoPayGroup._entityName = 'FOPayGroup';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoPayGroup.
     */
    FoPayGroup._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoPayGroup._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoPayGroup;
}(core_1.Entity));
exports.FoPayGroup = FoPayGroup;
var FoCompany_1 = require("./FoCompany");
var FoTranslation_1 = require("./FoTranslation");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var PicklistOption_1 = require("./PicklistOption");
var PickListValueV2_1 = require("./PickListValueV2");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (FoPayGroup) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.CREATED_BY = new core_1.StringField('createdBy', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoPayGroup, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.CREATED_ON = new core_1.DateField('createdOn', FoPayGroup, 'Edm.DateTime');
    /**
     * Static representation of the [[custToLegalEntityProp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.CUST_TO_LEGAL_ENTITY_PROP = new core_1.StringField('cust_toLegalEntityProp', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[dataDelimiter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.DATA_DELIMITER = new core_1.StringField('dataDelimiter', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[decimalPoint]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.DECIMAL_POINT = new core_1.StringField('decimalPoint', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.DESCRIPTION = new core_1.StringField('description', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.DESCRIPTION_DE_DE = new core_1.StringField('description_de_DE', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.DESCRIPTION_DEFAULT_VALUE = new core_1.StringField('description_defaultValue', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.DESCRIPTION_EN_DEBUG = new core_1.StringField('description_en_DEBUG', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.DESCRIPTION_EN_GB = new core_1.StringField('description_en_GB', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.DESCRIPTION_EN_US = new core_1.StringField('description_en_US', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.DESCRIPTION_ES_ES = new core_1.StringField('description_es_ES', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.DESCRIPTION_ES_MX = new core_1.StringField('description_es_MX', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.DESCRIPTION_FR_CA = new core_1.StringField('description_fr_CA', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.DESCRIPTION_FR_FR = new core_1.StringField('description_fr_FR', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.DESCRIPTION_IT_IT = new core_1.StringField('description_it_IT', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.DESCRIPTION_LOCALIZED = new core_1.StringField('description_localized', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.DESCRIPTION_NL_NL = new core_1.StringField('description_nl_NL', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.DESCRIPTION_PT_BR = new core_1.StringField('description_pt_BR', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.DESCRIPTION_ZH_CN = new core_1.StringField('description_zh_CN', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[earliestChangeDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.EARLIEST_CHANGE_DATE = new core_1.DateField('earliestChangeDate', FoPayGroup, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.END_DATE = new core_1.DateField('endDate', FoPayGroup, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.EXTERNAL_CODE = new core_1.StringField('externalCode', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[lag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.LAG = new core_1.BigNumberField('lag', FoPayGroup, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoPayGroup, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoPayGroup, 'Edm.DateTime');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.NAME = new core_1.StringField('name', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.NAME_DE_DE = new core_1.StringField('name_de_DE', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.NAME_DEFAULT_VALUE = new core_1.StringField('name_defaultValue', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.NAME_EN_DEBUG = new core_1.StringField('name_en_DEBUG', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.NAME_EN_GB = new core_1.StringField('name_en_GB', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.NAME_EN_US = new core_1.StringField('name_en_US', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.NAME_ES_ES = new core_1.StringField('name_es_ES', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.NAME_ES_MX = new core_1.StringField('name_es_MX', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.NAME_FR_CA = new core_1.StringField('name_fr_CA', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.NAME_FR_FR = new core_1.StringField('name_fr_FR', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.NAME_IT_IT = new core_1.StringField('name_it_IT', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.NAME_LOCALIZED = new core_1.StringField('name_localized', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.NAME_NL_NL = new core_1.StringField('name_nl_NL', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.NAME_PT_BR = new core_1.StringField('name_pt_BR', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.NAME_ZH_CN = new core_1.StringField('name_zh_CN', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[payFrequency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.PAY_FREQUENCY = new core_1.StringField('payFrequency', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[paymentFrequency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.PAYMENT_FREQUENCY = new core_1.StringField('paymentFrequency', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[payrollVendorId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.PAYROLL_VENDOR_ID = new core_1.StringField('payrollVendorId', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[primaryContactEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.PRIMARY_CONTACT_EMAIL = new core_1.StringField('primaryContactEmail', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[primaryContactId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.PRIMARY_CONTACT_ID = new core_1.StringField('primaryContactID', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[primaryContactName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.PRIMARY_CONTACT_NAME = new core_1.StringField('primaryContactName', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[secondaryContactEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.SECONDARY_CONTACT_EMAIL = new core_1.StringField('secondaryContactEmail', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[secondaryContactId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.SECONDARY_CONTACT_ID = new core_1.StringField('secondaryContactID', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[secondaryContactName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.SECONDARY_CONTACT_NAME = new core_1.StringField('secondaryContactName', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.START_DATE = new core_1.DateField('startDate', FoPayGroup, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.STATUS = new core_1.StringField('status', FoPayGroup, 'Edm.String');
    /**
     * Static representation of the [[weeksInPayPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.WEEKS_IN_PAY_PERIOD = new core_1.BigNumberField('weeksInPayPeriod', FoPayGroup, 'Edm.Int64');
    /**
     * Static representation of the one-to-many navigation property [[custToLegalEntity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.CUST_TO_LEGAL_ENTITY = new core_1.Link('cust_toLegalEntity', FoPayGroup, FoCompany_1.FoCompany);
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.DESCRIPTION_TRANSLATION_NAV = new core_1.OneToOneLink('descriptionTranslationNav', FoPayGroup, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.DESCRIPTION_TRANSLATION_TEXT_NAV = new core_1.Link('descriptionTranslationTextNav', FoPayGroup, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.NAME_TRANSLATION_NAV = new core_1.OneToOneLink('nameTranslationNav', FoPayGroup, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.NAME_TRANSLATION_TEXT_NAV = new core_1.Link('nameTranslationTextNav', FoPayGroup, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[payFrequencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.PAY_FREQUENCY_NAV = new core_1.OneToOneLink('payFrequencyNav', FoPayGroup, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[paymentFrequencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.PAYMENT_FREQUENCY_NAV = new core_1.OneToOneLink('paymentFrequencyNav', FoPayGroup, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGroup.STATUS_NAV = new core_1.OneToOneLink('statusNav', FoPayGroup, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the FoPayGroup entity.
     */
    FoPayGroup._allFields = [
        FoPayGroup.CREATED_BY,
        FoPayGroup.CREATED_DATE_TIME,
        FoPayGroup.CREATED_ON,
        FoPayGroup.CUST_TO_LEGAL_ENTITY_PROP,
        FoPayGroup.DATA_DELIMITER,
        FoPayGroup.DECIMAL_POINT,
        FoPayGroup.DESCRIPTION,
        FoPayGroup.DESCRIPTION_DE_DE,
        FoPayGroup.DESCRIPTION_DEFAULT_VALUE,
        FoPayGroup.DESCRIPTION_EN_DEBUG,
        FoPayGroup.DESCRIPTION_EN_GB,
        FoPayGroup.DESCRIPTION_EN_US,
        FoPayGroup.DESCRIPTION_ES_ES,
        FoPayGroup.DESCRIPTION_ES_MX,
        FoPayGroup.DESCRIPTION_FR_CA,
        FoPayGroup.DESCRIPTION_FR_FR,
        FoPayGroup.DESCRIPTION_IT_IT,
        FoPayGroup.DESCRIPTION_LOCALIZED,
        FoPayGroup.DESCRIPTION_NL_NL,
        FoPayGroup.DESCRIPTION_PT_BR,
        FoPayGroup.DESCRIPTION_ZH_CN,
        FoPayGroup.EARLIEST_CHANGE_DATE,
        FoPayGroup.END_DATE,
        FoPayGroup.EXTERNAL_CODE,
        FoPayGroup.LAG,
        FoPayGroup.LAST_MODIFIED_BY,
        FoPayGroup.LAST_MODIFIED_DATE_TIME,
        FoPayGroup.LAST_MODIFIED_ON,
        FoPayGroup.NAME,
        FoPayGroup.NAME_DE_DE,
        FoPayGroup.NAME_DEFAULT_VALUE,
        FoPayGroup.NAME_EN_DEBUG,
        FoPayGroup.NAME_EN_GB,
        FoPayGroup.NAME_EN_US,
        FoPayGroup.NAME_ES_ES,
        FoPayGroup.NAME_ES_MX,
        FoPayGroup.NAME_FR_CA,
        FoPayGroup.NAME_FR_FR,
        FoPayGroup.NAME_IT_IT,
        FoPayGroup.NAME_LOCALIZED,
        FoPayGroup.NAME_NL_NL,
        FoPayGroup.NAME_PT_BR,
        FoPayGroup.NAME_ZH_CN,
        FoPayGroup.PAY_FREQUENCY,
        FoPayGroup.PAYMENT_FREQUENCY,
        FoPayGroup.PAYROLL_VENDOR_ID,
        FoPayGroup.PRIMARY_CONTACT_EMAIL,
        FoPayGroup.PRIMARY_CONTACT_ID,
        FoPayGroup.PRIMARY_CONTACT_NAME,
        FoPayGroup.SECONDARY_CONTACT_EMAIL,
        FoPayGroup.SECONDARY_CONTACT_ID,
        FoPayGroup.SECONDARY_CONTACT_NAME,
        FoPayGroup.START_DATE,
        FoPayGroup.STATUS,
        FoPayGroup.WEEKS_IN_PAY_PERIOD,
        FoPayGroup.CUST_TO_LEGAL_ENTITY,
        FoPayGroup.DESCRIPTION_TRANSLATION_NAV,
        FoPayGroup.DESCRIPTION_TRANSLATION_TEXT_NAV,
        FoPayGroup.NAME_TRANSLATION_NAV,
        FoPayGroup.NAME_TRANSLATION_TEXT_NAV,
        FoPayGroup.PAY_FREQUENCY_NAV,
        FoPayGroup.PAYMENT_FREQUENCY_NAV,
        FoPayGroup.STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    FoPayGroup.ALL_FIELDS = new core_1.AllFields('*', FoPayGroup);
    /**
     * All key fields of the FoPayGroup entity.
     */
    FoPayGroup._keyFields = [FoPayGroup.EXTERNAL_CODE, FoPayGroup.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoPayGroup.
     */
    FoPayGroup._keys = FoPayGroup._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoPayGroup = exports.FoPayGroup || (exports.FoPayGroup = {}));
exports.FoPayGroup = FoPayGroup;
//# sourceMappingURL=FoPayGroup.js.map