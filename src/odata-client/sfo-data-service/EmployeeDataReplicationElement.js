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
var EmployeeDataReplicationElementRequestBuilder_1 = require("./EmployeeDataReplicationElementRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeeDataReplicationElement" of service "SFOData".
 */
var EmployeeDataReplicationElement = /** @class */ (function (_super) {
    __extends(EmployeeDataReplicationElement, _super);
    function EmployeeDataReplicationElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeDataReplicationElement`.
     * @returns A builder that constructs instances of entity type `EmployeeDataReplicationElement`.
     */
    EmployeeDataReplicationElement.builder = function () {
        return core_1.Entity.entityBuilder(EmployeeDataReplicationElement);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeDataReplicationElement` entity type.
     * @returns A `EmployeeDataReplicationElement` request builder.
     */
    EmployeeDataReplicationElement.requestBuilder = function () {
        return new EmployeeDataReplicationElementRequestBuilder_1.EmployeeDataReplicationElementRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeDataReplicationElement`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeDataReplicationElement`.
     */
    EmployeeDataReplicationElement.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmployeeDataReplicationElement);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeDataReplicationElement.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeDataReplicationElement.
     */
    EmployeeDataReplicationElement._entityName = 'EmployeeDataReplicationElement';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeDataReplicationElement.
     */
    EmployeeDataReplicationElement._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmployeeDataReplicationElement._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmployeeDataReplicationElement;
}(core_1.Entity));
exports.EmployeeDataReplicationElement = EmployeeDataReplicationElement;
var Country_1 = require("./Country");
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var EmployeeDataReplicationConfirmation_1 = require("./EmployeeDataReplicationConfirmation");
var EmployeeDataReplicationNotification_1 = require("./EmployeeDataReplicationNotification");
var MdfEnumValue_1 = require("./MdfEnumValue");
var PerPerson_1 = require("./PerPerson");
var ReplicationTargetSystem_1 = require("./ReplicationTargetSystem");
var WfRequest_1 = require("./WfRequest");
(function (EmployeeDataReplicationElement) {
    /**
     * Static representation of the [[allowReplicationInCorrectionPhase]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.ALLOW_REPLICATION_IN_CORRECTION_PHASE = new core_1.BooleanField('allowReplicationInCorrectionPhase', EmployeeDataReplicationElement, 'Edm.Boolean');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.COUNTRY = new core_1.StringField('country', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.CREATED_BY = new core_1.StringField('createdBy', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmployeeDataReplicationElement, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.EXTERNAL_CODE = new core_1.StringField('externalCode', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.EXTERNAL_NAME_EN_DEBUG = new core_1.StringField('externalName_en_DEBUG', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.EXTERNAL_NAME_ES_MX = new core_1.StringField('externalName_es_MX', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.EXTERNAL_NAME_FR_CA = new core_1.StringField('externalName_fr_CA', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.EXTERNAL_NAME_IT_IT = new core_1.StringField('externalName_it_IT', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[firstReplicationStartTimeSinceLastSuccess]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.FIRST_REPLICATION_START_TIME_SINCE_LAST_SUCCESS = new core_1.DateField('firstReplicationStartTimeSinceLastSuccess', EmployeeDataReplicationElement, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[isWaitingForConfirmation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.IS_WAITING_FOR_CONFIRMATION = new core_1.BooleanField('isWaitingForConfirmation', EmployeeDataReplicationElement, 'Edm.Boolean');
    /**
     * Static representation of the [[lastConfirmation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.LAST_CONFIRMATION = new core_1.StringField('lastConfirmation', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[lastConfirmationWithSuccess]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.LAST_CONFIRMATION_WITH_SUCCESS = new core_1.StringField('lastConfirmationWithSuccess', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmployeeDataReplicationElement, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastReplicationStartNotification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.LAST_REPLICATION_START_NOTIFICATION = new core_1.StringField('lastReplicationStartNotification', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[lastReplicationStartTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.LAST_REPLICATION_START_TIME = new core_1.StringField('lastReplicationStartTime', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemOptimisticLockUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.MDF_SYSTEM_OPTIMISTIC_LOCK_UUID = new core_1.StringField('mdfSystemOptimisticLockUUID', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[noOfFailedReplicationsWithoutManualInteraction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.NO_OF_FAILED_REPLICATIONS_WITHOUT_MANUAL_INTERACTION = new core_1.BigNumberField('noOfFailedReplicationsWithoutManualInteraction', EmployeeDataReplicationElement, 'Edm.Int64');
    /**
     * Static representation of the [[personId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.PERSON_ID = new core_1.BigNumberField('personId', EmployeeDataReplicationElement, 'Edm.Int64');
    /**
     * Static representation of the [[replicationContentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.REPLICATION_CONTENT_TYPE = new core_1.StringField('replicationContentType', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[replicationProcessingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.REPLICATION_PROCESSING_TIME = new core_1.StringField('replicationProcessingTime', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[replicationTargetSystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.REPLICATION_TARGET_SYSTEM = new core_1.StringField('replicationTargetSystem', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[replicationUpdateStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.REPLICATION_UPDATE_STATUS = new core_1.StringField('replicationUpdateStatus', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[scheduledReplicationTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.SCHEDULED_REPLICATION_TIME = new core_1.StringField('scheduledReplicationTime', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[searchFieldOverallStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.SEARCH_FIELD_OVERALL_STATUS = new core_1.StringField('searchFieldOverallStatus', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[searchFieldPersonId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.SEARCH_FIELD_PERSON_ID = new core_1.BigNumberField('searchFieldPersonId', EmployeeDataReplicationElement, 'Edm.Int64');
    /**
     * Static representation of the [[searchFieldReplicationProcessingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.SEARCH_FIELD_REPLICATION_PROCESSING_TIME = new core_1.StringField('searchFieldReplicationProcessingTime', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the [[usersSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.USERS_SYS_ID = new core_1.StringField('usersSysId', EmployeeDataReplicationElement, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.COUNTRY_NAV = new core_1.Link('countryNav', EmployeeDataReplicationElement, Country_1.Country);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', EmployeeDataReplicationElement, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.EXTERNAL_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('externalNameTranslationTextNav', EmployeeDataReplicationElement, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastConfirmationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.LAST_CONFIRMATION_NAV = new core_1.OneToOneLink('lastConfirmationNav', EmployeeDataReplicationElement, EmployeeDataReplicationConfirmation_1.EmployeeDataReplicationConfirmation);
    /**
     * Static representation of the one-to-one navigation property [[lastConfirmationWithSuccessNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.LAST_CONFIRMATION_WITH_SUCCESS_NAV = new core_1.OneToOneLink('lastConfirmationWithSuccessNav', EmployeeDataReplicationElement, EmployeeDataReplicationConfirmation_1.EmployeeDataReplicationConfirmation);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', EmployeeDataReplicationElement, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastReplicationStartNotificationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.LAST_REPLICATION_START_NOTIFICATION_NAV = new core_1.OneToOneLink('lastReplicationStartNotificationNav', EmployeeDataReplicationElement, EmployeeDataReplicationNotification_1.EmployeeDataReplicationNotification);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', EmployeeDataReplicationElement, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.PERSON_NAV = new core_1.OneToOneLink('personNav', EmployeeDataReplicationElement, PerPerson_1.PerPerson);
    /**
     * Static representation of the one-to-one navigation property [[replicationContentTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.REPLICATION_CONTENT_TYPE_NAV = new core_1.OneToOneLink('replicationContentTypeNav', EmployeeDataReplicationElement, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[replicationTargetSystemNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.REPLICATION_TARGET_SYSTEM_NAV = new core_1.OneToOneLink('replicationTargetSystemNav', EmployeeDataReplicationElement, ReplicationTargetSystem_1.ReplicationTargetSystem);
    /**
     * Static representation of the one-to-one navigation property [[replicationUpdateStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.REPLICATION_UPDATE_STATUS_NAV = new core_1.OneToOneLink('replicationUpdateStatusNav', EmployeeDataReplicationElement, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[searchFieldOverallStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.SEARCH_FIELD_OVERALL_STATUS_NAV = new core_1.OneToOneLink('searchFieldOverallStatusNav', EmployeeDataReplicationElement, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[usersSysIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.USERS_SYS_ID_NAV = new core_1.OneToOneLink('usersSysIdNav', EmployeeDataReplicationElement, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationElement.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', EmployeeDataReplicationElement, WfRequest_1.WfRequest);
    /**
     * All fields of the EmployeeDataReplicationElement entity.
     */
    EmployeeDataReplicationElement._allFields = [
        EmployeeDataReplicationElement.ALLOW_REPLICATION_IN_CORRECTION_PHASE,
        EmployeeDataReplicationElement.COUNTRY,
        EmployeeDataReplicationElement.CREATED_BY,
        EmployeeDataReplicationElement.CREATED_DATE_TIME,
        EmployeeDataReplicationElement.EXTERNAL_CODE,
        EmployeeDataReplicationElement.EXTERNAL_NAME_DE_DE,
        EmployeeDataReplicationElement.EXTERNAL_NAME_DEFAULT_VALUE,
        EmployeeDataReplicationElement.EXTERNAL_NAME_EN_DEBUG,
        EmployeeDataReplicationElement.EXTERNAL_NAME_EN_GB,
        EmployeeDataReplicationElement.EXTERNAL_NAME_EN_US,
        EmployeeDataReplicationElement.EXTERNAL_NAME_ES_ES,
        EmployeeDataReplicationElement.EXTERNAL_NAME_ES_MX,
        EmployeeDataReplicationElement.EXTERNAL_NAME_FR_CA,
        EmployeeDataReplicationElement.EXTERNAL_NAME_FR_FR,
        EmployeeDataReplicationElement.EXTERNAL_NAME_IT_IT,
        EmployeeDataReplicationElement.EXTERNAL_NAME_LOCALIZED,
        EmployeeDataReplicationElement.EXTERNAL_NAME_NL_NL,
        EmployeeDataReplicationElement.EXTERNAL_NAME_PT_BR,
        EmployeeDataReplicationElement.EXTERNAL_NAME_ZH_CN,
        EmployeeDataReplicationElement.FIRST_REPLICATION_START_TIME_SINCE_LAST_SUCCESS,
        EmployeeDataReplicationElement.IS_WAITING_FOR_CONFIRMATION,
        EmployeeDataReplicationElement.LAST_CONFIRMATION,
        EmployeeDataReplicationElement.LAST_CONFIRMATION_WITH_SUCCESS,
        EmployeeDataReplicationElement.LAST_MODIFIED_BY,
        EmployeeDataReplicationElement.LAST_MODIFIED_DATE_TIME,
        EmployeeDataReplicationElement.LAST_REPLICATION_START_NOTIFICATION,
        EmployeeDataReplicationElement.LAST_REPLICATION_START_TIME,
        EmployeeDataReplicationElement.MDF_SYSTEM_OPTIMISTIC_LOCK_UUID,
        EmployeeDataReplicationElement.MDF_SYSTEM_RECORD_STATUS,
        EmployeeDataReplicationElement.NO_OF_FAILED_REPLICATIONS_WITHOUT_MANUAL_INTERACTION,
        EmployeeDataReplicationElement.PERSON_ID,
        EmployeeDataReplicationElement.REPLICATION_CONTENT_TYPE,
        EmployeeDataReplicationElement.REPLICATION_PROCESSING_TIME,
        EmployeeDataReplicationElement.REPLICATION_TARGET_SYSTEM,
        EmployeeDataReplicationElement.REPLICATION_UPDATE_STATUS,
        EmployeeDataReplicationElement.SCHEDULED_REPLICATION_TIME,
        EmployeeDataReplicationElement.SEARCH_FIELD_OVERALL_STATUS,
        EmployeeDataReplicationElement.SEARCH_FIELD_PERSON_ID,
        EmployeeDataReplicationElement.SEARCH_FIELD_REPLICATION_PROCESSING_TIME,
        EmployeeDataReplicationElement.USERS_SYS_ID,
        EmployeeDataReplicationElement.COUNTRY_NAV,
        EmployeeDataReplicationElement.CREATED_BY_NAV,
        EmployeeDataReplicationElement.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
        EmployeeDataReplicationElement.LAST_CONFIRMATION_NAV,
        EmployeeDataReplicationElement.LAST_CONFIRMATION_WITH_SUCCESS_NAV,
        EmployeeDataReplicationElement.LAST_MODIFIED_BY_NAV,
        EmployeeDataReplicationElement.LAST_REPLICATION_START_NOTIFICATION_NAV,
        EmployeeDataReplicationElement.MDF_SYSTEM_RECORD_STATUS_NAV,
        EmployeeDataReplicationElement.PERSON_NAV,
        EmployeeDataReplicationElement.REPLICATION_CONTENT_TYPE_NAV,
        EmployeeDataReplicationElement.REPLICATION_TARGET_SYSTEM_NAV,
        EmployeeDataReplicationElement.REPLICATION_UPDATE_STATUS_NAV,
        EmployeeDataReplicationElement.SEARCH_FIELD_OVERALL_STATUS_NAV,
        EmployeeDataReplicationElement.USERS_SYS_ID_NAV,
        EmployeeDataReplicationElement.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    EmployeeDataReplicationElement.ALL_FIELDS = new core_1.AllFields('*', EmployeeDataReplicationElement);
    /**
     * All key fields of the EmployeeDataReplicationElement entity.
     */
    EmployeeDataReplicationElement._keyFields = [EmployeeDataReplicationElement.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property EmployeeDataReplicationElement.
     */
    EmployeeDataReplicationElement._keys = EmployeeDataReplicationElement._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeDataReplicationElement = exports.EmployeeDataReplicationElement || (exports.EmployeeDataReplicationElement = {}));
exports.EmployeeDataReplicationElement = EmployeeDataReplicationElement;
//# sourceMappingURL=EmployeeDataReplicationElement.js.map