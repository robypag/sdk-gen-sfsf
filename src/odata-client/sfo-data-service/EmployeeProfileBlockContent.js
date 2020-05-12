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
var EmployeeProfileBlockContentRequestBuilder_1 = require("./EmployeeProfileBlockContentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeeProfileBlockContent" of service "SFOData".
 */
var EmployeeProfileBlockContent = /** @class */ (function (_super) {
    __extends(EmployeeProfileBlockContent, _super);
    function EmployeeProfileBlockContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeProfileBlockContent`.
     * @returns A builder that constructs instances of entity type `EmployeeProfileBlockContent`.
     */
    EmployeeProfileBlockContent.builder = function () {
        return core_1.Entity.entityBuilder(EmployeeProfileBlockContent);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeProfileBlockContent` entity type.
     * @returns A `EmployeeProfileBlockContent` request builder.
     */
    EmployeeProfileBlockContent.requestBuilder = function () {
        return new EmployeeProfileBlockContentRequestBuilder_1.EmployeeProfileBlockContentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeProfileBlockContent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeProfileBlockContent`.
     */
    EmployeeProfileBlockContent.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmployeeProfileBlockContent);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeProfileBlockContent.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeProfileBlockContent.
     */
    EmployeeProfileBlockContent._entityName = 'EmployeeProfileBlockContent';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeProfileBlockContent.
     */
    EmployeeProfileBlockContent._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmployeeProfileBlockContent._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmployeeProfileBlockContent;
}(core_1.Entity));
exports.EmployeeProfileBlockContent = EmployeeProfileBlockContent;
var MdfEnumValue_1 = require("./MdfEnumValue");
var EmployeeProfileBlockLink_1 = require("./EmployeeProfileBlockLink");
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var EmployeeProfileFieldConfig_1 = require("./EmployeeProfileFieldConfig");
var MdfBlockConfig_1 = require("./MdfBlockConfig");
(function (EmployeeProfileBlockContent) {
    /**
     * Static representation of the [[employeeProfilePageConfigCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.EMPLOYEE_PROFILE_PAGE_CONFIG_CODE = new core_1.StringField('EmployeeProfilePageConfig_code', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[employeeProfileSectionConfigCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.EMPLOYEE_PROFILE_SECTION_CONFIG_CODE = new core_1.StringField('EmployeeProfileSectionConfig_code', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[employeeProfileSubSectionConfigCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.EMPLOYEE_PROFILE_SUB_SECTION_CONFIG_CODE = new core_1.StringField('EmployeeProfileSubSectionConfig_code', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[blockLayout]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.BLOCK_LAYOUT = new core_1.StringField('blockLayout', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[blockLink]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.BLOCK_LINK = new core_1.StringField('blockLink', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[blockSize]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.BLOCK_SIZE = new core_1.StringField('blockSize', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[blockType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.BLOCK_TYPE = new core_1.StringField('blockType', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.CODE = new core_1.StringField('code', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.CREATED_BY = new core_1.StringField('createdBy', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmployeeProfileBlockContent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.DESCRIPTION_DE_DE = new core_1.StringField('description_de_DE', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.DESCRIPTION_DEFAULT_VALUE = new core_1.StringField('description_defaultValue', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.DESCRIPTION_EN_DEBUG = new core_1.StringField('description_en_DEBUG', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.DESCRIPTION_EN_GB = new core_1.StringField('description_en_GB', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.DESCRIPTION_EN_US = new core_1.StringField('description_en_US', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.DESCRIPTION_ES_ES = new core_1.StringField('description_es_ES', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.DESCRIPTION_ES_MX = new core_1.StringField('description_es_MX', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.DESCRIPTION_FR_CA = new core_1.StringField('description_fr_CA', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.DESCRIPTION_FR_FR = new core_1.StringField('description_fr_FR', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.DESCRIPTION_IT_IT = new core_1.StringField('description_it_IT', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.DESCRIPTION_LOCALIZED = new core_1.StringField('description_localized', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.DESCRIPTION_NL_NL = new core_1.StringField('description_nl_NL', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.DESCRIPTION_PT_BR = new core_1.StringField('description_pt_BR', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.DESCRIPTION_ZH_CN = new core_1.StringField('description_zh_CN', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[entries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.ENTRIES = new core_1.BigNumberField('entries', EmployeeProfileBlockContent, 'Edm.Int64');
    /**
     * Static representation of the [[extensionLink]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.EXTENSION_LINK = new core_1.StringField('extensionLink', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[extensionLinkLabelDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_DE_DE = new core_1.StringField('extensionLinkLabel_de_DE', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[extensionLinkLabelDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_DEFAULT_VALUE = new core_1.StringField('extensionLinkLabel_defaultValue', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[extensionLinkLabelEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_EN_DEBUG = new core_1.StringField('extensionLinkLabel_en_DEBUG', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[extensionLinkLabelEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_EN_GB = new core_1.StringField('extensionLinkLabel_en_GB', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[extensionLinkLabelEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_EN_US = new core_1.StringField('extensionLinkLabel_en_US', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[extensionLinkLabelEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_ES_ES = new core_1.StringField('extensionLinkLabel_es_ES', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[extensionLinkLabelEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_ES_MX = new core_1.StringField('extensionLinkLabel_es_MX', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[extensionLinkLabelFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_FR_CA = new core_1.StringField('extensionLinkLabel_fr_CA', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[extensionLinkLabelFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_FR_FR = new core_1.StringField('extensionLinkLabel_fr_FR', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[extensionLinkLabelItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_IT_IT = new core_1.StringField('extensionLinkLabel_it_IT', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[extensionLinkLabelLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_LOCALIZED = new core_1.StringField('extensionLinkLabel_localized', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[extensionLinkLabelNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_NL_NL = new core_1.StringField('extensionLinkLabel_nl_NL', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[extensionLinkLabelPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_PT_BR = new core_1.StringField('extensionLinkLabel_pt_BR', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[extensionLinkLabelZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_ZH_CN = new core_1.StringField('extensionLinkLabel_zh_CN', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[fieldReferenceId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.FIELD_REFERENCE_ID = new core_1.StringField('fieldReferenceID', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[labelSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.LABEL_SOURCE = new core_1.StringField('labelSource', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmployeeProfileBlockContent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[layout]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.LAYOUT = new core_1.StringField('layout', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[linkedInApiToken]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.LINKED_IN_API_TOKEN = new core_1.StringField('linkedInApiToken', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[linkedInCompanyToken]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.LINKED_IN_COMPANY_TOKEN = new core_1.StringField('linkedInCompanyToken', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[mdfBlockConfig]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.MDF_BLOCK_CONFIG = new core_1.StringField('mdfBlockConfig', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.ORDER = new core_1.BigNumberField('order', EmployeeProfileBlockContent, 'Edm.Int64');
    /**
     * Static representation of the [[ratingOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.RATING_OPTION = new core_1.StringField('ratingOption', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[referenceId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.REFERENCE_ID = new core_1.StringField('referenceID', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[ruleExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.RULE_EXTERNAL_CODE = new core_1.StringField('ruleExternalCode', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[sortBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.SORT_BY = new core_1.StringField('sortBy', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[threshold]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.THRESHOLD = new core_1.StringField('threshold', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[titleDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.TITLE_DE_DE = new core_1.StringField('title_de_DE', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[titleDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.TITLE_DEFAULT_VALUE = new core_1.StringField('title_defaultValue', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[titleEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.TITLE_EN_DEBUG = new core_1.StringField('title_en_DEBUG', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[titleEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.TITLE_EN_GB = new core_1.StringField('title_en_GB', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[titleEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.TITLE_EN_US = new core_1.StringField('title_en_US', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[titleEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.TITLE_ES_ES = new core_1.StringField('title_es_ES', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[titleEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.TITLE_ES_MX = new core_1.StringField('title_es_MX', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[titleFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.TITLE_FR_CA = new core_1.StringField('title_fr_CA', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[titleFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.TITLE_FR_FR = new core_1.StringField('title_fr_FR', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[titleItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.TITLE_IT_IT = new core_1.StringField('title_it_IT', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[titleLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.TITLE_LOCALIZED = new core_1.StringField('title_localized', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[titleNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.TITLE_NL_NL = new core_1.StringField('title_nl_NL', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[titlePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.TITLE_PT_BR = new core_1.StringField('title_pt_BR', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the [[titleZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.TITLE_ZH_CN = new core_1.StringField('title_zh_CN', EmployeeProfileBlockContent, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[blockLayoutNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.BLOCK_LAYOUT_NAV = new core_1.OneToOneLink('blockLayoutNav', EmployeeProfileBlockContent, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[blockLinks]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.BLOCK_LINKS = new core_1.Link('blockLinks', EmployeeProfileBlockContent, EmployeeProfileBlockLink_1.EmployeeProfileBlockLink);
    /**
     * Static representation of the one-to-one navigation property [[blockSizeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.BLOCK_SIZE_NAV = new core_1.OneToOneLink('blockSizeNav', EmployeeProfileBlockContent, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[blockTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.BLOCK_TYPE_NAV = new core_1.OneToOneLink('blockTypeNav', EmployeeProfileBlockContent, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', EmployeeProfileBlockContent, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.DESCRIPTION_TRANSLATION_TEXT_NAV = new core_1.Link('descriptionTranslationTextNav', EmployeeProfileBlockContent, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[extensionLinkLabelTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_TRANSLATION_TEXT_NAV = new core_1.Link('extensionLinkLabelTranslationTextNav', EmployeeProfileBlockContent, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[fields]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.FIELDS = new core_1.Link('fields', EmployeeProfileBlockContent, EmployeeProfileFieldConfig_1.EmployeeProfileFieldConfig);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', EmployeeProfileBlockContent, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[layoutNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.LAYOUT_NAV = new core_1.OneToOneLink('layoutNav', EmployeeProfileBlockContent, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[mdfBlockConfigNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.MDF_BLOCK_CONFIG_NAV = new core_1.OneToOneLink('mdfBlockConfigNav', EmployeeProfileBlockContent, MdfBlockConfig_1.MdfBlockConfig);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', EmployeeProfileBlockContent, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[titleTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileBlockContent.TITLE_TRANSLATION_TEXT_NAV = new core_1.Link('titleTranslationTextNav', EmployeeProfileBlockContent, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * All fields of the EmployeeProfileBlockContent entity.
     */
    EmployeeProfileBlockContent._allFields = [
        EmployeeProfileBlockContent.EMPLOYEE_PROFILE_PAGE_CONFIG_CODE,
        EmployeeProfileBlockContent.EMPLOYEE_PROFILE_SECTION_CONFIG_CODE,
        EmployeeProfileBlockContent.EMPLOYEE_PROFILE_SUB_SECTION_CONFIG_CODE,
        EmployeeProfileBlockContent.BLOCK_LAYOUT,
        EmployeeProfileBlockContent.BLOCK_LINK,
        EmployeeProfileBlockContent.BLOCK_SIZE,
        EmployeeProfileBlockContent.BLOCK_TYPE,
        EmployeeProfileBlockContent.CODE,
        EmployeeProfileBlockContent.CREATED_BY,
        EmployeeProfileBlockContent.CREATED_DATE_TIME,
        EmployeeProfileBlockContent.DESCRIPTION_DE_DE,
        EmployeeProfileBlockContent.DESCRIPTION_DEFAULT_VALUE,
        EmployeeProfileBlockContent.DESCRIPTION_EN_DEBUG,
        EmployeeProfileBlockContent.DESCRIPTION_EN_GB,
        EmployeeProfileBlockContent.DESCRIPTION_EN_US,
        EmployeeProfileBlockContent.DESCRIPTION_ES_ES,
        EmployeeProfileBlockContent.DESCRIPTION_ES_MX,
        EmployeeProfileBlockContent.DESCRIPTION_FR_CA,
        EmployeeProfileBlockContent.DESCRIPTION_FR_FR,
        EmployeeProfileBlockContent.DESCRIPTION_IT_IT,
        EmployeeProfileBlockContent.DESCRIPTION_LOCALIZED,
        EmployeeProfileBlockContent.DESCRIPTION_NL_NL,
        EmployeeProfileBlockContent.DESCRIPTION_PT_BR,
        EmployeeProfileBlockContent.DESCRIPTION_ZH_CN,
        EmployeeProfileBlockContent.ENTRIES,
        EmployeeProfileBlockContent.EXTENSION_LINK,
        EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_DE_DE,
        EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_DEFAULT_VALUE,
        EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_EN_DEBUG,
        EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_EN_GB,
        EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_EN_US,
        EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_ES_ES,
        EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_ES_MX,
        EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_FR_CA,
        EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_FR_FR,
        EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_IT_IT,
        EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_LOCALIZED,
        EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_NL_NL,
        EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_PT_BR,
        EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_ZH_CN,
        EmployeeProfileBlockContent.FIELD_REFERENCE_ID,
        EmployeeProfileBlockContent.LABEL_SOURCE,
        EmployeeProfileBlockContent.LAST_MODIFIED_BY,
        EmployeeProfileBlockContent.LAST_MODIFIED_DATE_TIME,
        EmployeeProfileBlockContent.LAYOUT,
        EmployeeProfileBlockContent.LINKED_IN_API_TOKEN,
        EmployeeProfileBlockContent.LINKED_IN_COMPANY_TOKEN,
        EmployeeProfileBlockContent.MDF_BLOCK_CONFIG,
        EmployeeProfileBlockContent.MDF_SYSTEM_RECORD_STATUS,
        EmployeeProfileBlockContent.ORDER,
        EmployeeProfileBlockContent.RATING_OPTION,
        EmployeeProfileBlockContent.REFERENCE_ID,
        EmployeeProfileBlockContent.RULE_EXTERNAL_CODE,
        EmployeeProfileBlockContent.SORT_BY,
        EmployeeProfileBlockContent.THRESHOLD,
        EmployeeProfileBlockContent.TITLE_DE_DE,
        EmployeeProfileBlockContent.TITLE_DEFAULT_VALUE,
        EmployeeProfileBlockContent.TITLE_EN_DEBUG,
        EmployeeProfileBlockContent.TITLE_EN_GB,
        EmployeeProfileBlockContent.TITLE_EN_US,
        EmployeeProfileBlockContent.TITLE_ES_ES,
        EmployeeProfileBlockContent.TITLE_ES_MX,
        EmployeeProfileBlockContent.TITLE_FR_CA,
        EmployeeProfileBlockContent.TITLE_FR_FR,
        EmployeeProfileBlockContent.TITLE_IT_IT,
        EmployeeProfileBlockContent.TITLE_LOCALIZED,
        EmployeeProfileBlockContent.TITLE_NL_NL,
        EmployeeProfileBlockContent.TITLE_PT_BR,
        EmployeeProfileBlockContent.TITLE_ZH_CN,
        EmployeeProfileBlockContent.BLOCK_LAYOUT_NAV,
        EmployeeProfileBlockContent.BLOCK_LINKS,
        EmployeeProfileBlockContent.BLOCK_SIZE_NAV,
        EmployeeProfileBlockContent.BLOCK_TYPE_NAV,
        EmployeeProfileBlockContent.CREATED_BY_NAV,
        EmployeeProfileBlockContent.DESCRIPTION_TRANSLATION_TEXT_NAV,
        EmployeeProfileBlockContent.EXTENSION_LINK_LABEL_TRANSLATION_TEXT_NAV,
        EmployeeProfileBlockContent.FIELDS,
        EmployeeProfileBlockContent.LAST_MODIFIED_BY_NAV,
        EmployeeProfileBlockContent.LAYOUT_NAV,
        EmployeeProfileBlockContent.MDF_BLOCK_CONFIG_NAV,
        EmployeeProfileBlockContent.MDF_SYSTEM_RECORD_STATUS_NAV,
        EmployeeProfileBlockContent.TITLE_TRANSLATION_TEXT_NAV
    ];
    /**
     * All fields selector.
     */
    EmployeeProfileBlockContent.ALL_FIELDS = new core_1.AllFields('*', EmployeeProfileBlockContent);
    /**
     * All key fields of the EmployeeProfileBlockContent entity.
     */
    EmployeeProfileBlockContent._keyFields = [EmployeeProfileBlockContent.EMPLOYEE_PROFILE_PAGE_CONFIG_CODE, EmployeeProfileBlockContent.EMPLOYEE_PROFILE_SECTION_CONFIG_CODE, EmployeeProfileBlockContent.EMPLOYEE_PROFILE_SUB_SECTION_CONFIG_CODE, EmployeeProfileBlockContent.CODE];
    /**
     * Mapping of all key field names to the respective static field property EmployeeProfileBlockContent.
     */
    EmployeeProfileBlockContent._keys = EmployeeProfileBlockContent._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeProfileBlockContent = exports.EmployeeProfileBlockContent || (exports.EmployeeProfileBlockContent = {}));
exports.EmployeeProfileBlockContent = EmployeeProfileBlockContent;
//# sourceMappingURL=EmployeeProfileBlockContent.js.map