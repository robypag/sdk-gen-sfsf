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
var HireDateChangeRequestBuilder_1 = require("./HireDateChangeRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "HireDateChange" of service "SFOData".
 */
var HireDateChange = /** @class */ (function (_super) {
    __extends(HireDateChange, _super);
    function HireDateChange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `HireDateChange`.
     * @returns A builder that constructs instances of entity type `HireDateChange`.
     */
    HireDateChange.builder = function () {
        return core_1.Entity.entityBuilder(HireDateChange);
    };
    /**
     * Returns a request builder to construct requests for operations on the `HireDateChange` entity type.
     * @returns A `HireDateChange` request builder.
     */
    HireDateChange.requestBuilder = function () {
        return new HireDateChangeRequestBuilder_1.HireDateChangeRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `HireDateChange`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `HireDateChange`.
     */
    HireDateChange.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, HireDateChange);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    HireDateChange.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for HireDateChange.
     */
    HireDateChange._entityName = 'HireDateChange';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for HireDateChange.
     */
    HireDateChange._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    HireDateChange._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return HireDateChange;
}(core_1.Entity));
exports.HireDateChange = HireDateChange;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (HireDateChange) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HireDateChange.CODE = new core_1.StringField('code', HireDateChange, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HireDateChange.CREATED_BY = new core_1.StringField('createdBy', HireDateChange, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HireDateChange.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', HireDateChange, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HireDateChange.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', HireDateChange, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HireDateChange.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', HireDateChange, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HireDateChange.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', HireDateChange, 'Edm.String');
    /**
     * Static representation of the [[newHireDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HireDateChange.NEW_HIRE_DATE = new core_1.DateField('newHireDate', HireDateChange, 'Edm.DateTime');
    /**
     * Static representation of the [[originalHireDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HireDateChange.ORIGINAL_HIRE_DATE = new core_1.DateField('originalHireDate', HireDateChange, 'Edm.DateTime');
    /**
     * Static representation of the [[processingStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HireDateChange.PROCESSING_STATUS = new core_1.StringField('processingStatus', HireDateChange, 'Edm.String');
    /**
     * Static representation of the [[usersSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HireDateChange.USERS_SYS_ID = new core_1.StringField('usersSysId', HireDateChange, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HireDateChange.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', HireDateChange, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HireDateChange.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', HireDateChange, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HireDateChange.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', HireDateChange, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[processingStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HireDateChange.PROCESSING_STATUS_NAV = new core_1.OneToOneLink('processingStatusNav', HireDateChange, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[usersSysIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HireDateChange.USERS_SYS_ID_NAV = new core_1.OneToOneLink('usersSysIdNav', HireDateChange, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HireDateChange.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', HireDateChange, WfRequest_1.WfRequest);
    /**
     * All fields of the HireDateChange entity.
     */
    HireDateChange._allFields = [
        HireDateChange.CODE,
        HireDateChange.CREATED_BY,
        HireDateChange.CREATED_DATE_TIME,
        HireDateChange.LAST_MODIFIED_BY,
        HireDateChange.LAST_MODIFIED_DATE_TIME,
        HireDateChange.MDF_SYSTEM_RECORD_STATUS,
        HireDateChange.NEW_HIRE_DATE,
        HireDateChange.ORIGINAL_HIRE_DATE,
        HireDateChange.PROCESSING_STATUS,
        HireDateChange.USERS_SYS_ID,
        HireDateChange.CREATED_BY_NAV,
        HireDateChange.LAST_MODIFIED_BY_NAV,
        HireDateChange.MDF_SYSTEM_RECORD_STATUS_NAV,
        HireDateChange.PROCESSING_STATUS_NAV,
        HireDateChange.USERS_SYS_ID_NAV,
        HireDateChange.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    HireDateChange.ALL_FIELDS = new core_1.AllFields('*', HireDateChange);
    /**
     * All key fields of the HireDateChange entity.
     */
    HireDateChange._keyFields = [HireDateChange.CODE];
    /**
     * Mapping of all key field names to the respective static field property HireDateChange.
     */
    HireDateChange._keys = HireDateChange._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(HireDateChange = exports.HireDateChange || (exports.HireDateChange = {}));
exports.HireDateChange = HireDateChange;
//# sourceMappingURL=HireDateChange.js.map