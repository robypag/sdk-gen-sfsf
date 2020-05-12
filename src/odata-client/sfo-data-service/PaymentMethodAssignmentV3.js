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
var PaymentMethodAssignmentV3RequestBuilder_1 = require("./PaymentMethodAssignmentV3RequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PaymentMethodAssignmentV3" of service "SFOData".
 */
var PaymentMethodAssignmentV3 = /** @class */ (function (_super) {
    __extends(PaymentMethodAssignmentV3, _super);
    function PaymentMethodAssignmentV3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PaymentMethodAssignmentV3`.
     * @returns A builder that constructs instances of entity type `PaymentMethodAssignmentV3`.
     */
    PaymentMethodAssignmentV3.builder = function () {
        return core_1.Entity.entityBuilder(PaymentMethodAssignmentV3);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PaymentMethodAssignmentV3` entity type.
     * @returns A `PaymentMethodAssignmentV3` request builder.
     */
    PaymentMethodAssignmentV3.requestBuilder = function () {
        return new PaymentMethodAssignmentV3RequestBuilder_1.PaymentMethodAssignmentV3RequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentMethodAssignmentV3`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PaymentMethodAssignmentV3`.
     */
    PaymentMethodAssignmentV3.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PaymentMethodAssignmentV3);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PaymentMethodAssignmentV3.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PaymentMethodAssignmentV3.
     */
    PaymentMethodAssignmentV3._entityName = 'PaymentMethodAssignmentV3';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PaymentMethodAssignmentV3.
     */
    PaymentMethodAssignmentV3._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PaymentMethodAssignmentV3._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PaymentMethodAssignmentV3;
}(core_1.Entity));
exports.PaymentMethodAssignmentV3 = PaymentMethodAssignmentV3;
var Country_1 = require("./Country");
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (PaymentMethodAssignmentV3) {
    /**
     * Static representation of the [[paymentMethodV3ExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodAssignmentV3.PAYMENT_METHOD_V_3_EXTERNAL_CODE = new core_1.StringField('PaymentMethodV3_externalCode', PaymentMethodAssignmentV3, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodAssignmentV3.COUNTRY = new core_1.StringField('country', PaymentMethodAssignmentV3, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodAssignmentV3.CREATED_BY = new core_1.StringField('createdBy', PaymentMethodAssignmentV3, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodAssignmentV3.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PaymentMethodAssignmentV3, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodAssignmentV3.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', PaymentMethodAssignmentV3, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodAssignmentV3.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PaymentMethodAssignmentV3, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodAssignmentV3.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PaymentMethodAssignmentV3, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodAssignmentV3.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PaymentMethodAssignmentV3, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodAssignmentV3.COUNTRY_NAV = new core_1.Link('countryNav', PaymentMethodAssignmentV3, Country_1.Country);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodAssignmentV3.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PaymentMethodAssignmentV3, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodAssignmentV3.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PaymentMethodAssignmentV3, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentMethodAssignmentV3.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PaymentMethodAssignmentV3, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the PaymentMethodAssignmentV3 entity.
     */
    PaymentMethodAssignmentV3._allFields = [
        PaymentMethodAssignmentV3.PAYMENT_METHOD_V_3_EXTERNAL_CODE,
        PaymentMethodAssignmentV3.COUNTRY,
        PaymentMethodAssignmentV3.CREATED_BY,
        PaymentMethodAssignmentV3.CREATED_DATE_TIME,
        PaymentMethodAssignmentV3.EXTERNAL_CODE,
        PaymentMethodAssignmentV3.LAST_MODIFIED_BY,
        PaymentMethodAssignmentV3.LAST_MODIFIED_DATE_TIME,
        PaymentMethodAssignmentV3.MDF_SYSTEM_RECORD_STATUS,
        PaymentMethodAssignmentV3.COUNTRY_NAV,
        PaymentMethodAssignmentV3.CREATED_BY_NAV,
        PaymentMethodAssignmentV3.LAST_MODIFIED_BY_NAV,
        PaymentMethodAssignmentV3.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    PaymentMethodAssignmentV3.ALL_FIELDS = new core_1.AllFields('*', PaymentMethodAssignmentV3);
    /**
     * All key fields of the PaymentMethodAssignmentV3 entity.
     */
    PaymentMethodAssignmentV3._keyFields = [PaymentMethodAssignmentV3.PAYMENT_METHOD_V_3_EXTERNAL_CODE, PaymentMethodAssignmentV3.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property PaymentMethodAssignmentV3.
     */
    PaymentMethodAssignmentV3._keys = PaymentMethodAssignmentV3._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PaymentMethodAssignmentV3 = exports.PaymentMethodAssignmentV3 || (exports.PaymentMethodAssignmentV3 = {}));
exports.PaymentMethodAssignmentV3 = PaymentMethodAssignmentV3;
//# sourceMappingURL=PaymentMethodAssignmentV3.js.map