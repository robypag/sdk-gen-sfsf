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
var InterviewIndividualAssessmentRequestBuilder_1 = require("./InterviewIndividualAssessmentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "InterviewIndividualAssessment" of service "SFOData".
 */
var InterviewIndividualAssessment = /** @class */ (function (_super) {
    __extends(InterviewIndividualAssessment, _super);
    function InterviewIndividualAssessment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `InterviewIndividualAssessment`.
     * @returns A builder that constructs instances of entity type `InterviewIndividualAssessment`.
     */
    InterviewIndividualAssessment.builder = function () {
        return core_1.Entity.entityBuilder(InterviewIndividualAssessment);
    };
    /**
     * Returns a request builder to construct requests for operations on the `InterviewIndividualAssessment` entity type.
     * @returns A `InterviewIndividualAssessment` request builder.
     */
    InterviewIndividualAssessment.requestBuilder = function () {
        return new InterviewIndividualAssessmentRequestBuilder_1.InterviewIndividualAssessmentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InterviewIndividualAssessment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InterviewIndividualAssessment`.
     */
    InterviewIndividualAssessment.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, InterviewIndividualAssessment);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    InterviewIndividualAssessment.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for InterviewIndividualAssessment.
     */
    InterviewIndividualAssessment._entityName = 'InterviewIndividualAssessment';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for InterviewIndividualAssessment.
     */
    InterviewIndividualAssessment._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    InterviewIndividualAssessment._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return InterviewIndividualAssessment;
}(core_1.Entity));
exports.InterviewIndividualAssessment = InterviewIndividualAssessment;
var CompetencyEntity_1 = require("./CompetencyEntity");
var RcmCompetency_1 = require("./RcmCompetency");
(function (InterviewIndividualAssessment) {
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewIndividualAssessment.COMMENTS = new core_1.StringField('comments', InterviewIndividualAssessment, 'Edm.String');
    /**
     * Static representation of the [[interviewIndividualAssessmentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewIndividualAssessment.INTERVIEW_INDIVIDUAL_ASSESSMENT_ID = new core_1.BigNumberField('interviewIndividualAssessmentId', InterviewIndividualAssessment, 'Edm.Int64');
    /**
     * Static representation of the [[interviewOverallAssessmentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewIndividualAssessment.INTERVIEW_OVERALL_ASSESSMENT_ID = new core_1.BigNumberField('interviewOverallAssessmentId', InterviewIndividualAssessment, 'Edm.Int64');
    /**
     * Static representation of the [[isDeleted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewIndividualAssessment.IS_DELETED = new core_1.StringField('isDeleted', InterviewIndividualAssessment, 'Edm.String');
    /**
     * Static representation of the [[rating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewIndividualAssessment.RATING = new core_1.StringField('rating', InterviewIndividualAssessment, 'Edm.String');
    /**
     * Static representation of the [[refId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewIndividualAssessment.REF_ID = new core_1.BigNumberField('refId', InterviewIndividualAssessment, 'Edm.Int64');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewIndividualAssessment.TYPE = new core_1.StringField('type', InterviewIndividualAssessment, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[jobProfileCompetency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewIndividualAssessment.JOB_PROFILE_COMPETENCY = new core_1.OneToOneLink('jobProfileCompetency', InterviewIndividualAssessment, CompetencyEntity_1.CompetencyEntity);
    /**
     * Static representation of the one-to-many navigation property [[rcmCompetency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewIndividualAssessment.RCM_COMPETENCY = new core_1.Link('rcmCompetency', InterviewIndividualAssessment, RcmCompetency_1.RcmCompetency);
    /**
     * All fields of the InterviewIndividualAssessment entity.
     */
    InterviewIndividualAssessment._allFields = [
        InterviewIndividualAssessment.COMMENTS,
        InterviewIndividualAssessment.INTERVIEW_INDIVIDUAL_ASSESSMENT_ID,
        InterviewIndividualAssessment.INTERVIEW_OVERALL_ASSESSMENT_ID,
        InterviewIndividualAssessment.IS_DELETED,
        InterviewIndividualAssessment.RATING,
        InterviewIndividualAssessment.REF_ID,
        InterviewIndividualAssessment.TYPE,
        InterviewIndividualAssessment.JOB_PROFILE_COMPETENCY,
        InterviewIndividualAssessment.RCM_COMPETENCY
    ];
    /**
     * All fields selector.
     */
    InterviewIndividualAssessment.ALL_FIELDS = new core_1.AllFields('*', InterviewIndividualAssessment);
    /**
     * All key fields of the InterviewIndividualAssessment entity.
     */
    InterviewIndividualAssessment._keyFields = [InterviewIndividualAssessment.INTERVIEW_INDIVIDUAL_ASSESSMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property InterviewIndividualAssessment.
     */
    InterviewIndividualAssessment._keys = InterviewIndividualAssessment._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(InterviewIndividualAssessment = exports.InterviewIndividualAssessment || (exports.InterviewIndividualAssessment = {}));
exports.InterviewIndividualAssessment = InterviewIndividualAssessment;
//# sourceMappingURL=InterviewIndividualAssessment.js.map