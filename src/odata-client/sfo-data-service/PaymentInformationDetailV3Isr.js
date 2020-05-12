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
var PaymentInformationDetailV3IsrRequestBuilder_1 = require("./PaymentInformationDetailV3IsrRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PaymentInformationDetailV3ISR" of service "SFOData".
 */
var PaymentInformationDetailV3Isr = /** @class */ (function (_super) {
    __extends(PaymentInformationDetailV3Isr, _super);
    function PaymentInformationDetailV3Isr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PaymentInformationDetailV3Isr`.
     * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Isr`.
     */
    PaymentInformationDetailV3Isr.builder = function () {
        return core_1.Entity.entityBuilder(PaymentInformationDetailV3Isr);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PaymentInformationDetailV3Isr` entity type.
     * @returns A `PaymentInformationDetailV3Isr` request builder.
     */
    PaymentInformationDetailV3Isr.requestBuilder = function () {
        return new PaymentInformationDetailV3IsrRequestBuilder_1.PaymentInformationDetailV3IsrRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentInformationDetailV3Isr`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Isr`.
     */
    PaymentInformationDetailV3Isr.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PaymentInformationDetailV3Isr);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PaymentInformationDetailV3Isr.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PaymentInformationDetailV3Isr.
     */
    PaymentInformationDetailV3Isr._entityName = 'PaymentInformationDetailV3ISR';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PaymentInformationDetailV3Isr.
     */
    PaymentInformationDetailV3Isr._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PaymentInformationDetailV3Isr._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PaymentInformationDetailV3Isr;
}(core_1.Entity));
exports.PaymentInformationDetailV3Isr = PaymentInformationDetailV3Isr;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (PaymentInformationDetailV3Isr) {
    /**
     * Static representation of the [[paymentInformationDetailV3ExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Isr.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE = new core_1.BigNumberField('PaymentInformationDetailV3_externalCode', PaymentInformationDetailV3Isr, 'Edm.Int64');
    /**
     * Static representation of the [[paymentInformationV3EffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Isr.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE = new core_1.DateField('PaymentInformationV3_effectiveStartDate', PaymentInformationDetailV3Isr, 'Edm.DateTime');
    /**
     * Static representation of the [[paymentInformationV3Worker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Isr.PAYMENT_INFORMATION_V_3_WORKER = new core_1.StringField('PaymentInformationV3_worker', PaymentInformationDetailV3Isr, 'Edm.String');
    /**
     * Static representation of the [[branchName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Isr.BRANCH_NAME = new core_1.StringField('branchName', PaymentInformationDetailV3Isr, 'Edm.String');
    /**
     * Static representation of the [[branchNumberCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Isr.BRANCH_NUMBER_CODE = new core_1.StringField('branchNumberCode', PaymentInformationDetailV3Isr, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Isr.CREATED_BY = new core_1.StringField('createdBy', PaymentInformationDetailV3Isr, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Isr.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PaymentInformationDetailV3Isr, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Isr.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', PaymentInformationDetailV3Isr, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Isr.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PaymentInformationDetailV3Isr, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Isr.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PaymentInformationDetailV3Isr, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Isr.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PaymentInformationDetailV3Isr, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Isr.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PaymentInformationDetailV3Isr, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Isr.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PaymentInformationDetailV3Isr, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Isr.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PaymentInformationDetailV3Isr, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the PaymentInformationDetailV3Isr entity.
     */
    PaymentInformationDetailV3Isr._allFields = [
        PaymentInformationDetailV3Isr.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE,
        PaymentInformationDetailV3Isr.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE,
        PaymentInformationDetailV3Isr.PAYMENT_INFORMATION_V_3_WORKER,
        PaymentInformationDetailV3Isr.BRANCH_NAME,
        PaymentInformationDetailV3Isr.BRANCH_NUMBER_CODE,
        PaymentInformationDetailV3Isr.CREATED_BY,
        PaymentInformationDetailV3Isr.CREATED_DATE_TIME,
        PaymentInformationDetailV3Isr.EXTERNAL_CODE,
        PaymentInformationDetailV3Isr.LAST_MODIFIED_BY,
        PaymentInformationDetailV3Isr.LAST_MODIFIED_DATE_TIME,
        PaymentInformationDetailV3Isr.MDF_SYSTEM_RECORD_STATUS,
        PaymentInformationDetailV3Isr.CREATED_BY_NAV,
        PaymentInformationDetailV3Isr.LAST_MODIFIED_BY_NAV,
        PaymentInformationDetailV3Isr.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    PaymentInformationDetailV3Isr.ALL_FIELDS = new core_1.AllFields('*', PaymentInformationDetailV3Isr);
    /**
     * All key fields of the PaymentInformationDetailV3Isr entity.
     */
    PaymentInformationDetailV3Isr._keyFields = [PaymentInformationDetailV3Isr.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE, PaymentInformationDetailV3Isr.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE, PaymentInformationDetailV3Isr.PAYMENT_INFORMATION_V_3_WORKER, PaymentInformationDetailV3Isr.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property PaymentInformationDetailV3Isr.
     */
    PaymentInformationDetailV3Isr._keys = PaymentInformationDetailV3Isr._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PaymentInformationDetailV3Isr = exports.PaymentInformationDetailV3Isr || (exports.PaymentInformationDetailV3Isr = {}));
exports.PaymentInformationDetailV3Isr = PaymentInformationDetailV3Isr;
//# sourceMappingURL=PaymentInformationDetailV3Isr.js.map