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
var FeedbackFlagRequestBuilder_1 = require("./FeedbackFlagRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FeedbackFlag" of service "SFOData".
 */
var FeedbackFlag = /** @class */ (function (_super) {
    __extends(FeedbackFlag, _super);
    function FeedbackFlag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FeedbackFlag`.
     * @returns A builder that constructs instances of entity type `FeedbackFlag`.
     */
    FeedbackFlag.builder = function () {
        return core_1.Entity.entityBuilder(FeedbackFlag);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FeedbackFlag` entity type.
     * @returns A `FeedbackFlag` request builder.
     */
    FeedbackFlag.requestBuilder = function () {
        return new FeedbackFlagRequestBuilder_1.FeedbackFlagRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FeedbackFlag`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FeedbackFlag`.
     */
    FeedbackFlag.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FeedbackFlag);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FeedbackFlag.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FeedbackFlag.
     */
    FeedbackFlag._entityName = 'FeedbackFlag';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FeedbackFlag.
     */
    FeedbackFlag._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FeedbackFlag._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FeedbackFlag;
}(core_1.Entity));
exports.FeedbackFlag = FeedbackFlag;
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (FeedbackFlag) {
    /**
     * Static representation of the [[color]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FeedbackFlag.COLOR = new core_1.StringField('color', FeedbackFlag, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FeedbackFlag.CREATED_BY = new core_1.StringField('createdBy', FeedbackFlag, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FeedbackFlag.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FeedbackFlag, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[feedbackFlagId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FeedbackFlag.FEEDBACK_FLAG_ID = new core_1.StringField('feedbackFlagId', FeedbackFlag, 'Edm.String');
    /**
     * Static representation of the [[flagNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FeedbackFlag.FLAG_NAME_DE_DE = new core_1.StringField('flagName_de_DE', FeedbackFlag, 'Edm.String');
    /**
     * Static representation of the [[flagNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FeedbackFlag.FLAG_NAME_DEFAULT_VALUE = new core_1.StringField('flagName_defaultValue', FeedbackFlag, 'Edm.String');
    /**
     * Static representation of the [[flagNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FeedbackFlag.FLAG_NAME_EN_DEBUG = new core_1.StringField('flagName_en_DEBUG', FeedbackFlag, 'Edm.String');
    /**
     * Static representation of the [[flagNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FeedbackFlag.FLAG_NAME_EN_GB = new core_1.StringField('flagName_en_GB', FeedbackFlag, 'Edm.String');
    /**
     * Static representation of the [[flagNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FeedbackFlag.FLAG_NAME_EN_US = new core_1.StringField('flagName_en_US', FeedbackFlag, 'Edm.String');
    /**
     * Static representation of the [[flagNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FeedbackFlag.FLAG_NAME_ES_ES = new core_1.StringField('flagName_es_ES', FeedbackFlag, 'Edm.String');
    /**
     * Static representation of the [[flagNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FeedbackFlag.FLAG_NAME_ES_MX = new core_1.StringField('flagName_es_MX', FeedbackFlag, 'Edm.String');
    /**
     * Static representation of the [[flagNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FeedbackFlag.FLAG_NAME_FR_CA = new core_1.StringField('flagName_fr_CA', FeedbackFlag, 'Edm.String');
    /**
     * Static representation of the [[flagNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FeedbackFlag.FLAG_NAME_FR_FR = new core_1.StringField('flagName_fr_FR', FeedbackFlag, 'Edm.String');
    /**
     * Static representation of the [[flagNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FeedbackFlag.FLAG_NAME_IT_IT = new core_1.StringField('flagName_it_IT', FeedbackFlag, 'Edm.String');
    /**
     * Static representation of the [[flagNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FeedbackFlag.FLAG_NAME_LOCALIZED = new core_1.StringField('flagName_localized', FeedbackFlag, 'Edm.String');
    /**
     * Static representation of the [[flagNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FeedbackFlag.FLAG_NAME_NL_NL = new core_1.StringField('flagName_nl_NL', FeedbackFlag, 'Edm.String');
    /**
     * Static representation of the [[flagNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FeedbackFlag.FLAG_NAME_PT_BR = new core_1.StringField('flagName_pt_BR', FeedbackFlag, 'Edm.String');
    /**
     * Static representation of the [[flagNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FeedbackFlag.FLAG_NAME_ZH_CN = new core_1.StringField('flagName_zh_CN', FeedbackFlag, 'Edm.String');
    /**
     * Static representation of the [[icon]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FeedbackFlag.ICON = new core_1.StringField('icon', FeedbackFlag, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FeedbackFlag.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FeedbackFlag, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FeedbackFlag.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FeedbackFlag, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FeedbackFlag.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', FeedbackFlag, 'Edm.String');
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FeedbackFlag.RECORD_ID = new core_1.StringField('recordId', FeedbackFlag, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FeedbackFlag.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', FeedbackFlag, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[flagNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FeedbackFlag.FLAG_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('flagNameTranslationTextNav', FeedbackFlag, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FeedbackFlag.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', FeedbackFlag, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FeedbackFlag.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', FeedbackFlag, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FeedbackFlag.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', FeedbackFlag, WfRequest_1.WfRequest);
    /**
     * All fields of the FeedbackFlag entity.
     */
    FeedbackFlag._allFields = [
        FeedbackFlag.COLOR,
        FeedbackFlag.CREATED_BY,
        FeedbackFlag.CREATED_DATE_TIME,
        FeedbackFlag.FEEDBACK_FLAG_ID,
        FeedbackFlag.FLAG_NAME_DE_DE,
        FeedbackFlag.FLAG_NAME_DEFAULT_VALUE,
        FeedbackFlag.FLAG_NAME_EN_DEBUG,
        FeedbackFlag.FLAG_NAME_EN_GB,
        FeedbackFlag.FLAG_NAME_EN_US,
        FeedbackFlag.FLAG_NAME_ES_ES,
        FeedbackFlag.FLAG_NAME_ES_MX,
        FeedbackFlag.FLAG_NAME_FR_CA,
        FeedbackFlag.FLAG_NAME_FR_FR,
        FeedbackFlag.FLAG_NAME_IT_IT,
        FeedbackFlag.FLAG_NAME_LOCALIZED,
        FeedbackFlag.FLAG_NAME_NL_NL,
        FeedbackFlag.FLAG_NAME_PT_BR,
        FeedbackFlag.FLAG_NAME_ZH_CN,
        FeedbackFlag.ICON,
        FeedbackFlag.LAST_MODIFIED_BY,
        FeedbackFlag.LAST_MODIFIED_DATE_TIME,
        FeedbackFlag.MDF_SYSTEM_RECORD_STATUS,
        FeedbackFlag.RECORD_ID,
        FeedbackFlag.CREATED_BY_NAV,
        FeedbackFlag.FLAG_NAME_TRANSLATION_TEXT_NAV,
        FeedbackFlag.LAST_MODIFIED_BY_NAV,
        FeedbackFlag.MDF_SYSTEM_RECORD_STATUS_NAV,
        FeedbackFlag.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    FeedbackFlag.ALL_FIELDS = new core_1.AllFields('*', FeedbackFlag);
    /**
     * All key fields of the FeedbackFlag entity.
     */
    FeedbackFlag._keyFields = [FeedbackFlag.FEEDBACK_FLAG_ID];
    /**
     * Mapping of all key field names to the respective static field property FeedbackFlag.
     */
    FeedbackFlag._keys = FeedbackFlag._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FeedbackFlag = exports.FeedbackFlag || (exports.FeedbackFlag = {}));
exports.FeedbackFlag = FeedbackFlag;
//# sourceMappingURL=FeedbackFlag.js.map