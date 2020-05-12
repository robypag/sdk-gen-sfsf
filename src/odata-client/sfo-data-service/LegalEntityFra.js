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
var LegalEntityFraRequestBuilder_1 = require("./LegalEntityFraRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "LegalEntityFRA" of service "SFOData".
 */
var LegalEntityFra = /** @class */ (function (_super) {
    __extends(LegalEntityFra, _super);
    function LegalEntityFra() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `LegalEntityFra`.
     * @returns A builder that constructs instances of entity type `LegalEntityFra`.
     */
    LegalEntityFra.builder = function () {
        return core_1.Entity.entityBuilder(LegalEntityFra);
    };
    /**
     * Returns a request builder to construct requests for operations on the `LegalEntityFra` entity type.
     * @returns A `LegalEntityFra` request builder.
     */
    LegalEntityFra.requestBuilder = function () {
        return new LegalEntityFraRequestBuilder_1.LegalEntityFraRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `LegalEntityFra`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `LegalEntityFra`.
     */
    LegalEntityFra.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, LegalEntityFra);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    LegalEntityFra.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for LegalEntityFra.
     */
    LegalEntityFra._entityName = 'LegalEntityFRA';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for LegalEntityFra.
     */
    LegalEntityFra._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    LegalEntityFra._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return LegalEntityFra;
}(core_1.Entity));
exports.LegalEntityFra = LegalEntityFra;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (LegalEntityFra) {
    /**
     * Static representation of the [[legalEntityEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityFra.LEGAL_ENTITY_EFFECTIVE_START_DATE = new core_1.DateField('LegalEntity_effectiveStartDate', LegalEntityFra, 'Edm.DateTime');
    /**
     * Static representation of the [[legalEntityExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityFra.LEGAL_ENTITY_EXTERNAL_CODE = new core_1.StringField('LegalEntity_externalCode', LegalEntityFra, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityFra.CREATED_BY = new core_1.StringField('createdBy', LegalEntityFra, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityFra.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', LegalEntityFra, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityFra.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', LegalEntityFra, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityFra.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', LegalEntityFra, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityFra.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', LegalEntityFra, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityFra.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', LegalEntityFra, 'Edm.String');
    /**
     * Static representation of the [[nafCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityFra.NAF_CODE = new core_1.BigNumberField('nafCode', LegalEntityFra, 'Edm.Int64');
    /**
     * Static representation of the [[nafCodePost2008]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityFra.NAF_CODE_POST_2008 = new core_1.StringField('nafCodePost2008', LegalEntityFra, 'Edm.String');
    /**
     * Static representation of the [[sirenCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityFra.SIREN_CODE = new core_1.BigNumberField('sirenCode', LegalEntityFra, 'Edm.Int64');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityFra.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', LegalEntityFra, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityFra.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', LegalEntityFra, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityFra.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', LegalEntityFra, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the LegalEntityFra entity.
     */
    LegalEntityFra._allFields = [
        LegalEntityFra.LEGAL_ENTITY_EFFECTIVE_START_DATE,
        LegalEntityFra.LEGAL_ENTITY_EXTERNAL_CODE,
        LegalEntityFra.CREATED_BY,
        LegalEntityFra.CREATED_DATE_TIME,
        LegalEntityFra.EXTERNAL_CODE,
        LegalEntityFra.LAST_MODIFIED_BY,
        LegalEntityFra.LAST_MODIFIED_DATE_TIME,
        LegalEntityFra.MDF_SYSTEM_RECORD_STATUS,
        LegalEntityFra.NAF_CODE,
        LegalEntityFra.NAF_CODE_POST_2008,
        LegalEntityFra.SIREN_CODE,
        LegalEntityFra.CREATED_BY_NAV,
        LegalEntityFra.LAST_MODIFIED_BY_NAV,
        LegalEntityFra.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    LegalEntityFra.ALL_FIELDS = new core_1.AllFields('*', LegalEntityFra);
    /**
     * All key fields of the LegalEntityFra entity.
     */
    LegalEntityFra._keyFields = [LegalEntityFra.LEGAL_ENTITY_EFFECTIVE_START_DATE, LegalEntityFra.LEGAL_ENTITY_EXTERNAL_CODE, LegalEntityFra.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property LegalEntityFra.
     */
    LegalEntityFra._keys = LegalEntityFra._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(LegalEntityFra = exports.LegalEntityFra || (exports.LegalEntityFra = {}));
exports.LegalEntityFra = LegalEntityFra;
//# sourceMappingURL=LegalEntityFra.js.map