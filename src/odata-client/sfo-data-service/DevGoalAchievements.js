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
var DevGoalAchievementsRequestBuilder_1 = require("./DevGoalAchievementsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "DevGoalAchievements" of service "SFOData".
 */
var DevGoalAchievements = /** @class */ (function (_super) {
    __extends(DevGoalAchievements, _super);
    function DevGoalAchievements() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `DevGoalAchievements`.
     * @returns A builder that constructs instances of entity type `DevGoalAchievements`.
     */
    DevGoalAchievements.builder = function () {
        return core_1.Entity.entityBuilder(DevGoalAchievements);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DevGoalAchievements` entity type.
     * @returns A `DevGoalAchievements` request builder.
     */
    DevGoalAchievements.requestBuilder = function () {
        return new DevGoalAchievementsRequestBuilder_1.DevGoalAchievementsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DevGoalAchievements`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DevGoalAchievements`.
     */
    DevGoalAchievements.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, DevGoalAchievements);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DevGoalAchievements.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DevGoalAchievements.
     */
    DevGoalAchievements._entityName = 'DevGoalAchievements';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DevGoalAchievements.
     */
    DevGoalAchievements._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    DevGoalAchievements._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return DevGoalAchievements;
}(core_1.Entity));
exports.DevGoalAchievements = DevGoalAchievements;
var DevGoalAchievementsList_1 = require("./DevGoalAchievementsList");
(function (DevGoalAchievements) {
    /**
     * Static representation of the [[goalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalAchievements.GOAL_ID = new core_1.StringField('goalId', DevGoalAchievements, 'Edm.String');
    /**
     * Static representation of the [[subjectUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalAchievements.SUBJECT_USER_ID = new core_1.StringField('subjectUserId', DevGoalAchievements, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[achievementList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalAchievements.ACHIEVEMENT_LIST = new core_1.Link('achievementList', DevGoalAchievements, DevGoalAchievementsList_1.DevGoalAchievementsList);
    /**
     * All fields of the DevGoalAchievements entity.
     */
    DevGoalAchievements._allFields = [
        DevGoalAchievements.GOAL_ID,
        DevGoalAchievements.SUBJECT_USER_ID,
        DevGoalAchievements.ACHIEVEMENT_LIST
    ];
    /**
     * All fields selector.
     */
    DevGoalAchievements.ALL_FIELDS = new core_1.AllFields('*', DevGoalAchievements);
    /**
     * All key fields of the DevGoalAchievements entity.
     */
    DevGoalAchievements._keyFields = [DevGoalAchievements.GOAL_ID, DevGoalAchievements.SUBJECT_USER_ID];
    /**
     * Mapping of all key field names to the respective static field property DevGoalAchievements.
     */
    DevGoalAchievements._keys = DevGoalAchievements._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DevGoalAchievements = exports.DevGoalAchievements || (exports.DevGoalAchievements = {}));
exports.DevGoalAchievements = DevGoalAchievements;
//# sourceMappingURL=DevGoalAchievements.js.map