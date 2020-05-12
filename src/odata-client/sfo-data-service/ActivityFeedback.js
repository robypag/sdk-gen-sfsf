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
var ActivityFeedbackRequestBuilder_1 = require("./ActivityFeedbackRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ActivityFeedback" of service "SFOData".
 */
var ActivityFeedback = /** @class */ (function (_super) {
    __extends(ActivityFeedback, _super);
    function ActivityFeedback() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ActivityFeedback`.
     * @returns A builder that constructs instances of entity type `ActivityFeedback`.
     */
    ActivityFeedback.builder = function () {
        return core_1.Entity.entityBuilder(ActivityFeedback);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ActivityFeedback` entity type.
     * @returns A `ActivityFeedback` request builder.
     */
    ActivityFeedback.requestBuilder = function () {
        return new ActivityFeedbackRequestBuilder_1.ActivityFeedbackRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ActivityFeedback`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ActivityFeedback`.
     */
    ActivityFeedback.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, ActivityFeedback);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ActivityFeedback.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ActivityFeedback.
     */
    ActivityFeedback._entityName = 'ActivityFeedback';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ActivityFeedback.
     */
    ActivityFeedback._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    ActivityFeedback._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ActivityFeedback;
}(core_1.Entity));
exports.ActivityFeedback = ActivityFeedback;
var Achievement_1 = require("./Achievement");
var User_1 = require("./User");
var FeedbackFlag_1 = require("./FeedbackFlag");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (ActivityFeedback) {
    /**
     * Static representation of the [[activityActivityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityFeedback.ACTIVITY_ACTIVITY_ID = new core_1.BigNumberField('Activity_activityId', ActivityFeedback, 'Edm.Int64');
    /**
     * Static representation of the [[achievement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityFeedback.ACHIEVEMENT = new core_1.StringField('achievement', ActivityFeedback, 'Edm.String');
    /**
     * Static representation of the [[activityFeedbackId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityFeedback.ACTIVITY_FEEDBACK_ID = new core_1.BigNumberField('activityFeedbackId', ActivityFeedback, 'Edm.Int64');
    /**
     * Static representation of the [[commentContent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityFeedback.COMMENT_CONTENT = new core_1.StringField('commentContent', ActivityFeedback, 'Edm.String');
    /**
     * Static representation of the [[commenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityFeedback.COMMENTER = new core_1.StringField('commenter', ActivityFeedback, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityFeedback.CREATED_BY = new core_1.StringField('createdBy', ActivityFeedback, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityFeedback.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', ActivityFeedback, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[feedbackFlag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityFeedback.FEEDBACK_FLAG = new core_1.StringField('feedbackFlag', ActivityFeedback, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityFeedback.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', ActivityFeedback, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityFeedback.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', ActivityFeedback, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityFeedback.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', ActivityFeedback, 'Edm.String');
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityFeedback.RECORD_ID = new core_1.StringField('recordId', ActivityFeedback, 'Edm.String');
    /**
     * Static representation of the [[reviewed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityFeedback.REVIEWED = new core_1.BooleanField('reviewed', ActivityFeedback, 'Edm.Boolean');
    /**
     * Static representation of the [[snapshot]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityFeedback.SNAPSHOT = new core_1.BooleanField('snapshot', ActivityFeedback, 'Edm.Boolean');
    /**
     * Static representation of the one-to-one navigation property [[achievementNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityFeedback.ACHIEVEMENT_NAV = new core_1.OneToOneLink('achievementNav', ActivityFeedback, Achievement_1.Achievement);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityFeedback.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', ActivityFeedback, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[feedbackFlagNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityFeedback.FEEDBACK_FLAG_NAV = new core_1.OneToOneLink('feedbackFlagNav', ActivityFeedback, FeedbackFlag_1.FeedbackFlag);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityFeedback.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', ActivityFeedback, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityFeedback.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', ActivityFeedback, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the ActivityFeedback entity.
     */
    ActivityFeedback._allFields = [
        ActivityFeedback.ACTIVITY_ACTIVITY_ID,
        ActivityFeedback.ACHIEVEMENT,
        ActivityFeedback.ACTIVITY_FEEDBACK_ID,
        ActivityFeedback.COMMENT_CONTENT,
        ActivityFeedback.COMMENTER,
        ActivityFeedback.CREATED_BY,
        ActivityFeedback.CREATED_DATE_TIME,
        ActivityFeedback.FEEDBACK_FLAG,
        ActivityFeedback.LAST_MODIFIED_BY,
        ActivityFeedback.LAST_MODIFIED_DATE_TIME,
        ActivityFeedback.MDF_SYSTEM_RECORD_STATUS,
        ActivityFeedback.RECORD_ID,
        ActivityFeedback.REVIEWED,
        ActivityFeedback.SNAPSHOT,
        ActivityFeedback.ACHIEVEMENT_NAV,
        ActivityFeedback.CREATED_BY_NAV,
        ActivityFeedback.FEEDBACK_FLAG_NAV,
        ActivityFeedback.LAST_MODIFIED_BY_NAV,
        ActivityFeedback.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    ActivityFeedback.ALL_FIELDS = new core_1.AllFields('*', ActivityFeedback);
    /**
     * All key fields of the ActivityFeedback entity.
     */
    ActivityFeedback._keyFields = [ActivityFeedback.ACTIVITY_ACTIVITY_ID, ActivityFeedback.ACTIVITY_FEEDBACK_ID];
    /**
     * Mapping of all key field names to the respective static field property ActivityFeedback.
     */
    ActivityFeedback._keys = ActivityFeedback._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ActivityFeedback = exports.ActivityFeedback || (exports.ActivityFeedback = {}));
exports.ActivityFeedback = ActivityFeedback;
//# sourceMappingURL=ActivityFeedback.js.map