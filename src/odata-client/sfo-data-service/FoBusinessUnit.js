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
var FoBusinessUnitRequestBuilder_1 = require("./FoBusinessUnitRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOBusinessUnit" of service "SFOData".
 */
var FoBusinessUnit = /** @class */ (function (_super) {
    __extends(FoBusinessUnit, _super);
    function FoBusinessUnit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoBusinessUnit`.
     * @returns A builder that constructs instances of entity type `FoBusinessUnit`.
     */
    FoBusinessUnit.builder = function () {
        return core_1.Entity.entityBuilder(FoBusinessUnit);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoBusinessUnit` entity type.
     * @returns A `FoBusinessUnit` request builder.
     */
    FoBusinessUnit.requestBuilder = function () {
        return new FoBusinessUnitRequestBuilder_1.FoBusinessUnitRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoBusinessUnit`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoBusinessUnit`.
     */
    FoBusinessUnit.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoBusinessUnit);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoBusinessUnit.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoBusinessUnit.
     */
    FoBusinessUnit._entityName = 'FOBusinessUnit';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoBusinessUnit.
     */
    FoBusinessUnit._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoBusinessUnit._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoBusinessUnit;
}(core_1.Entity));
exports.FoBusinessUnit = FoBusinessUnit;
var FoTranslation_1 = require("./FoTranslation");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (FoBusinessUnit) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.CREATED_BY = new core_1.StringField('createdBy', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoBusinessUnit, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.CREATED_ON = new core_1.DateField('createdOn', FoBusinessUnit, 'Edm.DateTime');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.DESCRIPTION = new core_1.StringField('description', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.DESCRIPTION_DE_DE = new core_1.StringField('description_de_DE', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.DESCRIPTION_DEFAULT_VALUE = new core_1.StringField('description_defaultValue', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.DESCRIPTION_EN_DEBUG = new core_1.StringField('description_en_DEBUG', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.DESCRIPTION_EN_GB = new core_1.StringField('description_en_GB', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.DESCRIPTION_EN_US = new core_1.StringField('description_en_US', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.DESCRIPTION_ES_ES = new core_1.StringField('description_es_ES', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.DESCRIPTION_ES_MX = new core_1.StringField('description_es_MX', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.DESCRIPTION_FR_CA = new core_1.StringField('description_fr_CA', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.DESCRIPTION_FR_FR = new core_1.StringField('description_fr_FR', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.DESCRIPTION_IT_IT = new core_1.StringField('description_it_IT', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.DESCRIPTION_LOCALIZED = new core_1.StringField('description_localized', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.DESCRIPTION_NL_NL = new core_1.StringField('description_nl_NL', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.DESCRIPTION_PT_BR = new core_1.StringField('description_pt_BR', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.DESCRIPTION_ZH_CN = new core_1.StringField('description_zh_CN', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.END_DATE = new core_1.DateField('endDate', FoBusinessUnit, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.EXTERNAL_CODE = new core_1.StringField('externalCode', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[headOfUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.HEAD_OF_UNIT = new core_1.StringField('headOfUnit', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoBusinessUnit, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoBusinessUnit, 'Edm.DateTime');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.NAME = new core_1.StringField('name', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.NAME_DE_DE = new core_1.StringField('name_de_DE', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.NAME_DEFAULT_VALUE = new core_1.StringField('name_defaultValue', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.NAME_EN_DEBUG = new core_1.StringField('name_en_DEBUG', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.NAME_EN_GB = new core_1.StringField('name_en_GB', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.NAME_EN_US = new core_1.StringField('name_en_US', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.NAME_ES_ES = new core_1.StringField('name_es_ES', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.NAME_ES_MX = new core_1.StringField('name_es_MX', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.NAME_FR_CA = new core_1.StringField('name_fr_CA', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.NAME_FR_FR = new core_1.StringField('name_fr_FR', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.NAME_IT_IT = new core_1.StringField('name_it_IT', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.NAME_LOCALIZED = new core_1.StringField('name_localized', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.NAME_NL_NL = new core_1.StringField('name_nl_NL', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.NAME_PT_BR = new core_1.StringField('name_pt_BR', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.NAME_ZH_CN = new core_1.StringField('name_zh_CN', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.START_DATE = new core_1.DateField('startDate', FoBusinessUnit, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.STATUS = new core_1.StringField('status', FoBusinessUnit, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.DESCRIPTION_TRANSLATION_NAV = new core_1.OneToOneLink('descriptionTranslationNav', FoBusinessUnit, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.DESCRIPTION_TRANSLATION_TEXT_NAV = new core_1.Link('descriptionTranslationTextNav', FoBusinessUnit, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[headOfUnitNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.HEAD_OF_UNIT_NAV = new core_1.OneToOneLink('headOfUnitNav', FoBusinessUnit, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.NAME_TRANSLATION_NAV = new core_1.OneToOneLink('nameTranslationNav', FoBusinessUnit, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.NAME_TRANSLATION_TEXT_NAV = new core_1.Link('nameTranslationTextNav', FoBusinessUnit, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoBusinessUnit.STATUS_NAV = new core_1.OneToOneLink('statusNav', FoBusinessUnit, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the FoBusinessUnit entity.
     */
    FoBusinessUnit._allFields = [
        FoBusinessUnit.CREATED_BY,
        FoBusinessUnit.CREATED_DATE_TIME,
        FoBusinessUnit.CREATED_ON,
        FoBusinessUnit.DESCRIPTION,
        FoBusinessUnit.DESCRIPTION_DE_DE,
        FoBusinessUnit.DESCRIPTION_DEFAULT_VALUE,
        FoBusinessUnit.DESCRIPTION_EN_DEBUG,
        FoBusinessUnit.DESCRIPTION_EN_GB,
        FoBusinessUnit.DESCRIPTION_EN_US,
        FoBusinessUnit.DESCRIPTION_ES_ES,
        FoBusinessUnit.DESCRIPTION_ES_MX,
        FoBusinessUnit.DESCRIPTION_FR_CA,
        FoBusinessUnit.DESCRIPTION_FR_FR,
        FoBusinessUnit.DESCRIPTION_IT_IT,
        FoBusinessUnit.DESCRIPTION_LOCALIZED,
        FoBusinessUnit.DESCRIPTION_NL_NL,
        FoBusinessUnit.DESCRIPTION_PT_BR,
        FoBusinessUnit.DESCRIPTION_ZH_CN,
        FoBusinessUnit.END_DATE,
        FoBusinessUnit.EXTERNAL_CODE,
        FoBusinessUnit.HEAD_OF_UNIT,
        FoBusinessUnit.LAST_MODIFIED_BY,
        FoBusinessUnit.LAST_MODIFIED_DATE_TIME,
        FoBusinessUnit.LAST_MODIFIED_ON,
        FoBusinessUnit.NAME,
        FoBusinessUnit.NAME_DE_DE,
        FoBusinessUnit.NAME_DEFAULT_VALUE,
        FoBusinessUnit.NAME_EN_DEBUG,
        FoBusinessUnit.NAME_EN_GB,
        FoBusinessUnit.NAME_EN_US,
        FoBusinessUnit.NAME_ES_ES,
        FoBusinessUnit.NAME_ES_MX,
        FoBusinessUnit.NAME_FR_CA,
        FoBusinessUnit.NAME_FR_FR,
        FoBusinessUnit.NAME_IT_IT,
        FoBusinessUnit.NAME_LOCALIZED,
        FoBusinessUnit.NAME_NL_NL,
        FoBusinessUnit.NAME_PT_BR,
        FoBusinessUnit.NAME_ZH_CN,
        FoBusinessUnit.START_DATE,
        FoBusinessUnit.STATUS,
        FoBusinessUnit.DESCRIPTION_TRANSLATION_NAV,
        FoBusinessUnit.DESCRIPTION_TRANSLATION_TEXT_NAV,
        FoBusinessUnit.HEAD_OF_UNIT_NAV,
        FoBusinessUnit.NAME_TRANSLATION_NAV,
        FoBusinessUnit.NAME_TRANSLATION_TEXT_NAV,
        FoBusinessUnit.STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    FoBusinessUnit.ALL_FIELDS = new core_1.AllFields('*', FoBusinessUnit);
    /**
     * All key fields of the FoBusinessUnit entity.
     */
    FoBusinessUnit._keyFields = [FoBusinessUnit.EXTERNAL_CODE, FoBusinessUnit.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoBusinessUnit.
     */
    FoBusinessUnit._keys = FoBusinessUnit._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoBusinessUnit = exports.FoBusinessUnit || (exports.FoBusinessUnit = {}));
exports.FoBusinessUnit = FoBusinessUnit;
//# sourceMappingURL=FoBusinessUnit.js.map