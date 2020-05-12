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
var OnboardingGoalRequestBuilder_1 = require("./OnboardingGoalRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "OnboardingGoal" of service "SFOData".
 */
var OnboardingGoal = /** @class */ (function (_super) {
    __extends(OnboardingGoal, _super);
    function OnboardingGoal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `OnboardingGoal`.
     * @returns A builder that constructs instances of entity type `OnboardingGoal`.
     */
    OnboardingGoal.builder = function () {
        return core_1.Entity.entityBuilder(OnboardingGoal);
    };
    /**
     * Returns a request builder to construct requests for operations on the `OnboardingGoal` entity type.
     * @returns A `OnboardingGoal` request builder.
     */
    OnboardingGoal.requestBuilder = function () {
        return new OnboardingGoalRequestBuilder_1.OnboardingGoalRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `OnboardingGoal`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `OnboardingGoal`.
     */
    OnboardingGoal.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, OnboardingGoal);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    OnboardingGoal.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for OnboardingGoal.
     */
    OnboardingGoal._entityName = 'OnboardingGoal';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for OnboardingGoal.
     */
    OnboardingGoal._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    OnboardingGoal._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return OnboardingGoal;
}(core_1.Entity));
exports.OnboardingGoal = OnboardingGoal;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (OnboardingGoal) {
    /**
     * Static representation of the [[onboardingGoalActivityActivityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoal.ONBOARDING_GOAL_ACTIVITY_ACTIVITY_ID = new core_1.BigNumberField('OnboardingGoalActivity_activityId', OnboardingGoal, 'Edm.Int64');
    /**
     * Static representation of the [[onboardingGoalCategoryExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoal.ONBOARDING_GOAL_CATEGORY_EXTERNAL_CODE = new core_1.BigNumberField('OnboardingGoalCategory_externalCode', OnboardingGoal, 'Edm.Int64');
    /**
     * Static representation of the [[onboardingNewHireActivitiesStepProcessStepId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoal.ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID = new core_1.BigNumberField('OnboardingNewHireActivitiesStep_processStepId', OnboardingGoal, 'Edm.Int64');
    /**
     * Static representation of the [[onboardingProcessOnboardingProcessId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoal.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID = new core_1.BigNumberField('OnboardingProcess_onboardingProcessId', OnboardingGoal, 'Edm.Int64');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoal.CREATED_BY = new core_1.StringField('createdBy', OnboardingGoal, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoal.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', OnboardingGoal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[goalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoal.GOAL_ID = new core_1.BigNumberField('goalId', OnboardingGoal, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoal.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', OnboardingGoal, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoal.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', OnboardingGoal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoal.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', OnboardingGoal, 'Edm.String');
    /**
     * Static representation of the [[text]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoal.TEXT = new core_1.StringField('text', OnboardingGoal, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoal.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', OnboardingGoal, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoal.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', OnboardingGoal, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingGoal.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', OnboardingGoal, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the OnboardingGoal entity.
     */
    OnboardingGoal._allFields = [
        OnboardingGoal.ONBOARDING_GOAL_ACTIVITY_ACTIVITY_ID,
        OnboardingGoal.ONBOARDING_GOAL_CATEGORY_EXTERNAL_CODE,
        OnboardingGoal.ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID,
        OnboardingGoal.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID,
        OnboardingGoal.CREATED_BY,
        OnboardingGoal.CREATED_DATE_TIME,
        OnboardingGoal.GOAL_ID,
        OnboardingGoal.LAST_MODIFIED_BY,
        OnboardingGoal.LAST_MODIFIED_DATE_TIME,
        OnboardingGoal.MDF_SYSTEM_RECORD_STATUS,
        OnboardingGoal.TEXT,
        OnboardingGoal.CREATED_BY_NAV,
        OnboardingGoal.LAST_MODIFIED_BY_NAV,
        OnboardingGoal.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    OnboardingGoal.ALL_FIELDS = new core_1.AllFields('*', OnboardingGoal);
    /**
     * All key fields of the OnboardingGoal entity.
     */
    OnboardingGoal._keyFields = [OnboardingGoal.ONBOARDING_GOAL_ACTIVITY_ACTIVITY_ID, OnboardingGoal.ONBOARDING_GOAL_CATEGORY_EXTERNAL_CODE, OnboardingGoal.ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID, OnboardingGoal.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID, OnboardingGoal.GOAL_ID];
    /**
     * Mapping of all key field names to the respective static field property OnboardingGoal.
     */
    OnboardingGoal._keys = OnboardingGoal._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(OnboardingGoal = exports.OnboardingGoal || (exports.OnboardingGoal = {}));
exports.OnboardingGoal = OnboardingGoal;
//# sourceMappingURL=OnboardingGoal.js.map