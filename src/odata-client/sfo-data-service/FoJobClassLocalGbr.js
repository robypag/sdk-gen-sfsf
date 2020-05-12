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
var FoJobClassLocalGbrRequestBuilder_1 = require("./FoJobClassLocalGbrRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOJobClassLocalGBR" of service "SFOData".
 */
var FoJobClassLocalGbr = /** @class */ (function (_super) {
    __extends(FoJobClassLocalGbr, _super);
    function FoJobClassLocalGbr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoJobClassLocalGbr`.
     * @returns A builder that constructs instances of entity type `FoJobClassLocalGbr`.
     */
    FoJobClassLocalGbr.builder = function () {
        return core_1.Entity.entityBuilder(FoJobClassLocalGbr);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoJobClassLocalGbr` entity type.
     * @returns A `FoJobClassLocalGbr` request builder.
     */
    FoJobClassLocalGbr.requestBuilder = function () {
        return new FoJobClassLocalGbrRequestBuilder_1.FoJobClassLocalGbrRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoJobClassLocalGbr`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoJobClassLocalGbr`.
     */
    FoJobClassLocalGbr.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoJobClassLocalGbr);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoJobClassLocalGbr.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoJobClassLocalGbr.
     */
    FoJobClassLocalGbr._entityName = 'FOJobClassLocalGBR';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoJobClassLocalGbr.
     */
    FoJobClassLocalGbr._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoJobClassLocalGbr._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoJobClassLocalGbr;
}(core_1.Entity));
exports.FoJobClassLocalGbr = FoJobClassLocalGbr;
var Territory_1 = require("./Territory");
var PickListValueV2_1 = require("./PickListValueV2");
(function (FoJobClassLocalGbr) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalGbr.COUNTRY = new core_1.StringField('country', FoJobClassLocalGbr, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalGbr.CREATED_BY = new core_1.StringField('createdBy', FoJobClassLocalGbr, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalGbr.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoJobClassLocalGbr, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalGbr.CREATED_ON = new core_1.DateField('createdOn', FoJobClassLocalGbr, 'Edm.DateTime');
    /**
     * Static representation of the [[custStandardOccupationalClassificationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalGbr.CUST_STANDARD_OCCUPATIONAL_CLASSIFICATION_CODE = new core_1.StringField('cust_standardOccupationalClassificationCode', FoJobClassLocalGbr, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalGbr.END_DATE = new core_1.DateField('endDate', FoJobClassLocalGbr, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalGbr.EXTERNAL_CODE = new core_1.StringField('externalCode', FoJobClassLocalGbr, 'Edm.String');
    /**
     * Static representation of the [[genericNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalGbr.GENERIC_NUMBER_1 = new core_1.BigNumberField('genericNumber1', FoJobClassLocalGbr, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalGbr.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoJobClassLocalGbr, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalGbr.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoJobClassLocalGbr, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalGbr.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoJobClassLocalGbr, 'Edm.DateTime');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalGbr.START_DATE = new core_1.DateField('startDate', FoJobClassLocalGbr, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalGbr.STATUS = new core_1.StringField('status', FoJobClassLocalGbr, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalGbr.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', FoJobClassLocalGbr, Territory_1.Territory);
    /**
     * Static representation of the one-to-many navigation property [[custStandardOccupationalClassificationCodeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalGbr.CUST_STANDARD_OCCUPATIONAL_CLASSIFICATION_CODE_NAV = new core_1.Link('cust_standardOccupationalClassificationCodeNav', FoJobClassLocalGbr, PickListValueV2_1.PickListValueV2);
    /**
     * All fields of the FoJobClassLocalGbr entity.
     */
    FoJobClassLocalGbr._allFields = [
        FoJobClassLocalGbr.COUNTRY,
        FoJobClassLocalGbr.CREATED_BY,
        FoJobClassLocalGbr.CREATED_DATE_TIME,
        FoJobClassLocalGbr.CREATED_ON,
        FoJobClassLocalGbr.CUST_STANDARD_OCCUPATIONAL_CLASSIFICATION_CODE,
        FoJobClassLocalGbr.END_DATE,
        FoJobClassLocalGbr.EXTERNAL_CODE,
        FoJobClassLocalGbr.GENERIC_NUMBER_1,
        FoJobClassLocalGbr.LAST_MODIFIED_BY,
        FoJobClassLocalGbr.LAST_MODIFIED_DATE_TIME,
        FoJobClassLocalGbr.LAST_MODIFIED_ON,
        FoJobClassLocalGbr.START_DATE,
        FoJobClassLocalGbr.STATUS,
        FoJobClassLocalGbr.COUNTRY_NAV,
        FoJobClassLocalGbr.CUST_STANDARD_OCCUPATIONAL_CLASSIFICATION_CODE_NAV
    ];
    /**
     * All fields selector.
     */
    FoJobClassLocalGbr.ALL_FIELDS = new core_1.AllFields('*', FoJobClassLocalGbr);
    /**
     * All key fields of the FoJobClassLocalGbr entity.
     */
    FoJobClassLocalGbr._keyFields = [FoJobClassLocalGbr.COUNTRY, FoJobClassLocalGbr.EXTERNAL_CODE, FoJobClassLocalGbr.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoJobClassLocalGbr.
     */
    FoJobClassLocalGbr._keys = FoJobClassLocalGbr._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoJobClassLocalGbr = exports.FoJobClassLocalGbr || (exports.FoJobClassLocalGbr = {}));
exports.FoJobClassLocalGbr = FoJobClassLocalGbr;
//# sourceMappingURL=FoJobClassLocalGbr.js.map