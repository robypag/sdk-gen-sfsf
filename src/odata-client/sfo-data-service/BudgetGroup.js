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
var BudgetGroupRequestBuilder_1 = require("./BudgetGroupRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "BudgetGroup" of service "SFOData".
 */
var BudgetGroup = /** @class */ (function (_super) {
    __extends(BudgetGroup, _super);
    function BudgetGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `BudgetGroup`.
     * @returns A builder that constructs instances of entity type `BudgetGroup`.
     */
    BudgetGroup.builder = function () {
        return core_1.Entity.entityBuilder(BudgetGroup);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BudgetGroup` entity type.
     * @returns A `BudgetGroup` request builder.
     */
    BudgetGroup.requestBuilder = function () {
        return new BudgetGroupRequestBuilder_1.BudgetGroupRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BudgetGroup`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BudgetGroup`.
     */
    BudgetGroup.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, BudgetGroup);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BudgetGroup.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BudgetGroup.
     */
    BudgetGroup._entityName = 'BudgetGroup';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BudgetGroup.
     */
    BudgetGroup._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    BudgetGroup._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return BudgetGroup;
}(core_1.Entity));
exports.BudgetGroup = BudgetGroup;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (BudgetGroup) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetGroup.CREATED_BY = new core_1.StringField('createdBy', BudgetGroup, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetGroup.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', BudgetGroup, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetGroup.DESCRIPTION = new core_1.StringField('description', BudgetGroup, 'Edm.String');
    /**
     * Static representation of the [[effectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetGroup.EFFECTIVE_END_DATE = new core_1.DateField('effectiveEndDate', BudgetGroup, 'Edm.DateTime');
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetGroup.EFFECTIVE_START_DATE = new core_1.DateField('effectiveStartDate', BudgetGroup, 'Edm.DateTime');
    /**
     * Static representation of the [[effectiveStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetGroup.EFFECTIVE_STATUS = new core_1.StringField('effectiveStatus', BudgetGroup, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetGroup.EXTERNAL_CODE = new core_1.StringField('externalCode', BudgetGroup, 'Edm.String');
    /**
     * Static representation of the [[externalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetGroup.EXTERNAL_NAME = new core_1.StringField('externalName', BudgetGroup, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetGroup.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', BudgetGroup, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetGroup.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', BudgetGroup, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetGroup.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', BudgetGroup, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetGroup.USER_ID = new core_1.StringField('userId', BudgetGroup, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetGroup.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', BudgetGroup, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetGroup.EFFECTIVE_STATUS_NAV = new core_1.OneToOneLink('effectiveStatusNav', BudgetGroup, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetGroup.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', BudgetGroup, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetGroup.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', BudgetGroup, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[parentBudgetGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetGroup.PARENT_BUDGET_GROUP = new core_1.OneToOneLink('parentBudgetGroup', BudgetGroup, BudgetGroup);
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetGroup.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', BudgetGroup, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetGroup.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', BudgetGroup, WfRequest_1.WfRequest);
    /**
     * All fields of the BudgetGroup entity.
     */
    BudgetGroup._allFields = [
        BudgetGroup.CREATED_BY,
        BudgetGroup.CREATED_DATE_TIME,
        BudgetGroup.DESCRIPTION,
        BudgetGroup.EFFECTIVE_END_DATE,
        BudgetGroup.EFFECTIVE_START_DATE,
        BudgetGroup.EFFECTIVE_STATUS,
        BudgetGroup.EXTERNAL_CODE,
        BudgetGroup.EXTERNAL_NAME,
        BudgetGroup.LAST_MODIFIED_BY,
        BudgetGroup.LAST_MODIFIED_DATE_TIME,
        BudgetGroup.MDF_SYSTEM_RECORD_STATUS,
        BudgetGroup.USER_ID,
        BudgetGroup.CREATED_BY_NAV,
        BudgetGroup.EFFECTIVE_STATUS_NAV,
        BudgetGroup.LAST_MODIFIED_BY_NAV,
        BudgetGroup.MDF_SYSTEM_RECORD_STATUS_NAV,
        BudgetGroup.PARENT_BUDGET_GROUP,
        BudgetGroup.USER_ID_NAV,
        BudgetGroup.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    BudgetGroup.ALL_FIELDS = new core_1.AllFields('*', BudgetGroup);
    /**
     * All key fields of the BudgetGroup entity.
     */
    BudgetGroup._keyFields = [BudgetGroup.EFFECTIVE_START_DATE, BudgetGroup.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property BudgetGroup.
     */
    BudgetGroup._keys = BudgetGroup._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BudgetGroup = exports.BudgetGroup || (exports.BudgetGroup = {}));
exports.BudgetGroup = BudgetGroup;
//# sourceMappingURL=BudgetGroup.js.map