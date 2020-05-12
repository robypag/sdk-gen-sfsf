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
var AdvancesAccumulationRequestBuilder_1 = require("./AdvancesAccumulationRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "AdvancesAccumulation" of service "SFOData".
 */
var AdvancesAccumulation = /** @class */ (function (_super) {
    __extends(AdvancesAccumulation, _super);
    function AdvancesAccumulation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `AdvancesAccumulation`.
     * @returns A builder that constructs instances of entity type `AdvancesAccumulation`.
     */
    AdvancesAccumulation.builder = function () {
        return core_1.Entity.entityBuilder(AdvancesAccumulation);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AdvancesAccumulation` entity type.
     * @returns A `AdvancesAccumulation` request builder.
     */
    AdvancesAccumulation.requestBuilder = function () {
        return new AdvancesAccumulationRequestBuilder_1.AdvancesAccumulationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AdvancesAccumulation`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AdvancesAccumulation`.
     */
    AdvancesAccumulation.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, AdvancesAccumulation);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AdvancesAccumulation.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AdvancesAccumulation.
     */
    AdvancesAccumulation._entityName = 'AdvancesAccumulation';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AdvancesAccumulation.
     */
    AdvancesAccumulation._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    AdvancesAccumulation._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return AdvancesAccumulation;
}(core_1.Entity));
exports.AdvancesAccumulation = AdvancesAccumulation;
var FoPayComponent_1 = require("./FoPayComponent");
var User_1 = require("./User");
var Currency_1 = require("./Currency");
var PickListValueV2_1 = require("./PickListValueV2");
var MdfEnumValue_1 = require("./MdfEnumValue");
var NonRecurringPayment_1 = require("./NonRecurringPayment");
var WfRequest_1 = require("./WfRequest");
(function (AdvancesAccumulation) {
    /**
     * Static representation of the [[accumulatedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesAccumulation.ACCUMULATED_AMOUNT = new core_1.BigNumberField('accumulatedAmount', AdvancesAccumulation, 'Edm.Decimal');
    /**
     * Static representation of the [[advanceType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesAccumulation.ADVANCE_TYPE = new core_1.StringField('advanceType', AdvancesAccumulation, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesAccumulation.CREATED_BY = new core_1.StringField('createdBy', AdvancesAccumulation, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesAccumulation.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', AdvancesAccumulation, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesAccumulation.CURRENCY = new core_1.StringField('currency', AdvancesAccumulation, 'Edm.String');
    /**
     * Static representation of the [[currencyGo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesAccumulation.CURRENCY_GO = new core_1.StringField('currencyGO', AdvancesAccumulation, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesAccumulation.EXTERNAL_CODE = new core_1.StringField('externalCode', AdvancesAccumulation, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesAccumulation.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', AdvancesAccumulation, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesAccumulation.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', AdvancesAccumulation, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesAccumulation.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', AdvancesAccumulation, 'Edm.String');
    /**
     * Static representation of the [[numberOfOccurances]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesAccumulation.NUMBER_OF_OCCURANCES = new core_1.BigNumberField('numberOfOccurances', AdvancesAccumulation, 'Edm.Int64');
    /**
     * Static representation of the [[periodEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesAccumulation.PERIOD_END_DATE = new core_1.DateField('periodEndDate', AdvancesAccumulation, 'Edm.DateTime');
    /**
     * Static representation of the [[periodStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesAccumulation.PERIOD_START_DATE = new core_1.DateField('periodStartDate', AdvancesAccumulation, 'Edm.DateTime');
    /**
     * Static representation of the [[remainingEligibleAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesAccumulation.REMAINING_ELIGIBLE_AMOUNT = new core_1.BigNumberField('remainingEligibleAmount', AdvancesAccumulation, 'Edm.Decimal');
    /**
     * Static representation of the [[remainingNumberOfOccurances]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesAccumulation.REMAINING_NUMBER_OF_OCCURANCES = new core_1.BigNumberField('remainingNumberOfOccurances', AdvancesAccumulation, 'Edm.Int64');
    /**
     * Static representation of the [[userSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesAccumulation.USER_SYS_ID = new core_1.StringField('userSysId', AdvancesAccumulation, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[advanceTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesAccumulation.ADVANCE_TYPE_NAV = new core_1.Link('advanceTypeNav', AdvancesAccumulation, FoPayComponent_1.FoPayComponent);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesAccumulation.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', AdvancesAccumulation, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[currencyGoNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesAccumulation.CURRENCY_GO_NAV = new core_1.Link('currencyGONav', AdvancesAccumulation, Currency_1.Currency);
    /**
     * Static representation of the one-to-many navigation property [[currencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesAccumulation.CURRENCY_NAV = new core_1.Link('currencyNav', AdvancesAccumulation, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesAccumulation.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', AdvancesAccumulation, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesAccumulation.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', AdvancesAccumulation, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[nonRecurringPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesAccumulation.NON_RECURRING_PAYMENTS = new core_1.Link('nonRecurringPayments', AdvancesAccumulation, NonRecurringPayment_1.NonRecurringPayment);
    /**
     * Static representation of the one-to-one navigation property [[userSysIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesAccumulation.USER_SYS_ID_NAV = new core_1.OneToOneLink('userSysIdNav', AdvancesAccumulation, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdvancesAccumulation.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', AdvancesAccumulation, WfRequest_1.WfRequest);
    /**
     * All fields of the AdvancesAccumulation entity.
     */
    AdvancesAccumulation._allFields = [
        AdvancesAccumulation.ACCUMULATED_AMOUNT,
        AdvancesAccumulation.ADVANCE_TYPE,
        AdvancesAccumulation.CREATED_BY,
        AdvancesAccumulation.CREATED_DATE_TIME,
        AdvancesAccumulation.CURRENCY,
        AdvancesAccumulation.CURRENCY_GO,
        AdvancesAccumulation.EXTERNAL_CODE,
        AdvancesAccumulation.LAST_MODIFIED_BY,
        AdvancesAccumulation.LAST_MODIFIED_DATE_TIME,
        AdvancesAccumulation.MDF_SYSTEM_RECORD_STATUS,
        AdvancesAccumulation.NUMBER_OF_OCCURANCES,
        AdvancesAccumulation.PERIOD_END_DATE,
        AdvancesAccumulation.PERIOD_START_DATE,
        AdvancesAccumulation.REMAINING_ELIGIBLE_AMOUNT,
        AdvancesAccumulation.REMAINING_NUMBER_OF_OCCURANCES,
        AdvancesAccumulation.USER_SYS_ID,
        AdvancesAccumulation.ADVANCE_TYPE_NAV,
        AdvancesAccumulation.CREATED_BY_NAV,
        AdvancesAccumulation.CURRENCY_GO_NAV,
        AdvancesAccumulation.CURRENCY_NAV,
        AdvancesAccumulation.LAST_MODIFIED_BY_NAV,
        AdvancesAccumulation.MDF_SYSTEM_RECORD_STATUS_NAV,
        AdvancesAccumulation.NON_RECURRING_PAYMENTS,
        AdvancesAccumulation.USER_SYS_ID_NAV,
        AdvancesAccumulation.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    AdvancesAccumulation.ALL_FIELDS = new core_1.AllFields('*', AdvancesAccumulation);
    /**
     * All key fields of the AdvancesAccumulation entity.
     */
    AdvancesAccumulation._keyFields = [AdvancesAccumulation.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property AdvancesAccumulation.
     */
    AdvancesAccumulation._keys = AdvancesAccumulation._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AdvancesAccumulation = exports.AdvancesAccumulation || (exports.AdvancesAccumulation = {}));
exports.AdvancesAccumulation = AdvancesAccumulation;
//# sourceMappingURL=AdvancesAccumulation.js.map