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
var PerGlobalInfoCanRequestBuilder_1 = require("./PerGlobalInfoCanRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PerGlobalInfoCAN" of service "SFOData".
 */
var PerGlobalInfoCan = /** @class */ (function (_super) {
    __extends(PerGlobalInfoCan, _super);
    function PerGlobalInfoCan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerGlobalInfoCan`.
     * @returns A builder that constructs instances of entity type `PerGlobalInfoCan`.
     */
    PerGlobalInfoCan.builder = function () {
        return core_1.Entity.entityBuilder(PerGlobalInfoCan);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerGlobalInfoCan` entity type.
     * @returns A `PerGlobalInfoCan` request builder.
     */
    PerGlobalInfoCan.requestBuilder = function () {
        return new PerGlobalInfoCanRequestBuilder_1.PerGlobalInfoCanRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoCan`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerGlobalInfoCan`.
     */
    PerGlobalInfoCan.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PerGlobalInfoCan);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerGlobalInfoCan.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerGlobalInfoCan.
     */
    PerGlobalInfoCan._entityName = 'PerGlobalInfoCAN';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerGlobalInfoCan.
     */
    PerGlobalInfoCan._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerGlobalInfoCan._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PerGlobalInfoCan;
}(core_1.Entity));
exports.PerGlobalInfoCan = PerGlobalInfoCan;
var Territory_1 = require("./Territory");
var PicklistOption_1 = require("./PicklistOption");
var PerPerson_1 = require("./PerPerson");
(function (PerGlobalInfoCan) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.COUNTRY = new core_1.StringField('country', PerGlobalInfoCan, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.CREATED_BY = new core_1.StringField('createdBy', PerGlobalInfoCan, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PerGlobalInfoCan, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.CREATED_ON = new core_1.DateField('createdOn', PerGlobalInfoCan, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.END_DATE = new core_1.DateField('endDate', PerGlobalInfoCan, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_DATE_1 = new core_1.DateField('genericDate1', PerGlobalInfoCan, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_DATE_2 = new core_1.DateField('genericDate2', PerGlobalInfoCan, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_DATE_3 = new core_1.DateField('genericDate3', PerGlobalInfoCan, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_DATE_4 = new core_1.DateField('genericDate4', PerGlobalInfoCan, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_DATE_5 = new core_1.DateField('genericDate5', PerGlobalInfoCan, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_DATE_6 = new core_1.DateField('genericDate6', PerGlobalInfoCan, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_DATE_7 = new core_1.DateField('genericDate7', PerGlobalInfoCan, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_DATE_8 = new core_1.DateField('genericDate8', PerGlobalInfoCan, 'Edm.DateTime');
    /**
     * Static representation of the [[genericNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_NUMBER_1 = new core_1.BigNumberField('genericNumber1', PerGlobalInfoCan, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_NUMBER_10 = new core_1.BigNumberField('genericNumber10', PerGlobalInfoCan, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_NUMBER_11 = new core_1.BigNumberField('genericNumber11', PerGlobalInfoCan, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_NUMBER_12 = new core_1.BigNumberField('genericNumber12', PerGlobalInfoCan, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_NUMBER_13 = new core_1.BigNumberField('genericNumber13', PerGlobalInfoCan, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_NUMBER_2 = new core_1.BigNumberField('genericNumber2', PerGlobalInfoCan, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_NUMBER_3 = new core_1.BigNumberField('genericNumber3', PerGlobalInfoCan, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_NUMBER_4 = new core_1.BigNumberField('genericNumber4', PerGlobalInfoCan, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_NUMBER_5 = new core_1.BigNumberField('genericNumber5', PerGlobalInfoCan, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_NUMBER_6 = new core_1.BigNumberField('genericNumber6', PerGlobalInfoCan, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_NUMBER_7 = new core_1.BigNumberField('genericNumber7', PerGlobalInfoCan, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_NUMBER_8 = new core_1.BigNumberField('genericNumber8', PerGlobalInfoCan, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_NUMBER_9 = new core_1.BigNumberField('genericNumber9', PerGlobalInfoCan, 'Edm.Int64');
    /**
     * Static representation of the [[genericString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_STRING_1 = new core_1.StringField('genericString1', PerGlobalInfoCan, 'Edm.String');
    /**
     * Static representation of the [[genericString10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_STRING_10 = new core_1.StringField('genericString10', PerGlobalInfoCan, 'Edm.String');
    /**
     * Static representation of the [[genericString11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_STRING_11 = new core_1.StringField('genericString11', PerGlobalInfoCan, 'Edm.String');
    /**
     * Static representation of the [[genericString12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_STRING_12 = new core_1.StringField('genericString12', PerGlobalInfoCan, 'Edm.String');
    /**
     * Static representation of the [[genericString13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_STRING_13 = new core_1.StringField('genericString13', PerGlobalInfoCan, 'Edm.String');
    /**
     * Static representation of the [[genericString14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_STRING_14 = new core_1.StringField('genericString14', PerGlobalInfoCan, 'Edm.String');
    /**
     * Static representation of the [[genericString15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_STRING_15 = new core_1.StringField('genericString15', PerGlobalInfoCan, 'Edm.String');
    /**
     * Static representation of the [[genericString16]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_STRING_16 = new core_1.StringField('genericString16', PerGlobalInfoCan, 'Edm.String');
    /**
     * Static representation of the [[genericString17]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_STRING_17 = new core_1.StringField('genericString17', PerGlobalInfoCan, 'Edm.String');
    /**
     * Static representation of the [[genericString18]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_STRING_18 = new core_1.StringField('genericString18', PerGlobalInfoCan, 'Edm.String');
    /**
     * Static representation of the [[genericString19]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_STRING_19 = new core_1.StringField('genericString19', PerGlobalInfoCan, 'Edm.String');
    /**
     * Static representation of the [[genericString2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_STRING_2 = new core_1.StringField('genericString2', PerGlobalInfoCan, 'Edm.String');
    /**
     * Static representation of the [[genericString20]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_STRING_20 = new core_1.StringField('genericString20', PerGlobalInfoCan, 'Edm.String');
    /**
     * Static representation of the [[genericString3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_STRING_3 = new core_1.StringField('genericString3', PerGlobalInfoCan, 'Edm.String');
    /**
     * Static representation of the [[genericString4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_STRING_4 = new core_1.StringField('genericString4', PerGlobalInfoCan, 'Edm.String');
    /**
     * Static representation of the [[genericString5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_STRING_5 = new core_1.StringField('genericString5', PerGlobalInfoCan, 'Edm.String');
    /**
     * Static representation of the [[genericString6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_STRING_6 = new core_1.StringField('genericString6', PerGlobalInfoCan, 'Edm.String');
    /**
     * Static representation of the [[genericString7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_STRING_7 = new core_1.StringField('genericString7', PerGlobalInfoCan, 'Edm.String');
    /**
     * Static representation of the [[genericString8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_STRING_8 = new core_1.StringField('genericString8', PerGlobalInfoCan, 'Edm.String');
    /**
     * Static representation of the [[genericString9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_STRING_9 = new core_1.StringField('genericString9', PerGlobalInfoCan, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PerGlobalInfoCan, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PerGlobalInfoCan, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', PerGlobalInfoCan, 'Edm.DateTime');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.OPERATION = new core_1.StringField('operation', PerGlobalInfoCan, 'Edm.String');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.PERSON_ID_EXTERNAL = new core_1.StringField('personIdExternal', PerGlobalInfoCan, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.START_DATE = new core_1.DateField('startDate', PerGlobalInfoCan, 'Edm.DateTime');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', PerGlobalInfoCan, Territory_1.Territory);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_NUMBER_1_NAV = new core_1.OneToOneLink('genericNumber1Nav', PerGlobalInfoCan, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber2Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_NUMBER_2_NAV = new core_1.OneToOneLink('genericNumber2Nav', PerGlobalInfoCan, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber3Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_NUMBER_3_NAV = new core_1.OneToOneLink('genericNumber3Nav', PerGlobalInfoCan, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber4Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_NUMBER_4_NAV = new core_1.OneToOneLink('genericNumber4Nav', PerGlobalInfoCan, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber5Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_NUMBER_5_NAV = new core_1.OneToOneLink('genericNumber5Nav', PerGlobalInfoCan, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber9Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_NUMBER_9_NAV = new core_1.OneToOneLink('genericNumber9Nav', PerGlobalInfoCan, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString10Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_STRING_10_NAV = new core_1.OneToOneLink('genericString10Nav', PerGlobalInfoCan, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString11Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_STRING_11_NAV = new core_1.OneToOneLink('genericString11Nav', PerGlobalInfoCan, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString12Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_STRING_12_NAV = new core_1.OneToOneLink('genericString12Nav', PerGlobalInfoCan, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString13Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_STRING_13_NAV = new core_1.OneToOneLink('genericString13Nav', PerGlobalInfoCan, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString14Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_STRING_14_NAV = new core_1.OneToOneLink('genericString14Nav', PerGlobalInfoCan, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString16Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_STRING_16_NAV = new core_1.OneToOneLink('genericString16Nav', PerGlobalInfoCan, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_STRING_2_NAV = new core_1.OneToOneLink('genericString2Nav', PerGlobalInfoCan, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString6Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_STRING_6_NAV = new core_1.OneToOneLink('genericString6Nav', PerGlobalInfoCan, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString7Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.GENERIC_STRING_7_NAV = new core_1.OneToOneLink('genericString7Nav', PerGlobalInfoCan, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCan.PERSON_NAV = new core_1.OneToOneLink('personNav', PerGlobalInfoCan, PerPerson_1.PerPerson);
    /**
     * All fields of the PerGlobalInfoCan entity.
     */
    PerGlobalInfoCan._allFields = [
        PerGlobalInfoCan.COUNTRY,
        PerGlobalInfoCan.CREATED_BY,
        PerGlobalInfoCan.CREATED_DATE_TIME,
        PerGlobalInfoCan.CREATED_ON,
        PerGlobalInfoCan.END_DATE,
        PerGlobalInfoCan.GENERIC_DATE_1,
        PerGlobalInfoCan.GENERIC_DATE_2,
        PerGlobalInfoCan.GENERIC_DATE_3,
        PerGlobalInfoCan.GENERIC_DATE_4,
        PerGlobalInfoCan.GENERIC_DATE_5,
        PerGlobalInfoCan.GENERIC_DATE_6,
        PerGlobalInfoCan.GENERIC_DATE_7,
        PerGlobalInfoCan.GENERIC_DATE_8,
        PerGlobalInfoCan.GENERIC_NUMBER_1,
        PerGlobalInfoCan.GENERIC_NUMBER_10,
        PerGlobalInfoCan.GENERIC_NUMBER_11,
        PerGlobalInfoCan.GENERIC_NUMBER_12,
        PerGlobalInfoCan.GENERIC_NUMBER_13,
        PerGlobalInfoCan.GENERIC_NUMBER_2,
        PerGlobalInfoCan.GENERIC_NUMBER_3,
        PerGlobalInfoCan.GENERIC_NUMBER_4,
        PerGlobalInfoCan.GENERIC_NUMBER_5,
        PerGlobalInfoCan.GENERIC_NUMBER_6,
        PerGlobalInfoCan.GENERIC_NUMBER_7,
        PerGlobalInfoCan.GENERIC_NUMBER_8,
        PerGlobalInfoCan.GENERIC_NUMBER_9,
        PerGlobalInfoCan.GENERIC_STRING_1,
        PerGlobalInfoCan.GENERIC_STRING_10,
        PerGlobalInfoCan.GENERIC_STRING_11,
        PerGlobalInfoCan.GENERIC_STRING_12,
        PerGlobalInfoCan.GENERIC_STRING_13,
        PerGlobalInfoCan.GENERIC_STRING_14,
        PerGlobalInfoCan.GENERIC_STRING_15,
        PerGlobalInfoCan.GENERIC_STRING_16,
        PerGlobalInfoCan.GENERIC_STRING_17,
        PerGlobalInfoCan.GENERIC_STRING_18,
        PerGlobalInfoCan.GENERIC_STRING_19,
        PerGlobalInfoCan.GENERIC_STRING_2,
        PerGlobalInfoCan.GENERIC_STRING_20,
        PerGlobalInfoCan.GENERIC_STRING_3,
        PerGlobalInfoCan.GENERIC_STRING_4,
        PerGlobalInfoCan.GENERIC_STRING_5,
        PerGlobalInfoCan.GENERIC_STRING_6,
        PerGlobalInfoCan.GENERIC_STRING_7,
        PerGlobalInfoCan.GENERIC_STRING_8,
        PerGlobalInfoCan.GENERIC_STRING_9,
        PerGlobalInfoCan.LAST_MODIFIED_BY,
        PerGlobalInfoCan.LAST_MODIFIED_DATE_TIME,
        PerGlobalInfoCan.LAST_MODIFIED_ON,
        PerGlobalInfoCan.OPERATION,
        PerGlobalInfoCan.PERSON_ID_EXTERNAL,
        PerGlobalInfoCan.START_DATE,
        PerGlobalInfoCan.COUNTRY_NAV,
        PerGlobalInfoCan.GENERIC_NUMBER_1_NAV,
        PerGlobalInfoCan.GENERIC_NUMBER_2_NAV,
        PerGlobalInfoCan.GENERIC_NUMBER_3_NAV,
        PerGlobalInfoCan.GENERIC_NUMBER_4_NAV,
        PerGlobalInfoCan.GENERIC_NUMBER_5_NAV,
        PerGlobalInfoCan.GENERIC_NUMBER_9_NAV,
        PerGlobalInfoCan.GENERIC_STRING_10_NAV,
        PerGlobalInfoCan.GENERIC_STRING_11_NAV,
        PerGlobalInfoCan.GENERIC_STRING_12_NAV,
        PerGlobalInfoCan.GENERIC_STRING_13_NAV,
        PerGlobalInfoCan.GENERIC_STRING_14_NAV,
        PerGlobalInfoCan.GENERIC_STRING_16_NAV,
        PerGlobalInfoCan.GENERIC_STRING_2_NAV,
        PerGlobalInfoCan.GENERIC_STRING_6_NAV,
        PerGlobalInfoCan.GENERIC_STRING_7_NAV,
        PerGlobalInfoCan.PERSON_NAV
    ];
    /**
     * All fields selector.
     */
    PerGlobalInfoCan.ALL_FIELDS = new core_1.AllFields('*', PerGlobalInfoCan);
    /**
     * All key fields of the PerGlobalInfoCan entity.
     */
    PerGlobalInfoCan._keyFields = [PerGlobalInfoCan.COUNTRY, PerGlobalInfoCan.PERSON_ID_EXTERNAL, PerGlobalInfoCan.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property PerGlobalInfoCan.
     */
    PerGlobalInfoCan._keys = PerGlobalInfoCan._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerGlobalInfoCan = exports.PerGlobalInfoCan || (exports.PerGlobalInfoCan = {}));
exports.PerGlobalInfoCan = PerGlobalInfoCan;
//# sourceMappingURL=PerGlobalInfoCan.js.map