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
var AvailableTimeTypeRequestBuilder_1 = require("./AvailableTimeTypeRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "AvailableTimeType" of service "SFOData".
 */
var AvailableTimeType = /** @class */ (function (_super) {
    __extends(AvailableTimeType, _super);
    function AvailableTimeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `AvailableTimeType`.
     * @returns A builder that constructs instances of entity type `AvailableTimeType`.
     */
    AvailableTimeType.builder = function () {
        return core_1.Entity.entityBuilder(AvailableTimeType);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AvailableTimeType` entity type.
     * @returns A `AvailableTimeType` request builder.
     */
    AvailableTimeType.requestBuilder = function () {
        return new AvailableTimeTypeRequestBuilder_1.AvailableTimeTypeRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AvailableTimeType`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AvailableTimeType`.
     */
    AvailableTimeType.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, AvailableTimeType);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AvailableTimeType.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AvailableTimeType.
     */
    AvailableTimeType._entityName = 'AvailableTimeType';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AvailableTimeType.
     */
    AvailableTimeType._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    AvailableTimeType._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return AvailableTimeType;
}(core_1.Entity));
exports.AvailableTimeType = AvailableTimeType;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var TimeType_1 = require("./TimeType");
(function (AvailableTimeType) {
    /**
     * Static representation of the [[timeTypeProfileExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AvailableTimeType.TIME_TYPE_PROFILE_EXTERNAL_CODE = new core_1.StringField('TimeTypeProfile_externalCode', AvailableTimeType, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AvailableTimeType.CREATED_BY = new core_1.StringField('createdBy', AvailableTimeType, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AvailableTimeType.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', AvailableTimeType, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[enabledInEssScenario]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AvailableTimeType.ENABLED_IN_ESS_SCENARIO = new core_1.BooleanField('enabledInEssScenario', AvailableTimeType, 'Edm.Boolean');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AvailableTimeType.EXTERNAL_CODE = new core_1.StringField('externalCode', AvailableTimeType, 'Edm.String');
    /**
     * Static representation of the [[favoriteTimeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AvailableTimeType.FAVORITE_TIME_TYPE = new core_1.BooleanField('favoriteTimeType', AvailableTimeType, 'Edm.Boolean');
    /**
     * Static representation of the [[hideAccountBalance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AvailableTimeType.HIDE_ACCOUNT_BALANCE = new core_1.BooleanField('hideAccountBalance', AvailableTimeType, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AvailableTimeType.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', AvailableTimeType, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AvailableTimeType.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', AvailableTimeType, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AvailableTimeType.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', AvailableTimeType, 'Edm.String');
    /**
     * Static representation of the [[timeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AvailableTimeType.TIME_TYPE = new core_1.StringField('timeType', AvailableTimeType, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AvailableTimeType.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', AvailableTimeType, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AvailableTimeType.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', AvailableTimeType, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AvailableTimeType.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', AvailableTimeType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[timeTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AvailableTimeType.TIME_TYPE_NAV = new core_1.OneToOneLink('timeTypeNav', AvailableTimeType, TimeType_1.TimeType);
    /**
     * All fields of the AvailableTimeType entity.
     */
    AvailableTimeType._allFields = [
        AvailableTimeType.TIME_TYPE_PROFILE_EXTERNAL_CODE,
        AvailableTimeType.CREATED_BY,
        AvailableTimeType.CREATED_DATE_TIME,
        AvailableTimeType.ENABLED_IN_ESS_SCENARIO,
        AvailableTimeType.EXTERNAL_CODE,
        AvailableTimeType.FAVORITE_TIME_TYPE,
        AvailableTimeType.HIDE_ACCOUNT_BALANCE,
        AvailableTimeType.LAST_MODIFIED_BY,
        AvailableTimeType.LAST_MODIFIED_DATE_TIME,
        AvailableTimeType.MDF_SYSTEM_RECORD_STATUS,
        AvailableTimeType.TIME_TYPE,
        AvailableTimeType.CREATED_BY_NAV,
        AvailableTimeType.LAST_MODIFIED_BY_NAV,
        AvailableTimeType.MDF_SYSTEM_RECORD_STATUS_NAV,
        AvailableTimeType.TIME_TYPE_NAV
    ];
    /**
     * All fields selector.
     */
    AvailableTimeType.ALL_FIELDS = new core_1.AllFields('*', AvailableTimeType);
    /**
     * All key fields of the AvailableTimeType entity.
     */
    AvailableTimeType._keyFields = [AvailableTimeType.TIME_TYPE_PROFILE_EXTERNAL_CODE, AvailableTimeType.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property AvailableTimeType.
     */
    AvailableTimeType._keys = AvailableTimeType._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AvailableTimeType = exports.AvailableTimeType || (exports.AvailableTimeType = {}));
exports.AvailableTimeType = AvailableTimeType;
//# sourceMappingURL=AvailableTimeType.js.map