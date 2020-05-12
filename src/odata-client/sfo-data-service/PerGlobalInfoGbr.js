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
var PerGlobalInfoGbrRequestBuilder_1 = require("./PerGlobalInfoGbrRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PerGlobalInfoGBR" of service "SFOData".
 */
var PerGlobalInfoGbr = /** @class */ (function (_super) {
    __extends(PerGlobalInfoGbr, _super);
    function PerGlobalInfoGbr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerGlobalInfoGbr`.
     * @returns A builder that constructs instances of entity type `PerGlobalInfoGbr`.
     */
    PerGlobalInfoGbr.builder = function () {
        return core_1.Entity.entityBuilder(PerGlobalInfoGbr);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerGlobalInfoGbr` entity type.
     * @returns A `PerGlobalInfoGbr` request builder.
     */
    PerGlobalInfoGbr.requestBuilder = function () {
        return new PerGlobalInfoGbrRequestBuilder_1.PerGlobalInfoGbrRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoGbr`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerGlobalInfoGbr`.
     */
    PerGlobalInfoGbr.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PerGlobalInfoGbr);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerGlobalInfoGbr.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerGlobalInfoGbr.
     */
    PerGlobalInfoGbr._entityName = 'PerGlobalInfoGBR';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerGlobalInfoGbr.
     */
    PerGlobalInfoGbr._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerGlobalInfoGbr._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PerGlobalInfoGbr;
}(core_1.Entity));
exports.PerGlobalInfoGbr = PerGlobalInfoGbr;
var Territory_1 = require("./Territory");
var PicklistOption_1 = require("./PicklistOption");
var PerPerson_1 = require("./PerPerson");
(function (PerGlobalInfoGbr) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.COUNTRY = new core_1.StringField('country', PerGlobalInfoGbr, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.CREATED_BY = new core_1.StringField('createdBy', PerGlobalInfoGbr, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PerGlobalInfoGbr, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.CREATED_ON = new core_1.DateField('createdOn', PerGlobalInfoGbr, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.END_DATE = new core_1.DateField('endDate', PerGlobalInfoGbr, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_DATE_1 = new core_1.DateField('genericDate1', PerGlobalInfoGbr, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_DATE_2 = new core_1.DateField('genericDate2', PerGlobalInfoGbr, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_DATE_3 = new core_1.DateField('genericDate3', PerGlobalInfoGbr, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_DATE_4 = new core_1.DateField('genericDate4', PerGlobalInfoGbr, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_DATE_5 = new core_1.DateField('genericDate5', PerGlobalInfoGbr, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_DATE_6 = new core_1.DateField('genericDate6', PerGlobalInfoGbr, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_DATE_7 = new core_1.DateField('genericDate7', PerGlobalInfoGbr, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_DATE_8 = new core_1.DateField('genericDate8', PerGlobalInfoGbr, 'Edm.DateTime');
    /**
     * Static representation of the [[genericNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_NUMBER_1 = new core_1.BigNumberField('genericNumber1', PerGlobalInfoGbr, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_NUMBER_10 = new core_1.BigNumberField('genericNumber10', PerGlobalInfoGbr, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_NUMBER_11 = new core_1.BigNumberField('genericNumber11', PerGlobalInfoGbr, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_NUMBER_12 = new core_1.BigNumberField('genericNumber12', PerGlobalInfoGbr, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_NUMBER_13 = new core_1.BigNumberField('genericNumber13', PerGlobalInfoGbr, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_NUMBER_2 = new core_1.BigNumberField('genericNumber2', PerGlobalInfoGbr, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_NUMBER_3 = new core_1.BigNumberField('genericNumber3', PerGlobalInfoGbr, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_NUMBER_4 = new core_1.BigNumberField('genericNumber4', PerGlobalInfoGbr, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_NUMBER_5 = new core_1.BigNumberField('genericNumber5', PerGlobalInfoGbr, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_NUMBER_6 = new core_1.BigNumberField('genericNumber6', PerGlobalInfoGbr, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_NUMBER_7 = new core_1.BigNumberField('genericNumber7', PerGlobalInfoGbr, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_NUMBER_8 = new core_1.BigNumberField('genericNumber8', PerGlobalInfoGbr, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_NUMBER_9 = new core_1.BigNumberField('genericNumber9', PerGlobalInfoGbr, 'Edm.Int64');
    /**
     * Static representation of the [[genericString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_STRING_1 = new core_1.StringField('genericString1', PerGlobalInfoGbr, 'Edm.String');
    /**
     * Static representation of the [[genericString10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_STRING_10 = new core_1.StringField('genericString10', PerGlobalInfoGbr, 'Edm.String');
    /**
     * Static representation of the [[genericString11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_STRING_11 = new core_1.StringField('genericString11', PerGlobalInfoGbr, 'Edm.String');
    /**
     * Static representation of the [[genericString12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_STRING_12 = new core_1.StringField('genericString12', PerGlobalInfoGbr, 'Edm.String');
    /**
     * Static representation of the [[genericString13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_STRING_13 = new core_1.StringField('genericString13', PerGlobalInfoGbr, 'Edm.String');
    /**
     * Static representation of the [[genericString14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_STRING_14 = new core_1.StringField('genericString14', PerGlobalInfoGbr, 'Edm.String');
    /**
     * Static representation of the [[genericString15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_STRING_15 = new core_1.StringField('genericString15', PerGlobalInfoGbr, 'Edm.String');
    /**
     * Static representation of the [[genericString16]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_STRING_16 = new core_1.StringField('genericString16', PerGlobalInfoGbr, 'Edm.String');
    /**
     * Static representation of the [[genericString17]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_STRING_17 = new core_1.StringField('genericString17', PerGlobalInfoGbr, 'Edm.String');
    /**
     * Static representation of the [[genericString18]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_STRING_18 = new core_1.StringField('genericString18', PerGlobalInfoGbr, 'Edm.String');
    /**
     * Static representation of the [[genericString19]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_STRING_19 = new core_1.StringField('genericString19', PerGlobalInfoGbr, 'Edm.String');
    /**
     * Static representation of the [[genericString2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_STRING_2 = new core_1.StringField('genericString2', PerGlobalInfoGbr, 'Edm.String');
    /**
     * Static representation of the [[genericString20]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_STRING_20 = new core_1.StringField('genericString20', PerGlobalInfoGbr, 'Edm.String');
    /**
     * Static representation of the [[genericString3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_STRING_3 = new core_1.StringField('genericString3', PerGlobalInfoGbr, 'Edm.String');
    /**
     * Static representation of the [[genericString4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_STRING_4 = new core_1.StringField('genericString4', PerGlobalInfoGbr, 'Edm.String');
    /**
     * Static representation of the [[genericString5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_STRING_5 = new core_1.StringField('genericString5', PerGlobalInfoGbr, 'Edm.String');
    /**
     * Static representation of the [[genericString6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_STRING_6 = new core_1.StringField('genericString6', PerGlobalInfoGbr, 'Edm.String');
    /**
     * Static representation of the [[genericString7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_STRING_7 = new core_1.StringField('genericString7', PerGlobalInfoGbr, 'Edm.String');
    /**
     * Static representation of the [[genericString8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_STRING_8 = new core_1.StringField('genericString8', PerGlobalInfoGbr, 'Edm.String');
    /**
     * Static representation of the [[genericString9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_STRING_9 = new core_1.StringField('genericString9', PerGlobalInfoGbr, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PerGlobalInfoGbr, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PerGlobalInfoGbr, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', PerGlobalInfoGbr, 'Edm.DateTime');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.OPERATION = new core_1.StringField('operation', PerGlobalInfoGbr, 'Edm.String');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.PERSON_ID_EXTERNAL = new core_1.StringField('personIdExternal', PerGlobalInfoGbr, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.START_DATE = new core_1.DateField('startDate', PerGlobalInfoGbr, 'Edm.DateTime');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', PerGlobalInfoGbr, Territory_1.Territory);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_NUMBER_1_NAV = new core_1.OneToOneLink('genericNumber1Nav', PerGlobalInfoGbr, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber2Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_NUMBER_2_NAV = new core_1.OneToOneLink('genericNumber2Nav', PerGlobalInfoGbr, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber3Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_NUMBER_3_NAV = new core_1.OneToOneLink('genericNumber3Nav', PerGlobalInfoGbr, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_STRING_1_NAV = new core_1.OneToOneLink('genericString1Nav', PerGlobalInfoGbr, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_STRING_2_NAV = new core_1.OneToOneLink('genericString2Nav', PerGlobalInfoGbr, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString3Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.GENERIC_STRING_3_NAV = new core_1.OneToOneLink('genericString3Nav', PerGlobalInfoGbr, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoGbr.PERSON_NAV = new core_1.OneToOneLink('personNav', PerGlobalInfoGbr, PerPerson_1.PerPerson);
    /**
     * All fields of the PerGlobalInfoGbr entity.
     */
    PerGlobalInfoGbr._allFields = [
        PerGlobalInfoGbr.COUNTRY,
        PerGlobalInfoGbr.CREATED_BY,
        PerGlobalInfoGbr.CREATED_DATE_TIME,
        PerGlobalInfoGbr.CREATED_ON,
        PerGlobalInfoGbr.END_DATE,
        PerGlobalInfoGbr.GENERIC_DATE_1,
        PerGlobalInfoGbr.GENERIC_DATE_2,
        PerGlobalInfoGbr.GENERIC_DATE_3,
        PerGlobalInfoGbr.GENERIC_DATE_4,
        PerGlobalInfoGbr.GENERIC_DATE_5,
        PerGlobalInfoGbr.GENERIC_DATE_6,
        PerGlobalInfoGbr.GENERIC_DATE_7,
        PerGlobalInfoGbr.GENERIC_DATE_8,
        PerGlobalInfoGbr.GENERIC_NUMBER_1,
        PerGlobalInfoGbr.GENERIC_NUMBER_10,
        PerGlobalInfoGbr.GENERIC_NUMBER_11,
        PerGlobalInfoGbr.GENERIC_NUMBER_12,
        PerGlobalInfoGbr.GENERIC_NUMBER_13,
        PerGlobalInfoGbr.GENERIC_NUMBER_2,
        PerGlobalInfoGbr.GENERIC_NUMBER_3,
        PerGlobalInfoGbr.GENERIC_NUMBER_4,
        PerGlobalInfoGbr.GENERIC_NUMBER_5,
        PerGlobalInfoGbr.GENERIC_NUMBER_6,
        PerGlobalInfoGbr.GENERIC_NUMBER_7,
        PerGlobalInfoGbr.GENERIC_NUMBER_8,
        PerGlobalInfoGbr.GENERIC_NUMBER_9,
        PerGlobalInfoGbr.GENERIC_STRING_1,
        PerGlobalInfoGbr.GENERIC_STRING_10,
        PerGlobalInfoGbr.GENERIC_STRING_11,
        PerGlobalInfoGbr.GENERIC_STRING_12,
        PerGlobalInfoGbr.GENERIC_STRING_13,
        PerGlobalInfoGbr.GENERIC_STRING_14,
        PerGlobalInfoGbr.GENERIC_STRING_15,
        PerGlobalInfoGbr.GENERIC_STRING_16,
        PerGlobalInfoGbr.GENERIC_STRING_17,
        PerGlobalInfoGbr.GENERIC_STRING_18,
        PerGlobalInfoGbr.GENERIC_STRING_19,
        PerGlobalInfoGbr.GENERIC_STRING_2,
        PerGlobalInfoGbr.GENERIC_STRING_20,
        PerGlobalInfoGbr.GENERIC_STRING_3,
        PerGlobalInfoGbr.GENERIC_STRING_4,
        PerGlobalInfoGbr.GENERIC_STRING_5,
        PerGlobalInfoGbr.GENERIC_STRING_6,
        PerGlobalInfoGbr.GENERIC_STRING_7,
        PerGlobalInfoGbr.GENERIC_STRING_8,
        PerGlobalInfoGbr.GENERIC_STRING_9,
        PerGlobalInfoGbr.LAST_MODIFIED_BY,
        PerGlobalInfoGbr.LAST_MODIFIED_DATE_TIME,
        PerGlobalInfoGbr.LAST_MODIFIED_ON,
        PerGlobalInfoGbr.OPERATION,
        PerGlobalInfoGbr.PERSON_ID_EXTERNAL,
        PerGlobalInfoGbr.START_DATE,
        PerGlobalInfoGbr.COUNTRY_NAV,
        PerGlobalInfoGbr.GENERIC_NUMBER_1_NAV,
        PerGlobalInfoGbr.GENERIC_NUMBER_2_NAV,
        PerGlobalInfoGbr.GENERIC_NUMBER_3_NAV,
        PerGlobalInfoGbr.GENERIC_STRING_1_NAV,
        PerGlobalInfoGbr.GENERIC_STRING_2_NAV,
        PerGlobalInfoGbr.GENERIC_STRING_3_NAV,
        PerGlobalInfoGbr.PERSON_NAV
    ];
    /**
     * All fields selector.
     */
    PerGlobalInfoGbr.ALL_FIELDS = new core_1.AllFields('*', PerGlobalInfoGbr);
    /**
     * All key fields of the PerGlobalInfoGbr entity.
     */
    PerGlobalInfoGbr._keyFields = [PerGlobalInfoGbr.COUNTRY, PerGlobalInfoGbr.PERSON_ID_EXTERNAL, PerGlobalInfoGbr.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property PerGlobalInfoGbr.
     */
    PerGlobalInfoGbr._keys = PerGlobalInfoGbr._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerGlobalInfoGbr = exports.PerGlobalInfoGbr || (exports.PerGlobalInfoGbr = {}));
exports.PerGlobalInfoGbr = PerGlobalInfoGbr;
//# sourceMappingURL=PerGlobalInfoGbr.js.map