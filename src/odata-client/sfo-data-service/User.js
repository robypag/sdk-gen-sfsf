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
var UserRequestBuilder_1 = require("./UserRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "User" of service "SFOData".
 */
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `User`.
     * @returns A builder that constructs instances of entity type `User`.
     */
    User.builder = function () {
        return core_1.Entity.entityBuilder(User);
    };
    /**
     * Returns a request builder to construct requests for operations on the `User` entity type.
     * @returns A `User` request builder.
     */
    User.requestBuilder = function () {
        return new UserRequestBuilder_1.UserRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `User`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `User`.
     */
    User.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, User);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    User.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for User.
     */
    User._entityName = 'User';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for User.
     */
    User._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    User._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return User;
}(core_1.Entity));
exports.User = User;
var Advance_1 = require("./Advance");
var OneTimeDeduction_1 = require("./OneTimeDeduction");
var PicklistOption_1 = require("./PicklistOption");
var SpotAward_1 = require("./SpotAward");
var RightToReturn_1 = require("./RightToReturn");
var CompetencyRating_1 = require("./CompetencyRating");
var OnboardingCandidateInfo_1 = require("./OnboardingCandidateInfo");
var FoCostCenter_1 = require("./FoCostCenter");
var Cust_Rcm_Operator_Lookup_1 = require("./Cust_Rcm_Operator_Lookup");
var AutoDelegateDetail_1 = require("./AutoDelegateDetail");
var AutoDelegateConfig_1 = require("./AutoDelegateConfig");
var EmpEmployment_1 = require("./EmpEmployment");
var SkillProfile_1 = require("./SkillProfile");
var FoBusinessUnit_1 = require("./FoBusinessUnit");
var FoDepartment_1 = require("./FoDepartment");
var FoDivision_1 = require("./FoDivision");
var Position_1 = require("./Position");
var NominationTarget_1 = require("./NominationTarget");
var TalentPool_1 = require("./TalentPool");
var OnboardingMeetingEvent_1 = require("./OnboardingMeetingEvent");
var PersonKey_1 = require("./PersonKey");
var Achievement_1 = require("./Achievement");
var Activity_1 = require("./Activity");
var TimeManagementAlert_1 = require("./TimeManagementAlert");
var AccrualCalculationBase_1 = require("./AccrualCalculationBase");
var BudgetGroup_1 = require("./BudgetGroup");
var DataReplicationProxy_1 = require("./DataReplicationProxy");
var EmployeePayrollRunResults_1 = require("./EmployeePayrollRunResults");
var EmployeeTimeGroup_1 = require("./EmployeeTimeGroup");
var EmployeeTime_1 = require("./EmployeeTime");
var EmployeeTimeSheet_1 = require("./EmployeeTimeSheet");
var ExternalTimeData_1 = require("./ExternalTimeData");
var ExternalTimeRecord_1 = require("./ExternalTimeRecord");
var HrisChangeLogDataReplication_1 = require("./HrisChangeLogDataReplication");
var PositionRightToReturn_1 = require("./PositionRightToReturn");
var SpotAwardBudget_1 = require("./SpotAwardBudget");
var SpotAwardRedemption_1 = require("./SpotAwardRedemption");
var TemporaryTimeInformation_1 = require("./TemporaryTimeInformation");
var TimeAccount_1 = require("./TimeAccount");
var TimeAccountSnapshot_1 = require("./TimeAccountSnapshot");
var TimeCollector_1 = require("./TimeCollector");
var WorkSchedule_1 = require("./WorkSchedule");
var UserPermissions_1 = require("./UserPermissions");
var AdvancesAccumulation_1 = require("./AdvancesAccumulation");
var NonRecurringPayment_1 = require("./NonRecurringPayment");
var RecurringDeduction_1 = require("./RecurringDeduction");
var WorkOrder_1 = require("./WorkOrder");
var EmpCostDistribution_1 = require("./EmpCostDistribution");
var EmployeeDataReplicationConfirmation_1 = require("./EmployeeDataReplicationConfirmation");
var EmployeeDataReplicationElement_1 = require("./EmployeeDataReplicationElement");
var EmployeeDataReplicationNotification_1 = require("./EmployeeDataReplicationNotification");
var HireDateChange_1 = require("./HireDateChange");
var SecondaryAssignmentsItem_1 = require("./SecondaryAssignmentsItem");
var PaymentInformationV3_1 = require("./PaymentInformationV3");
(function (User) {
    /**
     * Static representation of the [[addressLine1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.ADDRESS_LINE_1 = new core_1.StringField('addressLine1', User, 'Edm.String');
    /**
     * Static representation of the [[addressLine2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.ADDRESS_LINE_2 = new core_1.StringField('addressLine2', User, 'Edm.String');
    /**
     * Static representation of the [[addressLine3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.ADDRESS_LINE_3 = new core_1.StringField('addressLine3', User, 'Edm.String');
    /**
     * Static representation of the [[benchStrength]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.BENCH_STRENGTH = new core_1.StringField('benchStrength', User, 'Edm.String');
    /**
     * Static representation of the [[businessPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.BUSINESS_PHONE = new core_1.StringField('businessPhone', User, 'Edm.String');
    /**
     * Static representation of the [[businessSegment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.BUSINESS_SEGMENT = new core_1.StringField('businessSegment', User, 'Edm.String');
    /**
     * Static representation of the [[cellPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.CELL_PHONE = new core_1.StringField('cellPhone', User, 'Edm.String');
    /**
     * Static representation of the [[citizenship]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.CITIZENSHIP = new core_1.StringField('citizenship', User, 'Edm.String');
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.CITY = new core_1.StringField('city', User, 'Edm.String');
    /**
     * Static representation of the [[competency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.COMPETENCY = new core_1.NumberField('competency', User, 'Edm.Single');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.COUNTRY = new core_1.StringField('country', User, 'Edm.String');
    /**
     * Static representation of the [[custom01]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.CUSTOM_01 = new core_1.StringField('custom01', User, 'Edm.String');
    /**
     * Static representation of the [[custom02]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.CUSTOM_02 = new core_1.StringField('custom02', User, 'Edm.String');
    /**
     * Static representation of the [[custom03]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.CUSTOM_03 = new core_1.StringField('custom03', User, 'Edm.String');
    /**
     * Static representation of the [[custom04]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.CUSTOM_04 = new core_1.StringField('custom04', User, 'Edm.String');
    /**
     * Static representation of the [[custom05]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.CUSTOM_05 = new core_1.StringField('custom05', User, 'Edm.String');
    /**
     * Static representation of the [[custom06]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.CUSTOM_06 = new core_1.StringField('custom06', User, 'Edm.String');
    /**
     * Static representation of the [[custom07]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.CUSTOM_07 = new core_1.StringField('custom07', User, 'Edm.String');
    /**
     * Static representation of the [[custom08]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.CUSTOM_08 = new core_1.StringField('custom08', User, 'Edm.String');
    /**
     * Static representation of the [[custom09]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.CUSTOM_09 = new core_1.StringField('custom09', User, 'Edm.String');
    /**
     * Static representation of the [[custom10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.CUSTOM_10 = new core_1.StringField('custom10', User, 'Edm.String');
    /**
     * Static representation of the [[custom11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.CUSTOM_11 = new core_1.StringField('custom11', User, 'Edm.String');
    /**
     * Static representation of the [[custom12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.CUSTOM_12 = new core_1.StringField('custom12', User, 'Edm.String');
    /**
     * Static representation of the [[custom13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.CUSTOM_13 = new core_1.StringField('custom13', User, 'Edm.String');
    /**
     * Static representation of the [[custom14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.CUSTOM_14 = new core_1.StringField('custom14', User, 'Edm.String');
    /**
     * Static representation of the [[custom15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.CUSTOM_15 = new core_1.StringField('custom15', User, 'Edm.String');
    /**
     * Static representation of the [[dateOfBirth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.DATE_OF_BIRTH = new core_1.DateField('dateOfBirth', User, 'Edm.DateTime');
    /**
     * Static representation of the [[dateOfPosition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.DATE_OF_POSITION = new core_1.DateField('dateOfPosition', User, 'Edm.DateTime');
    /**
     * Static representation of the [[defaultFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.DEFAULT_FULL_NAME = new core_1.StringField('defaultFullName', User, 'Edm.String');
    /**
     * Static representation of the [[defaultLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.DEFAULT_LOCALE = new core_1.StringField('defaultLocale', User, 'Edm.String');
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.DEPARTMENT = new core_1.StringField('department', User, 'Edm.String');
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.DIVISION = new core_1.StringField('division', User, 'Edm.String');
    /**
     * Static representation of the [[email]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.EMAIL = new core_1.StringField('email', User, 'Edm.String');
    /**
     * Static representation of the [[empId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.EMP_ID = new core_1.StringField('empId', User, 'Edm.String');
    /**
     * Static representation of the [[ethnicity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.ETHNICITY = new core_1.StringField('ethnicity', User, 'Edm.String');
    /**
     * Static representation of the [[fax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.FAX = new core_1.StringField('fax', User, 'Edm.String');
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.FIRST_NAME = new core_1.StringField('firstName', User, 'Edm.String');
    /**
     * Static representation of the [[futureLeader]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.FUTURE_LEADER = new core_1.BooleanField('futureLeader', User, 'Edm.Boolean');
    /**
     * Static representation of the [[gender]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.GENDER = new core_1.StringField('gender', User, 'Edm.String');
    /**
     * Static representation of the [[hireDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.HIRE_DATE = new core_1.DateField('hireDate', User, 'Edm.DateTime');
    /**
     * Static representation of the [[homePhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.HOME_PHONE = new core_1.StringField('homePhone', User, 'Edm.String');
    /**
     * Static representation of the [[impactOfLoss]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.IMPACT_OF_LOSS = new core_1.StringField('impactOfLoss', User, 'Edm.String');
    /**
     * Static representation of the [[jobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.JOB_CODE = new core_1.StringField('jobCode', User, 'Edm.String');
    /**
     * Static representation of the [[keyPosition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.KEY_POSITION = new core_1.BooleanField('keyPosition', User, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.LAST_MODIFIED = new core_1.DateField('lastModified', User, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', User, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedWithTz]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.LAST_MODIFIED_WITH_TZ = new core_1.DateField('lastModifiedWithTZ', User, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.LAST_NAME = new core_1.StringField('lastName', User, 'Edm.String');
    /**
     * Static representation of the [[lastReviewDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.LAST_REVIEW_DATE = new core_1.StringField('lastReviewDate', User, 'Edm.String');
    /**
     * Static representation of the [[level]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.LEVEL = new core_1.StringField('level', User, 'Edm.String');
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.LOCATION = new core_1.StringField('location', User, 'Edm.String');
    /**
     * Static representation of the [[married]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.MARRIED = new core_1.BooleanField('married', User, 'Edm.Boolean');
    /**
     * Static representation of the [[matrix1Label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.MATRIX_1_LABEL = new core_1.StringField('matrix1Label', User, 'Edm.String');
    /**
     * Static representation of the [[matrix2Label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.MATRIX_2_LABEL = new core_1.StringField('matrix2Label', User, 'Edm.String');
    /**
     * Static representation of the [[matrixManaged]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.MATRIX_MANAGED = new core_1.BooleanField('matrixManaged', User, 'Edm.Boolean');
    /**
     * Static representation of the [[mi]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.MI = new core_1.StringField('mi', User, 'Edm.String');
    /**
     * Static representation of the [[minority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.MINORITY = new core_1.BooleanField('minority', User, 'Edm.Boolean');
    /**
     * Static representation of the [[nationality]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.NATIONALITY = new core_1.StringField('nationality', User, 'Edm.String');
    /**
     * Static representation of the [[newToPosition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.NEW_TO_POSITION = new core_1.BooleanField('newToPosition', User, 'Edm.Boolean');
    /**
     * Static representation of the [[nickname]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.NICKNAME = new core_1.StringField('nickname', User, 'Edm.String');
    /**
     * Static representation of the [[objective]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.OBJECTIVE = new core_1.NumberField('objective', User, 'Edm.Single');
    /**
     * Static representation of the [[onboardingId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.ONBOARDING_ID = new core_1.StringField('onboardingId', User, 'Edm.String');
    /**
     * Static representation of the [[password]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.PASSWORD = new core_1.StringField('password', User, 'Edm.String');
    /**
     * Static representation of the [[performance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.PERFORMANCE = new core_1.NumberField('performance', User, 'Edm.Single');
    /**
     * Static representation of the [[potential]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.POTENTIAL = new core_1.NumberField('potential', User, 'Edm.Single');
    /**
     * Static representation of the [[reasonForLeaving]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.REASON_FOR_LEAVING = new core_1.StringField('reasonForLeaving', User, 'Edm.String');
    /**
     * Static representation of the [[reviewFreq]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.REVIEW_FREQ = new core_1.StringField('reviewFreq', User, 'Edm.String');
    /**
     * Static representation of the [[riskOfLoss]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.RISK_OF_LOSS = new core_1.StringField('riskOfLoss', User, 'Edm.String');
    /**
     * Static representation of the [[sciLastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.SCI_LAST_MODIFIED = new core_1.DateField('sciLastModified', User, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[serviceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.SERVICE_DATE = new core_1.DateField('serviceDate', User, 'Edm.DateTime');
    /**
     * Static representation of the [[ssn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.SSN = new core_1.StringField('ssn', User, 'Edm.String');
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.STATE = new core_1.StringField('state', User, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.STATUS = new core_1.StringField('status', User, 'Edm.String');
    /**
     * Static representation of the [[suffix]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.SUFFIX = new core_1.StringField('suffix', User, 'Edm.String');
    /**
     * Static representation of the [[talentPool]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.TALENT_POOL = new core_1.StringField('talentPool', User, 'Edm.String');
    /**
     * Static representation of the [[teamMembersSize]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.TEAM_MEMBERS_SIZE = new core_1.NumberField('teamMembersSize', User, 'Edm.Int32');
    /**
     * Static representation of the [[timeZone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.TIME_ZONE = new core_1.StringField('timeZone', User, 'Edm.String');
    /**
     * Static representation of the [[title]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.TITLE = new core_1.StringField('title', User, 'Edm.String');
    /**
     * Static representation of the [[totalTeamSize]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.TOTAL_TEAM_SIZE = new core_1.BigNumberField('totalTeamSize', User, 'Edm.Int64');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USER_ID = new core_1.StringField('userId', User, 'Edm.String');
    /**
     * Static representation of the [[username]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USERNAME = new core_1.StringField('username', User, 'Edm.String');
    /**
     * Static representation of the [[zipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.ZIP_CODE = new core_1.StringField('zipCode', User, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[approverOfAdvanceNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.APPROVER_OF_ADVANCE_NAV = new core_1.Link('approverOfAdvanceNav', User, Advance_1.Advance);
    /**
     * Static representation of the one-to-many navigation property [[auditUserSysIdOfOneTimeDeductionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.AUDIT_USER_SYS_ID_OF_ONE_TIME_DEDUCTION_NAV = new core_1.Link('auditUserSysIdOfOneTimeDeductionNav', User, OneTimeDeduction_1.OneTimeDeduction);
    /**
     * Static representation of the one-to-one navigation property [[benchStrengthNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.BENCH_STRENGTH_NAV = new core_1.OneToOneLink('benchStrengthNav', User, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[budgetHolderIdOfSpotAwardNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.BUDGET_HOLDER_ID_OF_SPOT_AWARD_NAV = new core_1.Link('budgetHolderIdOfSpotAwardNav', User, SpotAward_1.SpotAward);
    /**
     * Static representation of the one-to-one navigation property [[businessSegmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.BUSINESS_SEGMENT_NAV = new core_1.OneToOneLink('businessSegmentNav', User, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[codeOfRightToReturnNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.CODE_OF_RIGHT_TO_RETURN_NAV = new core_1.Link('codeOfRightToReturnNav', User, RightToReturn_1.RightToReturn);
    /**
     * Static representation of the one-to-many navigation property [[competencyRatingNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.COMPETENCY_RATING_NAV = new core_1.Link('competencyRatingNav', User, CompetencyRating_1.CompetencyRating);
    /**
     * Static representation of the one-to-many navigation property [[concurrentUserOfOnboardingCandidateInfoNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.CONCURRENT_USER_OF_ONBOARDING_CANDIDATE_INFO_NAV = new core_1.Link('concurrentUserOfOnboardingCandidateInfoNav', User, OnboardingCandidateInfo_1.OnboardingCandidateInfo);
    /**
     * Static representation of the one-to-many navigation property [[costCenterManagerOfFoCostCenterNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.COST_CENTER_MANAGER_OF_FO_COST_CENTER_NAV = new core_1.Link('costCenterManagerOfFOCostCenterNav', User, FoCostCenter_1.FoCostCenter);
    /**
     * Static representation of the one-to-many navigation property [[custRecruiterOfcustRcmOperatorLookupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.CUST_RECRUITER_OFCUST_RCM_OPERATOR_LOOKUP_NAV = new core_1.Link('cust_RecruiterOfcust_RCM_Operator_LookupNav', User, Cust_Rcm_Operator_Lookup_1.Cust_Rcm_Operator_Lookup);
    /**
     * Static representation of the one-to-many navigation property [[custRecruitingTeamLeadOfcustRcmOperatorLookupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.CUST_RECRUITING_TEAM_LEAD_OFCUST_RCM_OPERATOR_LOOKUP_NAV = new core_1.Link('cust_RecruitingTeamLeadOfcust_RCM_Operator_LookupNav', User, Cust_Rcm_Operator_Lookup_1.Cust_Rcm_Operator_Lookup);
    /**
     * Static representation of the one-to-many navigation property [[custSharedServicesOfcustRcmOperatorLookupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.CUST_SHARED_SERVICES_OFCUST_RCM_OPERATOR_LOOKUP_NAV = new core_1.Link('cust_SharedServicesOfcust_RCM_Operator_LookupNav', User, Cust_Rcm_Operator_Lookup_1.Cust_Rcm_Operator_Lookup);
    /**
     * Static representation of the one-to-one navigation property [[custom05Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.CUSTOM_05_NAV = new core_1.OneToOneLink('custom05Nav', User, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[customManager]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.CUSTOM_MANAGER = new core_1.Link('customManager', User, User);
    /**
     * Static representation of the one-to-many navigation property [[customReports]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.CUSTOM_REPORTS = new core_1.Link('customReports', User, User);
    /**
     * Static representation of the one-to-many navigation property [[delegateeOfAutoDelegateDetailNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.DELEGATEE_OF_AUTO_DELEGATE_DETAIL_NAV = new core_1.Link('delegateeOfAutoDelegateDetailNav', User, AutoDelegateDetail_1.AutoDelegateDetail);
    /**
     * Static representation of the one-to-many navigation property [[delegatorOfAutoDelegateConfigNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.DELEGATOR_OF_AUTO_DELEGATE_CONFIG_NAV = new core_1.Link('delegatorOfAutoDelegateConfigNav', User, AutoDelegateConfig_1.AutoDelegateConfig);
    /**
     * Static representation of the one-to-many navigation property [[directReports]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.DIRECT_REPORTS = new core_1.Link('directReports', User, User);
    /**
     * Static representation of the one-to-one navigation property [[empInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.EMP_INFO = new core_1.OneToOneLink('empInfo', User, EmpEmployment_1.EmpEmployment);
    /**
     * Static representation of the one-to-one navigation property [[ethnicityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.ETHNICITY_NAV = new core_1.OneToOneLink('ethnicityNav', User, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[externalCodeOfSkillProfileNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.EXTERNAL_CODE_OF_SKILL_PROFILE_NAV = new core_1.Link('externalCodeOfSkillProfileNav', User, SkillProfile_1.SkillProfile);
    /**
     * Static representation of the one-to-many navigation property [[headOfUnitOfFoBusinessUnitNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.HEAD_OF_UNIT_OF_FO_BUSINESS_UNIT_NAV = new core_1.Link('headOfUnitOfFOBusinessUnitNav', User, FoBusinessUnit_1.FoBusinessUnit);
    /**
     * Static representation of the one-to-many navigation property [[headOfUnitOfFoDepartmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.HEAD_OF_UNIT_OF_FO_DEPARTMENT_NAV = new core_1.Link('headOfUnitOfFODepartmentNav', User, FoDepartment_1.FoDepartment);
    /**
     * Static representation of the one-to-many navigation property [[headOfUnitOfFoDivisionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.HEAD_OF_UNIT_OF_FO_DIVISION_NAV = new core_1.Link('headOfUnitOfFODivisionNav', User, FoDivision_1.FoDivision);
    /**
     * Static representation of the one-to-one navigation property [[hr]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.HR = new core_1.OneToOneLink('hr', User, User);
    /**
     * Static representation of the one-to-many navigation property [[hrManagerIdOfOnboardingCandidateInfoNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.HR_MANAGER_ID_OF_ONBOARDING_CANDIDATE_INFO_NAV = new core_1.Link('hrManagerIdOfOnboardingCandidateInfoNav', User, OnboardingCandidateInfo_1.OnboardingCandidateInfo);
    /**
     * Static representation of the one-to-many navigation property [[hrReports]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.HR_REPORTS = new core_1.Link('hrReports', User, User);
    /**
     * Static representation of the one-to-one navigation property [[impactOfLossNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.IMPACT_OF_LOSS_NAV = new core_1.OneToOneLink('impactOfLossNav', User, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[incumbentOfPositionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.INCUMBENT_OF_POSITION_NAV = new core_1.Link('incumbentOfPositionNav', User, Position_1.Position);
    /**
     * Static representation of the one-to-one navigation property [[manager]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.MANAGER = new core_1.OneToOneLink('manager', User, User);
    /**
     * Static representation of the one-to-many navigation property [[managerIdOfOnboardingCandidateInfoNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.MANAGER_ID_OF_ONBOARDING_CANDIDATE_INFO_NAV = new core_1.Link('managerIdOfOnboardingCandidateInfoNav', User, OnboardingCandidateInfo_1.OnboardingCandidateInfo);
    /**
     * Static representation of the one-to-many navigation property [[matrixManager]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.MATRIX_MANAGER = new core_1.Link('matrixManager', User, User);
    /**
     * Static representation of the one-to-many navigation property [[matrixReports]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.MATRIX_REPORTS = new core_1.Link('matrixReports', User, User);
    /**
     * Static representation of the one-to-many navigation property [[nominationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.NOMINATION_NAV = new core_1.Link('nominationNav', User, NominationTarget_1.NominationTarget);
    /**
     * Static representation of the one-to-many navigation property [[nominatorIdOfSpotAwardNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.NOMINATOR_ID_OF_SPOT_AWARD_NAV = new core_1.Link('nominatorIdOfSpotAwardNav', User, SpotAward_1.SpotAward);
    /**
     * Static representation of the one-to-many navigation property [[ownerOfTalentPoolNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.OWNER_OF_TALENT_POOL_NAV = new core_1.Link('ownerOfTalentPoolNav', User, TalentPool_1.TalentPool);
    /**
     * Static representation of the one-to-many navigation property [[participantUserId1OfOnboardingMeetingEventNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.PARTICIPANT_USER_ID_1_OF_ONBOARDING_MEETING_EVENT_NAV = new core_1.Link('participantUserId1OfOnboardingMeetingEventNav', User, OnboardingMeetingEvent_1.OnboardingMeetingEvent);
    /**
     * Static representation of the one-to-many navigation property [[participantUserId2OfOnboardingMeetingEventNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.PARTICIPANT_USER_ID_2_OF_ONBOARDING_MEETING_EVENT_NAV = new core_1.Link('participantUserId2OfOnboardingMeetingEventNav', User, OnboardingMeetingEvent_1.OnboardingMeetingEvent);
    /**
     * Static representation of the one-to-many navigation property [[participantUserId3OfOnboardingMeetingEventNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.PARTICIPANT_USER_ID_3_OF_ONBOARDING_MEETING_EVENT_NAV = new core_1.Link('participantUserId3OfOnboardingMeetingEventNav', User, OnboardingMeetingEvent_1.OnboardingMeetingEvent);
    /**
     * Static representation of the one-to-many navigation property [[participantUserId4OfOnboardingMeetingEventNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.PARTICIPANT_USER_ID_4_OF_ONBOARDING_MEETING_EVENT_NAV = new core_1.Link('participantUserId4OfOnboardingMeetingEventNav', User, OnboardingMeetingEvent_1.OnboardingMeetingEvent);
    /**
     * Static representation of the one-to-many navigation property [[participantUserId5OfOnboardingMeetingEventNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.PARTICIPANT_USER_ID_5_OF_ONBOARDING_MEETING_EVENT_NAV = new core_1.Link('participantUserId5OfOnboardingMeetingEventNav', User, OnboardingMeetingEvent_1.OnboardingMeetingEvent);
    /**
     * Static representation of the one-to-one navigation property [[personKeyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.PERSON_KEY_NAV = new core_1.OneToOneLink('personKeyNav', User, PersonKey_1.PersonKey);
    /**
     * Static representation of the one-to-many navigation property [[processorIdOfOnboardingCandidateInfoNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.PROCESSOR_ID_OF_ONBOARDING_CANDIDATE_INFO_NAV = new core_1.Link('processorIdOfOnboardingCandidateInfoNav', User, OnboardingCandidateInfo_1.OnboardingCandidateInfo);
    /**
     * Static representation of the one-to-many navigation property [[proxy]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.PROXY = new core_1.Link('proxy', User, User);
    /**
     * Static representation of the one-to-one navigation property [[reasonForLeavingNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.REASON_FOR_LEAVING_NAV = new core_1.OneToOneLink('reasonForLeavingNav', User, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[riskOfLossNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.RISK_OF_LOSS_NAV = new core_1.OneToOneLink('riskOfLossNav', User, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[secondManager]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.SECOND_MANAGER = new core_1.OneToOneLink('secondManager', User, User);
    /**
     * Static representation of the one-to-many navigation property [[secondReports]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.SECOND_REPORTS = new core_1.Link('secondReports', User, User);
    /**
     * Static representation of the one-to-many navigation property [[subjectUserIdOfAchievementNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.SUBJECT_USER_ID_OF_ACHIEVEMENT_NAV = new core_1.Link('subjectUserIdOfAchievementNav', User, Achievement_1.Achievement);
    /**
     * Static representation of the one-to-many navigation property [[subjectUserIdOfActivityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.SUBJECT_USER_ID_OF_ACTIVITY_NAV = new core_1.Link('subjectUserIdOfActivityNav', User, Activity_1.Activity);
    /**
     * Static representation of the one-to-one navigation property [[talentPoolNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.TALENT_POOL_NAV = new core_1.OneToOneLink('talentPoolNav', User, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[targetIdOfTimeManagementAlertNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.TARGET_ID_OF_TIME_MANAGEMENT_ALERT_NAV = new core_1.Link('targetIdOfTimeManagementAlertNav', User, TimeManagementAlert_1.TimeManagementAlert);
    /**
     * Static representation of the one-to-many navigation property [[userIdOfAccrualCalculationBaseNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USER_ID_OF_ACCRUAL_CALCULATION_BASE_NAV = new core_1.Link('userIdOfAccrualCalculationBaseNav', User, AccrualCalculationBase_1.AccrualCalculationBase);
    /**
     * Static representation of the one-to-many navigation property [[userIdOfBudgetGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USER_ID_OF_BUDGET_GROUP_NAV = new core_1.Link('userIdOfBudgetGroupNav', User, BudgetGroup_1.BudgetGroup);
    /**
     * Static representation of the one-to-many navigation property [[userIdOfDataReplicationProxyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USER_ID_OF_DATA_REPLICATION_PROXY_NAV = new core_1.Link('userIdOfDataReplicationProxyNav', User, DataReplicationProxy_1.DataReplicationProxy);
    /**
     * Static representation of the one-to-many navigation property [[userIdOfEmployeePayrollRunResultsNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USER_ID_OF_EMPLOYEE_PAYROLL_RUN_RESULTS_NAV = new core_1.Link('userIdOfEmployeePayrollRunResultsNav', User, EmployeePayrollRunResults_1.EmployeePayrollRunResults);
    /**
     * Static representation of the one-to-many navigation property [[userIdOfEmployeeTimeGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USER_ID_OF_EMPLOYEE_TIME_GROUP_NAV = new core_1.Link('userIdOfEmployeeTimeGroupNav', User, EmployeeTimeGroup_1.EmployeeTimeGroup);
    /**
     * Static representation of the one-to-many navigation property [[userIdOfEmployeeTimeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USER_ID_OF_EMPLOYEE_TIME_NAV = new core_1.Link('userIdOfEmployeeTimeNav', User, EmployeeTime_1.EmployeeTime);
    /**
     * Static representation of the one-to-many navigation property [[userIdOfEmployeeTimeSheetNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USER_ID_OF_EMPLOYEE_TIME_SHEET_NAV = new core_1.Link('userIdOfEmployeeTimeSheetNav', User, EmployeeTimeSheet_1.EmployeeTimeSheet);
    /**
     * Static representation of the one-to-many navigation property [[userIdOfExternalTimeDataNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USER_ID_OF_EXTERNAL_TIME_DATA_NAV = new core_1.Link('userIdOfExternalTimeDataNav', User, ExternalTimeData_1.ExternalTimeData);
    /**
     * Static representation of the one-to-many navigation property [[userIdOfExternalTimeRecordNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USER_ID_OF_EXTERNAL_TIME_RECORD_NAV = new core_1.Link('userIdOfExternalTimeRecordNav', User, ExternalTimeRecord_1.ExternalTimeRecord);
    /**
     * Static representation of the one-to-many navigation property [[userIdOfHrisChangeLogDataReplicationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USER_ID_OF_HRIS_CHANGE_LOG_DATA_REPLICATION_NAV = new core_1.Link('userIdOfHRISChangeLogDataReplicationNav', User, HrisChangeLogDataReplication_1.HrisChangeLogDataReplication);
    /**
     * Static representation of the one-to-many navigation property [[userIdOfOnboardingCandidateInfoNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USER_ID_OF_ONBOARDING_CANDIDATE_INFO_NAV = new core_1.Link('userIdOfOnboardingCandidateInfoNav', User, OnboardingCandidateInfo_1.OnboardingCandidateInfo);
    /**
     * Static representation of the one-to-many navigation property [[userIdOfPositionRightToReturnNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USER_ID_OF_POSITION_RIGHT_TO_RETURN_NAV = new core_1.Link('userIdOfPositionRightToReturnNav', User, PositionRightToReturn_1.PositionRightToReturn);
    /**
     * Static representation of the one-to-many navigation property [[userIdOfSpotAwardBudgetNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USER_ID_OF_SPOT_AWARD_BUDGET_NAV = new core_1.Link('userIdOfSpotAwardBudgetNav', User, SpotAwardBudget_1.SpotAwardBudget);
    /**
     * Static representation of the one-to-many navigation property [[userIdOfSpotAwardNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USER_ID_OF_SPOT_AWARD_NAV = new core_1.Link('userIdOfSpotAwardNav', User, SpotAward_1.SpotAward);
    /**
     * Static representation of the one-to-many navigation property [[userIdOfSpotAwardRedemptionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USER_ID_OF_SPOT_AWARD_REDEMPTION_NAV = new core_1.Link('userIdOfSpotAwardRedemptionNav', User, SpotAwardRedemption_1.SpotAwardRedemption);
    /**
     * Static representation of the one-to-many navigation property [[userIdOfTemporaryTimeInformationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USER_ID_OF_TEMPORARY_TIME_INFORMATION_NAV = new core_1.Link('userIdOfTemporaryTimeInformationNav', User, TemporaryTimeInformation_1.TemporaryTimeInformation);
    /**
     * Static representation of the one-to-many navigation property [[userIdOfTimeAccountNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USER_ID_OF_TIME_ACCOUNT_NAV = new core_1.Link('userIdOfTimeAccountNav', User, TimeAccount_1.TimeAccount);
    /**
     * Static representation of the one-to-many navigation property [[userIdOfTimeAccountSnapshotNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USER_ID_OF_TIME_ACCOUNT_SNAPSHOT_NAV = new core_1.Link('userIdOfTimeAccountSnapshotNav', User, TimeAccountSnapshot_1.TimeAccountSnapshot);
    /**
     * Static representation of the one-to-many navigation property [[userIdOfTimeCollectorNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USER_ID_OF_TIME_COLLECTOR_NAV = new core_1.Link('userIdOfTimeCollectorNav', User, TimeCollector_1.TimeCollector);
    /**
     * Static representation of the one-to-many navigation property [[userIdOfWorkScheduleNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USER_ID_OF_WORK_SCHEDULE_NAV = new core_1.Link('userIdOfWorkScheduleNav', User, WorkSchedule_1.WorkSchedule);
    /**
     * Static representation of the one-to-one navigation property [[userPermissionsNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USER_PERMISSIONS_NAV = new core_1.OneToOneLink('userPermissionsNav', User, UserPermissions_1.UserPermissions);
    /**
     * Static representation of the one-to-many navigation property [[userSysIdOfAdvancesAccumulationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USER_SYS_ID_OF_ADVANCES_ACCUMULATION_NAV = new core_1.Link('userSysIdOfAdvancesAccumulationNav', User, AdvancesAccumulation_1.AdvancesAccumulation);
    /**
     * Static representation of the one-to-many navigation property [[userSysIdOfNonRecurringPaymentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USER_SYS_ID_OF_NON_RECURRING_PAYMENT_NAV = new core_1.Link('userSysIdOfNonRecurringPaymentNav', User, NonRecurringPayment_1.NonRecurringPayment);
    /**
     * Static representation of the one-to-many navigation property [[userSysIdOfOneTimeDeductionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USER_SYS_ID_OF_ONE_TIME_DEDUCTION_NAV = new core_1.Link('userSysIdOfOneTimeDeductionNav', User, OneTimeDeduction_1.OneTimeDeduction);
    /**
     * Static representation of the one-to-many navigation property [[userSysIdOfRecurringDeductionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USER_SYS_ID_OF_RECURRING_DEDUCTION_NAV = new core_1.Link('userSysIdOfRecurringDeductionNav', User, RecurringDeduction_1.RecurringDeduction);
    /**
     * Static representation of the one-to-many navigation property [[userSysIdOfWorkOrderNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USER_SYS_ID_OF_WORK_ORDER_NAV = new core_1.Link('userSysIdOfWorkOrderNav', User, WorkOrder_1.WorkOrder);
    /**
     * Static representation of the one-to-many navigation property [[usersSysIdOfEmpCostDistributionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USERS_SYS_ID_OF_EMP_COST_DISTRIBUTION_NAV = new core_1.Link('usersSysIdOfEmpCostDistributionNav', User, EmpCostDistribution_1.EmpCostDistribution);
    /**
     * Static representation of the one-to-many navigation property [[usersSysIdOfEmployeeDataReplicationConfirmationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USERS_SYS_ID_OF_EMPLOYEE_DATA_REPLICATION_CONFIRMATION_NAV = new core_1.Link('usersSysIdOfEmployeeDataReplicationConfirmationNav', User, EmployeeDataReplicationConfirmation_1.EmployeeDataReplicationConfirmation);
    /**
     * Static representation of the one-to-many navigation property [[usersSysIdOfEmployeeDataReplicationElementNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USERS_SYS_ID_OF_EMPLOYEE_DATA_REPLICATION_ELEMENT_NAV = new core_1.Link('usersSysIdOfEmployeeDataReplicationElementNav', User, EmployeeDataReplicationElement_1.EmployeeDataReplicationElement);
    /**
     * Static representation of the one-to-many navigation property [[usersSysIdOfEmployeeDataReplicationNotificationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USERS_SYS_ID_OF_EMPLOYEE_DATA_REPLICATION_NOTIFICATION_NAV = new core_1.Link('usersSysIdOfEmployeeDataReplicationNotificationNav', User, EmployeeDataReplicationNotification_1.EmployeeDataReplicationNotification);
    /**
     * Static representation of the one-to-many navigation property [[usersSysIdOfHireDateChangeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USERS_SYS_ID_OF_HIRE_DATE_CHANGE_NAV = new core_1.Link('usersSysIdOfHireDateChangeNav', User, HireDateChange_1.HireDateChange);
    /**
     * Static representation of the one-to-many navigation property [[usersSysIdOfSecondaryAssignmentsItemNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.USERS_SYS_ID_OF_SECONDARY_ASSIGNMENTS_ITEM_NAV = new core_1.Link('usersSysIdOfSecondaryAssignmentsItemNav', User, SecondaryAssignmentsItem_1.SecondaryAssignmentsItem);
    /**
     * Static representation of the one-to-many navigation property [[workOrderOwnerIdOfWorkOrderNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.WORK_ORDER_OWNER_ID_OF_WORK_ORDER_NAV = new core_1.Link('workOrderOwnerIdOfWorkOrderNav', User, WorkOrder_1.WorkOrder);
    /**
     * Static representation of the one-to-many navigation property [[workerOfPaymentInformationV3Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    User.WORKER_OF_PAYMENT_INFORMATION_V_3_NAV = new core_1.Link('workerOfPaymentInformationV3Nav', User, PaymentInformationV3_1.PaymentInformationV3);
    /**
     * All fields of the User entity.
     */
    User._allFields = [
        User.ADDRESS_LINE_1,
        User.ADDRESS_LINE_2,
        User.ADDRESS_LINE_3,
        User.BENCH_STRENGTH,
        User.BUSINESS_PHONE,
        User.BUSINESS_SEGMENT,
        User.CELL_PHONE,
        User.CITIZENSHIP,
        User.CITY,
        User.COMPETENCY,
        User.COUNTRY,
        User.CUSTOM_01,
        User.CUSTOM_02,
        User.CUSTOM_03,
        User.CUSTOM_04,
        User.CUSTOM_05,
        User.CUSTOM_06,
        User.CUSTOM_07,
        User.CUSTOM_08,
        User.CUSTOM_09,
        User.CUSTOM_10,
        User.CUSTOM_11,
        User.CUSTOM_12,
        User.CUSTOM_13,
        User.CUSTOM_14,
        User.CUSTOM_15,
        User.DATE_OF_BIRTH,
        User.DATE_OF_POSITION,
        User.DEFAULT_FULL_NAME,
        User.DEFAULT_LOCALE,
        User.DEPARTMENT,
        User.DIVISION,
        User.EMAIL,
        User.EMP_ID,
        User.ETHNICITY,
        User.FAX,
        User.FIRST_NAME,
        User.FUTURE_LEADER,
        User.GENDER,
        User.HIRE_DATE,
        User.HOME_PHONE,
        User.IMPACT_OF_LOSS,
        User.JOB_CODE,
        User.KEY_POSITION,
        User.LAST_MODIFIED,
        User.LAST_MODIFIED_DATE_TIME,
        User.LAST_MODIFIED_WITH_TZ,
        User.LAST_NAME,
        User.LAST_REVIEW_DATE,
        User.LEVEL,
        User.LOCATION,
        User.MARRIED,
        User.MATRIX_1_LABEL,
        User.MATRIX_2_LABEL,
        User.MATRIX_MANAGED,
        User.MI,
        User.MINORITY,
        User.NATIONALITY,
        User.NEW_TO_POSITION,
        User.NICKNAME,
        User.OBJECTIVE,
        User.ONBOARDING_ID,
        User.PASSWORD,
        User.PERFORMANCE,
        User.POTENTIAL,
        User.REASON_FOR_LEAVING,
        User.REVIEW_FREQ,
        User.RISK_OF_LOSS,
        User.SCI_LAST_MODIFIED,
        User.SERVICE_DATE,
        User.SSN,
        User.STATE,
        User.STATUS,
        User.SUFFIX,
        User.TALENT_POOL,
        User.TEAM_MEMBERS_SIZE,
        User.TIME_ZONE,
        User.TITLE,
        User.TOTAL_TEAM_SIZE,
        User.USER_ID,
        User.USERNAME,
        User.ZIP_CODE,
        User.APPROVER_OF_ADVANCE_NAV,
        User.AUDIT_USER_SYS_ID_OF_ONE_TIME_DEDUCTION_NAV,
        User.BENCH_STRENGTH_NAV,
        User.BUDGET_HOLDER_ID_OF_SPOT_AWARD_NAV,
        User.BUSINESS_SEGMENT_NAV,
        User.CODE_OF_RIGHT_TO_RETURN_NAV,
        User.COMPETENCY_RATING_NAV,
        User.CONCURRENT_USER_OF_ONBOARDING_CANDIDATE_INFO_NAV,
        User.COST_CENTER_MANAGER_OF_FO_COST_CENTER_NAV,
        User.CUST_RECRUITER_OFCUST_RCM_OPERATOR_LOOKUP_NAV,
        User.CUST_RECRUITING_TEAM_LEAD_OFCUST_RCM_OPERATOR_LOOKUP_NAV,
        User.CUST_SHARED_SERVICES_OFCUST_RCM_OPERATOR_LOOKUP_NAV,
        User.CUSTOM_05_NAV,
        User.CUSTOM_MANAGER,
        User.CUSTOM_REPORTS,
        User.DELEGATEE_OF_AUTO_DELEGATE_DETAIL_NAV,
        User.DELEGATOR_OF_AUTO_DELEGATE_CONFIG_NAV,
        User.DIRECT_REPORTS,
        User.EMP_INFO,
        User.ETHNICITY_NAV,
        User.EXTERNAL_CODE_OF_SKILL_PROFILE_NAV,
        User.HEAD_OF_UNIT_OF_FO_BUSINESS_UNIT_NAV,
        User.HEAD_OF_UNIT_OF_FO_DEPARTMENT_NAV,
        User.HEAD_OF_UNIT_OF_FO_DIVISION_NAV,
        User.HR,
        User.HR_MANAGER_ID_OF_ONBOARDING_CANDIDATE_INFO_NAV,
        User.HR_REPORTS,
        User.IMPACT_OF_LOSS_NAV,
        User.INCUMBENT_OF_POSITION_NAV,
        User.MANAGER,
        User.MANAGER_ID_OF_ONBOARDING_CANDIDATE_INFO_NAV,
        User.MATRIX_MANAGER,
        User.MATRIX_REPORTS,
        User.NOMINATION_NAV,
        User.NOMINATOR_ID_OF_SPOT_AWARD_NAV,
        User.OWNER_OF_TALENT_POOL_NAV,
        User.PARTICIPANT_USER_ID_1_OF_ONBOARDING_MEETING_EVENT_NAV,
        User.PARTICIPANT_USER_ID_2_OF_ONBOARDING_MEETING_EVENT_NAV,
        User.PARTICIPANT_USER_ID_3_OF_ONBOARDING_MEETING_EVENT_NAV,
        User.PARTICIPANT_USER_ID_4_OF_ONBOARDING_MEETING_EVENT_NAV,
        User.PARTICIPANT_USER_ID_5_OF_ONBOARDING_MEETING_EVENT_NAV,
        User.PERSON_KEY_NAV,
        User.PROCESSOR_ID_OF_ONBOARDING_CANDIDATE_INFO_NAV,
        User.PROXY,
        User.REASON_FOR_LEAVING_NAV,
        User.RISK_OF_LOSS_NAV,
        User.SECOND_MANAGER,
        User.SECOND_REPORTS,
        User.SUBJECT_USER_ID_OF_ACHIEVEMENT_NAV,
        User.SUBJECT_USER_ID_OF_ACTIVITY_NAV,
        User.TALENT_POOL_NAV,
        User.TARGET_ID_OF_TIME_MANAGEMENT_ALERT_NAV,
        User.USER_ID_OF_ACCRUAL_CALCULATION_BASE_NAV,
        User.USER_ID_OF_BUDGET_GROUP_NAV,
        User.USER_ID_OF_DATA_REPLICATION_PROXY_NAV,
        User.USER_ID_OF_EMPLOYEE_PAYROLL_RUN_RESULTS_NAV,
        User.USER_ID_OF_EMPLOYEE_TIME_GROUP_NAV,
        User.USER_ID_OF_EMPLOYEE_TIME_NAV,
        User.USER_ID_OF_EMPLOYEE_TIME_SHEET_NAV,
        User.USER_ID_OF_EXTERNAL_TIME_DATA_NAV,
        User.USER_ID_OF_EXTERNAL_TIME_RECORD_NAV,
        User.USER_ID_OF_HRIS_CHANGE_LOG_DATA_REPLICATION_NAV,
        User.USER_ID_OF_ONBOARDING_CANDIDATE_INFO_NAV,
        User.USER_ID_OF_POSITION_RIGHT_TO_RETURN_NAV,
        User.USER_ID_OF_SPOT_AWARD_BUDGET_NAV,
        User.USER_ID_OF_SPOT_AWARD_NAV,
        User.USER_ID_OF_SPOT_AWARD_REDEMPTION_NAV,
        User.USER_ID_OF_TEMPORARY_TIME_INFORMATION_NAV,
        User.USER_ID_OF_TIME_ACCOUNT_NAV,
        User.USER_ID_OF_TIME_ACCOUNT_SNAPSHOT_NAV,
        User.USER_ID_OF_TIME_COLLECTOR_NAV,
        User.USER_ID_OF_WORK_SCHEDULE_NAV,
        User.USER_PERMISSIONS_NAV,
        User.USER_SYS_ID_OF_ADVANCES_ACCUMULATION_NAV,
        User.USER_SYS_ID_OF_NON_RECURRING_PAYMENT_NAV,
        User.USER_SYS_ID_OF_ONE_TIME_DEDUCTION_NAV,
        User.USER_SYS_ID_OF_RECURRING_DEDUCTION_NAV,
        User.USER_SYS_ID_OF_WORK_ORDER_NAV,
        User.USERS_SYS_ID_OF_EMP_COST_DISTRIBUTION_NAV,
        User.USERS_SYS_ID_OF_EMPLOYEE_DATA_REPLICATION_CONFIRMATION_NAV,
        User.USERS_SYS_ID_OF_EMPLOYEE_DATA_REPLICATION_ELEMENT_NAV,
        User.USERS_SYS_ID_OF_EMPLOYEE_DATA_REPLICATION_NOTIFICATION_NAV,
        User.USERS_SYS_ID_OF_HIRE_DATE_CHANGE_NAV,
        User.USERS_SYS_ID_OF_SECONDARY_ASSIGNMENTS_ITEM_NAV,
        User.WORK_ORDER_OWNER_ID_OF_WORK_ORDER_NAV,
        User.WORKER_OF_PAYMENT_INFORMATION_V_3_NAV
    ];
    /**
     * All fields selector.
     */
    User.ALL_FIELDS = new core_1.AllFields('*', User);
    /**
     * All key fields of the User entity.
     */
    User._keyFields = [User.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property User.
     */
    User._keys = User._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(User = exports.User || (exports.User = {}));
exports.User = User;
//# sourceMappingURL=User.js.map