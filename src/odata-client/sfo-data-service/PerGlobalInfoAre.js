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
var PerGlobalInfoAreRequestBuilder_1 = require("./PerGlobalInfoAreRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PerGlobalInfoARE" of service "SFOData".
 */
var PerGlobalInfoAre = /** @class */ (function (_super) {
    __extends(PerGlobalInfoAre, _super);
    function PerGlobalInfoAre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerGlobalInfoAre`.
     * @returns A builder that constructs instances of entity type `PerGlobalInfoAre`.
     */
    PerGlobalInfoAre.builder = function () {
        return core_1.Entity.entityBuilder(PerGlobalInfoAre);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerGlobalInfoAre` entity type.
     * @returns A `PerGlobalInfoAre` request builder.
     */
    PerGlobalInfoAre.requestBuilder = function () {
        return new PerGlobalInfoAreRequestBuilder_1.PerGlobalInfoAreRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoAre`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerGlobalInfoAre`.
     */
    PerGlobalInfoAre.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PerGlobalInfoAre);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerGlobalInfoAre.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerGlobalInfoAre.
     */
    PerGlobalInfoAre._entityName = 'PerGlobalInfoARE';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerGlobalInfoAre.
     */
    PerGlobalInfoAre._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerGlobalInfoAre._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PerGlobalInfoAre;
}(core_1.Entity));
exports.PerGlobalInfoAre = PerGlobalInfoAre;
var Territory_1 = require("./Territory");
var PicklistOption_1 = require("./PicklistOption");
var PerPerson_1 = require("./PerPerson");
(function (PerGlobalInfoAre) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.COUNTRY = new core_1.StringField('country', PerGlobalInfoAre, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.CREATED_BY = new core_1.StringField('createdBy', PerGlobalInfoAre, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PerGlobalInfoAre, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.CREATED_ON = new core_1.DateField('createdOn', PerGlobalInfoAre, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.END_DATE = new core_1.DateField('endDate', PerGlobalInfoAre, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_DATE_1 = new core_1.DateField('genericDate1', PerGlobalInfoAre, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_DATE_2 = new core_1.DateField('genericDate2', PerGlobalInfoAre, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_DATE_3 = new core_1.DateField('genericDate3', PerGlobalInfoAre, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_DATE_4 = new core_1.DateField('genericDate4', PerGlobalInfoAre, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_DATE_5 = new core_1.DateField('genericDate5', PerGlobalInfoAre, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_DATE_6 = new core_1.DateField('genericDate6', PerGlobalInfoAre, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_DATE_7 = new core_1.DateField('genericDate7', PerGlobalInfoAre, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_DATE_8 = new core_1.DateField('genericDate8', PerGlobalInfoAre, 'Edm.DateTime');
    /**
     * Static representation of the [[genericNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_NUMBER_1 = new core_1.BigNumberField('genericNumber1', PerGlobalInfoAre, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_NUMBER_10 = new core_1.BigNumberField('genericNumber10', PerGlobalInfoAre, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_NUMBER_11 = new core_1.BigNumberField('genericNumber11', PerGlobalInfoAre, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_NUMBER_12 = new core_1.BigNumberField('genericNumber12', PerGlobalInfoAre, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_NUMBER_13 = new core_1.BigNumberField('genericNumber13', PerGlobalInfoAre, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_NUMBER_2 = new core_1.BigNumberField('genericNumber2', PerGlobalInfoAre, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_NUMBER_3 = new core_1.BigNumberField('genericNumber3', PerGlobalInfoAre, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_NUMBER_4 = new core_1.BigNumberField('genericNumber4', PerGlobalInfoAre, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_NUMBER_5 = new core_1.BigNumberField('genericNumber5', PerGlobalInfoAre, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_NUMBER_6 = new core_1.BigNumberField('genericNumber6', PerGlobalInfoAre, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_NUMBER_7 = new core_1.BigNumberField('genericNumber7', PerGlobalInfoAre, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_NUMBER_8 = new core_1.BigNumberField('genericNumber8', PerGlobalInfoAre, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_NUMBER_9 = new core_1.BigNumberField('genericNumber9', PerGlobalInfoAre, 'Edm.Int64');
    /**
     * Static representation of the [[genericString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_STRING_1 = new core_1.StringField('genericString1', PerGlobalInfoAre, 'Edm.String');
    /**
     * Static representation of the [[genericString10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_STRING_10 = new core_1.StringField('genericString10', PerGlobalInfoAre, 'Edm.String');
    /**
     * Static representation of the [[genericString11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_STRING_11 = new core_1.StringField('genericString11', PerGlobalInfoAre, 'Edm.String');
    /**
     * Static representation of the [[genericString12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_STRING_12 = new core_1.StringField('genericString12', PerGlobalInfoAre, 'Edm.String');
    /**
     * Static representation of the [[genericString13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_STRING_13 = new core_1.StringField('genericString13', PerGlobalInfoAre, 'Edm.String');
    /**
     * Static representation of the [[genericString14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_STRING_14 = new core_1.StringField('genericString14', PerGlobalInfoAre, 'Edm.String');
    /**
     * Static representation of the [[genericString15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_STRING_15 = new core_1.StringField('genericString15', PerGlobalInfoAre, 'Edm.String');
    /**
     * Static representation of the [[genericString16]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_STRING_16 = new core_1.StringField('genericString16', PerGlobalInfoAre, 'Edm.String');
    /**
     * Static representation of the [[genericString17]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_STRING_17 = new core_1.StringField('genericString17', PerGlobalInfoAre, 'Edm.String');
    /**
     * Static representation of the [[genericString18]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_STRING_18 = new core_1.StringField('genericString18', PerGlobalInfoAre, 'Edm.String');
    /**
     * Static representation of the [[genericString19]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_STRING_19 = new core_1.StringField('genericString19', PerGlobalInfoAre, 'Edm.String');
    /**
     * Static representation of the [[genericString2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_STRING_2 = new core_1.StringField('genericString2', PerGlobalInfoAre, 'Edm.String');
    /**
     * Static representation of the [[genericString20]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_STRING_20 = new core_1.StringField('genericString20', PerGlobalInfoAre, 'Edm.String');
    /**
     * Static representation of the [[genericString3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_STRING_3 = new core_1.StringField('genericString3', PerGlobalInfoAre, 'Edm.String');
    /**
     * Static representation of the [[genericString4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_STRING_4 = new core_1.StringField('genericString4', PerGlobalInfoAre, 'Edm.String');
    /**
     * Static representation of the [[genericString5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_STRING_5 = new core_1.StringField('genericString5', PerGlobalInfoAre, 'Edm.String');
    /**
     * Static representation of the [[genericString6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_STRING_6 = new core_1.StringField('genericString6', PerGlobalInfoAre, 'Edm.String');
    /**
     * Static representation of the [[genericString7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_STRING_7 = new core_1.StringField('genericString7', PerGlobalInfoAre, 'Edm.String');
    /**
     * Static representation of the [[genericString8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_STRING_8 = new core_1.StringField('genericString8', PerGlobalInfoAre, 'Edm.String');
    /**
     * Static representation of the [[genericString9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_STRING_9 = new core_1.StringField('genericString9', PerGlobalInfoAre, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PerGlobalInfoAre, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PerGlobalInfoAre, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', PerGlobalInfoAre, 'Edm.DateTime');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.OPERATION = new core_1.StringField('operation', PerGlobalInfoAre, 'Edm.String');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.PERSON_ID_EXTERNAL = new core_1.StringField('personIdExternal', PerGlobalInfoAre, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.START_DATE = new core_1.DateField('startDate', PerGlobalInfoAre, 'Edm.DateTime');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', PerGlobalInfoAre, Territory_1.Territory);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_NUMBER_1_NAV = new core_1.OneToOneLink('genericNumber1Nav', PerGlobalInfoAre, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber2Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_NUMBER_2_NAV = new core_1.OneToOneLink('genericNumber2Nav', PerGlobalInfoAre, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber3Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_NUMBER_3_NAV = new core_1.OneToOneLink('genericNumber3Nav', PerGlobalInfoAre, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber4Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_NUMBER_4_NAV = new core_1.OneToOneLink('genericNumber4Nav', PerGlobalInfoAre, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber6Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_NUMBER_6_NAV = new core_1.OneToOneLink('genericNumber6Nav', PerGlobalInfoAre, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber7Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_NUMBER_7_NAV = new core_1.OneToOneLink('genericNumber7Nav', PerGlobalInfoAre, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_STRING_1_NAV = new core_1.OneToOneLink('genericString1Nav', PerGlobalInfoAre, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString4Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_STRING_4_NAV = new core_1.OneToOneLink('genericString4Nav', PerGlobalInfoAre, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString6Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.GENERIC_STRING_6_NAV = new core_1.OneToOneLink('genericString6Nav', PerGlobalInfoAre, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAre.PERSON_NAV = new core_1.OneToOneLink('personNav', PerGlobalInfoAre, PerPerson_1.PerPerson);
    /**
     * All fields of the PerGlobalInfoAre entity.
     */
    PerGlobalInfoAre._allFields = [
        PerGlobalInfoAre.COUNTRY,
        PerGlobalInfoAre.CREATED_BY,
        PerGlobalInfoAre.CREATED_DATE_TIME,
        PerGlobalInfoAre.CREATED_ON,
        PerGlobalInfoAre.END_DATE,
        PerGlobalInfoAre.GENERIC_DATE_1,
        PerGlobalInfoAre.GENERIC_DATE_2,
        PerGlobalInfoAre.GENERIC_DATE_3,
        PerGlobalInfoAre.GENERIC_DATE_4,
        PerGlobalInfoAre.GENERIC_DATE_5,
        PerGlobalInfoAre.GENERIC_DATE_6,
        PerGlobalInfoAre.GENERIC_DATE_7,
        PerGlobalInfoAre.GENERIC_DATE_8,
        PerGlobalInfoAre.GENERIC_NUMBER_1,
        PerGlobalInfoAre.GENERIC_NUMBER_10,
        PerGlobalInfoAre.GENERIC_NUMBER_11,
        PerGlobalInfoAre.GENERIC_NUMBER_12,
        PerGlobalInfoAre.GENERIC_NUMBER_13,
        PerGlobalInfoAre.GENERIC_NUMBER_2,
        PerGlobalInfoAre.GENERIC_NUMBER_3,
        PerGlobalInfoAre.GENERIC_NUMBER_4,
        PerGlobalInfoAre.GENERIC_NUMBER_5,
        PerGlobalInfoAre.GENERIC_NUMBER_6,
        PerGlobalInfoAre.GENERIC_NUMBER_7,
        PerGlobalInfoAre.GENERIC_NUMBER_8,
        PerGlobalInfoAre.GENERIC_NUMBER_9,
        PerGlobalInfoAre.GENERIC_STRING_1,
        PerGlobalInfoAre.GENERIC_STRING_10,
        PerGlobalInfoAre.GENERIC_STRING_11,
        PerGlobalInfoAre.GENERIC_STRING_12,
        PerGlobalInfoAre.GENERIC_STRING_13,
        PerGlobalInfoAre.GENERIC_STRING_14,
        PerGlobalInfoAre.GENERIC_STRING_15,
        PerGlobalInfoAre.GENERIC_STRING_16,
        PerGlobalInfoAre.GENERIC_STRING_17,
        PerGlobalInfoAre.GENERIC_STRING_18,
        PerGlobalInfoAre.GENERIC_STRING_19,
        PerGlobalInfoAre.GENERIC_STRING_2,
        PerGlobalInfoAre.GENERIC_STRING_20,
        PerGlobalInfoAre.GENERIC_STRING_3,
        PerGlobalInfoAre.GENERIC_STRING_4,
        PerGlobalInfoAre.GENERIC_STRING_5,
        PerGlobalInfoAre.GENERIC_STRING_6,
        PerGlobalInfoAre.GENERIC_STRING_7,
        PerGlobalInfoAre.GENERIC_STRING_8,
        PerGlobalInfoAre.GENERIC_STRING_9,
        PerGlobalInfoAre.LAST_MODIFIED_BY,
        PerGlobalInfoAre.LAST_MODIFIED_DATE_TIME,
        PerGlobalInfoAre.LAST_MODIFIED_ON,
        PerGlobalInfoAre.OPERATION,
        PerGlobalInfoAre.PERSON_ID_EXTERNAL,
        PerGlobalInfoAre.START_DATE,
        PerGlobalInfoAre.COUNTRY_NAV,
        PerGlobalInfoAre.GENERIC_NUMBER_1_NAV,
        PerGlobalInfoAre.GENERIC_NUMBER_2_NAV,
        PerGlobalInfoAre.GENERIC_NUMBER_3_NAV,
        PerGlobalInfoAre.GENERIC_NUMBER_4_NAV,
        PerGlobalInfoAre.GENERIC_NUMBER_6_NAV,
        PerGlobalInfoAre.GENERIC_NUMBER_7_NAV,
        PerGlobalInfoAre.GENERIC_STRING_1_NAV,
        PerGlobalInfoAre.GENERIC_STRING_4_NAV,
        PerGlobalInfoAre.GENERIC_STRING_6_NAV,
        PerGlobalInfoAre.PERSON_NAV
    ];
    /**
     * All fields selector.
     */
    PerGlobalInfoAre.ALL_FIELDS = new core_1.AllFields('*', PerGlobalInfoAre);
    /**
     * All key fields of the PerGlobalInfoAre entity.
     */
    PerGlobalInfoAre._keyFields = [PerGlobalInfoAre.COUNTRY, PerGlobalInfoAre.PERSON_ID_EXTERNAL, PerGlobalInfoAre.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property PerGlobalInfoAre.
     */
    PerGlobalInfoAre._keys = PerGlobalInfoAre._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerGlobalInfoAre = exports.PerGlobalInfoAre || (exports.PerGlobalInfoAre = {}));
exports.PerGlobalInfoAre = PerGlobalInfoAre;
//# sourceMappingURL=PerGlobalInfoAre.js.map