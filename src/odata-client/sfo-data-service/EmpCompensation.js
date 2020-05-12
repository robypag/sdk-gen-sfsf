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
var EmpCompensationRequestBuilder_1 = require("./EmpCompensationRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmpCompensation" of service "SFOData".
 */
var EmpCompensation = /** @class */ (function (_super) {
    __extends(EmpCompensation, _super);
    function EmpCompensation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmpCompensation`.
     * @returns A builder that constructs instances of entity type `EmpCompensation`.
     */
    EmpCompensation.builder = function () {
        return core_1.Entity.entityBuilder(EmpCompensation);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmpCompensation` entity type.
     * @returns A `EmpCompensation` request builder.
     */
    EmpCompensation.requestBuilder = function () {
        return new EmpCompensationRequestBuilder_1.EmpCompensationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpCompensation`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpCompensation`.
     */
    EmpCompensation.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmpCompensation);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmpCompensation.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmpCompensation.
     */
    EmpCompensation._entityName = 'EmpCompensation';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpCompensation.
     */
    EmpCompensation._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmpCompensation._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmpCompensation;
}(core_1.Entity));
exports.EmpCompensation = EmpCompensation;
var EmpCompensationCalculated_1 = require("./EmpCompensationCalculated");
var EmpCompensationGroupSumCalculated_1 = require("./EmpCompensationGroupSumCalculated");
var EmpPayCompRecurring_1 = require("./EmpPayCompRecurring");
var EmpEmployment_1 = require("./EmpEmployment");
var PicklistOption_1 = require("./PicklistOption");
var FoEventReason_1 = require("./FoEventReason");
var FoPayGroup_1 = require("./FoPayGroup");
var User_1 = require("./User");
var WfRequest_1 = require("./WfRequest");
(function (EmpCompensation) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensation.CREATED_BY = new core_1.StringField('createdBy', EmpCompensation, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensation.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmpCompensation, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensation.CREATED_ON = new core_1.DateField('createdOn', EmpCompensation, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensation.END_DATE = new core_1.DateField('endDate', EmpCompensation, 'Edm.DateTime');
    /**
     * Static representation of the [[event]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensation.EVENT = new core_1.StringField('event', EmpCompensation, 'Edm.String');
    /**
     * Static representation of the [[eventReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensation.EVENT_REASON = new core_1.StringField('eventReason', EmpCompensation, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensation.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmpCompensation, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensation.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmpCompensation, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensation.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', EmpCompensation, 'Edm.DateTime');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensation.OPERATION = new core_1.StringField('operation', EmpCompensation, 'Edm.String');
    /**
     * Static representation of the [[payGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensation.PAY_GROUP = new core_1.StringField('payGroup', EmpCompensation, 'Edm.String');
    /**
     * Static representation of the [[payrollId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensation.PAYROLL_ID = new core_1.StringField('payrollId', EmpCompensation, 'Edm.String');
    /**
     * Static representation of the [[seqNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensation.SEQ_NUMBER = new core_1.BigNumberField('seqNumber', EmpCompensation, 'Edm.Int64');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensation.START_DATE = new core_1.DateField('startDate', EmpCompensation, 'Edm.DateTime');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensation.USER_ID = new core_1.StringField('userId', EmpCompensation, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[empCompensationCalculatedNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensation.EMP_COMPENSATION_CALCULATED_NAV = new core_1.OneToOneLink('empCompensationCalculatedNav', EmpCompensation, EmpCompensationCalculated_1.EmpCompensationCalculated);
    /**
     * Static representation of the one-to-many navigation property [[empCompensationGroupSumCalculatedNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensation.EMP_COMPENSATION_GROUP_SUM_CALCULATED_NAV = new core_1.Link('empCompensationGroupSumCalculatedNav', EmpCompensation, EmpCompensationGroupSumCalculated_1.EmpCompensationGroupSumCalculated);
    /**
     * Static representation of the one-to-many navigation property [[empPayCompRecurringNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensation.EMP_PAY_COMP_RECURRING_NAV = new core_1.Link('empPayCompRecurringNav', EmpCompensation, EmpPayCompRecurring_1.EmpPayCompRecurring);
    /**
     * Static representation of the one-to-one navigation property [[employmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensation.EMPLOYMENT_NAV = new core_1.OneToOneLink('employmentNav', EmpCompensation, EmpEmployment_1.EmpEmployment);
    /**
     * Static representation of the one-to-one navigation property [[eventNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensation.EVENT_NAV = new core_1.OneToOneLink('eventNav', EmpCompensation, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[eventReasonNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensation.EVENT_REASON_NAV = new core_1.OneToOneLink('eventReasonNav', EmpCompensation, FoEventReason_1.FoEventReason);
    /**
     * Static representation of the one-to-one navigation property [[payGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensation.PAY_GROUP_NAV = new core_1.OneToOneLink('payGroupNav', EmpCompensation, FoPayGroup_1.FoPayGroup);
    /**
     * Static representation of the one-to-one navigation property [[userNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensation.USER_NAV = new core_1.OneToOneLink('userNav', EmpCompensation, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensation.WF_REQUEST_NAV = new core_1.OneToOneLink('wfRequestNav', EmpCompensation, WfRequest_1.WfRequest);
    /**
     * All fields of the EmpCompensation entity.
     */
    EmpCompensation._allFields = [
        EmpCompensation.CREATED_BY,
        EmpCompensation.CREATED_DATE_TIME,
        EmpCompensation.CREATED_ON,
        EmpCompensation.END_DATE,
        EmpCompensation.EVENT,
        EmpCompensation.EVENT_REASON,
        EmpCompensation.LAST_MODIFIED_BY,
        EmpCompensation.LAST_MODIFIED_DATE_TIME,
        EmpCompensation.LAST_MODIFIED_ON,
        EmpCompensation.OPERATION,
        EmpCompensation.PAY_GROUP,
        EmpCompensation.PAYROLL_ID,
        EmpCompensation.SEQ_NUMBER,
        EmpCompensation.START_DATE,
        EmpCompensation.USER_ID,
        EmpCompensation.EMP_COMPENSATION_CALCULATED_NAV,
        EmpCompensation.EMP_COMPENSATION_GROUP_SUM_CALCULATED_NAV,
        EmpCompensation.EMP_PAY_COMP_RECURRING_NAV,
        EmpCompensation.EMPLOYMENT_NAV,
        EmpCompensation.EVENT_NAV,
        EmpCompensation.EVENT_REASON_NAV,
        EmpCompensation.PAY_GROUP_NAV,
        EmpCompensation.USER_NAV,
        EmpCompensation.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    EmpCompensation.ALL_FIELDS = new core_1.AllFields('*', EmpCompensation);
    /**
     * All key fields of the EmpCompensation entity.
     */
    EmpCompensation._keyFields = [EmpCompensation.SEQ_NUMBER, EmpCompensation.START_DATE, EmpCompensation.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property EmpCompensation.
     */
    EmpCompensation._keys = EmpCompensation._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmpCompensation = exports.EmpCompensation || (exports.EmpCompensation = {}));
exports.EmpCompensation = EmpCompensation;
//# sourceMappingURL=EmpCompensation.js.map