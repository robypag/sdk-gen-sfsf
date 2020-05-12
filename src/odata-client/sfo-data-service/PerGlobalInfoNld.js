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
var PerGlobalInfoNldRequestBuilder_1 = require("./PerGlobalInfoNldRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PerGlobalInfoNLD" of service "SFOData".
 */
var PerGlobalInfoNld = /** @class */ (function (_super) {
    __extends(PerGlobalInfoNld, _super);
    function PerGlobalInfoNld() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerGlobalInfoNld`.
     * @returns A builder that constructs instances of entity type `PerGlobalInfoNld`.
     */
    PerGlobalInfoNld.builder = function () {
        return core_1.Entity.entityBuilder(PerGlobalInfoNld);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerGlobalInfoNld` entity type.
     * @returns A `PerGlobalInfoNld` request builder.
     */
    PerGlobalInfoNld.requestBuilder = function () {
        return new PerGlobalInfoNldRequestBuilder_1.PerGlobalInfoNldRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoNld`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerGlobalInfoNld`.
     */
    PerGlobalInfoNld.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PerGlobalInfoNld);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerGlobalInfoNld.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerGlobalInfoNld.
     */
    PerGlobalInfoNld._entityName = 'PerGlobalInfoNLD';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerGlobalInfoNld.
     */
    PerGlobalInfoNld._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerGlobalInfoNld._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PerGlobalInfoNld;
}(core_1.Entity));
exports.PerGlobalInfoNld = PerGlobalInfoNld;
var Territory_1 = require("./Territory");
var PicklistOption_1 = require("./PicklistOption");
var PerPerson_1 = require("./PerPerson");
(function (PerGlobalInfoNld) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.COUNTRY = new core_1.StringField('country', PerGlobalInfoNld, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.CREATED_BY = new core_1.StringField('createdBy', PerGlobalInfoNld, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PerGlobalInfoNld, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.CREATED_ON = new core_1.DateField('createdOn', PerGlobalInfoNld, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.END_DATE = new core_1.DateField('endDate', PerGlobalInfoNld, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_DATE_1 = new core_1.DateField('genericDate1', PerGlobalInfoNld, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_DATE_2 = new core_1.DateField('genericDate2', PerGlobalInfoNld, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_DATE_3 = new core_1.DateField('genericDate3', PerGlobalInfoNld, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_DATE_4 = new core_1.DateField('genericDate4', PerGlobalInfoNld, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_DATE_5 = new core_1.DateField('genericDate5', PerGlobalInfoNld, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_DATE_6 = new core_1.DateField('genericDate6', PerGlobalInfoNld, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_DATE_7 = new core_1.DateField('genericDate7', PerGlobalInfoNld, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_DATE_8 = new core_1.DateField('genericDate8', PerGlobalInfoNld, 'Edm.DateTime');
    /**
     * Static representation of the [[genericNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_NUMBER_1 = new core_1.BigNumberField('genericNumber1', PerGlobalInfoNld, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_NUMBER_10 = new core_1.BigNumberField('genericNumber10', PerGlobalInfoNld, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_NUMBER_11 = new core_1.BigNumberField('genericNumber11', PerGlobalInfoNld, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_NUMBER_12 = new core_1.BigNumberField('genericNumber12', PerGlobalInfoNld, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_NUMBER_13 = new core_1.BigNumberField('genericNumber13', PerGlobalInfoNld, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_NUMBER_2 = new core_1.BigNumberField('genericNumber2', PerGlobalInfoNld, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_NUMBER_3 = new core_1.BigNumberField('genericNumber3', PerGlobalInfoNld, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_NUMBER_4 = new core_1.BigNumberField('genericNumber4', PerGlobalInfoNld, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_NUMBER_5 = new core_1.BigNumberField('genericNumber5', PerGlobalInfoNld, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_NUMBER_6 = new core_1.BigNumberField('genericNumber6', PerGlobalInfoNld, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_NUMBER_7 = new core_1.BigNumberField('genericNumber7', PerGlobalInfoNld, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_NUMBER_8 = new core_1.BigNumberField('genericNumber8', PerGlobalInfoNld, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_NUMBER_9 = new core_1.BigNumberField('genericNumber9', PerGlobalInfoNld, 'Edm.Int64');
    /**
     * Static representation of the [[genericString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_STRING_1 = new core_1.StringField('genericString1', PerGlobalInfoNld, 'Edm.String');
    /**
     * Static representation of the [[genericString10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_STRING_10 = new core_1.StringField('genericString10', PerGlobalInfoNld, 'Edm.String');
    /**
     * Static representation of the [[genericString11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_STRING_11 = new core_1.StringField('genericString11', PerGlobalInfoNld, 'Edm.String');
    /**
     * Static representation of the [[genericString12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_STRING_12 = new core_1.StringField('genericString12', PerGlobalInfoNld, 'Edm.String');
    /**
     * Static representation of the [[genericString13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_STRING_13 = new core_1.StringField('genericString13', PerGlobalInfoNld, 'Edm.String');
    /**
     * Static representation of the [[genericString14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_STRING_14 = new core_1.StringField('genericString14', PerGlobalInfoNld, 'Edm.String');
    /**
     * Static representation of the [[genericString15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_STRING_15 = new core_1.StringField('genericString15', PerGlobalInfoNld, 'Edm.String');
    /**
     * Static representation of the [[genericString16]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_STRING_16 = new core_1.StringField('genericString16', PerGlobalInfoNld, 'Edm.String');
    /**
     * Static representation of the [[genericString17]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_STRING_17 = new core_1.StringField('genericString17', PerGlobalInfoNld, 'Edm.String');
    /**
     * Static representation of the [[genericString18]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_STRING_18 = new core_1.StringField('genericString18', PerGlobalInfoNld, 'Edm.String');
    /**
     * Static representation of the [[genericString19]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_STRING_19 = new core_1.StringField('genericString19', PerGlobalInfoNld, 'Edm.String');
    /**
     * Static representation of the [[genericString2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_STRING_2 = new core_1.StringField('genericString2', PerGlobalInfoNld, 'Edm.String');
    /**
     * Static representation of the [[genericString20]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_STRING_20 = new core_1.StringField('genericString20', PerGlobalInfoNld, 'Edm.String');
    /**
     * Static representation of the [[genericString3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_STRING_3 = new core_1.StringField('genericString3', PerGlobalInfoNld, 'Edm.String');
    /**
     * Static representation of the [[genericString4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_STRING_4 = new core_1.StringField('genericString4', PerGlobalInfoNld, 'Edm.String');
    /**
     * Static representation of the [[genericString5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_STRING_5 = new core_1.StringField('genericString5', PerGlobalInfoNld, 'Edm.String');
    /**
     * Static representation of the [[genericString6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_STRING_6 = new core_1.StringField('genericString6', PerGlobalInfoNld, 'Edm.String');
    /**
     * Static representation of the [[genericString7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_STRING_7 = new core_1.StringField('genericString7', PerGlobalInfoNld, 'Edm.String');
    /**
     * Static representation of the [[genericString8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_STRING_8 = new core_1.StringField('genericString8', PerGlobalInfoNld, 'Edm.String');
    /**
     * Static representation of the [[genericString9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_STRING_9 = new core_1.StringField('genericString9', PerGlobalInfoNld, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PerGlobalInfoNld, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PerGlobalInfoNld, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', PerGlobalInfoNld, 'Edm.DateTime');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.OPERATION = new core_1.StringField('operation', PerGlobalInfoNld, 'Edm.String');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.PERSON_ID_EXTERNAL = new core_1.StringField('personIdExternal', PerGlobalInfoNld, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.START_DATE = new core_1.DateField('startDate', PerGlobalInfoNld, 'Edm.DateTime');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', PerGlobalInfoNld, Territory_1.Territory);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber2Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_NUMBER_2_NAV = new core_1.OneToOneLink('genericNumber2Nav', PerGlobalInfoNld, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber3Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_NUMBER_3_NAV = new core_1.OneToOneLink('genericNumber3Nav', PerGlobalInfoNld, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_STRING_1_NAV = new core_1.OneToOneLink('genericString1Nav', PerGlobalInfoNld, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.GENERIC_STRING_2_NAV = new core_1.OneToOneLink('genericString2Nav', PerGlobalInfoNld, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoNld.PERSON_NAV = new core_1.OneToOneLink('personNav', PerGlobalInfoNld, PerPerson_1.PerPerson);
    /**
     * All fields of the PerGlobalInfoNld entity.
     */
    PerGlobalInfoNld._allFields = [
        PerGlobalInfoNld.COUNTRY,
        PerGlobalInfoNld.CREATED_BY,
        PerGlobalInfoNld.CREATED_DATE_TIME,
        PerGlobalInfoNld.CREATED_ON,
        PerGlobalInfoNld.END_DATE,
        PerGlobalInfoNld.GENERIC_DATE_1,
        PerGlobalInfoNld.GENERIC_DATE_2,
        PerGlobalInfoNld.GENERIC_DATE_3,
        PerGlobalInfoNld.GENERIC_DATE_4,
        PerGlobalInfoNld.GENERIC_DATE_5,
        PerGlobalInfoNld.GENERIC_DATE_6,
        PerGlobalInfoNld.GENERIC_DATE_7,
        PerGlobalInfoNld.GENERIC_DATE_8,
        PerGlobalInfoNld.GENERIC_NUMBER_1,
        PerGlobalInfoNld.GENERIC_NUMBER_10,
        PerGlobalInfoNld.GENERIC_NUMBER_11,
        PerGlobalInfoNld.GENERIC_NUMBER_12,
        PerGlobalInfoNld.GENERIC_NUMBER_13,
        PerGlobalInfoNld.GENERIC_NUMBER_2,
        PerGlobalInfoNld.GENERIC_NUMBER_3,
        PerGlobalInfoNld.GENERIC_NUMBER_4,
        PerGlobalInfoNld.GENERIC_NUMBER_5,
        PerGlobalInfoNld.GENERIC_NUMBER_6,
        PerGlobalInfoNld.GENERIC_NUMBER_7,
        PerGlobalInfoNld.GENERIC_NUMBER_8,
        PerGlobalInfoNld.GENERIC_NUMBER_9,
        PerGlobalInfoNld.GENERIC_STRING_1,
        PerGlobalInfoNld.GENERIC_STRING_10,
        PerGlobalInfoNld.GENERIC_STRING_11,
        PerGlobalInfoNld.GENERIC_STRING_12,
        PerGlobalInfoNld.GENERIC_STRING_13,
        PerGlobalInfoNld.GENERIC_STRING_14,
        PerGlobalInfoNld.GENERIC_STRING_15,
        PerGlobalInfoNld.GENERIC_STRING_16,
        PerGlobalInfoNld.GENERIC_STRING_17,
        PerGlobalInfoNld.GENERIC_STRING_18,
        PerGlobalInfoNld.GENERIC_STRING_19,
        PerGlobalInfoNld.GENERIC_STRING_2,
        PerGlobalInfoNld.GENERIC_STRING_20,
        PerGlobalInfoNld.GENERIC_STRING_3,
        PerGlobalInfoNld.GENERIC_STRING_4,
        PerGlobalInfoNld.GENERIC_STRING_5,
        PerGlobalInfoNld.GENERIC_STRING_6,
        PerGlobalInfoNld.GENERIC_STRING_7,
        PerGlobalInfoNld.GENERIC_STRING_8,
        PerGlobalInfoNld.GENERIC_STRING_9,
        PerGlobalInfoNld.LAST_MODIFIED_BY,
        PerGlobalInfoNld.LAST_MODIFIED_DATE_TIME,
        PerGlobalInfoNld.LAST_MODIFIED_ON,
        PerGlobalInfoNld.OPERATION,
        PerGlobalInfoNld.PERSON_ID_EXTERNAL,
        PerGlobalInfoNld.START_DATE,
        PerGlobalInfoNld.COUNTRY_NAV,
        PerGlobalInfoNld.GENERIC_NUMBER_2_NAV,
        PerGlobalInfoNld.GENERIC_NUMBER_3_NAV,
        PerGlobalInfoNld.GENERIC_STRING_1_NAV,
        PerGlobalInfoNld.GENERIC_STRING_2_NAV,
        PerGlobalInfoNld.PERSON_NAV
    ];
    /**
     * All fields selector.
     */
    PerGlobalInfoNld.ALL_FIELDS = new core_1.AllFields('*', PerGlobalInfoNld);
    /**
     * All key fields of the PerGlobalInfoNld entity.
     */
    PerGlobalInfoNld._keyFields = [PerGlobalInfoNld.COUNTRY, PerGlobalInfoNld.PERSON_ID_EXTERNAL, PerGlobalInfoNld.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property PerGlobalInfoNld.
     */
    PerGlobalInfoNld._keys = PerGlobalInfoNld._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerGlobalInfoNld = exports.PerGlobalInfoNld || (exports.PerGlobalInfoNld = {}));
exports.PerGlobalInfoNld = PerGlobalInfoNld;
//# sourceMappingURL=PerGlobalInfoNld.js.map