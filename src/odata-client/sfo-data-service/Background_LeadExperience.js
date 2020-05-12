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
var Background_LeadExperienceRequestBuilder_1 = require("./Background_LeadExperienceRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Background_LeadExperience" of service "SFOData".
 */
var Background_LeadExperience = /** @class */ (function (_super) {
    __extends(Background_LeadExperience, _super);
    function Background_LeadExperience() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Background_LeadExperience`.
     * @returns A builder that constructs instances of entity type `Background_LeadExperience`.
     */
    Background_LeadExperience.builder = function () {
        return core_1.Entity.entityBuilder(Background_LeadExperience);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Background_LeadExperience` entity type.
     * @returns A `Background_LeadExperience` request builder.
     */
    Background_LeadExperience.requestBuilder = function () {
        return new Background_LeadExperienceRequestBuilder_1.Background_LeadExperienceRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_LeadExperience`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_LeadExperience`.
     */
    Background_LeadExperience.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Background_LeadExperience);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Background_LeadExperience.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Background_LeadExperience.
     */
    Background_LeadExperience._entityName = 'Background_LeadExperience';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_LeadExperience.
     */
    Background_LeadExperience._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Background_LeadExperience._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Background_LeadExperience;
}(core_1.Entity));
exports.Background_LeadExperience = Background_LeadExperience;
var PicklistOption_1 = require("./PicklistOption");
var User_1 = require("./User");
(function (Background_LeadExperience) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_LeadExperience.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', Background_LeadExperience, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_LeadExperience.BG_ORDER_POS = new core_1.BigNumberField('bgOrderPos', Background_LeadExperience, 'Edm.Int64');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_LeadExperience.COMMENTS = new core_1.StringField('comments', Background_LeadExperience, 'Edm.String');
    /**
     * Static representation of the [[dollars]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_LeadExperience.DOLLARS = new core_1.NumberField('dollars', Background_LeadExperience, 'Edm.Int32');
    /**
     * Static representation of the [[experience]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_LeadExperience.EXPERIENCE = new core_1.StringField('experience', Background_LeadExperience, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_LeadExperience.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', Background_LeadExperience, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[people]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_LeadExperience.PEOPLE = new core_1.NumberField('people', Background_LeadExperience, 'Edm.Int32');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_LeadExperience.USER_ID = new core_1.StringField('userId', Background_LeadExperience, 'Edm.String');
    /**
     * Static representation of the [[years]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_LeadExperience.YEARS = new core_1.NumberField('years', Background_LeadExperience, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[experienceNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_LeadExperience.EXPERIENCE_NAV = new core_1.OneToOneLink('experienceNav', Background_LeadExperience, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_LeadExperience.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', Background_LeadExperience, User_1.User);
    /**
     * All fields of the Background_LeadExperience entity.
     */
    Background_LeadExperience._allFields = [
        Background_LeadExperience.BACKGROUND_ELEMENT_ID,
        Background_LeadExperience.BG_ORDER_POS,
        Background_LeadExperience.COMMENTS,
        Background_LeadExperience.DOLLARS,
        Background_LeadExperience.EXPERIENCE,
        Background_LeadExperience.LAST_MODIFIED_DATE,
        Background_LeadExperience.PEOPLE,
        Background_LeadExperience.USER_ID,
        Background_LeadExperience.YEARS,
        Background_LeadExperience.EXPERIENCE_NAV,
        Background_LeadExperience.USER_ID_NAV
    ];
    /**
     * All fields selector.
     */
    Background_LeadExperience.ALL_FIELDS = new core_1.AllFields('*', Background_LeadExperience);
    /**
     * All key fields of the Background_LeadExperience entity.
     */
    Background_LeadExperience._keyFields = [Background_LeadExperience.BACKGROUND_ELEMENT_ID, Background_LeadExperience.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property Background_LeadExperience.
     */
    Background_LeadExperience._keys = Background_LeadExperience._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Background_LeadExperience = exports.Background_LeadExperience || (exports.Background_LeadExperience = {}));
exports.Background_LeadExperience = Background_LeadExperience;
//# sourceMappingURL=Background_LeadExperience.js.map