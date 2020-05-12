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
var PerGlobalInfoIndRequestBuilder_1 = require("./PerGlobalInfoIndRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PerGlobalInfoIND" of service "SFOData".
 */
var PerGlobalInfoInd = /** @class */ (function (_super) {
    __extends(PerGlobalInfoInd, _super);
    function PerGlobalInfoInd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerGlobalInfoInd`.
     * @returns A builder that constructs instances of entity type `PerGlobalInfoInd`.
     */
    PerGlobalInfoInd.builder = function () {
        return core_1.Entity.entityBuilder(PerGlobalInfoInd);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerGlobalInfoInd` entity type.
     * @returns A `PerGlobalInfoInd` request builder.
     */
    PerGlobalInfoInd.requestBuilder = function () {
        return new PerGlobalInfoIndRequestBuilder_1.PerGlobalInfoIndRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoInd`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerGlobalInfoInd`.
     */
    PerGlobalInfoInd.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PerGlobalInfoInd);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerGlobalInfoInd.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerGlobalInfoInd.
     */
    PerGlobalInfoInd._entityName = 'PerGlobalInfoIND';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerGlobalInfoInd.
     */
    PerGlobalInfoInd._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerGlobalInfoInd._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PerGlobalInfoInd;
}(core_1.Entity));
exports.PerGlobalInfoInd = PerGlobalInfoInd;
var Territory_1 = require("./Territory");
var PicklistOption_1 = require("./PicklistOption");
var PerPerson_1 = require("./PerPerson");
(function (PerGlobalInfoInd) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.COUNTRY = new core_1.StringField('country', PerGlobalInfoInd, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.CREATED_BY = new core_1.StringField('createdBy', PerGlobalInfoInd, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PerGlobalInfoInd, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.CREATED_ON = new core_1.DateField('createdOn', PerGlobalInfoInd, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.END_DATE = new core_1.DateField('endDate', PerGlobalInfoInd, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_DATE_1 = new core_1.DateField('genericDate1', PerGlobalInfoInd, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_DATE_2 = new core_1.DateField('genericDate2', PerGlobalInfoInd, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_DATE_3 = new core_1.DateField('genericDate3', PerGlobalInfoInd, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_DATE_4 = new core_1.DateField('genericDate4', PerGlobalInfoInd, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_DATE_5 = new core_1.DateField('genericDate5', PerGlobalInfoInd, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_DATE_6 = new core_1.DateField('genericDate6', PerGlobalInfoInd, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_DATE_7 = new core_1.DateField('genericDate7', PerGlobalInfoInd, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_DATE_8 = new core_1.DateField('genericDate8', PerGlobalInfoInd, 'Edm.DateTime');
    /**
     * Static representation of the [[genericNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_NUMBER_1 = new core_1.BigNumberField('genericNumber1', PerGlobalInfoInd, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_NUMBER_10 = new core_1.BigNumberField('genericNumber10', PerGlobalInfoInd, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_NUMBER_11 = new core_1.BigNumberField('genericNumber11', PerGlobalInfoInd, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_NUMBER_12 = new core_1.BigNumberField('genericNumber12', PerGlobalInfoInd, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_NUMBER_13 = new core_1.BigNumberField('genericNumber13', PerGlobalInfoInd, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_NUMBER_2 = new core_1.BigNumberField('genericNumber2', PerGlobalInfoInd, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_NUMBER_3 = new core_1.BigNumberField('genericNumber3', PerGlobalInfoInd, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_NUMBER_4 = new core_1.BigNumberField('genericNumber4', PerGlobalInfoInd, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_NUMBER_5 = new core_1.BigNumberField('genericNumber5', PerGlobalInfoInd, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_NUMBER_6 = new core_1.BigNumberField('genericNumber6', PerGlobalInfoInd, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_NUMBER_7 = new core_1.BigNumberField('genericNumber7', PerGlobalInfoInd, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_NUMBER_8 = new core_1.BigNumberField('genericNumber8', PerGlobalInfoInd, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_NUMBER_9 = new core_1.BigNumberField('genericNumber9', PerGlobalInfoInd, 'Edm.Int64');
    /**
     * Static representation of the [[genericString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_STRING_1 = new core_1.StringField('genericString1', PerGlobalInfoInd, 'Edm.String');
    /**
     * Static representation of the [[genericString10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_STRING_10 = new core_1.StringField('genericString10', PerGlobalInfoInd, 'Edm.String');
    /**
     * Static representation of the [[genericString11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_STRING_11 = new core_1.StringField('genericString11', PerGlobalInfoInd, 'Edm.String');
    /**
     * Static representation of the [[genericString12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_STRING_12 = new core_1.StringField('genericString12', PerGlobalInfoInd, 'Edm.String');
    /**
     * Static representation of the [[genericString13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_STRING_13 = new core_1.StringField('genericString13', PerGlobalInfoInd, 'Edm.String');
    /**
     * Static representation of the [[genericString14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_STRING_14 = new core_1.StringField('genericString14', PerGlobalInfoInd, 'Edm.String');
    /**
     * Static representation of the [[genericString15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_STRING_15 = new core_1.StringField('genericString15', PerGlobalInfoInd, 'Edm.String');
    /**
     * Static representation of the [[genericString16]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_STRING_16 = new core_1.StringField('genericString16', PerGlobalInfoInd, 'Edm.String');
    /**
     * Static representation of the [[genericString17]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_STRING_17 = new core_1.StringField('genericString17', PerGlobalInfoInd, 'Edm.String');
    /**
     * Static representation of the [[genericString18]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_STRING_18 = new core_1.StringField('genericString18', PerGlobalInfoInd, 'Edm.String');
    /**
     * Static representation of the [[genericString19]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_STRING_19 = new core_1.StringField('genericString19', PerGlobalInfoInd, 'Edm.String');
    /**
     * Static representation of the [[genericString2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_STRING_2 = new core_1.StringField('genericString2', PerGlobalInfoInd, 'Edm.String');
    /**
     * Static representation of the [[genericString20]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_STRING_20 = new core_1.StringField('genericString20', PerGlobalInfoInd, 'Edm.String');
    /**
     * Static representation of the [[genericString3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_STRING_3 = new core_1.StringField('genericString3', PerGlobalInfoInd, 'Edm.String');
    /**
     * Static representation of the [[genericString4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_STRING_4 = new core_1.StringField('genericString4', PerGlobalInfoInd, 'Edm.String');
    /**
     * Static representation of the [[genericString5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_STRING_5 = new core_1.StringField('genericString5', PerGlobalInfoInd, 'Edm.String');
    /**
     * Static representation of the [[genericString6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_STRING_6 = new core_1.StringField('genericString6', PerGlobalInfoInd, 'Edm.String');
    /**
     * Static representation of the [[genericString7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_STRING_7 = new core_1.StringField('genericString7', PerGlobalInfoInd, 'Edm.String');
    /**
     * Static representation of the [[genericString8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_STRING_8 = new core_1.StringField('genericString8', PerGlobalInfoInd, 'Edm.String');
    /**
     * Static representation of the [[genericString9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_STRING_9 = new core_1.StringField('genericString9', PerGlobalInfoInd, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PerGlobalInfoInd, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PerGlobalInfoInd, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', PerGlobalInfoInd, 'Edm.DateTime');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.OPERATION = new core_1.StringField('operation', PerGlobalInfoInd, 'Edm.String');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.PERSON_ID_EXTERNAL = new core_1.StringField('personIdExternal', PerGlobalInfoInd, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.START_DATE = new core_1.DateField('startDate', PerGlobalInfoInd, 'Edm.DateTime');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', PerGlobalInfoInd, Territory_1.Territory);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_NUMBER_1_NAV = new core_1.OneToOneLink('genericNumber1Nav', PerGlobalInfoInd, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber4Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_NUMBER_4_NAV = new core_1.OneToOneLink('genericNumber4Nav', PerGlobalInfoInd, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_STRING_1_NAV = new core_1.OneToOneLink('genericString1Nav', PerGlobalInfoInd, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.GENERIC_STRING_2_NAV = new core_1.OneToOneLink('genericString2Nav', PerGlobalInfoInd, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoInd.PERSON_NAV = new core_1.OneToOneLink('personNav', PerGlobalInfoInd, PerPerson_1.PerPerson);
    /**
     * All fields of the PerGlobalInfoInd entity.
     */
    PerGlobalInfoInd._allFields = [
        PerGlobalInfoInd.COUNTRY,
        PerGlobalInfoInd.CREATED_BY,
        PerGlobalInfoInd.CREATED_DATE_TIME,
        PerGlobalInfoInd.CREATED_ON,
        PerGlobalInfoInd.END_DATE,
        PerGlobalInfoInd.GENERIC_DATE_1,
        PerGlobalInfoInd.GENERIC_DATE_2,
        PerGlobalInfoInd.GENERIC_DATE_3,
        PerGlobalInfoInd.GENERIC_DATE_4,
        PerGlobalInfoInd.GENERIC_DATE_5,
        PerGlobalInfoInd.GENERIC_DATE_6,
        PerGlobalInfoInd.GENERIC_DATE_7,
        PerGlobalInfoInd.GENERIC_DATE_8,
        PerGlobalInfoInd.GENERIC_NUMBER_1,
        PerGlobalInfoInd.GENERIC_NUMBER_10,
        PerGlobalInfoInd.GENERIC_NUMBER_11,
        PerGlobalInfoInd.GENERIC_NUMBER_12,
        PerGlobalInfoInd.GENERIC_NUMBER_13,
        PerGlobalInfoInd.GENERIC_NUMBER_2,
        PerGlobalInfoInd.GENERIC_NUMBER_3,
        PerGlobalInfoInd.GENERIC_NUMBER_4,
        PerGlobalInfoInd.GENERIC_NUMBER_5,
        PerGlobalInfoInd.GENERIC_NUMBER_6,
        PerGlobalInfoInd.GENERIC_NUMBER_7,
        PerGlobalInfoInd.GENERIC_NUMBER_8,
        PerGlobalInfoInd.GENERIC_NUMBER_9,
        PerGlobalInfoInd.GENERIC_STRING_1,
        PerGlobalInfoInd.GENERIC_STRING_10,
        PerGlobalInfoInd.GENERIC_STRING_11,
        PerGlobalInfoInd.GENERIC_STRING_12,
        PerGlobalInfoInd.GENERIC_STRING_13,
        PerGlobalInfoInd.GENERIC_STRING_14,
        PerGlobalInfoInd.GENERIC_STRING_15,
        PerGlobalInfoInd.GENERIC_STRING_16,
        PerGlobalInfoInd.GENERIC_STRING_17,
        PerGlobalInfoInd.GENERIC_STRING_18,
        PerGlobalInfoInd.GENERIC_STRING_19,
        PerGlobalInfoInd.GENERIC_STRING_2,
        PerGlobalInfoInd.GENERIC_STRING_20,
        PerGlobalInfoInd.GENERIC_STRING_3,
        PerGlobalInfoInd.GENERIC_STRING_4,
        PerGlobalInfoInd.GENERIC_STRING_5,
        PerGlobalInfoInd.GENERIC_STRING_6,
        PerGlobalInfoInd.GENERIC_STRING_7,
        PerGlobalInfoInd.GENERIC_STRING_8,
        PerGlobalInfoInd.GENERIC_STRING_9,
        PerGlobalInfoInd.LAST_MODIFIED_BY,
        PerGlobalInfoInd.LAST_MODIFIED_DATE_TIME,
        PerGlobalInfoInd.LAST_MODIFIED_ON,
        PerGlobalInfoInd.OPERATION,
        PerGlobalInfoInd.PERSON_ID_EXTERNAL,
        PerGlobalInfoInd.START_DATE,
        PerGlobalInfoInd.COUNTRY_NAV,
        PerGlobalInfoInd.GENERIC_NUMBER_1_NAV,
        PerGlobalInfoInd.GENERIC_NUMBER_4_NAV,
        PerGlobalInfoInd.GENERIC_STRING_1_NAV,
        PerGlobalInfoInd.GENERIC_STRING_2_NAV,
        PerGlobalInfoInd.PERSON_NAV
    ];
    /**
     * All fields selector.
     */
    PerGlobalInfoInd.ALL_FIELDS = new core_1.AllFields('*', PerGlobalInfoInd);
    /**
     * All key fields of the PerGlobalInfoInd entity.
     */
    PerGlobalInfoInd._keyFields = [PerGlobalInfoInd.COUNTRY, PerGlobalInfoInd.PERSON_ID_EXTERNAL, PerGlobalInfoInd.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property PerGlobalInfoInd.
     */
    PerGlobalInfoInd._keys = PerGlobalInfoInd._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerGlobalInfoInd = exports.PerGlobalInfoInd || (exports.PerGlobalInfoInd = {}));
exports.PerGlobalInfoInd = PerGlobalInfoInd;
//# sourceMappingURL=PerGlobalInfoInd.js.map