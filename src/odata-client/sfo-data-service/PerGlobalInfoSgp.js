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
var PerGlobalInfoSgpRequestBuilder_1 = require("./PerGlobalInfoSgpRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PerGlobalInfoSGP" of service "SFOData".
 */
var PerGlobalInfoSgp = /** @class */ (function (_super) {
    __extends(PerGlobalInfoSgp, _super);
    function PerGlobalInfoSgp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerGlobalInfoSgp`.
     * @returns A builder that constructs instances of entity type `PerGlobalInfoSgp`.
     */
    PerGlobalInfoSgp.builder = function () {
        return core_1.Entity.entityBuilder(PerGlobalInfoSgp);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerGlobalInfoSgp` entity type.
     * @returns A `PerGlobalInfoSgp` request builder.
     */
    PerGlobalInfoSgp.requestBuilder = function () {
        return new PerGlobalInfoSgpRequestBuilder_1.PerGlobalInfoSgpRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoSgp`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerGlobalInfoSgp`.
     */
    PerGlobalInfoSgp.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PerGlobalInfoSgp);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerGlobalInfoSgp.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerGlobalInfoSgp.
     */
    PerGlobalInfoSgp._entityName = 'PerGlobalInfoSGP';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerGlobalInfoSgp.
     */
    PerGlobalInfoSgp._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerGlobalInfoSgp._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PerGlobalInfoSgp;
}(core_1.Entity));
exports.PerGlobalInfoSgp = PerGlobalInfoSgp;
var Territory_1 = require("./Territory");
var PicklistOption_1 = require("./PicklistOption");
var PerPerson_1 = require("./PerPerson");
(function (PerGlobalInfoSgp) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.COUNTRY = new core_1.StringField('country', PerGlobalInfoSgp, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.CREATED_BY = new core_1.StringField('createdBy', PerGlobalInfoSgp, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PerGlobalInfoSgp, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.CREATED_ON = new core_1.DateField('createdOn', PerGlobalInfoSgp, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.END_DATE = new core_1.DateField('endDate', PerGlobalInfoSgp, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_DATE_1 = new core_1.DateField('genericDate1', PerGlobalInfoSgp, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_DATE_2 = new core_1.DateField('genericDate2', PerGlobalInfoSgp, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_DATE_3 = new core_1.DateField('genericDate3', PerGlobalInfoSgp, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_DATE_4 = new core_1.DateField('genericDate4', PerGlobalInfoSgp, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_DATE_5 = new core_1.DateField('genericDate5', PerGlobalInfoSgp, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_DATE_6 = new core_1.DateField('genericDate6', PerGlobalInfoSgp, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_DATE_7 = new core_1.DateField('genericDate7', PerGlobalInfoSgp, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_DATE_8 = new core_1.DateField('genericDate8', PerGlobalInfoSgp, 'Edm.DateTime');
    /**
     * Static representation of the [[genericNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_NUMBER_1 = new core_1.BigNumberField('genericNumber1', PerGlobalInfoSgp, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_NUMBER_10 = new core_1.BigNumberField('genericNumber10', PerGlobalInfoSgp, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_NUMBER_11 = new core_1.BigNumberField('genericNumber11', PerGlobalInfoSgp, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_NUMBER_12 = new core_1.BigNumberField('genericNumber12', PerGlobalInfoSgp, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_NUMBER_13 = new core_1.BigNumberField('genericNumber13', PerGlobalInfoSgp, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_NUMBER_2 = new core_1.BigNumberField('genericNumber2', PerGlobalInfoSgp, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_NUMBER_3 = new core_1.BigNumberField('genericNumber3', PerGlobalInfoSgp, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_NUMBER_4 = new core_1.BigNumberField('genericNumber4', PerGlobalInfoSgp, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_NUMBER_5 = new core_1.BigNumberField('genericNumber5', PerGlobalInfoSgp, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_NUMBER_6 = new core_1.BigNumberField('genericNumber6', PerGlobalInfoSgp, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_NUMBER_7 = new core_1.BigNumberField('genericNumber7', PerGlobalInfoSgp, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_NUMBER_8 = new core_1.BigNumberField('genericNumber8', PerGlobalInfoSgp, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_NUMBER_9 = new core_1.BigNumberField('genericNumber9', PerGlobalInfoSgp, 'Edm.Int64');
    /**
     * Static representation of the [[genericString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_STRING_1 = new core_1.StringField('genericString1', PerGlobalInfoSgp, 'Edm.String');
    /**
     * Static representation of the [[genericString10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_STRING_10 = new core_1.StringField('genericString10', PerGlobalInfoSgp, 'Edm.String');
    /**
     * Static representation of the [[genericString11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_STRING_11 = new core_1.StringField('genericString11', PerGlobalInfoSgp, 'Edm.String');
    /**
     * Static representation of the [[genericString12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_STRING_12 = new core_1.StringField('genericString12', PerGlobalInfoSgp, 'Edm.String');
    /**
     * Static representation of the [[genericString13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_STRING_13 = new core_1.StringField('genericString13', PerGlobalInfoSgp, 'Edm.String');
    /**
     * Static representation of the [[genericString14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_STRING_14 = new core_1.StringField('genericString14', PerGlobalInfoSgp, 'Edm.String');
    /**
     * Static representation of the [[genericString15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_STRING_15 = new core_1.StringField('genericString15', PerGlobalInfoSgp, 'Edm.String');
    /**
     * Static representation of the [[genericString16]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_STRING_16 = new core_1.StringField('genericString16', PerGlobalInfoSgp, 'Edm.String');
    /**
     * Static representation of the [[genericString17]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_STRING_17 = new core_1.StringField('genericString17', PerGlobalInfoSgp, 'Edm.String');
    /**
     * Static representation of the [[genericString18]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_STRING_18 = new core_1.StringField('genericString18', PerGlobalInfoSgp, 'Edm.String');
    /**
     * Static representation of the [[genericString19]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_STRING_19 = new core_1.StringField('genericString19', PerGlobalInfoSgp, 'Edm.String');
    /**
     * Static representation of the [[genericString2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_STRING_2 = new core_1.StringField('genericString2', PerGlobalInfoSgp, 'Edm.String');
    /**
     * Static representation of the [[genericString20]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_STRING_20 = new core_1.StringField('genericString20', PerGlobalInfoSgp, 'Edm.String');
    /**
     * Static representation of the [[genericString3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_STRING_3 = new core_1.StringField('genericString3', PerGlobalInfoSgp, 'Edm.String');
    /**
     * Static representation of the [[genericString4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_STRING_4 = new core_1.StringField('genericString4', PerGlobalInfoSgp, 'Edm.String');
    /**
     * Static representation of the [[genericString5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_STRING_5 = new core_1.StringField('genericString5', PerGlobalInfoSgp, 'Edm.String');
    /**
     * Static representation of the [[genericString6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_STRING_6 = new core_1.StringField('genericString6', PerGlobalInfoSgp, 'Edm.String');
    /**
     * Static representation of the [[genericString7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_STRING_7 = new core_1.StringField('genericString7', PerGlobalInfoSgp, 'Edm.String');
    /**
     * Static representation of the [[genericString8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_STRING_8 = new core_1.StringField('genericString8', PerGlobalInfoSgp, 'Edm.String');
    /**
     * Static representation of the [[genericString9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_STRING_9 = new core_1.StringField('genericString9', PerGlobalInfoSgp, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PerGlobalInfoSgp, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PerGlobalInfoSgp, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', PerGlobalInfoSgp, 'Edm.DateTime');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.OPERATION = new core_1.StringField('operation', PerGlobalInfoSgp, 'Edm.String');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.PERSON_ID_EXTERNAL = new core_1.StringField('personIdExternal', PerGlobalInfoSgp, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.START_DATE = new core_1.DateField('startDate', PerGlobalInfoSgp, 'Edm.DateTime');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', PerGlobalInfoSgp, Territory_1.Territory);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_NUMBER_1_NAV = new core_1.OneToOneLink('genericNumber1Nav', PerGlobalInfoSgp, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_STRING_1_NAV = new core_1.OneToOneLink('genericString1Nav', PerGlobalInfoSgp, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_STRING_2_NAV = new core_1.OneToOneLink('genericString2Nav', PerGlobalInfoSgp, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString3Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_STRING_3_NAV = new core_1.OneToOneLink('genericString3Nav', PerGlobalInfoSgp, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString7Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_STRING_7_NAV = new core_1.OneToOneLink('genericString7Nav', PerGlobalInfoSgp, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString8Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.GENERIC_STRING_8_NAV = new core_1.OneToOneLink('genericString8Nav', PerGlobalInfoSgp, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoSgp.PERSON_NAV = new core_1.OneToOneLink('personNav', PerGlobalInfoSgp, PerPerson_1.PerPerson);
    /**
     * All fields of the PerGlobalInfoSgp entity.
     */
    PerGlobalInfoSgp._allFields = [
        PerGlobalInfoSgp.COUNTRY,
        PerGlobalInfoSgp.CREATED_BY,
        PerGlobalInfoSgp.CREATED_DATE_TIME,
        PerGlobalInfoSgp.CREATED_ON,
        PerGlobalInfoSgp.END_DATE,
        PerGlobalInfoSgp.GENERIC_DATE_1,
        PerGlobalInfoSgp.GENERIC_DATE_2,
        PerGlobalInfoSgp.GENERIC_DATE_3,
        PerGlobalInfoSgp.GENERIC_DATE_4,
        PerGlobalInfoSgp.GENERIC_DATE_5,
        PerGlobalInfoSgp.GENERIC_DATE_6,
        PerGlobalInfoSgp.GENERIC_DATE_7,
        PerGlobalInfoSgp.GENERIC_DATE_8,
        PerGlobalInfoSgp.GENERIC_NUMBER_1,
        PerGlobalInfoSgp.GENERIC_NUMBER_10,
        PerGlobalInfoSgp.GENERIC_NUMBER_11,
        PerGlobalInfoSgp.GENERIC_NUMBER_12,
        PerGlobalInfoSgp.GENERIC_NUMBER_13,
        PerGlobalInfoSgp.GENERIC_NUMBER_2,
        PerGlobalInfoSgp.GENERIC_NUMBER_3,
        PerGlobalInfoSgp.GENERIC_NUMBER_4,
        PerGlobalInfoSgp.GENERIC_NUMBER_5,
        PerGlobalInfoSgp.GENERIC_NUMBER_6,
        PerGlobalInfoSgp.GENERIC_NUMBER_7,
        PerGlobalInfoSgp.GENERIC_NUMBER_8,
        PerGlobalInfoSgp.GENERIC_NUMBER_9,
        PerGlobalInfoSgp.GENERIC_STRING_1,
        PerGlobalInfoSgp.GENERIC_STRING_10,
        PerGlobalInfoSgp.GENERIC_STRING_11,
        PerGlobalInfoSgp.GENERIC_STRING_12,
        PerGlobalInfoSgp.GENERIC_STRING_13,
        PerGlobalInfoSgp.GENERIC_STRING_14,
        PerGlobalInfoSgp.GENERIC_STRING_15,
        PerGlobalInfoSgp.GENERIC_STRING_16,
        PerGlobalInfoSgp.GENERIC_STRING_17,
        PerGlobalInfoSgp.GENERIC_STRING_18,
        PerGlobalInfoSgp.GENERIC_STRING_19,
        PerGlobalInfoSgp.GENERIC_STRING_2,
        PerGlobalInfoSgp.GENERIC_STRING_20,
        PerGlobalInfoSgp.GENERIC_STRING_3,
        PerGlobalInfoSgp.GENERIC_STRING_4,
        PerGlobalInfoSgp.GENERIC_STRING_5,
        PerGlobalInfoSgp.GENERIC_STRING_6,
        PerGlobalInfoSgp.GENERIC_STRING_7,
        PerGlobalInfoSgp.GENERIC_STRING_8,
        PerGlobalInfoSgp.GENERIC_STRING_9,
        PerGlobalInfoSgp.LAST_MODIFIED_BY,
        PerGlobalInfoSgp.LAST_MODIFIED_DATE_TIME,
        PerGlobalInfoSgp.LAST_MODIFIED_ON,
        PerGlobalInfoSgp.OPERATION,
        PerGlobalInfoSgp.PERSON_ID_EXTERNAL,
        PerGlobalInfoSgp.START_DATE,
        PerGlobalInfoSgp.COUNTRY_NAV,
        PerGlobalInfoSgp.GENERIC_NUMBER_1_NAV,
        PerGlobalInfoSgp.GENERIC_STRING_1_NAV,
        PerGlobalInfoSgp.GENERIC_STRING_2_NAV,
        PerGlobalInfoSgp.GENERIC_STRING_3_NAV,
        PerGlobalInfoSgp.GENERIC_STRING_7_NAV,
        PerGlobalInfoSgp.GENERIC_STRING_8_NAV,
        PerGlobalInfoSgp.PERSON_NAV
    ];
    /**
     * All fields selector.
     */
    PerGlobalInfoSgp.ALL_FIELDS = new core_1.AllFields('*', PerGlobalInfoSgp);
    /**
     * All key fields of the PerGlobalInfoSgp entity.
     */
    PerGlobalInfoSgp._keyFields = [PerGlobalInfoSgp.COUNTRY, PerGlobalInfoSgp.PERSON_ID_EXTERNAL, PerGlobalInfoSgp.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property PerGlobalInfoSgp.
     */
    PerGlobalInfoSgp._keys = PerGlobalInfoSgp._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerGlobalInfoSgp = exports.PerGlobalInfoSgp || (exports.PerGlobalInfoSgp = {}));
exports.PerGlobalInfoSgp = PerGlobalInfoSgp;
//# sourceMappingURL=PerGlobalInfoSgp.js.map