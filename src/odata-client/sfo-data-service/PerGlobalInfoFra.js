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
var PerGlobalInfoFraRequestBuilder_1 = require("./PerGlobalInfoFraRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PerGlobalInfoFRA" of service "SFOData".
 */
var PerGlobalInfoFra = /** @class */ (function (_super) {
    __extends(PerGlobalInfoFra, _super);
    function PerGlobalInfoFra() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerGlobalInfoFra`.
     * @returns A builder that constructs instances of entity type `PerGlobalInfoFra`.
     */
    PerGlobalInfoFra.builder = function () {
        return core_1.Entity.entityBuilder(PerGlobalInfoFra);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerGlobalInfoFra` entity type.
     * @returns A `PerGlobalInfoFra` request builder.
     */
    PerGlobalInfoFra.requestBuilder = function () {
        return new PerGlobalInfoFraRequestBuilder_1.PerGlobalInfoFraRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoFra`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerGlobalInfoFra`.
     */
    PerGlobalInfoFra.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PerGlobalInfoFra);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerGlobalInfoFra.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerGlobalInfoFra.
     */
    PerGlobalInfoFra._entityName = 'PerGlobalInfoFRA';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerGlobalInfoFra.
     */
    PerGlobalInfoFra._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerGlobalInfoFra._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PerGlobalInfoFra;
}(core_1.Entity));
exports.PerGlobalInfoFra = PerGlobalInfoFra;
var Territory_1 = require("./Territory");
var PicklistOption_1 = require("./PicklistOption");
var PerPerson_1 = require("./PerPerson");
(function (PerGlobalInfoFra) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.COUNTRY = new core_1.StringField('country', PerGlobalInfoFra, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.CREATED_BY = new core_1.StringField('createdBy', PerGlobalInfoFra, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PerGlobalInfoFra, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.CREATED_ON = new core_1.DateField('createdOn', PerGlobalInfoFra, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.END_DATE = new core_1.DateField('endDate', PerGlobalInfoFra, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_DATE_1 = new core_1.DateField('genericDate1', PerGlobalInfoFra, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_DATE_2 = new core_1.DateField('genericDate2', PerGlobalInfoFra, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_DATE_3 = new core_1.DateField('genericDate3', PerGlobalInfoFra, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_DATE_4 = new core_1.DateField('genericDate4', PerGlobalInfoFra, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_DATE_5 = new core_1.DateField('genericDate5', PerGlobalInfoFra, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_DATE_6 = new core_1.DateField('genericDate6', PerGlobalInfoFra, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_DATE_7 = new core_1.DateField('genericDate7', PerGlobalInfoFra, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_DATE_8 = new core_1.DateField('genericDate8', PerGlobalInfoFra, 'Edm.DateTime');
    /**
     * Static representation of the [[genericNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_NUMBER_1 = new core_1.BigNumberField('genericNumber1', PerGlobalInfoFra, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_NUMBER_10 = new core_1.BigNumberField('genericNumber10', PerGlobalInfoFra, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_NUMBER_11 = new core_1.BigNumberField('genericNumber11', PerGlobalInfoFra, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_NUMBER_12 = new core_1.BigNumberField('genericNumber12', PerGlobalInfoFra, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_NUMBER_13 = new core_1.BigNumberField('genericNumber13', PerGlobalInfoFra, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_NUMBER_2 = new core_1.BigNumberField('genericNumber2', PerGlobalInfoFra, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_NUMBER_3 = new core_1.BigNumberField('genericNumber3', PerGlobalInfoFra, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_NUMBER_4 = new core_1.BigNumberField('genericNumber4', PerGlobalInfoFra, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_NUMBER_5 = new core_1.BigNumberField('genericNumber5', PerGlobalInfoFra, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_NUMBER_6 = new core_1.BigNumberField('genericNumber6', PerGlobalInfoFra, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_NUMBER_7 = new core_1.BigNumberField('genericNumber7', PerGlobalInfoFra, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_NUMBER_8 = new core_1.BigNumberField('genericNumber8', PerGlobalInfoFra, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_NUMBER_9 = new core_1.BigNumberField('genericNumber9', PerGlobalInfoFra, 'Edm.Int64');
    /**
     * Static representation of the [[genericString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_STRING_1 = new core_1.StringField('genericString1', PerGlobalInfoFra, 'Edm.String');
    /**
     * Static representation of the [[genericString10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_STRING_10 = new core_1.StringField('genericString10', PerGlobalInfoFra, 'Edm.String');
    /**
     * Static representation of the [[genericString11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_STRING_11 = new core_1.StringField('genericString11', PerGlobalInfoFra, 'Edm.String');
    /**
     * Static representation of the [[genericString12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_STRING_12 = new core_1.StringField('genericString12', PerGlobalInfoFra, 'Edm.String');
    /**
     * Static representation of the [[genericString13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_STRING_13 = new core_1.StringField('genericString13', PerGlobalInfoFra, 'Edm.String');
    /**
     * Static representation of the [[genericString14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_STRING_14 = new core_1.StringField('genericString14', PerGlobalInfoFra, 'Edm.String');
    /**
     * Static representation of the [[genericString15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_STRING_15 = new core_1.StringField('genericString15', PerGlobalInfoFra, 'Edm.String');
    /**
     * Static representation of the [[genericString16]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_STRING_16 = new core_1.StringField('genericString16', PerGlobalInfoFra, 'Edm.String');
    /**
     * Static representation of the [[genericString17]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_STRING_17 = new core_1.StringField('genericString17', PerGlobalInfoFra, 'Edm.String');
    /**
     * Static representation of the [[genericString18]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_STRING_18 = new core_1.StringField('genericString18', PerGlobalInfoFra, 'Edm.String');
    /**
     * Static representation of the [[genericString19]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_STRING_19 = new core_1.StringField('genericString19', PerGlobalInfoFra, 'Edm.String');
    /**
     * Static representation of the [[genericString2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_STRING_2 = new core_1.StringField('genericString2', PerGlobalInfoFra, 'Edm.String');
    /**
     * Static representation of the [[genericString20]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_STRING_20 = new core_1.StringField('genericString20', PerGlobalInfoFra, 'Edm.String');
    /**
     * Static representation of the [[genericString3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_STRING_3 = new core_1.StringField('genericString3', PerGlobalInfoFra, 'Edm.String');
    /**
     * Static representation of the [[genericString4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_STRING_4 = new core_1.StringField('genericString4', PerGlobalInfoFra, 'Edm.String');
    /**
     * Static representation of the [[genericString5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_STRING_5 = new core_1.StringField('genericString5', PerGlobalInfoFra, 'Edm.String');
    /**
     * Static representation of the [[genericString6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_STRING_6 = new core_1.StringField('genericString6', PerGlobalInfoFra, 'Edm.String');
    /**
     * Static representation of the [[genericString7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_STRING_7 = new core_1.StringField('genericString7', PerGlobalInfoFra, 'Edm.String');
    /**
     * Static representation of the [[genericString8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_STRING_8 = new core_1.StringField('genericString8', PerGlobalInfoFra, 'Edm.String');
    /**
     * Static representation of the [[genericString9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_STRING_9 = new core_1.StringField('genericString9', PerGlobalInfoFra, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PerGlobalInfoFra, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PerGlobalInfoFra, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', PerGlobalInfoFra, 'Edm.DateTime');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.OPERATION = new core_1.StringField('operation', PerGlobalInfoFra, 'Edm.String');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.PERSON_ID_EXTERNAL = new core_1.StringField('personIdExternal', PerGlobalInfoFra, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.START_DATE = new core_1.DateField('startDate', PerGlobalInfoFra, 'Edm.DateTime');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', PerGlobalInfoFra, Territory_1.Territory);
    /**
     * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_STRING_1_NAV = new core_1.OneToOneLink('genericString1Nav', PerGlobalInfoFra, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_STRING_2_NAV = new core_1.OneToOneLink('genericString2Nav', PerGlobalInfoFra, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString6Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.GENERIC_STRING_6_NAV = new core_1.OneToOneLink('genericString6Nav', PerGlobalInfoFra, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoFra.PERSON_NAV = new core_1.OneToOneLink('personNav', PerGlobalInfoFra, PerPerson_1.PerPerson);
    /**
     * All fields of the PerGlobalInfoFra entity.
     */
    PerGlobalInfoFra._allFields = [
        PerGlobalInfoFra.COUNTRY,
        PerGlobalInfoFra.CREATED_BY,
        PerGlobalInfoFra.CREATED_DATE_TIME,
        PerGlobalInfoFra.CREATED_ON,
        PerGlobalInfoFra.END_DATE,
        PerGlobalInfoFra.GENERIC_DATE_1,
        PerGlobalInfoFra.GENERIC_DATE_2,
        PerGlobalInfoFra.GENERIC_DATE_3,
        PerGlobalInfoFra.GENERIC_DATE_4,
        PerGlobalInfoFra.GENERIC_DATE_5,
        PerGlobalInfoFra.GENERIC_DATE_6,
        PerGlobalInfoFra.GENERIC_DATE_7,
        PerGlobalInfoFra.GENERIC_DATE_8,
        PerGlobalInfoFra.GENERIC_NUMBER_1,
        PerGlobalInfoFra.GENERIC_NUMBER_10,
        PerGlobalInfoFra.GENERIC_NUMBER_11,
        PerGlobalInfoFra.GENERIC_NUMBER_12,
        PerGlobalInfoFra.GENERIC_NUMBER_13,
        PerGlobalInfoFra.GENERIC_NUMBER_2,
        PerGlobalInfoFra.GENERIC_NUMBER_3,
        PerGlobalInfoFra.GENERIC_NUMBER_4,
        PerGlobalInfoFra.GENERIC_NUMBER_5,
        PerGlobalInfoFra.GENERIC_NUMBER_6,
        PerGlobalInfoFra.GENERIC_NUMBER_7,
        PerGlobalInfoFra.GENERIC_NUMBER_8,
        PerGlobalInfoFra.GENERIC_NUMBER_9,
        PerGlobalInfoFra.GENERIC_STRING_1,
        PerGlobalInfoFra.GENERIC_STRING_10,
        PerGlobalInfoFra.GENERIC_STRING_11,
        PerGlobalInfoFra.GENERIC_STRING_12,
        PerGlobalInfoFra.GENERIC_STRING_13,
        PerGlobalInfoFra.GENERIC_STRING_14,
        PerGlobalInfoFra.GENERIC_STRING_15,
        PerGlobalInfoFra.GENERIC_STRING_16,
        PerGlobalInfoFra.GENERIC_STRING_17,
        PerGlobalInfoFra.GENERIC_STRING_18,
        PerGlobalInfoFra.GENERIC_STRING_19,
        PerGlobalInfoFra.GENERIC_STRING_2,
        PerGlobalInfoFra.GENERIC_STRING_20,
        PerGlobalInfoFra.GENERIC_STRING_3,
        PerGlobalInfoFra.GENERIC_STRING_4,
        PerGlobalInfoFra.GENERIC_STRING_5,
        PerGlobalInfoFra.GENERIC_STRING_6,
        PerGlobalInfoFra.GENERIC_STRING_7,
        PerGlobalInfoFra.GENERIC_STRING_8,
        PerGlobalInfoFra.GENERIC_STRING_9,
        PerGlobalInfoFra.LAST_MODIFIED_BY,
        PerGlobalInfoFra.LAST_MODIFIED_DATE_TIME,
        PerGlobalInfoFra.LAST_MODIFIED_ON,
        PerGlobalInfoFra.OPERATION,
        PerGlobalInfoFra.PERSON_ID_EXTERNAL,
        PerGlobalInfoFra.START_DATE,
        PerGlobalInfoFra.COUNTRY_NAV,
        PerGlobalInfoFra.GENERIC_STRING_1_NAV,
        PerGlobalInfoFra.GENERIC_STRING_2_NAV,
        PerGlobalInfoFra.GENERIC_STRING_6_NAV,
        PerGlobalInfoFra.PERSON_NAV
    ];
    /**
     * All fields selector.
     */
    PerGlobalInfoFra.ALL_FIELDS = new core_1.AllFields('*', PerGlobalInfoFra);
    /**
     * All key fields of the PerGlobalInfoFra entity.
     */
    PerGlobalInfoFra._keyFields = [PerGlobalInfoFra.COUNTRY, PerGlobalInfoFra.PERSON_ID_EXTERNAL, PerGlobalInfoFra.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property PerGlobalInfoFra.
     */
    PerGlobalInfoFra._keys = PerGlobalInfoFra._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerGlobalInfoFra = exports.PerGlobalInfoFra || (exports.PerGlobalInfoFra = {}));
exports.PerGlobalInfoFra = PerGlobalInfoFra;
//# sourceMappingURL=PerGlobalInfoFra.js.map