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
var LegalEntityArgRequestBuilder_1 = require("./LegalEntityArgRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "LegalEntityARG" of service "SFOData".
 */
var LegalEntityArg = /** @class */ (function (_super) {
    __extends(LegalEntityArg, _super);
    function LegalEntityArg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `LegalEntityArg`.
     * @returns A builder that constructs instances of entity type `LegalEntityArg`.
     */
    LegalEntityArg.builder = function () {
        return core_1.Entity.entityBuilder(LegalEntityArg);
    };
    /**
     * Returns a request builder to construct requests for operations on the `LegalEntityArg` entity type.
     * @returns A `LegalEntityArg` request builder.
     */
    LegalEntityArg.requestBuilder = function () {
        return new LegalEntityArgRequestBuilder_1.LegalEntityArgRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `LegalEntityArg`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `LegalEntityArg`.
     */
    LegalEntityArg.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, LegalEntityArg);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    LegalEntityArg.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for LegalEntityArg.
     */
    LegalEntityArg._entityName = 'LegalEntityARG';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for LegalEntityArg.
     */
    LegalEntityArg._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    LegalEntityArg._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return LegalEntityArg;
}(core_1.Entity));
exports.LegalEntityArg = LegalEntityArg;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (LegalEntityArg) {
    /**
     * Static representation of the [[legalEntityEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityArg.LEGAL_ENTITY_EFFECTIVE_START_DATE = new core_1.DateField('LegalEntity_effectiveStartDate', LegalEntityArg, 'Edm.DateTime');
    /**
     * Static representation of the [[legalEntityExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityArg.LEGAL_ENTITY_EXTERNAL_CODE = new core_1.StringField('LegalEntity_externalCode', LegalEntityArg, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityArg.CREATED_BY = new core_1.StringField('createdBy', LegalEntityArg, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityArg.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', LegalEntityArg, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cuit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityArg.CUIT = new core_1.StringField('cuit', LegalEntityArg, 'Edm.String');
    /**
     * Static representation of the [[cuitCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityArg.CUIT_CODE = new core_1.BigNumberField('cuitCode', LegalEntityArg, 'Edm.Int64');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityArg.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', LegalEntityArg, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityArg.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', LegalEntityArg, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityArg.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', LegalEntityArg, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityArg.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', LegalEntityArg, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityArg.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', LegalEntityArg, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityArg.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', LegalEntityArg, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityArg.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', LegalEntityArg, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the LegalEntityArg entity.
     */
    LegalEntityArg._allFields = [
        LegalEntityArg.LEGAL_ENTITY_EFFECTIVE_START_DATE,
        LegalEntityArg.LEGAL_ENTITY_EXTERNAL_CODE,
        LegalEntityArg.CREATED_BY,
        LegalEntityArg.CREATED_DATE_TIME,
        LegalEntityArg.CUIT,
        LegalEntityArg.CUIT_CODE,
        LegalEntityArg.EXTERNAL_CODE,
        LegalEntityArg.LAST_MODIFIED_BY,
        LegalEntityArg.LAST_MODIFIED_DATE_TIME,
        LegalEntityArg.MDF_SYSTEM_RECORD_STATUS,
        LegalEntityArg.CREATED_BY_NAV,
        LegalEntityArg.LAST_MODIFIED_BY_NAV,
        LegalEntityArg.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    LegalEntityArg.ALL_FIELDS = new core_1.AllFields('*', LegalEntityArg);
    /**
     * All key fields of the LegalEntityArg entity.
     */
    LegalEntityArg._keyFields = [LegalEntityArg.LEGAL_ENTITY_EFFECTIVE_START_DATE, LegalEntityArg.LEGAL_ENTITY_EXTERNAL_CODE, LegalEntityArg.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property LegalEntityArg.
     */
    LegalEntityArg._keys = LegalEntityArg._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(LegalEntityArg = exports.LegalEntityArg || (exports.LegalEntityArg = {}));
exports.LegalEntityArg = LegalEntityArg;
//# sourceMappingURL=LegalEntityArg.js.map