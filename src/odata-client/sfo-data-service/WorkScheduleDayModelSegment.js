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
var WorkScheduleDayModelSegmentRequestBuilder_1 = require("./WorkScheduleDayModelSegmentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "WorkScheduleDayModelSegment" of service "SFOData".
 */
var WorkScheduleDayModelSegment = /** @class */ (function (_super) {
    __extends(WorkScheduleDayModelSegment, _super);
    function WorkScheduleDayModelSegment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `WorkScheduleDayModelSegment`.
     * @returns A builder that constructs instances of entity type `WorkScheduleDayModelSegment`.
     */
    WorkScheduleDayModelSegment.builder = function () {
        return core_1.Entity.entityBuilder(WorkScheduleDayModelSegment);
    };
    /**
     * Returns a request builder to construct requests for operations on the `WorkScheduleDayModelSegment` entity type.
     * @returns A `WorkScheduleDayModelSegment` request builder.
     */
    WorkScheduleDayModelSegment.requestBuilder = function () {
        return new WorkScheduleDayModelSegmentRequestBuilder_1.WorkScheduleDayModelSegmentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WorkScheduleDayModelSegment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WorkScheduleDayModelSegment`.
     */
    WorkScheduleDayModelSegment.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, WorkScheduleDayModelSegment);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    WorkScheduleDayModelSegment.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for WorkScheduleDayModelSegment.
     */
    WorkScheduleDayModelSegment._entityName = 'WorkScheduleDayModelSegment';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WorkScheduleDayModelSegment.
     */
    WorkScheduleDayModelSegment._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    WorkScheduleDayModelSegment._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return WorkScheduleDayModelSegment;
}(core_1.Entity));
exports.WorkScheduleDayModelSegment = WorkScheduleDayModelSegment;
var MdfEnumValue_1 = require("./MdfEnumValue");
var User_1 = require("./User");
(function (WorkScheduleDayModelSegment) {
    /**
     * Static representation of the [[workScheduleDayModelExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelSegment.WORK_SCHEDULE_DAY_MODEL_EXTERNAL_CODE = new core_1.StringField('WorkScheduleDayModel_externalCode', WorkScheduleDayModelSegment, 'Edm.String');
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelSegment.CATEGORY = new core_1.StringField('category', WorkScheduleDayModelSegment, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelSegment.CREATED_BY = new core_1.StringField('createdBy', WorkScheduleDayModelSegment, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelSegment.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', WorkScheduleDayModelSegment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[duration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelSegment.DURATION = new core_1.BigNumberField('duration', WorkScheduleDayModelSegment, 'Edm.Int64');
    /**
     * Static representation of the [[endTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelSegment.END_TIME = new core_1.TimeField('endTime', WorkScheduleDayModelSegment, 'Edm.Time');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelSegment.EXTERNAL_CODE = new core_1.StringField('externalCode', WorkScheduleDayModelSegment, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelSegment.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', WorkScheduleDayModelSegment, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelSegment.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', WorkScheduleDayModelSegment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelSegment.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', WorkScheduleDayModelSegment, 'Edm.String');
    /**
     * Static representation of the [[startTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelSegment.START_TIME = new core_1.TimeField('startTime', WorkScheduleDayModelSegment, 'Edm.Time');
    /**
     * Static representation of the one-to-one navigation property [[categoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelSegment.CATEGORY_NAV = new core_1.OneToOneLink('categoryNav', WorkScheduleDayModelSegment, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelSegment.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', WorkScheduleDayModelSegment, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelSegment.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', WorkScheduleDayModelSegment, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelSegment.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', WorkScheduleDayModelSegment, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the WorkScheduleDayModelSegment entity.
     */
    WorkScheduleDayModelSegment._allFields = [
        WorkScheduleDayModelSegment.WORK_SCHEDULE_DAY_MODEL_EXTERNAL_CODE,
        WorkScheduleDayModelSegment.CATEGORY,
        WorkScheduleDayModelSegment.CREATED_BY,
        WorkScheduleDayModelSegment.CREATED_DATE_TIME,
        WorkScheduleDayModelSegment.DURATION,
        WorkScheduleDayModelSegment.END_TIME,
        WorkScheduleDayModelSegment.EXTERNAL_CODE,
        WorkScheduleDayModelSegment.LAST_MODIFIED_BY,
        WorkScheduleDayModelSegment.LAST_MODIFIED_DATE_TIME,
        WorkScheduleDayModelSegment.MDF_SYSTEM_RECORD_STATUS,
        WorkScheduleDayModelSegment.START_TIME,
        WorkScheduleDayModelSegment.CATEGORY_NAV,
        WorkScheduleDayModelSegment.CREATED_BY_NAV,
        WorkScheduleDayModelSegment.LAST_MODIFIED_BY_NAV,
        WorkScheduleDayModelSegment.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    WorkScheduleDayModelSegment.ALL_FIELDS = new core_1.AllFields('*', WorkScheduleDayModelSegment);
    /**
     * All key fields of the WorkScheduleDayModelSegment entity.
     */
    WorkScheduleDayModelSegment._keyFields = [WorkScheduleDayModelSegment.WORK_SCHEDULE_DAY_MODEL_EXTERNAL_CODE, WorkScheduleDayModelSegment.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property WorkScheduleDayModelSegment.
     */
    WorkScheduleDayModelSegment._keys = WorkScheduleDayModelSegment._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(WorkScheduleDayModelSegment = exports.WorkScheduleDayModelSegment || (exports.WorkScheduleDayModelSegment = {}));
exports.WorkScheduleDayModelSegment = WorkScheduleDayModelSegment;
//# sourceMappingURL=WorkScheduleDayModelSegment.js.map