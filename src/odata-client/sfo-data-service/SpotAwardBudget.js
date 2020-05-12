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
var SpotAwardBudgetRequestBuilder_1 = require("./SpotAwardBudgetRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SpotAwardBudget" of service "SFOData".
 */
var SpotAwardBudget = /** @class */ (function (_super) {
    __extends(SpotAwardBudget, _super);
    function SpotAwardBudget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SpotAwardBudget`.
     * @returns A builder that constructs instances of entity type `SpotAwardBudget`.
     */
    SpotAwardBudget.builder = function () {
        return core_1.Entity.entityBuilder(SpotAwardBudget);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SpotAwardBudget` entity type.
     * @returns A `SpotAwardBudget` request builder.
     */
    SpotAwardBudget.requestBuilder = function () {
        return new SpotAwardBudgetRequestBuilder_1.SpotAwardBudgetRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAwardBudget`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SpotAwardBudget`.
     */
    SpotAwardBudget.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, SpotAwardBudget);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SpotAwardBudget.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SpotAwardBudget.
     */
    SpotAwardBudget._entityName = 'SpotAwardBudget';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SpotAwardBudget.
     */
    SpotAwardBudget._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    SpotAwardBudget._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SpotAwardBudget;
}(core_1.Entity));
exports.SpotAwardBudget = SpotAwardBudget;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var SpotAwardProgram_1 = require("./SpotAwardProgram");
var WfRequest_1 = require("./WfRequest");
(function (SpotAwardBudget) {
    /**
     * Static representation of the [[budgetAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardBudget.BUDGET_AMOUNT = new core_1.BigNumberField('budgetAmount', SpotAwardBudget, 'Edm.Decimal');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardBudget.CREATED_BY = new core_1.StringField('createdBy', SpotAwardBudget, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardBudget.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', SpotAwardBudget, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardBudget.CURRENCY = new core_1.StringField('currency', SpotAwardBudget, 'Edm.String');
    /**
     * Static representation of the [[effectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardBudget.EFFECTIVE_END_DATE = new core_1.DateField('effectiveEndDate', SpotAwardBudget, 'Edm.DateTime');
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardBudget.EFFECTIVE_START_DATE = new core_1.DateField('effectiveStartDate', SpotAwardBudget, 'Edm.DateTime');
    /**
     * Static representation of the [[effectiveStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardBudget.EFFECTIVE_STATUS = new core_1.StringField('effectiveStatus', SpotAwardBudget, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardBudget.EXTERNAL_CODE = new core_1.StringField('externalCode', SpotAwardBudget, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardBudget.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', SpotAwardBudget, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardBudget.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', SpotAwardBudget, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardBudget.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', SpotAwardBudget, 'Edm.String');
    /**
     * Static representation of the [[spotAwardProgram]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardBudget.SPOT_AWARD_PROGRAM = new core_1.StringField('spotAwardProgram', SpotAwardBudget, 'Edm.String');
    /**
     * Static representation of the [[usedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardBudget.USED_AMOUNT = new core_1.BigNumberField('usedAmount', SpotAwardBudget, 'Edm.Decimal');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardBudget.USER_ID = new core_1.StringField('userId', SpotAwardBudget, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardBudget.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', SpotAwardBudget, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardBudget.EFFECTIVE_STATUS_NAV = new core_1.OneToOneLink('effectiveStatusNav', SpotAwardBudget, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardBudget.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', SpotAwardBudget, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardBudget.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', SpotAwardBudget, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[spotAwardProgramNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardBudget.SPOT_AWARD_PROGRAM_NAV = new core_1.OneToOneLink('spotAwardProgramNav', SpotAwardBudget, SpotAwardProgram_1.SpotAwardProgram);
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardBudget.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', SpotAwardBudget, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardBudget.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', SpotAwardBudget, WfRequest_1.WfRequest);
    /**
     * All fields of the SpotAwardBudget entity.
     */
    SpotAwardBudget._allFields = [
        SpotAwardBudget.BUDGET_AMOUNT,
        SpotAwardBudget.CREATED_BY,
        SpotAwardBudget.CREATED_DATE_TIME,
        SpotAwardBudget.CURRENCY,
        SpotAwardBudget.EFFECTIVE_END_DATE,
        SpotAwardBudget.EFFECTIVE_START_DATE,
        SpotAwardBudget.EFFECTIVE_STATUS,
        SpotAwardBudget.EXTERNAL_CODE,
        SpotAwardBudget.LAST_MODIFIED_BY,
        SpotAwardBudget.LAST_MODIFIED_DATE_TIME,
        SpotAwardBudget.MDF_SYSTEM_RECORD_STATUS,
        SpotAwardBudget.SPOT_AWARD_PROGRAM,
        SpotAwardBudget.USED_AMOUNT,
        SpotAwardBudget.USER_ID,
        SpotAwardBudget.CREATED_BY_NAV,
        SpotAwardBudget.EFFECTIVE_STATUS_NAV,
        SpotAwardBudget.LAST_MODIFIED_BY_NAV,
        SpotAwardBudget.MDF_SYSTEM_RECORD_STATUS_NAV,
        SpotAwardBudget.SPOT_AWARD_PROGRAM_NAV,
        SpotAwardBudget.USER_ID_NAV,
        SpotAwardBudget.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    SpotAwardBudget.ALL_FIELDS = new core_1.AllFields('*', SpotAwardBudget);
    /**
     * All key fields of the SpotAwardBudget entity.
     */
    SpotAwardBudget._keyFields = [SpotAwardBudget.EFFECTIVE_START_DATE, SpotAwardBudget.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property SpotAwardBudget.
     */
    SpotAwardBudget._keys = SpotAwardBudget._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SpotAwardBudget = exports.SpotAwardBudget || (exports.SpotAwardBudget = {}));
exports.SpotAwardBudget = SpotAwardBudget;
//# sourceMappingURL=SpotAwardBudget.js.map