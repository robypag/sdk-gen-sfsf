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
var PerGlobalInfoDeuRequestBuilder_1 = require("./PerGlobalInfoDeuRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PerGlobalInfoDEU" of service "SFOData".
 */
var PerGlobalInfoDeu = /** @class */ (function (_super) {
    __extends(PerGlobalInfoDeu, _super);
    function PerGlobalInfoDeu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerGlobalInfoDeu`.
     * @returns A builder that constructs instances of entity type `PerGlobalInfoDeu`.
     */
    PerGlobalInfoDeu.builder = function () {
        return core_1.Entity.entityBuilder(PerGlobalInfoDeu);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerGlobalInfoDeu` entity type.
     * @returns A `PerGlobalInfoDeu` request builder.
     */
    PerGlobalInfoDeu.requestBuilder = function () {
        return new PerGlobalInfoDeuRequestBuilder_1.PerGlobalInfoDeuRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoDeu`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerGlobalInfoDeu`.
     */
    PerGlobalInfoDeu.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PerGlobalInfoDeu);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerGlobalInfoDeu.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerGlobalInfoDeu.
     */
    PerGlobalInfoDeu._entityName = 'PerGlobalInfoDEU';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerGlobalInfoDeu.
     */
    PerGlobalInfoDeu._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerGlobalInfoDeu._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PerGlobalInfoDeu;
}(core_1.Entity));
exports.PerGlobalInfoDeu = PerGlobalInfoDeu;
var Territory_1 = require("./Territory");
var PicklistOption_1 = require("./PicklistOption");
var PerPerson_1 = require("./PerPerson");
(function (PerGlobalInfoDeu) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.COUNTRY = new core_1.StringField('country', PerGlobalInfoDeu, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.CREATED_BY = new core_1.StringField('createdBy', PerGlobalInfoDeu, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PerGlobalInfoDeu, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.CREATED_ON = new core_1.DateField('createdOn', PerGlobalInfoDeu, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.END_DATE = new core_1.DateField('endDate', PerGlobalInfoDeu, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_DATE_1 = new core_1.DateField('genericDate1', PerGlobalInfoDeu, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_DATE_2 = new core_1.DateField('genericDate2', PerGlobalInfoDeu, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_DATE_3 = new core_1.DateField('genericDate3', PerGlobalInfoDeu, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_DATE_4 = new core_1.DateField('genericDate4', PerGlobalInfoDeu, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_DATE_5 = new core_1.DateField('genericDate5', PerGlobalInfoDeu, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_DATE_6 = new core_1.DateField('genericDate6', PerGlobalInfoDeu, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_DATE_7 = new core_1.DateField('genericDate7', PerGlobalInfoDeu, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_DATE_8 = new core_1.DateField('genericDate8', PerGlobalInfoDeu, 'Edm.DateTime');
    /**
     * Static representation of the [[genericNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_NUMBER_1 = new core_1.BigNumberField('genericNumber1', PerGlobalInfoDeu, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_NUMBER_10 = new core_1.BigNumberField('genericNumber10', PerGlobalInfoDeu, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_NUMBER_11 = new core_1.BigNumberField('genericNumber11', PerGlobalInfoDeu, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_NUMBER_12 = new core_1.BigNumberField('genericNumber12', PerGlobalInfoDeu, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_NUMBER_13 = new core_1.BigNumberField('genericNumber13', PerGlobalInfoDeu, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_NUMBER_2 = new core_1.BigNumberField('genericNumber2', PerGlobalInfoDeu, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_NUMBER_3 = new core_1.BigNumberField('genericNumber3', PerGlobalInfoDeu, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_NUMBER_4 = new core_1.BigNumberField('genericNumber4', PerGlobalInfoDeu, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_NUMBER_5 = new core_1.BigNumberField('genericNumber5', PerGlobalInfoDeu, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_NUMBER_6 = new core_1.BigNumberField('genericNumber6', PerGlobalInfoDeu, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_NUMBER_7 = new core_1.BigNumberField('genericNumber7', PerGlobalInfoDeu, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_NUMBER_8 = new core_1.BigNumberField('genericNumber8', PerGlobalInfoDeu, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_NUMBER_9 = new core_1.BigNumberField('genericNumber9', PerGlobalInfoDeu, 'Edm.Int64');
    /**
     * Static representation of the [[genericString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_STRING_1 = new core_1.StringField('genericString1', PerGlobalInfoDeu, 'Edm.String');
    /**
     * Static representation of the [[genericString10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_STRING_10 = new core_1.StringField('genericString10', PerGlobalInfoDeu, 'Edm.String');
    /**
     * Static representation of the [[genericString11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_STRING_11 = new core_1.StringField('genericString11', PerGlobalInfoDeu, 'Edm.String');
    /**
     * Static representation of the [[genericString12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_STRING_12 = new core_1.StringField('genericString12', PerGlobalInfoDeu, 'Edm.String');
    /**
     * Static representation of the [[genericString13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_STRING_13 = new core_1.StringField('genericString13', PerGlobalInfoDeu, 'Edm.String');
    /**
     * Static representation of the [[genericString14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_STRING_14 = new core_1.StringField('genericString14', PerGlobalInfoDeu, 'Edm.String');
    /**
     * Static representation of the [[genericString15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_STRING_15 = new core_1.StringField('genericString15', PerGlobalInfoDeu, 'Edm.String');
    /**
     * Static representation of the [[genericString16]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_STRING_16 = new core_1.StringField('genericString16', PerGlobalInfoDeu, 'Edm.String');
    /**
     * Static representation of the [[genericString17]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_STRING_17 = new core_1.StringField('genericString17', PerGlobalInfoDeu, 'Edm.String');
    /**
     * Static representation of the [[genericString18]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_STRING_18 = new core_1.StringField('genericString18', PerGlobalInfoDeu, 'Edm.String');
    /**
     * Static representation of the [[genericString19]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_STRING_19 = new core_1.StringField('genericString19', PerGlobalInfoDeu, 'Edm.String');
    /**
     * Static representation of the [[genericString2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_STRING_2 = new core_1.StringField('genericString2', PerGlobalInfoDeu, 'Edm.String');
    /**
     * Static representation of the [[genericString20]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_STRING_20 = new core_1.StringField('genericString20', PerGlobalInfoDeu, 'Edm.String');
    /**
     * Static representation of the [[genericString3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_STRING_3 = new core_1.StringField('genericString3', PerGlobalInfoDeu, 'Edm.String');
    /**
     * Static representation of the [[genericString4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_STRING_4 = new core_1.StringField('genericString4', PerGlobalInfoDeu, 'Edm.String');
    /**
     * Static representation of the [[genericString5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_STRING_5 = new core_1.StringField('genericString5', PerGlobalInfoDeu, 'Edm.String');
    /**
     * Static representation of the [[genericString6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_STRING_6 = new core_1.StringField('genericString6', PerGlobalInfoDeu, 'Edm.String');
    /**
     * Static representation of the [[genericString7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_STRING_7 = new core_1.StringField('genericString7', PerGlobalInfoDeu, 'Edm.String');
    /**
     * Static representation of the [[genericString8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_STRING_8 = new core_1.StringField('genericString8', PerGlobalInfoDeu, 'Edm.String');
    /**
     * Static representation of the [[genericString9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_STRING_9 = new core_1.StringField('genericString9', PerGlobalInfoDeu, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PerGlobalInfoDeu, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PerGlobalInfoDeu, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', PerGlobalInfoDeu, 'Edm.DateTime');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.OPERATION = new core_1.StringField('operation', PerGlobalInfoDeu, 'Edm.String');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.PERSON_ID_EXTERNAL = new core_1.StringField('personIdExternal', PerGlobalInfoDeu, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.START_DATE = new core_1.DateField('startDate', PerGlobalInfoDeu, 'Edm.DateTime');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', PerGlobalInfoDeu, Territory_1.Territory);
    /**
     * Static representation of the one-to-one navigation property [[genericString10Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_STRING_10_NAV = new core_1.OneToOneLink('genericString10Nav', PerGlobalInfoDeu, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_STRING_1_NAV = new core_1.OneToOneLink('genericString1Nav', PerGlobalInfoDeu, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_STRING_2_NAV = new core_1.OneToOneLink('genericString2Nav', PerGlobalInfoDeu, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString3Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_STRING_3_NAV = new core_1.OneToOneLink('genericString3Nav', PerGlobalInfoDeu, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString4Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_STRING_4_NAV = new core_1.OneToOneLink('genericString4Nav', PerGlobalInfoDeu, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString9Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.GENERIC_STRING_9_NAV = new core_1.OneToOneLink('genericString9Nav', PerGlobalInfoDeu, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoDeu.PERSON_NAV = new core_1.OneToOneLink('personNav', PerGlobalInfoDeu, PerPerson_1.PerPerson);
    /**
     * All fields of the PerGlobalInfoDeu entity.
     */
    PerGlobalInfoDeu._allFields = [
        PerGlobalInfoDeu.COUNTRY,
        PerGlobalInfoDeu.CREATED_BY,
        PerGlobalInfoDeu.CREATED_DATE_TIME,
        PerGlobalInfoDeu.CREATED_ON,
        PerGlobalInfoDeu.END_DATE,
        PerGlobalInfoDeu.GENERIC_DATE_1,
        PerGlobalInfoDeu.GENERIC_DATE_2,
        PerGlobalInfoDeu.GENERIC_DATE_3,
        PerGlobalInfoDeu.GENERIC_DATE_4,
        PerGlobalInfoDeu.GENERIC_DATE_5,
        PerGlobalInfoDeu.GENERIC_DATE_6,
        PerGlobalInfoDeu.GENERIC_DATE_7,
        PerGlobalInfoDeu.GENERIC_DATE_8,
        PerGlobalInfoDeu.GENERIC_NUMBER_1,
        PerGlobalInfoDeu.GENERIC_NUMBER_10,
        PerGlobalInfoDeu.GENERIC_NUMBER_11,
        PerGlobalInfoDeu.GENERIC_NUMBER_12,
        PerGlobalInfoDeu.GENERIC_NUMBER_13,
        PerGlobalInfoDeu.GENERIC_NUMBER_2,
        PerGlobalInfoDeu.GENERIC_NUMBER_3,
        PerGlobalInfoDeu.GENERIC_NUMBER_4,
        PerGlobalInfoDeu.GENERIC_NUMBER_5,
        PerGlobalInfoDeu.GENERIC_NUMBER_6,
        PerGlobalInfoDeu.GENERIC_NUMBER_7,
        PerGlobalInfoDeu.GENERIC_NUMBER_8,
        PerGlobalInfoDeu.GENERIC_NUMBER_9,
        PerGlobalInfoDeu.GENERIC_STRING_1,
        PerGlobalInfoDeu.GENERIC_STRING_10,
        PerGlobalInfoDeu.GENERIC_STRING_11,
        PerGlobalInfoDeu.GENERIC_STRING_12,
        PerGlobalInfoDeu.GENERIC_STRING_13,
        PerGlobalInfoDeu.GENERIC_STRING_14,
        PerGlobalInfoDeu.GENERIC_STRING_15,
        PerGlobalInfoDeu.GENERIC_STRING_16,
        PerGlobalInfoDeu.GENERIC_STRING_17,
        PerGlobalInfoDeu.GENERIC_STRING_18,
        PerGlobalInfoDeu.GENERIC_STRING_19,
        PerGlobalInfoDeu.GENERIC_STRING_2,
        PerGlobalInfoDeu.GENERIC_STRING_20,
        PerGlobalInfoDeu.GENERIC_STRING_3,
        PerGlobalInfoDeu.GENERIC_STRING_4,
        PerGlobalInfoDeu.GENERIC_STRING_5,
        PerGlobalInfoDeu.GENERIC_STRING_6,
        PerGlobalInfoDeu.GENERIC_STRING_7,
        PerGlobalInfoDeu.GENERIC_STRING_8,
        PerGlobalInfoDeu.GENERIC_STRING_9,
        PerGlobalInfoDeu.LAST_MODIFIED_BY,
        PerGlobalInfoDeu.LAST_MODIFIED_DATE_TIME,
        PerGlobalInfoDeu.LAST_MODIFIED_ON,
        PerGlobalInfoDeu.OPERATION,
        PerGlobalInfoDeu.PERSON_ID_EXTERNAL,
        PerGlobalInfoDeu.START_DATE,
        PerGlobalInfoDeu.COUNTRY_NAV,
        PerGlobalInfoDeu.GENERIC_STRING_10_NAV,
        PerGlobalInfoDeu.GENERIC_STRING_1_NAV,
        PerGlobalInfoDeu.GENERIC_STRING_2_NAV,
        PerGlobalInfoDeu.GENERIC_STRING_3_NAV,
        PerGlobalInfoDeu.GENERIC_STRING_4_NAV,
        PerGlobalInfoDeu.GENERIC_STRING_9_NAV,
        PerGlobalInfoDeu.PERSON_NAV
    ];
    /**
     * All fields selector.
     */
    PerGlobalInfoDeu.ALL_FIELDS = new core_1.AllFields('*', PerGlobalInfoDeu);
    /**
     * All key fields of the PerGlobalInfoDeu entity.
     */
    PerGlobalInfoDeu._keyFields = [PerGlobalInfoDeu.COUNTRY, PerGlobalInfoDeu.PERSON_ID_EXTERNAL, PerGlobalInfoDeu.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property PerGlobalInfoDeu.
     */
    PerGlobalInfoDeu._keys = PerGlobalInfoDeu._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerGlobalInfoDeu = exports.PerGlobalInfoDeu || (exports.PerGlobalInfoDeu = {}));
exports.PerGlobalInfoDeu = PerGlobalInfoDeu;
//# sourceMappingURL=PerGlobalInfoDeu.js.map