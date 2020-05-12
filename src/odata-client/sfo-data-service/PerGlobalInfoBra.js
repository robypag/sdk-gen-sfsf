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
var PerGlobalInfoBraRequestBuilder_1 = require("./PerGlobalInfoBraRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PerGlobalInfoBRA" of service "SFOData".
 */
var PerGlobalInfoBra = /** @class */ (function (_super) {
    __extends(PerGlobalInfoBra, _super);
    function PerGlobalInfoBra() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerGlobalInfoBra`.
     * @returns A builder that constructs instances of entity type `PerGlobalInfoBra`.
     */
    PerGlobalInfoBra.builder = function () {
        return core_1.Entity.entityBuilder(PerGlobalInfoBra);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerGlobalInfoBra` entity type.
     * @returns A `PerGlobalInfoBra` request builder.
     */
    PerGlobalInfoBra.requestBuilder = function () {
        return new PerGlobalInfoBraRequestBuilder_1.PerGlobalInfoBraRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoBra`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerGlobalInfoBra`.
     */
    PerGlobalInfoBra.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PerGlobalInfoBra);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerGlobalInfoBra.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerGlobalInfoBra.
     */
    PerGlobalInfoBra._entityName = 'PerGlobalInfoBRA';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerGlobalInfoBra.
     */
    PerGlobalInfoBra._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerGlobalInfoBra._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PerGlobalInfoBra;
}(core_1.Entity));
exports.PerGlobalInfoBra = PerGlobalInfoBra;
var Territory_1 = require("./Territory");
var PicklistOption_1 = require("./PicklistOption");
var PerPerson_1 = require("./PerPerson");
(function (PerGlobalInfoBra) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.COUNTRY = new core_1.StringField('country', PerGlobalInfoBra, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.CREATED_BY = new core_1.StringField('createdBy', PerGlobalInfoBra, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PerGlobalInfoBra, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.CREATED_ON = new core_1.DateField('createdOn', PerGlobalInfoBra, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.END_DATE = new core_1.DateField('endDate', PerGlobalInfoBra, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_DATE_1 = new core_1.DateField('genericDate1', PerGlobalInfoBra, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_DATE_2 = new core_1.DateField('genericDate2', PerGlobalInfoBra, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_DATE_3 = new core_1.DateField('genericDate3', PerGlobalInfoBra, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_DATE_4 = new core_1.DateField('genericDate4', PerGlobalInfoBra, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_DATE_5 = new core_1.DateField('genericDate5', PerGlobalInfoBra, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_DATE_6 = new core_1.DateField('genericDate6', PerGlobalInfoBra, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_DATE_7 = new core_1.DateField('genericDate7', PerGlobalInfoBra, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_DATE_8 = new core_1.DateField('genericDate8', PerGlobalInfoBra, 'Edm.DateTime');
    /**
     * Static representation of the [[genericNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_NUMBER_1 = new core_1.BigNumberField('genericNumber1', PerGlobalInfoBra, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_NUMBER_10 = new core_1.BigNumberField('genericNumber10', PerGlobalInfoBra, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_NUMBER_11 = new core_1.BigNumberField('genericNumber11', PerGlobalInfoBra, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_NUMBER_12 = new core_1.BigNumberField('genericNumber12', PerGlobalInfoBra, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_NUMBER_13 = new core_1.BigNumberField('genericNumber13', PerGlobalInfoBra, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_NUMBER_2 = new core_1.BigNumberField('genericNumber2', PerGlobalInfoBra, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_NUMBER_3 = new core_1.BigNumberField('genericNumber3', PerGlobalInfoBra, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_NUMBER_4 = new core_1.BigNumberField('genericNumber4', PerGlobalInfoBra, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_NUMBER_5 = new core_1.BigNumberField('genericNumber5', PerGlobalInfoBra, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_NUMBER_6 = new core_1.BigNumberField('genericNumber6', PerGlobalInfoBra, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_NUMBER_7 = new core_1.BigNumberField('genericNumber7', PerGlobalInfoBra, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_NUMBER_8 = new core_1.BigNumberField('genericNumber8', PerGlobalInfoBra, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_NUMBER_9 = new core_1.BigNumberField('genericNumber9', PerGlobalInfoBra, 'Edm.Int64');
    /**
     * Static representation of the [[genericString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_STRING_1 = new core_1.StringField('genericString1', PerGlobalInfoBra, 'Edm.String');
    /**
     * Static representation of the [[genericString10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_STRING_10 = new core_1.StringField('genericString10', PerGlobalInfoBra, 'Edm.String');
    /**
     * Static representation of the [[genericString11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_STRING_11 = new core_1.StringField('genericString11', PerGlobalInfoBra, 'Edm.String');
    /**
     * Static representation of the [[genericString12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_STRING_12 = new core_1.StringField('genericString12', PerGlobalInfoBra, 'Edm.String');
    /**
     * Static representation of the [[genericString13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_STRING_13 = new core_1.StringField('genericString13', PerGlobalInfoBra, 'Edm.String');
    /**
     * Static representation of the [[genericString14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_STRING_14 = new core_1.StringField('genericString14', PerGlobalInfoBra, 'Edm.String');
    /**
     * Static representation of the [[genericString15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_STRING_15 = new core_1.StringField('genericString15', PerGlobalInfoBra, 'Edm.String');
    /**
     * Static representation of the [[genericString16]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_STRING_16 = new core_1.StringField('genericString16', PerGlobalInfoBra, 'Edm.String');
    /**
     * Static representation of the [[genericString17]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_STRING_17 = new core_1.StringField('genericString17', PerGlobalInfoBra, 'Edm.String');
    /**
     * Static representation of the [[genericString18]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_STRING_18 = new core_1.StringField('genericString18', PerGlobalInfoBra, 'Edm.String');
    /**
     * Static representation of the [[genericString19]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_STRING_19 = new core_1.StringField('genericString19', PerGlobalInfoBra, 'Edm.String');
    /**
     * Static representation of the [[genericString2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_STRING_2 = new core_1.StringField('genericString2', PerGlobalInfoBra, 'Edm.String');
    /**
     * Static representation of the [[genericString20]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_STRING_20 = new core_1.StringField('genericString20', PerGlobalInfoBra, 'Edm.String');
    /**
     * Static representation of the [[genericString3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_STRING_3 = new core_1.StringField('genericString3', PerGlobalInfoBra, 'Edm.String');
    /**
     * Static representation of the [[genericString4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_STRING_4 = new core_1.StringField('genericString4', PerGlobalInfoBra, 'Edm.String');
    /**
     * Static representation of the [[genericString5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_STRING_5 = new core_1.StringField('genericString5', PerGlobalInfoBra, 'Edm.String');
    /**
     * Static representation of the [[genericString6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_STRING_6 = new core_1.StringField('genericString6', PerGlobalInfoBra, 'Edm.String');
    /**
     * Static representation of the [[genericString7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_STRING_7 = new core_1.StringField('genericString7', PerGlobalInfoBra, 'Edm.String');
    /**
     * Static representation of the [[genericString8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_STRING_8 = new core_1.StringField('genericString8', PerGlobalInfoBra, 'Edm.String');
    /**
     * Static representation of the [[genericString9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_STRING_9 = new core_1.StringField('genericString9', PerGlobalInfoBra, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PerGlobalInfoBra, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PerGlobalInfoBra, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', PerGlobalInfoBra, 'Edm.DateTime');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.OPERATION = new core_1.StringField('operation', PerGlobalInfoBra, 'Edm.String');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.PERSON_ID_EXTERNAL = new core_1.StringField('personIdExternal', PerGlobalInfoBra, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.START_DATE = new core_1.DateField('startDate', PerGlobalInfoBra, 'Edm.DateTime');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', PerGlobalInfoBra, Territory_1.Territory);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber10Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_NUMBER_10_NAV = new core_1.OneToOneLink('genericNumber10Nav', PerGlobalInfoBra, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber11Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_NUMBER_11_NAV = new core_1.OneToOneLink('genericNumber11Nav', PerGlobalInfoBra, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber12Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_NUMBER_12_NAV = new core_1.OneToOneLink('genericNumber12Nav', PerGlobalInfoBra, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber13Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_NUMBER_13_NAV = new core_1.OneToOneLink('genericNumber13Nav', PerGlobalInfoBra, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_NUMBER_1_NAV = new core_1.OneToOneLink('genericNumber1Nav', PerGlobalInfoBra, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber3Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_NUMBER_3_NAV = new core_1.OneToOneLink('genericNumber3Nav', PerGlobalInfoBra, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber9Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_NUMBER_9_NAV = new core_1.OneToOneLink('genericNumber9Nav', PerGlobalInfoBra, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString10Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_STRING_10_NAV = new core_1.OneToOneLink('genericString10Nav', PerGlobalInfoBra, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString11Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_STRING_11_NAV = new core_1.OneToOneLink('genericString11Nav', PerGlobalInfoBra, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString12Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_STRING_12_NAV = new core_1.OneToOneLink('genericString12Nav', PerGlobalInfoBra, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_STRING_1_NAV = new core_1.OneToOneLink('genericString1Nav', PerGlobalInfoBra, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_STRING_2_NAV = new core_1.OneToOneLink('genericString2Nav', PerGlobalInfoBra, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString3Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_STRING_3_NAV = new core_1.OneToOneLink('genericString3Nav', PerGlobalInfoBra, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString9Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.GENERIC_STRING_9_NAV = new core_1.OneToOneLink('genericString9Nav', PerGlobalInfoBra, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoBra.PERSON_NAV = new core_1.OneToOneLink('personNav', PerGlobalInfoBra, PerPerson_1.PerPerson);
    /**
     * All fields of the PerGlobalInfoBra entity.
     */
    PerGlobalInfoBra._allFields = [
        PerGlobalInfoBra.COUNTRY,
        PerGlobalInfoBra.CREATED_BY,
        PerGlobalInfoBra.CREATED_DATE_TIME,
        PerGlobalInfoBra.CREATED_ON,
        PerGlobalInfoBra.END_DATE,
        PerGlobalInfoBra.GENERIC_DATE_1,
        PerGlobalInfoBra.GENERIC_DATE_2,
        PerGlobalInfoBra.GENERIC_DATE_3,
        PerGlobalInfoBra.GENERIC_DATE_4,
        PerGlobalInfoBra.GENERIC_DATE_5,
        PerGlobalInfoBra.GENERIC_DATE_6,
        PerGlobalInfoBra.GENERIC_DATE_7,
        PerGlobalInfoBra.GENERIC_DATE_8,
        PerGlobalInfoBra.GENERIC_NUMBER_1,
        PerGlobalInfoBra.GENERIC_NUMBER_10,
        PerGlobalInfoBra.GENERIC_NUMBER_11,
        PerGlobalInfoBra.GENERIC_NUMBER_12,
        PerGlobalInfoBra.GENERIC_NUMBER_13,
        PerGlobalInfoBra.GENERIC_NUMBER_2,
        PerGlobalInfoBra.GENERIC_NUMBER_3,
        PerGlobalInfoBra.GENERIC_NUMBER_4,
        PerGlobalInfoBra.GENERIC_NUMBER_5,
        PerGlobalInfoBra.GENERIC_NUMBER_6,
        PerGlobalInfoBra.GENERIC_NUMBER_7,
        PerGlobalInfoBra.GENERIC_NUMBER_8,
        PerGlobalInfoBra.GENERIC_NUMBER_9,
        PerGlobalInfoBra.GENERIC_STRING_1,
        PerGlobalInfoBra.GENERIC_STRING_10,
        PerGlobalInfoBra.GENERIC_STRING_11,
        PerGlobalInfoBra.GENERIC_STRING_12,
        PerGlobalInfoBra.GENERIC_STRING_13,
        PerGlobalInfoBra.GENERIC_STRING_14,
        PerGlobalInfoBra.GENERIC_STRING_15,
        PerGlobalInfoBra.GENERIC_STRING_16,
        PerGlobalInfoBra.GENERIC_STRING_17,
        PerGlobalInfoBra.GENERIC_STRING_18,
        PerGlobalInfoBra.GENERIC_STRING_19,
        PerGlobalInfoBra.GENERIC_STRING_2,
        PerGlobalInfoBra.GENERIC_STRING_20,
        PerGlobalInfoBra.GENERIC_STRING_3,
        PerGlobalInfoBra.GENERIC_STRING_4,
        PerGlobalInfoBra.GENERIC_STRING_5,
        PerGlobalInfoBra.GENERIC_STRING_6,
        PerGlobalInfoBra.GENERIC_STRING_7,
        PerGlobalInfoBra.GENERIC_STRING_8,
        PerGlobalInfoBra.GENERIC_STRING_9,
        PerGlobalInfoBra.LAST_MODIFIED_BY,
        PerGlobalInfoBra.LAST_MODIFIED_DATE_TIME,
        PerGlobalInfoBra.LAST_MODIFIED_ON,
        PerGlobalInfoBra.OPERATION,
        PerGlobalInfoBra.PERSON_ID_EXTERNAL,
        PerGlobalInfoBra.START_DATE,
        PerGlobalInfoBra.COUNTRY_NAV,
        PerGlobalInfoBra.GENERIC_NUMBER_10_NAV,
        PerGlobalInfoBra.GENERIC_NUMBER_11_NAV,
        PerGlobalInfoBra.GENERIC_NUMBER_12_NAV,
        PerGlobalInfoBra.GENERIC_NUMBER_13_NAV,
        PerGlobalInfoBra.GENERIC_NUMBER_1_NAV,
        PerGlobalInfoBra.GENERIC_NUMBER_3_NAV,
        PerGlobalInfoBra.GENERIC_NUMBER_9_NAV,
        PerGlobalInfoBra.GENERIC_STRING_10_NAV,
        PerGlobalInfoBra.GENERIC_STRING_11_NAV,
        PerGlobalInfoBra.GENERIC_STRING_12_NAV,
        PerGlobalInfoBra.GENERIC_STRING_1_NAV,
        PerGlobalInfoBra.GENERIC_STRING_2_NAV,
        PerGlobalInfoBra.GENERIC_STRING_3_NAV,
        PerGlobalInfoBra.GENERIC_STRING_9_NAV,
        PerGlobalInfoBra.PERSON_NAV
    ];
    /**
     * All fields selector.
     */
    PerGlobalInfoBra.ALL_FIELDS = new core_1.AllFields('*', PerGlobalInfoBra);
    /**
     * All key fields of the PerGlobalInfoBra entity.
     */
    PerGlobalInfoBra._keyFields = [PerGlobalInfoBra.COUNTRY, PerGlobalInfoBra.PERSON_ID_EXTERNAL, PerGlobalInfoBra.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property PerGlobalInfoBra.
     */
    PerGlobalInfoBra._keys = PerGlobalInfoBra._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerGlobalInfoBra = exports.PerGlobalInfoBra || (exports.PerGlobalInfoBra = {}));
exports.PerGlobalInfoBra = PerGlobalInfoBra;
//# sourceMappingURL=PerGlobalInfoBra.js.map