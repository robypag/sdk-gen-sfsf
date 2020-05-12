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
var PerGlobalInfoCheRequestBuilder_1 = require("./PerGlobalInfoCheRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PerGlobalInfoCHE" of service "SFOData".
 */
var PerGlobalInfoChe = /** @class */ (function (_super) {
    __extends(PerGlobalInfoChe, _super);
    function PerGlobalInfoChe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerGlobalInfoChe`.
     * @returns A builder that constructs instances of entity type `PerGlobalInfoChe`.
     */
    PerGlobalInfoChe.builder = function () {
        return core_1.Entity.entityBuilder(PerGlobalInfoChe);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerGlobalInfoChe` entity type.
     * @returns A `PerGlobalInfoChe` request builder.
     */
    PerGlobalInfoChe.requestBuilder = function () {
        return new PerGlobalInfoCheRequestBuilder_1.PerGlobalInfoCheRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoChe`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerGlobalInfoChe`.
     */
    PerGlobalInfoChe.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PerGlobalInfoChe);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerGlobalInfoChe.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerGlobalInfoChe.
     */
    PerGlobalInfoChe._entityName = 'PerGlobalInfoCHE';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerGlobalInfoChe.
     */
    PerGlobalInfoChe._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerGlobalInfoChe._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PerGlobalInfoChe;
}(core_1.Entity));
exports.PerGlobalInfoChe = PerGlobalInfoChe;
var Territory_1 = require("./Territory");
var PicklistOption_1 = require("./PicklistOption");
var PerPerson_1 = require("./PerPerson");
(function (PerGlobalInfoChe) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.COUNTRY = new core_1.StringField('country', PerGlobalInfoChe, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.CREATED_BY = new core_1.StringField('createdBy', PerGlobalInfoChe, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PerGlobalInfoChe, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.CREATED_ON = new core_1.DateField('createdOn', PerGlobalInfoChe, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.END_DATE = new core_1.DateField('endDate', PerGlobalInfoChe, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_DATE_1 = new core_1.DateField('genericDate1', PerGlobalInfoChe, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_DATE_2 = new core_1.DateField('genericDate2', PerGlobalInfoChe, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_DATE_3 = new core_1.DateField('genericDate3', PerGlobalInfoChe, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_DATE_4 = new core_1.DateField('genericDate4', PerGlobalInfoChe, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_DATE_5 = new core_1.DateField('genericDate5', PerGlobalInfoChe, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_DATE_6 = new core_1.DateField('genericDate6', PerGlobalInfoChe, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_DATE_7 = new core_1.DateField('genericDate7', PerGlobalInfoChe, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_DATE_8 = new core_1.DateField('genericDate8', PerGlobalInfoChe, 'Edm.DateTime');
    /**
     * Static representation of the [[genericNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_NUMBER_1 = new core_1.BigNumberField('genericNumber1', PerGlobalInfoChe, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_NUMBER_10 = new core_1.BigNumberField('genericNumber10', PerGlobalInfoChe, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_NUMBER_11 = new core_1.BigNumberField('genericNumber11', PerGlobalInfoChe, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_NUMBER_12 = new core_1.BigNumberField('genericNumber12', PerGlobalInfoChe, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_NUMBER_13 = new core_1.BigNumberField('genericNumber13', PerGlobalInfoChe, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_NUMBER_2 = new core_1.BigNumberField('genericNumber2', PerGlobalInfoChe, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_NUMBER_3 = new core_1.BigNumberField('genericNumber3', PerGlobalInfoChe, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_NUMBER_4 = new core_1.BigNumberField('genericNumber4', PerGlobalInfoChe, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_NUMBER_5 = new core_1.BigNumberField('genericNumber5', PerGlobalInfoChe, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_NUMBER_6 = new core_1.BigNumberField('genericNumber6', PerGlobalInfoChe, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_NUMBER_7 = new core_1.BigNumberField('genericNumber7', PerGlobalInfoChe, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_NUMBER_8 = new core_1.BigNumberField('genericNumber8', PerGlobalInfoChe, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_NUMBER_9 = new core_1.BigNumberField('genericNumber9', PerGlobalInfoChe, 'Edm.Int64');
    /**
     * Static representation of the [[genericString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_STRING_1 = new core_1.StringField('genericString1', PerGlobalInfoChe, 'Edm.String');
    /**
     * Static representation of the [[genericString10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_STRING_10 = new core_1.StringField('genericString10', PerGlobalInfoChe, 'Edm.String');
    /**
     * Static representation of the [[genericString11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_STRING_11 = new core_1.StringField('genericString11', PerGlobalInfoChe, 'Edm.String');
    /**
     * Static representation of the [[genericString12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_STRING_12 = new core_1.StringField('genericString12', PerGlobalInfoChe, 'Edm.String');
    /**
     * Static representation of the [[genericString13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_STRING_13 = new core_1.StringField('genericString13', PerGlobalInfoChe, 'Edm.String');
    /**
     * Static representation of the [[genericString14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_STRING_14 = new core_1.StringField('genericString14', PerGlobalInfoChe, 'Edm.String');
    /**
     * Static representation of the [[genericString15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_STRING_15 = new core_1.StringField('genericString15', PerGlobalInfoChe, 'Edm.String');
    /**
     * Static representation of the [[genericString16]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_STRING_16 = new core_1.StringField('genericString16', PerGlobalInfoChe, 'Edm.String');
    /**
     * Static representation of the [[genericString17]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_STRING_17 = new core_1.StringField('genericString17', PerGlobalInfoChe, 'Edm.String');
    /**
     * Static representation of the [[genericString18]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_STRING_18 = new core_1.StringField('genericString18', PerGlobalInfoChe, 'Edm.String');
    /**
     * Static representation of the [[genericString19]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_STRING_19 = new core_1.StringField('genericString19', PerGlobalInfoChe, 'Edm.String');
    /**
     * Static representation of the [[genericString2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_STRING_2 = new core_1.StringField('genericString2', PerGlobalInfoChe, 'Edm.String');
    /**
     * Static representation of the [[genericString20]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_STRING_20 = new core_1.StringField('genericString20', PerGlobalInfoChe, 'Edm.String');
    /**
     * Static representation of the [[genericString3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_STRING_3 = new core_1.StringField('genericString3', PerGlobalInfoChe, 'Edm.String');
    /**
     * Static representation of the [[genericString4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_STRING_4 = new core_1.StringField('genericString4', PerGlobalInfoChe, 'Edm.String');
    /**
     * Static representation of the [[genericString5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_STRING_5 = new core_1.StringField('genericString5', PerGlobalInfoChe, 'Edm.String');
    /**
     * Static representation of the [[genericString6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_STRING_6 = new core_1.StringField('genericString6', PerGlobalInfoChe, 'Edm.String');
    /**
     * Static representation of the [[genericString7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_STRING_7 = new core_1.StringField('genericString7', PerGlobalInfoChe, 'Edm.String');
    /**
     * Static representation of the [[genericString8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_STRING_8 = new core_1.StringField('genericString8', PerGlobalInfoChe, 'Edm.String');
    /**
     * Static representation of the [[genericString9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_STRING_9 = new core_1.StringField('genericString9', PerGlobalInfoChe, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PerGlobalInfoChe, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PerGlobalInfoChe, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', PerGlobalInfoChe, 'Edm.DateTime');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.OPERATION = new core_1.StringField('operation', PerGlobalInfoChe, 'Edm.String');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.PERSON_ID_EXTERNAL = new core_1.StringField('personIdExternal', PerGlobalInfoChe, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.START_DATE = new core_1.DateField('startDate', PerGlobalInfoChe, 'Edm.DateTime');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', PerGlobalInfoChe, Territory_1.Territory);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber3Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_NUMBER_3_NAV = new core_1.OneToOneLink('genericNumber3Nav', PerGlobalInfoChe, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber4Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_NUMBER_4_NAV = new core_1.OneToOneLink('genericNumber4Nav', PerGlobalInfoChe, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString11Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_STRING_11_NAV = new core_1.OneToOneLink('genericString11Nav', PerGlobalInfoChe, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString12Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_STRING_12_NAV = new core_1.OneToOneLink('genericString12Nav', PerGlobalInfoChe, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString13Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_STRING_13_NAV = new core_1.OneToOneLink('genericString13Nav', PerGlobalInfoChe, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_STRING_1_NAV = new core_1.OneToOneLink('genericString1Nav', PerGlobalInfoChe, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_STRING_2_NAV = new core_1.OneToOneLink('genericString2Nav', PerGlobalInfoChe, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString3Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_STRING_3_NAV = new core_1.OneToOneLink('genericString3Nav', PerGlobalInfoChe, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString6Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_STRING_6_NAV = new core_1.OneToOneLink('genericString6Nav', PerGlobalInfoChe, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString7Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_STRING_7_NAV = new core_1.OneToOneLink('genericString7Nav', PerGlobalInfoChe, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString8Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.GENERIC_STRING_8_NAV = new core_1.OneToOneLink('genericString8Nav', PerGlobalInfoChe, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChe.PERSON_NAV = new core_1.OneToOneLink('personNav', PerGlobalInfoChe, PerPerson_1.PerPerson);
    /**
     * All fields of the PerGlobalInfoChe entity.
     */
    PerGlobalInfoChe._allFields = [
        PerGlobalInfoChe.COUNTRY,
        PerGlobalInfoChe.CREATED_BY,
        PerGlobalInfoChe.CREATED_DATE_TIME,
        PerGlobalInfoChe.CREATED_ON,
        PerGlobalInfoChe.END_DATE,
        PerGlobalInfoChe.GENERIC_DATE_1,
        PerGlobalInfoChe.GENERIC_DATE_2,
        PerGlobalInfoChe.GENERIC_DATE_3,
        PerGlobalInfoChe.GENERIC_DATE_4,
        PerGlobalInfoChe.GENERIC_DATE_5,
        PerGlobalInfoChe.GENERIC_DATE_6,
        PerGlobalInfoChe.GENERIC_DATE_7,
        PerGlobalInfoChe.GENERIC_DATE_8,
        PerGlobalInfoChe.GENERIC_NUMBER_1,
        PerGlobalInfoChe.GENERIC_NUMBER_10,
        PerGlobalInfoChe.GENERIC_NUMBER_11,
        PerGlobalInfoChe.GENERIC_NUMBER_12,
        PerGlobalInfoChe.GENERIC_NUMBER_13,
        PerGlobalInfoChe.GENERIC_NUMBER_2,
        PerGlobalInfoChe.GENERIC_NUMBER_3,
        PerGlobalInfoChe.GENERIC_NUMBER_4,
        PerGlobalInfoChe.GENERIC_NUMBER_5,
        PerGlobalInfoChe.GENERIC_NUMBER_6,
        PerGlobalInfoChe.GENERIC_NUMBER_7,
        PerGlobalInfoChe.GENERIC_NUMBER_8,
        PerGlobalInfoChe.GENERIC_NUMBER_9,
        PerGlobalInfoChe.GENERIC_STRING_1,
        PerGlobalInfoChe.GENERIC_STRING_10,
        PerGlobalInfoChe.GENERIC_STRING_11,
        PerGlobalInfoChe.GENERIC_STRING_12,
        PerGlobalInfoChe.GENERIC_STRING_13,
        PerGlobalInfoChe.GENERIC_STRING_14,
        PerGlobalInfoChe.GENERIC_STRING_15,
        PerGlobalInfoChe.GENERIC_STRING_16,
        PerGlobalInfoChe.GENERIC_STRING_17,
        PerGlobalInfoChe.GENERIC_STRING_18,
        PerGlobalInfoChe.GENERIC_STRING_19,
        PerGlobalInfoChe.GENERIC_STRING_2,
        PerGlobalInfoChe.GENERIC_STRING_20,
        PerGlobalInfoChe.GENERIC_STRING_3,
        PerGlobalInfoChe.GENERIC_STRING_4,
        PerGlobalInfoChe.GENERIC_STRING_5,
        PerGlobalInfoChe.GENERIC_STRING_6,
        PerGlobalInfoChe.GENERIC_STRING_7,
        PerGlobalInfoChe.GENERIC_STRING_8,
        PerGlobalInfoChe.GENERIC_STRING_9,
        PerGlobalInfoChe.LAST_MODIFIED_BY,
        PerGlobalInfoChe.LAST_MODIFIED_DATE_TIME,
        PerGlobalInfoChe.LAST_MODIFIED_ON,
        PerGlobalInfoChe.OPERATION,
        PerGlobalInfoChe.PERSON_ID_EXTERNAL,
        PerGlobalInfoChe.START_DATE,
        PerGlobalInfoChe.COUNTRY_NAV,
        PerGlobalInfoChe.GENERIC_NUMBER_3_NAV,
        PerGlobalInfoChe.GENERIC_NUMBER_4_NAV,
        PerGlobalInfoChe.GENERIC_STRING_11_NAV,
        PerGlobalInfoChe.GENERIC_STRING_12_NAV,
        PerGlobalInfoChe.GENERIC_STRING_13_NAV,
        PerGlobalInfoChe.GENERIC_STRING_1_NAV,
        PerGlobalInfoChe.GENERIC_STRING_2_NAV,
        PerGlobalInfoChe.GENERIC_STRING_3_NAV,
        PerGlobalInfoChe.GENERIC_STRING_6_NAV,
        PerGlobalInfoChe.GENERIC_STRING_7_NAV,
        PerGlobalInfoChe.GENERIC_STRING_8_NAV,
        PerGlobalInfoChe.PERSON_NAV
    ];
    /**
     * All fields selector.
     */
    PerGlobalInfoChe.ALL_FIELDS = new core_1.AllFields('*', PerGlobalInfoChe);
    /**
     * All key fields of the PerGlobalInfoChe entity.
     */
    PerGlobalInfoChe._keyFields = [PerGlobalInfoChe.COUNTRY, PerGlobalInfoChe.PERSON_ID_EXTERNAL, PerGlobalInfoChe.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property PerGlobalInfoChe.
     */
    PerGlobalInfoChe._keys = PerGlobalInfoChe._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerGlobalInfoChe = exports.PerGlobalInfoChe || (exports.PerGlobalInfoChe = {}));
exports.PerGlobalInfoChe = PerGlobalInfoChe;
//# sourceMappingURL=PerGlobalInfoChe.js.map