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
var JobOfferRequestBuilder_1 = require("./JobOfferRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobOffer" of service "SFOData".
 */
var JobOffer = /** @class */ (function (_super) {
    __extends(JobOffer, _super);
    function JobOffer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobOffer`.
     * @returns A builder that constructs instances of entity type `JobOffer`.
     */
    JobOffer.builder = function () {
        return core_1.Entity.entityBuilder(JobOffer);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobOffer` entity type.
     * @returns A `JobOffer` request builder.
     */
    JobOffer.requestBuilder = function () {
        return new JobOfferRequestBuilder_1.JobOfferRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobOffer`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobOffer`.
     */
    JobOffer.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobOffer);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobOffer.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobOffer.
     */
    JobOffer._entityName = 'JobOffer';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobOffer.
     */
    JobOffer._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobOffer._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobOffer;
}(core_1.Entity));
exports.JobOffer = JobOffer;
var JobOfferApprover_1 = require("./JobOfferApprover");
var User_1 = require("./User");
var JobApplication_1 = require("./JobApplication");
var JobOfferFieldControls_1 = require("./JobOfferFieldControls");
var FoLocation_1 = require("./FoLocation");
var Attachment_1 = require("./Attachment");
(function (JobOffer) {
    /**
     * Static representation of the [[anonymizedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.ANONYMIZED_DATE = new core_1.DateField('anonymizedDate', JobOffer, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[anonymizedFlag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.ANONYMIZED_FLAG = new core_1.StringField('anonymizedFlag', JobOffer, 'Edm.String');
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.APPLICATION_ID = new core_1.BigNumberField('applicationId', JobOffer, 'Edm.Int64');
    /**
     * Static representation of the [[contactEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.CONTACT_EMAIL = new core_1.StringField('contactEmail', JobOffer, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.CREATED_BY = new core_1.StringField('createdBy', JobOffer, 'Edm.String');
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.CREATED_DATE = new core_1.DateField('createdDate', JobOffer, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.CURRENCY = new core_1.StringField('currency', JobOffer, 'Edm.String');
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.FIRST_NAME = new core_1.StringField('firstName', JobOffer, 'Edm.String');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.FORM_DATA_ID = new core_1.BigNumberField('formDataId', JobOffer, 'Edm.Int64');
    /**
     * Static representation of the [[formTemplateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.FORM_TEMPLATE_ID = new core_1.BigNumberField('formTemplateId', JobOffer, 'Edm.Int64');
    /**
     * Static representation of the [[initialComment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.INITIAL_COMMENT = new core_1.StringField('initialComment', JobOffer, 'Edm.String');
    /**
     * Static representation of the [[internalStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.INTERNAL_STATUS = new core_1.StringField('internalStatus', JobOffer, 'Edm.String');
    /**
     * Static representation of the [[jobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.JOB_CODE = new core_1.StringField('jobCode', JobOffer, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', JobOffer, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', JobOffer, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.LAST_NAME = new core_1.StringField('lastName', JobOffer, 'Edm.String');
    /**
     * Static representation of the [[locationObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.LOCATION_OBJ_CODE = new core_1.StringField('location_obj_code', JobOffer, 'Edm.String');
    /**
     * Static representation of the [[offerApprovalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.OFFER_APPROVAL_ID = new core_1.BigNumberField('offerApprovalId', JobOffer, 'Edm.Int64');
    /**
     * Static representation of the [[redefineTemplateApprovers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.REDEFINE_TEMPLATE_APPROVERS = new core_1.StringField('redefineTemplateApprovers', JobOffer, 'Edm.String');
    /**
     * Static representation of the [[templateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.TEMPLATE_ID = new core_1.BigNumberField('templateId', JobOffer, 'Edm.Int64');
    /**
     * Static representation of the [[userIsCurrentApprover]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.USER_IS_CURRENT_APPROVER = new core_1.BooleanField('userIsCurrentApprover', JobOffer, 'Edm.Boolean');
    /**
     * Static representation of the [[userIsOriginator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.USER_IS_ORIGINATOR = new core_1.BooleanField('userIsOriginator', JobOffer, 'Edm.Boolean');
    /**
     * Static representation of the [[version]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.VERSION = new core_1.BigNumberField('version', JobOffer, 'Edm.Int64');
    /**
     * Static representation of the one-to-many navigation property [[approvers]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.APPROVERS = new core_1.Link('approvers', JobOffer, JobOfferApprover_1.JobOfferApprover);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', JobOffer, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[jobApplication]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.JOB_APPLICATION = new core_1.OneToOneLink('jobApplication', JobOffer, JobApplication_1.JobApplication);
    /**
     * Static representation of the one-to-one navigation property [[jobOfferPermissionsNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.JOB_OFFER_PERMISSIONS_NAV = new core_1.OneToOneLink('jobOfferPermissionsNav', JobOffer, JobOfferFieldControls_1.JobOfferFieldControls);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', JobOffer, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[locationObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.LOCATION_OBJ = new core_1.Link('location_obj', JobOffer, FoLocation_1.FoLocation);
    /**
     * Static representation of the one-to-one navigation property [[resume]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOffer.RESUME = new core_1.OneToOneLink('resume', JobOffer, Attachment_1.Attachment);
    /**
     * All fields of the JobOffer entity.
     */
    JobOffer._allFields = [
        JobOffer.ANONYMIZED_DATE,
        JobOffer.ANONYMIZED_FLAG,
        JobOffer.APPLICATION_ID,
        JobOffer.CONTACT_EMAIL,
        JobOffer.CREATED_BY,
        JobOffer.CREATED_DATE,
        JobOffer.CURRENCY,
        JobOffer.FIRST_NAME,
        JobOffer.FORM_DATA_ID,
        JobOffer.FORM_TEMPLATE_ID,
        JobOffer.INITIAL_COMMENT,
        JobOffer.INTERNAL_STATUS,
        JobOffer.JOB_CODE,
        JobOffer.LAST_MODIFIED_BY,
        JobOffer.LAST_MODIFIED_DATE,
        JobOffer.LAST_NAME,
        JobOffer.LOCATION_OBJ_CODE,
        JobOffer.OFFER_APPROVAL_ID,
        JobOffer.REDEFINE_TEMPLATE_APPROVERS,
        JobOffer.TEMPLATE_ID,
        JobOffer.USER_IS_CURRENT_APPROVER,
        JobOffer.USER_IS_ORIGINATOR,
        JobOffer.VERSION,
        JobOffer.APPROVERS,
        JobOffer.CREATED_BY_NAV,
        JobOffer.JOB_APPLICATION,
        JobOffer.JOB_OFFER_PERMISSIONS_NAV,
        JobOffer.LAST_MODIFIED_BY_NAV,
        JobOffer.LOCATION_OBJ,
        JobOffer.RESUME
    ];
    /**
     * All fields selector.
     */
    JobOffer.ALL_FIELDS = new core_1.AllFields('*', JobOffer);
    /**
     * All key fields of the JobOffer entity.
     */
    JobOffer._keyFields = [JobOffer.OFFER_APPROVAL_ID];
    /**
     * Mapping of all key field names to the respective static field property JobOffer.
     */
    JobOffer._keys = JobOffer._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobOffer = exports.JobOffer || (exports.JobOffer = {}));
exports.JobOffer = JobOffer;
//# sourceMappingURL=JobOffer.js.map