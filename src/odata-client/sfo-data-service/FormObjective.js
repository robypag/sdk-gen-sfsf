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
var FormObjectiveRequestBuilder_1 = require("./FormObjectiveRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormObjective" of service "SFOData".
 */
var FormObjective = /** @class */ (function (_super) {
    __extends(FormObjective, _super);
    function FormObjective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormObjective`.
     * @returns A builder that constructs instances of entity type `FormObjective`.
     */
    FormObjective.builder = function () {
        return core_1.Entity.entityBuilder(FormObjective);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormObjective` entity type.
     * @returns A `FormObjective` request builder.
     */
    FormObjective.requestBuilder = function () {
        return new FormObjectiveRequestBuilder_1.FormObjectiveRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormObjective`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormObjective`.
     */
    FormObjective.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormObjective);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormObjective.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormObjective.
     */
    FormObjective._entityName = 'FormObjective';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormObjective.
     */
    FormObjective._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormObjective._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormObjective;
}(core_1.Entity));
exports.FormObjective = FormObjective;
var FormObjectiveComment_1 = require("./FormObjectiveComment");
var FormCustomElement_1 = require("./FormCustomElement");
var FormItemConfiguration_1 = require("./FormItemConfiguration");
var FormObjectiveDetails_1 = require("./FormObjectiveDetails");
var FormUserRatingComment_1 = require("./FormUserRatingComment");
var FormObjectiveOtherDetails_1 = require("./FormObjectiveOtherDetails");
(function (FormObjective) {
    /**
     * Static representation of the [[assignments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjective.ASSIGNMENTS = new core_1.StringField('assignments', FormObjective, 'Edm.String');
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjective.CATEGORY = new core_1.StringField('category', FormObjective, 'Edm.String');
    /**
     * Static representation of the [[done]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjective.DONE = new core_1.StringField('done', FormObjective, 'Edm.String');
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjective.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormObjective, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjective.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormObjective, 'Edm.Int64');
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjective.ITEM_ID = new core_1.BigNumberField('itemId', FormObjective, 'Edm.Int64');
    /**
     * Static representation of the [[itemOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjective.ITEM_ORDER = new core_1.NumberField('itemOrder', FormObjective, 'Edm.Int32');
    /**
     * Static representation of the [[metric]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjective.METRIC = new core_1.StringField('metric', FormObjective, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjective.NAME = new core_1.StringField('name', FormObjective, 'Edm.String');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjective.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormObjective, 'Edm.Int32');
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjective.STATE = new core_1.StringField('state', FormObjective, 'Edm.String');
    /**
     * Static representation of the [[stateColor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjective.STATE_COLOR = new core_1.StringField('stateColor', FormObjective, 'Edm.String');
    /**
     * Static representation of the [[useMltRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjective.USE_MLT_RATING = new core_1.BooleanField('useMLTRating', FormObjective, 'Edm.Boolean');
    /**
     * Static representation of the [[weight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjective.WEIGHT = new core_1.StringField('weight', FormObjective, 'Edm.String');
    /**
     * Static representation of the [[weightKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjective.WEIGHT_KEY = new core_1.StringField('weightKey', FormObjective, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[comments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjective.COMMENTS = new core_1.Link('comments', FormObjective, FormObjectiveComment_1.FormObjectiveComment);
    /**
     * Static representation of the one-to-many navigation property [[customElement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjective.CUSTOM_ELEMENT = new core_1.Link('customElement', FormObjective, FormCustomElement_1.FormCustomElement);
    /**
     * Static representation of the one-to-one navigation property [[itemConfiguration]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjective.ITEM_CONFIGURATION = new core_1.OneToOneLink('itemConfiguration', FormObjective, FormItemConfiguration_1.FormItemConfiguration);
    /**
     * Static representation of the one-to-many navigation property [[metricLookupTables]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjective.METRIC_LOOKUP_TABLES = new core_1.Link('metricLookupTables', FormObjective, FormObjectiveDetails_1.FormObjectiveDetails);
    /**
     * Static representation of the one-to-many navigation property [[milestones]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjective.MILESTONES = new core_1.Link('milestones', FormObjective, FormObjectiveDetails_1.FormObjectiveDetails);
    /**
     * Static representation of the one-to-many navigation property [[objectiveDetails]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjective.OBJECTIVE_DETAILS = new core_1.Link('objectiveDetails', FormObjective, FormObjectiveDetails_1.FormObjectiveDetails);
    /**
     * Static representation of the one-to-one navigation property [[officialRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjective.OFFICIAL_RATING = new core_1.OneToOneLink('officialRating', FormObjective, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * Static representation of the one-to-one navigation property [[otherDetails]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjective.OTHER_DETAILS = new core_1.OneToOneLink('otherDetails', FormObjective, FormObjectiveOtherDetails_1.FormObjectiveOtherDetails);
    /**
     * Static representation of the one-to-many navigation property [[othersRatingComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjective.OTHERS_RATING_COMMENT = new core_1.Link('othersRatingComment', FormObjective, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * Static representation of the one-to-one navigation property [[selfRatingComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjective.SELF_RATING_COMMENT = new core_1.OneToOneLink('selfRatingComment', FormObjective, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * Static representation of the one-to-many navigation property [[targets]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjective.TARGETS = new core_1.Link('targets', FormObjective, FormObjectiveDetails_1.FormObjectiveDetails);
    /**
     * Static representation of the one-to-many navigation property [[tasks]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjective.TASKS = new core_1.Link('tasks', FormObjective, FormObjectiveDetails_1.FormObjectiveDetails);
    /**
     * All fields of the FormObjective entity.
     */
    FormObjective._allFields = [
        FormObjective.ASSIGNMENTS,
        FormObjective.CATEGORY,
        FormObjective.DONE,
        FormObjective.FORM_CONTENT_ID,
        FormObjective.FORM_DATA_ID,
        FormObjective.ITEM_ID,
        FormObjective.ITEM_ORDER,
        FormObjective.METRIC,
        FormObjective.NAME,
        FormObjective.SECTION_INDEX,
        FormObjective.STATE,
        FormObjective.STATE_COLOR,
        FormObjective.USE_MLT_RATING,
        FormObjective.WEIGHT,
        FormObjective.WEIGHT_KEY,
        FormObjective.COMMENTS,
        FormObjective.CUSTOM_ELEMENT,
        FormObjective.ITEM_CONFIGURATION,
        FormObjective.METRIC_LOOKUP_TABLES,
        FormObjective.MILESTONES,
        FormObjective.OBJECTIVE_DETAILS,
        FormObjective.OFFICIAL_RATING,
        FormObjective.OTHER_DETAILS,
        FormObjective.OTHERS_RATING_COMMENT,
        FormObjective.SELF_RATING_COMMENT,
        FormObjective.TARGETS,
        FormObjective.TASKS
    ];
    /**
     * All fields selector.
     */
    FormObjective.ALL_FIELDS = new core_1.AllFields('*', FormObjective);
    /**
     * All key fields of the FormObjective entity.
     */
    FormObjective._keyFields = [FormObjective.FORM_CONTENT_ID, FormObjective.FORM_DATA_ID, FormObjective.ITEM_ID, FormObjective.SECTION_INDEX];
    /**
     * Mapping of all key field names to the respective static field property FormObjective.
     */
    FormObjective._keys = FormObjective._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormObjective = exports.FormObjective || (exports.FormObjective = {}));
exports.FormObjective = FormObjective;
//# sourceMappingURL=FormObjective.js.map