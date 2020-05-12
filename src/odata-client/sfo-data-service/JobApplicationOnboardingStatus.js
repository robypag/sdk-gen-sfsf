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
var JobApplicationOnboardingStatusRequestBuilder_1 = require("./JobApplicationOnboardingStatusRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobApplicationOnboardingStatus" of service "SFOData".
 */
var JobApplicationOnboardingStatus = /** @class */ (function (_super) {
    __extends(JobApplicationOnboardingStatus, _super);
    function JobApplicationOnboardingStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobApplicationOnboardingStatus`.
     * @returns A builder that constructs instances of entity type `JobApplicationOnboardingStatus`.
     */
    JobApplicationOnboardingStatus.builder = function () {
        return core_1.Entity.entityBuilder(JobApplicationOnboardingStatus);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationOnboardingStatus` entity type.
     * @returns A `JobApplicationOnboardingStatus` request builder.
     */
    JobApplicationOnboardingStatus.requestBuilder = function () {
        return new JobApplicationOnboardingStatusRequestBuilder_1.JobApplicationOnboardingStatusRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationOnboardingStatus`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationOnboardingStatus`.
     */
    JobApplicationOnboardingStatus.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobApplicationOnboardingStatus);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobApplicationOnboardingStatus.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobApplicationOnboardingStatus.
     */
    JobApplicationOnboardingStatus._entityName = 'JobApplicationOnboardingStatus';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationOnboardingStatus.
     */
    JobApplicationOnboardingStatus._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobApplicationOnboardingStatus._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobApplicationOnboardingStatus;
}(core_1.Entity));
exports.JobApplicationOnboardingStatus = JobApplicationOnboardingStatus;
var JobApplicationOnboardingData_1 = require("./JobApplicationOnboardingData");
(function (JobApplicationOnboardingStatus) {
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationOnboardingStatus.CREATED_DATE = new core_1.DateField('createdDate', JobApplicationOnboardingStatus, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationOnboardingStatus.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', JobApplicationOnboardingStatus, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[message]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationOnboardingStatus.MESSAGE = new core_1.StringField('message', JobApplicationOnboardingStatus, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationOnboardingStatus.NAME = new core_1.StringField('name', JobApplicationOnboardingStatus, 'Edm.String');
    /**
     * Static representation of the [[onboardingId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationOnboardingStatus.ONBOARDING_ID = new core_1.BigNumberField('onboardingId', JobApplicationOnboardingStatus, 'Edm.Int64');
    /**
     * Static representation of the [[onboardingStatusId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationOnboardingStatus.ONBOARDING_STATUS_ID = new core_1.BigNumberField('onboardingStatusId', JobApplicationOnboardingStatus, 'Edm.Int64');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationOnboardingStatus.STATUS = new core_1.StringField('status', JobApplicationOnboardingStatus, 'Edm.String');
    /**
     * Static representation of the [[statusType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationOnboardingStatus.STATUS_TYPE = new core_1.StringField('statusType', JobApplicationOnboardingStatus, 'Edm.String');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationOnboardingStatus.TYPE = new core_1.StringField('type', JobApplicationOnboardingStatus, 'Edm.String');
    /**
     * Static representation of the [[url]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationOnboardingStatus.URL = new core_1.StringField('url', JobApplicationOnboardingStatus, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[onboardingData]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationOnboardingStatus.ONBOARDING_DATA = new core_1.OneToOneLink('onboardingData', JobApplicationOnboardingStatus, JobApplicationOnboardingData_1.JobApplicationOnboardingData);
    /**
     * All fields of the JobApplicationOnboardingStatus entity.
     */
    JobApplicationOnboardingStatus._allFields = [
        JobApplicationOnboardingStatus.CREATED_DATE,
        JobApplicationOnboardingStatus.LAST_MODIFIED_DATE,
        JobApplicationOnboardingStatus.MESSAGE,
        JobApplicationOnboardingStatus.NAME,
        JobApplicationOnboardingStatus.ONBOARDING_ID,
        JobApplicationOnboardingStatus.ONBOARDING_STATUS_ID,
        JobApplicationOnboardingStatus.STATUS,
        JobApplicationOnboardingStatus.STATUS_TYPE,
        JobApplicationOnboardingStatus.TYPE,
        JobApplicationOnboardingStatus.URL,
        JobApplicationOnboardingStatus.ONBOARDING_DATA
    ];
    /**
     * All fields selector.
     */
    JobApplicationOnboardingStatus.ALL_FIELDS = new core_1.AllFields('*', JobApplicationOnboardingStatus);
    /**
     * All key fields of the JobApplicationOnboardingStatus entity.
     */
    JobApplicationOnboardingStatus._keyFields = [JobApplicationOnboardingStatus.ONBOARDING_STATUS_ID];
    /**
     * Mapping of all key field names to the respective static field property JobApplicationOnboardingStatus.
     */
    JobApplicationOnboardingStatus._keys = JobApplicationOnboardingStatus._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobApplicationOnboardingStatus = exports.JobApplicationOnboardingStatus || (exports.JobApplicationOnboardingStatus = {}));
exports.JobApplicationOnboardingStatus = JobApplicationOnboardingStatus;
//# sourceMappingURL=JobApplicationOnboardingStatus.js.map