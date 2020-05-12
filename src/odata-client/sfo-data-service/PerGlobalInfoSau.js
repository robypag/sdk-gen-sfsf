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
var PerGlobalInfoSauRequestBuilder_1 = require("./PerGlobalInfoSauRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PerGlobalInfoSAU" of service "SFOData".
 */
var PerGlobalInfoSau = /** @class */ (function (_super) {
    __extends(PerGlobalInfoSau, _super);
    function PerGlobalInfoSau() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerGlobalInfoSau`.
     * @returns A builder that constructs instances of entity type `PerGlobalInfoSau`.
     */
    PerGlobalInfoSau.builder = function () {
        return core_1.Entity.entityBuilder(PerGlobalInfoSau);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerGlobalInfoSau` entity type.
     * @returns A `PerGlobalInfoSau` request builder.
     */
    PerGlobalInfoSau.requestBuilder = function () {
        return new PerGlobalInfoSauRequestBuilder_1.PerGlobalInfoSauRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoSau`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerGlobalInfoSau`.
     */
    PerGlobalInfoSau.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PerGlobalInfoSau);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerGlobalInfoSau.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerGlobalInfoSau.
     */
    PerGlobalInfoSau._entityName = 'PerGlobalInfoSAU';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerGlobalInfoSau.
     */
    PerGlobalInfoSau._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerGlobalInfoSau._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PerGlobalInfoSau;
}(core_1.Entity));
exports.PerGlobalInfoSau = PerGlobalInfoSau;
var Territory_1 = require("./Territory");
var PicklistOption_1 = require("./PicklistOption");
var PerPerson_1 = require("./PerPerson");
(function (PerGlobalInfoSau) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.COUNTRY = new core_1.StringField('country', PerGlobalInfoSau, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.CREATED_BY = new core_1.StringField('createdBy', PerGlobalInfoSau, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PerGlobalInfoSau, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.CREATED_ON = new core_1.DateField('createdOn', PerGlobalInfoSau, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.END_DATE = new core_1.DateField('endDate', PerGlobalInfoSau, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_DATE_1 = new core_1.DateField('genericDate1', PerGlobalInfoSau, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_DATE_2 = new core_1.DateField('genericDate2', PerGlobalInfoSau, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_DATE_3 = new core_1.DateField('genericDate3', PerGlobalInfoSau, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_DATE_4 = new core_1.DateField('genericDate4', PerGlobalInfoSau, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_DATE_5 = new core_1.DateField('genericDate5', PerGlobalInfoSau, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_DATE_6 = new core_1.DateField('genericDate6', PerGlobalInfoSau, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_DATE_7 = new core_1.DateField('genericDate7', PerGlobalInfoSau, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_DATE_8 = new core_1.DateField('genericDate8', PerGlobalInfoSau, 'Edm.DateTime');
    /**
     * Static representation of the [[genericNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_NUMBER_1 = new core_1.BigNumberField('genericNumber1', PerGlobalInfoSau, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_NUMBER_10 = new core_1.BigNumberField('genericNumber10', PerGlobalInfoSau, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_NUMBER_11 = new core_1.BigNumberField('genericNumber11', PerGlobalInfoSau, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_NUMBER_12 = new core_1.BigNumberField('genericNumber12', PerGlobalInfoSau, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_NUMBER_13 = new core_1.BigNumberField('genericNumber13', PerGlobalInfoSau, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_NUMBER_2 = new core_1.BigNumberField('genericNumber2', PerGlobalInfoSau, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_NUMBER_3 = new core_1.BigNumberField('genericNumber3', PerGlobalInfoSau, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_NUMBER_4 = new core_1.BigNumberField('genericNumber4', PerGlobalInfoSau, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_NUMBER_5 = new core_1.BigNumberField('genericNumber5', PerGlobalInfoSau, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_NUMBER_6 = new core_1.BigNumberField('genericNumber6', PerGlobalInfoSau, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_NUMBER_7 = new core_1.BigNumberField('genericNumber7', PerGlobalInfoSau, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_NUMBER_8 = new core_1.BigNumberField('genericNumber8', PerGlobalInfoSau, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_NUMBER_9 = new core_1.BigNumberField('genericNumber9', PerGlobalInfoSau, 'Edm.Int64');
    /**
     * Static representation of the [[genericString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_STRING_1 = new core_1.StringField('genericString1', PerGlobalInfoSau, 'Edm.String');
    /**
     * Static representation of the [[genericString10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_STRING_10 = new core_1.StringField('genericString10', PerGlobalInfoSau, 'Edm.String');
    /**
     * Static representation of the [[genericString11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_STRING_11 = new core_1.StringField('genericString11', PerGlobalInfoSau, 'Edm.String');
    /**
     * Static representation of the [[genericString12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_STRING_12 = new core_1.StringField('genericString12', PerGlobalInfoSau, 'Edm.String');
    /**
     * Static representation of the [[genericString13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_STRING_13 = new core_1.StringField('genericString13', PerGlobalInfoSau, 'Edm.String');
    /**
     * Static representation of the [[genericString14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_STRING_14 = new core_1.StringField('genericString14', PerGlobalInfoSau, 'Edm.String');
    /**
     * Static representation of the [[genericString15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_STRING_15 = new core_1.StringField('genericString15', PerGlobalInfoSau, 'Edm.String');
    /**
     * Static representation of the [[genericString16]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_STRING_16 = new core_1.StringField('genericString16', PerGlobalInfoSau, 'Edm.String');
    /**
     * Static representation of the [[genericString17]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_STRING_17 = new core_1.StringField('genericString17', PerGlobalInfoSau, 'Edm.String');
    /**
     * Static representation of the [[genericString18]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_STRING_18 = new core_1.StringField('genericString18', PerGlobalInfoSau, 'Edm.String');
    /**
     * Static representation of the [[genericString19]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_STRING_19 = new core_1.StringField('genericString19', PerGlobalInfoSau, 'Edm.String');
    /**
     * Static representation of the [[genericString2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_STRING_2 = new core_1.StringField('genericString2', PerGlobalInfoSau, 'Edm.String');
    /**
     * Static representation of the [[genericString20]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_STRING_20 = new core_1.StringField('genericString20', PerGlobalInfoSau, 'Edm.String');
    /**
     * Static representation of the [[genericString3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_STRING_3 = new core_1.StringField('genericString3', PerGlobalInfoSau, 'Edm.String');
    /**
     * Static representation of the [[genericString4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_STRING_4 = new core_1.StringField('genericString4', PerGlobalInfoSau, 'Edm.String');
    /**
     * Static representation of the [[genericString5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_STRING_5 = new core_1.StringField('genericString5', PerGlobalInfoSau, 'Edm.String');
    /**
     * Static representation of the [[genericString6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_STRING_6 = new core_1.StringField('genericString6', PerGlobalInfoSau, 'Edm.String');
    /**
     * Static representation of the [[genericString7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_STRING_7 = new core_1.StringField('genericString7', PerGlobalInfoSau, 'Edm.String');
    /**
     * Static representation of the [[genericString8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_STRING_8 = new core_1.StringField('genericString8', PerGlobalInfoSau, 'Edm.String');
    /**
     * Static representation of the [[genericString9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_STRING_9 = new core_1.StringField('genericString9', PerGlobalInfoSau, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PerGlobalInfoSau, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PerGlobalInfoSau, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', PerGlobalInfoSau, 'Edm.DateTime');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.OPERATION = new core_1.StringField('operation', PerGlobalInfoSau, 'Edm.String');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.PERSON_ID_EXTERNAL = new core_1.StringField('personIdExternal', PerGlobalInfoSau, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.START_DATE = new core_1.DateField('startDate', PerGlobalInfoSau, 'Edm.DateTime');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', PerGlobalInfoSau, Territory_1.Territory);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber3Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_NUMBER_3_NAV = new core_1.OneToOneLink('genericNumber3Nav', PerGlobalInfoSau, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber4Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_NUMBER_4_NAV = new core_1.OneToOneLink('genericNumber4Nav', PerGlobalInfoSau, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber5Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_NUMBER_5_NAV = new core_1.OneToOneLink('genericNumber5Nav', PerGlobalInfoSau, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString13Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_STRING_13_NAV = new core_1.OneToOneLink('genericString13Nav', PerGlobalInfoSau, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString14Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_STRING_14_NAV = new core_1.OneToOneLink('genericString14Nav', PerGlobalInfoSau, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString15Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_STRING_15_NAV = new core_1.OneToOneLink('genericString15Nav', PerGlobalInfoSau, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_STRING_1_NAV = new core_1.OneToOneLink('genericString1Nav', PerGlobalInfoSau, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_STRING_2_NAV = new core_1.OneToOneLink('genericString2Nav', PerGlobalInfoSau, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString5Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_STRING_5_NAV = new core_1.OneToOneLink('genericString5Nav', PerGlobalInfoSau, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString6Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_STRING_6_NAV = new core_1.OneToOneLink('genericString6Nav', PerGlobalInfoSau, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString8Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_STRING_8_NAV = new core_1.OneToOneLink('genericString8Nav', PerGlobalInfoSau, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString9Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.GENERIC_STRING_9_NAV = new core_1.OneToOneLink('genericString9Nav', PerGlobalInfoSau, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSau.PERSON_NAV = new core_1.OneToOneLink('personNav', PerGlobalInfoSau, PerPerson_1.PerPerson);
    /**
     * All fields of the PerGlobalInfoSau entity.
     */
    PerGlobalInfoSau._allFields = [
        PerGlobalInfoSau.COUNTRY,
        PerGlobalInfoSau.CREATED_BY,
        PerGlobalInfoSau.CREATED_DATE_TIME,
        PerGlobalInfoSau.CREATED_ON,
        PerGlobalInfoSau.END_DATE,
        PerGlobalInfoSau.GENERIC_DATE_1,
        PerGlobalInfoSau.GENERIC_DATE_2,
        PerGlobalInfoSau.GENERIC_DATE_3,
        PerGlobalInfoSau.GENERIC_DATE_4,
        PerGlobalInfoSau.GENERIC_DATE_5,
        PerGlobalInfoSau.GENERIC_DATE_6,
        PerGlobalInfoSau.GENERIC_DATE_7,
        PerGlobalInfoSau.GENERIC_DATE_8,
        PerGlobalInfoSau.GENERIC_NUMBER_1,
        PerGlobalInfoSau.GENERIC_NUMBER_10,
        PerGlobalInfoSau.GENERIC_NUMBER_11,
        PerGlobalInfoSau.GENERIC_NUMBER_12,
        PerGlobalInfoSau.GENERIC_NUMBER_13,
        PerGlobalInfoSau.GENERIC_NUMBER_2,
        PerGlobalInfoSau.GENERIC_NUMBER_3,
        PerGlobalInfoSau.GENERIC_NUMBER_4,
        PerGlobalInfoSau.GENERIC_NUMBER_5,
        PerGlobalInfoSau.GENERIC_NUMBER_6,
        PerGlobalInfoSau.GENERIC_NUMBER_7,
        PerGlobalInfoSau.GENERIC_NUMBER_8,
        PerGlobalInfoSau.GENERIC_NUMBER_9,
        PerGlobalInfoSau.GENERIC_STRING_1,
        PerGlobalInfoSau.GENERIC_STRING_10,
        PerGlobalInfoSau.GENERIC_STRING_11,
        PerGlobalInfoSau.GENERIC_STRING_12,
        PerGlobalInfoSau.GENERIC_STRING_13,
        PerGlobalInfoSau.GENERIC_STRING_14,
        PerGlobalInfoSau.GENERIC_STRING_15,
        PerGlobalInfoSau.GENERIC_STRING_16,
        PerGlobalInfoSau.GENERIC_STRING_17,
        PerGlobalInfoSau.GENERIC_STRING_18,
        PerGlobalInfoSau.GENERIC_STRING_19,
        PerGlobalInfoSau.GENERIC_STRING_2,
        PerGlobalInfoSau.GENERIC_STRING_20,
        PerGlobalInfoSau.GENERIC_STRING_3,
        PerGlobalInfoSau.GENERIC_STRING_4,
        PerGlobalInfoSau.GENERIC_STRING_5,
        PerGlobalInfoSau.GENERIC_STRING_6,
        PerGlobalInfoSau.GENERIC_STRING_7,
        PerGlobalInfoSau.GENERIC_STRING_8,
        PerGlobalInfoSau.GENERIC_STRING_9,
        PerGlobalInfoSau.LAST_MODIFIED_BY,
        PerGlobalInfoSau.LAST_MODIFIED_DATE_TIME,
        PerGlobalInfoSau.LAST_MODIFIED_ON,
        PerGlobalInfoSau.OPERATION,
        PerGlobalInfoSau.PERSON_ID_EXTERNAL,
        PerGlobalInfoSau.START_DATE,
        PerGlobalInfoSau.COUNTRY_NAV,
        PerGlobalInfoSau.GENERIC_NUMBER_3_NAV,
        PerGlobalInfoSau.GENERIC_NUMBER_4_NAV,
        PerGlobalInfoSau.GENERIC_NUMBER_5_NAV,
        PerGlobalInfoSau.GENERIC_STRING_13_NAV,
        PerGlobalInfoSau.GENERIC_STRING_14_NAV,
        PerGlobalInfoSau.GENERIC_STRING_15_NAV,
        PerGlobalInfoSau.GENERIC_STRING_1_NAV,
        PerGlobalInfoSau.GENERIC_STRING_2_NAV,
        PerGlobalInfoSau.GENERIC_STRING_5_NAV,
        PerGlobalInfoSau.GENERIC_STRING_6_NAV,
        PerGlobalInfoSau.GENERIC_STRING_8_NAV,
        PerGlobalInfoSau.GENERIC_STRING_9_NAV,
        PerGlobalInfoSau.PERSON_NAV
    ];
    /**
     * All fields selector.
     */
    PerGlobalInfoSau.ALL_FIELDS = new core_1.AllFields('*', PerGlobalInfoSau);
    /**
     * All key fields of the PerGlobalInfoSau entity.
     */
    PerGlobalInfoSau._keyFields = [PerGlobalInfoSau.COUNTRY, PerGlobalInfoSau.PERSON_ID_EXTERNAL, PerGlobalInfoSau.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property PerGlobalInfoSau.
     */
    PerGlobalInfoSau._keys = PerGlobalInfoSau._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerGlobalInfoSau = exports.PerGlobalInfoSau || (exports.PerGlobalInfoSau = {}));
exports.PerGlobalInfoSau = PerGlobalInfoSau;
//# sourceMappingURL=PerGlobalInfoSau.js.map