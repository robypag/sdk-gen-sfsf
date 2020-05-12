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
var JobRequisitionPostingRequestBuilder_1 = require("./JobRequisitionPostingRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobRequisitionPosting" of service "SFOData".
 */
var JobRequisitionPosting = /** @class */ (function (_super) {
    __extends(JobRequisitionPosting, _super);
    function JobRequisitionPosting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobRequisitionPosting`.
     * @returns A builder that constructs instances of entity type `JobRequisitionPosting`.
     */
    JobRequisitionPosting.builder = function () {
        return core_1.Entity.entityBuilder(JobRequisitionPosting);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobRequisitionPosting` entity type.
     * @returns A `JobRequisitionPosting` request builder.
     */
    JobRequisitionPosting.requestBuilder = function () {
        return new JobRequisitionPostingRequestBuilder_1.JobRequisitionPostingRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobRequisitionPosting`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobRequisitionPosting`.
     */
    JobRequisitionPosting.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobRequisitionPosting);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobRequisitionPosting.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobRequisitionPosting.
     */
    JobRequisitionPosting._entityName = 'JobRequisitionPosting';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobRequisitionPosting.
     */
    JobRequisitionPosting._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobRequisitionPosting._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobRequisitionPosting;
}(core_1.Entity));
exports.JobRequisitionPosting = JobRequisitionPosting;
var JobRequisitionPostingFieldControls_1 = require("./JobRequisitionPostingFieldControls");
var JobRequisition_1 = require("./JobRequisition");
var User_1 = require("./User");
(function (JobRequisitionPosting) {
    /**
     * Static representation of the [[agencyComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPosting.AGENCY_COMMENTS = new core_1.StringField('agencyComments', JobRequisitionPosting, 'Edm.String');
    /**
     * Static representation of the [[boardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPosting.BOARD_ID = new core_1.StringField('boardId', JobRequisitionPosting, 'Edm.String');
    /**
     * Static representation of the [[boardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPosting.BOARD_NAME = new core_1.StringField('boardName', JobRequisitionPosting, 'Edm.String');
    /**
     * Static representation of the [[channelId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPosting.CHANNEL_ID = new core_1.StringField('channelId', JobRequisitionPosting, 'Edm.String');
    /**
     * Static representation of the [[extPartnerAccountId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPosting.EXT_PARTNER_ACCOUNT_ID = new core_1.BigNumberField('extPartnerAccountId', JobRequisitionPosting, 'Edm.Int64');
    /**
     * Static representation of the [[isPostingUpdatable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPosting.IS_POSTING_UPDATABLE = new core_1.BooleanField('isPostingUpdatable', JobRequisitionPosting, 'Edm.Boolean');
    /**
     * Static representation of the [[jobPostingId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPosting.JOB_POSTING_ID = new core_1.BigNumberField('jobPostingId', JobRequisitionPosting, 'Edm.Int64');
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPosting.JOB_REQ_ID = new core_1.BigNumberField('jobReqId', JobRequisitionPosting, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPosting.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', JobRequisitionPosting, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPosting.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', JobRequisitionPosting, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[postEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPosting.POST_END_DATE = new core_1.DateField('postEndDate', JobRequisitionPosting, 'Edm.DateTime');
    /**
     * Static representation of the [[postEndDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPosting.POST_END_DATE_OFFSET = new core_1.DateField('postEndDateOffset', JobRequisitionPosting, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[postStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPosting.POST_START_DATE = new core_1.DateField('postStartDate', JobRequisitionPosting, 'Edm.DateTime');
    /**
     * Static representation of the [[postStartDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPosting.POST_START_DATE_OFFSET = new core_1.DateField('postStartDateOffset', JobRequisitionPosting, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[postedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPosting.POSTED_BY = new core_1.StringField('postedBy', JobRequisitionPosting, 'Edm.String');
    /**
     * Static representation of the [[postingStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPosting.POSTING_STATUS = new core_1.StringField('postingStatus', JobRequisitionPosting, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[jobReqPostingPermissionsNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPosting.JOB_REQ_POSTING_PERMISSIONS_NAV = new core_1.OneToOneLink('jobReqPostingPermissionsNav', JobRequisitionPosting, JobRequisitionPostingFieldControls_1.JobRequisitionPostingFieldControls);
    /**
     * Static representation of the one-to-one navigation property [[jobRequisition]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPosting.JOB_REQUISITION = new core_1.OneToOneLink('jobRequisition', JobRequisitionPosting, JobRequisition_1.JobRequisition);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPosting.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', JobRequisitionPosting, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[postedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPosting.POSTED_BY_NAV = new core_1.OneToOneLink('postedByNav', JobRequisitionPosting, User_1.User);
    /**
     * All fields of the JobRequisitionPosting entity.
     */
    JobRequisitionPosting._allFields = [
        JobRequisitionPosting.AGENCY_COMMENTS,
        JobRequisitionPosting.BOARD_ID,
        JobRequisitionPosting.BOARD_NAME,
        JobRequisitionPosting.CHANNEL_ID,
        JobRequisitionPosting.EXT_PARTNER_ACCOUNT_ID,
        JobRequisitionPosting.IS_POSTING_UPDATABLE,
        JobRequisitionPosting.JOB_POSTING_ID,
        JobRequisitionPosting.JOB_REQ_ID,
        JobRequisitionPosting.LAST_MODIFIED_BY,
        JobRequisitionPosting.LAST_MODIFIED_DATE_TIME,
        JobRequisitionPosting.POST_END_DATE,
        JobRequisitionPosting.POST_END_DATE_OFFSET,
        JobRequisitionPosting.POST_START_DATE,
        JobRequisitionPosting.POST_START_DATE_OFFSET,
        JobRequisitionPosting.POSTED_BY,
        JobRequisitionPosting.POSTING_STATUS,
        JobRequisitionPosting.JOB_REQ_POSTING_PERMISSIONS_NAV,
        JobRequisitionPosting.JOB_REQUISITION,
        JobRequisitionPosting.LAST_MODIFIED_BY_NAV,
        JobRequisitionPosting.POSTED_BY_NAV
    ];
    /**
     * All fields selector.
     */
    JobRequisitionPosting.ALL_FIELDS = new core_1.AllFields('*', JobRequisitionPosting);
    /**
     * All key fields of the JobRequisitionPosting entity.
     */
    JobRequisitionPosting._keyFields = [JobRequisitionPosting.JOB_POSTING_ID, JobRequisitionPosting.JOB_REQ_ID];
    /**
     * Mapping of all key field names to the respective static field property JobRequisitionPosting.
     */
    JobRequisitionPosting._keys = JobRequisitionPosting._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobRequisitionPosting = exports.JobRequisitionPosting || (exports.JobRequisitionPosting = {}));
exports.JobRequisitionPosting = JobRequisitionPosting;
//# sourceMappingURL=JobRequisitionPosting.js.map