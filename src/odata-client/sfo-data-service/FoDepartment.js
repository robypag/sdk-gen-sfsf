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
var FoDepartmentRequestBuilder_1 = require("./FoDepartmentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FODepartment" of service "SFOData".
 */
var FoDepartment = /** @class */ (function (_super) {
    __extends(FoDepartment, _super);
    function FoDepartment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoDepartment`.
     * @returns A builder that constructs instances of entity type `FoDepartment`.
     */
    FoDepartment.builder = function () {
        return core_1.Entity.entityBuilder(FoDepartment);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoDepartment` entity type.
     * @returns A `FoDepartment` request builder.
     */
    FoDepartment.requestBuilder = function () {
        return new FoDepartmentRequestBuilder_1.FoDepartmentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoDepartment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoDepartment`.
     */
    FoDepartment.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoDepartment);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoDepartment.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoDepartment.
     */
    FoDepartment._entityName = 'FODepartment';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoDepartment.
     */
    FoDepartment._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoDepartment._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoDepartment;
}(core_1.Entity));
exports.FoDepartment = FoDepartment;
var FoCostCenter_1 = require("./FoCostCenter");
var FoDivision_1 = require("./FoDivision");
var FoTranslation_1 = require("./FoTranslation");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (FoDepartment) {
    /**
     * Static representation of the [[costCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.COST_CENTER = new core_1.StringField('costCenter', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.CREATED_BY = new core_1.StringField('createdBy', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoDepartment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.CREATED_ON = new core_1.DateField('createdOn', FoDepartment, 'Edm.DateTime');
    /**
     * Static representation of the [[custToDivisionProp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.CUST_TO_DIVISION_PROP = new core_1.StringField('cust_toDivisionProp', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.DESCRIPTION = new core_1.StringField('description', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.DESCRIPTION_DE_DE = new core_1.StringField('description_de_DE', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.DESCRIPTION_DEFAULT_VALUE = new core_1.StringField('description_defaultValue', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.DESCRIPTION_EN_DEBUG = new core_1.StringField('description_en_DEBUG', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.DESCRIPTION_EN_GB = new core_1.StringField('description_en_GB', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.DESCRIPTION_EN_US = new core_1.StringField('description_en_US', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.DESCRIPTION_ES_ES = new core_1.StringField('description_es_ES', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.DESCRIPTION_ES_MX = new core_1.StringField('description_es_MX', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.DESCRIPTION_FR_CA = new core_1.StringField('description_fr_CA', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.DESCRIPTION_FR_FR = new core_1.StringField('description_fr_FR', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.DESCRIPTION_IT_IT = new core_1.StringField('description_it_IT', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.DESCRIPTION_LOCALIZED = new core_1.StringField('description_localized', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.DESCRIPTION_NL_NL = new core_1.StringField('description_nl_NL', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.DESCRIPTION_PT_BR = new core_1.StringField('description_pt_BR', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.DESCRIPTION_ZH_CN = new core_1.StringField('description_zh_CN', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.END_DATE = new core_1.DateField('endDate', FoDepartment, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.EXTERNAL_CODE = new core_1.StringField('externalCode', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[headOfUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.HEAD_OF_UNIT = new core_1.StringField('headOfUnit', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoDepartment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoDepartment, 'Edm.DateTime');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.NAME = new core_1.StringField('name', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.NAME_DE_DE = new core_1.StringField('name_de_DE', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.NAME_DEFAULT_VALUE = new core_1.StringField('name_defaultValue', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.NAME_EN_DEBUG = new core_1.StringField('name_en_DEBUG', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.NAME_EN_GB = new core_1.StringField('name_en_GB', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.NAME_EN_US = new core_1.StringField('name_en_US', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.NAME_ES_ES = new core_1.StringField('name_es_ES', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.NAME_ES_MX = new core_1.StringField('name_es_MX', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.NAME_FR_CA = new core_1.StringField('name_fr_CA', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.NAME_FR_FR = new core_1.StringField('name_fr_FR', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.NAME_IT_IT = new core_1.StringField('name_it_IT', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.NAME_LOCALIZED = new core_1.StringField('name_localized', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.NAME_NL_NL = new core_1.StringField('name_nl_NL', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.NAME_PT_BR = new core_1.StringField('name_pt_BR', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.NAME_ZH_CN = new core_1.StringField('name_zh_CN', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[parent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.PARENT = new core_1.StringField('parent', FoDepartment, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.START_DATE = new core_1.DateField('startDate', FoDepartment, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.STATUS = new core_1.StringField('status', FoDepartment, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[costCenterNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.COST_CENTER_NAV = new core_1.OneToOneLink('costCenterNav', FoDepartment, FoCostCenter_1.FoCostCenter);
    /**
     * Static representation of the one-to-many navigation property [[custToDivision]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.CUST_TO_DIVISION = new core_1.Link('cust_toDivision', FoDepartment, FoDivision_1.FoDivision);
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.DESCRIPTION_TRANSLATION_NAV = new core_1.OneToOneLink('descriptionTranslationNav', FoDepartment, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.DESCRIPTION_TRANSLATION_TEXT_NAV = new core_1.Link('descriptionTranslationTextNav', FoDepartment, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[headOfUnitNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.HEAD_OF_UNIT_NAV = new core_1.OneToOneLink('headOfUnitNav', FoDepartment, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.NAME_TRANSLATION_NAV = new core_1.OneToOneLink('nameTranslationNav', FoDepartment, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.NAME_TRANSLATION_TEXT_NAV = new core_1.Link('nameTranslationTextNav', FoDepartment, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[parentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.PARENT_NAV = new core_1.OneToOneLink('parentNav', FoDepartment, FoDepartment);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDepartment.STATUS_NAV = new core_1.OneToOneLink('statusNav', FoDepartment, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the FoDepartment entity.
     */
    FoDepartment._allFields = [
        FoDepartment.COST_CENTER,
        FoDepartment.CREATED_BY,
        FoDepartment.CREATED_DATE_TIME,
        FoDepartment.CREATED_ON,
        FoDepartment.CUST_TO_DIVISION_PROP,
        FoDepartment.DESCRIPTION,
        FoDepartment.DESCRIPTION_DE_DE,
        FoDepartment.DESCRIPTION_DEFAULT_VALUE,
        FoDepartment.DESCRIPTION_EN_DEBUG,
        FoDepartment.DESCRIPTION_EN_GB,
        FoDepartment.DESCRIPTION_EN_US,
        FoDepartment.DESCRIPTION_ES_ES,
        FoDepartment.DESCRIPTION_ES_MX,
        FoDepartment.DESCRIPTION_FR_CA,
        FoDepartment.DESCRIPTION_FR_FR,
        FoDepartment.DESCRIPTION_IT_IT,
        FoDepartment.DESCRIPTION_LOCALIZED,
        FoDepartment.DESCRIPTION_NL_NL,
        FoDepartment.DESCRIPTION_PT_BR,
        FoDepartment.DESCRIPTION_ZH_CN,
        FoDepartment.END_DATE,
        FoDepartment.EXTERNAL_CODE,
        FoDepartment.HEAD_OF_UNIT,
        FoDepartment.LAST_MODIFIED_BY,
        FoDepartment.LAST_MODIFIED_DATE_TIME,
        FoDepartment.LAST_MODIFIED_ON,
        FoDepartment.NAME,
        FoDepartment.NAME_DE_DE,
        FoDepartment.NAME_DEFAULT_VALUE,
        FoDepartment.NAME_EN_DEBUG,
        FoDepartment.NAME_EN_GB,
        FoDepartment.NAME_EN_US,
        FoDepartment.NAME_ES_ES,
        FoDepartment.NAME_ES_MX,
        FoDepartment.NAME_FR_CA,
        FoDepartment.NAME_FR_FR,
        FoDepartment.NAME_IT_IT,
        FoDepartment.NAME_LOCALIZED,
        FoDepartment.NAME_NL_NL,
        FoDepartment.NAME_PT_BR,
        FoDepartment.NAME_ZH_CN,
        FoDepartment.PARENT,
        FoDepartment.START_DATE,
        FoDepartment.STATUS,
        FoDepartment.COST_CENTER_NAV,
        FoDepartment.CUST_TO_DIVISION,
        FoDepartment.DESCRIPTION_TRANSLATION_NAV,
        FoDepartment.DESCRIPTION_TRANSLATION_TEXT_NAV,
        FoDepartment.HEAD_OF_UNIT_NAV,
        FoDepartment.NAME_TRANSLATION_NAV,
        FoDepartment.NAME_TRANSLATION_TEXT_NAV,
        FoDepartment.PARENT_NAV,
        FoDepartment.STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    FoDepartment.ALL_FIELDS = new core_1.AllFields('*', FoDepartment);
    /**
     * All key fields of the FoDepartment entity.
     */
    FoDepartment._keyFields = [FoDepartment.EXTERNAL_CODE, FoDepartment.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoDepartment.
     */
    FoDepartment._keys = FoDepartment._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoDepartment = exports.FoDepartment || (exports.FoDepartment = {}));
exports.FoDepartment = FoDepartment;
//# sourceMappingURL=FoDepartment.js.map