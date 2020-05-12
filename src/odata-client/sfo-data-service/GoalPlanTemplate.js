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
var GoalPlanTemplateRequestBuilder_1 = require("./GoalPlanTemplateRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "GoalPlanTemplate" of service "SFOData".
 */
var GoalPlanTemplate = /** @class */ (function (_super) {
    __extends(GoalPlanTemplate, _super);
    function GoalPlanTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `GoalPlanTemplate`.
     * @returns A builder that constructs instances of entity type `GoalPlanTemplate`.
     */
    GoalPlanTemplate.builder = function () {
        return core_1.Entity.entityBuilder(GoalPlanTemplate);
    };
    /**
     * Returns a request builder to construct requests for operations on the `GoalPlanTemplate` entity type.
     * @returns A `GoalPlanTemplate` request builder.
     */
    GoalPlanTemplate.requestBuilder = function () {
        return new GoalPlanTemplateRequestBuilder_1.GoalPlanTemplateRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `GoalPlanTemplate`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `GoalPlanTemplate`.
     */
    GoalPlanTemplate.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, GoalPlanTemplate);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    GoalPlanTemplate.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for GoalPlanTemplate.
     */
    GoalPlanTemplate._entityName = 'GoalPlanTemplate';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for GoalPlanTemplate.
     */
    GoalPlanTemplate._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    GoalPlanTemplate._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return GoalPlanTemplate;
}(core_1.Entity));
exports.GoalPlanTemplate = GoalPlanTemplate;
var GoalEnum_1 = require("./GoalEnum");
var GoalWeight_1 = require("./GoalWeight");
var SimpleGoal_1 = require("./SimpleGoal");
var GoalPlanState_1 = require("./GoalPlanState");
(function (GoalPlanTemplate) {
    /**
     * Static representation of the [[defaultTemplate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPlanTemplate.DEFAULT_TEMPLATE = new core_1.BooleanField('defaultTemplate', GoalPlanTemplate, 'Edm.Boolean');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPlanTemplate.DESCRIPTION = new core_1.StringField('description', GoalPlanTemplate, 'Edm.String');
    /**
     * Static representation of the [[displayOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPlanTemplate.DISPLAY_ORDER = new core_1.BigNumberField('displayOrder', GoalPlanTemplate, 'Edm.Int64');
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPlanTemplate.DUE_DATE = new core_1.DateField('dueDate', GoalPlanTemplate, 'Edm.DateTime');
    /**
     * Static representation of the [[fieldOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPlanTemplate.FIELD_ORDER = new core_1.StringField('fieldOrder', GoalPlanTemplate, 'Edm.String');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPlanTemplate.ID = new core_1.BigNumberField('id', GoalPlanTemplate, 'Edm.Int64');
    /**
     * Static representation of the [[mobileFields]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPlanTemplate.MOBILE_FIELDS = new core_1.StringField('mobileFields', GoalPlanTemplate, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPlanTemplate.NAME = new core_1.StringField('name', GoalPlanTemplate, 'Edm.String');
    /**
     * Static representation of the [[parentPlanId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPlanTemplate.PARENT_PLAN_ID = new core_1.BigNumberField('parentPlanId', GoalPlanTemplate, 'Edm.Int64');
    /**
     * Static representation of the [[percentageValueOver100]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPlanTemplate.PERCENTAGE_VALUE_OVER_100 = new core_1.BooleanField('percentageValueOver100', GoalPlanTemplate, 'Edm.Boolean');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPlanTemplate.START_DATE = new core_1.DateField('startDate', GoalPlanTemplate, 'Edm.DateTime');
    /**
     * Static representation of the [[useTextForPrivacy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPlanTemplate.USE_TEXT_FOR_PRIVACY = new core_1.BooleanField('useTextForPrivacy', GoalPlanTemplate, 'Edm.Boolean');
    /**
     * Static representation of the one-to-many navigation property [[enums]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPlanTemplate.ENUMS = new core_1.Link('enums', GoalPlanTemplate, GoalEnum_1.GoalEnum);
    /**
     * Static representation of the one-to-many navigation property [[goalWeights]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPlanTemplate.GOAL_WEIGHTS = new core_1.Link('goalWeights', GoalPlanTemplate, GoalWeight_1.GoalWeight);
    /**
     * Static representation of the one-to-many navigation property [[goals]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPlanTemplate.GOALS = new core_1.Link('goals', GoalPlanTemplate, SimpleGoal_1.SimpleGoal);
    /**
     * Static representation of the one-to-many navigation property [[planStates]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPlanTemplate.PLAN_STATES = new core_1.Link('planStates', GoalPlanTemplate, GoalPlanState_1.GoalPlanState);
    /**
     * All fields of the GoalPlanTemplate entity.
     */
    GoalPlanTemplate._allFields = [
        GoalPlanTemplate.DEFAULT_TEMPLATE,
        GoalPlanTemplate.DESCRIPTION,
        GoalPlanTemplate.DISPLAY_ORDER,
        GoalPlanTemplate.DUE_DATE,
        GoalPlanTemplate.FIELD_ORDER,
        GoalPlanTemplate.ID,
        GoalPlanTemplate.MOBILE_FIELDS,
        GoalPlanTemplate.NAME,
        GoalPlanTemplate.PARENT_PLAN_ID,
        GoalPlanTemplate.PERCENTAGE_VALUE_OVER_100,
        GoalPlanTemplate.START_DATE,
        GoalPlanTemplate.USE_TEXT_FOR_PRIVACY,
        GoalPlanTemplate.ENUMS,
        GoalPlanTemplate.GOAL_WEIGHTS,
        GoalPlanTemplate.GOALS,
        GoalPlanTemplate.PLAN_STATES
    ];
    /**
     * All fields selector.
     */
    GoalPlanTemplate.ALL_FIELDS = new core_1.AllFields('*', GoalPlanTemplate);
    /**
     * All key fields of the GoalPlanTemplate entity.
     */
    GoalPlanTemplate._keyFields = [GoalPlanTemplate.ID];
    /**
     * Mapping of all key field names to the respective static field property GoalPlanTemplate.
     */
    GoalPlanTemplate._keys = GoalPlanTemplate._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(GoalPlanTemplate = exports.GoalPlanTemplate || (exports.GoalPlanTemplate = {}));
exports.GoalPlanTemplate = GoalPlanTemplate;
//# sourceMappingURL=GoalPlanTemplate.js.map