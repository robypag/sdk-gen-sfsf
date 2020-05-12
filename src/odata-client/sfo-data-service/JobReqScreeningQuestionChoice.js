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
var JobReqScreeningQuestionChoiceRequestBuilder_1 = require("./JobReqScreeningQuestionChoiceRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobReqScreeningQuestionChoice" of service "SFOData".
 */
var JobReqScreeningQuestionChoice = /** @class */ (function (_super) {
    __extends(JobReqScreeningQuestionChoice, _super);
    function JobReqScreeningQuestionChoice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobReqScreeningQuestionChoice`.
     * @returns A builder that constructs instances of entity type `JobReqScreeningQuestionChoice`.
     */
    JobReqScreeningQuestionChoice.builder = function () {
        return core_1.Entity.entityBuilder(JobReqScreeningQuestionChoice);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobReqScreeningQuestionChoice` entity type.
     * @returns A `JobReqScreeningQuestionChoice` request builder.
     */
    JobReqScreeningQuestionChoice.requestBuilder = function () {
        return new JobReqScreeningQuestionChoiceRequestBuilder_1.JobReqScreeningQuestionChoiceRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobReqScreeningQuestionChoice`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobReqScreeningQuestionChoice`.
     */
    JobReqScreeningQuestionChoice.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobReqScreeningQuestionChoice);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobReqScreeningQuestionChoice.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobReqScreeningQuestionChoice.
     */
    JobReqScreeningQuestionChoice._entityName = 'JobReqScreeningQuestionChoice';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobReqScreeningQuestionChoice.
     */
    JobReqScreeningQuestionChoice._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobReqScreeningQuestionChoice._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobReqScreeningQuestionChoice;
}(core_1.Entity));
exports.JobReqScreeningQuestionChoice = JobReqScreeningQuestionChoice;
(function (JobReqScreeningQuestionChoice) {
    /**
     * Static representation of the [[locale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqScreeningQuestionChoice.LOCALE = new core_1.StringField('locale', JobReqScreeningQuestionChoice, 'Edm.String');
    /**
     * Static representation of the [[optionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqScreeningQuestionChoice.OPTION_ID = new core_1.BigNumberField('optionId', JobReqScreeningQuestionChoice, 'Edm.Int64');
    /**
     * Static representation of the [[optionLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqScreeningQuestionChoice.OPTION_LABEL = new core_1.StringField('optionLabel', JobReqScreeningQuestionChoice, 'Edm.String');
    /**
     * Static representation of the [[optionValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobReqScreeningQuestionChoice.OPTION_VALUE = new core_1.NumberField('optionValue', JobReqScreeningQuestionChoice, 'Edm.Double');
    /**
     * All fields of the JobReqScreeningQuestionChoice entity.
     */
    JobReqScreeningQuestionChoice._allFields = [
        JobReqScreeningQuestionChoice.LOCALE,
        JobReqScreeningQuestionChoice.OPTION_ID,
        JobReqScreeningQuestionChoice.OPTION_LABEL,
        JobReqScreeningQuestionChoice.OPTION_VALUE
    ];
    /**
     * All fields selector.
     */
    JobReqScreeningQuestionChoice.ALL_FIELDS = new core_1.AllFields('*', JobReqScreeningQuestionChoice);
    /**
     * All key fields of the JobReqScreeningQuestionChoice entity.
     */
    JobReqScreeningQuestionChoice._keyFields = [JobReqScreeningQuestionChoice.LOCALE, JobReqScreeningQuestionChoice.OPTION_ID, JobReqScreeningQuestionChoice.OPTION_VALUE];
    /**
     * Mapping of all key field names to the respective static field property JobReqScreeningQuestionChoice.
     */
    JobReqScreeningQuestionChoice._keys = JobReqScreeningQuestionChoice._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobReqScreeningQuestionChoice = exports.JobReqScreeningQuestionChoice || (exports.JobReqScreeningQuestionChoice = {}));
exports.JobReqScreeningQuestionChoice = JobReqScreeningQuestionChoice;
//# sourceMappingURL=JobReqScreeningQuestionChoice.js.map