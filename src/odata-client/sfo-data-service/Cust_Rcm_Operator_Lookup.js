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
var Cust_Rcm_Operator_LookupRequestBuilder_1 = require("./Cust_Rcm_Operator_LookupRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "cust_RCM_Operator_Lookup" of service "SFOData".
 */
var Cust_Rcm_Operator_Lookup = /** @class */ (function (_super) {
    __extends(Cust_Rcm_Operator_Lookup, _super);
    function Cust_Rcm_Operator_Lookup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Cust_Rcm_Operator_Lookup`.
     * @returns A builder that constructs instances of entity type `Cust_Rcm_Operator_Lookup`.
     */
    Cust_Rcm_Operator_Lookup.builder = function () {
        return core_1.Entity.entityBuilder(Cust_Rcm_Operator_Lookup);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Cust_Rcm_Operator_Lookup` entity type.
     * @returns A `Cust_Rcm_Operator_Lookup` request builder.
     */
    Cust_Rcm_Operator_Lookup.requestBuilder = function () {
        return new Cust_Rcm_Operator_LookupRequestBuilder_1.Cust_Rcm_Operator_LookupRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Cust_Rcm_Operator_Lookup`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Cust_Rcm_Operator_Lookup`.
     */
    Cust_Rcm_Operator_Lookup.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Cust_Rcm_Operator_Lookup);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Cust_Rcm_Operator_Lookup.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Cust_Rcm_Operator_Lookup.
     */
    Cust_Rcm_Operator_Lookup._entityName = 'cust_RCM_Operator_Lookup';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Cust_Rcm_Operator_Lookup.
     */
    Cust_Rcm_Operator_Lookup._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Cust_Rcm_Operator_Lookup._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Cust_Rcm_Operator_Lookup;
}(core_1.Entity));
exports.Cust_Rcm_Operator_Lookup = Cust_Rcm_Operator_Lookup;
var User_1 = require("./User");
var FoBusinessUnit_1 = require("./FoBusinessUnit");
var FoCompany_1 = require("./FoCompany");
var FoCostCenter_1 = require("./FoCostCenter");
var FoDepartment_1 = require("./FoDepartment");
var FoDivision_1 = require("./FoDivision");
var PickListValueV2_1 = require("./PickListValueV2");
var FoLocation_1 = require("./FoLocation");
var FoPayGrade_1 = require("./FoPayGrade");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (Cust_Rcm_Operator_Lookup) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CREATED_BY = new core_1.StringField('createdBy', Cust_Rcm_Operator_Lookup, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', Cust_Rcm_Operator_Lookup, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[custRecruiter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_RECRUITER = new core_1.StringField('cust_Recruiter', Cust_Rcm_Operator_Lookup, 'Edm.String');
    /**
     * Static representation of the [[custRecruitingTeamLead]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_RECRUITING_TEAM_LEAD = new core_1.StringField('cust_RecruitingTeamLead', Cust_Rcm_Operator_Lookup, 'Edm.String');
    /**
     * Static representation of the [[custRegion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_REGION = new core_1.StringField('cust_Region', Cust_Rcm_Operator_Lookup, 'Edm.String');
    /**
     * Static representation of the [[custSharedServices]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_SHARED_SERVICES = new core_1.StringField('cust_SharedServices', Cust_Rcm_Operator_Lookup, 'Edm.String');
    /**
     * Static representation of the [[custBusinessUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_BUSINESS_UNIT = new core_1.StringField('cust_businessUnit', Cust_Rcm_Operator_Lookup, 'Edm.String');
    /**
     * Static representation of the [[custCompany]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_COMPANY = new core_1.StringField('cust_company', Cust_Rcm_Operator_Lookup, 'Edm.String');
    /**
     * Static representation of the [[custCostCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_COST_CENTER = new core_1.StringField('cust_costCenter', Cust_Rcm_Operator_Lookup, 'Edm.String');
    /**
     * Static representation of the [[custCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_COUNTRY = new core_1.StringField('cust_country', Cust_Rcm_Operator_Lookup, 'Edm.String');
    /**
     * Static representation of the [[custDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_DEPARTMENT = new core_1.StringField('cust_department', Cust_Rcm_Operator_Lookup, 'Edm.String');
    /**
     * Static representation of the [[custDivision]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_DIVISION = new core_1.StringField('cust_division', Cust_Rcm_Operator_Lookup, 'Edm.String');
    /**
     * Static representation of the [[custEmployeeClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_EMPLOYEE_CLASS = new core_1.StringField('cust_employeeClass', Cust_Rcm_Operator_Lookup, 'Edm.String');
    /**
     * Static representation of the [[custEmploymentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_EMPLOYMENT_TYPE = new core_1.StringField('cust_employmentType', Cust_Rcm_Operator_Lookup, 'Edm.String');
    /**
     * Static representation of the [[custJobLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_JOB_LEVEL = new core_1.StringField('cust_jobLevel', Cust_Rcm_Operator_Lookup, 'Edm.String');
    /**
     * Static representation of the [[custLocation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_LOCATION = new core_1.StringField('cust_location', Cust_Rcm_Operator_Lookup, 'Edm.String');
    /**
     * Static representation of the [[custPayGrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_PAY_GRADE = new core_1.StringField('cust_payGrade', Cust_Rcm_Operator_Lookup, 'Edm.String');
    /**
     * Static representation of the [[custRegularTemporary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_REGULAR_TEMPORARY = new core_1.StringField('cust_regularTemporary', Cust_Rcm_Operator_Lookup, 'Edm.String');
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.EFFECTIVE_START_DATE = new core_1.DateField('effectiveStartDate', Cust_Rcm_Operator_Lookup, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.EXTERNAL_CODE = new core_1.StringField('externalCode', Cust_Rcm_Operator_Lookup, 'Edm.String');
    /**
     * Static representation of the [[externalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.EXTERNAL_NAME = new core_1.StringField('externalName', Cust_Rcm_Operator_Lookup, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', Cust_Rcm_Operator_Lookup, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', Cust_Rcm_Operator_Lookup, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.MDF_SYSTEM_EFFECTIVE_END_DATE = new core_1.DateField('mdfSystemEffectiveEndDate', Cust_Rcm_Operator_Lookup, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', Cust_Rcm_Operator_Lookup, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', Cust_Rcm_Operator_Lookup, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[custRecruiterNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_RECRUITER_NAV = new core_1.OneToOneLink('cust_RecruiterNav', Cust_Rcm_Operator_Lookup, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[custRecruitingTeamLeadNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_RECRUITING_TEAM_LEAD_NAV = new core_1.OneToOneLink('cust_RecruitingTeamLeadNav', Cust_Rcm_Operator_Lookup, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[custSharedServicesNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_SHARED_SERVICES_NAV = new core_1.OneToOneLink('cust_SharedServicesNav', Cust_Rcm_Operator_Lookup, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[custBusinessUnitNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_BUSINESS_UNIT_NAV = new core_1.OneToOneLink('cust_businessUnitNav', Cust_Rcm_Operator_Lookup, FoBusinessUnit_1.FoBusinessUnit);
    /**
     * Static representation of the one-to-one navigation property [[custCompanyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_COMPANY_NAV = new core_1.OneToOneLink('cust_companyNav', Cust_Rcm_Operator_Lookup, FoCompany_1.FoCompany);
    /**
     * Static representation of the one-to-one navigation property [[custCostCenterNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_COST_CENTER_NAV = new core_1.OneToOneLink('cust_costCenterNav', Cust_Rcm_Operator_Lookup, FoCostCenter_1.FoCostCenter);
    /**
     * Static representation of the one-to-one navigation property [[custDepartmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_DEPARTMENT_NAV = new core_1.OneToOneLink('cust_departmentNav', Cust_Rcm_Operator_Lookup, FoDepartment_1.FoDepartment);
    /**
     * Static representation of the one-to-one navigation property [[custDivisionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_DIVISION_NAV = new core_1.OneToOneLink('cust_divisionNav', Cust_Rcm_Operator_Lookup, FoDivision_1.FoDivision);
    /**
     * Static representation of the one-to-one navigation property [[custEmployeeClassNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_EMPLOYEE_CLASS_NAV = new core_1.OneToOneLink('cust_employeeClassNav', Cust_Rcm_Operator_Lookup, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-one navigation property [[custEmploymentTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_EMPLOYMENT_TYPE_NAV = new core_1.OneToOneLink('cust_employmentTypeNav', Cust_Rcm_Operator_Lookup, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-one navigation property [[custJobLevelNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_JOB_LEVEL_NAV = new core_1.OneToOneLink('cust_jobLevelNav', Cust_Rcm_Operator_Lookup, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-one navigation property [[custLocationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_LOCATION_NAV = new core_1.OneToOneLink('cust_locationNav', Cust_Rcm_Operator_Lookup, FoLocation_1.FoLocation);
    /**
     * Static representation of the one-to-one navigation property [[custPayGradeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_PAY_GRADE_NAV = new core_1.OneToOneLink('cust_payGradeNav', Cust_Rcm_Operator_Lookup, FoPayGrade_1.FoPayGrade);
    /**
     * Static representation of the one-to-one navigation property [[custRegularTemporaryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.CUST_REGULAR_TEMPORARY_NAV = new core_1.OneToOneLink('cust_regularTemporaryNav', Cust_Rcm_Operator_Lookup, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', Cust_Rcm_Operator_Lookup, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', Cust_Rcm_Operator_Lookup, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_Rcm_Operator_Lookup.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', Cust_Rcm_Operator_Lookup, WfRequest_1.WfRequest);
    /**
     * All fields of the Cust_Rcm_Operator_Lookup entity.
     */
    Cust_Rcm_Operator_Lookup._allFields = [
        Cust_Rcm_Operator_Lookup.CREATED_BY,
        Cust_Rcm_Operator_Lookup.CREATED_DATE_TIME,
        Cust_Rcm_Operator_Lookup.CUST_RECRUITER,
        Cust_Rcm_Operator_Lookup.CUST_RECRUITING_TEAM_LEAD,
        Cust_Rcm_Operator_Lookup.CUST_REGION,
        Cust_Rcm_Operator_Lookup.CUST_SHARED_SERVICES,
        Cust_Rcm_Operator_Lookup.CUST_BUSINESS_UNIT,
        Cust_Rcm_Operator_Lookup.CUST_COMPANY,
        Cust_Rcm_Operator_Lookup.CUST_COST_CENTER,
        Cust_Rcm_Operator_Lookup.CUST_COUNTRY,
        Cust_Rcm_Operator_Lookup.CUST_DEPARTMENT,
        Cust_Rcm_Operator_Lookup.CUST_DIVISION,
        Cust_Rcm_Operator_Lookup.CUST_EMPLOYEE_CLASS,
        Cust_Rcm_Operator_Lookup.CUST_EMPLOYMENT_TYPE,
        Cust_Rcm_Operator_Lookup.CUST_JOB_LEVEL,
        Cust_Rcm_Operator_Lookup.CUST_LOCATION,
        Cust_Rcm_Operator_Lookup.CUST_PAY_GRADE,
        Cust_Rcm_Operator_Lookup.CUST_REGULAR_TEMPORARY,
        Cust_Rcm_Operator_Lookup.EFFECTIVE_START_DATE,
        Cust_Rcm_Operator_Lookup.EXTERNAL_CODE,
        Cust_Rcm_Operator_Lookup.EXTERNAL_NAME,
        Cust_Rcm_Operator_Lookup.LAST_MODIFIED_BY,
        Cust_Rcm_Operator_Lookup.LAST_MODIFIED_DATE_TIME,
        Cust_Rcm_Operator_Lookup.MDF_SYSTEM_EFFECTIVE_END_DATE,
        Cust_Rcm_Operator_Lookup.MDF_SYSTEM_RECORD_STATUS,
        Cust_Rcm_Operator_Lookup.CREATED_BY_NAV,
        Cust_Rcm_Operator_Lookup.CUST_RECRUITER_NAV,
        Cust_Rcm_Operator_Lookup.CUST_RECRUITING_TEAM_LEAD_NAV,
        Cust_Rcm_Operator_Lookup.CUST_SHARED_SERVICES_NAV,
        Cust_Rcm_Operator_Lookup.CUST_BUSINESS_UNIT_NAV,
        Cust_Rcm_Operator_Lookup.CUST_COMPANY_NAV,
        Cust_Rcm_Operator_Lookup.CUST_COST_CENTER_NAV,
        Cust_Rcm_Operator_Lookup.CUST_DEPARTMENT_NAV,
        Cust_Rcm_Operator_Lookup.CUST_DIVISION_NAV,
        Cust_Rcm_Operator_Lookup.CUST_EMPLOYEE_CLASS_NAV,
        Cust_Rcm_Operator_Lookup.CUST_EMPLOYMENT_TYPE_NAV,
        Cust_Rcm_Operator_Lookup.CUST_JOB_LEVEL_NAV,
        Cust_Rcm_Operator_Lookup.CUST_LOCATION_NAV,
        Cust_Rcm_Operator_Lookup.CUST_PAY_GRADE_NAV,
        Cust_Rcm_Operator_Lookup.CUST_REGULAR_TEMPORARY_NAV,
        Cust_Rcm_Operator_Lookup.LAST_MODIFIED_BY_NAV,
        Cust_Rcm_Operator_Lookup.MDF_SYSTEM_RECORD_STATUS_NAV,
        Cust_Rcm_Operator_Lookup.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    Cust_Rcm_Operator_Lookup.ALL_FIELDS = new core_1.AllFields('*', Cust_Rcm_Operator_Lookup);
    /**
     * All key fields of the Cust_Rcm_Operator_Lookup entity.
     */
    Cust_Rcm_Operator_Lookup._keyFields = [Cust_Rcm_Operator_Lookup.EFFECTIVE_START_DATE, Cust_Rcm_Operator_Lookup.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property Cust_Rcm_Operator_Lookup.
     */
    Cust_Rcm_Operator_Lookup._keys = Cust_Rcm_Operator_Lookup._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Cust_Rcm_Operator_Lookup = exports.Cust_Rcm_Operator_Lookup || (exports.Cust_Rcm_Operator_Lookup = {}));
exports.Cust_Rcm_Operator_Lookup = Cust_Rcm_Operator_Lookup;
//# sourceMappingURL=Cust_Rcm_Operator_Lookup.js.map