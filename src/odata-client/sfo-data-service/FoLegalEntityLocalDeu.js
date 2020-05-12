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
var FoLegalEntityLocalDeuRequestBuilder_1 = require("./FoLegalEntityLocalDeuRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOLegalEntityLocalDEU" of service "SFOData".
 */
var FoLegalEntityLocalDeu = /** @class */ (function (_super) {
    __extends(FoLegalEntityLocalDeu, _super);
    function FoLegalEntityLocalDeu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoLegalEntityLocalDeu`.
     * @returns A builder that constructs instances of entity type `FoLegalEntityLocalDeu`.
     */
    FoLegalEntityLocalDeu.builder = function () {
        return core_1.Entity.entityBuilder(FoLegalEntityLocalDeu);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoLegalEntityLocalDeu` entity type.
     * @returns A `FoLegalEntityLocalDeu` request builder.
     */
    FoLegalEntityLocalDeu.requestBuilder = function () {
        return new FoLegalEntityLocalDeuRequestBuilder_1.FoLegalEntityLocalDeuRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoLegalEntityLocalDeu`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoLegalEntityLocalDeu`.
     */
    FoLegalEntityLocalDeu.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoLegalEntityLocalDeu);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoLegalEntityLocalDeu.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoLegalEntityLocalDeu.
     */
    FoLegalEntityLocalDeu._entityName = 'FOLegalEntityLocalDEU';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoLegalEntityLocalDeu.
     */
    FoLegalEntityLocalDeu._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoLegalEntityLocalDeu._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoLegalEntityLocalDeu;
}(core_1.Entity));
exports.FoLegalEntityLocalDeu = FoLegalEntityLocalDeu;
var Territory_1 = require("./Territory");
(function (FoLegalEntityLocalDeu) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalDeu.COUNTRY = new core_1.StringField('country', FoLegalEntityLocalDeu, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalDeu.CREATED_BY = new core_1.StringField('createdBy', FoLegalEntityLocalDeu, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalDeu.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoLegalEntityLocalDeu, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalDeu.CREATED_ON = new core_1.DateField('createdOn', FoLegalEntityLocalDeu, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalDeu.END_DATE = new core_1.DateField('endDate', FoLegalEntityLocalDeu, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalDeu.EXTERNAL_CODE = new core_1.StringField('externalCode', FoLegalEntityLocalDeu, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalDeu.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoLegalEntityLocalDeu, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalDeu.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoLegalEntityLocalDeu, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalDeu.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoLegalEntityLocalDeu, 'Edm.DateTime');
    /**
     * Static representation of the [[socialAccidentInsurance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalDeu.SOCIAL_ACCIDENT_INSURANCE = new core_1.StringField('socialAccidentInsurance', FoLegalEntityLocalDeu, 'Edm.String');
    /**
     * Static representation of the [[socialAccidentInsuranceRegistrationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalDeu.SOCIAL_ACCIDENT_INSURANCE_REGISTRATION_NUMBER = new core_1.StringField('socialAccidentInsuranceRegistrationNumber', FoLegalEntityLocalDeu, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalDeu.START_DATE = new core_1.DateField('startDate', FoLegalEntityLocalDeu, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalDeu.STATUS = new core_1.StringField('status', FoLegalEntityLocalDeu, 'Edm.String');
    /**
     * Static representation of the [[taxUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalDeu.TAX_UNIT = new core_1.StringField('taxUnit', FoLegalEntityLocalDeu, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalDeu.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', FoLegalEntityLocalDeu, Territory_1.Territory);
    /**
     * All fields of the FoLegalEntityLocalDeu entity.
     */
    FoLegalEntityLocalDeu._allFields = [
        FoLegalEntityLocalDeu.COUNTRY,
        FoLegalEntityLocalDeu.CREATED_BY,
        FoLegalEntityLocalDeu.CREATED_DATE_TIME,
        FoLegalEntityLocalDeu.CREATED_ON,
        FoLegalEntityLocalDeu.END_DATE,
        FoLegalEntityLocalDeu.EXTERNAL_CODE,
        FoLegalEntityLocalDeu.LAST_MODIFIED_BY,
        FoLegalEntityLocalDeu.LAST_MODIFIED_DATE_TIME,
        FoLegalEntityLocalDeu.LAST_MODIFIED_ON,
        FoLegalEntityLocalDeu.SOCIAL_ACCIDENT_INSURANCE,
        FoLegalEntityLocalDeu.SOCIAL_ACCIDENT_INSURANCE_REGISTRATION_NUMBER,
        FoLegalEntityLocalDeu.START_DATE,
        FoLegalEntityLocalDeu.STATUS,
        FoLegalEntityLocalDeu.TAX_UNIT,
        FoLegalEntityLocalDeu.COUNTRY_NAV
    ];
    /**
     * All fields selector.
     */
    FoLegalEntityLocalDeu.ALL_FIELDS = new core_1.AllFields('*', FoLegalEntityLocalDeu);
    /**
     * All key fields of the FoLegalEntityLocalDeu entity.
     */
    FoLegalEntityLocalDeu._keyFields = [FoLegalEntityLocalDeu.COUNTRY, FoLegalEntityLocalDeu.EXTERNAL_CODE, FoLegalEntityLocalDeu.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoLegalEntityLocalDeu.
     */
    FoLegalEntityLocalDeu._keys = FoLegalEntityLocalDeu._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoLegalEntityLocalDeu = exports.FoLegalEntityLocalDeu || (exports.FoLegalEntityLocalDeu = {}));
exports.FoLegalEntityLocalDeu = FoLegalEntityLocalDeu;
//# sourceMappingURL=FoLegalEntityLocalDeu.js.map