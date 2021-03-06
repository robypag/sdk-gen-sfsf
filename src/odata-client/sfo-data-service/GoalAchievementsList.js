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
var GoalAchievementsListRequestBuilder_1 = require("./GoalAchievementsListRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "GoalAchievementsList" of service "SFOData".
 */
var GoalAchievementsList = /** @class */ (function (_super) {
    __extends(GoalAchievementsList, _super);
    function GoalAchievementsList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `GoalAchievementsList`.
     * @returns A builder that constructs instances of entity type `GoalAchievementsList`.
     */
    GoalAchievementsList.builder = function () {
        return core_1.Entity.entityBuilder(GoalAchievementsList);
    };
    /**
     * Returns a request builder to construct requests for operations on the `GoalAchievementsList` entity type.
     * @returns A `GoalAchievementsList` request builder.
     */
    GoalAchievementsList.requestBuilder = function () {
        return new GoalAchievementsListRequestBuilder_1.GoalAchievementsListRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `GoalAchievementsList`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `GoalAchievementsList`.
     */
    GoalAchievementsList.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, GoalAchievementsList);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    GoalAchievementsList.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for GoalAchievementsList.
     */
    GoalAchievementsList._entityName = 'GoalAchievementsList';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for GoalAchievementsList.
     */
    GoalAchievementsList._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    GoalAchievementsList._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return GoalAchievementsList;
}(core_1.Entity));
exports.GoalAchievementsList = GoalAchievementsList;
(function (GoalAchievementsList) {
    /**
     * Static representation of the [[achievementCreatedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalAchievementsList.ACHIEVEMENT_CREATED_BY = new core_1.StringField('achievementCreatedBy', GoalAchievementsList, 'Edm.String');
    /**
     * Static representation of the [[achievementCreatedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalAchievementsList.ACHIEVEMENT_CREATED_DATE = new core_1.DateField('achievementCreatedDate', GoalAchievementsList, 'Edm.DateTime');
    /**
     * Static representation of the [[achievementDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalAchievementsList.ACHIEVEMENT_DATE = new core_1.DateField('achievementDate', GoalAchievementsList, 'Edm.DateTime');
    /**
     * Static representation of the [[achievementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalAchievementsList.ACHIEVEMENT_ID = new core_1.StringField('achievementId', GoalAchievementsList, 'Edm.String');
    /**
     * Static representation of the [[achievementLastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalAchievementsList.ACHIEVEMENT_LAST_MODIFIED_BY = new core_1.StringField('achievementLastModifiedBy', GoalAchievementsList, 'Edm.String');
    /**
     * Static representation of the [[achievementLastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalAchievementsList.ACHIEVEMENT_LAST_MODIFIED_DATE = new core_1.DateField('achievementLastModifiedDate', GoalAchievementsList, 'Edm.DateTime');
    /**
     * Static representation of the [[achievementName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalAchievementsList.ACHIEVEMENT_NAME = new core_1.StringField('achievementName', GoalAchievementsList, 'Edm.String');
    /**
     * Static representation of the [[achievementParentExternalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalAchievementsList.ACHIEVEMENT_PARENT_EXTERNAL_ID = new core_1.BigNumberField('achievementParentExternalId', GoalAchievementsList, 'Edm.Int64');
    /**
     * Static representation of the [[achievementParentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalAchievementsList.ACHIEVEMENT_PARENT_TYPE = new core_1.StringField('achievementParentType', GoalAchievementsList, 'Edm.String');
    /**
     * Static representation of the [[goalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalAchievementsList.GOAL_ID = new core_1.StringField('goalId', GoalAchievementsList, 'Edm.String');
    /**
     * Static representation of the [[subjectUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalAchievementsList.SUBJECT_USER_ID = new core_1.StringField('subjectUserId', GoalAchievementsList, 'Edm.String');
    /**
     * All fields of the GoalAchievementsList entity.
     */
    GoalAchievementsList._allFields = [
        GoalAchievementsList.ACHIEVEMENT_CREATED_BY,
        GoalAchievementsList.ACHIEVEMENT_CREATED_DATE,
        GoalAchievementsList.ACHIEVEMENT_DATE,
        GoalAchievementsList.ACHIEVEMENT_ID,
        GoalAchievementsList.ACHIEVEMENT_LAST_MODIFIED_BY,
        GoalAchievementsList.ACHIEVEMENT_LAST_MODIFIED_DATE,
        GoalAchievementsList.ACHIEVEMENT_NAME,
        GoalAchievementsList.ACHIEVEMENT_PARENT_EXTERNAL_ID,
        GoalAchievementsList.ACHIEVEMENT_PARENT_TYPE,
        GoalAchievementsList.GOAL_ID,
        GoalAchievementsList.SUBJECT_USER_ID
    ];
    /**
     * All fields selector.
     */
    GoalAchievementsList.ALL_FIELDS = new core_1.AllFields('*', GoalAchievementsList);
    /**
     * All key fields of the GoalAchievementsList entity.
     */
    GoalAchievementsList._keyFields = [GoalAchievementsList.GOAL_ID, GoalAchievementsList.SUBJECT_USER_ID];
    /**
     * Mapping of all key field names to the respective static field property GoalAchievementsList.
     */
    GoalAchievementsList._keys = GoalAchievementsList._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(GoalAchievementsList = exports.GoalAchievementsList || (exports.GoalAchievementsList = {}));
exports.GoalAchievementsList = GoalAchievementsList;
//# sourceMappingURL=GoalAchievementsList.js.map