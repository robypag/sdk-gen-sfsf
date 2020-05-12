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
var NonRecurringPaymentRequestBuilder_1 = require("./NonRecurringPaymentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "NonRecurringPayment" of service "SFOData".
 */
var NonRecurringPayment = /** @class */ (function (_super) {
    __extends(NonRecurringPayment, _super);
    function NonRecurringPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `NonRecurringPayment`.
     * @returns A builder that constructs instances of entity type `NonRecurringPayment`.
     */
    NonRecurringPayment.builder = function () {
        return core_1.Entity.entityBuilder(NonRecurringPayment);
    };
    /**
     * Returns a request builder to construct requests for operations on the `NonRecurringPayment` entity type.
     * @returns A `NonRecurringPayment` request builder.
     */
    NonRecurringPayment.requestBuilder = function () {
        return new NonRecurringPaymentRequestBuilder_1.NonRecurringPaymentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `NonRecurringPayment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `NonRecurringPayment`.
     */
    NonRecurringPayment.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, NonRecurringPayment);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    NonRecurringPayment.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for NonRecurringPayment.
     */
    NonRecurringPayment._entityName = 'NonRecurringPayment';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for NonRecurringPayment.
     */
    NonRecurringPayment._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    NonRecurringPayment._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return NonRecurringPayment;
}(core_1.Entity));
exports.NonRecurringPayment = NonRecurringPayment;
var Advance_1 = require("./Advance");
var User_1 = require("./User");
var Currency_1 = require("./Currency");
var FoPayComponent_1 = require("./FoPayComponent");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (NonRecurringPayment) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NonRecurringPayment.CREATED_BY = new core_1.StringField('createdBy', NonRecurringPayment, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NonRecurringPayment.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', NonRecurringPayment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[currencyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NonRecurringPayment.CURRENCY_CODE = new core_1.StringField('currencyCode', NonRecurringPayment, 'Edm.String');
    /**
     * Static representation of the [[currencyGo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NonRecurringPayment.CURRENCY_GO = new core_1.StringField('currencyGO', NonRecurringPayment, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NonRecurringPayment.EXTERNAL_CODE = new core_1.StringField('externalCode', NonRecurringPayment, 'Edm.String');
    /**
     * Static representation of the [[formId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NonRecurringPayment.FORM_ID = new core_1.BigNumberField('formId', NonRecurringPayment, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NonRecurringPayment.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', NonRecurringPayment, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NonRecurringPayment.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', NonRecurringPayment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[nonRecurringPayPeriodEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NonRecurringPayment.NON_RECURRING_PAY_PERIOD_END_DATE = new core_1.DateField('nonRecurringPayPeriodEndDate', NonRecurringPayment, 'Edm.DateTime');
    /**
     * Static representation of the [[nonRecurringPayPeriodStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NonRecurringPayment.NON_RECURRING_PAY_PERIOD_START_DATE = new core_1.DateField('nonRecurringPayPeriodStartDate', NonRecurringPayment, 'Edm.DateTime');
    /**
     * Static representation of the [[notes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NonRecurringPayment.NOTES = new core_1.StringField('notes', NonRecurringPayment, 'Edm.String');
    /**
     * Static representation of the [[payCompValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NonRecurringPayment.PAY_COMP_VALUE = new core_1.BigNumberField('payCompValue', NonRecurringPayment, 'Edm.Decimal');
    /**
     * Static representation of the [[payComponentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NonRecurringPayment.PAY_COMPONENT_CODE = new core_1.StringField('payComponentCode', NonRecurringPayment, 'Edm.String');
    /**
     * Static representation of the [[payComponentGroupId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NonRecurringPayment.PAY_COMPONENT_GROUP_ID = new core_1.BigNumberField('payComponentGroupId', NonRecurringPayment, 'Edm.Int64');
    /**
     * Static representation of the [[payComponentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NonRecurringPayment.PAY_COMPONENT_TYPE = new core_1.StringField('payComponentType', NonRecurringPayment, 'Edm.String');
    /**
     * Static representation of the [[payDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NonRecurringPayment.PAY_DATE = new core_1.DateField('payDate', NonRecurringPayment, 'Edm.DateTime');
    /**
     * Static representation of the [[recordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NonRecurringPayment.RECORD_STATUS = new core_1.StringField('recordStatus', NonRecurringPayment, 'Edm.String');
    /**
     * Static representation of the [[sentToPayroll]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NonRecurringPayment.SENT_TO_PAYROLL = new core_1.DateField('sentToPayroll', NonRecurringPayment, 'Edm.DateTime');
    /**
     * Static representation of the [[taxTreatment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NonRecurringPayment.TAX_TREATMENT = new core_1.StringField('taxTreatment', NonRecurringPayment, 'Edm.String');
    /**
     * Static representation of the [[templateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NonRecurringPayment.TEMPLATE_ID = new core_1.BigNumberField('templateId', NonRecurringPayment, 'Edm.Int64');
    /**
     * Static representation of the [[userSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NonRecurringPayment.USER_SYS_ID = new core_1.StringField('userSysId', NonRecurringPayment, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[advance]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NonRecurringPayment.ADVANCE = new core_1.OneToOneLink('advance', NonRecurringPayment, Advance_1.Advance);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NonRecurringPayment.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', NonRecurringPayment, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[currencyGoNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NonRecurringPayment.CURRENCY_GO_NAV = new core_1.Link('currencyGONav', NonRecurringPayment, Currency_1.Currency);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NonRecurringPayment.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', NonRecurringPayment, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[payComponentCodeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NonRecurringPayment.PAY_COMPONENT_CODE_NAV = new core_1.Link('payComponentCodeNav', NonRecurringPayment, FoPayComponent_1.FoPayComponent);
    /**
     * Static representation of the one-to-one navigation property [[recordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NonRecurringPayment.RECORD_STATUS_NAV = new core_1.OneToOneLink('recordStatusNav', NonRecurringPayment, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[userSysIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NonRecurringPayment.USER_SYS_ID_NAV = new core_1.OneToOneLink('userSysIdNav', NonRecurringPayment, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NonRecurringPayment.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', NonRecurringPayment, WfRequest_1.WfRequest);
    /**
     * All fields of the NonRecurringPayment entity.
     */
    NonRecurringPayment._allFields = [
        NonRecurringPayment.CREATED_BY,
        NonRecurringPayment.CREATED_DATE_TIME,
        NonRecurringPayment.CURRENCY_CODE,
        NonRecurringPayment.CURRENCY_GO,
        NonRecurringPayment.EXTERNAL_CODE,
        NonRecurringPayment.FORM_ID,
        NonRecurringPayment.LAST_MODIFIED_BY,
        NonRecurringPayment.LAST_MODIFIED_DATE_TIME,
        NonRecurringPayment.NON_RECURRING_PAY_PERIOD_END_DATE,
        NonRecurringPayment.NON_RECURRING_PAY_PERIOD_START_DATE,
        NonRecurringPayment.NOTES,
        NonRecurringPayment.PAY_COMP_VALUE,
        NonRecurringPayment.PAY_COMPONENT_CODE,
        NonRecurringPayment.PAY_COMPONENT_GROUP_ID,
        NonRecurringPayment.PAY_COMPONENT_TYPE,
        NonRecurringPayment.PAY_DATE,
        NonRecurringPayment.RECORD_STATUS,
        NonRecurringPayment.SENT_TO_PAYROLL,
        NonRecurringPayment.TAX_TREATMENT,
        NonRecurringPayment.TEMPLATE_ID,
        NonRecurringPayment.USER_SYS_ID,
        NonRecurringPayment.ADVANCE,
        NonRecurringPayment.CREATED_BY_NAV,
        NonRecurringPayment.CURRENCY_GO_NAV,
        NonRecurringPayment.LAST_MODIFIED_BY_NAV,
        NonRecurringPayment.PAY_COMPONENT_CODE_NAV,
        NonRecurringPayment.RECORD_STATUS_NAV,
        NonRecurringPayment.USER_SYS_ID_NAV,
        NonRecurringPayment.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    NonRecurringPayment.ALL_FIELDS = new core_1.AllFields('*', NonRecurringPayment);
    /**
     * All key fields of the NonRecurringPayment entity.
     */
    NonRecurringPayment._keyFields = [NonRecurringPayment.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property NonRecurringPayment.
     */
    NonRecurringPayment._keys = NonRecurringPayment._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(NonRecurringPayment = exports.NonRecurringPayment || (exports.NonRecurringPayment = {}));
exports.NonRecurringPayment = NonRecurringPayment;
//# sourceMappingURL=NonRecurringPayment.js.map