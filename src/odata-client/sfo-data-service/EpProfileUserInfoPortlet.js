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
var EpProfileUserInfoPortletRequestBuilder_1 = require("./EpProfileUserInfoPortletRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EPProfileUserInfoPortlet" of service "SFOData".
 */
var EpProfileUserInfoPortlet = /** @class */ (function (_super) {
    __extends(EpProfileUserInfoPortlet, _super);
    function EpProfileUserInfoPortlet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EpProfileUserInfoPortlet`.
     * @returns A builder that constructs instances of entity type `EpProfileUserInfoPortlet`.
     */
    EpProfileUserInfoPortlet.builder = function () {
        return core_1.Entity.entityBuilder(EpProfileUserInfoPortlet);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EpProfileUserInfoPortlet` entity type.
     * @returns A `EpProfileUserInfoPortlet` request builder.
     */
    EpProfileUserInfoPortlet.requestBuilder = function () {
        return new EpProfileUserInfoPortletRequestBuilder_1.EpProfileUserInfoPortletRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EpProfileUserInfoPortlet`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EpProfileUserInfoPortlet`.
     */
    EpProfileUserInfoPortlet.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EpProfileUserInfoPortlet);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EpProfileUserInfoPortlet.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EpProfileUserInfoPortlet.
     */
    EpProfileUserInfoPortlet._entityName = 'EPProfileUserInfoPortlet';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EpProfileUserInfoPortlet.
     */
    EpProfileUserInfoPortlet._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EpProfileUserInfoPortlet._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EpProfileUserInfoPortlet;
}(core_1.Entity));
exports.EpProfileUserInfoPortlet = EpProfileUserInfoPortlet;
(function (EpProfileUserInfoPortlet) {
    /**
     * Static representation of the [[dashboardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpProfileUserInfoPortlet.DASHBOARD_ID = new core_1.StringField('dashboardId', EpProfileUserInfoPortlet, 'Edm.String');
    /**
     * Static representation of the [[isPii]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpProfileUserInfoPortlet.IS_PII = new core_1.BooleanField('isPII', EpProfileUserInfoPortlet, 'Edm.Boolean');
    /**
     * Static representation of the [[isWritable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpProfileUserInfoPortlet.IS_WRITABLE = new core_1.BooleanField('isWritable', EpProfileUserInfoPortlet, 'Edm.Boolean');
    /**
     * Static representation of the [[portletId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpProfileUserInfoPortlet.PORTLET_ID = new core_1.StringField('portletId', EpProfileUserInfoPortlet, 'Edm.String');
    /**
     * Static representation of the [[standardOrUserInfoElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpProfileUserInfoPortlet.STANDARD_OR_USER_INFO_ELEMENT_ID = new core_1.StringField('standardOrUserInfoElementId', EpProfileUserInfoPortlet, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpProfileUserInfoPortlet.USER_ID = new core_1.StringField('userId', EpProfileUserInfoPortlet, 'Edm.String');
    /**
     * All fields of the EpProfileUserInfoPortlet entity.
     */
    EpProfileUserInfoPortlet._allFields = [
        EpProfileUserInfoPortlet.DASHBOARD_ID,
        EpProfileUserInfoPortlet.IS_PII,
        EpProfileUserInfoPortlet.IS_WRITABLE,
        EpProfileUserInfoPortlet.PORTLET_ID,
        EpProfileUserInfoPortlet.STANDARD_OR_USER_INFO_ELEMENT_ID,
        EpProfileUserInfoPortlet.USER_ID
    ];
    /**
     * All fields selector.
     */
    EpProfileUserInfoPortlet.ALL_FIELDS = new core_1.AllFields('*', EpProfileUserInfoPortlet);
    /**
     * All key fields of the EpProfileUserInfoPortlet entity.
     */
    EpProfileUserInfoPortlet._keyFields = [EpProfileUserInfoPortlet.DASHBOARD_ID, EpProfileUserInfoPortlet.PORTLET_ID, EpProfileUserInfoPortlet.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property EpProfileUserInfoPortlet.
     */
    EpProfileUserInfoPortlet._keys = EpProfileUserInfoPortlet._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EpProfileUserInfoPortlet = exports.EpProfileUserInfoPortlet || (exports.EpProfileUserInfoPortlet = {}));
exports.EpProfileUserInfoPortlet = EpProfileUserInfoPortlet;
//# sourceMappingURL=EpProfileUserInfoPortlet.js.map