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
var InterviewOverallAssessmentRequestBuilder_1 = require("./InterviewOverallAssessmentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "InterviewOverallAssessment" of service "SFOData".
 */
var InterviewOverallAssessment = /** @class */ (function (_super) {
    __extends(InterviewOverallAssessment, _super);
    function InterviewOverallAssessment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `InterviewOverallAssessment`.
     * @returns A builder that constructs instances of entity type `InterviewOverallAssessment`.
     */
    InterviewOverallAssessment.builder = function () {
        return core_1.Entity.entityBuilder(InterviewOverallAssessment);
    };
    /**
     * Returns a request builder to construct requests for operations on the `InterviewOverallAssessment` entity type.
     * @returns A `InterviewOverallAssessment` request builder.
     */
    InterviewOverallAssessment.requestBuilder = function () {
        return new InterviewOverallAssessmentRequestBuilder_1.InterviewOverallAssessmentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InterviewOverallAssessment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InterviewOverallAssessment`.
     */
    InterviewOverallAssessment.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, InterviewOverallAssessment);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    InterviewOverallAssessment.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for InterviewOverallAssessment.
     */
    InterviewOverallAssessment._entityName = 'InterviewOverallAssessment';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for InterviewOverallAssessment.
     */
    InterviewOverallAssessment._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    InterviewOverallAssessment._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return InterviewOverallAssessment;
}(core_1.Entity));
exports.InterviewOverallAssessment = InterviewOverallAssessment;
var InterviewIndividualAssessment_1 = require("./InterviewIndividualAssessment");
var Attachment_1 = require("./Attachment");
(function (InterviewOverallAssessment) {
    /**
     * Static representation of the [[averageRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewOverallAssessment.AVERAGE_RATING = new core_1.NumberField('averageRating', InterviewOverallAssessment, 'Edm.Double');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewOverallAssessment.COMMENTS = new core_1.StringField('comments', InterviewOverallAssessment, 'Edm.String');
    /**
     * Static representation of the [[interviewOverallAssessmentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewOverallAssessment.INTERVIEW_OVERALL_ASSESSMENT_ID = new core_1.BigNumberField('interviewOverallAssessmentId', InterviewOverallAssessment, 'Edm.Int64');
    /**
     * Static representation of the [[interviewRefId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewOverallAssessment.INTERVIEW_REF_ID = new core_1.BigNumberField('interviewRefId', InterviewOverallAssessment, 'Edm.Int64');
    /**
     * Static representation of the [[overallRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewOverallAssessment.OVERALL_RATING = new core_1.StringField('overallRating', InterviewOverallAssessment, 'Edm.String');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewOverallAssessment.TYPE = new core_1.StringField('type', InterviewOverallAssessment, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[interviewIndividualAssessment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewOverallAssessment.INTERVIEW_INDIVIDUAL_ASSESSMENT = new core_1.Link('interviewIndividualAssessment', InterviewOverallAssessment, InterviewIndividualAssessment_1.InterviewIndividualAssessment);
    /**
     * Static representation of the one-to-one navigation property [[interviewNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewOverallAssessment.INTERVIEW_NOTES = new core_1.OneToOneLink('interviewNotes', InterviewOverallAssessment, Attachment_1.Attachment);
    /**
     * All fields of the InterviewOverallAssessment entity.
     */
    InterviewOverallAssessment._allFields = [
        InterviewOverallAssessment.AVERAGE_RATING,
        InterviewOverallAssessment.COMMENTS,
        InterviewOverallAssessment.INTERVIEW_OVERALL_ASSESSMENT_ID,
        InterviewOverallAssessment.INTERVIEW_REF_ID,
        InterviewOverallAssessment.OVERALL_RATING,
        InterviewOverallAssessment.TYPE,
        InterviewOverallAssessment.INTERVIEW_INDIVIDUAL_ASSESSMENT,
        InterviewOverallAssessment.INTERVIEW_NOTES
    ];
    /**
     * All fields selector.
     */
    InterviewOverallAssessment.ALL_FIELDS = new core_1.AllFields('*', InterviewOverallAssessment);
    /**
     * All key fields of the InterviewOverallAssessment entity.
     */
    InterviewOverallAssessment._keyFields = [InterviewOverallAssessment.INTERVIEW_OVERALL_ASSESSMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property InterviewOverallAssessment.
     */
    InterviewOverallAssessment._keys = InterviewOverallAssessment._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(InterviewOverallAssessment = exports.InterviewOverallAssessment || (exports.InterviewOverallAssessment = {}));
exports.InterviewOverallAssessment = InterviewOverallAssessment;
//# sourceMappingURL=InterviewOverallAssessment.js.map