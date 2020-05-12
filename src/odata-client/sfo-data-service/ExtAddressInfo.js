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
var ExtAddressInfoRequestBuilder_1 = require("./ExtAddressInfoRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ExtAddressInfo" of service "SFOData".
 */
var ExtAddressInfo = /** @class */ (function (_super) {
    __extends(ExtAddressInfo, _super);
    function ExtAddressInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ExtAddressInfo`.
     * @returns A builder that constructs instances of entity type `ExtAddressInfo`.
     */
    ExtAddressInfo.builder = function () {
        return core_1.Entity.entityBuilder(ExtAddressInfo);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ExtAddressInfo` entity type.
     * @returns A `ExtAddressInfo` request builder.
     */
    ExtAddressInfo.requestBuilder = function () {
        return new ExtAddressInfoRequestBuilder_1.ExtAddressInfoRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExtAddressInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ExtAddressInfo`.
     */
    ExtAddressInfo.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, ExtAddressInfo);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ExtAddressInfo.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ExtAddressInfo.
     */
    ExtAddressInfo._entityName = 'ExtAddressInfo';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ExtAddressInfo.
     */
    ExtAddressInfo._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    ExtAddressInfo._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ExtAddressInfo;
}(core_1.Entity));
exports.ExtAddressInfo = ExtAddressInfo;
var PicklistOption_1 = require("./PicklistOption");
(function (ExtAddressInfo) {
    /**
     * Static representation of the [[address1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtAddressInfo.ADDRESS_1 = new core_1.StringField('address1', ExtAddressInfo, 'Edm.String');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtAddressInfo.ADDRESS_2 = new core_1.StringField('address2', ExtAddressInfo, 'Edm.String');
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtAddressInfo.ADDRESS_ID = new core_1.BigNumberField('addressId', ExtAddressInfo, 'Edm.Int64');
    /**
     * Static representation of the [[addressType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtAddressInfo.ADDRESS_TYPE = new core_1.StringField('addressType', ExtAddressInfo, 'Edm.String');
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtAddressInfo.CITY = new core_1.StringField('city', ExtAddressInfo, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtAddressInfo.COUNTRY = new core_1.StringField('country', ExtAddressInfo, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtAddressInfo.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', ExtAddressInfo, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[province]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtAddressInfo.PROVINCE = new core_1.StringField('province', ExtAddressInfo, 'Edm.String');
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtAddressInfo.STATE = new core_1.StringField('state', ExtAddressInfo, 'Edm.String');
    /**
     * Static representation of the [[zipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtAddressInfo.ZIP_CODE = new core_1.StringField('zipCode', ExtAddressInfo, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[addressTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtAddressInfo.ADDRESS_TYPE_NAV = new core_1.OneToOneLink('addressTypeNav', ExtAddressInfo, PicklistOption_1.PicklistOption);
    /**
     * All fields of the ExtAddressInfo entity.
     */
    ExtAddressInfo._allFields = [
        ExtAddressInfo.ADDRESS_1,
        ExtAddressInfo.ADDRESS_2,
        ExtAddressInfo.ADDRESS_ID,
        ExtAddressInfo.ADDRESS_TYPE,
        ExtAddressInfo.CITY,
        ExtAddressInfo.COUNTRY,
        ExtAddressInfo.LAST_MODIFIED_DATE_TIME,
        ExtAddressInfo.PROVINCE,
        ExtAddressInfo.STATE,
        ExtAddressInfo.ZIP_CODE,
        ExtAddressInfo.ADDRESS_TYPE_NAV
    ];
    /**
     * All fields selector.
     */
    ExtAddressInfo.ALL_FIELDS = new core_1.AllFields('*', ExtAddressInfo);
    /**
     * All key fields of the ExtAddressInfo entity.
     */
    ExtAddressInfo._keyFields = [ExtAddressInfo.ADDRESS_ID];
    /**
     * Mapping of all key field names to the respective static field property ExtAddressInfo.
     */
    ExtAddressInfo._keys = ExtAddressInfo._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ExtAddressInfo = exports.ExtAddressInfo || (exports.ExtAddressInfo = {}));
exports.ExtAddressInfo = ExtAddressInfo;
//# sourceMappingURL=ExtAddressInfo.js.map