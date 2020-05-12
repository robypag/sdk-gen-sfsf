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
var SpotAwardRedemptionProductRequestBuilder_1 = require("./SpotAwardRedemptionProductRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SpotAwardRedemptionProduct" of service "SFOData".
 */
var SpotAwardRedemptionProduct = /** @class */ (function (_super) {
    __extends(SpotAwardRedemptionProduct, _super);
    function SpotAwardRedemptionProduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SpotAwardRedemptionProduct`.
     * @returns A builder that constructs instances of entity type `SpotAwardRedemptionProduct`.
     */
    SpotAwardRedemptionProduct.builder = function () {
        return core_1.Entity.entityBuilder(SpotAwardRedemptionProduct);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SpotAwardRedemptionProduct` entity type.
     * @returns A `SpotAwardRedemptionProduct` request builder.
     */
    SpotAwardRedemptionProduct.requestBuilder = function () {
        return new SpotAwardRedemptionProductRequestBuilder_1.SpotAwardRedemptionProductRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAwardRedemptionProduct`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SpotAwardRedemptionProduct`.
     */
    SpotAwardRedemptionProduct.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, SpotAwardRedemptionProduct);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SpotAwardRedemptionProduct.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SpotAwardRedemptionProduct.
     */
    SpotAwardRedemptionProduct._entityName = 'SpotAwardRedemptionProduct';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SpotAwardRedemptionProduct.
     */
    SpotAwardRedemptionProduct._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    SpotAwardRedemptionProduct._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SpotAwardRedemptionProduct;
}(core_1.Entity));
exports.SpotAwardRedemptionProduct = SpotAwardRedemptionProduct;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (SpotAwardRedemptionProduct) {
    /**
     * Static representation of the [[spotAwardRedemptionOrderExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionProduct.SPOT_AWARD_REDEMPTION_ORDER_EXTERNAL_CODE = new core_1.BigNumberField('SpotAwardRedemptionOrder_externalCode', SpotAwardRedemptionProduct, 'Edm.Int64');
    /**
     * Static representation of the [[spotAwardRedemptionExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionProduct.SPOT_AWARD_REDEMPTION_EXTERNAL_CODE = new core_1.BigNumberField('SpotAwardRedemption_externalCode', SpotAwardRedemptionProduct, 'Edm.Int64');
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionProduct.CATEGORY = new core_1.StringField('category', SpotAwardRedemptionProduct, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionProduct.CREATED_BY = new core_1.StringField('createdBy', SpotAwardRedemptionProduct, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionProduct.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', SpotAwardRedemptionProduct, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionProduct.DESCRIPTION = new core_1.StringField('description', SpotAwardRedemptionProduct, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionProduct.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', SpotAwardRedemptionProduct, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionProduct.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', SpotAwardRedemptionProduct, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionProduct.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', SpotAwardRedemptionProduct, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionProduct.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', SpotAwardRedemptionProduct, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionProduct.NAME = new core_1.StringField('name', SpotAwardRedemptionProduct, 'Edm.String');
    /**
     * Static representation of the [[price]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionProduct.PRICE = new core_1.BigNumberField('price', SpotAwardRedemptionProduct, 'Edm.Decimal');
    /**
     * Static representation of the [[productId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionProduct.PRODUCT_ID = new core_1.StringField('productId', SpotAwardRedemptionProduct, 'Edm.String');
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionProduct.RECORD_ID = new core_1.StringField('recordId', SpotAwardRedemptionProduct, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionProduct.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', SpotAwardRedemptionProduct, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionProduct.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', SpotAwardRedemptionProduct, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardRedemptionProduct.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', SpotAwardRedemptionProduct, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the SpotAwardRedemptionProduct entity.
     */
    SpotAwardRedemptionProduct._allFields = [
        SpotAwardRedemptionProduct.SPOT_AWARD_REDEMPTION_ORDER_EXTERNAL_CODE,
        SpotAwardRedemptionProduct.SPOT_AWARD_REDEMPTION_EXTERNAL_CODE,
        SpotAwardRedemptionProduct.CATEGORY,
        SpotAwardRedemptionProduct.CREATED_BY,
        SpotAwardRedemptionProduct.CREATED_DATE_TIME,
        SpotAwardRedemptionProduct.DESCRIPTION,
        SpotAwardRedemptionProduct.EXTERNAL_CODE,
        SpotAwardRedemptionProduct.LAST_MODIFIED_BY,
        SpotAwardRedemptionProduct.LAST_MODIFIED_DATE_TIME,
        SpotAwardRedemptionProduct.MDF_SYSTEM_RECORD_STATUS,
        SpotAwardRedemptionProduct.NAME,
        SpotAwardRedemptionProduct.PRICE,
        SpotAwardRedemptionProduct.PRODUCT_ID,
        SpotAwardRedemptionProduct.RECORD_ID,
        SpotAwardRedemptionProduct.CREATED_BY_NAV,
        SpotAwardRedemptionProduct.LAST_MODIFIED_BY_NAV,
        SpotAwardRedemptionProduct.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    SpotAwardRedemptionProduct.ALL_FIELDS = new core_1.AllFields('*', SpotAwardRedemptionProduct);
    /**
     * All key fields of the SpotAwardRedemptionProduct entity.
     */
    SpotAwardRedemptionProduct._keyFields = [SpotAwardRedemptionProduct.SPOT_AWARD_REDEMPTION_ORDER_EXTERNAL_CODE, SpotAwardRedemptionProduct.SPOT_AWARD_REDEMPTION_EXTERNAL_CODE, SpotAwardRedemptionProduct.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property SpotAwardRedemptionProduct.
     */
    SpotAwardRedemptionProduct._keys = SpotAwardRedemptionProduct._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SpotAwardRedemptionProduct = exports.SpotAwardRedemptionProduct || (exports.SpotAwardRedemptionProduct = {}));
exports.SpotAwardRedemptionProduct = SpotAwardRedemptionProduct;
//# sourceMappingURL=SpotAwardRedemptionProduct.js.map