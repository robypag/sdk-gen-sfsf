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
var FoLocationRequestBuilder_1 = require("./FoLocationRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOLocation" of service "SFOData".
 */
var FoLocation = /** @class */ (function (_super) {
    __extends(FoLocation, _super);
    function FoLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoLocation`.
     * @returns A builder that constructs instances of entity type `FoLocation`.
     */
    FoLocation.builder = function () {
        return core_1.Entity.entityBuilder(FoLocation);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoLocation` entity type.
     * @returns A `FoLocation` request builder.
     */
    FoLocation.requestBuilder = function () {
        return new FoLocationRequestBuilder_1.FoLocationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoLocation`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoLocation`.
     */
    FoLocation.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoLocation);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoLocation.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoLocation.
     */
    FoLocation._entityName = 'FOLocation';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoLocation.
     */
    FoLocation._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoLocation._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoLocation;
}(core_1.Entity));
exports.FoLocation = FoLocation;
var FoCorporateAddressDeflt_1 = require("./FoCorporateAddressDeflt");
var FoCompany_1 = require("./FoCompany");
var FoTranslation_1 = require("./FoTranslation");
var FoGeozone_1 = require("./FoGeozone");
var FoLocationGroup_1 = require("./FoLocationGroup");
(function (FoLocation) {
    /**
     * Static representation of the [[addressAddress1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.ADDRESS_ADDRESS_1 = new core_1.StringField('addressAddress1', FoLocation, 'Edm.String');
    /**
     * Static representation of the [[addressAddress10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.ADDRESS_ADDRESS_10 = new core_1.StringField('addressAddress10', FoLocation, 'Edm.String');
    /**
     * Static representation of the [[addressAddress11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.ADDRESS_ADDRESS_11 = new core_1.StringField('addressAddress11', FoLocation, 'Edm.String');
    /**
     * Static representation of the [[addressAddress2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.ADDRESS_ADDRESS_2 = new core_1.StringField('addressAddress2', FoLocation, 'Edm.String');
    /**
     * Static representation of the [[addressAddress3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.ADDRESS_ADDRESS_3 = new core_1.StringField('addressAddress3', FoLocation, 'Edm.String');
    /**
     * Static representation of the [[addressAddress4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.ADDRESS_ADDRESS_4 = new core_1.StringField('addressAddress4', FoLocation, 'Edm.String');
    /**
     * Static representation of the [[addressAddress5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.ADDRESS_ADDRESS_5 = new core_1.StringField('addressAddress5', FoLocation, 'Edm.String');
    /**
     * Static representation of the [[addressAddress6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.ADDRESS_ADDRESS_6 = new core_1.StringField('addressAddress6', FoLocation, 'Edm.String');
    /**
     * Static representation of the [[addressAddress7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.ADDRESS_ADDRESS_7 = new core_1.StringField('addressAddress7', FoLocation, 'Edm.String');
    /**
     * Static representation of the [[addressAddress8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.ADDRESS_ADDRESS_8 = new core_1.StringField('addressAddress8', FoLocation, 'Edm.String');
    /**
     * Static representation of the [[addressAddress9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.ADDRESS_ADDRESS_9 = new core_1.StringField('addressAddress9', FoLocation, 'Edm.String');
    /**
     * Static representation of the [[addressCity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.ADDRESS_CITY = new core_1.StringField('addressCity', FoLocation, 'Edm.String');
    /**
     * Static representation of the [[addressCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.ADDRESS_COUNTRY = new core_1.StringField('addressCountry', FoLocation, 'Edm.String');
    /**
     * Static representation of the [[addressCounty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.ADDRESS_COUNTY = new core_1.StringField('addressCounty', FoLocation, 'Edm.String');
    /**
     * Static representation of the [[addressProvince]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.ADDRESS_PROVINCE = new core_1.StringField('addressProvince', FoLocation, 'Edm.String');
    /**
     * Static representation of the [[addressState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.ADDRESS_STATE = new core_1.StringField('addressState', FoLocation, 'Edm.String');
    /**
     * Static representation of the [[addressZipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.ADDRESS_ZIP_CODE = new core_1.StringField('addressZipCode', FoLocation, 'Edm.String');
    /**
     * Static representation of the [[companyFlx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.COMPANY_FLX = new core_1.StringField('companyFlx', FoLocation, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.CREATED_BY = new core_1.StringField('createdBy', FoLocation, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoLocation, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.CREATED_ON = new core_1.DateField('createdOn', FoLocation, 'Edm.DateTime');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.DESCRIPTION = new core_1.StringField('description', FoLocation, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.END_DATE = new core_1.DateField('endDate', FoLocation, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.EXTERNAL_CODE = new core_1.StringField('externalCode', FoLocation, 'Edm.String');
    /**
     * Static representation of the [[geozoneFlx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.GEOZONE_FLX = new core_1.StringField('geozoneFlx', FoLocation, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoLocation, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoLocation, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoLocation, 'Edm.DateTime');
    /**
     * Static representation of the [[locationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.LOCATION_GROUP = new core_1.StringField('locationGroup', FoLocation, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.NAME = new core_1.StringField('name', FoLocation, 'Edm.String');
    /**
     * Static representation of the [[standardHours]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.STANDARD_HOURS = new core_1.NumberField('standardHours', FoLocation, 'Edm.Double');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.START_DATE = new core_1.DateField('startDate', FoLocation, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.STATUS = new core_1.StringField('status', FoLocation, 'Edm.String');
    /**
     * Static representation of the [[timezone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.TIMEZONE = new core_1.StringField('timezone', FoLocation, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[addressNavDeflt]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.ADDRESS_NAV_DEFLT = new core_1.OneToOneLink('addressNavDEFLT', FoLocation, FoCorporateAddressDeflt_1.FoCorporateAddressDeflt);
    /**
     * Static representation of the one-to-many navigation property [[companyFlxNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.COMPANY_FLX_NAV = new core_1.Link('companyFlxNav', FoLocation, FoCompany_1.FoCompany);
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.DESCRIPTION_TRANSLATION_NAV = new core_1.OneToOneLink('descriptionTranslationNav', FoLocation, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-one navigation property [[geozoneFlxNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.GEOZONE_FLX_NAV = new core_1.OneToOneLink('geozoneFlxNav', FoLocation, FoGeozone_1.FoGeozone);
    /**
     * Static representation of the one-to-one navigation property [[locationGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.LOCATION_GROUP_NAV = new core_1.OneToOneLink('locationGroupNav', FoLocation, FoLocationGroup_1.FoLocationGroup);
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocation.NAME_TRANSLATION_NAV = new core_1.OneToOneLink('nameTranslationNav', FoLocation, FoTranslation_1.FoTranslation);
    /**
     * All fields of the FoLocation entity.
     */
    FoLocation._allFields = [
        FoLocation.ADDRESS_ADDRESS_1,
        FoLocation.ADDRESS_ADDRESS_10,
        FoLocation.ADDRESS_ADDRESS_11,
        FoLocation.ADDRESS_ADDRESS_2,
        FoLocation.ADDRESS_ADDRESS_3,
        FoLocation.ADDRESS_ADDRESS_4,
        FoLocation.ADDRESS_ADDRESS_5,
        FoLocation.ADDRESS_ADDRESS_6,
        FoLocation.ADDRESS_ADDRESS_7,
        FoLocation.ADDRESS_ADDRESS_8,
        FoLocation.ADDRESS_ADDRESS_9,
        FoLocation.ADDRESS_CITY,
        FoLocation.ADDRESS_COUNTRY,
        FoLocation.ADDRESS_COUNTY,
        FoLocation.ADDRESS_PROVINCE,
        FoLocation.ADDRESS_STATE,
        FoLocation.ADDRESS_ZIP_CODE,
        FoLocation.COMPANY_FLX,
        FoLocation.CREATED_BY,
        FoLocation.CREATED_DATE_TIME,
        FoLocation.CREATED_ON,
        FoLocation.DESCRIPTION,
        FoLocation.END_DATE,
        FoLocation.EXTERNAL_CODE,
        FoLocation.GEOZONE_FLX,
        FoLocation.LAST_MODIFIED_BY,
        FoLocation.LAST_MODIFIED_DATE_TIME,
        FoLocation.LAST_MODIFIED_ON,
        FoLocation.LOCATION_GROUP,
        FoLocation.NAME,
        FoLocation.STANDARD_HOURS,
        FoLocation.START_DATE,
        FoLocation.STATUS,
        FoLocation.TIMEZONE,
        FoLocation.ADDRESS_NAV_DEFLT,
        FoLocation.COMPANY_FLX_NAV,
        FoLocation.DESCRIPTION_TRANSLATION_NAV,
        FoLocation.GEOZONE_FLX_NAV,
        FoLocation.LOCATION_GROUP_NAV,
        FoLocation.NAME_TRANSLATION_NAV
    ];
    /**
     * All fields selector.
     */
    FoLocation.ALL_FIELDS = new core_1.AllFields('*', FoLocation);
    /**
     * All key fields of the FoLocation entity.
     */
    FoLocation._keyFields = [FoLocation.EXTERNAL_CODE, FoLocation.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoLocation.
     */
    FoLocation._keys = FoLocation._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoLocation = exports.FoLocation || (exports.FoLocation = {}));
exports.FoLocation = FoLocation;
//# sourceMappingURL=FoLocation.js.map