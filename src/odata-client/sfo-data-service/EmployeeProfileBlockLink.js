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
var EmployeeProfileBlockLinkRequestBuilder_1 = require("./EmployeeProfileBlockLinkRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeeProfileBlockLink" of service "SFOData".
 */
var EmployeeProfileBlockLink = /** @class */ (function (_super) {
    __extends(EmployeeProfileBlockLink, _super);
    function EmployeeProfileBlockLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeProfileBlockLink`.
     * @returns A builder that constructs instances of entity type `EmployeeProfileBlockLink`.
     */
    EmployeeProfileBlockLink.builder = function () {
        return core_1.Entity.entityBuilder(EmployeeProfileBlockLink);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeProfileBlockLink` entity type.
     * @returns A `EmployeeProfileBlockLink` request builder.
     */
    EmployeeProfileBlockLink.requestBuilder = function () {
        return new EmployeeProfileBlockLinkRequestBuilder_1.EmployeeProfileBlockLinkRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeProfileBlockLink`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeProfileBlockLink`.
     */
    EmployeeProfileBlockLink.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmployeeProfileBlockLink);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeProfileBlockLink.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeProfileBlockLink.
     */
    EmployeeProfileBlockLink._entityName = 'EmployeeProfileBlockLink';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeProfileBlockLink.
     */
    EmployeeProfileBlockLink._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmployeeProfileBlockLink._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmployeeProfileBlockLink;
}(core_1.Entity));
exports.EmployeeProfileBlockLink = EmployeeProfileBlockLink;
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (EmployeeProfileBlockLink) {
    /**
     * Static representation of the [[employeeProfileBlockContentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.EMPLOYEE_PROFILE_BLOCK_CONTENT_CODE = new core_1.StringField('EmployeeProfileBlockContent_code', EmployeeProfileBlockLink, 'Edm.String');
    /**
     * Static representation of the [[employeeProfilePageConfigCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.EMPLOYEE_PROFILE_PAGE_CONFIG_CODE = new core_1.StringField('EmployeeProfilePageConfig_code', EmployeeProfileBlockLink, 'Edm.String');
    /**
     * Static representation of the [[employeeProfileSectionConfigCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.EMPLOYEE_PROFILE_SECTION_CONFIG_CODE = new core_1.StringField('EmployeeProfileSectionConfig_code', EmployeeProfileBlockLink, 'Edm.String');
    /**
     * Static representation of the [[employeeProfileSubSectionConfigCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.EMPLOYEE_PROFILE_SUB_SECTION_CONFIG_CODE = new core_1.StringField('EmployeeProfileSubSectionConfig_code', EmployeeProfileBlockLink, 'Edm.String');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.CODE = new core_1.StringField('code', EmployeeProfileBlockLink, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.CREATED_BY = new core_1.StringField('createdBy', EmployeeProfileBlockLink, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmployeeProfileBlockLink, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.DESCRIPTION_DE_DE = new core_1.StringField('description_de_DE', EmployeeProfileBlockLink, 'Edm.String');
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.DESCRIPTION_DEFAULT_VALUE = new core_1.StringField('description_defaultValue', EmployeeProfileBlockLink, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.DESCRIPTION_EN_DEBUG = new core_1.StringField('description_en_DEBUG', EmployeeProfileBlockLink, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.DESCRIPTION_EN_GB = new core_1.StringField('description_en_GB', EmployeeProfileBlockLink, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.DESCRIPTION_EN_US = new core_1.StringField('description_en_US', EmployeeProfileBlockLink, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.DESCRIPTION_ES_ES = new core_1.StringField('description_es_ES', EmployeeProfileBlockLink, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.DESCRIPTION_ES_MX = new core_1.StringField('description_es_MX', EmployeeProfileBlockLink, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.DESCRIPTION_FR_CA = new core_1.StringField('description_fr_CA', EmployeeProfileBlockLink, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.DESCRIPTION_FR_FR = new core_1.StringField('description_fr_FR', EmployeeProfileBlockLink, 'Edm.String');
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.DESCRIPTION_IT_IT = new core_1.StringField('description_it_IT', EmployeeProfileBlockLink, 'Edm.String');
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.DESCRIPTION_LOCALIZED = new core_1.StringField('description_localized', EmployeeProfileBlockLink, 'Edm.String');
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.DESCRIPTION_NL_NL = new core_1.StringField('description_nl_NL', EmployeeProfileBlockLink, 'Edm.String');
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.DESCRIPTION_PT_BR = new core_1.StringField('description_pt_BR', EmployeeProfileBlockLink, 'Edm.String');
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.DESCRIPTION_ZH_CN = new core_1.StringField('description_zh_CN', EmployeeProfileBlockLink, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmployeeProfileBlockLink, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmployeeProfileBlockLink, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmployeeProfileBlockLink, 'Edm.String');
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.ORDER = new core_1.BigNumberField('order', EmployeeProfileBlockLink, 'Edm.Int64');
    /**
     * Static representation of the [[url]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.URL = new core_1.StringField('url', EmployeeProfileBlockLink, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', EmployeeProfileBlockLink, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.DESCRIPTION_TRANSLATION_TEXT_NAV = new core_1.Link('descriptionTranslationTextNav', EmployeeProfileBlockLink, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', EmployeeProfileBlockLink, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockLink.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', EmployeeProfileBlockLink, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the EmployeeProfileBlockLink entity.
     */
    EmployeeProfileBlockLink._allFields = [
        EmployeeProfileBlockLink.EMPLOYEE_PROFILE_BLOCK_CONTENT_CODE,
        EmployeeProfileBlockLink.EMPLOYEE_PROFILE_PAGE_CONFIG_CODE,
        EmployeeProfileBlockLink.EMPLOYEE_PROFILE_SECTION_CONFIG_CODE,
        EmployeeProfileBlockLink.EMPLOYEE_PROFILE_SUB_SECTION_CONFIG_CODE,
        EmployeeProfileBlockLink.CODE,
        EmployeeProfileBlockLink.CREATED_BY,
        EmployeeProfileBlockLink.CREATED_DATE_TIME,
        EmployeeProfileBlockLink.DESCRIPTION_DE_DE,
        EmployeeProfileBlockLink.DESCRIPTION_DEFAULT_VALUE,
        EmployeeProfileBlockLink.DESCRIPTION_EN_DEBUG,
        EmployeeProfileBlockLink.DESCRIPTION_EN_GB,
        EmployeeProfileBlockLink.DESCRIPTION_EN_US,
        EmployeeProfileBlockLink.DESCRIPTION_ES_ES,
        EmployeeProfileBlockLink.DESCRIPTION_ES_MX,
        EmployeeProfileBlockLink.DESCRIPTION_FR_CA,
        EmployeeProfileBlockLink.DESCRIPTION_FR_FR,
        EmployeeProfileBlockLink.DESCRIPTION_IT_IT,
        EmployeeProfileBlockLink.DESCRIPTION_LOCALIZED,
        EmployeeProfileBlockLink.DESCRIPTION_NL_NL,
        EmployeeProfileBlockLink.DESCRIPTION_PT_BR,
        EmployeeProfileBlockLink.DESCRIPTION_ZH_CN,
        EmployeeProfileBlockLink.LAST_MODIFIED_BY,
        EmployeeProfileBlockLink.LAST_MODIFIED_DATE_TIME,
        EmployeeProfileBlockLink.MDF_SYSTEM_RECORD_STATUS,
        EmployeeProfileBlockLink.ORDER,
        EmployeeProfileBlockLink.URL,
        EmployeeProfileBlockLink.CREATED_BY_NAV,
        EmployeeProfileBlockLink.DESCRIPTION_TRANSLATION_TEXT_NAV,
        EmployeeProfileBlockLink.LAST_MODIFIED_BY_NAV,
        EmployeeProfileBlockLink.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    EmployeeProfileBlockLink.ALL_FIELDS = new core_1.AllFields('*', EmployeeProfileBlockLink);
    /**
     * All key fields of the EmployeeProfileBlockLink entity.
     */
    EmployeeProfileBlockLink._keyFields = [EmployeeProfileBlockLink.EMPLOYEE_PROFILE_BLOCK_CONTENT_CODE, EmployeeProfileBlockLink.EMPLOYEE_PROFILE_PAGE_CONFIG_CODE, EmployeeProfileBlockLink.EMPLOYEE_PROFILE_SECTION_CONFIG_CODE, EmployeeProfileBlockLink.EMPLOYEE_PROFILE_SUB_SECTION_CONFIG_CODE, EmployeeProfileBlockLink.CODE];
    /**
     * Mapping of all key field names to the respective static field property EmployeeProfileBlockLink.
     */
    EmployeeProfileBlockLink._keys = EmployeeProfileBlockLink._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeProfileBlockLink = exports.EmployeeProfileBlockLink || (exports.EmployeeProfileBlockLink = {}));
exports.EmployeeProfileBlockLink = EmployeeProfileBlockLink;
//# sourceMappingURL=EmployeeProfileBlockLink.js.map