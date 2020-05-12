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
var ExtPersonalInfoRequestBuilder_1 = require("./ExtPersonalInfoRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ExtPersonalInfo" of service "SFOData".
 */
var ExtPersonalInfo = /** @class */ (function (_super) {
    __extends(ExtPersonalInfo, _super);
    function ExtPersonalInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ExtPersonalInfo`.
     * @returns A builder that constructs instances of entity type `ExtPersonalInfo`.
     */
    ExtPersonalInfo.builder = function () {
        return core_1.Entity.entityBuilder(ExtPersonalInfo);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ExtPersonalInfo` entity type.
     * @returns A `ExtPersonalInfo` request builder.
     */
    ExtPersonalInfo.requestBuilder = function () {
        return new ExtPersonalInfoRequestBuilder_1.ExtPersonalInfoRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExtPersonalInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ExtPersonalInfo`.
     */
    ExtPersonalInfo.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, ExtPersonalInfo);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ExtPersonalInfo.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ExtPersonalInfo.
     */
    ExtPersonalInfo._entityName = 'ExtPersonalInfo';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ExtPersonalInfo.
     */
    ExtPersonalInfo._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    ExtPersonalInfo._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ExtPersonalInfo;
}(core_1.Entity));
exports.ExtPersonalInfo = ExtPersonalInfo;
(function (ExtPersonalInfo) {
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtPersonalInfo.FIRST_NAME = new core_1.StringField('firstName', ExtPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtPersonalInfo.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', ExtPersonalInfo, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtPersonalInfo.LAST_NAME = new core_1.StringField('lastName', ExtPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[middleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtPersonalInfo.MIDDLE_NAME = new core_1.StringField('middleName', ExtPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[personalInfoId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtPersonalInfo.PERSONAL_INFO_ID = new core_1.BigNumberField('personalInfoId', ExtPersonalInfo, 'Edm.Int64');
    /**
     * All fields of the ExtPersonalInfo entity.
     */
    ExtPersonalInfo._allFields = [
        ExtPersonalInfo.FIRST_NAME,
        ExtPersonalInfo.LAST_MODIFIED_DATE_TIME,
        ExtPersonalInfo.LAST_NAME,
        ExtPersonalInfo.MIDDLE_NAME,
        ExtPersonalInfo.PERSONAL_INFO_ID
    ];
    /**
     * All fields selector.
     */
    ExtPersonalInfo.ALL_FIELDS = new core_1.AllFields('*', ExtPersonalInfo);
    /**
     * All key fields of the ExtPersonalInfo entity.
     */
    ExtPersonalInfo._keyFields = [ExtPersonalInfo.PERSONAL_INFO_ID];
    /**
     * Mapping of all key field names to the respective static field property ExtPersonalInfo.
     */
    ExtPersonalInfo._keys = ExtPersonalInfo._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ExtPersonalInfo = exports.ExtPersonalInfo || (exports.ExtPersonalInfo = {}));
exports.ExtPersonalInfo = ExtPersonalInfo;
//# sourceMappingURL=ExtPersonalInfo.js.map