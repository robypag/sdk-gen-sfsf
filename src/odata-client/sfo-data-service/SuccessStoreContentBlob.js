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
var SuccessStoreContentBlobRequestBuilder_1 = require("./SuccessStoreContentBlobRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SuccessStoreContentBlob" of service "SFOData".
 */
var SuccessStoreContentBlob = /** @class */ (function (_super) {
    __extends(SuccessStoreContentBlob, _super);
    function SuccessStoreContentBlob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SuccessStoreContentBlob`.
     * @returns A builder that constructs instances of entity type `SuccessStoreContentBlob`.
     */
    SuccessStoreContentBlob.builder = function () {
        return core_1.Entity.entityBuilder(SuccessStoreContentBlob);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SuccessStoreContentBlob` entity type.
     * @returns A `SuccessStoreContentBlob` request builder.
     */
    SuccessStoreContentBlob.requestBuilder = function () {
        return new SuccessStoreContentBlobRequestBuilder_1.SuccessStoreContentBlobRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SuccessStoreContentBlob`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SuccessStoreContentBlob`.
     */
    SuccessStoreContentBlob.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, SuccessStoreContentBlob);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SuccessStoreContentBlob.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SuccessStoreContentBlob.
     */
    SuccessStoreContentBlob._entityName = 'SuccessStoreContentBlob';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SuccessStoreContentBlob.
     */
    SuccessStoreContentBlob._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    SuccessStoreContentBlob._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SuccessStoreContentBlob;
}(core_1.Entity));
exports.SuccessStoreContentBlob = SuccessStoreContentBlob;
(function (SuccessStoreContentBlob) {
    /**
     * Static representation of the [[contentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SuccessStoreContentBlob.CONTENT_ID = new core_1.StringField('contentId', SuccessStoreContentBlob, 'Edm.String');
    /**
     * All fields of the SuccessStoreContentBlob entity.
     */
    SuccessStoreContentBlob._allFields = [
        SuccessStoreContentBlob.CONTENT_ID
    ];
    /**
     * All fields selector.
     */
    SuccessStoreContentBlob.ALL_FIELDS = new core_1.AllFields('*', SuccessStoreContentBlob);
    /**
     * All key fields of the SuccessStoreContentBlob entity.
     */
    SuccessStoreContentBlob._keyFields = [SuccessStoreContentBlob.CONTENT_ID];
    /**
     * Mapping of all key field names to the respective static field property SuccessStoreContentBlob.
     */
    SuccessStoreContentBlob._keys = SuccessStoreContentBlob._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SuccessStoreContentBlob = exports.SuccessStoreContentBlob || (exports.SuccessStoreContentBlob = {}));
exports.SuccessStoreContentBlob = SuccessStoreContentBlob;
//# sourceMappingURL=SuccessStoreContentBlob.js.map