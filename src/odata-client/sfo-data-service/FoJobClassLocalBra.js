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
var FoJobClassLocalBraRequestBuilder_1 = require("./FoJobClassLocalBraRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOJobClassLocalBRA" of service "SFOData".
 */
var FoJobClassLocalBra = /** @class */ (function (_super) {
    __extends(FoJobClassLocalBra, _super);
    function FoJobClassLocalBra() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoJobClassLocalBra`.
     * @returns A builder that constructs instances of entity type `FoJobClassLocalBra`.
     */
    FoJobClassLocalBra.builder = function () {
        return core_1.Entity.entityBuilder(FoJobClassLocalBra);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoJobClassLocalBra` entity type.
     * @returns A `FoJobClassLocalBra` request builder.
     */
    FoJobClassLocalBra.requestBuilder = function () {
        return new FoJobClassLocalBraRequestBuilder_1.FoJobClassLocalBraRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoJobClassLocalBra`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoJobClassLocalBra`.
     */
    FoJobClassLocalBra.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoJobClassLocalBra);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoJobClassLocalBra.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoJobClassLocalBra.
     */
    FoJobClassLocalBra._entityName = 'FOJobClassLocalBRA';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoJobClassLocalBra.
     */
    FoJobClassLocalBra._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoJobClassLocalBra._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoJobClassLocalBra;
}(core_1.Entity));
exports.FoJobClassLocalBra = FoJobClassLocalBra;
var Territory_1 = require("./Territory");
var PicklistOption_1 = require("./PicklistOption");
var PickListValueV2_1 = require("./PickListValueV2");
(function (FoJobClassLocalBra) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalBra.COUNTRY = new core_1.StringField('country', FoJobClassLocalBra, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalBra.CREATED_BY = new core_1.StringField('createdBy', FoJobClassLocalBra, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalBra.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoJobClassLocalBra, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalBra.CREATED_ON = new core_1.DateField('createdOn', FoJobClassLocalBra, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalBra.END_DATE = new core_1.DateField('endDate', FoJobClassLocalBra, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalBra.EXTERNAL_CODE = new core_1.StringField('externalCode', FoJobClassLocalBra, 'Edm.String');
    /**
     * Static representation of the [[genericString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalBra.GENERIC_STRING_1 = new core_1.StringField('genericString1', FoJobClassLocalBra, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalBra.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoJobClassLocalBra, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalBra.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoJobClassLocalBra, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalBra.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoJobClassLocalBra, 'Edm.DateTime');
    /**
     * Static representation of the [[occupationalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalBra.OCCUPATIONAL_CODE = new core_1.StringField('occupationalCode', FoJobClassLocalBra, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalBra.START_DATE = new core_1.DateField('startDate', FoJobClassLocalBra, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalBra.STATUS = new core_1.StringField('status', FoJobClassLocalBra, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalBra.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', FoJobClassLocalBra, Territory_1.Territory);
    /**
     * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalBra.GENERIC_STRING_1_NAV = new core_1.OneToOneLink('genericString1Nav', FoJobClassLocalBra, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[occupationalCodeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalBra.OCCUPATIONAL_CODE_NAV = new core_1.Link('occupationalCodeNav', FoJobClassLocalBra, PickListValueV2_1.PickListValueV2);
    /**
     * All fields of the FoJobClassLocalBra entity.
     */
    FoJobClassLocalBra._allFields = [
        FoJobClassLocalBra.COUNTRY,
        FoJobClassLocalBra.CREATED_BY,
        FoJobClassLocalBra.CREATED_DATE_TIME,
        FoJobClassLocalBra.CREATED_ON,
        FoJobClassLocalBra.END_DATE,
        FoJobClassLocalBra.EXTERNAL_CODE,
        FoJobClassLocalBra.GENERIC_STRING_1,
        FoJobClassLocalBra.LAST_MODIFIED_BY,
        FoJobClassLocalBra.LAST_MODIFIED_DATE_TIME,
        FoJobClassLocalBra.LAST_MODIFIED_ON,
        FoJobClassLocalBra.OCCUPATIONAL_CODE,
        FoJobClassLocalBra.START_DATE,
        FoJobClassLocalBra.STATUS,
        FoJobClassLocalBra.COUNTRY_NAV,
        FoJobClassLocalBra.GENERIC_STRING_1_NAV,
        FoJobClassLocalBra.OCCUPATIONAL_CODE_NAV
    ];
    /**
     * All fields selector.
     */
    FoJobClassLocalBra.ALL_FIELDS = new core_1.AllFields('*', FoJobClassLocalBra);
    /**
     * All key fields of the FoJobClassLocalBra entity.
     */
    FoJobClassLocalBra._keyFields = [FoJobClassLocalBra.COUNTRY, FoJobClassLocalBra.EXTERNAL_CODE, FoJobClassLocalBra.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoJobClassLocalBra.
     */
    FoJobClassLocalBra._keys = FoJobClassLocalBra._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoJobClassLocalBra = exports.FoJobClassLocalBra || (exports.FoJobClassLocalBra = {}));
exports.FoJobClassLocalBra = FoJobClassLocalBra;
//# sourceMappingURL=FoJobClassLocalBra.js.map