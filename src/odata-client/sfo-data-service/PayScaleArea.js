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
var PayScaleAreaRequestBuilder_1 = require("./PayScaleAreaRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PayScaleArea" of service "SFOData".
 */
var PayScaleArea = /** @class */ (function (_super) {
    __extends(PayScaleArea, _super);
    function PayScaleArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PayScaleArea`.
     * @returns A builder that constructs instances of entity type `PayScaleArea`.
     */
    PayScaleArea.builder = function () {
        return core_1.Entity.entityBuilder(PayScaleArea);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PayScaleArea` entity type.
     * @returns A `PayScaleArea` request builder.
     */
    PayScaleArea.requestBuilder = function () {
        return new PayScaleAreaRequestBuilder_1.PayScaleAreaRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PayScaleArea`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PayScaleArea`.
     */
    PayScaleArea.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PayScaleArea);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PayScaleArea.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PayScaleArea.
     */
    PayScaleArea._entityName = 'PayScaleArea';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PayScaleArea.
     */
    PayScaleArea._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PayScaleArea._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PayScaleArea;
}(core_1.Entity));
exports.PayScaleArea = PayScaleArea;
var Country_1 = require("./Country");
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (PayScaleArea) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleArea.CODE = new core_1.StringField('code', PayScaleArea, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleArea.COUNTRY = new core_1.StringField('country', PayScaleArea, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleArea.CREATED_BY = new core_1.StringField('createdBy', PayScaleArea, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleArea.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PayScaleArea, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleArea.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', PayScaleArea, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleArea.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', PayScaleArea, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleArea.EXTERNAL_NAME_EN_DEBUG = new core_1.StringField('externalName_en_DEBUG', PayScaleArea, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleArea.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', PayScaleArea, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleArea.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', PayScaleArea, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleArea.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', PayScaleArea, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleArea.EXTERNAL_NAME_ES_MX = new core_1.StringField('externalName_es_MX', PayScaleArea, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleArea.EXTERNAL_NAME_FR_CA = new core_1.StringField('externalName_fr_CA', PayScaleArea, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleArea.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', PayScaleArea, 'Edm.String');
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleArea.EXTERNAL_NAME_IT_IT = new core_1.StringField('externalName_it_IT', PayScaleArea, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleArea.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', PayScaleArea, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleArea.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', PayScaleArea, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleArea.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', PayScaleArea, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleArea.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', PayScaleArea, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleArea.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PayScaleArea, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleArea.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PayScaleArea, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleArea.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PayScaleArea, 'Edm.String');
    /**
     * Static representation of the [[payScaleArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleArea.PAY_SCALE_AREA = new core_1.StringField('payScaleArea', PayScaleArea, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleArea.COUNTRY_NAV = new core_1.Link('countryNav', PayScaleArea, Country_1.Country);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleArea.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PayScaleArea, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleArea.EXTERNAL_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('externalNameTranslationTextNav', PayScaleArea, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleArea.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PayScaleArea, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleArea.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PayScaleArea, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleArea.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', PayScaleArea, WfRequest_1.WfRequest);
    /**
     * All fields of the PayScaleArea entity.
     */
    PayScaleArea._allFields = [
        PayScaleArea.CODE,
        PayScaleArea.COUNTRY,
        PayScaleArea.CREATED_BY,
        PayScaleArea.CREATED_DATE_TIME,
        PayScaleArea.EXTERNAL_NAME_DE_DE,
        PayScaleArea.EXTERNAL_NAME_DEFAULT_VALUE,
        PayScaleArea.EXTERNAL_NAME_EN_DEBUG,
        PayScaleArea.EXTERNAL_NAME_EN_GB,
        PayScaleArea.EXTERNAL_NAME_EN_US,
        PayScaleArea.EXTERNAL_NAME_ES_ES,
        PayScaleArea.EXTERNAL_NAME_ES_MX,
        PayScaleArea.EXTERNAL_NAME_FR_CA,
        PayScaleArea.EXTERNAL_NAME_FR_FR,
        PayScaleArea.EXTERNAL_NAME_IT_IT,
        PayScaleArea.EXTERNAL_NAME_LOCALIZED,
        PayScaleArea.EXTERNAL_NAME_NL_NL,
        PayScaleArea.EXTERNAL_NAME_PT_BR,
        PayScaleArea.EXTERNAL_NAME_ZH_CN,
        PayScaleArea.LAST_MODIFIED_BY,
        PayScaleArea.LAST_MODIFIED_DATE_TIME,
        PayScaleArea.MDF_SYSTEM_RECORD_STATUS,
        PayScaleArea.PAY_SCALE_AREA,
        PayScaleArea.COUNTRY_NAV,
        PayScaleArea.CREATED_BY_NAV,
        PayScaleArea.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
        PayScaleArea.LAST_MODIFIED_BY_NAV,
        PayScaleArea.MDF_SYSTEM_RECORD_STATUS_NAV,
        PayScaleArea.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    PayScaleArea.ALL_FIELDS = new core_1.AllFields('*', PayScaleArea);
    /**
     * All key fields of the PayScaleArea entity.
     */
    PayScaleArea._keyFields = [PayScaleArea.CODE];
    /**
     * Mapping of all key field names to the respective static field property PayScaleArea.
     */
    PayScaleArea._keys = PayScaleArea._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PayScaleArea = exports.PayScaleArea || (exports.PayScaleArea = {}));
exports.PayScaleArea = PayScaleArea;
//# sourceMappingURL=PayScaleArea.js.map