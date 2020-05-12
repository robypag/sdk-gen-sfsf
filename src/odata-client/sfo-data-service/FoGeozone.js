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
var FoGeozoneRequestBuilder_1 = require("./FoGeozoneRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOGeozone" of service "SFOData".
 */
var FoGeozone = /** @class */ (function (_super) {
    __extends(FoGeozone, _super);
    function FoGeozone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoGeozone`.
     * @returns A builder that constructs instances of entity type `FoGeozone`.
     */
    FoGeozone.builder = function () {
        return core_1.Entity.entityBuilder(FoGeozone);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoGeozone` entity type.
     * @returns A `FoGeozone` request builder.
     */
    FoGeozone.requestBuilder = function () {
        return new FoGeozoneRequestBuilder_1.FoGeozoneRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoGeozone`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoGeozone`.
     */
    FoGeozone.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoGeozone);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoGeozone.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoGeozone.
     */
    FoGeozone._entityName = 'FOGeozone';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoGeozone.
     */
    FoGeozone._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoGeozone._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoGeozone;
}(core_1.Entity));
exports.FoGeozone = FoGeozone;
var FoTranslation_1 = require("./FoTranslation");
(function (FoGeozone) {
    /**
     * Static representation of the [[adjustmentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoGeozone.ADJUSTMENT_PERCENTAGE = new core_1.BigNumberField('adjustmentPercentage', FoGeozone, 'Edm.Decimal');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoGeozone.CREATED_BY = new core_1.StringField('createdBy', FoGeozone, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoGeozone.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoGeozone, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoGeozone.CREATED_ON = new core_1.DateField('createdOn', FoGeozone, 'Edm.DateTime');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoGeozone.DESCRIPTION = new core_1.StringField('description', FoGeozone, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoGeozone.END_DATE = new core_1.DateField('endDate', FoGeozone, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoGeozone.EXTERNAL_CODE = new core_1.StringField('externalCode', FoGeozone, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoGeozone.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoGeozone, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoGeozone.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoGeozone, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoGeozone.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoGeozone, 'Edm.DateTime');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoGeozone.NAME = new core_1.StringField('name', FoGeozone, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoGeozone.START_DATE = new core_1.DateField('startDate', FoGeozone, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoGeozone.STATUS = new core_1.StringField('status', FoGeozone, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoGeozone.DESCRIPTION_TRANSLATION_NAV = new core_1.OneToOneLink('descriptionTranslationNav', FoGeozone, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoGeozone.NAME_TRANSLATION_NAV = new core_1.OneToOneLink('nameTranslationNav', FoGeozone, FoTranslation_1.FoTranslation);
    /**
     * All fields of the FoGeozone entity.
     */
    FoGeozone._allFields = [
        FoGeozone.ADJUSTMENT_PERCENTAGE,
        FoGeozone.CREATED_BY,
        FoGeozone.CREATED_DATE_TIME,
        FoGeozone.CREATED_ON,
        FoGeozone.DESCRIPTION,
        FoGeozone.END_DATE,
        FoGeozone.EXTERNAL_CODE,
        FoGeozone.LAST_MODIFIED_BY,
        FoGeozone.LAST_MODIFIED_DATE_TIME,
        FoGeozone.LAST_MODIFIED_ON,
        FoGeozone.NAME,
        FoGeozone.START_DATE,
        FoGeozone.STATUS,
        FoGeozone.DESCRIPTION_TRANSLATION_NAV,
        FoGeozone.NAME_TRANSLATION_NAV
    ];
    /**
     * All fields selector.
     */
    FoGeozone.ALL_FIELDS = new core_1.AllFields('*', FoGeozone);
    /**
     * All key fields of the FoGeozone entity.
     */
    FoGeozone._keyFields = [FoGeozone.EXTERNAL_CODE, FoGeozone.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoGeozone.
     */
    FoGeozone._keys = FoGeozone._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoGeozone = exports.FoGeozone || (exports.FoGeozone = {}));
exports.FoGeozone = FoGeozone;
//# sourceMappingURL=FoGeozone.js.map