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
var MdfBlockConfigRequestBuilder_1 = require("./MdfBlockConfigRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "MDFBlockConfig" of service "SFOData".
 */
var MdfBlockConfig = /** @class */ (function (_super) {
    __extends(MdfBlockConfig, _super);
    function MdfBlockConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `MdfBlockConfig`.
     * @returns A builder that constructs instances of entity type `MdfBlockConfig`.
     */
    MdfBlockConfig.builder = function () {
        return core_1.Entity.entityBuilder(MdfBlockConfig);
    };
    /**
     * Returns a request builder to construct requests for operations on the `MdfBlockConfig` entity type.
     * @returns A `MdfBlockConfig` request builder.
     */
    MdfBlockConfig.requestBuilder = function () {
        return new MdfBlockConfigRequestBuilder_1.MdfBlockConfigRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `MdfBlockConfig`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `MdfBlockConfig`.
     */
    MdfBlockConfig.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, MdfBlockConfig);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    MdfBlockConfig.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for MdfBlockConfig.
     */
    MdfBlockConfig._entityName = 'MDFBlockConfig';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for MdfBlockConfig.
     */
    MdfBlockConfig._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    MdfBlockConfig._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return MdfBlockConfig;
}(core_1.Entity));
exports.MdfBlockConfig = MdfBlockConfig;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (MdfBlockConfig) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MdfBlockConfig.CODE = new core_1.StringField('code', MdfBlockConfig, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MdfBlockConfig.CREATED_BY = new core_1.StringField('createdBy', MdfBlockConfig, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MdfBlockConfig.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', MdfBlockConfig, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MdfBlockConfig.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', MdfBlockConfig, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MdfBlockConfig.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', MdfBlockConfig, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MdfBlockConfig.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', MdfBlockConfig, 'Edm.String');
    /**
     * Static representation of the [[objectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MdfBlockConfig.OBJECT_TYPE = new core_1.StringField('objectType', MdfBlockConfig, 'Edm.String');
    /**
     * Static representation of the [[screenId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MdfBlockConfig.SCREEN_ID = new core_1.StringField('screenId', MdfBlockConfig, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MdfBlockConfig.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', MdfBlockConfig, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MdfBlockConfig.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', MdfBlockConfig, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MdfBlockConfig.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', MdfBlockConfig, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MdfBlockConfig.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', MdfBlockConfig, WfRequest_1.WfRequest);
    /**
     * All fields of the MdfBlockConfig entity.
     */
    MdfBlockConfig._allFields = [
        MdfBlockConfig.CODE,
        MdfBlockConfig.CREATED_BY,
        MdfBlockConfig.CREATED_DATE_TIME,
        MdfBlockConfig.LAST_MODIFIED_BY,
        MdfBlockConfig.LAST_MODIFIED_DATE_TIME,
        MdfBlockConfig.MDF_SYSTEM_RECORD_STATUS,
        MdfBlockConfig.OBJECT_TYPE,
        MdfBlockConfig.SCREEN_ID,
        MdfBlockConfig.CREATED_BY_NAV,
        MdfBlockConfig.LAST_MODIFIED_BY_NAV,
        MdfBlockConfig.MDF_SYSTEM_RECORD_STATUS_NAV,
        MdfBlockConfig.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    MdfBlockConfig.ALL_FIELDS = new core_1.AllFields('*', MdfBlockConfig);
    /**
     * All key fields of the MdfBlockConfig entity.
     */
    MdfBlockConfig._keyFields = [MdfBlockConfig.CODE];
    /**
     * Mapping of all key field names to the respective static field property MdfBlockConfig.
     */
    MdfBlockConfig._keys = MdfBlockConfig._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(MdfBlockConfig = exports.MdfBlockConfig || (exports.MdfBlockConfig = {}));
exports.MdfBlockConfig = MdfBlockConfig;
//# sourceMappingURL=MdfBlockConfig.js.map