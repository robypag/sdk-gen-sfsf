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
var OnboardingGoalActivityRequestBuilder_1 = require("./OnboardingGoalActivityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "OnboardingGoalActivity" of service "SFOData".
 */
var OnboardingGoalActivity = /** @class */ (function (_super) {
    __extends(OnboardingGoalActivity, _super);
    function OnboardingGoalActivity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `OnboardingGoalActivity`.
     * @returns A builder that constructs instances of entity type `OnboardingGoalActivity`.
     */
    OnboardingGoalActivity.builder = function () {
        return core_1.Entity.entityBuilder(OnboardingGoalActivity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `OnboardingGoalActivity` entity type.
     * @returns A `OnboardingGoalActivity` request builder.
     */
    OnboardingGoalActivity.requestBuilder = function () {
        return new OnboardingGoalActivityRequestBuilder_1.OnboardingGoalActivityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `OnboardingGoalActivity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `OnboardingGoalActivity`.
     */
    OnboardingGoalActivity.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, OnboardingGoalActivity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    OnboardingGoalActivity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for OnboardingGoalActivity.
     */
    OnboardingGoalActivity._entityName = 'OnboardingGoalActivity';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for OnboardingGoalActivity.
     */
    OnboardingGoalActivity._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    OnboardingGoalActivity._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return OnboardingGoalActivity;
}(core_1.Entity));
exports.OnboardingGoalActivity = OnboardingGoalActivity;
var MdfEnumValue_1 = require("./MdfEnumValue");
var User_1 = require("./User");
var OnboardingGoalCategory_1 = require("./OnboardingGoalCategory");
(function (OnboardingGoalActivity) {
    /**
     * Static representation of the [[onboardingNewHireActivitiesStepProcessStepId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalActivity.ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID = new core_1.BigNumberField('OnboardingNewHireActivitiesStep_processStepId', OnboardingGoalActivity, 'Edm.Int64');
    /**
     * Static representation of the [[onboardingProcessOnboardingProcessId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalActivity.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID = new core_1.BigNumberField('OnboardingProcess_onboardingProcessId', OnboardingGoalActivity, 'Edm.Int64');
    /**
     * Static representation of the [[activityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalActivity.ACTIVITY_ID = new core_1.BigNumberField('activityId', OnboardingGoalActivity, 'Edm.Int64');
    /**
     * Static representation of the [[activityStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalActivity.ACTIVITY_STATUS = new core_1.StringField('activityStatus', OnboardingGoalActivity, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalActivity.CREATED_BY = new core_1.StringField('createdBy', OnboardingGoalActivity, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalActivity.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', OnboardingGoalActivity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eventTriggered]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalActivity.EVENT_TRIGGERED = new core_1.BooleanField('eventTriggered', OnboardingGoalActivity, 'Edm.Boolean');
    /**
     * Static representation of the [[externalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalActivity.EXTERNAL_NAME = new core_1.StringField('externalName', OnboardingGoalActivity, 'Edm.String');
    /**
     * Static representation of the [[goalActivityStatusSetManually]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalActivity.GOAL_ACTIVITY_STATUS_SET_MANUALLY = new core_1.BooleanField('goalActivityStatusSetManually', OnboardingGoalActivity, 'Edm.Boolean');
    /**
     * Static representation of the [[goalsTransferStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalActivity.GOALS_TRANSFER_STATUS = new core_1.StringField('goalsTransferStatus', OnboardingGoalActivity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalActivity.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', OnboardingGoalActivity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalActivity.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', OnboardingGoalActivity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalActivity.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', OnboardingGoalActivity, 'Edm.String');
    /**
     * Static representation of the [[optional]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalActivity.OPTIONAL = new core_1.BooleanField('optional', OnboardingGoalActivity, 'Edm.Boolean');
    /**
     * Static representation of the one-to-one navigation property [[activityStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalActivity.ACTIVITY_STATUS_NAV = new core_1.OneToOneLink('activityStatusNav', OnboardingGoalActivity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalActivity.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', OnboardingGoalActivity, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[goalCategories]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalActivity.GOAL_CATEGORIES = new core_1.Link('goalCategories', OnboardingGoalActivity, OnboardingGoalCategory_1.OnboardingGoalCategory);
    /**
     * Static representation of the one-to-one navigation property [[goalsTransferStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalActivity.GOALS_TRANSFER_STATUS_NAV = new core_1.OneToOneLink('goalsTransferStatusNav', OnboardingGoalActivity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalActivity.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', OnboardingGoalActivity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalActivity.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', OnboardingGoalActivity, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the OnboardingGoalActivity entity.
     */
    OnboardingGoalActivity._allFields = [
        OnboardingGoalActivity.ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID,
        OnboardingGoalActivity.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID,
        OnboardingGoalActivity.ACTIVITY_ID,
        OnboardingGoalActivity.ACTIVITY_STATUS,
        OnboardingGoalActivity.CREATED_BY,
        OnboardingGoalActivity.CREATED_DATE_TIME,
        OnboardingGoalActivity.EVENT_TRIGGERED,
        OnboardingGoalActivity.EXTERNAL_NAME,
        OnboardingGoalActivity.GOAL_ACTIVITY_STATUS_SET_MANUALLY,
        OnboardingGoalActivity.GOALS_TRANSFER_STATUS,
        OnboardingGoalActivity.LAST_MODIFIED_BY,
        OnboardingGoalActivity.LAST_MODIFIED_DATE_TIME,
        OnboardingGoalActivity.MDF_SYSTEM_RECORD_STATUS,
        OnboardingGoalActivity.OPTIONAL,
        OnboardingGoalActivity.ACTIVITY_STATUS_NAV,
        OnboardingGoalActivity.CREATED_BY_NAV,
        OnboardingGoalActivity.GOAL_CATEGORIES,
        OnboardingGoalActivity.GOALS_TRANSFER_STATUS_NAV,
        OnboardingGoalActivity.LAST_MODIFIED_BY_NAV,
        OnboardingGoalActivity.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    OnboardingGoalActivity.ALL_FIELDS = new core_1.AllFields('*', OnboardingGoalActivity);
    /**
     * All key fields of the OnboardingGoalActivity entity.
     */
    OnboardingGoalActivity._keyFields = [OnboardingGoalActivity.ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID, OnboardingGoalActivity.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID, OnboardingGoalActivity.ACTIVITY_ID];
    /**
     * Mapping of all key field names to the respective static field property OnboardingGoalActivity.
     */
    OnboardingGoalActivity._keys = OnboardingGoalActivity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(OnboardingGoalActivity = exports.OnboardingGoalActivity || (exports.OnboardingGoalActivity = {}));
exports.OnboardingGoalActivity = OnboardingGoalActivity;
//# sourceMappingURL=OnboardingGoalActivity.js.map