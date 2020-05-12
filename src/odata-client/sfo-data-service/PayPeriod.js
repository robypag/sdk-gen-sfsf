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
var PayPeriodRequestBuilder_1 = require("./PayPeriodRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PayPeriod" of service "SFOData".
 */
var PayPeriod = /** @class */ (function (_super) {
    __extends(PayPeriod, _super);
    function PayPeriod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PayPeriod`.
     * @returns A builder that constructs instances of entity type `PayPeriod`.
     */
    PayPeriod.builder = function () {
        return core_1.Entity.entityBuilder(PayPeriod);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PayPeriod` entity type.
     * @returns A `PayPeriod` request builder.
     */
    PayPeriod.requestBuilder = function () {
        return new PayPeriodRequestBuilder_1.PayPeriodRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PayPeriod`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PayPeriod`.
     */
    PayPeriod.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PayPeriod);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PayPeriod.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PayPeriod.
     */
    PayPeriod._entityName = 'PayPeriod';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PayPeriod.
     */
    PayPeriod._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PayPeriod._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PayPeriod;
}(core_1.Entity));
exports.PayPeriod = PayPeriod;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var PickListValueV2_1 = require("./PickListValueV2");
(function (PayPeriod) {
    /**
     * Static representation of the [[payCalendarPayGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayPeriod.PAY_CALENDAR_PAY_GROUP = new core_1.StringField('PayCalendar_payGroup', PayPeriod, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayPeriod.CREATED_BY = new core_1.StringField('createdBy', PayPeriod, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayPeriod.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PayPeriod, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayPeriod.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', PayPeriod, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayPeriod.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PayPeriod, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayPeriod.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PayPeriod, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayPeriod.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PayPeriod, 'Edm.String');
    /**
     * Static representation of the [[offcycle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayPeriod.OFFCYCLE = new core_1.BooleanField('offcycle', PayPeriod, 'Edm.Boolean');
    /**
     * Static representation of the [[payCheckIssueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayPeriod.PAY_CHECK_ISSUE_DATE = new core_1.DateField('payCheckIssueDate', PayPeriod, 'Edm.DateTime');
    /**
     * Static representation of the [[payPeriodBeginDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayPeriod.PAY_PERIOD_BEGIN_DATE = new core_1.DateField('payPeriodBeginDate', PayPeriod, 'Edm.DateTime');
    /**
     * Static representation of the [[payPeriodEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayPeriod.PAY_PERIOD_END_DATE = new core_1.DateField('payPeriodEndDate', PayPeriod, 'Edm.DateTime');
    /**
     * Static representation of the [[processingRunId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayPeriod.PROCESSING_RUN_ID = new core_1.StringField('processingRunId', PayPeriod, 'Edm.String');
    /**
     * Static representation of the [[runType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayPeriod.RUN_TYPE = new core_1.StringField('runType', PayPeriod, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayPeriod.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PayPeriod, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayPeriod.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PayPeriod, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayPeriod.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PayPeriod, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[runTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayPeriod.RUN_TYPE_NAV = new core_1.Link('runTypeNav', PayPeriod, PickListValueV2_1.PickListValueV2);
    /**
     * All fields of the PayPeriod entity.
     */
    PayPeriod._allFields = [
        PayPeriod.PAY_CALENDAR_PAY_GROUP,
        PayPeriod.CREATED_BY,
        PayPeriod.CREATED_DATE_TIME,
        PayPeriod.EXTERNAL_CODE,
        PayPeriod.LAST_MODIFIED_BY,
        PayPeriod.LAST_MODIFIED_DATE_TIME,
        PayPeriod.MDF_SYSTEM_RECORD_STATUS,
        PayPeriod.OFFCYCLE,
        PayPeriod.PAY_CHECK_ISSUE_DATE,
        PayPeriod.PAY_PERIOD_BEGIN_DATE,
        PayPeriod.PAY_PERIOD_END_DATE,
        PayPeriod.PROCESSING_RUN_ID,
        PayPeriod.RUN_TYPE,
        PayPeriod.CREATED_BY_NAV,
        PayPeriod.LAST_MODIFIED_BY_NAV,
        PayPeriod.MDF_SYSTEM_RECORD_STATUS_NAV,
        PayPeriod.RUN_TYPE_NAV
    ];
    /**
     * All fields selector.
     */
    PayPeriod.ALL_FIELDS = new core_1.AllFields('*', PayPeriod);
    /**
     * All key fields of the PayPeriod entity.
     */
    PayPeriod._keyFields = [PayPeriod.PAY_CALENDAR_PAY_GROUP, PayPeriod.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property PayPeriod.
     */
    PayPeriod._keys = PayPeriod._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PayPeriod = exports.PayPeriod || (exports.PayPeriod = {}));
exports.PayPeriod = PayPeriod;
//# sourceMappingURL=PayPeriod.js.map