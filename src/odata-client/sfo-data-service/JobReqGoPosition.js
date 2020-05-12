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
var JobReqGoPositionRequestBuilder_1 = require("./JobReqGoPositionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobReqGOPosition" of service "SFOData".
 */
var JobReqGoPosition = /** @class */ (function (_super) {
    __extends(JobReqGoPosition, _super);
    function JobReqGoPosition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobReqGoPosition`.
     * @returns A builder that constructs instances of entity type `JobReqGoPosition`.
     */
    JobReqGoPosition.builder = function () {
        return core_1.Entity.entityBuilder(JobReqGoPosition);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobReqGoPosition` entity type.
     * @returns A `JobReqGoPosition` request builder.
     */
    JobReqGoPosition.requestBuilder = function () {
        return new JobReqGoPositionRequestBuilder_1.JobReqGoPositionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobReqGoPosition`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobReqGoPosition`.
     */
    JobReqGoPosition.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobReqGoPosition);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobReqGoPosition.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobReqGoPosition.
     */
    JobReqGoPosition._entityName = 'JobReqGOPosition';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobReqGoPosition.
     */
    JobReqGoPosition._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobReqGoPosition._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobReqGoPosition;
}(core_1.Entity));
exports.JobReqGoPosition = JobReqGoPosition;
var Position_1 = require("./Position");
(function (JobReqGoPosition) {
    /**
     * Static representation of the [[fieldName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqGoPosition.FIELD_NAME = new core_1.StringField('fieldName', JobReqGoPosition, 'Edm.String');
    /**
     * Static representation of the [[isPrimary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqGoPosition.IS_PRIMARY = new core_1.BooleanField('isPrimary', JobReqGoPosition, 'Edm.Boolean');
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqGoPosition.JOB_REQ_ID = new core_1.BigNumberField('jobReqId', JobReqGoPosition, 'Edm.Int64');
    /**
     * Static representation of the [[jobReqMultiSelectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqGoPosition.JOB_REQ_MULTI_SELECT_ID = new core_1.BigNumberField('jobReqMultiSelectId', JobReqGoPosition, 'Edm.Int64');
    /**
     * Static representation of the [[parentFieldValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqGoPosition.PARENT_FIELD_VALUE = new core_1.BigNumberField('parentFieldValue', JobReqGoPosition, 'Edm.Int64');
    /**
     * Static representation of the one-to-one navigation property [[value]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqGoPosition.VALUE = new core_1.OneToOneLink('value', JobReqGoPosition, Position_1.Position);
    /**
     * All fields of the JobReqGoPosition entity.
     */
    JobReqGoPosition._allFields = [
        JobReqGoPosition.FIELD_NAME,
        JobReqGoPosition.IS_PRIMARY,
        JobReqGoPosition.JOB_REQ_ID,
        JobReqGoPosition.JOB_REQ_MULTI_SELECT_ID,
        JobReqGoPosition.PARENT_FIELD_VALUE,
        JobReqGoPosition.VALUE
    ];
    /**
     * All fields selector.
     */
    JobReqGoPosition.ALL_FIELDS = new core_1.AllFields('*', JobReqGoPosition);
    /**
     * All key fields of the JobReqGoPosition entity.
     */
    JobReqGoPosition._keyFields = [JobReqGoPosition.JOB_REQ_MULTI_SELECT_ID];
    /**
     * Mapping of all key field names to the respective static field property JobReqGoPosition.
     */
    JobReqGoPosition._keys = JobReqGoPosition._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobReqGoPosition = exports.JobReqGoPosition || (exports.JobReqGoPosition = {}));
exports.JobReqGoPosition = JobReqGoPosition;
//# sourceMappingURL=JobReqGoPosition.js.map