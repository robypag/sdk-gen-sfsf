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
var JobRequisitionLocaleFieldControlsRequestBuilder_1 = require("./JobRequisitionLocaleFieldControlsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobRequisitionLocaleFieldControls" of service "SFOData".
 */
var JobRequisitionLocaleFieldControls = /** @class */ (function (_super) {
    __extends(JobRequisitionLocaleFieldControls, _super);
    function JobRequisitionLocaleFieldControls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobRequisitionLocaleFieldControls`.
     * @returns A builder that constructs instances of entity type `JobRequisitionLocaleFieldControls`.
     */
    JobRequisitionLocaleFieldControls.builder = function () {
        return core_1.Entity.entityBuilder(JobRequisitionLocaleFieldControls);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobRequisitionLocaleFieldControls` entity type.
     * @returns A `JobRequisitionLocaleFieldControls` request builder.
     */
    JobRequisitionLocaleFieldControls.requestBuilder = function () {
        return new JobRequisitionLocaleFieldControlsRequestBuilder_1.JobRequisitionLocaleFieldControlsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobRequisitionLocaleFieldControls`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobRequisitionLocaleFieldControls`.
     */
    JobRequisitionLocaleFieldControls.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobRequisitionLocaleFieldControls);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobRequisitionLocaleFieldControls.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobRequisitionLocaleFieldControls.
     */
    JobRequisitionLocaleFieldControls._entityName = 'JobRequisitionLocaleFieldControls';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobRequisitionLocaleFieldControls.
     */
    JobRequisitionLocaleFieldControls._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobRequisitionLocaleFieldControls._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobRequisitionLocaleFieldControls;
}(core_1.Entity));
exports.JobRequisitionLocaleFieldControls = JobRequisitionLocaleFieldControls;
(function (JobRequisitionLocaleFieldControls) {
    /**
     * Static representation of the [[extJobDescFooter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocaleFieldControls.EXT_JOB_DESC_FOOTER = new core_1.NumberField('extJobDescFooter', JobRequisitionLocaleFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[extJobDescHeader]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocaleFieldControls.EXT_JOB_DESC_HEADER = new core_1.NumberField('extJobDescHeader', JobRequisitionLocaleFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[externalJobDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocaleFieldControls.EXTERNAL_JOB_DESCRIPTION = new core_1.NumberField('externalJobDescription', JobRequisitionLocaleFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[externalTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocaleFieldControls.EXTERNAL_TITLE = new core_1.NumberField('externalTitle', JobRequisitionLocaleFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[intJobDescFooter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocaleFieldControls.INT_JOB_DESC_FOOTER = new core_1.NumberField('intJobDescFooter', JobRequisitionLocaleFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[intJobDescHeader]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocaleFieldControls.INT_JOB_DESC_HEADER = new core_1.NumberField('intJobDescHeader', JobRequisitionLocaleFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocaleFieldControls.JOB_DESCRIPTION = new core_1.NumberField('jobDescription', JobRequisitionLocaleFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocaleFieldControls.JOB_REQ_ID = new core_1.NumberField('jobReqId', JobRequisitionLocaleFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobReqLocalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocaleFieldControls.JOB_REQ_LOCAL_ID = new core_1.NumberField('jobReqLocalId', JobRequisitionLocaleFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobReqLocalePermissionsNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocaleFieldControls.JOB_REQ_LOCALE_PERMISSIONS_NAV = new core_1.NumberField('jobReqLocalePermissionsNav', JobRequisitionLocaleFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobRequisition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocaleFieldControls.JOB_REQUISITION = new core_1.NumberField('jobRequisition', JobRequisitionLocaleFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocaleFieldControls.JOB_TITLE = new core_1.NumberField('jobTitle', JobRequisitionLocaleFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[locale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocaleFieldControls.LOCALE = new core_1.NumberField('locale', JobRequisitionLocaleFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocaleFieldControls.STATUS = new core_1.NumberField('status', JobRequisitionLocaleFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[templateHeaderFooter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocaleFieldControls.TEMPLATE_HEADER_FOOTER = new core_1.NumberField('templateHeaderFooter', JobRequisitionLocaleFieldControls, 'Edm.Byte');
    /**
     * All fields of the JobRequisitionLocaleFieldControls entity.
     */
    JobRequisitionLocaleFieldControls._allFields = [
        JobRequisitionLocaleFieldControls.EXT_JOB_DESC_FOOTER,
        JobRequisitionLocaleFieldControls.EXT_JOB_DESC_HEADER,
        JobRequisitionLocaleFieldControls.EXTERNAL_JOB_DESCRIPTION,
        JobRequisitionLocaleFieldControls.EXTERNAL_TITLE,
        JobRequisitionLocaleFieldControls.INT_JOB_DESC_FOOTER,
        JobRequisitionLocaleFieldControls.INT_JOB_DESC_HEADER,
        JobRequisitionLocaleFieldControls.JOB_DESCRIPTION,
        JobRequisitionLocaleFieldControls.JOB_REQ_ID,
        JobRequisitionLocaleFieldControls.JOB_REQ_LOCAL_ID,
        JobRequisitionLocaleFieldControls.JOB_REQ_LOCALE_PERMISSIONS_NAV,
        JobRequisitionLocaleFieldControls.JOB_REQUISITION,
        JobRequisitionLocaleFieldControls.JOB_TITLE,
        JobRequisitionLocaleFieldControls.LOCALE,
        JobRequisitionLocaleFieldControls.STATUS,
        JobRequisitionLocaleFieldControls.TEMPLATE_HEADER_FOOTER
    ];
    /**
     * All fields selector.
     */
    JobRequisitionLocaleFieldControls.ALL_FIELDS = new core_1.AllFields('*', JobRequisitionLocaleFieldControls);
    /**
     * All key fields of the JobRequisitionLocaleFieldControls entity.
     */
    JobRequisitionLocaleFieldControls._keyFields = [JobRequisitionLocaleFieldControls.JOB_REQ_LOCAL_ID];
    /**
     * Mapping of all key field names to the respective static field property JobRequisitionLocaleFieldControls.
     */
    JobRequisitionLocaleFieldControls._keys = JobRequisitionLocaleFieldControls._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobRequisitionLocaleFieldControls = exports.JobRequisitionLocaleFieldControls || (exports.JobRequisitionLocaleFieldControls = {}));
exports.JobRequisitionLocaleFieldControls = JobRequisitionLocaleFieldControls;
//# sourceMappingURL=JobRequisitionLocaleFieldControls.js.map