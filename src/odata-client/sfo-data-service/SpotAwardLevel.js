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
var SpotAwardLevelRequestBuilder_1 = require("./SpotAwardLevelRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SpotAwardLevel" of service "SFOData".
 */
var SpotAwardLevel = /** @class */ (function (_super) {
    __extends(SpotAwardLevel, _super);
    function SpotAwardLevel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SpotAwardLevel`.
     * @returns A builder that constructs instances of entity type `SpotAwardLevel`.
     */
    SpotAwardLevel.builder = function () {
        return core_1.Entity.entityBuilder(SpotAwardLevel);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SpotAwardLevel` entity type.
     * @returns A `SpotAwardLevel` request builder.
     */
    SpotAwardLevel.requestBuilder = function () {
        return new SpotAwardLevelRequestBuilder_1.SpotAwardLevelRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAwardLevel`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SpotAwardLevel`.
     */
    SpotAwardLevel.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, SpotAwardLevel);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SpotAwardLevel.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SpotAwardLevel.
     */
    SpotAwardLevel._entityName = 'SpotAwardLevel';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SpotAwardLevel.
     */
    SpotAwardLevel._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    SpotAwardLevel._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SpotAwardLevel;
}(core_1.Entity));
exports.SpotAwardLevel = SpotAwardLevel;
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var Attachment_1 = require("./Attachment");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (SpotAwardLevel) {
    /**
     * Static representation of the [[spotAwardProgramExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.SPOT_AWARD_PROGRAM_EXTERNAL_CODE = new core_1.StringField('SpotAwardProgram_externalCode', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.CREATED_BY = new core_1.StringField('createdBy', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', SpotAwardLevel, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.DESCRIPTION_DE_DE = new core_1.StringField('description_de_DE', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.DESCRIPTION_DEFAULT_VALUE = new core_1.StringField('description_defaultValue', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.DESCRIPTION_EN_DEBUG = new core_1.StringField('description_en_DEBUG', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.DESCRIPTION_EN_GB = new core_1.StringField('description_en_GB', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.DESCRIPTION_EN_US = new core_1.StringField('description_en_US', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.DESCRIPTION_ES_ES = new core_1.StringField('description_es_ES', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.DESCRIPTION_ES_MX = new core_1.StringField('description_es_MX', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.DESCRIPTION_FR_CA = new core_1.StringField('description_fr_CA', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.DESCRIPTION_FR_FR = new core_1.StringField('description_fr_FR', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.DESCRIPTION_IT_IT = new core_1.StringField('description_it_IT', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.DESCRIPTION_LOCALIZED = new core_1.StringField('description_localized', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.DESCRIPTION_NL_NL = new core_1.StringField('description_nl_NL', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.DESCRIPTION_PT_BR = new core_1.StringField('description_pt_BR', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.DESCRIPTION_ZH_CN = new core_1.StringField('description_zh_CN', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.EXTERNAL_CODE = new core_1.StringField('externalCode', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', SpotAwardLevel, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.RECORD_ID = new core_1.StringField('recordId', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[titleDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.TITLE_DE_DE = new core_1.StringField('title_de_DE', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[titleDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.TITLE_DEFAULT_VALUE = new core_1.StringField('title_defaultValue', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[titleEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.TITLE_EN_DEBUG = new core_1.StringField('title_en_DEBUG', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[titleEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.TITLE_EN_GB = new core_1.StringField('title_en_GB', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[titleEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.TITLE_EN_US = new core_1.StringField('title_en_US', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[titleEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.TITLE_ES_ES = new core_1.StringField('title_es_ES', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[titleEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.TITLE_ES_MX = new core_1.StringField('title_es_MX', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[titleFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.TITLE_FR_CA = new core_1.StringField('title_fr_CA', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[titleFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.TITLE_FR_FR = new core_1.StringField('title_fr_FR', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[titleItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.TITLE_IT_IT = new core_1.StringField('title_it_IT', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[titleLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.TITLE_LOCALIZED = new core_1.StringField('title_localized', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[titleNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.TITLE_NL_NL = new core_1.StringField('title_nl_NL', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[titlePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.TITLE_PT_BR = new core_1.StringField('title_pt_BR', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the [[titleZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.TITLE_ZH_CN = new core_1.StringField('title_zh_CN', SpotAwardLevel, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', SpotAwardLevel, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.DESCRIPTION_TRANSLATION_TEXT_NAV = new core_1.Link('descriptionTranslationTextNav', SpotAwardLevel, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', SpotAwardLevel, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[levelImageNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.LEVEL_IMAGE_NAV = new core_1.OneToOneLink('levelImageNav', SpotAwardLevel, Attachment_1.Attachment);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', SpotAwardLevel, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[titleTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardLevel.TITLE_TRANSLATION_TEXT_NAV = new core_1.Link('titleTranslationTextNav', SpotAwardLevel, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * All fields of the SpotAwardLevel entity.
     */
    SpotAwardLevel._allFields = [
        SpotAwardLevel.SPOT_AWARD_PROGRAM_EXTERNAL_CODE,
        SpotAwardLevel.CREATED_BY,
        SpotAwardLevel.CREATED_DATE_TIME,
        SpotAwardLevel.DESCRIPTION_DE_DE,
        SpotAwardLevel.DESCRIPTION_DEFAULT_VALUE,
        SpotAwardLevel.DESCRIPTION_EN_DEBUG,
        SpotAwardLevel.DESCRIPTION_EN_GB,
        SpotAwardLevel.DESCRIPTION_EN_US,
        SpotAwardLevel.DESCRIPTION_ES_ES,
        SpotAwardLevel.DESCRIPTION_ES_MX,
        SpotAwardLevel.DESCRIPTION_FR_CA,
        SpotAwardLevel.DESCRIPTION_FR_FR,
        SpotAwardLevel.DESCRIPTION_IT_IT,
        SpotAwardLevel.DESCRIPTION_LOCALIZED,
        SpotAwardLevel.DESCRIPTION_NL_NL,
        SpotAwardLevel.DESCRIPTION_PT_BR,
        SpotAwardLevel.DESCRIPTION_ZH_CN,
        SpotAwardLevel.EXTERNAL_CODE,
        SpotAwardLevel.LAST_MODIFIED_BY,
        SpotAwardLevel.LAST_MODIFIED_DATE_TIME,
        SpotAwardLevel.MDF_SYSTEM_RECORD_STATUS,
        SpotAwardLevel.RECORD_ID,
        SpotAwardLevel.TITLE_DE_DE,
        SpotAwardLevel.TITLE_DEFAULT_VALUE,
        SpotAwardLevel.TITLE_EN_DEBUG,
        SpotAwardLevel.TITLE_EN_GB,
        SpotAwardLevel.TITLE_EN_US,
        SpotAwardLevel.TITLE_ES_ES,
        SpotAwardLevel.TITLE_ES_MX,
        SpotAwardLevel.TITLE_FR_CA,
        SpotAwardLevel.TITLE_FR_FR,
        SpotAwardLevel.TITLE_IT_IT,
        SpotAwardLevel.TITLE_LOCALIZED,
        SpotAwardLevel.TITLE_NL_NL,
        SpotAwardLevel.TITLE_PT_BR,
        SpotAwardLevel.TITLE_ZH_CN,
        SpotAwardLevel.CREATED_BY_NAV,
        SpotAwardLevel.DESCRIPTION_TRANSLATION_TEXT_NAV,
        SpotAwardLevel.LAST_MODIFIED_BY_NAV,
        SpotAwardLevel.LEVEL_IMAGE_NAV,
        SpotAwardLevel.MDF_SYSTEM_RECORD_STATUS_NAV,
        SpotAwardLevel.TITLE_TRANSLATION_TEXT_NAV
    ];
    /**
     * All fields selector.
     */
    SpotAwardLevel.ALL_FIELDS = new core_1.AllFields('*', SpotAwardLevel);
    /**
     * All key fields of the SpotAwardLevel entity.
     */
    SpotAwardLevel._keyFields = [SpotAwardLevel.SPOT_AWARD_PROGRAM_EXTERNAL_CODE, SpotAwardLevel.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property SpotAwardLevel.
     */
    SpotAwardLevel._keys = SpotAwardLevel._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SpotAwardLevel = exports.SpotAwardLevel || (exports.SpotAwardLevel = {}));
exports.SpotAwardLevel = SpotAwardLevel;
//# sourceMappingURL=SpotAwardLevel.js.map