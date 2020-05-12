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
var JobReqFwdCandidatesRequestBuilder_1 = require("./JobReqFwdCandidatesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobReqFwdCandidates" of service "SFOData".
 */
var JobReqFwdCandidates = /** @class */ (function (_super) {
    __extends(JobReqFwdCandidates, _super);
    function JobReqFwdCandidates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobReqFwdCandidates`.
     * @returns A builder that constructs instances of entity type `JobReqFwdCandidates`.
     */
    JobReqFwdCandidates.builder = function () {
        return core_1.Entity.entityBuilder(JobReqFwdCandidates);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobReqFwdCandidates` entity type.
     * @returns A `JobReqFwdCandidates` request builder.
     */
    JobReqFwdCandidates.requestBuilder = function () {
        return new JobReqFwdCandidatesRequestBuilder_1.JobReqFwdCandidatesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobReqFwdCandidates`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobReqFwdCandidates`.
     */
    JobReqFwdCandidates.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobReqFwdCandidates);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobReqFwdCandidates.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobReqFwdCandidates.
     */
    JobReqFwdCandidates._entityName = 'JobReqFwdCandidates';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobReqFwdCandidates.
     */
    JobReqFwdCandidates._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobReqFwdCandidates._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobReqFwdCandidates;
}(core_1.Entity));
exports.JobReqFwdCandidates = JobReqFwdCandidates;
var Candidate_1 = require("./Candidate");
var JobRequisition_1 = require("./JobRequisition");
var User_1 = require("./User");
(function (JobReqFwdCandidates) {
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqFwdCandidates.CANDIDATE_ID = new core_1.BigNumberField('candidateId', JobReqFwdCandidates, 'Edm.Int64');
    /**
     * Static representation of the [[candidateSiteid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqFwdCandidates.CANDIDATE_SITEID = new core_1.BigNumberField('candidateSiteid', JobReqFwdCandidates, 'Edm.Int64');
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqFwdCandidates.CREATED_DATE = new core_1.DateField('createdDate', JobReqFwdCandidates, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[expirationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqFwdCandidates.EXPIRATION_DATE = new core_1.DateField('expirationDate', JobReqFwdCandidates, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[extRecruiterId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqFwdCandidates.EXT_RECRUITER_ID = new core_1.BigNumberField('extRecruiterId', JobReqFwdCandidates, 'Edm.Int64');
    /**
     * Static representation of the [[jobBoardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqFwdCandidates.JOB_BOARD_NAME = new core_1.StringField('jobBoardName', JobReqFwdCandidates, 'Edm.String');
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqFwdCandidates.JOB_REQ_ID = new core_1.BigNumberField('jobReqId', JobReqFwdCandidates, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqFwdCandidates.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', JobReqFwdCandidates, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[rcmAppStatusSetItemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqFwdCandidates.RCM_APP_STATUS_SET_ITEM_ID = new core_1.BigNumberField('rcmAppStatusSetItemId', JobReqFwdCandidates, 'Edm.Int64');
    /**
     * Static representation of the [[referralId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqFwdCandidates.REFERRAL_ID = new core_1.BigNumberField('referralId', JobReqFwdCandidates, 'Edm.Int64');
    /**
     * Static representation of the [[referralKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqFwdCandidates.REFERRAL_KEY = new core_1.StringField('referralKey', JobReqFwdCandidates, 'Edm.String');
    /**
     * Static representation of the [[referredBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqFwdCandidates.REFERRED_BY = new core_1.StringField('referredBy', JobReqFwdCandidates, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqFwdCandidates.STATUS = new core_1.StringField('status', JobReqFwdCandidates, 'Edm.String');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqFwdCandidates.TYPE = new core_1.StringField('type', JobReqFwdCandidates, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[candidate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqFwdCandidates.CANDIDATE = new core_1.Link('candidate', JobReqFwdCandidates, Candidate_1.Candidate);
    /**
     * Static representation of the one-to-one navigation property [[jobRequisition]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqFwdCandidates.JOB_REQUISITION = new core_1.OneToOneLink('jobRequisition', JobReqFwdCandidates, JobRequisition_1.JobRequisition);
    /**
     * Static representation of the one-to-one navigation property [[referredByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqFwdCandidates.REFERRED_BY_NAV = new core_1.OneToOneLink('referredByNav', JobReqFwdCandidates, User_1.User);
    /**
     * All fields of the JobReqFwdCandidates entity.
     */
    JobReqFwdCandidates._allFields = [
        JobReqFwdCandidates.CANDIDATE_ID,
        JobReqFwdCandidates.CANDIDATE_SITEID,
        JobReqFwdCandidates.CREATED_DATE,
        JobReqFwdCandidates.EXPIRATION_DATE,
        JobReqFwdCandidates.EXT_RECRUITER_ID,
        JobReqFwdCandidates.JOB_BOARD_NAME,
        JobReqFwdCandidates.JOB_REQ_ID,
        JobReqFwdCandidates.LAST_MODIFIED_DATE,
        JobReqFwdCandidates.RCM_APP_STATUS_SET_ITEM_ID,
        JobReqFwdCandidates.REFERRAL_ID,
        JobReqFwdCandidates.REFERRAL_KEY,
        JobReqFwdCandidates.REFERRED_BY,
        JobReqFwdCandidates.STATUS,
        JobReqFwdCandidates.TYPE,
        JobReqFwdCandidates.CANDIDATE,
        JobReqFwdCandidates.JOB_REQUISITION,
        JobReqFwdCandidates.REFERRED_BY_NAV
    ];
    /**
     * All fields selector.
     */
    JobReqFwdCandidates.ALL_FIELDS = new core_1.AllFields('*', JobReqFwdCandidates);
    /**
     * All key fields of the JobReqFwdCandidates entity.
     */
    JobReqFwdCandidates._keyFields = [JobReqFwdCandidates.CANDIDATE_ID, JobReqFwdCandidates.JOB_REQ_ID];
    /**
     * Mapping of all key field names to the respective static field property JobReqFwdCandidates.
     */
    JobReqFwdCandidates._keys = JobReqFwdCandidates._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobReqFwdCandidates = exports.JobReqFwdCandidates || (exports.JobReqFwdCandidates = {}));
exports.JobReqFwdCandidates = JobReqFwdCandidates;
//# sourceMappingURL=JobReqFwdCandidates.js.map