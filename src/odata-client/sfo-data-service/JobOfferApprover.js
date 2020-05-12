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
var JobOfferApproverRequestBuilder_1 = require("./JobOfferApproverRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobOfferApprover" of service "SFOData".
 */
var JobOfferApprover = /** @class */ (function (_super) {
    __extends(JobOfferApprover, _super);
    function JobOfferApprover() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobOfferApprover`.
     * @returns A builder that constructs instances of entity type `JobOfferApprover`.
     */
    JobOfferApprover.builder = function () {
        return core_1.Entity.entityBuilder(JobOfferApprover);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobOfferApprover` entity type.
     * @returns A `JobOfferApprover` request builder.
     */
    JobOfferApprover.requestBuilder = function () {
        return new JobOfferApproverRequestBuilder_1.JobOfferApproverRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobOfferApprover`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobOfferApprover`.
     */
    JobOfferApprover.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobOfferApprover);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobOfferApprover.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobOfferApprover.
     */
    JobOfferApprover._entityName = 'JobOfferApprover';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobOfferApprover.
     */
    JobOfferApprover._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobOfferApprover._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobOfferApprover;
}(core_1.Entity));
exports.JobOfferApprover = JobOfferApprover;
var User_1 = require("./User");
var JobOffer_1 = require("./JobOffer");
(function (JobOfferApprover) {
    /**
     * Static representation of the [[approvalStepId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferApprover.APPROVAL_STEP_ID = new core_1.StringField('approvalStepId', JobOfferApprover, 'Edm.String');
    /**
     * Static representation of the [[approverAction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferApprover.APPROVER_ACTION = new core_1.StringField('approverAction', JobOfferApprover, 'Edm.String');
    /**
     * Static representation of the [[approverActionDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferApprover.APPROVER_ACTION_DATE = new core_1.DateField('approverActionDate', JobOfferApprover, 'Edm.DateTime');
    /**
     * Static representation of the [[approverFirstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferApprover.APPROVER_FIRST_NAME = new core_1.StringField('approverFirstName', JobOfferApprover, 'Edm.String');
    /**
     * Static representation of the [[approverLastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferApprover.APPROVER_LAST_NAME = new core_1.StringField('approverLastName', JobOfferApprover, 'Edm.String');
    /**
     * Static representation of the [[approverOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferApprover.APPROVER_ORDER = new core_1.BigNumberField('approverOrder', JobOfferApprover, 'Edm.Int64');
    /**
     * Static representation of the [[comment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferApprover.COMMENT = new core_1.StringField('comment', JobOfferApprover, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferApprover.CREATED_BY = new core_1.StringField('createdBy', JobOfferApprover, 'Edm.String');
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferApprover.CREATED_DATE = new core_1.DateField('createdDate', JobOfferApprover, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferApprover.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', JobOfferApprover, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferApprover.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', JobOfferApprover, 'Edm.DateTime');
    /**
     * Static representation of the [[offerApprovalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferApprover.OFFER_APPROVAL_ID = new core_1.BigNumberField('offerApprovalId', JobOfferApprover, 'Edm.Int64');
    /**
     * Static representation of the [[offerApproverId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferApprover.OFFER_APPROVER_ID = new core_1.BigNumberField('offerApproverId', JobOfferApprover, 'Edm.Int64');
    /**
     * Static representation of the [[username]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferApprover.USERNAME = new core_1.StringField('username', JobOfferApprover, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferApprover.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', JobOfferApprover, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferApprover.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', JobOfferApprover, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[offerApproval]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferApprover.OFFER_APPROVAL = new core_1.OneToOneLink('offerApproval', JobOfferApprover, JobOffer_1.JobOffer);
    /**
     * All fields of the JobOfferApprover entity.
     */
    JobOfferApprover._allFields = [
        JobOfferApprover.APPROVAL_STEP_ID,
        JobOfferApprover.APPROVER_ACTION,
        JobOfferApprover.APPROVER_ACTION_DATE,
        JobOfferApprover.APPROVER_FIRST_NAME,
        JobOfferApprover.APPROVER_LAST_NAME,
        JobOfferApprover.APPROVER_ORDER,
        JobOfferApprover.COMMENT,
        JobOfferApprover.CREATED_BY,
        JobOfferApprover.CREATED_DATE,
        JobOfferApprover.LAST_MODIFIED_BY,
        JobOfferApprover.LAST_MODIFIED_DATE,
        JobOfferApprover.OFFER_APPROVAL_ID,
        JobOfferApprover.OFFER_APPROVER_ID,
        JobOfferApprover.USERNAME,
        JobOfferApprover.CREATED_BY_NAV,
        JobOfferApprover.LAST_MODIFIED_BY_NAV,
        JobOfferApprover.OFFER_APPROVAL
    ];
    /**
     * All fields selector.
     */
    JobOfferApprover.ALL_FIELDS = new core_1.AllFields('*', JobOfferApprover);
    /**
     * All key fields of the JobOfferApprover entity.
     */
    JobOfferApprover._keyFields = [JobOfferApprover.OFFER_APPROVER_ID];
    /**
     * Mapping of all key field names to the respective static field property JobOfferApprover.
     */
    JobOfferApprover._keys = JobOfferApprover._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobOfferApprover = exports.JobOfferApprover || (exports.JobOfferApprover = {}));
exports.JobOfferApprover = JobOfferApprover;
//# sourceMappingURL=JobOfferApprover.js.map