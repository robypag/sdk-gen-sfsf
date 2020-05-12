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
var JobApplicationSnapshot_EducationRequestBuilder_1 = require("./JobApplicationSnapshot_EducationRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobApplicationSnapshot_Education" of service "SFOData".
 */
var JobApplicationSnapshot_Education = /** @class */ (function (_super) {
    __extends(JobApplicationSnapshot_Education, _super);
    function JobApplicationSnapshot_Education() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobApplicationSnapshot_Education`.
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Education`.
     */
    JobApplicationSnapshot_Education.builder = function () {
        return core_1.Entity.entityBuilder(JobApplicationSnapshot_Education);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationSnapshot_Education` entity type.
     * @returns A `JobApplicationSnapshot_Education` request builder.
     */
    JobApplicationSnapshot_Education.requestBuilder = function () {
        return new JobApplicationSnapshot_EducationRequestBuilder_1.JobApplicationSnapshot_EducationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationSnapshot_Education`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Education`.
     */
    JobApplicationSnapshot_Education.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobApplicationSnapshot_Education);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobApplicationSnapshot_Education.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobApplicationSnapshot_Education.
     */
    JobApplicationSnapshot_Education._entityName = 'JobApplicationSnapshot_Education';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationSnapshot_Education.
     */
    JobApplicationSnapshot_Education._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobApplicationSnapshot_Education._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobApplicationSnapshot_Education;
}(core_1.Entity));
exports.JobApplicationSnapshot_Education = JobApplicationSnapshot_Education;
var JobApplication_1 = require("./JobApplication");
var PicklistOption_1 = require("./PicklistOption");
(function (JobApplicationSnapshot_Education) {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.APPLICATION_ID = new core_1.BigNumberField('applicationId', JobApplicationSnapshot_Education, 'Edm.Int64');
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', JobApplicationSnapshot_Education, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.BG_ORDER_POS = new core_1.BigNumberField('bgOrderPos', JobApplicationSnapshot_Education, 'Edm.Int64');
    /**
     * Static representation of the [[degree]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.DEGREE = new core_1.StringField('degree', JobApplicationSnapshot_Education, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.END_DATE = new core_1.DateField('endDate', JobApplicationSnapshot_Education, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', JobApplicationSnapshot_Education, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[major]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.MAJOR = new core_1.StringField('major', JobApplicationSnapshot_Education, 'Edm.String');
    /**
     * Static representation of the [[school]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.SCHOOL = new core_1.StringField('school', JobApplicationSnapshot_Education, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.START_DATE = new core_1.DateField('startDate', JobApplicationSnapshot_Education, 'Edm.DateTime');
    /**
     * Static representation of the one-to-one navigation property [[application]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.APPLICATION = new core_1.OneToOneLink('application', JobApplicationSnapshot_Education, JobApplication_1.JobApplication);
    /**
     * Static representation of the one-to-one navigation property [[degreeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.DEGREE_NAV = new core_1.OneToOneLink('degreeNav', JobApplicationSnapshot_Education, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[majorNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.MAJOR_NAV = new core_1.OneToOneLink('majorNav', JobApplicationSnapshot_Education, PicklistOption_1.PicklistOption);
    /**
     * All fields of the JobApplicationSnapshot_Education entity.
     */
    JobApplicationSnapshot_Education._allFields = [
        JobApplicationSnapshot_Education.APPLICATION_ID,
        JobApplicationSnapshot_Education.BACKGROUND_ELEMENT_ID,
        JobApplicationSnapshot_Education.BG_ORDER_POS,
        JobApplicationSnapshot_Education.DEGREE,
        JobApplicationSnapshot_Education.END_DATE,
        JobApplicationSnapshot_Education.LAST_MODIFIED_DATE_TIME,
        JobApplicationSnapshot_Education.MAJOR,
        JobApplicationSnapshot_Education.SCHOOL,
        JobApplicationSnapshot_Education.START_DATE,
        JobApplicationSnapshot_Education.APPLICATION,
        JobApplicationSnapshot_Education.DEGREE_NAV,
        JobApplicationSnapshot_Education.MAJOR_NAV
    ];
    /**
     * All fields selector.
     */
    JobApplicationSnapshot_Education.ALL_FIELDS = new core_1.AllFields('*', JobApplicationSnapshot_Education);
    /**
     * All key fields of the JobApplicationSnapshot_Education entity.
     */
    JobApplicationSnapshot_Education._keyFields = [JobApplicationSnapshot_Education.BACKGROUND_ELEMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property JobApplicationSnapshot_Education.
     */
    JobApplicationSnapshot_Education._keys = JobApplicationSnapshot_Education._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobApplicationSnapshot_Education = exports.JobApplicationSnapshot_Education || (exports.JobApplicationSnapshot_Education = {}));
exports.JobApplicationSnapshot_Education = JobApplicationSnapshot_Education;
//# sourceMappingURL=JobApplicationSnapshot_Education.js.map