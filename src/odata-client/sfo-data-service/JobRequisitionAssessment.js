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
var JobRequisitionAssessmentRequestBuilder_1 = require("./JobRequisitionAssessmentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobRequisitionAssessment" of service "SFOData".
 */
var JobRequisitionAssessment = /** @class */ (function (_super) {
    __extends(JobRequisitionAssessment, _super);
    function JobRequisitionAssessment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobRequisitionAssessment`.
     * @returns A builder that constructs instances of entity type `JobRequisitionAssessment`.
     */
    JobRequisitionAssessment.builder = function () {
        return core_1.Entity.entityBuilder(JobRequisitionAssessment);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobRequisitionAssessment` entity type.
     * @returns A `JobRequisitionAssessment` request builder.
     */
    JobRequisitionAssessment.requestBuilder = function () {
        return new JobRequisitionAssessmentRequestBuilder_1.JobRequisitionAssessmentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobRequisitionAssessment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobRequisitionAssessment`.
     */
    JobRequisitionAssessment.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobRequisitionAssessment);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobRequisitionAssessment.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobRequisitionAssessment.
     */
    JobRequisitionAssessment._entityName = 'JobRequisitionAssessment';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobRequisitionAssessment.
     */
    JobRequisitionAssessment._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobRequisitionAssessment._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobRequisitionAssessment;
}(core_1.Entity));
exports.JobRequisitionAssessment = JobRequisitionAssessment;
var User_1 = require("./User");
(function (JobRequisitionAssessment) {
    /**
     * Static representation of the [[appStatusSetItemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionAssessment.APP_STATUS_SET_ITEM_ID = new core_1.BigNumberField('appStatusSetItemId', JobRequisitionAssessment, 'Edm.Int64');
    /**
     * Static representation of the [[assessmentAssociationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionAssessment.ASSESSMENT_ASSOCIATION_ID = new core_1.BigNumberField('assessmentAssociationId', JobRequisitionAssessment, 'Edm.Int64');
    /**
     * Static representation of the [[assessmentPackageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionAssessment.ASSESSMENT_PACKAGE_CODE = new core_1.StringField('assessmentPackageCode', JobRequisitionAssessment, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionAssessment.CREATED_BY = new core_1.StringField('createdBy', JobRequisitionAssessment, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionAssessment.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', JobRequisitionAssessment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[emailTemplateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionAssessment.EMAIL_TEMPLATE_ID = new core_1.BigNumberField('emailTemplateId', JobRequisitionAssessment, 'Edm.Int64');
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionAssessment.JOB_REQ_ID = new core_1.BigNumberField('jobReqId', JobRequisitionAssessment, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionAssessment.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', JobRequisitionAssessment, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionAssessment.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', JobRequisitionAssessment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[vendorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionAssessment.VENDOR_CODE = new core_1.StringField('vendorCode', JobRequisitionAssessment, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionAssessment.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', JobRequisitionAssessment, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionAssessment.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', JobRequisitionAssessment, User_1.User);
    /**
     * All fields of the JobRequisitionAssessment entity.
     */
    JobRequisitionAssessment._allFields = [
        JobRequisitionAssessment.APP_STATUS_SET_ITEM_ID,
        JobRequisitionAssessment.ASSESSMENT_ASSOCIATION_ID,
        JobRequisitionAssessment.ASSESSMENT_PACKAGE_CODE,
        JobRequisitionAssessment.CREATED_BY,
        JobRequisitionAssessment.CREATED_DATE_TIME,
        JobRequisitionAssessment.EMAIL_TEMPLATE_ID,
        JobRequisitionAssessment.JOB_REQ_ID,
        JobRequisitionAssessment.LAST_MODIFIED_BY,
        JobRequisitionAssessment.LAST_MODIFIED_DATE_TIME,
        JobRequisitionAssessment.VENDOR_CODE,
        JobRequisitionAssessment.CREATED_BY_NAV,
        JobRequisitionAssessment.LAST_MODIFIED_BY_NAV
    ];
    /**
     * All fields selector.
     */
    JobRequisitionAssessment.ALL_FIELDS = new core_1.AllFields('*', JobRequisitionAssessment);
    /**
     * All key fields of the JobRequisitionAssessment entity.
     */
    JobRequisitionAssessment._keyFields = [JobRequisitionAssessment.ASSESSMENT_ASSOCIATION_ID];
    /**
     * Mapping of all key field names to the respective static field property JobRequisitionAssessment.
     */
    JobRequisitionAssessment._keys = JobRequisitionAssessment._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobRequisitionAssessment = exports.JobRequisitionAssessment || (exports.JobRequisitionAssessment = {}));
exports.JobRequisitionAssessment = JobRequisitionAssessment;
//# sourceMappingURL=JobRequisitionAssessment.js.map