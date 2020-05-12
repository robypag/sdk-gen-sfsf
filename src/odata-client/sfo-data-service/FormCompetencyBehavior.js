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
var FormCompetencyBehaviorRequestBuilder_1 = require("./FormCompetencyBehaviorRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormCompetencyBehavior" of service "SFOData".
 */
var FormCompetencyBehavior = /** @class */ (function (_super) {
    __extends(FormCompetencyBehavior, _super);
    function FormCompetencyBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormCompetencyBehavior`.
     * @returns A builder that constructs instances of entity type `FormCompetencyBehavior`.
     */
    FormCompetencyBehavior.builder = function () {
        return core_1.Entity.entityBuilder(FormCompetencyBehavior);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormCompetencyBehavior` entity type.
     * @returns A `FormCompetencyBehavior` request builder.
     */
    FormCompetencyBehavior.requestBuilder = function () {
        return new FormCompetencyBehaviorRequestBuilder_1.FormCompetencyBehaviorRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormCompetencyBehavior`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormCompetencyBehavior`.
     */
    FormCompetencyBehavior.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormCompetencyBehavior);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormCompetencyBehavior.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormCompetencyBehavior.
     */
    FormCompetencyBehavior._entityName = 'FormCompetencyBehavior';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormCompetencyBehavior.
     */
    FormCompetencyBehavior._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormCompetencyBehavior._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormCompetencyBehavior;
}(core_1.Entity));
exports.FormCompetencyBehavior = FormCompetencyBehavior;
var FormBehaviorRatingComment_1 = require("./FormBehaviorRatingComment");
(function (FormCompetencyBehavior) {
    /**
     * Static representation of the [[behaviorId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetencyBehavior.BEHAVIOR_ID = new core_1.BigNumberField('behaviorId', FormCompetencyBehavior, 'Edm.Int64');
    /**
     * Static representation of the [[behaviorIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetencyBehavior.BEHAVIOR_INDEX = new core_1.BigNumberField('behaviorIndex', FormCompetencyBehavior, 'Edm.Int64');
    /**
     * Static representation of the [[behaviorName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetencyBehavior.BEHAVIOR_NAME = new core_1.StringField('behaviorName', FormCompetencyBehavior, 'Edm.String');
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetencyBehavior.CATEGORY = new core_1.StringField('category', FormCompetencyBehavior, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetencyBehavior.DESCRIPTION = new core_1.StringField('description', FormCompetencyBehavior, 'Edm.String');
    /**
     * Static representation of the [[expectedRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetencyBehavior.EXPECTED_RATING = new core_1.StringField('expectedRating', FormCompetencyBehavior, 'Edm.String');
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetencyBehavior.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormCompetencyBehavior, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetencyBehavior.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormCompetencyBehavior, 'Edm.Int64');
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetencyBehavior.ITEM_ID = new core_1.BigNumberField('itemId', FormCompetencyBehavior, 'Edm.Int64');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetencyBehavior.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormCompetencyBehavior, 'Edm.Int32');
    /**
     * Static representation of the [[weight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetencyBehavior.WEIGHT = new core_1.StringField('weight', FormCompetencyBehavior, 'Edm.String');
    /**
     * Static representation of the [[weightKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetencyBehavior.WEIGHT_KEY = new core_1.StringField('weightKey', FormCompetencyBehavior, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[officialRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetencyBehavior.OFFICIAL_RATING = new core_1.OneToOneLink('officialRating', FormCompetencyBehavior, FormBehaviorRatingComment_1.FormBehaviorRatingComment);
    /**
     * Static representation of the one-to-many navigation property [[othersRatingComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetencyBehavior.OTHERS_RATING_COMMENT = new core_1.Link('othersRatingComment', FormCompetencyBehavior, FormBehaviorRatingComment_1.FormBehaviorRatingComment);
    /**
     * Static representation of the one-to-one navigation property [[selfRatingComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetencyBehavior.SELF_RATING_COMMENT = new core_1.OneToOneLink('selfRatingComment', FormCompetencyBehavior, FormBehaviorRatingComment_1.FormBehaviorRatingComment);
    /**
     * All fields of the FormCompetencyBehavior entity.
     */
    FormCompetencyBehavior._allFields = [
        FormCompetencyBehavior.BEHAVIOR_ID,
        FormCompetencyBehavior.BEHAVIOR_INDEX,
        FormCompetencyBehavior.BEHAVIOR_NAME,
        FormCompetencyBehavior.CATEGORY,
        FormCompetencyBehavior.DESCRIPTION,
        FormCompetencyBehavior.EXPECTED_RATING,
        FormCompetencyBehavior.FORM_CONTENT_ID,
        FormCompetencyBehavior.FORM_DATA_ID,
        FormCompetencyBehavior.ITEM_ID,
        FormCompetencyBehavior.SECTION_INDEX,
        FormCompetencyBehavior.WEIGHT,
        FormCompetencyBehavior.WEIGHT_KEY,
        FormCompetencyBehavior.OFFICIAL_RATING,
        FormCompetencyBehavior.OTHERS_RATING_COMMENT,
        FormCompetencyBehavior.SELF_RATING_COMMENT
    ];
    /**
     * All fields selector.
     */
    FormCompetencyBehavior.ALL_FIELDS = new core_1.AllFields('*', FormCompetencyBehavior);
    /**
     * All key fields of the FormCompetencyBehavior entity.
     */
    FormCompetencyBehavior._keyFields = [FormCompetencyBehavior.BEHAVIOR_ID, FormCompetencyBehavior.FORM_CONTENT_ID, FormCompetencyBehavior.FORM_DATA_ID, FormCompetencyBehavior.ITEM_ID, FormCompetencyBehavior.SECTION_INDEX];
    /**
     * Mapping of all key field names to the respective static field property FormCompetencyBehavior.
     */
    FormCompetencyBehavior._keys = FormCompetencyBehavior._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormCompetencyBehavior = exports.FormCompetencyBehavior || (exports.FormCompetencyBehavior = {}));
exports.FormCompetencyBehavior = FormCompetencyBehavior;
//# sourceMappingURL=FormCompetencyBehavior.js.map