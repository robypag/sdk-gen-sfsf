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
var Background_CoursesRequestBuilder_1 = require("./Background_CoursesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Background_Courses" of service "SFOData".
 */
var Background_Courses = /** @class */ (function (_super) {
    __extends(Background_Courses, _super);
    function Background_Courses() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Background_Courses`.
     * @returns A builder that constructs instances of entity type `Background_Courses`.
     */
    Background_Courses.builder = function () {
        return core_1.Entity.entityBuilder(Background_Courses);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Background_Courses` entity type.
     * @returns A `Background_Courses` request builder.
     */
    Background_Courses.requestBuilder = function () {
        return new Background_CoursesRequestBuilder_1.Background_CoursesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Courses`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_Courses`.
     */
    Background_Courses.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Background_Courses);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Background_Courses.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Background_Courses.
     */
    Background_Courses._entityName = 'Background_Courses';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_Courses.
     */
    Background_Courses._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Background_Courses._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Background_Courses;
}(core_1.Entity));
exports.Background_Courses = Background_Courses;
var PicklistOption_1 = require("./PicklistOption");
var User_1 = require("./User");
(function (Background_Courses) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Courses.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', Background_Courses, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Courses.BG_ORDER_POS = new core_1.BigNumberField('bgOrderPos', Background_Courses, 'Edm.Int64');
    /**
     * Static representation of the [[course]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Courses.COURSE = new core_1.StringField('course', Background_Courses, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Courses.END_DATE = new core_1.DateField('endDate', Background_Courses, 'Edm.DateTime');
    /**
     * Static representation of the [[institution]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Courses.INSTITUTION = new core_1.StringField('institution', Background_Courses, 'Edm.String');
    /**
     * Static representation of the [[instructionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Courses.INSTRUCTION_TYPE = new core_1.StringField('instructionType', Background_Courses, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Courses.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', Background_Courses, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[length]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Courses.LENGTH = new core_1.StringField('length', Background_Courses, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Courses.USER_ID = new core_1.StringField('userId', Background_Courses, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[instructionTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Courses.INSTRUCTION_TYPE_NAV = new core_1.OneToOneLink('instructionTypeNav', Background_Courses, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[lengthNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Courses.LENGTH_NAV = new core_1.OneToOneLink('lengthNav', Background_Courses, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Courses.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', Background_Courses, User_1.User);
    /**
     * All fields of the Background_Courses entity.
     */
    Background_Courses._allFields = [
        Background_Courses.BACKGROUND_ELEMENT_ID,
        Background_Courses.BG_ORDER_POS,
        Background_Courses.COURSE,
        Background_Courses.END_DATE,
        Background_Courses.INSTITUTION,
        Background_Courses.INSTRUCTION_TYPE,
        Background_Courses.LAST_MODIFIED_DATE,
        Background_Courses.LENGTH,
        Background_Courses.USER_ID,
        Background_Courses.INSTRUCTION_TYPE_NAV,
        Background_Courses.LENGTH_NAV,
        Background_Courses.USER_ID_NAV
    ];
    /**
     * All fields selector.
     */
    Background_Courses.ALL_FIELDS = new core_1.AllFields('*', Background_Courses);
    /**
     * All key fields of the Background_Courses entity.
     */
    Background_Courses._keyFields = [Background_Courses.BACKGROUND_ELEMENT_ID, Background_Courses.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property Background_Courses.
     */
    Background_Courses._keys = Background_Courses._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Background_Courses = exports.Background_Courses || (exports.Background_Courses = {}));
exports.Background_Courses = Background_Courses;
//# sourceMappingURL=Background_Courses.js.map