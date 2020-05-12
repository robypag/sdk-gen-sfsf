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
var OnboardingEquipmentActivityRequestBuilder_1 = require("./OnboardingEquipmentActivityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "OnboardingEquipmentActivity" of service "SFOData".
 */
var OnboardingEquipmentActivity = /** @class */ (function (_super) {
    __extends(OnboardingEquipmentActivity, _super);
    function OnboardingEquipmentActivity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `OnboardingEquipmentActivity`.
     * @returns A builder that constructs instances of entity type `OnboardingEquipmentActivity`.
     */
    OnboardingEquipmentActivity.builder = function () {
        return core_1.Entity.entityBuilder(OnboardingEquipmentActivity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `OnboardingEquipmentActivity` entity type.
     * @returns A `OnboardingEquipmentActivity` request builder.
     */
    OnboardingEquipmentActivity.requestBuilder = function () {
        return new OnboardingEquipmentActivityRequestBuilder_1.OnboardingEquipmentActivityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `OnboardingEquipmentActivity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `OnboardingEquipmentActivity`.
     */
    OnboardingEquipmentActivity.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, OnboardingEquipmentActivity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    OnboardingEquipmentActivity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for OnboardingEquipmentActivity.
     */
    OnboardingEquipmentActivity._entityName = 'OnboardingEquipmentActivity';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for OnboardingEquipmentActivity.
     */
    OnboardingEquipmentActivity._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    OnboardingEquipmentActivity._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return OnboardingEquipmentActivity;
}(core_1.Entity));
exports.OnboardingEquipmentActivity = OnboardingEquipmentActivity;
var MdfEnumValue_1 = require("./MdfEnumValue");
var User_1 = require("./User");
var OnboardingEquipment_1 = require("./OnboardingEquipment");
(function (OnboardingEquipmentActivity) {
    /**
     * Static representation of the [[onboardingNewHireActivitiesStepProcessStepId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentActivity.ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID = new core_1.BigNumberField('OnboardingNewHireActivitiesStep_processStepId', OnboardingEquipmentActivity, 'Edm.Int64');
    /**
     * Static representation of the [[onboardingProcessOnboardingProcessId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentActivity.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID = new core_1.BigNumberField('OnboardingProcess_onboardingProcessId', OnboardingEquipmentActivity, 'Edm.Int64');
    /**
     * Static representation of the [[activityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentActivity.ACTIVITY_ID = new core_1.BigNumberField('activityId', OnboardingEquipmentActivity, 'Edm.Int64');
    /**
     * Static representation of the [[activityStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentActivity.ACTIVITY_STATUS = new core_1.StringField('activityStatus', OnboardingEquipmentActivity, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentActivity.CREATED_BY = new core_1.StringField('createdBy', OnboardingEquipmentActivity, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentActivity.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', OnboardingEquipmentActivity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eventTriggered]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentActivity.EVENT_TRIGGERED = new core_1.BooleanField('eventTriggered', OnboardingEquipmentActivity, 'Edm.Boolean');
    /**
     * Static representation of the [[externalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentActivity.EXTERNAL_NAME = new core_1.StringField('externalName', OnboardingEquipmentActivity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentActivity.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', OnboardingEquipmentActivity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentActivity.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', OnboardingEquipmentActivity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentActivity.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', OnboardingEquipmentActivity, 'Edm.String');
    /**
     * Static representation of the [[optional]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentActivity.OPTIONAL = new core_1.BooleanField('optional', OnboardingEquipmentActivity, 'Edm.Boolean');
    /**
     * Static representation of the one-to-one navigation property [[activityStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentActivity.ACTIVITY_STATUS_NAV = new core_1.OneToOneLink('activityStatusNav', OnboardingEquipmentActivity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentActivity.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', OnboardingEquipmentActivity, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[equipment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentActivity.EQUIPMENT = new core_1.Link('equipment', OnboardingEquipmentActivity, OnboardingEquipment_1.OnboardingEquipment);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentActivity.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', OnboardingEquipmentActivity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentActivity.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', OnboardingEquipmentActivity, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the OnboardingEquipmentActivity entity.
     */
    OnboardingEquipmentActivity._allFields = [
        OnboardingEquipmentActivity.ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID,
        OnboardingEquipmentActivity.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID,
        OnboardingEquipmentActivity.ACTIVITY_ID,
        OnboardingEquipmentActivity.ACTIVITY_STATUS,
        OnboardingEquipmentActivity.CREATED_BY,
        OnboardingEquipmentActivity.CREATED_DATE_TIME,
        OnboardingEquipmentActivity.EVENT_TRIGGERED,
        OnboardingEquipmentActivity.EXTERNAL_NAME,
        OnboardingEquipmentActivity.LAST_MODIFIED_BY,
        OnboardingEquipmentActivity.LAST_MODIFIED_DATE_TIME,
        OnboardingEquipmentActivity.MDF_SYSTEM_RECORD_STATUS,
        OnboardingEquipmentActivity.OPTIONAL,
        OnboardingEquipmentActivity.ACTIVITY_STATUS_NAV,
        OnboardingEquipmentActivity.CREATED_BY_NAV,
        OnboardingEquipmentActivity.EQUIPMENT,
        OnboardingEquipmentActivity.LAST_MODIFIED_BY_NAV,
        OnboardingEquipmentActivity.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    OnboardingEquipmentActivity.ALL_FIELDS = new core_1.AllFields('*', OnboardingEquipmentActivity);
    /**
     * All key fields of the OnboardingEquipmentActivity entity.
     */
    OnboardingEquipmentActivity._keyFields = [OnboardingEquipmentActivity.ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID, OnboardingEquipmentActivity.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID, OnboardingEquipmentActivity.ACTIVITY_ID];
    /**
     * Mapping of all key field names to the respective static field property OnboardingEquipmentActivity.
     */
    OnboardingEquipmentActivity._keys = OnboardingEquipmentActivity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(OnboardingEquipmentActivity = exports.OnboardingEquipmentActivity || (exports.OnboardingEquipmentActivity = {}));
exports.OnboardingEquipmentActivity = OnboardingEquipmentActivity;
//# sourceMappingURL=OnboardingEquipmentActivity.js.map