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
var EmployeeDataReplicationNotificationRequestBuilder_1 = require("./EmployeeDataReplicationNotificationRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeeDataReplicationNotification" of service "SFOData".
 */
var EmployeeDataReplicationNotification = /** @class */ (function (_super) {
    __extends(EmployeeDataReplicationNotification, _super);
    function EmployeeDataReplicationNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeDataReplicationNotification`.
     * @returns A builder that constructs instances of entity type `EmployeeDataReplicationNotification`.
     */
    EmployeeDataReplicationNotification.builder = function () {
        return core_1.Entity.entityBuilder(EmployeeDataReplicationNotification);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeDataReplicationNotification` entity type.
     * @returns A `EmployeeDataReplicationNotification` request builder.
     */
    EmployeeDataReplicationNotification.requestBuilder = function () {
        return new EmployeeDataReplicationNotificationRequestBuilder_1.EmployeeDataReplicationNotificationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeDataReplicationNotification`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeDataReplicationNotification`.
     */
    EmployeeDataReplicationNotification.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmployeeDataReplicationNotification);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeDataReplicationNotification.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeDataReplicationNotification.
     */
    EmployeeDataReplicationNotification._entityName = 'EmployeeDataReplicationNotification';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeDataReplicationNotification.
     */
    EmployeeDataReplicationNotification._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmployeeDataReplicationNotification._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmployeeDataReplicationNotification;
}(core_1.Entity));
exports.EmployeeDataReplicationNotification = EmployeeDataReplicationNotification;
var Country_1 = require("./Country");
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
var ReplicationTargetSystem_1 = require("./ReplicationTargetSystem");
var WfRequest_1 = require("./WfRequest");
(function (EmployeeDataReplicationNotification) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.COUNTRY = new core_1.StringField('country', EmployeeDataReplicationNotification, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.CREATED_BY = new core_1.StringField('createdBy', EmployeeDataReplicationNotification, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmployeeDataReplicationNotification, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.EXTERNAL_CODE = new core_1.StringField('externalCode', EmployeeDataReplicationNotification, 'Edm.String');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', EmployeeDataReplicationNotification, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', EmployeeDataReplicationNotification, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.EXTERNAL_NAME_EN_DEBUG = new core_1.StringField('externalName_en_DEBUG', EmployeeDataReplicationNotification, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', EmployeeDataReplicationNotification, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', EmployeeDataReplicationNotification, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', EmployeeDataReplicationNotification, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.EXTERNAL_NAME_ES_MX = new core_1.StringField('externalName_es_MX', EmployeeDataReplicationNotification, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.EXTERNAL_NAME_FR_CA = new core_1.StringField('externalName_fr_CA', EmployeeDataReplicationNotification, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', EmployeeDataReplicationNotification, 'Edm.String');
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.EXTERNAL_NAME_IT_IT = new core_1.StringField('externalName_it_IT', EmployeeDataReplicationNotification, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', EmployeeDataReplicationNotification, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', EmployeeDataReplicationNotification, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', EmployeeDataReplicationNotification, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', EmployeeDataReplicationNotification, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmployeeDataReplicationNotification, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmployeeDataReplicationNotification, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmployeeDataReplicationNotification, 'Edm.String');
    /**
     * Static representation of the [[personId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.PERSON_ID = new core_1.BigNumberField('personId', EmployeeDataReplicationNotification, 'Edm.Int64');
    /**
     * Static representation of the [[replicationContentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.REPLICATION_CONTENT_TYPE = new core_1.StringField('replicationContentType', EmployeeDataReplicationNotification, 'Edm.String');
    /**
     * Static representation of the [[replicationEvent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.REPLICATION_EVENT = new core_1.StringField('replicationEvent', EmployeeDataReplicationNotification, 'Edm.String');
    /**
     * Static representation of the [[replicationEventTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.REPLICATION_EVENT_TIME = new core_1.StringField('replicationEventTime', EmployeeDataReplicationNotification, 'Edm.String');
    /**
     * Static representation of the [[replicationTargetSystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.REPLICATION_TARGET_SYSTEM = new core_1.StringField('replicationTargetSystem', EmployeeDataReplicationNotification, 'Edm.String');
    /**
     * Static representation of the [[senderId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.SENDER_ID = new core_1.StringField('senderId', EmployeeDataReplicationNotification, 'Edm.String');
    /**
     * Static representation of the [[usersSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.USERS_SYS_ID = new core_1.StringField('usersSysId', EmployeeDataReplicationNotification, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.COUNTRY_NAV = new core_1.Link('countryNav', EmployeeDataReplicationNotification, Country_1.Country);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', EmployeeDataReplicationNotification, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.EXTERNAL_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('externalNameTranslationTextNav', EmployeeDataReplicationNotification, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', EmployeeDataReplicationNotification, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', EmployeeDataReplicationNotification, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[replicationContentTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.REPLICATION_CONTENT_TYPE_NAV = new core_1.OneToOneLink('replicationContentTypeNav', EmployeeDataReplicationNotification, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[replicationEventNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.REPLICATION_EVENT_NAV = new core_1.OneToOneLink('replicationEventNav', EmployeeDataReplicationNotification, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[replicationTargetSystemNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.REPLICATION_TARGET_SYSTEM_NAV = new core_1.OneToOneLink('replicationTargetSystemNav', EmployeeDataReplicationNotification, ReplicationTargetSystem_1.ReplicationTargetSystem);
    /**
     * Static representation of the one-to-one navigation property [[usersSysIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.USERS_SYS_ID_NAV = new core_1.OneToOneLink('usersSysIdNav', EmployeeDataReplicationNotification, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationNotification.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', EmployeeDataReplicationNotification, WfRequest_1.WfRequest);
    /**
     * All fields of the EmployeeDataReplicationNotification entity.
     */
    EmployeeDataReplicationNotification._allFields = [
        EmployeeDataReplicationNotification.COUNTRY,
        EmployeeDataReplicationNotification.CREATED_BY,
        EmployeeDataReplicationNotification.CREATED_DATE_TIME,
        EmployeeDataReplicationNotification.EXTERNAL_CODE,
        EmployeeDataReplicationNotification.EXTERNAL_NAME_DE_DE,
        EmployeeDataReplicationNotification.EXTERNAL_NAME_DEFAULT_VALUE,
        EmployeeDataReplicationNotification.EXTERNAL_NAME_EN_DEBUG,
        EmployeeDataReplicationNotification.EXTERNAL_NAME_EN_GB,
        EmployeeDataReplicationNotification.EXTERNAL_NAME_EN_US,
        EmployeeDataReplicationNotification.EXTERNAL_NAME_ES_ES,
        EmployeeDataReplicationNotification.EXTERNAL_NAME_ES_MX,
        EmployeeDataReplicationNotification.EXTERNAL_NAME_FR_CA,
        EmployeeDataReplicationNotification.EXTERNAL_NAME_FR_FR,
        EmployeeDataReplicationNotification.EXTERNAL_NAME_IT_IT,
        EmployeeDataReplicationNotification.EXTERNAL_NAME_LOCALIZED,
        EmployeeDataReplicationNotification.EXTERNAL_NAME_NL_NL,
        EmployeeDataReplicationNotification.EXTERNAL_NAME_PT_BR,
        EmployeeDataReplicationNotification.EXTERNAL_NAME_ZH_CN,
        EmployeeDataReplicationNotification.LAST_MODIFIED_BY,
        EmployeeDataReplicationNotification.LAST_MODIFIED_DATE_TIME,
        EmployeeDataReplicationNotification.MDF_SYSTEM_RECORD_STATUS,
        EmployeeDataReplicationNotification.PERSON_ID,
        EmployeeDataReplicationNotification.REPLICATION_CONTENT_TYPE,
        EmployeeDataReplicationNotification.REPLICATION_EVENT,
        EmployeeDataReplicationNotification.REPLICATION_EVENT_TIME,
        EmployeeDataReplicationNotification.REPLICATION_TARGET_SYSTEM,
        EmployeeDataReplicationNotification.SENDER_ID,
        EmployeeDataReplicationNotification.USERS_SYS_ID,
        EmployeeDataReplicationNotification.COUNTRY_NAV,
        EmployeeDataReplicationNotification.CREATED_BY_NAV,
        EmployeeDataReplicationNotification.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
        EmployeeDataReplicationNotification.LAST_MODIFIED_BY_NAV,
        EmployeeDataReplicationNotification.MDF_SYSTEM_RECORD_STATUS_NAV,
        EmployeeDataReplicationNotification.REPLICATION_CONTENT_TYPE_NAV,
        EmployeeDataReplicationNotification.REPLICATION_EVENT_NAV,
        EmployeeDataReplicationNotification.REPLICATION_TARGET_SYSTEM_NAV,
        EmployeeDataReplicationNotification.USERS_SYS_ID_NAV,
        EmployeeDataReplicationNotification.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    EmployeeDataReplicationNotification.ALL_FIELDS = new core_1.AllFields('*', EmployeeDataReplicationNotification);
    /**
     * All key fields of the EmployeeDataReplicationNotification entity.
     */
    EmployeeDataReplicationNotification._keyFields = [EmployeeDataReplicationNotification.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property EmployeeDataReplicationNotification.
     */
    EmployeeDataReplicationNotification._keys = EmployeeDataReplicationNotification._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeDataReplicationNotification = exports.EmployeeDataReplicationNotification || (exports.EmployeeDataReplicationNotification = {}));
exports.EmployeeDataReplicationNotification = EmployeeDataReplicationNotification;
//# sourceMappingURL=EmployeeDataReplicationNotification.js.map