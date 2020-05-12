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
var PayCalendarRequestBuilder_1 = require("./PayCalendarRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PayCalendar" of service "SFOData".
 */
var PayCalendar = /** @class */ (function (_super) {
    __extends(PayCalendar, _super);
    function PayCalendar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PayCalendar`.
     * @returns A builder that constructs instances of entity type `PayCalendar`.
     */
    PayCalendar.builder = function () {
        return core_1.Entity.entityBuilder(PayCalendar);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PayCalendar` entity type.
     * @returns A `PayCalendar` request builder.
     */
    PayCalendar.requestBuilder = function () {
        return new PayCalendarRequestBuilder_1.PayCalendarRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PayCalendar`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PayCalendar`.
     */
    PayCalendar.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PayCalendar);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PayCalendar.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PayCalendar.
     */
    PayCalendar._entityName = 'PayCalendar';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PayCalendar.
     */
    PayCalendar._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PayCalendar._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PayCalendar;
}(core_1.Entity));
exports.PayCalendar = PayCalendar;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var FoPayGroup_1 = require("./FoPayGroup");
var PayPeriod_1 = require("./PayPeriod");
var WfRequest_1 = require("./WfRequest");
(function (PayCalendar) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayCalendar.CREATED_BY = new core_1.StringField('createdBy', PayCalendar, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayCalendar.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PayCalendar, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayCalendar.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PayCalendar, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayCalendar.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PayCalendar, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayCalendar.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PayCalendar, 'Edm.String');
    /**
     * Static representation of the [[payGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayCalendar.PAY_GROUP = new core_1.StringField('payGroup', PayCalendar, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayCalendar.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PayCalendar, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayCalendar.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PayCalendar, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayCalendar.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PayCalendar, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[payGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayCalendar.PAY_GROUP_NAV = new core_1.Link('payGroupNav', PayCalendar, FoPayGroup_1.FoPayGroup);
    /**
     * Static representation of the one-to-many navigation property [[toPayPeriod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayCalendar.TO_PAY_PERIOD = new core_1.Link('toPayPeriod', PayCalendar, PayPeriod_1.PayPeriod);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayCalendar.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', PayCalendar, WfRequest_1.WfRequest);
    /**
     * All fields of the PayCalendar entity.
     */
    PayCalendar._allFields = [
        PayCalendar.CREATED_BY,
        PayCalendar.CREATED_DATE_TIME,
        PayCalendar.LAST_MODIFIED_BY,
        PayCalendar.LAST_MODIFIED_DATE_TIME,
        PayCalendar.MDF_SYSTEM_RECORD_STATUS,
        PayCalendar.PAY_GROUP,
        PayCalendar.CREATED_BY_NAV,
        PayCalendar.LAST_MODIFIED_BY_NAV,
        PayCalendar.MDF_SYSTEM_RECORD_STATUS_NAV,
        PayCalendar.PAY_GROUP_NAV,
        PayCalendar.TO_PAY_PERIOD,
        PayCalendar.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    PayCalendar.ALL_FIELDS = new core_1.AllFields('*', PayCalendar);
    /**
     * All key fields of the PayCalendar entity.
     */
    PayCalendar._keyFields = [PayCalendar.PAY_GROUP];
    /**
     * Mapping of all key field names to the respective static field property PayCalendar.
     */
    PayCalendar._keys = PayCalendar._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PayCalendar = exports.PayCalendar || (exports.PayCalendar = {}));
exports.PayCalendar = PayCalendar;
//# sourceMappingURL=PayCalendar.js.map