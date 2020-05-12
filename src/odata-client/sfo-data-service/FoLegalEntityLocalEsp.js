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
var FoLegalEntityLocalEspRequestBuilder_1 = require("./FoLegalEntityLocalEspRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOLegalEntityLocalESP" of service "SFOData".
 */
var FoLegalEntityLocalEsp = /** @class */ (function (_super) {
    __extends(FoLegalEntityLocalEsp, _super);
    function FoLegalEntityLocalEsp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoLegalEntityLocalEsp`.
     * @returns A builder that constructs instances of entity type `FoLegalEntityLocalEsp`.
     */
    FoLegalEntityLocalEsp.builder = function () {
        return core_1.Entity.entityBuilder(FoLegalEntityLocalEsp);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoLegalEntityLocalEsp` entity type.
     * @returns A `FoLegalEntityLocalEsp` request builder.
     */
    FoLegalEntityLocalEsp.requestBuilder = function () {
        return new FoLegalEntityLocalEspRequestBuilder_1.FoLegalEntityLocalEspRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoLegalEntityLocalEsp`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoLegalEntityLocalEsp`.
     */
    FoLegalEntityLocalEsp.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoLegalEntityLocalEsp);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoLegalEntityLocalEsp.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoLegalEntityLocalEsp.
     */
    FoLegalEntityLocalEsp._entityName = 'FOLegalEntityLocalESP';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoLegalEntityLocalEsp.
     */
    FoLegalEntityLocalEsp._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoLegalEntityLocalEsp._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoLegalEntityLocalEsp;
}(core_1.Entity));
exports.FoLegalEntityLocalEsp = FoLegalEntityLocalEsp;
var Territory_1 = require("./Territory");
(function (FoLegalEntityLocalEsp) {
    /**
     * Static representation of the [[certificadoDeIdentificacionFiscal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalEsp.CERTIFICADO_DE_IDENTIFICACION_FISCAL = new core_1.StringField('certificadoDeIdentificacionFiscal', FoLegalEntityLocalEsp, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalEsp.COUNTRY = new core_1.StringField('country', FoLegalEntityLocalEsp, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalEsp.CREATED_BY = new core_1.StringField('createdBy', FoLegalEntityLocalEsp, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalEsp.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoLegalEntityLocalEsp, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalEsp.CREATED_ON = new core_1.DateField('createdOn', FoLegalEntityLocalEsp, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalEsp.END_DATE = new core_1.DateField('endDate', FoLegalEntityLocalEsp, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalEsp.EXTERNAL_CODE = new core_1.StringField('externalCode', FoLegalEntityLocalEsp, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalEsp.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoLegalEntityLocalEsp, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalEsp.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoLegalEntityLocalEsp, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalEsp.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoLegalEntityLocalEsp, 'Edm.DateTime');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalEsp.START_DATE = new core_1.DateField('startDate', FoLegalEntityLocalEsp, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalEsp.STATUS = new core_1.StringField('status', FoLegalEntityLocalEsp, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLegalEntityLocalEsp.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', FoLegalEntityLocalEsp, Territory_1.Territory);
    /**
     * All fields of the FoLegalEntityLocalEsp entity.
     */
    FoLegalEntityLocalEsp._allFields = [
        FoLegalEntityLocalEsp.CERTIFICADO_DE_IDENTIFICACION_FISCAL,
        FoLegalEntityLocalEsp.COUNTRY,
        FoLegalEntityLocalEsp.CREATED_BY,
        FoLegalEntityLocalEsp.CREATED_DATE_TIME,
        FoLegalEntityLocalEsp.CREATED_ON,
        FoLegalEntityLocalEsp.END_DATE,
        FoLegalEntityLocalEsp.EXTERNAL_CODE,
        FoLegalEntityLocalEsp.LAST_MODIFIED_BY,
        FoLegalEntityLocalEsp.LAST_MODIFIED_DATE_TIME,
        FoLegalEntityLocalEsp.LAST_MODIFIED_ON,
        FoLegalEntityLocalEsp.START_DATE,
        FoLegalEntityLocalEsp.STATUS,
        FoLegalEntityLocalEsp.COUNTRY_NAV
    ];
    /**
     * All fields selector.
     */
    FoLegalEntityLocalEsp.ALL_FIELDS = new core_1.AllFields('*', FoLegalEntityLocalEsp);
    /**
     * All key fields of the FoLegalEntityLocalEsp entity.
     */
    FoLegalEntityLocalEsp._keyFields = [FoLegalEntityLocalEsp.COUNTRY, FoLegalEntityLocalEsp.EXTERNAL_CODE, FoLegalEntityLocalEsp.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoLegalEntityLocalEsp.
     */
    FoLegalEntityLocalEsp._keys = FoLegalEntityLocalEsp._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoLegalEntityLocalEsp = exports.FoLegalEntityLocalEsp || (exports.FoLegalEntityLocalEsp = {}));
exports.FoLegalEntityLocalEsp = FoLegalEntityLocalEsp;
//# sourceMappingURL=FoLegalEntityLocalEsp.js.map