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
var TemporaryTimeInformationRequestBuilder_1 = require("./TemporaryTimeInformationRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TemporaryTimeInformation" of service "SFOData".
 */
var TemporaryTimeInformation = /** @class */ (function (_super) {
    __extends(TemporaryTimeInformation, _super);
    function TemporaryTimeInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TemporaryTimeInformation`.
     * @returns A builder that constructs instances of entity type `TemporaryTimeInformation`.
     */
    TemporaryTimeInformation.builder = function () {
        return core_1.Entity.entityBuilder(TemporaryTimeInformation);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TemporaryTimeInformation` entity type.
     * @returns A `TemporaryTimeInformation` request builder.
     */
    TemporaryTimeInformation.requestBuilder = function () {
        return new TemporaryTimeInformationRequestBuilder_1.TemporaryTimeInformationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TemporaryTimeInformation`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TemporaryTimeInformation`.
     */
    TemporaryTimeInformation.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TemporaryTimeInformation);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TemporaryTimeInformation.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TemporaryTimeInformation.
     */
    TemporaryTimeInformation._entityName = 'TemporaryTimeInformation';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TemporaryTimeInformation.
     */
    TemporaryTimeInformation._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TemporaryTimeInformation._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return TemporaryTimeInformation;
}(core_1.Entity));
exports.TemporaryTimeInformation = TemporaryTimeInformation;
var User_1 = require("./User");
var WorkScheduleDayModel_1 = require("./WorkScheduleDayModel");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
var WorkSchedule_1 = require("./WorkSchedule");
(function (TemporaryTimeInformation) {
    /**
     * Static representation of the [[comment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TemporaryTimeInformation.COMMENT = new core_1.StringField('comment', TemporaryTimeInformation, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TemporaryTimeInformation.CREATED_BY = new core_1.StringField('createdBy', TemporaryTimeInformation, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TemporaryTimeInformation.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', TemporaryTimeInformation, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[dayModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TemporaryTimeInformation.DAY_MODEL = new core_1.StringField('dayModel', TemporaryTimeInformation, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TemporaryTimeInformation.END_DATE = new core_1.DateField('endDate', TemporaryTimeInformation, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TemporaryTimeInformation.EXTERNAL_CODE = new core_1.StringField('externalCode', TemporaryTimeInformation, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TemporaryTimeInformation.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', TemporaryTimeInformation, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TemporaryTimeInformation.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', TemporaryTimeInformation, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TemporaryTimeInformation.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', TemporaryTimeInformation, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TemporaryTimeInformation.START_DATE = new core_1.DateField('startDate', TemporaryTimeInformation, 'Edm.DateTime');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TemporaryTimeInformation.USER_ID = new core_1.StringField('userId', TemporaryTimeInformation, 'Edm.String');
    /**
     * Static representation of the [[workSchedule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TemporaryTimeInformation.WORK_SCHEDULE = new core_1.StringField('workSchedule', TemporaryTimeInformation, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TemporaryTimeInformation.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', TemporaryTimeInformation, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[dayModelNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TemporaryTimeInformation.DAY_MODEL_NAV = new core_1.OneToOneLink('dayModelNav', TemporaryTimeInformation, WorkScheduleDayModel_1.WorkScheduleDayModel);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TemporaryTimeInformation.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', TemporaryTimeInformation, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TemporaryTimeInformation.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', TemporaryTimeInformation, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TemporaryTimeInformation.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', TemporaryTimeInformation, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TemporaryTimeInformation.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', TemporaryTimeInformation, WfRequest_1.WfRequest);
    /**
     * Static representation of the one-to-one navigation property [[workScheduleNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TemporaryTimeInformation.WORK_SCHEDULE_NAV = new core_1.OneToOneLink('workScheduleNav', TemporaryTimeInformation, WorkSchedule_1.WorkSchedule);
    /**
     * All fields of the TemporaryTimeInformation entity.
     */
    TemporaryTimeInformation._allFields = [
        TemporaryTimeInformation.COMMENT,
        TemporaryTimeInformation.CREATED_BY,
        TemporaryTimeInformation.CREATED_DATE_TIME,
        TemporaryTimeInformation.DAY_MODEL,
        TemporaryTimeInformation.END_DATE,
        TemporaryTimeInformation.EXTERNAL_CODE,
        TemporaryTimeInformation.LAST_MODIFIED_BY,
        TemporaryTimeInformation.LAST_MODIFIED_DATE_TIME,
        TemporaryTimeInformation.MDF_SYSTEM_RECORD_STATUS,
        TemporaryTimeInformation.START_DATE,
        TemporaryTimeInformation.USER_ID,
        TemporaryTimeInformation.WORK_SCHEDULE,
        TemporaryTimeInformation.CREATED_BY_NAV,
        TemporaryTimeInformation.DAY_MODEL_NAV,
        TemporaryTimeInformation.LAST_MODIFIED_BY_NAV,
        TemporaryTimeInformation.MDF_SYSTEM_RECORD_STATUS_NAV,
        TemporaryTimeInformation.USER_ID_NAV,
        TemporaryTimeInformation.WF_REQUEST_NAV,
        TemporaryTimeInformation.WORK_SCHEDULE_NAV
    ];
    /**
     * All fields selector.
     */
    TemporaryTimeInformation.ALL_FIELDS = new core_1.AllFields('*', TemporaryTimeInformation);
    /**
     * All key fields of the TemporaryTimeInformation entity.
     */
    TemporaryTimeInformation._keyFields = [TemporaryTimeInformation.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property TemporaryTimeInformation.
     */
    TemporaryTimeInformation._keys = TemporaryTimeInformation._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TemporaryTimeInformation = exports.TemporaryTimeInformation || (exports.TemporaryTimeInformation = {}));
exports.TemporaryTimeInformation = TemporaryTimeInformation;
//# sourceMappingURL=TemporaryTimeInformation.js.map