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
var WorkScheduleDayRequestBuilder_1 = require("./WorkScheduleDayRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "WorkScheduleDay" of service "SFOData".
 */
var WorkScheduleDay = /** @class */ (function (_super) {
    __extends(WorkScheduleDay, _super);
    function WorkScheduleDay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `WorkScheduleDay`.
     * @returns A builder that constructs instances of entity type `WorkScheduleDay`.
     */
    WorkScheduleDay.builder = function () {
        return core_1.Entity.entityBuilder(WorkScheduleDay);
    };
    /**
     * Returns a request builder to construct requests for operations on the `WorkScheduleDay` entity type.
     * @returns A `WorkScheduleDay` request builder.
     */
    WorkScheduleDay.requestBuilder = function () {
        return new WorkScheduleDayRequestBuilder_1.WorkScheduleDayRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WorkScheduleDay`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WorkScheduleDay`.
     */
    WorkScheduleDay.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, WorkScheduleDay);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    WorkScheduleDay.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for WorkScheduleDay.
     */
    WorkScheduleDay._entityName = 'WorkScheduleDay';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WorkScheduleDay.
     */
    WorkScheduleDay._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    WorkScheduleDay._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return WorkScheduleDay;
}(core_1.Entity));
exports.WorkScheduleDay = WorkScheduleDay;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (WorkScheduleDay) {
    /**
     * Static representation of the [[workScheduleExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDay.WORK_SCHEDULE_EXTERNAL_CODE = new core_1.StringField('WorkSchedule_externalCode', WorkScheduleDay, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDay.CREATED_BY = new core_1.StringField('createdBy', WorkScheduleDay, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDay.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', WorkScheduleDay, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[day]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDay.DAY = new core_1.BigNumberField('day', WorkScheduleDay, 'Edm.Int64');
    /**
     * Static representation of the [[hoursAndMinutes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDay.HOURS_AND_MINUTES = new core_1.StringField('hoursAndMinutes', WorkScheduleDay, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDay.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', WorkScheduleDay, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDay.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', WorkScheduleDay, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDay.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', WorkScheduleDay, 'Edm.String');
    /**
     * Static representation of the [[workingHours]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDay.WORKING_HOURS = new core_1.BigNumberField('workingHours', WorkScheduleDay, 'Edm.Decimal');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDay.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', WorkScheduleDay, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDay.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', WorkScheduleDay, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDay.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', WorkScheduleDay, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the WorkScheduleDay entity.
     */
    WorkScheduleDay._allFields = [
        WorkScheduleDay.WORK_SCHEDULE_EXTERNAL_CODE,
        WorkScheduleDay.CREATED_BY,
        WorkScheduleDay.CREATED_DATE_TIME,
        WorkScheduleDay.DAY,
        WorkScheduleDay.HOURS_AND_MINUTES,
        WorkScheduleDay.LAST_MODIFIED_BY,
        WorkScheduleDay.LAST_MODIFIED_DATE_TIME,
        WorkScheduleDay.MDF_SYSTEM_RECORD_STATUS,
        WorkScheduleDay.WORKING_HOURS,
        WorkScheduleDay.CREATED_BY_NAV,
        WorkScheduleDay.LAST_MODIFIED_BY_NAV,
        WorkScheduleDay.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    WorkScheduleDay.ALL_FIELDS = new core_1.AllFields('*', WorkScheduleDay);
    /**
     * All key fields of the WorkScheduleDay entity.
     */
    WorkScheduleDay._keyFields = [WorkScheduleDay.WORK_SCHEDULE_EXTERNAL_CODE, WorkScheduleDay.DAY];
    /**
     * Mapping of all key field names to the respective static field property WorkScheduleDay.
     */
    WorkScheduleDay._keys = WorkScheduleDay._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(WorkScheduleDay = exports.WorkScheduleDay || (exports.WorkScheduleDay = {}));
exports.WorkScheduleDay = WorkScheduleDay;
//# sourceMappingURL=WorkScheduleDay.js.map