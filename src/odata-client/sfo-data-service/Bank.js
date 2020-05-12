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
var BankRequestBuilder_1 = require("./BankRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Bank" of service "SFOData".
 */
var Bank = /** @class */ (function (_super) {
    __extends(Bank, _super);
    function Bank() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Bank`.
     * @returns A builder that constructs instances of entity type `Bank`.
     */
    Bank.builder = function () {
        return core_1.Entity.entityBuilder(Bank);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Bank` entity type.
     * @returns A `Bank` request builder.
     */
    Bank.requestBuilder = function () {
        return new BankRequestBuilder_1.BankRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Bank`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Bank`.
     */
    Bank.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Bank);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Bank.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Bank.
     */
    Bank._entityName = 'Bank';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Bank.
     */
    Bank._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Bank._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Bank;
}(core_1.Entity));
exports.Bank = Bank;
var Country_1 = require("./Country");
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (Bank) {
    /**
     * Static representation of the [[bankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Bank.BANK_BRANCH = new core_1.StringField('bankBranch', Bank, 'Edm.String');
    /**
     * Static representation of the [[bankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Bank.BANK_COUNTRY = new core_1.StringField('bankCountry', Bank, 'Edm.String');
    /**
     * Static representation of the [[bankName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Bank.BANK_NAME = new core_1.StringField('bankName', Bank, 'Edm.String');
    /**
     * Static representation of the [[businessIdentifierCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Bank.BUSINESS_IDENTIFIER_CODE = new core_1.StringField('businessIdentifierCode', Bank, 'Edm.String');
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Bank.CITY = new core_1.StringField('city', Bank, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Bank.CREATED_BY = new core_1.StringField('createdBy', Bank, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Bank.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', Bank, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[effectiveStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Bank.EFFECTIVE_STATUS = new core_1.StringField('effectiveStatus', Bank, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Bank.EXTERNAL_CODE = new core_1.StringField('externalCode', Bank, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Bank.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', Bank, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Bank.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', Bank, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Bank.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', Bank, 'Edm.String');
    /**
     * Static representation of the [[postalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Bank.POSTAL_CODE = new core_1.StringField('postalCode', Bank, 'Edm.String');
    /**
     * Static representation of the [[routingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Bank.ROUTING_NUMBER = new core_1.StringField('routingNumber', Bank, 'Edm.String');
    /**
     * Static representation of the [[street]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Bank.STREET = new core_1.StringField('street', Bank, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[bankCountryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Bank.BANK_COUNTRY_NAV = new core_1.Link('bankCountryNav', Bank, Country_1.Country);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Bank.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', Bank, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Bank.EFFECTIVE_STATUS_NAV = new core_1.OneToOneLink('effectiveStatusNav', Bank, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Bank.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', Bank, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Bank.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', Bank, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Bank.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', Bank, WfRequest_1.WfRequest);
    /**
     * All fields of the Bank entity.
     */
    Bank._allFields = [
        Bank.BANK_BRANCH,
        Bank.BANK_COUNTRY,
        Bank.BANK_NAME,
        Bank.BUSINESS_IDENTIFIER_CODE,
        Bank.CITY,
        Bank.CREATED_BY,
        Bank.CREATED_DATE_TIME,
        Bank.EFFECTIVE_STATUS,
        Bank.EXTERNAL_CODE,
        Bank.LAST_MODIFIED_BY,
        Bank.LAST_MODIFIED_DATE_TIME,
        Bank.MDF_SYSTEM_RECORD_STATUS,
        Bank.POSTAL_CODE,
        Bank.ROUTING_NUMBER,
        Bank.STREET,
        Bank.BANK_COUNTRY_NAV,
        Bank.CREATED_BY_NAV,
        Bank.EFFECTIVE_STATUS_NAV,
        Bank.LAST_MODIFIED_BY_NAV,
        Bank.MDF_SYSTEM_RECORD_STATUS_NAV,
        Bank.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    Bank.ALL_FIELDS = new core_1.AllFields('*', Bank);
    /**
     * All key fields of the Bank entity.
     */
    Bank._keyFields = [Bank.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property Bank.
     */
    Bank._keys = Bank._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Bank = exports.Bank || (exports.Bank = {}));
exports.Bank = Bank;
//# sourceMappingURL=Bank.js.map