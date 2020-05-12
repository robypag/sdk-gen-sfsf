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
var LegalEntityUsaRequestBuilder_1 = require("./LegalEntityUsaRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "LegalEntityUSA" of service "SFOData".
 */
var LegalEntityUsa = /** @class */ (function (_super) {
    __extends(LegalEntityUsa, _super);
    function LegalEntityUsa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `LegalEntityUsa`.
     * @returns A builder that constructs instances of entity type `LegalEntityUsa`.
     */
    LegalEntityUsa.builder = function () {
        return core_1.Entity.entityBuilder(LegalEntityUsa);
    };
    /**
     * Returns a request builder to construct requests for operations on the `LegalEntityUsa` entity type.
     * @returns A `LegalEntityUsa` request builder.
     */
    LegalEntityUsa.requestBuilder = function () {
        return new LegalEntityUsaRequestBuilder_1.LegalEntityUsaRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `LegalEntityUsa`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `LegalEntityUsa`.
     */
    LegalEntityUsa.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, LegalEntityUsa);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    LegalEntityUsa.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for LegalEntityUsa.
     */
    LegalEntityUsa._entityName = 'LegalEntityUSA';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for LegalEntityUsa.
     */
    LegalEntityUsa._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    LegalEntityUsa._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return LegalEntityUsa;
}(core_1.Entity));
exports.LegalEntityUsa = LegalEntityUsa;
var User_1 = require("./User");
var PickListValueV2_1 = require("./PickListValueV2");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (LegalEntityUsa) {
    /**
     * Static representation of the [[legalEntityEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityUsa.LEGAL_ENTITY_EFFECTIVE_START_DATE = new core_1.DateField('LegalEntity_effectiveStartDate', LegalEntityUsa, 'Edm.DateTime');
    /**
     * Static representation of the [[legalEntityExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityUsa.LEGAL_ENTITY_EXTERNAL_CODE = new core_1.StringField('LegalEntity_externalCode', LegalEntityUsa, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityUsa.CREATED_BY = new core_1.StringField('createdBy', LegalEntityUsa, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityUsa.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', LegalEntityUsa, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eeoCompanyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityUsa.EEO_COMPANY_CODE = new core_1.StringField('eeoCompanyCode', LegalEntityUsa, 'Edm.String');
    /**
     * Static representation of the [[employerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityUsa.EMPLOYER_ID = new core_1.StringField('employerID', LegalEntityUsa, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityUsa.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', LegalEntityUsa, 'Edm.Int64');
    /**
     * Static representation of the [[fedReserveBankDistrict]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityUsa.FED_RESERVE_BANK_DISTRICT = new core_1.StringField('fedReserveBankDistrict', LegalEntityUsa, 'Edm.String');
    /**
     * Static representation of the [[federalReserveBankId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityUsa.FEDERAL_RESERVE_BANK_ID = new core_1.StringField('federalReserveBankID', LegalEntityUsa, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityUsa.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', LegalEntityUsa, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityUsa.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', LegalEntityUsa, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[legalEntityType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityUsa.LEGAL_ENTITY_TYPE = new core_1.StringField('legalEntityType', LegalEntityUsa, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityUsa.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', LegalEntityUsa, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityUsa.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', LegalEntityUsa, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityUsa.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', LegalEntityUsa, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[legalEntityTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityUsa.LEGAL_ENTITY_TYPE_NAV = new core_1.Link('legalEntityTypeNav', LegalEntityUsa, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityUsa.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', LegalEntityUsa, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the LegalEntityUsa entity.
     */
    LegalEntityUsa._allFields = [
        LegalEntityUsa.LEGAL_ENTITY_EFFECTIVE_START_DATE,
        LegalEntityUsa.LEGAL_ENTITY_EXTERNAL_CODE,
        LegalEntityUsa.CREATED_BY,
        LegalEntityUsa.CREATED_DATE_TIME,
        LegalEntityUsa.EEO_COMPANY_CODE,
        LegalEntityUsa.EMPLOYER_ID,
        LegalEntityUsa.EXTERNAL_CODE,
        LegalEntityUsa.FED_RESERVE_BANK_DISTRICT,
        LegalEntityUsa.FEDERAL_RESERVE_BANK_ID,
        LegalEntityUsa.LAST_MODIFIED_BY,
        LegalEntityUsa.LAST_MODIFIED_DATE_TIME,
        LegalEntityUsa.LEGAL_ENTITY_TYPE,
        LegalEntityUsa.MDF_SYSTEM_RECORD_STATUS,
        LegalEntityUsa.CREATED_BY_NAV,
        LegalEntityUsa.LAST_MODIFIED_BY_NAV,
        LegalEntityUsa.LEGAL_ENTITY_TYPE_NAV,
        LegalEntityUsa.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    LegalEntityUsa.ALL_FIELDS = new core_1.AllFields('*', LegalEntityUsa);
    /**
     * All key fields of the LegalEntityUsa entity.
     */
    LegalEntityUsa._keyFields = [LegalEntityUsa.LEGAL_ENTITY_EFFECTIVE_START_DATE, LegalEntityUsa.LEGAL_ENTITY_EXTERNAL_CODE, LegalEntityUsa.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property LegalEntityUsa.
     */
    LegalEntityUsa._keys = LegalEntityUsa._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(LegalEntityUsa = exports.LegalEntityUsa || (exports.LegalEntityUsa = {}));
exports.LegalEntityUsa = LegalEntityUsa;
//# sourceMappingURL=LegalEntityUsa.js.map