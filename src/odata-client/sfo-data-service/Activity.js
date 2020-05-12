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
var ActivityRequestBuilder_1 = require("./ActivityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Activity" of service "SFOData".
 */
var Activity = /** @class */ (function (_super) {
    __extends(Activity, _super);
    function Activity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Activity`.
     * @returns A builder that constructs instances of entity type `Activity`.
     */
    Activity.builder = function () {
        return core_1.Entity.entityBuilder(Activity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Activity` entity type.
     * @returns A `Activity` request builder.
     */
    Activity.requestBuilder = function () {
        return new ActivityRequestBuilder_1.ActivityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Activity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Activity`.
     */
    Activity.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Activity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Activity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Activity.
     */
    Activity._entityName = 'Activity';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Activity.
     */
    Activity._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Activity._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Activity;
}(core_1.Entity));
exports.Activity = Activity;
var Achievement_1 = require("./Achievement");
var ActivityStatus_1 = require("./ActivityStatus");
var User_1 = require("./User");
var DevGoalDetail_1 = require("./DevGoalDetail");
var ActivityFeedback_1 = require("./ActivityFeedback");
var GoalDetail_1 = require("./GoalDetail");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (Activity) {
    /**
     * Static representation of the [[activityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activity.ACTIVITY_ID = new core_1.BigNumberField('activityId', Activity, 'Edm.Int64');
    /**
     * Static representation of the [[activityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activity.ACTIVITY_NAME = new core_1.StringField('activityName', Activity, 'Edm.String');
    /**
     * Static representation of the [[activityPriority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activity.ACTIVITY_PRIORITY = new core_1.StringField('activityPriority', Activity, 'Edm.String');
    /**
     * Static representation of the [[activityState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activity.ACTIVITY_STATE = new core_1.StringField('activityState', Activity, 'Edm.String');
    /**
     * Static representation of the [[activityStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activity.ACTIVITY_STATUS = new core_1.StringField('activityStatus', Activity, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activity.CREATED_BY = new core_1.StringField('createdBy', Activity, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activity.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', Activity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activity.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', Activity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activity.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', Activity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activity.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', Activity, 'Edm.String');
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activity.RECORD_ID = new core_1.StringField('recordId', Activity, 'Edm.String');
    /**
     * Static representation of the [[snapshot]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activity.SNAPSHOT = new core_1.BooleanField('snapshot', Activity, 'Edm.Boolean');
    /**
     * Static representation of the [[subjectUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activity.SUBJECT_USER_ID = new core_1.StringField('subjectUserId', Activity, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[achievements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activity.ACHIEVEMENTS = new core_1.Link('achievements', Activity, Achievement_1.Achievement);
    /**
     * Static representation of the one-to-one navigation property [[activityStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activity.ACTIVITY_STATUS_NAV = new core_1.OneToOneLink('activityStatusNav', Activity, ActivityStatus_1.ActivityStatus);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activity.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', Activity, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[devGoalDetailList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activity.DEV_GOAL_DETAIL_LIST = new core_1.Link('devGoalDetailList', Activity, DevGoalDetail_1.DevGoalDetail);
    /**
     * Static representation of the one-to-many navigation property [[feedbacks]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activity.FEEDBACKS = new core_1.Link('feedbacks', Activity, ActivityFeedback_1.ActivityFeedback);
    /**
     * Static representation of the one-to-many navigation property [[goalDetailList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activity.GOAL_DETAIL_LIST = new core_1.Link('goalDetailList', Activity, GoalDetail_1.GoalDetail);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activity.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', Activity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activity.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', Activity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[subjectUserIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activity.SUBJECT_USER_ID_NAV = new core_1.OneToOneLink('subjectUserIdNav', Activity, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activity.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', Activity, WfRequest_1.WfRequest);
    /**
     * All fields of the Activity entity.
     */
    Activity._allFields = [
        Activity.ACTIVITY_ID,
        Activity.ACTIVITY_NAME,
        Activity.ACTIVITY_PRIORITY,
        Activity.ACTIVITY_STATE,
        Activity.ACTIVITY_STATUS,
        Activity.CREATED_BY,
        Activity.CREATED_DATE_TIME,
        Activity.LAST_MODIFIED_BY,
        Activity.LAST_MODIFIED_DATE_TIME,
        Activity.MDF_SYSTEM_RECORD_STATUS,
        Activity.RECORD_ID,
        Activity.SNAPSHOT,
        Activity.SUBJECT_USER_ID,
        Activity.ACHIEVEMENTS,
        Activity.ACTIVITY_STATUS_NAV,
        Activity.CREATED_BY_NAV,
        Activity.DEV_GOAL_DETAIL_LIST,
        Activity.FEEDBACKS,
        Activity.GOAL_DETAIL_LIST,
        Activity.LAST_MODIFIED_BY_NAV,
        Activity.MDF_SYSTEM_RECORD_STATUS_NAV,
        Activity.SUBJECT_USER_ID_NAV,
        Activity.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    Activity.ALL_FIELDS = new core_1.AllFields('*', Activity);
    /**
     * All key fields of the Activity entity.
     */
    Activity._keyFields = [Activity.ACTIVITY_ID];
    /**
     * Mapping of all key field names to the respective static field property Activity.
     */
    Activity._keys = Activity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Activity = exports.Activity || (exports.Activity = {}));
exports.Activity = Activity;
//# sourceMappingURL=Activity.js.map