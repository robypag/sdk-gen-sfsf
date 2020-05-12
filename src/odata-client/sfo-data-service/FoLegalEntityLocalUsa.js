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
var FoLegalEntityLocalUsaRequestBuilder_1 = require("./FoLegalEntityLocalUsaRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOLegalEntityLocalUSA" of service "SFOData".
 */
var FoLegalEntityLocalUsa = /** @class */ (function (_super) {
    __extends(FoLegalEntityLocalUsa, _super);
    function FoLegalEntityLocalUsa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoLegalEntityLocalUsa`.
     * @returns A builder that constructs instances of entity type `FoLegalEntityLocalUsa`.
     */
    FoLegalEntityLocalUsa.builder = function () {
        return core_1.Entity.entityBuilder(FoLegalEntityLocalUsa);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoLegalEntityLocalUsa` entity type.
     * @returns A `FoLegalEntityLocalUsa` request builder.
     */
    FoLegalEntityLocalUsa.requestBuilder = function () {
        return new FoLegalEntityLocalUsaRequestBuilder_1.FoLegalEntityLocalUsaRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoLegalEntityLocalUsa`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoLegalEntityLocalUsa`.
     */
    FoLegalEntityLocalUsa.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoLegalEntityLocalUsa);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoLegalEntityLocalUsa.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoLegalEntityLocalUsa.
     */
    FoLegalEntityLocalUsa._entityName = 'FOLegalEntityLocalUSA';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoLegalEntityLocalUsa.
     */
    FoLegalEntityLocalUsa._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoLegalEntityLocalUsa._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoLegalEntityLocalUsa;
}(core_1.Entity));
exports.FoLegalEntityLocalUsa = FoLegalEntityLocalUsa;
var Territory_1 = require("./Territory");
var PickListValueV2_1 = require("./PickListValueV2");
(function (FoLegalEntityLocalUsa) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalUsa.COUNTRY = new core_1.StringField('country', FoLegalEntityLocalUsa, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalUsa.CREATED_BY = new core_1.StringField('createdBy', FoLegalEntityLocalUsa, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalUsa.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoLegalEntityLocalUsa, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalUsa.CREATED_ON = new core_1.DateField('createdOn', FoLegalEntityLocalUsa, 'Edm.DateTime');
    /**
     * Static representation of the [[eeoCompanyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalUsa.EEO_COMPANY_CODE = new core_1.StringField('eeoCompanyCode', FoLegalEntityLocalUsa, 'Edm.String');
    /**
     * Static representation of the [[employerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalUsa.EMPLOYER_ID = new core_1.StringField('employerID', FoLegalEntityLocalUsa, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalUsa.END_DATE = new core_1.DateField('endDate', FoLegalEntityLocalUsa, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalUsa.EXTERNAL_CODE = new core_1.StringField('externalCode', FoLegalEntityLocalUsa, 'Edm.String');
    /**
     * Static representation of the [[fedReserveBankDistrict]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalUsa.FED_RESERVE_BANK_DISTRICT = new core_1.StringField('fedReserveBankDistrict', FoLegalEntityLocalUsa, 'Edm.String');
    /**
     * Static representation of the [[federalReserveBankId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalUsa.FEDERAL_RESERVE_BANK_ID = new core_1.StringField('federalReserveBankID', FoLegalEntityLocalUsa, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalUsa.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoLegalEntityLocalUsa, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalUsa.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoLegalEntityLocalUsa, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalUsa.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoLegalEntityLocalUsa, 'Edm.DateTime');
    /**
     * Static representation of the [[legalEntityType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalUsa.LEGAL_ENTITY_TYPE = new core_1.StringField('legalEntityType', FoLegalEntityLocalUsa, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalUsa.START_DATE = new core_1.DateField('startDate', FoLegalEntityLocalUsa, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalUsa.STATUS = new core_1.StringField('status', FoLegalEntityLocalUsa, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalUsa.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', FoLegalEntityLocalUsa, Territory_1.Territory);
    /**
     * Static representation of the one-to-many navigation property [[legalEntityTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalUsa.LEGAL_ENTITY_TYPE_NAV = new core_1.Link('legalEntityTypeNav', FoLegalEntityLocalUsa, PickListValueV2_1.PickListValueV2);
    /**
     * All fields of the FoLegalEntityLocalUsa entity.
     */
    FoLegalEntityLocalUsa._allFields = [
        FoLegalEntityLocalUsa.COUNTRY,
        FoLegalEntityLocalUsa.CREATED_BY,
        FoLegalEntityLocalUsa.CREATED_DATE_TIME,
        FoLegalEntityLocalUsa.CREATED_ON,
        FoLegalEntityLocalUsa.EEO_COMPANY_CODE,
        FoLegalEntityLocalUsa.EMPLOYER_ID,
        FoLegalEntityLocalUsa.END_DATE,
        FoLegalEntityLocalUsa.EXTERNAL_CODE,
        FoLegalEntityLocalUsa.FED_RESERVE_BANK_DISTRICT,
        FoLegalEntityLocalUsa.FEDERAL_RESERVE_BANK_ID,
        FoLegalEntityLocalUsa.LAST_MODIFIED_BY,
        FoLegalEntityLocalUsa.LAST_MODIFIED_DATE_TIME,
        FoLegalEntityLocalUsa.LAST_MODIFIED_ON,
        FoLegalEntityLocalUsa.LEGAL_ENTITY_TYPE,
        FoLegalEntityLocalUsa.START_DATE,
        FoLegalEntityLocalUsa.STATUS,
        FoLegalEntityLocalUsa.COUNTRY_NAV,
        FoLegalEntityLocalUsa.LEGAL_ENTITY_TYPE_NAV
    ];
    /**
     * All fields selector.
     */
    FoLegalEntityLocalUsa.ALL_FIELDS = new core_1.AllFields('*', FoLegalEntityLocalUsa);
    /**
     * All key fields of the FoLegalEntityLocalUsa entity.
     */
    FoLegalEntityLocalUsa._keyFields = [FoLegalEntityLocalUsa.COUNTRY, FoLegalEntityLocalUsa.EXTERNAL_CODE, FoLegalEntityLocalUsa.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoLegalEntityLocalUsa.
     */
    FoLegalEntityLocalUsa._keys = FoLegalEntityLocalUsa._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoLegalEntityLocalUsa = exports.FoLegalEntityLocalUsa || (exports.FoLegalEntityLocalUsa = {}));
exports.FoLegalEntityLocalUsa = FoLegalEntityLocalUsa;
//# sourceMappingURL=FoLegalEntityLocalUsa.js.map