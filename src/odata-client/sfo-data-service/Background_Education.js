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
var Background_EducationRequestBuilder_1 = require("./Background_EducationRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Background_Education" of service "SFOData".
 */
var Background_Education = /** @class */ (function (_super) {
    __extends(Background_Education, _super);
    function Background_Education() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Background_Education`.
     * @returns A builder that constructs instances of entity type `Background_Education`.
     */
    Background_Education.builder = function () {
        return core_1.Entity.entityBuilder(Background_Education);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Background_Education` entity type.
     * @returns A `Background_Education` request builder.
     */
    Background_Education.requestBuilder = function () {
        return new Background_EducationRequestBuilder_1.Background_EducationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Education`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_Education`.
     */
    Background_Education.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Background_Education);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Background_Education.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Background_Education.
     */
    Background_Education._entityName = 'Background_Education';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_Education.
     */
    Background_Education._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Background_Education._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Background_Education;
}(core_1.Entity));
exports.Background_Education = Background_Education;
var PicklistOption_1 = require("./PicklistOption");
var User_1 = require("./User");
(function (Background_Education) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Education.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', Background_Education, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Education.BG_ORDER_POS = new core_1.BigNumberField('bgOrderPos', Background_Education, 'Edm.Int64');
    /**
     * Static representation of the [[degree]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Education.DEGREE = new core_1.StringField('degree', Background_Education, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Education.END_DATE = new core_1.DateField('endDate', Background_Education, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Education.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', Background_Education, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[major]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Education.MAJOR = new core_1.StringField('major', Background_Education, 'Edm.String');
    /**
     * Static representation of the [[school]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Education.SCHOOL = new core_1.StringField('school', Background_Education, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Education.START_DATE = new core_1.DateField('startDate', Background_Education, 'Edm.DateTime');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Education.USER_ID = new core_1.StringField('userId', Background_Education, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[degreeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Education.DEGREE_NAV = new core_1.OneToOneLink('degreeNav', Background_Education, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[majorNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Education.MAJOR_NAV = new core_1.OneToOneLink('majorNav', Background_Education, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Education.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', Background_Education, User_1.User);
    /**
     * All fields of the Background_Education entity.
     */
    Background_Education._allFields = [
        Background_Education.BACKGROUND_ELEMENT_ID,
        Background_Education.BG_ORDER_POS,
        Background_Education.DEGREE,
        Background_Education.END_DATE,
        Background_Education.LAST_MODIFIED_DATE,
        Background_Education.MAJOR,
        Background_Education.SCHOOL,
        Background_Education.START_DATE,
        Background_Education.USER_ID,
        Background_Education.DEGREE_NAV,
        Background_Education.MAJOR_NAV,
        Background_Education.USER_ID_NAV
    ];
    /**
     * All fields selector.
     */
    Background_Education.ALL_FIELDS = new core_1.AllFields('*', Background_Education);
    /**
     * All key fields of the Background_Education entity.
     */
    Background_Education._keyFields = [Background_Education.BACKGROUND_ELEMENT_ID, Background_Education.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property Background_Education.
     */
    Background_Education._keys = Background_Education._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Background_Education = exports.Background_Education || (exports.Background_Education = {}));
exports.Background_Education = Background_Education;
//# sourceMappingURL=Background_Education.js.map