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
var PerNationalIdRequestBuilder_1 = require("./PerNationalIdRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PerNationalId" of service "SFOData".
 */
var PerNationalId = /** @class */ (function (_super) {
    __extends(PerNationalId, _super);
    function PerNationalId() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerNationalId`.
     * @returns A builder that constructs instances of entity type `PerNationalId`.
     */
    PerNationalId.builder = function () {
        return core_1.Entity.entityBuilder(PerNationalId);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerNationalId` entity type.
     * @returns A `PerNationalId` request builder.
     */
    PerNationalId.requestBuilder = function () {
        return new PerNationalIdRequestBuilder_1.PerNationalIdRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerNationalId`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerNationalId`.
     */
    PerNationalId.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PerNationalId);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerNationalId.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerNationalId.
     */
    PerNationalId._entityName = 'PerNationalId';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerNationalId.
     */
    PerNationalId._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerNationalId._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PerNationalId;
}(core_1.Entity));
exports.PerNationalId = PerNationalId;
var Territory_1 = require("./Territory");
var PerPerson_1 = require("./PerPerson");
(function (PerNationalId) {
    /**
     * Static representation of the [[cardType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerNationalId.CARD_TYPE = new core_1.StringField('cardType', PerNationalId, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerNationalId.COUNTRY = new core_1.StringField('country', PerNationalId, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerNationalId.CREATED_BY = new core_1.StringField('createdBy', PerNationalId, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerNationalId.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PerNationalId, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerNationalId.CREATED_ON = new core_1.DateField('createdOn', PerNationalId, 'Edm.DateTime');
    /**
     * Static representation of the [[isPrimary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerNationalId.IS_PRIMARY = new core_1.BooleanField('isPrimary', PerNationalId, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerNationalId.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PerNationalId, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerNationalId.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PerNationalId, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerNationalId.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', PerNationalId, 'Edm.DateTime');
    /**
     * Static representation of the [[nationalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerNationalId.NATIONAL_ID = new core_1.StringField('nationalId', PerNationalId, 'Edm.String');
    /**
     * Static representation of the [[notes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerNationalId.NOTES = new core_1.StringField('notes', PerNationalId, 'Edm.String');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerNationalId.OPERATION = new core_1.StringField('operation', PerNationalId, 'Edm.String');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerNationalId.PERSON_ID_EXTERNAL = new core_1.StringField('personIdExternal', PerNationalId, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerNationalId.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', PerNationalId, Territory_1.Territory);
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerNationalId.PERSON_NAV = new core_1.OneToOneLink('personNav', PerNationalId, PerPerson_1.PerPerson);
    /**
     * All fields of the PerNationalId entity.
     */
    PerNationalId._allFields = [
        PerNationalId.CARD_TYPE,
        PerNationalId.COUNTRY,
        PerNationalId.CREATED_BY,
        PerNationalId.CREATED_DATE_TIME,
        PerNationalId.CREATED_ON,
        PerNationalId.IS_PRIMARY,
        PerNationalId.LAST_MODIFIED_BY,
        PerNationalId.LAST_MODIFIED_DATE_TIME,
        PerNationalId.LAST_MODIFIED_ON,
        PerNationalId.NATIONAL_ID,
        PerNationalId.NOTES,
        PerNationalId.OPERATION,
        PerNationalId.PERSON_ID_EXTERNAL,
        PerNationalId.COUNTRY_NAV,
        PerNationalId.PERSON_NAV
    ];
    /**
     * All fields selector.
     */
    PerNationalId.ALL_FIELDS = new core_1.AllFields('*', PerNationalId);
    /**
     * All key fields of the PerNationalId entity.
     */
    PerNationalId._keyFields = [PerNationalId.CARD_TYPE, PerNationalId.COUNTRY, PerNationalId.PERSON_ID_EXTERNAL];
    /**
     * Mapping of all key field names to the respective static field property PerNationalId.
     */
    PerNationalId._keys = PerNationalId._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerNationalId = exports.PerNationalId || (exports.PerNationalId = {}));
exports.PerNationalId = PerNationalId;
//# sourceMappingURL=PerNationalId.js.map