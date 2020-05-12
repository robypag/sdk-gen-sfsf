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
var SapSystemConfigurationRequestBuilder_1 = require("./SapSystemConfigurationRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SAPSystemConfiguration" of service "SFOData".
 */
var SapSystemConfiguration = /** @class */ (function (_super) {
    __extends(SapSystemConfiguration, _super);
    function SapSystemConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SapSystemConfiguration`.
     * @returns A builder that constructs instances of entity type `SapSystemConfiguration`.
     */
    SapSystemConfiguration.builder = function () {
        return core_1.Entity.entityBuilder(SapSystemConfiguration);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SapSystemConfiguration` entity type.
     * @returns A `SapSystemConfiguration` request builder.
     */
    SapSystemConfiguration.requestBuilder = function () {
        return new SapSystemConfigurationRequestBuilder_1.SapSystemConfigurationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SapSystemConfiguration`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SapSystemConfiguration`.
     */
    SapSystemConfiguration.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, SapSystemConfiguration);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SapSystemConfiguration.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SapSystemConfiguration.
     */
    SapSystemConfiguration._entityName = 'SAPSystemConfiguration';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SapSystemConfiguration.
     */
    SapSystemConfiguration._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    SapSystemConfiguration._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SapSystemConfiguration;
}(core_1.Entity));
exports.SapSystemConfiguration = SapSystemConfiguration;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (SapSystemConfiguration) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SapSystemConfiguration.CREATED_BY = new core_1.StringField('createdBy', SapSystemConfiguration, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SapSystemConfiguration.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', SapSystemConfiguration, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SapSystemConfiguration.EXTERNAL_CODE = new core_1.StringField('externalCode', SapSystemConfiguration, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SapSystemConfiguration.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', SapSystemConfiguration, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SapSystemConfiguration.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', SapSystemConfiguration, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SapSystemConfiguration.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', SapSystemConfiguration, 'Edm.String');
    /**
     * Static representation of the [[payrollSystemClientId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SapSystemConfiguration.PAYROLL_SYSTEM_CLIENT_ID = new core_1.StringField('payrollSystemClientId', SapSystemConfiguration, 'Edm.String');
    /**
     * Static representation of the [[payrollSystemUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SapSystemConfiguration.PAYROLL_SYSTEM_URL = new core_1.StringField('payrollSystemUrl', SapSystemConfiguration, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SapSystemConfiguration.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', SapSystemConfiguration, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SapSystemConfiguration.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', SapSystemConfiguration, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SapSystemConfiguration.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', SapSystemConfiguration, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SapSystemConfiguration.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', SapSystemConfiguration, WfRequest_1.WfRequest);
    /**
     * All fields of the SapSystemConfiguration entity.
     */
    SapSystemConfiguration._allFields = [
        SapSystemConfiguration.CREATED_BY,
        SapSystemConfiguration.CREATED_DATE_TIME,
        SapSystemConfiguration.EXTERNAL_CODE,
        SapSystemConfiguration.LAST_MODIFIED_BY,
        SapSystemConfiguration.LAST_MODIFIED_DATE_TIME,
        SapSystemConfiguration.MDF_SYSTEM_RECORD_STATUS,
        SapSystemConfiguration.PAYROLL_SYSTEM_CLIENT_ID,
        SapSystemConfiguration.PAYROLL_SYSTEM_URL,
        SapSystemConfiguration.CREATED_BY_NAV,
        SapSystemConfiguration.LAST_MODIFIED_BY_NAV,
        SapSystemConfiguration.MDF_SYSTEM_RECORD_STATUS_NAV,
        SapSystemConfiguration.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    SapSystemConfiguration.ALL_FIELDS = new core_1.AllFields('*', SapSystemConfiguration);
    /**
     * All key fields of the SapSystemConfiguration entity.
     */
    SapSystemConfiguration._keyFields = [SapSystemConfiguration.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property SapSystemConfiguration.
     */
    SapSystemConfiguration._keys = SapSystemConfiguration._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SapSystemConfiguration = exports.SapSystemConfiguration || (exports.SapSystemConfiguration = {}));
exports.SapSystemConfiguration = SapSystemConfiguration;
//# sourceMappingURL=SapSystemConfiguration.js.map