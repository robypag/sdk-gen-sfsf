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
var JobApplicationOnboardingDataRequestBuilder_1 = require("./JobApplicationOnboardingDataRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobApplicationOnboardingData" of service "SFOData".
 */
var JobApplicationOnboardingData = /** @class */ (function (_super) {
    __extends(JobApplicationOnboardingData, _super);
    function JobApplicationOnboardingData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobApplicationOnboardingData`.
     * @returns A builder that constructs instances of entity type `JobApplicationOnboardingData`.
     */
    JobApplicationOnboardingData.builder = function () {
        return core_1.Entity.entityBuilder(JobApplicationOnboardingData);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationOnboardingData` entity type.
     * @returns A `JobApplicationOnboardingData` request builder.
     */
    JobApplicationOnboardingData.requestBuilder = function () {
        return new JobApplicationOnboardingDataRequestBuilder_1.JobApplicationOnboardingDataRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationOnboardingData`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationOnboardingData`.
     */
    JobApplicationOnboardingData.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobApplicationOnboardingData);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobApplicationOnboardingData.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobApplicationOnboardingData.
     */
    JobApplicationOnboardingData._entityName = 'JobApplicationOnboardingData';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationOnboardingData.
     */
    JobApplicationOnboardingData._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobApplicationOnboardingData._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobApplicationOnboardingData;
}(core_1.Entity));
exports.JobApplicationOnboardingData = JobApplicationOnboardingData;
var JobApplication_1 = require("./JobApplication");
var JobApplicationOnboardingStatus_1 = require("./JobApplicationOnboardingStatus");
var User_1 = require("./User");
(function (JobApplicationOnboardingData) {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationOnboardingData.APPLICATION_ID = new core_1.BigNumberField('applicationId', JobApplicationOnboardingData, 'Edm.Int64');
    /**
     * Static representation of the [[onboardingId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationOnboardingData.ONBOARDING_ID = new core_1.BigNumberField('onboardingId', JobApplicationOnboardingData, 'Edm.Int64');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationOnboardingData.STATUS = new core_1.StringField('status', JobApplicationOnboardingData, 'Edm.String');
    /**
     * Static representation of the [[submittedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationOnboardingData.SUBMITTED_BY = new core_1.StringField('submittedBy', JobApplicationOnboardingData, 'Edm.String');
    /**
     * Static representation of the [[submittedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationOnboardingData.SUBMITTED_ON = new core_1.DateField('submittedOn', JobApplicationOnboardingData, 'Edm.DateTimeOffset');
    /**
     * Static representation of the one-to-one navigation property [[jobApplication]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationOnboardingData.JOB_APPLICATION = new core_1.OneToOneLink('jobApplication', JobApplicationOnboardingData, JobApplication_1.JobApplication);
    /**
     * Static representation of the one-to-many navigation property [[onboardingStatus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationOnboardingData.ONBOARDING_STATUS = new core_1.Link('onboardingStatus', JobApplicationOnboardingData, JobApplicationOnboardingStatus_1.JobApplicationOnboardingStatus);
    /**
     * Static representation of the one-to-one navigation property [[submittedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationOnboardingData.SUBMITTED_BY_NAV = new core_1.OneToOneLink('submittedByNav', JobApplicationOnboardingData, User_1.User);
    /**
     * All fields of the JobApplicationOnboardingData entity.
     */
    JobApplicationOnboardingData._allFields = [
        JobApplicationOnboardingData.APPLICATION_ID,
        JobApplicationOnboardingData.ONBOARDING_ID,
        JobApplicationOnboardingData.STATUS,
        JobApplicationOnboardingData.SUBMITTED_BY,
        JobApplicationOnboardingData.SUBMITTED_ON,
        JobApplicationOnboardingData.JOB_APPLICATION,
        JobApplicationOnboardingData.ONBOARDING_STATUS,
        JobApplicationOnboardingData.SUBMITTED_BY_NAV
    ];
    /**
     * All fields selector.
     */
    JobApplicationOnboardingData.ALL_FIELDS = new core_1.AllFields('*', JobApplicationOnboardingData);
    /**
     * All key fields of the JobApplicationOnboardingData entity.
     */
    JobApplicationOnboardingData._keyFields = [JobApplicationOnboardingData.ONBOARDING_ID];
    /**
     * Mapping of all key field names to the respective static field property JobApplicationOnboardingData.
     */
    JobApplicationOnboardingData._keys = JobApplicationOnboardingData._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobApplicationOnboardingData = exports.JobApplicationOnboardingData || (exports.JobApplicationOnboardingData = {}));
exports.JobApplicationOnboardingData = JobApplicationOnboardingData;
//# sourceMappingURL=JobApplicationOnboardingData.js.map