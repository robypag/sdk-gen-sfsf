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
var RecurringDeductionItemRequestBuilder_1 = require("./RecurringDeductionItemRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "RecurringDeductionItem" of service "SFOData".
 */
var RecurringDeductionItem = /** @class */ (function (_super) {
    __extends(RecurringDeductionItem, _super);
    function RecurringDeductionItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `RecurringDeductionItem`.
     * @returns A builder that constructs instances of entity type `RecurringDeductionItem`.
     */
    RecurringDeductionItem.builder = function () {
        return core_1.Entity.entityBuilder(RecurringDeductionItem);
    };
    /**
     * Returns a request builder to construct requests for operations on the `RecurringDeductionItem` entity type.
     * @returns A `RecurringDeductionItem` request builder.
     */
    RecurringDeductionItem.requestBuilder = function () {
        return new RecurringDeductionItemRequestBuilder_1.RecurringDeductionItemRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RecurringDeductionItem`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RecurringDeductionItem`.
     */
    RecurringDeductionItem.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, RecurringDeductionItem);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    RecurringDeductionItem.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for RecurringDeductionItem.
     */
    RecurringDeductionItem._entityName = 'RecurringDeductionItem';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for RecurringDeductionItem.
     */
    RecurringDeductionItem._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    RecurringDeductionItem._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return RecurringDeductionItem;
}(core_1.Entity));
exports.RecurringDeductionItem = RecurringDeductionItem;
var NonRecurringPayment_1 = require("./NonRecurringPayment");
var Attachment_1 = require("./Attachment");
var User_1 = require("./User");
var Currency_1 = require("./Currency");
var FoFrequency_1 = require("./FoFrequency");
var MdfEnumValue_1 = require("./MdfEnumValue");
var FoPayComponent_1 = require("./FoPayComponent");
(function (RecurringDeductionItem) {
    /**
     * Static representation of the [[recurringDeductionEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeductionItem.RECURRING_DEDUCTION_EFFECTIVE_START_DATE = new core_1.DateField('RecurringDeduction_effectiveStartDate', RecurringDeductionItem, 'Edm.DateTime');
    /**
     * Static representation of the [[recurringDeductionUserSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeductionItem.RECURRING_DEDUCTION_USER_SYS_ID = new core_1.StringField('RecurringDeduction_userSysId', RecurringDeductionItem, 'Edm.String');
    /**
     * Static representation of the [[additionalInfo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeductionItem.ADDITIONAL_INFO = new core_1.StringField('additionalInfo', RecurringDeductionItem, 'Edm.String');
    /**
     * Static representation of the [[advanceId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeductionItem.ADVANCE_ID = new core_1.StringField('advanceId', RecurringDeductionItem, 'Edm.String');
    /**
     * Static representation of the [[amount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeductionItem.AMOUNT = new core_1.BigNumberField('amount', RecurringDeductionItem, 'Edm.Decimal');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeductionItem.CREATED_BY = new core_1.StringField('createdBy', RecurringDeductionItem, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeductionItem.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', RecurringDeductionItem, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeductionItem.CURRENCY = new core_1.StringField('currency', RecurringDeductionItem, 'Edm.String');
    /**
     * Static representation of the [[editPermission]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeductionItem.EDIT_PERMISSION = new core_1.StringField('editPermission', RecurringDeductionItem, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeductionItem.END_DATE = new core_1.DateField('endDate', RecurringDeductionItem, 'Edm.DateTime');
    /**
     * Static representation of the [[equivalentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeductionItem.EQUIVALENT_AMOUNT = new core_1.BigNumberField('equivalentAmount', RecurringDeductionItem, 'Edm.Decimal');
    /**
     * Static representation of the [[frequency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeductionItem.FREQUENCY = new core_1.StringField('frequency', RecurringDeductionItem, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeductionItem.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', RecurringDeductionItem, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeductionItem.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', RecurringDeductionItem, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeductionItem.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', RecurringDeductionItem, 'Edm.String');
    /**
     * Static representation of the [[payComponentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeductionItem.PAY_COMPONENT_TYPE = new core_1.StringField('payComponentType', RecurringDeductionItem, 'Edm.String');
    /**
     * Static representation of the [[referenceId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeductionItem.REFERENCE_ID = new core_1.StringField('referenceId', RecurringDeductionItem, 'Edm.String');
    /**
     * Static representation of the [[unitOfMeasure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeductionItem.UNIT_OF_MEASURE = new core_1.StringField('unitOfMeasure', RecurringDeductionItem, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[advanceIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeductionItem.ADVANCE_ID_NAV = new core_1.OneToOneLink('advanceIdNav', RecurringDeductionItem, NonRecurringPayment_1.NonRecurringPayment);
    /**
     * Static representation of the one-to-one navigation property [[attachmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeductionItem.ATTACHMENT_NAV = new core_1.OneToOneLink('attachmentNav', RecurringDeductionItem, Attachment_1.Attachment);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeductionItem.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', RecurringDeductionItem, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[currencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeductionItem.CURRENCY_NAV = new core_1.Link('currencyNav', RecurringDeductionItem, Currency_1.Currency);
    /**
     * Static representation of the one-to-one navigation property [[frequencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeductionItem.FREQUENCY_NAV = new core_1.OneToOneLink('frequencyNav', RecurringDeductionItem, FoFrequency_1.FoFrequency);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeductionItem.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', RecurringDeductionItem, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeductionItem.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', RecurringDeductionItem, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[payComponentTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeductionItem.PAY_COMPONENT_TYPE_NAV = new core_1.Link('payComponentTypeNav', RecurringDeductionItem, FoPayComponent_1.FoPayComponent);
    /**
     * All fields of the RecurringDeductionItem entity.
     */
    RecurringDeductionItem._allFields = [
        RecurringDeductionItem.RECURRING_DEDUCTION_EFFECTIVE_START_DATE,
        RecurringDeductionItem.RECURRING_DEDUCTION_USER_SYS_ID,
        RecurringDeductionItem.ADDITIONAL_INFO,
        RecurringDeductionItem.ADVANCE_ID,
        RecurringDeductionItem.AMOUNT,
        RecurringDeductionItem.CREATED_BY,
        RecurringDeductionItem.CREATED_DATE_TIME,
        RecurringDeductionItem.CURRENCY,
        RecurringDeductionItem.EDIT_PERMISSION,
        RecurringDeductionItem.END_DATE,
        RecurringDeductionItem.EQUIVALENT_AMOUNT,
        RecurringDeductionItem.FREQUENCY,
        RecurringDeductionItem.LAST_MODIFIED_BY,
        RecurringDeductionItem.LAST_MODIFIED_DATE_TIME,
        RecurringDeductionItem.MDF_SYSTEM_RECORD_STATUS,
        RecurringDeductionItem.PAY_COMPONENT_TYPE,
        RecurringDeductionItem.REFERENCE_ID,
        RecurringDeductionItem.UNIT_OF_MEASURE,
        RecurringDeductionItem.ADVANCE_ID_NAV,
        RecurringDeductionItem.ATTACHMENT_NAV,
        RecurringDeductionItem.CREATED_BY_NAV,
        RecurringDeductionItem.CURRENCY_NAV,
        RecurringDeductionItem.FREQUENCY_NAV,
        RecurringDeductionItem.LAST_MODIFIED_BY_NAV,
        RecurringDeductionItem.MDF_SYSTEM_RECORD_STATUS_NAV,
        RecurringDeductionItem.PAY_COMPONENT_TYPE_NAV
    ];
    /**
     * All fields selector.
     */
    RecurringDeductionItem.ALL_FIELDS = new core_1.AllFields('*', RecurringDeductionItem);
    /**
     * All key fields of the RecurringDeductionItem entity.
     */
    RecurringDeductionItem._keyFields = [RecurringDeductionItem.RECURRING_DEDUCTION_EFFECTIVE_START_DATE, RecurringDeductionItem.RECURRING_DEDUCTION_USER_SYS_ID, RecurringDeductionItem.PAY_COMPONENT_TYPE];
    /**
     * Mapping of all key field names to the respective static field property RecurringDeductionItem.
     */
    RecurringDeductionItem._keys = RecurringDeductionItem._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(RecurringDeductionItem = exports.RecurringDeductionItem || (exports.RecurringDeductionItem = {}));
exports.RecurringDeductionItem = RecurringDeductionItem;
//# sourceMappingURL=RecurringDeductionItem.js.map