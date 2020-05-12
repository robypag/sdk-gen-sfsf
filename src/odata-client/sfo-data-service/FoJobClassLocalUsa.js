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
var FoJobClassLocalUsaRequestBuilder_1 = require("./FoJobClassLocalUsaRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOJobClassLocalUSA" of service "SFOData".
 */
var FoJobClassLocalUsa = /** @class */ (function (_super) {
    __extends(FoJobClassLocalUsa, _super);
    function FoJobClassLocalUsa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoJobClassLocalUsa`.
     * @returns A builder that constructs instances of entity type `FoJobClassLocalUsa`.
     */
    FoJobClassLocalUsa.builder = function () {
        return core_1.Entity.entityBuilder(FoJobClassLocalUsa);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoJobClassLocalUsa` entity type.
     * @returns A `FoJobClassLocalUsa` request builder.
     */
    FoJobClassLocalUsa.requestBuilder = function () {
        return new FoJobClassLocalUsaRequestBuilder_1.FoJobClassLocalUsaRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoJobClassLocalUsa`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoJobClassLocalUsa`.
     */
    FoJobClassLocalUsa.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoJobClassLocalUsa);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoJobClassLocalUsa.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoJobClassLocalUsa.
     */
    FoJobClassLocalUsa._entityName = 'FOJobClassLocalUSA';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoJobClassLocalUsa.
     */
    FoJobClassLocalUsa._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoJobClassLocalUsa._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoJobClassLocalUsa;
}(core_1.Entity));
exports.FoJobClassLocalUsa = FoJobClassLocalUsa;
var Territory_1 = require("./Territory");
var PickListValueV2_1 = require("./PickListValueV2");
var PicklistOption_1 = require("./PicklistOption");
(function (FoJobClassLocalUsa) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalUsa.COUNTRY = new core_1.StringField('country', FoJobClassLocalUsa, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalUsa.CREATED_BY = new core_1.StringField('createdBy', FoJobClassLocalUsa, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalUsa.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoJobClassLocalUsa, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalUsa.CREATED_ON = new core_1.DateField('createdOn', FoJobClassLocalUsa, 'Edm.DateTime');
    /**
     * Static representation of the [[custWorkersCompCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalUsa.CUST_WORKERS_COMP_CODE = new core_1.StringField('cust_WorkersCompCode', FoJobClassLocalUsa, 'Edm.String');
    /**
     * Static representation of the [[eeo1JobCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalUsa.EEO_1_JOB_CATEGORY = new core_1.StringField('eeo1JobCategory', FoJobClassLocalUsa, 'Edm.String');
    /**
     * Static representation of the [[eeoJobGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalUsa.EEO_JOB_GROUP = new core_1.StringField('eeoJobGroup', FoJobClassLocalUsa, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalUsa.END_DATE = new core_1.DateField('endDate', FoJobClassLocalUsa, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalUsa.EXTERNAL_CODE = new core_1.StringField('externalCode', FoJobClassLocalUsa, 'Edm.String');
    /**
     * Static representation of the [[flsaStatusUsa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalUsa.FLSA_STATUS_USA = new core_1.StringField('flsaStatusUSA', FoJobClassLocalUsa, 'Edm.String');
    /**
     * Static representation of the [[genericNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalUsa.GENERIC_NUMBER_1 = new core_1.BigNumberField('genericNumber1', FoJobClassLocalUsa, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalUsa.GENERIC_NUMBER_5 = new core_1.BigNumberField('genericNumber5', FoJobClassLocalUsa, 'Edm.Int64');
    /**
     * Static representation of the [[genericNumber6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalUsa.GENERIC_NUMBER_6 = new core_1.BigNumberField('genericNumber6', FoJobClassLocalUsa, 'Edm.Int64');
    /**
     * Static representation of the [[genericString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalUsa.GENERIC_STRING_1 = new core_1.StringField('genericString1', FoJobClassLocalUsa, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalUsa.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoJobClassLocalUsa, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalUsa.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoJobClassLocalUsa, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalUsa.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoJobClassLocalUsa, 'Edm.DateTime');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalUsa.START_DATE = new core_1.DateField('startDate', FoJobClassLocalUsa, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalUsa.STATUS = new core_1.StringField('status', FoJobClassLocalUsa, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalUsa.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', FoJobClassLocalUsa, Territory_1.Territory);
    /**
     * Static representation of the one-to-many navigation property [[eeo1JobCategoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalUsa.EEO_1_JOB_CATEGORY_NAV = new core_1.Link('eeo1JobCategoryNav', FoJobClassLocalUsa, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-many navigation property [[eeoJobGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalUsa.EEO_JOB_GROUP_NAV = new core_1.Link('eeoJobGroupNav', FoJobClassLocalUsa, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-many navigation property [[flsaStatusUsaNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalUsa.FLSA_STATUS_USA_NAV = new core_1.Link('flsaStatusUSANav', FoJobClassLocalUsa, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalUsa.GENERIC_NUMBER_1_NAV = new core_1.OneToOneLink('genericNumber1Nav', FoJobClassLocalUsa, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber5Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalUsa.GENERIC_NUMBER_5_NAV = new core_1.OneToOneLink('genericNumber5Nav', FoJobClassLocalUsa, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[genericNumber6Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoJobClassLocalUsa.GENERIC_NUMBER_6_NAV = new core_1.OneToOneLink('genericNumber6Nav', FoJobClassLocalUsa, PicklistOption_1.PicklistOption);
    /**
     * All fields of the FoJobClassLocalUsa entity.
     */
    FoJobClassLocalUsa._allFields = [
        FoJobClassLocalUsa.COUNTRY,
        FoJobClassLocalUsa.CREATED_BY,
        FoJobClassLocalUsa.CREATED_DATE_TIME,
        FoJobClassLocalUsa.CREATED_ON,
        FoJobClassLocalUsa.CUST_WORKERS_COMP_CODE,
        FoJobClassLocalUsa.EEO_1_JOB_CATEGORY,
        FoJobClassLocalUsa.EEO_JOB_GROUP,
        FoJobClassLocalUsa.END_DATE,
        FoJobClassLocalUsa.EXTERNAL_CODE,
        FoJobClassLocalUsa.FLSA_STATUS_USA,
        FoJobClassLocalUsa.GENERIC_NUMBER_1,
        FoJobClassLocalUsa.GENERIC_NUMBER_5,
        FoJobClassLocalUsa.GENERIC_NUMBER_6,
        FoJobClassLocalUsa.GENERIC_STRING_1,
        FoJobClassLocalUsa.LAST_MODIFIED_BY,
        FoJobClassLocalUsa.LAST_MODIFIED_DATE_TIME,
        FoJobClassLocalUsa.LAST_MODIFIED_ON,
        FoJobClassLocalUsa.START_DATE,
        FoJobClassLocalUsa.STATUS,
        FoJobClassLocalUsa.COUNTRY_NAV,
        FoJobClassLocalUsa.EEO_1_JOB_CATEGORY_NAV,
        FoJobClassLocalUsa.EEO_JOB_GROUP_NAV,
        FoJobClassLocalUsa.FLSA_STATUS_USA_NAV,
        FoJobClassLocalUsa.GENERIC_NUMBER_1_NAV,
        FoJobClassLocalUsa.GENERIC_NUMBER_5_NAV,
        FoJobClassLocalUsa.GENERIC_NUMBER_6_NAV
    ];
    /**
     * All fields selector.
     */
    FoJobClassLocalUsa.ALL_FIELDS = new core_1.AllFields('*', FoJobClassLocalUsa);
    /**
     * All key fields of the FoJobClassLocalUsa entity.
     */
    FoJobClassLocalUsa._keyFields = [FoJobClassLocalUsa.COUNTRY, FoJobClassLocalUsa.EXTERNAL_CODE, FoJobClassLocalUsa.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoJobClassLocalUsa.
     */
    FoJobClassLocalUsa._keys = FoJobClassLocalUsa._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoJobClassLocalUsa = exports.FoJobClassLocalUsa || (exports.FoJobClassLocalUsa = {}));
exports.FoJobClassLocalUsa = FoJobClassLocalUsa;
//# sourceMappingURL=FoJobClassLocalUsa.js.map