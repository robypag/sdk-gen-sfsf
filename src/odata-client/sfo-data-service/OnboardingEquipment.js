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
var OnboardingEquipmentRequestBuilder_1 = require("./OnboardingEquipmentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "OnboardingEquipment" of service "SFOData".
 */
var OnboardingEquipment = /** @class */ (function (_super) {
    __extends(OnboardingEquipment, _super);
    function OnboardingEquipment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `OnboardingEquipment`.
     * @returns A builder that constructs instances of entity type `OnboardingEquipment`.
     */
    OnboardingEquipment.builder = function () {
        return core_1.Entity.entityBuilder(OnboardingEquipment);
    };
    /**
     * Returns a request builder to construct requests for operations on the `OnboardingEquipment` entity type.
     * @returns A `OnboardingEquipment` request builder.
     */
    OnboardingEquipment.requestBuilder = function () {
        return new OnboardingEquipmentRequestBuilder_1.OnboardingEquipmentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `OnboardingEquipment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `OnboardingEquipment`.
     */
    OnboardingEquipment.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, OnboardingEquipment);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    OnboardingEquipment.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for OnboardingEquipment.
     */
    OnboardingEquipment._entityName = 'OnboardingEquipment';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for OnboardingEquipment.
     */
    OnboardingEquipment._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    OnboardingEquipment._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return OnboardingEquipment;
}(core_1.Entity));
exports.OnboardingEquipment = OnboardingEquipment;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var OnboardingEquipmentType_1_1 = require("./OnboardingEquipmentType_1");
var OnboardingEquipmentTypeValue_1 = require("./OnboardingEquipmentTypeValue");
(function (OnboardingEquipment) {
    /**
     * Static representation of the [[onboardingEquipmentActivityActivityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipment.ONBOARDING_EQUIPMENT_ACTIVITY_ACTIVITY_ID = new core_1.BigNumberField('OnboardingEquipmentActivity_activityId', OnboardingEquipment, 'Edm.Int64');
    /**
     * Static representation of the [[onboardingNewHireActivitiesStepProcessStepId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipment.ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID = new core_1.BigNumberField('OnboardingNewHireActivitiesStep_processStepId', OnboardingEquipment, 'Edm.Int64');
    /**
     * Static representation of the [[onboardingProcessOnboardingProcessId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipment.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID = new core_1.BigNumberField('OnboardingProcess_onboardingProcessId', OnboardingEquipment, 'Edm.Int64');
    /**
     * Static representation of the [[comment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipment.COMMENT = new core_1.StringField('comment', OnboardingEquipment, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipment.CREATED_BY = new core_1.StringField('createdBy', OnboardingEquipment, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipment.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', OnboardingEquipment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[equipmentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipment.EQUIPMENT_ID = new core_1.StringField('equipmentId', OnboardingEquipment, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipment.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', OnboardingEquipment, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipment.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', OnboardingEquipment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipment.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', OnboardingEquipment, 'Edm.String');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipment.TYPE = new core_1.StringField('type', OnboardingEquipment, 'Edm.String');
    /**
     * Static representation of the [[value]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipment.VALUE = new core_1.StringField('value', OnboardingEquipment, 'Edm.String');
    /**
     * Static representation of the [[workflow]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipment.WORKFLOW = new core_1.StringField('workflow', OnboardingEquipment, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipment.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', OnboardingEquipment, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipment.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', OnboardingEquipment, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipment.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', OnboardingEquipment, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[typeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipment.TYPE_NAV = new core_1.OneToOneLink('typeNav', OnboardingEquipment, OnboardingEquipmentType_1_1.OnboardingEquipmentType_1);
    /**
     * Static representation of the one-to-one navigation property [[valueNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipment.VALUE_NAV = new core_1.OneToOneLink('valueNav', OnboardingEquipment, OnboardingEquipmentTypeValue_1.OnboardingEquipmentTypeValue);
    /**
     * All fields of the OnboardingEquipment entity.
     */
    OnboardingEquipment._allFields = [
        OnboardingEquipment.ONBOARDING_EQUIPMENT_ACTIVITY_ACTIVITY_ID,
        OnboardingEquipment.ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID,
        OnboardingEquipment.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID,
        OnboardingEquipment.COMMENT,
        OnboardingEquipment.CREATED_BY,
        OnboardingEquipment.CREATED_DATE_TIME,
        OnboardingEquipment.EQUIPMENT_ID,
        OnboardingEquipment.LAST_MODIFIED_BY,
        OnboardingEquipment.LAST_MODIFIED_DATE_TIME,
        OnboardingEquipment.MDF_SYSTEM_RECORD_STATUS,
        OnboardingEquipment.TYPE,
        OnboardingEquipment.VALUE,
        OnboardingEquipment.WORKFLOW,
        OnboardingEquipment.CREATED_BY_NAV,
        OnboardingEquipment.LAST_MODIFIED_BY_NAV,
        OnboardingEquipment.MDF_SYSTEM_RECORD_STATUS_NAV,
        OnboardingEquipment.TYPE_NAV,
        OnboardingEquipment.VALUE_NAV
    ];
    /**
     * All fields selector.
     */
    OnboardingEquipment.ALL_FIELDS = new core_1.AllFields('*', OnboardingEquipment);
    /**
     * All key fields of the OnboardingEquipment entity.
     */
    OnboardingEquipment._keyFields = [OnboardingEquipment.ONBOARDING_EQUIPMENT_ACTIVITY_ACTIVITY_ID, OnboardingEquipment.ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID, OnboardingEquipment.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID, OnboardingEquipment.EQUIPMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property OnboardingEquipment.
     */
    OnboardingEquipment._keys = OnboardingEquipment._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(OnboardingEquipment = exports.OnboardingEquipment || (exports.OnboardingEquipment = {}));
exports.OnboardingEquipment = OnboardingEquipment;
//# sourceMappingURL=OnboardingEquipment.js.map