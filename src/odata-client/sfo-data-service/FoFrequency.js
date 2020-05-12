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
var FoFrequencyRequestBuilder_1 = require("./FoFrequencyRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOFrequency" of service "SFOData".
 */
var FoFrequency = /** @class */ (function (_super) {
    __extends(FoFrequency, _super);
    function FoFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoFrequency`.
     * @returns A builder that constructs instances of entity type `FoFrequency`.
     */
    FoFrequency.builder = function () {
        return core_1.Entity.entityBuilder(FoFrequency);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoFrequency` entity type.
     * @returns A `FoFrequency` request builder.
     */
    FoFrequency.requestBuilder = function () {
        return new FoFrequencyRequestBuilder_1.FoFrequencyRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoFrequency`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoFrequency`.
     */
    FoFrequency.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoFrequency);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoFrequency.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoFrequency.
     */
    FoFrequency._entityName = 'FOFrequency';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoFrequency.
     */
    FoFrequency._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoFrequency._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoFrequency;
}(core_1.Entity));
exports.FoFrequency = FoFrequency;
var FoTranslation_1 = require("./FoTranslation");
(function (FoFrequency) {
    /**
     * Static representation of the [[annualizationFactor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoFrequency.ANNUALIZATION_FACTOR = new core_1.NumberField('annualizationFactor', FoFrequency, 'Edm.Double');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoFrequency.CREATED_BY = new core_1.StringField('createdBy', FoFrequency, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoFrequency.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoFrequency, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoFrequency.CREATED_ON = new core_1.DateField('createdOn', FoFrequency, 'Edm.DateTime');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoFrequency.DESCRIPTION = new core_1.StringField('description', FoFrequency, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoFrequency.EXTERNAL_CODE = new core_1.StringField('externalCode', FoFrequency, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoFrequency.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoFrequency, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoFrequency.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoFrequency, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoFrequency.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoFrequency, 'Edm.DateTime');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoFrequency.NAME = new core_1.StringField('name', FoFrequency, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoFrequency.DESCRIPTION_TRANSLATION_NAV = new core_1.OneToOneLink('descriptionTranslationNav', FoFrequency, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoFrequency.NAME_TRANSLATION_NAV = new core_1.OneToOneLink('nameTranslationNav', FoFrequency, FoTranslation_1.FoTranslation);
    /**
     * All fields of the FoFrequency entity.
     */
    FoFrequency._allFields = [
        FoFrequency.ANNUALIZATION_FACTOR,
        FoFrequency.CREATED_BY,
        FoFrequency.CREATED_DATE_TIME,
        FoFrequency.CREATED_ON,
        FoFrequency.DESCRIPTION,
        FoFrequency.EXTERNAL_CODE,
        FoFrequency.LAST_MODIFIED_BY,
        FoFrequency.LAST_MODIFIED_DATE_TIME,
        FoFrequency.LAST_MODIFIED_ON,
        FoFrequency.NAME,
        FoFrequency.DESCRIPTION_TRANSLATION_NAV,
        FoFrequency.NAME_TRANSLATION_NAV
    ];
    /**
     * All fields selector.
     */
    FoFrequency.ALL_FIELDS = new core_1.AllFields('*', FoFrequency);
    /**
     * All key fields of the FoFrequency entity.
     */
    FoFrequency._keyFields = [FoFrequency.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property FoFrequency.
     */
    FoFrequency._keys = FoFrequency._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoFrequency = exports.FoFrequency || (exports.FoFrequency = {}));
exports.FoFrequency = FoFrequency;
//# sourceMappingURL=FoFrequency.js.map