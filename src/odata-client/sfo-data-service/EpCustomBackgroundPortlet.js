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
var EpCustomBackgroundPortletRequestBuilder_1 = require("./EpCustomBackgroundPortletRequestBuilder");
var EpCustomBackgroundPortletProperty_1 = require("./EpCustomBackgroundPortletProperty");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EPCustomBackgroundPortlet" of service "SFOData".
 */
var EpCustomBackgroundPortlet = /** @class */ (function (_super) {
    __extends(EpCustomBackgroundPortlet, _super);
    function EpCustomBackgroundPortlet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EpCustomBackgroundPortlet`.
     * @returns A builder that constructs instances of entity type `EpCustomBackgroundPortlet`.
     */
    EpCustomBackgroundPortlet.builder = function () {
        return core_1.Entity.entityBuilder(EpCustomBackgroundPortlet);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EpCustomBackgroundPortlet` entity type.
     * @returns A `EpCustomBackgroundPortlet` request builder.
     */
    EpCustomBackgroundPortlet.requestBuilder = function () {
        return new EpCustomBackgroundPortletRequestBuilder_1.EpCustomBackgroundPortletRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EpCustomBackgroundPortlet`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EpCustomBackgroundPortlet`.
     */
    EpCustomBackgroundPortlet.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EpCustomBackgroundPortlet);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EpCustomBackgroundPortlet.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EpCustomBackgroundPortlet.
     */
    EpCustomBackgroundPortlet._entityName = 'EPCustomBackgroundPortlet';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EpCustomBackgroundPortlet.
     */
    EpCustomBackgroundPortlet._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EpCustomBackgroundPortlet._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EpCustomBackgroundPortlet;
}(core_1.Entity));
exports.EpCustomBackgroundPortlet = EpCustomBackgroundPortlet;
(function (EpCustomBackgroundPortlet) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpCustomBackgroundPortlet.BACKGROUND_ELEMENT_ID = new core_1.StringField('backgroundElementId', EpCustomBackgroundPortlet, 'Edm.String');
    /**
     * Static representation of the [[backgroundPropertyLists]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpCustomBackgroundPortlet.BACKGROUND_PROPERTY_LISTS = new EpCustomBackgroundPortletProperty_1.EpCustomBackgroundPortletPropertyField('backgroundPropertyLists', EpCustomBackgroundPortlet);
    /**
     * Static representation of the [[editable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpCustomBackgroundPortlet.EDITABLE = new core_1.BooleanField('editable', EpCustomBackgroundPortlet, 'Edm.Boolean');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpCustomBackgroundPortlet.USER_ID = new core_1.StringField('userId', EpCustomBackgroundPortlet, 'Edm.String');
    /**
     * Static representation of the [[viewable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpCustomBackgroundPortlet.VIEWABLE = new core_1.BooleanField('viewable', EpCustomBackgroundPortlet, 'Edm.Boolean');
    /**
     * All fields of the EpCustomBackgroundPortlet entity.
     */
    EpCustomBackgroundPortlet._allFields = [
        EpCustomBackgroundPortlet.BACKGROUND_ELEMENT_ID,
        EpCustomBackgroundPortlet.BACKGROUND_PROPERTY_LISTS,
        EpCustomBackgroundPortlet.EDITABLE,
        EpCustomBackgroundPortlet.USER_ID,
        EpCustomBackgroundPortlet.VIEWABLE
    ];
    /**
     * All fields selector.
     */
    EpCustomBackgroundPortlet.ALL_FIELDS = new core_1.AllFields('*', EpCustomBackgroundPortlet);
    /**
     * All key fields of the EpCustomBackgroundPortlet entity.
     */
    EpCustomBackgroundPortlet._keyFields = [EpCustomBackgroundPortlet.BACKGROUND_ELEMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property EpCustomBackgroundPortlet.
     */
    EpCustomBackgroundPortlet._keys = EpCustomBackgroundPortlet._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EpCustomBackgroundPortlet = exports.EpCustomBackgroundPortlet || (exports.EpCustomBackgroundPortlet = {}));
exports.EpCustomBackgroundPortlet = EpCustomBackgroundPortlet;
//# sourceMappingURL=EpCustomBackgroundPortlet.js.map