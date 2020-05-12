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
var SpotAwardRedemptionOrderRequestBuilder_1 = require("./SpotAwardRedemptionOrderRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SpotAwardRedemptionOrder" of service "SFOData".
 */
var SpotAwardRedemptionOrder = /** @class */ (function (_super) {
    __extends(SpotAwardRedemptionOrder, _super);
    function SpotAwardRedemptionOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SpotAwardRedemptionOrder`.
     * @returns A builder that constructs instances of entity type `SpotAwardRedemptionOrder`.
     */
    SpotAwardRedemptionOrder.builder = function () {
        return core_1.Entity.entityBuilder(SpotAwardRedemptionOrder);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SpotAwardRedemptionOrder` entity type.
     * @returns A `SpotAwardRedemptionOrder` request builder.
     */
    SpotAwardRedemptionOrder.requestBuilder = function () {
        return new SpotAwardRedemptionOrderRequestBuilder_1.SpotAwardRedemptionOrderRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAwardRedemptionOrder`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SpotAwardRedemptionOrder`.
     */
    SpotAwardRedemptionOrder.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, SpotAwardRedemptionOrder);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SpotAwardRedemptionOrder.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SpotAwardRedemptionOrder.
     */
    SpotAwardRedemptionOrder._entityName = 'SpotAwardRedemptionOrder';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SpotAwardRedemptionOrder.
     */
    SpotAwardRedemptionOrder._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    SpotAwardRedemptionOrder._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SpotAwardRedemptionOrder;
}(core_1.Entity));
exports.SpotAwardRedemptionOrder = SpotAwardRedemptionOrder;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var SpotAwardRedemptionProduct_1 = require("./SpotAwardRedemptionProduct");
(function (SpotAwardRedemptionOrder) {
    /**
     * Static representation of the [[spotAwardRedemptionExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionOrder.SPOT_AWARD_REDEMPTION_EXTERNAL_CODE = new core_1.BigNumberField('SpotAwardRedemption_externalCode', SpotAwardRedemptionOrder, 'Edm.Int64');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionOrder.CREATED_BY = new core_1.StringField('createdBy', SpotAwardRedemptionOrder, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionOrder.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', SpotAwardRedemptionOrder, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionOrder.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', SpotAwardRedemptionOrder, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionOrder.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', SpotAwardRedemptionOrder, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionOrder.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', SpotAwardRedemptionOrder, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionOrder.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', SpotAwardRedemptionOrder, 'Edm.String');
    /**
     * Static representation of the [[orderAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionOrder.ORDER_AMOUNT = new core_1.BigNumberField('orderAmount', SpotAwardRedemptionOrder, 'Edm.Decimal');
    /**
     * Static representation of the [[quantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionOrder.QUANTITY = new core_1.BigNumberField('quantity', SpotAwardRedemptionOrder, 'Edm.Int64');
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionOrder.RECORD_ID = new core_1.StringField('recordId', SpotAwardRedemptionOrder, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionOrder.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', SpotAwardRedemptionOrder, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionOrder.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', SpotAwardRedemptionOrder, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionOrder.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', SpotAwardRedemptionOrder, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[product]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionOrder.PRODUCT = new core_1.OneToOneLink('product', SpotAwardRedemptionOrder, SpotAwardRedemptionProduct_1.SpotAwardRedemptionProduct);
    /**
     * All fields of the SpotAwardRedemptionOrder entity.
     */
    SpotAwardRedemptionOrder._allFields = [
        SpotAwardRedemptionOrder.SPOT_AWARD_REDEMPTION_EXTERNAL_CODE,
        SpotAwardRedemptionOrder.CREATED_BY,
        SpotAwardRedemptionOrder.CREATED_DATE_TIME,
        SpotAwardRedemptionOrder.EXTERNAL_CODE,
        SpotAwardRedemptionOrder.LAST_MODIFIED_BY,
        SpotAwardRedemptionOrder.LAST_MODIFIED_DATE_TIME,
        SpotAwardRedemptionOrder.MDF_SYSTEM_RECORD_STATUS,
        SpotAwardRedemptionOrder.ORDER_AMOUNT,
        SpotAwardRedemptionOrder.QUANTITY,
        SpotAwardRedemptionOrder.RECORD_ID,
        SpotAwardRedemptionOrder.CREATED_BY_NAV,
        SpotAwardRedemptionOrder.LAST_MODIFIED_BY_NAV,
        SpotAwardRedemptionOrder.MDF_SYSTEM_RECORD_STATUS_NAV,
        SpotAwardRedemptionOrder.PRODUCT
    ];
    /**
     * All fields selector.
     */
    SpotAwardRedemptionOrder.ALL_FIELDS = new core_1.AllFields('*', SpotAwardRedemptionOrder);
    /**
     * All key fields of the SpotAwardRedemptionOrder entity.
     */
    SpotAwardRedemptionOrder._keyFields = [SpotAwardRedemptionOrder.SPOT_AWARD_REDEMPTION_EXTERNAL_CODE, SpotAwardRedemptionOrder.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property SpotAwardRedemptionOrder.
     */
    SpotAwardRedemptionOrder._keys = SpotAwardRedemptionOrder._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SpotAwardRedemptionOrder = exports.SpotAwardRedemptionOrder || (exports.SpotAwardRedemptionOrder = {}));
exports.SpotAwardRedemptionOrder = SpotAwardRedemptionOrder;
//# sourceMappingURL=SpotAwardRedemptionOrder.js.map