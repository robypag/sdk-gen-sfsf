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
var PositionRequestBuilder_1 = require("./PositionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Position" of service "SFOData".
 */
var Position = /** @class */ (function (_super) {
    __extends(Position, _super);
    function Position() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Position`.
     * @returns A builder that constructs instances of entity type `Position`.
     */
    Position.builder = function () {
        return core_1.Entity.entityBuilder(Position);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Position` entity type.
     * @returns A `Position` request builder.
     */
    Position.requestBuilder = function () {
        return new PositionRequestBuilder_1.PositionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Position`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Position`.
     */
    Position.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Position);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Position.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Position.
     */
    Position._entityName = 'Position';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Position.
     */
    Position._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Position._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Position;
}(core_1.Entity));
exports.Position = Position;
var FoBusinessUnit_1 = require("./FoBusinessUnit");
var PickListValueV2_1 = require("./PickListValueV2");
var FoCompany_1 = require("./FoCompany");
var FoCostCenter_1 = require("./FoCostCenter");
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var Attachment_1 = require("./Attachment");
var FoDepartment_1 = require("./FoDepartment");
var FoDivision_1 = require("./FoDivision");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var FoJobCode_1 = require("./FoJobCode");
var FoLocation_1 = require("./FoLocation");
var FoPayGrade_1 = require("./FoPayGrade");
var FoPayRange_1 = require("./FoPayRange");
var PositionMatrixRelationship_1 = require("./PositionMatrixRelationship");
var RightToReturn_1 = require("./RightToReturn");
var Successor_1 = require("./Successor");
var WfRequest_1 = require("./WfRequest");
(function (Position) {
    /**
     * Static representation of the [[businessUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.BUSINESS_UNIT = new core_1.StringField('businessUnit', Position, 'Edm.String');
    /**
     * Static representation of the [[changeReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.CHANGE_REASON = new core_1.StringField('changeReason', Position, 'Edm.String');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.CODE = new core_1.StringField('code', Position, 'Edm.String');
    /**
     * Static representation of the [[comment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.COMMENT = new core_1.StringField('comment', Position, 'Edm.String');
    /**
     * Static representation of the [[company]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.COMPANY = new core_1.StringField('company', Position, 'Edm.String');
    /**
     * Static representation of the [[costCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.COST_CENTER = new core_1.StringField('costCenter', Position, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.CREATED_BY = new core_1.StringField('createdBy', Position, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', Position, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[creationSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.CREATION_SOURCE = new core_1.StringField('creationSource', Position, 'Edm.String');
    /**
     * Static representation of the [[criticality]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.CRITICALITY = new core_1.BigNumberField('criticality', Position, 'Edm.Int64');
    /**
     * Static representation of the [[custDuration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.CUST_DURATION = new core_1.StringField('cust_duration', Position, 'Edm.String');
    /**
     * Static representation of the [[custEmploymentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.CUST_EMPLOYMENT_TYPE = new core_1.StringField('cust_employmentType', Position, 'Edm.String');
    /**
     * Static representation of the [[custIncentivePlan]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.CUST_INCENTIVE_PLAN = new core_1.StringField('cust_incentivePlan', Position, 'Edm.String');
    /**
     * Static representation of the [[custIsFullTimeEmp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.CUST_IS_FULL_TIME_EMP = new core_1.StringField('cust_isFullTimeEmp', Position, 'Edm.String');
    /**
     * Static representation of the [[custMax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.CUST_MAX = new core_1.BigNumberField('cust_max', Position, 'Edm.Int64');
    /**
     * Static representation of the [[custMid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.CUST_MID = new core_1.BigNumberField('cust_mid', Position, 'Edm.Int64');
    /**
     * Static representation of the [[custMin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.CUST_MIN = new core_1.BigNumberField('cust_min', Position, 'Edm.Int64');
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.DEPARTMENT = new core_1.StringField('department', Position, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.DESCRIPTION = new core_1.StringField('description', Position, 'Edm.String');
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.DIVISION = new core_1.StringField('division', Position, 'Edm.String');
    /**
     * Static representation of the [[effectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.EFFECTIVE_END_DATE = new core_1.DateField('effectiveEndDate', Position, 'Edm.DateTime');
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.EFFECTIVE_START_DATE = new core_1.DateField('effectiveStartDate', Position, 'Edm.DateTime');
    /**
     * Static representation of the [[effectiveStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.EFFECTIVE_STATUS = new core_1.StringField('effectiveStatus', Position, 'Edm.String');
    /**
     * Static representation of the [[employeeClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.EMPLOYEE_CLASS = new core_1.StringField('employeeClass', Position, 'Edm.String');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', Position, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', Position, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.EXTERNAL_NAME_EN_DEBUG = new core_1.StringField('externalName_en_DEBUG', Position, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', Position, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', Position, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', Position, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.EXTERNAL_NAME_ES_MX = new core_1.StringField('externalName_es_MX', Position, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.EXTERNAL_NAME_FR_CA = new core_1.StringField('externalName_fr_CA', Position, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', Position, 'Edm.String');
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.EXTERNAL_NAME_IT_IT = new core_1.StringField('externalName_it_IT', Position, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', Position, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', Position, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', Position, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', Position, 'Edm.String');
    /**
     * Static representation of the [[incumbent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.INCUMBENT = new core_1.StringField('incumbent', Position, 'Edm.String');
    /**
     * Static representation of the [[jobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.JOB_CODE = new core_1.StringField('jobCode', Position, 'Edm.String');
    /**
     * Static representation of the [[jobLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.JOB_LEVEL = new core_1.StringField('jobLevel', Position, 'Edm.String');
    /**
     * Static representation of the [[jobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.JOB_TITLE = new core_1.StringField('jobTitle', Position, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', Position, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', Position, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[legacyPositionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.LEGACY_POSITION_ID = new core_1.BigNumberField('legacyPositionId', Position, 'Edm.Int64');
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.LOCATION = new core_1.StringField('location', Position, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemOptimisticLockUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.MDF_SYSTEM_OPTIMISTIC_LOCK_UUID = new core_1.StringField('mdfSystemOptimisticLockUUID', Position, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', Position, 'Edm.String');
    /**
     * Static representation of the [[multipleIncumbentsAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.MULTIPLE_INCUMBENTS_ALLOWED = new core_1.BooleanField('multipleIncumbentsAllowed', Position, 'Edm.Boolean');
    /**
     * Static representation of the [[payGrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.PAY_GRADE = new core_1.StringField('payGrade', Position, 'Edm.String');
    /**
     * Static representation of the [[payRange]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.PAY_RANGE = new core_1.StringField('payRange', Position, 'Edm.String');
    /**
     * Static representation of the [[positionControlled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.POSITION_CONTROLLED = new core_1.BooleanField('positionControlled', Position, 'Edm.Boolean');
    /**
     * Static representation of the [[positionCriticality]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.POSITION_CRITICALITY = new core_1.StringField('positionCriticality', Position, 'Edm.String');
    /**
     * Static representation of the [[positionTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.POSITION_TITLE = new core_1.StringField('positionTitle', Position, 'Edm.String');
    /**
     * Static representation of the [[regularTemporary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.REGULAR_TEMPORARY = new core_1.StringField('regularTemporary', Position, 'Edm.String');
    /**
     * Static representation of the [[standardHours]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.STANDARD_HOURS = new core_1.BigNumberField('standardHours', Position, 'Edm.Decimal');
    /**
     * Static representation of the [[targetFte]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.TARGET_FTE = new core_1.BigNumberField('targetFTE', Position, 'Edm.Decimal');
    /**
     * Static representation of the [[technicalParameters]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.TECHNICAL_PARAMETERS = new core_1.StringField('technicalParameters', Position, 'Edm.String');
    /**
     * Static representation of the [[transactionSequence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.TRANSACTION_SEQUENCE = new core_1.BigNumberField('transactionSequence', Position, 'Edm.Int64');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.TYPE = new core_1.StringField('type', Position, 'Edm.String');
    /**
     * Static representation of the [[vacant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.VACANT = new core_1.BooleanField('vacant', Position, 'Edm.Boolean');
    /**
     * Static representation of the one-to-one navigation property [[businessUnitNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.BUSINESS_UNIT_NAV = new core_1.OneToOneLink('businessUnitNav', Position, FoBusinessUnit_1.FoBusinessUnit);
    /**
     * Static representation of the one-to-one navigation property [[changeReasonNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.CHANGE_REASON_NAV = new core_1.OneToOneLink('changeReasonNav', Position, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-one navigation property [[companyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.COMPANY_NAV = new core_1.OneToOneLink('companyNav', Position, FoCompany_1.FoCompany);
    /**
     * Static representation of the one-to-one navigation property [[costCenterNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.COST_CENTER_NAV = new core_1.OneToOneLink('costCenterNav', Position, FoCostCenter_1.FoCostCenter);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', Position, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[creationSourceNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.CREATION_SOURCE_NAV = new core_1.OneToOneLink('creationSourceNav', Position, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[custAttachmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.CUST_ATTACHMENT_NAV = new core_1.OneToOneLink('cust_attachmentNav', Position, Attachment_1.Attachment);
    /**
     * Static representation of the one-to-one navigation property [[custDurationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.CUST_DURATION_NAV = new core_1.OneToOneLink('cust_durationNav', Position, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-one navigation property [[custEmploymentTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.CUST_EMPLOYMENT_TYPE_NAV = new core_1.OneToOneLink('cust_employmentTypeNav', Position, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-one navigation property [[custIsFullTimeEmpNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.CUST_IS_FULL_TIME_EMP_NAV = new core_1.OneToOneLink('cust_isFullTimeEmpNav', Position, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-one navigation property [[departmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.DEPARTMENT_NAV = new core_1.OneToOneLink('departmentNav', Position, FoDepartment_1.FoDepartment);
    /**
     * Static representation of the one-to-one navigation property [[divisionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.DIVISION_NAV = new core_1.OneToOneLink('divisionNav', Position, FoDivision_1.FoDivision);
    /**
     * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.EFFECTIVE_STATUS_NAV = new core_1.OneToOneLink('effectiveStatusNav', Position, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[employeeClassNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.EMPLOYEE_CLASS_NAV = new core_1.OneToOneLink('employeeClassNav', Position, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.EXTERNAL_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('externalNameTranslationTextNav', Position, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[incumbentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.INCUMBENT_NAV = new core_1.OneToOneLink('incumbentNav', Position, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[jobCodeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.JOB_CODE_NAV = new core_1.OneToOneLink('jobCodeNav', Position, FoJobCode_1.FoJobCode);
    /**
     * Static representation of the one-to-one navigation property [[jobLevelNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.JOB_LEVEL_NAV = new core_1.OneToOneLink('jobLevelNav', Position, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', Position, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[locationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.LOCATION_NAV = new core_1.OneToOneLink('locationNav', Position, FoLocation_1.FoLocation);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', Position, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[parentPosition]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.PARENT_POSITION = new core_1.OneToOneLink('parentPosition', Position, Position);
    /**
     * Static representation of the one-to-one navigation property [[payGradeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.PAY_GRADE_NAV = new core_1.OneToOneLink('payGradeNav', Position, FoPayGrade_1.FoPayGrade);
    /**
     * Static representation of the one-to-one navigation property [[payRangeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.PAY_RANGE_NAV = new core_1.OneToOneLink('payRangeNav', Position, FoPayRange_1.FoPayRange);
    /**
     * Static representation of the one-to-one navigation property [[positionCriticalityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.POSITION_CRITICALITY_NAV = new core_1.OneToOneLink('positionCriticalityNav', Position, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-many navigation property [[positionMatrixRelationship]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.POSITION_MATRIX_RELATIONSHIP = new core_1.Link('positionMatrixRelationship', Position, PositionMatrixRelationship_1.PositionMatrixRelationship);
    /**
     * Static representation of the one-to-one navigation property [[regularTemporaryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.REGULAR_TEMPORARY_NAV = new core_1.OneToOneLink('regularTemporaryNav', Position, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-many navigation property [[rightToReturn]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.RIGHT_TO_RETURN = new core_1.Link('rightToReturn', Position, RightToReturn_1.RightToReturn);
    /**
     * Static representation of the one-to-many navigation property [[successorNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.SUCCESSOR_NAV = new core_1.Link('successorNav', Position, Successor_1.Successor);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Position.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', Position, WfRequest_1.WfRequest);
    /**
     * All fields of the Position entity.
     */
    Position._allFields = [
        Position.BUSINESS_UNIT,
        Position.CHANGE_REASON,
        Position.CODE,
        Position.COMMENT,
        Position.COMPANY,
        Position.COST_CENTER,
        Position.CREATED_BY,
        Position.CREATED_DATE_TIME,
        Position.CREATION_SOURCE,
        Position.CRITICALITY,
        Position.CUST_DURATION,
        Position.CUST_EMPLOYMENT_TYPE,
        Position.CUST_INCENTIVE_PLAN,
        Position.CUST_IS_FULL_TIME_EMP,
        Position.CUST_MAX,
        Position.CUST_MID,
        Position.CUST_MIN,
        Position.DEPARTMENT,
        Position.DESCRIPTION,
        Position.DIVISION,
        Position.EFFECTIVE_END_DATE,
        Position.EFFECTIVE_START_DATE,
        Position.EFFECTIVE_STATUS,
        Position.EMPLOYEE_CLASS,
        Position.EXTERNAL_NAME_DE_DE,
        Position.EXTERNAL_NAME_DEFAULT_VALUE,
        Position.EXTERNAL_NAME_EN_DEBUG,
        Position.EXTERNAL_NAME_EN_GB,
        Position.EXTERNAL_NAME_EN_US,
        Position.EXTERNAL_NAME_ES_ES,
        Position.EXTERNAL_NAME_ES_MX,
        Position.EXTERNAL_NAME_FR_CA,
        Position.EXTERNAL_NAME_FR_FR,
        Position.EXTERNAL_NAME_IT_IT,
        Position.EXTERNAL_NAME_LOCALIZED,
        Position.EXTERNAL_NAME_NL_NL,
        Position.EXTERNAL_NAME_PT_BR,
        Position.EXTERNAL_NAME_ZH_CN,
        Position.INCUMBENT,
        Position.JOB_CODE,
        Position.JOB_LEVEL,
        Position.JOB_TITLE,
        Position.LAST_MODIFIED_BY,
        Position.LAST_MODIFIED_DATE_TIME,
        Position.LEGACY_POSITION_ID,
        Position.LOCATION,
        Position.MDF_SYSTEM_OPTIMISTIC_LOCK_UUID,
        Position.MDF_SYSTEM_RECORD_STATUS,
        Position.MULTIPLE_INCUMBENTS_ALLOWED,
        Position.PAY_GRADE,
        Position.PAY_RANGE,
        Position.POSITION_CONTROLLED,
        Position.POSITION_CRITICALITY,
        Position.POSITION_TITLE,
        Position.REGULAR_TEMPORARY,
        Position.STANDARD_HOURS,
        Position.TARGET_FTE,
        Position.TECHNICAL_PARAMETERS,
        Position.TRANSACTION_SEQUENCE,
        Position.TYPE,
        Position.VACANT,
        Position.BUSINESS_UNIT_NAV,
        Position.CHANGE_REASON_NAV,
        Position.COMPANY_NAV,
        Position.COST_CENTER_NAV,
        Position.CREATED_BY_NAV,
        Position.CREATION_SOURCE_NAV,
        Position.CUST_ATTACHMENT_NAV,
        Position.CUST_DURATION_NAV,
        Position.CUST_EMPLOYMENT_TYPE_NAV,
        Position.CUST_IS_FULL_TIME_EMP_NAV,
        Position.DEPARTMENT_NAV,
        Position.DIVISION_NAV,
        Position.EFFECTIVE_STATUS_NAV,
        Position.EMPLOYEE_CLASS_NAV,
        Position.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
        Position.INCUMBENT_NAV,
        Position.JOB_CODE_NAV,
        Position.JOB_LEVEL_NAV,
        Position.LAST_MODIFIED_BY_NAV,
        Position.LOCATION_NAV,
        Position.MDF_SYSTEM_RECORD_STATUS_NAV,
        Position.PARENT_POSITION,
        Position.PAY_GRADE_NAV,
        Position.PAY_RANGE_NAV,
        Position.POSITION_CRITICALITY_NAV,
        Position.POSITION_MATRIX_RELATIONSHIP,
        Position.REGULAR_TEMPORARY_NAV,
        Position.RIGHT_TO_RETURN,
        Position.SUCCESSOR_NAV,
        Position.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    Position.ALL_FIELDS = new core_1.AllFields('*', Position);
    /**
     * All key fields of the Position entity.
     */
    Position._keyFields = [Position.CODE, Position.EFFECTIVE_START_DATE];
    /**
     * Mapping of all key field names to the respective static field property Position.
     */
    Position._keys = Position._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Position = exports.Position || (exports.Position = {}));
exports.Position = Position;
//# sourceMappingURL=Position.js.map