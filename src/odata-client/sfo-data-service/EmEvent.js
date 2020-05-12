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
var EmEventRequestBuilder_1 = require("./EmEventRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EMEvent" of service "SFOData".
 */
var EmEvent = /** @class */ (function (_super) {
    __extends(EmEvent, _super);
    function EmEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmEvent`.
     * @returns A builder that constructs instances of entity type `EmEvent`.
     */
    EmEvent.builder = function () {
        return core_1.Entity.entityBuilder(EmEvent);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmEvent` entity type.
     * @returns A `EmEvent` request builder.
     */
    EmEvent.requestBuilder = function () {
        return new EmEventRequestBuilder_1.EmEventRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmEvent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmEvent`.
     */
    EmEvent.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmEvent);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmEvent.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmEvent.
     */
    EmEvent._entityName = 'EMEvent';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmEvent.
     */
    EmEvent._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmEvent._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmEvent;
}(core_1.Entity));
exports.EmEvent = EmEvent;
var EmEventAttribute_1 = require("./EmEventAttribute");
var EmEventPayload_1 = require("./EmEventPayload");
var EmMonitoredProcess_1 = require("./EmMonitoredProcess");
(function (EmEvent) {
    /**
     * Static representation of the [[eventDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmEvent.EVENT_DESCRIPTION = new core_1.StringField('eventDescription', EmEvent, 'Edm.String');
    /**
     * Static representation of the [[eventDescriptionMsgKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmEvent.EVENT_DESCRIPTION_MSG_KEY = new core_1.StringField('eventDescriptionMsgKey', EmEvent, 'Edm.String');
    /**
     * Static representation of the [[eventName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmEvent.EVENT_NAME = new core_1.StringField('eventName', EmEvent, 'Edm.String');
    /**
     * Static representation of the [[eventTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmEvent.EVENT_TIME = new core_1.DateField('eventTime', EmEvent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eventType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmEvent.EVENT_TYPE = new core_1.StringField('eventType', EmEvent, 'Edm.String');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmEvent.ID = new core_1.BigNumberField('id', EmEvent, 'Edm.Int64');
    /**
     * Static representation of the one-to-many navigation property [[eventAttributes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmEvent.EVENT_ATTRIBUTES = new core_1.Link('eventAttributes', EmEvent, EmEventAttribute_1.EmEventAttribute);
    /**
     * Static representation of the one-to-one navigation property [[eventPayload]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmEvent.EVENT_PAYLOAD = new core_1.OneToOneLink('eventPayload', EmEvent, EmEventPayload_1.EmEventPayload);
    /**
     * Static representation of the one-to-one navigation property [[process]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmEvent.PROCESS = new core_1.OneToOneLink('process', EmEvent, EmMonitoredProcess_1.EmMonitoredProcess);
    /**
     * All fields of the EmEvent entity.
     */
    EmEvent._allFields = [
        EmEvent.EVENT_DESCRIPTION,
        EmEvent.EVENT_DESCRIPTION_MSG_KEY,
        EmEvent.EVENT_NAME,
        EmEvent.EVENT_TIME,
        EmEvent.EVENT_TYPE,
        EmEvent.ID,
        EmEvent.EVENT_ATTRIBUTES,
        EmEvent.EVENT_PAYLOAD,
        EmEvent.PROCESS
    ];
    /**
     * All fields selector.
     */
    EmEvent.ALL_FIELDS = new core_1.AllFields('*', EmEvent);
    /**
     * All key fields of the EmEvent entity.
     */
    EmEvent._keyFields = [EmEvent.ID];
    /**
     * Mapping of all key field names to the respective static field property EmEvent.
     */
    EmEvent._keys = EmEvent._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmEvent = exports.EmEvent || (exports.EmEvent = {}));
exports.EmEvent = EmEvent;
//# sourceMappingURL=EmEvent.js.map