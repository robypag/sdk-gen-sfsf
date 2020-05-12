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
var EpProfilePortletRequestBuilder_1 = require("./EpProfilePortletRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EPProfilePortlet" of service "SFOData".
 */
var EpProfilePortlet = /** @class */ (function (_super) {
    __extends(EpProfilePortlet, _super);
    function EpProfilePortlet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EpProfilePortlet`.
     * @returns A builder that constructs instances of entity type `EpProfilePortlet`.
     */
    EpProfilePortlet.builder = function () {
        return core_1.Entity.entityBuilder(EpProfilePortlet);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EpProfilePortlet` entity type.
     * @returns A `EpProfilePortlet` request builder.
     */
    EpProfilePortlet.requestBuilder = function () {
        return new EpProfilePortletRequestBuilder_1.EpProfilePortletRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EpProfilePortlet`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EpProfilePortlet`.
     */
    EpProfilePortlet.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EpProfilePortlet);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EpProfilePortlet.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EpProfilePortlet.
     */
    EpProfilePortlet._entityName = 'EPProfilePortlet';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EpProfilePortlet.
     */
    EpProfilePortlet._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EpProfilePortlet._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EpProfilePortlet;
}(core_1.Entity));
exports.EpProfilePortlet = EpProfilePortlet;
(function (EpProfilePortlet) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpProfilePortlet.BACKGROUND_ELEMENT_ID = new core_1.StringField('backgroundElementId', EpProfilePortlet, 'Edm.String');
    /**
     * Static representation of the [[dashboardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpProfilePortlet.DASHBOARD_ID = new core_1.StringField('dashboardId', EpProfilePortlet, 'Edm.String');
    /**
     * Static representation of the [[entityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpProfilePortlet.ENTITY_NAME = new core_1.StringField('entityName', EpProfilePortlet, 'Edm.String');
    /**
     * Static representation of the [[instructionalText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpProfilePortlet.INSTRUCTIONAL_TEXT = new core_1.StringField('instructionalText', EpProfilePortlet, 'Edm.String');
    /**
     * Static representation of the [[isEditable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpProfilePortlet.IS_EDITABLE = new core_1.BooleanField('isEditable', EpProfilePortlet, 'Edm.Boolean');
    /**
     * Static representation of the [[isFeedbackPortlet]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpProfilePortlet.IS_FEEDBACK_PORTLET = new core_1.BooleanField('isFeedbackPortlet', EpProfilePortlet, 'Edm.Boolean');
    /**
     * Static representation of the [[portletId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpProfilePortlet.PORTLET_ID = new core_1.StringField('portletId', EpProfilePortlet, 'Edm.String');
    /**
     * Static representation of the [[portletLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpProfilePortlet.PORTLET_LABEL = new core_1.StringField('portletLabel', EpProfilePortlet, 'Edm.String');
    /**
     * Static representation of the [[portletType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpProfilePortlet.PORTLET_TYPE = new core_1.NumberField('portletType', EpProfilePortlet, 'Edm.Int32');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpProfilePortlet.USER_ID = new core_1.StringField('userId', EpProfilePortlet, 'Edm.String');
    /**
     * All fields of the EpProfilePortlet entity.
     */
    EpProfilePortlet._allFields = [
        EpProfilePortlet.BACKGROUND_ELEMENT_ID,
        EpProfilePortlet.DASHBOARD_ID,
        EpProfilePortlet.ENTITY_NAME,
        EpProfilePortlet.INSTRUCTIONAL_TEXT,
        EpProfilePortlet.IS_EDITABLE,
        EpProfilePortlet.IS_FEEDBACK_PORTLET,
        EpProfilePortlet.PORTLET_ID,
        EpProfilePortlet.PORTLET_LABEL,
        EpProfilePortlet.PORTLET_TYPE,
        EpProfilePortlet.USER_ID
    ];
    /**
     * All fields selector.
     */
    EpProfilePortlet.ALL_FIELDS = new core_1.AllFields('*', EpProfilePortlet);
    /**
     * All key fields of the EpProfilePortlet entity.
     */
    EpProfilePortlet._keyFields = [EpProfilePortlet.DASHBOARD_ID, EpProfilePortlet.PORTLET_ID, EpProfilePortlet.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property EpProfilePortlet.
     */
    EpProfilePortlet._keys = EpProfilePortlet._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EpProfilePortlet = exports.EpProfilePortlet || (exports.EpProfilePortlet = {}));
exports.EpProfilePortlet = EpProfilePortlet;
//# sourceMappingURL=EpProfilePortlet.js.map