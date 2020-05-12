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
var PerGlobalInfoColRequestBuilder_1 = require("./PerGlobalInfoColRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PerGlobalInfoCOL" of service "SFOData".
 */
var PerGlobalInfoCol = /** @class */ (function (_super) {
    __extends(PerGlobalInfoCol, _super);
    function PerGlobalInfoCol() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerGlobalInfoCol`.
     * @returns A builder that constructs instances of entity type `PerGlobalInfoCol`.
     */
    PerGlobalInfoCol.builder = function () {
        return core_1.Entity.entityBuilder(PerGlobalInfoCol);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerGlobalInfoCol` entity type.
     * @returns A `PerGlobalInfoCol` request builder.
     */
    PerGlobalInfoCol.requestBuilder = function () {
        return new PerGlobalInfoColRequestBuilder_1.PerGlobalInfoColRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoCol`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerGlobalInfoCol`.
     */
    PerGlobalInfoCol.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PerGlobalInfoCol);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerGlobalInfoCol.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerGlobalInfoCol.
     */
    PerGlobalInfoCol._entityName = 'PerGlobalInfoCOL';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerGlobalInfoCol.
     */
    PerGlobalInfoCol._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerGlobalInfoCol._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PerGlobalInfoCol;
}(core_1.Entity));
exports.PerGlobalInfoCol = PerGlobalInfoCol;
var Territory_1 = require("./Territory");
var PicklistOption_1 = require("./PicklistOption");
var PerPerson_1 = require("./PerPerson");
(function (PerGlobalInfoCol) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.COUNTRY = new core_1.StringField('country', PerGlobalInfoCol, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.CREATED_BY = new core_1.StringField('createdBy', PerGlobalInfoCol, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PerGlobalInfoCol, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.CREATED_ON = new core_1.DateField('createdOn', PerGlobalInfoCol, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.END_DATE = new core_1.DateField('endDate', PerGlobalInfoCol, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_DATE_1 = new core_1.DateField('genericDate1', PerGlobalInfoCol, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_DATE_2 = new core_1.DateField('genericDate2', PerGlobalInfoCol, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_DATE_3 = new core_1.DateField('genericDate3', PerGlobalInfoCol, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_DATE_4 = new core_1.DateField('genericDate4', PerGlobalInfoCol, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_DATE_5 = new core_1.DateField('genericDate5', PerGlobalInfoCol, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_DATE_6 = new core_1.DateField('genericDate6', PerGlobalInfoCol, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_DATE_7 = new core_1.DateField('genericDate7', PerGlobalInfoCol, 'Edm.DateTime');
    /**
     * Static representation of the [[genericDate8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_DATE_8 = new core_1.DateField('genericDate8', PerGlobalInfoCol, 'Edm.DateTime');
    /**
     * Static representation of the [[genericNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_NUMBER_1 = new core_1.BigNumberField('genericNumber1', PerGlobalInfoCol, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_NUMBER_10 = new core_1.BigNumberField('genericNumber10', PerGlobalInfoCol, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_NUMBER_11 = new core_1.BigNumberField('genericNumber11', PerGlobalInfoCol, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_NUMBER_12 = new core_1.BigNumberField('genericNumber12', PerGlobalInfoCol, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_NUMBER_13 = new core_1.BigNumberField('genericNumber13', PerGlobalInfoCol, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_NUMBER_2 = new core_1.BigNumberField('genericNumber2', PerGlobalInfoCol, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_NUMBER_3 = new core_1.BigNumberField('genericNumber3', PerGlobalInfoCol, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_NUMBER_4 = new core_1.BigNumberField('genericNumber4', PerGlobalInfoCol, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_NUMBER_5 = new core_1.BigNumberField('genericNumber5', PerGlobalInfoCol, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_NUMBER_6 = new core_1.BigNumberField('genericNumber6', PerGlobalInfoCol, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_NUMBER_7 = new core_1.BigNumberField('genericNumber7', PerGlobalInfoCol, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_NUMBER_8 = new core_1.BigNumberField('genericNumber8', PerGlobalInfoCol, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_NUMBER_9 = new core_1.BigNumberField('genericNumber9', PerGlobalInfoCol, 'Edm.Int64');
    /**
     * Static representation of the [[genericString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_STRING_1 = new core_1.StringField('genericString1', PerGlobalInfoCol, 'Edm.String');
    /**
     * Static representation of the [[genericString10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_STRING_10 = new core_1.StringField('genericString10', PerGlobalInfoCol, 'Edm.String');
    /**
     * Static representation of the [[genericString11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_STRING_11 = new core_1.StringField('genericString11', PerGlobalInfoCol, 'Edm.String');
    /**
     * Static representation of the [[genericString12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_STRING_12 = new core_1.StringField('genericString12', PerGlobalInfoCol, 'Edm.String');
    /**
     * Static representation of the [[genericString13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_STRING_13 = new core_1.StringField('genericString13', PerGlobalInfoCol, 'Edm.String');
    /**
     * Static representation of the [[genericString14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_STRING_14 = new core_1.StringField('genericString14', PerGlobalInfoCol, 'Edm.String');
    /**
     * Static representation of the [[genericString15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_STRING_15 = new core_1.StringField('genericString15', PerGlobalInfoCol, 'Edm.String');
    /**
     * Static representation of the [[genericString16]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_STRING_16 = new core_1.StringField('genericString16', PerGlobalInfoCol, 'Edm.String');
    /**
     * Static representation of the [[genericString17]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_STRING_17 = new core_1.StringField('genericString17', PerGlobalInfoCol, 'Edm.String');
    /**
     * Static representation of the [[genericString18]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_STRING_18 = new core_1.StringField('genericString18', PerGlobalInfoCol, 'Edm.String');
    /**
     * Static representation of the [[genericString19]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_STRING_19 = new core_1.StringField('genericString19', PerGlobalInfoCol, 'Edm.String');
    /**
     * Static representation of the [[genericString2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_STRING_2 = new core_1.StringField('genericString2', PerGlobalInfoCol, 'Edm.String');
    /**
     * Static representation of the [[genericString20]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_STRING_20 = new core_1.StringField('genericString20', PerGlobalInfoCol, 'Edm.String');
    /**
     * Static representation of the [[genericString3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_STRING_3 = new core_1.StringField('genericString3', PerGlobalInfoCol, 'Edm.String');
    /**
     * Static representation of the [[genericString4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_STRING_4 = new core_1.StringField('genericString4', PerGlobalInfoCol, 'Edm.String');
    /**
     * Static representation of the [[genericString5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_STRING_5 = new core_1.StringField('genericString5', PerGlobalInfoCol, 'Edm.String');
    /**
     * Static representation of the [[genericString6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_STRING_6 = new core_1.StringField('genericString6', PerGlobalInfoCol, 'Edm.String');
    /**
     * Static representation of the [[genericString7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_STRING_7 = new core_1.StringField('genericString7', PerGlobalInfoCol, 'Edm.String');
    /**
     * Static representation of the [[genericString8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_STRING_8 = new core_1.StringField('genericString8', PerGlobalInfoCol, 'Edm.String');
    /**
     * Static representation of the [[genericString9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_STRING_9 = new core_1.StringField('genericString9', PerGlobalInfoCol, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PerGlobalInfoCol, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PerGlobalInfoCol, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', PerGlobalInfoCol, 'Edm.DateTime');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.OPERATION = new core_1.StringField('operation', PerGlobalInfoCol, 'Edm.String');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.PERSON_ID_EXTERNAL = new core_1.StringField('personIdExternal', PerGlobalInfoCol, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.START_DATE = new core_1.DateField('startDate', PerGlobalInfoCol, 'Edm.DateTime');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', PerGlobalInfoCol, Territory_1.Territory);
    /**
     * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_STRING_1_NAV = new core_1.OneToOneLink('genericString1Nav', PerGlobalInfoCol, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_STRING_2_NAV = new core_1.OneToOneLink('genericString2Nav', PerGlobalInfoCol, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericString5Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.GENERIC_STRING_5_NAV = new core_1.OneToOneLink('genericString5Nav', PerGlobalInfoCol, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerGlobalInfoCol.PERSON_NAV = new core_1.OneToOneLink('personNav', PerGlobalInfoCol, PerPerson_1.PerPerson);
    /**
     * All fields of the PerGlobalInfoCol entity.
     */
    PerGlobalInfoCol._allFields = [
        PerGlobalInfoCol.COUNTRY,
        PerGlobalInfoCol.CREATED_BY,
        PerGlobalInfoCol.CREATED_DATE_TIME,
        PerGlobalInfoCol.CREATED_ON,
        PerGlobalInfoCol.END_DATE,
        PerGlobalInfoCol.GENERIC_DATE_1,
        PerGlobalInfoCol.GENERIC_DATE_2,
        PerGlobalInfoCol.GENERIC_DATE_3,
        PerGlobalInfoCol.GENERIC_DATE_4,
        PerGlobalInfoCol.GENERIC_DATE_5,
        PerGlobalInfoCol.GENERIC_DATE_6,
        PerGlobalInfoCol.GENERIC_DATE_7,
        PerGlobalInfoCol.GENERIC_DATE_8,
        PerGlobalInfoCol.GENERIC_NUMBER_1,
        PerGlobalInfoCol.GENERIC_NUMBER_10,
        PerGlobalInfoCol.GENERIC_NUMBER_11,
        PerGlobalInfoCol.GENERIC_NUMBER_12,
        PerGlobalInfoCol.GENERIC_NUMBER_13,
        PerGlobalInfoCol.GENERIC_NUMBER_2,
        PerGlobalInfoCol.GENERIC_NUMBER_3,
        PerGlobalInfoCol.GENERIC_NUMBER_4,
        PerGlobalInfoCol.GENERIC_NUMBER_5,
        PerGlobalInfoCol.GENERIC_NUMBER_6,
        PerGlobalInfoCol.GENERIC_NUMBER_7,
        PerGlobalInfoCol.GENERIC_NUMBER_8,
        PerGlobalInfoCol.GENERIC_NUMBER_9,
        PerGlobalInfoCol.GENERIC_STRING_1,
        PerGlobalInfoCol.GENERIC_STRING_10,
        PerGlobalInfoCol.GENERIC_STRING_11,
        PerGlobalInfoCol.GENERIC_STRING_12,
        PerGlobalInfoCol.GENERIC_STRING_13,
        PerGlobalInfoCol.GENERIC_STRING_14,
        PerGlobalInfoCol.GENERIC_STRING_15,
        PerGlobalInfoCol.GENERIC_STRING_16,
        PerGlobalInfoCol.GENERIC_STRING_17,
        PerGlobalInfoCol.GENERIC_STRING_18,
        PerGlobalInfoCol.GENERIC_STRING_19,
        PerGlobalInfoCol.GENERIC_STRING_2,
        PerGlobalInfoCol.GENERIC_STRING_20,
        PerGlobalInfoCol.GENERIC_STRING_3,
        PerGlobalInfoCol.GENERIC_STRING_4,
        PerGlobalInfoCol.GENERIC_STRING_5,
        PerGlobalInfoCol.GENERIC_STRING_6,
        PerGlobalInfoCol.GENERIC_STRING_7,
        PerGlobalInfoCol.GENERIC_STRING_8,
        PerGlobalInfoCol.GENERIC_STRING_9,
        PerGlobalInfoCol.LAST_MODIFIED_BY,
        PerGlobalInfoCol.LAST_MODIFIED_DATE_TIME,
        PerGlobalInfoCol.LAST_MODIFIED_ON,
        PerGlobalInfoCol.OPERATION,
        PerGlobalInfoCol.PERSON_ID_EXTERNAL,
        PerGlobalInfoCol.START_DATE,
        PerGlobalInfoCol.COUNTRY_NAV,
        PerGlobalInfoCol.GENERIC_STRING_1_NAV,
        PerGlobalInfoCol.GENERIC_STRING_2_NAV,
        PerGlobalInfoCol.GENERIC_STRING_5_NAV,
        PerGlobalInfoCol.PERSON_NAV
    ];
    /**
     * All fields selector.
     */
    PerGlobalInfoCol.ALL_FIELDS = new core_1.AllFields('*', PerGlobalInfoCol);
    /**
     * All key fields of the PerGlobalInfoCol entity.
     */
    PerGlobalInfoCol._keyFields = [PerGlobalInfoCol.COUNTRY, PerGlobalInfoCol.PERSON_ID_EXTERNAL, PerGlobalInfoCol.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property PerGlobalInfoCol.
     */
    PerGlobalInfoCol._keys = PerGlobalInfoCol._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerGlobalInfoCol = exports.PerGlobalInfoCol || (exports.PerGlobalInfoCol = {}));
exports.PerGlobalInfoCol = PerGlobalInfoCol;
//# sourceMappingURL=PerGlobalInfoCol.js.map