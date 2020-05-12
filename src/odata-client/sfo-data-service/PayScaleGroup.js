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
var PayScaleGroupRequestBuilder_1 = require("./PayScaleGroupRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PayScaleGroup" of service "SFOData".
 */
var PayScaleGroup = /** @class */ (function (_super) {
    __extends(PayScaleGroup, _super);
    function PayScaleGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PayScaleGroup`.
     * @returns A builder that constructs instances of entity type `PayScaleGroup`.
     */
    PayScaleGroup.builder = function () {
        return core_1.Entity.entityBuilder(PayScaleGroup);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PayScaleGroup` entity type.
     * @returns A `PayScaleGroup` request builder.
     */
    PayScaleGroup.requestBuilder = function () {
        return new PayScaleGroupRequestBuilder_1.PayScaleGroupRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PayScaleGroup`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PayScaleGroup`.
     */
    PayScaleGroup.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PayScaleGroup);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PayScaleGroup.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PayScaleGroup.
     */
    PayScaleGroup._entityName = 'PayScaleGroup';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PayScaleGroup.
     */
    PayScaleGroup._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PayScaleGroup._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PayScaleGroup;
}(core_1.Entity));
exports.PayScaleGroup = PayScaleGroup;
var Country_1 = require("./Country");
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
var PayScaleArea_1 = require("./PayScaleArea");
var PayScaleType_1 = require("./PayScaleType");
var WfRequest_1 = require("./WfRequest");
(function (PayScaleGroup) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.CODE = new core_1.StringField('code', PayScaleGroup, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.COUNTRY = new core_1.StringField('country', PayScaleGroup, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.CREATED_BY = new core_1.StringField('createdBy', PayScaleGroup, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PayScaleGroup, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', PayScaleGroup, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', PayScaleGroup, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.EXTERNAL_NAME_EN_DEBUG = new core_1.StringField('externalName_en_DEBUG', PayScaleGroup, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', PayScaleGroup, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', PayScaleGroup, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', PayScaleGroup, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.EXTERNAL_NAME_ES_MX = new core_1.StringField('externalName_es_MX', PayScaleGroup, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.EXTERNAL_NAME_FR_CA = new core_1.StringField('externalName_fr_CA', PayScaleGroup, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', PayScaleGroup, 'Edm.String');
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.EXTERNAL_NAME_IT_IT = new core_1.StringField('externalName_it_IT', PayScaleGroup, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', PayScaleGroup, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', PayScaleGroup, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', PayScaleGroup, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', PayScaleGroup, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PayScaleGroup, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PayScaleGroup, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PayScaleGroup, 'Edm.String');
    /**
     * Static representation of the [[payScaleArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.PAY_SCALE_AREA = new core_1.StringField('payScaleArea', PayScaleGroup, 'Edm.String');
    /**
     * Static representation of the [[payScaleGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.PAY_SCALE_GROUP = new core_1.StringField('payScaleGroup', PayScaleGroup, 'Edm.String');
    /**
     * Static representation of the [[payScaleType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.PAY_SCALE_TYPE = new core_1.StringField('payScaleType', PayScaleGroup, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.COUNTRY_NAV = new core_1.Link('countryNav', PayScaleGroup, Country_1.Country);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PayScaleGroup, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.EXTERNAL_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('externalNameTranslationTextNav', PayScaleGroup, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PayScaleGroup, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PayScaleGroup, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[payScaleAreaNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.PAY_SCALE_AREA_NAV = new core_1.OneToOneLink('payScaleAreaNav', PayScaleGroup, PayScaleArea_1.PayScaleArea);
    /**
     * Static representation of the one-to-one navigation property [[payScaleTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.PAY_SCALE_TYPE_NAV = new core_1.OneToOneLink('payScaleTypeNav', PayScaleGroup, PayScaleType_1.PayScaleType);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScaleGroup.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', PayScaleGroup, WfRequest_1.WfRequest);
    /**
     * All fields of the PayScaleGroup entity.
     */
    PayScaleGroup._allFields = [
        PayScaleGroup.CODE,
        PayScaleGroup.COUNTRY,
        PayScaleGroup.CREATED_BY,
        PayScaleGroup.CREATED_DATE_TIME,
        PayScaleGroup.EXTERNAL_NAME_DE_DE,
        PayScaleGroup.EXTERNAL_NAME_DEFAULT_VALUE,
        PayScaleGroup.EXTERNAL_NAME_EN_DEBUG,
        PayScaleGroup.EXTERNAL_NAME_EN_GB,
        PayScaleGroup.EXTERNAL_NAME_EN_US,
        PayScaleGroup.EXTERNAL_NAME_ES_ES,
        PayScaleGroup.EXTERNAL_NAME_ES_MX,
        PayScaleGroup.EXTERNAL_NAME_FR_CA,
        PayScaleGroup.EXTERNAL_NAME_FR_FR,
        PayScaleGroup.EXTERNAL_NAME_IT_IT,
        PayScaleGroup.EXTERNAL_NAME_LOCALIZED,
        PayScaleGroup.EXTERNAL_NAME_NL_NL,
        PayScaleGroup.EXTERNAL_NAME_PT_BR,
        PayScaleGroup.EXTERNAL_NAME_ZH_CN,
        PayScaleGroup.LAST_MODIFIED_BY,
        PayScaleGroup.LAST_MODIFIED_DATE_TIME,
        PayScaleGroup.MDF_SYSTEM_RECORD_STATUS,
        PayScaleGroup.PAY_SCALE_AREA,
        PayScaleGroup.PAY_SCALE_GROUP,
        PayScaleGroup.PAY_SCALE_TYPE,
        PayScaleGroup.COUNTRY_NAV,
        PayScaleGroup.CREATED_BY_NAV,
        PayScaleGroup.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
        PayScaleGroup.LAST_MODIFIED_BY_NAV,
        PayScaleGroup.MDF_SYSTEM_RECORD_STATUS_NAV,
        PayScaleGroup.PAY_SCALE_AREA_NAV,
        PayScaleGroup.PAY_SCALE_TYPE_NAV,
        PayScaleGroup.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    PayScaleGroup.ALL_FIELDS = new core_1.AllFields('*', PayScaleGroup);
    /**
     * All key fields of the PayScaleGroup entity.
     */
    PayScaleGroup._keyFields = [PayScaleGroup.CODE];
    /**
     * Mapping of all key field names to the respective static field property PayScaleGroup.
     */
    PayScaleGroup._keys = PayScaleGroup._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PayScaleGroup = exports.PayScaleGroup || (exports.PayScaleGroup = {}));
exports.PayScaleGroup = PayScaleGroup;
//# sourceMappingURL=PayScaleGroup.js.map