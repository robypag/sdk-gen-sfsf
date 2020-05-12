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
var FoJobClassLocalDefltRequestBuilder_1 = require("./FoJobClassLocalDefltRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOJobClassLocalDEFLT" of service "SFOData".
 */
var FoJobClassLocalDeflt = /** @class */ (function (_super) {
    __extends(FoJobClassLocalDeflt, _super);
    function FoJobClassLocalDeflt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoJobClassLocalDeflt`.
     * @returns A builder that constructs instances of entity type `FoJobClassLocalDeflt`.
     */
    FoJobClassLocalDeflt.builder = function () {
        return core_1.Entity.entityBuilder(FoJobClassLocalDeflt);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoJobClassLocalDeflt` entity type.
     * @returns A `FoJobClassLocalDeflt` request builder.
     */
    FoJobClassLocalDeflt.requestBuilder = function () {
        return new FoJobClassLocalDefltRequestBuilder_1.FoJobClassLocalDefltRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoJobClassLocalDeflt`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoJobClassLocalDeflt`.
     */
    FoJobClassLocalDeflt.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoJobClassLocalDeflt);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoJobClassLocalDeflt.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoJobClassLocalDeflt.
     */
    FoJobClassLocalDeflt._entityName = 'FOJobClassLocalDEFLT';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoJobClassLocalDeflt.
     */
    FoJobClassLocalDeflt._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoJobClassLocalDeflt._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoJobClassLocalDeflt;
}(core_1.Entity));
exports.FoJobClassLocalDeflt = FoJobClassLocalDeflt;
var Territory_1 = require("./Territory");
(function (FoJobClassLocalDeflt) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalDeflt.COUNTRY = new core_1.StringField('country', FoJobClassLocalDeflt, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalDeflt.CREATED_BY = new core_1.StringField('createdBy', FoJobClassLocalDeflt, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalDeflt.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoJobClassLocalDeflt, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalDeflt.CREATED_ON = new core_1.DateField('createdOn', FoJobClassLocalDeflt, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalDeflt.END_DATE = new core_1.DateField('endDate', FoJobClassLocalDeflt, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalDeflt.EXTERNAL_CODE = new core_1.StringField('externalCode', FoJobClassLocalDeflt, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalDeflt.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoJobClassLocalDeflt, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalDeflt.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoJobClassLocalDeflt, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalDeflt.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoJobClassLocalDeflt, 'Edm.DateTime');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalDeflt.START_DATE = new core_1.DateField('startDate', FoJobClassLocalDeflt, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalDeflt.STATUS = new core_1.StringField('status', FoJobClassLocalDeflt, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalDeflt.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', FoJobClassLocalDeflt, Territory_1.Territory);
    /**
     * All fields of the FoJobClassLocalDeflt entity.
     */
    FoJobClassLocalDeflt._allFields = [
        FoJobClassLocalDeflt.COUNTRY,
        FoJobClassLocalDeflt.CREATED_BY,
        FoJobClassLocalDeflt.CREATED_DATE_TIME,
        FoJobClassLocalDeflt.CREATED_ON,
        FoJobClassLocalDeflt.END_DATE,
        FoJobClassLocalDeflt.EXTERNAL_CODE,
        FoJobClassLocalDeflt.LAST_MODIFIED_BY,
        FoJobClassLocalDeflt.LAST_MODIFIED_DATE_TIME,
        FoJobClassLocalDeflt.LAST_MODIFIED_ON,
        FoJobClassLocalDeflt.START_DATE,
        FoJobClassLocalDeflt.STATUS,
        FoJobClassLocalDeflt.COUNTRY_NAV
    ];
    /**
     * All fields selector.
     */
    FoJobClassLocalDeflt.ALL_FIELDS = new core_1.AllFields('*', FoJobClassLocalDeflt);
    /**
     * All key fields of the FoJobClassLocalDeflt entity.
     */
    FoJobClassLocalDeflt._keyFields = [FoJobClassLocalDeflt.COUNTRY, FoJobClassLocalDeflt.EXTERNAL_CODE, FoJobClassLocalDeflt.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoJobClassLocalDeflt.
     */
    FoJobClassLocalDeflt._keys = FoJobClassLocalDeflt._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoJobClassLocalDeflt = exports.FoJobClassLocalDeflt || (exports.FoJobClassLocalDeflt = {}));
exports.FoJobClassLocalDeflt = FoJobClassLocalDeflt;
//# sourceMappingURL=FoJobClassLocalDeflt.js.map