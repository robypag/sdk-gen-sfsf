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
var EmpCostDistributionItemRequestBuilder_1 = require("./EmpCostDistributionItemRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmpCostDistributionItem" of service "SFOData".
 */
var EmpCostDistributionItem = /** @class */ (function (_super) {
    __extends(EmpCostDistributionItem, _super);
    function EmpCostDistributionItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmpCostDistributionItem`.
     * @returns A builder that constructs instances of entity type `EmpCostDistributionItem`.
     */
    EmpCostDistributionItem.builder = function () {
        return core_1.Entity.entityBuilder(EmpCostDistributionItem);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmpCostDistributionItem` entity type.
     * @returns A `EmpCostDistributionItem` request builder.
     */
    EmpCostDistributionItem.requestBuilder = function () {
        return new EmpCostDistributionItemRequestBuilder_1.EmpCostDistributionItemRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpCostDistributionItem`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpCostDistributionItem`.
     */
    EmpCostDistributionItem.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmpCostDistributionItem);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmpCostDistributionItem.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmpCostDistributionItem.
     */
    EmpCostDistributionItem._entityName = 'EmpCostDistributionItem';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpCostDistributionItem.
     */
    EmpCostDistributionItem._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmpCostDistributionItem._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmpCostDistributionItem;
}(core_1.Entity));
exports.EmpCostDistributionItem = EmpCostDistributionItem;
var FoCostCenter_1 = require("./FoCostCenter");
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (EmpCostDistributionItem) {
    /**
     * Static representation of the [[empCostDistributionEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCostDistributionItem.EMP_COST_DISTRIBUTION_EFFECTIVE_START_DATE = new core_1.DateField('EmpCostDistribution_effectiveStartDate', EmpCostDistributionItem, 'Edm.DateTime');
    /**
     * Static representation of the [[empCostDistributionUsersSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCostDistributionItem.EMP_COST_DISTRIBUTION_USERS_SYS_ID = new core_1.StringField('EmpCostDistribution_usersSysId', EmpCostDistributionItem, 'Edm.String');
    /**
     * Static representation of the [[costCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCostDistributionItem.COST_CENTER = new core_1.StringField('costCenter', EmpCostDistributionItem, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCostDistributionItem.CREATED_BY = new core_1.StringField('createdBy', EmpCostDistributionItem, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCostDistributionItem.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmpCostDistributionItem, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCostDistributionItem.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', EmpCostDistributionItem, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCostDistributionItem.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmpCostDistributionItem, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCostDistributionItem.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmpCostDistributionItem, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCostDistributionItem.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmpCostDistributionItem, 'Edm.String');
    /**
     * Static representation of the [[percentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCostDistributionItem.PERCENTAGE = new core_1.BigNumberField('percentage', EmpCostDistributionItem, 'Edm.Decimal');
    /**
     * Static representation of the one-to-many navigation property [[costCenterNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCostDistributionItem.COST_CENTER_NAV = new core_1.Link('costCenterNav', EmpCostDistributionItem, FoCostCenter_1.FoCostCenter);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCostDistributionItem.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', EmpCostDistributionItem, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCostDistributionItem.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', EmpCostDistributionItem, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCostDistributionItem.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', EmpCostDistributionItem, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the EmpCostDistributionItem entity.
     */
    EmpCostDistributionItem._allFields = [
        EmpCostDistributionItem.EMP_COST_DISTRIBUTION_EFFECTIVE_START_DATE,
        EmpCostDistributionItem.EMP_COST_DISTRIBUTION_USERS_SYS_ID,
        EmpCostDistributionItem.COST_CENTER,
        EmpCostDistributionItem.CREATED_BY,
        EmpCostDistributionItem.CREATED_DATE_TIME,
        EmpCostDistributionItem.EXTERNAL_CODE,
        EmpCostDistributionItem.LAST_MODIFIED_BY,
        EmpCostDistributionItem.LAST_MODIFIED_DATE_TIME,
        EmpCostDistributionItem.MDF_SYSTEM_RECORD_STATUS,
        EmpCostDistributionItem.PERCENTAGE,
        EmpCostDistributionItem.COST_CENTER_NAV,
        EmpCostDistributionItem.CREATED_BY_NAV,
        EmpCostDistributionItem.LAST_MODIFIED_BY_NAV,
        EmpCostDistributionItem.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    EmpCostDistributionItem.ALL_FIELDS = new core_1.AllFields('*', EmpCostDistributionItem);
    /**
     * All key fields of the EmpCostDistributionItem entity.
     */
    EmpCostDistributionItem._keyFields = [EmpCostDistributionItem.EMP_COST_DISTRIBUTION_EFFECTIVE_START_DATE, EmpCostDistributionItem.EMP_COST_DISTRIBUTION_USERS_SYS_ID, EmpCostDistributionItem.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property EmpCostDistributionItem.
     */
    EmpCostDistributionItem._keys = EmpCostDistributionItem._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmpCostDistributionItem = exports.EmpCostDistributionItem || (exports.EmpCostDistributionItem = {}));
exports.EmpCostDistributionItem = EmpCostDistributionItem;
//# sourceMappingURL=EmpCostDistributionItem.js.map