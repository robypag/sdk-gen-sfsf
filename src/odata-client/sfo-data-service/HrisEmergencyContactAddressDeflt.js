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
var HrisEmergencyContactAddressDefltRequestBuilder_1 = require("./HrisEmergencyContactAddressDefltRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "HrisEmergencyContactAddressDEFLT" of service "SFOData".
 */
var HrisEmergencyContactAddressDeflt = /** @class */ (function (_super) {
    __extends(HrisEmergencyContactAddressDeflt, _super);
    function HrisEmergencyContactAddressDeflt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `HrisEmergencyContactAddressDeflt`.
     * @returns A builder that constructs instances of entity type `HrisEmergencyContactAddressDeflt`.
     */
    HrisEmergencyContactAddressDeflt.builder = function () {
        return core_1.Entity.entityBuilder(HrisEmergencyContactAddressDeflt);
    };
    /**
     * Returns a request builder to construct requests for operations on the `HrisEmergencyContactAddressDeflt` entity type.
     * @returns A `HrisEmergencyContactAddressDeflt` request builder.
     */
    HrisEmergencyContactAddressDeflt.requestBuilder = function () {
        return new HrisEmergencyContactAddressDefltRequestBuilder_1.HrisEmergencyContactAddressDefltRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `HrisEmergencyContactAddressDeflt`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `HrisEmergencyContactAddressDeflt`.
     */
    HrisEmergencyContactAddressDeflt.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, HrisEmergencyContactAddressDeflt);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    HrisEmergencyContactAddressDeflt.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for HrisEmergencyContactAddressDeflt.
     */
    HrisEmergencyContactAddressDeflt._entityName = 'HrisEmergencyContactAddressDEFLT';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for HrisEmergencyContactAddressDeflt.
     */
    HrisEmergencyContactAddressDeflt._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    HrisEmergencyContactAddressDeflt._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return HrisEmergencyContactAddressDeflt;
}(core_1.Entity));
exports.HrisEmergencyContactAddressDeflt = HrisEmergencyContactAddressDeflt;
var PicklistOption_1 = require("./PicklistOption");
var Territory_1 = require("./Territory");
(function (HrisEmergencyContactAddressDeflt) {
    /**
     * Static representation of the [[address1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.ADDRESS_1 = new core_1.StringField('address1', HrisEmergencyContactAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[address10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.ADDRESS_10 = new core_1.StringField('address10', HrisEmergencyContactAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[address11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.ADDRESS_11 = new core_1.StringField('address11', HrisEmergencyContactAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[address12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.ADDRESS_12 = new core_1.StringField('address12', HrisEmergencyContactAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.ADDRESS_2 = new core_1.StringField('address2', HrisEmergencyContactAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[address3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.ADDRESS_3 = new core_1.StringField('address3', HrisEmergencyContactAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[address4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.ADDRESS_4 = new core_1.StringField('address4', HrisEmergencyContactAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[address5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.ADDRESS_5 = new core_1.StringField('address5', HrisEmergencyContactAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[address6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.ADDRESS_6 = new core_1.StringField('address6', HrisEmergencyContactAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[address7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.ADDRESS_7 = new core_1.StringField('address7', HrisEmergencyContactAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[address8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.ADDRESS_8 = new core_1.StringField('address8', HrisEmergencyContactAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[address9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.ADDRESS_9 = new core_1.StringField('address9', HrisEmergencyContactAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.ADDRESS_ID = new core_1.BigNumberField('addressId', HrisEmergencyContactAddressDeflt, 'Edm.Decimal');
    /**
     * Static representation of the [[addressType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.ADDRESS_TYPE = new core_1.StringField('addressType', HrisEmergencyContactAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.CITY = new core_1.StringField('city', HrisEmergencyContactAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.COUNTRY = new core_1.StringField('country', HrisEmergencyContactAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[county]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.COUNTY = new core_1.StringField('county', HrisEmergencyContactAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.CREATED_BY = new core_1.StringField('createdBy', HrisEmergencyContactAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', HrisEmergencyContactAddressDeflt, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.CREATED_ON = new core_1.DateField('createdOn', HrisEmergencyContactAddressDeflt, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.END_DATE = new core_1.DateField('endDate', HrisEmergencyContactAddressDeflt, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', HrisEmergencyContactAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', HrisEmergencyContactAddressDeflt, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', HrisEmergencyContactAddressDeflt, 'Edm.DateTime');
    /**
     * Static representation of the [[notes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.NOTES = new core_1.StringField('notes', HrisEmergencyContactAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[province]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.PROVINCE = new core_1.StringField('province', HrisEmergencyContactAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.START_DATE = new core_1.DateField('startDate', HrisEmergencyContactAddressDeflt, 'Edm.DateTime');
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.STATE = new core_1.StringField('state', HrisEmergencyContactAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[zipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.ZIP_CODE = new core_1.StringField('zipCode', HrisEmergencyContactAddressDeflt, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[address3Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.ADDRESS_3_NAV = new core_1.OneToOneLink('address3Nav', HrisEmergencyContactAddressDeflt, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[address4Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.ADDRESS_4_NAV = new core_1.OneToOneLink('address4Nav', HrisEmergencyContactAddressDeflt, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[address6Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.ADDRESS_6_NAV = new core_1.OneToOneLink('address6Nav', HrisEmergencyContactAddressDeflt, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[address7Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.ADDRESS_7_NAV = new core_1.OneToOneLink('address7Nav', HrisEmergencyContactAddressDeflt, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[address8Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.ADDRESS_8_NAV = new core_1.OneToOneLink('address8Nav', HrisEmergencyContactAddressDeflt, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', HrisEmergencyContactAddressDeflt, Territory_1.Territory);
    /**
     * Static representation of the one-to-one navigation property [[countyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.COUNTY_NAV = new core_1.OneToOneLink('countyNav', HrisEmergencyContactAddressDeflt, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[stateNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisEmergencyContactAddressDeflt.STATE_NAV = new core_1.OneToOneLink('stateNav', HrisEmergencyContactAddressDeflt, PicklistOption_1.PicklistOption);
    /**
     * All fields of the HrisEmergencyContactAddressDeflt entity.
     */
    HrisEmergencyContactAddressDeflt._allFields = [
        HrisEmergencyContactAddressDeflt.ADDRESS_1,
        HrisEmergencyContactAddressDeflt.ADDRESS_10,
        HrisEmergencyContactAddressDeflt.ADDRESS_11,
        HrisEmergencyContactAddressDeflt.ADDRESS_12,
        HrisEmergencyContactAddressDeflt.ADDRESS_2,
        HrisEmergencyContactAddressDeflt.ADDRESS_3,
        HrisEmergencyContactAddressDeflt.ADDRESS_4,
        HrisEmergencyContactAddressDeflt.ADDRESS_5,
        HrisEmergencyContactAddressDeflt.ADDRESS_6,
        HrisEmergencyContactAddressDeflt.ADDRESS_7,
        HrisEmergencyContactAddressDeflt.ADDRESS_8,
        HrisEmergencyContactAddressDeflt.ADDRESS_9,
        HrisEmergencyContactAddressDeflt.ADDRESS_ID,
        HrisEmergencyContactAddressDeflt.ADDRESS_TYPE,
        HrisEmergencyContactAddressDeflt.CITY,
        HrisEmergencyContactAddressDeflt.COUNTRY,
        HrisEmergencyContactAddressDeflt.COUNTY,
        HrisEmergencyContactAddressDeflt.CREATED_BY,
        HrisEmergencyContactAddressDeflt.CREATED_DATE_TIME,
        HrisEmergencyContactAddressDeflt.CREATED_ON,
        HrisEmergencyContactAddressDeflt.END_DATE,
        HrisEmergencyContactAddressDeflt.LAST_MODIFIED_BY,
        HrisEmergencyContactAddressDeflt.LAST_MODIFIED_DATE_TIME,
        HrisEmergencyContactAddressDeflt.LAST_MODIFIED_ON,
        HrisEmergencyContactAddressDeflt.NOTES,
        HrisEmergencyContactAddressDeflt.PROVINCE,
        HrisEmergencyContactAddressDeflt.START_DATE,
        HrisEmergencyContactAddressDeflt.STATE,
        HrisEmergencyContactAddressDeflt.ZIP_CODE,
        HrisEmergencyContactAddressDeflt.ADDRESS_3_NAV,
        HrisEmergencyContactAddressDeflt.ADDRESS_4_NAV,
        HrisEmergencyContactAddressDeflt.ADDRESS_6_NAV,
        HrisEmergencyContactAddressDeflt.ADDRESS_7_NAV,
        HrisEmergencyContactAddressDeflt.ADDRESS_8_NAV,
        HrisEmergencyContactAddressDeflt.COUNTRY_NAV,
        HrisEmergencyContactAddressDeflt.COUNTY_NAV,
        HrisEmergencyContactAddressDeflt.STATE_NAV
    ];
    /**
     * All fields selector.
     */
    HrisEmergencyContactAddressDeflt.ALL_FIELDS = new core_1.AllFields('*', HrisEmergencyContactAddressDeflt);
    /**
     * All key fields of the HrisEmergencyContactAddressDeflt entity.
     */
    HrisEmergencyContactAddressDeflt._keyFields = [HrisEmergencyContactAddressDeflt.ADDRESS_ID];
    /**
     * Mapping of all key field names to the respective static field property HrisEmergencyContactAddressDeflt.
     */
    HrisEmergencyContactAddressDeflt._keys = HrisEmergencyContactAddressDeflt._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(HrisEmergencyContactAddressDeflt = exports.HrisEmergencyContactAddressDeflt || (exports.HrisEmergencyContactAddressDeflt = {}));
exports.HrisEmergencyContactAddressDeflt = HrisEmergencyContactAddressDeflt;
//# sourceMappingURL=HrisEmergencyContactAddressDeflt.js.map