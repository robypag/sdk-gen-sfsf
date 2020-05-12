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
var FoDynamicRoleRequestBuilder_1 = require("./FoDynamicRoleRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FODynamicRole" of service "SFOData".
 */
var FoDynamicRole = /** @class */ (function (_super) {
    __extends(FoDynamicRole, _super);
    function FoDynamicRole() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoDynamicRole`.
     * @returns A builder that constructs instances of entity type `FoDynamicRole`.
     */
    FoDynamicRole.builder = function () {
        return core_1.Entity.entityBuilder(FoDynamicRole);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoDynamicRole` entity type.
     * @returns A `FoDynamicRole` request builder.
     */
    FoDynamicRole.requestBuilder = function () {
        return new FoDynamicRoleRequestBuilder_1.FoDynamicRoleRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoDynamicRole`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoDynamicRole`.
     */
    FoDynamicRole.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoDynamicRole);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoDynamicRole.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoDynamicRole.
     */
    FoDynamicRole._entityName = 'FODynamicRole';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoDynamicRole.
     */
    FoDynamicRole._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoDynamicRole._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoDynamicRole;
}(core_1.Entity));
exports.FoDynamicRole = FoDynamicRole;
var FoBusinessUnit_1 = require("./FoBusinessUnit");
var FoCompany_1 = require("./FoCompany");
var FoCostCenter_1 = require("./FoCostCenter");
var FoDepartment_1 = require("./FoDepartment");
var FoTranslation_1 = require("./FoTranslation");
var FoDivision_1 = require("./FoDivision");
var DynamicGroup_1 = require("./DynamicGroup");
var FoEventReason_1 = require("./FoEventReason");
var FoJobCode_1 = require("./FoJobCode");
var FoLocation_1 = require("./FoLocation");
var FoPayGrade_1 = require("./FoPayGrade");
var FoPayGroup_1 = require("./FoPayGroup");
var User_1 = require("./User");
var Position_1 = require("./Position");
(function (FoDynamicRole) {
    /**
     * Static representation of the [[businessUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.BUSINESS_UNIT = new core_1.StringField('businessUnit', FoDynamicRole, 'Edm.String');
    /**
     * Static representation of the [[company]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.COMPANY = new core_1.StringField('company', FoDynamicRole, 'Edm.String');
    /**
     * Static representation of the [[costCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.COST_CENTER = new core_1.StringField('costCenter', FoDynamicRole, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.CREATED_BY = new core_1.StringField('createdBy', FoDynamicRole, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoDynamicRole, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.CREATED_ON = new core_1.DateField('createdOn', FoDynamicRole, 'Edm.DateTime');
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.DEPARTMENT = new core_1.StringField('department', FoDynamicRole, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.DESCRIPTION = new core_1.StringField('description', FoDynamicRole, 'Edm.String');
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.DIVISION = new core_1.StringField('division', FoDynamicRole, 'Edm.String');
    /**
     * Static representation of the [[dynamicGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.DYNAMIC_GROUP = new core_1.StringField('dynamicGroup', FoDynamicRole, 'Edm.String');
    /**
     * Static representation of the [[dynamicRoleAssignmentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.DYNAMIC_ROLE_ASSIGNMENT_ID = new core_1.BigNumberField('dynamicRoleAssignmentId', FoDynamicRole, 'Edm.Decimal');
    /**
     * Static representation of the [[eventReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.EVENT_REASON = new core_1.StringField('eventReason', FoDynamicRole, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.EXTERNAL_CODE = new core_1.StringField('externalCode', FoDynamicRole, 'Edm.String');
    /**
     * Static representation of the [[jobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.JOB_CODE = new core_1.StringField('jobCode', FoDynamicRole, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoDynamicRole, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoDynamicRole, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoDynamicRole, 'Edm.DateTime');
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.LOCATION = new core_1.StringField('location', FoDynamicRole, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.NAME = new core_1.StringField('name', FoDynamicRole, 'Edm.String');
    /**
     * Static representation of the [[payGrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.PAY_GRADE = new core_1.StringField('payGrade', FoDynamicRole, 'Edm.String');
    /**
     * Static representation of the [[payGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.PAY_GROUP = new core_1.StringField('payGroup', FoDynamicRole, 'Edm.String');
    /**
     * Static representation of the [[person]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.PERSON = new core_1.StringField('person', FoDynamicRole, 'Edm.String');
    /**
     * Static representation of the [[position]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.POSITION = new core_1.StringField('position', FoDynamicRole, 'Edm.String');
    /**
     * Static representation of the [[resolverType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.RESOLVER_TYPE = new core_1.StringField('resolverType', FoDynamicRole, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[businessUnitNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.BUSINESS_UNIT_NAV = new core_1.Link('businessUnitNav', FoDynamicRole, FoBusinessUnit_1.FoBusinessUnit);
    /**
     * Static representation of the one-to-many navigation property [[companyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.COMPANY_NAV = new core_1.Link('companyNav', FoDynamicRole, FoCompany_1.FoCompany);
    /**
     * Static representation of the one-to-many navigation property [[costCenterNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.COST_CENTER_NAV = new core_1.Link('costCenterNav', FoDynamicRole, FoCostCenter_1.FoCostCenter);
    /**
     * Static representation of the one-to-many navigation property [[departmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.DEPARTMENT_NAV = new core_1.Link('departmentNav', FoDynamicRole, FoDepartment_1.FoDepartment);
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.DESCRIPTION_TRANSLATION_NAV = new core_1.OneToOneLink('descriptionTranslationNav', FoDynamicRole, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-many navigation property [[divisionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.DIVISION_NAV = new core_1.Link('divisionNav', FoDynamicRole, FoDivision_1.FoDivision);
    /**
     * Static representation of the one-to-one navigation property [[dynamicGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.DYNAMIC_GROUP_NAV = new core_1.OneToOneLink('dynamicGroupNav', FoDynamicRole, DynamicGroup_1.DynamicGroup);
    /**
     * Static representation of the one-to-many navigation property [[eventReasonNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.EVENT_REASON_NAV = new core_1.Link('eventReasonNav', FoDynamicRole, FoEventReason_1.FoEventReason);
    /**
     * Static representation of the one-to-many navigation property [[jobCodeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.JOB_CODE_NAV = new core_1.Link('jobCodeNav', FoDynamicRole, FoJobCode_1.FoJobCode);
    /**
     * Static representation of the one-to-many navigation property [[locationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.LOCATION_NAV = new core_1.Link('locationNav', FoDynamicRole, FoLocation_1.FoLocation);
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.NAME_TRANSLATION_NAV = new core_1.OneToOneLink('nameTranslationNav', FoDynamicRole, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-many navigation property [[payGradeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.PAY_GRADE_NAV = new core_1.Link('payGradeNav', FoDynamicRole, FoPayGrade_1.FoPayGrade);
    /**
     * Static representation of the one-to-many navigation property [[payGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.PAY_GROUP_NAV = new core_1.Link('payGroupNav', FoDynamicRole, FoPayGroup_1.FoPayGroup);
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.PERSON_NAV = new core_1.OneToOneLink('personNav', FoDynamicRole, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[positionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoDynamicRole.POSITION_NAV = new core_1.Link('positionNav', FoDynamicRole, Position_1.Position);
    /**
     * All fields of the FoDynamicRole entity.
     */
    FoDynamicRole._allFields = [
        FoDynamicRole.BUSINESS_UNIT,
        FoDynamicRole.COMPANY,
        FoDynamicRole.COST_CENTER,
        FoDynamicRole.CREATED_BY,
        FoDynamicRole.CREATED_DATE_TIME,
        FoDynamicRole.CREATED_ON,
        FoDynamicRole.DEPARTMENT,
        FoDynamicRole.DESCRIPTION,
        FoDynamicRole.DIVISION,
        FoDynamicRole.DYNAMIC_GROUP,
        FoDynamicRole.DYNAMIC_ROLE_ASSIGNMENT_ID,
        FoDynamicRole.EVENT_REASON,
        FoDynamicRole.EXTERNAL_CODE,
        FoDynamicRole.JOB_CODE,
        FoDynamicRole.LAST_MODIFIED_BY,
        FoDynamicRole.LAST_MODIFIED_DATE_TIME,
        FoDynamicRole.LAST_MODIFIED_ON,
        FoDynamicRole.LOCATION,
        FoDynamicRole.NAME,
        FoDynamicRole.PAY_GRADE,
        FoDynamicRole.PAY_GROUP,
        FoDynamicRole.PERSON,
        FoDynamicRole.POSITION,
        FoDynamicRole.RESOLVER_TYPE,
        FoDynamicRole.BUSINESS_UNIT_NAV,
        FoDynamicRole.COMPANY_NAV,
        FoDynamicRole.COST_CENTER_NAV,
        FoDynamicRole.DEPARTMENT_NAV,
        FoDynamicRole.DESCRIPTION_TRANSLATION_NAV,
        FoDynamicRole.DIVISION_NAV,
        FoDynamicRole.DYNAMIC_GROUP_NAV,
        FoDynamicRole.EVENT_REASON_NAV,
        FoDynamicRole.JOB_CODE_NAV,
        FoDynamicRole.LOCATION_NAV,
        FoDynamicRole.NAME_TRANSLATION_NAV,
        FoDynamicRole.PAY_GRADE_NAV,
        FoDynamicRole.PAY_GROUP_NAV,
        FoDynamicRole.PERSON_NAV,
        FoDynamicRole.POSITION_NAV
    ];
    /**
     * All fields selector.
     */
    FoDynamicRole.ALL_FIELDS = new core_1.AllFields('*', FoDynamicRole);
    /**
     * All key fields of the FoDynamicRole entity.
     */
    FoDynamicRole._keyFields = [FoDynamicRole.DYNAMIC_ROLE_ASSIGNMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property FoDynamicRole.
     */
    FoDynamicRole._keys = FoDynamicRole._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoDynamicRole = exports.FoDynamicRole || (exports.FoDynamicRole = {}));
exports.FoDynamicRole = FoDynamicRole;
//# sourceMappingURL=FoDynamicRole.js.map