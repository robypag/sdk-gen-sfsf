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
var MessageDetailRequestBuilder_1 = require("./MessageDetailRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "MessageDetail" of service "SFOData".
 */
var MessageDetail = /** @class */ (function (_super) {
    __extends(MessageDetail, _super);
    function MessageDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `MessageDetail`.
     * @returns A builder that constructs instances of entity type `MessageDetail`.
     */
    MessageDetail.builder = function () {
        return core_1.Entity.entityBuilder(MessageDetail);
    };
    /**
     * Returns a request builder to construct requests for operations on the `MessageDetail` entity type.
     * @returns A `MessageDetail` request builder.
     */
    MessageDetail.requestBuilder = function () {
        return new MessageDetailRequestBuilder_1.MessageDetailRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `MessageDetail`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `MessageDetail`.
     */
    MessageDetail.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, MessageDetail);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    MessageDetail.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for MessageDetail.
     */
    MessageDetail._entityName = 'MessageDetail';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for MessageDetail.
     */
    MessageDetail._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    MessageDetail._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return MessageDetail;
}(core_1.Entity));
exports.MessageDetail = MessageDetail;
(function (MessageDetail) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MessageDetail.CODE = new core_1.StringField('code', MessageDetail, 'Edm.String');
    /**
     * Static representation of the [[message]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MessageDetail.MESSAGE = new core_1.StringField('message', MessageDetail, 'Edm.String');
    /**
     * Static representation of the [[severity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MessageDetail.SEVERITY = new core_1.StringField('severity', MessageDetail, 'Edm.String');
    /**
     * Static representation of the [[target]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MessageDetail.TARGET = new core_1.StringField('target', MessageDetail, 'Edm.String');
    /**
     * All fields of the MessageDetail entity.
     */
    MessageDetail._allFields = [
        MessageDetail.CODE,
        MessageDetail.MESSAGE,
        MessageDetail.SEVERITY,
        MessageDetail.TARGET
    ];
    /**
     * All fields selector.
     */
    MessageDetail.ALL_FIELDS = new core_1.AllFields('*', MessageDetail);
    /**
     * All key fields of the MessageDetail entity.
     */
    MessageDetail._keyFields = [MessageDetail.CODE];
    /**
     * Mapping of all key field names to the respective static field property MessageDetail.
     */
    MessageDetail._keys = MessageDetail._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(MessageDetail = exports.MessageDetail || (exports.MessageDetail = {}));
exports.MessageDetail = MessageDetail;
//# sourceMappingURL=MessageDetail.js.map