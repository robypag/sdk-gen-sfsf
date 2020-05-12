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
var UpsertResultRequestBuilder_1 = require("./UpsertResultRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "UpsertResult" of service "SFOData".
 */
var UpsertResult = /** @class */ (function (_super) {
    __extends(UpsertResult, _super);
    function UpsertResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `UpsertResult`.
     * @returns A builder that constructs instances of entity type `UpsertResult`.
     */
    UpsertResult.builder = function () {
        return core_1.Entity.entityBuilder(UpsertResult);
    };
    /**
     * Returns a request builder to construct requests for operations on the `UpsertResult` entity type.
     * @returns A `UpsertResult` request builder.
     */
    UpsertResult.requestBuilder = function () {
        return new UpsertResultRequestBuilder_1.UpsertResultRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UpsertResult`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UpsertResult`.
     */
    UpsertResult.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, UpsertResult);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    UpsertResult.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for UpsertResult.
     */
    UpsertResult._entityName = 'UpsertResult';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for UpsertResult.
     */
    UpsertResult._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    UpsertResult._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return UpsertResult;
}(core_1.Entity));
exports.UpsertResult = UpsertResult;
var InlineResult_1 = require("./InlineResult");
var InnerMessage_1 = require("./InnerMessage");
(function (UpsertResult) {
    /**
     * Static representation of the [[editStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UpsertResult.EDIT_STATUS = new core_1.StringField('editStatus', UpsertResult, 'Edm.String');
    /**
     * Static representation of the [[httpCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UpsertResult.HTTP_CODE = new core_1.NumberField('httpCode', UpsertResult, 'Edm.Int32');
    /**
     * Static representation of the [[index]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UpsertResult.INDEX = new core_1.NumberField('index', UpsertResult, 'Edm.Int32');
    /**
     * Static representation of the [[key]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UpsertResult.KEY = new core_1.StringField('key', UpsertResult, 'Edm.String');
    /**
     * Static representation of the [[message]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UpsertResult.MESSAGE = new core_1.StringField('message', UpsertResult, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UpsertResult.STATUS = new core_1.StringField('status', UpsertResult, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[inlineResults]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UpsertResult.INLINE_RESULTS = new core_1.Link('inlineResults', UpsertResult, InlineResult_1.InlineResult);
    /**
     * Static representation of the one-to-one navigation property [[innermessage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UpsertResult.INNERMESSAGE = new core_1.OneToOneLink('innermessage', UpsertResult, InnerMessage_1.InnerMessage);
    /**
     * All fields of the UpsertResult entity.
     */
    UpsertResult._allFields = [
        UpsertResult.EDIT_STATUS,
        UpsertResult.HTTP_CODE,
        UpsertResult.INDEX,
        UpsertResult.KEY,
        UpsertResult.MESSAGE,
        UpsertResult.STATUS,
        UpsertResult.INLINE_RESULTS,
        UpsertResult.INNERMESSAGE
    ];
    /**
     * All fields selector.
     */
    UpsertResult.ALL_FIELDS = new core_1.AllFields('*', UpsertResult);
    /**
     * All key fields of the UpsertResult entity.
     */
    UpsertResult._keyFields = [UpsertResult.KEY];
    /**
     * Mapping of all key field names to the respective static field property UpsertResult.
     */
    UpsertResult._keys = UpsertResult._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(UpsertResult = exports.UpsertResult || (exports.UpsertResult = {}));
exports.UpsertResult = UpsertResult;
//# sourceMappingURL=UpsertResult.js.map