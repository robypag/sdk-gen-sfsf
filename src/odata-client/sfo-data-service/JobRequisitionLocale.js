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
var JobRequisitionLocaleRequestBuilder_1 = require("./JobRequisitionLocaleRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobRequisitionLocale" of service "SFOData".
 */
var JobRequisitionLocale = /** @class */ (function (_super) {
    __extends(JobRequisitionLocale, _super);
    function JobRequisitionLocale() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobRequisitionLocale`.
     * @returns A builder that constructs instances of entity type `JobRequisitionLocale`.
     */
    JobRequisitionLocale.builder = function () {
        return core_1.Entity.entityBuilder(JobRequisitionLocale);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobRequisitionLocale` entity type.
     * @returns A `JobRequisitionLocale` request builder.
     */
    JobRequisitionLocale.requestBuilder = function () {
        return new JobRequisitionLocaleRequestBuilder_1.JobRequisitionLocaleRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobRequisitionLocale`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobRequisitionLocale`.
     */
    JobRequisitionLocale.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobRequisitionLocale);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobRequisitionLocale.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobRequisitionLocale.
     */
    JobRequisitionLocale._entityName = 'JobRequisitionLocale';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobRequisitionLocale.
     */
    JobRequisitionLocale._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobRequisitionLocale._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobRequisitionLocale;
}(core_1.Entity));
exports.JobRequisitionLocale = JobRequisitionLocale;
var JobRequisitionLocaleFieldControls_1 = require("./JobRequisitionLocaleFieldControls");
var JobRequisition_1 = require("./JobRequisition");
(function (JobRequisitionLocale) {
    /**
     * Static representation of the [[extJobDescFooter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocale.EXT_JOB_DESC_FOOTER = new core_1.StringField('extJobDescFooter', JobRequisitionLocale, 'Edm.String');
    /**
     * Static representation of the [[extJobDescHeader]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocale.EXT_JOB_DESC_HEADER = new core_1.StringField('extJobDescHeader', JobRequisitionLocale, 'Edm.String');
    /**
     * Static representation of the [[externalJobDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocale.EXTERNAL_JOB_DESCRIPTION = new core_1.StringField('externalJobDescription', JobRequisitionLocale, 'Edm.String');
    /**
     * Static representation of the [[externalTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocale.EXTERNAL_TITLE = new core_1.StringField('externalTitle', JobRequisitionLocale, 'Edm.String');
    /**
     * Static representation of the [[intJobDescFooter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocale.INT_JOB_DESC_FOOTER = new core_1.StringField('intJobDescFooter', JobRequisitionLocale, 'Edm.String');
    /**
     * Static representation of the [[intJobDescHeader]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocale.INT_JOB_DESC_HEADER = new core_1.StringField('intJobDescHeader', JobRequisitionLocale, 'Edm.String');
    /**
     * Static representation of the [[jobDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocale.JOB_DESCRIPTION = new core_1.StringField('jobDescription', JobRequisitionLocale, 'Edm.String');
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocale.JOB_REQ_ID = new core_1.BigNumberField('jobReqId', JobRequisitionLocale, 'Edm.Int64');
    /**
     * Static representation of the [[jobReqLocalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocale.JOB_REQ_LOCAL_ID = new core_1.BigNumberField('jobReqLocalId', JobRequisitionLocale, 'Edm.Int64');
    /**
     * Static representation of the [[jobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocale.JOB_TITLE = new core_1.StringField('jobTitle', JobRequisitionLocale, 'Edm.String');
    /**
     * Static representation of the [[locale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocale.LOCALE = new core_1.StringField('locale', JobRequisitionLocale, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocale.STATUS = new core_1.StringField('status', JobRequisitionLocale, 'Edm.String');
    /**
     * Static representation of the [[templateHeaderFooter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocale.TEMPLATE_HEADER_FOOTER = new core_1.StringField('templateHeaderFooter', JobRequisitionLocale, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[jobReqLocalePermissionsNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocale.JOB_REQ_LOCALE_PERMISSIONS_NAV = new core_1.OneToOneLink('jobReqLocalePermissionsNav', JobRequisitionLocale, JobRequisitionLocaleFieldControls_1.JobRequisitionLocaleFieldControls);
    /**
     * Static representation of the one-to-one navigation property [[jobRequisition]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobRequisitionLocale.JOB_REQUISITION = new core_1.OneToOneLink('jobRequisition', JobRequisitionLocale, JobRequisition_1.JobRequisition);
    /**
     * All fields of the JobRequisitionLocale entity.
     */
    JobRequisitionLocale._allFields = [
        JobRequisitionLocale.EXT_JOB_DESC_FOOTER,
        JobRequisitionLocale.EXT_JOB_DESC_HEADER,
        JobRequisitionLocale.EXTERNAL_JOB_DESCRIPTION,
        JobRequisitionLocale.EXTERNAL_TITLE,
        JobRequisitionLocale.INT_JOB_DESC_FOOTER,
        JobRequisitionLocale.INT_JOB_DESC_HEADER,
        JobRequisitionLocale.JOB_DESCRIPTION,
        JobRequisitionLocale.JOB_REQ_ID,
        JobRequisitionLocale.JOB_REQ_LOCAL_ID,
        JobRequisitionLocale.JOB_TITLE,
        JobRequisitionLocale.LOCALE,
        JobRequisitionLocale.STATUS,
        JobRequisitionLocale.TEMPLATE_HEADER_FOOTER,
        JobRequisitionLocale.JOB_REQ_LOCALE_PERMISSIONS_NAV,
        JobRequisitionLocale.JOB_REQUISITION
    ];
    /**
     * All fields selector.
     */
    JobRequisitionLocale.ALL_FIELDS = new core_1.AllFields('*', JobRequisitionLocale);
    /**
     * All key fields of the JobRequisitionLocale entity.
     */
    JobRequisitionLocale._keyFields = [JobRequisitionLocale.JOB_REQ_LOCAL_ID];
    /**
     * Mapping of all key field names to the respective static field property JobRequisitionLocale.
     */
    JobRequisitionLocale._keys = JobRequisitionLocale._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobRequisitionLocale = exports.JobRequisitionLocale || (exports.JobRequisitionLocale = {}));
exports.JobRequisitionLocale = JobRequisitionLocale;
//# sourceMappingURL=JobRequisitionLocale.js.map