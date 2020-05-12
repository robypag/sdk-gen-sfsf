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
var JobReqScreeningQuestionRequestBuilder_1 = require("./JobReqScreeningQuestionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobReqScreeningQuestion" of service "SFOData".
 */
var JobReqScreeningQuestion = /** @class */ (function (_super) {
    __extends(JobReqScreeningQuestion, _super);
    function JobReqScreeningQuestion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobReqScreeningQuestion`.
     * @returns A builder that constructs instances of entity type `JobReqScreeningQuestion`.
     */
    JobReqScreeningQuestion.builder = function () {
        return core_1.Entity.entityBuilder(JobReqScreeningQuestion);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobReqScreeningQuestion` entity type.
     * @returns A `JobReqScreeningQuestion` request builder.
     */
    JobReqScreeningQuestion.requestBuilder = function () {
        return new JobReqScreeningQuestionRequestBuilder_1.JobReqScreeningQuestionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobReqScreeningQuestion`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobReqScreeningQuestion`.
     */
    JobReqScreeningQuestion.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobReqScreeningQuestion);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobReqScreeningQuestion.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobReqScreeningQuestion.
     */
    JobReqScreeningQuestion._entityName = 'JobReqScreeningQuestion';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobReqScreeningQuestion.
     */
    JobReqScreeningQuestion._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobReqScreeningQuestion._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobReqScreeningQuestion;
}(core_1.Entity));
exports.JobReqScreeningQuestion = JobReqScreeningQuestion;
var JobReqScreeningQuestionChoice_1 = require("./JobReqScreeningQuestionChoice");
var JobRequisition_1 = require("./JobRequisition");
(function (JobReqScreeningQuestion) {
    /**
     * Static representation of the [[disqualifier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqScreeningQuestion.DISQUALIFIER = new core_1.BooleanField('disqualifier', JobReqScreeningQuestion, 'Edm.Boolean');
    /**
     * Static representation of the [[expectedAnswerValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqScreeningQuestion.EXPECTED_ANSWER_VALUE = new core_1.NumberField('expectedAnswerValue', JobReqScreeningQuestion, 'Edm.Double');
    /**
     * Static representation of the [[expectedDir]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqScreeningQuestion.EXPECTED_DIR = new core_1.StringField('expectedDir', JobReqScreeningQuestion, 'Edm.String');
    /**
     * Static representation of the [[jobReqContent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqScreeningQuestion.JOB_REQ_CONTENT = new core_1.StringField('jobReqContent', JobReqScreeningQuestion, 'Edm.String');
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqScreeningQuestion.JOB_REQ_ID = new core_1.BigNumberField('jobReqId', JobReqScreeningQuestion, 'Edm.Int64');
    /**
     * Static representation of the [[locale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqScreeningQuestion.LOCALE = new core_1.StringField('locale', JobReqScreeningQuestion, 'Edm.String');
    /**
     * Static representation of the [[maxLength]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqScreeningQuestion.MAX_LENGTH = new core_1.BigNumberField('maxLength', JobReqScreeningQuestion, 'Edm.Int64');
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqScreeningQuestion.ORDER = new core_1.BigNumberField('order', JobReqScreeningQuestion, 'Edm.Int64');
    /**
     * Static representation of the [[questionDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqScreeningQuestion.QUESTION_DESCRIPTION = new core_1.StringField('questionDescription', JobReqScreeningQuestion, 'Edm.String');
    /**
     * Static representation of the [[questionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqScreeningQuestion.QUESTION_ID = new core_1.BigNumberField('questionId', JobReqScreeningQuestion, 'Edm.Int64');
    /**
     * Static representation of the [[questionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqScreeningQuestion.QUESTION_NAME = new core_1.StringField('questionName', JobReqScreeningQuestion, 'Edm.String');
    /**
     * Static representation of the [[questionParentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqScreeningQuestion.QUESTION_PARENT_ID = new core_1.BigNumberField('questionParentId', JobReqScreeningQuestion, 'Edm.Int64');
    /**
     * Static representation of the [[questionParentResponse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqScreeningQuestion.QUESTION_PARENT_RESPONSE = new core_1.StringField('questionParentResponse', JobReqScreeningQuestion, 'Edm.String');
    /**
     * Static representation of the [[questionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqScreeningQuestion.QUESTION_TYPE = new core_1.StringField('questionType', JobReqScreeningQuestion, 'Edm.String');
    /**
     * Static representation of the [[questionWeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqScreeningQuestion.QUESTION_WEIGHT = new core_1.NumberField('questionWeight', JobReqScreeningQuestion, 'Edm.Double');
    /**
     * Static representation of the [[ratingScale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqScreeningQuestion.RATING_SCALE = new core_1.StringField('ratingScale', JobReqScreeningQuestion, 'Edm.String');
    /**
     * Static representation of the [[required]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqScreeningQuestion.REQUIRED = new core_1.BooleanField('required', JobReqScreeningQuestion, 'Edm.Boolean');
    /**
     * Static representation of the [[score]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqScreeningQuestion.SCORE = new core_1.BooleanField('score', JobReqScreeningQuestion, 'Edm.Boolean');
    /**
     * Static representation of the one-to-many navigation property [[choices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqScreeningQuestion.CHOICES = new core_1.Link('choices', JobReqScreeningQuestion, JobReqScreeningQuestionChoice_1.JobReqScreeningQuestionChoice);
    /**
     * Static representation of the one-to-one navigation property [[jobRequisition]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqScreeningQuestion.JOB_REQUISITION = new core_1.OneToOneLink('jobRequisition', JobReqScreeningQuestion, JobRequisition_1.JobRequisition);
    /**
     * All fields of the JobReqScreeningQuestion entity.
     */
    JobReqScreeningQuestion._allFields = [
        JobReqScreeningQuestion.DISQUALIFIER,
        JobReqScreeningQuestion.EXPECTED_ANSWER_VALUE,
        JobReqScreeningQuestion.EXPECTED_DIR,
        JobReqScreeningQuestion.JOB_REQ_CONTENT,
        JobReqScreeningQuestion.JOB_REQ_ID,
        JobReqScreeningQuestion.LOCALE,
        JobReqScreeningQuestion.MAX_LENGTH,
        JobReqScreeningQuestion.ORDER,
        JobReqScreeningQuestion.QUESTION_DESCRIPTION,
        JobReqScreeningQuestion.QUESTION_ID,
        JobReqScreeningQuestion.QUESTION_NAME,
        JobReqScreeningQuestion.QUESTION_PARENT_ID,
        JobReqScreeningQuestion.QUESTION_PARENT_RESPONSE,
        JobReqScreeningQuestion.QUESTION_TYPE,
        JobReqScreeningQuestion.QUESTION_WEIGHT,
        JobReqScreeningQuestion.RATING_SCALE,
        JobReqScreeningQuestion.REQUIRED,
        JobReqScreeningQuestion.SCORE,
        JobReqScreeningQuestion.CHOICES,
        JobReqScreeningQuestion.JOB_REQUISITION
    ];
    /**
     * All fields selector.
     */
    JobReqScreeningQuestion.ALL_FIELDS = new core_1.AllFields('*', JobReqScreeningQuestion);
    /**
     * All key fields of the JobReqScreeningQuestion entity.
     */
    JobReqScreeningQuestion._keyFields = [JobReqScreeningQuestion.JOB_REQ_ID, JobReqScreeningQuestion.LOCALE, JobReqScreeningQuestion.ORDER];
    /**
     * Mapping of all key field names to the respective static field property JobReqScreeningQuestion.
     */
    JobReqScreeningQuestion._keys = JobReqScreeningQuestion._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobReqScreeningQuestion = exports.JobReqScreeningQuestion || (exports.JobReqScreeningQuestion = {}));
exports.JobReqScreeningQuestion = JobReqScreeningQuestion;
//# sourceMappingURL=JobReqScreeningQuestion.js.map