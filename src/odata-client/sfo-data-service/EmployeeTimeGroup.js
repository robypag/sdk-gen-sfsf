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
var EmployeeTimeGroupRequestBuilder_1 = require("./EmployeeTimeGroupRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeeTimeGroup" of service "SFOData".
 */
var EmployeeTimeGroup = /** @class */ (function (_super) {
    __extends(EmployeeTimeGroup, _super);
    function EmployeeTimeGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeTimeGroup`.
     * @returns A builder that constructs instances of entity type `EmployeeTimeGroup`.
     */
    EmployeeTimeGroup.builder = function () {
        return core_1.Entity.entityBuilder(EmployeeTimeGroup);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeTimeGroup` entity type.
     * @returns A `EmployeeTimeGroup` request builder.
     */
    EmployeeTimeGroup.requestBuilder = function () {
        return new EmployeeTimeGroupRequestBuilder_1.EmployeeTimeGroupRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeGroup`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeTimeGroup`.
     */
    EmployeeTimeGroup.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmployeeTimeGroup);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeTimeGroup.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeTimeGroup.
     */
    EmployeeTimeGroup._entityName = 'EmployeeTimeGroup';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeTimeGroup.
     */
    EmployeeTimeGroup._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmployeeTimeGroup._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmployeeTimeGroup;
}(core_1.Entity));
exports.EmployeeTimeGroup = EmployeeTimeGroup;
var User_1 = require("./User");
var EmployeeTimeGroupItem_1 = require("./EmployeeTimeGroupItem");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (EmployeeTimeGroup) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.CREATED_BY = new core_1.StringField('createdBy', EmployeeTimeGroup, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmployeeTimeGroup, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.EXTERNAL_CODE = new core_1.StringField('externalCode', EmployeeTimeGroup, 'Edm.String');
    /**
     * Static representation of the [[itemsCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.ITEMS_CATEGORY = new core_1.StringField('itemsCategory', EmployeeTimeGroup, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmployeeTimeGroup, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmployeeTimeGroup, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmployeeTimeGroup, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.USER_ID = new core_1.StringField('userId', EmployeeTimeGroup, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', EmployeeTimeGroup, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.ITEMS = new core_1.Link('items', EmployeeTimeGroup, EmployeeTimeGroupItem_1.EmployeeTimeGroupItem);
    /**
     * Static representation of the one-to-one navigation property [[itemsCategoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.ITEMS_CATEGORY_NAV = new core_1.OneToOneLink('itemsCategoryNav', EmployeeTimeGroup, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', EmployeeTimeGroup, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', EmployeeTimeGroup, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', EmployeeTimeGroup, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', EmployeeTimeGroup, WfRequest_1.WfRequest);
    /**
     * All fields of the EmployeeTimeGroup entity.
     */
    EmployeeTimeGroup._allFields = [
        EmployeeTimeGroup.CREATED_BY,
        EmployeeTimeGroup.CREATED_DATE_TIME,
        EmployeeTimeGroup.EXTERNAL_CODE,
        EmployeeTimeGroup.ITEMS_CATEGORY,
        EmployeeTimeGroup.LAST_MODIFIED_BY,
        EmployeeTimeGroup.LAST_MODIFIED_DATE_TIME,
        EmployeeTimeGroup.MDF_SYSTEM_RECORD_STATUS,
        EmployeeTimeGroup.USER_ID,
        EmployeeTimeGroup.CREATED_BY_NAV,
        EmployeeTimeGroup.ITEMS,
        EmployeeTimeGroup.ITEMS_CATEGORY_NAV,
        EmployeeTimeGroup.LAST_MODIFIED_BY_NAV,
        EmployeeTimeGroup.MDF_SYSTEM_RECORD_STATUS_NAV,
        EmployeeTimeGroup.USER_ID_NAV,
        EmployeeTimeGroup.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    EmployeeTimeGroup.ALL_FIELDS = new core_1.AllFields('*', EmployeeTimeGroup);
    /**
     * All key fields of the EmployeeTimeGroup entity.
     */
    EmployeeTimeGroup._keyFields = [EmployeeTimeGroup.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property EmployeeTimeGroup.
     */
    EmployeeTimeGroup._keys = EmployeeTimeGroup._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeTimeGroup = exports.EmployeeTimeGroup || (exports.EmployeeTimeGroup = {}));
exports.EmployeeTimeGroup = EmployeeTimeGroup;
//# sourceMappingURL=EmployeeTimeGroup.js.map