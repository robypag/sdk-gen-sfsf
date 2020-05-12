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
var AdvanceRequestBuilder_1 = require("./AdvanceRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Advance" of service "SFOData".
 */
var Advance = /** @class */ (function (_super) {
    __extends(Advance, _super);
    function Advance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Advance`.
     * @returns A builder that constructs instances of entity type `Advance`.
     */
    Advance.builder = function () {
        return core_1.Entity.entityBuilder(Advance);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Advance` entity type.
     * @returns A `Advance` request builder.
     */
    Advance.requestBuilder = function () {
        return new AdvanceRequestBuilder_1.AdvanceRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Advance`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Advance`.
     */
    Advance.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Advance);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Advance.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Advance.
     */
    Advance._entityName = 'Advance';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Advance.
     */
    Advance._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Advance._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Advance;
}(core_1.Entity));
exports.Advance = Advance;
var AdvancesEligibility_1 = require("./AdvancesEligibility");
var FoPayComponent_1 = require("./FoPayComponent");
var AdvancesInstallments_1 = require("./AdvancesInstallments");
var MdfEnumValue_1 = require("./MdfEnumValue");
var User_1 = require("./User");
var Attachment_1 = require("./Attachment");
var Currency_1 = require("./Currency");
var FoFrequency_1 = require("./FoFrequency");
var PickListValueV2_1 = require("./PickListValueV2");
(function (Advance) {
    /**
     * Static representation of the [[nonRecurringPaymentExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.NON_RECURRING_PAYMENT_EXTERNAL_CODE = new core_1.StringField('NonRecurringPayment_externalCode', Advance, 'Edm.String');
    /**
     * Static representation of the [[advanceEligibilityCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.ADVANCE_ELIGIBILITY_CODE = new core_1.StringField('advanceEligibilityCode', Advance, 'Edm.String');
    /**
     * Static representation of the [[advanceType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.ADVANCE_TYPE = new core_1.StringField('advanceType', Advance, 'Edm.String');
    /**
     * Static representation of the [[approvalStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.APPROVAL_STATUS = new core_1.StringField('approvalStatus', Advance, 'Edm.String');
    /**
     * Static representation of the [[approver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.APPROVER = new core_1.StringField('approver', Advance, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.CREATED_BY = new core_1.StringField('createdBy', Advance, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', Advance, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[currencyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.CURRENCY_CODE = new core_1.StringField('currencyCode', Advance, 'Edm.String');
    /**
     * Static representation of the [[currencyGo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.CURRENCY_GO = new core_1.StringField('currencyGO', Advance, 'Edm.String');
    /**
     * Static representation of the [[eligibileAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.ELIGIBILE_AMOUNT = new core_1.BigNumberField('eligibileAmount', Advance, 'Edm.Decimal');
    /**
     * Static representation of the [[eligibilityAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.ELIGIBILITY_AMOUNT = new core_1.BigNumberField('eligibilityAmount', Advance, 'Edm.Decimal');
    /**
     * Static representation of the [[eligibleAdvanceType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.ELIGIBLE_ADVANCE_TYPE = new core_1.StringField('eligibleAdvanceType', Advance, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.EXTERNAL_CODE = new core_1.StringField('externalCode', Advance, 'Edm.String');
    /**
     * Static representation of the [[installmentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.INSTALLMENT_AMOUNT = new core_1.BigNumberField('installmentAmount', Advance, 'Edm.Decimal');
    /**
     * Static representation of the [[installmentFrequency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.INSTALLMENT_FREQUENCY = new core_1.StringField('installmentFrequency', Advance, 'Edm.String');
    /**
     * Static representation of the [[interestRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.INTEREST_RATE = new core_1.BigNumberField('interestRate', Advance, 'Edm.Decimal');
    /**
     * Static representation of the [[interestType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.INTEREST_TYPE = new core_1.StringField('interestType', Advance, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', Advance, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', Advance, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', Advance, 'Edm.String');
    /**
     * Static representation of the [[notesForApprover]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.NOTES_FOR_APPROVER = new core_1.StringField('notesForApprover', Advance, 'Edm.String');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.NUMBER_OF_INSTALLMENTS = new core_1.BigNumberField('numberOfInstallments', Advance, 'Edm.Int64');
    /**
     * Static representation of the [[paymentMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.PAYMENT_MODE = new core_1.StringField('paymentMode', Advance, 'Edm.String');
    /**
     * Static representation of the [[pendingAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.PENDING_AMOUNT = new core_1.BigNumberField('pendingAmount', Advance, 'Edm.Decimal');
    /**
     * Static representation of the [[periodEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.PERIOD_END_DATE = new core_1.DateField('periodEndDate', Advance, 'Edm.DateTime');
    /**
     * Static representation of the [[periodStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.PERIOD_START_DATE = new core_1.DateField('periodStartDate', Advance, 'Edm.DateTime');
    /**
     * Static representation of the [[recoveryMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.RECOVERY_MODE = new core_1.StringField('recoveryMode', Advance, 'Edm.String');
    /**
     * Static representation of the [[recoveryStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.RECOVERY_STATUS = new core_1.StringField('recoveryStatus', Advance, 'Edm.String');
    /**
     * Static representation of the [[remainingRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.REMAINING_REQUESTS = new core_1.BigNumberField('remainingRequests', Advance, 'Edm.Int64');
    /**
     * Static representation of the [[requestDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.REQUEST_DATE = new core_1.DateField('requestDate', Advance, 'Edm.DateTime');
    /**
     * Static representation of the [[requestedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.REQUESTED_AMOUNT = new core_1.BigNumberField('requestedAmount', Advance, 'Edm.Decimal');
    /**
     * Static representation of the [[totalRepaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.TOTAL_REPAYMENT_AMOUNT = new core_1.BigNumberField('totalRepaymentAmount', Advance, 'Edm.Decimal');
    /**
     * Static representation of the one-to-many navigation property [[advanceEligibilityCodeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.ADVANCE_ELIGIBILITY_CODE_NAV = new core_1.Link('advanceEligibilityCodeNav', Advance, AdvancesEligibility_1.AdvancesEligibility);
    /**
     * Static representation of the one-to-many navigation property [[advanceTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.ADVANCE_TYPE_NAV = new core_1.Link('advanceTypeNav', Advance, FoPayComponent_1.FoPayComponent);
    /**
     * Static representation of the one-to-many navigation property [[advancesInstallments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.ADVANCES_INSTALLMENTS = new core_1.Link('advancesInstallments', Advance, AdvancesInstallments_1.AdvancesInstallments);
    /**
     * Static representation of the one-to-one navigation property [[approvalStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.APPROVAL_STATUS_NAV = new core_1.OneToOneLink('approvalStatusNav', Advance, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[approverNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.APPROVER_NAV = new core_1.OneToOneLink('approverNav', Advance, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[attachmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.ATTACHMENT_NAV = new core_1.OneToOneLink('attachmentNav', Advance, Attachment_1.Attachment);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', Advance, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[currencyGoNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.CURRENCY_GO_NAV = new core_1.Link('currencyGONav', Advance, Currency_1.Currency);
    /**
     * Static representation of the one-to-one navigation property [[installmentFrequencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.INSTALLMENT_FREQUENCY_NAV = new core_1.OneToOneLink('installmentFrequencyNav', Advance, FoFrequency_1.FoFrequency);
    /**
     * Static representation of the one-to-one navigation property [[interestTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.INTEREST_TYPE_NAV = new core_1.OneToOneLink('interestTypeNav', Advance, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', Advance, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', Advance, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[paymentModeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.PAYMENT_MODE_NAV = new core_1.Link('paymentModeNav', Advance, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-one navigation property [[recoveryModeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.RECOVERY_MODE_NAV = new core_1.OneToOneLink('recoveryModeNav', Advance, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[recoveryStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Advance.RECOVERY_STATUS_NAV = new core_1.OneToOneLink('recoveryStatusNav', Advance, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the Advance entity.
     */
    Advance._allFields = [
        Advance.NON_RECURRING_PAYMENT_EXTERNAL_CODE,
        Advance.ADVANCE_ELIGIBILITY_CODE,
        Advance.ADVANCE_TYPE,
        Advance.APPROVAL_STATUS,
        Advance.APPROVER,
        Advance.CREATED_BY,
        Advance.CREATED_DATE_TIME,
        Advance.CURRENCY_CODE,
        Advance.CURRENCY_GO,
        Advance.ELIGIBILE_AMOUNT,
        Advance.ELIGIBILITY_AMOUNT,
        Advance.ELIGIBLE_ADVANCE_TYPE,
        Advance.EXTERNAL_CODE,
        Advance.INSTALLMENT_AMOUNT,
        Advance.INSTALLMENT_FREQUENCY,
        Advance.INTEREST_RATE,
        Advance.INTEREST_TYPE,
        Advance.LAST_MODIFIED_BY,
        Advance.LAST_MODIFIED_DATE_TIME,
        Advance.MDF_SYSTEM_RECORD_STATUS,
        Advance.NOTES_FOR_APPROVER,
        Advance.NUMBER_OF_INSTALLMENTS,
        Advance.PAYMENT_MODE,
        Advance.PENDING_AMOUNT,
        Advance.PERIOD_END_DATE,
        Advance.PERIOD_START_DATE,
        Advance.RECOVERY_MODE,
        Advance.RECOVERY_STATUS,
        Advance.REMAINING_REQUESTS,
        Advance.REQUEST_DATE,
        Advance.REQUESTED_AMOUNT,
        Advance.TOTAL_REPAYMENT_AMOUNT,
        Advance.ADVANCE_ELIGIBILITY_CODE_NAV,
        Advance.ADVANCE_TYPE_NAV,
        Advance.ADVANCES_INSTALLMENTS,
        Advance.APPROVAL_STATUS_NAV,
        Advance.APPROVER_NAV,
        Advance.ATTACHMENT_NAV,
        Advance.CREATED_BY_NAV,
        Advance.CURRENCY_GO_NAV,
        Advance.INSTALLMENT_FREQUENCY_NAV,
        Advance.INTEREST_TYPE_NAV,
        Advance.LAST_MODIFIED_BY_NAV,
        Advance.MDF_SYSTEM_RECORD_STATUS_NAV,
        Advance.PAYMENT_MODE_NAV,
        Advance.RECOVERY_MODE_NAV,
        Advance.RECOVERY_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    Advance.ALL_FIELDS = new core_1.AllFields('*', Advance);
    /**
     * All key fields of the Advance entity.
     */
    Advance._keyFields = [Advance.NON_RECURRING_PAYMENT_EXTERNAL_CODE, Advance.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property Advance.
     */
    Advance._keys = Advance._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Advance = exports.Advance || (exports.Advance = {}));
exports.Advance = Advance;
//# sourceMappingURL=Advance.js.map