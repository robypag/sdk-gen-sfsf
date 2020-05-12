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
var PerGlobalInfoNzlRequestBuilder_1 = require("./PerGlobalInfoNzlRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PerGlobalInfoNZL" of service "SFOData".
 */
var PerGlobalInfoNzl = /** @class */ (function (_super) {
    __extends(PerGlobalInfoNzl, _super);
    function PerGlobalInfoNzl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerGlobalInfoNzl`.
     * @returns A builder that constructs instances of entity type `PerGlobalInfoNzl`.
     */
    PerGlobalInfoNzl.builder = function () {
        return core_1.Entity.entityBuilder(PerGlobalInfoNzl);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerGlobalInfoNzl` entity type.
     * @returns A `PerGlobalInfoNzl` request builder.
     */
    PerGlobalInfoNzl.requestBuilder = function () {
        return new PerGlobalInfoNzlRequestBuilder_1.PerGlobalInfoNzlRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoNzl`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerGlobalInfoNzl`.
     */
    PerGlobalInfoNzl.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PerGlobalInfoNzl);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerGlobalInfoNzl.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerGlobalInfoNzl.
     */
    PerGlobalInfoNzl._entityName = 'PerGlobalInfoNZL';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerGlobalInfoNzl.
     */
    PerGlobalInfoNzl._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerGlobalInfoNzl._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PerGlobalInfoNzl;
}(core_1.Entity));
exports.PerGlobalInfoNzl = PerGlobalInfoNzl;
var Territory_1 = require("./Territory");
var PicklistOption_1 = require("./PicklistOption");
var PerPerson_1 = require("./PerPerson");
(function (PerGlobalInfoNzl) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.COUNTRY = new core_1.StringField('country', PerGlobalInfoNzl, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.CREATED_BY = new core_1.StringField('createdBy', PerGlobalInfoNzl, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PerGlobalInfoNzl, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.CREATED_ON = new core_1.DateField('createdOn', PerGlobalInfoNzl, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.END_DATE = new core_1.DateField('endDate', PerGlobalInfoNzl, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_DATE_1 = new core_1.DateField('genericDate1', PerGlobalInfoNzl, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_DATE_2 = new core_1.DateField('genericDate2', PerGlobalInfoNzl, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_DATE_3 = new core_1.DateField('genericDate3', PerGlobalInfoNzl, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_DATE_4 = new core_1.DateField('genericDate4', PerGlobalInfoNzl, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_DATE_5 = new core_1.DateField('genericDate5', PerGlobalInfoNzl, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_DATE_6 = new core_1.DateField('genericDate6', PerGlobalInfoNzl, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_DATE_7 = new core_1.DateField('genericDate7', PerGlobalInfoNzl, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_DATE_8 = new core_1.DateField('genericDate8', PerGlobalInfoNzl, 'Edm.DateTime');
    /**
     * Static representation of the [[genericNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_NUMBER_1 = new core_1.BigNumberField('genericNumber1', PerGlobalInfoNzl, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_NUMBER_10 = new core_1.BigNumberField('genericNumber10', PerGlobalInfoNzl, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_NUMBER_11 = new core_1.BigNumberField('genericNumber11', PerGlobalInfoNzl, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_NUMBER_12 = new core_1.BigNumberField('genericNumber12', PerGlobalInfoNzl, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_NUMBER_13 = new core_1.BigNumberField('genericNumber13', PerGlobalInfoNzl, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_NUMBER_2 = new core_1.BigNumberField('genericNumber2', PerGlobalInfoNzl, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_NUMBER_3 = new core_1.BigNumberField('genericNumber3', PerGlobalInfoNzl, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_NUMBER_4 = new core_1.BigNumberField('genericNumber4', PerGlobalInfoNzl, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_NUMBER_5 = new core_1.BigNumberField('genericNumber5', PerGlobalInfoNzl, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_NUMBER_6 = new core_1.BigNumberField('genericNumber6', PerGlobalInfoNzl, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_NUMBER_7 = new core_1.BigNumberField('genericNumber7', PerGlobalInfoNzl, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_NUMBER_8 = new core_1.BigNumberField('genericNumber8', PerGlobalInfoNzl, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_NUMBER_9 = new core_1.BigNumberField('genericNumber9', PerGlobalInfoNzl, 'Edm.Int64');
    /**
     * Static representation of the [[genericString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_STRING_1 = new core_1.StringField('genericString1', PerGlobalInfoNzl, 'Edm.String');
    /**
     * Static representation of the [[genericString10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_STRING_10 = new core_1.StringField('genericString10', PerGlobalInfoNzl, 'Edm.String');
    /**
     * Static representation of the [[genericString11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_STRING_11 = new core_1.StringField('genericString11', PerGlobalInfoNzl, 'Edm.String');
    /**
     * Static representation of the [[genericString12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_STRING_12 = new core_1.StringField('genericString12', PerGlobalInfoNzl, 'Edm.String');
    /**
     * Static representation of the [[genericString13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_STRING_13 = new core_1.StringField('genericString13', PerGlobalInfoNzl, 'Edm.String');
    /**
     * Static representation of the [[genericString14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_STRING_14 = new core_1.StringField('genericString14', PerGlobalInfoNzl, 'Edm.String');
    /**
     * Static representation of the [[genericString15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_STRING_15 = new core_1.StringField('genericString15', PerGlobalInfoNzl, 'Edm.String');
    /**
     * Static representation of the [[genericString16]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_STRING_16 = new core_1.StringField('genericString16', PerGlobalInfoNzl, 'Edm.String');
    /**
     * Static representation of the [[genericString17]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_STRING_17 = new core_1.StringField('genericString17', PerGlobalInfoNzl, 'Edm.String');
    /**
     * Static representation of the [[genericString18]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_STRING_18 = new core_1.StringField('genericString18', PerGlobalInfoNzl, 'Edm.String');
    /**
     * Static representation of the [[genericString19]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_STRING_19 = new core_1.StringField('genericString19', PerGlobalInfoNzl, 'Edm.String');
    /**
     * Static representation of the [[genericString2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_STRING_2 = new core_1.StringField('genericString2', PerGlobalInfoNzl, 'Edm.String');
    /**
     * Static representation of the [[genericString20]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_STRING_20 = new core_1.StringField('genericString20', PerGlobalInfoNzl, 'Edm.String');
    /**
     * Static representation of the [[genericString3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_STRING_3 = new core_1.StringField('genericString3', PerGlobalInfoNzl, 'Edm.String');
    /**
     * Static representation of the [[genericString4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_STRING_4 = new core_1.StringField('genericString4', PerGlobalInfoNzl, 'Edm.String');
    /**
     * Static representation of the [[genericString5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_STRING_5 = new core_1.StringField('genericString5', PerGlobalInfoNzl, 'Edm.String');
    /**
     * Static representation of the [[genericString6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_STRING_6 = new core_1.StringField('genericString6', PerGlobalInfoNzl, 'Edm.String');
    /**
     * Static representation of the [[genericString7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_STRING_7 = new core_1.StringField('genericString7', PerGlobalInfoNzl, 'Edm.String');
    /**
     * Static representation of the [[genericString8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_STRING_8 = new core_1.StringField('genericString8', PerGlobalInfoNzl, 'Edm.String');
    /**
     * Static representation of the [[genericString9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_STRING_9 = new core_1.StringField('genericString9', PerGlobalInfoNzl, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PerGlobalInfoNzl, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PerGlobalInfoNzl, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', PerGlobalInfoNzl, 'Edm.DateTime');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.OPERATION = new core_1.StringField('operation', PerGlobalInfoNzl, 'Edm.String');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.PERSON_ID_EXTERNAL = new core_1.StringField('personIdExternal', PerGlobalInfoNzl, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.START_DATE = new core_1.DateField('startDate', PerGlobalInfoNzl, 'Edm.DateTime');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', PerGlobalInfoNzl, Territory_1.Territory);
    /**
     * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_STRING_1_NAV = new core_1.OneToOneLink('genericString1Nav', PerGlobalInfoNzl, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_STRING_2_NAV = new core_1.OneToOneLink('genericString2Nav', PerGlobalInfoNzl, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString5Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.GENERIC_STRING_5_NAV = new core_1.OneToOneLink('genericString5Nav', PerGlobalInfoNzl, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNzl.PERSON_NAV = new core_1.OneToOneLink('personNav', PerGlobalInfoNzl, PerPerson_1.PerPerson);
    /**
     * All fields of the PerGlobalInfoNzl entity.
     */
    PerGlobalInfoNzl._allFields = [
        PerGlobalInfoNzl.COUNTRY,
        PerGlobalInfoNzl.CREATED_BY,
        PerGlobalInfoNzl.CREATED_DATE_TIME,
        PerGlobalInfoNzl.CREATED_ON,
        PerGlobalInfoNzl.END_DATE,
        PerGlobalInfoNzl.GENERIC_DATE_1,
        PerGlobalInfoNzl.GENERIC_DATE_2,
        PerGlobalInfoNzl.GENERIC_DATE_3,
        PerGlobalInfoNzl.GENERIC_DATE_4,
        PerGlobalInfoNzl.GENERIC_DATE_5,
        PerGlobalInfoNzl.GENERIC_DATE_6,
        PerGlobalInfoNzl.GENERIC_DATE_7,
        PerGlobalInfoNzl.GENERIC_DATE_8,
        PerGlobalInfoNzl.GENERIC_NUMBER_1,
        PerGlobalInfoNzl.GENERIC_NUMBER_10,
        PerGlobalInfoNzl.GENERIC_NUMBER_11,
        PerGlobalInfoNzl.GENERIC_NUMBER_12,
        PerGlobalInfoNzl.GENERIC_NUMBER_13,
        PerGlobalInfoNzl.GENERIC_NUMBER_2,
        PerGlobalInfoNzl.GENERIC_NUMBER_3,
        PerGlobalInfoNzl.GENERIC_NUMBER_4,
        PerGlobalInfoNzl.GENERIC_NUMBER_5,
        PerGlobalInfoNzl.GENERIC_NUMBER_6,
        PerGlobalInfoNzl.GENERIC_NUMBER_7,
        PerGlobalInfoNzl.GENERIC_NUMBER_8,
        PerGlobalInfoNzl.GENERIC_NUMBER_9,
        PerGlobalInfoNzl.GENERIC_STRING_1,
        PerGlobalInfoNzl.GENERIC_STRING_10,
        PerGlobalInfoNzl.GENERIC_STRING_11,
        PerGlobalInfoNzl.GENERIC_STRING_12,
        PerGlobalInfoNzl.GENERIC_STRING_13,
        PerGlobalInfoNzl.GENERIC_STRING_14,
        PerGlobalInfoNzl.GENERIC_STRING_15,
        PerGlobalInfoNzl.GENERIC_STRING_16,
        PerGlobalInfoNzl.GENERIC_STRING_17,
        PerGlobalInfoNzl.GENERIC_STRING_18,
        PerGlobalInfoNzl.GENERIC_STRING_19,
        PerGlobalInfoNzl.GENERIC_STRING_2,
        PerGlobalInfoNzl.GENERIC_STRING_20,
        PerGlobalInfoNzl.GENERIC_STRING_3,
        PerGlobalInfoNzl.GENERIC_STRING_4,
        PerGlobalInfoNzl.GENERIC_STRING_5,
        PerGlobalInfoNzl.GENERIC_STRING_6,
        PerGlobalInfoNzl.GENERIC_STRING_7,
        PerGlobalInfoNzl.GENERIC_STRING_8,
        PerGlobalInfoNzl.GENERIC_STRING_9,
        PerGlobalInfoNzl.LAST_MODIFIED_BY,
        PerGlobalInfoNzl.LAST_MODIFIED_DATE_TIME,
        PerGlobalInfoNzl.LAST_MODIFIED_ON,
        PerGlobalInfoNzl.OPERATION,
        PerGlobalInfoNzl.PERSON_ID_EXTERNAL,
        PerGlobalInfoNzl.START_DATE,
        PerGlobalInfoNzl.COUNTRY_NAV,
        PerGlobalInfoNzl.GENERIC_STRING_1_NAV,
        PerGlobalInfoNzl.GENERIC_STRING_2_NAV,
        PerGlobalInfoNzl.GENERIC_STRING_5_NAV,
        PerGlobalInfoNzl.PERSON_NAV
    ];
    /**
     * All fields selector.
     */
    PerGlobalInfoNzl.ALL_FIELDS = new core_1.AllFields('*', PerGlobalInfoNzl);
    /**
     * All key fields of the PerGlobalInfoNzl entity.
     */
    PerGlobalInfoNzl._keyFields = [PerGlobalInfoNzl.COUNTRY, PerGlobalInfoNzl.PERSON_ID_EXTERNAL, PerGlobalInfoNzl.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property PerGlobalInfoNzl.
     */
    PerGlobalInfoNzl._keys = PerGlobalInfoNzl._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerGlobalInfoNzl = exports.PerGlobalInfoNzl || (exports.PerGlobalInfoNzl = {}));
exports.PerGlobalInfoNzl = PerGlobalInfoNzl;
//# sourceMappingURL=PerGlobalInfoNzl.js.map