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
var Background_FuncExperienceRequestBuilder_1 = require("./Background_FuncExperienceRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Background_FuncExperience" of service "SFOData".
 */
var Background_FuncExperience = /** @class */ (function (_super) {
    __extends(Background_FuncExperience, _super);
    function Background_FuncExperience() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Background_FuncExperience`.
     * @returns A builder that constructs instances of entity type `Background_FuncExperience`.
     */
    Background_FuncExperience.builder = function () {
        return core_1.Entity.entityBuilder(Background_FuncExperience);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Background_FuncExperience` entity type.
     * @returns A `Background_FuncExperience` request builder.
     */
    Background_FuncExperience.requestBuilder = function () {
        return new Background_FuncExperienceRequestBuilder_1.Background_FuncExperienceRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_FuncExperience`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_FuncExperience`.
     */
    Background_FuncExperience.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Background_FuncExperience);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Background_FuncExperience.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Background_FuncExperience.
     */
    Background_FuncExperience._entityName = 'Background_FuncExperience';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_FuncExperience.
     */
    Background_FuncExperience._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Background_FuncExperience._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Background_FuncExperience;
}(core_1.Entity));
exports.Background_FuncExperience = Background_FuncExperience;
var PicklistOption_1 = require("./PicklistOption");
var User_1 = require("./User");
(function (Background_FuncExperience) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_FuncExperience.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', Background_FuncExperience, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_FuncExperience.BG_ORDER_POS = new core_1.BigNumberField('bgOrderPos', Background_FuncExperience, 'Edm.Int64');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_FuncExperience.COMMENTS = new core_1.StringField('comments', Background_FuncExperience, 'Edm.String');
    /**
     * Static representation of the [[experience]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_FuncExperience.EXPERIENCE = new core_1.StringField('experience', Background_FuncExperience, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_FuncExperience.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', Background_FuncExperience, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_FuncExperience.USER_ID = new core_1.StringField('userId', Background_FuncExperience, 'Edm.String');
    /**
     * Static representation of the [[years]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_FuncExperience.YEARS = new core_1.NumberField('years', Background_FuncExperience, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[experienceNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_FuncExperience.EXPERIENCE_NAV = new core_1.OneToOneLink('experienceNav', Background_FuncExperience, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_FuncExperience.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', Background_FuncExperience, User_1.User);
    /**
     * All fields of the Background_FuncExperience entity.
     */
    Background_FuncExperience._allFields = [
        Background_FuncExperience.BACKGROUND_ELEMENT_ID,
        Background_FuncExperience.BG_ORDER_POS,
        Background_FuncExperience.COMMENTS,
        Background_FuncExperience.EXPERIENCE,
        Background_FuncExperience.LAST_MODIFIED_DATE,
        Background_FuncExperience.USER_ID,
        Background_FuncExperience.YEARS,
        Background_FuncExperience.EXPERIENCE_NAV,
        Background_FuncExperience.USER_ID_NAV
    ];
    /**
     * All fields selector.
     */
    Background_FuncExperience.ALL_FIELDS = new core_1.AllFields('*', Background_FuncExperience);
    /**
     * All key fields of the Background_FuncExperience entity.
     */
    Background_FuncExperience._keyFields = [Background_FuncExperience.BACKGROUND_ELEMENT_ID, Background_FuncExperience.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property Background_FuncExperience.
     */
    Background_FuncExperience._keys = Background_FuncExperience._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Background_FuncExperience = exports.Background_FuncExperience || (exports.Background_FuncExperience = {}));
exports.Background_FuncExperience = Background_FuncExperience;
//# sourceMappingURL=Background_FuncExperience.js.map