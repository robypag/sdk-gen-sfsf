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
var PayrollConfigurationCategoryRequestBuilder_1 = require("./PayrollConfigurationCategoryRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PayrollConfigurationCategory" of service "SFOData".
 */
var PayrollConfigurationCategory = /** @class */ (function (_super) {
    __extends(PayrollConfigurationCategory, _super);
    function PayrollConfigurationCategory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PayrollConfigurationCategory`.
     * @returns A builder that constructs instances of entity type `PayrollConfigurationCategory`.
     */
    PayrollConfigurationCategory.builder = function () {
        return core_1.Entity.entityBuilder(PayrollConfigurationCategory);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PayrollConfigurationCategory` entity type.
     * @returns A `PayrollConfigurationCategory` request builder.
     */
    PayrollConfigurationCategory.requestBuilder = function () {
        return new PayrollConfigurationCategoryRequestBuilder_1.PayrollConfigurationCategoryRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PayrollConfigurationCategory`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PayrollConfigurationCategory`.
     */
    PayrollConfigurationCategory.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PayrollConfigurationCategory);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PayrollConfigurationCategory.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PayrollConfigurationCategory.
     */
    PayrollConfigurationCategory._entityName = 'PayrollConfigurationCategory';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PayrollConfigurationCategory.
     */
    PayrollConfigurationCategory._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PayrollConfigurationCategory._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PayrollConfigurationCategory;
}(core_1.Entity));
exports.PayrollConfigurationCategory = PayrollConfigurationCategory;
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var PayrollConfigurationCategoryLink_1 = require("./PayrollConfigurationCategoryLink");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (PayrollConfigurationCategory) {
    /**
     * Static representation of the [[payrollSystemConfigurationExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategory.PAYROLL_SYSTEM_CONFIGURATION_EXTERNAL_CODE = new core_1.StringField('PayrollSystemConfiguration_externalCode', PayrollConfigurationCategory, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategory.CREATED_BY = new core_1.StringField('createdBy', PayrollConfigurationCategory, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategory.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PayrollConfigurationCategory, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCategoryNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_DE_DE = new core_1.StringField('externalCategoryName_de_DE', PayrollConfigurationCategory, 'Edm.String');
    /**
     * Static representation of the [[externalCategoryNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_DEFAULT_VALUE = new core_1.StringField('externalCategoryName_defaultValue', PayrollConfigurationCategory, 'Edm.String');
    /**
     * Static representation of the [[externalCategoryNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_EN_DEBUG = new core_1.StringField('externalCategoryName_en_DEBUG', PayrollConfigurationCategory, 'Edm.String');
    /**
     * Static representation of the [[externalCategoryNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_EN_GB = new core_1.StringField('externalCategoryName_en_GB', PayrollConfigurationCategory, 'Edm.String');
    /**
     * Static representation of the [[externalCategoryNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_EN_US = new core_1.StringField('externalCategoryName_en_US', PayrollConfigurationCategory, 'Edm.String');
    /**
     * Static representation of the [[externalCategoryNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_ES_ES = new core_1.StringField('externalCategoryName_es_ES', PayrollConfigurationCategory, 'Edm.String');
    /**
     * Static representation of the [[externalCategoryNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_ES_MX = new core_1.StringField('externalCategoryName_es_MX', PayrollConfigurationCategory, 'Edm.String');
    /**
     * Static representation of the [[externalCategoryNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_FR_CA = new core_1.StringField('externalCategoryName_fr_CA', PayrollConfigurationCategory, 'Edm.String');
    /**
     * Static representation of the [[externalCategoryNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_FR_FR = new core_1.StringField('externalCategoryName_fr_FR', PayrollConfigurationCategory, 'Edm.String');
    /**
     * Static representation of the [[externalCategoryNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_IT_IT = new core_1.StringField('externalCategoryName_it_IT', PayrollConfigurationCategory, 'Edm.String');
    /**
     * Static representation of the [[externalCategoryNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_LOCALIZED = new core_1.StringField('externalCategoryName_localized', PayrollConfigurationCategory, 'Edm.String');
    /**
     * Static representation of the [[externalCategoryNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_NL_NL = new core_1.StringField('externalCategoryName_nl_NL', PayrollConfigurationCategory, 'Edm.String');
    /**
     * Static representation of the [[externalCategoryNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_PT_BR = new core_1.StringField('externalCategoryName_pt_BR', PayrollConfigurationCategory, 'Edm.String');
    /**
     * Static representation of the [[externalCategoryNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_ZH_CN = new core_1.StringField('externalCategoryName_zh_CN', PayrollConfigurationCategory, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategory.EXTERNAL_CODE = new core_1.StringField('externalCode', PayrollConfigurationCategory, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategory.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PayrollConfigurationCategory, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategory.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PayrollConfigurationCategory, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategory.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PayrollConfigurationCategory, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategory.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PayrollConfigurationCategory, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[externalCategoryNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('externalCategoryNameTranslationTextNav', PayrollConfigurationCategory, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategory.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PayrollConfigurationCategory, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[links]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategory.LINKS = new core_1.Link('links', PayrollConfigurationCategory, PayrollConfigurationCategoryLink_1.PayrollConfigurationCategoryLink);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategory.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PayrollConfigurationCategory, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the PayrollConfigurationCategory entity.
     */
    PayrollConfigurationCategory._allFields = [
        PayrollConfigurationCategory.PAYROLL_SYSTEM_CONFIGURATION_EXTERNAL_CODE,
        PayrollConfigurationCategory.CREATED_BY,
        PayrollConfigurationCategory.CREATED_DATE_TIME,
        PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_DE_DE,
        PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_DEFAULT_VALUE,
        PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_EN_DEBUG,
        PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_EN_GB,
        PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_EN_US,
        PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_ES_ES,
        PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_ES_MX,
        PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_FR_CA,
        PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_FR_FR,
        PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_IT_IT,
        PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_LOCALIZED,
        PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_NL_NL,
        PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_PT_BR,
        PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_ZH_CN,
        PayrollConfigurationCategory.EXTERNAL_CODE,
        PayrollConfigurationCategory.LAST_MODIFIED_BY,
        PayrollConfigurationCategory.LAST_MODIFIED_DATE_TIME,
        PayrollConfigurationCategory.MDF_SYSTEM_RECORD_STATUS,
        PayrollConfigurationCategory.CREATED_BY_NAV,
        PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_TRANSLATION_TEXT_NAV,
        PayrollConfigurationCategory.LAST_MODIFIED_BY_NAV,
        PayrollConfigurationCategory.LINKS,
        PayrollConfigurationCategory.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    PayrollConfigurationCategory.ALL_FIELDS = new core_1.AllFields('*', PayrollConfigurationCategory);
    /**
     * All key fields of the PayrollConfigurationCategory entity.
     */
    PayrollConfigurationCategory._keyFields = [PayrollConfigurationCategory.PAYROLL_SYSTEM_CONFIGURATION_EXTERNAL_CODE, PayrollConfigurationCategory.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property PayrollConfigurationCategory.
     */
    PayrollConfigurationCategory._keys = PayrollConfigurationCategory._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PayrollConfigurationCategory = exports.PayrollConfigurationCategory || (exports.PayrollConfigurationCategory = {}));
exports.PayrollConfigurationCategory = PayrollConfigurationCategory;
//# sourceMappingURL=PayrollConfigurationCategory.js.map