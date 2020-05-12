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
var OnboardingGoalCategoryRequestBuilder_1 = require("./OnboardingGoalCategoryRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "OnboardingGoalCategory" of service "SFOData".
 */
var OnboardingGoalCategory = /** @class */ (function (_super) {
    __extends(OnboardingGoalCategory, _super);
    function OnboardingGoalCategory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `OnboardingGoalCategory`.
     * @returns A builder that constructs instances of entity type `OnboardingGoalCategory`.
     */
    OnboardingGoalCategory.builder = function () {
        return core_1.Entity.entityBuilder(OnboardingGoalCategory);
    };
    /**
     * Returns a request builder to construct requests for operations on the `OnboardingGoalCategory` entity type.
     * @returns A `OnboardingGoalCategory` request builder.
     */
    OnboardingGoalCategory.requestBuilder = function () {
        return new OnboardingGoalCategoryRequestBuilder_1.OnboardingGoalCategoryRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `OnboardingGoalCategory`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `OnboardingGoalCategory`.
     */
    OnboardingGoalCategory.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, OnboardingGoalCategory);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    OnboardingGoalCategory.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for OnboardingGoalCategory.
     */
    OnboardingGoalCategory._entityName = 'OnboardingGoalCategory';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for OnboardingGoalCategory.
     */
    OnboardingGoalCategory._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    OnboardingGoalCategory._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return OnboardingGoalCategory;
}(core_1.Entity));
exports.OnboardingGoalCategory = OnboardingGoalCategory;
var User_1 = require("./User");
var OnboardingGoal_1 = require("./OnboardingGoal");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (OnboardingGoalCategory) {
    /**
     * Static representation of the [[onboardingGoalActivityActivityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalCategory.ONBOARDING_GOAL_ACTIVITY_ACTIVITY_ID = new core_1.BigNumberField('OnboardingGoalActivity_activityId', OnboardingGoalCategory, 'Edm.Int64');
    /**
     * Static representation of the [[onboardingNewHireActivitiesStepProcessStepId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalCategory.ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID = new core_1.BigNumberField('OnboardingNewHireActivitiesStep_processStepId', OnboardingGoalCategory, 'Edm.Int64');
    /**
     * Static representation of the [[onboardingProcessOnboardingProcessId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalCategory.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID = new core_1.BigNumberField('OnboardingProcess_onboardingProcessId', OnboardingGoalCategory, 'Edm.Int64');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalCategory.CREATED_BY = new core_1.StringField('createdBy', OnboardingGoalCategory, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalCategory.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', OnboardingGoalCategory, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[dueDaysAfterStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalCategory.DUE_DAYS_AFTER_START = new core_1.BigNumberField('dueDaysAfterStart', OnboardingGoalCategory, 'Edm.Int64');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalCategory.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', OnboardingGoalCategory, 'Edm.Int64');
    /**
     * Static representation of the [[goalCategoryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalCategory.GOAL_CATEGORY_ID = new core_1.StringField('goalCategoryId', OnboardingGoalCategory, 'Edm.String');
    /**
     * Static representation of the [[goalCategoryName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalCategory.GOAL_CATEGORY_NAME = new core_1.StringField('goalCategoryName', OnboardingGoalCategory, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalCategory.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', OnboardingGoalCategory, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalCategory.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', OnboardingGoalCategory, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalCategory.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', OnboardingGoalCategory, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalCategory.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', OnboardingGoalCategory, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[goals]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalCategory.GOALS = new core_1.Link('goals', OnboardingGoalCategory, OnboardingGoal_1.OnboardingGoal);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalCategory.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', OnboardingGoalCategory, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoalCategory.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', OnboardingGoalCategory, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the OnboardingGoalCategory entity.
     */
    OnboardingGoalCategory._allFields = [
        OnboardingGoalCategory.ONBOARDING_GOAL_ACTIVITY_ACTIVITY_ID,
        OnboardingGoalCategory.ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID,
        OnboardingGoalCategory.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID,
        OnboardingGoalCategory.CREATED_BY,
        OnboardingGoalCategory.CREATED_DATE_TIME,
        OnboardingGoalCategory.DUE_DAYS_AFTER_START,
        OnboardingGoalCategory.EXTERNAL_CODE,
        OnboardingGoalCategory.GOAL_CATEGORY_ID,
        OnboardingGoalCategory.GOAL_CATEGORY_NAME,
        OnboardingGoalCategory.LAST_MODIFIED_BY,
        OnboardingGoalCategory.LAST_MODIFIED_DATE_TIME,
        OnboardingGoalCategory.MDF_SYSTEM_RECORD_STATUS,
        OnboardingGoalCategory.CREATED_BY_NAV,
        OnboardingGoalCategory.GOALS,
        OnboardingGoalCategory.LAST_MODIFIED_BY_NAV,
        OnboardingGoalCategory.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    OnboardingGoalCategory.ALL_FIELDS = new core_1.AllFields('*', OnboardingGoalCategory);
    /**
     * All key fields of the OnboardingGoalCategory entity.
     */
    OnboardingGoalCategory._keyFields = [OnboardingGoalCategory.ONBOARDING_GOAL_ACTIVITY_ACTIVITY_ID, OnboardingGoalCategory.ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID, OnboardingGoalCategory.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID, OnboardingGoalCategory.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property OnboardingGoalCategory.
     */
    OnboardingGoalCategory._keys = OnboardingGoalCategory._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(OnboardingGoalCategory = exports.OnboardingGoalCategory || (exports.OnboardingGoalCategory = {}));
exports.OnboardingGoalCategory = OnboardingGoalCategory;
//# sourceMappingURL=OnboardingGoalCategory.js.map