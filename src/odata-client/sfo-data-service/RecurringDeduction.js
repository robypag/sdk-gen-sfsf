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
var RecurringDeductionRequestBuilder_1 = require("./RecurringDeductionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "RecurringDeduction" of service "SFOData".
 */
var RecurringDeduction = /** @class */ (function (_super) {
    __extends(RecurringDeduction, _super);
    function RecurringDeduction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `RecurringDeduction`.
     * @returns A builder that constructs instances of entity type `RecurringDeduction`.
     */
    RecurringDeduction.builder = function () {
        return core_1.Entity.entityBuilder(RecurringDeduction);
    };
    /**
     * Returns a request builder to construct requests for operations on the `RecurringDeduction` entity type.
     * @returns A `RecurringDeduction` request builder.
     */
    RecurringDeduction.requestBuilder = function () {
        return new RecurringDeductionRequestBuilder_1.RecurringDeductionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RecurringDeduction`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RecurringDeduction`.
     */
    RecurringDeduction.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, RecurringDeduction);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    RecurringDeduction.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for RecurringDeduction.
     */
    RecurringDeduction._entityName = 'RecurringDeduction';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for RecurringDeduction.
     */
    RecurringDeduction._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    RecurringDeduction._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return RecurringDeduction;
}(core_1.Entity));
exports.RecurringDeduction = RecurringDeduction;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var RecurringDeductionItem_1 = require("./RecurringDeductionItem");
var WfRequest_1 = require("./WfRequest");
(function (RecurringDeduction) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeduction.CREATED_BY = new core_1.StringField('createdBy', RecurringDeduction, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeduction.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', RecurringDeduction, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[effectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeduction.EFFECTIVE_END_DATE = new core_1.DateField('effectiveEndDate', RecurringDeduction, 'Edm.DateTime');
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeduction.EFFECTIVE_START_DATE = new core_1.DateField('effectiveStartDate', RecurringDeduction, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeduction.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', RecurringDeduction, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeduction.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', RecurringDeduction, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeduction.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', RecurringDeduction, 'Edm.String');
    /**
     * Static representation of the [[userSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeduction.USER_SYS_ID = new core_1.StringField('userSysId', RecurringDeduction, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeduction.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', RecurringDeduction, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeduction.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', RecurringDeduction, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeduction.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', RecurringDeduction, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[recurringItems]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeduction.RECURRING_ITEMS = new core_1.Link('recurringItems', RecurringDeduction, RecurringDeductionItem_1.RecurringDeductionItem);
    /**
     * Static representation of the one-to-one navigation property [[userSysIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeduction.USER_SYS_ID_NAV = new core_1.OneToOneLink('userSysIdNav', RecurringDeduction, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RecurringDeduction.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', RecurringDeduction, WfRequest_1.WfRequest);
    /**
     * All fields of the RecurringDeduction entity.
     */
    RecurringDeduction._allFields = [
        RecurringDeduction.CREATED_BY,
        RecurringDeduction.CREATED_DATE_TIME,
        RecurringDeduction.EFFECTIVE_END_DATE,
        RecurringDeduction.EFFECTIVE_START_DATE,
        RecurringDeduction.LAST_MODIFIED_BY,
        RecurringDeduction.LAST_MODIFIED_DATE_TIME,
        RecurringDeduction.MDF_SYSTEM_RECORD_STATUS,
        RecurringDeduction.USER_SYS_ID,
        RecurringDeduction.CREATED_BY_NAV,
        RecurringDeduction.LAST_MODIFIED_BY_NAV,
        RecurringDeduction.MDF_SYSTEM_RECORD_STATUS_NAV,
        RecurringDeduction.RECURRING_ITEMS,
        RecurringDeduction.USER_SYS_ID_NAV,
        RecurringDeduction.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    RecurringDeduction.ALL_FIELDS = new core_1.AllFields('*', RecurringDeduction);
    /**
     * All key fields of the RecurringDeduction entity.
     */
    RecurringDeduction._keyFields = [RecurringDeduction.EFFECTIVE_START_DATE, RecurringDeduction.USER_SYS_ID];
    /**
     * Mapping of all key field names to the respective static field property RecurringDeduction.
     */
    RecurringDeduction._keys = RecurringDeduction._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(RecurringDeduction = exports.RecurringDeduction || (exports.RecurringDeduction = {}));
exports.RecurringDeduction = RecurringDeduction;
//# sourceMappingURL=RecurringDeduction.js.map