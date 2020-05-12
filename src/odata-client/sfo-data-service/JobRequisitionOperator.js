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
var JobRequisitionOperatorRequestBuilder_1 = require("./JobRequisitionOperatorRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobRequisitionOperator" of service "SFOData".
 */
var JobRequisitionOperator = /** @class */ (function (_super) {
    __extends(JobRequisitionOperator, _super);
    function JobRequisitionOperator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobRequisitionOperator`.
     * @returns A builder that constructs instances of entity type `JobRequisitionOperator`.
     */
    JobRequisitionOperator.builder = function () {
        return core_1.Entity.entityBuilder(JobRequisitionOperator);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobRequisitionOperator` entity type.
     * @returns A `JobRequisitionOperator` request builder.
     */
    JobRequisitionOperator.requestBuilder = function () {
        return new JobRequisitionOperatorRequestBuilder_1.JobRequisitionOperatorRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobRequisitionOperator`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobRequisitionOperator`.
     */
    JobRequisitionOperator.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobRequisitionOperator);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobRequisitionOperator.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobRequisitionOperator.
     */
    JobRequisitionOperator._entityName = 'JobRequisitionOperator';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobRequisitionOperator.
     */
    JobRequisitionOperator._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobRequisitionOperator._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobRequisitionOperator;
}(core_1.Entity));
exports.JobRequisitionOperator = JobRequisitionOperator;
var JobRequisition_1 = require("./JobRequisition");
var User_1 = require("./User");
(function (JobRequisitionOperator) {
    /**
     * Static representation of the [[adminSelectedUserToBeRemoved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionOperator.ADMIN_SELECTED_USER_TO_BE_REMOVED = new core_1.BooleanField('adminSelectedUserToBeRemoved', JobRequisitionOperator, 'Edm.Boolean');
    /**
     * Static representation of the [[email]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionOperator.EMAIL = new core_1.StringField('email', JobRequisitionOperator, 'Edm.String');
    /**
     * Static representation of the [[fax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionOperator.FAX = new core_1.StringField('fax', JobRequisitionOperator, 'Edm.String');
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionOperator.FIRST_NAME = new core_1.StringField('firstName', JobRequisitionOperator, 'Edm.String');
    /**
     * Static representation of the [[isAdminSelected]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionOperator.IS_ADMIN_SELECTED = new core_1.BooleanField('isAdminSelected', JobRequisitionOperator, 'Edm.Boolean');
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionOperator.JOB_REQ_ID = new core_1.BigNumberField('jobReqId', JobRequisitionOperator, 'Edm.Int64');
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionOperator.LAST_NAME = new core_1.StringField('lastName', JobRequisitionOperator, 'Edm.String');
    /**
     * Static representation of the [[operatorRole]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionOperator.OPERATOR_ROLE = new core_1.StringField('operatorRole', JobRequisitionOperator, 'Edm.String');
    /**
     * Static representation of the [[phone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionOperator.PHONE = new core_1.StringField('phone', JobRequisitionOperator, 'Edm.String');
    /**
     * Static representation of the [[userName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionOperator.USER_NAME = new core_1.StringField('userName', JobRequisitionOperator, 'Edm.String');
    /**
     * Static representation of the [[usersSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionOperator.USERS_SYS_ID = new core_1.StringField('usersSysId', JobRequisitionOperator, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[jobRequisition]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionOperator.JOB_REQUISITION = new core_1.OneToOneLink('jobRequisition', JobRequisitionOperator, JobRequisition_1.JobRequisition);
    /**
     * Static representation of the one-to-one navigation property [[userNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionOperator.USER_NAV = new core_1.OneToOneLink('userNav', JobRequisitionOperator, User_1.User);
    /**
     * All fields of the JobRequisitionOperator entity.
     */
    JobRequisitionOperator._allFields = [
        JobRequisitionOperator.ADMIN_SELECTED_USER_TO_BE_REMOVED,
        JobRequisitionOperator.EMAIL,
        JobRequisitionOperator.FAX,
        JobRequisitionOperator.FIRST_NAME,
        JobRequisitionOperator.IS_ADMIN_SELECTED,
        JobRequisitionOperator.JOB_REQ_ID,
        JobRequisitionOperator.LAST_NAME,
        JobRequisitionOperator.OPERATOR_ROLE,
        JobRequisitionOperator.PHONE,
        JobRequisitionOperator.USER_NAME,
        JobRequisitionOperator.USERS_SYS_ID,
        JobRequisitionOperator.JOB_REQUISITION,
        JobRequisitionOperator.USER_NAV
    ];
    /**
     * All fields selector.
     */
    JobRequisitionOperator.ALL_FIELDS = new core_1.AllFields('*', JobRequisitionOperator);
    /**
     * All key fields of the JobRequisitionOperator entity.
     */
    JobRequisitionOperator._keyFields = [JobRequisitionOperator.JOB_REQ_ID, JobRequisitionOperator.OPERATOR_ROLE];
    /**
     * Mapping of all key field names to the respective static field property JobRequisitionOperator.
     */
    JobRequisitionOperator._keys = JobRequisitionOperator._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobRequisitionOperator = exports.JobRequisitionOperator || (exports.JobRequisitionOperator = {}));
exports.JobRequisitionOperator = JobRequisitionOperator;
//# sourceMappingURL=JobRequisitionOperator.js.map