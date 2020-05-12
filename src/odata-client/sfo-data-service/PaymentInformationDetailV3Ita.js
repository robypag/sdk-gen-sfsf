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
var PaymentInformationDetailV3ItaRequestBuilder_1 = require("./PaymentInformationDetailV3ItaRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PaymentInformationDetailV3ITA" of service "SFOData".
 */
var PaymentInformationDetailV3Ita = /** @class */ (function (_super) {
    __extends(PaymentInformationDetailV3Ita, _super);
    function PaymentInformationDetailV3Ita() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PaymentInformationDetailV3Ita`.
     * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Ita`.
     */
    PaymentInformationDetailV3Ita.builder = function () {
        return core_1.Entity.entityBuilder(PaymentInformationDetailV3Ita);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PaymentInformationDetailV3Ita` entity type.
     * @returns A `PaymentInformationDetailV3Ita` request builder.
     */
    PaymentInformationDetailV3Ita.requestBuilder = function () {
        return new PaymentInformationDetailV3ItaRequestBuilder_1.PaymentInformationDetailV3ItaRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentInformationDetailV3Ita`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Ita`.
     */
    PaymentInformationDetailV3Ita.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PaymentInformationDetailV3Ita);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PaymentInformationDetailV3Ita.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PaymentInformationDetailV3Ita.
     */
    PaymentInformationDetailV3Ita._entityName = 'PaymentInformationDetailV3ITA';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PaymentInformationDetailV3Ita.
     */
    PaymentInformationDetailV3Ita._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PaymentInformationDetailV3Ita._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PaymentInformationDetailV3Ita;
}(core_1.Entity));
exports.PaymentInformationDetailV3Ita = PaymentInformationDetailV3Ita;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (PaymentInformationDetailV3Ita) {
    /**
     * Static representation of the [[paymentInformationDetailV3ExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Ita.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE = new core_1.BigNumberField('PaymentInformationDetailV3_externalCode', PaymentInformationDetailV3Ita, 'Edm.Int64');
    /**
     * Static representation of the [[paymentInformationV3EffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Ita.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE = new core_1.DateField('PaymentInformationV3_effectiveStartDate', PaymentInformationDetailV3Ita, 'Edm.DateTime');
    /**
     * Static representation of the [[paymentInformationV3Worker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Ita.PAYMENT_INFORMATION_V_3_WORKER = new core_1.StringField('PaymentInformationV3_worker', PaymentInformationDetailV3Ita, 'Edm.String');
    /**
     * Static representation of the [[checkDigit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Ita.CHECK_DIGIT = new core_1.StringField('checkDigit', PaymentInformationDetailV3Ita, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Ita.CREATED_BY = new core_1.StringField('createdBy', PaymentInformationDetailV3Ita, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Ita.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PaymentInformationDetailV3Ita, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Ita.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', PaymentInformationDetailV3Ita, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Ita.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PaymentInformationDetailV3Ita, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Ita.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PaymentInformationDetailV3Ita, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Ita.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PaymentInformationDetailV3Ita, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Ita.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PaymentInformationDetailV3Ita, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Ita.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PaymentInformationDetailV3Ita, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Ita.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PaymentInformationDetailV3Ita, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the PaymentInformationDetailV3Ita entity.
     */
    PaymentInformationDetailV3Ita._allFields = [
        PaymentInformationDetailV3Ita.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE,
        PaymentInformationDetailV3Ita.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE,
        PaymentInformationDetailV3Ita.PAYMENT_INFORMATION_V_3_WORKER,
        PaymentInformationDetailV3Ita.CHECK_DIGIT,
        PaymentInformationDetailV3Ita.CREATED_BY,
        PaymentInformationDetailV3Ita.CREATED_DATE_TIME,
        PaymentInformationDetailV3Ita.EXTERNAL_CODE,
        PaymentInformationDetailV3Ita.LAST_MODIFIED_BY,
        PaymentInformationDetailV3Ita.LAST_MODIFIED_DATE_TIME,
        PaymentInformationDetailV3Ita.MDF_SYSTEM_RECORD_STATUS,
        PaymentInformationDetailV3Ita.CREATED_BY_NAV,
        PaymentInformationDetailV3Ita.LAST_MODIFIED_BY_NAV,
        PaymentInformationDetailV3Ita.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    PaymentInformationDetailV3Ita.ALL_FIELDS = new core_1.AllFields('*', PaymentInformationDetailV3Ita);
    /**
     * All key fields of the PaymentInformationDetailV3Ita entity.
     */
    PaymentInformationDetailV3Ita._keyFields = [PaymentInformationDetailV3Ita.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE, PaymentInformationDetailV3Ita.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE, PaymentInformationDetailV3Ita.PAYMENT_INFORMATION_V_3_WORKER, PaymentInformationDetailV3Ita.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property PaymentInformationDetailV3Ita.
     */
    PaymentInformationDetailV3Ita._keys = PaymentInformationDetailV3Ita._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PaymentInformationDetailV3Ita = exports.PaymentInformationDetailV3Ita || (exports.PaymentInformationDetailV3Ita = {}));
exports.PaymentInformationDetailV3Ita = PaymentInformationDetailV3Ita;
//# sourceMappingURL=PaymentInformationDetailV3Ita.js.map