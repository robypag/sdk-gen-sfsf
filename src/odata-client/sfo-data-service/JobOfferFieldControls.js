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
var JobOfferFieldControlsRequestBuilder_1 = require("./JobOfferFieldControlsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobOfferFieldControls" of service "SFOData".
 */
var JobOfferFieldControls = /** @class */ (function (_super) {
    __extends(JobOfferFieldControls, _super);
    function JobOfferFieldControls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobOfferFieldControls`.
     * @returns A builder that constructs instances of entity type `JobOfferFieldControls`.
     */
    JobOfferFieldControls.builder = function () {
        return core_1.Entity.entityBuilder(JobOfferFieldControls);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobOfferFieldControls` entity type.
     * @returns A `JobOfferFieldControls` request builder.
     */
    JobOfferFieldControls.requestBuilder = function () {
        return new JobOfferFieldControlsRequestBuilder_1.JobOfferFieldControlsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobOfferFieldControls`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobOfferFieldControls`.
     */
    JobOfferFieldControls.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobOfferFieldControls);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobOfferFieldControls.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobOfferFieldControls.
     */
    JobOfferFieldControls._entityName = 'JobOfferFieldControls';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobOfferFieldControls.
     */
    JobOfferFieldControls._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobOfferFieldControls._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobOfferFieldControls;
}(core_1.Entity));
exports.JobOfferFieldControls = JobOfferFieldControls;
(function (JobOfferFieldControls) {
    /**
     * Static representation of the [[anonymizedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.ANONYMIZED_DATE = new core_1.NumberField('anonymizedDate', JobOfferFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[anonymizedFlag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.ANONYMIZED_FLAG = new core_1.NumberField('anonymizedFlag', JobOfferFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.APPLICATION_ID = new core_1.NumberField('applicationId', JobOfferFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[approvers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.APPROVERS = new core_1.NumberField('approvers', JobOfferFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[contactEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.CONTACT_EMAIL = new core_1.NumberField('contactEmail', JobOfferFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.CREATED_BY = new core_1.NumberField('createdBy', JobOfferFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[createdByNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.CREATED_BY_NAV = new core_1.NumberField('createdByNav', JobOfferFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.CREATED_DATE = new core_1.NumberField('createdDate', JobOfferFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.CURRENCY = new core_1.NumberField('currency', JobOfferFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.FIRST_NAME = new core_1.NumberField('firstName', JobOfferFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.FORM_DATA_ID = new core_1.NumberField('formDataId', JobOfferFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[formTemplateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.FORM_TEMPLATE_ID = new core_1.NumberField('formTemplateId', JobOfferFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[initialComment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.INITIAL_COMMENT = new core_1.NumberField('initialComment', JobOfferFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[internalStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.INTERNAL_STATUS = new core_1.NumberField('internalStatus', JobOfferFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobApplication]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.JOB_APPLICATION = new core_1.NumberField('jobApplication', JobOfferFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.JOB_CODE = new core_1.NumberField('jobCode', JobOfferFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobOfferPermissionsNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.JOB_OFFER_PERMISSIONS_NAV = new core_1.NumberField('jobOfferPermissionsNav', JobOfferFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.LAST_MODIFIED_BY = new core_1.NumberField('lastModifiedBy', JobOfferFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[lastModifiedByNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.LAST_MODIFIED_BY_NAV = new core_1.NumberField('lastModifiedByNav', JobOfferFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.LAST_MODIFIED_DATE = new core_1.NumberField('lastModifiedDate', JobOfferFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.LAST_NAME = new core_1.NumberField('lastName', JobOfferFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[locationObj]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.LOCATION_OBJ = new core_1.NumberField('location_obj', JobOfferFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[locationObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.LOCATION_OBJ_CODE = new core_1.NumberField('location_obj_code', JobOfferFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[offerApprovalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.OFFER_APPROVAL_ID = new core_1.NumberField('offerApprovalId', JobOfferFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[redefineTemplateApprovers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.REDEFINE_TEMPLATE_APPROVERS = new core_1.NumberField('redefineTemplateApprovers', JobOfferFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[resume]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.RESUME = new core_1.NumberField('resume', JobOfferFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[templateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.TEMPLATE_ID = new core_1.NumberField('templateId', JobOfferFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[userIsCurrentApprover]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.USER_IS_CURRENT_APPROVER = new core_1.NumberField('userIsCurrentApprover', JobOfferFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[userIsOriginator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.USER_IS_ORIGINATOR = new core_1.NumberField('userIsOriginator', JobOfferFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[version]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferFieldControls.VERSION = new core_1.NumberField('version', JobOfferFieldControls, 'Edm.Byte');
    /**
     * All fields of the JobOfferFieldControls entity.
     */
    JobOfferFieldControls._allFields = [
        JobOfferFieldControls.ANONYMIZED_DATE,
        JobOfferFieldControls.ANONYMIZED_FLAG,
        JobOfferFieldControls.APPLICATION_ID,
        JobOfferFieldControls.APPROVERS,
        JobOfferFieldControls.CONTACT_EMAIL,
        JobOfferFieldControls.CREATED_BY,
        JobOfferFieldControls.CREATED_BY_NAV,
        JobOfferFieldControls.CREATED_DATE,
        JobOfferFieldControls.CURRENCY,
        JobOfferFieldControls.FIRST_NAME,
        JobOfferFieldControls.FORM_DATA_ID,
        JobOfferFieldControls.FORM_TEMPLATE_ID,
        JobOfferFieldControls.INITIAL_COMMENT,
        JobOfferFieldControls.INTERNAL_STATUS,
        JobOfferFieldControls.JOB_APPLICATION,
        JobOfferFieldControls.JOB_CODE,
        JobOfferFieldControls.JOB_OFFER_PERMISSIONS_NAV,
        JobOfferFieldControls.LAST_MODIFIED_BY,
        JobOfferFieldControls.LAST_MODIFIED_BY_NAV,
        JobOfferFieldControls.LAST_MODIFIED_DATE,
        JobOfferFieldControls.LAST_NAME,
        JobOfferFieldControls.LOCATION_OBJ,
        JobOfferFieldControls.LOCATION_OBJ_CODE,
        JobOfferFieldControls.OFFER_APPROVAL_ID,
        JobOfferFieldControls.REDEFINE_TEMPLATE_APPROVERS,
        JobOfferFieldControls.RESUME,
        JobOfferFieldControls.TEMPLATE_ID,
        JobOfferFieldControls.USER_IS_CURRENT_APPROVER,
        JobOfferFieldControls.USER_IS_ORIGINATOR,
        JobOfferFieldControls.VERSION
    ];
    /**
     * All fields selector.
     */
    JobOfferFieldControls.ALL_FIELDS = new core_1.AllFields('*', JobOfferFieldControls);
    /**
     * All key fields of the JobOfferFieldControls entity.
     */
    JobOfferFieldControls._keyFields = [JobOfferFieldControls.OFFER_APPROVAL_ID];
    /**
     * Mapping of all key field names to the respective static field property JobOfferFieldControls.
     */
    JobOfferFieldControls._keys = JobOfferFieldControls._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobOfferFieldControls = exports.JobOfferFieldControls || (exports.JobOfferFieldControls = {}));
exports.JobOfferFieldControls = JobOfferFieldControls;
//# sourceMappingURL=JobOfferFieldControls.js.map