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
var EmpGlobalAssignmentRequestBuilder_1 = require("./EmpGlobalAssignmentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmpGlobalAssignment" of service "SFOData".
 */
var EmpGlobalAssignment = /** @class */ (function (_super) {
    __extends(EmpGlobalAssignment, _super);
    function EmpGlobalAssignment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmpGlobalAssignment`.
     * @returns A builder that constructs instances of entity type `EmpGlobalAssignment`.
     */
    EmpGlobalAssignment.builder = function () {
        return core_1.Entity.entityBuilder(EmpGlobalAssignment);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmpGlobalAssignment` entity type.
     * @returns A `EmpGlobalAssignment` request builder.
     */
    EmpGlobalAssignment.requestBuilder = function () {
        return new EmpGlobalAssignmentRequestBuilder_1.EmpGlobalAssignmentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpGlobalAssignment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpGlobalAssignment`.
     */
    EmpGlobalAssignment.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmpGlobalAssignment);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmpGlobalAssignment.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmpGlobalAssignment.
     */
    EmpGlobalAssignment._entityName = 'EmpGlobalAssignment';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpGlobalAssignment.
     */
    EmpGlobalAssignment._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmpGlobalAssignment._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmpGlobalAssignment;
}(core_1.Entity));
exports.EmpGlobalAssignment = EmpGlobalAssignment;
var PicklistOption_1 = require("./PicklistOption");
var EmpEmployment_1 = require("./EmpEmployment");
var User_1 = require("./User");
(function (EmpGlobalAssignment) {
    /**
     * Static representation of the [[assignmentClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpGlobalAssignment.ASSIGNMENT_CLASS = new core_1.StringField('assignmentClass', EmpGlobalAssignment, 'Edm.String');
    /**
     * Static representation of the [[assignmentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpGlobalAssignment.ASSIGNMENT_TYPE = new core_1.StringField('assignmentType', EmpGlobalAssignment, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpGlobalAssignment.CREATED_BY = new core_1.StringField('createdBy', EmpGlobalAssignment, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpGlobalAssignment.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmpGlobalAssignment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpGlobalAssignment.CREATED_ON = new core_1.DateField('createdOn', EmpGlobalAssignment, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpGlobalAssignment.END_DATE = new core_1.DateField('endDate', EmpGlobalAssignment, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpGlobalAssignment.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmpGlobalAssignment, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpGlobalAssignment.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmpGlobalAssignment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpGlobalAssignment.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', EmpGlobalAssignment, 'Edm.DateTime');
    /**
     * Static representation of the [[payrollEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpGlobalAssignment.PAYROLL_END_DATE = new core_1.DateField('payrollEndDate', EmpGlobalAssignment, 'Edm.DateTime');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpGlobalAssignment.PERSON_ID_EXTERNAL = new core_1.StringField('personIdExternal', EmpGlobalAssignment, 'Edm.String');
    /**
     * Static representation of the [[plannedEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpGlobalAssignment.PLANNED_END_DATE = new core_1.DateField('plannedEndDate', EmpGlobalAssignment, 'Edm.DateTime');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpGlobalAssignment.START_DATE = new core_1.DateField('startDate', EmpGlobalAssignment, 'Edm.DateTime');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpGlobalAssignment.USER_ID = new core_1.StringField('userId', EmpGlobalAssignment, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[assignmentTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpGlobalAssignment.ASSIGNMENT_TYPE_NAV = new core_1.OneToOneLink('assignmentTypeNav', EmpGlobalAssignment, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[employmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpGlobalAssignment.EMPLOYMENT_NAV = new core_1.OneToOneLink('employmentNav', EmpGlobalAssignment, EmpEmployment_1.EmpEmployment);
    /**
     * Static representation of the one-to-one navigation property [[userNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpGlobalAssignment.USER_NAV = new core_1.OneToOneLink('userNav', EmpGlobalAssignment, User_1.User);
    /**
     * All fields of the EmpGlobalAssignment entity.
     */
    EmpGlobalAssignment._allFields = [
        EmpGlobalAssignment.ASSIGNMENT_CLASS,
        EmpGlobalAssignment.ASSIGNMENT_TYPE,
        EmpGlobalAssignment.CREATED_BY,
        EmpGlobalAssignment.CREATED_DATE_TIME,
        EmpGlobalAssignment.CREATED_ON,
        EmpGlobalAssignment.END_DATE,
        EmpGlobalAssignment.LAST_MODIFIED_BY,
        EmpGlobalAssignment.LAST_MODIFIED_DATE_TIME,
        EmpGlobalAssignment.LAST_MODIFIED_ON,
        EmpGlobalAssignment.PAYROLL_END_DATE,
        EmpGlobalAssignment.PERSON_ID_EXTERNAL,
        EmpGlobalAssignment.PLANNED_END_DATE,
        EmpGlobalAssignment.START_DATE,
        EmpGlobalAssignment.USER_ID,
        EmpGlobalAssignment.ASSIGNMENT_TYPE_NAV,
        EmpGlobalAssignment.EMPLOYMENT_NAV,
        EmpGlobalAssignment.USER_NAV
    ];
    /**
     * All fields selector.
     */
    EmpGlobalAssignment.ALL_FIELDS = new core_1.AllFields('*', EmpGlobalAssignment);
    /**
     * All key fields of the EmpGlobalAssignment entity.
     */
    EmpGlobalAssignment._keyFields = [EmpGlobalAssignment.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property EmpGlobalAssignment.
     */
    EmpGlobalAssignment._keys = EmpGlobalAssignment._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmpGlobalAssignment = exports.EmpGlobalAssignment || (exports.EmpGlobalAssignment = {}));
exports.EmpGlobalAssignment = EmpGlobalAssignment;
//# sourceMappingURL=EmpGlobalAssignment.js.map