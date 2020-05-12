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
var EmployeeProfileHeaderConfigRequestBuilder_1 = require("./EmployeeProfileHeaderConfigRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeeProfileHeaderConfig" of service "SFOData".
 */
var EmployeeProfileHeaderConfig = /** @class */ (function (_super) {
    __extends(EmployeeProfileHeaderConfig, _super);
    function EmployeeProfileHeaderConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeProfileHeaderConfig`.
     * @returns A builder that constructs instances of entity type `EmployeeProfileHeaderConfig`.
     */
    EmployeeProfileHeaderConfig.builder = function () {
        return core_1.Entity.entityBuilder(EmployeeProfileHeaderConfig);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeProfileHeaderConfig` entity type.
     * @returns A `EmployeeProfileHeaderConfig` request builder.
     */
    EmployeeProfileHeaderConfig.requestBuilder = function () {
        return new EmployeeProfileHeaderConfigRequestBuilder_1.EmployeeProfileHeaderConfigRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeProfileHeaderConfig`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeProfileHeaderConfig`.
     */
    EmployeeProfileHeaderConfig.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmployeeProfileHeaderConfig);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeProfileHeaderConfig.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeProfileHeaderConfig.
     */
    EmployeeProfileHeaderConfig._entityName = 'EmployeeProfileHeaderConfig';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeProfileHeaderConfig.
     */
    EmployeeProfileHeaderConfig._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmployeeProfileHeaderConfig._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmployeeProfileHeaderConfig;
}(core_1.Entity));
exports.EmployeeProfileHeaderConfig = EmployeeProfileHeaderConfig;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (EmployeeProfileHeaderConfig) {
    /**
     * Static representation of the [[employeeProfilePageConfigCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.EMPLOYEE_PROFILE_PAGE_CONFIG_CODE = new core_1.StringField('EmployeeProfilePageConfig_code', EmployeeProfileHeaderConfig, 'Edm.String');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.CODE = new core_1.StringField('code', EmployeeProfileHeaderConfig, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.CREATED_BY = new core_1.StringField('createdBy', EmployeeProfileHeaderConfig, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmployeeProfileHeaderConfig, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[customField1Enabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.CUSTOM_FIELD_1_ENABLED = new core_1.BooleanField('customField1Enabled', EmployeeProfileHeaderConfig, 'Edm.Boolean');
    /**
     * Static representation of the [[customField1Key]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.CUSTOM_FIELD_1_KEY = new core_1.StringField('customField1Key', EmployeeProfileHeaderConfig, 'Edm.String');
    /**
     * Static representation of the [[customField2Enabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.CUSTOM_FIELD_2_ENABLED = new core_1.BooleanField('customField2Enabled', EmployeeProfileHeaderConfig, 'Edm.Boolean');
    /**
     * Static representation of the [[customField2Key]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.CUSTOM_FIELD_2_KEY = new core_1.StringField('customField2Key', EmployeeProfileHeaderConfig, 'Edm.String');
    /**
     * Static representation of the [[customField3Enabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.CUSTOM_FIELD_3_ENABLED = new core_1.BooleanField('customField3Enabled', EmployeeProfileHeaderConfig, 'Edm.Boolean');
    /**
     * Static representation of the [[customField3Key]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.CUSTOM_FIELD_3_KEY = new core_1.StringField('customField3Key', EmployeeProfileHeaderConfig, 'Edm.String');
    /**
     * Static representation of the [[departmentEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.DEPARTMENT_ENABLED = new core_1.BooleanField('departmentEnabled', EmployeeProfileHeaderConfig, 'Edm.Boolean');
    /**
     * Static representation of the [[displayNameEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.DISPLAY_NAME_ENABLED = new core_1.BooleanField('displayNameEnabled', EmployeeProfileHeaderConfig, 'Edm.Boolean');
    /**
     * Static representation of the [[divisionEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.DIVISION_ENABLED = new core_1.BooleanField('divisionEnabled', EmployeeProfileHeaderConfig, 'Edm.Boolean');
    /**
     * Static representation of the [[emailEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.EMAIL_ENABLED = new core_1.BooleanField('emailEnabled', EmployeeProfileHeaderConfig, 'Edm.Boolean');
    /**
     * Static representation of the [[identificationEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.IDENTIFICATION_ENABLED = new core_1.BooleanField('identificationEnabled', EmployeeProfileHeaderConfig, 'Edm.Boolean');
    /**
     * Static representation of the [[jobTitleEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.JOB_TITLE_ENABLED = new core_1.BooleanField('jobTitleEnabled', EmployeeProfileHeaderConfig, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmployeeProfileHeaderConfig, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmployeeProfileHeaderConfig, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[localTimeEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.LOCAL_TIME_ENABLED = new core_1.BooleanField('localTimeEnabled', EmployeeProfileHeaderConfig, 'Edm.Boolean');
    /**
     * Static representation of the [[locationEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.LOCATION_ENABLED = new core_1.BooleanField('locationEnabled', EmployeeProfileHeaderConfig, 'Edm.Boolean');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmployeeProfileHeaderConfig, 'Edm.String');
    /**
     * Static representation of the [[phoneNumber1Enabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.PHONE_NUMBER_1_ENABLED = new core_1.BooleanField('phoneNumber1Enabled', EmployeeProfileHeaderConfig, 'Edm.Boolean');
    /**
     * Static representation of the [[phoneNumber1Key]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.PHONE_NUMBER_1_KEY = new core_1.StringField('phoneNumber1Key', EmployeeProfileHeaderConfig, 'Edm.String');
    /**
     * Static representation of the [[phoneNumber2Enabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.PHONE_NUMBER_2_ENABLED = new core_1.BooleanField('phoneNumber2Enabled', EmployeeProfileHeaderConfig, 'Edm.Boolean');
    /**
     * Static representation of the [[phoneNumber2Key]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.PHONE_NUMBER_2_KEY = new core_1.StringField('phoneNumber2Key', EmployeeProfileHeaderConfig, 'Edm.String');
    /**
     * Static representation of the [[profilePhotoEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.PROFILE_PHOTO_ENABLED = new core_1.BooleanField('profilePhotoEnabled', EmployeeProfileHeaderConfig, 'Edm.Boolean');
    /**
     * Static representation of the [[socialNetwork1Enabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.SOCIAL_NETWORK_1_ENABLED = new core_1.BooleanField('socialNetwork1Enabled', EmployeeProfileHeaderConfig, 'Edm.Boolean');
    /**
     * Static representation of the [[socialNetwork1Key]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.SOCIAL_NETWORK_1_KEY = new core_1.StringField('socialNetwork1Key', EmployeeProfileHeaderConfig, 'Edm.String');
    /**
     * Static representation of the [[socialNetwork2Enabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.SOCIAL_NETWORK_2_ENABLED = new core_1.BooleanField('socialNetwork2Enabled', EmployeeProfileHeaderConfig, 'Edm.Boolean');
    /**
     * Static representation of the [[socialNetwork2Key]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.SOCIAL_NETWORK_2_KEY = new core_1.StringField('socialNetwork2Key', EmployeeProfileHeaderConfig, 'Edm.String');
    /**
     * Static representation of the [[timeZoneEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.TIME_ZONE_ENABLED = new core_1.BooleanField('timeZoneEnabled', EmployeeProfileHeaderConfig, 'Edm.Boolean');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', EmployeeProfileHeaderConfig, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', EmployeeProfileHeaderConfig, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', EmployeeProfileHeaderConfig, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[phoneNumber1KeyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.PHONE_NUMBER_1_KEY_NAV = new core_1.OneToOneLink('phoneNumber1KeyNav', EmployeeProfileHeaderConfig, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[phoneNumber2KeyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.PHONE_NUMBER_2_KEY_NAV = new core_1.OneToOneLink('phoneNumber2KeyNav', EmployeeProfileHeaderConfig, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[socialNetwork1KeyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.SOCIAL_NETWORK_1_KEY_NAV = new core_1.OneToOneLink('socialNetwork1KeyNav', EmployeeProfileHeaderConfig, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[socialNetwork2KeyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileHeaderConfig.SOCIAL_NETWORK_2_KEY_NAV = new core_1.OneToOneLink('socialNetwork2KeyNav', EmployeeProfileHeaderConfig, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the EmployeeProfileHeaderConfig entity.
     */
    EmployeeProfileHeaderConfig._allFields = [
        EmployeeProfileHeaderConfig.EMPLOYEE_PROFILE_PAGE_CONFIG_CODE,
        EmployeeProfileHeaderConfig.CODE,
        EmployeeProfileHeaderConfig.CREATED_BY,
        EmployeeProfileHeaderConfig.CREATED_DATE_TIME,
        EmployeeProfileHeaderConfig.CUSTOM_FIELD_1_ENABLED,
        EmployeeProfileHeaderConfig.CUSTOM_FIELD_1_KEY,
        EmployeeProfileHeaderConfig.CUSTOM_FIELD_2_ENABLED,
        EmployeeProfileHeaderConfig.CUSTOM_FIELD_2_KEY,
        EmployeeProfileHeaderConfig.CUSTOM_FIELD_3_ENABLED,
        EmployeeProfileHeaderConfig.CUSTOM_FIELD_3_KEY,
        EmployeeProfileHeaderConfig.DEPARTMENT_ENABLED,
        EmployeeProfileHeaderConfig.DISPLAY_NAME_ENABLED,
        EmployeeProfileHeaderConfig.DIVISION_ENABLED,
        EmployeeProfileHeaderConfig.EMAIL_ENABLED,
        EmployeeProfileHeaderConfig.IDENTIFICATION_ENABLED,
        EmployeeProfileHeaderConfig.JOB_TITLE_ENABLED,
        EmployeeProfileHeaderConfig.LAST_MODIFIED_BY,
        EmployeeProfileHeaderConfig.LAST_MODIFIED_DATE_TIME,
        EmployeeProfileHeaderConfig.LOCAL_TIME_ENABLED,
        EmployeeProfileHeaderConfig.LOCATION_ENABLED,
        EmployeeProfileHeaderConfig.MDF_SYSTEM_RECORD_STATUS,
        EmployeeProfileHeaderConfig.PHONE_NUMBER_1_ENABLED,
        EmployeeProfileHeaderConfig.PHONE_NUMBER_1_KEY,
        EmployeeProfileHeaderConfig.PHONE_NUMBER_2_ENABLED,
        EmployeeProfileHeaderConfig.PHONE_NUMBER_2_KEY,
        EmployeeProfileHeaderConfig.PROFILE_PHOTO_ENABLED,
        EmployeeProfileHeaderConfig.SOCIAL_NETWORK_1_ENABLED,
        EmployeeProfileHeaderConfig.SOCIAL_NETWORK_1_KEY,
        EmployeeProfileHeaderConfig.SOCIAL_NETWORK_2_ENABLED,
        EmployeeProfileHeaderConfig.SOCIAL_NETWORK_2_KEY,
        EmployeeProfileHeaderConfig.TIME_ZONE_ENABLED,
        EmployeeProfileHeaderConfig.CREATED_BY_NAV,
        EmployeeProfileHeaderConfig.LAST_MODIFIED_BY_NAV,
        EmployeeProfileHeaderConfig.MDF_SYSTEM_RECORD_STATUS_NAV,
        EmployeeProfileHeaderConfig.PHONE_NUMBER_1_KEY_NAV,
        EmployeeProfileHeaderConfig.PHONE_NUMBER_2_KEY_NAV,
        EmployeeProfileHeaderConfig.SOCIAL_NETWORK_1_KEY_NAV,
        EmployeeProfileHeaderConfig.SOCIAL_NETWORK_2_KEY_NAV
    ];
    /**
     * All fields selector.
     */
    EmployeeProfileHeaderConfig.ALL_FIELDS = new core_1.AllFields('*', EmployeeProfileHeaderConfig);
    /**
     * All key fields of the EmployeeProfileHeaderConfig entity.
     */
    EmployeeProfileHeaderConfig._keyFields = [EmployeeProfileHeaderConfig.EMPLOYEE_PROFILE_PAGE_CONFIG_CODE, EmployeeProfileHeaderConfig.CODE];
    /**
     * Mapping of all key field names to the respective static field property EmployeeProfileHeaderConfig.
     */
    EmployeeProfileHeaderConfig._keys = EmployeeProfileHeaderConfig._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeProfileHeaderConfig = exports.EmployeeProfileHeaderConfig || (exports.EmployeeProfileHeaderConfig = {}));
exports.EmployeeProfileHeaderConfig = EmployeeProfileHeaderConfig;
//# sourceMappingURL=EmployeeProfileHeaderConfig.js.map