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
var DevGoalPlanTemplateRequestBuilder_1 = require("./DevGoalPlanTemplateRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "DevGoalPlanTemplate" of service "SFOData".
 */
var DevGoalPlanTemplate = /** @class */ (function (_super) {
    __extends(DevGoalPlanTemplate, _super);
    function DevGoalPlanTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `DevGoalPlanTemplate`.
     * @returns A builder that constructs instances of entity type `DevGoalPlanTemplate`.
     */
    DevGoalPlanTemplate.builder = function () {
        return core_1.Entity.entityBuilder(DevGoalPlanTemplate);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DevGoalPlanTemplate` entity type.
     * @returns A `DevGoalPlanTemplate` request builder.
     */
    DevGoalPlanTemplate.requestBuilder = function () {
        return new DevGoalPlanTemplateRequestBuilder_1.DevGoalPlanTemplateRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DevGoalPlanTemplate`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DevGoalPlanTemplate`.
     */
    DevGoalPlanTemplate.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, DevGoalPlanTemplate);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DevGoalPlanTemplate.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DevGoalPlanTemplate.
     */
    DevGoalPlanTemplate._entityName = 'DevGoalPlanTemplate';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DevGoalPlanTemplate.
     */
    DevGoalPlanTemplate._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    DevGoalPlanTemplate._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return DevGoalPlanTemplate;
}(core_1.Entity));
exports.DevGoalPlanTemplate = DevGoalPlanTemplate;
var SimpleDevGoal_1 = require("./SimpleDevGoal");
var DevGoalEnum_1 = require("./DevGoalEnum");
(function (DevGoalPlanTemplate) {
    /**
     * Static representation of the [[defaultTemplate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalPlanTemplate.DEFAULT_TEMPLATE = new core_1.BooleanField('defaultTemplate', DevGoalPlanTemplate, 'Edm.Boolean');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalPlanTemplate.DESCRIPTION = new core_1.StringField('description', DevGoalPlanTemplate, 'Edm.String');
    /**
     * Static representation of the [[displayOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalPlanTemplate.DISPLAY_ORDER = new core_1.BigNumberField('displayOrder', DevGoalPlanTemplate, 'Edm.Int64');
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalPlanTemplate.DUE_DATE = new core_1.DateField('dueDate', DevGoalPlanTemplate, 'Edm.DateTime');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalPlanTemplate.ID = new core_1.BigNumberField('id', DevGoalPlanTemplate, 'Edm.Int64');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalPlanTemplate.NAME = new core_1.StringField('name', DevGoalPlanTemplate, 'Edm.String');
    /**
     * Static representation of the [[parentPlanId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalPlanTemplate.PARENT_PLAN_ID = new core_1.BigNumberField('parentPlanId', DevGoalPlanTemplate, 'Edm.Int64');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalPlanTemplate.START_DATE = new core_1.DateField('startDate', DevGoalPlanTemplate, 'Edm.DateTime');
    /**
     * Static representation of the [[useTextForPrivacy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalPlanTemplate.USE_TEXT_FOR_PRIVACY = new core_1.BooleanField('useTextForPrivacy', DevGoalPlanTemplate, 'Edm.Boolean');
    /**
     * Static representation of the one-to-many navigation property [[devgoals]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalPlanTemplate.DEVGOALS = new core_1.Link('devgoals', DevGoalPlanTemplate, SimpleDevGoal_1.SimpleDevGoal);
    /**
     * Static representation of the one-to-many navigation property [[enums]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalPlanTemplate.ENUMS = new core_1.Link('enums', DevGoalPlanTemplate, DevGoalEnum_1.DevGoalEnum);
    /**
     * All fields of the DevGoalPlanTemplate entity.
     */
    DevGoalPlanTemplate._allFields = [
        DevGoalPlanTemplate.DEFAULT_TEMPLATE,
        DevGoalPlanTemplate.DESCRIPTION,
        DevGoalPlanTemplate.DISPLAY_ORDER,
        DevGoalPlanTemplate.DUE_DATE,
        DevGoalPlanTemplate.ID,
        DevGoalPlanTemplate.NAME,
        DevGoalPlanTemplate.PARENT_PLAN_ID,
        DevGoalPlanTemplate.START_DATE,
        DevGoalPlanTemplate.USE_TEXT_FOR_PRIVACY,
        DevGoalPlanTemplate.DEVGOALS,
        DevGoalPlanTemplate.ENUMS
    ];
    /**
     * All fields selector.
     */
    DevGoalPlanTemplate.ALL_FIELDS = new core_1.AllFields('*', DevGoalPlanTemplate);
    /**
     * All key fields of the DevGoalPlanTemplate entity.
     */
    DevGoalPlanTemplate._keyFields = [DevGoalPlanTemplate.ID];
    /**
     * Mapping of all key field names to the respective static field property DevGoalPlanTemplate.
     */
    DevGoalPlanTemplate._keys = DevGoalPlanTemplate._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DevGoalPlanTemplate = exports.DevGoalPlanTemplate || (exports.DevGoalPlanTemplate = {}));
exports.DevGoalPlanTemplate = DevGoalPlanTemplate;
//# sourceMappingURL=DevGoalPlanTemplate.js.map