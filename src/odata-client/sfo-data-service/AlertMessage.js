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
var AlertMessageRequestBuilder_1 = require("./AlertMessageRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "AlertMessage" of service "SFOData".
 */
var AlertMessage = /** @class */ (function (_super) {
    __extends(AlertMessage, _super);
    function AlertMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `AlertMessage`.
     * @returns A builder that constructs instances of entity type `AlertMessage`.
     */
    AlertMessage.builder = function () {
        return core_1.Entity.entityBuilder(AlertMessage);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AlertMessage` entity type.
     * @returns A `AlertMessage` request builder.
     */
    AlertMessage.requestBuilder = function () {
        return new AlertMessageRequestBuilder_1.AlertMessageRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AlertMessage`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AlertMessage`.
     */
    AlertMessage.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, AlertMessage);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AlertMessage.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AlertMessage.
     */
    AlertMessage._entityName = 'AlertMessage';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AlertMessage.
     */
    AlertMessage._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    AlertMessage._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return AlertMessage;
}(core_1.Entity));
exports.AlertMessage = AlertMessage;
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (AlertMessage) {
    /**
     * Static representation of the [[alertDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_DESCRIPTION = new core_1.StringField('alertDescription', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[alertDescriptionLocalizedDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_DE_DE = new core_1.StringField('alertDescriptionLocalized_de_DE', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[alertDescriptionLocalizedDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_DEFAULT_VALUE = new core_1.StringField('alertDescriptionLocalized_defaultValue', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[alertDescriptionLocalizedEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_EN_DEBUG = new core_1.StringField('alertDescriptionLocalized_en_DEBUG', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[alertDescriptionLocalizedEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_EN_GB = new core_1.StringField('alertDescriptionLocalized_en_GB', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[alertDescriptionLocalizedEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_EN_US = new core_1.StringField('alertDescriptionLocalized_en_US', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[alertDescriptionLocalizedEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_ES_ES = new core_1.StringField('alertDescriptionLocalized_es_ES', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[alertDescriptionLocalizedEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_ES_MX = new core_1.StringField('alertDescriptionLocalized_es_MX', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[alertDescriptionLocalizedFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_FR_CA = new core_1.StringField('alertDescriptionLocalized_fr_CA', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[alertDescriptionLocalizedFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_FR_FR = new core_1.StringField('alertDescriptionLocalized_fr_FR', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[alertDescriptionLocalizedItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_IT_IT = new core_1.StringField('alertDescriptionLocalized_it_IT', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[alertDescriptionLocalizedLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_LOCALIZED = new core_1.StringField('alertDescriptionLocalized_localized', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[alertDescriptionLocalizedNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_NL_NL = new core_1.StringField('alertDescriptionLocalized_nl_NL', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[alertDescriptionLocalizedPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_PT_BR = new core_1.StringField('alertDescriptionLocalized_pt_BR', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[alertDescriptionLocalizedZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_ZH_CN = new core_1.StringField('alertDescriptionLocalized_zh_CN', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[alertHeader]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_HEADER = new core_1.StringField('alertHeader', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[alertHeaderLocalizedDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_HEADER_LOCALIZED_DE_DE = new core_1.StringField('alertHeaderLocalized_de_DE', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[alertHeaderLocalizedDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_HEADER_LOCALIZED_DEFAULT_VALUE = new core_1.StringField('alertHeaderLocalized_defaultValue', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[alertHeaderLocalizedEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_HEADER_LOCALIZED_EN_DEBUG = new core_1.StringField('alertHeaderLocalized_en_DEBUG', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[alertHeaderLocalizedEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_HEADER_LOCALIZED_EN_GB = new core_1.StringField('alertHeaderLocalized_en_GB', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[alertHeaderLocalizedEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_HEADER_LOCALIZED_EN_US = new core_1.StringField('alertHeaderLocalized_en_US', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[alertHeaderLocalizedEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_HEADER_LOCALIZED_ES_ES = new core_1.StringField('alertHeaderLocalized_es_ES', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[alertHeaderLocalizedEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_HEADER_LOCALIZED_ES_MX = new core_1.StringField('alertHeaderLocalized_es_MX', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[alertHeaderLocalizedFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_HEADER_LOCALIZED_FR_CA = new core_1.StringField('alertHeaderLocalized_fr_CA', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[alertHeaderLocalizedFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_HEADER_LOCALIZED_FR_FR = new core_1.StringField('alertHeaderLocalized_fr_FR', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[alertHeaderLocalizedItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_HEADER_LOCALIZED_IT_IT = new core_1.StringField('alertHeaderLocalized_it_IT', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[alertHeaderLocalizedLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_HEADER_LOCALIZED_LOCALIZED = new core_1.StringField('alertHeaderLocalized_localized', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[alertHeaderLocalizedNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_HEADER_LOCALIZED_NL_NL = new core_1.StringField('alertHeaderLocalized_nl_NL', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[alertHeaderLocalizedPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_HEADER_LOCALIZED_PT_BR = new core_1.StringField('alertHeaderLocalized_pt_BR', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[alertHeaderLocalizedZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_HEADER_LOCALIZED_ZH_CN = new core_1.StringField('alertHeaderLocalized_zh_CN', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.CREATED_BY = new core_1.StringField('createdBy', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', AlertMessage, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[effectiveStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.EFFECTIVE_STATUS = new core_1.StringField('effectiveStatus', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.EXTERNAL_CODE = new core_1.StringField('externalCode', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[externalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.EXTERNAL_NAME = new core_1.StringField('externalName', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', AlertMessage, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', AlertMessage, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', AlertMessage, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[alertDescriptionLocalizedTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_TRANSLATION_TEXT_NAV = new core_1.Link('alertDescriptionLocalizedTranslationTextNav', AlertMessage, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[alertHeaderLocalizedTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.ALERT_HEADER_LOCALIZED_TRANSLATION_TEXT_NAV = new core_1.Link('alertHeaderLocalizedTranslationTextNav', AlertMessage, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', AlertMessage, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.EFFECTIVE_STATUS_NAV = new core_1.OneToOneLink('effectiveStatusNav', AlertMessage, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', AlertMessage, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', AlertMessage, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertMessage.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', AlertMessage, WfRequest_1.WfRequest);
    /**
     * All fields of the AlertMessage entity.
     */
    AlertMessage._allFields = [
        AlertMessage.ALERT_DESCRIPTION,
        AlertMessage.ALERT_DESCRIPTION_LOCALIZED_DE_DE,
        AlertMessage.ALERT_DESCRIPTION_LOCALIZED_DEFAULT_VALUE,
        AlertMessage.ALERT_DESCRIPTION_LOCALIZED_EN_DEBUG,
        AlertMessage.ALERT_DESCRIPTION_LOCALIZED_EN_GB,
        AlertMessage.ALERT_DESCRIPTION_LOCALIZED_EN_US,
        AlertMessage.ALERT_DESCRIPTION_LOCALIZED_ES_ES,
        AlertMessage.ALERT_DESCRIPTION_LOCALIZED_ES_MX,
        AlertMessage.ALERT_DESCRIPTION_LOCALIZED_FR_CA,
        AlertMessage.ALERT_DESCRIPTION_LOCALIZED_FR_FR,
        AlertMessage.ALERT_DESCRIPTION_LOCALIZED_IT_IT,
        AlertMessage.ALERT_DESCRIPTION_LOCALIZED_LOCALIZED,
        AlertMessage.ALERT_DESCRIPTION_LOCALIZED_NL_NL,
        AlertMessage.ALERT_DESCRIPTION_LOCALIZED_PT_BR,
        AlertMessage.ALERT_DESCRIPTION_LOCALIZED_ZH_CN,
        AlertMessage.ALERT_HEADER,
        AlertMessage.ALERT_HEADER_LOCALIZED_DE_DE,
        AlertMessage.ALERT_HEADER_LOCALIZED_DEFAULT_VALUE,
        AlertMessage.ALERT_HEADER_LOCALIZED_EN_DEBUG,
        AlertMessage.ALERT_HEADER_LOCALIZED_EN_GB,
        AlertMessage.ALERT_HEADER_LOCALIZED_EN_US,
        AlertMessage.ALERT_HEADER_LOCALIZED_ES_ES,
        AlertMessage.ALERT_HEADER_LOCALIZED_ES_MX,
        AlertMessage.ALERT_HEADER_LOCALIZED_FR_CA,
        AlertMessage.ALERT_HEADER_LOCALIZED_FR_FR,
        AlertMessage.ALERT_HEADER_LOCALIZED_IT_IT,
        AlertMessage.ALERT_HEADER_LOCALIZED_LOCALIZED,
        AlertMessage.ALERT_HEADER_LOCALIZED_NL_NL,
        AlertMessage.ALERT_HEADER_LOCALIZED_PT_BR,
        AlertMessage.ALERT_HEADER_LOCALIZED_ZH_CN,
        AlertMessage.CREATED_BY,
        AlertMessage.CREATED_DATE_TIME,
        AlertMessage.EFFECTIVE_STATUS,
        AlertMessage.EXTERNAL_CODE,
        AlertMessage.EXTERNAL_NAME,
        AlertMessage.LAST_MODIFIED_BY,
        AlertMessage.LAST_MODIFIED_DATE_TIME,
        AlertMessage.MDF_SYSTEM_RECORD_STATUS,
        AlertMessage.ALERT_DESCRIPTION_LOCALIZED_TRANSLATION_TEXT_NAV,
        AlertMessage.ALERT_HEADER_LOCALIZED_TRANSLATION_TEXT_NAV,
        AlertMessage.CREATED_BY_NAV,
        AlertMessage.EFFECTIVE_STATUS_NAV,
        AlertMessage.LAST_MODIFIED_BY_NAV,
        AlertMessage.MDF_SYSTEM_RECORD_STATUS_NAV,
        AlertMessage.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    AlertMessage.ALL_FIELDS = new core_1.AllFields('*', AlertMessage);
    /**
     * All key fields of the AlertMessage entity.
     */
    AlertMessage._keyFields = [AlertMessage.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property AlertMessage.
     */
    AlertMessage._keys = AlertMessage._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AlertMessage = exports.AlertMessage || (exports.AlertMessage = {}));
exports.AlertMessage = AlertMessage;
//# sourceMappingURL=AlertMessage.js.map