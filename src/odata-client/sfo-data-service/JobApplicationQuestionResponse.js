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
var JobApplicationQuestionResponseRequestBuilder_1 = require("./JobApplicationQuestionResponseRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobApplicationQuestionResponse" of service "SFOData".
 */
var JobApplicationQuestionResponse = /** @class */ (function (_super) {
    __extends(JobApplicationQuestionResponse, _super);
    function JobApplicationQuestionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobApplicationQuestionResponse`.
     * @returns A builder that constructs instances of entity type `JobApplicationQuestionResponse`.
     */
    JobApplicationQuestionResponse.builder = function () {
        return core_1.Entity.entityBuilder(JobApplicationQuestionResponse);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationQuestionResponse` entity type.
     * @returns A `JobApplicationQuestionResponse` request builder.
     */
    JobApplicationQuestionResponse.requestBuilder = function () {
        return new JobApplicationQuestionResponseRequestBuilder_1.JobApplicationQuestionResponseRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationQuestionResponse`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationQuestionResponse`.
     */
    JobApplicationQuestionResponse.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobApplicationQuestionResponse);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobApplicationQuestionResponse.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobApplicationQuestionResponse.
     */
    JobApplicationQuestionResponse._entityName = 'JobApplicationQuestionResponse';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationQuestionResponse.
     */
    JobApplicationQuestionResponse._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobApplicationQuestionResponse._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobApplicationQuestionResponse;
}(core_1.Entity));
exports.JobApplicationQuestionResponse = JobApplicationQuestionResponse;
var JobApplication_1 = require("./JobApplication");
(function (JobApplicationQuestionResponse) {
    /**
     * Static representation of the [[answer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationQuestionResponse.ANSWER = new core_1.StringField('answer', JobApplicationQuestionResponse, 'Edm.String');
    /**
     * Static representation of the [[appLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationQuestionResponse.APP_LOCALE = new core_1.StringField('appLocale', JobApplicationQuestionResponse, 'Edm.String');
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationQuestionResponse.APPLICATION_ID = new core_1.BigNumberField('applicationId', JobApplicationQuestionResponse, 'Edm.Int64');
    /**
     * Static representation of the [[expectedAnswer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationQuestionResponse.EXPECTED_ANSWER = new core_1.StringField('expectedAnswer', JobApplicationQuestionResponse, 'Edm.String');
    /**
     * Static representation of the [[expectedAnswerValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationQuestionResponse.EXPECTED_ANSWER_VALUE = new core_1.NumberField('expectedAnswerValue', JobApplicationQuestionResponse, 'Edm.Double');
    /**
     * Static representation of the [[highLow]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationQuestionResponse.HIGH_LOW = new core_1.StringField('highLow', JobApplicationQuestionResponse, 'Edm.String');
    /**
     * Static representation of the [[maxLength]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationQuestionResponse.MAX_LENGTH = new core_1.NumberField('maxLength', JobApplicationQuestionResponse, 'Edm.Double');
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationQuestionResponse.ORDER = new core_1.BigNumberField('order', JobApplicationQuestionResponse, 'Edm.Int64');
    /**
     * Static representation of the [[question]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationQuestionResponse.QUESTION = new core_1.StringField('question', JobApplicationQuestionResponse, 'Edm.String');
    /**
     * Static representation of the [[questionResponse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationQuestionResponse.QUESTION_RESPONSE = new core_1.StringField('questionResponse', JobApplicationQuestionResponse, 'Edm.String');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationQuestionResponse.TYPE = new core_1.StringField('type', JobApplicationQuestionResponse, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[jobApplication]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationQuestionResponse.JOB_APPLICATION = new core_1.OneToOneLink('jobApplication', JobApplicationQuestionResponse, JobApplication_1.JobApplication);
    /**
     * All fields of the JobApplicationQuestionResponse entity.
     */
    JobApplicationQuestionResponse._allFields = [
        JobApplicationQuestionResponse.ANSWER,
        JobApplicationQuestionResponse.APP_LOCALE,
        JobApplicationQuestionResponse.APPLICATION_ID,
        JobApplicationQuestionResponse.EXPECTED_ANSWER,
        JobApplicationQuestionResponse.EXPECTED_ANSWER_VALUE,
        JobApplicationQuestionResponse.HIGH_LOW,
        JobApplicationQuestionResponse.MAX_LENGTH,
        JobApplicationQuestionResponse.ORDER,
        JobApplicationQuestionResponse.QUESTION,
        JobApplicationQuestionResponse.QUESTION_RESPONSE,
        JobApplicationQuestionResponse.TYPE,
        JobApplicationQuestionResponse.JOB_APPLICATION
    ];
    /**
     * All fields selector.
     */
    JobApplicationQuestionResponse.ALL_FIELDS = new core_1.AllFields('*', JobApplicationQuestionResponse);
    /**
     * All key fields of the JobApplicationQuestionResponse entity.
     */
    JobApplicationQuestionResponse._keyFields = [JobApplicationQuestionResponse.APPLICATION_ID, JobApplicationQuestionResponse.ORDER];
    /**
     * Mapping of all key field names to the respective static field property JobApplicationQuestionResponse.
     */
    JobApplicationQuestionResponse._keys = JobApplicationQuestionResponse._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobApplicationQuestionResponse = exports.JobApplicationQuestionResponse || (exports.JobApplicationQuestionResponse = {}));
exports.JobApplicationQuestionResponse = JobApplicationQuestionResponse;
//# sourceMappingURL=JobApplicationQuestionResponse.js.map