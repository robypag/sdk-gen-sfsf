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
var LegalEntityRusRequestBuilder_1 = require("./LegalEntityRusRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "LegalEntityRUS" of service "SFOData".
 */
var LegalEntityRus = /** @class */ (function (_super) {
    __extends(LegalEntityRus, _super);
    function LegalEntityRus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `LegalEntityRus`.
     * @returns A builder that constructs instances of entity type `LegalEntityRus`.
     */
    LegalEntityRus.builder = function () {
        return core_1.Entity.entityBuilder(LegalEntityRus);
    };
    /**
     * Returns a request builder to construct requests for operations on the `LegalEntityRus` entity type.
     * @returns A `LegalEntityRus` request builder.
     */
    LegalEntityRus.requestBuilder = function () {
        return new LegalEntityRusRequestBuilder_1.LegalEntityRusRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `LegalEntityRus`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `LegalEntityRus`.
     */
    LegalEntityRus.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, LegalEntityRus);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    LegalEntityRus.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for LegalEntityRus.
     */
    LegalEntityRus._entityName = 'LegalEntityRUS';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for LegalEntityRus.
     */
    LegalEntityRus._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    LegalEntityRus._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return LegalEntityRus;
}(core_1.Entity));
exports.LegalEntityRus = LegalEntityRus;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (LegalEntityRus) {
    /**
     * Static representation of the [[legalEntityEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityRus.LEGAL_ENTITY_EFFECTIVE_START_DATE = new core_1.DateField('LegalEntity_effectiveStartDate', LegalEntityRus, 'Edm.DateTime');
    /**
     * Static representation of the [[legalEntityExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityRus.LEGAL_ENTITY_EXTERNAL_CODE = new core_1.StringField('LegalEntity_externalCode', LegalEntityRus, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityRus.CREATED_BY = new core_1.StringField('createdBy', LegalEntityRus, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityRus.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', LegalEntityRus, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityRus.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', LegalEntityRus, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityRus.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', LegalEntityRus, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityRus.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', LegalEntityRus, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityRus.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', LegalEntityRus, 'Edm.String');
    /**
     * Static representation of the [[okpoNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityRus.OKPO_NUMBER = new core_1.StringField('okpoNumber', LegalEntityRus, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityRus.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', LegalEntityRus, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityRus.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', LegalEntityRus, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalEntityRus.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', LegalEntityRus, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the LegalEntityRus entity.
     */
    LegalEntityRus._allFields = [
        LegalEntityRus.LEGAL_ENTITY_EFFECTIVE_START_DATE,
        LegalEntityRus.LEGAL_ENTITY_EXTERNAL_CODE,
        LegalEntityRus.CREATED_BY,
        LegalEntityRus.CREATED_DATE_TIME,
        LegalEntityRus.EXTERNAL_CODE,
        LegalEntityRus.LAST_MODIFIED_BY,
        LegalEntityRus.LAST_MODIFIED_DATE_TIME,
        LegalEntityRus.MDF_SYSTEM_RECORD_STATUS,
        LegalEntityRus.OKPO_NUMBER,
        LegalEntityRus.CREATED_BY_NAV,
        LegalEntityRus.LAST_MODIFIED_BY_NAV,
        LegalEntityRus.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    LegalEntityRus.ALL_FIELDS = new core_1.AllFields('*', LegalEntityRus);
    /**
     * All key fields of the LegalEntityRus entity.
     */
    LegalEntityRus._keyFields = [LegalEntityRus.LEGAL_ENTITY_EFFECTIVE_START_DATE, LegalEntityRus.LEGAL_ENTITY_EXTERNAL_CODE, LegalEntityRus.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property LegalEntityRus.
     */
    LegalEntityRus._keys = LegalEntityRus._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(LegalEntityRus = exports.LegalEntityRus || (exports.LegalEntityRus = {}));
exports.LegalEntityRus = LegalEntityRus;
//# sourceMappingURL=LegalEntityRus.js.map