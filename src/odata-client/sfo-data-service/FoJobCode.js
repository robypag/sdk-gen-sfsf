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
var FoJobCodeRequestBuilder_1 = require("./FoJobCodeRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOJobCode" of service "SFOData".
 */
var FoJobCode = /** @class */ (function (_super) {
    __extends(FoJobCode, _super);
    function FoJobCode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoJobCode`.
     * @returns A builder that constructs instances of entity type `FoJobCode`.
     */
    FoJobCode.builder = function () {
        return core_1.Entity.entityBuilder(FoJobCode);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoJobCode` entity type.
     * @returns A `FoJobCode` request builder.
     */
    FoJobCode.requestBuilder = function () {
        return new FoJobCodeRequestBuilder_1.FoJobCodeRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoJobCode`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoJobCode`.
     */
    FoJobCode.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoJobCode);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoJobCode.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoJobCode.
     */
    FoJobCode._entityName = 'FOJobCode';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoJobCode.
     */
    FoJobCode._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoJobCode._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoJobCode;
}(core_1.Entity));
exports.FoJobCode = FoJobCode;
var PickListValueV2_1 = require("./PickListValueV2");
var LocalizedData_1 = require("./LocalizedData");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var FoPayGrade_1 = require("./FoPayGrade");
var FoJobFunction_1 = require("./FoJobFunction");
var PicklistOption_1 = require("./PicklistOption");
var FoJobClassLocalAus_1 = require("./FoJobClassLocalAus");
var FoJobClassLocalBra_1 = require("./FoJobClassLocalBra");
var FoJobClassLocalCan_1 = require("./FoJobClassLocalCan");
var FoJobClassLocalDeflt_1 = require("./FoJobClassLocalDeflt");
var FoJobClassLocalFra_1 = require("./FoJobClassLocalFra");
var FoJobClassLocalGbr_1 = require("./FoJobClassLocalGbr");
var FoJobClassLocalIta_1 = require("./FoJobClassLocalIta");
var FoJobClassLocalUsa_1 = require("./FoJobClassLocalUsa");
var MdfEnumValue_1 = require("./MdfEnumValue");
var JobClassificationCountry_1 = require("./JobClassificationCountry");
(function (FoJobCode) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.CREATED_BY = new core_1.StringField('createdBy', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoJobCode, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.CREATED_ON = new core_1.DateField('createdOn', FoJobCode, 'Edm.DateTime');
    /**
     * Static representation of the [[defaultJobLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.DEFAULT_JOB_LEVEL = new core_1.StringField('defaultJobLevel', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.DESCRIPTION = new core_1.StringField('description', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.DESCRIPTION_DE_DE = new core_1.StringField('description_de_DE', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.DESCRIPTION_DEFAULT_VALUE = new core_1.StringField('description_defaultValue', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.DESCRIPTION_EN_DEBUG = new core_1.StringField('description_en_DEBUG', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.DESCRIPTION_EN_GB = new core_1.StringField('description_en_GB', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.DESCRIPTION_EN_US = new core_1.StringField('description_en_US', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.DESCRIPTION_ES_ES = new core_1.StringField('description_es_ES', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.DESCRIPTION_ES_MX = new core_1.StringField('description_es_MX', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.DESCRIPTION_FR_CA = new core_1.StringField('description_fr_CA', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.DESCRIPTION_FR_FR = new core_1.StringField('description_fr_FR', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.DESCRIPTION_IT_IT = new core_1.StringField('description_it_IT', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.DESCRIPTION_LOCALIZED = new core_1.StringField('description_localized', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.DESCRIPTION_NL_NL = new core_1.StringField('description_nl_NL', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.DESCRIPTION_PT_BR = new core_1.StringField('description_pt_BR', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.DESCRIPTION_ZH_CN = new core_1.StringField('description_zh_CN', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.END_DATE = new core_1.DateField('endDate', FoJobCode, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.EXTERNAL_CODE = new core_1.StringField('externalCode', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[grade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.GRADE = new core_1.StringField('grade', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[jobFunction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.JOB_FUNCTION = new core_1.StringField('jobFunction', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[jobLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.JOB_LEVEL = new core_1.StringField('jobLevel', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoJobCode, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoJobCode, 'Edm.DateTime');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.NAME = new core_1.StringField('name', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.NAME_DE_DE = new core_1.StringField('name_de_DE', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.NAME_DEFAULT_VALUE = new core_1.StringField('name_defaultValue', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.NAME_EN_DEBUG = new core_1.StringField('name_en_DEBUG', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.NAME_EN_GB = new core_1.StringField('name_en_GB', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.NAME_EN_US = new core_1.StringField('name_en_US', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.NAME_ES_ES = new core_1.StringField('name_es_ES', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.NAME_ES_MX = new core_1.StringField('name_es_MX', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.NAME_FR_CA = new core_1.StringField('name_fr_CA', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.NAME_FR_FR = new core_1.StringField('name_fr_FR', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.NAME_IT_IT = new core_1.StringField('name_it_IT', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.NAME_LOCALIZED = new core_1.StringField('name_localized', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.NAME_NL_NL = new core_1.StringField('name_nl_NL', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.NAME_PT_BR = new core_1.StringField('name_pt_BR', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.NAME_ZH_CN = new core_1.StringField('name_zh_CN', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[parentJobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.PARENT_JOB_CODE = new core_1.StringField('parentJobCode', FoJobCode, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.START_DATE = new core_1.DateField('startDate', FoJobCode, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.STATUS = new core_1.StringField('status', FoJobCode, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[defaultJobLevelNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.DEFAULT_JOB_LEVEL_NAV = new core_1.OneToOneLink('defaultJobLevelNav', FoJobCode, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.DESCRIPTION_TRANSLATION_NAV = new core_1.Link('descriptionTranslationNav', FoJobCode, LocalizedData_1.LocalizedData);
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.DESCRIPTION_TRANSLATION_TEXT_NAV = new core_1.Link('descriptionTranslationTextNav', FoJobCode, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[gradeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.GRADE_NAV = new core_1.OneToOneLink('gradeNav', FoJobCode, FoPayGrade_1.FoPayGrade);
    /**
     * Static representation of the one-to-one navigation property [[jobFunctionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.JOB_FUNCTION_NAV = new core_1.OneToOneLink('jobFunctionNav', FoJobCode, FoJobFunction_1.FoJobFunction);
    /**
     * Static representation of the one-to-one navigation property [[jobLevelNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.JOB_LEVEL_NAV = new core_1.OneToOneLink('jobLevelNav', FoJobCode, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[localNavAus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.LOCAL_NAV_AUS = new core_1.OneToOneLink('localNavAUS', FoJobCode, FoJobClassLocalAus_1.FoJobClassLocalAus);
    /**
     * Static representation of the one-to-one navigation property [[localNavBra]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.LOCAL_NAV_BRA = new core_1.OneToOneLink('localNavBRA', FoJobCode, FoJobClassLocalBra_1.FoJobClassLocalBra);
    /**
     * Static representation of the one-to-one navigation property [[localNavCan]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.LOCAL_NAV_CAN = new core_1.OneToOneLink('localNavCAN', FoJobCode, FoJobClassLocalCan_1.FoJobClassLocalCan);
    /**
     * Static representation of the one-to-one navigation property [[localNavDeflt]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.LOCAL_NAV_DEFLT = new core_1.OneToOneLink('localNavDEFLT', FoJobCode, FoJobClassLocalDeflt_1.FoJobClassLocalDeflt);
    /**
     * Static representation of the one-to-one navigation property [[localNavFra]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.LOCAL_NAV_FRA = new core_1.OneToOneLink('localNavFRA', FoJobCode, FoJobClassLocalFra_1.FoJobClassLocalFra);
    /**
     * Static representation of the one-to-one navigation property [[localNavGbr]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.LOCAL_NAV_GBR = new core_1.OneToOneLink('localNavGBR', FoJobCode, FoJobClassLocalGbr_1.FoJobClassLocalGbr);
    /**
     * Static representation of the one-to-one navigation property [[localNavIta]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.LOCAL_NAV_ITA = new core_1.OneToOneLink('localNavITA', FoJobCode, FoJobClassLocalIta_1.FoJobClassLocalIta);
    /**
     * Static representation of the one-to-one navigation property [[localNavUsa]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.LOCAL_NAV_USA = new core_1.OneToOneLink('localNavUSA', FoJobCode, FoJobClassLocalUsa_1.FoJobClassLocalUsa);
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.NAME_TRANSLATION_NAV = new core_1.Link('nameTranslationNav', FoJobCode, LocalizedData_1.LocalizedData);
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.NAME_TRANSLATION_TEXT_NAV = new core_1.Link('nameTranslationTextNav', FoJobCode, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[parentJobCodeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.PARENT_JOB_CODE_NAV = new core_1.OneToOneLink('parentJobCodeNav', FoJobCode, FoJobCode);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.STATUS_NAV = new core_1.OneToOneLink('statusNav', FoJobCode, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[toJobClassificationCountry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobCode.TO_JOB_CLASSIFICATION_COUNTRY = new core_1.Link('toJobClassificationCountry', FoJobCode, JobClassificationCountry_1.JobClassificationCountry);
    /**
     * All fields of the FoJobCode entity.
     */
    FoJobCode._allFields = [
        FoJobCode.CREATED_BY,
        FoJobCode.CREATED_DATE_TIME,
        FoJobCode.CREATED_ON,
        FoJobCode.DEFAULT_JOB_LEVEL,
        FoJobCode.DESCRIPTION,
        FoJobCode.DESCRIPTION_DE_DE,
        FoJobCode.DESCRIPTION_DEFAULT_VALUE,
        FoJobCode.DESCRIPTION_EN_DEBUG,
        FoJobCode.DESCRIPTION_EN_GB,
        FoJobCode.DESCRIPTION_EN_US,
        FoJobCode.DESCRIPTION_ES_ES,
        FoJobCode.DESCRIPTION_ES_MX,
        FoJobCode.DESCRIPTION_FR_CA,
        FoJobCode.DESCRIPTION_FR_FR,
        FoJobCode.DESCRIPTION_IT_IT,
        FoJobCode.DESCRIPTION_LOCALIZED,
        FoJobCode.DESCRIPTION_NL_NL,
        FoJobCode.DESCRIPTION_PT_BR,
        FoJobCode.DESCRIPTION_ZH_CN,
        FoJobCode.END_DATE,
        FoJobCode.EXTERNAL_CODE,
        FoJobCode.GRADE,
        FoJobCode.JOB_FUNCTION,
        FoJobCode.JOB_LEVEL,
        FoJobCode.LAST_MODIFIED_BY,
        FoJobCode.LAST_MODIFIED_DATE_TIME,
        FoJobCode.LAST_MODIFIED_ON,
        FoJobCode.NAME,
        FoJobCode.NAME_DE_DE,
        FoJobCode.NAME_DEFAULT_VALUE,
        FoJobCode.NAME_EN_DEBUG,
        FoJobCode.NAME_EN_GB,
        FoJobCode.NAME_EN_US,
        FoJobCode.NAME_ES_ES,
        FoJobCode.NAME_ES_MX,
        FoJobCode.NAME_FR_CA,
        FoJobCode.NAME_FR_FR,
        FoJobCode.NAME_IT_IT,
        FoJobCode.NAME_LOCALIZED,
        FoJobCode.NAME_NL_NL,
        FoJobCode.NAME_PT_BR,
        FoJobCode.NAME_ZH_CN,
        FoJobCode.PARENT_JOB_CODE,
        FoJobCode.START_DATE,
        FoJobCode.STATUS,
        FoJobCode.DEFAULT_JOB_LEVEL_NAV,
        FoJobCode.DESCRIPTION_TRANSLATION_NAV,
        FoJobCode.DESCRIPTION_TRANSLATION_TEXT_NAV,
        FoJobCode.GRADE_NAV,
        FoJobCode.JOB_FUNCTION_NAV,
        FoJobCode.JOB_LEVEL_NAV,
        FoJobCode.LOCAL_NAV_AUS,
        FoJobCode.LOCAL_NAV_BRA,
        FoJobCode.LOCAL_NAV_CAN,
        FoJobCode.LOCAL_NAV_DEFLT,
        FoJobCode.LOCAL_NAV_FRA,
        FoJobCode.LOCAL_NAV_GBR,
        FoJobCode.LOCAL_NAV_ITA,
        FoJobCode.LOCAL_NAV_USA,
        FoJobCode.NAME_TRANSLATION_NAV,
        FoJobCode.NAME_TRANSLATION_TEXT_NAV,
        FoJobCode.PARENT_JOB_CODE_NAV,
        FoJobCode.STATUS_NAV,
        FoJobCode.TO_JOB_CLASSIFICATION_COUNTRY
    ];
    /**
     * All fields selector.
     */
    FoJobCode.ALL_FIELDS = new core_1.AllFields('*', FoJobCode);
    /**
     * All key fields of the FoJobCode entity.
     */
    FoJobCode._keyFields = [FoJobCode.EXTERNAL_CODE, FoJobCode.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoJobCode.
     */
    FoJobCode._keys = FoJobCode._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoJobCode = exports.FoJobCode || (exports.FoJobCode = {}));
exports.FoJobCode = FoJobCode;
//# sourceMappingURL=FoJobCode.js.map