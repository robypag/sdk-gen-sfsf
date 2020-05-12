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
var LegalEntityEspRequestBuilder_1 = require("./LegalEntityEspRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "LegalEntityESP" of service "SFOData".
 */
var LegalEntityEsp = /** @class */ (function (_super) {
    __extends(LegalEntityEsp, _super);
    function LegalEntityEsp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `LegalEntityEsp`.
     * @returns A builder that constructs instances of entity type `LegalEntityEsp`.
     */
    LegalEntityEsp.builder = function () {
        return core_1.Entity.entityBuilder(LegalEntityEsp);
    };
    /**
     * Returns a request builder to construct requests for operations on the `LegalEntityEsp` entity type.
     * @returns A `LegalEntityEsp` request builder.
     */
    LegalEntityEsp.requestBuilder = function () {
        return new LegalEntityEspRequestBuilder_1.LegalEntityEspRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `LegalEntityEsp`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `LegalEntityEsp`.
     */
    LegalEntityEsp.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, LegalEntityEsp);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    LegalEntityEsp.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for LegalEntityEsp.
     */
    LegalEntityEsp._entityName = 'LegalEntityESP';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for LegalEntityEsp.
     */
    LegalEntityEsp._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    LegalEntityEsp._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return LegalEntityEsp;
}(core_1.Entity));
exports.LegalEntityEsp = LegalEntityEsp;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (LegalEntityEsp) {
    /**
     * Static representation of the [[legalEntityEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityEsp.LEGAL_ENTITY_EFFECTIVE_START_DATE = new core_1.DateField('LegalEntity_effectiveStartDate', LegalEntityEsp, 'Edm.DateTime');
    /**
     * Static representation of the [[legalEntityExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityEsp.LEGAL_ENTITY_EXTERNAL_CODE = new core_1.StringField('LegalEntity_externalCode', LegalEntityEsp, 'Edm.String');
    /**
     * Static representation of the [[certificadoDeIdentificacionFiscal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityEsp.CERTIFICADO_DE_IDENTIFICACION_FISCAL = new core_1.StringField('certificadoDeIdentificacionFiscal', LegalEntityEsp, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityEsp.CREATED_BY = new core_1.StringField('createdBy', LegalEntityEsp, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityEsp.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', LegalEntityEsp, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityEsp.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', LegalEntityEsp, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityEsp.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', LegalEntityEsp, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityEsp.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', LegalEntityEsp, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityEsp.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', LegalEntityEsp, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityEsp.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', LegalEntityEsp, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityEsp.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', LegalEntityEsp, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityEsp.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', LegalEntityEsp, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the LegalEntityEsp entity.
     */
    LegalEntityEsp._allFields = [
        LegalEntityEsp.LEGAL_ENTITY_EFFECTIVE_START_DATE,
        LegalEntityEsp.LEGAL_ENTITY_EXTERNAL_CODE,
        LegalEntityEsp.CERTIFICADO_DE_IDENTIFICACION_FISCAL,
        LegalEntityEsp.CREATED_BY,
        LegalEntityEsp.CREATED_DATE_TIME,
        LegalEntityEsp.EXTERNAL_CODE,
        LegalEntityEsp.LAST_MODIFIED_BY,
        LegalEntityEsp.LAST_MODIFIED_DATE_TIME,
        LegalEntityEsp.MDF_SYSTEM_RECORD_STATUS,
        LegalEntityEsp.CREATED_BY_NAV,
        LegalEntityEsp.LAST_MODIFIED_BY_NAV,
        LegalEntityEsp.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    LegalEntityEsp.ALL_FIELDS = new core_1.AllFields('*', LegalEntityEsp);
    /**
     * All key fields of the LegalEntityEsp entity.
     */
    LegalEntityEsp._keyFields = [LegalEntityEsp.LEGAL_ENTITY_EFFECTIVE_START_DATE, LegalEntityEsp.LEGAL_ENTITY_EXTERNAL_CODE, LegalEntityEsp.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property LegalEntityEsp.
     */
    LegalEntityEsp._keys = LegalEntityEsp._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(LegalEntityEsp = exports.LegalEntityEsp || (exports.LegalEntityEsp = {}));
exports.LegalEntityEsp = LegalEntityEsp;
//# sourceMappingURL=LegalEntityEsp.js.map