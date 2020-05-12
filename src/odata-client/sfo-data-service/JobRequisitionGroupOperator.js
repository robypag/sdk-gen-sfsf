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
var JobRequisitionGroupOperatorRequestBuilder_1 = require("./JobRequisitionGroupOperatorRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobRequisitionGroupOperator" of service "SFOData".
 */
var JobRequisitionGroupOperator = /** @class */ (function (_super) {
    __extends(JobRequisitionGroupOperator, _super);
    function JobRequisitionGroupOperator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobRequisitionGroupOperator`.
     * @returns A builder that constructs instances of entity type `JobRequisitionGroupOperator`.
     */
    JobRequisitionGroupOperator.builder = function () {
        return core_1.Entity.entityBuilder(JobRequisitionGroupOperator);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobRequisitionGroupOperator` entity type.
     * @returns A `JobRequisitionGroupOperator` request builder.
     */
    JobRequisitionGroupOperator.requestBuilder = function () {
        return new JobRequisitionGroupOperatorRequestBuilder_1.JobRequisitionGroupOperatorRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobRequisitionGroupOperator`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobRequisitionGroupOperator`.
     */
    JobRequisitionGroupOperator.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobRequisitionGroupOperator);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobRequisitionGroupOperator.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobRequisitionGroupOperator.
     */
    JobRequisitionGroupOperator._entityName = 'JobRequisitionGroupOperator';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobRequisitionGroupOperator.
     */
    JobRequisitionGroupOperator._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobRequisitionGroupOperator._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobRequisitionGroupOperator;
}(core_1.Entity));
exports.JobRequisitionGroupOperator = JobRequisitionGroupOperator;
var JobRequisition_1 = require("./JobRequisition");
(function (JobRequisitionGroupOperator) {
    /**
     * Static representation of the [[adminSelectedGroupToBeRemoved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionGroupOperator.ADMIN_SELECTED_GROUP_TO_BE_REMOVED = new core_1.BooleanField('adminSelectedGroupToBeRemoved', JobRequisitionGroupOperator, 'Edm.Boolean');
    /**
     * Static representation of the [[isAdminSelected]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionGroupOperator.IS_ADMIN_SELECTED = new core_1.BooleanField('isAdminSelected', JobRequisitionGroupOperator, 'Edm.Boolean');
    /**
     * Static representation of the [[isDisabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionGroupOperator.IS_DISABLED = new core_1.BooleanField('isDisabled', JobRequisitionGroupOperator, 'Edm.Boolean');
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionGroupOperator.JOB_REQ_ID = new core_1.BigNumberField('jobReqId', JobRequisitionGroupOperator, 'Edm.Int64');
    /**
     * Static representation of the [[operatorRole]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionGroupOperator.OPERATOR_ROLE = new core_1.StringField('operatorRole', JobRequisitionGroupOperator, 'Edm.String');
    /**
     * Static representation of the [[userGroupId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionGroupOperator.USER_GROUP_ID = new core_1.BigNumberField('userGroupId', JobRequisitionGroupOperator, 'Edm.Int64');
    /**
     * Static representation of the [[userGroupName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionGroupOperator.USER_GROUP_NAME = new core_1.StringField('userGroupName', JobRequisitionGroupOperator, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[jobRequisition]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionGroupOperator.JOB_REQUISITION = new core_1.OneToOneLink('jobRequisition', JobRequisitionGroupOperator, JobRequisition_1.JobRequisition);
    /**
     * All fields of the JobRequisitionGroupOperator entity.
     */
    JobRequisitionGroupOperator._allFields = [
        JobRequisitionGroupOperator.ADMIN_SELECTED_GROUP_TO_BE_REMOVED,
        JobRequisitionGroupOperator.IS_ADMIN_SELECTED,
        JobRequisitionGroupOperator.IS_DISABLED,
        JobRequisitionGroupOperator.JOB_REQ_ID,
        JobRequisitionGroupOperator.OPERATOR_ROLE,
        JobRequisitionGroupOperator.USER_GROUP_ID,
        JobRequisitionGroupOperator.USER_GROUP_NAME,
        JobRequisitionGroupOperator.JOB_REQUISITION
    ];
    /**
     * All fields selector.
     */
    JobRequisitionGroupOperator.ALL_FIELDS = new core_1.AllFields('*', JobRequisitionGroupOperator);
    /**
     * All key fields of the JobRequisitionGroupOperator entity.
     */
    JobRequisitionGroupOperator._keyFields = [JobRequisitionGroupOperator.JOB_REQ_ID, JobRequisitionGroupOperator.OPERATOR_ROLE, JobRequisitionGroupOperator.USER_GROUP_ID];
    /**
     * Mapping of all key field names to the respective static field property JobRequisitionGroupOperator.
     */
    JobRequisitionGroupOperator._keys = JobRequisitionGroupOperator._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobRequisitionGroupOperator = exports.JobRequisitionGroupOperator || (exports.JobRequisitionGroupOperator = {}));
exports.JobRequisitionGroupOperator = JobRequisitionGroupOperator;
//# sourceMappingURL=JobRequisitionGroupOperator.js.map