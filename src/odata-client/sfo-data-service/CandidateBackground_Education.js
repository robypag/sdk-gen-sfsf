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
var CandidateBackground_EducationRequestBuilder_1 = require("./CandidateBackground_EducationRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CandidateBackground_Education" of service "SFOData".
 */
var CandidateBackground_Education = /** @class */ (function (_super) {
    __extends(CandidateBackground_Education, _super);
    function CandidateBackground_Education() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CandidateBackground_Education`.
     * @returns A builder that constructs instances of entity type `CandidateBackground_Education`.
     */
    CandidateBackground_Education.builder = function () {
        return core_1.Entity.entityBuilder(CandidateBackground_Education);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CandidateBackground_Education` entity type.
     * @returns A `CandidateBackground_Education` request builder.
     */
    CandidateBackground_Education.requestBuilder = function () {
        return new CandidateBackground_EducationRequestBuilder_1.CandidateBackground_EducationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateBackground_Education`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CandidateBackground_Education`.
     */
    CandidateBackground_Education.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, CandidateBackground_Education);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CandidateBackground_Education.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CandidateBackground_Education.
     */
    CandidateBackground_Education._entityName = 'CandidateBackground_Education';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CandidateBackground_Education.
     */
    CandidateBackground_Education._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CandidateBackground_Education._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CandidateBackground_Education;
}(core_1.Entity));
exports.CandidateBackground_Education = CandidateBackground_Education;
var Candidate_1 = require("./Candidate");
var PicklistOption_1 = require("./PicklistOption");
(function (CandidateBackground_Education) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Education.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', CandidateBackground_Education, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Education.BG_ORDER_POS = new core_1.BigNumberField('bgOrderPos', CandidateBackground_Education, 'Edm.Int64');
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Education.CANDIDATE_ID = new core_1.BigNumberField('candidateId', CandidateBackground_Education, 'Edm.Int64');
    /**
     * Static representation of the [[degree]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Education.DEGREE = new core_1.StringField('degree', CandidateBackground_Education, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Education.END_DATE = new core_1.DateField('endDate', CandidateBackground_Education, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Education.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', CandidateBackground_Education, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[major]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Education.MAJOR = new core_1.StringField('major', CandidateBackground_Education, 'Edm.String');
    /**
     * Static representation of the [[school]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Education.SCHOOL = new core_1.StringField('school', CandidateBackground_Education, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Education.START_DATE = new core_1.DateField('startDate', CandidateBackground_Education, 'Edm.DateTime');
    /**
     * Static representation of the one-to-one navigation property [[candidate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Education.CANDIDATE = new core_1.OneToOneLink('candidate', CandidateBackground_Education, Candidate_1.Candidate);
    /**
     * Static representation of the one-to-one navigation property [[degreeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Education.DEGREE_NAV = new core_1.OneToOneLink('degreeNav', CandidateBackground_Education, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[majorNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Education.MAJOR_NAV = new core_1.OneToOneLink('majorNav', CandidateBackground_Education, PicklistOption_1.PicklistOption);
    /**
     * All fields of the CandidateBackground_Education entity.
     */
    CandidateBackground_Education._allFields = [
        CandidateBackground_Education.BACKGROUND_ELEMENT_ID,
        CandidateBackground_Education.BG_ORDER_POS,
        CandidateBackground_Education.CANDIDATE_ID,
        CandidateBackground_Education.DEGREE,
        CandidateBackground_Education.END_DATE,
        CandidateBackground_Education.LAST_MODIFIED_DATE_TIME,
        CandidateBackground_Education.MAJOR,
        CandidateBackground_Education.SCHOOL,
        CandidateBackground_Education.START_DATE,
        CandidateBackground_Education.CANDIDATE,
        CandidateBackground_Education.DEGREE_NAV,
        CandidateBackground_Education.MAJOR_NAV
    ];
    /**
     * All fields selector.
     */
    CandidateBackground_Education.ALL_FIELDS = new core_1.AllFields('*', CandidateBackground_Education);
    /**
     * All key fields of the CandidateBackground_Education entity.
     */
    CandidateBackground_Education._keyFields = [CandidateBackground_Education.BACKGROUND_ELEMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property CandidateBackground_Education.
     */
    CandidateBackground_Education._keys = CandidateBackground_Education._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CandidateBackground_Education = exports.CandidateBackground_Education || (exports.CandidateBackground_Education = {}));
exports.CandidateBackground_Education = CandidateBackground_Education;
//# sourceMappingURL=CandidateBackground_Education.js.map