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
var FormCompetencyRequestBuilder_1 = require("./FormCompetencyRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormCompetency" of service "SFOData".
 */
var FormCompetency = /** @class */ (function (_super) {
    __extends(FormCompetency, _super);
    function FormCompetency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormCompetency`.
     * @returns A builder that constructs instances of entity type `FormCompetency`.
     */
    FormCompetency.builder = function () {
        return core_1.Entity.entityBuilder(FormCompetency);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormCompetency` entity type.
     * @returns A `FormCompetency` request builder.
     */
    FormCompetency.requestBuilder = function () {
        return new FormCompetencyRequestBuilder_1.FormCompetencyRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormCompetency`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormCompetency`.
     */
    FormCompetency.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormCompetency);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormCompetency.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormCompetency.
     */
    FormCompetency._entityName = 'FormCompetency';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormCompetency.
     */
    FormCompetency._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormCompetency._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormCompetency;
}(core_1.Entity));
exports.FormCompetency = FormCompetency;
var FormCompetencyBehavior_1 = require("./FormCompetencyBehavior");
var FormCustomElement_1 = require("./FormCustomElement");
var FormItemConfiguration_1 = require("./FormItemConfiguration");
var FormUserRatingComment_1 = require("./FormUserRatingComment");
(function (FormCompetency) {
    /**
     * Static representation of the [[assignments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetency.ASSIGNMENTS = new core_1.StringField('assignments', FormCompetency, 'Edm.String');
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetency.CATEGORY = new core_1.StringField('category', FormCompetency, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetency.DESCRIPTION = new core_1.StringField('description', FormCompetency, 'Edm.String');
    /**
     * Static representation of the [[expectedRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetency.EXPECTED_RATING = new core_1.StringField('expectedRating', FormCompetency, 'Edm.String');
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetency.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormCompetency, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetency.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormCompetency, 'Edm.Int64');
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetency.ITEM_ID = new core_1.BigNumberField('itemId', FormCompetency, 'Edm.Int64');
    /**
     * Static representation of the [[itemIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetency.ITEM_INDEX = new core_1.BigNumberField('itemIndex', FormCompetency, 'Edm.Int64');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetency.NAME = new core_1.StringField('name', FormCompetency, 'Edm.String');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetency.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormCompetency, 'Edm.Int32');
    /**
     * Static representation of the [[source]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetency.SOURCE = new core_1.StringField('source', FormCompetency, 'Edm.String');
    /**
     * Static representation of the [[weight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetency.WEIGHT = new core_1.StringField('weight', FormCompetency, 'Edm.String');
    /**
     * Static representation of the [[weightKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetency.WEIGHT_KEY = new core_1.StringField('weightKey', FormCompetency, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[competencyBehaviors]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetency.COMPETENCY_BEHAVIORS = new core_1.Link('competencyBehaviors', FormCompetency, FormCompetencyBehavior_1.FormCompetencyBehavior);
    /**
     * Static representation of the one-to-many navigation property [[customElement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetency.CUSTOM_ELEMENT = new core_1.Link('customElement', FormCompetency, FormCustomElement_1.FormCustomElement);
    /**
     * Static representation of the one-to-one navigation property [[itemConfiguration]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetency.ITEM_CONFIGURATION = new core_1.OneToOneLink('itemConfiguration', FormCompetency, FormItemConfiguration_1.FormItemConfiguration);
    /**
     * Static representation of the one-to-one navigation property [[officialRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetency.OFFICIAL_RATING = new core_1.OneToOneLink('officialRating', FormCompetency, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * Static representation of the one-to-many navigation property [[othersRatingComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetency.OTHERS_RATING_COMMENT = new core_1.Link('othersRatingComment', FormCompetency, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * Static representation of the one-to-one navigation property [[selfRatingComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetency.SELF_RATING_COMMENT = new core_1.OneToOneLink('selfRatingComment', FormCompetency, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * All fields of the FormCompetency entity.
     */
    FormCompetency._allFields = [
        FormCompetency.ASSIGNMENTS,
        FormCompetency.CATEGORY,
        FormCompetency.DESCRIPTION,
        FormCompetency.EXPECTED_RATING,
        FormCompetency.FORM_CONTENT_ID,
        FormCompetency.FORM_DATA_ID,
        FormCompetency.ITEM_ID,
        FormCompetency.ITEM_INDEX,
        FormCompetency.NAME,
        FormCompetency.SECTION_INDEX,
        FormCompetency.SOURCE,
        FormCompetency.WEIGHT,
        FormCompetency.WEIGHT_KEY,
        FormCompetency.COMPETENCY_BEHAVIORS,
        FormCompetency.CUSTOM_ELEMENT,
        FormCompetency.ITEM_CONFIGURATION,
        FormCompetency.OFFICIAL_RATING,
        FormCompetency.OTHERS_RATING_COMMENT,
        FormCompetency.SELF_RATING_COMMENT
    ];
    /**
     * All fields selector.
     */
    FormCompetency.ALL_FIELDS = new core_1.AllFields('*', FormCompetency);
    /**
     * All key fields of the FormCompetency entity.
     */
    FormCompetency._keyFields = [FormCompetency.FORM_CONTENT_ID, FormCompetency.FORM_DATA_ID, FormCompetency.ITEM_ID, FormCompetency.SECTION_INDEX];
    /**
     * Mapping of all key field names to the respective static field property FormCompetency.
     */
    FormCompetency._keys = FormCompetency._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormCompetency = exports.FormCompetency || (exports.FormCompetency = {}));
exports.FormCompetency = FormCompetency;
//# sourceMappingURL=FormCompetency.js.map