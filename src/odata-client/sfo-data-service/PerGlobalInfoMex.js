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
var PerGlobalInfoMexRequestBuilder_1 = require("./PerGlobalInfoMexRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PerGlobalInfoMEX" of service "SFOData".
 */
var PerGlobalInfoMex = /** @class */ (function (_super) {
    __extends(PerGlobalInfoMex, _super);
    function PerGlobalInfoMex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerGlobalInfoMex`.
     * @returns A builder that constructs instances of entity type `PerGlobalInfoMex`.
     */
    PerGlobalInfoMex.builder = function () {
        return core_1.Entity.entityBuilder(PerGlobalInfoMex);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerGlobalInfoMex` entity type.
     * @returns A `PerGlobalInfoMex` request builder.
     */
    PerGlobalInfoMex.requestBuilder = function () {
        return new PerGlobalInfoMexRequestBuilder_1.PerGlobalInfoMexRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoMex`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerGlobalInfoMex`.
     */
    PerGlobalInfoMex.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PerGlobalInfoMex);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerGlobalInfoMex.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerGlobalInfoMex.
     */
    PerGlobalInfoMex._entityName = 'PerGlobalInfoMEX';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerGlobalInfoMex.
     */
    PerGlobalInfoMex._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerGlobalInfoMex._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PerGlobalInfoMex;
}(core_1.Entity));
exports.PerGlobalInfoMex = PerGlobalInfoMex;
var Territory_1 = require("./Territory");
var PicklistOption_1 = require("./PicklistOption");
var PerPerson_1 = require("./PerPerson");
(function (PerGlobalInfoMex) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.COUNTRY = new core_1.StringField('country', PerGlobalInfoMex, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.CREATED_BY = new core_1.StringField('createdBy', PerGlobalInfoMex, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PerGlobalInfoMex, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.CREATED_ON = new core_1.DateField('createdOn', PerGlobalInfoMex, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.END_DATE = new core_1.DateField('endDate', PerGlobalInfoMex, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_DATE_1 = new core_1.DateField('genericDate1', PerGlobalInfoMex, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_DATE_2 = new core_1.DateField('genericDate2', PerGlobalInfoMex, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_DATE_3 = new core_1.DateField('genericDate3', PerGlobalInfoMex, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_DATE_4 = new core_1.DateField('genericDate4', PerGlobalInfoMex, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_DATE_5 = new core_1.DateField('genericDate5', PerGlobalInfoMex, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_DATE_6 = new core_1.DateField('genericDate6', PerGlobalInfoMex, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_DATE_7 = new core_1.DateField('genericDate7', PerGlobalInfoMex, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_DATE_8 = new core_1.DateField('genericDate8', PerGlobalInfoMex, 'Edm.DateTime');
    /**
     * Static representation of the [[genericNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_NUMBER_1 = new core_1.BigNumberField('genericNumber1', PerGlobalInfoMex, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_NUMBER_10 = new core_1.BigNumberField('genericNumber10', PerGlobalInfoMex, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_NUMBER_11 = new core_1.BigNumberField('genericNumber11', PerGlobalInfoMex, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_NUMBER_12 = new core_1.BigNumberField('genericNumber12', PerGlobalInfoMex, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_NUMBER_13 = new core_1.BigNumberField('genericNumber13', PerGlobalInfoMex, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_NUMBER_2 = new core_1.BigNumberField('genericNumber2', PerGlobalInfoMex, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_NUMBER_3 = new core_1.BigNumberField('genericNumber3', PerGlobalInfoMex, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_NUMBER_4 = new core_1.BigNumberField('genericNumber4', PerGlobalInfoMex, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_NUMBER_5 = new core_1.BigNumberField('genericNumber5', PerGlobalInfoMex, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_NUMBER_6 = new core_1.BigNumberField('genericNumber6', PerGlobalInfoMex, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_NUMBER_7 = new core_1.BigNumberField('genericNumber7', PerGlobalInfoMex, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_NUMBER_8 = new core_1.BigNumberField('genericNumber8', PerGlobalInfoMex, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_NUMBER_9 = new core_1.BigNumberField('genericNumber9', PerGlobalInfoMex, 'Edm.Int64');
    /**
     * Static representation of the [[genericString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_STRING_1 = new core_1.StringField('genericString1', PerGlobalInfoMex, 'Edm.String');
    /**
     * Static representation of the [[genericString10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_STRING_10 = new core_1.StringField('genericString10', PerGlobalInfoMex, 'Edm.String');
    /**
     * Static representation of the [[genericString11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_STRING_11 = new core_1.StringField('genericString11', PerGlobalInfoMex, 'Edm.String');
    /**
     * Static representation of the [[genericString12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_STRING_12 = new core_1.StringField('genericString12', PerGlobalInfoMex, 'Edm.String');
    /**
     * Static representation of the [[genericString13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_STRING_13 = new core_1.StringField('genericString13', PerGlobalInfoMex, 'Edm.String');
    /**
     * Static representation of the [[genericString14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_STRING_14 = new core_1.StringField('genericString14', PerGlobalInfoMex, 'Edm.String');
    /**
     * Static representation of the [[genericString15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_STRING_15 = new core_1.StringField('genericString15', PerGlobalInfoMex, 'Edm.String');
    /**
     * Static representation of the [[genericString16]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_STRING_16 = new core_1.StringField('genericString16', PerGlobalInfoMex, 'Edm.String');
    /**
     * Static representation of the [[genericString17]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_STRING_17 = new core_1.StringField('genericString17', PerGlobalInfoMex, 'Edm.String');
    /**
     * Static representation of the [[genericString18]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_STRING_18 = new core_1.StringField('genericString18', PerGlobalInfoMex, 'Edm.String');
    /**
     * Static representation of the [[genericString19]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_STRING_19 = new core_1.StringField('genericString19', PerGlobalInfoMex, 'Edm.String');
    /**
     * Static representation of the [[genericString2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_STRING_2 = new core_1.StringField('genericString2', PerGlobalInfoMex, 'Edm.String');
    /**
     * Static representation of the [[genericString20]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_STRING_20 = new core_1.StringField('genericString20', PerGlobalInfoMex, 'Edm.String');
    /**
     * Static representation of the [[genericString3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_STRING_3 = new core_1.StringField('genericString3', PerGlobalInfoMex, 'Edm.String');
    /**
     * Static representation of the [[genericString4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_STRING_4 = new core_1.StringField('genericString4', PerGlobalInfoMex, 'Edm.String');
    /**
     * Static representation of the [[genericString5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_STRING_5 = new core_1.StringField('genericString5', PerGlobalInfoMex, 'Edm.String');
    /**
     * Static representation of the [[genericString6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_STRING_6 = new core_1.StringField('genericString6', PerGlobalInfoMex, 'Edm.String');
    /**
     * Static representation of the [[genericString7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_STRING_7 = new core_1.StringField('genericString7', PerGlobalInfoMex, 'Edm.String');
    /**
     * Static representation of the [[genericString8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_STRING_8 = new core_1.StringField('genericString8', PerGlobalInfoMex, 'Edm.String');
    /**
     * Static representation of the [[genericString9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_STRING_9 = new core_1.StringField('genericString9', PerGlobalInfoMex, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PerGlobalInfoMex, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PerGlobalInfoMex, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', PerGlobalInfoMex, 'Edm.DateTime');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.OPERATION = new core_1.StringField('operation', PerGlobalInfoMex, 'Edm.String');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.PERSON_ID_EXTERNAL = new core_1.StringField('personIdExternal', PerGlobalInfoMex, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.START_DATE = new core_1.DateField('startDate', PerGlobalInfoMex, 'Edm.DateTime');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', PerGlobalInfoMex, Territory_1.Territory);
    /**
     * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_STRING_1_NAV = new core_1.OneToOneLink('genericString1Nav', PerGlobalInfoMex, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_STRING_2_NAV = new core_1.OneToOneLink('genericString2Nav', PerGlobalInfoMex, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString5Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_STRING_5_NAV = new core_1.OneToOneLink('genericString5Nav', PerGlobalInfoMex, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString6Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_STRING_6_NAV = new core_1.OneToOneLink('genericString6Nav', PerGlobalInfoMex, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString7Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.GENERIC_STRING_7_NAV = new core_1.OneToOneLink('genericString7Nav', PerGlobalInfoMex, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoMex.PERSON_NAV = new core_1.OneToOneLink('personNav', PerGlobalInfoMex, PerPerson_1.PerPerson);
    /**
     * All fields of the PerGlobalInfoMex entity.
     */
    PerGlobalInfoMex._allFields = [
        PerGlobalInfoMex.COUNTRY,
        PerGlobalInfoMex.CREATED_BY,
        PerGlobalInfoMex.CREATED_DATE_TIME,
        PerGlobalInfoMex.CREATED_ON,
        PerGlobalInfoMex.END_DATE,
        PerGlobalInfoMex.GENERIC_DATE_1,
        PerGlobalInfoMex.GENERIC_DATE_2,
        PerGlobalInfoMex.GENERIC_DATE_3,
        PerGlobalInfoMex.GENERIC_DATE_4,
        PerGlobalInfoMex.GENERIC_DATE_5,
        PerGlobalInfoMex.GENERIC_DATE_6,
        PerGlobalInfoMex.GENERIC_DATE_7,
        PerGlobalInfoMex.GENERIC_DATE_8,
        PerGlobalInfoMex.GENERIC_NUMBER_1,
        PerGlobalInfoMex.GENERIC_NUMBER_10,
        PerGlobalInfoMex.GENERIC_NUMBER_11,
        PerGlobalInfoMex.GENERIC_NUMBER_12,
        PerGlobalInfoMex.GENERIC_NUMBER_13,
        PerGlobalInfoMex.GENERIC_NUMBER_2,
        PerGlobalInfoMex.GENERIC_NUMBER_3,
        PerGlobalInfoMex.GENERIC_NUMBER_4,
        PerGlobalInfoMex.GENERIC_NUMBER_5,
        PerGlobalInfoMex.GENERIC_NUMBER_6,
        PerGlobalInfoMex.GENERIC_NUMBER_7,
        PerGlobalInfoMex.GENERIC_NUMBER_8,
        PerGlobalInfoMex.GENERIC_NUMBER_9,
        PerGlobalInfoMex.GENERIC_STRING_1,
        PerGlobalInfoMex.GENERIC_STRING_10,
        PerGlobalInfoMex.GENERIC_STRING_11,
        PerGlobalInfoMex.GENERIC_STRING_12,
        PerGlobalInfoMex.GENERIC_STRING_13,
        PerGlobalInfoMex.GENERIC_STRING_14,
        PerGlobalInfoMex.GENERIC_STRING_15,
        PerGlobalInfoMex.GENERIC_STRING_16,
        PerGlobalInfoMex.GENERIC_STRING_17,
        PerGlobalInfoMex.GENERIC_STRING_18,
        PerGlobalInfoMex.GENERIC_STRING_19,
        PerGlobalInfoMex.GENERIC_STRING_2,
        PerGlobalInfoMex.GENERIC_STRING_20,
        PerGlobalInfoMex.GENERIC_STRING_3,
        PerGlobalInfoMex.GENERIC_STRING_4,
        PerGlobalInfoMex.GENERIC_STRING_5,
        PerGlobalInfoMex.GENERIC_STRING_6,
        PerGlobalInfoMex.GENERIC_STRING_7,
        PerGlobalInfoMex.GENERIC_STRING_8,
        PerGlobalInfoMex.GENERIC_STRING_9,
        PerGlobalInfoMex.LAST_MODIFIED_BY,
        PerGlobalInfoMex.LAST_MODIFIED_DATE_TIME,
        PerGlobalInfoMex.LAST_MODIFIED_ON,
        PerGlobalInfoMex.OPERATION,
        PerGlobalInfoMex.PERSON_ID_EXTERNAL,
        PerGlobalInfoMex.START_DATE,
        PerGlobalInfoMex.COUNTRY_NAV,
        PerGlobalInfoMex.GENERIC_STRING_1_NAV,
        PerGlobalInfoMex.GENERIC_STRING_2_NAV,
        PerGlobalInfoMex.GENERIC_STRING_5_NAV,
        PerGlobalInfoMex.GENERIC_STRING_6_NAV,
        PerGlobalInfoMex.GENERIC_STRING_7_NAV,
        PerGlobalInfoMex.PERSON_NAV
    ];
    /**
     * All fields selector.
     */
    PerGlobalInfoMex.ALL_FIELDS = new core_1.AllFields('*', PerGlobalInfoMex);
    /**
     * All key fields of the PerGlobalInfoMex entity.
     */
    PerGlobalInfoMex._keyFields = [PerGlobalInfoMex.COUNTRY, PerGlobalInfoMex.PERSON_ID_EXTERNAL, PerGlobalInfoMex.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property PerGlobalInfoMex.
     */
    PerGlobalInfoMex._keys = PerGlobalInfoMex._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerGlobalInfoMex = exports.PerGlobalInfoMex || (exports.PerGlobalInfoMex = {}));
exports.PerGlobalInfoMex = PerGlobalInfoMex;
//# sourceMappingURL=PerGlobalInfoMex.js.map