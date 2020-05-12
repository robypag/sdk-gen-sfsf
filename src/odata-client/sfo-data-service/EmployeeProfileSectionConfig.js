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
var EmployeeProfileSectionConfigRequestBuilder_1 = require("./EmployeeProfileSectionConfigRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeeProfileSectionConfig" of service "SFOData".
 */
var EmployeeProfileSectionConfig = /** @class */ (function (_super) {
    __extends(EmployeeProfileSectionConfig, _super);
    function EmployeeProfileSectionConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeProfileSectionConfig`.
     * @returns A builder that constructs instances of entity type `EmployeeProfileSectionConfig`.
     */
    EmployeeProfileSectionConfig.builder = function () {
        return core_1.Entity.entityBuilder(EmployeeProfileSectionConfig);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeProfileSectionConfig` entity type.
     * @returns A `EmployeeProfileSectionConfig` request builder.
     */
    EmployeeProfileSectionConfig.requestBuilder = function () {
        return new EmployeeProfileSectionConfigRequestBuilder_1.EmployeeProfileSectionConfigRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeProfileSectionConfig`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeProfileSectionConfig`.
     */
    EmployeeProfileSectionConfig.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmployeeProfileSectionConfig);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeProfileSectionConfig.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeProfileSectionConfig.
     */
    EmployeeProfileSectionConfig._entityName = 'EmployeeProfileSectionConfig';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeProfileSectionConfig.
     */
    EmployeeProfileSectionConfig._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmployeeProfileSectionConfig._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmployeeProfileSectionConfig;
}(core_1.Entity));
exports.EmployeeProfileSectionConfig = EmployeeProfileSectionConfig;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var EmployeeProfileSubSectionConfig_1 = require("./EmployeeProfileSubSectionConfig");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
(function (EmployeeProfileSectionConfig) {
    /**
     * Static representation of the [[employeeProfilePageConfigCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.EMPLOYEE_PROFILE_PAGE_CONFIG_CODE = new core_1.StringField('EmployeeProfilePageConfig_code', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.CODE = new core_1.StringField('code', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.CREATED_BY = new core_1.StringField('createdBy', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmployeeProfileSectionConfig, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[isEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.IS_ENABLED = new core_1.BooleanField('isEnabled', EmployeeProfileSectionConfig, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmployeeProfileSectionConfig, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.ORDER = new core_1.BigNumberField('order', EmployeeProfileSectionConfig, 'Edm.Int64');
    /**
     * Static representation of the [[titleForContingentDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_DE_DE = new core_1.StringField('titleForContingent_de_DE', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleForContingentDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_DEFAULT_VALUE = new core_1.StringField('titleForContingent_defaultValue', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleForContingentEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_EN_DEBUG = new core_1.StringField('titleForContingent_en_DEBUG', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleForContingentEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_EN_GB = new core_1.StringField('titleForContingent_en_GB', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleForContingentEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_EN_US = new core_1.StringField('titleForContingent_en_US', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleForContingentEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_ES_ES = new core_1.StringField('titleForContingent_es_ES', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleForContingentEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_ES_MX = new core_1.StringField('titleForContingent_es_MX', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleForContingentFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_FR_CA = new core_1.StringField('titleForContingent_fr_CA', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleForContingentFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_FR_FR = new core_1.StringField('titleForContingent_fr_FR', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleForContingentItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_IT_IT = new core_1.StringField('titleForContingent_it_IT', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleForContingentLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_LOCALIZED = new core_1.StringField('titleForContingent_localized', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleForContingentNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_NL_NL = new core_1.StringField('titleForContingent_nl_NL', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleForContingentPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_PT_BR = new core_1.StringField('titleForContingent_pt_BR', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleForContingentZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_ZH_CN = new core_1.StringField('titleForContingent_zh_CN', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_DE_DE = new core_1.StringField('title_de_DE', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_DEFAULT_VALUE = new core_1.StringField('title_defaultValue', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_EN_DEBUG = new core_1.StringField('title_en_DEBUG', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_EN_GB = new core_1.StringField('title_en_GB', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_EN_US = new core_1.StringField('title_en_US', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_ES_ES = new core_1.StringField('title_es_ES', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_ES_MX = new core_1.StringField('title_es_MX', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_FR_CA = new core_1.StringField('title_fr_CA', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_FR_FR = new core_1.StringField('title_fr_FR', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_IT_IT = new core_1.StringField('title_it_IT', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_LOCALIZED = new core_1.StringField('title_localized', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_NL_NL = new core_1.StringField('title_nl_NL', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titlePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_PT_BR = new core_1.StringField('title_pt_BR', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_ZH_CN = new core_1.StringField('title_zh_CN', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TYPE = new core_1.StringField('type', EmployeeProfileSectionConfig, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', EmployeeProfileSectionConfig, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', EmployeeProfileSectionConfig, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', EmployeeProfileSectionConfig, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[subSections]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.SUB_SECTIONS = new core_1.Link('subSections', EmployeeProfileSectionConfig, EmployeeProfileSubSectionConfig_1.EmployeeProfileSubSectionConfig);
    /**
     * Static representation of the one-to-many navigation property [[titleForContingentTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_TRANSLATION_TEXT_NAV = new core_1.Link('titleForContingentTranslationTextNav', EmployeeProfileSectionConfig, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[titleTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TITLE_TRANSLATION_TEXT_NAV = new core_1.Link('titleTranslationTextNav', EmployeeProfileSectionConfig, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[typeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSectionConfig.TYPE_NAV = new core_1.OneToOneLink('typeNav', EmployeeProfileSectionConfig, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the EmployeeProfileSectionConfig entity.
     */
    EmployeeProfileSectionConfig._allFields = [
        EmployeeProfileSectionConfig.EMPLOYEE_PROFILE_PAGE_CONFIG_CODE,
        EmployeeProfileSectionConfig.CODE,
        EmployeeProfileSectionConfig.CREATED_BY,
        EmployeeProfileSectionConfig.CREATED_DATE_TIME,
        EmployeeProfileSectionConfig.IS_ENABLED,
        EmployeeProfileSectionConfig.LAST_MODIFIED_BY,
        EmployeeProfileSectionConfig.LAST_MODIFIED_DATE_TIME,
        EmployeeProfileSectionConfig.MDF_SYSTEM_RECORD_STATUS,
        EmployeeProfileSectionConfig.ORDER,
        EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_DE_DE,
        EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_DEFAULT_VALUE,
        EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_EN_DEBUG,
        EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_EN_GB,
        EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_EN_US,
        EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_ES_ES,
        EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_ES_MX,
        EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_FR_CA,
        EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_FR_FR,
        EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_IT_IT,
        EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_LOCALIZED,
        EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_NL_NL,
        EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_PT_BR,
        EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_ZH_CN,
        EmployeeProfileSectionConfig.TITLE_DE_DE,
        EmployeeProfileSectionConfig.TITLE_DEFAULT_VALUE,
        EmployeeProfileSectionConfig.TITLE_EN_DEBUG,
        EmployeeProfileSectionConfig.TITLE_EN_GB,
        EmployeeProfileSectionConfig.TITLE_EN_US,
        EmployeeProfileSectionConfig.TITLE_ES_ES,
        EmployeeProfileSectionConfig.TITLE_ES_MX,
        EmployeeProfileSectionConfig.TITLE_FR_CA,
        EmployeeProfileSectionConfig.TITLE_FR_FR,
        EmployeeProfileSectionConfig.TITLE_IT_IT,
        EmployeeProfileSectionConfig.TITLE_LOCALIZED,
        EmployeeProfileSectionConfig.TITLE_NL_NL,
        EmployeeProfileSectionConfig.TITLE_PT_BR,
        EmployeeProfileSectionConfig.TITLE_ZH_CN,
        EmployeeProfileSectionConfig.TYPE,
        EmployeeProfileSectionConfig.CREATED_BY_NAV,
        EmployeeProfileSectionConfig.LAST_MODIFIED_BY_NAV,
        EmployeeProfileSectionConfig.MDF_SYSTEM_RECORD_STATUS_NAV,
        EmployeeProfileSectionConfig.SUB_SECTIONS,
        EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_TRANSLATION_TEXT_NAV,
        EmployeeProfileSectionConfig.TITLE_TRANSLATION_TEXT_NAV,
        EmployeeProfileSectionConfig.TYPE_NAV
    ];
    /**
     * All fields selector.
     */
    EmployeeProfileSectionConfig.ALL_FIELDS = new core_1.AllFields('*', EmployeeProfileSectionConfig);
    /**
     * All key fields of the EmployeeProfileSectionConfig entity.
     */
    EmployeeProfileSectionConfig._keyFields = [EmployeeProfileSectionConfig.EMPLOYEE_PROFILE_PAGE_CONFIG_CODE, EmployeeProfileSectionConfig.CODE];
    /**
     * Mapping of all key field names to the respective static field property EmployeeProfileSectionConfig.
     */
    EmployeeProfileSectionConfig._keys = EmployeeProfileSectionConfig._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeProfileSectionConfig = exports.EmployeeProfileSectionConfig || (exports.EmployeeProfileSectionConfig = {}));
exports.EmployeeProfileSectionConfig = EmployeeProfileSectionConfig;
//# sourceMappingURL=EmployeeProfileSectionConfig.js.map