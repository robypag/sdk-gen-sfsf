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
var EmpEmploymentRequestBuilder_1 = require("./EmpEmploymentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmpEmployment" of service "SFOData".
 */
var EmpEmployment = /** @class */ (function (_super) {
    __extends(EmpEmployment, _super);
    function EmpEmployment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmpEmployment`.
     * @returns A builder that constructs instances of entity type `EmpEmployment`.
     */
    EmpEmployment.builder = function () {
        return core_1.Entity.entityBuilder(EmpEmployment);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmpEmployment` entity type.
     * @returns A `EmpEmployment` request builder.
     */
    EmpEmployment.requestBuilder = function () {
        return new EmpEmploymentRequestBuilder_1.EmpEmploymentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpEmployment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpEmployment`.
     */
    EmpEmployment.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmpEmployment);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmpEmployment.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmpEmployment.
     */
    EmpEmployment._entityName = 'EmpEmployment';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpEmployment.
     */
    EmpEmployment._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmpEmployment._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmpEmployment;
}(core_1.Entity));
exports.EmpEmployment = EmpEmployment;
var EmpCompensation_1 = require("./EmpCompensation");
var EmpGlobalAssignment_1 = require("./EmpGlobalAssignment");
var EmpJobRelationships_1 = require("./EmpJobRelationships");
var EmpPayCompNonRecurring_1 = require("./EmpPayCompNonRecurring");
var EmpWorkPermit_1 = require("./EmpWorkPermit");
var EmpJob_1 = require("./EmpJob");
var PaymentInformationV3_1 = require("./PaymentInformationV3");
var PerPerson_1 = require("./PerPerson");
var User_1 = require("./User");
var WfRequest_1 = require("./WfRequest");
(function (EmpEmployment) {
    /**
     * Static representation of the [[assignmentClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.ASSIGNMENT_CLASS = new core_1.StringField('assignmentClass', EmpEmployment, 'Edm.String');
    /**
     * Static representation of the [[assignmentIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.ASSIGNMENT_ID_EXTERNAL = new core_1.StringField('assignmentIdExternal', EmpEmployment, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.CREATED_BY = new core_1.StringField('createdBy', EmpEmployment, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmpEmployment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.CREATED_ON = new core_1.DateField('createdOn', EmpEmployment, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.END_DATE = new core_1.DateField('endDate', EmpEmployment, 'Edm.DateTime');
    /**
     * Static representation of the [[hiringNotCompleted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.HIRING_NOT_COMPLETED = new core_1.BooleanField('hiringNotCompleted', EmpEmployment, 'Edm.Boolean');
    /**
     * Static representation of the [[includeAllRecords]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.INCLUDE_ALL_RECORDS = new core_1.BooleanField('includeAllRecords', EmpEmployment, 'Edm.Boolean');
    /**
     * Static representation of the [[isEcRecord]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.IS_EC_RECORD = new core_1.BooleanField('isECRecord', EmpEmployment, 'Edm.Boolean');
    /**
     * Static representation of the [[jobNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.JOB_NUMBER = new core_1.BigNumberField('jobNumber', EmpEmployment, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmpEmployment, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmpEmployment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', EmpEmployment, 'Edm.DateTime');
    /**
     * Static representation of the [[originalStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.ORIGINAL_START_DATE = new core_1.DateField('originalStartDate', EmpEmployment, 'Edm.DateTime');
    /**
     * Static representation of the [[payrollEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.PAYROLL_END_DATE = new core_1.DateField('payrollEndDate', EmpEmployment, 'Edm.DateTime');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.PERSON_ID_EXTERNAL = new core_1.StringField('personIdExternal', EmpEmployment, 'Edm.String');
    /**
     * Static representation of the [[seniorityDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.SENIORITY_DATE = new core_1.DateField('seniorityDate', EmpEmployment, 'Edm.DateTime');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.START_DATE = new core_1.DateField('startDate', EmpEmployment, 'Edm.DateTime');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.USER_ID = new core_1.StringField('userId', EmpEmployment, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[compInfoNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.COMP_INFO_NAV = new core_1.Link('compInfoNav', EmpEmployment, EmpCompensation_1.EmpCompensation);
    /**
     * Static representation of the one-to-one navigation property [[empGlobalAssignmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.EMP_GLOBAL_ASSIGNMENT_NAV = new core_1.OneToOneLink('empGlobalAssignmentNav', EmpEmployment, EmpGlobalAssignment_1.EmpGlobalAssignment);
    /**
     * Static representation of the one-to-many navigation property [[empJobRelationshipNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.EMP_JOB_RELATIONSHIP_NAV = new core_1.Link('empJobRelationshipNav', EmpEmployment, EmpJobRelationships_1.EmpJobRelationships);
    /**
     * Static representation of the one-to-many navigation property [[empPayCompNonRecurringNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.EMP_PAY_COMP_NON_RECURRING_NAV = new core_1.Link('empPayCompNonRecurringNav', EmpEmployment, EmpPayCompNonRecurring_1.EmpPayCompNonRecurring);
    /**
     * Static representation of the one-to-many navigation property [[empWorkPermitNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.EMP_WORK_PERMIT_NAV = new core_1.Link('empWorkPermitNav', EmpEmployment, EmpWorkPermit_1.EmpWorkPermit);
    /**
     * Static representation of the one-to-many navigation property [[jobInfoNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.JOB_INFO_NAV = new core_1.Link('jobInfoNav', EmpEmployment, EmpJob_1.EmpJob);
    /**
     * Static representation of the one-to-many navigation property [[paymentInformationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.PAYMENT_INFORMATION_NAV = new core_1.Link('paymentInformationNav', EmpEmployment, PaymentInformationV3_1.PaymentInformationV3);
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.PERSON_NAV = new core_1.OneToOneLink('personNav', EmpEmployment, PerPerson_1.PerPerson);
    /**
     * Static representation of the one-to-one navigation property [[userNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.USER_NAV = new core_1.OneToOneLink('userNav', EmpEmployment, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.WF_REQUEST_NAV = new core_1.OneToOneLink('wfRequestNav', EmpEmployment, WfRequest_1.WfRequest);
    /**
     * All fields of the EmpEmployment entity.
     */
    EmpEmployment._allFields = [
        EmpEmployment.ASSIGNMENT_CLASS,
        EmpEmployment.ASSIGNMENT_ID_EXTERNAL,
        EmpEmployment.CREATED_BY,
        EmpEmployment.CREATED_DATE_TIME,
        EmpEmployment.CREATED_ON,
        EmpEmployment.END_DATE,
        EmpEmployment.HIRING_NOT_COMPLETED,
        EmpEmployment.INCLUDE_ALL_RECORDS,
        EmpEmployment.IS_EC_RECORD,
        EmpEmployment.JOB_NUMBER,
        EmpEmployment.LAST_MODIFIED_BY,
        EmpEmployment.LAST_MODIFIED_DATE_TIME,
        EmpEmployment.LAST_MODIFIED_ON,
        EmpEmployment.ORIGINAL_START_DATE,
        EmpEmployment.PAYROLL_END_DATE,
        EmpEmployment.PERSON_ID_EXTERNAL,
        EmpEmployment.SENIORITY_DATE,
        EmpEmployment.START_DATE,
        EmpEmployment.USER_ID,
        EmpEmployment.COMP_INFO_NAV,
        EmpEmployment.EMP_GLOBAL_ASSIGNMENT_NAV,
        EmpEmployment.EMP_JOB_RELATIONSHIP_NAV,
        EmpEmployment.EMP_PAY_COMP_NON_RECURRING_NAV,
        EmpEmployment.EMP_WORK_PERMIT_NAV,
        EmpEmployment.JOB_INFO_NAV,
        EmpEmployment.PAYMENT_INFORMATION_NAV,
        EmpEmployment.PERSON_NAV,
        EmpEmployment.USER_NAV,
        EmpEmployment.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    EmpEmployment.ALL_FIELDS = new core_1.AllFields('*', EmpEmployment);
    /**
     * All key fields of the EmpEmployment entity.
     */
    EmpEmployment._keyFields = [EmpEmployment.PERSON_ID_EXTERNAL, EmpEmployment.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property EmpEmployment.
     */
    EmpEmployment._keys = EmpEmployment._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmpEmployment = exports.EmpEmployment || (exports.EmpEmployment = {}));
exports.EmpEmployment = EmpEmployment;
//# sourceMappingURL=EmpEmployment.js.map