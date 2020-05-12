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
var RoleCompetencyBehaviorMappingEntityRequestBuilder_1 = require("./RoleCompetencyBehaviorMappingEntityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "RoleCompetencyBehaviorMappingEntity" of service "SFOData".
 */
var RoleCompetencyBehaviorMappingEntity = /** @class */ (function (_super) {
    __extends(RoleCompetencyBehaviorMappingEntity, _super);
    function RoleCompetencyBehaviorMappingEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `RoleCompetencyBehaviorMappingEntity`.
     * @returns A builder that constructs instances of entity type `RoleCompetencyBehaviorMappingEntity`.
     */
    RoleCompetencyBehaviorMappingEntity.builder = function () {
        return core_1.Entity.entityBuilder(RoleCompetencyBehaviorMappingEntity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `RoleCompetencyBehaviorMappingEntity` entity type.
     * @returns A `RoleCompetencyBehaviorMappingEntity` request builder.
     */
    RoleCompetencyBehaviorMappingEntity.requestBuilder = function () {
        return new RoleCompetencyBehaviorMappingEntityRequestBuilder_1.RoleCompetencyBehaviorMappingEntityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RoleCompetencyBehaviorMappingEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RoleCompetencyBehaviorMappingEntity`.
     */
    RoleCompetencyBehaviorMappingEntity.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, RoleCompetencyBehaviorMappingEntity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    RoleCompetencyBehaviorMappingEntity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for RoleCompetencyBehaviorMappingEntity.
     */
    RoleCompetencyBehaviorMappingEntity._entityName = 'RoleCompetencyBehaviorMappingEntity';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for RoleCompetencyBehaviorMappingEntity.
     */
    RoleCompetencyBehaviorMappingEntity._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    RoleCompetencyBehaviorMappingEntity._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return RoleCompetencyBehaviorMappingEntity;
}(core_1.Entity));
exports.RoleCompetencyBehaviorMappingEntity = RoleCompetencyBehaviorMappingEntity;
var BehaviorMappingEntity_1 = require("./BehaviorMappingEntity");
var CompetencyEntity_1 = require("./CompetencyEntity");
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
(function (RoleCompetencyBehaviorMappingEntity) {
    /**
     * Static representation of the [[roleEntityExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.ROLE_ENTITY_EXTERNAL_CODE = new core_1.StringField('RoleEntity_externalCode', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[behaviorMappingEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.BEHAVIOR_MAPPING_ENTITY = new core_1.StringField('behaviorMappingEntity', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[competency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.COMPETENCY = new core_1.StringField('competency', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.CREATED_BY = new core_1.StringField('createdBy', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', RoleCompetencyBehaviorMappingEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.EXTERNAL_CODE = new core_1.StringField('externalCode', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', RoleCompetencyBehaviorMappingEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.RATING_DE_DE = new core_1.StringField('rating_de_DE', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.RATING_DEFAULT_VALUE = new core_1.StringField('rating_defaultValue', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.RATING_EN_DEBUG = new core_1.StringField('rating_en_DEBUG', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.RATING_EN_GB = new core_1.StringField('rating_en_GB', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.RATING_EN_US = new core_1.StringField('rating_en_US', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.RATING_ES_ES = new core_1.StringField('rating_es_ES', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.RATING_ES_MX = new core_1.StringField('rating_es_MX', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.RATING_FR_CA = new core_1.StringField('rating_fr_CA', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.RATING_FR_FR = new core_1.StringField('rating_fr_FR', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.RATING_IT_IT = new core_1.StringField('rating_it_IT', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.RATING_LOCALIZED = new core_1.StringField('rating_localized', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.RATING_NL_NL = new core_1.StringField('rating_nl_NL', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.RATING_PT_BR = new core_1.StringField('rating_pt_BR', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.RATING_ZH_CN = new core_1.StringField('rating_zh_CN', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.STATUS = new core_1.StringField('status', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.SUB_MODULE = new core_1.StringField('subModule', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.WEIGHT_DE_DE = new core_1.StringField('weight_de_DE', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.WEIGHT_DEFAULT_VALUE = new core_1.StringField('weight_defaultValue', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.WEIGHT_EN_DEBUG = new core_1.StringField('weight_en_DEBUG', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.WEIGHT_EN_GB = new core_1.StringField('weight_en_GB', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.WEIGHT_EN_US = new core_1.StringField('weight_en_US', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.WEIGHT_ES_ES = new core_1.StringField('weight_es_ES', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.WEIGHT_ES_MX = new core_1.StringField('weight_es_MX', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.WEIGHT_FR_CA = new core_1.StringField('weight_fr_CA', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.WEIGHT_FR_FR = new core_1.StringField('weight_fr_FR', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.WEIGHT_IT_IT = new core_1.StringField('weight_it_IT', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.WEIGHT_LOCALIZED = new core_1.StringField('weight_localized', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.WEIGHT_NL_NL = new core_1.StringField('weight_nl_NL', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.WEIGHT_PT_BR = new core_1.StringField('weight_pt_BR', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.WEIGHT_ZH_CN = new core_1.StringField('weight_zh_CN', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[behaviorMappingEntityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.BEHAVIOR_MAPPING_ENTITY_NAV = new core_1.OneToOneLink('behaviorMappingEntityNav', RoleCompetencyBehaviorMappingEntity, BehaviorMappingEntity_1.BehaviorMappingEntity);
    /**
     * Static representation of the one-to-one navigation property [[competencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.COMPETENCY_NAV = new core_1.OneToOneLink('competencyNav', RoleCompetencyBehaviorMappingEntity, CompetencyEntity_1.CompetencyEntity);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', RoleCompetencyBehaviorMappingEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', RoleCompetencyBehaviorMappingEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', RoleCompetencyBehaviorMappingEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[ratingTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.RATING_TRANSLATION_TEXT_NAV = new core_1.Link('ratingTranslationTextNav', RoleCompetencyBehaviorMappingEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.STATUS_NAV = new core_1.OneToOneLink('statusNav', RoleCompetencyBehaviorMappingEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[weightTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleCompetencyBehaviorMappingEntity.WEIGHT_TRANSLATION_TEXT_NAV = new core_1.Link('weightTranslationTextNav', RoleCompetencyBehaviorMappingEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * All fields of the RoleCompetencyBehaviorMappingEntity entity.
     */
    RoleCompetencyBehaviorMappingEntity._allFields = [
        RoleCompetencyBehaviorMappingEntity.ROLE_ENTITY_EXTERNAL_CODE,
        RoleCompetencyBehaviorMappingEntity.BEHAVIOR_MAPPING_ENTITY,
        RoleCompetencyBehaviorMappingEntity.COMPETENCY,
        RoleCompetencyBehaviorMappingEntity.CREATED_BY,
        RoleCompetencyBehaviorMappingEntity.CREATED_DATE_TIME,
        RoleCompetencyBehaviorMappingEntity.EXTERNAL_CODE,
        RoleCompetencyBehaviorMappingEntity.LAST_MODIFIED_BY,
        RoleCompetencyBehaviorMappingEntity.LAST_MODIFIED_DATE_TIME,
        RoleCompetencyBehaviorMappingEntity.MDF_SYSTEM_RECORD_STATUS,
        RoleCompetencyBehaviorMappingEntity.RATING_DE_DE,
        RoleCompetencyBehaviorMappingEntity.RATING_DEFAULT_VALUE,
        RoleCompetencyBehaviorMappingEntity.RATING_EN_DEBUG,
        RoleCompetencyBehaviorMappingEntity.RATING_EN_GB,
        RoleCompetencyBehaviorMappingEntity.RATING_EN_US,
        RoleCompetencyBehaviorMappingEntity.RATING_ES_ES,
        RoleCompetencyBehaviorMappingEntity.RATING_ES_MX,
        RoleCompetencyBehaviorMappingEntity.RATING_FR_CA,
        RoleCompetencyBehaviorMappingEntity.RATING_FR_FR,
        RoleCompetencyBehaviorMappingEntity.RATING_IT_IT,
        RoleCompetencyBehaviorMappingEntity.RATING_LOCALIZED,
        RoleCompetencyBehaviorMappingEntity.RATING_NL_NL,
        RoleCompetencyBehaviorMappingEntity.RATING_PT_BR,
        RoleCompetencyBehaviorMappingEntity.RATING_ZH_CN,
        RoleCompetencyBehaviorMappingEntity.STATUS,
        RoleCompetencyBehaviorMappingEntity.SUB_MODULE,
        RoleCompetencyBehaviorMappingEntity.WEIGHT_DE_DE,
        RoleCompetencyBehaviorMappingEntity.WEIGHT_DEFAULT_VALUE,
        RoleCompetencyBehaviorMappingEntity.WEIGHT_EN_DEBUG,
        RoleCompetencyBehaviorMappingEntity.WEIGHT_EN_GB,
        RoleCompetencyBehaviorMappingEntity.WEIGHT_EN_US,
        RoleCompetencyBehaviorMappingEntity.WEIGHT_ES_ES,
        RoleCompetencyBehaviorMappingEntity.WEIGHT_ES_MX,
        RoleCompetencyBehaviorMappingEntity.WEIGHT_FR_CA,
        RoleCompetencyBehaviorMappingEntity.WEIGHT_FR_FR,
        RoleCompetencyBehaviorMappingEntity.WEIGHT_IT_IT,
        RoleCompetencyBehaviorMappingEntity.WEIGHT_LOCALIZED,
        RoleCompetencyBehaviorMappingEntity.WEIGHT_NL_NL,
        RoleCompetencyBehaviorMappingEntity.WEIGHT_PT_BR,
        RoleCompetencyBehaviorMappingEntity.WEIGHT_ZH_CN,
        RoleCompetencyBehaviorMappingEntity.BEHAVIOR_MAPPING_ENTITY_NAV,
        RoleCompetencyBehaviorMappingEntity.COMPETENCY_NAV,
        RoleCompetencyBehaviorMappingEntity.CREATED_BY_NAV,
        RoleCompetencyBehaviorMappingEntity.LAST_MODIFIED_BY_NAV,
        RoleCompetencyBehaviorMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
        RoleCompetencyBehaviorMappingEntity.RATING_TRANSLATION_TEXT_NAV,
        RoleCompetencyBehaviorMappingEntity.STATUS_NAV,
        RoleCompetencyBehaviorMappingEntity.WEIGHT_TRANSLATION_TEXT_NAV
    ];
    /**
     * All fields selector.
     */
    RoleCompetencyBehaviorMappingEntity.ALL_FIELDS = new core_1.AllFields('*', RoleCompetencyBehaviorMappingEntity);
    /**
     * All key fields of the RoleCompetencyBehaviorMappingEntity entity.
     */
    RoleCompetencyBehaviorMappingEntity._keyFields = [RoleCompetencyBehaviorMappingEntity.ROLE_ENTITY_EXTERNAL_CODE, RoleCompetencyBehaviorMappingEntity.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property RoleCompetencyBehaviorMappingEntity.
     */
    RoleCompetencyBehaviorMappingEntity._keys = RoleCompetencyBehaviorMappingEntity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(RoleCompetencyBehaviorMappingEntity = exports.RoleCompetencyBehaviorMappingEntity || (exports.RoleCompetencyBehaviorMappingEntity = {}));
exports.RoleCompetencyBehaviorMappingEntity = RoleCompetencyBehaviorMappingEntity;
//# sourceMappingURL=RoleCompetencyBehaviorMappingEntity.js.map