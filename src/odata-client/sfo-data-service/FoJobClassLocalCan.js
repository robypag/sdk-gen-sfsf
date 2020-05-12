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
var FoJobClassLocalCanRequestBuilder_1 = require("./FoJobClassLocalCanRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOJobClassLocalCAN" of service "SFOData".
 */
var FoJobClassLocalCan = /** @class */ (function (_super) {
    __extends(FoJobClassLocalCan, _super);
    function FoJobClassLocalCan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoJobClassLocalCan`.
     * @returns A builder that constructs instances of entity type `FoJobClassLocalCan`.
     */
    FoJobClassLocalCan.builder = function () {
        return core_1.Entity.entityBuilder(FoJobClassLocalCan);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoJobClassLocalCan` entity type.
     * @returns A `FoJobClassLocalCan` request builder.
     */
    FoJobClassLocalCan.requestBuilder = function () {
        return new FoJobClassLocalCanRequestBuilder_1.FoJobClassLocalCanRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoJobClassLocalCan`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoJobClassLocalCan`.
     */
    FoJobClassLocalCan.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoJobClassLocalCan);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoJobClassLocalCan.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoJobClassLocalCan.
     */
    FoJobClassLocalCan._entityName = 'FOJobClassLocalCAN';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoJobClassLocalCan.
     */
    FoJobClassLocalCan._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoJobClassLocalCan._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoJobClassLocalCan;
}(core_1.Entity));
exports.FoJobClassLocalCan = FoJobClassLocalCan;
var Territory_1 = require("./Territory");
(function (FoJobClassLocalCan) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalCan.COUNTRY = new core_1.StringField('country', FoJobClassLocalCan, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalCan.CREATED_BY = new core_1.StringField('createdBy', FoJobClassLocalCan, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalCan.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoJobClassLocalCan, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalCan.CREATED_ON = new core_1.DateField('createdOn', FoJobClassLocalCan, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalCan.END_DATE = new core_1.DateField('endDate', FoJobClassLocalCan, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalCan.EXTERNAL_CODE = new core_1.StringField('externalCode', FoJobClassLocalCan, 'Edm.String');
    /**
     * Static representation of the [[genericString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalCan.GENERIC_STRING_1 = new core_1.StringField('genericString1', FoJobClassLocalCan, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalCan.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoJobClassLocalCan, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalCan.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoJobClassLocalCan, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalCan.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoJobClassLocalCan, 'Edm.DateTime');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalCan.START_DATE = new core_1.DateField('startDate', FoJobClassLocalCan, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalCan.STATUS = new core_1.StringField('status', FoJobClassLocalCan, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalCan.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', FoJobClassLocalCan, Territory_1.Territory);
    /**
     * All fields of the FoJobClassLocalCan entity.
     */
    FoJobClassLocalCan._allFields = [
        FoJobClassLocalCan.COUNTRY,
        FoJobClassLocalCan.CREATED_BY,
        FoJobClassLocalCan.CREATED_DATE_TIME,
        FoJobClassLocalCan.CREATED_ON,
        FoJobClassLocalCan.END_DATE,
        FoJobClassLocalCan.EXTERNAL_CODE,
        FoJobClassLocalCan.GENERIC_STRING_1,
        FoJobClassLocalCan.LAST_MODIFIED_BY,
        FoJobClassLocalCan.LAST_MODIFIED_DATE_TIME,
        FoJobClassLocalCan.LAST_MODIFIED_ON,
        FoJobClassLocalCan.START_DATE,
        FoJobClassLocalCan.STATUS,
        FoJobClassLocalCan.COUNTRY_NAV
    ];
    /**
     * All fields selector.
     */
    FoJobClassLocalCan.ALL_FIELDS = new core_1.AllFields('*', FoJobClassLocalCan);
    /**
     * All key fields of the FoJobClassLocalCan entity.
     */
    FoJobClassLocalCan._keyFields = [FoJobClassLocalCan.COUNTRY, FoJobClassLocalCan.EXTERNAL_CODE, FoJobClassLocalCan.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoJobClassLocalCan.
     */
    FoJobClassLocalCan._keys = FoJobClassLocalCan._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoJobClassLocalCan = exports.FoJobClassLocalCan || (exports.FoJobClassLocalCan = {}));
exports.FoJobClassLocalCan = FoJobClassLocalCan;
//# sourceMappingURL=FoJobClassLocalCan.js.map