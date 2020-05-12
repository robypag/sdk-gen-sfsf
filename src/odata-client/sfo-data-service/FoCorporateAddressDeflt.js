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
var FoCorporateAddressDefltRequestBuilder_1 = require("./FoCorporateAddressDefltRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOCorporateAddressDEFLT" of service "SFOData".
 */
var FoCorporateAddressDeflt = /** @class */ (function (_super) {
    __extends(FoCorporateAddressDeflt, _super);
    function FoCorporateAddressDeflt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoCorporateAddressDeflt`.
     * @returns A builder that constructs instances of entity type `FoCorporateAddressDeflt`.
     */
    FoCorporateAddressDeflt.builder = function () {
        return core_1.Entity.entityBuilder(FoCorporateAddressDeflt);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoCorporateAddressDeflt` entity type.
     * @returns A `FoCorporateAddressDeflt` request builder.
     */
    FoCorporateAddressDeflt.requestBuilder = function () {
        return new FoCorporateAddressDefltRequestBuilder_1.FoCorporateAddressDefltRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoCorporateAddressDeflt`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoCorporateAddressDeflt`.
     */
    FoCorporateAddressDeflt.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoCorporateAddressDeflt);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoCorporateAddressDeflt.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoCorporateAddressDeflt.
     */
    FoCorporateAddressDeflt._entityName = 'FOCorporateAddressDEFLT';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoCorporateAddressDeflt.
     */
    FoCorporateAddressDeflt._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoCorporateAddressDeflt._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoCorporateAddressDeflt;
}(core_1.Entity));
exports.FoCorporateAddressDeflt = FoCorporateAddressDeflt;
var PicklistOption_1 = require("./PicklistOption");
(function (FoCorporateAddressDeflt) {
    /**
     * Static representation of the [[address1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.ADDRESS_1 = new core_1.StringField('address1', FoCorporateAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[address10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.ADDRESS_10 = new core_1.StringField('address10', FoCorporateAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[address11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.ADDRESS_11 = new core_1.StringField('address11', FoCorporateAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.ADDRESS_2 = new core_1.StringField('address2', FoCorporateAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[address3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.ADDRESS_3 = new core_1.StringField('address3', FoCorporateAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[address4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.ADDRESS_4 = new core_1.StringField('address4', FoCorporateAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[address5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.ADDRESS_5 = new core_1.StringField('address5', FoCorporateAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[address6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.ADDRESS_6 = new core_1.StringField('address6', FoCorporateAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[address7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.ADDRESS_7 = new core_1.StringField('address7', FoCorporateAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[address8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.ADDRESS_8 = new core_1.StringField('address8', FoCorporateAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[address9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.ADDRESS_9 = new core_1.StringField('address9', FoCorporateAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.ADDRESS_ID = new core_1.BigNumberField('addressId', FoCorporateAddressDeflt, 'Edm.Decimal');
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.CITY = new core_1.StringField('city', FoCorporateAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.COUNTRY = new core_1.StringField('country', FoCorporateAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[county]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.COUNTY = new core_1.StringField('county', FoCorporateAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.CREATED_BY = new core_1.StringField('createdBy', FoCorporateAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoCorporateAddressDeflt, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.CREATED_ON = new core_1.DateField('createdOn', FoCorporateAddressDeflt, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.END_DATE = new core_1.DateField('endDate', FoCorporateAddressDeflt, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoCorporateAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoCorporateAddressDeflt, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoCorporateAddressDeflt, 'Edm.DateTime');
    /**
     * Static representation of the [[province]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.PROVINCE = new core_1.StringField('province', FoCorporateAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.START_DATE = new core_1.DateField('startDate', FoCorporateAddressDeflt, 'Edm.DateTime');
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.STATE = new core_1.StringField('state', FoCorporateAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[zipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.ZIP_CODE = new core_1.StringField('zipCode', FoCorporateAddressDeflt, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[address3Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.ADDRESS_3_NAV = new core_1.OneToOneLink('address3Nav', FoCorporateAddressDeflt, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[address4Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.ADDRESS_4_NAV = new core_1.OneToOneLink('address4Nav', FoCorporateAddressDeflt, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[address5Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.ADDRESS_5_NAV = new core_1.OneToOneLink('address5Nav', FoCorporateAddressDeflt, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[address6Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.ADDRESS_6_NAV = new core_1.OneToOneLink('address6Nav', FoCorporateAddressDeflt, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[address7Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.ADDRESS_7_NAV = new core_1.OneToOneLink('address7Nav', FoCorporateAddressDeflt, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[cityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.CITY_NAV = new core_1.OneToOneLink('cityNav', FoCorporateAddressDeflt, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', FoCorporateAddressDeflt, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[countyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.COUNTY_NAV = new core_1.OneToOneLink('countyNav', FoCorporateAddressDeflt, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[provinceNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.PROVINCE_NAV = new core_1.OneToOneLink('provinceNav', FoCorporateAddressDeflt, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[stateNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoCorporateAddressDeflt.STATE_NAV = new core_1.OneToOneLink('stateNav', FoCorporateAddressDeflt, PicklistOption_1.PicklistOption);
    /**
     * All fields of the FoCorporateAddressDeflt entity.
     */
    FoCorporateAddressDeflt._allFields = [
        FoCorporateAddressDeflt.ADDRESS_1,
        FoCorporateAddressDeflt.ADDRESS_10,
        FoCorporateAddressDeflt.ADDRESS_11,
        FoCorporateAddressDeflt.ADDRESS_2,
        FoCorporateAddressDeflt.ADDRESS_3,
        FoCorporateAddressDeflt.ADDRESS_4,
        FoCorporateAddressDeflt.ADDRESS_5,
        FoCorporateAddressDeflt.ADDRESS_6,
        FoCorporateAddressDeflt.ADDRESS_7,
        FoCorporateAddressDeflt.ADDRESS_8,
        FoCorporateAddressDeflt.ADDRESS_9,
        FoCorporateAddressDeflt.ADDRESS_ID,
        FoCorporateAddressDeflt.CITY,
        FoCorporateAddressDeflt.COUNTRY,
        FoCorporateAddressDeflt.COUNTY,
        FoCorporateAddressDeflt.CREATED_BY,
        FoCorporateAddressDeflt.CREATED_DATE_TIME,
        FoCorporateAddressDeflt.CREATED_ON,
        FoCorporateAddressDeflt.END_DATE,
        FoCorporateAddressDeflt.LAST_MODIFIED_BY,
        FoCorporateAddressDeflt.LAST_MODIFIED_DATE_TIME,
        FoCorporateAddressDeflt.LAST_MODIFIED_ON,
        FoCorporateAddressDeflt.PROVINCE,
        FoCorporateAddressDeflt.START_DATE,
        FoCorporateAddressDeflt.STATE,
        FoCorporateAddressDeflt.ZIP_CODE,
        FoCorporateAddressDeflt.ADDRESS_3_NAV,
        FoCorporateAddressDeflt.ADDRESS_4_NAV,
        FoCorporateAddressDeflt.ADDRESS_5_NAV,
        FoCorporateAddressDeflt.ADDRESS_6_NAV,
        FoCorporateAddressDeflt.ADDRESS_7_NAV,
        FoCorporateAddressDeflt.CITY_NAV,
        FoCorporateAddressDeflt.COUNTRY_NAV,
        FoCorporateAddressDeflt.COUNTY_NAV,
        FoCorporateAddressDeflt.PROVINCE_NAV,
        FoCorporateAddressDeflt.STATE_NAV
    ];
    /**
     * All fields selector.
     */
    FoCorporateAddressDeflt.ALL_FIELDS = new core_1.AllFields('*', FoCorporateAddressDeflt);
    /**
     * All key fields of the FoCorporateAddressDeflt entity.
     */
    FoCorporateAddressDeflt._keyFields = [FoCorporateAddressDeflt.ADDRESS_ID];
    /**
     * Mapping of all key field names to the respective static field property FoCorporateAddressDeflt.
     */
    FoCorporateAddressDeflt._keys = FoCorporateAddressDeflt._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoCorporateAddressDeflt = exports.FoCorporateAddressDeflt || (exports.FoCorporateAddressDeflt = {}));
exports.FoCorporateAddressDeflt = FoCorporateAddressDeflt;
//# sourceMappingURL=FoCorporateAddressDeflt.js.map