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
var FoJobClassLocalItaRequestBuilder_1 = require("./FoJobClassLocalItaRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOJobClassLocalITA" of service "SFOData".
 */
var FoJobClassLocalIta = /** @class */ (function (_super) {
    __extends(FoJobClassLocalIta, _super);
    function FoJobClassLocalIta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoJobClassLocalIta`.
     * @returns A builder that constructs instances of entity type `FoJobClassLocalIta`.
     */
    FoJobClassLocalIta.builder = function () {
        return core_1.Entity.entityBuilder(FoJobClassLocalIta);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoJobClassLocalIta` entity type.
     * @returns A `FoJobClassLocalIta` request builder.
     */
    FoJobClassLocalIta.requestBuilder = function () {
        return new FoJobClassLocalItaRequestBuilder_1.FoJobClassLocalItaRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoJobClassLocalIta`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoJobClassLocalIta`.
     */
    FoJobClassLocalIta.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoJobClassLocalIta);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoJobClassLocalIta.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoJobClassLocalIta.
     */
    FoJobClassLocalIta._entityName = 'FOJobClassLocalITA';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoJobClassLocalIta.
     */
    FoJobClassLocalIta._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoJobClassLocalIta._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoJobClassLocalIta;
}(core_1.Entity));
exports.FoJobClassLocalIta = FoJobClassLocalIta;
var Territory_1 = require("./Territory");
(function (FoJobClassLocalIta) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalIta.COUNTRY = new core_1.StringField('country', FoJobClassLocalIta, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalIta.CREATED_BY = new core_1.StringField('createdBy', FoJobClassLocalIta, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalIta.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoJobClassLocalIta, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalIta.CREATED_ON = new core_1.DateField('createdOn', FoJobClassLocalIta, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalIta.END_DATE = new core_1.DateField('endDate', FoJobClassLocalIta, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalIta.EXTERNAL_CODE = new core_1.StringField('externalCode', FoJobClassLocalIta, 'Edm.String');
    /**
     * Static representation of the [[genericNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalIta.GENERIC_NUMBER_1 = new core_1.BigNumberField('genericNumber1', FoJobClassLocalIta, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalIta.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoJobClassLocalIta, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalIta.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoJobClassLocalIta, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalIta.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoJobClassLocalIta, 'Edm.DateTime');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalIta.START_DATE = new core_1.DateField('startDate', FoJobClassLocalIta, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalIta.STATUS = new core_1.StringField('status', FoJobClassLocalIta, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalIta.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', FoJobClassLocalIta, Territory_1.Territory);
    /**
     * All fields of the FoJobClassLocalIta entity.
     */
    FoJobClassLocalIta._allFields = [
        FoJobClassLocalIta.COUNTRY,
        FoJobClassLocalIta.CREATED_BY,
        FoJobClassLocalIta.CREATED_DATE_TIME,
        FoJobClassLocalIta.CREATED_ON,
        FoJobClassLocalIta.END_DATE,
        FoJobClassLocalIta.EXTERNAL_CODE,
        FoJobClassLocalIta.GENERIC_NUMBER_1,
        FoJobClassLocalIta.LAST_MODIFIED_BY,
        FoJobClassLocalIta.LAST_MODIFIED_DATE_TIME,
        FoJobClassLocalIta.LAST_MODIFIED_ON,
        FoJobClassLocalIta.START_DATE,
        FoJobClassLocalIta.STATUS,
        FoJobClassLocalIta.COUNTRY_NAV
    ];
    /**
     * All fields selector.
     */
    FoJobClassLocalIta.ALL_FIELDS = new core_1.AllFields('*', FoJobClassLocalIta);
    /**
     * All key fields of the FoJobClassLocalIta entity.
     */
    FoJobClassLocalIta._keyFields = [FoJobClassLocalIta.COUNTRY, FoJobClassLocalIta.EXTERNAL_CODE, FoJobClassLocalIta.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoJobClassLocalIta.
     */
    FoJobClassLocalIta._keys = FoJobClassLocalIta._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoJobClassLocalIta = exports.FoJobClassLocalIta || (exports.FoJobClassLocalIta = {}));
exports.FoJobClassLocalIta = FoJobClassLocalIta;
//# sourceMappingURL=FoJobClassLocalIta.js.map