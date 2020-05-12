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
var JobApplicationCommentsRequestBuilder_1 = require("./JobApplicationCommentsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobApplicationComments" of service "SFOData".
 */
var JobApplicationComments = /** @class */ (function (_super) {
    __extends(JobApplicationComments, _super);
    function JobApplicationComments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobApplicationComments`.
     * @returns A builder that constructs instances of entity type `JobApplicationComments`.
     */
    JobApplicationComments.builder = function () {
        return core_1.Entity.entityBuilder(JobApplicationComments);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationComments` entity type.
     * @returns A `JobApplicationComments` request builder.
     */
    JobApplicationComments.requestBuilder = function () {
        return new JobApplicationCommentsRequestBuilder_1.JobApplicationCommentsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationComments`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationComments`.
     */
    JobApplicationComments.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobApplicationComments);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobApplicationComments.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobApplicationComments.
     */
    JobApplicationComments._entityName = 'JobApplicationComments';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationComments.
     */
    JobApplicationComments._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobApplicationComments._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobApplicationComments;
}(core_1.Entity));
exports.JobApplicationComments = JobApplicationComments;
var User_1 = require("./User");
var JobApplication_1 = require("./JobApplication");
(function (JobApplicationComments) {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationComments.APPLICATION_ID = new core_1.BigNumberField('applicationId', JobApplicationComments, 'Edm.Int64');
    /**
     * Static representation of the [[associatedCommentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationComments.ASSOCIATED_COMMENT_ID = new core_1.BigNumberField('associatedCommentId', JobApplicationComments, 'Edm.Int64');
    /**
     * Static representation of the [[associatedId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationComments.ASSOCIATED_ID = new core_1.StringField('associatedId', JobApplicationComments, 'Edm.String');
    /**
     * Static representation of the [[commentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationComments.COMMENT_ID = new core_1.BigNumberField('commentId', JobApplicationComments, 'Edm.Int64');
    /**
     * Static representation of the [[commentator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationComments.COMMENTATOR = new core_1.StringField('commentator', JobApplicationComments, 'Edm.String');
    /**
     * Static representation of the [[content]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationComments.CONTENT = new core_1.StringField('content', JobApplicationComments, 'Edm.String');
    /**
     * Static representation of the [[hasAssociatedComment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationComments.HAS_ASSOCIATED_COMMENT = new core_1.StringField('hasAssociatedComment', JobApplicationComments, 'Edm.String');
    /**
     * Static representation of the [[migratedCommentatorUserName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationComments.MIGRATED_COMMENTATOR_USER_NAME = new core_1.StringField('migratedCommentatorUserName', JobApplicationComments, 'Edm.String');
    /**
     * Static representation of the [[refType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationComments.REF_TYPE = new core_1.StringField('refType', JobApplicationComments, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[commentatorNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationComments.COMMENTATOR_NAV = new core_1.OneToOneLink('commentatorNav', JobApplicationComments, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[jobApplication]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationComments.JOB_APPLICATION = new core_1.OneToOneLink('jobApplication', JobApplicationComments, JobApplication_1.JobApplication);
    /**
     * All fields of the JobApplicationComments entity.
     */
    JobApplicationComments._allFields = [
        JobApplicationComments.APPLICATION_ID,
        JobApplicationComments.ASSOCIATED_COMMENT_ID,
        JobApplicationComments.ASSOCIATED_ID,
        JobApplicationComments.COMMENT_ID,
        JobApplicationComments.COMMENTATOR,
        JobApplicationComments.CONTENT,
        JobApplicationComments.HAS_ASSOCIATED_COMMENT,
        JobApplicationComments.MIGRATED_COMMENTATOR_USER_NAME,
        JobApplicationComments.REF_TYPE,
        JobApplicationComments.COMMENTATOR_NAV,
        JobApplicationComments.JOB_APPLICATION
    ];
    /**
     * All fields selector.
     */
    JobApplicationComments.ALL_FIELDS = new core_1.AllFields('*', JobApplicationComments);
    /**
     * All key fields of the JobApplicationComments entity.
     */
    JobApplicationComments._keyFields = [JobApplicationComments.COMMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property JobApplicationComments.
     */
    JobApplicationComments._keys = JobApplicationComments._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobApplicationComments = exports.JobApplicationComments || (exports.JobApplicationComments = {}));
exports.JobApplicationComments = JobApplicationComments;
//# sourceMappingURL=JobApplicationComments.js.map