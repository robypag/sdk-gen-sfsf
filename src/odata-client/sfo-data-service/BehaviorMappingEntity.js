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
var BehaviorMappingEntityRequestBuilder_1 = require("./BehaviorMappingEntityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "BehaviorMappingEntity" of service "SFOData".
 */
var BehaviorMappingEntity = /** @class */ (function (_super) {
    __extends(BehaviorMappingEntity, _super);
    function BehaviorMappingEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `BehaviorMappingEntity`.
     * @returns A builder that constructs instances of entity type `BehaviorMappingEntity`.
     */
    BehaviorMappingEntity.builder = function () {
        return core_1.Entity.entityBuilder(BehaviorMappingEntity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BehaviorMappingEntity` entity type.
     * @returns A `BehaviorMappingEntity` request builder.
     */
    BehaviorMappingEntity.requestBuilder = function () {
        return new BehaviorMappingEntityRequestBuilder_1.BehaviorMappingEntityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BehaviorMappingEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BehaviorMappingEntity`.
     */
    BehaviorMappingEntity.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, BehaviorMappingEntity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BehaviorMappingEntity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BehaviorMappingEntity.
     */
    BehaviorMappingEntity._entityName = 'BehaviorMappingEntity';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BehaviorMappingEntity.
     */
    BehaviorMappingEntity._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    BehaviorMappingEntity._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return BehaviorMappingEntity;
}(core_1.Entity));
exports.BehaviorMappingEntity = BehaviorMappingEntity;
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (BehaviorMappingEntity) {
    /**
     * Static representation of the [[competencyEntityExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.COMPETENCY_ENTITY_EXTERNAL_CODE = new core_1.StringField('CompetencyEntity_externalCode', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[behaviorNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.BEHAVIOR_NAME_DE_DE = new core_1.StringField('behaviorName_de_DE', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[behaviorNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.BEHAVIOR_NAME_DEFAULT_VALUE = new core_1.StringField('behaviorName_defaultValue', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[behaviorNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.BEHAVIOR_NAME_EN_DEBUG = new core_1.StringField('behaviorName_en_DEBUG', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[behaviorNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.BEHAVIOR_NAME_EN_GB = new core_1.StringField('behaviorName_en_GB', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[behaviorNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.BEHAVIOR_NAME_EN_US = new core_1.StringField('behaviorName_en_US', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[behaviorNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.BEHAVIOR_NAME_ES_ES = new core_1.StringField('behaviorName_es_ES', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[behaviorNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.BEHAVIOR_NAME_ES_MX = new core_1.StringField('behaviorName_es_MX', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[behaviorNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.BEHAVIOR_NAME_FR_CA = new core_1.StringField('behaviorName_fr_CA', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[behaviorNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.BEHAVIOR_NAME_FR_FR = new core_1.StringField('behaviorName_fr_FR', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[behaviorNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.BEHAVIOR_NAME_IT_IT = new core_1.StringField('behaviorName_it_IT', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[behaviorNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.BEHAVIOR_NAME_LOCALIZED = new core_1.StringField('behaviorName_localized', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[behaviorNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.BEHAVIOR_NAME_NL_NL = new core_1.StringField('behaviorName_nl_NL', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[behaviorNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.BEHAVIOR_NAME_PT_BR = new core_1.StringField('behaviorName_pt_BR', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[behaviorNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.BEHAVIOR_NAME_ZH_CN = new core_1.StringField('behaviorName_zh_CN', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.CREATED_BY = new core_1.StringField('createdBy', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', BehaviorMappingEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.DESCRIPTION_DE_DE = new core_1.StringField('description_de_DE', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.DESCRIPTION_DEFAULT_VALUE = new core_1.StringField('description_defaultValue', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.DESCRIPTION_EN_DEBUG = new core_1.StringField('description_en_DEBUG', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.DESCRIPTION_EN_GB = new core_1.StringField('description_en_GB', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.DESCRIPTION_EN_US = new core_1.StringField('description_en_US', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.DESCRIPTION_ES_ES = new core_1.StringField('description_es_ES', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.DESCRIPTION_ES_MX = new core_1.StringField('description_es_MX', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.DESCRIPTION_FR_CA = new core_1.StringField('description_fr_CA', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.DESCRIPTION_FR_FR = new core_1.StringField('description_fr_FR', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.DESCRIPTION_IT_IT = new core_1.StringField('description_it_IT', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.DESCRIPTION_LOCALIZED = new core_1.StringField('description_localized', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.DESCRIPTION_NL_NL = new core_1.StringField('description_nl_NL', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.DESCRIPTION_PT_BR = new core_1.StringField('description_pt_BR', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.DESCRIPTION_ZH_CN = new core_1.StringField('description_zh_CN', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.EXTERNAL_CODE = new core_1.StringField('externalCode', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', BehaviorMappingEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.STATUS = new core_1.StringField('status', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.SUB_MODULE = new core_1.StringField('subModule', BehaviorMappingEntity, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[behaviorNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.BEHAVIOR_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('behaviorNameTranslationTextNav', BehaviorMappingEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', BehaviorMappingEntity, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.DESCRIPTION_TRANSLATION_TEXT_NAV = new core_1.Link('descriptionTranslationTextNav', BehaviorMappingEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', BehaviorMappingEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', BehaviorMappingEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BehaviorMappingEntity.STATUS_NAV = new core_1.OneToOneLink('statusNav', BehaviorMappingEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the BehaviorMappingEntity entity.
     */
    BehaviorMappingEntity._allFields = [
        BehaviorMappingEntity.COMPETENCY_ENTITY_EXTERNAL_CODE,
        BehaviorMappingEntity.BEHAVIOR_NAME_DE_DE,
        BehaviorMappingEntity.BEHAVIOR_NAME_DEFAULT_VALUE,
        BehaviorMappingEntity.BEHAVIOR_NAME_EN_DEBUG,
        BehaviorMappingEntity.BEHAVIOR_NAME_EN_GB,
        BehaviorMappingEntity.BEHAVIOR_NAME_EN_US,
        BehaviorMappingEntity.BEHAVIOR_NAME_ES_ES,
        BehaviorMappingEntity.BEHAVIOR_NAME_ES_MX,
        BehaviorMappingEntity.BEHAVIOR_NAME_FR_CA,
        BehaviorMappingEntity.BEHAVIOR_NAME_FR_FR,
        BehaviorMappingEntity.BEHAVIOR_NAME_IT_IT,
        BehaviorMappingEntity.BEHAVIOR_NAME_LOCALIZED,
        BehaviorMappingEntity.BEHAVIOR_NAME_NL_NL,
        BehaviorMappingEntity.BEHAVIOR_NAME_PT_BR,
        BehaviorMappingEntity.BEHAVIOR_NAME_ZH_CN,
        BehaviorMappingEntity.CREATED_BY,
        BehaviorMappingEntity.CREATED_DATE_TIME,
        BehaviorMappingEntity.DESCRIPTION_DE_DE,
        BehaviorMappingEntity.DESCRIPTION_DEFAULT_VALUE,
        BehaviorMappingEntity.DESCRIPTION_EN_DEBUG,
        BehaviorMappingEntity.DESCRIPTION_EN_GB,
        BehaviorMappingEntity.DESCRIPTION_EN_US,
        BehaviorMappingEntity.DESCRIPTION_ES_ES,
        BehaviorMappingEntity.DESCRIPTION_ES_MX,
        BehaviorMappingEntity.DESCRIPTION_FR_CA,
        BehaviorMappingEntity.DESCRIPTION_FR_FR,
        BehaviorMappingEntity.DESCRIPTION_IT_IT,
        BehaviorMappingEntity.DESCRIPTION_LOCALIZED,
        BehaviorMappingEntity.DESCRIPTION_NL_NL,
        BehaviorMappingEntity.DESCRIPTION_PT_BR,
        BehaviorMappingEntity.DESCRIPTION_ZH_CN,
        BehaviorMappingEntity.EXTERNAL_CODE,
        BehaviorMappingEntity.LAST_MODIFIED_BY,
        BehaviorMappingEntity.LAST_MODIFIED_DATE_TIME,
        BehaviorMappingEntity.MDF_SYSTEM_RECORD_STATUS,
        BehaviorMappingEntity.STATUS,
        BehaviorMappingEntity.SUB_MODULE,
        BehaviorMappingEntity.BEHAVIOR_NAME_TRANSLATION_TEXT_NAV,
        BehaviorMappingEntity.CREATED_BY_NAV,
        BehaviorMappingEntity.DESCRIPTION_TRANSLATION_TEXT_NAV,
        BehaviorMappingEntity.LAST_MODIFIED_BY_NAV,
        BehaviorMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
        BehaviorMappingEntity.STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    BehaviorMappingEntity.ALL_FIELDS = new core_1.AllFields('*', BehaviorMappingEntity);
    /**
     * All key fields of the BehaviorMappingEntity entity.
     */
    BehaviorMappingEntity._keyFields = [BehaviorMappingEntity.COMPETENCY_ENTITY_EXTERNAL_CODE, BehaviorMappingEntity.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property BehaviorMappingEntity.
     */
    BehaviorMappingEntity._keys = BehaviorMappingEntity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BehaviorMappingEntity = exports.BehaviorMappingEntity || (exports.BehaviorMappingEntity = {}));
exports.BehaviorMappingEntity = BehaviorMappingEntity;
//# sourceMappingURL=BehaviorMappingEntity.js.map