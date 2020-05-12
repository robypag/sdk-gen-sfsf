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
var JobApplicationBackgroundCheckRequestRequestBuilder_1 = require("./JobApplicationBackgroundCheckRequestRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobApplicationBackgroundCheckRequest" of service "SFOData".
 */
var JobApplicationBackgroundCheckRequest = /** @class */ (function (_super) {
    __extends(JobApplicationBackgroundCheckRequest, _super);
    function JobApplicationBackgroundCheckRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobApplicationBackgroundCheckRequest`.
     * @returns A builder that constructs instances of entity type `JobApplicationBackgroundCheckRequest`.
     */
    JobApplicationBackgroundCheckRequest.builder = function () {
        return core_1.Entity.entityBuilder(JobApplicationBackgroundCheckRequest);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationBackgroundCheckRequest` entity type.
     * @returns A `JobApplicationBackgroundCheckRequest` request builder.
     */
    JobApplicationBackgroundCheckRequest.requestBuilder = function () {
        return new JobApplicationBackgroundCheckRequestRequestBuilder_1.JobApplicationBackgroundCheckRequestRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationBackgroundCheckRequest`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationBackgroundCheckRequest`.
     */
    JobApplicationBackgroundCheckRequest.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobApplicationBackgroundCheckRequest);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobApplicationBackgroundCheckRequest.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobApplicationBackgroundCheckRequest.
     */
    JobApplicationBackgroundCheckRequest._entityName = 'JobApplicationBackgroundCheckRequest';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationBackgroundCheckRequest.
     */
    JobApplicationBackgroundCheckRequest._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobApplicationBackgroundCheckRequest._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobApplicationBackgroundCheckRequest;
}(core_1.Entity));
exports.JobApplicationBackgroundCheckRequest = JobApplicationBackgroundCheckRequest;
var User_1 = require("./User");
var JobApplication_1 = require("./JobApplication");
(function (JobApplicationBackgroundCheckRequest) {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationBackgroundCheckRequest.APPLICATION_ID = new core_1.BigNumberField('applicationId', JobApplicationBackgroundCheckRequest, 'Edm.Int64');
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationBackgroundCheckRequest.CREATED_BY_USER = new core_1.StringField('createdByUser', JobApplicationBackgroundCheckRequest, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationBackgroundCheckRequest.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', JobApplicationBackgroundCheckRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationBackgroundCheckRequest.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', JobApplicationBackgroundCheckRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[orderStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationBackgroundCheckRequest.ORDER_STATUS = new core_1.StringField('orderStatus', JobApplicationBackgroundCheckRequest, 'Edm.String');
    /**
     * Static representation of the [[requestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationBackgroundCheckRequest.REQUEST_ID = new core_1.BigNumberField('requestId', JobApplicationBackgroundCheckRequest, 'Edm.Int64');
    /**
     * Static representation of the [[responseCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationBackgroundCheckRequest.RESPONSE_CODE = new core_1.StringField('responseCode', JobApplicationBackgroundCheckRequest, 'Edm.String');
    /**
     * Static representation of the [[responseDetail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationBackgroundCheckRequest.RESPONSE_DETAIL = new core_1.StringField('responseDetail', JobApplicationBackgroundCheckRequest, 'Edm.String');
    /**
     * Static representation of the [[vendorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationBackgroundCheckRequest.VENDOR_CODE = new core_1.StringField('vendorCode', JobApplicationBackgroundCheckRequest, 'Edm.String');
    /**
     * Static representation of the [[vendorOrderNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationBackgroundCheckRequest.VENDOR_ORDER_NO = new core_1.StringField('vendorOrderNo', JobApplicationBackgroundCheckRequest, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByUserNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationBackgroundCheckRequest.CREATED_BY_USER_NAV = new core_1.OneToOneLink('createdByUserNav', JobApplicationBackgroundCheckRequest, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[jobApplication]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationBackgroundCheckRequest.JOB_APPLICATION = new core_1.OneToOneLink('jobApplication', JobApplicationBackgroundCheckRequest, JobApplication_1.JobApplication);
    /**
     * All fields of the JobApplicationBackgroundCheckRequest entity.
     */
    JobApplicationBackgroundCheckRequest._allFields = [
        JobApplicationBackgroundCheckRequest.APPLICATION_ID,
        JobApplicationBackgroundCheckRequest.CREATED_BY_USER,
        JobApplicationBackgroundCheckRequest.CREATED_DATE_TIME,
        JobApplicationBackgroundCheckRequest.LAST_MODIFIED_DATE_TIME,
        JobApplicationBackgroundCheckRequest.ORDER_STATUS,
        JobApplicationBackgroundCheckRequest.REQUEST_ID,
        JobApplicationBackgroundCheckRequest.RESPONSE_CODE,
        JobApplicationBackgroundCheckRequest.RESPONSE_DETAIL,
        JobApplicationBackgroundCheckRequest.VENDOR_CODE,
        JobApplicationBackgroundCheckRequest.VENDOR_ORDER_NO,
        JobApplicationBackgroundCheckRequest.CREATED_BY_USER_NAV,
        JobApplicationBackgroundCheckRequest.JOB_APPLICATION
    ];
    /**
     * All fields selector.
     */
    JobApplicationBackgroundCheckRequest.ALL_FIELDS = new core_1.AllFields('*', JobApplicationBackgroundCheckRequest);
    /**
     * All key fields of the JobApplicationBackgroundCheckRequest entity.
     */
    JobApplicationBackgroundCheckRequest._keyFields = [JobApplicationBackgroundCheckRequest.REQUEST_ID];
    /**
     * Mapping of all key field names to the respective static field property JobApplicationBackgroundCheckRequest.
     */
    JobApplicationBackgroundCheckRequest._keys = JobApplicationBackgroundCheckRequest._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobApplicationBackgroundCheckRequest = exports.JobApplicationBackgroundCheckRequest || (exports.JobApplicationBackgroundCheckRequest = {}));
exports.JobApplicationBackgroundCheckRequest = JobApplicationBackgroundCheckRequest;
//# sourceMappingURL=JobApplicationBackgroundCheckRequest.js.map