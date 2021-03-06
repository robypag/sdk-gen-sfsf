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
var EmployeeTimeEspRequestBuilder_1 = require("./EmployeeTimeEspRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeeTimeESP" of service "SFOData".
 */
var EmployeeTimeEsp = /** @class */ (function (_super) {
    __extends(EmployeeTimeEsp, _super);
    function EmployeeTimeEsp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeTimeEsp`.
     * @returns A builder that constructs instances of entity type `EmployeeTimeEsp`.
     */
    EmployeeTimeEsp.builder = function () {
        return core_1.Entity.entityBuilder(EmployeeTimeEsp);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeTimeEsp` entity type.
     * @returns A `EmployeeTimeEsp` request builder.
     */
    EmployeeTimeEsp.requestBuilder = function () {
        return new EmployeeTimeEspRequestBuilder_1.EmployeeTimeEspRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeEsp`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeTimeEsp`.
     */
    EmployeeTimeEsp.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmployeeTimeEsp);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeTimeEsp.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeTimeEsp.
     */
    EmployeeTimeEsp._entityName = 'EmployeeTimeESP';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeTimeEsp.
     */
    EmployeeTimeEsp._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmployeeTimeEsp._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmployeeTimeEsp;
}(core_1.Entity));
exports.EmployeeTimeEsp = EmployeeTimeEsp;
var User_1 = require("./User");
var EmployeeTimeGroup_1 = require("./EmployeeTimeGroup");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (EmployeeTimeEsp) {
    /**
     * Static representation of the [[employeeTimeExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeEsp.EMPLOYEE_TIME_EXTERNAL_CODE = new core_1.StringField('EmployeeTime_externalCode', EmployeeTimeEsp, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeEsp.CREATED_BY = new core_1.StringField('createdBy', EmployeeTimeEsp, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeEsp.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmployeeTimeEsp, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeEsp.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', EmployeeTimeEsp, 'Edm.Int64');
    /**
     * Static representation of the [[identicalSicknessGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeEsp.IDENTICAL_SICKNESS_GROUP = new core_1.StringField('identicalSicknessGroup', EmployeeTimeEsp, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeEsp.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmployeeTimeEsp, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeEsp.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmployeeTimeEsp, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeEsp.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmployeeTimeEsp, 'Edm.String');
    /**
     * Static representation of the [[originalAbsence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeEsp.ORIGINAL_ABSENCE = new core_1.BooleanField('originalAbsence', EmployeeTimeEsp, 'Edm.Boolean');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeEsp.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', EmployeeTimeEsp, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[identicalSicknessGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeEsp.IDENTICAL_SICKNESS_GROUP_NAV = new core_1.OneToOneLink('identicalSicknessGroupNav', EmployeeTimeEsp, EmployeeTimeGroup_1.EmployeeTimeGroup);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeEsp.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', EmployeeTimeEsp, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeEsp.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', EmployeeTimeEsp, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the EmployeeTimeEsp entity.
     */
    EmployeeTimeEsp._allFields = [
        EmployeeTimeEsp.EMPLOYEE_TIME_EXTERNAL_CODE,
        EmployeeTimeEsp.CREATED_BY,
        EmployeeTimeEsp.CREATED_DATE_TIME,
        EmployeeTimeEsp.EXTERNAL_CODE,
        EmployeeTimeEsp.IDENTICAL_SICKNESS_GROUP,
        EmployeeTimeEsp.LAST_MODIFIED_BY,
        EmployeeTimeEsp.LAST_MODIFIED_DATE_TIME,
        EmployeeTimeEsp.MDF_SYSTEM_RECORD_STATUS,
        EmployeeTimeEsp.ORIGINAL_ABSENCE,
        EmployeeTimeEsp.CREATED_BY_NAV,
        EmployeeTimeEsp.IDENTICAL_SICKNESS_GROUP_NAV,
        EmployeeTimeEsp.LAST_MODIFIED_BY_NAV,
        EmployeeTimeEsp.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    EmployeeTimeEsp.ALL_FIELDS = new core_1.AllFields('*', EmployeeTimeEsp);
    /**
     * All key fields of the EmployeeTimeEsp entity.
     */
    EmployeeTimeEsp._keyFields = [EmployeeTimeEsp.EMPLOYEE_TIME_EXTERNAL_CODE, EmployeeTimeEsp.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property EmployeeTimeEsp.
     */
    EmployeeTimeEsp._keys = EmployeeTimeEsp._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeTimeEsp = exports.EmployeeTimeEsp || (exports.EmployeeTimeEsp = {}));
exports.EmployeeTimeEsp = EmployeeTimeEsp;
//# sourceMappingURL=EmployeeTimeEsp.js.map