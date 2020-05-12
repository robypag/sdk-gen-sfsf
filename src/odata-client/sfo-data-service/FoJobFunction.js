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
var FoJobFunctionRequestBuilder_1 = require("./FoJobFunctionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOJobFunction" of service "SFOData".
 */
var FoJobFunction = /** @class */ (function (_super) {
    __extends(FoJobFunction, _super);
    function FoJobFunction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoJobFunction`.
     * @returns A builder that constructs instances of entity type `FoJobFunction`.
     */
    FoJobFunction.builder = function () {
        return core_1.Entity.entityBuilder(FoJobFunction);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoJobFunction` entity type.
     * @returns A `FoJobFunction` request builder.
     */
    FoJobFunction.requestBuilder = function () {
        return new FoJobFunctionRequestBuilder_1.FoJobFunctionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoJobFunction`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoJobFunction`.
     */
    FoJobFunction.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoJobFunction);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoJobFunction.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoJobFunction.
     */
    FoJobFunction._entityName = 'FOJobFunction';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoJobFunction.
     */
    FoJobFunction._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoJobFunction._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoJobFunction;
}(core_1.Entity));
exports.FoJobFunction = FoJobFunction;
var FoTranslation_1 = require("./FoTranslation");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var PickListValueV2_1 = require("./PickListValueV2");
var MdfEnumValue_1 = require("./MdfEnumValue");
var PicklistOption_1 = require("./PicklistOption");
(function (FoJobFunction) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.CREATED_BY = new core_1.StringField('createdBy', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoJobFunction, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.CREATED_ON = new core_1.DateField('createdOn', FoJobFunction, 'Edm.DateTime');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.DESCRIPTION = new core_1.StringField('description', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.DESCRIPTION_DE_DE = new core_1.StringField('description_de_DE', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.DESCRIPTION_DEFAULT_VALUE = new core_1.StringField('description_defaultValue', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.DESCRIPTION_EN_DEBUG = new core_1.StringField('description_en_DEBUG', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.DESCRIPTION_EN_GB = new core_1.StringField('description_en_GB', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.DESCRIPTION_EN_US = new core_1.StringField('description_en_US', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.DESCRIPTION_ES_ES = new core_1.StringField('description_es_ES', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.DESCRIPTION_ES_MX = new core_1.StringField('description_es_MX', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.DESCRIPTION_FR_CA = new core_1.StringField('description_fr_CA', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.DESCRIPTION_FR_FR = new core_1.StringField('description_fr_FR', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.DESCRIPTION_IT_IT = new core_1.StringField('description_it_IT', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.DESCRIPTION_LOCALIZED = new core_1.StringField('description_localized', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.DESCRIPTION_NL_NL = new core_1.StringField('description_nl_NL', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.DESCRIPTION_PT_BR = new core_1.StringField('description_pt_BR', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.DESCRIPTION_ZH_CN = new core_1.StringField('description_zh_CN', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.END_DATE = new core_1.DateField('endDate', FoJobFunction, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.EXTERNAL_CODE = new core_1.StringField('externalCode', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[jobFunctionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.JOB_FUNCTION_TYPE = new core_1.StringField('jobFunctionType', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoJobFunction, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoJobFunction, 'Edm.DateTime');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.NAME = new core_1.StringField('name', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.NAME_DE_DE = new core_1.StringField('name_de_DE', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.NAME_DEFAULT_VALUE = new core_1.StringField('name_defaultValue', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.NAME_EN_DEBUG = new core_1.StringField('name_en_DEBUG', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.NAME_EN_GB = new core_1.StringField('name_en_GB', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.NAME_EN_US = new core_1.StringField('name_en_US', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.NAME_ES_ES = new core_1.StringField('name_es_ES', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.NAME_ES_MX = new core_1.StringField('name_es_MX', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.NAME_FR_CA = new core_1.StringField('name_fr_CA', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.NAME_FR_FR = new core_1.StringField('name_fr_FR', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.NAME_IT_IT = new core_1.StringField('name_it_IT', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.NAME_LOCALIZED = new core_1.StringField('name_localized', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.NAME_NL_NL = new core_1.StringField('name_nl_NL', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.NAME_PT_BR = new core_1.StringField('name_pt_BR', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.NAME_ZH_CN = new core_1.StringField('name_zh_CN', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[parentFunctionCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.PARENT_FUNCTION_CODE = new core_1.StringField('parentFunctionCode', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.START_DATE = new core_1.DateField('startDate', FoJobFunction, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.STATUS = new core_1.StringField('status', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.TYPE = new core_1.StringField('type', FoJobFunction, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.DESCRIPTION_TRANSLATION_NAV = new core_1.OneToOneLink('descriptionTranslationNav', FoJobFunction, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.DESCRIPTION_TRANSLATION_TEXT_NAV = new core_1.Link('descriptionTranslationTextNav', FoJobFunction, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[jobFunctionTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.JOB_FUNCTION_TYPE_NAV = new core_1.OneToOneLink('jobFunctionTypeNav', FoJobFunction, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.NAME_TRANSLATION_NAV = new core_1.OneToOneLink('nameTranslationNav', FoJobFunction, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.NAME_TRANSLATION_TEXT_NAV = new core_1.Link('nameTranslationTextNav', FoJobFunction, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[parentFunctionCodeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.PARENT_FUNCTION_CODE_NAV = new core_1.OneToOneLink('parentFunctionCodeNav', FoJobFunction, FoJobFunction);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.STATUS_NAV = new core_1.OneToOneLink('statusNav', FoJobFunction, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[typeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobFunction.TYPE_NAV = new core_1.OneToOneLink('typeNav', FoJobFunction, PicklistOption_1.PicklistOption);
    /**
     * All fields of the FoJobFunction entity.
     */
    FoJobFunction._allFields = [
        FoJobFunction.CREATED_BY,
        FoJobFunction.CREATED_DATE_TIME,
        FoJobFunction.CREATED_ON,
        FoJobFunction.DESCRIPTION,
        FoJobFunction.DESCRIPTION_DE_DE,
        FoJobFunction.DESCRIPTION_DEFAULT_VALUE,
        FoJobFunction.DESCRIPTION_EN_DEBUG,
        FoJobFunction.DESCRIPTION_EN_GB,
        FoJobFunction.DESCRIPTION_EN_US,
        FoJobFunction.DESCRIPTION_ES_ES,
        FoJobFunction.DESCRIPTION_ES_MX,
        FoJobFunction.DESCRIPTION_FR_CA,
        FoJobFunction.DESCRIPTION_FR_FR,
        FoJobFunction.DESCRIPTION_IT_IT,
        FoJobFunction.DESCRIPTION_LOCALIZED,
        FoJobFunction.DESCRIPTION_NL_NL,
        FoJobFunction.DESCRIPTION_PT_BR,
        FoJobFunction.DESCRIPTION_ZH_CN,
        FoJobFunction.END_DATE,
        FoJobFunction.EXTERNAL_CODE,
        FoJobFunction.JOB_FUNCTION_TYPE,
        FoJobFunction.LAST_MODIFIED_BY,
        FoJobFunction.LAST_MODIFIED_DATE_TIME,
        FoJobFunction.LAST_MODIFIED_ON,
        FoJobFunction.NAME,
        FoJobFunction.NAME_DE_DE,
        FoJobFunction.NAME_DEFAULT_VALUE,
        FoJobFunction.NAME_EN_DEBUG,
        FoJobFunction.NAME_EN_GB,
        FoJobFunction.NAME_EN_US,
        FoJobFunction.NAME_ES_ES,
        FoJobFunction.NAME_ES_MX,
        FoJobFunction.NAME_FR_CA,
        FoJobFunction.NAME_FR_FR,
        FoJobFunction.NAME_IT_IT,
        FoJobFunction.NAME_LOCALIZED,
        FoJobFunction.NAME_NL_NL,
        FoJobFunction.NAME_PT_BR,
        FoJobFunction.NAME_ZH_CN,
        FoJobFunction.PARENT_FUNCTION_CODE,
        FoJobFunction.START_DATE,
        FoJobFunction.STATUS,
        FoJobFunction.TYPE,
        FoJobFunction.DESCRIPTION_TRANSLATION_NAV,
        FoJobFunction.DESCRIPTION_TRANSLATION_TEXT_NAV,
        FoJobFunction.JOB_FUNCTION_TYPE_NAV,
        FoJobFunction.NAME_TRANSLATION_NAV,
        FoJobFunction.NAME_TRANSLATION_TEXT_NAV,
        FoJobFunction.PARENT_FUNCTION_CODE_NAV,
        FoJobFunction.STATUS_NAV,
        FoJobFunction.TYPE_NAV
    ];
    /**
     * All fields selector.
     */
    FoJobFunction.ALL_FIELDS = new core_1.AllFields('*', FoJobFunction);
    /**
     * All key fields of the FoJobFunction entity.
     */
    FoJobFunction._keyFields = [FoJobFunction.EXTERNAL_CODE, FoJobFunction.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoJobFunction.
     */
    FoJobFunction._keys = FoJobFunction._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoJobFunction = exports.FoJobFunction || (exports.FoJobFunction = {}));
exports.FoJobFunction = FoJobFunction;
//# sourceMappingURL=FoJobFunction.js.map