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
var FoLegalEntityLocalFraRequestBuilder_1 = require("./FoLegalEntityLocalFraRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOLegalEntityLocalFRA" of service "SFOData".
 */
var FoLegalEntityLocalFra = /** @class */ (function (_super) {
    __extends(FoLegalEntityLocalFra, _super);
    function FoLegalEntityLocalFra() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoLegalEntityLocalFra`.
     * @returns A builder that constructs instances of entity type `FoLegalEntityLocalFra`.
     */
    FoLegalEntityLocalFra.builder = function () {
        return core_1.Entity.entityBuilder(FoLegalEntityLocalFra);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoLegalEntityLocalFra` entity type.
     * @returns A `FoLegalEntityLocalFra` request builder.
     */
    FoLegalEntityLocalFra.requestBuilder = function () {
        return new FoLegalEntityLocalFraRequestBuilder_1.FoLegalEntityLocalFraRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoLegalEntityLocalFra`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoLegalEntityLocalFra`.
     */
    FoLegalEntityLocalFra.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoLegalEntityLocalFra);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoLegalEntityLocalFra.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoLegalEntityLocalFra.
     */
    FoLegalEntityLocalFra._entityName = 'FOLegalEntityLocalFRA';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoLegalEntityLocalFra.
     */
    FoLegalEntityLocalFra._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoLegalEntityLocalFra._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoLegalEntityLocalFra;
}(core_1.Entity));
exports.FoLegalEntityLocalFra = FoLegalEntityLocalFra;
var Territory_1 = require("./Territory");
(function (FoLegalEntityLocalFra) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalFra.COUNTRY = new core_1.StringField('country', FoLegalEntityLocalFra, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalFra.CREATED_BY = new core_1.StringField('createdBy', FoLegalEntityLocalFra, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalFra.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoLegalEntityLocalFra, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalFra.CREATED_ON = new core_1.DateField('createdOn', FoLegalEntityLocalFra, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalFra.END_DATE = new core_1.DateField('endDate', FoLegalEntityLocalFra, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalFra.EXTERNAL_CODE = new core_1.StringField('externalCode', FoLegalEntityLocalFra, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalFra.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoLegalEntityLocalFra, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalFra.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoLegalEntityLocalFra, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalFra.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoLegalEntityLocalFra, 'Edm.DateTime');
    /**
     * Static representation of the [[nafCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalFra.NAF_CODE = new core_1.BigNumberField('nafCode', FoLegalEntityLocalFra, 'Edm.Int64');
    /**
     * Static representation of the [[nafCodePost2008]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalFra.NAF_CODE_POST_2008 = new core_1.StringField('nafCodePost2008', FoLegalEntityLocalFra, 'Edm.String');
    /**
     * Static representation of the [[sirenCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalFra.SIREN_CODE = new core_1.BigNumberField('sirenCode', FoLegalEntityLocalFra, 'Edm.Int64');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalFra.START_DATE = new core_1.DateField('startDate', FoLegalEntityLocalFra, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalFra.STATUS = new core_1.StringField('status', FoLegalEntityLocalFra, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalFra.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', FoLegalEntityLocalFra, Territory_1.Territory);
    /**
     * All fields of the FoLegalEntityLocalFra entity.
     */
    FoLegalEntityLocalFra._allFields = [
        FoLegalEntityLocalFra.COUNTRY,
        FoLegalEntityLocalFra.CREATED_BY,
        FoLegalEntityLocalFra.CREATED_DATE_TIME,
        FoLegalEntityLocalFra.CREATED_ON,
        FoLegalEntityLocalFra.END_DATE,
        FoLegalEntityLocalFra.EXTERNAL_CODE,
        FoLegalEntityLocalFra.LAST_MODIFIED_BY,
        FoLegalEntityLocalFra.LAST_MODIFIED_DATE_TIME,
        FoLegalEntityLocalFra.LAST_MODIFIED_ON,
        FoLegalEntityLocalFra.NAF_CODE,
        FoLegalEntityLocalFra.NAF_CODE_POST_2008,
        FoLegalEntityLocalFra.SIREN_CODE,
        FoLegalEntityLocalFra.START_DATE,
        FoLegalEntityLocalFra.STATUS,
        FoLegalEntityLocalFra.COUNTRY_NAV
    ];
    /**
     * All fields selector.
     */
    FoLegalEntityLocalFra.ALL_FIELDS = new core_1.AllFields('*', FoLegalEntityLocalFra);
    /**
     * All key fields of the FoLegalEntityLocalFra entity.
     */
    FoLegalEntityLocalFra._keyFields = [FoLegalEntityLocalFra.COUNTRY, FoLegalEntityLocalFra.EXTERNAL_CODE, FoLegalEntityLocalFra.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoLegalEntityLocalFra.
     */
    FoLegalEntityLocalFra._keys = FoLegalEntityLocalFra._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoLegalEntityLocalFra = exports.FoLegalEntityLocalFra || (exports.FoLegalEntityLocalFra = {}));
exports.FoLegalEntityLocalFra = FoLegalEntityLocalFra;
//# sourceMappingURL=FoLegalEntityLocalFra.js.map