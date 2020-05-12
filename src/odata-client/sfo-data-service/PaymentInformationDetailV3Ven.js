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
var PaymentInformationDetailV3VenRequestBuilder_1 = require("./PaymentInformationDetailV3VenRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PaymentInformationDetailV3VEN" of service "SFOData".
 */
var PaymentInformationDetailV3Ven = /** @class */ (function (_super) {
    __extends(PaymentInformationDetailV3Ven, _super);
    function PaymentInformationDetailV3Ven() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PaymentInformationDetailV3Ven`.
     * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Ven`.
     */
    PaymentInformationDetailV3Ven.builder = function () {
        return core_1.Entity.entityBuilder(PaymentInformationDetailV3Ven);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PaymentInformationDetailV3Ven` entity type.
     * @returns A `PaymentInformationDetailV3Ven` request builder.
     */
    PaymentInformationDetailV3Ven.requestBuilder = function () {
        return new PaymentInformationDetailV3VenRequestBuilder_1.PaymentInformationDetailV3VenRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentInformationDetailV3Ven`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Ven`.
     */
    PaymentInformationDetailV3Ven.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PaymentInformationDetailV3Ven);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PaymentInformationDetailV3Ven.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PaymentInformationDetailV3Ven.
     */
    PaymentInformationDetailV3Ven._entityName = 'PaymentInformationDetailV3VEN';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PaymentInformationDetailV3Ven.
     */
    PaymentInformationDetailV3Ven._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PaymentInformationDetailV3Ven._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PaymentInformationDetailV3Ven;
}(core_1.Entity));
exports.PaymentInformationDetailV3Ven = PaymentInformationDetailV3Ven;
var MdfEnumValue_1 = require("./MdfEnumValue");
var User_1 = require("./User");
(function (PaymentInformationDetailV3Ven) {
    /**
     * Static representation of the [[paymentInformationDetailV3ExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Ven.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE = new core_1.BigNumberField('PaymentInformationDetailV3_externalCode', PaymentInformationDetailV3Ven, 'Edm.Int64');
    /**
     * Static representation of the [[paymentInformationV3EffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Ven.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE = new core_1.DateField('PaymentInformationV3_effectiveStartDate', PaymentInformationDetailV3Ven, 'Edm.DateTime');
    /**
     * Static representation of the [[paymentInformationV3Worker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Ven.PAYMENT_INFORMATION_V_3_WORKER = new core_1.StringField('PaymentInformationV3_worker', PaymentInformationDetailV3Ven, 'Edm.String');
    /**
     * Static representation of the [[accountType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Ven.ACCOUNT_TYPE = new core_1.StringField('accountType', PaymentInformationDetailV3Ven, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Ven.CREATED_BY = new core_1.StringField('createdBy', PaymentInformationDetailV3Ven, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Ven.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PaymentInformationDetailV3Ven, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Ven.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', PaymentInformationDetailV3Ven, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Ven.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PaymentInformationDetailV3Ven, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Ven.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PaymentInformationDetailV3Ven, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Ven.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PaymentInformationDetailV3Ven, 'Edm.String');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Ven.PAYMENT_REFERENCE = new core_1.StringField('paymentReference', PaymentInformationDetailV3Ven, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[accountTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Ven.ACCOUNT_TYPE_NAV = new core_1.OneToOneLink('accountTypeNav', PaymentInformationDetailV3Ven, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Ven.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PaymentInformationDetailV3Ven, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Ven.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PaymentInformationDetailV3Ven, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Ven.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PaymentInformationDetailV3Ven, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the PaymentInformationDetailV3Ven entity.
     */
    PaymentInformationDetailV3Ven._allFields = [
        PaymentInformationDetailV3Ven.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE,
        PaymentInformationDetailV3Ven.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE,
        PaymentInformationDetailV3Ven.PAYMENT_INFORMATION_V_3_WORKER,
        PaymentInformationDetailV3Ven.ACCOUNT_TYPE,
        PaymentInformationDetailV3Ven.CREATED_BY,
        PaymentInformationDetailV3Ven.CREATED_DATE_TIME,
        PaymentInformationDetailV3Ven.EXTERNAL_CODE,
        PaymentInformationDetailV3Ven.LAST_MODIFIED_BY,
        PaymentInformationDetailV3Ven.LAST_MODIFIED_DATE_TIME,
        PaymentInformationDetailV3Ven.MDF_SYSTEM_RECORD_STATUS,
        PaymentInformationDetailV3Ven.PAYMENT_REFERENCE,
        PaymentInformationDetailV3Ven.ACCOUNT_TYPE_NAV,
        PaymentInformationDetailV3Ven.CREATED_BY_NAV,
        PaymentInformationDetailV3Ven.LAST_MODIFIED_BY_NAV,
        PaymentInformationDetailV3Ven.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    PaymentInformationDetailV3Ven.ALL_FIELDS = new core_1.AllFields('*', PaymentInformationDetailV3Ven);
    /**
     * All key fields of the PaymentInformationDetailV3Ven entity.
     */
    PaymentInformationDetailV3Ven._keyFields = [PaymentInformationDetailV3Ven.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE, PaymentInformationDetailV3Ven.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE, PaymentInformationDetailV3Ven.PAYMENT_INFORMATION_V_3_WORKER, PaymentInformationDetailV3Ven.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property PaymentInformationDetailV3Ven.
     */
    PaymentInformationDetailV3Ven._keys = PaymentInformationDetailV3Ven._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PaymentInformationDetailV3Ven = exports.PaymentInformationDetailV3Ven || (exports.PaymentInformationDetailV3Ven = {}));
exports.PaymentInformationDetailV3Ven = PaymentInformationDetailV3Ven;
//# sourceMappingURL=PaymentInformationDetailV3Ven.js.map