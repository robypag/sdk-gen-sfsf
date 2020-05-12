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
var PerGlobalInfoAusRequestBuilder_1 = require("./PerGlobalInfoAusRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PerGlobalInfoAUS" of service "SFOData".
 */
var PerGlobalInfoAus = /** @class */ (function (_super) {
    __extends(PerGlobalInfoAus, _super);
    function PerGlobalInfoAus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerGlobalInfoAus`.
     * @returns A builder that constructs instances of entity type `PerGlobalInfoAus`.
     */
    PerGlobalInfoAus.builder = function () {
        return core_1.Entity.entityBuilder(PerGlobalInfoAus);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerGlobalInfoAus` entity type.
     * @returns A `PerGlobalInfoAus` request builder.
     */
    PerGlobalInfoAus.requestBuilder = function () {
        return new PerGlobalInfoAusRequestBuilder_1.PerGlobalInfoAusRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoAus`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerGlobalInfoAus`.
     */
    PerGlobalInfoAus.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PerGlobalInfoAus);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerGlobalInfoAus.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerGlobalInfoAus.
     */
    PerGlobalInfoAus._entityName = 'PerGlobalInfoAUS';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerGlobalInfoAus.
     */
    PerGlobalInfoAus._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerGlobalInfoAus._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PerGlobalInfoAus;
}(core_1.Entity));
exports.PerGlobalInfoAus = PerGlobalInfoAus;
var Territory_1 = require("./Territory");
var PicklistOption_1 = require("./PicklistOption");
var PerPerson_1 = require("./PerPerson");
(function (PerGlobalInfoAus) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.COUNTRY = new core_1.StringField('country', PerGlobalInfoAus, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.CREATED_BY = new core_1.StringField('createdBy', PerGlobalInfoAus, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PerGlobalInfoAus, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.CREATED_ON = new core_1.DateField('createdOn', PerGlobalInfoAus, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.END_DATE = new core_1.DateField('endDate', PerGlobalInfoAus, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_DATE_1 = new core_1.DateField('genericDate1', PerGlobalInfoAus, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_DATE_2 = new core_1.DateField('genericDate2', PerGlobalInfoAus, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_DATE_3 = new core_1.DateField('genericDate3', PerGlobalInfoAus, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_DATE_4 = new core_1.DateField('genericDate4', PerGlobalInfoAus, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_DATE_5 = new core_1.DateField('genericDate5', PerGlobalInfoAus, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_DATE_6 = new core_1.DateField('genericDate6', PerGlobalInfoAus, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_DATE_7 = new core_1.DateField('genericDate7', PerGlobalInfoAus, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_DATE_8 = new core_1.DateField('genericDate8', PerGlobalInfoAus, 'Edm.DateTime');
    /**
     * Static representation of the [[genericNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_NUMBER_1 = new core_1.BigNumberField('genericNumber1', PerGlobalInfoAus, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_NUMBER_10 = new core_1.BigNumberField('genericNumber10', PerGlobalInfoAus, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_NUMBER_11 = new core_1.BigNumberField('genericNumber11', PerGlobalInfoAus, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_NUMBER_12 = new core_1.BigNumberField('genericNumber12', PerGlobalInfoAus, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_NUMBER_13 = new core_1.BigNumberField('genericNumber13', PerGlobalInfoAus, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_NUMBER_2 = new core_1.BigNumberField('genericNumber2', PerGlobalInfoAus, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_NUMBER_3 = new core_1.BigNumberField('genericNumber3', PerGlobalInfoAus, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_NUMBER_4 = new core_1.BigNumberField('genericNumber4', PerGlobalInfoAus, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_NUMBER_5 = new core_1.BigNumberField('genericNumber5', PerGlobalInfoAus, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_NUMBER_6 = new core_1.BigNumberField('genericNumber6', PerGlobalInfoAus, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_NUMBER_7 = new core_1.BigNumberField('genericNumber7', PerGlobalInfoAus, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_NUMBER_8 = new core_1.BigNumberField('genericNumber8', PerGlobalInfoAus, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_NUMBER_9 = new core_1.BigNumberField('genericNumber9', PerGlobalInfoAus, 'Edm.Int64');
    /**
     * Static representation of the [[genericString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_STRING_1 = new core_1.StringField('genericString1', PerGlobalInfoAus, 'Edm.String');
    /**
     * Static representation of the [[genericString10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_STRING_10 = new core_1.StringField('genericString10', PerGlobalInfoAus, 'Edm.String');
    /**
     * Static representation of the [[genericString11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_STRING_11 = new core_1.StringField('genericString11', PerGlobalInfoAus, 'Edm.String');
    /**
     * Static representation of the [[genericString12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_STRING_12 = new core_1.StringField('genericString12', PerGlobalInfoAus, 'Edm.String');
    /**
     * Static representation of the [[genericString13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_STRING_13 = new core_1.StringField('genericString13', PerGlobalInfoAus, 'Edm.String');
    /**
     * Static representation of the [[genericString14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_STRING_14 = new core_1.StringField('genericString14', PerGlobalInfoAus, 'Edm.String');
    /**
     * Static representation of the [[genericString15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_STRING_15 = new core_1.StringField('genericString15', PerGlobalInfoAus, 'Edm.String');
    /**
     * Static representation of the [[genericString16]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_STRING_16 = new core_1.StringField('genericString16', PerGlobalInfoAus, 'Edm.String');
    /**
     * Static representation of the [[genericString17]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_STRING_17 = new core_1.StringField('genericString17', PerGlobalInfoAus, 'Edm.String');
    /**
     * Static representation of the [[genericString18]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_STRING_18 = new core_1.StringField('genericString18', PerGlobalInfoAus, 'Edm.String');
    /**
     * Static representation of the [[genericString19]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_STRING_19 = new core_1.StringField('genericString19', PerGlobalInfoAus, 'Edm.String');
    /**
     * Static representation of the [[genericString2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_STRING_2 = new core_1.StringField('genericString2', PerGlobalInfoAus, 'Edm.String');
    /**
     * Static representation of the [[genericString20]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_STRING_20 = new core_1.StringField('genericString20', PerGlobalInfoAus, 'Edm.String');
    /**
     * Static representation of the [[genericString3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_STRING_3 = new core_1.StringField('genericString3', PerGlobalInfoAus, 'Edm.String');
    /**
     * Static representation of the [[genericString4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_STRING_4 = new core_1.StringField('genericString4', PerGlobalInfoAus, 'Edm.String');
    /**
     * Static representation of the [[genericString5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_STRING_5 = new core_1.StringField('genericString5', PerGlobalInfoAus, 'Edm.String');
    /**
     * Static representation of the [[genericString6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_STRING_6 = new core_1.StringField('genericString6', PerGlobalInfoAus, 'Edm.String');
    /**
     * Static representation of the [[genericString7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_STRING_7 = new core_1.StringField('genericString7', PerGlobalInfoAus, 'Edm.String');
    /**
     * Static representation of the [[genericString8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_STRING_8 = new core_1.StringField('genericString8', PerGlobalInfoAus, 'Edm.String');
    /**
     * Static representation of the [[genericString9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_STRING_9 = new core_1.StringField('genericString9', PerGlobalInfoAus, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PerGlobalInfoAus, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PerGlobalInfoAus, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', PerGlobalInfoAus, 'Edm.DateTime');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.OPERATION = new core_1.StringField('operation', PerGlobalInfoAus, 'Edm.String');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.PERSON_ID_EXTERNAL = new core_1.StringField('personIdExternal', PerGlobalInfoAus, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.START_DATE = new core_1.DateField('startDate', PerGlobalInfoAus, 'Edm.DateTime');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', PerGlobalInfoAus, Territory_1.Territory);
    /**
     * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_STRING_1_NAV = new core_1.OneToOneLink('genericString1Nav', PerGlobalInfoAus, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_STRING_2_NAV = new core_1.OneToOneLink('genericString2Nav', PerGlobalInfoAus, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString3Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.GENERIC_STRING_3_NAV = new core_1.OneToOneLink('genericString3Nav', PerGlobalInfoAus, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoAus.PERSON_NAV = new core_1.OneToOneLink('personNav', PerGlobalInfoAus, PerPerson_1.PerPerson);
    /**
     * All fields of the PerGlobalInfoAus entity.
     */
    PerGlobalInfoAus._allFields = [
        PerGlobalInfoAus.COUNTRY,
        PerGlobalInfoAus.CREATED_BY,
        PerGlobalInfoAus.CREATED_DATE_TIME,
        PerGlobalInfoAus.CREATED_ON,
        PerGlobalInfoAus.END_DATE,
        PerGlobalInfoAus.GENERIC_DATE_1,
        PerGlobalInfoAus.GENERIC_DATE_2,
        PerGlobalInfoAus.GENERIC_DATE_3,
        PerGlobalInfoAus.GENERIC_DATE_4,
        PerGlobalInfoAus.GENERIC_DATE_5,
        PerGlobalInfoAus.GENERIC_DATE_6,
        PerGlobalInfoAus.GENERIC_DATE_7,
        PerGlobalInfoAus.GENERIC_DATE_8,
        PerGlobalInfoAus.GENERIC_NUMBER_1,
        PerGlobalInfoAus.GENERIC_NUMBER_10,
        PerGlobalInfoAus.GENERIC_NUMBER_11,
        PerGlobalInfoAus.GENERIC_NUMBER_12,
        PerGlobalInfoAus.GENERIC_NUMBER_13,
        PerGlobalInfoAus.GENERIC_NUMBER_2,
        PerGlobalInfoAus.GENERIC_NUMBER_3,
        PerGlobalInfoAus.GENERIC_NUMBER_4,
        PerGlobalInfoAus.GENERIC_NUMBER_5,
        PerGlobalInfoAus.GENERIC_NUMBER_6,
        PerGlobalInfoAus.GENERIC_NUMBER_7,
        PerGlobalInfoAus.GENERIC_NUMBER_8,
        PerGlobalInfoAus.GENERIC_NUMBER_9,
        PerGlobalInfoAus.GENERIC_STRING_1,
        PerGlobalInfoAus.GENERIC_STRING_10,
        PerGlobalInfoAus.GENERIC_STRING_11,
        PerGlobalInfoAus.GENERIC_STRING_12,
        PerGlobalInfoAus.GENERIC_STRING_13,
        PerGlobalInfoAus.GENERIC_STRING_14,
        PerGlobalInfoAus.GENERIC_STRING_15,
        PerGlobalInfoAus.GENERIC_STRING_16,
        PerGlobalInfoAus.GENERIC_STRING_17,
        PerGlobalInfoAus.GENERIC_STRING_18,
        PerGlobalInfoAus.GENERIC_STRING_19,
        PerGlobalInfoAus.GENERIC_STRING_2,
        PerGlobalInfoAus.GENERIC_STRING_20,
        PerGlobalInfoAus.GENERIC_STRING_3,
        PerGlobalInfoAus.GENERIC_STRING_4,
        PerGlobalInfoAus.GENERIC_STRING_5,
        PerGlobalInfoAus.GENERIC_STRING_6,
        PerGlobalInfoAus.GENERIC_STRING_7,
        PerGlobalInfoAus.GENERIC_STRING_8,
        PerGlobalInfoAus.GENERIC_STRING_9,
        PerGlobalInfoAus.LAST_MODIFIED_BY,
        PerGlobalInfoAus.LAST_MODIFIED_DATE_TIME,
        PerGlobalInfoAus.LAST_MODIFIED_ON,
        PerGlobalInfoAus.OPERATION,
        PerGlobalInfoAus.PERSON_ID_EXTERNAL,
        PerGlobalInfoAus.START_DATE,
        PerGlobalInfoAus.COUNTRY_NAV,
        PerGlobalInfoAus.GENERIC_STRING_1_NAV,
        PerGlobalInfoAus.GENERIC_STRING_2_NAV,
        PerGlobalInfoAus.GENERIC_STRING_3_NAV,
        PerGlobalInfoAus.PERSON_NAV
    ];
    /**
     * All fields selector.
     */
    PerGlobalInfoAus.ALL_FIELDS = new core_1.AllFields('*', PerGlobalInfoAus);
    /**
     * All key fields of the PerGlobalInfoAus entity.
     */
    PerGlobalInfoAus._keyFields = [PerGlobalInfoAus.COUNTRY, PerGlobalInfoAus.PERSON_ID_EXTERNAL, PerGlobalInfoAus.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property PerGlobalInfoAus.
     */
    PerGlobalInfoAus._keys = PerGlobalInfoAus._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerGlobalInfoAus = exports.PerGlobalInfoAus || (exports.PerGlobalInfoAus = {}));
exports.PerGlobalInfoAus = PerGlobalInfoAus;
//# sourceMappingURL=PerGlobalInfoAus.js.map