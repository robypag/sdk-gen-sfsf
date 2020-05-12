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
var GoalPlanStateRequestBuilder_1 = require("./GoalPlanStateRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "GoalPlanState" of service "SFOData".
 */
var GoalPlanState = /** @class */ (function (_super) {
    __extends(GoalPlanState, _super);
    function GoalPlanState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `GoalPlanState`.
     * @returns A builder that constructs instances of entity type `GoalPlanState`.
     */
    GoalPlanState.builder = function () {
        return core_1.Entity.entityBuilder(GoalPlanState);
    };
    /**
     * Returns a request builder to construct requests for operations on the `GoalPlanState` entity type.
     * @returns A `GoalPlanState` request builder.
     */
    GoalPlanState.requestBuilder = function () {
        return new GoalPlanStateRequestBuilder_1.GoalPlanStateRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `GoalPlanState`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `GoalPlanState`.
     */
    GoalPlanState.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, GoalPlanState);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    GoalPlanState.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for GoalPlanState.
     */
    GoalPlanState._entityName = 'GoalPlanState';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for GoalPlanState.
     */
    GoalPlanState._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    GoalPlanState._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return GoalPlanState;
}(core_1.Entity));
exports.GoalPlanState = GoalPlanState;
(function (GoalPlanState) {
    /**
     * Static representation of the [[actionLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPlanState.ACTION_LABEL = new core_1.StringField('actionLabel', GoalPlanState, 'Edm.String');
    /**
     * Static representation of the [[auditComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPlanState.AUDIT_COMMENTS = new core_1.StringField('auditComments', GoalPlanState, 'Edm.String');
    /**
     * Static representation of the [[currentState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPlanState.CURRENT_STATE = new core_1.BooleanField('currentState', GoalPlanState, 'Edm.Boolean');
    /**
     * Static representation of the [[defaultState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPlanState.DEFAULT_STATE = new core_1.BooleanField('defaultState', GoalPlanState, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPlanState.LAST_MODIFIED = new core_1.DateField('lastModified', GoalPlanState, 'Edm.DateTime');
    /**
     * Static representation of the [[planId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPlanState.PLAN_ID = new core_1.BigNumberField('planId', GoalPlanState, 'Edm.Int64');
    /**
     * Static representation of the [[stateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPlanState.STATE_ID = new core_1.StringField('stateId', GoalPlanState, 'Edm.String');
    /**
     * Static representation of the [[stateLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPlanState.STATE_LABEL = new core_1.StringField('stateLabel', GoalPlanState, 'Edm.String');
    /**
     * Static representation of the [[targetStates]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPlanState.TARGET_STATES = new core_1.StringField('targetStates', GoalPlanState, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPlanState.USER_ID = new core_1.StringField('userId', GoalPlanState, 'Edm.String');
    /**
     * All fields of the GoalPlanState entity.
     */
    GoalPlanState._allFields = [
        GoalPlanState.ACTION_LABEL,
        GoalPlanState.AUDIT_COMMENTS,
        GoalPlanState.CURRENT_STATE,
        GoalPlanState.DEFAULT_STATE,
        GoalPlanState.LAST_MODIFIED,
        GoalPlanState.PLAN_ID,
        GoalPlanState.STATE_ID,
        GoalPlanState.STATE_LABEL,
        GoalPlanState.TARGET_STATES,
        GoalPlanState.USER_ID
    ];
    /**
     * All fields selector.
     */
    GoalPlanState.ALL_FIELDS = new core_1.AllFields('*', GoalPlanState);
    /**
     * All key fields of the GoalPlanState entity.
     */
    GoalPlanState._keyFields = [GoalPlanState.PLAN_ID, GoalPlanState.STATE_ID, GoalPlanState.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property GoalPlanState.
     */
    GoalPlanState._keys = GoalPlanState._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(GoalPlanState = exports.GoalPlanState || (exports.GoalPlanState = {}));
exports.GoalPlanState = GoalPlanState;
//# sourceMappingURL=GoalPlanState.js.map