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
var FormObjectiveCommentRequestBuilder_1 = require("./FormObjectiveCommentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormObjectiveComment" of service "SFOData".
 */
var FormObjectiveComment = /** @class */ (function (_super) {
    __extends(FormObjectiveComment, _super);
    function FormObjectiveComment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormObjectiveComment`.
     * @returns A builder that constructs instances of entity type `FormObjectiveComment`.
     */
    FormObjectiveComment.builder = function () {
        return core_1.Entity.entityBuilder(FormObjectiveComment);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormObjectiveComment` entity type.
     * @returns A `FormObjectiveComment` request builder.
     */
    FormObjectiveComment.requestBuilder = function () {
        return new FormObjectiveCommentRequestBuilder_1.FormObjectiveCommentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormObjectiveComment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormObjectiveComment`.
     */
    FormObjectiveComment.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormObjectiveComment);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormObjectiveComment.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormObjectiveComment.
     */
    FormObjectiveComment._entityName = 'FormObjectiveComment';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormObjectiveComment.
     */
    FormObjectiveComment._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormObjectiveComment._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormObjectiveComment;
}(core_1.Entity));
exports.FormObjectiveComment = FormObjectiveComment;
(function (FormObjectiveComment) {
    /**
     * Static representation of the [[commentDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveComment.COMMENT_DATE = new core_1.StringField('commentDate', FormObjectiveComment, 'Edm.String');
    /**
     * Static representation of the [[commentText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveComment.COMMENT_TEXT = new core_1.StringField('commentText', FormObjectiveComment, 'Edm.String');
    /**
     * Static representation of the [[fieldDataType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveComment.FIELD_DATA_TYPE = new core_1.StringField('fieldDataType', FormObjectiveComment, 'Edm.String');
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveComment.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormObjectiveComment, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveComment.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormObjectiveComment, 'Edm.Int64');
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveComment.ITEM_ID = new core_1.BigNumberField('itemId', FormObjectiveComment, 'Edm.Int64');
    /**
     * Static representation of the [[label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveComment.LABEL = new core_1.StringField('label', FormObjectiveComment, 'Edm.String');
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveComment.ORDER = new core_1.NumberField('order', FormObjectiveComment, 'Edm.Int32');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveComment.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormObjectiveComment, 'Edm.Int32');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveComment.TYPE = new core_1.NumberField('type', FormObjectiveComment, 'Edm.Int32');
    /**
     * Static representation of the [[userFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveComment.USER_FULL_NAME = new core_1.StringField('userFullName', FormObjectiveComment, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveComment.USER_ID = new core_1.StringField('userId', FormObjectiveComment, 'Edm.String');
    /**
     * All fields of the FormObjectiveComment entity.
     */
    FormObjectiveComment._allFields = [
        FormObjectiveComment.COMMENT_DATE,
        FormObjectiveComment.COMMENT_TEXT,
        FormObjectiveComment.FIELD_DATA_TYPE,
        FormObjectiveComment.FORM_CONTENT_ID,
        FormObjectiveComment.FORM_DATA_ID,
        FormObjectiveComment.ITEM_ID,
        FormObjectiveComment.LABEL,
        FormObjectiveComment.ORDER,
        FormObjectiveComment.SECTION_INDEX,
        FormObjectiveComment.TYPE,
        FormObjectiveComment.USER_FULL_NAME,
        FormObjectiveComment.USER_ID
    ];
    /**
     * All fields selector.
     */
    FormObjectiveComment.ALL_FIELDS = new core_1.AllFields('*', FormObjectiveComment);
    /**
     * All key fields of the FormObjectiveComment entity.
     */
    FormObjectiveComment._keyFields = [FormObjectiveComment.FORM_CONTENT_ID, FormObjectiveComment.FORM_DATA_ID, FormObjectiveComment.ITEM_ID, FormObjectiveComment.SECTION_INDEX, FormObjectiveComment.TYPE];
    /**
     * Mapping of all key field names to the respective static field property FormObjectiveComment.
     */
    FormObjectiveComment._keys = FormObjectiveComment._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormObjectiveComment = exports.FormObjectiveComment || (exports.FormObjectiveComment = {}));
exports.FormObjectiveComment = FormObjectiveComment;
//# sourceMappingURL=FormObjectiveComment.js.map