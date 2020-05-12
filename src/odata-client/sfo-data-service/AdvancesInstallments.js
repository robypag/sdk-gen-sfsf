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
var AdvancesInstallmentsRequestBuilder_1 = require("./AdvancesInstallmentsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "AdvancesInstallments" of service "SFOData".
 */
var AdvancesInstallments = /** @class */ (function (_super) {
    __extends(AdvancesInstallments, _super);
    function AdvancesInstallments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `AdvancesInstallments`.
     * @returns A builder that constructs instances of entity type `AdvancesInstallments`.
     */
    AdvancesInstallments.builder = function () {
        return core_1.Entity.entityBuilder(AdvancesInstallments);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AdvancesInstallments` entity type.
     * @returns A `AdvancesInstallments` request builder.
     */
    AdvancesInstallments.requestBuilder = function () {
        return new AdvancesInstallmentsRequestBuilder_1.AdvancesInstallmentsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AdvancesInstallments`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AdvancesInstallments`.
     */
    AdvancesInstallments.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, AdvancesInstallments);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AdvancesInstallments.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AdvancesInstallments.
     */
    AdvancesInstallments._entityName = 'AdvancesInstallments';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AdvancesInstallments.
     */
    AdvancesInstallments._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    AdvancesInstallments._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return AdvancesInstallments;
}(core_1.Entity));
exports.AdvancesInstallments = AdvancesInstallments;
var User_1 = require("./User");
var Currency_1 = require("./Currency");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (AdvancesInstallments) {
    /**
     * Static representation of the [[advanceExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesInstallments.ADVANCE_EXTERNAL_CODE = new core_1.StringField('Advance_externalCode', AdvancesInstallments, 'Edm.String');
    /**
     * Static representation of the [[nonRecurringPaymentExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesInstallments.NON_RECURRING_PAYMENT_EXTERNAL_CODE = new core_1.StringField('NonRecurringPayment_externalCode', AdvancesInstallments, 'Edm.String');
    /**
     * Static representation of the [[amortization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesInstallments.AMORTIZATION = new core_1.BigNumberField('amortization', AdvancesInstallments, 'Edm.Decimal');
    /**
     * Static representation of the [[amortizationTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesInstallments.AMORTIZATION_TOTAL = new core_1.BigNumberField('amortizationTotal', AdvancesInstallments, 'Edm.Decimal');
    /**
     * Static representation of the [[balanceRemaining]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesInstallments.BALANCE_REMAINING = new core_1.BigNumberField('balanceRemaining', AdvancesInstallments, 'Edm.Decimal');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesInstallments.CREATED_BY = new core_1.StringField('createdBy', AdvancesInstallments, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesInstallments.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', AdvancesInstallments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesInstallments.CURRENCY = new core_1.StringField('currency', AdvancesInstallments, 'Edm.String');
    /**
     * Static representation of the [[currencyGo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesInstallments.CURRENCY_GO = new core_1.StringField('currencyGO', AdvancesInstallments, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesInstallments.EXTERNAL_CODE = new core_1.StringField('externalCode', AdvancesInstallments, 'Edm.String');
    /**
     * Static representation of the [[installmentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesInstallments.INSTALLMENT_AMOUNT = new core_1.BigNumberField('installmentAmount', AdvancesInstallments, 'Edm.Decimal');
    /**
     * Static representation of the [[installmentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesInstallments.INSTALLMENT_STATUS = new core_1.StringField('installmentStatus', AdvancesInstallments, 'Edm.String');
    /**
     * Static representation of the [[interestAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesInstallments.INTEREST_AMOUNT = new core_1.BigNumberField('interestAmount', AdvancesInstallments, 'Edm.Decimal');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesInstallments.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', AdvancesInstallments, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesInstallments.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', AdvancesInstallments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesInstallments.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', AdvancesInstallments, 'Edm.String');
    /**
     * Static representation of the [[paymentDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesInstallments.PAYMENT_DATE = new core_1.DateField('paymentDate', AdvancesInstallments, 'Edm.DateTime');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesInstallments.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', AdvancesInstallments, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[currencyGoNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesInstallments.CURRENCY_GO_NAV = new core_1.Link('currencyGONav', AdvancesInstallments, Currency_1.Currency);
    /**
     * Static representation of the one-to-one navigation property [[installmentStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesInstallments.INSTALLMENT_STATUS_NAV = new core_1.OneToOneLink('installmentStatusNav', AdvancesInstallments, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesInstallments.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', AdvancesInstallments, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesInstallments.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', AdvancesInstallments, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the AdvancesInstallments entity.
     */
    AdvancesInstallments._allFields = [
        AdvancesInstallments.ADVANCE_EXTERNAL_CODE,
        AdvancesInstallments.NON_RECURRING_PAYMENT_EXTERNAL_CODE,
        AdvancesInstallments.AMORTIZATION,
        AdvancesInstallments.AMORTIZATION_TOTAL,
        AdvancesInstallments.BALANCE_REMAINING,
        AdvancesInstallments.CREATED_BY,
        AdvancesInstallments.CREATED_DATE_TIME,
        AdvancesInstallments.CURRENCY,
        AdvancesInstallments.CURRENCY_GO,
        AdvancesInstallments.EXTERNAL_CODE,
        AdvancesInstallments.INSTALLMENT_AMOUNT,
        AdvancesInstallments.INSTALLMENT_STATUS,
        AdvancesInstallments.INTEREST_AMOUNT,
        AdvancesInstallments.LAST_MODIFIED_BY,
        AdvancesInstallments.LAST_MODIFIED_DATE_TIME,
        AdvancesInstallments.MDF_SYSTEM_RECORD_STATUS,
        AdvancesInstallments.PAYMENT_DATE,
        AdvancesInstallments.CREATED_BY_NAV,
        AdvancesInstallments.CURRENCY_GO_NAV,
        AdvancesInstallments.INSTALLMENT_STATUS_NAV,
        AdvancesInstallments.LAST_MODIFIED_BY_NAV,
        AdvancesInstallments.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    AdvancesInstallments.ALL_FIELDS = new core_1.AllFields('*', AdvancesInstallments);
    /**
     * All key fields of the AdvancesInstallments entity.
     */
    AdvancesInstallments._keyFields = [AdvancesInstallments.ADVANCE_EXTERNAL_CODE, AdvancesInstallments.NON_RECURRING_PAYMENT_EXTERNAL_CODE, AdvancesInstallments.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property AdvancesInstallments.
     */
    AdvancesInstallments._keys = AdvancesInstallments._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AdvancesInstallments = exports.AdvancesInstallments || (exports.AdvancesInstallments = {}));
exports.AdvancesInstallments = AdvancesInstallments;
//# sourceMappingURL=AdvancesInstallments.js.map