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
var SpotAwardCategoryRequestBuilder_1 = require("./SpotAwardCategoryRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SpotAwardCategory" of service "SFOData".
 */
var SpotAwardCategory = /** @class */ (function (_super) {
    __extends(SpotAwardCategory, _super);
    function SpotAwardCategory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SpotAwardCategory`.
     * @returns A builder that constructs instances of entity type `SpotAwardCategory`.
     */
    SpotAwardCategory.builder = function () {
        return core_1.Entity.entityBuilder(SpotAwardCategory);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SpotAwardCategory` entity type.
     * @returns A `SpotAwardCategory` request builder.
     */
    SpotAwardCategory.requestBuilder = function () {
        return new SpotAwardCategoryRequestBuilder_1.SpotAwardCategoryRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAwardCategory`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SpotAwardCategory`.
     */
    SpotAwardCategory.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, SpotAwardCategory);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SpotAwardCategory.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SpotAwardCategory.
     */
    SpotAwardCategory._entityName = 'SpotAwardCategory';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SpotAwardCategory.
     */
    SpotAwardCategory._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    SpotAwardCategory._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SpotAwardCategory;
}(core_1.Entity));
exports.SpotAwardCategory = SpotAwardCategory;
var Attachment_1 = require("./Attachment");
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (SpotAwardCategory) {
    /**
     * Static representation of the [[spotAwardProgramExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.SPOT_AWARD_PROGRAM_EXTERNAL_CODE = new core_1.StringField('SpotAwardProgram_externalCode', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.CREATED_BY = new core_1.StringField('createdBy', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', SpotAwardCategory, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.DESCRIPTION_DE_DE = new core_1.StringField('description_de_DE', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.DESCRIPTION_DEFAULT_VALUE = new core_1.StringField('description_defaultValue', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.DESCRIPTION_EN_DEBUG = new core_1.StringField('description_en_DEBUG', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.DESCRIPTION_EN_GB = new core_1.StringField('description_en_GB', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.DESCRIPTION_EN_US = new core_1.StringField('description_en_US', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.DESCRIPTION_ES_ES = new core_1.StringField('description_es_ES', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.DESCRIPTION_ES_MX = new core_1.StringField('description_es_MX', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.DESCRIPTION_FR_CA = new core_1.StringField('description_fr_CA', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.DESCRIPTION_FR_FR = new core_1.StringField('description_fr_FR', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.DESCRIPTION_IT_IT = new core_1.StringField('description_it_IT', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.DESCRIPTION_LOCALIZED = new core_1.StringField('description_localized', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.DESCRIPTION_NL_NL = new core_1.StringField('description_nl_NL', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.DESCRIPTION_PT_BR = new core_1.StringField('description_pt_BR', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.DESCRIPTION_ZH_CN = new core_1.StringField('description_zh_CN', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.EXTERNAL_CODE = new core_1.StringField('externalCode', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', SpotAwardCategory, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.RECORD_ID = new core_1.StringField('recordId', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[titleDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.TITLE_DE_DE = new core_1.StringField('title_de_DE', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[titleDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.TITLE_DEFAULT_VALUE = new core_1.StringField('title_defaultValue', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[titleEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.TITLE_EN_DEBUG = new core_1.StringField('title_en_DEBUG', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[titleEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.TITLE_EN_GB = new core_1.StringField('title_en_GB', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[titleEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.TITLE_EN_US = new core_1.StringField('title_en_US', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[titleEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.TITLE_ES_ES = new core_1.StringField('title_es_ES', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[titleEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.TITLE_ES_MX = new core_1.StringField('title_es_MX', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[titleFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.TITLE_FR_CA = new core_1.StringField('title_fr_CA', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[titleFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.TITLE_FR_FR = new core_1.StringField('title_fr_FR', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[titleItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.TITLE_IT_IT = new core_1.StringField('title_it_IT', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[titleLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.TITLE_LOCALIZED = new core_1.StringField('title_localized', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[titleNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.TITLE_NL_NL = new core_1.StringField('title_nl_NL', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[titlePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.TITLE_PT_BR = new core_1.StringField('title_pt_BR', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the [[titleZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.TITLE_ZH_CN = new core_1.StringField('title_zh_CN', SpotAwardCategory, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[categoryImageNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.CATEGORY_IMAGE_NAV = new core_1.OneToOneLink('categoryImageNav', SpotAwardCategory, Attachment_1.Attachment);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', SpotAwardCategory, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.DESCRIPTION_TRANSLATION_TEXT_NAV = new core_1.Link('descriptionTranslationTextNav', SpotAwardCategory, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', SpotAwardCategory, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', SpotAwardCategory, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[titleTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardCategory.TITLE_TRANSLATION_TEXT_NAV = new core_1.Link('titleTranslationTextNav', SpotAwardCategory, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * All fields of the SpotAwardCategory entity.
     */
    SpotAwardCategory._allFields = [
        SpotAwardCategory.SPOT_AWARD_PROGRAM_EXTERNAL_CODE,
        SpotAwardCategory.CREATED_BY,
        SpotAwardCategory.CREATED_DATE_TIME,
        SpotAwardCategory.DESCRIPTION_DE_DE,
        SpotAwardCategory.DESCRIPTION_DEFAULT_VALUE,
        SpotAwardCategory.DESCRIPTION_EN_DEBUG,
        SpotAwardCategory.DESCRIPTION_EN_GB,
        SpotAwardCategory.DESCRIPTION_EN_US,
        SpotAwardCategory.DESCRIPTION_ES_ES,
        SpotAwardCategory.DESCRIPTION_ES_MX,
        SpotAwardCategory.DESCRIPTION_FR_CA,
        SpotAwardCategory.DESCRIPTION_FR_FR,
        SpotAwardCategory.DESCRIPTION_IT_IT,
        SpotAwardCategory.DESCRIPTION_LOCALIZED,
        SpotAwardCategory.DESCRIPTION_NL_NL,
        SpotAwardCategory.DESCRIPTION_PT_BR,
        SpotAwardCategory.DESCRIPTION_ZH_CN,
        SpotAwardCategory.EXTERNAL_CODE,
        SpotAwardCategory.LAST_MODIFIED_BY,
        SpotAwardCategory.LAST_MODIFIED_DATE_TIME,
        SpotAwardCategory.MDF_SYSTEM_RECORD_STATUS,
        SpotAwardCategory.RECORD_ID,
        SpotAwardCategory.TITLE_DE_DE,
        SpotAwardCategory.TITLE_DEFAULT_VALUE,
        SpotAwardCategory.TITLE_EN_DEBUG,
        SpotAwardCategory.TITLE_EN_GB,
        SpotAwardCategory.TITLE_EN_US,
        SpotAwardCategory.TITLE_ES_ES,
        SpotAwardCategory.TITLE_ES_MX,
        SpotAwardCategory.TITLE_FR_CA,
        SpotAwardCategory.TITLE_FR_FR,
        SpotAwardCategory.TITLE_IT_IT,
        SpotAwardCategory.TITLE_LOCALIZED,
        SpotAwardCategory.TITLE_NL_NL,
        SpotAwardCategory.TITLE_PT_BR,
        SpotAwardCategory.TITLE_ZH_CN,
        SpotAwardCategory.CATEGORY_IMAGE_NAV,
        SpotAwardCategory.CREATED_BY_NAV,
        SpotAwardCategory.DESCRIPTION_TRANSLATION_TEXT_NAV,
        SpotAwardCategory.LAST_MODIFIED_BY_NAV,
        SpotAwardCategory.MDF_SYSTEM_RECORD_STATUS_NAV,
        SpotAwardCategory.TITLE_TRANSLATION_TEXT_NAV
    ];
    /**
     * All fields selector.
     */
    SpotAwardCategory.ALL_FIELDS = new core_1.AllFields('*', SpotAwardCategory);
    /**
     * All key fields of the SpotAwardCategory entity.
     */
    SpotAwardCategory._keyFields = [SpotAwardCategory.SPOT_AWARD_PROGRAM_EXTERNAL_CODE, SpotAwardCategory.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property SpotAwardCategory.
     */
    SpotAwardCategory._keys = SpotAwardCategory._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SpotAwardCategory = exports.SpotAwardCategory || (exports.SpotAwardCategory = {}));
exports.SpotAwardCategory = SpotAwardCategory;
//# sourceMappingURL=SpotAwardCategory.js.map