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
var WorkScheduleDayModelAssignmentRequestBuilder_1 = require("./WorkScheduleDayModelAssignmentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "WorkScheduleDayModelAssignment" of service "SFOData".
 */
var WorkScheduleDayModelAssignment = /** @class */ (function (_super) {
    __extends(WorkScheduleDayModelAssignment, _super);
    function WorkScheduleDayModelAssignment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `WorkScheduleDayModelAssignment`.
     * @returns A builder that constructs instances of entity type `WorkScheduleDayModelAssignment`.
     */
    WorkScheduleDayModelAssignment.builder = function () {
        return core_1.Entity.entityBuilder(WorkScheduleDayModelAssignment);
    };
    /**
     * Returns a request builder to construct requests for operations on the `WorkScheduleDayModelAssignment` entity type.
     * @returns A `WorkScheduleDayModelAssignment` request builder.
     */
    WorkScheduleDayModelAssignment.requestBuilder = function () {
        return new WorkScheduleDayModelAssignmentRequestBuilder_1.WorkScheduleDayModelAssignmentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WorkScheduleDayModelAssignment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WorkScheduleDayModelAssignment`.
     */
    WorkScheduleDayModelAssignment.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, WorkScheduleDayModelAssignment);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    WorkScheduleDayModelAssignment.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for WorkScheduleDayModelAssignment.
     */
    WorkScheduleDayModelAssignment._entityName = 'WorkScheduleDayModelAssignment';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WorkScheduleDayModelAssignment.
     */
    WorkScheduleDayModelAssignment._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    WorkScheduleDayModelAssignment._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return WorkScheduleDayModelAssignment;
}(core_1.Entity));
exports.WorkScheduleDayModelAssignment = WorkScheduleDayModelAssignment;
var MdfEnumValue_1 = require("./MdfEnumValue");
var User_1 = require("./User");
var WorkScheduleDayModel_1 = require("./WorkScheduleDayModel");
var WorkScheduleDayModelAssignmentSegment_1 = require("./WorkScheduleDayModelAssignmentSegment");
(function (WorkScheduleDayModelAssignment) {
    /**
     * Static representation of the [[workScheduleExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignment.WORK_SCHEDULE_EXTERNAL_CODE = new core_1.StringField('WorkSchedule_externalCode', WorkScheduleDayModelAssignment, 'Edm.String');
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignment.CATEGORY = new core_1.StringField('category', WorkScheduleDayModelAssignment, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignment.CREATED_BY = new core_1.StringField('createdBy', WorkScheduleDayModelAssignment, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignment.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', WorkScheduleDayModelAssignment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[day]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignment.DAY = new core_1.BigNumberField('day', WorkScheduleDayModelAssignment, 'Edm.Int64');
    /**
     * Static representation of the [[dayModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignment.DAY_MODEL = new core_1.StringField('dayModel', WorkScheduleDayModelAssignment, 'Edm.String');
    /**
     * Static representation of the [[dayWorkingHours]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignment.DAY_WORKING_HOURS = new core_1.BigNumberField('dayWorkingHours', WorkScheduleDayModelAssignment, 'Edm.Decimal');
    /**
     * Static representation of the [[hoursAndMinutes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignment.HOURS_AND_MINUTES = new core_1.StringField('hoursAndMinutes', WorkScheduleDayModelAssignment, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignment.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', WorkScheduleDayModelAssignment, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignment.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', WorkScheduleDayModelAssignment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignment.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', WorkScheduleDayModelAssignment, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[categoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignment.CATEGORY_NAV = new core_1.OneToOneLink('categoryNav', WorkScheduleDayModelAssignment, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignment.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', WorkScheduleDayModelAssignment, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[dayModelNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignment.DAY_MODEL_NAV = new core_1.OneToOneLink('dayModelNav', WorkScheduleDayModelAssignment, WorkScheduleDayModel_1.WorkScheduleDayModel);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignment.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', WorkScheduleDayModelAssignment, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignment.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', WorkScheduleDayModelAssignment, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[segments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignment.SEGMENTS = new core_1.Link('segments', WorkScheduleDayModelAssignment, WorkScheduleDayModelAssignmentSegment_1.WorkScheduleDayModelAssignmentSegment);
    /**
     * All fields of the WorkScheduleDayModelAssignment entity.
     */
    WorkScheduleDayModelAssignment._allFields = [
        WorkScheduleDayModelAssignment.WORK_SCHEDULE_EXTERNAL_CODE,
        WorkScheduleDayModelAssignment.CATEGORY,
        WorkScheduleDayModelAssignment.CREATED_BY,
        WorkScheduleDayModelAssignment.CREATED_DATE_TIME,
        WorkScheduleDayModelAssignment.DAY,
        WorkScheduleDayModelAssignment.DAY_MODEL,
        WorkScheduleDayModelAssignment.DAY_WORKING_HOURS,
        WorkScheduleDayModelAssignment.HOURS_AND_MINUTES,
        WorkScheduleDayModelAssignment.LAST_MODIFIED_BY,
        WorkScheduleDayModelAssignment.LAST_MODIFIED_DATE_TIME,
        WorkScheduleDayModelAssignment.MDF_SYSTEM_RECORD_STATUS,
        WorkScheduleDayModelAssignment.CATEGORY_NAV,
        WorkScheduleDayModelAssignment.CREATED_BY_NAV,
        WorkScheduleDayModelAssignment.DAY_MODEL_NAV,
        WorkScheduleDayModelAssignment.LAST_MODIFIED_BY_NAV,
        WorkScheduleDayModelAssignment.MDF_SYSTEM_RECORD_STATUS_NAV,
        WorkScheduleDayModelAssignment.SEGMENTS
    ];
    /**
     * All fields selector.
     */
    WorkScheduleDayModelAssignment.ALL_FIELDS = new core_1.AllFields('*', WorkScheduleDayModelAssignment);
    /**
     * All key fields of the WorkScheduleDayModelAssignment entity.
     */
    WorkScheduleDayModelAssignment._keyFields = [WorkScheduleDayModelAssignment.WORK_SCHEDULE_EXTERNAL_CODE, WorkScheduleDayModelAssignment.DAY];
    /**
     * Mapping of all key field names to the respective static field property WorkScheduleDayModelAssignment.
     */
    WorkScheduleDayModelAssignment._keys = WorkScheduleDayModelAssignment._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(WorkScheduleDayModelAssignment = exports.WorkScheduleDayModelAssignment || (exports.WorkScheduleDayModelAssignment = {}));
exports.WorkScheduleDayModelAssignment = WorkScheduleDayModelAssignment;
//# sourceMappingURL=WorkScheduleDayModelAssignment.js.map