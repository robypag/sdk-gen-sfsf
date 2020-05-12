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
var FoLegalEntityLocalArgRequestBuilder_1 = require("./FoLegalEntityLocalArgRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOLegalEntityLocalARG" of service "SFOData".
 */
var FoLegalEntityLocalArg = /** @class */ (function (_super) {
    __extends(FoLegalEntityLocalArg, _super);
    function FoLegalEntityLocalArg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoLegalEntityLocalArg`.
     * @returns A builder that constructs instances of entity type `FoLegalEntityLocalArg`.
     */
    FoLegalEntityLocalArg.builder = function () {
        return core_1.Entity.entityBuilder(FoLegalEntityLocalArg);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoLegalEntityLocalArg` entity type.
     * @returns A `FoLegalEntityLocalArg` request builder.
     */
    FoLegalEntityLocalArg.requestBuilder = function () {
        return new FoLegalEntityLocalArgRequestBuilder_1.FoLegalEntityLocalArgRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoLegalEntityLocalArg`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoLegalEntityLocalArg`.
     */
    FoLegalEntityLocalArg.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoLegalEntityLocalArg);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoLegalEntityLocalArg.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoLegalEntityLocalArg.
     */
    FoLegalEntityLocalArg._entityName = 'FOLegalEntityLocalARG';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoLegalEntityLocalArg.
     */
    FoLegalEntityLocalArg._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoLegalEntityLocalArg._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoLegalEntityLocalArg;
}(core_1.Entity));
exports.FoLegalEntityLocalArg = FoLegalEntityLocalArg;
var Territory_1 = require("./Territory");
(function (FoLegalEntityLocalArg) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalArg.COUNTRY = new core_1.StringField('country', FoLegalEntityLocalArg, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalArg.CREATED_BY = new core_1.StringField('createdBy', FoLegalEntityLocalArg, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalArg.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoLegalEntityLocalArg, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalArg.CREATED_ON = new core_1.DateField('createdOn', FoLegalEntityLocalArg, 'Edm.DateTime');
    /**
     * Static representation of the [[cuitCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalArg.CUIT_CODE = new core_1.BigNumberField('cuitCode', FoLegalEntityLocalArg, 'Edm.Int64');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalArg.END_DATE = new core_1.DateField('endDate', FoLegalEntityLocalArg, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalArg.EXTERNAL_CODE = new core_1.StringField('externalCode', FoLegalEntityLocalArg, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalArg.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoLegalEntityLocalArg, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalArg.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoLegalEntityLocalArg, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalArg.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoLegalEntityLocalArg, 'Edm.DateTime');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalArg.START_DATE = new core_1.DateField('startDate', FoLegalEntityLocalArg, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalArg.STATUS = new core_1.StringField('status', FoLegalEntityLocalArg, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalArg.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', FoLegalEntityLocalArg, Territory_1.Territory);
    /**
     * All fields of the FoLegalEntityLocalArg entity.
     */
    FoLegalEntityLocalArg._allFields = [
        FoLegalEntityLocalArg.COUNTRY,
        FoLegalEntityLocalArg.CREATED_BY,
        FoLegalEntityLocalArg.CREATED_DATE_TIME,
        FoLegalEntityLocalArg.CREATED_ON,
        FoLegalEntityLocalArg.CUIT_CODE,
        FoLegalEntityLocalArg.END_DATE,
        FoLegalEntityLocalArg.EXTERNAL_CODE,
        FoLegalEntityLocalArg.LAST_MODIFIED_BY,
        FoLegalEntityLocalArg.LAST_MODIFIED_DATE_TIME,
        FoLegalEntityLocalArg.LAST_MODIFIED_ON,
        FoLegalEntityLocalArg.START_DATE,
        FoLegalEntityLocalArg.STATUS,
        FoLegalEntityLocalArg.COUNTRY_NAV
    ];
    /**
     * All fields selector.
     */
    FoLegalEntityLocalArg.ALL_FIELDS = new core_1.AllFields('*', FoLegalEntityLocalArg);
    /**
     * All key fields of the FoLegalEntityLocalArg entity.
     */
    FoLegalEntityLocalArg._keyFields = [FoLegalEntityLocalArg.COUNTRY, FoLegalEntityLocalArg.EXTERNAL_CODE, FoLegalEntityLocalArg.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoLegalEntityLocalArg.
     */
    FoLegalEntityLocalArg._keys = FoLegalEntityLocalArg._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoLegalEntityLocalArg = exports.FoLegalEntityLocalArg || (exports.FoLegalEntityLocalArg = {}));
exports.FoLegalEntityLocalArg = FoLegalEntityLocalArg;
//# sourceMappingURL=FoLegalEntityLocalArg.js.map