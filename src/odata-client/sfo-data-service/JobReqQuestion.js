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
var JobReqQuestionRequestBuilder_1 = require("./JobReqQuestionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobReqQuestion" of service "SFOData".
 */
var JobReqQuestion = /** @class */ (function (_super) {
    __extends(JobReqQuestion, _super);
    function JobReqQuestion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobReqQuestion`.
     * @returns A builder that constructs instances of entity type `JobReqQuestion`.
     */
    JobReqQuestion.builder = function () {
        return core_1.Entity.entityBuilder(JobReqQuestion);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobReqQuestion` entity type.
     * @returns A `JobReqQuestion` request builder.
     */
    JobReqQuestion.requestBuilder = function () {
        return new JobReqQuestionRequestBuilder_1.JobReqQuestionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobReqQuestion`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobReqQuestion`.
     */
    JobReqQuestion.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobReqQuestion);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobReqQuestion.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobReqQuestion.
     */
    JobReqQuestion._entityName = 'JobReqQuestion';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobReqQuestion.
     */
    JobReqQuestion._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobReqQuestion._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobReqQuestion;
}(core_1.Entity));
exports.JobReqQuestion = JobReqQuestion;
(function (JobReqQuestion) {
    /**
     * Static representation of the [[questionCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqQuestion.QUESTION_CATEGORY = new core_1.StringField('questionCategory', JobReqQuestion, 'Edm.String');
    /**
     * Static representation of the [[questionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqQuestion.QUESTION_ID = new core_1.BigNumberField('questionId', JobReqQuestion, 'Edm.Int64');
    /**
     * Static representation of the [[questionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqQuestion.QUESTION_NAME = new core_1.StringField('questionName', JobReqQuestion, 'Edm.String');
    /**
     * Static representation of the [[questionSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqQuestion.QUESTION_SOURCE = new core_1.StringField('questionSource', JobReqQuestion, 'Edm.String');
    /**
     * Static representation of the [[questionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqQuestion.QUESTION_TYPE = new core_1.StringField('questionType', JobReqQuestion, 'Edm.String');
    /**
     * All fields of the JobReqQuestion entity.
     */
    JobReqQuestion._allFields = [
        JobReqQuestion.QUESTION_CATEGORY,
        JobReqQuestion.QUESTION_ID,
        JobReqQuestion.QUESTION_NAME,
        JobReqQuestion.QUESTION_SOURCE,
        JobReqQuestion.QUESTION_TYPE
    ];
    /**
     * All fields selector.
     */
    JobReqQuestion.ALL_FIELDS = new core_1.AllFields('*', JobReqQuestion);
    /**
     * All key fields of the JobReqQuestion entity.
     */
    JobReqQuestion._keyFields = [JobReqQuestion.QUESTION_ID];
    /**
     * Mapping of all key field names to the respective static field property JobReqQuestion.
     */
    JobReqQuestion._keys = JobReqQuestion._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobReqQuestion = exports.JobReqQuestion || (exports.JobReqQuestion = {}));
exports.JobReqQuestion = JobReqQuestion;
//# sourceMappingURL=JobReqQuestion.js.map