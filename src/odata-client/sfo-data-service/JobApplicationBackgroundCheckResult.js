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
var JobApplicationBackgroundCheckResultRequestBuilder_1 = require("./JobApplicationBackgroundCheckResultRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobApplicationBackgroundCheckResult" of service "SFOData".
 */
var JobApplicationBackgroundCheckResult = /** @class */ (function (_super) {
    __extends(JobApplicationBackgroundCheckResult, _super);
    function JobApplicationBackgroundCheckResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobApplicationBackgroundCheckResult`.
     * @returns A builder that constructs instances of entity type `JobApplicationBackgroundCheckResult`.
     */
    JobApplicationBackgroundCheckResult.builder = function () {
        return core_1.Entity.entityBuilder(JobApplicationBackgroundCheckResult);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationBackgroundCheckResult` entity type.
     * @returns A `JobApplicationBackgroundCheckResult` request builder.
     */
    JobApplicationBackgroundCheckResult.requestBuilder = function () {
        return new JobApplicationBackgroundCheckResultRequestBuilder_1.JobApplicationBackgroundCheckResultRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationBackgroundCheckResult`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationBackgroundCheckResult`.
     */
    JobApplicationBackgroundCheckResult.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobApplicationBackgroundCheckResult);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobApplicationBackgroundCheckResult.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobApplicationBackgroundCheckResult.
     */
    JobApplicationBackgroundCheckResult._entityName = 'JobApplicationBackgroundCheckResult';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationBackgroundCheckResult.
     */
    JobApplicationBackgroundCheckResult._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobApplicationBackgroundCheckResult._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobApplicationBackgroundCheckResult;
}(core_1.Entity));
exports.JobApplicationBackgroundCheckResult = JobApplicationBackgroundCheckResult;
var JobApplicationBackgroundCheckRequest_1 = require("./JobApplicationBackgroundCheckRequest");
(function (JobApplicationBackgroundCheckResult) {
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationBackgroundCheckResult.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', JobApplicationBackgroundCheckResult, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[finalStep]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationBackgroundCheckResult.FINAL_STEP = new core_1.BooleanField('finalStep', JobApplicationBackgroundCheckResult, 'Edm.Boolean');
    /**
     * Static representation of the [[reportUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationBackgroundCheckResult.REPORT_URL = new core_1.StringField('reportUrl', JobApplicationBackgroundCheckResult, 'Edm.String');
    /**
     * Static representation of the [[statusId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationBackgroundCheckResult.STATUS_ID = new core_1.BigNumberField('statusId', JobApplicationBackgroundCheckResult, 'Edm.Int64');
    /**
     * Static representation of the [[stepMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationBackgroundCheckResult.STEP_MESSAGE = new core_1.StringField('stepMessage', JobApplicationBackgroundCheckResult, 'Edm.String');
    /**
     * Static representation of the [[stepName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationBackgroundCheckResult.STEP_NAME = new core_1.StringField('stepName', JobApplicationBackgroundCheckResult, 'Edm.String');
    /**
     * Static representation of the [[stepStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationBackgroundCheckResult.STEP_STATUS = new core_1.StringField('stepStatus', JobApplicationBackgroundCheckResult, 'Edm.String');
    /**
     * Static representation of the [[vendorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationBackgroundCheckResult.VENDOR_CODE = new core_1.StringField('vendorCode', JobApplicationBackgroundCheckResult, 'Edm.String');
    /**
     * Static representation of the [[vendorOrderNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationBackgroundCheckResult.VENDOR_ORDER_NO = new core_1.StringField('vendorOrderNo', JobApplicationBackgroundCheckResult, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[backgroundCheckRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationBackgroundCheckResult.BACKGROUND_CHECK_REQUEST = new core_1.OneToOneLink('backgroundCheckRequest', JobApplicationBackgroundCheckResult, JobApplicationBackgroundCheckRequest_1.JobApplicationBackgroundCheckRequest);
    /**
     * All fields of the JobApplicationBackgroundCheckResult entity.
     */
    JobApplicationBackgroundCheckResult._allFields = [
        JobApplicationBackgroundCheckResult.CREATED_DATE_TIME,
        JobApplicationBackgroundCheckResult.FINAL_STEP,
        JobApplicationBackgroundCheckResult.REPORT_URL,
        JobApplicationBackgroundCheckResult.STATUS_ID,
        JobApplicationBackgroundCheckResult.STEP_MESSAGE,
        JobApplicationBackgroundCheckResult.STEP_NAME,
        JobApplicationBackgroundCheckResult.STEP_STATUS,
        JobApplicationBackgroundCheckResult.VENDOR_CODE,
        JobApplicationBackgroundCheckResult.VENDOR_ORDER_NO,
        JobApplicationBackgroundCheckResult.BACKGROUND_CHECK_REQUEST
    ];
    /**
     * All fields selector.
     */
    JobApplicationBackgroundCheckResult.ALL_FIELDS = new core_1.AllFields('*', JobApplicationBackgroundCheckResult);
    /**
     * All key fields of the JobApplicationBackgroundCheckResult entity.
     */
    JobApplicationBackgroundCheckResult._keyFields = [JobApplicationBackgroundCheckResult.STATUS_ID];
    /**
     * Mapping of all key field names to the respective static field property JobApplicationBackgroundCheckResult.
     */
    JobApplicationBackgroundCheckResult._keys = JobApplicationBackgroundCheckResult._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobApplicationBackgroundCheckResult = exports.JobApplicationBackgroundCheckResult || (exports.JobApplicationBackgroundCheckResult = {}));
exports.JobApplicationBackgroundCheckResult = JobApplicationBackgroundCheckResult;
//# sourceMappingURL=JobApplicationBackgroundCheckResult.js.map