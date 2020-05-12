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
var FoCostCenterRequestBuilder_1 = require("./FoCostCenterRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOCostCenter" of service "SFOData".
 */
var FoCostCenter = /** @class */ (function (_super) {
    __extends(FoCostCenter, _super);
    function FoCostCenter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoCostCenter`.
     * @returns A builder that constructs instances of entity type `FoCostCenter`.
     */
    FoCostCenter.builder = function () {
        return core_1.Entity.entityBuilder(FoCostCenter);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoCostCenter` entity type.
     * @returns A `FoCostCenter` request builder.
     */
    FoCostCenter.requestBuilder = function () {
        return new FoCostCenterRequestBuilder_1.FoCostCenterRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoCostCenter`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoCostCenter`.
     */
    FoCostCenter.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoCostCenter);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoCostCenter.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoCostCenter.
     */
    FoCostCenter._entityName = 'FOCostCenter';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoCostCenter.
     */
    FoCostCenter._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoCostCenter._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoCostCenter;
}(core_1.Entity));
exports.FoCostCenter = FoCostCenter;
var User_1 = require("./User");
var FoCompany_1 = require("./FoCompany");
var FoTranslation_1 = require("./FoTranslation");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (FoCostCenter) {
    /**
     * Static representation of the [[costcenterExternalObjectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.COSTCENTER_EXTERNAL_OBJECT_ID = new core_1.StringField('costcenterExternalObjectID', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[costcenterManager]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.COSTCENTER_MANAGER = new core_1.StringField('costcenterManager', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.CREATED_BY = new core_1.StringField('createdBy', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoCostCenter, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.CREATED_ON = new core_1.DateField('createdOn', FoCostCenter, 'Edm.DateTime');
    /**
     * Static representation of the [[custToLegalEntityProp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.CUST_TO_LEGAL_ENTITY_PROP = new core_1.StringField('cust_toLegalEntityProp', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.DESCRIPTION = new core_1.StringField('description', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.DESCRIPTION_DE_DE = new core_1.StringField('description_de_DE', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.DESCRIPTION_DEFAULT_VALUE = new core_1.StringField('description_defaultValue', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.DESCRIPTION_EN_DEBUG = new core_1.StringField('description_en_DEBUG', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.DESCRIPTION_EN_GB = new core_1.StringField('description_en_GB', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.DESCRIPTION_EN_US = new core_1.StringField('description_en_US', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.DESCRIPTION_ES_ES = new core_1.StringField('description_es_ES', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.DESCRIPTION_ES_MX = new core_1.StringField('description_es_MX', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.DESCRIPTION_FR_CA = new core_1.StringField('description_fr_CA', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.DESCRIPTION_FR_FR = new core_1.StringField('description_fr_FR', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.DESCRIPTION_IT_IT = new core_1.StringField('description_it_IT', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.DESCRIPTION_LOCALIZED = new core_1.StringField('description_localized', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.DESCRIPTION_NL_NL = new core_1.StringField('description_nl_NL', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.DESCRIPTION_PT_BR = new core_1.StringField('description_pt_BR', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.DESCRIPTION_ZH_CN = new core_1.StringField('description_zh_CN', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.END_DATE = new core_1.DateField('endDate', FoCostCenter, 'Edm.DateTime');
    /**
     * Static representation of the [[entityUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.ENTITY_UUID = new core_1.StringField('entityUUID', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.EXTERNAL_CODE = new core_1.StringField('externalCode', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[glStatementCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.GL_STATEMENT_CODE = new core_1.StringField('glStatementCode', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoCostCenter, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoCostCenter, 'Edm.DateTime');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.NAME = new core_1.StringField('name', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.NAME_DE_DE = new core_1.StringField('name_de_DE', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.NAME_DEFAULT_VALUE = new core_1.StringField('name_defaultValue', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.NAME_EN_DEBUG = new core_1.StringField('name_en_DEBUG', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.NAME_EN_GB = new core_1.StringField('name_en_GB', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.NAME_EN_US = new core_1.StringField('name_en_US', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.NAME_ES_ES = new core_1.StringField('name_es_ES', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.NAME_ES_MX = new core_1.StringField('name_es_MX', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.NAME_FR_CA = new core_1.StringField('name_fr_CA', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.NAME_FR_FR = new core_1.StringField('name_fr_FR', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.NAME_IT_IT = new core_1.StringField('name_it_IT', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.NAME_LOCALIZED = new core_1.StringField('name_localized', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.NAME_NL_NL = new core_1.StringField('name_nl_NL', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.NAME_PT_BR = new core_1.StringField('name_pt_BR', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.NAME_ZH_CN = new core_1.StringField('name_zh_CN', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[parent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.PARENT = new core_1.StringField('parent', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.START_DATE = new core_1.DateField('startDate', FoCostCenter, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.STATUS = new core_1.StringField('status', FoCostCenter, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[costcenterManagerNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.COSTCENTER_MANAGER_NAV = new core_1.OneToOneLink('costcenterManagerNav', FoCostCenter, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[custToLegalEntity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.CUST_TO_LEGAL_ENTITY = new core_1.Link('cust_toLegalEntity', FoCostCenter, FoCompany_1.FoCompany);
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.DESCRIPTION_TRANSLATION_NAV = new core_1.OneToOneLink('descriptionTranslationNav', FoCostCenter, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.DESCRIPTION_TRANSLATION_TEXT_NAV = new core_1.Link('descriptionTranslationTextNav', FoCostCenter, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.NAME_TRANSLATION_NAV = new core_1.OneToOneLink('nameTranslationNav', FoCostCenter, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.NAME_TRANSLATION_TEXT_NAV = new core_1.Link('nameTranslationTextNav', FoCostCenter, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[parentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.PARENT_NAV = new core_1.OneToOneLink('parentNav', FoCostCenter, FoCostCenter);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCostCenter.STATUS_NAV = new core_1.OneToOneLink('statusNav', FoCostCenter, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the FoCostCenter entity.
     */
    FoCostCenter._allFields = [
        FoCostCenter.COSTCENTER_EXTERNAL_OBJECT_ID,
        FoCostCenter.COSTCENTER_MANAGER,
        FoCostCenter.CREATED_BY,
        FoCostCenter.CREATED_DATE_TIME,
        FoCostCenter.CREATED_ON,
        FoCostCenter.CUST_TO_LEGAL_ENTITY_PROP,
        FoCostCenter.DESCRIPTION,
        FoCostCenter.DESCRIPTION_DE_DE,
        FoCostCenter.DESCRIPTION_DEFAULT_VALUE,
        FoCostCenter.DESCRIPTION_EN_DEBUG,
        FoCostCenter.DESCRIPTION_EN_GB,
        FoCostCenter.DESCRIPTION_EN_US,
        FoCostCenter.DESCRIPTION_ES_ES,
        FoCostCenter.DESCRIPTION_ES_MX,
        FoCostCenter.DESCRIPTION_FR_CA,
        FoCostCenter.DESCRIPTION_FR_FR,
        FoCostCenter.DESCRIPTION_IT_IT,
        FoCostCenter.DESCRIPTION_LOCALIZED,
        FoCostCenter.DESCRIPTION_NL_NL,
        FoCostCenter.DESCRIPTION_PT_BR,
        FoCostCenter.DESCRIPTION_ZH_CN,
        FoCostCenter.END_DATE,
        FoCostCenter.ENTITY_UUID,
        FoCostCenter.EXTERNAL_CODE,
        FoCostCenter.GL_STATEMENT_CODE,
        FoCostCenter.LAST_MODIFIED_BY,
        FoCostCenter.LAST_MODIFIED_DATE_TIME,
        FoCostCenter.LAST_MODIFIED_ON,
        FoCostCenter.NAME,
        FoCostCenter.NAME_DE_DE,
        FoCostCenter.NAME_DEFAULT_VALUE,
        FoCostCenter.NAME_EN_DEBUG,
        FoCostCenter.NAME_EN_GB,
        FoCostCenter.NAME_EN_US,
        FoCostCenter.NAME_ES_ES,
        FoCostCenter.NAME_ES_MX,
        FoCostCenter.NAME_FR_CA,
        FoCostCenter.NAME_FR_FR,
        FoCostCenter.NAME_IT_IT,
        FoCostCenter.NAME_LOCALIZED,
        FoCostCenter.NAME_NL_NL,
        FoCostCenter.NAME_PT_BR,
        FoCostCenter.NAME_ZH_CN,
        FoCostCenter.PARENT,
        FoCostCenter.START_DATE,
        FoCostCenter.STATUS,
        FoCostCenter.COSTCENTER_MANAGER_NAV,
        FoCostCenter.CUST_TO_LEGAL_ENTITY,
        FoCostCenter.DESCRIPTION_TRANSLATION_NAV,
        FoCostCenter.DESCRIPTION_TRANSLATION_TEXT_NAV,
        FoCostCenter.NAME_TRANSLATION_NAV,
        FoCostCenter.NAME_TRANSLATION_TEXT_NAV,
        FoCostCenter.PARENT_NAV,
        FoCostCenter.STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    FoCostCenter.ALL_FIELDS = new core_1.AllFields('*', FoCostCenter);
    /**
     * All key fields of the FoCostCenter entity.
     */
    FoCostCenter._keyFields = [FoCostCenter.EXTERNAL_CODE, FoCostCenter.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoCostCenter.
     */
    FoCostCenter._keys = FoCostCenter._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoCostCenter = exports.FoCostCenter || (exports.FoCostCenter = {}));
exports.FoCostCenter = FoCostCenter;
//# sourceMappingURL=FoCostCenter.js.map