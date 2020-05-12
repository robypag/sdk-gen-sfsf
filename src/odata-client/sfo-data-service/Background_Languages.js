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
var Background_LanguagesRequestBuilder_1 = require("./Background_LanguagesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Background_Languages" of service "SFOData".
 */
var Background_Languages = /** @class */ (function (_super) {
    __extends(Background_Languages, _super);
    function Background_Languages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Background_Languages`.
     * @returns A builder that constructs instances of entity type `Background_Languages`.
     */
    Background_Languages.builder = function () {
        return core_1.Entity.entityBuilder(Background_Languages);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Background_Languages` entity type.
     * @returns A `Background_Languages` request builder.
     */
    Background_Languages.requestBuilder = function () {
        return new Background_LanguagesRequestBuilder_1.Background_LanguagesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Languages`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_Languages`.
     */
    Background_Languages.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Background_Languages);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Background_Languages.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Background_Languages.
     */
    Background_Languages._entityName = 'Background_Languages';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_Languages.
     */
    Background_Languages._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Background_Languages._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Background_Languages;
}(core_1.Entity));
exports.Background_Languages = Background_Languages;
var PicklistOption_1 = require("./PicklistOption");
var User_1 = require("./User");
(function (Background_Languages) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Languages.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', Background_Languages, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Languages.BG_ORDER_POS = new core_1.BigNumberField('bgOrderPos', Background_Languages, 'Edm.Int64');
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Languages.LANGUAGE = new core_1.StringField('language', Background_Languages, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Languages.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', Background_Languages, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[readingProf]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Languages.READING_PROF = new core_1.StringField('readingProf', Background_Languages, 'Edm.String');
    /**
     * Static representation of the [[speakingProf]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Languages.SPEAKING_PROF = new core_1.StringField('speakingProf', Background_Languages, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Languages.USER_ID = new core_1.StringField('userId', Background_Languages, 'Edm.String');
    /**
     * Static representation of the [[variant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Languages.VARIANT = new core_1.StringField('variant', Background_Languages, 'Edm.String');
    /**
     * Static representation of the [[writingProf]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Languages.WRITING_PROF = new core_1.StringField('writingProf', Background_Languages, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[languageNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Languages.LANGUAGE_NAV = new core_1.OneToOneLink('languageNav', Background_Languages, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[readingProfNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Languages.READING_PROF_NAV = new core_1.OneToOneLink('readingProfNav', Background_Languages, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[speakingProfNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Languages.SPEAKING_PROF_NAV = new core_1.OneToOneLink('speakingProfNav', Background_Languages, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Languages.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', Background_Languages, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[variantNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Languages.VARIANT_NAV = new core_1.OneToOneLink('variantNav', Background_Languages, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[writingProfNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Languages.WRITING_PROF_NAV = new core_1.OneToOneLink('writingProfNav', Background_Languages, PicklistOption_1.PicklistOption);
    /**
     * All fields of the Background_Languages entity.
     */
    Background_Languages._allFields = [
        Background_Languages.BACKGROUND_ELEMENT_ID,
        Background_Languages.BG_ORDER_POS,
        Background_Languages.LANGUAGE,
        Background_Languages.LAST_MODIFIED_DATE,
        Background_Languages.READING_PROF,
        Background_Languages.SPEAKING_PROF,
        Background_Languages.USER_ID,
        Background_Languages.VARIANT,
        Background_Languages.WRITING_PROF,
        Background_Languages.LANGUAGE_NAV,
        Background_Languages.READING_PROF_NAV,
        Background_Languages.SPEAKING_PROF_NAV,
        Background_Languages.USER_ID_NAV,
        Background_Languages.VARIANT_NAV,
        Background_Languages.WRITING_PROF_NAV
    ];
    /**
     * All fields selector.
     */
    Background_Languages.ALL_FIELDS = new core_1.AllFields('*', Background_Languages);
    /**
     * All key fields of the Background_Languages entity.
     */
    Background_Languages._keyFields = [Background_Languages.BACKGROUND_ELEMENT_ID, Background_Languages.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property Background_Languages.
     */
    Background_Languages._keys = Background_Languages._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Background_Languages = exports.Background_Languages || (exports.Background_Languages = {}));
exports.Background_Languages = Background_Languages;
//# sourceMappingURL=Background_Languages.js.map