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
var RoleCompetencyMappingEntityRequestBuilder_1 = require("./RoleCompetencyMappingEntityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "RoleCompetencyMappingEntity" of service "SFOData".
 */
var RoleCompetencyMappingEntity = /** @class */ (function (_super) {
    __extends(RoleCompetencyMappingEntity, _super);
    function RoleCompetencyMappingEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `RoleCompetencyMappingEntity`.
     * @returns A builder that constructs instances of entity type `RoleCompetencyMappingEntity`.
     */
    RoleCompetencyMappingEntity.builder = function () {
        return core_1.Entity.entityBuilder(RoleCompetencyMappingEntity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `RoleCompetencyMappingEntity` entity type.
     * @returns A `RoleCompetencyMappingEntity` request builder.
     */
    RoleCompetencyMappingEntity.requestBuilder = function () {
        return new RoleCompetencyMappingEntityRequestBuilder_1.RoleCompetencyMappingEntityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RoleCompetencyMappingEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RoleCompetencyMappingEntity`.
     */
    RoleCompetencyMappingEntity.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, RoleCompetencyMappingEntity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    RoleCompetencyMappingEntity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for RoleCompetencyMappingEntity.
     */
    RoleCompetencyMappingEntity._entityName = 'RoleCompetencyMappingEntity';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for RoleCompetencyMappingEntity.
     */
    RoleCompetencyMappingEntity._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    RoleCompetencyMappingEntity._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return RoleCompetencyMappingEntity;
}(core_1.Entity));
exports.RoleCompetencyMappingEntity = RoleCompetencyMappingEntity;
var CompetencyEntity_1 = require("./CompetencyEntity");
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
(function (RoleCompetencyMappingEntity) {
    /**
     * Static representation of the [[roleEntityExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.ROLE_ENTITY_EXTERNAL_CODE = new core_1.StringField('RoleEntity_externalCode', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[competency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.COMPETENCY = new core_1.StringField('competency', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.CREATED_BY = new core_1.StringField('createdBy', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', RoleCompetencyMappingEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.EXTERNAL_CODE = new core_1.StringField('externalCode', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', RoleCompetencyMappingEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.RATING_DE_DE = new core_1.StringField('rating_de_DE', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.RATING_DEFAULT_VALUE = new core_1.StringField('rating_defaultValue', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.RATING_EN_DEBUG = new core_1.StringField('rating_en_DEBUG', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.RATING_EN_GB = new core_1.StringField('rating_en_GB', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.RATING_EN_US = new core_1.StringField('rating_en_US', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.RATING_ES_ES = new core_1.StringField('rating_es_ES', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.RATING_ES_MX = new core_1.StringField('rating_es_MX', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.RATING_FR_CA = new core_1.StringField('rating_fr_CA', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.RATING_FR_FR = new core_1.StringField('rating_fr_FR', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.RATING_IT_IT = new core_1.StringField('rating_it_IT', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.RATING_LOCALIZED = new core_1.StringField('rating_localized', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.RATING_NL_NL = new core_1.StringField('rating_nl_NL', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.RATING_PT_BR = new core_1.StringField('rating_pt_BR', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.RATING_ZH_CN = new core_1.StringField('rating_zh_CN', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.STATUS = new core_1.StringField('status', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.SUB_MODULE = new core_1.StringField('subModule', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.WEIGHT_DE_DE = new core_1.StringField('weight_de_DE', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.WEIGHT_DEFAULT_VALUE = new core_1.StringField('weight_defaultValue', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.WEIGHT_EN_DEBUG = new core_1.StringField('weight_en_DEBUG', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.WEIGHT_EN_GB = new core_1.StringField('weight_en_GB', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.WEIGHT_EN_US = new core_1.StringField('weight_en_US', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.WEIGHT_ES_ES = new core_1.StringField('weight_es_ES', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.WEIGHT_ES_MX = new core_1.StringField('weight_es_MX', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.WEIGHT_FR_CA = new core_1.StringField('weight_fr_CA', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.WEIGHT_FR_FR = new core_1.StringField('weight_fr_FR', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.WEIGHT_IT_IT = new core_1.StringField('weight_it_IT', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.WEIGHT_LOCALIZED = new core_1.StringField('weight_localized', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.WEIGHT_NL_NL = new core_1.StringField('weight_nl_NL', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.WEIGHT_PT_BR = new core_1.StringField('weight_pt_BR', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.WEIGHT_ZH_CN = new core_1.StringField('weight_zh_CN', RoleCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[competencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.COMPETENCY_NAV = new core_1.OneToOneLink('competencyNav', RoleCompetencyMappingEntity, CompetencyEntity_1.CompetencyEntity);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', RoleCompetencyMappingEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', RoleCompetencyMappingEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', RoleCompetencyMappingEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[ratingTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.RATING_TRANSLATION_TEXT_NAV = new core_1.Link('ratingTranslationTextNav', RoleCompetencyMappingEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.STATUS_NAV = new core_1.OneToOneLink('statusNav', RoleCompetencyMappingEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[weightTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyMappingEntity.WEIGHT_TRANSLATION_TEXT_NAV = new core_1.Link('weightTranslationTextNav', RoleCompetencyMappingEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * All fields of the RoleCompetencyMappingEntity entity.
     */
    RoleCompetencyMappingEntity._allFields = [
        RoleCompetencyMappingEntity.ROLE_ENTITY_EXTERNAL_CODE,
        RoleCompetencyMappingEntity.COMPETENCY,
        RoleCompetencyMappingEntity.CREATED_BY,
        RoleCompetencyMappingEntity.CREATED_DATE_TIME,
        RoleCompetencyMappingEntity.EXTERNAL_CODE,
        RoleCompetencyMappingEntity.LAST_MODIFIED_BY,
        RoleCompetencyMappingEntity.LAST_MODIFIED_DATE_TIME,
        RoleCompetencyMappingEntity.MDF_SYSTEM_RECORD_STATUS,
        RoleCompetencyMappingEntity.RATING_DE_DE,
        RoleCompetencyMappingEntity.RATING_DEFAULT_VALUE,
        RoleCompetencyMappingEntity.RATING_EN_DEBUG,
        RoleCompetencyMappingEntity.RATING_EN_GB,
        RoleCompetencyMappingEntity.RATING_EN_US,
        RoleCompetencyMappingEntity.RATING_ES_ES,
        RoleCompetencyMappingEntity.RATING_ES_MX,
        RoleCompetencyMappingEntity.RATING_FR_CA,
        RoleCompetencyMappingEntity.RATING_FR_FR,
        RoleCompetencyMappingEntity.RATING_IT_IT,
        RoleCompetencyMappingEntity.RATING_LOCALIZED,
        RoleCompetencyMappingEntity.RATING_NL_NL,
        RoleCompetencyMappingEntity.RATING_PT_BR,
        RoleCompetencyMappingEntity.RATING_ZH_CN,
        RoleCompetencyMappingEntity.STATUS,
        RoleCompetencyMappingEntity.SUB_MODULE,
        RoleCompetencyMappingEntity.WEIGHT_DE_DE,
        RoleCompetencyMappingEntity.WEIGHT_DEFAULT_VALUE,
        RoleCompetencyMappingEntity.WEIGHT_EN_DEBUG,
        RoleCompetencyMappingEntity.WEIGHT_EN_GB,
        RoleCompetencyMappingEntity.WEIGHT_EN_US,
        RoleCompetencyMappingEntity.WEIGHT_ES_ES,
        RoleCompetencyMappingEntity.WEIGHT_ES_MX,
        RoleCompetencyMappingEntity.WEIGHT_FR_CA,
        RoleCompetencyMappingEntity.WEIGHT_FR_FR,
        RoleCompetencyMappingEntity.WEIGHT_IT_IT,
        RoleCompetencyMappingEntity.WEIGHT_LOCALIZED,
        RoleCompetencyMappingEntity.WEIGHT_NL_NL,
        RoleCompetencyMappingEntity.WEIGHT_PT_BR,
        RoleCompetencyMappingEntity.WEIGHT_ZH_CN,
        RoleCompetencyMappingEntity.COMPETENCY_NAV,
        RoleCompetencyMappingEntity.CREATED_BY_NAV,
        RoleCompetencyMappingEntity.LAST_MODIFIED_BY_NAV,
        RoleCompetencyMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
        RoleCompetencyMappingEntity.RATING_TRANSLATION_TEXT_NAV,
        RoleCompetencyMappingEntity.STATUS_NAV,
        RoleCompetencyMappingEntity.WEIGHT_TRANSLATION_TEXT_NAV
    ];
    /**
     * All fields selector.
     */
    RoleCompetencyMappingEntity.ALL_FIELDS = new core_1.AllFields('*', RoleCompetencyMappingEntity);
    /**
     * All key fields of the RoleCompetencyMappingEntity entity.
     */
    RoleCompetencyMappingEntity._keyFields = [RoleCompetencyMappingEntity.ROLE_ENTITY_EXTERNAL_CODE, RoleCompetencyMappingEntity.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property RoleCompetencyMappingEntity.
     */
    RoleCompetencyMappingEntity._keys = RoleCompetencyMappingEntity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(RoleCompetencyMappingEntity = exports.RoleCompetencyMappingEntity || (exports.RoleCompetencyMappingEntity = {}));
exports.RoleCompetencyMappingEntity = RoleCompetencyMappingEntity;
//# sourceMappingURL=RoleCompetencyMappingEntity.js.map