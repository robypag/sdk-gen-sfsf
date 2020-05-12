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
var FoDivisionRequestBuilder_1 = require("./FoDivisionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FODivision" of service "SFOData".
 */
var FoDivision = /** @class */ (function (_super) {
    __extends(FoDivision, _super);
    function FoDivision() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoDivision`.
     * @returns A builder that constructs instances of entity type `FoDivision`.
     */
    FoDivision.builder = function () {
        return core_1.Entity.entityBuilder(FoDivision);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoDivision` entity type.
     * @returns A `FoDivision` request builder.
     */
    FoDivision.requestBuilder = function () {
        return new FoDivisionRequestBuilder_1.FoDivisionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoDivision`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoDivision`.
     */
    FoDivision.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoDivision);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoDivision.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoDivision.
     */
    FoDivision._entityName = 'FODivision';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoDivision.
     */
    FoDivision._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoDivision._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoDivision;
}(core_1.Entity));
exports.FoDivision = FoDivision;
var FoBusinessUnit_1 = require("./FoBusinessUnit");
var FoTranslation_1 = require("./FoTranslation");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (FoDivision) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.CREATED_BY = new core_1.StringField('createdBy', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoDivision, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.CREATED_ON = new core_1.DateField('createdOn', FoDivision, 'Edm.DateTime');
    /**
     * Static representation of the [[custToBusinessUnitProp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.CUST_TO_BUSINESS_UNIT_PROP = new core_1.StringField('cust_toBusinessUnitProp', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.DESCRIPTION = new core_1.StringField('description', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.DESCRIPTION_DE_DE = new core_1.StringField('description_de_DE', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.DESCRIPTION_DEFAULT_VALUE = new core_1.StringField('description_defaultValue', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.DESCRIPTION_EN_DEBUG = new core_1.StringField('description_en_DEBUG', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.DESCRIPTION_EN_GB = new core_1.StringField('description_en_GB', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.DESCRIPTION_EN_US = new core_1.StringField('description_en_US', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.DESCRIPTION_ES_ES = new core_1.StringField('description_es_ES', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.DESCRIPTION_ES_MX = new core_1.StringField('description_es_MX', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.DESCRIPTION_FR_CA = new core_1.StringField('description_fr_CA', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.DESCRIPTION_FR_FR = new core_1.StringField('description_fr_FR', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.DESCRIPTION_IT_IT = new core_1.StringField('description_it_IT', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.DESCRIPTION_LOCALIZED = new core_1.StringField('description_localized', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.DESCRIPTION_NL_NL = new core_1.StringField('description_nl_NL', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.DESCRIPTION_PT_BR = new core_1.StringField('description_pt_BR', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.DESCRIPTION_ZH_CN = new core_1.StringField('description_zh_CN', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.END_DATE = new core_1.DateField('endDate', FoDivision, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.EXTERNAL_CODE = new core_1.StringField('externalCode', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[headOfUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.HEAD_OF_UNIT = new core_1.StringField('headOfUnit', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoDivision, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoDivision, 'Edm.DateTime');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.NAME = new core_1.StringField('name', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.NAME_DE_DE = new core_1.StringField('name_de_DE', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.NAME_DEFAULT_VALUE = new core_1.StringField('name_defaultValue', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.NAME_EN_DEBUG = new core_1.StringField('name_en_DEBUG', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.NAME_EN_GB = new core_1.StringField('name_en_GB', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.NAME_EN_US = new core_1.StringField('name_en_US', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.NAME_ES_ES = new core_1.StringField('name_es_ES', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.NAME_ES_MX = new core_1.StringField('name_es_MX', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.NAME_FR_CA = new core_1.StringField('name_fr_CA', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.NAME_FR_FR = new core_1.StringField('name_fr_FR', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.NAME_IT_IT = new core_1.StringField('name_it_IT', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.NAME_LOCALIZED = new core_1.StringField('name_localized', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.NAME_NL_NL = new core_1.StringField('name_nl_NL', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.NAME_PT_BR = new core_1.StringField('name_pt_BR', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.NAME_ZH_CN = new core_1.StringField('name_zh_CN', FoDivision, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.START_DATE = new core_1.DateField('startDate', FoDivision, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.STATUS = new core_1.StringField('status', FoDivision, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[custToBusinessUnit]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.CUST_TO_BUSINESS_UNIT = new core_1.Link('cust_toBusinessUnit', FoDivision, FoBusinessUnit_1.FoBusinessUnit);
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.DESCRIPTION_TRANSLATION_NAV = new core_1.OneToOneLink('descriptionTranslationNav', FoDivision, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.DESCRIPTION_TRANSLATION_TEXT_NAV = new core_1.Link('descriptionTranslationTextNav', FoDivision, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[headOfUnitNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.HEAD_OF_UNIT_NAV = new core_1.OneToOneLink('headOfUnitNav', FoDivision, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.NAME_TRANSLATION_NAV = new core_1.OneToOneLink('nameTranslationNav', FoDivision, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.NAME_TRANSLATION_TEXT_NAV = new core_1.Link('nameTranslationTextNav', FoDivision, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDivision.STATUS_NAV = new core_1.OneToOneLink('statusNav', FoDivision, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the FoDivision entity.
     */
    FoDivision._allFields = [
        FoDivision.CREATED_BY,
        FoDivision.CREATED_DATE_TIME,
        FoDivision.CREATED_ON,
        FoDivision.CUST_TO_BUSINESS_UNIT_PROP,
        FoDivision.DESCRIPTION,
        FoDivision.DESCRIPTION_DE_DE,
        FoDivision.DESCRIPTION_DEFAULT_VALUE,
        FoDivision.DESCRIPTION_EN_DEBUG,
        FoDivision.DESCRIPTION_EN_GB,
        FoDivision.DESCRIPTION_EN_US,
        FoDivision.DESCRIPTION_ES_ES,
        FoDivision.DESCRIPTION_ES_MX,
        FoDivision.DESCRIPTION_FR_CA,
        FoDivision.DESCRIPTION_FR_FR,
        FoDivision.DESCRIPTION_IT_IT,
        FoDivision.DESCRIPTION_LOCALIZED,
        FoDivision.DESCRIPTION_NL_NL,
        FoDivision.DESCRIPTION_PT_BR,
        FoDivision.DESCRIPTION_ZH_CN,
        FoDivision.END_DATE,
        FoDivision.EXTERNAL_CODE,
        FoDivision.HEAD_OF_UNIT,
        FoDivision.LAST_MODIFIED_BY,
        FoDivision.LAST_MODIFIED_DATE_TIME,
        FoDivision.LAST_MODIFIED_ON,
        FoDivision.NAME,
        FoDivision.NAME_DE_DE,
        FoDivision.NAME_DEFAULT_VALUE,
        FoDivision.NAME_EN_DEBUG,
        FoDivision.NAME_EN_GB,
        FoDivision.NAME_EN_US,
        FoDivision.NAME_ES_ES,
        FoDivision.NAME_ES_MX,
        FoDivision.NAME_FR_CA,
        FoDivision.NAME_FR_FR,
        FoDivision.NAME_IT_IT,
        FoDivision.NAME_LOCALIZED,
        FoDivision.NAME_NL_NL,
        FoDivision.NAME_PT_BR,
        FoDivision.NAME_ZH_CN,
        FoDivision.START_DATE,
        FoDivision.STATUS,
        FoDivision.CUST_TO_BUSINESS_UNIT,
        FoDivision.DESCRIPTION_TRANSLATION_NAV,
        FoDivision.DESCRIPTION_TRANSLATION_TEXT_NAV,
        FoDivision.HEAD_OF_UNIT_NAV,
        FoDivision.NAME_TRANSLATION_NAV,
        FoDivision.NAME_TRANSLATION_TEXT_NAV,
        FoDivision.STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    FoDivision.ALL_FIELDS = new core_1.AllFields('*', FoDivision);
    /**
     * All key fields of the FoDivision entity.
     */
    FoDivision._keyFields = [FoDivision.EXTERNAL_CODE, FoDivision.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoDivision.
     */
    FoDivision._keys = FoDivision._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoDivision = exports.FoDivision || (exports.FoDivision = {}));
exports.FoDivision = FoDivision;
//# sourceMappingURL=FoDivision.js.map