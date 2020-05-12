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
var Background_OutsideWorkExperienceRequestBuilder_1 = require("./Background_OutsideWorkExperienceRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Background_OutsideWorkExperience" of service "SFOData".
 */
var Background_OutsideWorkExperience = /** @class */ (function (_super) {
    __extends(Background_OutsideWorkExperience, _super);
    function Background_OutsideWorkExperience() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Background_OutsideWorkExperience`.
     * @returns A builder that constructs instances of entity type `Background_OutsideWorkExperience`.
     */
    Background_OutsideWorkExperience.builder = function () {
        return core_1.Entity.entityBuilder(Background_OutsideWorkExperience);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Background_OutsideWorkExperience` entity type.
     * @returns A `Background_OutsideWorkExperience` request builder.
     */
    Background_OutsideWorkExperience.requestBuilder = function () {
        return new Background_OutsideWorkExperienceRequestBuilder_1.Background_OutsideWorkExperienceRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_OutsideWorkExperience`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_OutsideWorkExperience`.
     */
    Background_OutsideWorkExperience.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Background_OutsideWorkExperience);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Background_OutsideWorkExperience.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Background_OutsideWorkExperience.
     */
    Background_OutsideWorkExperience._entityName = 'Background_OutsideWorkExperience';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_OutsideWorkExperience.
     */
    Background_OutsideWorkExperience._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Background_OutsideWorkExperience._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Background_OutsideWorkExperience;
}(core_1.Entity));
exports.Background_OutsideWorkExperience = Background_OutsideWorkExperience;
var PicklistOption_1 = require("./PicklistOption");
var User_1 = require("./User");
(function (Background_OutsideWorkExperience) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_OutsideWorkExperience.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', Background_OutsideWorkExperience, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_OutsideWorkExperience.BG_ORDER_POS = new core_1.BigNumberField('bgOrderPos', Background_OutsideWorkExperience, 'Edm.Int64');
    /**
     * Static representation of the [[businessType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_OutsideWorkExperience.BUSINESS_TYPE = new core_1.StringField('businessType', Background_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_OutsideWorkExperience.COUNTRY = new core_1.StringField('country', Background_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[employer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_OutsideWorkExperience.EMPLOYER = new core_1.StringField('employer', Background_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_OutsideWorkExperience.END_DATE = new core_1.DateField('endDate', Background_OutsideWorkExperience, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_OutsideWorkExperience.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', Background_OutsideWorkExperience, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[presentEmployer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_OutsideWorkExperience.PRESENT_EMPLOYER = new core_1.StringField('presentEmployer', Background_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_OutsideWorkExperience.START_DATE = new core_1.DateField('startDate', Background_OutsideWorkExperience, 'Edm.DateTime');
    /**
     * Static representation of the [[startTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_OutsideWorkExperience.START_TITLE = new core_1.StringField('startTitle', Background_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_OutsideWorkExperience.USER_ID = new core_1.StringField('userId', Background_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[businessTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_OutsideWorkExperience.BUSINESS_TYPE_NAV = new core_1.OneToOneLink('businessTypeNav', Background_OutsideWorkExperience, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_OutsideWorkExperience.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', Background_OutsideWorkExperience, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[presentEmployerNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_OutsideWorkExperience.PRESENT_EMPLOYER_NAV = new core_1.OneToOneLink('presentEmployerNav', Background_OutsideWorkExperience, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_OutsideWorkExperience.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', Background_OutsideWorkExperience, User_1.User);
    /**
     * All fields of the Background_OutsideWorkExperience entity.
     */
    Background_OutsideWorkExperience._allFields = [
        Background_OutsideWorkExperience.BACKGROUND_ELEMENT_ID,
        Background_OutsideWorkExperience.BG_ORDER_POS,
        Background_OutsideWorkExperience.BUSINESS_TYPE,
        Background_OutsideWorkExperience.COUNTRY,
        Background_OutsideWorkExperience.EMPLOYER,
        Background_OutsideWorkExperience.END_DATE,
        Background_OutsideWorkExperience.LAST_MODIFIED_DATE,
        Background_OutsideWorkExperience.PRESENT_EMPLOYER,
        Background_OutsideWorkExperience.START_DATE,
        Background_OutsideWorkExperience.START_TITLE,
        Background_OutsideWorkExperience.USER_ID,
        Background_OutsideWorkExperience.BUSINESS_TYPE_NAV,
        Background_OutsideWorkExperience.COUNTRY_NAV,
        Background_OutsideWorkExperience.PRESENT_EMPLOYER_NAV,
        Background_OutsideWorkExperience.USER_ID_NAV
    ];
    /**
     * All fields selector.
     */
    Background_OutsideWorkExperience.ALL_FIELDS = new core_1.AllFields('*', Background_OutsideWorkExperience);
    /**
     * All key fields of the Background_OutsideWorkExperience entity.
     */
    Background_OutsideWorkExperience._keyFields = [Background_OutsideWorkExperience.BACKGROUND_ELEMENT_ID, Background_OutsideWorkExperience.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property Background_OutsideWorkExperience.
     */
    Background_OutsideWorkExperience._keys = Background_OutsideWorkExperience._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Background_OutsideWorkExperience = exports.Background_OutsideWorkExperience || (exports.Background_OutsideWorkExperience = {}));
exports.Background_OutsideWorkExperience = Background_OutsideWorkExperience;
//# sourceMappingURL=Background_OutsideWorkExperience.js.map