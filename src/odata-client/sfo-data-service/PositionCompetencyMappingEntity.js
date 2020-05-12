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
var PositionCompetencyMappingEntityRequestBuilder_1 = require("./PositionCompetencyMappingEntityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PositionCompetencyMappingEntity" of service "SFOData".
 */
var PositionCompetencyMappingEntity = /** @class */ (function (_super) {
    __extends(PositionCompetencyMappingEntity, _super);
    function PositionCompetencyMappingEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PositionCompetencyMappingEntity`.
     * @returns A builder that constructs instances of entity type `PositionCompetencyMappingEntity`.
     */
    PositionCompetencyMappingEntity.builder = function () {
        return core_1.Entity.entityBuilder(PositionCompetencyMappingEntity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PositionCompetencyMappingEntity` entity type.
     * @returns A `PositionCompetencyMappingEntity` request builder.
     */
    PositionCompetencyMappingEntity.requestBuilder = function () {
        return new PositionCompetencyMappingEntityRequestBuilder_1.PositionCompetencyMappingEntityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PositionCompetencyMappingEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PositionCompetencyMappingEntity`.
     */
    PositionCompetencyMappingEntity.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PositionCompetencyMappingEntity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PositionCompetencyMappingEntity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PositionCompetencyMappingEntity.
     */
    PositionCompetencyMappingEntity._entityName = 'PositionCompetencyMappingEntity';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PositionCompetencyMappingEntity.
     */
    PositionCompetencyMappingEntity._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PositionCompetencyMappingEntity._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PositionCompetencyMappingEntity;
}(core_1.Entity));
exports.PositionCompetencyMappingEntity = PositionCompetencyMappingEntity;
var CompetencyEntity_1 = require("./CompetencyEntity");
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
(function (PositionCompetencyMappingEntity) {
    /**
     * Static representation of the [[positionEntityExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.POSITION_ENTITY_EXTERNAL_CODE = new core_1.StringField('PositionEntity_externalCode', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[competency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.COMPETENCY = new core_1.StringField('competency', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.CREATED_BY = new core_1.StringField('createdBy', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PositionCompetencyMappingEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.EXTERNAL_CODE = new core_1.StringField('externalCode', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PositionCompetencyMappingEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.RATING_DE_DE = new core_1.StringField('rating_de_DE', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.RATING_DEFAULT_VALUE = new core_1.StringField('rating_defaultValue', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.RATING_EN_DEBUG = new core_1.StringField('rating_en_DEBUG', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.RATING_EN_GB = new core_1.StringField('rating_en_GB', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.RATING_EN_US = new core_1.StringField('rating_en_US', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.RATING_ES_ES = new core_1.StringField('rating_es_ES', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.RATING_ES_MX = new core_1.StringField('rating_es_MX', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.RATING_FR_CA = new core_1.StringField('rating_fr_CA', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.RATING_FR_FR = new core_1.StringField('rating_fr_FR', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.RATING_IT_IT = new core_1.StringField('rating_it_IT', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.RATING_LOCALIZED = new core_1.StringField('rating_localized', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.RATING_NL_NL = new core_1.StringField('rating_nl_NL', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.RATING_PT_BR = new core_1.StringField('rating_pt_BR', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[ratingZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.RATING_ZH_CN = new core_1.StringField('rating_zh_CN', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.STATUS = new core_1.StringField('status', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.SUB_MODULE = new core_1.StringField('subModule', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.WEIGHT_DE_DE = new core_1.StringField('weight_de_DE', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.WEIGHT_DEFAULT_VALUE = new core_1.StringField('weight_defaultValue', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.WEIGHT_EN_DEBUG = new core_1.StringField('weight_en_DEBUG', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.WEIGHT_EN_GB = new core_1.StringField('weight_en_GB', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.WEIGHT_EN_US = new core_1.StringField('weight_en_US', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.WEIGHT_ES_ES = new core_1.StringField('weight_es_ES', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.WEIGHT_ES_MX = new core_1.StringField('weight_es_MX', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.WEIGHT_FR_CA = new core_1.StringField('weight_fr_CA', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.WEIGHT_FR_FR = new core_1.StringField('weight_fr_FR', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.WEIGHT_IT_IT = new core_1.StringField('weight_it_IT', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.WEIGHT_LOCALIZED = new core_1.StringField('weight_localized', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.WEIGHT_NL_NL = new core_1.StringField('weight_nl_NL', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.WEIGHT_PT_BR = new core_1.StringField('weight_pt_BR', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[weightZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.WEIGHT_ZH_CN = new core_1.StringField('weight_zh_CN', PositionCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[competencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.COMPETENCY_NAV = new core_1.OneToOneLink('competencyNav', PositionCompetencyMappingEntity, CompetencyEntity_1.CompetencyEntity);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PositionCompetencyMappingEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PositionCompetencyMappingEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PositionCompetencyMappingEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[ratingTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.RATING_TRANSLATION_TEXT_NAV = new core_1.Link('ratingTranslationTextNav', PositionCompetencyMappingEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.STATUS_NAV = new core_1.OneToOneLink('statusNav', PositionCompetencyMappingEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[weightTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionCompetencyMappingEntity.WEIGHT_TRANSLATION_TEXT_NAV = new core_1.Link('weightTranslationTextNav', PositionCompetencyMappingEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * All fields of the PositionCompetencyMappingEntity entity.
     */
    PositionCompetencyMappingEntity._allFields = [
        PositionCompetencyMappingEntity.POSITION_ENTITY_EXTERNAL_CODE,
        PositionCompetencyMappingEntity.COMPETENCY,
        PositionCompetencyMappingEntity.CREATED_BY,
        PositionCompetencyMappingEntity.CREATED_DATE_TIME,
        PositionCompetencyMappingEntity.EXTERNAL_CODE,
        PositionCompetencyMappingEntity.LAST_MODIFIED_BY,
        PositionCompetencyMappingEntity.LAST_MODIFIED_DATE_TIME,
        PositionCompetencyMappingEntity.MDF_SYSTEM_RECORD_STATUS,
        PositionCompetencyMappingEntity.RATING_DE_DE,
        PositionCompetencyMappingEntity.RATING_DEFAULT_VALUE,
        PositionCompetencyMappingEntity.RATING_EN_DEBUG,
        PositionCompetencyMappingEntity.RATING_EN_GB,
        PositionCompetencyMappingEntity.RATING_EN_US,
        PositionCompetencyMappingEntity.RATING_ES_ES,
        PositionCompetencyMappingEntity.RATING_ES_MX,
        PositionCompetencyMappingEntity.RATING_FR_CA,
        PositionCompetencyMappingEntity.RATING_FR_FR,
        PositionCompetencyMappingEntity.RATING_IT_IT,
        PositionCompetencyMappingEntity.RATING_LOCALIZED,
        PositionCompetencyMappingEntity.RATING_NL_NL,
        PositionCompetencyMappingEntity.RATING_PT_BR,
        PositionCompetencyMappingEntity.RATING_ZH_CN,
        PositionCompetencyMappingEntity.STATUS,
        PositionCompetencyMappingEntity.SUB_MODULE,
        PositionCompetencyMappingEntity.WEIGHT_DE_DE,
        PositionCompetencyMappingEntity.WEIGHT_DEFAULT_VALUE,
        PositionCompetencyMappingEntity.WEIGHT_EN_DEBUG,
        PositionCompetencyMappingEntity.WEIGHT_EN_GB,
        PositionCompetencyMappingEntity.WEIGHT_EN_US,
        PositionCompetencyMappingEntity.WEIGHT_ES_ES,
        PositionCompetencyMappingEntity.WEIGHT_ES_MX,
        PositionCompetencyMappingEntity.WEIGHT_FR_CA,
        PositionCompetencyMappingEntity.WEIGHT_FR_FR,
        PositionCompetencyMappingEntity.WEIGHT_IT_IT,
        PositionCompetencyMappingEntity.WEIGHT_LOCALIZED,
        PositionCompetencyMappingEntity.WEIGHT_NL_NL,
        PositionCompetencyMappingEntity.WEIGHT_PT_BR,
        PositionCompetencyMappingEntity.WEIGHT_ZH_CN,
        PositionCompetencyMappingEntity.COMPETENCY_NAV,
        PositionCompetencyMappingEntity.CREATED_BY_NAV,
        PositionCompetencyMappingEntity.LAST_MODIFIED_BY_NAV,
        PositionCompetencyMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
        PositionCompetencyMappingEntity.RATING_TRANSLATION_TEXT_NAV,
        PositionCompetencyMappingEntity.STATUS_NAV,
        PositionCompetencyMappingEntity.WEIGHT_TRANSLATION_TEXT_NAV
    ];
    /**
     * All fields selector.
     */
    PositionCompetencyMappingEntity.ALL_FIELDS = new core_1.AllFields('*', PositionCompetencyMappingEntity);
    /**
     * All key fields of the PositionCompetencyMappingEntity entity.
     */
    PositionCompetencyMappingEntity._keyFields = [PositionCompetencyMappingEntity.POSITION_ENTITY_EXTERNAL_CODE, PositionCompetencyMappingEntity.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property PositionCompetencyMappingEntity.
     */
    PositionCompetencyMappingEntity._keys = PositionCompetencyMappingEntity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PositionCompetencyMappingEntity = exports.PositionCompetencyMappingEntity || (exports.PositionCompetencyMappingEntity = {}));
exports.PositionCompetencyMappingEntity = PositionCompetencyMappingEntity;
//# sourceMappingURL=PositionCompetencyMappingEntity.js.map