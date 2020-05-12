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
var UserPermissionsRequestBuilder_1 = require("./UserPermissionsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "UserPermissions" of service "SFOData".
 */
var UserPermissions = /** @class */ (function (_super) {
    __extends(UserPermissions, _super);
    function UserPermissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `UserPermissions`.
     * @returns A builder that constructs instances of entity type `UserPermissions`.
     */
    UserPermissions.builder = function () {
        return core_1.Entity.entityBuilder(UserPermissions);
    };
    /**
     * Returns a request builder to construct requests for operations on the `UserPermissions` entity type.
     * @returns A `UserPermissions` request builder.
     */
    UserPermissions.requestBuilder = function () {
        return new UserPermissionsRequestBuilder_1.UserPermissionsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserPermissions`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UserPermissions`.
     */
    UserPermissions.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, UserPermissions);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    UserPermissions.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for UserPermissions.
     */
    UserPermissions._entityName = 'UserPermissions';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for UserPermissions.
     */
    UserPermissions._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    UserPermissions._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return UserPermissions;
}(core_1.Entity));
exports.UserPermissions = UserPermissions;
(function (UserPermissions) {
    /**
     * Static representation of the [[addressLine1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.ADDRESS_LINE_1 = new core_1.NumberField('addressLine1', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[addressLine2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.ADDRESS_LINE_2 = new core_1.NumberField('addressLine2', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[addressLine3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.ADDRESS_LINE_3 = new core_1.NumberField('addressLine3', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[benchStrength]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.BENCH_STRENGTH = new core_1.NumberField('benchStrength', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[benchStrengthNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.BENCH_STRENGTH_NAV = new core_1.NumberField('benchStrengthNav', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[businessPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.BUSINESS_PHONE = new core_1.NumberField('businessPhone', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[businessSegment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.BUSINESS_SEGMENT = new core_1.NumberField('businessSegment', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[businessSegmentNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.BUSINESS_SEGMENT_NAV = new core_1.NumberField('businessSegmentNav', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[cellPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.CELL_PHONE = new core_1.NumberField('cellPhone', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[citizenship]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.CITIZENSHIP = new core_1.NumberField('citizenship', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.CITY = new core_1.NumberField('city', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[competency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.COMPETENCY = new core_1.NumberField('competency', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[competencyRatingNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.COMPETENCY_RATING_NAV = new core_1.NumberField('competencyRatingNav', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.COUNTRY = new core_1.NumberField('country', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[custom01]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.CUSTOM_01 = new core_1.NumberField('custom01', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[custom02]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.CUSTOM_02 = new core_1.NumberField('custom02', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[custom03]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.CUSTOM_03 = new core_1.NumberField('custom03', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[custom04]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.CUSTOM_04 = new core_1.NumberField('custom04', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[custom05]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.CUSTOM_05 = new core_1.NumberField('custom05', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[custom05Nav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.CUSTOM_05_NAV = new core_1.NumberField('custom05Nav', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[custom06]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.CUSTOM_06 = new core_1.NumberField('custom06', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[custom07]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.CUSTOM_07 = new core_1.NumberField('custom07', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[custom08]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.CUSTOM_08 = new core_1.NumberField('custom08', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[custom09]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.CUSTOM_09 = new core_1.NumberField('custom09', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[custom10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.CUSTOM_10 = new core_1.NumberField('custom10', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[custom11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.CUSTOM_11 = new core_1.NumberField('custom11', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[custom12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.CUSTOM_12 = new core_1.NumberField('custom12', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[custom13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.CUSTOM_13 = new core_1.NumberField('custom13', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[custom14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.CUSTOM_14 = new core_1.NumberField('custom14', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[custom15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.CUSTOM_15 = new core_1.NumberField('custom15', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[customManager]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.CUSTOM_MANAGER = new core_1.NumberField('customManager', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[customReports]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.CUSTOM_REPORTS = new core_1.NumberField('customReports', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[dateOfBirth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.DATE_OF_BIRTH = new core_1.NumberField('dateOfBirth', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[dateOfPosition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.DATE_OF_POSITION = new core_1.NumberField('dateOfPosition', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[defaultFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.DEFAULT_FULL_NAME = new core_1.NumberField('defaultFullName', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[defaultLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.DEFAULT_LOCALE = new core_1.NumberField('defaultLocale', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.DEPARTMENT = new core_1.NumberField('department', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[directReports]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.DIRECT_REPORTS = new core_1.NumberField('directReports', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.DIVISION = new core_1.NumberField('division', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[dummyNominationNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.DUMMY_NOMINATION_NAV = new core_1.NumberField('dummyNominationNav', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[email]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.EMAIL = new core_1.NumberField('email', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[empId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.EMP_ID = new core_1.NumberField('empId', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[empInfo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.EMP_INFO = new core_1.NumberField('empInfo', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[ethnicity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.ETHNICITY = new core_1.NumberField('ethnicity', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[ethnicityNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.ETHNICITY_NAV = new core_1.NumberField('ethnicityNav', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[fax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.FAX = new core_1.NumberField('fax', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.FIRST_NAME = new core_1.NumberField('firstName', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[futureLeader]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.FUTURE_LEADER = new core_1.NumberField('futureLeader', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[gender]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.GENDER = new core_1.NumberField('gender', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[hireDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.HIRE_DATE = new core_1.NumberField('hireDate', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[homePhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.HOME_PHONE = new core_1.NumberField('homePhone', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[hr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.HR = new core_1.NumberField('hr', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[hrReports]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.HR_REPORTS = new core_1.NumberField('hrReports', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[impactOfLoss]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.IMPACT_OF_LOSS = new core_1.NumberField('impactOfLoss', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[impactOfLossNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.IMPACT_OF_LOSS_NAV = new core_1.NumberField('impactOfLossNav', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[jobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.JOB_CODE = new core_1.NumberField('jobCode', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[keyPosition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.KEY_POSITION = new core_1.NumberField('keyPosition', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.LAST_MODIFIED = new core_1.NumberField('lastModified', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.LAST_MODIFIED_DATE_TIME = new core_1.NumberField('lastModifiedDateTime', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[lastModifiedWithTz]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.LAST_MODIFIED_WITH_TZ = new core_1.NumberField('lastModifiedWithTZ', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.LAST_NAME = new core_1.NumberField('lastName', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[lastReviewDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.LAST_REVIEW_DATE = new core_1.NumberField('lastReviewDate', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[level]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.LEVEL = new core_1.NumberField('level', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.LOCATION = new core_1.NumberField('location', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[manager]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.MANAGER = new core_1.NumberField('manager', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[married]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.MARRIED = new core_1.NumberField('married', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[matrix1Label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.MATRIX_1_LABEL = new core_1.NumberField('matrix1Label', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[matrix2Label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.MATRIX_2_LABEL = new core_1.NumberField('matrix2Label', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[matrixManaged]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.MATRIX_MANAGED = new core_1.NumberField('matrixManaged', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[matrixManager]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.MATRIX_MANAGER = new core_1.NumberField('matrixManager', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[matrixReports]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.MATRIX_REPORTS = new core_1.NumberField('matrixReports', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[mi]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.MI = new core_1.NumberField('mi', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[minority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.MINORITY = new core_1.NumberField('minority', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[nationality]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.NATIONALITY = new core_1.NumberField('nationality', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[newToPosition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.NEW_TO_POSITION = new core_1.NumberField('newToPosition', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[nickname]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.NICKNAME = new core_1.NumberField('nickname', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[nominationNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.NOMINATION_NAV = new core_1.NumberField('nominationNav', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[objective]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.OBJECTIVE = new core_1.NumberField('objective', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[onboardingId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.ONBOARDING_ID = new core_1.NumberField('onboardingId', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[password]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.PASSWORD = new core_1.NumberField('password', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[performance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.PERFORMANCE = new core_1.NumberField('performance', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[potential]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.POTENTIAL = new core_1.NumberField('potential', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[proxy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.PROXY = new core_1.NumberField('proxy', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[reasonForLeaving]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.REASON_FOR_LEAVING = new core_1.NumberField('reasonForLeaving', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[reasonForLeavingNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.REASON_FOR_LEAVING_NAV = new core_1.NumberField('reasonForLeavingNav', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[reviewFreq]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.REVIEW_FREQ = new core_1.NumberField('reviewFreq', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[riskOfLoss]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.RISK_OF_LOSS = new core_1.NumberField('riskOfLoss', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[riskOfLossNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.RISK_OF_LOSS_NAV = new core_1.NumberField('riskOfLossNav', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[sciLastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.SCI_LAST_MODIFIED = new core_1.NumberField('sciLastModified', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[secondManager]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.SECOND_MANAGER = new core_1.NumberField('secondManager', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[secondReports]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.SECOND_REPORTS = new core_1.NumberField('secondReports', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[serviceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.SERVICE_DATE = new core_1.NumberField('serviceDate', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[ssn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.SSN = new core_1.NumberField('ssn', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.STATE = new core_1.NumberField('state', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.STATUS = new core_1.NumberField('status', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[suffix]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.SUFFIX = new core_1.NumberField('suffix', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[talentPool]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.TALENT_POOL = new core_1.NumberField('talentPool', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[talentPoolNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.TALENT_POOL_NAV = new core_1.NumberField('talentPoolNav', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[teamMembersSize]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.TEAM_MEMBERS_SIZE = new core_1.NumberField('teamMembersSize', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[timeZone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.TIME_ZONE = new core_1.NumberField('timeZone', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[title]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.TITLE = new core_1.NumberField('title', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[totalTeamSize]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.TOTAL_TEAM_SIZE = new core_1.NumberField('totalTeamSize', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.USER_ID = new core_1.NumberField('userId', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[userPermissionsNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.USER_PERMISSIONS_NAV = new core_1.NumberField('userPermissionsNav', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[username]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.USERNAME = new core_1.NumberField('username', UserPermissions, 'Edm.Byte');
    /**
     * Static representation of the [[zipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissions.ZIP_CODE = new core_1.NumberField('zipCode', UserPermissions, 'Edm.Byte');
    /**
     * All fields of the UserPermissions entity.
     */
    UserPermissions._allFields = [
        UserPermissions.ADDRESS_LINE_1,
        UserPermissions.ADDRESS_LINE_2,
        UserPermissions.ADDRESS_LINE_3,
        UserPermissions.BENCH_STRENGTH,
        UserPermissions.BENCH_STRENGTH_NAV,
        UserPermissions.BUSINESS_PHONE,
        UserPermissions.BUSINESS_SEGMENT,
        UserPermissions.BUSINESS_SEGMENT_NAV,
        UserPermissions.CELL_PHONE,
        UserPermissions.CITIZENSHIP,
        UserPermissions.CITY,
        UserPermissions.COMPETENCY,
        UserPermissions.COMPETENCY_RATING_NAV,
        UserPermissions.COUNTRY,
        UserPermissions.CUSTOM_01,
        UserPermissions.CUSTOM_02,
        UserPermissions.CUSTOM_03,
        UserPermissions.CUSTOM_04,
        UserPermissions.CUSTOM_05,
        UserPermissions.CUSTOM_05_NAV,
        UserPermissions.CUSTOM_06,
        UserPermissions.CUSTOM_07,
        UserPermissions.CUSTOM_08,
        UserPermissions.CUSTOM_09,
        UserPermissions.CUSTOM_10,
        UserPermissions.CUSTOM_11,
        UserPermissions.CUSTOM_12,
        UserPermissions.CUSTOM_13,
        UserPermissions.CUSTOM_14,
        UserPermissions.CUSTOM_15,
        UserPermissions.CUSTOM_MANAGER,
        UserPermissions.CUSTOM_REPORTS,
        UserPermissions.DATE_OF_BIRTH,
        UserPermissions.DATE_OF_POSITION,
        UserPermissions.DEFAULT_FULL_NAME,
        UserPermissions.DEFAULT_LOCALE,
        UserPermissions.DEPARTMENT,
        UserPermissions.DIRECT_REPORTS,
        UserPermissions.DIVISION,
        UserPermissions.DUMMY_NOMINATION_NAV,
        UserPermissions.EMAIL,
        UserPermissions.EMP_ID,
        UserPermissions.EMP_INFO,
        UserPermissions.ETHNICITY,
        UserPermissions.ETHNICITY_NAV,
        UserPermissions.FAX,
        UserPermissions.FIRST_NAME,
        UserPermissions.FUTURE_LEADER,
        UserPermissions.GENDER,
        UserPermissions.HIRE_DATE,
        UserPermissions.HOME_PHONE,
        UserPermissions.HR,
        UserPermissions.HR_REPORTS,
        UserPermissions.IMPACT_OF_LOSS,
        UserPermissions.IMPACT_OF_LOSS_NAV,
        UserPermissions.JOB_CODE,
        UserPermissions.KEY_POSITION,
        UserPermissions.LAST_MODIFIED,
        UserPermissions.LAST_MODIFIED_DATE_TIME,
        UserPermissions.LAST_MODIFIED_WITH_TZ,
        UserPermissions.LAST_NAME,
        UserPermissions.LAST_REVIEW_DATE,
        UserPermissions.LEVEL,
        UserPermissions.LOCATION,
        UserPermissions.MANAGER,
        UserPermissions.MARRIED,
        UserPermissions.MATRIX_1_LABEL,
        UserPermissions.MATRIX_2_LABEL,
        UserPermissions.MATRIX_MANAGED,
        UserPermissions.MATRIX_MANAGER,
        UserPermissions.MATRIX_REPORTS,
        UserPermissions.MI,
        UserPermissions.MINORITY,
        UserPermissions.NATIONALITY,
        UserPermissions.NEW_TO_POSITION,
        UserPermissions.NICKNAME,
        UserPermissions.NOMINATION_NAV,
        UserPermissions.OBJECTIVE,
        UserPermissions.ONBOARDING_ID,
        UserPermissions.PASSWORD,
        UserPermissions.PERFORMANCE,
        UserPermissions.POTENTIAL,
        UserPermissions.PROXY,
        UserPermissions.REASON_FOR_LEAVING,
        UserPermissions.REASON_FOR_LEAVING_NAV,
        UserPermissions.REVIEW_FREQ,
        UserPermissions.RISK_OF_LOSS,
        UserPermissions.RISK_OF_LOSS_NAV,
        UserPermissions.SCI_LAST_MODIFIED,
        UserPermissions.SECOND_MANAGER,
        UserPermissions.SECOND_REPORTS,
        UserPermissions.SERVICE_DATE,
        UserPermissions.SSN,
        UserPermissions.STATE,
        UserPermissions.STATUS,
        UserPermissions.SUFFIX,
        UserPermissions.TALENT_POOL,
        UserPermissions.TALENT_POOL_NAV,
        UserPermissions.TEAM_MEMBERS_SIZE,
        UserPermissions.TIME_ZONE,
        UserPermissions.TITLE,
        UserPermissions.TOTAL_TEAM_SIZE,
        UserPermissions.USER_ID,
        UserPermissions.USER_PERMISSIONS_NAV,
        UserPermissions.USERNAME,
        UserPermissions.ZIP_CODE
    ];
    /**
     * All fields selector.
     */
    UserPermissions.ALL_FIELDS = new core_1.AllFields('*', UserPermissions);
    /**
     * All key fields of the UserPermissions entity.
     */
    UserPermissions._keyFields = [UserPermissions.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property UserPermissions.
     */
    UserPermissions._keys = UserPermissions._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(UserPermissions = exports.UserPermissions || (exports.UserPermissions = {}));
exports.UserPermissions = UserPermissions;
//# sourceMappingURL=UserPermissions.js.map