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
var SecondaryAssignmentsItemRequestBuilder_1 = require("./SecondaryAssignmentsItemRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SecondaryAssignmentsItem" of service "SFOData".
 */
var SecondaryAssignmentsItem = /** @class */ (function (_super) {
    __extends(SecondaryAssignmentsItem, _super);
    function SecondaryAssignmentsItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SecondaryAssignmentsItem`.
     * @returns A builder that constructs instances of entity type `SecondaryAssignmentsItem`.
     */
    SecondaryAssignmentsItem.builder = function () {
        return core_1.Entity.entityBuilder(SecondaryAssignmentsItem);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SecondaryAssignmentsItem` entity type.
     * @returns A `SecondaryAssignmentsItem` request builder.
     */
    SecondaryAssignmentsItem.requestBuilder = function () {
        return new SecondaryAssignmentsItemRequestBuilder_1.SecondaryAssignmentsItemRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SecondaryAssignmentsItem`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SecondaryAssignmentsItem`.
     */
    SecondaryAssignmentsItem.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, SecondaryAssignmentsItem);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SecondaryAssignmentsItem.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SecondaryAssignmentsItem.
     */
    SecondaryAssignmentsItem._entityName = 'SecondaryAssignmentsItem';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SecondaryAssignmentsItem.
     */
    SecondaryAssignmentsItem._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    SecondaryAssignmentsItem._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SecondaryAssignmentsItem;
}(core_1.Entity));
exports.SecondaryAssignmentsItem = SecondaryAssignmentsItem;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (SecondaryAssignmentsItem) {
    /**
     * Static representation of the [[secondaryAssignmentsEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SecondaryAssignmentsItem.SECONDARY_ASSIGNMENTS_EFFECTIVE_START_DATE = new core_1.DateField('SecondaryAssignments_effectiveStartDate', SecondaryAssignmentsItem, 'Edm.DateTime');
    /**
     * Static representation of the [[secondaryAssignmentsExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SecondaryAssignmentsItem.SECONDARY_ASSIGNMENTS_EXTERNAL_CODE = new core_1.StringField('SecondaryAssignments_externalCode', SecondaryAssignmentsItem, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SecondaryAssignmentsItem.CREATED_BY = new core_1.StringField('createdBy', SecondaryAssignmentsItem, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SecondaryAssignmentsItem.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', SecondaryAssignmentsItem, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SecondaryAssignmentsItem.EXTERNAL_CODE = new core_1.StringField('externalCode', SecondaryAssignmentsItem, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SecondaryAssignmentsItem.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', SecondaryAssignmentsItem, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SecondaryAssignmentsItem.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', SecondaryAssignmentsItem, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SecondaryAssignmentsItem.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', SecondaryAssignmentsItem, 'Edm.String');
    /**
     * Static representation of the [[usersSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SecondaryAssignmentsItem.USERS_SYS_ID = new core_1.StringField('usersSysId', SecondaryAssignmentsItem, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SecondaryAssignmentsItem.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', SecondaryAssignmentsItem, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SecondaryAssignmentsItem.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', SecondaryAssignmentsItem, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SecondaryAssignmentsItem.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', SecondaryAssignmentsItem, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[usersSysIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SecondaryAssignmentsItem.USERS_SYS_ID_NAV = new core_1.OneToOneLink('usersSysIdNav', SecondaryAssignmentsItem, User_1.User);
    /**
     * All fields of the SecondaryAssignmentsItem entity.
     */
    SecondaryAssignmentsItem._allFields = [
        SecondaryAssignmentsItem.SECONDARY_ASSIGNMENTS_EFFECTIVE_START_DATE,
        SecondaryAssignmentsItem.SECONDARY_ASSIGNMENTS_EXTERNAL_CODE,
        SecondaryAssignmentsItem.CREATED_BY,
        SecondaryAssignmentsItem.CREATED_DATE_TIME,
        SecondaryAssignmentsItem.EXTERNAL_CODE,
        SecondaryAssignmentsItem.LAST_MODIFIED_BY,
        SecondaryAssignmentsItem.LAST_MODIFIED_DATE_TIME,
        SecondaryAssignmentsItem.MDF_SYSTEM_RECORD_STATUS,
        SecondaryAssignmentsItem.USERS_SYS_ID,
        SecondaryAssignmentsItem.CREATED_BY_NAV,
        SecondaryAssignmentsItem.LAST_MODIFIED_BY_NAV,
        SecondaryAssignmentsItem.MDF_SYSTEM_RECORD_STATUS_NAV,
        SecondaryAssignmentsItem.USERS_SYS_ID_NAV
    ];
    /**
     * All fields selector.
     */
    SecondaryAssignmentsItem.ALL_FIELDS = new core_1.AllFields('*', SecondaryAssignmentsItem);
    /**
     * All key fields of the SecondaryAssignmentsItem entity.
     */
    SecondaryAssignmentsItem._keyFields = [SecondaryAssignmentsItem.SECONDARY_ASSIGNMENTS_EFFECTIVE_START_DATE, SecondaryAssignmentsItem.SECONDARY_ASSIGNMENTS_EXTERNAL_CODE, SecondaryAssignmentsItem.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property SecondaryAssignmentsItem.
     */
    SecondaryAssignmentsItem._keys = SecondaryAssignmentsItem._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SecondaryAssignmentsItem = exports.SecondaryAssignmentsItem || (exports.SecondaryAssignmentsItem = {}));
exports.SecondaryAssignmentsItem = SecondaryAssignmentsItem;
//# sourceMappingURL=SecondaryAssignmentsItem.js.map