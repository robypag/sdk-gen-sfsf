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
var EmployeeDataReplicationConfirmationRequestBuilder_1 = require("./EmployeeDataReplicationConfirmationRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeeDataReplicationConfirmation" of service "SFOData".
 */
var EmployeeDataReplicationConfirmation = /** @class */ (function (_super) {
    __extends(EmployeeDataReplicationConfirmation, _super);
    function EmployeeDataReplicationConfirmation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeDataReplicationConfirmation`.
     * @returns A builder that constructs instances of entity type `EmployeeDataReplicationConfirmation`.
     */
    EmployeeDataReplicationConfirmation.builder = function () {
        return core_1.Entity.entityBuilder(EmployeeDataReplicationConfirmation);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeDataReplicationConfirmation` entity type.
     * @returns A `EmployeeDataReplicationConfirmation` request builder.
     */
    EmployeeDataReplicationConfirmation.requestBuilder = function () {
        return new EmployeeDataReplicationConfirmationRequestBuilder_1.EmployeeDataReplicationConfirmationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeDataReplicationConfirmation`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeDataReplicationConfirmation`.
     */
    EmployeeDataReplicationConfirmation.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmployeeDataReplicationConfirmation);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeDataReplicationConfirmation.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeDataReplicationConfirmation.
     */
    EmployeeDataReplicationConfirmation._entityName = 'EmployeeDataReplicationConfirmation';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeDataReplicationConfirmation.
     */
    EmployeeDataReplicationConfirmation._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmployeeDataReplicationConfirmation._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmployeeDataReplicationConfirmation;
}(core_1.Entity));
exports.EmployeeDataReplicationConfirmation = EmployeeDataReplicationConfirmation;
var Country_1 = require("./Country");
var User_1 = require("./User");
var EmployeeDataReplicationConfirmationErrorMessage_1 = require("./EmployeeDataReplicationConfirmationErrorMessage");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
var ReplicationTargetSystem_1 = require("./ReplicationTargetSystem");
var WfRequest_1 = require("./WfRequest");
(function (EmployeeDataReplicationConfirmation) {
    /**
     * Static representation of the [[additionalTimeInformation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.ADDITIONAL_TIME_INFORMATION = new core_1.StringField('additionalTimeInformation', EmployeeDataReplicationConfirmation, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.COUNTRY = new core_1.StringField('country', EmployeeDataReplicationConfirmation, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.CREATED_BY = new core_1.StringField('createdBy', EmployeeDataReplicationConfirmation, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmployeeDataReplicationConfirmation, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.EXTERNAL_CODE = new core_1.StringField('externalCode', EmployeeDataReplicationConfirmation, 'Edm.String');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', EmployeeDataReplicationConfirmation, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', EmployeeDataReplicationConfirmation, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_EN_DEBUG = new core_1.StringField('externalName_en_DEBUG', EmployeeDataReplicationConfirmation, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', EmployeeDataReplicationConfirmation, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', EmployeeDataReplicationConfirmation, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', EmployeeDataReplicationConfirmation, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_ES_MX = new core_1.StringField('externalName_es_MX', EmployeeDataReplicationConfirmation, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_FR_CA = new core_1.StringField('externalName_fr_CA', EmployeeDataReplicationConfirmation, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', EmployeeDataReplicationConfirmation, 'Edm.String');
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_IT_IT = new core_1.StringField('externalName_it_IT', EmployeeDataReplicationConfirmation, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', EmployeeDataReplicationConfirmation, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', EmployeeDataReplicationConfirmation, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', EmployeeDataReplicationConfirmation, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', EmployeeDataReplicationConfirmation, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmployeeDataReplicationConfirmation, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmployeeDataReplicationConfirmation, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmployeeDataReplicationConfirmation, 'Edm.String');
    /**
     * Static representation of the [[personId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.PERSON_ID = new core_1.BigNumberField('personId', EmployeeDataReplicationConfirmation, 'Edm.Int64');
    /**
     * Static representation of the [[proxyExternalCodeList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.PROXY_EXTERNAL_CODE_LIST = new core_1.StringField('proxyExternalCodeList', EmployeeDataReplicationConfirmation, 'Edm.String');
    /**
     * Static representation of the [[replicationContentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.REPLICATION_CONTENT_TYPE = new core_1.StringField('replicationContentType', EmployeeDataReplicationConfirmation, 'Edm.String');
    /**
     * Static representation of the [[replicationProcessingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.REPLICATION_PROCESSING_TIME = new core_1.StringField('replicationProcessingTime', EmployeeDataReplicationConfirmation, 'Edm.String');
    /**
     * Static representation of the [[replicationStartTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.REPLICATION_START_TIME = new core_1.StringField('replicationStartTime', EmployeeDataReplicationConfirmation, 'Edm.String');
    /**
     * Static representation of the [[replicationTargetSystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.REPLICATION_TARGET_SYSTEM = new core_1.StringField('replicationTargetSystem', EmployeeDataReplicationConfirmation, 'Edm.String');
    /**
     * Static representation of the [[replicationUpdateStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.REPLICATION_UPDATE_STATUS = new core_1.StringField('replicationUpdateStatus', EmployeeDataReplicationConfirmation, 'Edm.String');
    /**
     * Static representation of the [[usersSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.USERS_SYS_ID = new core_1.StringField('usersSysId', EmployeeDataReplicationConfirmation, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.COUNTRY_NAV = new core_1.Link('countryNav', EmployeeDataReplicationConfirmation, Country_1.Country);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', EmployeeDataReplicationConfirmation, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[employeeDataReplicationConfirmationErrorMessages]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.EMPLOYEE_DATA_REPLICATION_CONFIRMATION_ERROR_MESSAGES = new core_1.Link('employeeDataReplicationConfirmationErrorMessages', EmployeeDataReplicationConfirmation, EmployeeDataReplicationConfirmationErrorMessage_1.EmployeeDataReplicationConfirmationErrorMessage);
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('externalNameTranslationTextNav', EmployeeDataReplicationConfirmation, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', EmployeeDataReplicationConfirmation, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', EmployeeDataReplicationConfirmation, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[replicationContentTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.REPLICATION_CONTENT_TYPE_NAV = new core_1.OneToOneLink('replicationContentTypeNav', EmployeeDataReplicationConfirmation, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[replicationTargetSystemNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.REPLICATION_TARGET_SYSTEM_NAV = new core_1.OneToOneLink('replicationTargetSystemNav', EmployeeDataReplicationConfirmation, ReplicationTargetSystem_1.ReplicationTargetSystem);
    /**
     * Static representation of the one-to-one navigation property [[replicationUpdateStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.REPLICATION_UPDATE_STATUS_NAV = new core_1.OneToOneLink('replicationUpdateStatusNav', EmployeeDataReplicationConfirmation, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[usersSysIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.USERS_SYS_ID_NAV = new core_1.OneToOneLink('usersSysIdNav', EmployeeDataReplicationConfirmation, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmation.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', EmployeeDataReplicationConfirmation, WfRequest_1.WfRequest);
    /**
     * All fields of the EmployeeDataReplicationConfirmation entity.
     */
    EmployeeDataReplicationConfirmation._allFields = [
        EmployeeDataReplicationConfirmation.ADDITIONAL_TIME_INFORMATION,
        EmployeeDataReplicationConfirmation.COUNTRY,
        EmployeeDataReplicationConfirmation.CREATED_BY,
        EmployeeDataReplicationConfirmation.CREATED_DATE_TIME,
        EmployeeDataReplicationConfirmation.EXTERNAL_CODE,
        EmployeeDataReplicationConfirmation.EXTERNAL_NAME_DE_DE,
        EmployeeDataReplicationConfirmation.EXTERNAL_NAME_DEFAULT_VALUE,
        EmployeeDataReplicationConfirmation.EXTERNAL_NAME_EN_DEBUG,
        EmployeeDataReplicationConfirmation.EXTERNAL_NAME_EN_GB,
        EmployeeDataReplicationConfirmation.EXTERNAL_NAME_EN_US,
        EmployeeDataReplicationConfirmation.EXTERNAL_NAME_ES_ES,
        EmployeeDataReplicationConfirmation.EXTERNAL_NAME_ES_MX,
        EmployeeDataReplicationConfirmation.EXTERNAL_NAME_FR_CA,
        EmployeeDataReplicationConfirmation.EXTERNAL_NAME_FR_FR,
        EmployeeDataReplicationConfirmation.EXTERNAL_NAME_IT_IT,
        EmployeeDataReplicationConfirmation.EXTERNAL_NAME_LOCALIZED,
        EmployeeDataReplicationConfirmation.EXTERNAL_NAME_NL_NL,
        EmployeeDataReplicationConfirmation.EXTERNAL_NAME_PT_BR,
        EmployeeDataReplicationConfirmation.EXTERNAL_NAME_ZH_CN,
        EmployeeDataReplicationConfirmation.LAST_MODIFIED_BY,
        EmployeeDataReplicationConfirmation.LAST_MODIFIED_DATE_TIME,
        EmployeeDataReplicationConfirmation.MDF_SYSTEM_RECORD_STATUS,
        EmployeeDataReplicationConfirmation.PERSON_ID,
        EmployeeDataReplicationConfirmation.PROXY_EXTERNAL_CODE_LIST,
        EmployeeDataReplicationConfirmation.REPLICATION_CONTENT_TYPE,
        EmployeeDataReplicationConfirmation.REPLICATION_PROCESSING_TIME,
        EmployeeDataReplicationConfirmation.REPLICATION_START_TIME,
        EmployeeDataReplicationConfirmation.REPLICATION_TARGET_SYSTEM,
        EmployeeDataReplicationConfirmation.REPLICATION_UPDATE_STATUS,
        EmployeeDataReplicationConfirmation.USERS_SYS_ID,
        EmployeeDataReplicationConfirmation.COUNTRY_NAV,
        EmployeeDataReplicationConfirmation.CREATED_BY_NAV,
        EmployeeDataReplicationConfirmation.EMPLOYEE_DATA_REPLICATION_CONFIRMATION_ERROR_MESSAGES,
        EmployeeDataReplicationConfirmation.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
        EmployeeDataReplicationConfirmation.LAST_MODIFIED_BY_NAV,
        EmployeeDataReplicationConfirmation.MDF_SYSTEM_RECORD_STATUS_NAV,
        EmployeeDataReplicationConfirmation.REPLICATION_CONTENT_TYPE_NAV,
        EmployeeDataReplicationConfirmation.REPLICATION_TARGET_SYSTEM_NAV,
        EmployeeDataReplicationConfirmation.REPLICATION_UPDATE_STATUS_NAV,
        EmployeeDataReplicationConfirmation.USERS_SYS_ID_NAV,
        EmployeeDataReplicationConfirmation.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    EmployeeDataReplicationConfirmation.ALL_FIELDS = new core_1.AllFields('*', EmployeeDataReplicationConfirmation);
    /**
     * All key fields of the EmployeeDataReplicationConfirmation entity.
     */
    EmployeeDataReplicationConfirmation._keyFields = [EmployeeDataReplicationConfirmation.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property EmployeeDataReplicationConfirmation.
     */
    EmployeeDataReplicationConfirmation._keys = EmployeeDataReplicationConfirmation._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeDataReplicationConfirmation = exports.EmployeeDataReplicationConfirmation || (exports.EmployeeDataReplicationConfirmation = {}));
exports.EmployeeDataReplicationConfirmation = EmployeeDataReplicationConfirmation;
//# sourceMappingURL=EmployeeDataReplicationConfirmation.js.map