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
var JobReqFoLocationRequestBuilder_1 = require("./JobReqFoLocationRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobReqFOLocation" of service "SFOData".
 */
var JobReqFoLocation = /** @class */ (function (_super) {
    __extends(JobReqFoLocation, _super);
    function JobReqFoLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobReqFoLocation`.
     * @returns A builder that constructs instances of entity type `JobReqFoLocation`.
     */
    JobReqFoLocation.builder = function () {
        return core_1.Entity.entityBuilder(JobReqFoLocation);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobReqFoLocation` entity type.
     * @returns A `JobReqFoLocation` request builder.
     */
    JobReqFoLocation.requestBuilder = function () {
        return new JobReqFoLocationRequestBuilder_1.JobReqFoLocationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobReqFoLocation`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobReqFoLocation`.
     */
    JobReqFoLocation.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobReqFoLocation);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobReqFoLocation.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobReqFoLocation.
     */
    JobReqFoLocation._entityName = 'JobReqFOLocation';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobReqFoLocation.
     */
    JobReqFoLocation._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobReqFoLocation._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobReqFoLocation;
}(core_1.Entity));
exports.JobReqFoLocation = JobReqFoLocation;
var FoLocation_1 = require("./FoLocation");
(function (JobReqFoLocation) {
    /**
     * Static representation of the [[fieldName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqFoLocation.FIELD_NAME = new core_1.StringField('fieldName', JobReqFoLocation, 'Edm.String');
    /**
     * Static representation of the [[isPrimary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqFoLocation.IS_PRIMARY = new core_1.BooleanField('isPrimary', JobReqFoLocation, 'Edm.Boolean');
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqFoLocation.JOB_REQ_ID = new core_1.BigNumberField('jobReqId', JobReqFoLocation, 'Edm.Int64');
    /**
     * Static representation of the [[jobReqMultiSelectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqFoLocation.JOB_REQ_MULTI_SELECT_ID = new core_1.BigNumberField('jobReqMultiSelectId', JobReqFoLocation, 'Edm.Int64');
    /**
     * Static representation of the [[parentFieldValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqFoLocation.PARENT_FIELD_VALUE = new core_1.BigNumberField('parentFieldValue', JobReqFoLocation, 'Edm.Int64');
    /**
     * Static representation of the one-to-many navigation property [[value]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqFoLocation.VALUE = new core_1.Link('value', JobReqFoLocation, FoLocation_1.FoLocation);
    /**
     * All fields of the JobReqFoLocation entity.
     */
    JobReqFoLocation._allFields = [
        JobReqFoLocation.FIELD_NAME,
        JobReqFoLocation.IS_PRIMARY,
        JobReqFoLocation.JOB_REQ_ID,
        JobReqFoLocation.JOB_REQ_MULTI_SELECT_ID,
        JobReqFoLocation.PARENT_FIELD_VALUE,
        JobReqFoLocation.VALUE
    ];
    /**
     * All fields selector.
     */
    JobReqFoLocation.ALL_FIELDS = new core_1.AllFields('*', JobReqFoLocation);
    /**
     * All key fields of the JobReqFoLocation entity.
     */
    JobReqFoLocation._keyFields = [JobReqFoLocation.JOB_REQ_MULTI_SELECT_ID];
    /**
     * Mapping of all key field names to the respective static field property JobReqFoLocation.
     */
    JobReqFoLocation._keys = JobReqFoLocation._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobReqFoLocation = exports.JobReqFoLocation || (exports.JobReqFoLocation = {}));
exports.JobReqFoLocation = JobReqFoLocation;
//# sourceMappingURL=JobReqFoLocation.js.map