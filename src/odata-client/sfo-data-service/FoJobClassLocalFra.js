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
var FoJobClassLocalFraRequestBuilder_1 = require("./FoJobClassLocalFraRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOJobClassLocalFRA" of service "SFOData".
 */
var FoJobClassLocalFra = /** @class */ (function (_super) {
    __extends(FoJobClassLocalFra, _super);
    function FoJobClassLocalFra() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoJobClassLocalFra`.
     * @returns A builder that constructs instances of entity type `FoJobClassLocalFra`.
     */
    FoJobClassLocalFra.builder = function () {
        return core_1.Entity.entityBuilder(FoJobClassLocalFra);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoJobClassLocalFra` entity type.
     * @returns A `FoJobClassLocalFra` request builder.
     */
    FoJobClassLocalFra.requestBuilder = function () {
        return new FoJobClassLocalFraRequestBuilder_1.FoJobClassLocalFraRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoJobClassLocalFra`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoJobClassLocalFra`.
     */
    FoJobClassLocalFra.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoJobClassLocalFra);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoJobClassLocalFra.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoJobClassLocalFra.
     */
    FoJobClassLocalFra._entityName = 'FOJobClassLocalFRA';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoJobClassLocalFra.
     */
    FoJobClassLocalFra._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoJobClassLocalFra._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoJobClassLocalFra;
}(core_1.Entity));
exports.FoJobClassLocalFra = FoJobClassLocalFra;
var Territory_1 = require("./Territory");
(function (FoJobClassLocalFra) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalFra.COUNTRY = new core_1.StringField('country', FoJobClassLocalFra, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalFra.CREATED_BY = new core_1.StringField('createdBy', FoJobClassLocalFra, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalFra.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoJobClassLocalFra, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalFra.CREATED_ON = new core_1.DateField('createdOn', FoJobClassLocalFra, 'Edm.DateTime');
    /**
     * Static representation of the [[custPcScode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalFra.CUST_PC_SCODE = new core_1.StringField('cust_PCScode', FoJobClassLocalFra, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalFra.END_DATE = new core_1.DateField('endDate', FoJobClassLocalFra, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalFra.EXTERNAL_CODE = new core_1.StringField('externalCode', FoJobClassLocalFra, 'Edm.String');
    /**
     * Static representation of the [[genericNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalFra.GENERIC_NUMBER_2 = new core_1.BigNumberField('genericNumber2', FoJobClassLocalFra, 'Edm.Int64');
    /**
     * Static representation of the [[genericString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalFra.GENERIC_STRING_1 = new core_1.StringField('genericString1', FoJobClassLocalFra, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalFra.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoJobClassLocalFra, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalFra.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoJobClassLocalFra, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalFra.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoJobClassLocalFra, 'Edm.DateTime');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalFra.START_DATE = new core_1.DateField('startDate', FoJobClassLocalFra, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalFra.STATUS = new core_1.StringField('status', FoJobClassLocalFra, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalFra.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', FoJobClassLocalFra, Territory_1.Territory);
    /**
     * All fields of the FoJobClassLocalFra entity.
     */
    FoJobClassLocalFra._allFields = [
        FoJobClassLocalFra.COUNTRY,
        FoJobClassLocalFra.CREATED_BY,
        FoJobClassLocalFra.CREATED_DATE_TIME,
        FoJobClassLocalFra.CREATED_ON,
        FoJobClassLocalFra.CUST_PC_SCODE,
        FoJobClassLocalFra.END_DATE,
        FoJobClassLocalFra.EXTERNAL_CODE,
        FoJobClassLocalFra.GENERIC_NUMBER_2,
        FoJobClassLocalFra.GENERIC_STRING_1,
        FoJobClassLocalFra.LAST_MODIFIED_BY,
        FoJobClassLocalFra.LAST_MODIFIED_DATE_TIME,
        FoJobClassLocalFra.LAST_MODIFIED_ON,
        FoJobClassLocalFra.START_DATE,
        FoJobClassLocalFra.STATUS,
        FoJobClassLocalFra.COUNTRY_NAV
    ];
    /**
     * All fields selector.
     */
    FoJobClassLocalFra.ALL_FIELDS = new core_1.AllFields('*', FoJobClassLocalFra);
    /**
     * All key fields of the FoJobClassLocalFra entity.
     */
    FoJobClassLocalFra._keyFields = [FoJobClassLocalFra.COUNTRY, FoJobClassLocalFra.EXTERNAL_CODE, FoJobClassLocalFra.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoJobClassLocalFra.
     */
    FoJobClassLocalFra._keys = FoJobClassLocalFra._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoJobClassLocalFra = exports.FoJobClassLocalFra || (exports.FoJobClassLocalFra = {}));
exports.FoJobClassLocalFra = FoJobClassLocalFra;
//# sourceMappingURL=FoJobClassLocalFra.js.map