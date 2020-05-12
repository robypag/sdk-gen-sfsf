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
var EmpCostDistributionRequestBuilder_1 = require("./EmpCostDistributionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmpCostDistribution" of service "SFOData".
 */
var EmpCostDistribution = /** @class */ (function (_super) {
    __extends(EmpCostDistribution, _super);
    function EmpCostDistribution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmpCostDistribution`.
     * @returns A builder that constructs instances of entity type `EmpCostDistribution`.
     */
    EmpCostDistribution.builder = function () {
        return core_1.Entity.entityBuilder(EmpCostDistribution);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmpCostDistribution` entity type.
     * @returns A `EmpCostDistribution` request builder.
     */
    EmpCostDistribution.requestBuilder = function () {
        return new EmpCostDistributionRequestBuilder_1.EmpCostDistributionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpCostDistribution`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpCostDistribution`.
     */
    EmpCostDistribution.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmpCostDistribution);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmpCostDistribution.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmpCostDistribution.
     */
    EmpCostDistribution._entityName = 'EmpCostDistribution';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpCostDistribution.
     */
    EmpCostDistribution._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmpCostDistribution._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmpCostDistribution;
}(core_1.Entity));
exports.EmpCostDistribution = EmpCostDistribution;
var User_1 = require("./User");
var EmpCostDistributionItem_1 = require("./EmpCostDistributionItem");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (EmpCostDistribution) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCostDistribution.CREATED_BY = new core_1.StringField('createdBy', EmpCostDistribution, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCostDistribution.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmpCostDistribution, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[effectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCostDistribution.EFFECTIVE_END_DATE = new core_1.DateField('effectiveEndDate', EmpCostDistribution, 'Edm.DateTime');
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCostDistribution.EFFECTIVE_START_DATE = new core_1.DateField('effectiveStartDate', EmpCostDistribution, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCostDistribution.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmpCostDistribution, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCostDistribution.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmpCostDistribution, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCostDistribution.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmpCostDistribution, 'Edm.String');
    /**
     * Static representation of the [[usersSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCostDistribution.USERS_SYS_ID = new core_1.StringField('usersSysId', EmpCostDistribution, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCostDistribution.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', EmpCostDistribution, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCostDistribution.ITEMS = new core_1.Link('items', EmpCostDistribution, EmpCostDistributionItem_1.EmpCostDistributionItem);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCostDistribution.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', EmpCostDistribution, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCostDistribution.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', EmpCostDistribution, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[usersSysIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCostDistribution.USERS_SYS_ID_NAV = new core_1.OneToOneLink('usersSysIdNav', EmpCostDistribution, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCostDistribution.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', EmpCostDistribution, WfRequest_1.WfRequest);
    /**
     * All fields of the EmpCostDistribution entity.
     */
    EmpCostDistribution._allFields = [
        EmpCostDistribution.CREATED_BY,
        EmpCostDistribution.CREATED_DATE_TIME,
        EmpCostDistribution.EFFECTIVE_END_DATE,
        EmpCostDistribution.EFFECTIVE_START_DATE,
        EmpCostDistribution.LAST_MODIFIED_BY,
        EmpCostDistribution.LAST_MODIFIED_DATE_TIME,
        EmpCostDistribution.MDF_SYSTEM_RECORD_STATUS,
        EmpCostDistribution.USERS_SYS_ID,
        EmpCostDistribution.CREATED_BY_NAV,
        EmpCostDistribution.ITEMS,
        EmpCostDistribution.LAST_MODIFIED_BY_NAV,
        EmpCostDistribution.MDF_SYSTEM_RECORD_STATUS_NAV,
        EmpCostDistribution.USERS_SYS_ID_NAV,
        EmpCostDistribution.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    EmpCostDistribution.ALL_FIELDS = new core_1.AllFields('*', EmpCostDistribution);
    /**
     * All key fields of the EmpCostDistribution entity.
     */
    EmpCostDistribution._keyFields = [EmpCostDistribution.EFFECTIVE_START_DATE, EmpCostDistribution.USERS_SYS_ID];
    /**
     * Mapping of all key field names to the respective static field property EmpCostDistribution.
     */
    EmpCostDistribution._keys = EmpCostDistribution._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmpCostDistribution = exports.EmpCostDistribution || (exports.EmpCostDistribution = {}));
exports.EmpCostDistribution = EmpCostDistribution;
//# sourceMappingURL=EmpCostDistribution.js.map