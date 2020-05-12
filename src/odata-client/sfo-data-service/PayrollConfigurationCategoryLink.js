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
var PayrollConfigurationCategoryLinkRequestBuilder_1 = require("./PayrollConfigurationCategoryLinkRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PayrollConfigurationCategoryLink" of service "SFOData".
 */
var PayrollConfigurationCategoryLink = /** @class */ (function (_super) {
    __extends(PayrollConfigurationCategoryLink, _super);
    function PayrollConfigurationCategoryLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PayrollConfigurationCategoryLink`.
     * @returns A builder that constructs instances of entity type `PayrollConfigurationCategoryLink`.
     */
    PayrollConfigurationCategoryLink.builder = function () {
        return core_1.Entity.entityBuilder(PayrollConfigurationCategoryLink);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PayrollConfigurationCategoryLink` entity type.
     * @returns A `PayrollConfigurationCategoryLink` request builder.
     */
    PayrollConfigurationCategoryLink.requestBuilder = function () {
        return new PayrollConfigurationCategoryLinkRequestBuilder_1.PayrollConfigurationCategoryLinkRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PayrollConfigurationCategoryLink`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PayrollConfigurationCategoryLink`.
     */
    PayrollConfigurationCategoryLink.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PayrollConfigurationCategoryLink);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PayrollConfigurationCategoryLink.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PayrollConfigurationCategoryLink.
     */
    PayrollConfigurationCategoryLink._entityName = 'PayrollConfigurationCategoryLink';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PayrollConfigurationCategoryLink.
     */
    PayrollConfigurationCategoryLink._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PayrollConfigurationCategoryLink._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PayrollConfigurationCategoryLink;
}(core_1.Entity));
exports.PayrollConfigurationCategoryLink = PayrollConfigurationCategoryLink;
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
var PickListValueV2_1 = require("./PickListValueV2");
(function (PayrollConfigurationCategoryLink) {
    /**
     * Static representation of the [[payrollConfigurationCategoryExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.PAYROLL_CONFIGURATION_CATEGORY_EXTERNAL_CODE = new core_1.StringField('PayrollConfigurationCategory_externalCode', PayrollConfigurationCategoryLink, 'Edm.String');
    /**
     * Static representation of the [[payrollSystemConfigurationExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.PAYROLL_SYSTEM_CONFIGURATION_EXTERNAL_CODE = new core_1.StringField('PayrollSystemConfiguration_externalCode', PayrollConfigurationCategoryLink, 'Edm.String');
    /**
     * Static representation of the [[adminService]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.ADMIN_SERVICE = new core_1.BooleanField('adminService', PayrollConfigurationCategoryLink, 'Edm.Boolean');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.CREATED_BY = new core_1.StringField('createdBy', PayrollConfigurationCategoryLink, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PayrollConfigurationCategoryLink, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.EXTERNAL_CODE = new core_1.StringField('externalCode', PayrollConfigurationCategoryLink, 'Edm.String');
    /**
     * Static representation of the [[externalLinkNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_DE_DE = new core_1.StringField('externalLinkName_de_DE', PayrollConfigurationCategoryLink, 'Edm.String');
    /**
     * Static representation of the [[externalLinkNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_DEFAULT_VALUE = new core_1.StringField('externalLinkName_defaultValue', PayrollConfigurationCategoryLink, 'Edm.String');
    /**
     * Static representation of the [[externalLinkNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_EN_DEBUG = new core_1.StringField('externalLinkName_en_DEBUG', PayrollConfigurationCategoryLink, 'Edm.String');
    /**
     * Static representation of the [[externalLinkNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_EN_GB = new core_1.StringField('externalLinkName_en_GB', PayrollConfigurationCategoryLink, 'Edm.String');
    /**
     * Static representation of the [[externalLinkNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_EN_US = new core_1.StringField('externalLinkName_en_US', PayrollConfigurationCategoryLink, 'Edm.String');
    /**
     * Static representation of the [[externalLinkNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_ES_ES = new core_1.StringField('externalLinkName_es_ES', PayrollConfigurationCategoryLink, 'Edm.String');
    /**
     * Static representation of the [[externalLinkNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_ES_MX = new core_1.StringField('externalLinkName_es_MX', PayrollConfigurationCategoryLink, 'Edm.String');
    /**
     * Static representation of the [[externalLinkNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_FR_CA = new core_1.StringField('externalLinkName_fr_CA', PayrollConfigurationCategoryLink, 'Edm.String');
    /**
     * Static representation of the [[externalLinkNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_FR_FR = new core_1.StringField('externalLinkName_fr_FR', PayrollConfigurationCategoryLink, 'Edm.String');
    /**
     * Static representation of the [[externalLinkNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_IT_IT = new core_1.StringField('externalLinkName_it_IT', PayrollConfigurationCategoryLink, 'Edm.String');
    /**
     * Static representation of the [[externalLinkNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_LOCALIZED = new core_1.StringField('externalLinkName_localized', PayrollConfigurationCategoryLink, 'Edm.String');
    /**
     * Static representation of the [[externalLinkNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_NL_NL = new core_1.StringField('externalLinkName_nl_NL', PayrollConfigurationCategoryLink, 'Edm.String');
    /**
     * Static representation of the [[externalLinkNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_PT_BR = new core_1.StringField('externalLinkName_pt_BR', PayrollConfigurationCategoryLink, 'Edm.String');
    /**
     * Static representation of the [[externalLinkNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_ZH_CN = new core_1.StringField('externalLinkName_zh_CN', PayrollConfigurationCategoryLink, 'Edm.String');
    /**
     * Static representation of the [[infotypeNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.INFOTYPE_NUMBER = new core_1.BigNumberField('infotypeNumber', PayrollConfigurationCategoryLink, 'Edm.Int64');
    /**
     * Static representation of the [[isRequiredForPayroll]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.IS_REQUIRED_FOR_PAYROLL = new core_1.BooleanField('isRequiredForPayroll', PayrollConfigurationCategoryLink, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PayrollConfigurationCategoryLink, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PayrollConfigurationCategoryLink, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PayrollConfigurationCategoryLink, 'Edm.String');
    /**
     * Static representation of the [[selfService]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.SELF_SERVICE = new core_1.BooleanField('selfService', PayrollConfigurationCategoryLink, 'Edm.Boolean');
    /**
     * Static representation of the [[service]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.SERVICE = new core_1.StringField('service', PayrollConfigurationCategoryLink, 'Edm.String');
    /**
     * Static representation of the [[typeOfUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.TYPE_OF_URL = new core_1.StringField('typeOfUrl', PayrollConfigurationCategoryLink, 'Edm.String');
    /**
     * Static representation of the [[url]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.URL = new core_1.StringField('url', PayrollConfigurationCategoryLink, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PayrollConfigurationCategoryLink, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[externalLinkNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('externalLinkNameTranslationTextNav', PayrollConfigurationCategoryLink, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PayrollConfigurationCategoryLink, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PayrollConfigurationCategoryLink, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[serviceNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.SERVICE_NAV = new core_1.Link('serviceNav', PayrollConfigurationCategoryLink, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-many navigation property [[typeOfUrlNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollConfigurationCategoryLink.TYPE_OF_URL_NAV = new core_1.Link('typeOfUrlNav', PayrollConfigurationCategoryLink, PickListValueV2_1.PickListValueV2);
    /**
     * All fields of the PayrollConfigurationCategoryLink entity.
     */
    PayrollConfigurationCategoryLink._allFields = [
        PayrollConfigurationCategoryLink.PAYROLL_CONFIGURATION_CATEGORY_EXTERNAL_CODE,
        PayrollConfigurationCategoryLink.PAYROLL_SYSTEM_CONFIGURATION_EXTERNAL_CODE,
        PayrollConfigurationCategoryLink.ADMIN_SERVICE,
        PayrollConfigurationCategoryLink.CREATED_BY,
        PayrollConfigurationCategoryLink.CREATED_DATE_TIME,
        PayrollConfigurationCategoryLink.EXTERNAL_CODE,
        PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_DE_DE,
        PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_DEFAULT_VALUE,
        PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_EN_DEBUG,
        PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_EN_GB,
        PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_EN_US,
        PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_ES_ES,
        PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_ES_MX,
        PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_FR_CA,
        PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_FR_FR,
        PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_IT_IT,
        PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_LOCALIZED,
        PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_NL_NL,
        PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_PT_BR,
        PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_ZH_CN,
        PayrollConfigurationCategoryLink.INFOTYPE_NUMBER,
        PayrollConfigurationCategoryLink.IS_REQUIRED_FOR_PAYROLL,
        PayrollConfigurationCategoryLink.LAST_MODIFIED_BY,
        PayrollConfigurationCategoryLink.LAST_MODIFIED_DATE_TIME,
        PayrollConfigurationCategoryLink.MDF_SYSTEM_RECORD_STATUS,
        PayrollConfigurationCategoryLink.SELF_SERVICE,
        PayrollConfigurationCategoryLink.SERVICE,
        PayrollConfigurationCategoryLink.TYPE_OF_URL,
        PayrollConfigurationCategoryLink.URL,
        PayrollConfigurationCategoryLink.CREATED_BY_NAV,
        PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_TRANSLATION_TEXT_NAV,
        PayrollConfigurationCategoryLink.LAST_MODIFIED_BY_NAV,
        PayrollConfigurationCategoryLink.MDF_SYSTEM_RECORD_STATUS_NAV,
        PayrollConfigurationCategoryLink.SERVICE_NAV,
        PayrollConfigurationCategoryLink.TYPE_OF_URL_NAV
    ];
    /**
     * All fields selector.
     */
    PayrollConfigurationCategoryLink.ALL_FIELDS = new core_1.AllFields('*', PayrollConfigurationCategoryLink);
    /**
     * All key fields of the PayrollConfigurationCategoryLink entity.
     */
    PayrollConfigurationCategoryLink._keyFields = [PayrollConfigurationCategoryLink.PAYROLL_CONFIGURATION_CATEGORY_EXTERNAL_CODE, PayrollConfigurationCategoryLink.PAYROLL_SYSTEM_CONFIGURATION_EXTERNAL_CODE, PayrollConfigurationCategoryLink.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property PayrollConfigurationCategoryLink.
     */
    PayrollConfigurationCategoryLink._keys = PayrollConfigurationCategoryLink._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PayrollConfigurationCategoryLink = exports.PayrollConfigurationCategoryLink || (exports.PayrollConfigurationCategoryLink = {}));
exports.PayrollConfigurationCategoryLink = PayrollConfigurationCategoryLink;
//# sourceMappingURL=PayrollConfigurationCategoryLink.js.map