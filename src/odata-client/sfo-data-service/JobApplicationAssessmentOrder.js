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
var JobApplicationAssessmentOrderRequestBuilder_1 = require("./JobApplicationAssessmentOrderRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobApplicationAssessmentOrder" of service "SFOData".
 */
var JobApplicationAssessmentOrder = /** @class */ (function (_super) {
    __extends(JobApplicationAssessmentOrder, _super);
    function JobApplicationAssessmentOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobApplicationAssessmentOrder`.
     * @returns A builder that constructs instances of entity type `JobApplicationAssessmentOrder`.
     */
    JobApplicationAssessmentOrder.builder = function () {
        return core_1.Entity.entityBuilder(JobApplicationAssessmentOrder);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationAssessmentOrder` entity type.
     * @returns A `JobApplicationAssessmentOrder` request builder.
     */
    JobApplicationAssessmentOrder.requestBuilder = function () {
        return new JobApplicationAssessmentOrderRequestBuilder_1.JobApplicationAssessmentOrderRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationAssessmentOrder`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationAssessmentOrder`.
     */
    JobApplicationAssessmentOrder.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobApplicationAssessmentOrder);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobApplicationAssessmentOrder.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobApplicationAssessmentOrder.
     */
    JobApplicationAssessmentOrder._entityName = 'JobApplicationAssessmentOrder';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationAssessmentOrder.
     */
    JobApplicationAssessmentOrder._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobApplicationAssessmentOrder._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobApplicationAssessmentOrder;
}(core_1.Entity));
exports.JobApplicationAssessmentOrder = JobApplicationAssessmentOrder;
var JobApplicationAssessmentReport_1 = require("./JobApplicationAssessmentReport");
var User_1 = require("./User");
var JobApplication_1 = require("./JobApplication");
(function (JobApplicationAssessmentOrder) {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAssessmentOrder.APPLICATION_ID = new core_1.BigNumberField('applicationId', JobApplicationAssessmentOrder, 'Edm.Int64');
    /**
     * Static representation of the [[assessmentUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAssessmentOrder.ASSESSMENT_URL = new core_1.StringField('assessmentUrl', JobApplicationAssessmentOrder, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAssessmentOrder.CREATED_BY = new core_1.StringField('createdBy', JobApplicationAssessmentOrder, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAssessmentOrder.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', JobApplicationAssessmentOrder, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAssessmentOrder.ID = new core_1.BigNumberField('id', JobApplicationAssessmentOrder, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAssessmentOrder.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', JobApplicationAssessmentOrder, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAssessmentOrder.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', JobApplicationAssessmentOrder, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[packageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAssessmentOrder.PACKAGE_CODE = new core_1.StringField('packageCode', JobApplicationAssessmentOrder, 'Edm.String');
    /**
     * Static representation of the [[vendorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAssessmentOrder.VENDOR_CODE = new core_1.StringField('vendorCode', JobApplicationAssessmentOrder, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[assessmentReport]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAssessmentOrder.ASSESSMENT_REPORT = new core_1.Link('assessmentReport', JobApplicationAssessmentOrder, JobApplicationAssessmentReport_1.JobApplicationAssessmentReport);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAssessmentOrder.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', JobApplicationAssessmentOrder, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[jobApplication]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAssessmentOrder.JOB_APPLICATION = new core_1.OneToOneLink('jobApplication', JobApplicationAssessmentOrder, JobApplication_1.JobApplication);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAssessmentOrder.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', JobApplicationAssessmentOrder, User_1.User);
    /**
     * All fields of the JobApplicationAssessmentOrder entity.
     */
    JobApplicationAssessmentOrder._allFields = [
        JobApplicationAssessmentOrder.APPLICATION_ID,
        JobApplicationAssessmentOrder.ASSESSMENT_URL,
        JobApplicationAssessmentOrder.CREATED_BY,
        JobApplicationAssessmentOrder.CREATED_DATE_TIME,
        JobApplicationAssessmentOrder.ID,
        JobApplicationAssessmentOrder.LAST_MODIFIED_BY,
        JobApplicationAssessmentOrder.LAST_MODIFIED_DATE_TIME,
        JobApplicationAssessmentOrder.PACKAGE_CODE,
        JobApplicationAssessmentOrder.VENDOR_CODE,
        JobApplicationAssessmentOrder.ASSESSMENT_REPORT,
        JobApplicationAssessmentOrder.CREATED_BY_NAV,
        JobApplicationAssessmentOrder.JOB_APPLICATION,
        JobApplicationAssessmentOrder.LAST_MODIFIED_BY_NAV
    ];
    /**
     * All fields selector.
     */
    JobApplicationAssessmentOrder.ALL_FIELDS = new core_1.AllFields('*', JobApplicationAssessmentOrder);
    /**
     * All key fields of the JobApplicationAssessmentOrder entity.
     */
    JobApplicationAssessmentOrder._keyFields = [JobApplicationAssessmentOrder.ID];
    /**
     * Mapping of all key field names to the respective static field property JobApplicationAssessmentOrder.
     */
    JobApplicationAssessmentOrder._keys = JobApplicationAssessmentOrder._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobApplicationAssessmentOrder = exports.JobApplicationAssessmentOrder || (exports.JobApplicationAssessmentOrder = {}));
exports.JobApplicationAssessmentOrder = JobApplicationAssessmentOrder;
//# sourceMappingURL=JobApplicationAssessmentOrder.js.map