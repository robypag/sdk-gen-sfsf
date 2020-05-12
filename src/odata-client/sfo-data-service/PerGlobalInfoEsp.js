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
var PerGlobalInfoEspRequestBuilder_1 = require("./PerGlobalInfoEspRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PerGlobalInfoESP" of service "SFOData".
 */
var PerGlobalInfoEsp = /** @class */ (function (_super) {
    __extends(PerGlobalInfoEsp, _super);
    function PerGlobalInfoEsp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerGlobalInfoEsp`.
     * @returns A builder that constructs instances of entity type `PerGlobalInfoEsp`.
     */
    PerGlobalInfoEsp.builder = function () {
        return core_1.Entity.entityBuilder(PerGlobalInfoEsp);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerGlobalInfoEsp` entity type.
     * @returns A `PerGlobalInfoEsp` request builder.
     */
    PerGlobalInfoEsp.requestBuilder = function () {
        return new PerGlobalInfoEspRequestBuilder_1.PerGlobalInfoEspRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoEsp`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerGlobalInfoEsp`.
     */
    PerGlobalInfoEsp.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PerGlobalInfoEsp);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerGlobalInfoEsp.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerGlobalInfoEsp.
     */
    PerGlobalInfoEsp._entityName = 'PerGlobalInfoESP';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerGlobalInfoEsp.
     */
    PerGlobalInfoEsp._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerGlobalInfoEsp._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PerGlobalInfoEsp;
}(core_1.Entity));
exports.PerGlobalInfoEsp = PerGlobalInfoEsp;
var Territory_1 = require("./Territory");
var PicklistOption_1 = require("./PicklistOption");
var PerPerson_1 = require("./PerPerson");
(function (PerGlobalInfoEsp) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.COUNTRY = new core_1.StringField('country', PerGlobalInfoEsp, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.CREATED_BY = new core_1.StringField('createdBy', PerGlobalInfoEsp, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PerGlobalInfoEsp, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.CREATED_ON = new core_1.DateField('createdOn', PerGlobalInfoEsp, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.END_DATE = new core_1.DateField('endDate', PerGlobalInfoEsp, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_DATE_1 = new core_1.DateField('genericDate1', PerGlobalInfoEsp, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_DATE_2 = new core_1.DateField('genericDate2', PerGlobalInfoEsp, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_DATE_3 = new core_1.DateField('genericDate3', PerGlobalInfoEsp, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_DATE_4 = new core_1.DateField('genericDate4', PerGlobalInfoEsp, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_DATE_5 = new core_1.DateField('genericDate5', PerGlobalInfoEsp, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_DATE_6 = new core_1.DateField('genericDate6', PerGlobalInfoEsp, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_DATE_7 = new core_1.DateField('genericDate7', PerGlobalInfoEsp, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_DATE_8 = new core_1.DateField('genericDate8', PerGlobalInfoEsp, 'Edm.DateTime');
    /**
     * Static representation of the [[genericNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_NUMBER_1 = new core_1.BigNumberField('genericNumber1', PerGlobalInfoEsp, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_NUMBER_10 = new core_1.BigNumberField('genericNumber10', PerGlobalInfoEsp, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_NUMBER_11 = new core_1.BigNumberField('genericNumber11', PerGlobalInfoEsp, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_NUMBER_12 = new core_1.BigNumberField('genericNumber12', PerGlobalInfoEsp, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_NUMBER_13 = new core_1.BigNumberField('genericNumber13', PerGlobalInfoEsp, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_NUMBER_2 = new core_1.BigNumberField('genericNumber2', PerGlobalInfoEsp, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_NUMBER_3 = new core_1.BigNumberField('genericNumber3', PerGlobalInfoEsp, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_NUMBER_4 = new core_1.BigNumberField('genericNumber4', PerGlobalInfoEsp, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_NUMBER_5 = new core_1.BigNumberField('genericNumber5', PerGlobalInfoEsp, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_NUMBER_6 = new core_1.BigNumberField('genericNumber6', PerGlobalInfoEsp, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_NUMBER_7 = new core_1.BigNumberField('genericNumber7', PerGlobalInfoEsp, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_NUMBER_8 = new core_1.BigNumberField('genericNumber8', PerGlobalInfoEsp, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_NUMBER_9 = new core_1.BigNumberField('genericNumber9', PerGlobalInfoEsp, 'Edm.Int64');
    /**
     * Static representation of the [[genericString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_STRING_1 = new core_1.StringField('genericString1', PerGlobalInfoEsp, 'Edm.String');
    /**
     * Static representation of the [[genericString10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_STRING_10 = new core_1.StringField('genericString10', PerGlobalInfoEsp, 'Edm.String');
    /**
     * Static representation of the [[genericString11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_STRING_11 = new core_1.StringField('genericString11', PerGlobalInfoEsp, 'Edm.String');
    /**
     * Static representation of the [[genericString12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_STRING_12 = new core_1.StringField('genericString12', PerGlobalInfoEsp, 'Edm.String');
    /**
     * Static representation of the [[genericString13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_STRING_13 = new core_1.StringField('genericString13', PerGlobalInfoEsp, 'Edm.String');
    /**
     * Static representation of the [[genericString14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_STRING_14 = new core_1.StringField('genericString14', PerGlobalInfoEsp, 'Edm.String');
    /**
     * Static representation of the [[genericString15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_STRING_15 = new core_1.StringField('genericString15', PerGlobalInfoEsp, 'Edm.String');
    /**
     * Static representation of the [[genericString16]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_STRING_16 = new core_1.StringField('genericString16', PerGlobalInfoEsp, 'Edm.String');
    /**
     * Static representation of the [[genericString17]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_STRING_17 = new core_1.StringField('genericString17', PerGlobalInfoEsp, 'Edm.String');
    /**
     * Static representation of the [[genericString18]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_STRING_18 = new core_1.StringField('genericString18', PerGlobalInfoEsp, 'Edm.String');
    /**
     * Static representation of the [[genericString19]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_STRING_19 = new core_1.StringField('genericString19', PerGlobalInfoEsp, 'Edm.String');
    /**
     * Static representation of the [[genericString2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_STRING_2 = new core_1.StringField('genericString2', PerGlobalInfoEsp, 'Edm.String');
    /**
     * Static representation of the [[genericString20]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_STRING_20 = new core_1.StringField('genericString20', PerGlobalInfoEsp, 'Edm.String');
    /**
     * Static representation of the [[genericString3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_STRING_3 = new core_1.StringField('genericString3', PerGlobalInfoEsp, 'Edm.String');
    /**
     * Static representation of the [[genericString4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_STRING_4 = new core_1.StringField('genericString4', PerGlobalInfoEsp, 'Edm.String');
    /**
     * Static representation of the [[genericString5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_STRING_5 = new core_1.StringField('genericString5', PerGlobalInfoEsp, 'Edm.String');
    /**
     * Static representation of the [[genericString6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_STRING_6 = new core_1.StringField('genericString6', PerGlobalInfoEsp, 'Edm.String');
    /**
     * Static representation of the [[genericString7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_STRING_7 = new core_1.StringField('genericString7', PerGlobalInfoEsp, 'Edm.String');
    /**
     * Static representation of the [[genericString8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_STRING_8 = new core_1.StringField('genericString8', PerGlobalInfoEsp, 'Edm.String');
    /**
     * Static representation of the [[genericString9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_STRING_9 = new core_1.StringField('genericString9', PerGlobalInfoEsp, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PerGlobalInfoEsp, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PerGlobalInfoEsp, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', PerGlobalInfoEsp, 'Edm.DateTime');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.OPERATION = new core_1.StringField('operation', PerGlobalInfoEsp, 'Edm.String');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.PERSON_ID_EXTERNAL = new core_1.StringField('personIdExternal', PerGlobalInfoEsp, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.START_DATE = new core_1.DateField('startDate', PerGlobalInfoEsp, 'Edm.DateTime');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', PerGlobalInfoEsp, Territory_1.Territory);
    /**
     * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_STRING_1_NAV = new core_1.OneToOneLink('genericString1Nav', PerGlobalInfoEsp, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.GENERIC_STRING_2_NAV = new core_1.OneToOneLink('genericString2Nav', PerGlobalInfoEsp, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoEsp.PERSON_NAV = new core_1.OneToOneLink('personNav', PerGlobalInfoEsp, PerPerson_1.PerPerson);
    /**
     * All fields of the PerGlobalInfoEsp entity.
     */
    PerGlobalInfoEsp._allFields = [
        PerGlobalInfoEsp.COUNTRY,
        PerGlobalInfoEsp.CREATED_BY,
        PerGlobalInfoEsp.CREATED_DATE_TIME,
        PerGlobalInfoEsp.CREATED_ON,
        PerGlobalInfoEsp.END_DATE,
        PerGlobalInfoEsp.GENERIC_DATE_1,
        PerGlobalInfoEsp.GENERIC_DATE_2,
        PerGlobalInfoEsp.GENERIC_DATE_3,
        PerGlobalInfoEsp.GENERIC_DATE_4,
        PerGlobalInfoEsp.GENERIC_DATE_5,
        PerGlobalInfoEsp.GENERIC_DATE_6,
        PerGlobalInfoEsp.GENERIC_DATE_7,
        PerGlobalInfoEsp.GENERIC_DATE_8,
        PerGlobalInfoEsp.GENERIC_NUMBER_1,
        PerGlobalInfoEsp.GENERIC_NUMBER_10,
        PerGlobalInfoEsp.GENERIC_NUMBER_11,
        PerGlobalInfoEsp.GENERIC_NUMBER_12,
        PerGlobalInfoEsp.GENERIC_NUMBER_13,
        PerGlobalInfoEsp.GENERIC_NUMBER_2,
        PerGlobalInfoEsp.GENERIC_NUMBER_3,
        PerGlobalInfoEsp.GENERIC_NUMBER_4,
        PerGlobalInfoEsp.GENERIC_NUMBER_5,
        PerGlobalInfoEsp.GENERIC_NUMBER_6,
        PerGlobalInfoEsp.GENERIC_NUMBER_7,
        PerGlobalInfoEsp.GENERIC_NUMBER_8,
        PerGlobalInfoEsp.GENERIC_NUMBER_9,
        PerGlobalInfoEsp.GENERIC_STRING_1,
        PerGlobalInfoEsp.GENERIC_STRING_10,
        PerGlobalInfoEsp.GENERIC_STRING_11,
        PerGlobalInfoEsp.GENERIC_STRING_12,
        PerGlobalInfoEsp.GENERIC_STRING_13,
        PerGlobalInfoEsp.GENERIC_STRING_14,
        PerGlobalInfoEsp.GENERIC_STRING_15,
        PerGlobalInfoEsp.GENERIC_STRING_16,
        PerGlobalInfoEsp.GENERIC_STRING_17,
        PerGlobalInfoEsp.GENERIC_STRING_18,
        PerGlobalInfoEsp.GENERIC_STRING_19,
        PerGlobalInfoEsp.GENERIC_STRING_2,
        PerGlobalInfoEsp.GENERIC_STRING_20,
        PerGlobalInfoEsp.GENERIC_STRING_3,
        PerGlobalInfoEsp.GENERIC_STRING_4,
        PerGlobalInfoEsp.GENERIC_STRING_5,
        PerGlobalInfoEsp.GENERIC_STRING_6,
        PerGlobalInfoEsp.GENERIC_STRING_7,
        PerGlobalInfoEsp.GENERIC_STRING_8,
        PerGlobalInfoEsp.GENERIC_STRING_9,
        PerGlobalInfoEsp.LAST_MODIFIED_BY,
        PerGlobalInfoEsp.LAST_MODIFIED_DATE_TIME,
        PerGlobalInfoEsp.LAST_MODIFIED_ON,
        PerGlobalInfoEsp.OPERATION,
        PerGlobalInfoEsp.PERSON_ID_EXTERNAL,
        PerGlobalInfoEsp.START_DATE,
        PerGlobalInfoEsp.COUNTRY_NAV,
        PerGlobalInfoEsp.GENERIC_STRING_1_NAV,
        PerGlobalInfoEsp.GENERIC_STRING_2_NAV,
        PerGlobalInfoEsp.PERSON_NAV
    ];
    /**
     * All fields selector.
     */
    PerGlobalInfoEsp.ALL_FIELDS = new core_1.AllFields('*', PerGlobalInfoEsp);
    /**
     * All key fields of the PerGlobalInfoEsp entity.
     */
    PerGlobalInfoEsp._keyFields = [PerGlobalInfoEsp.COUNTRY, PerGlobalInfoEsp.PERSON_ID_EXTERNAL, PerGlobalInfoEsp.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property PerGlobalInfoEsp.
     */
    PerGlobalInfoEsp._keys = PerGlobalInfoEsp._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerGlobalInfoEsp = exports.PerGlobalInfoEsp || (exports.PerGlobalInfoEsp = {}));
exports.PerGlobalInfoEsp = PerGlobalInfoEsp;
//# sourceMappingURL=PerGlobalInfoEsp.js.map