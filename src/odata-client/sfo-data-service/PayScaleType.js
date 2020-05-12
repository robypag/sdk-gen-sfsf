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
var PayScaleTypeRequestBuilder_1 = require("./PayScaleTypeRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PayScaleType" of service "SFOData".
 */
var PayScaleType = /** @class */ (function (_super) {
    __extends(PayScaleType, _super);
    function PayScaleType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PayScaleType`.
     * @returns A builder that constructs instances of entity type `PayScaleType`.
     */
    PayScaleType.builder = function () {
        return core_1.Entity.entityBuilder(PayScaleType);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PayScaleType` entity type.
     * @returns A `PayScaleType` request builder.
     */
    PayScaleType.requestBuilder = function () {
        return new PayScaleTypeRequestBuilder_1.PayScaleTypeRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PayScaleType`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PayScaleType`.
     */
    PayScaleType.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PayScaleType);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PayScaleType.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PayScaleType.
     */
    PayScaleType._entityName = 'PayScaleType';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PayScaleType.
     */
    PayScaleType._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PayScaleType._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PayScaleType;
}(core_1.Entity));
exports.PayScaleType = PayScaleType;
var Country_1 = require("./Country");
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (PayScaleType) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleType.CODE = new core_1.StringField('code', PayScaleType, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleType.COUNTRY = new core_1.StringField('country', PayScaleType, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleType.CREATED_BY = new core_1.StringField('createdBy', PayScaleType, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleType.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PayScaleType, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleType.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', PayScaleType, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleType.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', PayScaleType, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleType.EXTERNAL_NAME_EN_DEBUG = new core_1.StringField('externalName_en_DEBUG', PayScaleType, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleType.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', PayScaleType, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleType.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', PayScaleType, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleType.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', PayScaleType, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleType.EXTERNAL_NAME_ES_MX = new core_1.StringField('externalName_es_MX', PayScaleType, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleType.EXTERNAL_NAME_FR_CA = new core_1.StringField('externalName_fr_CA', PayScaleType, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleType.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', PayScaleType, 'Edm.String');
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleType.EXTERNAL_NAME_IT_IT = new core_1.StringField('externalName_it_IT', PayScaleType, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleType.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', PayScaleType, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleType.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', PayScaleType, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleType.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', PayScaleType, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleType.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', PayScaleType, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleType.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PayScaleType, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleType.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PayScaleType, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleType.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PayScaleType, 'Edm.String');
    /**
     * Static representation of the [[payScaleType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleType.PAY_SCALE_TYPE = new core_1.StringField('payScaleType', PayScaleType, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleType.COUNTRY_NAV = new core_1.Link('countryNav', PayScaleType, Country_1.Country);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleType.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PayScaleType, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleType.EXTERNAL_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('externalNameTranslationTextNav', PayScaleType, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleType.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PayScaleType, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleType.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PayScaleType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleType.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', PayScaleType, WfRequest_1.WfRequest);
    /**
     * All fields of the PayScaleType entity.
     */
    PayScaleType._allFields = [
        PayScaleType.CODE,
        PayScaleType.COUNTRY,
        PayScaleType.CREATED_BY,
        PayScaleType.CREATED_DATE_TIME,
        PayScaleType.EXTERNAL_NAME_DE_DE,
        PayScaleType.EXTERNAL_NAME_DEFAULT_VALUE,
        PayScaleType.EXTERNAL_NAME_EN_DEBUG,
        PayScaleType.EXTERNAL_NAME_EN_GB,
        PayScaleType.EXTERNAL_NAME_EN_US,
        PayScaleType.EXTERNAL_NAME_ES_ES,
        PayScaleType.EXTERNAL_NAME_ES_MX,
        PayScaleType.EXTERNAL_NAME_FR_CA,
        PayScaleType.EXTERNAL_NAME_FR_FR,
        PayScaleType.EXTERNAL_NAME_IT_IT,
        PayScaleType.EXTERNAL_NAME_LOCALIZED,
        PayScaleType.EXTERNAL_NAME_NL_NL,
        PayScaleType.EXTERNAL_NAME_PT_BR,
        PayScaleType.EXTERNAL_NAME_ZH_CN,
        PayScaleType.LAST_MODIFIED_BY,
        PayScaleType.LAST_MODIFIED_DATE_TIME,
        PayScaleType.MDF_SYSTEM_RECORD_STATUS,
        PayScaleType.PAY_SCALE_TYPE,
        PayScaleType.COUNTRY_NAV,
        PayScaleType.CREATED_BY_NAV,
        PayScaleType.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
        PayScaleType.LAST_MODIFIED_BY_NAV,
        PayScaleType.MDF_SYSTEM_RECORD_STATUS_NAV,
        PayScaleType.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    PayScaleType.ALL_FIELDS = new core_1.AllFields('*', PayScaleType);
    /**
     * All key fields of the PayScaleType entity.
     */
    PayScaleType._keyFields = [PayScaleType.CODE];
    /**
     * Mapping of all key field names to the respective static field property PayScaleType.
     */
    PayScaleType._keys = PayScaleType._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PayScaleType = exports.PayScaleType || (exports.PayScaleType = {}));
exports.PayScaleType = PayScaleType;
//# sourceMappingURL=PayScaleType.js.map