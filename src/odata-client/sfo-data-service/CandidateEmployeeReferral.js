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
var CandidateEmployeeReferralRequestBuilder_1 = require("./CandidateEmployeeReferralRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CandidateEmployeeReferral" of service "SFOData".
 */
var CandidateEmployeeReferral = /** @class */ (function (_super) {
    __extends(CandidateEmployeeReferral, _super);
    function CandidateEmployeeReferral() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CandidateEmployeeReferral`.
     * @returns A builder that constructs instances of entity type `CandidateEmployeeReferral`.
     */
    CandidateEmployeeReferral.builder = function () {
        return core_1.Entity.entityBuilder(CandidateEmployeeReferral);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CandidateEmployeeReferral` entity type.
     * @returns A `CandidateEmployeeReferral` request builder.
     */
    CandidateEmployeeReferral.requestBuilder = function () {
        return new CandidateEmployeeReferralRequestBuilder_1.CandidateEmployeeReferralRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateEmployeeReferral`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CandidateEmployeeReferral`.
     */
    CandidateEmployeeReferral.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, CandidateEmployeeReferral);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CandidateEmployeeReferral.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CandidateEmployeeReferral.
     */
    CandidateEmployeeReferral._entityName = 'CandidateEmployeeReferral';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CandidateEmployeeReferral.
     */
    CandidateEmployeeReferral._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CandidateEmployeeReferral._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CandidateEmployeeReferral;
}(core_1.Entity));
exports.CandidateEmployeeReferral = CandidateEmployeeReferral;
var CandidateLight_1 = require("./CandidateLight");
var JobRequisition_1 = require("./JobRequisition");
var Attachment_1 = require("./Attachment");
var User_1 = require("./User");
(function (CandidateEmployeeReferral) {
    /**
     * Static representation of the [[applicantStatusSetItemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateEmployeeReferral.APPLICANT_STATUS_SET_ITEM_ID = new core_1.BigNumberField('applicantStatusSetItemId', CandidateEmployeeReferral, 'Edm.Int64');
    /**
     * Static representation of the [[candidateEmployeeReferralId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateEmployeeReferral.CANDIDATE_EMPLOYEE_REFERRAL_ID = new core_1.BigNumberField('candidateEmployeeReferralId', CandidateEmployeeReferral, 'Edm.Int64');
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateEmployeeReferral.CREATED_DATE = new core_1.DateField('createdDate', CandidateEmployeeReferral, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[expirationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateEmployeeReferral.EXPIRATION_DATE = new core_1.DateField('expirationDate', CandidateEmployeeReferral, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateEmployeeReferral.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', CandidateEmployeeReferral, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[referralKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateEmployeeReferral.REFERRAL_KEY = new core_1.StringField('referralKey', CandidateEmployeeReferral, 'Edm.String');
    /**
     * Static representation of the [[referredBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateEmployeeReferral.REFERRED_BY = new core_1.StringField('referredBy', CandidateEmployeeReferral, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateEmployeeReferral.STATUS = new core_1.BigNumberField('status', CandidateEmployeeReferral, 'Edm.Int64');
    /**
     * Static representation of the one-to-one navigation property [[candidate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateEmployeeReferral.CANDIDATE = new core_1.OneToOneLink('candidate', CandidateEmployeeReferral, CandidateLight_1.CandidateLight);
    /**
     * Static representation of the one-to-one navigation property [[jobRequisition]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateEmployeeReferral.JOB_REQUISITION = new core_1.OneToOneLink('jobRequisition', CandidateEmployeeReferral, JobRequisition_1.JobRequisition);
    /**
     * Static representation of the one-to-one navigation property [[referralResume]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateEmployeeReferral.REFERRAL_RESUME = new core_1.OneToOneLink('referralResume', CandidateEmployeeReferral, Attachment_1.Attachment);
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateEmployeeReferral.USER = new core_1.OneToOneLink('user', CandidateEmployeeReferral, User_1.User);
    /**
     * All fields of the CandidateEmployeeReferral entity.
     */
    CandidateEmployeeReferral._allFields = [
        CandidateEmployeeReferral.APPLICANT_STATUS_SET_ITEM_ID,
        CandidateEmployeeReferral.CANDIDATE_EMPLOYEE_REFERRAL_ID,
        CandidateEmployeeReferral.CREATED_DATE,
        CandidateEmployeeReferral.EXPIRATION_DATE,
        CandidateEmployeeReferral.LAST_MODIFIED_DATE,
        CandidateEmployeeReferral.REFERRAL_KEY,
        CandidateEmployeeReferral.REFERRED_BY,
        CandidateEmployeeReferral.STATUS,
        CandidateEmployeeReferral.CANDIDATE,
        CandidateEmployeeReferral.JOB_REQUISITION,
        CandidateEmployeeReferral.REFERRAL_RESUME,
        CandidateEmployeeReferral.USER
    ];
    /**
     * All fields selector.
     */
    CandidateEmployeeReferral.ALL_FIELDS = new core_1.AllFields('*', CandidateEmployeeReferral);
    /**
     * All key fields of the CandidateEmployeeReferral entity.
     */
    CandidateEmployeeReferral._keyFields = [CandidateEmployeeReferral.CANDIDATE_EMPLOYEE_REFERRAL_ID];
    /**
     * Mapping of all key field names to the respective static field property CandidateEmployeeReferral.
     */
    CandidateEmployeeReferral._keys = CandidateEmployeeReferral._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CandidateEmployeeReferral = exports.CandidateEmployeeReferral || (exports.CandidateEmployeeReferral = {}));
exports.CandidateEmployeeReferral = CandidateEmployeeReferral;
//# sourceMappingURL=CandidateEmployeeReferral.js.map