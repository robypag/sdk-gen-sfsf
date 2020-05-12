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
var FoPayRangeRequestBuilder_1 = require("./FoPayRangeRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOPayRange" of service "SFOData".
 */
var FoPayRange = /** @class */ (function (_super) {
    __extends(FoPayRange, _super);
    function FoPayRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoPayRange`.
     * @returns A builder that constructs instances of entity type `FoPayRange`.
     */
    FoPayRange.builder = function () {
        return core_1.Entity.entityBuilder(FoPayRange);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoPayRange` entity type.
     * @returns A `FoPayRange` request builder.
     */
    FoPayRange.requestBuilder = function () {
        return new FoPayRangeRequestBuilder_1.FoPayRangeRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoPayRange`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoPayRange`.
     */
    FoPayRange.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoPayRange);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoPayRange.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoPayRange.
     */
    FoPayRange._entityName = 'FOPayRange';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoPayRange.
     */
    FoPayRange._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoPayRange._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoPayRange;
}(core_1.Entity));
exports.FoPayRange = FoPayRange;
var FoCompany_1 = require("./FoCompany");
var FoTranslation_1 = require("./FoTranslation");
var FoFrequency_1 = require("./FoFrequency");
var FoGeozone_1 = require("./FoGeozone");
var FoPayGrade_1 = require("./FoPayGrade");
(function (FoPayRange) {
    /**
     * Static representation of the [[companyFlx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayRange.COMPANY_FLX = new core_1.StringField('companyFlx', FoPayRange, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayRange.CREATED_BY = new core_1.StringField('createdBy', FoPayRange, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayRange.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoPayRange, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayRange.CREATED_ON = new core_1.DateField('createdOn', FoPayRange, 'Edm.DateTime');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayRange.CURRENCY = new core_1.StringField('currency', FoPayRange, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayRange.DESCRIPTION = new core_1.StringField('description', FoPayRange, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayRange.END_DATE = new core_1.DateField('endDate', FoPayRange, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayRange.EXTERNAL_CODE = new core_1.StringField('externalCode', FoPayRange, 'Edm.String');
    /**
     * Static representation of the [[frequencyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayRange.FREQUENCY_CODE = new core_1.StringField('frequencyCode', FoPayRange, 'Edm.String');
    /**
     * Static representation of the [[geozoneFlx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayRange.GEOZONE_FLX = new core_1.StringField('geozoneFlx', FoPayRange, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayRange.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoPayRange, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayRange.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoPayRange, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayRange.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoPayRange, 'Edm.DateTime');
    /**
     * Static representation of the [[maximumPay]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayRange.MAXIMUM_PAY = new core_1.BigNumberField('maximumPay', FoPayRange, 'Edm.Decimal');
    /**
     * Static representation of the [[midPoint]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayRange.MID_POINT = new core_1.BigNumberField('midPoint', FoPayRange, 'Edm.Decimal');
    /**
     * Static representation of the [[minimumPay]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayRange.MINIMUM_PAY = new core_1.BigNumberField('minimumPay', FoPayRange, 'Edm.Decimal');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayRange.NAME = new core_1.StringField('name', FoPayRange, 'Edm.String');
    /**
     * Static representation of the [[payGradeFlx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayRange.PAY_GRADE_FLX = new core_1.StringField('payGradeFlx', FoPayRange, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayRange.START_DATE = new core_1.DateField('startDate', FoPayRange, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayRange.STATUS = new core_1.StringField('status', FoPayRange, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[companyFlxNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayRange.COMPANY_FLX_NAV = new core_1.OneToOneLink('companyFlxNav', FoPayRange, FoCompany_1.FoCompany);
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayRange.DESCRIPTION_TRANSLATION_NAV = new core_1.OneToOneLink('descriptionTranslationNav', FoPayRange, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-one navigation property [[frequencyCodeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayRange.FREQUENCY_CODE_NAV = new core_1.OneToOneLink('frequencyCodeNav', FoPayRange, FoFrequency_1.FoFrequency);
    /**
     * Static representation of the one-to-one navigation property [[geozoneFlxNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayRange.GEOZONE_FLX_NAV = new core_1.OneToOneLink('geozoneFlxNav', FoPayRange, FoGeozone_1.FoGeozone);
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayRange.NAME_TRANSLATION_NAV = new core_1.OneToOneLink('nameTranslationNav', FoPayRange, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-one navigation property [[payGradeFlxNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayRange.PAY_GRADE_FLX_NAV = new core_1.OneToOneLink('payGradeFlxNav', FoPayRange, FoPayGrade_1.FoPayGrade);
    /**
     * All fields of the FoPayRange entity.
     */
    FoPayRange._allFields = [
        FoPayRange.COMPANY_FLX,
        FoPayRange.CREATED_BY,
        FoPayRange.CREATED_DATE_TIME,
        FoPayRange.CREATED_ON,
        FoPayRange.CURRENCY,
        FoPayRange.DESCRIPTION,
        FoPayRange.END_DATE,
        FoPayRange.EXTERNAL_CODE,
        FoPayRange.FREQUENCY_CODE,
        FoPayRange.GEOZONE_FLX,
        FoPayRange.LAST_MODIFIED_BY,
        FoPayRange.LAST_MODIFIED_DATE_TIME,
        FoPayRange.LAST_MODIFIED_ON,
        FoPayRange.MAXIMUM_PAY,
        FoPayRange.MID_POINT,
        FoPayRange.MINIMUM_PAY,
        FoPayRange.NAME,
        FoPayRange.PAY_GRADE_FLX,
        FoPayRange.START_DATE,
        FoPayRange.STATUS,
        FoPayRange.COMPANY_FLX_NAV,
        FoPayRange.DESCRIPTION_TRANSLATION_NAV,
        FoPayRange.FREQUENCY_CODE_NAV,
        FoPayRange.GEOZONE_FLX_NAV,
        FoPayRange.NAME_TRANSLATION_NAV,
        FoPayRange.PAY_GRADE_FLX_NAV
    ];
    /**
     * All fields selector.
     */
    FoPayRange.ALL_FIELDS = new core_1.AllFields('*', FoPayRange);
    /**
     * All key fields of the FoPayRange entity.
     */
    FoPayRange._keyFields = [FoPayRange.EXTERNAL_CODE, FoPayRange.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoPayRange.
     */
    FoPayRange._keys = FoPayRange._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoPayRange = exports.FoPayRange || (exports.FoPayRange = {}));
exports.FoPayRange = FoPayRange;
//# sourceMappingURL=FoPayRange.js.map