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
var JobRequisitionPostingFieldControlsRequestBuilder_1 = require("./JobRequisitionPostingFieldControlsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobRequisitionPostingFieldControls" of service "SFOData".
 */
var JobRequisitionPostingFieldControls = /** @class */ (function (_super) {
    __extends(JobRequisitionPostingFieldControls, _super);
    function JobRequisitionPostingFieldControls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobRequisitionPostingFieldControls`.
     * @returns A builder that constructs instances of entity type `JobRequisitionPostingFieldControls`.
     */
    JobRequisitionPostingFieldControls.builder = function () {
        return core_1.Entity.entityBuilder(JobRequisitionPostingFieldControls);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobRequisitionPostingFieldControls` entity type.
     * @returns A `JobRequisitionPostingFieldControls` request builder.
     */
    JobRequisitionPostingFieldControls.requestBuilder = function () {
        return new JobRequisitionPostingFieldControlsRequestBuilder_1.JobRequisitionPostingFieldControlsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobRequisitionPostingFieldControls`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobRequisitionPostingFieldControls`.
     */
    JobRequisitionPostingFieldControls.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobRequisitionPostingFieldControls);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobRequisitionPostingFieldControls.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobRequisitionPostingFieldControls.
     */
    JobRequisitionPostingFieldControls._entityName = 'JobRequisitionPostingFieldControls';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobRequisitionPostingFieldControls.
     */
    JobRequisitionPostingFieldControls._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobRequisitionPostingFieldControls._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobRequisitionPostingFieldControls;
}(core_1.Entity));
exports.JobRequisitionPostingFieldControls = JobRequisitionPostingFieldControls;
(function (JobRequisitionPostingFieldControls) {
    /**
     * Static representation of the [[agencyComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPostingFieldControls.AGENCY_COMMENTS = new core_1.NumberField('agencyComments', JobRequisitionPostingFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[boardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPostingFieldControls.BOARD_ID = new core_1.NumberField('boardId', JobRequisitionPostingFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[boardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPostingFieldControls.BOARD_NAME = new core_1.NumberField('boardName', JobRequisitionPostingFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[channelId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPostingFieldControls.CHANNEL_ID = new core_1.NumberField('channelId', JobRequisitionPostingFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[extPartnerAccountId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPostingFieldControls.EXT_PARTNER_ACCOUNT_ID = new core_1.NumberField('extPartnerAccountId', JobRequisitionPostingFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[isPostingUpdatable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPostingFieldControls.IS_POSTING_UPDATABLE = new core_1.NumberField('isPostingUpdatable', JobRequisitionPostingFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobPostingId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPostingFieldControls.JOB_POSTING_ID = new core_1.NumberField('jobPostingId', JobRequisitionPostingFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPostingFieldControls.JOB_REQ_ID = new core_1.NumberField('jobReqId', JobRequisitionPostingFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobReqPostingPermissionsNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPostingFieldControls.JOB_REQ_POSTING_PERMISSIONS_NAV = new core_1.NumberField('jobReqPostingPermissionsNav', JobRequisitionPostingFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobRequisition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPostingFieldControls.JOB_REQUISITION = new core_1.NumberField('jobRequisition', JobRequisitionPostingFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPostingFieldControls.LAST_MODIFIED_BY = new core_1.NumberField('lastModifiedBy', JobRequisitionPostingFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[lastModifiedByNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPostingFieldControls.LAST_MODIFIED_BY_NAV = new core_1.NumberField('lastModifiedByNav', JobRequisitionPostingFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPostingFieldControls.LAST_MODIFIED_DATE_TIME = new core_1.NumberField('lastModifiedDateTime', JobRequisitionPostingFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[postEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPostingFieldControls.POST_END_DATE = new core_1.NumberField('postEndDate', JobRequisitionPostingFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[postEndDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPostingFieldControls.POST_END_DATE_OFFSET = new core_1.NumberField('postEndDateOffset', JobRequisitionPostingFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[postStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPostingFieldControls.POST_START_DATE = new core_1.NumberField('postStartDate', JobRequisitionPostingFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[postStartDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPostingFieldControls.POST_START_DATE_OFFSET = new core_1.NumberField('postStartDateOffset', JobRequisitionPostingFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[postedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPostingFieldControls.POSTED_BY = new core_1.NumberField('postedBy', JobRequisitionPostingFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[postedByNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPostingFieldControls.POSTED_BY_NAV = new core_1.NumberField('postedByNav', JobRequisitionPostingFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[postingStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionPostingFieldControls.POSTING_STATUS = new core_1.NumberField('postingStatus', JobRequisitionPostingFieldControls, 'Edm.Byte');
    /**
     * All fields of the JobRequisitionPostingFieldControls entity.
     */
    JobRequisitionPostingFieldControls._allFields = [
        JobRequisitionPostingFieldControls.AGENCY_COMMENTS,
        JobRequisitionPostingFieldControls.BOARD_ID,
        JobRequisitionPostingFieldControls.BOARD_NAME,
        JobRequisitionPostingFieldControls.CHANNEL_ID,
        JobRequisitionPostingFieldControls.EXT_PARTNER_ACCOUNT_ID,
        JobRequisitionPostingFieldControls.IS_POSTING_UPDATABLE,
        JobRequisitionPostingFieldControls.JOB_POSTING_ID,
        JobRequisitionPostingFieldControls.JOB_REQ_ID,
        JobRequisitionPostingFieldControls.JOB_REQ_POSTING_PERMISSIONS_NAV,
        JobRequisitionPostingFieldControls.JOB_REQUISITION,
        JobRequisitionPostingFieldControls.LAST_MODIFIED_BY,
        JobRequisitionPostingFieldControls.LAST_MODIFIED_BY_NAV,
        JobRequisitionPostingFieldControls.LAST_MODIFIED_DATE_TIME,
        JobRequisitionPostingFieldControls.POST_END_DATE,
        JobRequisitionPostingFieldControls.POST_END_DATE_OFFSET,
        JobRequisitionPostingFieldControls.POST_START_DATE,
        JobRequisitionPostingFieldControls.POST_START_DATE_OFFSET,
        JobRequisitionPostingFieldControls.POSTED_BY,
        JobRequisitionPostingFieldControls.POSTED_BY_NAV,
        JobRequisitionPostingFieldControls.POSTING_STATUS
    ];
    /**
     * All fields selector.
     */
    JobRequisitionPostingFieldControls.ALL_FIELDS = new core_1.AllFields('*', JobRequisitionPostingFieldControls);
    /**
     * All key fields of the JobRequisitionPostingFieldControls entity.
     */
    JobRequisitionPostingFieldControls._keyFields = [JobRequisitionPostingFieldControls.JOB_POSTING_ID, JobRequisitionPostingFieldControls.JOB_REQ_ID];
    /**
     * Mapping of all key field names to the respective static field property JobRequisitionPostingFieldControls.
     */
    JobRequisitionPostingFieldControls._keys = JobRequisitionPostingFieldControls._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobRequisitionPostingFieldControls = exports.JobRequisitionPostingFieldControls || (exports.JobRequisitionPostingFieldControls = {}));
exports.JobRequisitionPostingFieldControls = JobRequisitionPostingFieldControls;
//# sourceMappingURL=JobRequisitionPostingFieldControls.js.map