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
var OnboardingNewHireActivitiesStepRequestBuilder_1 = require("./OnboardingNewHireActivitiesStepRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "OnboardingNewHireActivitiesStep" of service "SFOData".
 */
var OnboardingNewHireActivitiesStep = /** @class */ (function (_super) {
    __extends(OnboardingNewHireActivitiesStep, _super);
    function OnboardingNewHireActivitiesStep() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `OnboardingNewHireActivitiesStep`.
     * @returns A builder that constructs instances of entity type `OnboardingNewHireActivitiesStep`.
     */
    OnboardingNewHireActivitiesStep.builder = function () {
        return core_1.Entity.entityBuilder(OnboardingNewHireActivitiesStep);
    };
    /**
     * Returns a request builder to construct requests for operations on the `OnboardingNewHireActivitiesStep` entity type.
     * @returns A `OnboardingNewHireActivitiesStep` request builder.
     */
    OnboardingNewHireActivitiesStep.requestBuilder = function () {
        return new OnboardingNewHireActivitiesStepRequestBuilder_1.OnboardingNewHireActivitiesStepRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `OnboardingNewHireActivitiesStep`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `OnboardingNewHireActivitiesStep`.
     */
    OnboardingNewHireActivitiesStep.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, OnboardingNewHireActivitiesStep);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    OnboardingNewHireActivitiesStep.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for OnboardingNewHireActivitiesStep.
     */
    OnboardingNewHireActivitiesStep._entityName = 'OnboardingNewHireActivitiesStep';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for OnboardingNewHireActivitiesStep.
     */
    OnboardingNewHireActivitiesStep._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    OnboardingNewHireActivitiesStep._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return OnboardingNewHireActivitiesStep;
}(core_1.Entity));
exports.OnboardingNewHireActivitiesStep = OnboardingNewHireActivitiesStep;
var User_1 = require("./User");
var OnboardingEquipmentActivity_1 = require("./OnboardingEquipmentActivity");
var OnboardingGoalActivity_1 = require("./OnboardingGoalActivity");
var MdfEnumValue_1 = require("./MdfEnumValue");
var OnboardingMeetingActivity_1 = require("./OnboardingMeetingActivity");
(function (OnboardingNewHireActivitiesStep) {
    /**
     * Static representation of the [[onboardingProcessOnboardingProcessId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingNewHireActivitiesStep.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID = new core_1.BigNumberField('OnboardingProcess_onboardingProcessId', OnboardingNewHireActivitiesStep, 'Edm.Int64');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingNewHireActivitiesStep.CREATED_BY = new core_1.StringField('createdBy', OnboardingNewHireActivitiesStep, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingNewHireActivitiesStep.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', OnboardingNewHireActivitiesStep, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingNewHireActivitiesStep.EXTERNAL_NAME = new core_1.StringField('externalName', OnboardingNewHireActivitiesStep, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingNewHireActivitiesStep.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', OnboardingNewHireActivitiesStep, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingNewHireActivitiesStep.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', OnboardingNewHireActivitiesStep, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingNewHireActivitiesStep.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', OnboardingNewHireActivitiesStep, 'Edm.String');
    /**
     * Static representation of the [[processStepId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingNewHireActivitiesStep.PROCESS_STEP_ID = new core_1.BigNumberField('processStepId', OnboardingNewHireActivitiesStep, 'Edm.Int64');
    /**
     * Static representation of the [[processStepStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingNewHireActivitiesStep.PROCESS_STEP_STATUS = new core_1.StringField('processStepStatus', OnboardingNewHireActivitiesStep, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingNewHireActivitiesStep.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', OnboardingNewHireActivitiesStep, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[equipmentActivity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingNewHireActivitiesStep.EQUIPMENT_ACTIVITY = new core_1.OneToOneLink('equipmentActivity', OnboardingNewHireActivitiesStep, OnboardingEquipmentActivity_1.OnboardingEquipmentActivity);
    /**
     * Static representation of the one-to-one navigation property [[goalActivity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingNewHireActivitiesStep.GOAL_ACTIVITY = new core_1.OneToOneLink('goalActivity', OnboardingNewHireActivitiesStep, OnboardingGoalActivity_1.OnboardingGoalActivity);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingNewHireActivitiesStep.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', OnboardingNewHireActivitiesStep, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingNewHireActivitiesStep.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', OnboardingNewHireActivitiesStep, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[meetingActivity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingNewHireActivitiesStep.MEETING_ACTIVITY = new core_1.OneToOneLink('meetingActivity', OnboardingNewHireActivitiesStep, OnboardingMeetingActivity_1.OnboardingMeetingActivity);
    /**
     * Static representation of the one-to-one navigation property [[processStepStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingNewHireActivitiesStep.PROCESS_STEP_STATUS_NAV = new core_1.OneToOneLink('processStepStatusNav', OnboardingNewHireActivitiesStep, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the OnboardingNewHireActivitiesStep entity.
     */
    OnboardingNewHireActivitiesStep._allFields = [
        OnboardingNewHireActivitiesStep.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID,
        OnboardingNewHireActivitiesStep.CREATED_BY,
        OnboardingNewHireActivitiesStep.CREATED_DATE_TIME,
        OnboardingNewHireActivitiesStep.EXTERNAL_NAME,
        OnboardingNewHireActivitiesStep.LAST_MODIFIED_BY,
        OnboardingNewHireActivitiesStep.LAST_MODIFIED_DATE_TIME,
        OnboardingNewHireActivitiesStep.MDF_SYSTEM_RECORD_STATUS,
        OnboardingNewHireActivitiesStep.PROCESS_STEP_ID,
        OnboardingNewHireActivitiesStep.PROCESS_STEP_STATUS,
        OnboardingNewHireActivitiesStep.CREATED_BY_NAV,
        OnboardingNewHireActivitiesStep.EQUIPMENT_ACTIVITY,
        OnboardingNewHireActivitiesStep.GOAL_ACTIVITY,
        OnboardingNewHireActivitiesStep.LAST_MODIFIED_BY_NAV,
        OnboardingNewHireActivitiesStep.MDF_SYSTEM_RECORD_STATUS_NAV,
        OnboardingNewHireActivitiesStep.MEETING_ACTIVITY,
        OnboardingNewHireActivitiesStep.PROCESS_STEP_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    OnboardingNewHireActivitiesStep.ALL_FIELDS = new core_1.AllFields('*', OnboardingNewHireActivitiesStep);
    /**
     * All key fields of the OnboardingNewHireActivitiesStep entity.
     */
    OnboardingNewHireActivitiesStep._keyFields = [OnboardingNewHireActivitiesStep.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID, OnboardingNewHireActivitiesStep.PROCESS_STEP_ID];
    /**
     * Mapping of all key field names to the respective static field property OnboardingNewHireActivitiesStep.
     */
    OnboardingNewHireActivitiesStep._keys = OnboardingNewHireActivitiesStep._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(OnboardingNewHireActivitiesStep = exports.OnboardingNewHireActivitiesStep || (exports.OnboardingNewHireActivitiesStep = {}));
exports.OnboardingNewHireActivitiesStep = OnboardingNewHireActivitiesStep;
//# sourceMappingURL=OnboardingNewHireActivitiesStep.js.map