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
var PaymentMethodV3RequestBuilder_1 = require("./PaymentMethodV3RequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PaymentMethodV3" of service "SFOData".
 */
var PaymentMethodV3 = /** @class */ (function (_super) {
    __extends(PaymentMethodV3, _super);
    function PaymentMethodV3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PaymentMethodV3`.
     * @returns A builder that constructs instances of entity type `PaymentMethodV3`.
     */
    PaymentMethodV3.builder = function () {
        return core_1.Entity.entityBuilder(PaymentMethodV3);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PaymentMethodV3` entity type.
     * @returns A `PaymentMethodV3` request builder.
     */
    PaymentMethodV3.requestBuilder = function () {
        return new PaymentMethodV3RequestBuilder_1.PaymentMethodV3RequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentMethodV3`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PaymentMethodV3`.
     */
    PaymentMethodV3.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PaymentMethodV3);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PaymentMethodV3.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PaymentMethodV3.
     */
    PaymentMethodV3._entityName = 'PaymentMethodV3';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PaymentMethodV3.
     */
    PaymentMethodV3._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PaymentMethodV3._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PaymentMethodV3;
}(core_1.Entity));
exports.PaymentMethodV3 = PaymentMethodV3;
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
var PaymentMethodAssignmentV3_1 = require("./PaymentMethodAssignmentV3");
var WfRequest_1 = require("./WfRequest");
(function (PaymentMethodV3) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodV3.CREATED_BY = new core_1.StringField('createdBy', PaymentMethodV3, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodV3.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PaymentMethodV3, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodV3.EXTERNAL_CODE = new core_1.StringField('externalCode', PaymentMethodV3, 'Edm.String');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodV3.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', PaymentMethodV3, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodV3.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', PaymentMethodV3, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodV3.EXTERNAL_NAME_EN_DEBUG = new core_1.StringField('externalName_en_DEBUG', PaymentMethodV3, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodV3.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', PaymentMethodV3, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodV3.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', PaymentMethodV3, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodV3.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', PaymentMethodV3, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodV3.EXTERNAL_NAME_ES_MX = new core_1.StringField('externalName_es_MX', PaymentMethodV3, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodV3.EXTERNAL_NAME_FR_CA = new core_1.StringField('externalName_fr_CA', PaymentMethodV3, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodV3.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', PaymentMethodV3, 'Edm.String');
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodV3.EXTERNAL_NAME_IT_IT = new core_1.StringField('externalName_it_IT', PaymentMethodV3, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodV3.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', PaymentMethodV3, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodV3.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', PaymentMethodV3, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodV3.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', PaymentMethodV3, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodV3.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', PaymentMethodV3, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodV3.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PaymentMethodV3, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodV3.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PaymentMethodV3, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodV3.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PaymentMethodV3, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodV3.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PaymentMethodV3, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodV3.EXTERNAL_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('externalNameTranslationTextNav', PaymentMethodV3, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodV3.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PaymentMethodV3, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodV3.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PaymentMethodV3, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[toPaymentMethodAssignmentV3]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodV3.TO_PAYMENT_METHOD_ASSIGNMENT_V_3 = new core_1.Link('toPaymentMethodAssignmentV3', PaymentMethodV3, PaymentMethodAssignmentV3_1.PaymentMethodAssignmentV3);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodV3.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', PaymentMethodV3, WfRequest_1.WfRequest);
    /**
     * All fields of the PaymentMethodV3 entity.
     */
    PaymentMethodV3._allFields = [
        PaymentMethodV3.CREATED_BY,
        PaymentMethodV3.CREATED_DATE_TIME,
        PaymentMethodV3.EXTERNAL_CODE,
        PaymentMethodV3.EXTERNAL_NAME_DE_DE,
        PaymentMethodV3.EXTERNAL_NAME_DEFAULT_VALUE,
        PaymentMethodV3.EXTERNAL_NAME_EN_DEBUG,
        PaymentMethodV3.EXTERNAL_NAME_EN_GB,
        PaymentMethodV3.EXTERNAL_NAME_EN_US,
        PaymentMethodV3.EXTERNAL_NAME_ES_ES,
        PaymentMethodV3.EXTERNAL_NAME_ES_MX,
        PaymentMethodV3.EXTERNAL_NAME_FR_CA,
        PaymentMethodV3.EXTERNAL_NAME_FR_FR,
        PaymentMethodV3.EXTERNAL_NAME_IT_IT,
        PaymentMethodV3.EXTERNAL_NAME_LOCALIZED,
        PaymentMethodV3.EXTERNAL_NAME_NL_NL,
        PaymentMethodV3.EXTERNAL_NAME_PT_BR,
        PaymentMethodV3.EXTERNAL_NAME_ZH_CN,
        PaymentMethodV3.LAST_MODIFIED_BY,
        PaymentMethodV3.LAST_MODIFIED_DATE_TIME,
        PaymentMethodV3.MDF_SYSTEM_RECORD_STATUS,
        PaymentMethodV3.CREATED_BY_NAV,
        PaymentMethodV3.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
        PaymentMethodV3.LAST_MODIFIED_BY_NAV,
        PaymentMethodV3.MDF_SYSTEM_RECORD_STATUS_NAV,
        PaymentMethodV3.TO_PAYMENT_METHOD_ASSIGNMENT_V_3,
        PaymentMethodV3.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    PaymentMethodV3.ALL_FIELDS = new core_1.AllFields('*', PaymentMethodV3);
    /**
     * All key fields of the PaymentMethodV3 entity.
     */
    PaymentMethodV3._keyFields = [PaymentMethodV3.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property PaymentMethodV3.
     */
    PaymentMethodV3._keys = PaymentMethodV3._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PaymentMethodV3 = exports.PaymentMethodV3 || (exports.PaymentMethodV3 = {}));
exports.PaymentMethodV3 = PaymentMethodV3;
//# sourceMappingURL=PaymentMethodV3.js.map