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
var TimeCollectorRequestBuilder_1 = require("./TimeCollectorRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TimeCollector" of service "SFOData".
 */
var TimeCollector = /** @class */ (function (_super) {
    __extends(TimeCollector, _super);
    function TimeCollector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TimeCollector`.
     * @returns A builder that constructs instances of entity type `TimeCollector`.
     */
    TimeCollector.builder = function () {
        return core_1.Entity.entityBuilder(TimeCollector);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TimeCollector` entity type.
     * @returns A `TimeCollector` request builder.
     */
    TimeCollector.requestBuilder = function () {
        return new TimeCollectorRequestBuilder_1.TimeCollectorRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeCollector`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeCollector`.
     */
    TimeCollector.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TimeCollector);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TimeCollector.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TimeCollector.
     */
    TimeCollector._entityName = 'TimeCollector';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeCollector.
     */
    TimeCollector._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TimeCollector._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return TimeCollector;
}(core_1.Entity));
exports.TimeCollector = TimeCollector;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (TimeCollector) {
    /**
     * Static representation of the [[bookingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeCollector.BOOKING_DATE = new core_1.DateField('bookingDate', TimeCollector, 'Edm.DateTime');
    /**
     * Static representation of the [[changeValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeCollector.CHANGE_VALUE = new core_1.BigNumberField('changeValue', TimeCollector, 'Edm.Decimal');
    /**
     * Static representation of the [[collectorValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeCollector.COLLECTOR_VALUE = new core_1.BigNumberField('collectorValue', TimeCollector, 'Edm.Decimal');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeCollector.CREATED_BY = new core_1.StringField('createdBy', TimeCollector, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeCollector.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', TimeCollector, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeCollector.END_DATE = new core_1.DateField('endDate', TimeCollector, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeCollector.EXTERNAL_CODE = new core_1.StringField('externalCode', TimeCollector, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeCollector.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', TimeCollector, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeCollector.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', TimeCollector, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeCollector.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', TimeCollector, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeCollector.START_DATE = new core_1.DateField('startDate', TimeCollector, 'Edm.DateTime');
    /**
     * Static representation of the [[timeCollectorType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeCollector.TIME_COLLECTOR_TYPE = new core_1.StringField('timeCollectorType', TimeCollector, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeCollector.USER_ID = new core_1.StringField('userId', TimeCollector, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeCollector.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', TimeCollector, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeCollector.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', TimeCollector, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeCollector.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', TimeCollector, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeCollector.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', TimeCollector, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeCollector.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', TimeCollector, WfRequest_1.WfRequest);
    /**
     * All fields of the TimeCollector entity.
     */
    TimeCollector._allFields = [
        TimeCollector.BOOKING_DATE,
        TimeCollector.CHANGE_VALUE,
        TimeCollector.COLLECTOR_VALUE,
        TimeCollector.CREATED_BY,
        TimeCollector.CREATED_DATE_TIME,
        TimeCollector.END_DATE,
        TimeCollector.EXTERNAL_CODE,
        TimeCollector.LAST_MODIFIED_BY,
        TimeCollector.LAST_MODIFIED_DATE_TIME,
        TimeCollector.MDF_SYSTEM_RECORD_STATUS,
        TimeCollector.START_DATE,
        TimeCollector.TIME_COLLECTOR_TYPE,
        TimeCollector.USER_ID,
        TimeCollector.CREATED_BY_NAV,
        TimeCollector.LAST_MODIFIED_BY_NAV,
        TimeCollector.MDF_SYSTEM_RECORD_STATUS_NAV,
        TimeCollector.USER_ID_NAV,
        TimeCollector.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    TimeCollector.ALL_FIELDS = new core_1.AllFields('*', TimeCollector);
    /**
     * All key fields of the TimeCollector entity.
     */
    TimeCollector._keyFields = [TimeCollector.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property TimeCollector.
     */
    TimeCollector._keys = TimeCollector._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TimeCollector = exports.TimeCollector || (exports.TimeCollector = {}));
exports.TimeCollector = TimeCollector;
//# sourceMappingURL=TimeCollector.js.map