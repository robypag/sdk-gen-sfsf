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
var FoPayGradeRequestBuilder_1 = require("./FoPayGradeRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOPayGrade" of service "SFOData".
 */
var FoPayGrade = /** @class */ (function (_super) {
    __extends(FoPayGrade, _super);
    function FoPayGrade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoPayGrade`.
     * @returns A builder that constructs instances of entity type `FoPayGrade`.
     */
    FoPayGrade.builder = function () {
        return core_1.Entity.entityBuilder(FoPayGrade);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoPayGrade` entity type.
     * @returns A `FoPayGrade` request builder.
     */
    FoPayGrade.requestBuilder = function () {
        return new FoPayGradeRequestBuilder_1.FoPayGradeRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoPayGrade`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoPayGrade`.
     */
    FoPayGrade.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoPayGrade);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoPayGrade.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoPayGrade.
     */
    FoPayGrade._entityName = 'FOPayGrade';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoPayGrade.
     */
    FoPayGrade._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoPayGrade._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoPayGrade;
}(core_1.Entity));
exports.FoPayGrade = FoPayGrade;
var FoTranslation_1 = require("./FoTranslation");
(function (FoPayGrade) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGrade.CREATED_BY = new core_1.StringField('createdBy', FoPayGrade, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGrade.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoPayGrade, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGrade.CREATED_ON = new core_1.DateField('createdOn', FoPayGrade, 'Edm.DateTime');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGrade.DESCRIPTION = new core_1.StringField('description', FoPayGrade, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGrade.END_DATE = new core_1.DateField('endDate', FoPayGrade, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGrade.EXTERNAL_CODE = new core_1.StringField('externalCode', FoPayGrade, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGrade.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoPayGrade, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGrade.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoPayGrade, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGrade.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoPayGrade, 'Edm.DateTime');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGrade.NAME = new core_1.StringField('name', FoPayGrade, 'Edm.String');
    /**
     * Static representation of the [[paygradeLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGrade.PAYGRADE_LEVEL = new core_1.BigNumberField('paygradeLevel', FoPayGrade, 'Edm.Int64');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGrade.START_DATE = new core_1.DateField('startDate', FoPayGrade, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGrade.STATUS = new core_1.StringField('status', FoPayGrade, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGrade.DESCRIPTION_TRANSLATION_NAV = new core_1.OneToOneLink('descriptionTranslationNav', FoPayGrade, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayGrade.NAME_TRANSLATION_NAV = new core_1.OneToOneLink('nameTranslationNav', FoPayGrade, FoTranslation_1.FoTranslation);
    /**
     * All fields of the FoPayGrade entity.
     */
    FoPayGrade._allFields = [
        FoPayGrade.CREATED_BY,
        FoPayGrade.CREATED_DATE_TIME,
        FoPayGrade.CREATED_ON,
        FoPayGrade.DESCRIPTION,
        FoPayGrade.END_DATE,
        FoPayGrade.EXTERNAL_CODE,
        FoPayGrade.LAST_MODIFIED_BY,
        FoPayGrade.LAST_MODIFIED_DATE_TIME,
        FoPayGrade.LAST_MODIFIED_ON,
        FoPayGrade.NAME,
        FoPayGrade.PAYGRADE_LEVEL,
        FoPayGrade.START_DATE,
        FoPayGrade.STATUS,
        FoPayGrade.DESCRIPTION_TRANSLATION_NAV,
        FoPayGrade.NAME_TRANSLATION_NAV
    ];
    /**
     * All fields selector.
     */
    FoPayGrade.ALL_FIELDS = new core_1.AllFields('*', FoPayGrade);
    /**
     * All key fields of the FoPayGrade entity.
     */
    FoPayGrade._keyFields = [FoPayGrade.EXTERNAL_CODE, FoPayGrade.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoPayGrade.
     */
    FoPayGrade._keys = FoPayGrade._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoPayGrade = exports.FoPayGrade || (exports.FoPayGrade = {}));
exports.FoPayGrade = FoPayGrade;
//# sourceMappingURL=FoPayGrade.js.map