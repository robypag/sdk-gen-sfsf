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
var FormUserRatingCommentRequestBuilder_1 = require("./FormUserRatingCommentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormUserRatingComment" of service "SFOData".
 */
var FormUserRatingComment = /** @class */ (function (_super) {
    __extends(FormUserRatingComment, _super);
    function FormUserRatingComment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormUserRatingComment`.
     * @returns A builder that constructs instances of entity type `FormUserRatingComment`.
     */
    FormUserRatingComment.builder = function () {
        return core_1.Entity.entityBuilder(FormUserRatingComment);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormUserRatingComment` entity type.
     * @returns A `FormUserRatingComment` request builder.
     */
    FormUserRatingComment.requestBuilder = function () {
        return new FormUserRatingCommentRequestBuilder_1.FormUserRatingCommentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormUserRatingComment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormUserRatingComment`.
     */
    FormUserRatingComment.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormUserRatingComment);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormUserRatingComment.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormUserRatingComment.
     */
    FormUserRatingComment._entityName = 'FormUserRatingComment';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormUserRatingComment.
     */
    FormUserRatingComment._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormUserRatingComment._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormUserRatingComment;
}(core_1.Entity));
exports.FormUserRatingComment = FormUserRatingComment;
(function (FormUserRatingComment) {
    /**
     * Static representation of the [[comment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormUserRatingComment.COMMENT = new core_1.StringField('comment', FormUserRatingComment, 'Edm.String');
    /**
     * Static representation of the [[commentKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormUserRatingComment.COMMENT_KEY = new core_1.StringField('commentKey', FormUserRatingComment, 'Edm.String');
    /**
     * Static representation of the [[commentLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormUserRatingComment.COMMENT_LABEL = new core_1.StringField('commentLabel', FormUserRatingComment, 'Edm.String');
    /**
     * Static representation of the [[commentPermission]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormUserRatingComment.COMMENT_PERMISSION = new core_1.StringField('commentPermission', FormUserRatingComment, 'Edm.String');
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormUserRatingComment.FIRST_NAME = new core_1.StringField('firstName', FormUserRatingComment, 'Edm.String');
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormUserRatingComment.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormUserRatingComment, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormUserRatingComment.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormUserRatingComment, 'Edm.Int64');
    /**
     * Static representation of the [[fullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormUserRatingComment.FULL_NAME = new core_1.StringField('fullName', FormUserRatingComment, 'Edm.String');
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormUserRatingComment.ITEM_ID = new core_1.BigNumberField('itemId', FormUserRatingComment, 'Edm.Int64');
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormUserRatingComment.LAST_NAME = new core_1.StringField('lastName', FormUserRatingComment, 'Edm.String');
    /**
     * Static representation of the [[rating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormUserRatingComment.RATING = new core_1.StringField('rating', FormUserRatingComment, 'Edm.String');
    /**
     * Static representation of the [[ratingKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormUserRatingComment.RATING_KEY = new core_1.StringField('ratingKey', FormUserRatingComment, 'Edm.String');
    /**
     * Static representation of the [[ratingLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormUserRatingComment.RATING_LABEL = new core_1.StringField('ratingLabel', FormUserRatingComment, 'Edm.String');
    /**
     * Static representation of the [[ratingPermission]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormUserRatingComment.RATING_PERMISSION = new core_1.StringField('ratingPermission', FormUserRatingComment, 'Edm.String');
    /**
     * Static representation of the [[ratingType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormUserRatingComment.RATING_TYPE = new core_1.StringField('ratingType', FormUserRatingComment, 'Edm.String');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormUserRatingComment.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormUserRatingComment, 'Edm.Int32');
    /**
     * Static representation of the [[textRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormUserRatingComment.TEXT_RATING = new core_1.StringField('textRating', FormUserRatingComment, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormUserRatingComment.USER_ID = new core_1.StringField('userId', FormUserRatingComment, 'Edm.String');
    /**
     * All fields of the FormUserRatingComment entity.
     */
    FormUserRatingComment._allFields = [
        FormUserRatingComment.COMMENT,
        FormUserRatingComment.COMMENT_KEY,
        FormUserRatingComment.COMMENT_LABEL,
        FormUserRatingComment.COMMENT_PERMISSION,
        FormUserRatingComment.FIRST_NAME,
        FormUserRatingComment.FORM_CONTENT_ID,
        FormUserRatingComment.FORM_DATA_ID,
        FormUserRatingComment.FULL_NAME,
        FormUserRatingComment.ITEM_ID,
        FormUserRatingComment.LAST_NAME,
        FormUserRatingComment.RATING,
        FormUserRatingComment.RATING_KEY,
        FormUserRatingComment.RATING_LABEL,
        FormUserRatingComment.RATING_PERMISSION,
        FormUserRatingComment.RATING_TYPE,
        FormUserRatingComment.SECTION_INDEX,
        FormUserRatingComment.TEXT_RATING,
        FormUserRatingComment.USER_ID
    ];
    /**
     * All fields selector.
     */
    FormUserRatingComment.ALL_FIELDS = new core_1.AllFields('*', FormUserRatingComment);
    /**
     * All key fields of the FormUserRatingComment entity.
     */
    FormUserRatingComment._keyFields = [FormUserRatingComment.FORM_CONTENT_ID, FormUserRatingComment.FORM_DATA_ID, FormUserRatingComment.ITEM_ID, FormUserRatingComment.RATING_TYPE, FormUserRatingComment.SECTION_INDEX, FormUserRatingComment.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property FormUserRatingComment.
     */
    FormUserRatingComment._keys = FormUserRatingComment._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormUserRatingComment = exports.FormUserRatingComment || (exports.FormUserRatingComment = {}));
exports.FormUserRatingComment = FormUserRatingComment;
//# sourceMappingURL=FormUserRatingComment.js.map