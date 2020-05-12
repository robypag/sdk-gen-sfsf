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
var PaymentInformationDetailV3ZweRequestBuilder_1 = require("./PaymentInformationDetailV3ZweRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PaymentInformationDetailV3ZWE" of service "SFOData".
 */
var PaymentInformationDetailV3Zwe = /** @class */ (function (_super) {
    __extends(PaymentInformationDetailV3Zwe, _super);
    function PaymentInformationDetailV3Zwe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PaymentInformationDetailV3Zwe`.
     * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Zwe`.
     */
    PaymentInformationDetailV3Zwe.builder = function () {
        return core_1.Entity.entityBuilder(PaymentInformationDetailV3Zwe);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PaymentInformationDetailV3Zwe` entity type.
     * @returns A `PaymentInformationDetailV3Zwe` request builder.
     */
    PaymentInformationDetailV3Zwe.requestBuilder = function () {
        return new PaymentInformationDetailV3ZweRequestBuilder_1.PaymentInformationDetailV3ZweRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentInformationDetailV3Zwe`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Zwe`.
     */
    PaymentInformationDetailV3Zwe.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PaymentInformationDetailV3Zwe);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PaymentInformationDetailV3Zwe.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PaymentInformationDetailV3Zwe.
     */
    PaymentInformationDetailV3Zwe._entityName = 'PaymentInformationDetailV3ZWE';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PaymentInformationDetailV3Zwe.
     */
    PaymentInformationDetailV3Zwe._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PaymentInformationDetailV3Zwe._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PaymentInformationDetailV3Zwe;
}(core_1.Entity));
exports.PaymentInformationDetailV3Zwe = PaymentInformationDetailV3Zwe;
var MdfEnumValue_1 = require("./MdfEnumValue");
var User_1 = require("./User");
(function (PaymentInformationDetailV3Zwe) {
    /**
     * Static representation of the [[paymentInformationDetailV3ExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Zwe.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE = new core_1.BigNumberField('PaymentInformationDetailV3_externalCode', PaymentInformationDetailV3Zwe, 'Edm.Int64');
    /**
     * Static representation of the [[paymentInformationV3EffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Zwe.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE = new core_1.DateField('PaymentInformationV3_effectiveStartDate', PaymentInformationDetailV3Zwe, 'Edm.DateTime');
    /**
     * Static representation of the [[paymentInformationV3Worker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Zwe.PAYMENT_INFORMATION_V_3_WORKER = new core_1.StringField('PaymentInformationV3_worker', PaymentInformationDetailV3Zwe, 'Edm.String');
    /**
     * Static representation of the [[accountType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Zwe.ACCOUNT_TYPE = new core_1.StringField('accountType', PaymentInformationDetailV3Zwe, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Zwe.CREATED_BY = new core_1.StringField('createdBy', PaymentInformationDetailV3Zwe, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Zwe.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PaymentInformationDetailV3Zwe, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Zwe.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', PaymentInformationDetailV3Zwe, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Zwe.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PaymentInformationDetailV3Zwe, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Zwe.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PaymentInformationDetailV3Zwe, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Zwe.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PaymentInformationDetailV3Zwe, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[accountTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Zwe.ACCOUNT_TYPE_NAV = new core_1.OneToOneLink('accountTypeNav', PaymentInformationDetailV3Zwe, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Zwe.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PaymentInformationDetailV3Zwe, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Zwe.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PaymentInformationDetailV3Zwe, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Zwe.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PaymentInformationDetailV3Zwe, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the PaymentInformationDetailV3Zwe entity.
     */
    PaymentInformationDetailV3Zwe._allFields = [
        PaymentInformationDetailV3Zwe.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE,
        PaymentInformationDetailV3Zwe.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE,
        PaymentInformationDetailV3Zwe.PAYMENT_INFORMATION_V_3_WORKER,
        PaymentInformationDetailV3Zwe.ACCOUNT_TYPE,
        PaymentInformationDetailV3Zwe.CREATED_BY,
        PaymentInformationDetailV3Zwe.CREATED_DATE_TIME,
        PaymentInformationDetailV3Zwe.EXTERNAL_CODE,
        PaymentInformationDetailV3Zwe.LAST_MODIFIED_BY,
        PaymentInformationDetailV3Zwe.LAST_MODIFIED_DATE_TIME,
        PaymentInformationDetailV3Zwe.MDF_SYSTEM_RECORD_STATUS,
        PaymentInformationDetailV3Zwe.ACCOUNT_TYPE_NAV,
        PaymentInformationDetailV3Zwe.CREATED_BY_NAV,
        PaymentInformationDetailV3Zwe.LAST_MODIFIED_BY_NAV,
        PaymentInformationDetailV3Zwe.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    PaymentInformationDetailV3Zwe.ALL_FIELDS = new core_1.AllFields('*', PaymentInformationDetailV3Zwe);
    /**
     * All key fields of the PaymentInformationDetailV3Zwe entity.
     */
    PaymentInformationDetailV3Zwe._keyFields = [PaymentInformationDetailV3Zwe.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE, PaymentInformationDetailV3Zwe.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE, PaymentInformationDetailV3Zwe.PAYMENT_INFORMATION_V_3_WORKER, PaymentInformationDetailV3Zwe.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property PaymentInformationDetailV3Zwe.
     */
    PaymentInformationDetailV3Zwe._keys = PaymentInformationDetailV3Zwe._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PaymentInformationDetailV3Zwe = exports.PaymentInformationDetailV3Zwe || (exports.PaymentInformationDetailV3Zwe = {}));
exports.PaymentInformationDetailV3Zwe = PaymentInformationDetailV3Zwe;
//# sourceMappingURL=PaymentInformationDetailV3Zwe.js.map