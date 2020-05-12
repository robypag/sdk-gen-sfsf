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
var InnerMessageRequestBuilder_1 = require("./InnerMessageRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "InnerMessage" of service "SFOData".
 */
var InnerMessage = /** @class */ (function (_super) {
    __extends(InnerMessage, _super);
    function InnerMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `InnerMessage`.
     * @returns A builder that constructs instances of entity type `InnerMessage`.
     */
    InnerMessage.builder = function () {
        return core_1.Entity.entityBuilder(InnerMessage);
    };
    /**
     * Returns a request builder to construct requests for operations on the `InnerMessage` entity type.
     * @returns A `InnerMessage` request builder.
     */
    InnerMessage.requestBuilder = function () {
        return new InnerMessageRequestBuilder_1.InnerMessageRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InnerMessage`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InnerMessage`.
     */
    InnerMessage.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, InnerMessage);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    InnerMessage.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for InnerMessage.
     */
    InnerMessage._entityName = 'InnerMessage';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for InnerMessage.
     */
    InnerMessage._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    InnerMessage._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return InnerMessage;
}(core_1.Entity));
exports.InnerMessage = InnerMessage;
var MessageDetail_1 = require("./MessageDetail");
(function (InnerMessage) {
    /**
     * Static representation of the [[key]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InnerMessage.KEY = new core_1.StringField('key', InnerMessage, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[messagedetails]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InnerMessage.MESSAGEDETAILS = new core_1.Link('messagedetails', InnerMessage, MessageDetail_1.MessageDetail);
    /**
     * All fields of the InnerMessage entity.
     */
    InnerMessage._allFields = [
        InnerMessage.KEY,
        InnerMessage.MESSAGEDETAILS
    ];
    /**
     * All fields selector.
     */
    InnerMessage.ALL_FIELDS = new core_1.AllFields('*', InnerMessage);
    /**
     * All key fields of the InnerMessage entity.
     */
    InnerMessage._keyFields = [InnerMessage.KEY];
    /**
     * Mapping of all key field names to the respective static field property InnerMessage.
     */
    InnerMessage._keys = InnerMessage._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(InnerMessage = exports.InnerMessage || (exports.InnerMessage = {}));
exports.InnerMessage = InnerMessage;
//# sourceMappingURL=InnerMessage.js.map