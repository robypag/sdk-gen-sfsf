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
var Background_DocumentsRequestBuilder_1 = require("./Background_DocumentsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Background_Documents" of service "SFOData".
 */
var Background_Documents = /** @class */ (function (_super) {
    __extends(Background_Documents, _super);
    function Background_Documents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Background_Documents`.
     * @returns A builder that constructs instances of entity type `Background_Documents`.
     */
    Background_Documents.builder = function () {
        return core_1.Entity.entityBuilder(Background_Documents);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Background_Documents` entity type.
     * @returns A `Background_Documents` request builder.
     */
    Background_Documents.requestBuilder = function () {
        return new Background_DocumentsRequestBuilder_1.Background_DocumentsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Documents`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_Documents`.
     */
    Background_Documents.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Background_Documents);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Background_Documents.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Background_Documents.
     */
    Background_Documents._entityName = 'Background_Documents';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_Documents.
     */
    Background_Documents._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Background_Documents._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Background_Documents;
}(core_1.Entity));
exports.Background_Documents = Background_Documents;
var Attachment_1 = require("./Attachment");
var User_1 = require("./User");
(function (Background_Documents) {
    /**
     * Static representation of the [[docName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Documents.DOC_NAME = new core_1.StringField('DocName', Background_Documents, 'Edm.String');
    /**
     * Static representation of the [[attachment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Documents.ATTACHMENT = new core_1.NumberField('attachment', Background_Documents, 'Edm.Int32');
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Documents.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', Background_Documents, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Documents.BG_ORDER_POS = new core_1.BigNumberField('bgOrderPos', Background_Documents, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Documents.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', Background_Documents, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Documents.USER_ID = new core_1.StringField('userId', Background_Documents, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[attachmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Documents.ATTACHMENT_NAV = new core_1.OneToOneLink('attachmentNav', Background_Documents, Attachment_1.Attachment);
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Documents.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', Background_Documents, User_1.User);
    /**
     * All fields of the Background_Documents entity.
     */
    Background_Documents._allFields = [
        Background_Documents.DOC_NAME,
        Background_Documents.ATTACHMENT,
        Background_Documents.BACKGROUND_ELEMENT_ID,
        Background_Documents.BG_ORDER_POS,
        Background_Documents.LAST_MODIFIED_DATE,
        Background_Documents.USER_ID,
        Background_Documents.ATTACHMENT_NAV,
        Background_Documents.USER_ID_NAV
    ];
    /**
     * All fields selector.
     */
    Background_Documents.ALL_FIELDS = new core_1.AllFields('*', Background_Documents);
    /**
     * All key fields of the Background_Documents entity.
     */
    Background_Documents._keyFields = [Background_Documents.BACKGROUND_ELEMENT_ID, Background_Documents.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property Background_Documents.
     */
    Background_Documents._keys = Background_Documents._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Background_Documents = exports.Background_Documents || (exports.Background_Documents = {}));
exports.Background_Documents = Background_Documents;
//# sourceMappingURL=Background_Documents.js.map