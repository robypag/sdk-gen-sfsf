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
var PayScaleLevelRequestBuilder_1 = require("./PayScaleLevelRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PayScaleLevel" of service "SFOData".
 */
var PayScaleLevel = /** @class */ (function (_super) {
    __extends(PayScaleLevel, _super);
    function PayScaleLevel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PayScaleLevel`.
     * @returns A builder that constructs instances of entity type `PayScaleLevel`.
     */
    PayScaleLevel.builder = function () {
        return core_1.Entity.entityBuilder(PayScaleLevel);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PayScaleLevel` entity type.
     * @returns A `PayScaleLevel` request builder.
     */
    PayScaleLevel.requestBuilder = function () {
        return new PayScaleLevelRequestBuilder_1.PayScaleLevelRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PayScaleLevel`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PayScaleLevel`.
     */
    PayScaleLevel.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PayScaleLevel);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PayScaleLevel.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PayScaleLevel.
     */
    PayScaleLevel._entityName = 'PayScaleLevel';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PayScaleLevel.
     */
    PayScaleLevel._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PayScaleLevel._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PayScaleLevel;
}(core_1.Entity));
exports.PayScaleLevel = PayScaleLevel;
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
var PayScaleGroup_1 = require("./PayScaleGroup");
var PayScalePayComponent_1 = require("./PayScalePayComponent");
var WfRequest_1 = require("./WfRequest");
(function (PayScaleLevel) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.CODE = new core_1.StringField('code', PayScaleLevel, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.CREATED_BY = new core_1.StringField('createdBy', PayScaleLevel, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PayScaleLevel, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[effectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.EFFECTIVE_END_DATE = new core_1.DateField('effectiveEndDate', PayScaleLevel, 'Edm.DateTime');
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.EFFECTIVE_START_DATE = new core_1.DateField('effectiveStartDate', PayScaleLevel, 'Edm.DateTime');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', PayScaleLevel, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', PayScaleLevel, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.EXTERNAL_NAME_EN_DEBUG = new core_1.StringField('externalName_en_DEBUG', PayScaleLevel, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', PayScaleLevel, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', PayScaleLevel, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', PayScaleLevel, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.EXTERNAL_NAME_ES_MX = new core_1.StringField('externalName_es_MX', PayScaleLevel, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.EXTERNAL_NAME_FR_CA = new core_1.StringField('externalName_fr_CA', PayScaleLevel, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', PayScaleLevel, 'Edm.String');
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.EXTERNAL_NAME_IT_IT = new core_1.StringField('externalName_it_IT', PayScaleLevel, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', PayScaleLevel, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', PayScaleLevel, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', PayScaleLevel, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', PayScaleLevel, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PayScaleLevel, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PayScaleLevel, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PayScaleLevel, 'Edm.String');
    /**
     * Static representation of the [[nextPayScaleLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.NEXT_PAY_SCALE_LEVEL = new core_1.StringField('nextPayScaleLevel', PayScaleLevel, 'Edm.String');
    /**
     * Static representation of the [[payScaleLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.PAY_SCALE_LEVEL = new core_1.StringField('payScaleLevel', PayScaleLevel, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PayScaleLevel, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.EXTERNAL_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('externalNameTranslationTextNav', PayScaleLevel, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PayScaleLevel, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PayScaleLevel, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[nextPayScaleLevelNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.NEXT_PAY_SCALE_LEVEL_NAV = new core_1.OneToOneLink('nextPayScaleLevelNav', PayScaleLevel, PayScaleLevel);
    /**
     * Static representation of the one-to-one navigation property [[payScaleGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.PAY_SCALE_GROUP = new core_1.OneToOneLink('payScaleGroup', PayScaleLevel, PayScaleGroup_1.PayScaleGroup);
    /**
     * Static representation of the one-to-many navigation property [[toPayScalePayComponents]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.TO_PAY_SCALE_PAY_COMPONENTS = new core_1.Link('toPayScalePayComponents', PayScaleLevel, PayScalePayComponent_1.PayScalePayComponent);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleLevel.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', PayScaleLevel, WfRequest_1.WfRequest);
    /**
     * All fields of the PayScaleLevel entity.
     */
    PayScaleLevel._allFields = [
        PayScaleLevel.CODE,
        PayScaleLevel.CREATED_BY,
        PayScaleLevel.CREATED_DATE_TIME,
        PayScaleLevel.EFFECTIVE_END_DATE,
        PayScaleLevel.EFFECTIVE_START_DATE,
        PayScaleLevel.EXTERNAL_NAME_DE_DE,
        PayScaleLevel.EXTERNAL_NAME_DEFAULT_VALUE,
        PayScaleLevel.EXTERNAL_NAME_EN_DEBUG,
        PayScaleLevel.EXTERNAL_NAME_EN_GB,
        PayScaleLevel.EXTERNAL_NAME_EN_US,
        PayScaleLevel.EXTERNAL_NAME_ES_ES,
        PayScaleLevel.EXTERNAL_NAME_ES_MX,
        PayScaleLevel.EXTERNAL_NAME_FR_CA,
        PayScaleLevel.EXTERNAL_NAME_FR_FR,
        PayScaleLevel.EXTERNAL_NAME_IT_IT,
        PayScaleLevel.EXTERNAL_NAME_LOCALIZED,
        PayScaleLevel.EXTERNAL_NAME_NL_NL,
        PayScaleLevel.EXTERNAL_NAME_PT_BR,
        PayScaleLevel.EXTERNAL_NAME_ZH_CN,
        PayScaleLevel.LAST_MODIFIED_BY,
        PayScaleLevel.LAST_MODIFIED_DATE_TIME,
        PayScaleLevel.MDF_SYSTEM_RECORD_STATUS,
        PayScaleLevel.NEXT_PAY_SCALE_LEVEL,
        PayScaleLevel.PAY_SCALE_LEVEL,
        PayScaleLevel.CREATED_BY_NAV,
        PayScaleLevel.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
        PayScaleLevel.LAST_MODIFIED_BY_NAV,
        PayScaleLevel.MDF_SYSTEM_RECORD_STATUS_NAV,
        PayScaleLevel.NEXT_PAY_SCALE_LEVEL_NAV,
        PayScaleLevel.PAY_SCALE_GROUP,
        PayScaleLevel.TO_PAY_SCALE_PAY_COMPONENTS,
        PayScaleLevel.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    PayScaleLevel.ALL_FIELDS = new core_1.AllFields('*', PayScaleLevel);
    /**
     * All key fields of the PayScaleLevel entity.
     */
    PayScaleLevel._keyFields = [PayScaleLevel.CODE, PayScaleLevel.EFFECTIVE_START_DATE];
    /**
     * Mapping of all key field names to the respective static field property PayScaleLevel.
     */
    PayScaleLevel._keys = PayScaleLevel._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PayScaleLevel = exports.PayScaleLevel || (exports.PayScaleLevel = {}));
exports.PayScaleLevel = PayScaleLevel;
//# sourceMappingURL=PayScaleLevel.js.map