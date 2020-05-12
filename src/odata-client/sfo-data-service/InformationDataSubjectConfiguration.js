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
var InformationDataSubjectConfigurationRequestBuilder_1 = require("./InformationDataSubjectConfigurationRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "InformationDataSubjectConfiguration" of service "SFOData".
 */
var InformationDataSubjectConfiguration = /** @class */ (function (_super) {
    __extends(InformationDataSubjectConfiguration, _super);
    function InformationDataSubjectConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `InformationDataSubjectConfiguration`.
     * @returns A builder that constructs instances of entity type `InformationDataSubjectConfiguration`.
     */
    InformationDataSubjectConfiguration.builder = function () {
        return core_1.Entity.entityBuilder(InformationDataSubjectConfiguration);
    };
    /**
     * Returns a request builder to construct requests for operations on the `InformationDataSubjectConfiguration` entity type.
     * @returns A `InformationDataSubjectConfiguration` request builder.
     */
    InformationDataSubjectConfiguration.requestBuilder = function () {
        return new InformationDataSubjectConfigurationRequestBuilder_1.InformationDataSubjectConfigurationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InformationDataSubjectConfiguration`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InformationDataSubjectConfiguration`.
     */
    InformationDataSubjectConfiguration.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, InformationDataSubjectConfiguration);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    InformationDataSubjectConfiguration.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for InformationDataSubjectConfiguration.
     */
    InformationDataSubjectConfiguration._entityName = 'InformationDataSubjectConfiguration';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for InformationDataSubjectConfiguration.
     */
    InformationDataSubjectConfiguration._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    InformationDataSubjectConfiguration._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return InformationDataSubjectConfiguration;
}(core_1.Entity));
exports.InformationDataSubjectConfiguration = InformationDataSubjectConfiguration;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (InformationDataSubjectConfiguration) {
    /**
     * Static representation of the [[configData]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InformationDataSubjectConfiguration.CONFIG_DATA = new core_1.StringField('configData', InformationDataSubjectConfiguration, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InformationDataSubjectConfiguration.CREATED_BY = new core_1.StringField('createdBy', InformationDataSubjectConfiguration, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InformationDataSubjectConfiguration.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', InformationDataSubjectConfiguration, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InformationDataSubjectConfiguration.EXTERNAL_CODE = new core_1.StringField('externalCode', InformationDataSubjectConfiguration, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InformationDataSubjectConfiguration.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', InformationDataSubjectConfiguration, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InformationDataSubjectConfiguration.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', InformationDataSubjectConfiguration, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[locale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InformationDataSubjectConfiguration.LOCALE = new core_1.StringField('locale', InformationDataSubjectConfiguration, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InformationDataSubjectConfiguration.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', InformationDataSubjectConfiguration, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InformationDataSubjectConfiguration.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', InformationDataSubjectConfiguration, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InformationDataSubjectConfiguration.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', InformationDataSubjectConfiguration, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InformationDataSubjectConfiguration.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', InformationDataSubjectConfiguration, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InformationDataSubjectConfiguration.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', InformationDataSubjectConfiguration, WfRequest_1.WfRequest);
    /**
     * All fields of the InformationDataSubjectConfiguration entity.
     */
    InformationDataSubjectConfiguration._allFields = [
        InformationDataSubjectConfiguration.CONFIG_DATA,
        InformationDataSubjectConfiguration.CREATED_BY,
        InformationDataSubjectConfiguration.CREATED_DATE_TIME,
        InformationDataSubjectConfiguration.EXTERNAL_CODE,
        InformationDataSubjectConfiguration.LAST_MODIFIED_BY,
        InformationDataSubjectConfiguration.LAST_MODIFIED_DATE_TIME,
        InformationDataSubjectConfiguration.LOCALE,
        InformationDataSubjectConfiguration.MDF_SYSTEM_RECORD_STATUS,
        InformationDataSubjectConfiguration.CREATED_BY_NAV,
        InformationDataSubjectConfiguration.LAST_MODIFIED_BY_NAV,
        InformationDataSubjectConfiguration.MDF_SYSTEM_RECORD_STATUS_NAV,
        InformationDataSubjectConfiguration.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    InformationDataSubjectConfiguration.ALL_FIELDS = new core_1.AllFields('*', InformationDataSubjectConfiguration);
    /**
     * All key fields of the InformationDataSubjectConfiguration entity.
     */
    InformationDataSubjectConfiguration._keyFields = [InformationDataSubjectConfiguration.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property InformationDataSubjectConfiguration.
     */
    InformationDataSubjectConfiguration._keys = InformationDataSubjectConfiguration._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(InformationDataSubjectConfiguration = exports.InformationDataSubjectConfiguration || (exports.InformationDataSubjectConfiguration = {}));
exports.InformationDataSubjectConfiguration = InformationDataSubjectConfiguration;
//# sourceMappingURL=InformationDataSubjectConfiguration.js.map