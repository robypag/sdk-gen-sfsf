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
var DevGoal_2005RequestBuilder_1 = require("./DevGoal_2005RequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "DevGoal_2005" of service "SFOData".
 */
var DevGoal_2005 = /** @class */ (function (_super) {
    __extends(DevGoal_2005, _super);
    function DevGoal_2005() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `DevGoal_2005`.
     * @returns A builder that constructs instances of entity type `DevGoal_2005`.
     */
    DevGoal_2005.builder = function () {
        return core_1.Entity.entityBuilder(DevGoal_2005);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DevGoal_2005` entity type.
     * @returns A `DevGoal_2005` request builder.
     */
    DevGoal_2005.requestBuilder = function () {
        return new DevGoal_2005RequestBuilder_1.DevGoal_2005RequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DevGoal_2005`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DevGoal_2005`.
     */
    DevGoal_2005.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, DevGoal_2005);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DevGoal_2005.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DevGoal_2005.
     */
    DevGoal_2005._entityName = 'DevGoal_2005';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DevGoal_2005.
     */
    DevGoal_2005._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    DevGoal_2005._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return DevGoal_2005;
}(core_1.Entity));
exports.DevGoal_2005 = DevGoal_2005;
var DevGoalCompetency_1 = require("./DevGoalCompetency");
var User_1 = require("./User");
var DevGoalTask_2005_1 = require("./DevGoalTask_2005");
(function (DevGoal_2005) {
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoal_2005.CATEGORY = new core_1.StringField('category', DevGoal_2005, 'Edm.String');
    /**
     * Static representation of the [[due]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoal_2005.DUE = new core_1.DateField('due', DevGoal_2005, 'Edm.DateTime');
    /**
     * Static representation of the [[flag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoal_2005.FLAG = new core_1.NumberField('flag', DevGoal_2005, 'Edm.Int32');
    /**
     * Static representation of the [[guid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoal_2005.GUID = new core_1.StringField('guid', DevGoal_2005, 'Edm.String');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoal_2005.ID = new core_1.BigNumberField('id', DevGoal_2005, 'Edm.Int64');
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoal_2005.LAST_MODIFIED = new core_1.DateField('lastModified', DevGoal_2005, 'Edm.DateTime');
    /**
     * Static representation of the [[modifier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoal_2005.MODIFIER = new core_1.StringField('modifier', DevGoal_2005, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoal_2005.NAME = new core_1.StringField('name', DevGoal_2005, 'Edm.String');
    /**
     * Static representation of the [[numbering]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoal_2005.NUMBERING = new core_1.StringField('numbering', DevGoal_2005, 'Edm.String');
    /**
     * Static representation of the [[planId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoal_2005.PLAN_ID = new core_1.BigNumberField('planId', DevGoal_2005, 'Edm.Int64');
    /**
     * Static representation of the [[purpose]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoal_2005.PURPOSE = new core_1.StringField('purpose', DevGoal_2005, 'Edm.String');
    /**
     * Static representation of the [[purposeLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoal_2005.PURPOSE_LABEL = new core_1.StringField('purposeLabel', DevGoal_2005, 'Edm.String');
    /**
     * Static representation of the [[start]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoal_2005.START = new core_1.DateField('start', DevGoal_2005, 'Edm.DateTime');
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoal_2005.STATE = new core_1.StringField('state', DevGoal_2005, 'Edm.String');
    /**
     * Static representation of the [[stateLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoal_2005.STATE_LABEL = new core_1.StringField('stateLabel', DevGoal_2005, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoal_2005.STATUS = new core_1.BigNumberField('status', DevGoal_2005, 'Edm.Int64');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoal_2005.TYPE = new core_1.StringField('type', DevGoal_2005, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoal_2005.USER_ID = new core_1.StringField('userId', DevGoal_2005, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[competencies]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoal_2005.COMPETENCIES = new core_1.Link('competencies', DevGoal_2005, DevGoalCompetency_1.DevGoalCompetency);
    /**
     * Static representation of the one-to-one navigation property [[goalModifier]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoal_2005.GOAL_MODIFIER = new core_1.OneToOneLink('goalModifier', DevGoal_2005, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[goalOwner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoal_2005.GOAL_OWNER = new core_1.OneToOneLink('goalOwner', DevGoal_2005, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[tasks]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoal_2005.TASKS = new core_1.Link('tasks', DevGoal_2005, DevGoalTask_2005_1.DevGoalTask_2005);
    /**
     * All fields of the DevGoal_2005 entity.
     */
    DevGoal_2005._allFields = [
        DevGoal_2005.CATEGORY,
        DevGoal_2005.DUE,
        DevGoal_2005.FLAG,
        DevGoal_2005.GUID,
        DevGoal_2005.ID,
        DevGoal_2005.LAST_MODIFIED,
        DevGoal_2005.MODIFIER,
        DevGoal_2005.NAME,
        DevGoal_2005.NUMBERING,
        DevGoal_2005.PLAN_ID,
        DevGoal_2005.PURPOSE,
        DevGoal_2005.PURPOSE_LABEL,
        DevGoal_2005.START,
        DevGoal_2005.STATE,
        DevGoal_2005.STATE_LABEL,
        DevGoal_2005.STATUS,
        DevGoal_2005.TYPE,
        DevGoal_2005.USER_ID,
        DevGoal_2005.COMPETENCIES,
        DevGoal_2005.GOAL_MODIFIER,
        DevGoal_2005.GOAL_OWNER,
        DevGoal_2005.TASKS
    ];
    /**
     * All fields selector.
     */
    DevGoal_2005.ALL_FIELDS = new core_1.AllFields('*', DevGoal_2005);
    /**
     * All key fields of the DevGoal_2005 entity.
     */
    DevGoal_2005._keyFields = [DevGoal_2005.ID];
    /**
     * Mapping of all key field names to the respective static field property DevGoal_2005.
     */
    DevGoal_2005._keys = DevGoal_2005._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DevGoal_2005 = exports.DevGoal_2005 || (exports.DevGoal_2005 = {}));
exports.DevGoal_2005 = DevGoal_2005;
//# sourceMappingURL=DevGoal_2005.js.map