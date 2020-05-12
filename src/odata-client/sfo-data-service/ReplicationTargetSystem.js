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
var ReplicationTargetSystemRequestBuilder_1 = require("./ReplicationTargetSystemRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ReplicationTargetSystem" of service "SFOData".
 */
var ReplicationTargetSystem = /** @class */ (function (_super) {
    __extends(ReplicationTargetSystem, _super);
    function ReplicationTargetSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ReplicationTargetSystem`.
     * @returns A builder that constructs instances of entity type `ReplicationTargetSystem`.
     */
    ReplicationTargetSystem.builder = function () {
        return core_1.Entity.entityBuilder(ReplicationTargetSystem);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ReplicationTargetSystem` entity type.
     * @returns A `ReplicationTargetSystem` request builder.
     */
    ReplicationTargetSystem.requestBuilder = function () {
        return new ReplicationTargetSystemRequestBuilder_1.ReplicationTargetSystemRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ReplicationTargetSystem`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ReplicationTargetSystem`.
     */
    ReplicationTargetSystem.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, ReplicationTargetSystem);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ReplicationTargetSystem.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ReplicationTargetSystem.
     */
    ReplicationTargetSystem._entityName = 'ReplicationTargetSystem';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ReplicationTargetSystem.
     */
    ReplicationTargetSystem._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    ReplicationTargetSystem._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ReplicationTargetSystem;
}(core_1.Entity));
exports.ReplicationTargetSystem = ReplicationTargetSystem;
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
var SapSystemConfiguration_1 = require("./SapSystemConfiguration");
var WfRequest_1 = require("./WfRequest");
(function (ReplicationTargetSystem) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.CREATED_BY = new core_1.StringField('createdBy', ReplicationTargetSystem, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', ReplicationTargetSystem, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.EXTERNAL_CODE = new core_1.StringField('externalCode', ReplicationTargetSystem, 'Edm.String');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', ReplicationTargetSystem, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', ReplicationTargetSystem, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.EXTERNAL_NAME_EN_DEBUG = new core_1.StringField('externalName_en_DEBUG', ReplicationTargetSystem, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', ReplicationTargetSystem, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', ReplicationTargetSystem, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', ReplicationTargetSystem, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.EXTERNAL_NAME_ES_MX = new core_1.StringField('externalName_es_MX', ReplicationTargetSystem, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.EXTERNAL_NAME_FR_CA = new core_1.StringField('externalName_fr_CA', ReplicationTargetSystem, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', ReplicationTargetSystem, 'Edm.String');
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.EXTERNAL_NAME_IT_IT = new core_1.StringField('externalName_it_IT', ReplicationTargetSystem, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', ReplicationTargetSystem, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', ReplicationTargetSystem, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', ReplicationTargetSystem, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', ReplicationTargetSystem, 'Edm.String');
    /**
     * Static representation of the [[isOrganizationalManagementIntegration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.IS_ORGANIZATIONAL_MANAGEMENT_INTEGRATION = new core_1.BooleanField('isOrganizationalManagementIntegration', ReplicationTargetSystem, 'Edm.Boolean');
    /**
     * Static representation of the [[isPayrollIntegration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.IS_PAYROLL_INTEGRATION = new core_1.BooleanField('isPayrollIntegration', ReplicationTargetSystem, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', ReplicationTargetSystem, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', ReplicationTargetSystem, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', ReplicationTargetSystem, 'Edm.String');
    /**
     * Static representation of the [[replicationTimeOffsetInMinutes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.REPLICATION_TIME_OFFSET_IN_MINUTES = new core_1.BigNumberField('replicationTimeOffsetInMinutes', ReplicationTargetSystem, 'Edm.Int64');
    /**
     * Static representation of the [[sapSystemConfiguration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.SAP_SYSTEM_CONFIGURATION = new core_1.StringField('sapSystemConfiguration', ReplicationTargetSystem, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', ReplicationTargetSystem, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.EXTERNAL_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('externalNameTranslationTextNav', ReplicationTargetSystem, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', ReplicationTargetSystem, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', ReplicationTargetSystem, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[sapSystemConfigurationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.SAP_SYSTEM_CONFIGURATION_NAV = new core_1.OneToOneLink('sapSystemConfigurationNav', ReplicationTargetSystem, SapSystemConfiguration_1.SapSystemConfiguration);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReplicationTargetSystem.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', ReplicationTargetSystem, WfRequest_1.WfRequest);
    /**
     * All fields of the ReplicationTargetSystem entity.
     */
    ReplicationTargetSystem._allFields = [
        ReplicationTargetSystem.CREATED_BY,
        ReplicationTargetSystem.CREATED_DATE_TIME,
        ReplicationTargetSystem.EXTERNAL_CODE,
        ReplicationTargetSystem.EXTERNAL_NAME_DE_DE,
        ReplicationTargetSystem.EXTERNAL_NAME_DEFAULT_VALUE,
        ReplicationTargetSystem.EXTERNAL_NAME_EN_DEBUG,
        ReplicationTargetSystem.EXTERNAL_NAME_EN_GB,
        ReplicationTargetSystem.EXTERNAL_NAME_EN_US,
        ReplicationTargetSystem.EXTERNAL_NAME_ES_ES,
        ReplicationTargetSystem.EXTERNAL_NAME_ES_MX,
        ReplicationTargetSystem.EXTERNAL_NAME_FR_CA,
        ReplicationTargetSystem.EXTERNAL_NAME_FR_FR,
        ReplicationTargetSystem.EXTERNAL_NAME_IT_IT,
        ReplicationTargetSystem.EXTERNAL_NAME_LOCALIZED,
        ReplicationTargetSystem.EXTERNAL_NAME_NL_NL,
        ReplicationTargetSystem.EXTERNAL_NAME_PT_BR,
        ReplicationTargetSystem.EXTERNAL_NAME_ZH_CN,
        ReplicationTargetSystem.IS_ORGANIZATIONAL_MANAGEMENT_INTEGRATION,
        ReplicationTargetSystem.IS_PAYROLL_INTEGRATION,
        ReplicationTargetSystem.LAST_MODIFIED_BY,
        ReplicationTargetSystem.LAST_MODIFIED_DATE_TIME,
        ReplicationTargetSystem.MDF_SYSTEM_RECORD_STATUS,
        ReplicationTargetSystem.REPLICATION_TIME_OFFSET_IN_MINUTES,
        ReplicationTargetSystem.SAP_SYSTEM_CONFIGURATION,
        ReplicationTargetSystem.CREATED_BY_NAV,
        ReplicationTargetSystem.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
        ReplicationTargetSystem.LAST_MODIFIED_BY_NAV,
        ReplicationTargetSystem.MDF_SYSTEM_RECORD_STATUS_NAV,
        ReplicationTargetSystem.SAP_SYSTEM_CONFIGURATION_NAV,
        ReplicationTargetSystem.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    ReplicationTargetSystem.ALL_FIELDS = new core_1.AllFields('*', ReplicationTargetSystem);
    /**
     * All key fields of the ReplicationTargetSystem entity.
     */
    ReplicationTargetSystem._keyFields = [ReplicationTargetSystem.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property ReplicationTargetSystem.
     */
    ReplicationTargetSystem._keys = ReplicationTargetSystem._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ReplicationTargetSystem = exports.ReplicationTargetSystem || (exports.ReplicationTargetSystem = {}));
exports.ReplicationTargetSystem = ReplicationTargetSystem;
//# sourceMappingURL=ReplicationTargetSystem.js.map