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
var JobApplicationStatusLabelRequestBuilder_1 = require("./JobApplicationStatusLabelRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobApplicationStatusLabel" of service "SFOData".
 */
var JobApplicationStatusLabel = /** @class */ (function (_super) {
    __extends(JobApplicationStatusLabel, _super);
    function JobApplicationStatusLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobApplicationStatusLabel`.
     * @returns A builder that constructs instances of entity type `JobApplicationStatusLabel`.
     */
    JobApplicationStatusLabel.builder = function () {
        return core_1.Entity.entityBuilder(JobApplicationStatusLabel);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationStatusLabel` entity type.
     * @returns A `JobApplicationStatusLabel` request builder.
     */
    JobApplicationStatusLabel.requestBuilder = function () {
        return new JobApplicationStatusLabelRequestBuilder_1.JobApplicationStatusLabelRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationStatusLabel`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationStatusLabel`.
     */
    JobApplicationStatusLabel.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobApplicationStatusLabel);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobApplicationStatusLabel.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobApplicationStatusLabel.
     */
    JobApplicationStatusLabel._entityName = 'JobApplicationStatusLabel';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationStatusLabel.
     */
    JobApplicationStatusLabel._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobApplicationStatusLabel._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobApplicationStatusLabel;
}(core_1.Entity));
exports.JobApplicationStatusLabel = JobApplicationStatusLabel;
var JobApplicationStatus_1 = require("./JobApplicationStatus");
(function (JobApplicationStatusLabel) {
    /**
     * Static representation of the [[appStatusId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationStatusLabel.APP_STATUS_ID = new core_1.BigNumberField('appStatusId', JobApplicationStatusLabel, 'Edm.Int64');
    /**
     * Static representation of the [[candidateLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationStatusLabel.CANDIDATE_LABEL = new core_1.StringField('candidateLabel', JobApplicationStatusLabel, 'Edm.String');
    /**
     * Static representation of the [[locale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationStatusLabel.LOCALE = new core_1.StringField('locale', JobApplicationStatusLabel, 'Edm.String');
    /**
     * Static representation of the [[statusLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationStatusLabel.STATUS_LABEL = new core_1.StringField('statusLabel', JobApplicationStatusLabel, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[appStatus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationStatusLabel.APP_STATUS = new core_1.OneToOneLink('appStatus', JobApplicationStatusLabel, JobApplicationStatus_1.JobApplicationStatus);
    /**
     * All fields of the JobApplicationStatusLabel entity.
     */
    JobApplicationStatusLabel._allFields = [
        JobApplicationStatusLabel.APP_STATUS_ID,
        JobApplicationStatusLabel.CANDIDATE_LABEL,
        JobApplicationStatusLabel.LOCALE,
        JobApplicationStatusLabel.STATUS_LABEL,
        JobApplicationStatusLabel.APP_STATUS
    ];
    /**
     * All fields selector.
     */
    JobApplicationStatusLabel.ALL_FIELDS = new core_1.AllFields('*', JobApplicationStatusLabel);
    /**
     * All key fields of the JobApplicationStatusLabel entity.
     */
    JobApplicationStatusLabel._keyFields = [JobApplicationStatusLabel.APP_STATUS_ID];
    /**
     * Mapping of all key field names to the respective static field property JobApplicationStatusLabel.
     */
    JobApplicationStatusLabel._keys = JobApplicationStatusLabel._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobApplicationStatusLabel = exports.JobApplicationStatusLabel || (exports.JobApplicationStatusLabel = {}));
exports.JobApplicationStatusLabel = JobApplicationStatusLabel;
//# sourceMappingURL=JobApplicationStatusLabel.js.map