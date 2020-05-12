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
var EmployeeProfileSubSectionConfigRequestBuilder_1 = require("./EmployeeProfileSubSectionConfigRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeeProfileSubSectionConfig" of service "SFOData".
 */
var EmployeeProfileSubSectionConfig = /** @class */ (function (_super) {
    __extends(EmployeeProfileSubSectionConfig, _super);
    function EmployeeProfileSubSectionConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeProfileSubSectionConfig`.
     * @returns A builder that constructs instances of entity type `EmployeeProfileSubSectionConfig`.
     */
    EmployeeProfileSubSectionConfig.builder = function () {
        return core_1.Entity.entityBuilder(EmployeeProfileSubSectionConfig);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeProfileSubSectionConfig` entity type.
     * @returns A `EmployeeProfileSubSectionConfig` request builder.
     */
    EmployeeProfileSubSectionConfig.requestBuilder = function () {
        return new EmployeeProfileSubSectionConfigRequestBuilder_1.EmployeeProfileSubSectionConfigRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeProfileSubSectionConfig`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeProfileSubSectionConfig`.
     */
    EmployeeProfileSubSectionConfig.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmployeeProfileSubSectionConfig);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeProfileSubSectionConfig.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeProfileSubSectionConfig.
     */
    EmployeeProfileSubSectionConfig._entityName = 'EmployeeProfileSubSectionConfig';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeProfileSubSectionConfig.
     */
    EmployeeProfileSubSectionConfig._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmployeeProfileSubSectionConfig._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmployeeProfileSubSectionConfig;
}(core_1.Entity));
exports.EmployeeProfileSubSectionConfig = EmployeeProfileSubSectionConfig;
var EmployeeProfileBlockContent_1 = require("./EmployeeProfileBlockContent");
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
(function (EmployeeProfileSubSectionConfig) {
    /**
     * Static representation of the [[employeeProfilePageConfigCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.EMPLOYEE_PROFILE_PAGE_CONFIG_CODE = new core_1.StringField('EmployeeProfilePageConfig_code', EmployeeProfileSubSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[employeeProfileSectionConfigCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.EMPLOYEE_PROFILE_SECTION_CONFIG_CODE = new core_1.StringField('EmployeeProfileSectionConfig_code', EmployeeProfileSubSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.CODE = new core_1.StringField('code', EmployeeProfileSubSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.CREATED_BY = new core_1.StringField('createdBy', EmployeeProfileSubSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmployeeProfileSubSectionConfig, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[isEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.IS_ENABLED = new core_1.BooleanField('isEnabled', EmployeeProfileSubSectionConfig, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmployeeProfileSubSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmployeeProfileSubSectionConfig, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmployeeProfileSubSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.ORDER = new core_1.BigNumberField('order', EmployeeProfileSubSectionConfig, 'Edm.Int64');
    /**
     * Static representation of the [[titleDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.TITLE_DE_DE = new core_1.StringField('title_de_DE', EmployeeProfileSubSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.TITLE_DEFAULT_VALUE = new core_1.StringField('title_defaultValue', EmployeeProfileSubSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.TITLE_EN_DEBUG = new core_1.StringField('title_en_DEBUG', EmployeeProfileSubSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.TITLE_EN_GB = new core_1.StringField('title_en_GB', EmployeeProfileSubSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.TITLE_EN_US = new core_1.StringField('title_en_US', EmployeeProfileSubSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.TITLE_ES_ES = new core_1.StringField('title_es_ES', EmployeeProfileSubSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.TITLE_ES_MX = new core_1.StringField('title_es_MX', EmployeeProfileSubSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.TITLE_FR_CA = new core_1.StringField('title_fr_CA', EmployeeProfileSubSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.TITLE_FR_FR = new core_1.StringField('title_fr_FR', EmployeeProfileSubSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.TITLE_IT_IT = new core_1.StringField('title_it_IT', EmployeeProfileSubSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.TITLE_LOCALIZED = new core_1.StringField('title_localized', EmployeeProfileSubSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.TITLE_NL_NL = new core_1.StringField('title_nl_NL', EmployeeProfileSubSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titlePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.TITLE_PT_BR = new core_1.StringField('title_pt_BR', EmployeeProfileSubSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[titleZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.TITLE_ZH_CN = new core_1.StringField('title_zh_CN', EmployeeProfileSubSectionConfig, 'Edm.String');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.TYPE = new core_1.StringField('type', EmployeeProfileSubSectionConfig, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[blocks]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.BLOCKS = new core_1.Link('blocks', EmployeeProfileSubSectionConfig, EmployeeProfileBlockContent_1.EmployeeProfileBlockContent);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', EmployeeProfileSubSectionConfig, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', EmployeeProfileSubSectionConfig, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', EmployeeProfileSubSectionConfig, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[titleTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.TITLE_TRANSLATION_TEXT_NAV = new core_1.Link('titleTranslationTextNav', EmployeeProfileSubSectionConfig, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[typeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileSubSectionConfig.TYPE_NAV = new core_1.OneToOneLink('typeNav', EmployeeProfileSubSectionConfig, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the EmployeeProfileSubSectionConfig entity.
     */
    EmployeeProfileSubSectionConfig._allFields = [
        EmployeeProfileSubSectionConfig.EMPLOYEE_PROFILE_PAGE_CONFIG_CODE,
        EmployeeProfileSubSectionConfig.EMPLOYEE_PROFILE_SECTION_CONFIG_CODE,
        EmployeeProfileSubSectionConfig.CODE,
        EmployeeProfileSubSectionConfig.CREATED_BY,
        EmployeeProfileSubSectionConfig.CREATED_DATE_TIME,
        EmployeeProfileSubSectionConfig.IS_ENABLED,
        EmployeeProfileSubSectionConfig.LAST_MODIFIED_BY,
        EmployeeProfileSubSectionConfig.LAST_MODIFIED_DATE_TIME,
        EmployeeProfileSubSectionConfig.MDF_SYSTEM_RECORD_STATUS,
        EmployeeProfileSubSectionConfig.ORDER,
        EmployeeProfileSubSectionConfig.TITLE_DE_DE,
        EmployeeProfileSubSectionConfig.TITLE_DEFAULT_VALUE,
        EmployeeProfileSubSectionConfig.TITLE_EN_DEBUG,
        EmployeeProfileSubSectionConfig.TITLE_EN_GB,
        EmployeeProfileSubSectionConfig.TITLE_EN_US,
        EmployeeProfileSubSectionConfig.TITLE_ES_ES,
        EmployeeProfileSubSectionConfig.TITLE_ES_MX,
        EmployeeProfileSubSectionConfig.TITLE_FR_CA,
        EmployeeProfileSubSectionConfig.TITLE_FR_FR,
        EmployeeProfileSubSectionConfig.TITLE_IT_IT,
        EmployeeProfileSubSectionConfig.TITLE_LOCALIZED,
        EmployeeProfileSubSectionConfig.TITLE_NL_NL,
        EmployeeProfileSubSectionConfig.TITLE_PT_BR,
        EmployeeProfileSubSectionConfig.TITLE_ZH_CN,
        EmployeeProfileSubSectionConfig.TYPE,
        EmployeeProfileSubSectionConfig.BLOCKS,
        EmployeeProfileSubSectionConfig.CREATED_BY_NAV,
        EmployeeProfileSubSectionConfig.LAST_MODIFIED_BY_NAV,
        EmployeeProfileSubSectionConfig.MDF_SYSTEM_RECORD_STATUS_NAV,
        EmployeeProfileSubSectionConfig.TITLE_TRANSLATION_TEXT_NAV,
        EmployeeProfileSubSectionConfig.TYPE_NAV
    ];
    /**
     * All fields selector.
     */
    EmployeeProfileSubSectionConfig.ALL_FIELDS = new core_1.AllFields('*', EmployeeProfileSubSectionConfig);
    /**
     * All key fields of the EmployeeProfileSubSectionConfig entity.
     */
    EmployeeProfileSubSectionConfig._keyFields = [EmployeeProfileSubSectionConfig.EMPLOYEE_PROFILE_PAGE_CONFIG_CODE, EmployeeProfileSubSectionConfig.EMPLOYEE_PROFILE_SECTION_CONFIG_CODE, EmployeeProfileSubSectionConfig.CODE];
    /**
     * Mapping of all key field names to the respective static field property EmployeeProfileSubSectionConfig.
     */
    EmployeeProfileSubSectionConfig._keys = EmployeeProfileSubSectionConfig._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeProfileSubSectionConfig = exports.EmployeeProfileSubSectionConfig || (exports.EmployeeProfileSubSectionConfig = {}));
exports.EmployeeProfileSubSectionConfig = EmployeeProfileSubSectionConfig;
//# sourceMappingURL=EmployeeProfileSubSectionConfig.js.map