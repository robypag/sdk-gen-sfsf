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
var PerGlobalInfoChnRequestBuilder_1 = require("./PerGlobalInfoChnRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PerGlobalInfoCHN" of service "SFOData".
 */
var PerGlobalInfoChn = /** @class */ (function (_super) {
    __extends(PerGlobalInfoChn, _super);
    function PerGlobalInfoChn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerGlobalInfoChn`.
     * @returns A builder that constructs instances of entity type `PerGlobalInfoChn`.
     */
    PerGlobalInfoChn.builder = function () {
        return core_1.Entity.entityBuilder(PerGlobalInfoChn);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerGlobalInfoChn` entity type.
     * @returns A `PerGlobalInfoChn` request builder.
     */
    PerGlobalInfoChn.requestBuilder = function () {
        return new PerGlobalInfoChnRequestBuilder_1.PerGlobalInfoChnRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoChn`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerGlobalInfoChn`.
     */
    PerGlobalInfoChn.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PerGlobalInfoChn);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerGlobalInfoChn.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerGlobalInfoChn.
     */
    PerGlobalInfoChn._entityName = 'PerGlobalInfoCHN';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerGlobalInfoChn.
     */
    PerGlobalInfoChn._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerGlobalInfoChn._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PerGlobalInfoChn;
}(core_1.Entity));
exports.PerGlobalInfoChn = PerGlobalInfoChn;
var Territory_1 = require("./Territory");
var PicklistOption_1 = require("./PicklistOption");
var PerPerson_1 = require("./PerPerson");
(function (PerGlobalInfoChn) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.COUNTRY = new core_1.StringField('country', PerGlobalInfoChn, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.CREATED_BY = new core_1.StringField('createdBy', PerGlobalInfoChn, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PerGlobalInfoChn, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.CREATED_ON = new core_1.DateField('createdOn', PerGlobalInfoChn, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.END_DATE = new core_1.DateField('endDate', PerGlobalInfoChn, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_DATE_1 = new core_1.DateField('genericDate1', PerGlobalInfoChn, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_DATE_2 = new core_1.DateField('genericDate2', PerGlobalInfoChn, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_DATE_3 = new core_1.DateField('genericDate3', PerGlobalInfoChn, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_DATE_4 = new core_1.DateField('genericDate4', PerGlobalInfoChn, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_DATE_5 = new core_1.DateField('genericDate5', PerGlobalInfoChn, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_DATE_6 = new core_1.DateField('genericDate6', PerGlobalInfoChn, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_DATE_7 = new core_1.DateField('genericDate7', PerGlobalInfoChn, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_DATE_8 = new core_1.DateField('genericDate8', PerGlobalInfoChn, 'Edm.DateTime');
    /**
     * Static representation of the [[genericNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_NUMBER_1 = new core_1.BigNumberField('genericNumber1', PerGlobalInfoChn, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_NUMBER_10 = new core_1.BigNumberField('genericNumber10', PerGlobalInfoChn, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_NUMBER_11 = new core_1.BigNumberField('genericNumber11', PerGlobalInfoChn, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_NUMBER_12 = new core_1.BigNumberField('genericNumber12', PerGlobalInfoChn, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_NUMBER_13 = new core_1.BigNumberField('genericNumber13', PerGlobalInfoChn, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_NUMBER_2 = new core_1.BigNumberField('genericNumber2', PerGlobalInfoChn, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_NUMBER_3 = new core_1.BigNumberField('genericNumber3', PerGlobalInfoChn, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_NUMBER_4 = new core_1.BigNumberField('genericNumber4', PerGlobalInfoChn, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_NUMBER_5 = new core_1.BigNumberField('genericNumber5', PerGlobalInfoChn, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_NUMBER_6 = new core_1.BigNumberField('genericNumber6', PerGlobalInfoChn, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_NUMBER_7 = new core_1.BigNumberField('genericNumber7', PerGlobalInfoChn, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_NUMBER_8 = new core_1.BigNumberField('genericNumber8', PerGlobalInfoChn, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_NUMBER_9 = new core_1.BigNumberField('genericNumber9', PerGlobalInfoChn, 'Edm.Int64');
    /**
     * Static representation of the [[genericString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_STRING_1 = new core_1.StringField('genericString1', PerGlobalInfoChn, 'Edm.String');
    /**
     * Static representation of the [[genericString10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_STRING_10 = new core_1.StringField('genericString10', PerGlobalInfoChn, 'Edm.String');
    /**
     * Static representation of the [[genericString11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_STRING_11 = new core_1.StringField('genericString11', PerGlobalInfoChn, 'Edm.String');
    /**
     * Static representation of the [[genericString12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_STRING_12 = new core_1.StringField('genericString12', PerGlobalInfoChn, 'Edm.String');
    /**
     * Static representation of the [[genericString13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_STRING_13 = new core_1.StringField('genericString13', PerGlobalInfoChn, 'Edm.String');
    /**
     * Static representation of the [[genericString14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_STRING_14 = new core_1.StringField('genericString14', PerGlobalInfoChn, 'Edm.String');
    /**
     * Static representation of the [[genericString15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_STRING_15 = new core_1.StringField('genericString15', PerGlobalInfoChn, 'Edm.String');
    /**
     * Static representation of the [[genericString16]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_STRING_16 = new core_1.StringField('genericString16', PerGlobalInfoChn, 'Edm.String');
    /**
     * Static representation of the [[genericString17]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_STRING_17 = new core_1.StringField('genericString17', PerGlobalInfoChn, 'Edm.String');
    /**
     * Static representation of the [[genericString18]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_STRING_18 = new core_1.StringField('genericString18', PerGlobalInfoChn, 'Edm.String');
    /**
     * Static representation of the [[genericString19]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_STRING_19 = new core_1.StringField('genericString19', PerGlobalInfoChn, 'Edm.String');
    /**
     * Static representation of the [[genericString2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_STRING_2 = new core_1.StringField('genericString2', PerGlobalInfoChn, 'Edm.String');
    /**
     * Static representation of the [[genericString20]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_STRING_20 = new core_1.StringField('genericString20', PerGlobalInfoChn, 'Edm.String');
    /**
     * Static representation of the [[genericString3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_STRING_3 = new core_1.StringField('genericString3', PerGlobalInfoChn, 'Edm.String');
    /**
     * Static representation of the [[genericString4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_STRING_4 = new core_1.StringField('genericString4', PerGlobalInfoChn, 'Edm.String');
    /**
     * Static representation of the [[genericString5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_STRING_5 = new core_1.StringField('genericString5', PerGlobalInfoChn, 'Edm.String');
    /**
     * Static representation of the [[genericString6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_STRING_6 = new core_1.StringField('genericString6', PerGlobalInfoChn, 'Edm.String');
    /**
     * Static representation of the [[genericString7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_STRING_7 = new core_1.StringField('genericString7', PerGlobalInfoChn, 'Edm.String');
    /**
     * Static representation of the [[genericString8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_STRING_8 = new core_1.StringField('genericString8', PerGlobalInfoChn, 'Edm.String');
    /**
     * Static representation of the [[genericString9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_STRING_9 = new core_1.StringField('genericString9', PerGlobalInfoChn, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PerGlobalInfoChn, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PerGlobalInfoChn, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', PerGlobalInfoChn, 'Edm.DateTime');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.OPERATION = new core_1.StringField('operation', PerGlobalInfoChn, 'Edm.String');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.PERSON_ID_EXTERNAL = new core_1.StringField('personIdExternal', PerGlobalInfoChn, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.START_DATE = new core_1.DateField('startDate', PerGlobalInfoChn, 'Edm.DateTime');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', PerGlobalInfoChn, Territory_1.Territory);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_NUMBER_1_NAV = new core_1.OneToOneLink('genericNumber1Nav', PerGlobalInfoChn, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber2Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_NUMBER_2_NAV = new core_1.OneToOneLink('genericNumber2Nav', PerGlobalInfoChn, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber3Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_NUMBER_3_NAV = new core_1.OneToOneLink('genericNumber3Nav', PerGlobalInfoChn, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber4Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_NUMBER_4_NAV = new core_1.OneToOneLink('genericNumber4Nav', PerGlobalInfoChn, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_STRING_1_NAV = new core_1.OneToOneLink('genericString1Nav', PerGlobalInfoChn, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_STRING_2_NAV = new core_1.OneToOneLink('genericString2Nav', PerGlobalInfoChn, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString5Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_STRING_5_NAV = new core_1.OneToOneLink('genericString5Nav', PerGlobalInfoChn, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString6Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_STRING_6_NAV = new core_1.OneToOneLink('genericString6Nav', PerGlobalInfoChn, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString7Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_STRING_7_NAV = new core_1.OneToOneLink('genericString7Nav', PerGlobalInfoChn, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString8Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.GENERIC_STRING_8_NAV = new core_1.OneToOneLink('genericString8Nav', PerGlobalInfoChn, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoChn.PERSON_NAV = new core_1.OneToOneLink('personNav', PerGlobalInfoChn, PerPerson_1.PerPerson);
    /**
     * All fields of the PerGlobalInfoChn entity.
     */
    PerGlobalInfoChn._allFields = [
        PerGlobalInfoChn.COUNTRY,
        PerGlobalInfoChn.CREATED_BY,
        PerGlobalInfoChn.CREATED_DATE_TIME,
        PerGlobalInfoChn.CREATED_ON,
        PerGlobalInfoChn.END_DATE,
        PerGlobalInfoChn.GENERIC_DATE_1,
        PerGlobalInfoChn.GENERIC_DATE_2,
        PerGlobalInfoChn.GENERIC_DATE_3,
        PerGlobalInfoChn.GENERIC_DATE_4,
        PerGlobalInfoChn.GENERIC_DATE_5,
        PerGlobalInfoChn.GENERIC_DATE_6,
        PerGlobalInfoChn.GENERIC_DATE_7,
        PerGlobalInfoChn.GENERIC_DATE_8,
        PerGlobalInfoChn.GENERIC_NUMBER_1,
        PerGlobalInfoChn.GENERIC_NUMBER_10,
        PerGlobalInfoChn.GENERIC_NUMBER_11,
        PerGlobalInfoChn.GENERIC_NUMBER_12,
        PerGlobalInfoChn.GENERIC_NUMBER_13,
        PerGlobalInfoChn.GENERIC_NUMBER_2,
        PerGlobalInfoChn.GENERIC_NUMBER_3,
        PerGlobalInfoChn.GENERIC_NUMBER_4,
        PerGlobalInfoChn.GENERIC_NUMBER_5,
        PerGlobalInfoChn.GENERIC_NUMBER_6,
        PerGlobalInfoChn.GENERIC_NUMBER_7,
        PerGlobalInfoChn.GENERIC_NUMBER_8,
        PerGlobalInfoChn.GENERIC_NUMBER_9,
        PerGlobalInfoChn.GENERIC_STRING_1,
        PerGlobalInfoChn.GENERIC_STRING_10,
        PerGlobalInfoChn.GENERIC_STRING_11,
        PerGlobalInfoChn.GENERIC_STRING_12,
        PerGlobalInfoChn.GENERIC_STRING_13,
        PerGlobalInfoChn.GENERIC_STRING_14,
        PerGlobalInfoChn.GENERIC_STRING_15,
        PerGlobalInfoChn.GENERIC_STRING_16,
        PerGlobalInfoChn.GENERIC_STRING_17,
        PerGlobalInfoChn.GENERIC_STRING_18,
        PerGlobalInfoChn.GENERIC_STRING_19,
        PerGlobalInfoChn.GENERIC_STRING_2,
        PerGlobalInfoChn.GENERIC_STRING_20,
        PerGlobalInfoChn.GENERIC_STRING_3,
        PerGlobalInfoChn.GENERIC_STRING_4,
        PerGlobalInfoChn.GENERIC_STRING_5,
        PerGlobalInfoChn.GENERIC_STRING_6,
        PerGlobalInfoChn.GENERIC_STRING_7,
        PerGlobalInfoChn.GENERIC_STRING_8,
        PerGlobalInfoChn.GENERIC_STRING_9,
        PerGlobalInfoChn.LAST_MODIFIED_BY,
        PerGlobalInfoChn.LAST_MODIFIED_DATE_TIME,
        PerGlobalInfoChn.LAST_MODIFIED_ON,
        PerGlobalInfoChn.OPERATION,
        PerGlobalInfoChn.PERSON_ID_EXTERNAL,
        PerGlobalInfoChn.START_DATE,
        PerGlobalInfoChn.COUNTRY_NAV,
        PerGlobalInfoChn.GENERIC_NUMBER_1_NAV,
        PerGlobalInfoChn.GENERIC_NUMBER_2_NAV,
        PerGlobalInfoChn.GENERIC_NUMBER_3_NAV,
        PerGlobalInfoChn.GENERIC_NUMBER_4_NAV,
        PerGlobalInfoChn.GENERIC_STRING_1_NAV,
        PerGlobalInfoChn.GENERIC_STRING_2_NAV,
        PerGlobalInfoChn.GENERIC_STRING_5_NAV,
        PerGlobalInfoChn.GENERIC_STRING_6_NAV,
        PerGlobalInfoChn.GENERIC_STRING_7_NAV,
        PerGlobalInfoChn.GENERIC_STRING_8_NAV,
        PerGlobalInfoChn.PERSON_NAV
    ];
    /**
     * All fields selector.
     */
    PerGlobalInfoChn.ALL_FIELDS = new core_1.AllFields('*', PerGlobalInfoChn);
    /**
     * All key fields of the PerGlobalInfoChn entity.
     */
    PerGlobalInfoChn._keyFields = [PerGlobalInfoChn.COUNTRY, PerGlobalInfoChn.PERSON_ID_EXTERNAL, PerGlobalInfoChn.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property PerGlobalInfoChn.
     */
    PerGlobalInfoChn._keys = PerGlobalInfoChn._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerGlobalInfoChn = exports.PerGlobalInfoChn || (exports.PerGlobalInfoChn = {}));
exports.PerGlobalInfoChn = PerGlobalInfoChn;
//# sourceMappingURL=PerGlobalInfoChn.js.map