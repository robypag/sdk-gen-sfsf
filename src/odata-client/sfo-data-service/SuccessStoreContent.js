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
var SuccessStoreContentRequestBuilder_1 = require("./SuccessStoreContentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SuccessStoreContent" of service "SFOData".
 */
var SuccessStoreContent = /** @class */ (function (_super) {
    __extends(SuccessStoreContent, _super);
    function SuccessStoreContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SuccessStoreContent`.
     * @returns A builder that constructs instances of entity type `SuccessStoreContent`.
     */
    SuccessStoreContent.builder = function () {
        return core_1.Entity.entityBuilder(SuccessStoreContent);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SuccessStoreContent` entity type.
     * @returns A `SuccessStoreContent` request builder.
     */
    SuccessStoreContent.requestBuilder = function () {
        return new SuccessStoreContentRequestBuilder_1.SuccessStoreContentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SuccessStoreContent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SuccessStoreContent`.
     */
    SuccessStoreContent.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, SuccessStoreContent);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SuccessStoreContent.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SuccessStoreContent.
     */
    SuccessStoreContent._entityName = 'SuccessStoreContent';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SuccessStoreContent.
     */
    SuccessStoreContent._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    SuccessStoreContent._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SuccessStoreContent;
}(core_1.Entity));
exports.SuccessStoreContent = SuccessStoreContent;
var SuccessStoreContentBlob_1 = require("./SuccessStoreContentBlob");
(function (SuccessStoreContent) {
    /**
     * Static representation of the [[bestPractice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SuccessStoreContent.BEST_PRACTICE = new core_1.BooleanField('bestPractice', SuccessStoreContent, 'Edm.Boolean');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SuccessStoreContent.COMMENTS = new core_1.StringField('comments', SuccessStoreContent, 'Edm.String');
    /**
     * Static representation of the [[contentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SuccessStoreContent.CONTENT_ID = new core_1.BigNumberField('contentId', SuccessStoreContent, 'Edm.Int64');
    /**
     * Static representation of the [[contentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SuccessStoreContent.CONTENT_TYPE = new core_1.StringField('contentType', SuccessStoreContent, 'Edm.String');
    /**
     * Static representation of the [[customField]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SuccessStoreContent.CUSTOM_FIELD = new core_1.StringField('customField', SuccessStoreContent, 'Edm.String');
    /**
     * Static representation of the [[defaultContent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SuccessStoreContent.DEFAULT_CONTENT = new core_1.BooleanField('defaultContent', SuccessStoreContent, 'Edm.Boolean');
    /**
     * Static representation of the [[defaultContentName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SuccessStoreContent.DEFAULT_CONTENT_NAME = new core_1.StringField('defaultContentName', SuccessStoreContent, 'Edm.String');
    /**
     * Static representation of the [[domain]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SuccessStoreContent.DOMAIN = new core_1.StringField('domain', SuccessStoreContent, 'Edm.String');
    /**
     * Static representation of the [[expiryOnDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SuccessStoreContent.EXPIRY_ON_DATE = new core_1.DateField('expiryOnDate', SuccessStoreContent, 'Edm.DateTime');
    /**
     * Static representation of the [[publishOnDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SuccessStoreContent.PUBLISH_ON_DATE = new core_1.DateField('publishOnDate', SuccessStoreContent, 'Edm.DateTime');
    /**
     * Static representation of the [[revisionNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SuccessStoreContent.REVISION_NO = new core_1.StringField('revisionNo', SuccessStoreContent, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SuccessStoreContent.STATUS = new core_1.StringField('status', SuccessStoreContent, 'Edm.String');
    /**
     * Static representation of the [[wizardable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SuccessStoreContent.WIZARDABLE = new core_1.BooleanField('wizardable', SuccessStoreContent, 'Edm.Boolean');
    /**
     * Static representation of the one-to-one navigation property [[contentData]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SuccessStoreContent.CONTENT_DATA = new core_1.OneToOneLink('contentData', SuccessStoreContent, SuccessStoreContentBlob_1.SuccessStoreContentBlob);
    /**
     * All fields of the SuccessStoreContent entity.
     */
    SuccessStoreContent._allFields = [
        SuccessStoreContent.BEST_PRACTICE,
        SuccessStoreContent.COMMENTS,
        SuccessStoreContent.CONTENT_ID,
        SuccessStoreContent.CONTENT_TYPE,
        SuccessStoreContent.CUSTOM_FIELD,
        SuccessStoreContent.DEFAULT_CONTENT,
        SuccessStoreContent.DEFAULT_CONTENT_NAME,
        SuccessStoreContent.DOMAIN,
        SuccessStoreContent.EXPIRY_ON_DATE,
        SuccessStoreContent.PUBLISH_ON_DATE,
        SuccessStoreContent.REVISION_NO,
        SuccessStoreContent.STATUS,
        SuccessStoreContent.WIZARDABLE,
        SuccessStoreContent.CONTENT_DATA
    ];
    /**
     * All fields selector.
     */
    SuccessStoreContent.ALL_FIELDS = new core_1.AllFields('*', SuccessStoreContent);
    /**
     * All key fields of the SuccessStoreContent entity.
     */
    SuccessStoreContent._keyFields = [SuccessStoreContent.CONTENT_ID];
    /**
     * Mapping of all key field names to the respective static field property SuccessStoreContent.
     */
    SuccessStoreContent._keys = SuccessStoreContent._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SuccessStoreContent = exports.SuccessStoreContent || (exports.SuccessStoreContent = {}));
exports.SuccessStoreContent = SuccessStoreContent;
//# sourceMappingURL=SuccessStoreContent.js.map