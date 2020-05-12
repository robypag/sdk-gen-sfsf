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
var EmployeeProfileFieldConfigRequestBuilder_1 = require("./EmployeeProfileFieldConfigRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeeProfileFieldConfig" of service "SFOData".
 */
var EmployeeProfileFieldConfig = /** @class */ (function (_super) {
    __extends(EmployeeProfileFieldConfig, _super);
    function EmployeeProfileFieldConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeProfileFieldConfig`.
     * @returns A builder that constructs instances of entity type `EmployeeProfileFieldConfig`.
     */
    EmployeeProfileFieldConfig.builder = function () {
        return core_1.Entity.entityBuilder(EmployeeProfileFieldConfig);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeProfileFieldConfig` entity type.
     * @returns A `EmployeeProfileFieldConfig` request builder.
     */
    EmployeeProfileFieldConfig.requestBuilder = function () {
        return new EmployeeProfileFieldConfigRequestBuilder_1.EmployeeProfileFieldConfigRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeProfileFieldConfig`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeProfileFieldConfig`.
     */
    EmployeeProfileFieldConfig.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmployeeProfileFieldConfig);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeProfileFieldConfig.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeProfileFieldConfig.
     */
    EmployeeProfileFieldConfig._entityName = 'EmployeeProfileFieldConfig';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeProfileFieldConfig.
     */
    EmployeeProfileFieldConfig._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmployeeProfileFieldConfig._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmployeeProfileFieldConfig;
}(core_1.Entity));
exports.EmployeeProfileFieldConfig = EmployeeProfileFieldConfig;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (EmployeeProfileFieldConfig) {
    /**
     * Static representation of the [[employeeProfileBlockContentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileFieldConfig.EMPLOYEE_PROFILE_BLOCK_CONTENT_CODE = new core_1.StringField('EmployeeProfileBlockContent_code', EmployeeProfileFieldConfig, 'Edm.String');
    /**
     * Static representation of the [[employeeProfilePageConfigCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileFieldConfig.EMPLOYEE_PROFILE_PAGE_CONFIG_CODE = new core_1.StringField('EmployeeProfilePageConfig_code', EmployeeProfileFieldConfig, 'Edm.String');
    /**
     * Static representation of the [[employeeProfileSectionConfigCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileFieldConfig.EMPLOYEE_PROFILE_SECTION_CONFIG_CODE = new core_1.StringField('EmployeeProfileSectionConfig_code', EmployeeProfileFieldConfig, 'Edm.String');
    /**
     * Static representation of the [[employeeProfileSubSectionConfigCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileFieldConfig.EMPLOYEE_PROFILE_SUB_SECTION_CONFIG_CODE = new core_1.StringField('EmployeeProfileSubSectionConfig_code', EmployeeProfileFieldConfig, 'Edm.String');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileFieldConfig.CODE = new core_1.StringField('code', EmployeeProfileFieldConfig, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileFieldConfig.CREATED_BY = new core_1.StringField('createdBy', EmployeeProfileFieldConfig, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileFieldConfig.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmployeeProfileFieldConfig, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[fieldId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileFieldConfig.FIELD_ID = new core_1.StringField('fieldId', EmployeeProfileFieldConfig, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileFieldConfig.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmployeeProfileFieldConfig, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileFieldConfig.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmployeeProfileFieldConfig, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileFieldConfig.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmployeeProfileFieldConfig, 'Edm.String');
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileFieldConfig.ORDER = new core_1.BigNumberField('order', EmployeeProfileFieldConfig, 'Edm.Int64');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileFieldConfig.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', EmployeeProfileFieldConfig, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileFieldConfig.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', EmployeeProfileFieldConfig, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfileFieldConfig.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', EmployeeProfileFieldConfig, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the EmployeeProfileFieldConfig entity.
     */
    EmployeeProfileFieldConfig._allFields = [
        EmployeeProfileFieldConfig.EMPLOYEE_PROFILE_BLOCK_CONTENT_CODE,
        EmployeeProfileFieldConfig.EMPLOYEE_PROFILE_PAGE_CONFIG_CODE,
        EmployeeProfileFieldConfig.EMPLOYEE_PROFILE_SECTION_CONFIG_CODE,
        EmployeeProfileFieldConfig.EMPLOYEE_PROFILE_SUB_SECTION_CONFIG_CODE,
        EmployeeProfileFieldConfig.CODE,
        EmployeeProfileFieldConfig.CREATED_BY,
        EmployeeProfileFieldConfig.CREATED_DATE_TIME,
        EmployeeProfileFieldConfig.FIELD_ID,
        EmployeeProfileFieldConfig.LAST_MODIFIED_BY,
        EmployeeProfileFieldConfig.LAST_MODIFIED_DATE_TIME,
        EmployeeProfileFieldConfig.MDF_SYSTEM_RECORD_STATUS,
        EmployeeProfileFieldConfig.ORDER,
        EmployeeProfileFieldConfig.CREATED_BY_NAV,
        EmployeeProfileFieldConfig.LAST_MODIFIED_BY_NAV,
        EmployeeProfileFieldConfig.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    EmployeeProfileFieldConfig.ALL_FIELDS = new core_1.AllFields('*', EmployeeProfileFieldConfig);
    /**
     * All key fields of the EmployeeProfileFieldConfig entity.
     */
    EmployeeProfileFieldConfig._keyFields = [EmployeeProfileFieldConfig.EMPLOYEE_PROFILE_BLOCK_CONTENT_CODE, EmployeeProfileFieldConfig.EMPLOYEE_PROFILE_PAGE_CONFIG_CODE, EmployeeProfileFieldConfig.EMPLOYEE_PROFILE_SECTION_CONFIG_CODE, EmployeeProfileFieldConfig.EMPLOYEE_PROFILE_SUB_SECTION_CONFIG_CODE, EmployeeProfileFieldConfig.CODE];
    /**
     * Mapping of all key field names to the respective static field property EmployeeProfileFieldConfig.
     */
    EmployeeProfileFieldConfig._keys = EmployeeProfileFieldConfig._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeProfileFieldConfig = exports.EmployeeProfileFieldConfig || (exports.EmployeeProfileFieldConfig = {}));
exports.EmployeeProfileFieldConfig = EmployeeProfileFieldConfig;
//# sourceMappingURL=EmployeeProfileFieldConfig.js.map