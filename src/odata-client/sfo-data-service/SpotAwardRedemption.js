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
var SpotAwardRedemptionRequestBuilder_1 = require("./SpotAwardRedemptionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SpotAwardRedemption" of service "SFOData".
 */
var SpotAwardRedemption = /** @class */ (function (_super) {
    __extends(SpotAwardRedemption, _super);
    function SpotAwardRedemption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SpotAwardRedemption`.
     * @returns A builder that constructs instances of entity type `SpotAwardRedemption`.
     */
    SpotAwardRedemption.builder = function () {
        return core_1.Entity.entityBuilder(SpotAwardRedemption);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SpotAwardRedemption` entity type.
     * @returns A `SpotAwardRedemption` request builder.
     */
    SpotAwardRedemption.requestBuilder = function () {
        return new SpotAwardRedemptionRequestBuilder_1.SpotAwardRedemptionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAwardRedemption`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SpotAwardRedemption`.
     */
    SpotAwardRedemption.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, SpotAwardRedemption);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SpotAwardRedemption.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SpotAwardRedemption.
     */
    SpotAwardRedemption._entityName = 'SpotAwardRedemption';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SpotAwardRedemption.
     */
    SpotAwardRedemption._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    SpotAwardRedemption._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SpotAwardRedemption;
}(core_1.Entity));
exports.SpotAwardRedemption = SpotAwardRedemption;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var SpotAwardRedemptionOrder_1 = require("./SpotAwardRedemptionOrder");
var WfRequest_1 = require("./WfRequest");
(function (SpotAwardRedemption) {
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemption.COMMENTS = new core_1.StringField('comments', SpotAwardRedemption, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemption.CREATED_BY = new core_1.StringField('createdBy', SpotAwardRedemption, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemption.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', SpotAwardRedemption, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemption.CURRENCY = new core_1.StringField('currency', SpotAwardRedemption, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemption.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', SpotAwardRedemption, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemption.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', SpotAwardRedemption, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemption.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', SpotAwardRedemption, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemption.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', SpotAwardRedemption, 'Edm.String');
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemption.RECORD_ID = new core_1.StringField('recordId', SpotAwardRedemption, 'Edm.String');
    /**
     * Static representation of the [[totalOrderAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemption.TOTAL_ORDER_AMOUNT = new core_1.BigNumberField('totalOrderAmount', SpotAwardRedemption, 'Edm.Decimal');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemption.USER_ID = new core_1.StringField('userId', SpotAwardRedemption, 'Edm.String');
    /**
     * Static representation of the [[vendorIdentifier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemption.VENDOR_IDENTIFIER = new core_1.StringField('vendorIdentifier', SpotAwardRedemption, 'Edm.String');
    /**
     * Static representation of the [[vendorTransactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemption.VENDOR_TRANSACTION_ID = new core_1.StringField('vendorTransactionId', SpotAwardRedemption, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemption.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', SpotAwardRedemption, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemption.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', SpotAwardRedemption, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemption.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', SpotAwardRedemption, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemption.ORDERS = new core_1.Link('orders', SpotAwardRedemption, SpotAwardRedemptionOrder_1.SpotAwardRedemptionOrder);
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemption.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', SpotAwardRedemption, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[vendorIdentifierNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemption.VENDOR_IDENTIFIER_NAV = new core_1.OneToOneLink('vendorIdentifierNav', SpotAwardRedemption, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemption.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', SpotAwardRedemption, WfRequest_1.WfRequest);
    /**
     * All fields of the SpotAwardRedemption entity.
     */
    SpotAwardRedemption._allFields = [
        SpotAwardRedemption.COMMENTS,
        SpotAwardRedemption.CREATED_BY,
        SpotAwardRedemption.CREATED_DATE_TIME,
        SpotAwardRedemption.CURRENCY,
        SpotAwardRedemption.EXTERNAL_CODE,
        SpotAwardRedemption.LAST_MODIFIED_BY,
        SpotAwardRedemption.LAST_MODIFIED_DATE_TIME,
        SpotAwardRedemption.MDF_SYSTEM_RECORD_STATUS,
        SpotAwardRedemption.RECORD_ID,
        SpotAwardRedemption.TOTAL_ORDER_AMOUNT,
        SpotAwardRedemption.USER_ID,
        SpotAwardRedemption.VENDOR_IDENTIFIER,
        SpotAwardRedemption.VENDOR_TRANSACTION_ID,
        SpotAwardRedemption.CREATED_BY_NAV,
        SpotAwardRedemption.LAST_MODIFIED_BY_NAV,
        SpotAwardRedemption.MDF_SYSTEM_RECORD_STATUS_NAV,
        SpotAwardRedemption.ORDERS,
        SpotAwardRedemption.USER_ID_NAV,
        SpotAwardRedemption.VENDOR_IDENTIFIER_NAV,
        SpotAwardRedemption.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    SpotAwardRedemption.ALL_FIELDS = new core_1.AllFields('*', SpotAwardRedemption);
    /**
     * All key fields of the SpotAwardRedemption entity.
     */
    SpotAwardRedemption._keyFields = [SpotAwardRedemption.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property SpotAwardRedemption.
     */
    SpotAwardRedemption._keys = SpotAwardRedemption._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SpotAwardRedemption = exports.SpotAwardRedemption || (exports.SpotAwardRedemption = {}));
exports.SpotAwardRedemption = SpotAwardRedemption;
//# sourceMappingURL=SpotAwardRedemption.js.map