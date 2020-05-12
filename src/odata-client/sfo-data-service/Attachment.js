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
var AttachmentRequestBuilder_1 = require("./AttachmentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Attachment" of service "SFOData".
 */
var Attachment = /** @class */ (function (_super) {
    __extends(Attachment, _super);
    function Attachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Attachment`.
     * @returns A builder that constructs instances of entity type `Attachment`.
     */
    Attachment.builder = function () {
        return core_1.Entity.entityBuilder(Attachment);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Attachment` entity type.
     * @returns A `Attachment` request builder.
     */
    Attachment.requestBuilder = function () {
        return new AttachmentRequestBuilder_1.AttachmentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Attachment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Attachment`.
     */
    Attachment.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Attachment);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Attachment.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Attachment.
     */
    Attachment._entityName = 'Attachment';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Attachment.
     */
    Attachment._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Attachment._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Attachment;
}(core_1.Entity));
exports.Attachment = Attachment;
var Candidate_1 = require("./Candidate");
var User_1 = require("./User");
(function (Attachment) {
    /**
     * Static representation of the [[attachmentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.ATTACHMENT_ID = new core_1.BigNumberField('attachmentId', Attachment, 'Edm.Int64');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.COUNTRY = new core_1.StringField('country', Attachment, 'Edm.String');
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.CREATED_DATE = new core_1.DateField('createdDate', Attachment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[deletable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.DELETABLE = new core_1.BooleanField('deletable', Attachment, 'Edm.Boolean');
    /**
     * Static representation of the [[deprecable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.DEPRECABLE = new core_1.BooleanField('deprecable', Attachment, 'Edm.Boolean');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.DESCRIPTION = new core_1.StringField('description', Attachment, 'Edm.String');
    /**
     * Static representation of the [[documentCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.DOCUMENT_CATEGORY = new core_1.StringField('documentCategory', Attachment, 'Edm.String');
    /**
     * Static representation of the [[documentEntityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.DOCUMENT_ENTITY_ID = new core_1.StringField('documentEntityId', Attachment, 'Edm.String');
    /**
     * Static representation of the [[documentEntityType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.DOCUMENT_ENTITY_TYPE = new core_1.StringField('documentEntityType', Attachment, 'Edm.String');
    /**
     * Static representation of the [[documentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.DOCUMENT_TYPE = new core_1.StringField('documentType', Attachment, 'Edm.String');
    /**
     * Static representation of the [[externalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.EXTERNAL_ID = new core_1.BigNumberField('externalId', Attachment, 'Edm.Int64');
    /**
     * Static representation of the [[fileContent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.FILE_CONTENT = new core_1.BinaryField('fileContent', Attachment, 'Edm.Binary');
    /**
     * Static representation of the [[fileExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.FILE_EXTENSION = new core_1.StringField('fileExtension', Attachment, 'Edm.String');
    /**
     * Static representation of the [[fileName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.FILE_NAME = new core_1.StringField('fileName', Attachment, 'Edm.String');
    /**
     * Static representation of the [[fileSize]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.FILE_SIZE = new core_1.NumberField('fileSize', Attachment, 'Edm.Int32');
    /**
     * Static representation of the [[imageConvertInProgress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.IMAGE_CONVERT_IN_PROGRESS = new core_1.BooleanField('imageConvertInProgress', Attachment, 'Edm.Boolean');
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.LANGUAGE = new core_1.StringField('language', Attachment, 'Edm.String');
    /**
     * Static representation of the [[lastAccessed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.LAST_ACCESSED = new core_1.DateField('lastAccessed', Attachment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', Attachment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mimeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.MIME_TYPE = new core_1.StringField('mimeType', Attachment, 'Edm.String');
    /**
     * Static representation of the [[module]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.MODULE = new core_1.StringField('module', Attachment, 'Edm.String');
    /**
     * Static representation of the [[moduleCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.MODULE_CATEGORY = new core_1.StringField('moduleCategory', Attachment, 'Edm.String');
    /**
     * Static representation of the [[ownerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.OWNER_ID = new core_1.StringField('ownerId', Attachment, 'Edm.String');
    /**
     * Static representation of the [[ownerIdType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.OWNER_ID_TYPE = new core_1.StringField('ownerIdType', Attachment, 'Edm.String');
    /**
     * Static representation of the [[piiFlag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.PII_FLAG = new core_1.NumberField('piiFlag', Attachment, 'Edm.Int32');
    /**
     * Static representation of the [[searchable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.SEARCHABLE = new core_1.BooleanField('searchable', Attachment, 'Edm.Boolean');
    /**
     * Static representation of the [[softDelete]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.SOFT_DELETE = new core_1.BooleanField('softDelete', Attachment, 'Edm.Boolean');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.USER_ID = new core_1.StringField('userId', Attachment, 'Edm.String');
    /**
     * Static representation of the [[viewable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.VIEWABLE = new core_1.BooleanField('viewable', Attachment, 'Edm.Boolean');
    /**
     * Static representation of the one-to-one navigation property [[candidateNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.CANDIDATE_NAV = new core_1.OneToOneLink('candidateNav', Attachment, Candidate_1.Candidate);
    /**
     * Static representation of the one-to-one navigation property [[userNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachment.USER_NAV = new core_1.OneToOneLink('userNav', Attachment, User_1.User);
    /**
     * All fields of the Attachment entity.
     */
    Attachment._allFields = [
        Attachment.ATTACHMENT_ID,
        Attachment.COUNTRY,
        Attachment.CREATED_DATE,
        Attachment.DELETABLE,
        Attachment.DEPRECABLE,
        Attachment.DESCRIPTION,
        Attachment.DOCUMENT_CATEGORY,
        Attachment.DOCUMENT_ENTITY_ID,
        Attachment.DOCUMENT_ENTITY_TYPE,
        Attachment.DOCUMENT_TYPE,
        Attachment.EXTERNAL_ID,
        Attachment.FILE_CONTENT,
        Attachment.FILE_EXTENSION,
        Attachment.FILE_NAME,
        Attachment.FILE_SIZE,
        Attachment.IMAGE_CONVERT_IN_PROGRESS,
        Attachment.LANGUAGE,
        Attachment.LAST_ACCESSED,
        Attachment.LAST_MODIFIED_DATE_TIME,
        Attachment.MIME_TYPE,
        Attachment.MODULE,
        Attachment.MODULE_CATEGORY,
        Attachment.OWNER_ID,
        Attachment.OWNER_ID_TYPE,
        Attachment.PII_FLAG,
        Attachment.SEARCHABLE,
        Attachment.SOFT_DELETE,
        Attachment.USER_ID,
        Attachment.VIEWABLE,
        Attachment.CANDIDATE_NAV,
        Attachment.USER_NAV
    ];
    /**
     * All fields selector.
     */
    Attachment.ALL_FIELDS = new core_1.AllFields('*', Attachment);
    /**
     * All key fields of the Attachment entity.
     */
    Attachment._keyFields = [Attachment.ATTACHMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property Attachment.
     */
    Attachment._keys = Attachment._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Attachment = exports.Attachment || (exports.Attachment = {}));
exports.Attachment = Attachment;
//# sourceMappingURL=Attachment.js.map