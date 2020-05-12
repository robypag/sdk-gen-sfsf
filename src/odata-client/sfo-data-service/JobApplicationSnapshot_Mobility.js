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
var JobApplicationSnapshot_MobilityRequestBuilder_1 = require("./JobApplicationSnapshot_MobilityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobApplicationSnapshot_Mobility" of service "SFOData".
 */
var JobApplicationSnapshot_Mobility = /** @class */ (function (_super) {
    __extends(JobApplicationSnapshot_Mobility, _super);
    function JobApplicationSnapshot_Mobility() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobApplicationSnapshot_Mobility`.
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Mobility`.
     */
    JobApplicationSnapshot_Mobility.builder = function () {
        return core_1.Entity.entityBuilder(JobApplicationSnapshot_Mobility);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationSnapshot_Mobility` entity type.
     * @returns A `JobApplicationSnapshot_Mobility` request builder.
     */
    JobApplicationSnapshot_Mobility.requestBuilder = function () {
        return new JobApplicationSnapshot_MobilityRequestBuilder_1.JobApplicationSnapshot_MobilityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationSnapshot_Mobility`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Mobility`.
     */
    JobApplicationSnapshot_Mobility.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobApplicationSnapshot_Mobility);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobApplicationSnapshot_Mobility.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobApplicationSnapshot_Mobility.
     */
    JobApplicationSnapshot_Mobility._entityName = 'JobApplicationSnapshot_Mobility';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationSnapshot_Mobility.
     */
    JobApplicationSnapshot_Mobility._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobApplicationSnapshot_Mobility._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobApplicationSnapshot_Mobility;
}(core_1.Entity));
exports.JobApplicationSnapshot_Mobility = JobApplicationSnapshot_Mobility;
var JobApplication_1 = require("./JobApplication");
var PicklistOption_1 = require("./PicklistOption");
(function (JobApplicationSnapshot_Mobility) {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Mobility.APPLICATION_ID = new core_1.BigNumberField('applicationId', JobApplicationSnapshot_Mobility, 'Edm.Int64');
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Mobility.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', JobApplicationSnapshot_Mobility, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Mobility.BG_ORDER_POS = new core_1.BigNumberField('bgOrderPos', JobApplicationSnapshot_Mobility, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Mobility.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', JobApplicationSnapshot_Mobility, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Mobility.LOCATION = new core_1.StringField('location', JobApplicationSnapshot_Mobility, 'Edm.String');
    /**
     * Static representation of the [[willingness]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Mobility.WILLINGNESS = new core_1.StringField('willingness', JobApplicationSnapshot_Mobility, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[application]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Mobility.APPLICATION = new core_1.OneToOneLink('application', JobApplicationSnapshot_Mobility, JobApplication_1.JobApplication);
    /**
     * Static representation of the one-to-one navigation property [[willingnessNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Mobility.WILLINGNESS_NAV = new core_1.OneToOneLink('willingnessNav', JobApplicationSnapshot_Mobility, PicklistOption_1.PicklistOption);
    /**
     * All fields of the JobApplicationSnapshot_Mobility entity.
     */
    JobApplicationSnapshot_Mobility._allFields = [
        JobApplicationSnapshot_Mobility.APPLICATION_ID,
        JobApplicationSnapshot_Mobility.BACKGROUND_ELEMENT_ID,
        JobApplicationSnapshot_Mobility.BG_ORDER_POS,
        JobApplicationSnapshot_Mobility.LAST_MODIFIED_DATE_TIME,
        JobApplicationSnapshot_Mobility.LOCATION,
        JobApplicationSnapshot_Mobility.WILLINGNESS,
        JobApplicationSnapshot_Mobility.APPLICATION,
        JobApplicationSnapshot_Mobility.WILLINGNESS_NAV
    ];
    /**
     * All fields selector.
     */
    JobApplicationSnapshot_Mobility.ALL_FIELDS = new core_1.AllFields('*', JobApplicationSnapshot_Mobility);
    /**
     * All key fields of the JobApplicationSnapshot_Mobility entity.
     */
    JobApplicationSnapshot_Mobility._keyFields = [JobApplicationSnapshot_Mobility.BACKGROUND_ELEMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property JobApplicationSnapshot_Mobility.
     */
    JobApplicationSnapshot_Mobility._keys = JobApplicationSnapshot_Mobility._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobApplicationSnapshot_Mobility = exports.JobApplicationSnapshot_Mobility || (exports.JobApplicationSnapshot_Mobility = {}));
exports.JobApplicationSnapshot_Mobility = JobApplicationSnapshot_Mobility;
//# sourceMappingURL=JobApplicationSnapshot_Mobility.js.map