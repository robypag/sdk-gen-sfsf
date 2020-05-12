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
var WorkOrderRequestBuilder_1 = require("./WorkOrderRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "WorkOrder" of service "SFOData".
 */
var WorkOrder = /** @class */ (function (_super) {
    __extends(WorkOrder, _super);
    function WorkOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `WorkOrder`.
     * @returns A builder that constructs instances of entity type `WorkOrder`.
     */
    WorkOrder.builder = function () {
        return core_1.Entity.entityBuilder(WorkOrder);
    };
    /**
     * Returns a request builder to construct requests for operations on the `WorkOrder` entity type.
     * @returns A `WorkOrder` request builder.
     */
    WorkOrder.requestBuilder = function () {
        return new WorkOrderRequestBuilder_1.WorkOrderRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WorkOrder`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WorkOrder`.
     */
    WorkOrder.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, WorkOrder);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    WorkOrder.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for WorkOrder.
     */
    WorkOrder._entityName = 'WorkOrder';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WorkOrder.
     */
    WorkOrder._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    WorkOrder._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return WorkOrder;
}(core_1.Entity));
exports.WorkOrder = WorkOrder;
var FoFrequency_1 = require("./FoFrequency");
var User_1 = require("./User");
var Currency_1 = require("./Currency");
var MdfEnumValue_1 = require("./MdfEnumValue");
var VendorInfo_1 = require("./VendorInfo");
var WfRequest_1 = require("./WfRequest");
var PickListValueV2_1 = require("./PickListValueV2");
(function (WorkOrder) {
    /**
     * Static representation of the [[billingAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.BILLING_AMOUNT = new core_1.BigNumberField('billingAmount', WorkOrder, 'Edm.Decimal');
    /**
     * Static representation of the [[billingRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.BILLING_RATE = new core_1.StringField('billingRate', WorkOrder, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.CREATED_BY = new core_1.StringField('createdBy', WorkOrder, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', WorkOrder, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.CURRENCY = new core_1.StringField('currency', WorkOrder, 'Edm.String');
    /**
     * Static representation of the [[effectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.EFFECTIVE_END_DATE = new core_1.DateField('effectiveEndDate', WorkOrder, 'Edm.DateTime');
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.EFFECTIVE_START_DATE = new core_1.DateField('effectiveStartDate', WorkOrder, 'Edm.DateTime');
    /**
     * Static representation of the [[effectiveStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.EFFECTIVE_STATUS = new core_1.StringField('effectiveStatus', WorkOrder, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.END_DATE = new core_1.DateField('endDate', WorkOrder, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', WorkOrder, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', WorkOrder, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', WorkOrder, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.START_DATE = new core_1.DateField('startDate', WorkOrder, 'Edm.DateTime');
    /**
     * Static representation of the [[userSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.USER_SYS_ID = new core_1.StringField('userSysId', WorkOrder, 'Edm.String');
    /**
     * Static representation of the [[vendor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.VENDOR = new core_1.StringField('vendor', WorkOrder, 'Edm.String');
    /**
     * Static representation of the [[workOrderId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.WORK_ORDER_ID = new core_1.StringField('workOrderId', WorkOrder, 'Edm.String');
    /**
     * Static representation of the [[workOrderName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.WORK_ORDER_NAME = new core_1.StringField('workOrderName', WorkOrder, 'Edm.String');
    /**
     * Static representation of the [[workOrderOwnerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.WORK_ORDER_OWNER_ID = new core_1.StringField('workOrderOwnerId', WorkOrder, 'Edm.String');
    /**
     * Static representation of the [[workerType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.WORKER_TYPE = new core_1.StringField('workerType', WorkOrder, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[billingRateNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.BILLING_RATE_NAV = new core_1.OneToOneLink('billingRateNav', WorkOrder, FoFrequency_1.FoFrequency);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', WorkOrder, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[currencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.CURRENCY_NAV = new core_1.OneToOneLink('currencyNav', WorkOrder, Currency_1.Currency);
    /**
     * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.EFFECTIVE_STATUS_NAV = new core_1.OneToOneLink('effectiveStatusNav', WorkOrder, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', WorkOrder, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', WorkOrder, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[userSysIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.USER_SYS_ID_NAV = new core_1.OneToOneLink('userSysIdNav', WorkOrder, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[vendorNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.VENDOR_NAV = new core_1.OneToOneLink('vendorNav', WorkOrder, VendorInfo_1.VendorInfo);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', WorkOrder, WfRequest_1.WfRequest);
    /**
     * Static representation of the one-to-one navigation property [[workOrderOwnerIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.WORK_ORDER_OWNER_ID_NAV = new core_1.OneToOneLink('workOrderOwnerIdNav', WorkOrder, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[workerTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrder.WORKER_TYPE_NAV = new core_1.OneToOneLink('workerTypeNav', WorkOrder, PickListValueV2_1.PickListValueV2);
    /**
     * All fields of the WorkOrder entity.
     */
    WorkOrder._allFields = [
        WorkOrder.BILLING_AMOUNT,
        WorkOrder.BILLING_RATE,
        WorkOrder.CREATED_BY,
        WorkOrder.CREATED_DATE_TIME,
        WorkOrder.CURRENCY,
        WorkOrder.EFFECTIVE_END_DATE,
        WorkOrder.EFFECTIVE_START_DATE,
        WorkOrder.EFFECTIVE_STATUS,
        WorkOrder.END_DATE,
        WorkOrder.LAST_MODIFIED_BY,
        WorkOrder.LAST_MODIFIED_DATE_TIME,
        WorkOrder.MDF_SYSTEM_RECORD_STATUS,
        WorkOrder.START_DATE,
        WorkOrder.USER_SYS_ID,
        WorkOrder.VENDOR,
        WorkOrder.WORK_ORDER_ID,
        WorkOrder.WORK_ORDER_NAME,
        WorkOrder.WORK_ORDER_OWNER_ID,
        WorkOrder.WORKER_TYPE,
        WorkOrder.BILLING_RATE_NAV,
        WorkOrder.CREATED_BY_NAV,
        WorkOrder.CURRENCY_NAV,
        WorkOrder.EFFECTIVE_STATUS_NAV,
        WorkOrder.LAST_MODIFIED_BY_NAV,
        WorkOrder.MDF_SYSTEM_RECORD_STATUS_NAV,
        WorkOrder.USER_SYS_ID_NAV,
        WorkOrder.VENDOR_NAV,
        WorkOrder.WF_REQUEST_NAV,
        WorkOrder.WORK_ORDER_OWNER_ID_NAV,
        WorkOrder.WORKER_TYPE_NAV
    ];
    /**
     * All fields selector.
     */
    WorkOrder.ALL_FIELDS = new core_1.AllFields('*', WorkOrder);
    /**
     * All key fields of the WorkOrder entity.
     */
    WorkOrder._keyFields = [WorkOrder.EFFECTIVE_START_DATE, WorkOrder.USER_SYS_ID];
    /**
     * Mapping of all key field names to the respective static field property WorkOrder.
     */
    WorkOrder._keys = WorkOrder._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(WorkOrder = exports.WorkOrder || (exports.WorkOrder = {}));
exports.WorkOrder = WorkOrder;
//# sourceMappingURL=WorkOrder.js.map