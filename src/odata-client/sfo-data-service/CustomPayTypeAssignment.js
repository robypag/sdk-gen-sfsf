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
var CustomPayTypeAssignmentRequestBuilder_1 = require("./CustomPayTypeAssignmentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CustomPayTypeAssignment" of service "SFOData".
 */
var CustomPayTypeAssignment = /** @class */ (function (_super) {
    __extends(CustomPayTypeAssignment, _super);
    function CustomPayTypeAssignment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CustomPayTypeAssignment`.
     * @returns A builder that constructs instances of entity type `CustomPayTypeAssignment`.
     */
    CustomPayTypeAssignment.builder = function () {
        return core_1.Entity.entityBuilder(CustomPayTypeAssignment);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CustomPayTypeAssignment` entity type.
     * @returns A `CustomPayTypeAssignment` request builder.
     */
    CustomPayTypeAssignment.requestBuilder = function () {
        return new CustomPayTypeAssignmentRequestBuilder_1.CustomPayTypeAssignmentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomPayTypeAssignment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustomPayTypeAssignment`.
     */
    CustomPayTypeAssignment.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, CustomPayTypeAssignment);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CustomPayTypeAssignment.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CustomPayTypeAssignment.
     */
    CustomPayTypeAssignment._entityName = 'CustomPayTypeAssignment';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CustomPayTypeAssignment.
     */
    CustomPayTypeAssignment._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CustomPayTypeAssignment._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CustomPayTypeAssignment;
}(core_1.Entity));
exports.CustomPayTypeAssignment = CustomPayTypeAssignment;
var Country_1 = require("./Country");
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (CustomPayTypeAssignment) {
    /**
     * Static representation of the [[customPayTypeExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayTypeAssignment.CUSTOM_PAY_TYPE_EXTERNAL_CODE = new core_1.StringField('CustomPayType_externalCode', CustomPayTypeAssignment, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayTypeAssignment.COUNTRY = new core_1.StringField('country', CustomPayTypeAssignment, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayTypeAssignment.CREATED_BY = new core_1.StringField('createdBy', CustomPayTypeAssignment, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayTypeAssignment.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', CustomPayTypeAssignment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayTypeAssignment.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', CustomPayTypeAssignment, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayTypeAssignment.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', CustomPayTypeAssignment, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayTypeAssignment.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', CustomPayTypeAssignment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayTypeAssignment.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', CustomPayTypeAssignment, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayTypeAssignment.COUNTRY_NAV = new core_1.Link('countryNav', CustomPayTypeAssignment, Country_1.Country);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayTypeAssignment.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', CustomPayTypeAssignment, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayTypeAssignment.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', CustomPayTypeAssignment, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayTypeAssignment.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', CustomPayTypeAssignment, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the CustomPayTypeAssignment entity.
     */
    CustomPayTypeAssignment._allFields = [
        CustomPayTypeAssignment.CUSTOM_PAY_TYPE_EXTERNAL_CODE,
        CustomPayTypeAssignment.COUNTRY,
        CustomPayTypeAssignment.CREATED_BY,
        CustomPayTypeAssignment.CREATED_DATE_TIME,
        CustomPayTypeAssignment.EXTERNAL_CODE,
        CustomPayTypeAssignment.LAST_MODIFIED_BY,
        CustomPayTypeAssignment.LAST_MODIFIED_DATE_TIME,
        CustomPayTypeAssignment.MDF_SYSTEM_RECORD_STATUS,
        CustomPayTypeAssignment.COUNTRY_NAV,
        CustomPayTypeAssignment.CREATED_BY_NAV,
        CustomPayTypeAssignment.LAST_MODIFIED_BY_NAV,
        CustomPayTypeAssignment.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    CustomPayTypeAssignment.ALL_FIELDS = new core_1.AllFields('*', CustomPayTypeAssignment);
    /**
     * All key fields of the CustomPayTypeAssignment entity.
     */
    CustomPayTypeAssignment._keyFields = [CustomPayTypeAssignment.CUSTOM_PAY_TYPE_EXTERNAL_CODE, CustomPayTypeAssignment.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property CustomPayTypeAssignment.
     */
    CustomPayTypeAssignment._keys = CustomPayTypeAssignment._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CustomPayTypeAssignment = exports.CustomPayTypeAssignment || (exports.CustomPayTypeAssignment = {}));
exports.CustomPayTypeAssignment = CustomPayTypeAssignment;
//# sourceMappingURL=CustomPayTypeAssignment.js.map