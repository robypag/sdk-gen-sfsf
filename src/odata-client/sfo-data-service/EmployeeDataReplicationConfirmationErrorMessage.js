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
var EmployeeDataReplicationConfirmationErrorMessageRequestBuilder_1 = require("./EmployeeDataReplicationConfirmationErrorMessageRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeeDataReplicationConfirmationErrorMessage" of service "SFOData".
 */
var EmployeeDataReplicationConfirmationErrorMessage = /** @class */ (function (_super) {
    __extends(EmployeeDataReplicationConfirmationErrorMessage, _super);
    function EmployeeDataReplicationConfirmationErrorMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeDataReplicationConfirmationErrorMessage`.
     * @returns A builder that constructs instances of entity type `EmployeeDataReplicationConfirmationErrorMessage`.
     */
    EmployeeDataReplicationConfirmationErrorMessage.builder = function () {
        return core_1.Entity.entityBuilder(EmployeeDataReplicationConfirmationErrorMessage);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeDataReplicationConfirmationErrorMessage` entity type.
     * @returns A `EmployeeDataReplicationConfirmationErrorMessage` request builder.
     */
    EmployeeDataReplicationConfirmationErrorMessage.requestBuilder = function () {
        return new EmployeeDataReplicationConfirmationErrorMessageRequestBuilder_1.EmployeeDataReplicationConfirmationErrorMessageRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeDataReplicationConfirmationErrorMessage`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeDataReplicationConfirmationErrorMessage`.
     */
    EmployeeDataReplicationConfirmationErrorMessage.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmployeeDataReplicationConfirmationErrorMessage);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeDataReplicationConfirmationErrorMessage.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeDataReplicationConfirmationErrorMessage.
     */
    EmployeeDataReplicationConfirmationErrorMessage._entityName = 'EmployeeDataReplicationConfirmationErrorMessage';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeDataReplicationConfirmationErrorMessage.
     */
    EmployeeDataReplicationConfirmationErrorMessage._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmployeeDataReplicationConfirmationErrorMessage._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmployeeDataReplicationConfirmationErrorMessage;
}(core_1.Entity));
exports.EmployeeDataReplicationConfirmationErrorMessage = EmployeeDataReplicationConfirmationErrorMessage;
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (EmployeeDataReplicationConfirmationErrorMessage) {
    /**
     * Static representation of the [[employeeDataReplicationConfirmationExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.EMPLOYEE_DATA_REPLICATION_CONFIRMATION_EXTERNAL_CODE = new core_1.StringField('EmployeeDataReplicationConfirmation_externalCode', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.CREATED_BY = new core_1.StringField('createdBy', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[detailedSourceMessageUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.DETAILED_SOURCE_MESSAGE_URL = new core_1.StringField('detailedSourceMessageURL', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_CODE = new core_1.StringField('externalCode', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_EN_DEBUG = new core_1.StringField('externalName_en_DEBUG', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_ES_MX = new core_1.StringField('externalName_es_MX', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_FR_CA = new core_1.StringField('externalName_fr_CA', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_IT_IT = new core_1.StringField('externalName_it_IT', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[replicationMessageNodeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.REPLICATION_MESSAGE_NODE_TYPE = new core_1.StringField('replicationMessageNodeType', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[sourceAttributeDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.SOURCE_ATTRIBUTE_DESCRIPTION = new core_1.StringField('sourceAttributeDescription', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[sourceAttributeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.SOURCE_ATTRIBUTE_ID = new core_1.StringField('sourceAttributeId', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[sourceMessageSeverity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.SOURCE_MESSAGE_SEVERITY = new core_1.StringField('sourceMessageSeverity', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[sourceMessageText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.SOURCE_MESSAGE_TEXT = new core_1.StringField('sourceMessageText', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[sourceMessageTypeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.SOURCE_MESSAGE_TYPE_ID = new core_1.StringField('sourceMessageTypeId', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[sourceMessageVariable1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.SOURCE_MESSAGE_VARIABLE_1 = new core_1.StringField('sourceMessageVariable1', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[sourceMessageVariable2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.SOURCE_MESSAGE_VARIABLE_2 = new core_1.StringField('sourceMessageVariable2', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[sourceMessageVariable3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.SOURCE_MESSAGE_VARIABLE_3 = new core_1.StringField('sourceMessageVariable3', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[sourceMessageVariable4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.SOURCE_MESSAGE_VARIABLE_4 = new core_1.StringField('sourceMessageVariable4', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[sourceObjectTypeDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.SOURCE_OBJECT_TYPE_DESCRIPTION = new core_1.StringField('sourceObjectTypeDescription', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[sourceObjectTypeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.SOURCE_OBJECT_TYPE_ID = new core_1.StringField('sourceObjectTypeId', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[sourcePersonIdentifier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.SOURCE_PERSON_IDENTIFIER = new core_1.StringField('sourcePersonIdentifier', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[sourceValidityPeriodEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.SOURCE_VALIDITY_PERIOD_END_DATE = new core_1.DateField('sourceValidityPeriodEndDate', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.DateTime');
    /**
     * Static representation of the [[sourceValidityPeriodStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.SOURCE_VALIDITY_PERIOD_START_DATE = new core_1.DateField('sourceValidityPeriodStartDate', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.DateTime');
    /**
     * Static representation of the [[technicalInformation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.TECHNICAL_INFORMATION = new core_1.StringField('technicalInformation', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[userSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.USER_SYS_ID = new core_1.StringField('userSysId', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the [[workagreementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.WORKAGREEMENT_ID = new core_1.StringField('workagreementId', EmployeeDataReplicationConfirmationErrorMessage, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', EmployeeDataReplicationConfirmationErrorMessage, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('externalNameTranslationTextNav', EmployeeDataReplicationConfirmationErrorMessage, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', EmployeeDataReplicationConfirmationErrorMessage, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeDataReplicationConfirmationErrorMessage.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', EmployeeDataReplicationConfirmationErrorMessage, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the EmployeeDataReplicationConfirmationErrorMessage entity.
     */
    EmployeeDataReplicationConfirmationErrorMessage._allFields = [
        EmployeeDataReplicationConfirmationErrorMessage.EMPLOYEE_DATA_REPLICATION_CONFIRMATION_EXTERNAL_CODE,
        EmployeeDataReplicationConfirmationErrorMessage.CREATED_BY,
        EmployeeDataReplicationConfirmationErrorMessage.CREATED_DATE_TIME,
        EmployeeDataReplicationConfirmationErrorMessage.DETAILED_SOURCE_MESSAGE_URL,
        EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_CODE,
        EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_DE_DE,
        EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_DEFAULT_VALUE,
        EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_EN_DEBUG,
        EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_EN_GB,
        EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_EN_US,
        EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_ES_ES,
        EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_ES_MX,
        EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_FR_CA,
        EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_FR_FR,
        EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_IT_IT,
        EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_LOCALIZED,
        EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_NL_NL,
        EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_PT_BR,
        EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_ZH_CN,
        EmployeeDataReplicationConfirmationErrorMessage.LAST_MODIFIED_BY,
        EmployeeDataReplicationConfirmationErrorMessage.LAST_MODIFIED_DATE_TIME,
        EmployeeDataReplicationConfirmationErrorMessage.MDF_SYSTEM_RECORD_STATUS,
        EmployeeDataReplicationConfirmationErrorMessage.REPLICATION_MESSAGE_NODE_TYPE,
        EmployeeDataReplicationConfirmationErrorMessage.SOURCE_ATTRIBUTE_DESCRIPTION,
        EmployeeDataReplicationConfirmationErrorMessage.SOURCE_ATTRIBUTE_ID,
        EmployeeDataReplicationConfirmationErrorMessage.SOURCE_MESSAGE_SEVERITY,
        EmployeeDataReplicationConfirmationErrorMessage.SOURCE_MESSAGE_TEXT,
        EmployeeDataReplicationConfirmationErrorMessage.SOURCE_MESSAGE_TYPE_ID,
        EmployeeDataReplicationConfirmationErrorMessage.SOURCE_MESSAGE_VARIABLE_1,
        EmployeeDataReplicationConfirmationErrorMessage.SOURCE_MESSAGE_VARIABLE_2,
        EmployeeDataReplicationConfirmationErrorMessage.SOURCE_MESSAGE_VARIABLE_3,
        EmployeeDataReplicationConfirmationErrorMessage.SOURCE_MESSAGE_VARIABLE_4,
        EmployeeDataReplicationConfirmationErrorMessage.SOURCE_OBJECT_TYPE_DESCRIPTION,
        EmployeeDataReplicationConfirmationErrorMessage.SOURCE_OBJECT_TYPE_ID,
        EmployeeDataReplicationConfirmationErrorMessage.SOURCE_PERSON_IDENTIFIER,
        EmployeeDataReplicationConfirmationErrorMessage.SOURCE_VALIDITY_PERIOD_END_DATE,
        EmployeeDataReplicationConfirmationErrorMessage.SOURCE_VALIDITY_PERIOD_START_DATE,
        EmployeeDataReplicationConfirmationErrorMessage.TECHNICAL_INFORMATION,
        EmployeeDataReplicationConfirmationErrorMessage.USER_SYS_ID,
        EmployeeDataReplicationConfirmationErrorMessage.WORKAGREEMENT_ID,
        EmployeeDataReplicationConfirmationErrorMessage.CREATED_BY_NAV,
        EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
        EmployeeDataReplicationConfirmationErrorMessage.LAST_MODIFIED_BY_NAV,
        EmployeeDataReplicationConfirmationErrorMessage.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    EmployeeDataReplicationConfirmationErrorMessage.ALL_FIELDS = new core_1.AllFields('*', EmployeeDataReplicationConfirmationErrorMessage);
    /**
     * All key fields of the EmployeeDataReplicationConfirmationErrorMessage entity.
     */
    EmployeeDataReplicationConfirmationErrorMessage._keyFields = [EmployeeDataReplicationConfirmationErrorMessage.EMPLOYEE_DATA_REPLICATION_CONFIRMATION_EXTERNAL_CODE, EmployeeDataReplicationConfirmationErrorMessage.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property EmployeeDataReplicationConfirmationErrorMessage.
     */
    EmployeeDataReplicationConfirmationErrorMessage._keys = EmployeeDataReplicationConfirmationErrorMessage._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeDataReplicationConfirmationErrorMessage = exports.EmployeeDataReplicationConfirmationErrorMessage || (exports.EmployeeDataReplicationConfirmationErrorMessage = {}));
exports.EmployeeDataReplicationConfirmationErrorMessage = EmployeeDataReplicationConfirmationErrorMessage;
//# sourceMappingURL=EmployeeDataReplicationConfirmationErrorMessage.js.map