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
var ExternalTimeSegmentRequestBuilder_1 = require("./ExternalTimeSegmentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ExternalTimeSegment" of service "SFOData".
 */
var ExternalTimeSegment = /** @class */ (function (_super) {
    __extends(ExternalTimeSegment, _super);
    function ExternalTimeSegment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ExternalTimeSegment`.
     * @returns A builder that constructs instances of entity type `ExternalTimeSegment`.
     */
    ExternalTimeSegment.builder = function () {
        return core_1.Entity.entityBuilder(ExternalTimeSegment);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ExternalTimeSegment` entity type.
     * @returns A `ExternalTimeSegment` request builder.
     */
    ExternalTimeSegment.requestBuilder = function () {
        return new ExternalTimeSegmentRequestBuilder_1.ExternalTimeSegmentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExternalTimeSegment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ExternalTimeSegment`.
     */
    ExternalTimeSegment.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, ExternalTimeSegment);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ExternalTimeSegment.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ExternalTimeSegment.
     */
    ExternalTimeSegment._entityName = 'ExternalTimeSegment';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ExternalTimeSegment.
     */
    ExternalTimeSegment._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    ExternalTimeSegment._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ExternalTimeSegment;
}(core_1.Entity));
exports.ExternalTimeSegment = ExternalTimeSegment;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (ExternalTimeSegment) {
    /**
     * Static representation of the [[externalTimeRecordExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeSegment.EXTERNAL_TIME_RECORD_EXTERNAL_CODE = new core_1.StringField('ExternalTimeRecord_externalCode', ExternalTimeSegment, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeSegment.CREATED_BY = new core_1.StringField('createdBy', ExternalTimeSegment, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeSegment.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', ExternalTimeSegment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeSegment.EXTERNAL_CODE = new core_1.StringField('externalCode', ExternalTimeSegment, 'Edm.String');
    /**
     * Static representation of the [[hours]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeSegment.HOURS = new core_1.BigNumberField('hours', ExternalTimeSegment, 'Edm.Decimal');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeSegment.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', ExternalTimeSegment, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeSegment.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', ExternalTimeSegment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeSegment.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', ExternalTimeSegment, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeSegment.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', ExternalTimeSegment, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeSegment.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', ExternalTimeSegment, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeSegment.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', ExternalTimeSegment, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the ExternalTimeSegment entity.
     */
    ExternalTimeSegment._allFields = [
        ExternalTimeSegment.EXTERNAL_TIME_RECORD_EXTERNAL_CODE,
        ExternalTimeSegment.CREATED_BY,
        ExternalTimeSegment.CREATED_DATE_TIME,
        ExternalTimeSegment.EXTERNAL_CODE,
        ExternalTimeSegment.HOURS,
        ExternalTimeSegment.LAST_MODIFIED_BY,
        ExternalTimeSegment.LAST_MODIFIED_DATE_TIME,
        ExternalTimeSegment.MDF_SYSTEM_RECORD_STATUS,
        ExternalTimeSegment.CREATED_BY_NAV,
        ExternalTimeSegment.LAST_MODIFIED_BY_NAV,
        ExternalTimeSegment.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    ExternalTimeSegment.ALL_FIELDS = new core_1.AllFields('*', ExternalTimeSegment);
    /**
     * All key fields of the ExternalTimeSegment entity.
     */
    ExternalTimeSegment._keyFields = [ExternalTimeSegment.EXTERNAL_TIME_RECORD_EXTERNAL_CODE, ExternalTimeSegment.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property ExternalTimeSegment.
     */
    ExternalTimeSegment._keys = ExternalTimeSegment._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ExternalTimeSegment = exports.ExternalTimeSegment || (exports.ExternalTimeSegment = {}));
exports.ExternalTimeSegment = ExternalTimeSegment;
//# sourceMappingURL=ExternalTimeSegment.js.map