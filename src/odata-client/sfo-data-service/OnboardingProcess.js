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
var OnboardingProcessRequestBuilder_1 = require("./OnboardingProcessRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "OnboardingProcess" of service "SFOData".
 */
var OnboardingProcess = /** @class */ (function (_super) {
    __extends(OnboardingProcess, _super);
    function OnboardingProcess() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `OnboardingProcess`.
     * @returns A builder that constructs instances of entity type `OnboardingProcess`.
     */
    OnboardingProcess.builder = function () {
        return core_1.Entity.entityBuilder(OnboardingProcess);
    };
    /**
     * Returns a request builder to construct requests for operations on the `OnboardingProcess` entity type.
     * @returns A `OnboardingProcess` request builder.
     */
    OnboardingProcess.requestBuilder = function () {
        return new OnboardingProcessRequestBuilder_1.OnboardingProcessRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `OnboardingProcess`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `OnboardingProcess`.
     */
    OnboardingProcess.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, OnboardingProcess);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    OnboardingProcess.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for OnboardingProcess.
     */
    OnboardingProcess._entityName = 'OnboardingProcess';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for OnboardingProcess.
     */
    OnboardingProcess._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    OnboardingProcess._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return OnboardingProcess;
}(core_1.Entity));
exports.OnboardingProcess = OnboardingProcess;
var OnboardingCandidateInfo_1 = require("./OnboardingCandidateInfo");
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var OnboardingNewHireActivitiesStep_1 = require("./OnboardingNewHireActivitiesStep");
var WfRequest_1 = require("./WfRequest");
(function (OnboardingProcess) {
    /**
     * Static representation of the [[candidateInfo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingProcess.CANDIDATE_INFO = new core_1.StringField('candidateInfo', OnboardingProcess, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingProcess.CREATED_BY = new core_1.StringField('createdBy', OnboardingProcess, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingProcess.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', OnboardingProcess, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingProcess.EXTERNAL_NAME = new core_1.StringField('externalName', OnboardingProcess, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingProcess.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', OnboardingProcess, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingProcess.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', OnboardingProcess, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingProcess.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', OnboardingProcess, 'Edm.String');
    /**
     * Static representation of the [[onboardingProcessId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingProcess.ONBOARDING_PROCESS_ID = new core_1.BigNumberField('onboardingProcessId', OnboardingProcess, 'Edm.Int64');
    /**
     * Static representation of the [[processConfig]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingProcess.PROCESS_CONFIG = new core_1.StringField('processConfig', OnboardingProcess, 'Edm.String');
    /**
     * Static representation of the [[processStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingProcess.PROCESS_STATUS = new core_1.StringField('processStatus', OnboardingProcess, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[candidateInfoNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingProcess.CANDIDATE_INFO_NAV = new core_1.OneToOneLink('candidateInfoNav', OnboardingProcess, OnboardingCandidateInfo_1.OnboardingCandidateInfo);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingProcess.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', OnboardingProcess, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingProcess.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', OnboardingProcess, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingProcess.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', OnboardingProcess, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[newHireActivitiesStep]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingProcess.NEW_HIRE_ACTIVITIES_STEP = new core_1.OneToOneLink('newHireActivitiesStep', OnboardingProcess, OnboardingNewHireActivitiesStep_1.OnboardingNewHireActivitiesStep);
    /**
     * Static representation of the one-to-one navigation property [[processStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingProcess.PROCESS_STATUS_NAV = new core_1.OneToOneLink('processStatusNav', OnboardingProcess, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingProcess.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', OnboardingProcess, WfRequest_1.WfRequest);
    /**
     * All fields of the OnboardingProcess entity.
     */
    OnboardingProcess._allFields = [
        OnboardingProcess.CANDIDATE_INFO,
        OnboardingProcess.CREATED_BY,
        OnboardingProcess.CREATED_DATE_TIME,
        OnboardingProcess.EXTERNAL_NAME,
        OnboardingProcess.LAST_MODIFIED_BY,
        OnboardingProcess.LAST_MODIFIED_DATE_TIME,
        OnboardingProcess.MDF_SYSTEM_RECORD_STATUS,
        OnboardingProcess.ONBOARDING_PROCESS_ID,
        OnboardingProcess.PROCESS_CONFIG,
        OnboardingProcess.PROCESS_STATUS,
        OnboardingProcess.CANDIDATE_INFO_NAV,
        OnboardingProcess.CREATED_BY_NAV,
        OnboardingProcess.LAST_MODIFIED_BY_NAV,
        OnboardingProcess.MDF_SYSTEM_RECORD_STATUS_NAV,
        OnboardingProcess.NEW_HIRE_ACTIVITIES_STEP,
        OnboardingProcess.PROCESS_STATUS_NAV,
        OnboardingProcess.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    OnboardingProcess.ALL_FIELDS = new core_1.AllFields('*', OnboardingProcess);
    /**
     * All key fields of the OnboardingProcess entity.
     */
    OnboardingProcess._keyFields = [OnboardingProcess.ONBOARDING_PROCESS_ID];
    /**
     * Mapping of all key field names to the respective static field property OnboardingProcess.
     */
    OnboardingProcess._keys = OnboardingProcess._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(OnboardingProcess = exports.OnboardingProcess || (exports.OnboardingProcess = {}));
exports.OnboardingProcess = OnboardingProcess;
//# sourceMappingURL=OnboardingProcess.js.map