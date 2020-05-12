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
var Background_InsideWorkExperienceRequestBuilder_1 = require("./Background_InsideWorkExperienceRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Background_InsideWorkExperience" of service "SFOData".
 */
var Background_InsideWorkExperience = /** @class */ (function (_super) {
    __extends(Background_InsideWorkExperience, _super);
    function Background_InsideWorkExperience() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Background_InsideWorkExperience`.
     * @returns A builder that constructs instances of entity type `Background_InsideWorkExperience`.
     */
    Background_InsideWorkExperience.builder = function () {
        return core_1.Entity.entityBuilder(Background_InsideWorkExperience);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Background_InsideWorkExperience` entity type.
     * @returns A `Background_InsideWorkExperience` request builder.
     */
    Background_InsideWorkExperience.requestBuilder = function () {
        return new Background_InsideWorkExperienceRequestBuilder_1.Background_InsideWorkExperienceRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_InsideWorkExperience`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_InsideWorkExperience`.
     */
    Background_InsideWorkExperience.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Background_InsideWorkExperience);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Background_InsideWorkExperience.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Background_InsideWorkExperience.
     */
    Background_InsideWorkExperience._entityName = 'Background_InsideWorkExperience';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_InsideWorkExperience.
     */
    Background_InsideWorkExperience._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Background_InsideWorkExperience._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Background_InsideWorkExperience;
}(core_1.Entity));
exports.Background_InsideWorkExperience = Background_InsideWorkExperience;
var User_1 = require("./User");
(function (Background_InsideWorkExperience) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_InsideWorkExperience.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', Background_InsideWorkExperience, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_InsideWorkExperience.BG_ORDER_POS = new core_1.BigNumberField('bgOrderPos', Background_InsideWorkExperience, 'Edm.Int64');
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_InsideWorkExperience.DEPARTMENT = new core_1.StringField('department', Background_InsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_InsideWorkExperience.END_DATE = new core_1.DateField('endDate', Background_InsideWorkExperience, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_InsideWorkExperience.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', Background_InsideWorkExperience, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_InsideWorkExperience.START_DATE = new core_1.DateField('startDate', Background_InsideWorkExperience, 'Edm.DateTime');
    /**
     * Static representation of the [[title]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_InsideWorkExperience.TITLE = new core_1.StringField('title', Background_InsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_InsideWorkExperience.USER_ID = new core_1.StringField('userId', Background_InsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_InsideWorkExperience.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', Background_InsideWorkExperience, User_1.User);
    /**
     * All fields of the Background_InsideWorkExperience entity.
     */
    Background_InsideWorkExperience._allFields = [
        Background_InsideWorkExperience.BACKGROUND_ELEMENT_ID,
        Background_InsideWorkExperience.BG_ORDER_POS,
        Background_InsideWorkExperience.DEPARTMENT,
        Background_InsideWorkExperience.END_DATE,
        Background_InsideWorkExperience.LAST_MODIFIED_DATE,
        Background_InsideWorkExperience.START_DATE,
        Background_InsideWorkExperience.TITLE,
        Background_InsideWorkExperience.USER_ID,
        Background_InsideWorkExperience.USER_ID_NAV
    ];
    /**
     * All fields selector.
     */
    Background_InsideWorkExperience.ALL_FIELDS = new core_1.AllFields('*', Background_InsideWorkExperience);
    /**
     * All key fields of the Background_InsideWorkExperience entity.
     */
    Background_InsideWorkExperience._keyFields = [Background_InsideWorkExperience.BACKGROUND_ELEMENT_ID, Background_InsideWorkExperience.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property Background_InsideWorkExperience.
     */
    Background_InsideWorkExperience._keys = Background_InsideWorkExperience._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Background_InsideWorkExperience = exports.Background_InsideWorkExperience || (exports.Background_InsideWorkExperience = {}));
exports.Background_InsideWorkExperience = Background_InsideWorkExperience;
//# sourceMappingURL=Background_InsideWorkExperience.js.map