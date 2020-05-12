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
var Cust_PickListAMappingRequestBuilder_1 = require("./Cust_PickListAMappingRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "cust_PickListAMapping" of service "SFOData".
 */
var Cust_PickListAMapping = /** @class */ (function (_super) {
    __extends(Cust_PickListAMapping, _super);
    function Cust_PickListAMapping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Cust_PickListAMapping`.
     * @returns A builder that constructs instances of entity type `Cust_PickListAMapping`.
     */
    Cust_PickListAMapping.builder = function () {
        return core_1.Entity.entityBuilder(Cust_PickListAMapping);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Cust_PickListAMapping` entity type.
     * @returns A `Cust_PickListAMapping` request builder.
     */
    Cust_PickListAMapping.requestBuilder = function () {
        return new Cust_PickListAMappingRequestBuilder_1.Cust_PickListAMappingRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Cust_PickListAMapping`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Cust_PickListAMapping`.
     */
    Cust_PickListAMapping.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Cust_PickListAMapping);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Cust_PickListAMapping.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Cust_PickListAMapping.
     */
    Cust_PickListAMapping._entityName = 'cust_PickListAMapping';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Cust_PickListAMapping.
     */
    Cust_PickListAMapping._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Cust_PickListAMapping._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Cust_PickListAMapping;
}(core_1.Entity));
exports.Cust_PickListAMapping = Cust_PickListAMapping;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (Cust_PickListAMapping) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_PickListAMapping.CREATED_BY = new core_1.StringField('createdBy', Cust_PickListAMapping, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_PickListAMapping.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', Cust_PickListAMapping, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[custOptionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_PickListAMapping.CUST_OPTION_ID = new core_1.StringField('cust_optionId', Cust_PickListAMapping, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_PickListAMapping.EXTERNAL_CODE = new core_1.StringField('externalCode', Cust_PickListAMapping, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_PickListAMapping.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', Cust_PickListAMapping, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_PickListAMapping.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', Cust_PickListAMapping, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_PickListAMapping.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', Cust_PickListAMapping, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_PickListAMapping.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', Cust_PickListAMapping, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_PickListAMapping.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', Cust_PickListAMapping, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_PickListAMapping.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', Cust_PickListAMapping, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_PickListAMapping.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', Cust_PickListAMapping, WfRequest_1.WfRequest);
    /**
     * All fields of the Cust_PickListAMapping entity.
     */
    Cust_PickListAMapping._allFields = [
        Cust_PickListAMapping.CREATED_BY,
        Cust_PickListAMapping.CREATED_DATE_TIME,
        Cust_PickListAMapping.CUST_OPTION_ID,
        Cust_PickListAMapping.EXTERNAL_CODE,
        Cust_PickListAMapping.LAST_MODIFIED_BY,
        Cust_PickListAMapping.LAST_MODIFIED_DATE_TIME,
        Cust_PickListAMapping.MDF_SYSTEM_RECORD_STATUS,
        Cust_PickListAMapping.CREATED_BY_NAV,
        Cust_PickListAMapping.LAST_MODIFIED_BY_NAV,
        Cust_PickListAMapping.MDF_SYSTEM_RECORD_STATUS_NAV,
        Cust_PickListAMapping.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    Cust_PickListAMapping.ALL_FIELDS = new core_1.AllFields('*', Cust_PickListAMapping);
    /**
     * All key fields of the Cust_PickListAMapping entity.
     */
    Cust_PickListAMapping._keyFields = [Cust_PickListAMapping.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property Cust_PickListAMapping.
     */
    Cust_PickListAMapping._keys = Cust_PickListAMapping._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Cust_PickListAMapping = exports.Cust_PickListAMapping || (exports.Cust_PickListAMapping = {}));
exports.Cust_PickListAMapping = Cust_PickListAMapping;
//# sourceMappingURL=Cust_PickListAMapping.js.map