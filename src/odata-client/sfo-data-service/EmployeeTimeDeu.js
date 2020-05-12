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
var EmployeeTimeDeuRequestBuilder_1 = require("./EmployeeTimeDeuRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeeTimeDEU" of service "SFOData".
 */
var EmployeeTimeDeu = /** @class */ (function (_super) {
    __extends(EmployeeTimeDeu, _super);
    function EmployeeTimeDeu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeTimeDeu`.
     * @returns A builder that constructs instances of entity type `EmployeeTimeDeu`.
     */
    EmployeeTimeDeu.builder = function () {
        return core_1.Entity.entityBuilder(EmployeeTimeDeu);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeTimeDeu` entity type.
     * @returns A `EmployeeTimeDeu` request builder.
     */
    EmployeeTimeDeu.requestBuilder = function () {
        return new EmployeeTimeDeuRequestBuilder_1.EmployeeTimeDeuRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeDeu`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeTimeDeu`.
     */
    EmployeeTimeDeu.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmployeeTimeDeu);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeTimeDeu.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeTimeDeu.
     */
    EmployeeTimeDeu._entityName = 'EmployeeTimeDEU';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeTimeDeu.
     */
    EmployeeTimeDeu._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmployeeTimeDeu._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmployeeTimeDeu;
}(core_1.Entity));
exports.EmployeeTimeDeu = EmployeeTimeDeu;
var User_1 = require("./User");
var EmployeeTimeGroup_1 = require("./EmployeeTimeGroup");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (EmployeeTimeDeu) {
    /**
     * Static representation of the [[employeeTimeExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeDeu.EMPLOYEE_TIME_EXTERNAL_CODE = new core_1.StringField('EmployeeTime_externalCode', EmployeeTimeDeu, 'Edm.String');
    /**
     * Static representation of the [[continuedPayCreditedDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeDeu.CONTINUED_PAY_CREDITED_DAYS = new core_1.BigNumberField('continuedPayCreditedDays', EmployeeTimeDeu, 'Edm.Decimal');
    /**
     * Static representation of the [[continuedPayEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeDeu.CONTINUED_PAY_END_DATE = new core_1.DateField('continuedPayEndDate', EmployeeTimeDeu, 'Edm.DateTime');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeDeu.CREATED_BY = new core_1.StringField('createdBy', EmployeeTimeDeu, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeDeu.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmployeeTimeDeu, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeDeu.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', EmployeeTimeDeu, 'Edm.Int64');
    /**
     * Static representation of the [[identicalSicknessGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeDeu.IDENTICAL_SICKNESS_GROUP = new core_1.StringField('identicalSicknessGroup', EmployeeTimeDeu, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeDeu.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmployeeTimeDeu, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeDeu.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmployeeTimeDeu, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeDeu.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmployeeTimeDeu, 'Edm.String');
    /**
     * Static representation of the [[overlappingSicknessGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeDeu.OVERLAPPING_SICKNESS_GROUP = new core_1.StringField('overlappingSicknessGroup', EmployeeTimeDeu, 'Edm.String');
    /**
     * Static representation of the [[paySupplementEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeDeu.PAY_SUPPLEMENT_END_DATE = new core_1.DateField('paySupplementEndDate', EmployeeTimeDeu, 'Edm.DateTime');
    /**
     * Static representation of the [[paySupplementStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeDeu.PAY_SUPPLEMENT_START_DATE = new core_1.DateField('paySupplementStartDate', EmployeeTimeDeu, 'Edm.DateTime');
    /**
     * Static representation of the [[sicknessCertificateStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeDeu.SICKNESS_CERTIFICATE_START_DATE = new core_1.DateField('sicknessCertificateStartDate', EmployeeTimeDeu, 'Edm.DateTime');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeDeu.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', EmployeeTimeDeu, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[identicalSicknessGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeDeu.IDENTICAL_SICKNESS_GROUP_NAV = new core_1.OneToOneLink('identicalSicknessGroupNav', EmployeeTimeDeu, EmployeeTimeGroup_1.EmployeeTimeGroup);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeDeu.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', EmployeeTimeDeu, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeDeu.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', EmployeeTimeDeu, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[overlappingSicknessGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeDeu.OVERLAPPING_SICKNESS_GROUP_NAV = new core_1.OneToOneLink('overlappingSicknessGroupNav', EmployeeTimeDeu, EmployeeTimeGroup_1.EmployeeTimeGroup);
    /**
     * All fields of the EmployeeTimeDeu entity.
     */
    EmployeeTimeDeu._allFields = [
        EmployeeTimeDeu.EMPLOYEE_TIME_EXTERNAL_CODE,
        EmployeeTimeDeu.CONTINUED_PAY_CREDITED_DAYS,
        EmployeeTimeDeu.CONTINUED_PAY_END_DATE,
        EmployeeTimeDeu.CREATED_BY,
        EmployeeTimeDeu.CREATED_DATE_TIME,
        EmployeeTimeDeu.EXTERNAL_CODE,
        EmployeeTimeDeu.IDENTICAL_SICKNESS_GROUP,
        EmployeeTimeDeu.LAST_MODIFIED_BY,
        EmployeeTimeDeu.LAST_MODIFIED_DATE_TIME,
        EmployeeTimeDeu.MDF_SYSTEM_RECORD_STATUS,
        EmployeeTimeDeu.OVERLAPPING_SICKNESS_GROUP,
        EmployeeTimeDeu.PAY_SUPPLEMENT_END_DATE,
        EmployeeTimeDeu.PAY_SUPPLEMENT_START_DATE,
        EmployeeTimeDeu.SICKNESS_CERTIFICATE_START_DATE,
        EmployeeTimeDeu.CREATED_BY_NAV,
        EmployeeTimeDeu.IDENTICAL_SICKNESS_GROUP_NAV,
        EmployeeTimeDeu.LAST_MODIFIED_BY_NAV,
        EmployeeTimeDeu.MDF_SYSTEM_RECORD_STATUS_NAV,
        EmployeeTimeDeu.OVERLAPPING_SICKNESS_GROUP_NAV
    ];
    /**
     * All fields selector.
     */
    EmployeeTimeDeu.ALL_FIELDS = new core_1.AllFields('*', EmployeeTimeDeu);
    /**
     * All key fields of the EmployeeTimeDeu entity.
     */
    EmployeeTimeDeu._keyFields = [EmployeeTimeDeu.EMPLOYEE_TIME_EXTERNAL_CODE, EmployeeTimeDeu.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property EmployeeTimeDeu.
     */
    EmployeeTimeDeu._keys = EmployeeTimeDeu._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeTimeDeu = exports.EmployeeTimeDeu || (exports.EmployeeTimeDeu = {}));
exports.EmployeeTimeDeu = EmployeeTimeDeu;
//# sourceMappingURL=EmployeeTimeDeu.js.map