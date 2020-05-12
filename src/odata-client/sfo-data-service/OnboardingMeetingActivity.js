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
var OnboardingMeetingActivityRequestBuilder_1 = require("./OnboardingMeetingActivityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "OnboardingMeetingActivity" of service "SFOData".
 */
var OnboardingMeetingActivity = /** @class */ (function (_super) {
    __extends(OnboardingMeetingActivity, _super);
    function OnboardingMeetingActivity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `OnboardingMeetingActivity`.
     * @returns A builder that constructs instances of entity type `OnboardingMeetingActivity`.
     */
    OnboardingMeetingActivity.builder = function () {
        return core_1.Entity.entityBuilder(OnboardingMeetingActivity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `OnboardingMeetingActivity` entity type.
     * @returns A `OnboardingMeetingActivity` request builder.
     */
    OnboardingMeetingActivity.requestBuilder = function () {
        return new OnboardingMeetingActivityRequestBuilder_1.OnboardingMeetingActivityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `OnboardingMeetingActivity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `OnboardingMeetingActivity`.
     */
    OnboardingMeetingActivity.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, OnboardingMeetingActivity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    OnboardingMeetingActivity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for OnboardingMeetingActivity.
     */
    OnboardingMeetingActivity._entityName = 'OnboardingMeetingActivity';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for OnboardingMeetingActivity.
     */
    OnboardingMeetingActivity._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    OnboardingMeetingActivity._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return OnboardingMeetingActivity;
}(core_1.Entity));
exports.OnboardingMeetingActivity = OnboardingMeetingActivity;
var MdfEnumValue_1 = require("./MdfEnumValue");
var User_1 = require("./User");
var OnboardingMeetingEvent_1 = require("./OnboardingMeetingEvent");
(function (OnboardingMeetingActivity) {
    /**
     * Static representation of the [[onboardingNewHireActivitiesStepProcessStepId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingActivity.ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID = new core_1.BigNumberField('OnboardingNewHireActivitiesStep_processStepId', OnboardingMeetingActivity, 'Edm.Int64');
    /**
     * Static representation of the [[onboardingProcessOnboardingProcessId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingActivity.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID = new core_1.BigNumberField('OnboardingProcess_onboardingProcessId', OnboardingMeetingActivity, 'Edm.Int64');
    /**
     * Static representation of the [[activityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingActivity.ACTIVITY_ID = new core_1.BigNumberField('activityId', OnboardingMeetingActivity, 'Edm.Int64');
    /**
     * Static representation of the [[activityStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingActivity.ACTIVITY_STATUS = new core_1.StringField('activityStatus', OnboardingMeetingActivity, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingActivity.CREATED_BY = new core_1.StringField('createdBy', OnboardingMeetingActivity, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingActivity.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', OnboardingMeetingActivity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eventTriggered]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingActivity.EVENT_TRIGGERED = new core_1.BooleanField('eventTriggered', OnboardingMeetingActivity, 'Edm.Boolean');
    /**
     * Static representation of the [[externalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingActivity.EXTERNAL_NAME = new core_1.StringField('externalName', OnboardingMeetingActivity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingActivity.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', OnboardingMeetingActivity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingActivity.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', OnboardingMeetingActivity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingActivity.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', OnboardingMeetingActivity, 'Edm.String');
    /**
     * Static representation of the [[optional]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingActivity.OPTIONAL = new core_1.BooleanField('optional', OnboardingMeetingActivity, 'Edm.Boolean');
    /**
     * Static representation of the one-to-one navigation property [[activityStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingActivity.ACTIVITY_STATUS_NAV = new core_1.OneToOneLink('activityStatusNav', OnboardingMeetingActivity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingActivity.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', OnboardingMeetingActivity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingActivity.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', OnboardingMeetingActivity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingActivity.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', OnboardingMeetingActivity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[meetingEvent]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingActivity.MEETING_EVENT = new core_1.Link('meetingEvent', OnboardingMeetingActivity, OnboardingMeetingEvent_1.OnboardingMeetingEvent);
    /**
     * All fields of the OnboardingMeetingActivity entity.
     */
    OnboardingMeetingActivity._allFields = [
        OnboardingMeetingActivity.ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID,
        OnboardingMeetingActivity.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID,
        OnboardingMeetingActivity.ACTIVITY_ID,
        OnboardingMeetingActivity.ACTIVITY_STATUS,
        OnboardingMeetingActivity.CREATED_BY,
        OnboardingMeetingActivity.CREATED_DATE_TIME,
        OnboardingMeetingActivity.EVENT_TRIGGERED,
        OnboardingMeetingActivity.EXTERNAL_NAME,
        OnboardingMeetingActivity.LAST_MODIFIED_BY,
        OnboardingMeetingActivity.LAST_MODIFIED_DATE_TIME,
        OnboardingMeetingActivity.MDF_SYSTEM_RECORD_STATUS,
        OnboardingMeetingActivity.OPTIONAL,
        OnboardingMeetingActivity.ACTIVITY_STATUS_NAV,
        OnboardingMeetingActivity.CREATED_BY_NAV,
        OnboardingMeetingActivity.LAST_MODIFIED_BY_NAV,
        OnboardingMeetingActivity.MDF_SYSTEM_RECORD_STATUS_NAV,
        OnboardingMeetingActivity.MEETING_EVENT
    ];
    /**
     * All fields selector.
     */
    OnboardingMeetingActivity.ALL_FIELDS = new core_1.AllFields('*', OnboardingMeetingActivity);
    /**
     * All key fields of the OnboardingMeetingActivity entity.
     */
    OnboardingMeetingActivity._keyFields = [OnboardingMeetingActivity.ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID, OnboardingMeetingActivity.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID, OnboardingMeetingActivity.ACTIVITY_ID];
    /**
     * Mapping of all key field names to the respective static field property OnboardingMeetingActivity.
     */
    OnboardingMeetingActivity._keys = OnboardingMeetingActivity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(OnboardingMeetingActivity = exports.OnboardingMeetingActivity || (exports.OnboardingMeetingActivity = {}));
exports.OnboardingMeetingActivity = OnboardingMeetingActivity;
//# sourceMappingURL=OnboardingMeetingActivity.js.map