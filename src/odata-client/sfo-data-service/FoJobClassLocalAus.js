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
var FoJobClassLocalAusRequestBuilder_1 = require("./FoJobClassLocalAusRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOJobClassLocalAUS" of service "SFOData".
 */
var FoJobClassLocalAus = /** @class */ (function (_super) {
    __extends(FoJobClassLocalAus, _super);
    function FoJobClassLocalAus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoJobClassLocalAus`.
     * @returns A builder that constructs instances of entity type `FoJobClassLocalAus`.
     */
    FoJobClassLocalAus.builder = function () {
        return core_1.Entity.entityBuilder(FoJobClassLocalAus);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoJobClassLocalAus` entity type.
     * @returns A `FoJobClassLocalAus` request builder.
     */
    FoJobClassLocalAus.requestBuilder = function () {
        return new FoJobClassLocalAusRequestBuilder_1.FoJobClassLocalAusRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoJobClassLocalAus`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoJobClassLocalAus`.
     */
    FoJobClassLocalAus.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoJobClassLocalAus);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoJobClassLocalAus.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoJobClassLocalAus.
     */
    FoJobClassLocalAus._entityName = 'FOJobClassLocalAUS';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoJobClassLocalAus.
     */
    FoJobClassLocalAus._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoJobClassLocalAus._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoJobClassLocalAus;
}(core_1.Entity));
exports.FoJobClassLocalAus = FoJobClassLocalAus;
var Territory_1 = require("./Territory");
(function (FoJobClassLocalAus) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalAus.COUNTRY = new core_1.StringField('country', FoJobClassLocalAus, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalAus.CREATED_BY = new core_1.StringField('createdBy', FoJobClassLocalAus, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalAus.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoJobClassLocalAus, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalAus.CREATED_ON = new core_1.DateField('createdOn', FoJobClassLocalAus, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalAus.END_DATE = new core_1.DateField('endDate', FoJobClassLocalAus, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalAus.EXTERNAL_CODE = new core_1.StringField('externalCode', FoJobClassLocalAus, 'Edm.String');
    /**
     * Static representation of the [[genericString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalAus.GENERIC_STRING_1 = new core_1.StringField('genericString1', FoJobClassLocalAus, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalAus.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoJobClassLocalAus, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalAus.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoJobClassLocalAus, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalAus.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoJobClassLocalAus, 'Edm.DateTime');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalAus.START_DATE = new core_1.DateField('startDate', FoJobClassLocalAus, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalAus.STATUS = new core_1.StringField('status', FoJobClassLocalAus, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalAus.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', FoJobClassLocalAus, Territory_1.Territory);
    /**
     * All fields of the FoJobClassLocalAus entity.
     */
    FoJobClassLocalAus._allFields = [
        FoJobClassLocalAus.COUNTRY,
        FoJobClassLocalAus.CREATED_BY,
        FoJobClassLocalAus.CREATED_DATE_TIME,
        FoJobClassLocalAus.CREATED_ON,
        FoJobClassLocalAus.END_DATE,
        FoJobClassLocalAus.EXTERNAL_CODE,
        FoJobClassLocalAus.GENERIC_STRING_1,
        FoJobClassLocalAus.LAST_MODIFIED_BY,
        FoJobClassLocalAus.LAST_MODIFIED_DATE_TIME,
        FoJobClassLocalAus.LAST_MODIFIED_ON,
        FoJobClassLocalAus.START_DATE,
        FoJobClassLocalAus.STATUS,
        FoJobClassLocalAus.COUNTRY_NAV
    ];
    /**
     * All fields selector.
     */
    FoJobClassLocalAus.ALL_FIELDS = new core_1.AllFields('*', FoJobClassLocalAus);
    /**
     * All key fields of the FoJobClassLocalAus entity.
     */
    FoJobClassLocalAus._keyFields = [FoJobClassLocalAus.COUNTRY, FoJobClassLocalAus.EXTERNAL_CODE, FoJobClassLocalAus.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoJobClassLocalAus.
     */
    FoJobClassLocalAus._keys = FoJobClassLocalAus._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoJobClassLocalAus = exports.FoJobClassLocalAus || (exports.FoJobClassLocalAus = {}));
exports.FoJobClassLocalAus = FoJobClassLocalAus;
//# sourceMappingURL=FoJobClassLocalAus.js.map