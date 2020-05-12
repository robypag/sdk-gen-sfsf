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
var PayrollSystemConfigurationRequestBuilder_1 = require("./PayrollSystemConfigurationRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PayrollSystemConfiguration" of service "SFOData".
 */
var PayrollSystemConfiguration = /** @class */ (function (_super) {
    __extends(PayrollSystemConfiguration, _super);
    function PayrollSystemConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PayrollSystemConfiguration`.
     * @returns A builder that constructs instances of entity type `PayrollSystemConfiguration`.
     */
    PayrollSystemConfiguration.builder = function () {
        return core_1.Entity.entityBuilder(PayrollSystemConfiguration);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PayrollSystemConfiguration` entity type.
     * @returns A `PayrollSystemConfiguration` request builder.
     */
    PayrollSystemConfiguration.requestBuilder = function () {
        return new PayrollSystemConfigurationRequestBuilder_1.PayrollSystemConfigurationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PayrollSystemConfiguration`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PayrollSystemConfiguration`.
     */
    PayrollSystemConfiguration.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PayrollSystemConfiguration);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PayrollSystemConfiguration.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PayrollSystemConfiguration.
     */
    PayrollSystemConfiguration._entityName = 'PayrollSystemConfiguration';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PayrollSystemConfiguration.
     */
    PayrollSystemConfiguration._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PayrollSystemConfiguration._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PayrollSystemConfiguration;
}(core_1.Entity));
exports.PayrollSystemConfiguration = PayrollSystemConfiguration;
var PayrollConfigurationCategory_1 = require("./PayrollConfigurationCategory");
var Country_1 = require("./Country");
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var SapSystemConfiguration_1 = require("./SapSystemConfiguration");
var WfRequest_1 = require("./WfRequest");
(function (PayrollSystemConfiguration) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollSystemConfiguration.COUNTRY = new core_1.StringField('country', PayrollSystemConfiguration, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollSystemConfiguration.CREATED_BY = new core_1.StringField('createdBy', PayrollSystemConfiguration, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollSystemConfiguration.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PayrollSystemConfiguration, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[enableBsi]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollSystemConfiguration.ENABLE_BSI = new core_1.BooleanField('enableBsi', PayrollSystemConfiguration, 'Edm.Boolean');
    /**
     * Static representation of the [[enableEnhancedValidationsForProduction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollSystemConfiguration.ENABLE_ENHANCED_VALIDATIONS_FOR_PRODUCTION = new core_1.BooleanField('enableEnhancedValidationsForProduction', PayrollSystemConfiguration, 'Edm.Boolean');
    /**
     * Static representation of the [[enablePayStatement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollSystemConfiguration.ENABLE_PAY_STATEMENT = new core_1.BooleanField('enablePayStatement', PayrollSystemConfiguration, 'Edm.Boolean');
    /**
     * Static representation of the [[enablePayrollUiIntegration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollSystemConfiguration.ENABLE_PAYROLL_UI_INTEGRATION = new core_1.BooleanField('enablePayrollUiIntegration', PayrollSystemConfiguration, 'Edm.Boolean');
    /**
     * Static representation of the [[enablePaystatementDownloadFunctionality]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollSystemConfiguration.ENABLE_PAYSTATEMENT_DOWNLOAD_FUNCTIONALITY = new core_1.BooleanField('enablePaystatementDownloadFunctionality', PayrollSystemConfiguration, 'Edm.Boolean');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollSystemConfiguration.EXTERNAL_CODE = new core_1.StringField('externalCode', PayrollSystemConfiguration, 'Edm.String');
    /**
     * Static representation of the [[externalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollSystemConfiguration.EXTERNAL_NAME = new core_1.StringField('externalName', PayrollSystemConfiguration, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollSystemConfiguration.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PayrollSystemConfiguration, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollSystemConfiguration.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PayrollSystemConfiguration, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollSystemConfiguration.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PayrollSystemConfiguration, 'Edm.String');
    /**
     * Static representation of the [[payrollSystemClientId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollSystemConfiguration.PAYROLL_SYSTEM_CLIENT_ID = new core_1.StringField('payrollSystemClientId', PayrollSystemConfiguration, 'Edm.String');
    /**
     * Static representation of the [[payrollSystemUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollSystemConfiguration.PAYROLL_SYSTEM_URL = new core_1.StringField('payrollSystemUrl', PayrollSystemConfiguration, 'Edm.String');
    /**
     * Static representation of the [[sapSystemConfiguration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollSystemConfiguration.SAP_SYSTEM_CONFIGURATION = new core_1.StringField('sapSystemConfiguration', PayrollSystemConfiguration, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollSystemConfiguration.STATUS = new core_1.StringField('status', PayrollSystemConfiguration, 'Edm.String');
    /**
     * Static representation of the [[thirdPartyIdpUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollSystemConfiguration.THIRD_PARTY_IDP_URL = new core_1.StringField('thirdPartyIdpUrl', PayrollSystemConfiguration, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[categories]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollSystemConfiguration.CATEGORIES = new core_1.Link('categories', PayrollSystemConfiguration, PayrollConfigurationCategory_1.PayrollConfigurationCategory);
    /**
     * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollSystemConfiguration.COUNTRY_NAV = new core_1.Link('countryNav', PayrollSystemConfiguration, Country_1.Country);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollSystemConfiguration.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PayrollSystemConfiguration, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollSystemConfiguration.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PayrollSystemConfiguration, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollSystemConfiguration.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PayrollSystemConfiguration, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[sapSystemConfigurationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollSystemConfiguration.SAP_SYSTEM_CONFIGURATION_NAV = new core_1.OneToOneLink('sapSystemConfigurationNav', PayrollSystemConfiguration, SapSystemConfiguration_1.SapSystemConfiguration);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollSystemConfiguration.STATUS_NAV = new core_1.OneToOneLink('statusNav', PayrollSystemConfiguration, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayrollSystemConfiguration.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', PayrollSystemConfiguration, WfRequest_1.WfRequest);
    /**
     * All fields of the PayrollSystemConfiguration entity.
     */
    PayrollSystemConfiguration._allFields = [
        PayrollSystemConfiguration.COUNTRY,
        PayrollSystemConfiguration.CREATED_BY,
        PayrollSystemConfiguration.CREATED_DATE_TIME,
        PayrollSystemConfiguration.ENABLE_BSI,
        PayrollSystemConfiguration.ENABLE_ENHANCED_VALIDATIONS_FOR_PRODUCTION,
        PayrollSystemConfiguration.ENABLE_PAY_STATEMENT,
        PayrollSystemConfiguration.ENABLE_PAYROLL_UI_INTEGRATION,
        PayrollSystemConfiguration.ENABLE_PAYSTATEMENT_DOWNLOAD_FUNCTIONALITY,
        PayrollSystemConfiguration.EXTERNAL_CODE,
        PayrollSystemConfiguration.EXTERNAL_NAME,
        PayrollSystemConfiguration.LAST_MODIFIED_BY,
        PayrollSystemConfiguration.LAST_MODIFIED_DATE_TIME,
        PayrollSystemConfiguration.MDF_SYSTEM_RECORD_STATUS,
        PayrollSystemConfiguration.PAYROLL_SYSTEM_CLIENT_ID,
        PayrollSystemConfiguration.PAYROLL_SYSTEM_URL,
        PayrollSystemConfiguration.SAP_SYSTEM_CONFIGURATION,
        PayrollSystemConfiguration.STATUS,
        PayrollSystemConfiguration.THIRD_PARTY_IDP_URL,
        PayrollSystemConfiguration.CATEGORIES,
        PayrollSystemConfiguration.COUNTRY_NAV,
        PayrollSystemConfiguration.CREATED_BY_NAV,
        PayrollSystemConfiguration.LAST_MODIFIED_BY_NAV,
        PayrollSystemConfiguration.MDF_SYSTEM_RECORD_STATUS_NAV,
        PayrollSystemConfiguration.SAP_SYSTEM_CONFIGURATION_NAV,
        PayrollSystemConfiguration.STATUS_NAV,
        PayrollSystemConfiguration.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    PayrollSystemConfiguration.ALL_FIELDS = new core_1.AllFields('*', PayrollSystemConfiguration);
    /**
     * All key fields of the PayrollSystemConfiguration entity.
     */
    PayrollSystemConfiguration._keyFields = [PayrollSystemConfiguration.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property PayrollSystemConfiguration.
     */
    PayrollSystemConfiguration._keys = PayrollSystemConfiguration._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PayrollSystemConfiguration = exports.PayrollSystemConfiguration || (exports.PayrollSystemConfiguration = {}));
exports.PayrollSystemConfiguration = PayrollSystemConfiguration;
//# sourceMappingURL=PayrollSystemConfiguration.js.map