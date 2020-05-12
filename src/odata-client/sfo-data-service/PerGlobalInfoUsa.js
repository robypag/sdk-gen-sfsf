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
var PerGlobalInfoUsaRequestBuilder_1 = require("./PerGlobalInfoUsaRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PerGlobalInfoUSA" of service "SFOData".
 */
var PerGlobalInfoUsa = /** @class */ (function (_super) {
    __extends(PerGlobalInfoUsa, _super);
    function PerGlobalInfoUsa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerGlobalInfoUsa`.
     * @returns A builder that constructs instances of entity type `PerGlobalInfoUsa`.
     */
    PerGlobalInfoUsa.builder = function () {
        return core_1.Entity.entityBuilder(PerGlobalInfoUsa);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerGlobalInfoUsa` entity type.
     * @returns A `PerGlobalInfoUsa` request builder.
     */
    PerGlobalInfoUsa.requestBuilder = function () {
        return new PerGlobalInfoUsaRequestBuilder_1.PerGlobalInfoUsaRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoUsa`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerGlobalInfoUsa`.
     */
    PerGlobalInfoUsa.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PerGlobalInfoUsa);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerGlobalInfoUsa.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerGlobalInfoUsa.
     */
    PerGlobalInfoUsa._entityName = 'PerGlobalInfoUSA';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerGlobalInfoUsa.
     */
    PerGlobalInfoUsa._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerGlobalInfoUsa._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PerGlobalInfoUsa;
}(core_1.Entity));
exports.PerGlobalInfoUsa = PerGlobalInfoUsa;
var Territory_1 = require("./Territory");
var PicklistOption_1 = require("./PicklistOption");
var PerPerson_1 = require("./PerPerson");
(function (PerGlobalInfoUsa) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.COUNTRY = new core_1.StringField('country', PerGlobalInfoUsa, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.CREATED_BY = new core_1.StringField('createdBy', PerGlobalInfoUsa, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PerGlobalInfoUsa, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.CREATED_ON = new core_1.DateField('createdOn', PerGlobalInfoUsa, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.END_DATE = new core_1.DateField('endDate', PerGlobalInfoUsa, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_DATE_1 = new core_1.DateField('genericDate1', PerGlobalInfoUsa, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_DATE_2 = new core_1.DateField('genericDate2', PerGlobalInfoUsa, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_DATE_3 = new core_1.DateField('genericDate3', PerGlobalInfoUsa, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_DATE_4 = new core_1.DateField('genericDate4', PerGlobalInfoUsa, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_DATE_5 = new core_1.DateField('genericDate5', PerGlobalInfoUsa, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_DATE_6 = new core_1.DateField('genericDate6', PerGlobalInfoUsa, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_DATE_7 = new core_1.DateField('genericDate7', PerGlobalInfoUsa, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_DATE_8 = new core_1.DateField('genericDate8', PerGlobalInfoUsa, 'Edm.DateTime');
    /**
     * Static representation of the [[genericNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_NUMBER_1 = new core_1.BigNumberField('genericNumber1', PerGlobalInfoUsa, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_NUMBER_10 = new core_1.BigNumberField('genericNumber10', PerGlobalInfoUsa, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_NUMBER_11 = new core_1.BigNumberField('genericNumber11', PerGlobalInfoUsa, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_NUMBER_12 = new core_1.BigNumberField('genericNumber12', PerGlobalInfoUsa, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_NUMBER_13 = new core_1.BigNumberField('genericNumber13', PerGlobalInfoUsa, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_NUMBER_2 = new core_1.BigNumberField('genericNumber2', PerGlobalInfoUsa, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_NUMBER_3 = new core_1.BigNumberField('genericNumber3', PerGlobalInfoUsa, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_NUMBER_4 = new core_1.BigNumberField('genericNumber4', PerGlobalInfoUsa, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_NUMBER_5 = new core_1.BigNumberField('genericNumber5', PerGlobalInfoUsa, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_NUMBER_6 = new core_1.BigNumberField('genericNumber6', PerGlobalInfoUsa, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_NUMBER_7 = new core_1.BigNumberField('genericNumber7', PerGlobalInfoUsa, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_NUMBER_8 = new core_1.BigNumberField('genericNumber8', PerGlobalInfoUsa, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_NUMBER_9 = new core_1.BigNumberField('genericNumber9', PerGlobalInfoUsa, 'Edm.Int64');
    /**
     * Static representation of the [[genericString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_1 = new core_1.StringField('genericString1', PerGlobalInfoUsa, 'Edm.String');
    /**
     * Static representation of the [[genericString10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_10 = new core_1.StringField('genericString10', PerGlobalInfoUsa, 'Edm.String');
    /**
     * Static representation of the [[genericString11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_11 = new core_1.StringField('genericString11', PerGlobalInfoUsa, 'Edm.String');
    /**
     * Static representation of the [[genericString12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_12 = new core_1.StringField('genericString12', PerGlobalInfoUsa, 'Edm.String');
    /**
     * Static representation of the [[genericString13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_13 = new core_1.StringField('genericString13', PerGlobalInfoUsa, 'Edm.String');
    /**
     * Static representation of the [[genericString14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_14 = new core_1.StringField('genericString14', PerGlobalInfoUsa, 'Edm.String');
    /**
     * Static representation of the [[genericString15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_15 = new core_1.StringField('genericString15', PerGlobalInfoUsa, 'Edm.String');
    /**
     * Static representation of the [[genericString16]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_16 = new core_1.StringField('genericString16', PerGlobalInfoUsa, 'Edm.String');
    /**
     * Static representation of the [[genericString17]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_17 = new core_1.StringField('genericString17', PerGlobalInfoUsa, 'Edm.String');
    /**
     * Static representation of the [[genericString18]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_18 = new core_1.StringField('genericString18', PerGlobalInfoUsa, 'Edm.String');
    /**
     * Static representation of the [[genericString19]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_19 = new core_1.StringField('genericString19', PerGlobalInfoUsa, 'Edm.String');
    /**
     * Static representation of the [[genericString2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_2 = new core_1.StringField('genericString2', PerGlobalInfoUsa, 'Edm.String');
    /**
     * Static representation of the [[genericString20]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_20 = new core_1.StringField('genericString20', PerGlobalInfoUsa, 'Edm.String');
    /**
     * Static representation of the [[genericString3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_3 = new core_1.StringField('genericString3', PerGlobalInfoUsa, 'Edm.String');
    /**
     * Static representation of the [[genericString4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_4 = new core_1.StringField('genericString4', PerGlobalInfoUsa, 'Edm.String');
    /**
     * Static representation of the [[genericString5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_5 = new core_1.StringField('genericString5', PerGlobalInfoUsa, 'Edm.String');
    /**
     * Static representation of the [[genericString6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_6 = new core_1.StringField('genericString6', PerGlobalInfoUsa, 'Edm.String');
    /**
     * Static representation of the [[genericString7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_7 = new core_1.StringField('genericString7', PerGlobalInfoUsa, 'Edm.String');
    /**
     * Static representation of the [[genericString8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_8 = new core_1.StringField('genericString8', PerGlobalInfoUsa, 'Edm.String');
    /**
     * Static representation of the [[genericString9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_9 = new core_1.StringField('genericString9', PerGlobalInfoUsa, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PerGlobalInfoUsa, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PerGlobalInfoUsa, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', PerGlobalInfoUsa, 'Edm.DateTime');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.OPERATION = new core_1.StringField('operation', PerGlobalInfoUsa, 'Edm.String');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.PERSON_ID_EXTERNAL = new core_1.StringField('personIdExternal', PerGlobalInfoUsa, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.START_DATE = new core_1.DateField('startDate', PerGlobalInfoUsa, 'Edm.DateTime');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', PerGlobalInfoUsa, Territory_1.Territory);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_NUMBER_1_NAV = new core_1.OneToOneLink('genericNumber1Nav', PerGlobalInfoUsa, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber2Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_NUMBER_2_NAV = new core_1.OneToOneLink('genericNumber2Nav', PerGlobalInfoUsa, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber3Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_NUMBER_3_NAV = new core_1.OneToOneLink('genericNumber3Nav', PerGlobalInfoUsa, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber4Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_NUMBER_4_NAV = new core_1.OneToOneLink('genericNumber4Nav', PerGlobalInfoUsa, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber5Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_NUMBER_5_NAV = new core_1.OneToOneLink('genericNumber5Nav', PerGlobalInfoUsa, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber6Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_NUMBER_6_NAV = new core_1.OneToOneLink('genericNumber6Nav', PerGlobalInfoUsa, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber7Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_NUMBER_7_NAV = new core_1.OneToOneLink('genericNumber7Nav', PerGlobalInfoUsa, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber8Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_NUMBER_8_NAV = new core_1.OneToOneLink('genericNumber8Nav', PerGlobalInfoUsa, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber9Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_NUMBER_9_NAV = new core_1.OneToOneLink('genericNumber9Nav', PerGlobalInfoUsa, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString10Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_10_NAV = new core_1.OneToOneLink('genericString10Nav', PerGlobalInfoUsa, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString11Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_11_NAV = new core_1.OneToOneLink('genericString11Nav', PerGlobalInfoUsa, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString13Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_13_NAV = new core_1.OneToOneLink('genericString13Nav', PerGlobalInfoUsa, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_1_NAV = new core_1.OneToOneLink('genericString1Nav', PerGlobalInfoUsa, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_2_NAV = new core_1.OneToOneLink('genericString2Nav', PerGlobalInfoUsa, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString3Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_3_NAV = new core_1.OneToOneLink('genericString3Nav', PerGlobalInfoUsa, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString6Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_6_NAV = new core_1.OneToOneLink('genericString6Nav', PerGlobalInfoUsa, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString7Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_7_NAV = new core_1.OneToOneLink('genericString7Nav', PerGlobalInfoUsa, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString8Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_8_NAV = new core_1.OneToOneLink('genericString8Nav', PerGlobalInfoUsa, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString9Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.GENERIC_STRING_9_NAV = new core_1.OneToOneLink('genericString9Nav', PerGlobalInfoUsa, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoUsa.PERSON_NAV = new core_1.OneToOneLink('personNav', PerGlobalInfoUsa, PerPerson_1.PerPerson);
    /**
     * All fields of the PerGlobalInfoUsa entity.
     */
    PerGlobalInfoUsa._allFields = [
        PerGlobalInfoUsa.COUNTRY,
        PerGlobalInfoUsa.CREATED_BY,
        PerGlobalInfoUsa.CREATED_DATE_TIME,
        PerGlobalInfoUsa.CREATED_ON,
        PerGlobalInfoUsa.END_DATE,
        PerGlobalInfoUsa.GENERIC_DATE_1,
        PerGlobalInfoUsa.GENERIC_DATE_2,
        PerGlobalInfoUsa.GENERIC_DATE_3,
        PerGlobalInfoUsa.GENERIC_DATE_4,
        PerGlobalInfoUsa.GENERIC_DATE_5,
        PerGlobalInfoUsa.GENERIC_DATE_6,
        PerGlobalInfoUsa.GENERIC_DATE_7,
        PerGlobalInfoUsa.GENERIC_DATE_8,
        PerGlobalInfoUsa.GENERIC_NUMBER_1,
        PerGlobalInfoUsa.GENERIC_NUMBER_10,
        PerGlobalInfoUsa.GENERIC_NUMBER_11,
        PerGlobalInfoUsa.GENERIC_NUMBER_12,
        PerGlobalInfoUsa.GENERIC_NUMBER_13,
        PerGlobalInfoUsa.GENERIC_NUMBER_2,
        PerGlobalInfoUsa.GENERIC_NUMBER_3,
        PerGlobalInfoUsa.GENERIC_NUMBER_4,
        PerGlobalInfoUsa.GENERIC_NUMBER_5,
        PerGlobalInfoUsa.GENERIC_NUMBER_6,
        PerGlobalInfoUsa.GENERIC_NUMBER_7,
        PerGlobalInfoUsa.GENERIC_NUMBER_8,
        PerGlobalInfoUsa.GENERIC_NUMBER_9,
        PerGlobalInfoUsa.GENERIC_STRING_1,
        PerGlobalInfoUsa.GENERIC_STRING_10,
        PerGlobalInfoUsa.GENERIC_STRING_11,
        PerGlobalInfoUsa.GENERIC_STRING_12,
        PerGlobalInfoUsa.GENERIC_STRING_13,
        PerGlobalInfoUsa.GENERIC_STRING_14,
        PerGlobalInfoUsa.GENERIC_STRING_15,
        PerGlobalInfoUsa.GENERIC_STRING_16,
        PerGlobalInfoUsa.GENERIC_STRING_17,
        PerGlobalInfoUsa.GENERIC_STRING_18,
        PerGlobalInfoUsa.GENERIC_STRING_19,
        PerGlobalInfoUsa.GENERIC_STRING_2,
        PerGlobalInfoUsa.GENERIC_STRING_20,
        PerGlobalInfoUsa.GENERIC_STRING_3,
        PerGlobalInfoUsa.GENERIC_STRING_4,
        PerGlobalInfoUsa.GENERIC_STRING_5,
        PerGlobalInfoUsa.GENERIC_STRING_6,
        PerGlobalInfoUsa.GENERIC_STRING_7,
        PerGlobalInfoUsa.GENERIC_STRING_8,
        PerGlobalInfoUsa.GENERIC_STRING_9,
        PerGlobalInfoUsa.LAST_MODIFIED_BY,
        PerGlobalInfoUsa.LAST_MODIFIED_DATE_TIME,
        PerGlobalInfoUsa.LAST_MODIFIED_ON,
        PerGlobalInfoUsa.OPERATION,
        PerGlobalInfoUsa.PERSON_ID_EXTERNAL,
        PerGlobalInfoUsa.START_DATE,
        PerGlobalInfoUsa.COUNTRY_NAV,
        PerGlobalInfoUsa.GENERIC_NUMBER_1_NAV,
        PerGlobalInfoUsa.GENERIC_NUMBER_2_NAV,
        PerGlobalInfoUsa.GENERIC_NUMBER_3_NAV,
        PerGlobalInfoUsa.GENERIC_NUMBER_4_NAV,
        PerGlobalInfoUsa.GENERIC_NUMBER_5_NAV,
        PerGlobalInfoUsa.GENERIC_NUMBER_6_NAV,
        PerGlobalInfoUsa.GENERIC_NUMBER_7_NAV,
        PerGlobalInfoUsa.GENERIC_NUMBER_8_NAV,
        PerGlobalInfoUsa.GENERIC_NUMBER_9_NAV,
        PerGlobalInfoUsa.GENERIC_STRING_10_NAV,
        PerGlobalInfoUsa.GENERIC_STRING_11_NAV,
        PerGlobalInfoUsa.GENERIC_STRING_13_NAV,
        PerGlobalInfoUsa.GENERIC_STRING_1_NAV,
        PerGlobalInfoUsa.GENERIC_STRING_2_NAV,
        PerGlobalInfoUsa.GENERIC_STRING_3_NAV,
        PerGlobalInfoUsa.GENERIC_STRING_6_NAV,
        PerGlobalInfoUsa.GENERIC_STRING_7_NAV,
        PerGlobalInfoUsa.GENERIC_STRING_8_NAV,
        PerGlobalInfoUsa.GENERIC_STRING_9_NAV,
        PerGlobalInfoUsa.PERSON_NAV
    ];
    /**
     * All fields selector.
     */
    PerGlobalInfoUsa.ALL_FIELDS = new core_1.AllFields('*', PerGlobalInfoUsa);
    /**
     * All key fields of the PerGlobalInfoUsa entity.
     */
    PerGlobalInfoUsa._keyFields = [PerGlobalInfoUsa.COUNTRY, PerGlobalInfoUsa.PERSON_ID_EXTERNAL, PerGlobalInfoUsa.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property PerGlobalInfoUsa.
     */
    PerGlobalInfoUsa._keys = PerGlobalInfoUsa._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerGlobalInfoUsa = exports.PerGlobalInfoUsa || (exports.PerGlobalInfoUsa = {}));
exports.PerGlobalInfoUsa = PerGlobalInfoUsa;
//# sourceMappingURL=PerGlobalInfoUsa.js.map