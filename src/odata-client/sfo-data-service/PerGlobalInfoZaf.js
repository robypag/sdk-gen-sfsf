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
var PerGlobalInfoZafRequestBuilder_1 = require("./PerGlobalInfoZafRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PerGlobalInfoZAF" of service "SFOData".
 */
var PerGlobalInfoZaf = /** @class */ (function (_super) {
    __extends(PerGlobalInfoZaf, _super);
    function PerGlobalInfoZaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerGlobalInfoZaf`.
     * @returns A builder that constructs instances of entity type `PerGlobalInfoZaf`.
     */
    PerGlobalInfoZaf.builder = function () {
        return core_1.Entity.entityBuilder(PerGlobalInfoZaf);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerGlobalInfoZaf` entity type.
     * @returns A `PerGlobalInfoZaf` request builder.
     */
    PerGlobalInfoZaf.requestBuilder = function () {
        return new PerGlobalInfoZafRequestBuilder_1.PerGlobalInfoZafRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoZaf`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerGlobalInfoZaf`.
     */
    PerGlobalInfoZaf.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PerGlobalInfoZaf);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerGlobalInfoZaf.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerGlobalInfoZaf.
     */
    PerGlobalInfoZaf._entityName = 'PerGlobalInfoZAF';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerGlobalInfoZaf.
     */
    PerGlobalInfoZaf._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerGlobalInfoZaf._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PerGlobalInfoZaf;
}(core_1.Entity));
exports.PerGlobalInfoZaf = PerGlobalInfoZaf;
var Territory_1 = require("./Territory");
var PicklistOption_1 = require("./PicklistOption");
var PerPerson_1 = require("./PerPerson");
(function (PerGlobalInfoZaf) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.COUNTRY = new core_1.StringField('country', PerGlobalInfoZaf, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.CREATED_BY = new core_1.StringField('createdBy', PerGlobalInfoZaf, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PerGlobalInfoZaf, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.CREATED_ON = new core_1.DateField('createdOn', PerGlobalInfoZaf, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.END_DATE = new core_1.DateField('endDate', PerGlobalInfoZaf, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_DATE_1 = new core_1.DateField('genericDate1', PerGlobalInfoZaf, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_DATE_2 = new core_1.DateField('genericDate2', PerGlobalInfoZaf, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_DATE_3 = new core_1.DateField('genericDate3', PerGlobalInfoZaf, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_DATE_4 = new core_1.DateField('genericDate4', PerGlobalInfoZaf, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_DATE_5 = new core_1.DateField('genericDate5', PerGlobalInfoZaf, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_DATE_6 = new core_1.DateField('genericDate6', PerGlobalInfoZaf, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_DATE_7 = new core_1.DateField('genericDate7', PerGlobalInfoZaf, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_DATE_8 = new core_1.DateField('genericDate8', PerGlobalInfoZaf, 'Edm.DateTime');
    /**
     * Static representation of the [[genericNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_NUMBER_1 = new core_1.BigNumberField('genericNumber1', PerGlobalInfoZaf, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_NUMBER_10 = new core_1.BigNumberField('genericNumber10', PerGlobalInfoZaf, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_NUMBER_11 = new core_1.BigNumberField('genericNumber11', PerGlobalInfoZaf, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_NUMBER_12 = new core_1.BigNumberField('genericNumber12', PerGlobalInfoZaf, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_NUMBER_13 = new core_1.BigNumberField('genericNumber13', PerGlobalInfoZaf, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_NUMBER_2 = new core_1.BigNumberField('genericNumber2', PerGlobalInfoZaf, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_NUMBER_3 = new core_1.BigNumberField('genericNumber3', PerGlobalInfoZaf, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_NUMBER_4 = new core_1.BigNumberField('genericNumber4', PerGlobalInfoZaf, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_NUMBER_5 = new core_1.BigNumberField('genericNumber5', PerGlobalInfoZaf, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_NUMBER_6 = new core_1.BigNumberField('genericNumber6', PerGlobalInfoZaf, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_NUMBER_7 = new core_1.BigNumberField('genericNumber7', PerGlobalInfoZaf, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_NUMBER_8 = new core_1.BigNumberField('genericNumber8', PerGlobalInfoZaf, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_NUMBER_9 = new core_1.BigNumberField('genericNumber9', PerGlobalInfoZaf, 'Edm.Int64');
    /**
     * Static representation of the [[genericString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_STRING_1 = new core_1.StringField('genericString1', PerGlobalInfoZaf, 'Edm.String');
    /**
     * Static representation of the [[genericString10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_STRING_10 = new core_1.StringField('genericString10', PerGlobalInfoZaf, 'Edm.String');
    /**
     * Static representation of the [[genericString11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_STRING_11 = new core_1.StringField('genericString11', PerGlobalInfoZaf, 'Edm.String');
    /**
     * Static representation of the [[genericString12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_STRING_12 = new core_1.StringField('genericString12', PerGlobalInfoZaf, 'Edm.String');
    /**
     * Static representation of the [[genericString13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_STRING_13 = new core_1.StringField('genericString13', PerGlobalInfoZaf, 'Edm.String');
    /**
     * Static representation of the [[genericString14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_STRING_14 = new core_1.StringField('genericString14', PerGlobalInfoZaf, 'Edm.String');
    /**
     * Static representation of the [[genericString15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_STRING_15 = new core_1.StringField('genericString15', PerGlobalInfoZaf, 'Edm.String');
    /**
     * Static representation of the [[genericString16]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_STRING_16 = new core_1.StringField('genericString16', PerGlobalInfoZaf, 'Edm.String');
    /**
     * Static representation of the [[genericString17]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_STRING_17 = new core_1.StringField('genericString17', PerGlobalInfoZaf, 'Edm.String');
    /**
     * Static representation of the [[genericString18]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_STRING_18 = new core_1.StringField('genericString18', PerGlobalInfoZaf, 'Edm.String');
    /**
     * Static representation of the [[genericString19]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_STRING_19 = new core_1.StringField('genericString19', PerGlobalInfoZaf, 'Edm.String');
    /**
     * Static representation of the [[genericString2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_STRING_2 = new core_1.StringField('genericString2', PerGlobalInfoZaf, 'Edm.String');
    /**
     * Static representation of the [[genericString20]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_STRING_20 = new core_1.StringField('genericString20', PerGlobalInfoZaf, 'Edm.String');
    /**
     * Static representation of the [[genericString3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_STRING_3 = new core_1.StringField('genericString3', PerGlobalInfoZaf, 'Edm.String');
    /**
     * Static representation of the [[genericString4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_STRING_4 = new core_1.StringField('genericString4', PerGlobalInfoZaf, 'Edm.String');
    /**
     * Static representation of the [[genericString5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_STRING_5 = new core_1.StringField('genericString5', PerGlobalInfoZaf, 'Edm.String');
    /**
     * Static representation of the [[genericString6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_STRING_6 = new core_1.StringField('genericString6', PerGlobalInfoZaf, 'Edm.String');
    /**
     * Static representation of the [[genericString7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_STRING_7 = new core_1.StringField('genericString7', PerGlobalInfoZaf, 'Edm.String');
    /**
     * Static representation of the [[genericString8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_STRING_8 = new core_1.StringField('genericString8', PerGlobalInfoZaf, 'Edm.String');
    /**
     * Static representation of the [[genericString9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_STRING_9 = new core_1.StringField('genericString9', PerGlobalInfoZaf, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PerGlobalInfoZaf, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PerGlobalInfoZaf, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', PerGlobalInfoZaf, 'Edm.DateTime');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.OPERATION = new core_1.StringField('operation', PerGlobalInfoZaf, 'Edm.String');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.PERSON_ID_EXTERNAL = new core_1.StringField('personIdExternal', PerGlobalInfoZaf, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.START_DATE = new core_1.DateField('startDate', PerGlobalInfoZaf, 'Edm.DateTime');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', PerGlobalInfoZaf, Territory_1.Territory);
    /**
     * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_STRING_1_NAV = new core_1.OneToOneLink('genericString1Nav', PerGlobalInfoZaf, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_STRING_2_NAV = new core_1.OneToOneLink('genericString2Nav', PerGlobalInfoZaf, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString5Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_STRING_5_NAV = new core_1.OneToOneLink('genericString5Nav', PerGlobalInfoZaf, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString6Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.GENERIC_STRING_6_NAV = new core_1.OneToOneLink('genericString6Nav', PerGlobalInfoZaf, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoZaf.PERSON_NAV = new core_1.OneToOneLink('personNav', PerGlobalInfoZaf, PerPerson_1.PerPerson);
    /**
     * All fields of the PerGlobalInfoZaf entity.
     */
    PerGlobalInfoZaf._allFields = [
        PerGlobalInfoZaf.COUNTRY,
        PerGlobalInfoZaf.CREATED_BY,
        PerGlobalInfoZaf.CREATED_DATE_TIME,
        PerGlobalInfoZaf.CREATED_ON,
        PerGlobalInfoZaf.END_DATE,
        PerGlobalInfoZaf.GENERIC_DATE_1,
        PerGlobalInfoZaf.GENERIC_DATE_2,
        PerGlobalInfoZaf.GENERIC_DATE_3,
        PerGlobalInfoZaf.GENERIC_DATE_4,
        PerGlobalInfoZaf.GENERIC_DATE_5,
        PerGlobalInfoZaf.GENERIC_DATE_6,
        PerGlobalInfoZaf.GENERIC_DATE_7,
        PerGlobalInfoZaf.GENERIC_DATE_8,
        PerGlobalInfoZaf.GENERIC_NUMBER_1,
        PerGlobalInfoZaf.GENERIC_NUMBER_10,
        PerGlobalInfoZaf.GENERIC_NUMBER_11,
        PerGlobalInfoZaf.GENERIC_NUMBER_12,
        PerGlobalInfoZaf.GENERIC_NUMBER_13,
        PerGlobalInfoZaf.GENERIC_NUMBER_2,
        PerGlobalInfoZaf.GENERIC_NUMBER_3,
        PerGlobalInfoZaf.GENERIC_NUMBER_4,
        PerGlobalInfoZaf.GENERIC_NUMBER_5,
        PerGlobalInfoZaf.GENERIC_NUMBER_6,
        PerGlobalInfoZaf.GENERIC_NUMBER_7,
        PerGlobalInfoZaf.GENERIC_NUMBER_8,
        PerGlobalInfoZaf.GENERIC_NUMBER_9,
        PerGlobalInfoZaf.GENERIC_STRING_1,
        PerGlobalInfoZaf.GENERIC_STRING_10,
        PerGlobalInfoZaf.GENERIC_STRING_11,
        PerGlobalInfoZaf.GENERIC_STRING_12,
        PerGlobalInfoZaf.GENERIC_STRING_13,
        PerGlobalInfoZaf.GENERIC_STRING_14,
        PerGlobalInfoZaf.GENERIC_STRING_15,
        PerGlobalInfoZaf.GENERIC_STRING_16,
        PerGlobalInfoZaf.GENERIC_STRING_17,
        PerGlobalInfoZaf.GENERIC_STRING_18,
        PerGlobalInfoZaf.GENERIC_STRING_19,
        PerGlobalInfoZaf.GENERIC_STRING_2,
        PerGlobalInfoZaf.GENERIC_STRING_20,
        PerGlobalInfoZaf.GENERIC_STRING_3,
        PerGlobalInfoZaf.GENERIC_STRING_4,
        PerGlobalInfoZaf.GENERIC_STRING_5,
        PerGlobalInfoZaf.GENERIC_STRING_6,
        PerGlobalInfoZaf.GENERIC_STRING_7,
        PerGlobalInfoZaf.GENERIC_STRING_8,
        PerGlobalInfoZaf.GENERIC_STRING_9,
        PerGlobalInfoZaf.LAST_MODIFIED_BY,
        PerGlobalInfoZaf.LAST_MODIFIED_DATE_TIME,
        PerGlobalInfoZaf.LAST_MODIFIED_ON,
        PerGlobalInfoZaf.OPERATION,
        PerGlobalInfoZaf.PERSON_ID_EXTERNAL,
        PerGlobalInfoZaf.START_DATE,
        PerGlobalInfoZaf.COUNTRY_NAV,
        PerGlobalInfoZaf.GENERIC_STRING_1_NAV,
        PerGlobalInfoZaf.GENERIC_STRING_2_NAV,
        PerGlobalInfoZaf.GENERIC_STRING_5_NAV,
        PerGlobalInfoZaf.GENERIC_STRING_6_NAV,
        PerGlobalInfoZaf.PERSON_NAV
    ];
    /**
     * All fields selector.
     */
    PerGlobalInfoZaf.ALL_FIELDS = new core_1.AllFields('*', PerGlobalInfoZaf);
    /**
     * All key fields of the PerGlobalInfoZaf entity.
     */
    PerGlobalInfoZaf._keyFields = [PerGlobalInfoZaf.COUNTRY, PerGlobalInfoZaf.PERSON_ID_EXTERNAL, PerGlobalInfoZaf.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property PerGlobalInfoZaf.
     */
    PerGlobalInfoZaf._keys = PerGlobalInfoZaf._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerGlobalInfoZaf = exports.PerGlobalInfoZaf || (exports.PerGlobalInfoZaf = {}));
exports.PerGlobalInfoZaf = PerGlobalInfoZaf;
//# sourceMappingURL=PerGlobalInfoZaf.js.map