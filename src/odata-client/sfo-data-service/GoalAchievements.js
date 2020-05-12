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
var GoalAchievementsRequestBuilder_1 = require("./GoalAchievementsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "GoalAchievements" of service "SFOData".
 */
var GoalAchievements = /** @class */ (function (_super) {
    __extends(GoalAchievements, _super);
    function GoalAchievements() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `GoalAchievements`.
     * @returns A builder that constructs instances of entity type `GoalAchievements`.
     */
    GoalAchievements.builder = function () {
        return core_1.Entity.entityBuilder(GoalAchievements);
    };
    /**
     * Returns a request builder to construct requests for operations on the `GoalAchievements` entity type.
     * @returns A `GoalAchievements` request builder.
     */
    GoalAchievements.requestBuilder = function () {
        return new GoalAchievementsRequestBuilder_1.GoalAchievementsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `GoalAchievements`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `GoalAchievements`.
     */
    GoalAchievements.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, GoalAchievements);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    GoalAchievements.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for GoalAchievements.
     */
    GoalAchievements._entityName = 'GoalAchievements';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for GoalAchievements.
     */
    GoalAchievements._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    GoalAchievements._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return GoalAchievements;
}(core_1.Entity));
exports.GoalAchievements = GoalAchievements;
var GoalAchievementsList_1 = require("./GoalAchievementsList");
(function (GoalAchievements) {
    /**
     * Static representation of the [[goalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalAchievements.GOAL_ID = new core_1.StringField('goalId', GoalAchievements, 'Edm.String');
    /**
     * Static representation of the [[subjectUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalAchievements.SUBJECT_USER_ID = new core_1.StringField('subjectUserId', GoalAchievements, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[achievementList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalAchievements.ACHIEVEMENT_LIST = new core_1.Link('achievementList', GoalAchievements, GoalAchievementsList_1.GoalAchievementsList);
    /**
     * All fields of the GoalAchievements entity.
     */
    GoalAchievements._allFields = [
        GoalAchievements.GOAL_ID,
        GoalAchievements.SUBJECT_USER_ID,
        GoalAchievements.ACHIEVEMENT_LIST
    ];
    /**
     * All fields selector.
     */
    GoalAchievements.ALL_FIELDS = new core_1.AllFields('*', GoalAchievements);
    /**
     * All key fields of the GoalAchievements entity.
     */
    GoalAchievements._keyFields = [GoalAchievements.GOAL_ID, GoalAchievements.SUBJECT_USER_ID];
    /**
     * Mapping of all key field names to the respective static field property GoalAchievements.
     */
    GoalAchievements._keys = GoalAchievements._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(GoalAchievements = exports.GoalAchievements || (exports.GoalAchievements = {}));
exports.GoalAchievements = GoalAchievements;
//# sourceMappingURL=GoalAchievements.js.map