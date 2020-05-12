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
var OnboardingMeetingEventRequestBuilder_1 = require("./OnboardingMeetingEventRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "OnboardingMeetingEvent" of service "SFOData".
 */
var OnboardingMeetingEvent = /** @class */ (function (_super) {
    __extends(OnboardingMeetingEvent, _super);
    function OnboardingMeetingEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `OnboardingMeetingEvent`.
     * @returns A builder that constructs instances of entity type `OnboardingMeetingEvent`.
     */
    OnboardingMeetingEvent.builder = function () {
        return core_1.Entity.entityBuilder(OnboardingMeetingEvent);
    };
    /**
     * Returns a request builder to construct requests for operations on the `OnboardingMeetingEvent` entity type.
     * @returns A `OnboardingMeetingEvent` request builder.
     */
    OnboardingMeetingEvent.requestBuilder = function () {
        return new OnboardingMeetingEventRequestBuilder_1.OnboardingMeetingEventRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `OnboardingMeetingEvent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `OnboardingMeetingEvent`.
     */
    OnboardingMeetingEvent.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, OnboardingMeetingEvent);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    OnboardingMeetingEvent.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for OnboardingMeetingEvent.
     */
    OnboardingMeetingEvent._entityName = 'OnboardingMeetingEvent';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for OnboardingMeetingEvent.
     */
    OnboardingMeetingEvent._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    OnboardingMeetingEvent._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return OnboardingMeetingEvent;
}(core_1.Entity));
exports.OnboardingMeetingEvent = OnboardingMeetingEvent;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (OnboardingMeetingEvent) {
    /**
     * Static representation of the [[onboardingMeetingActivityActivityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingEvent.ONBOARDING_MEETING_ACTIVITY_ACTIVITY_ID = new core_1.BigNumberField('OnboardingMeetingActivity_activityId', OnboardingMeetingEvent, 'Edm.Int64');
    /**
     * Static representation of the [[onboardingNewHireActivitiesStepProcessStepId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingEvent.ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID = new core_1.BigNumberField('OnboardingNewHireActivitiesStep_processStepId', OnboardingMeetingEvent, 'Edm.Int64');
    /**
     * Static representation of the [[onboardingProcessOnboardingProcessId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingEvent.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID = new core_1.BigNumberField('OnboardingProcess_onboardingProcessId', OnboardingMeetingEvent, 'Edm.Int64');
    /**
     * Static representation of the [[agenda]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingEvent.AGENDA = new core_1.StringField('agenda', OnboardingMeetingEvent, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingEvent.CREATED_BY = new core_1.StringField('createdBy', OnboardingMeetingEvent, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingEvent.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', OnboardingMeetingEvent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingEvent.END_DATE_TIME = new core_1.DateField('endDateTime', OnboardingMeetingEvent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingEvent.EXTERNAL_CODE = new core_1.StringField('externalCode', OnboardingMeetingEvent, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingEvent.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', OnboardingMeetingEvent, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingEvent.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', OnboardingMeetingEvent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingEvent.LOCATION = new core_1.StringField('location', OnboardingMeetingEvent, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingEvent.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', OnboardingMeetingEvent, 'Edm.String');
    /**
     * Static representation of the [[onboardingProcessMeetingTypeConfig]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingEvent.ONBOARDING_PROCESS_MEETING_TYPE_CONFIG = new core_1.StringField('onboardingProcessMeetingTypeConfig', OnboardingMeetingEvent, 'Edm.String');
    /**
     * Static representation of the [[participantUserId1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingEvent.PARTICIPANT_USER_ID_1 = new core_1.StringField('participantUserId1', OnboardingMeetingEvent, 'Edm.String');
    /**
     * Static representation of the [[participantUserId2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingEvent.PARTICIPANT_USER_ID_2 = new core_1.StringField('participantUserId2', OnboardingMeetingEvent, 'Edm.String');
    /**
     * Static representation of the [[participantUserId3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingEvent.PARTICIPANT_USER_ID_3 = new core_1.StringField('participantUserId3', OnboardingMeetingEvent, 'Edm.String');
    /**
     * Static representation of the [[participantUserId4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingEvent.PARTICIPANT_USER_ID_4 = new core_1.StringField('participantUserId4', OnboardingMeetingEvent, 'Edm.String');
    /**
     * Static representation of the [[participantUserId5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingEvent.PARTICIPANT_USER_ID_5 = new core_1.StringField('participantUserId5', OnboardingMeetingEvent, 'Edm.String');
    /**
     * Static representation of the [[send]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingEvent.SEND = new core_1.BooleanField('send', OnboardingMeetingEvent, 'Edm.Boolean');
    /**
     * Static representation of the [[startDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingEvent.START_DATE_TIME = new core_1.DateField('startDateTime', OnboardingMeetingEvent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[subject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingEvent.SUBJECT = new core_1.StringField('subject', OnboardingMeetingEvent, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingEvent.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', OnboardingMeetingEvent, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingEvent.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', OnboardingMeetingEvent, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingEvent.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', OnboardingMeetingEvent, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[participantUserId1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingEvent.PARTICIPANT_USER_ID_1_NAV = new core_1.OneToOneLink('participantUserId1Nav', OnboardingMeetingEvent, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[participantUserId2Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingEvent.PARTICIPANT_USER_ID_2_NAV = new core_1.OneToOneLink('participantUserId2Nav', OnboardingMeetingEvent, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[participantUserId3Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingEvent.PARTICIPANT_USER_ID_3_NAV = new core_1.OneToOneLink('participantUserId3Nav', OnboardingMeetingEvent, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[participantUserId4Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingEvent.PARTICIPANT_USER_ID_4_NAV = new core_1.OneToOneLink('participantUserId4Nav', OnboardingMeetingEvent, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[participantUserId5Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingMeetingEvent.PARTICIPANT_USER_ID_5_NAV = new core_1.OneToOneLink('participantUserId5Nav', OnboardingMeetingEvent, User_1.User);
    /**
     * All fields of the OnboardingMeetingEvent entity.
     */
    OnboardingMeetingEvent._allFields = [
        OnboardingMeetingEvent.ONBOARDING_MEETING_ACTIVITY_ACTIVITY_ID,
        OnboardingMeetingEvent.ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID,
        OnboardingMeetingEvent.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID,
        OnboardingMeetingEvent.AGENDA,
        OnboardingMeetingEvent.CREATED_BY,
        OnboardingMeetingEvent.CREATED_DATE_TIME,
        OnboardingMeetingEvent.END_DATE_TIME,
        OnboardingMeetingEvent.EXTERNAL_CODE,
        OnboardingMeetingEvent.LAST_MODIFIED_BY,
        OnboardingMeetingEvent.LAST_MODIFIED_DATE_TIME,
        OnboardingMeetingEvent.LOCATION,
        OnboardingMeetingEvent.MDF_SYSTEM_RECORD_STATUS,
        OnboardingMeetingEvent.ONBOARDING_PROCESS_MEETING_TYPE_CONFIG,
        OnboardingMeetingEvent.PARTICIPANT_USER_ID_1,
        OnboardingMeetingEvent.PARTICIPANT_USER_ID_2,
        OnboardingMeetingEvent.PARTICIPANT_USER_ID_3,
        OnboardingMeetingEvent.PARTICIPANT_USER_ID_4,
        OnboardingMeetingEvent.PARTICIPANT_USER_ID_5,
        OnboardingMeetingEvent.SEND,
        OnboardingMeetingEvent.START_DATE_TIME,
        OnboardingMeetingEvent.SUBJECT,
        OnboardingMeetingEvent.CREATED_BY_NAV,
        OnboardingMeetingEvent.LAST_MODIFIED_BY_NAV,
        OnboardingMeetingEvent.MDF_SYSTEM_RECORD_STATUS_NAV,
        OnboardingMeetingEvent.PARTICIPANT_USER_ID_1_NAV,
        OnboardingMeetingEvent.PARTICIPANT_USER_ID_2_NAV,
        OnboardingMeetingEvent.PARTICIPANT_USER_ID_3_NAV,
        OnboardingMeetingEvent.PARTICIPANT_USER_ID_4_NAV,
        OnboardingMeetingEvent.PARTICIPANT_USER_ID_5_NAV
    ];
    /**
     * All fields selector.
     */
    OnboardingMeetingEvent.ALL_FIELDS = new core_1.AllFields('*', OnboardingMeetingEvent);
    /**
     * All key fields of the OnboardingMeetingEvent entity.
     */
    OnboardingMeetingEvent._keyFields = [OnboardingMeetingEvent.ONBOARDING_MEETING_ACTIVITY_ACTIVITY_ID, OnboardingMeetingEvent.ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID, OnboardingMeetingEvent.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID, OnboardingMeetingEvent.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property OnboardingMeetingEvent.
     */
    OnboardingMeetingEvent._keys = OnboardingMeetingEvent._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(OnboardingMeetingEvent = exports.OnboardingMeetingEvent || (exports.OnboardingMeetingEvent = {}));
exports.OnboardingMeetingEvent = OnboardingMeetingEvent;
//# sourceMappingURL=OnboardingMeetingEvent.js.map