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
var PaymentInformationV3RequestBuilder_1 = require("./PaymentInformationV3RequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PaymentInformationV3" of service "SFOData".
 */
var PaymentInformationV3 = /** @class */ (function (_super) {
    __extends(PaymentInformationV3, _super);
    function PaymentInformationV3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PaymentInformationV3`.
     * @returns A builder that constructs instances of entity type `PaymentInformationV3`.
     */
    PaymentInformationV3.builder = function () {
        return core_1.Entity.entityBuilder(PaymentInformationV3);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PaymentInformationV3` entity type.
     * @returns A `PaymentInformationV3` request builder.
     */
    PaymentInformationV3.requestBuilder = function () {
        return new PaymentInformationV3RequestBuilder_1.PaymentInformationV3RequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentInformationV3`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PaymentInformationV3`.
     */
    PaymentInformationV3.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PaymentInformationV3);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PaymentInformationV3.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PaymentInformationV3.
     */
    PaymentInformationV3._entityName = 'PaymentInformationV3';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PaymentInformationV3.
     */
    PaymentInformationV3._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PaymentInformationV3._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PaymentInformationV3;
}(core_1.Entity));
exports.PaymentInformationV3 = PaymentInformationV3;
var User_1 = require("./User");
var Country_1 = require("./Country");
var MdfEnumValue_1 = require("./MdfEnumValue");
var PaymentInformationDetailV3_1 = require("./PaymentInformationDetailV3");
var WfRequest_1 = require("./WfRequest");
(function (PaymentInformationV3) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationV3.CREATED_BY = new core_1.StringField('createdBy', PaymentInformationV3, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationV3.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PaymentInformationV3, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[effectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationV3.EFFECTIVE_END_DATE = new core_1.DateField('effectiveEndDate', PaymentInformationV3, 'Edm.DateTime');
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationV3.EFFECTIVE_START_DATE = new core_1.DateField('effectiveStartDate', PaymentInformationV3, 'Edm.DateTime');
    /**
     * Static representation of the [[jobCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationV3.JOB_COUNTRY = new core_1.StringField('jobCountry', PaymentInformationV3, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationV3.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PaymentInformationV3, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationV3.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PaymentInformationV3, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationV3.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PaymentInformationV3, 'Edm.String');
    /**
     * Static representation of the [[worker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationV3.WORKER = new core_1.StringField('worker', PaymentInformationV3, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationV3.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PaymentInformationV3, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[jobCountryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationV3.JOB_COUNTRY_NAV = new core_1.OneToOneLink('jobCountryNav', PaymentInformationV3, Country_1.Country);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationV3.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PaymentInformationV3, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationV3.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PaymentInformationV3, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[toPaymentInformationDetailV3]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationV3.TO_PAYMENT_INFORMATION_DETAIL_V_3 = new core_1.Link('toPaymentInformationDetailV3', PaymentInformationV3, PaymentInformationDetailV3_1.PaymentInformationDetailV3);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationV3.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', PaymentInformationV3, WfRequest_1.WfRequest);
    /**
     * Static representation of the one-to-one navigation property [[workerNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationV3.WORKER_NAV = new core_1.OneToOneLink('workerNav', PaymentInformationV3, User_1.User);
    /**
     * All fields of the PaymentInformationV3 entity.
     */
    PaymentInformationV3._allFields = [
        PaymentInformationV3.CREATED_BY,
        PaymentInformationV3.CREATED_DATE_TIME,
        PaymentInformationV3.EFFECTIVE_END_DATE,
        PaymentInformationV3.EFFECTIVE_START_DATE,
        PaymentInformationV3.JOB_COUNTRY,
        PaymentInformationV3.LAST_MODIFIED_BY,
        PaymentInformationV3.LAST_MODIFIED_DATE_TIME,
        PaymentInformationV3.MDF_SYSTEM_RECORD_STATUS,
        PaymentInformationV3.WORKER,
        PaymentInformationV3.CREATED_BY_NAV,
        PaymentInformationV3.JOB_COUNTRY_NAV,
        PaymentInformationV3.LAST_MODIFIED_BY_NAV,
        PaymentInformationV3.MDF_SYSTEM_RECORD_STATUS_NAV,
        PaymentInformationV3.TO_PAYMENT_INFORMATION_DETAIL_V_3,
        PaymentInformationV3.WF_REQUEST_NAV,
        PaymentInformationV3.WORKER_NAV
    ];
    /**
     * All fields selector.
     */
    PaymentInformationV3.ALL_FIELDS = new core_1.AllFields('*', PaymentInformationV3);
    /**
     * All key fields of the PaymentInformationV3 entity.
     */
    PaymentInformationV3._keyFields = [PaymentInformationV3.EFFECTIVE_START_DATE, PaymentInformationV3.WORKER];
    /**
     * Mapping of all key field names to the respective static field property PaymentInformationV3.
     */
    PaymentInformationV3._keys = PaymentInformationV3._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PaymentInformationV3 = exports.PaymentInformationV3 || (exports.PaymentInformationV3 = {}));
exports.PaymentInformationV3 = PaymentInformationV3;
//# sourceMappingURL=PaymentInformationV3.js.map