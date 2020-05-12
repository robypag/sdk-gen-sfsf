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
var FoPayComponentRequestBuilder_1 = require("./FoPayComponentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOPayComponent" of service "SFOData".
 */
var FoPayComponent = /** @class */ (function (_super) {
    __extends(FoPayComponent, _super);
    function FoPayComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoPayComponent`.
     * @returns A builder that constructs instances of entity type `FoPayComponent`.
     */
    FoPayComponent.builder = function () {
        return core_1.Entity.entityBuilder(FoPayComponent);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoPayComponent` entity type.
     * @returns A `FoPayComponent` request builder.
     */
    FoPayComponent.requestBuilder = function () {
        return new FoPayComponentRequestBuilder_1.FoPayComponentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoPayComponent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoPayComponent`.
     */
    FoPayComponent.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoPayComponent);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoPayComponent.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoPayComponent.
     */
    FoPayComponent._entityName = 'FOPayComponent';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoPayComponent.
     */
    FoPayComponent._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoPayComponent._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoPayComponent;
}(core_1.Entity));
exports.FoPayComponent = FoPayComponent;
var FoPayComponentGroup_1 = require("./FoPayComponentGroup");
var FoCompany_1 = require("./FoCompany");
var FoTranslation_1 = require("./FoTranslation");
var FoFrequency_1 = require("./FoFrequency");
var PicklistOption_1 = require("./PicklistOption");
(function (FoPayComponent) {
    /**
     * Static representation of the [[basePayComponentGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.BASE_PAY_COMPONENT_GROUP = new core_1.StringField('basePayComponentGroup', FoPayComponent, 'Edm.String');
    /**
     * Static representation of the [[canOverride]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.CAN_OVERRIDE = new core_1.BooleanField('canOverride', FoPayComponent, 'Edm.Boolean');
    /**
     * Static representation of the [[companyFlx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.COMPANY_FLX = new core_1.StringField('companyFlx', FoPayComponent, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.CREATED_BY = new core_1.StringField('createdBy', FoPayComponent, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoPayComponent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.CREATED_ON = new core_1.DateField('createdOn', FoPayComponent, 'Edm.DateTime');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.CURRENCY = new core_1.StringField('currency', FoPayComponent, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.DESCRIPTION = new core_1.StringField('description', FoPayComponent, 'Edm.String');
    /**
     * Static representation of the [[displayOnSelfService]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.DISPLAY_ON_SELF_SERVICE = new core_1.BooleanField('displayOnSelfService', FoPayComponent, 'Edm.Boolean');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.END_DATE = new core_1.DateField('endDate', FoPayComponent, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.EXTERNAL_CODE = new core_1.StringField('externalCode', FoPayComponent, 'Edm.String');
    /**
     * Static representation of the [[frequencyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.FREQUENCY_CODE = new core_1.StringField('frequencyCode', FoPayComponent, 'Edm.String');
    /**
     * Static representation of the [[isEarning]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.IS_EARNING = new core_1.BooleanField('isEarning', FoPayComponent, 'Edm.Boolean');
    /**
     * Static representation of the [[isEndDatedPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.IS_END_DATED_PAYMENT = new core_1.BooleanField('isEndDatedPayment', FoPayComponent, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoPayComponent, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoPayComponent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoPayComponent, 'Edm.DateTime');
    /**
     * Static representation of the [[maxFractionDigits]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.MAX_FRACTION_DIGITS = new core_1.BigNumberField('maxFractionDigits', FoPayComponent, 'Edm.Int64');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.NAME = new core_1.StringField('name', FoPayComponent, 'Edm.String');
    /**
     * Static representation of the [[payComponentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.PAY_COMPONENT_TYPE = new core_1.StringField('payComponentType', FoPayComponent, 'Edm.String');
    /**
     * Static representation of the [[payComponentValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.PAY_COMPONENT_VALUE = new core_1.NumberField('payComponentValue', FoPayComponent, 'Edm.Double');
    /**
     * Static representation of the [[recurring]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.RECURRING = new core_1.BooleanField('recurring', FoPayComponent, 'Edm.Boolean');
    /**
     * Static representation of the [[selfServiceDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.SELF_SERVICE_DESCRIPTION = new core_1.StringField('selfServiceDescription', FoPayComponent, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.START_DATE = new core_1.DateField('startDate', FoPayComponent, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.STATUS = new core_1.StringField('status', FoPayComponent, 'Edm.String');
    /**
     * Static representation of the [[target]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.TARGET = new core_1.BooleanField('target', FoPayComponent, 'Edm.Boolean');
    /**
     * Static representation of the [[taxTreatment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.TAX_TREATMENT = new core_1.StringField('taxTreatment', FoPayComponent, 'Edm.String');
    /**
     * Static representation of the [[usedForCompPlanning]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.USED_FOR_COMP_PLANNING = new core_1.StringField('usedForCompPlanning', FoPayComponent, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[basePayComponentGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.BASE_PAY_COMPONENT_GROUP_NAV = new core_1.OneToOneLink('basePayComponentGroupNav', FoPayComponent, FoPayComponentGroup_1.FoPayComponentGroup);
    /**
     * Static representation of the one-to-many navigation property [[companyFlxNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.COMPANY_FLX_NAV = new core_1.Link('companyFlxNav', FoPayComponent, FoCompany_1.FoCompany);
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.DESCRIPTION_TRANSLATION_NAV = new core_1.OneToOneLink('descriptionTranslationNav', FoPayComponent, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-one navigation property [[frequencyCodeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.FREQUENCY_CODE_NAV = new core_1.OneToOneLink('frequencyCodeNav', FoPayComponent, FoFrequency_1.FoFrequency);
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.NAME_TRANSLATION_NAV = new core_1.OneToOneLink('nameTranslationNav', FoPayComponent, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-one navigation property [[taxTreatmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponent.TAX_TREATMENT_NAV = new core_1.OneToOneLink('taxTreatmentNav', FoPayComponent, PicklistOption_1.PicklistOption);
    /**
     * All fields of the FoPayComponent entity.
     */
    FoPayComponent._allFields = [
        FoPayComponent.BASE_PAY_COMPONENT_GROUP,
        FoPayComponent.CAN_OVERRIDE,
        FoPayComponent.COMPANY_FLX,
        FoPayComponent.CREATED_BY,
        FoPayComponent.CREATED_DATE_TIME,
        FoPayComponent.CREATED_ON,
        FoPayComponent.CURRENCY,
        FoPayComponent.DESCRIPTION,
        FoPayComponent.DISPLAY_ON_SELF_SERVICE,
        FoPayComponent.END_DATE,
        FoPayComponent.EXTERNAL_CODE,
        FoPayComponent.FREQUENCY_CODE,
        FoPayComponent.IS_EARNING,
        FoPayComponent.IS_END_DATED_PAYMENT,
        FoPayComponent.LAST_MODIFIED_BY,
        FoPayComponent.LAST_MODIFIED_DATE_TIME,
        FoPayComponent.LAST_MODIFIED_ON,
        FoPayComponent.MAX_FRACTION_DIGITS,
        FoPayComponent.NAME,
        FoPayComponent.PAY_COMPONENT_TYPE,
        FoPayComponent.PAY_COMPONENT_VALUE,
        FoPayComponent.RECURRING,
        FoPayComponent.SELF_SERVICE_DESCRIPTION,
        FoPayComponent.START_DATE,
        FoPayComponent.STATUS,
        FoPayComponent.TARGET,
        FoPayComponent.TAX_TREATMENT,
        FoPayComponent.USED_FOR_COMP_PLANNING,
        FoPayComponent.BASE_PAY_COMPONENT_GROUP_NAV,
        FoPayComponent.COMPANY_FLX_NAV,
        FoPayComponent.DESCRIPTION_TRANSLATION_NAV,
        FoPayComponent.FREQUENCY_CODE_NAV,
        FoPayComponent.NAME_TRANSLATION_NAV,
        FoPayComponent.TAX_TREATMENT_NAV
    ];
    /**
     * All fields selector.
     */
    FoPayComponent.ALL_FIELDS = new core_1.AllFields('*', FoPayComponent);
    /**
     * All key fields of the FoPayComponent entity.
     */
    FoPayComponent._keyFields = [FoPayComponent.EXTERNAL_CODE, FoPayComponent.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoPayComponent.
     */
    FoPayComponent._keys = FoPayComponent._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoPayComponent = exports.FoPayComponent || (exports.FoPayComponent = {}));
exports.FoPayComponent = FoPayComponent;
//# sourceMappingURL=FoPayComponent.js.map