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
var PerGlobalInfoItaRequestBuilder_1 = require("./PerGlobalInfoItaRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PerGlobalInfoITA" of service "SFOData".
 */
var PerGlobalInfoIta = /** @class */ (function (_super) {
    __extends(PerGlobalInfoIta, _super);
    function PerGlobalInfoIta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerGlobalInfoIta`.
     * @returns A builder that constructs instances of entity type `PerGlobalInfoIta`.
     */
    PerGlobalInfoIta.builder = function () {
        return core_1.Entity.entityBuilder(PerGlobalInfoIta);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerGlobalInfoIta` entity type.
     * @returns A `PerGlobalInfoIta` request builder.
     */
    PerGlobalInfoIta.requestBuilder = function () {
        return new PerGlobalInfoItaRequestBuilder_1.PerGlobalInfoItaRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoIta`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerGlobalInfoIta`.
     */
    PerGlobalInfoIta.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PerGlobalInfoIta);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerGlobalInfoIta.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerGlobalInfoIta.
     */
    PerGlobalInfoIta._entityName = 'PerGlobalInfoITA';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerGlobalInfoIta.
     */
    PerGlobalInfoIta._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerGlobalInfoIta._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PerGlobalInfoIta;
}(core_1.Entity));
exports.PerGlobalInfoIta = PerGlobalInfoIta;
var Territory_1 = require("./Territory");
var PicklistOption_1 = require("./PicklistOption");
var PerPerson_1 = require("./PerPerson");
(function (PerGlobalInfoIta) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.COUNTRY = new core_1.StringField('country', PerGlobalInfoIta, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.CREATED_BY = new core_1.StringField('createdBy', PerGlobalInfoIta, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PerGlobalInfoIta, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.CREATED_ON = new core_1.DateField('createdOn', PerGlobalInfoIta, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.END_DATE = new core_1.DateField('endDate', PerGlobalInfoIta, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_DATE_1 = new core_1.DateField('genericDate1', PerGlobalInfoIta, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_DATE_2 = new core_1.DateField('genericDate2', PerGlobalInfoIta, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_DATE_3 = new core_1.DateField('genericDate3', PerGlobalInfoIta, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_DATE_4 = new core_1.DateField('genericDate4', PerGlobalInfoIta, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_DATE_5 = new core_1.DateField('genericDate5', PerGlobalInfoIta, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_DATE_6 = new core_1.DateField('genericDate6', PerGlobalInfoIta, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_DATE_7 = new core_1.DateField('genericDate7', PerGlobalInfoIta, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_DATE_8 = new core_1.DateField('genericDate8', PerGlobalInfoIta, 'Edm.DateTime');
    /**
     * Static representation of the [[genericNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_NUMBER_1 = new core_1.BigNumberField('genericNumber1', PerGlobalInfoIta, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_NUMBER_10 = new core_1.BigNumberField('genericNumber10', PerGlobalInfoIta, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_NUMBER_11 = new core_1.BigNumberField('genericNumber11', PerGlobalInfoIta, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_NUMBER_12 = new core_1.BigNumberField('genericNumber12', PerGlobalInfoIta, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_NUMBER_13 = new core_1.BigNumberField('genericNumber13', PerGlobalInfoIta, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_NUMBER_2 = new core_1.BigNumberField('genericNumber2', PerGlobalInfoIta, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_NUMBER_3 = new core_1.BigNumberField('genericNumber3', PerGlobalInfoIta, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_NUMBER_4 = new core_1.BigNumberField('genericNumber4', PerGlobalInfoIta, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_NUMBER_5 = new core_1.BigNumberField('genericNumber5', PerGlobalInfoIta, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_NUMBER_6 = new core_1.BigNumberField('genericNumber6', PerGlobalInfoIta, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_NUMBER_7 = new core_1.BigNumberField('genericNumber7', PerGlobalInfoIta, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_NUMBER_8 = new core_1.BigNumberField('genericNumber8', PerGlobalInfoIta, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_NUMBER_9 = new core_1.BigNumberField('genericNumber9', PerGlobalInfoIta, 'Edm.Int64');
    /**
     * Static representation of the [[genericString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_STRING_1 = new core_1.StringField('genericString1', PerGlobalInfoIta, 'Edm.String');
    /**
     * Static representation of the [[genericString10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_STRING_10 = new core_1.StringField('genericString10', PerGlobalInfoIta, 'Edm.String');
    /**
     * Static representation of the [[genericString11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_STRING_11 = new core_1.StringField('genericString11', PerGlobalInfoIta, 'Edm.String');
    /**
     * Static representation of the [[genericString12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_STRING_12 = new core_1.StringField('genericString12', PerGlobalInfoIta, 'Edm.String');
    /**
     * Static representation of the [[genericString13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_STRING_13 = new core_1.StringField('genericString13', PerGlobalInfoIta, 'Edm.String');
    /**
     * Static representation of the [[genericString14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_STRING_14 = new core_1.StringField('genericString14', PerGlobalInfoIta, 'Edm.String');
    /**
     * Static representation of the [[genericString15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_STRING_15 = new core_1.StringField('genericString15', PerGlobalInfoIta, 'Edm.String');
    /**
     * Static representation of the [[genericString16]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_STRING_16 = new core_1.StringField('genericString16', PerGlobalInfoIta, 'Edm.String');
    /**
     * Static representation of the [[genericString17]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_STRING_17 = new core_1.StringField('genericString17', PerGlobalInfoIta, 'Edm.String');
    /**
     * Static representation of the [[genericString18]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_STRING_18 = new core_1.StringField('genericString18', PerGlobalInfoIta, 'Edm.String');
    /**
     * Static representation of the [[genericString19]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_STRING_19 = new core_1.StringField('genericString19', PerGlobalInfoIta, 'Edm.String');
    /**
     * Static representation of the [[genericString2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_STRING_2 = new core_1.StringField('genericString2', PerGlobalInfoIta, 'Edm.String');
    /**
     * Static representation of the [[genericString20]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_STRING_20 = new core_1.StringField('genericString20', PerGlobalInfoIta, 'Edm.String');
    /**
     * Static representation of the [[genericString3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_STRING_3 = new core_1.StringField('genericString3', PerGlobalInfoIta, 'Edm.String');
    /**
     * Static representation of the [[genericString4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_STRING_4 = new core_1.StringField('genericString4', PerGlobalInfoIta, 'Edm.String');
    /**
     * Static representation of the [[genericString5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_STRING_5 = new core_1.StringField('genericString5', PerGlobalInfoIta, 'Edm.String');
    /**
     * Static representation of the [[genericString6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_STRING_6 = new core_1.StringField('genericString6', PerGlobalInfoIta, 'Edm.String');
    /**
     * Static representation of the [[genericString7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_STRING_7 = new core_1.StringField('genericString7', PerGlobalInfoIta, 'Edm.String');
    /**
     * Static representation of the [[genericString8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_STRING_8 = new core_1.StringField('genericString8', PerGlobalInfoIta, 'Edm.String');
    /**
     * Static representation of the [[genericString9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_STRING_9 = new core_1.StringField('genericString9', PerGlobalInfoIta, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PerGlobalInfoIta, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PerGlobalInfoIta, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', PerGlobalInfoIta, 'Edm.DateTime');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.OPERATION = new core_1.StringField('operation', PerGlobalInfoIta, 'Edm.String');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.PERSON_ID_EXTERNAL = new core_1.StringField('personIdExternal', PerGlobalInfoIta, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.START_DATE = new core_1.DateField('startDate', PerGlobalInfoIta, 'Edm.DateTime');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', PerGlobalInfoIta, Territory_1.Territory);
    /**
     * Static representation of the one-to-one navigation property [[genericString10Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_STRING_10_NAV = new core_1.OneToOneLink('genericString10Nav', PerGlobalInfoIta, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_STRING_1_NAV = new core_1.OneToOneLink('genericString1Nav', PerGlobalInfoIta, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_STRING_2_NAV = new core_1.OneToOneLink('genericString2Nav', PerGlobalInfoIta, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString7Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_STRING_7_NAV = new core_1.OneToOneLink('genericString7Nav', PerGlobalInfoIta, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString8Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_STRING_8_NAV = new core_1.OneToOneLink('genericString8Nav', PerGlobalInfoIta, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString9Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.GENERIC_STRING_9_NAV = new core_1.OneToOneLink('genericString9Nav', PerGlobalInfoIta, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoIta.PERSON_NAV = new core_1.OneToOneLink('personNav', PerGlobalInfoIta, PerPerson_1.PerPerson);
    /**
     * All fields of the PerGlobalInfoIta entity.
     */
    PerGlobalInfoIta._allFields = [
        PerGlobalInfoIta.COUNTRY,
        PerGlobalInfoIta.CREATED_BY,
        PerGlobalInfoIta.CREATED_DATE_TIME,
        PerGlobalInfoIta.CREATED_ON,
        PerGlobalInfoIta.END_DATE,
        PerGlobalInfoIta.GENERIC_DATE_1,
        PerGlobalInfoIta.GENERIC_DATE_2,
        PerGlobalInfoIta.GENERIC_DATE_3,
        PerGlobalInfoIta.GENERIC_DATE_4,
        PerGlobalInfoIta.GENERIC_DATE_5,
        PerGlobalInfoIta.GENERIC_DATE_6,
        PerGlobalInfoIta.GENERIC_DATE_7,
        PerGlobalInfoIta.GENERIC_DATE_8,
        PerGlobalInfoIta.GENERIC_NUMBER_1,
        PerGlobalInfoIta.GENERIC_NUMBER_10,
        PerGlobalInfoIta.GENERIC_NUMBER_11,
        PerGlobalInfoIta.GENERIC_NUMBER_12,
        PerGlobalInfoIta.GENERIC_NUMBER_13,
        PerGlobalInfoIta.GENERIC_NUMBER_2,
        PerGlobalInfoIta.GENERIC_NUMBER_3,
        PerGlobalInfoIta.GENERIC_NUMBER_4,
        PerGlobalInfoIta.GENERIC_NUMBER_5,
        PerGlobalInfoIta.GENERIC_NUMBER_6,
        PerGlobalInfoIta.GENERIC_NUMBER_7,
        PerGlobalInfoIta.GENERIC_NUMBER_8,
        PerGlobalInfoIta.GENERIC_NUMBER_9,
        PerGlobalInfoIta.GENERIC_STRING_1,
        PerGlobalInfoIta.GENERIC_STRING_10,
        PerGlobalInfoIta.GENERIC_STRING_11,
        PerGlobalInfoIta.GENERIC_STRING_12,
        PerGlobalInfoIta.GENERIC_STRING_13,
        PerGlobalInfoIta.GENERIC_STRING_14,
        PerGlobalInfoIta.GENERIC_STRING_15,
        PerGlobalInfoIta.GENERIC_STRING_16,
        PerGlobalInfoIta.GENERIC_STRING_17,
        PerGlobalInfoIta.GENERIC_STRING_18,
        PerGlobalInfoIta.GENERIC_STRING_19,
        PerGlobalInfoIta.GENERIC_STRING_2,
        PerGlobalInfoIta.GENERIC_STRING_20,
        PerGlobalInfoIta.GENERIC_STRING_3,
        PerGlobalInfoIta.GENERIC_STRING_4,
        PerGlobalInfoIta.GENERIC_STRING_5,
        PerGlobalInfoIta.GENERIC_STRING_6,
        PerGlobalInfoIta.GENERIC_STRING_7,
        PerGlobalInfoIta.GENERIC_STRING_8,
        PerGlobalInfoIta.GENERIC_STRING_9,
        PerGlobalInfoIta.LAST_MODIFIED_BY,
        PerGlobalInfoIta.LAST_MODIFIED_DATE_TIME,
        PerGlobalInfoIta.LAST_MODIFIED_ON,
        PerGlobalInfoIta.OPERATION,
        PerGlobalInfoIta.PERSON_ID_EXTERNAL,
        PerGlobalInfoIta.START_DATE,
        PerGlobalInfoIta.COUNTRY_NAV,
        PerGlobalInfoIta.GENERIC_STRING_10_NAV,
        PerGlobalInfoIta.GENERIC_STRING_1_NAV,
        PerGlobalInfoIta.GENERIC_STRING_2_NAV,
        PerGlobalInfoIta.GENERIC_STRING_7_NAV,
        PerGlobalInfoIta.GENERIC_STRING_8_NAV,
        PerGlobalInfoIta.GENERIC_STRING_9_NAV,
        PerGlobalInfoIta.PERSON_NAV
    ];
    /**
     * All fields selector.
     */
    PerGlobalInfoIta.ALL_FIELDS = new core_1.AllFields('*', PerGlobalInfoIta);
    /**
     * All key fields of the PerGlobalInfoIta entity.
     */
    PerGlobalInfoIta._keyFields = [PerGlobalInfoIta.COUNTRY, PerGlobalInfoIta.PERSON_ID_EXTERNAL, PerGlobalInfoIta.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property PerGlobalInfoIta.
     */
    PerGlobalInfoIta._keys = PerGlobalInfoIta._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerGlobalInfoIta = exports.PerGlobalInfoIta || (exports.PerGlobalInfoIta = {}));
exports.PerGlobalInfoIta = PerGlobalInfoIta;
//# sourceMappingURL=PerGlobalInfoIta.js.map