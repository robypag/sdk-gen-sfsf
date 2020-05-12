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
var OneTimeDeductionRequestBuilder_1 = require("./OneTimeDeductionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "OneTimeDeduction" of service "SFOData".
 */
var OneTimeDeduction = /** @class */ (function (_super) {
    __extends(OneTimeDeduction, _super);
    function OneTimeDeduction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `OneTimeDeduction`.
     * @returns A builder that constructs instances of entity type `OneTimeDeduction`.
     */
    OneTimeDeduction.builder = function () {
        return core_1.Entity.entityBuilder(OneTimeDeduction);
    };
    /**
     * Returns a request builder to construct requests for operations on the `OneTimeDeduction` entity type.
     * @returns A `OneTimeDeduction` request builder.
     */
    OneTimeDeduction.requestBuilder = function () {
        return new OneTimeDeductionRequestBuilder_1.OneTimeDeductionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `OneTimeDeduction`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `OneTimeDeduction`.
     */
    OneTimeDeduction.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, OneTimeDeduction);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    OneTimeDeduction.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for OneTimeDeduction.
     */
    OneTimeDeduction._entityName = 'OneTimeDeduction';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for OneTimeDeduction.
     */
    OneTimeDeduction._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    OneTimeDeduction._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return OneTimeDeduction;
}(core_1.Entity));
exports.OneTimeDeduction = OneTimeDeduction;
var NonRecurringPayment_1 = require("./NonRecurringPayment");
var Attachment_1 = require("./Attachment");
var User_1 = require("./User");
var Currency_1 = require("./Currency");
var MdfEnumValue_1 = require("./MdfEnumValue");
var FoPayComponent_1 = require("./FoPayComponent");
var WfRequest_1 = require("./WfRequest");
(function (OneTimeDeduction) {
    /**
     * Static representation of the [[additionalInfo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OneTimeDeduction.ADDITIONAL_INFO = new core_1.StringField('additionalInfo', OneTimeDeduction, 'Edm.String');
    /**
     * Static representation of the [[advanceId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OneTimeDeduction.ADVANCE_ID = new core_1.StringField('advanceId', OneTimeDeduction, 'Edm.String');
    /**
     * Static representation of the [[amount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OneTimeDeduction.AMOUNT = new core_1.BigNumberField('amount', OneTimeDeduction, 'Edm.Decimal');
    /**
     * Static representation of the [[auditUserSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OneTimeDeduction.AUDIT_USER_SYS_ID = new core_1.StringField('auditUserSysId', OneTimeDeduction, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OneTimeDeduction.CREATED_BY = new core_1.StringField('createdBy', OneTimeDeduction, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OneTimeDeduction.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', OneTimeDeduction, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OneTimeDeduction.CURRENCY = new core_1.StringField('currency', OneTimeDeduction, 'Edm.String');
    /**
     * Static representation of the [[deductionDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OneTimeDeduction.DEDUCTION_DATE = new core_1.DateField('deductionDate', OneTimeDeduction, 'Edm.DateTime');
    /**
     * Static representation of the [[equivalentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OneTimeDeduction.EQUIVALENT_AMOUNT = new core_1.BigNumberField('equivalentAmount', OneTimeDeduction, 'Edm.Decimal');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OneTimeDeduction.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', OneTimeDeduction, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OneTimeDeduction.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', OneTimeDeduction, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OneTimeDeduction.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', OneTimeDeduction, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OneTimeDeduction.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', OneTimeDeduction, 'Edm.String');
    /**
     * Static representation of the [[payComponentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OneTimeDeduction.PAY_COMPONENT_TYPE = new core_1.StringField('payComponentType', OneTimeDeduction, 'Edm.String');
    /**
     * Static representation of the [[referenceId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OneTimeDeduction.REFERENCE_ID = new core_1.StringField('referenceId', OneTimeDeduction, 'Edm.String');
    /**
     * Static representation of the [[unitOfMeasure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OneTimeDeduction.UNIT_OF_MEASURE = new core_1.StringField('unitOfMeasure', OneTimeDeduction, 'Edm.String');
    /**
     * Static representation of the [[userSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OneTimeDeduction.USER_SYS_ID = new core_1.StringField('userSysId', OneTimeDeduction, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[advanceIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OneTimeDeduction.ADVANCE_ID_NAV = new core_1.OneToOneLink('advanceIdNav', OneTimeDeduction, NonRecurringPayment_1.NonRecurringPayment);
    /**
     * Static representation of the one-to-one navigation property [[attachmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OneTimeDeduction.ATTACHMENT_NAV = new core_1.OneToOneLink('attachmentNav', OneTimeDeduction, Attachment_1.Attachment);
    /**
     * Static representation of the one-to-one navigation property [[auditUserSysIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OneTimeDeduction.AUDIT_USER_SYS_ID_NAV = new core_1.OneToOneLink('auditUserSysIdNav', OneTimeDeduction, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OneTimeDeduction.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', OneTimeDeduction, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[currencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OneTimeDeduction.CURRENCY_NAV = new core_1.Link('currencyNav', OneTimeDeduction, Currency_1.Currency);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OneTimeDeduction.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', OneTimeDeduction, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OneTimeDeduction.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', OneTimeDeduction, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[payComponentTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OneTimeDeduction.PAY_COMPONENT_TYPE_NAV = new core_1.Link('payComponentTypeNav', OneTimeDeduction, FoPayComponent_1.FoPayComponent);
    /**
     * Static representation of the one-to-one navigation property [[userSysIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OneTimeDeduction.USER_SYS_ID_NAV = new core_1.OneToOneLink('userSysIdNav', OneTimeDeduction, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OneTimeDeduction.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', OneTimeDeduction, WfRequest_1.WfRequest);
    /**
     * All fields of the OneTimeDeduction entity.
     */
    OneTimeDeduction._allFields = [
        OneTimeDeduction.ADDITIONAL_INFO,
        OneTimeDeduction.ADVANCE_ID,
        OneTimeDeduction.AMOUNT,
        OneTimeDeduction.AUDIT_USER_SYS_ID,
        OneTimeDeduction.CREATED_BY,
        OneTimeDeduction.CREATED_DATE_TIME,
        OneTimeDeduction.CURRENCY,
        OneTimeDeduction.DEDUCTION_DATE,
        OneTimeDeduction.EQUIVALENT_AMOUNT,
        OneTimeDeduction.EXTERNAL_CODE,
        OneTimeDeduction.LAST_MODIFIED_BY,
        OneTimeDeduction.LAST_MODIFIED_DATE_TIME,
        OneTimeDeduction.MDF_SYSTEM_RECORD_STATUS,
        OneTimeDeduction.PAY_COMPONENT_TYPE,
        OneTimeDeduction.REFERENCE_ID,
        OneTimeDeduction.UNIT_OF_MEASURE,
        OneTimeDeduction.USER_SYS_ID,
        OneTimeDeduction.ADVANCE_ID_NAV,
        OneTimeDeduction.ATTACHMENT_NAV,
        OneTimeDeduction.AUDIT_USER_SYS_ID_NAV,
        OneTimeDeduction.CREATED_BY_NAV,
        OneTimeDeduction.CURRENCY_NAV,
        OneTimeDeduction.LAST_MODIFIED_BY_NAV,
        OneTimeDeduction.MDF_SYSTEM_RECORD_STATUS_NAV,
        OneTimeDeduction.PAY_COMPONENT_TYPE_NAV,
        OneTimeDeduction.USER_SYS_ID_NAV,
        OneTimeDeduction.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    OneTimeDeduction.ALL_FIELDS = new core_1.AllFields('*', OneTimeDeduction);
    /**
     * All key fields of the OneTimeDeduction entity.
     */
    OneTimeDeduction._keyFields = [OneTimeDeduction.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property OneTimeDeduction.
     */
    OneTimeDeduction._keys = OneTimeDeduction._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(OneTimeDeduction = exports.OneTimeDeduction || (exports.OneTimeDeduction = {}));
exports.OneTimeDeduction = OneTimeDeduction;
//# sourceMappingURL=OneTimeDeduction.js.map