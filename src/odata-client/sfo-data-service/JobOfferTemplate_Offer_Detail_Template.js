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
var JobOfferTemplate_Offer_Detail_TemplateRequestBuilder_1 = require("./JobOfferTemplate_Offer_Detail_TemplateRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobOfferTemplate_Offer_Detail_Template" of service "SFOData".
 */
var JobOfferTemplate_Offer_Detail_Template = /** @class */ (function (_super) {
    __extends(JobOfferTemplate_Offer_Detail_Template, _super);
    function JobOfferTemplate_Offer_Detail_Template() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobOfferTemplate_Offer_Detail_Template`.
     * @returns A builder that constructs instances of entity type `JobOfferTemplate_Offer_Detail_Template`.
     */
    JobOfferTemplate_Offer_Detail_Template.builder = function () {
        return core_1.Entity.entityBuilder(JobOfferTemplate_Offer_Detail_Template);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobOfferTemplate_Offer_Detail_Template` entity type.
     * @returns A `JobOfferTemplate_Offer_Detail_Template` request builder.
     */
    JobOfferTemplate_Offer_Detail_Template.requestBuilder = function () {
        return new JobOfferTemplate_Offer_Detail_TemplateRequestBuilder_1.JobOfferTemplate_Offer_Detail_TemplateRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobOfferTemplate_Offer_Detail_Template`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobOfferTemplate_Offer_Detail_Template`.
     */
    JobOfferTemplate_Offer_Detail_Template.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobOfferTemplate_Offer_Detail_Template);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobOfferTemplate_Offer_Detail_Template.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobOfferTemplate_Offer_Detail_Template.
     */
    JobOfferTemplate_Offer_Detail_Template._entityName = 'JobOfferTemplate_Offer_Detail_Template';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobOfferTemplate_Offer_Detail_Template.
     */
    JobOfferTemplate_Offer_Detail_Template._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobOfferTemplate_Offer_Detail_Template._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobOfferTemplate_Offer_Detail_Template;
}(core_1.Entity));
exports.JobOfferTemplate_Offer_Detail_Template = JobOfferTemplate_Offer_Detail_Template;
var FoCostCenter_1 = require("./FoCostCenter");
var PicklistOption_1 = require("./PicklistOption");
var FoDepartment_1 = require("./FoDepartment");
var FoDivision_1 = require("./FoDivision");
var JobRequisitionOperator_1 = require("./JobRequisitionOperator");
var FoLocation_1 = require("./FoLocation");
var Attachment_1 = require("./Attachment");
(function (JobOfferTemplate_Offer_Detail_Template) {
    /**
     * Static representation of the [[contactEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.CONTACT_EMAIL = new core_1.StringField('contactEmail', JobOfferTemplate_Offer_Detail_Template, 'Edm.String');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.CURRENCY = new core_1.StringField('currency', JobOfferTemplate_Offer_Detail_Template, 'Edm.String');
    /**
     * Static representation of the [[customBaseSal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.CUSTOM_BASE_SAL = new core_1.BigNumberField('customBaseSal', JobOfferTemplate_Offer_Detail_Template, 'Edm.Decimal');
    /**
     * Static representation of the [[customCarAllowAmt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.CUSTOM_CAR_ALLOW_AMT = new core_1.BigNumberField('customCarAllowAmt', JobOfferTemplate_Offer_Detail_Template, 'Edm.Decimal');
    /**
     * Static representation of the [[customFinalSignOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.CUSTOM_FINAL_SIGN_ON = new core_1.BigNumberField('customFinalSignOn', JobOfferTemplate_Offer_Detail_Template, 'Edm.Decimal');
    /**
     * Static representation of the [[customLti]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.CUSTOM_LTI = new core_1.BigNumberField('customLTI', JobOfferTemplate_Offer_Detail_Template, 'Edm.Decimal');
    /**
     * Static representation of the [[customOtherAllowanceDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.CUSTOM_OTHER_ALLOWANCE_DETAILS = new core_1.StringField('customOtherAllowanceDetails', JobOfferTemplate_Offer_Detail_Template, 'Edm.String');
    /**
     * Static representation of the [[customOtherCompDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.CUSTOM_OTHER_COMP_DETAILS = new core_1.StringField('customOtherCompDetails', JobOfferTemplate_Offer_Detail_Template, 'Edm.String');
    /**
     * Static representation of the [[customRelocAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.CUSTOM_RELOC_AMOUNT = new core_1.BigNumberField('customRelocAmount', JobOfferTemplate_Offer_Detail_Template, 'Edm.Decimal');
    /**
     * Static representation of the [[customTargetBonusAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.CUSTOM_TARGET_BONUS_AMOUNT = new core_1.BigNumberField('customTargetBonusAmount', JobOfferTemplate_Offer_Detail_Template, 'Edm.Decimal');
    /**
     * Static representation of the [[endDateContract]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.END_DATE_CONTRACT = new core_1.DateField('endDateContract', JobOfferTemplate_Offer_Detail_Template, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.FIRST_NAME = new core_1.StringField('firstName', JobOfferTemplate_Offer_Detail_Template, 'Edm.String');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.ID = new core_1.StringField('id', JobOfferTemplate_Offer_Detail_Template, 'Edm.String');
    /**
     * Static representation of the [[jobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.JOB_CODE = new core_1.StringField('jobCode', JobOfferTemplate_Offer_Detail_Template, 'Edm.String');
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.LAST_NAME = new core_1.StringField('lastName', JobOfferTemplate_Offer_Detail_Template, 'Edm.String');
    /**
     * Static representation of the [[locationObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.LOCATION_OBJ_CODE = new core_1.StringField('location_obj_code', JobOfferTemplate_Offer_Detail_Template, 'Edm.String');
    /**
     * Static representation of the [[positionNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.POSITION_NUMBER = new core_1.StringField('positionNumber', JobOfferTemplate_Offer_Detail_Template, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.START_DATE = new core_1.DateField('startDate', JobOfferTemplate_Offer_Detail_Template, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[templateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.TEMPLATE_ID = new core_1.BigNumberField('templateId', JobOfferTemplate_Offer_Detail_Template, 'Edm.Int64');
    /**
     * Static representation of the [[title]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.TITLE = new core_1.StringField('title', JobOfferTemplate_Offer_Detail_Template, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[costCenterObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.COST_CENTER_OBJ = new core_1.OneToOneLink('costCenter_obj', JobOfferTemplate_Offer_Detail_Template, FoCostCenter_1.FoCostCenter);
    /**
     * Static representation of the one-to-one navigation property [[customBasePayFreq]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.CUSTOM_BASE_PAY_FREQ = new core_1.OneToOneLink('customBasePayFreq', JobOfferTemplate_Offer_Detail_Template, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[customCarAllowRequired]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.CUSTOM_CAR_ALLOW_REQUIRED = new core_1.OneToOneLink('customCarAllowRequired', JobOfferTemplate_Offer_Detail_Template, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[customNoticeDuringProbPeriod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.CUSTOM_NOTICE_DURING_PROB_PERIOD = new core_1.OneToOneLink('customNoticeDuringProbPeriod', JobOfferTemplate_Offer_Detail_Template, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[customNoticePeriod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.CUSTOM_NOTICE_PERIOD = new core_1.OneToOneLink('customNoticePeriod', JobOfferTemplate_Offer_Detail_Template, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[customProbPeriod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.CUSTOM_PROB_PERIOD = new core_1.OneToOneLink('customProbPeriod', JobOfferTemplate_Offer_Detail_Template, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[customTypeHire]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.CUSTOM_TYPE_HIRE = new core_1.OneToOneLink('customTypeHire', JobOfferTemplate_Offer_Detail_Template, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[departmentObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.DEPARTMENT_OBJ = new core_1.OneToOneLink('department_obj', JobOfferTemplate_Offer_Detail_Template, FoDepartment_1.FoDepartment);
    /**
     * Static representation of the one-to-one navigation property [[divisionObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.DIVISION_OBJ = new core_1.OneToOneLink('division_obj', JobOfferTemplate_Offer_Detail_Template, FoDivision_1.FoDivision);
    /**
     * Static representation of the one-to-many navigation property [[hiringManagerName]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.HIRING_MANAGER_NAME = new core_1.Link('hiringManagerName', JobOfferTemplate_Offer_Detail_Template, JobRequisitionOperator_1.JobRequisitionOperator);
    /**
     * Static representation of the one-to-many navigation property [[locationObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.LOCATION_OBJ = new core_1.Link('location_obj', JobOfferTemplate_Offer_Detail_Template, FoLocation_1.FoLocation);
    /**
     * Static representation of the one-to-one navigation property [[resume]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobOfferTemplate_Offer_Detail_Template.RESUME = new core_1.OneToOneLink('resume', JobOfferTemplate_Offer_Detail_Template, Attachment_1.Attachment);
    /**
     * All fields of the JobOfferTemplate_Offer_Detail_Template entity.
     */
    JobOfferTemplate_Offer_Detail_Template._allFields = [
        JobOfferTemplate_Offer_Detail_Template.CONTACT_EMAIL,
        JobOfferTemplate_Offer_Detail_Template.CURRENCY,
        JobOfferTemplate_Offer_Detail_Template.CUSTOM_BASE_SAL,
        JobOfferTemplate_Offer_Detail_Template.CUSTOM_CAR_ALLOW_AMT,
        JobOfferTemplate_Offer_Detail_Template.CUSTOM_FINAL_SIGN_ON,
        JobOfferTemplate_Offer_Detail_Template.CUSTOM_LTI,
        JobOfferTemplate_Offer_Detail_Template.CUSTOM_OTHER_ALLOWANCE_DETAILS,
        JobOfferTemplate_Offer_Detail_Template.CUSTOM_OTHER_COMP_DETAILS,
        JobOfferTemplate_Offer_Detail_Template.CUSTOM_RELOC_AMOUNT,
        JobOfferTemplate_Offer_Detail_Template.CUSTOM_TARGET_BONUS_AMOUNT,
        JobOfferTemplate_Offer_Detail_Template.END_DATE_CONTRACT,
        JobOfferTemplate_Offer_Detail_Template.FIRST_NAME,
        JobOfferTemplate_Offer_Detail_Template.ID,
        JobOfferTemplate_Offer_Detail_Template.JOB_CODE,
        JobOfferTemplate_Offer_Detail_Template.LAST_NAME,
        JobOfferTemplate_Offer_Detail_Template.LOCATION_OBJ_CODE,
        JobOfferTemplate_Offer_Detail_Template.POSITION_NUMBER,
        JobOfferTemplate_Offer_Detail_Template.START_DATE,
        JobOfferTemplate_Offer_Detail_Template.TEMPLATE_ID,
        JobOfferTemplate_Offer_Detail_Template.TITLE,
        JobOfferTemplate_Offer_Detail_Template.COST_CENTER_OBJ,
        JobOfferTemplate_Offer_Detail_Template.CUSTOM_BASE_PAY_FREQ,
        JobOfferTemplate_Offer_Detail_Template.CUSTOM_CAR_ALLOW_REQUIRED,
        JobOfferTemplate_Offer_Detail_Template.CUSTOM_NOTICE_DURING_PROB_PERIOD,
        JobOfferTemplate_Offer_Detail_Template.CUSTOM_NOTICE_PERIOD,
        JobOfferTemplate_Offer_Detail_Template.CUSTOM_PROB_PERIOD,
        JobOfferTemplate_Offer_Detail_Template.CUSTOM_TYPE_HIRE,
        JobOfferTemplate_Offer_Detail_Template.DEPARTMENT_OBJ,
        JobOfferTemplate_Offer_Detail_Template.DIVISION_OBJ,
        JobOfferTemplate_Offer_Detail_Template.HIRING_MANAGER_NAME,
        JobOfferTemplate_Offer_Detail_Template.LOCATION_OBJ,
        JobOfferTemplate_Offer_Detail_Template.RESUME
    ];
    /**
     * All fields selector.
     */
    JobOfferTemplate_Offer_Detail_Template.ALL_FIELDS = new core_1.AllFields('*', JobOfferTemplate_Offer_Detail_Template);
    /**
     * All key fields of the JobOfferTemplate_Offer_Detail_Template entity.
     */
    JobOfferTemplate_Offer_Detail_Template._keyFields = [JobOfferTemplate_Offer_Detail_Template.TEMPLATE_ID];
    /**
     * Mapping of all key field names to the respective static field property JobOfferTemplate_Offer_Detail_Template.
     */
    JobOfferTemplate_Offer_Detail_Template._keys = JobOfferTemplate_Offer_Detail_Template._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobOfferTemplate_Offer_Detail_Template = exports.JobOfferTemplate_Offer_Detail_Template || (exports.JobOfferTemplate_Offer_Detail_Template = {}));
exports.JobOfferTemplate_Offer_Detail_Template = JobOfferTemplate_Offer_Detail_Template;
//# sourceMappingURL=JobOfferTemplate_Offer_Detail_Template.js.map