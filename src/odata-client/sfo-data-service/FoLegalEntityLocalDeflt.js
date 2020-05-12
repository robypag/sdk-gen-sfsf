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
var FoLegalEntityLocalDefltRequestBuilder_1 = require("./FoLegalEntityLocalDefltRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOLegalEntityLocalDEFLT" of service "SFOData".
 */
var FoLegalEntityLocalDeflt = /** @class */ (function (_super) {
    __extends(FoLegalEntityLocalDeflt, _super);
    function FoLegalEntityLocalDeflt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoLegalEntityLocalDeflt`.
     * @returns A builder that constructs instances of entity type `FoLegalEntityLocalDeflt`.
     */
    FoLegalEntityLocalDeflt.builder = function () {
        return core_1.Entity.entityBuilder(FoLegalEntityLocalDeflt);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoLegalEntityLocalDeflt` entity type.
     * @returns A `FoLegalEntityLocalDeflt` request builder.
     */
    FoLegalEntityLocalDeflt.requestBuilder = function () {
        return new FoLegalEntityLocalDefltRequestBuilder_1.FoLegalEntityLocalDefltRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoLegalEntityLocalDeflt`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoLegalEntityLocalDeflt`.
     */
    FoLegalEntityLocalDeflt.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoLegalEntityLocalDeflt);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoLegalEntityLocalDeflt.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoLegalEntityLocalDeflt.
     */
    FoLegalEntityLocalDeflt._entityName = 'FOLegalEntityLocalDEFLT';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoLegalEntityLocalDeflt.
     */
    FoLegalEntityLocalDeflt._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoLegalEntityLocalDeflt._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoLegalEntityLocalDeflt;
}(core_1.Entity));
exports.FoLegalEntityLocalDeflt = FoLegalEntityLocalDeflt;
var Territory_1 = require("./Territory");
(function (FoLegalEntityLocalDeflt) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalDeflt.COUNTRY = new core_1.StringField('country', FoLegalEntityLocalDeflt, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalDeflt.CREATED_BY = new core_1.StringField('createdBy', FoLegalEntityLocalDeflt, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalDeflt.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoLegalEntityLocalDeflt, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalDeflt.CREATED_ON = new core_1.DateField('createdOn', FoLegalEntityLocalDeflt, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalDeflt.END_DATE = new core_1.DateField('endDate', FoLegalEntityLocalDeflt, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalDeflt.EXTERNAL_CODE = new core_1.StringField('externalCode', FoLegalEntityLocalDeflt, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalDeflt.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoLegalEntityLocalDeflt, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalDeflt.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoLegalEntityLocalDeflt, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalDeflt.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoLegalEntityLocalDeflt, 'Edm.DateTime');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalDeflt.START_DATE = new core_1.DateField('startDate', FoLegalEntityLocalDeflt, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalDeflt.STATUS = new core_1.StringField('status', FoLegalEntityLocalDeflt, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalDeflt.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', FoLegalEntityLocalDeflt, Territory_1.Territory);
    /**
     * All fields of the FoLegalEntityLocalDeflt entity.
     */
    FoLegalEntityLocalDeflt._allFields = [
        FoLegalEntityLocalDeflt.COUNTRY,
        FoLegalEntityLocalDeflt.CREATED_BY,
        FoLegalEntityLocalDeflt.CREATED_DATE_TIME,
        FoLegalEntityLocalDeflt.CREATED_ON,
        FoLegalEntityLocalDeflt.END_DATE,
        FoLegalEntityLocalDeflt.EXTERNAL_CODE,
        FoLegalEntityLocalDeflt.LAST_MODIFIED_BY,
        FoLegalEntityLocalDeflt.LAST_MODIFIED_DATE_TIME,
        FoLegalEntityLocalDeflt.LAST_MODIFIED_ON,
        FoLegalEntityLocalDeflt.START_DATE,
        FoLegalEntityLocalDeflt.STATUS,
        FoLegalEntityLocalDeflt.COUNTRY_NAV
    ];
    /**
     * All fields selector.
     */
    FoLegalEntityLocalDeflt.ALL_FIELDS = new core_1.AllFields('*', FoLegalEntityLocalDeflt);
    /**
     * All key fields of the FoLegalEntityLocalDeflt entity.
     */
    FoLegalEntityLocalDeflt._keyFields = [FoLegalEntityLocalDeflt.COUNTRY, FoLegalEntityLocalDeflt.EXTERNAL_CODE, FoLegalEntityLocalDeflt.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoLegalEntityLocalDeflt.
     */
    FoLegalEntityLocalDeflt._keys = FoLegalEntityLocalDeflt._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoLegalEntityLocalDeflt = exports.FoLegalEntityLocalDeflt || (exports.FoLegalEntityLocalDeflt = {}));
exports.FoLegalEntityLocalDeflt = FoLegalEntityLocalDeflt;
//# sourceMappingURL=FoLegalEntityLocalDeflt.js.map