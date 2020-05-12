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
var LegalEntityDeuRequestBuilder_1 = require("./LegalEntityDeuRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "LegalEntityDEU" of service "SFOData".
 */
var LegalEntityDeu = /** @class */ (function (_super) {
    __extends(LegalEntityDeu, _super);
    function LegalEntityDeu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `LegalEntityDeu`.
     * @returns A builder that constructs instances of entity type `LegalEntityDeu`.
     */
    LegalEntityDeu.builder = function () {
        return core_1.Entity.entityBuilder(LegalEntityDeu);
    };
    /**
     * Returns a request builder to construct requests for operations on the `LegalEntityDeu` entity type.
     * @returns A `LegalEntityDeu` request builder.
     */
    LegalEntityDeu.requestBuilder = function () {
        return new LegalEntityDeuRequestBuilder_1.LegalEntityDeuRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `LegalEntityDeu`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `LegalEntityDeu`.
     */
    LegalEntityDeu.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, LegalEntityDeu);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    LegalEntityDeu.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for LegalEntityDeu.
     */
    LegalEntityDeu._entityName = 'LegalEntityDEU';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for LegalEntityDeu.
     */
    LegalEntityDeu._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    LegalEntityDeu._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return LegalEntityDeu;
}(core_1.Entity));
exports.LegalEntityDeu = LegalEntityDeu;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (LegalEntityDeu) {
    /**
     * Static representation of the [[legalEntityEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityDeu.LEGAL_ENTITY_EFFECTIVE_START_DATE = new core_1.DateField('LegalEntity_effectiveStartDate', LegalEntityDeu, 'Edm.DateTime');
    /**
     * Static representation of the [[legalEntityExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityDeu.LEGAL_ENTITY_EXTERNAL_CODE = new core_1.StringField('LegalEntity_externalCode', LegalEntityDeu, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityDeu.CREATED_BY = new core_1.StringField('createdBy', LegalEntityDeu, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityDeu.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', LegalEntityDeu, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityDeu.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', LegalEntityDeu, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityDeu.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', LegalEntityDeu, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityDeu.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', LegalEntityDeu, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityDeu.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', LegalEntityDeu, 'Edm.String');
    /**
     * Static representation of the [[socialAccidentInsurance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityDeu.SOCIAL_ACCIDENT_INSURANCE = new core_1.StringField('socialAccidentInsurance', LegalEntityDeu, 'Edm.String');
    /**
     * Static representation of the [[socialAccidentInsuranceRegistrationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityDeu.SOCIAL_ACCIDENT_INSURANCE_REGISTRATION_NUMBER = new core_1.StringField('socialAccidentInsuranceRegistrationNumber', LegalEntityDeu, 'Edm.String');
    /**
     * Static representation of the [[taxUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityDeu.TAX_UNIT = new core_1.StringField('taxUnit', LegalEntityDeu, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityDeu.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', LegalEntityDeu, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityDeu.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', LegalEntityDeu, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityDeu.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', LegalEntityDeu, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the LegalEntityDeu entity.
     */
    LegalEntityDeu._allFields = [
        LegalEntityDeu.LEGAL_ENTITY_EFFECTIVE_START_DATE,
        LegalEntityDeu.LEGAL_ENTITY_EXTERNAL_CODE,
        LegalEntityDeu.CREATED_BY,
        LegalEntityDeu.CREATED_DATE_TIME,
        LegalEntityDeu.EXTERNAL_CODE,
        LegalEntityDeu.LAST_MODIFIED_BY,
        LegalEntityDeu.LAST_MODIFIED_DATE_TIME,
        LegalEntityDeu.MDF_SYSTEM_RECORD_STATUS,
        LegalEntityDeu.SOCIAL_ACCIDENT_INSURANCE,
        LegalEntityDeu.SOCIAL_ACCIDENT_INSURANCE_REGISTRATION_NUMBER,
        LegalEntityDeu.TAX_UNIT,
        LegalEntityDeu.CREATED_BY_NAV,
        LegalEntityDeu.LAST_MODIFIED_BY_NAV,
        LegalEntityDeu.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    LegalEntityDeu.ALL_FIELDS = new core_1.AllFields('*', LegalEntityDeu);
    /**
     * All key fields of the LegalEntityDeu entity.
     */
    LegalEntityDeu._keyFields = [LegalEntityDeu.LEGAL_ENTITY_EFFECTIVE_START_DATE, LegalEntityDeu.LEGAL_ENTITY_EXTERNAL_CODE, LegalEntityDeu.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property LegalEntityDeu.
     */
    LegalEntityDeu._keys = LegalEntityDeu._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(LegalEntityDeu = exports.LegalEntityDeu || (exports.LegalEntityDeu = {}));
exports.LegalEntityDeu = LegalEntityDeu;
//# sourceMappingURL=LegalEntityDeu.js.map