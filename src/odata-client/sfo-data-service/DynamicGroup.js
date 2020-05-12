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
var DynamicGroupRequestBuilder_1 = require("./DynamicGroupRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "DynamicGroup" of service "SFOData".
 */
var DynamicGroup = /** @class */ (function (_super) {
    __extends(DynamicGroup, _super);
    function DynamicGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `DynamicGroup`.
     * @returns A builder that constructs instances of entity type `DynamicGroup`.
     */
    DynamicGroup.builder = function () {
        return core_1.Entity.entityBuilder(DynamicGroup);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DynamicGroup` entity type.
     * @returns A `DynamicGroup` request builder.
     */
    DynamicGroup.requestBuilder = function () {
        return new DynamicGroupRequestBuilder_1.DynamicGroupRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DynamicGroup`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DynamicGroup`.
     */
    DynamicGroup.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, DynamicGroup);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DynamicGroup.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DynamicGroup.
     */
    DynamicGroup._entityName = 'DynamicGroup';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DynamicGroup.
     */
    DynamicGroup._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    DynamicGroup._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return DynamicGroup;
}(core_1.Entity));
exports.DynamicGroup = DynamicGroup;
var DgPeoplePool_1 = require("./DgPeoplePool");
(function (DynamicGroup) {
    /**
     * Static representation of the [[activeMembershipCount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DynamicGroup.ACTIVE_MEMBERSHIP_COUNT = new core_1.NumberField('activeMembershipCount', DynamicGroup, 'Edm.Int32');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DynamicGroup.CREATED_BY = new core_1.StringField('createdBy', DynamicGroup, 'Edm.String');
    /**
     * Static representation of the [[groupId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DynamicGroup.GROUP_ID = new core_1.BigNumberField('groupID', DynamicGroup, 'Edm.Int64');
    /**
     * Static representation of the [[groupName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DynamicGroup.GROUP_NAME = new core_1.StringField('groupName', DynamicGroup, 'Edm.String');
    /**
     * Static representation of the [[groupType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DynamicGroup.GROUP_TYPE = new core_1.StringField('groupType', DynamicGroup, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DynamicGroup.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', DynamicGroup, 'Edm.DateTime');
    /**
     * Static representation of the [[staticGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DynamicGroup.STATIC_GROUP = new core_1.BooleanField('staticGroup', DynamicGroup, 'Edm.Boolean');
    /**
     * Static representation of the [[totalMemberCount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DynamicGroup.TOTAL_MEMBER_COUNT = new core_1.NumberField('totalMemberCount', DynamicGroup, 'Edm.Int32');
    /**
     * Static representation of the [[userType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DynamicGroup.USER_TYPE = new core_1.StringField('userType', DynamicGroup, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[dgExcludePools]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DynamicGroup.DG_EXCLUDE_POOLS = new core_1.Link('dgExcludePools', DynamicGroup, DgPeoplePool_1.DgPeoplePool);
    /**
     * Static representation of the one-to-many navigation property [[dgIncludePools]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DynamicGroup.DG_INCLUDE_POOLS = new core_1.Link('dgIncludePools', DynamicGroup, DgPeoplePool_1.DgPeoplePool);
    /**
     * All fields of the DynamicGroup entity.
     */
    DynamicGroup._allFields = [
        DynamicGroup.ACTIVE_MEMBERSHIP_COUNT,
        DynamicGroup.CREATED_BY,
        DynamicGroup.GROUP_ID,
        DynamicGroup.GROUP_NAME,
        DynamicGroup.GROUP_TYPE,
        DynamicGroup.LAST_MODIFIED_DATE,
        DynamicGroup.STATIC_GROUP,
        DynamicGroup.TOTAL_MEMBER_COUNT,
        DynamicGroup.USER_TYPE,
        DynamicGroup.DG_EXCLUDE_POOLS,
        DynamicGroup.DG_INCLUDE_POOLS
    ];
    /**
     * All fields selector.
     */
    DynamicGroup.ALL_FIELDS = new core_1.AllFields('*', DynamicGroup);
    /**
     * All key fields of the DynamicGroup entity.
     */
    DynamicGroup._keyFields = [DynamicGroup.GROUP_ID];
    /**
     * Mapping of all key field names to the respective static field property DynamicGroup.
     */
    DynamicGroup._keys = DynamicGroup._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DynamicGroup = exports.DynamicGroup || (exports.DynamicGroup = {}));
exports.DynamicGroup = DynamicGroup;
//# sourceMappingURL=DynamicGroup.js.map