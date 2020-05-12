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
var FormBehaviorRatingCommentRequestBuilder_1 = require("./FormBehaviorRatingCommentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormBehaviorRatingComment" of service "SFOData".
 */
var FormBehaviorRatingComment = /** @class */ (function (_super) {
    __extends(FormBehaviorRatingComment, _super);
    function FormBehaviorRatingComment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormBehaviorRatingComment`.
     * @returns A builder that constructs instances of entity type `FormBehaviorRatingComment`.
     */
    FormBehaviorRatingComment.builder = function () {
        return core_1.Entity.entityBuilder(FormBehaviorRatingComment);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormBehaviorRatingComment` entity type.
     * @returns A `FormBehaviorRatingComment` request builder.
     */
    FormBehaviorRatingComment.requestBuilder = function () {
        return new FormBehaviorRatingCommentRequestBuilder_1.FormBehaviorRatingCommentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormBehaviorRatingComment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormBehaviorRatingComment`.
     */
    FormBehaviorRatingComment.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormBehaviorRatingComment);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormBehaviorRatingComment.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormBehaviorRatingComment.
     */
    FormBehaviorRatingComment._entityName = 'FormBehaviorRatingComment';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormBehaviorRatingComment.
     */
    FormBehaviorRatingComment._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormBehaviorRatingComment._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormBehaviorRatingComment;
}(core_1.Entity));
exports.FormBehaviorRatingComment = FormBehaviorRatingComment;
(function (FormBehaviorRatingComment) {
    /**
     * Static representation of the [[behaviorId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormBehaviorRatingComment.BEHAVIOR_ID = new core_1.BigNumberField('behaviorId', FormBehaviorRatingComment, 'Edm.Int64');
    /**
     * Static representation of the [[comment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormBehaviorRatingComment.COMMENT = new core_1.StringField('comment', FormBehaviorRatingComment, 'Edm.String');
    /**
     * Static representation of the [[commentKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormBehaviorRatingComment.COMMENT_KEY = new core_1.StringField('commentKey', FormBehaviorRatingComment, 'Edm.String');
    /**
     * Static representation of the [[commentLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormBehaviorRatingComment.COMMENT_LABEL = new core_1.StringField('commentLabel', FormBehaviorRatingComment, 'Edm.String');
    /**
     * Static representation of the [[commentPermission]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormBehaviorRatingComment.COMMENT_PERMISSION = new core_1.StringField('commentPermission', FormBehaviorRatingComment, 'Edm.String');
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormBehaviorRatingComment.FIRST_NAME = new core_1.StringField('firstName', FormBehaviorRatingComment, 'Edm.String');
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormBehaviorRatingComment.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormBehaviorRatingComment, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormBehaviorRatingComment.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormBehaviorRatingComment, 'Edm.Int64');
    /**
     * Static representation of the [[fullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormBehaviorRatingComment.FULL_NAME = new core_1.StringField('fullName', FormBehaviorRatingComment, 'Edm.String');
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormBehaviorRatingComment.ITEM_ID = new core_1.BigNumberField('itemId', FormBehaviorRatingComment, 'Edm.Int64');
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormBehaviorRatingComment.LAST_NAME = new core_1.StringField('lastName', FormBehaviorRatingComment, 'Edm.String');
    /**
     * Static representation of the [[rating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormBehaviorRatingComment.RATING = new core_1.StringField('rating', FormBehaviorRatingComment, 'Edm.String');
    /**
     * Static representation of the [[ratingKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormBehaviorRatingComment.RATING_KEY = new core_1.StringField('ratingKey', FormBehaviorRatingComment, 'Edm.String');
    /**
     * Static representation of the [[ratingLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormBehaviorRatingComment.RATING_LABEL = new core_1.StringField('ratingLabel', FormBehaviorRatingComment, 'Edm.String');
    /**
     * Static representation of the [[ratingPermission]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormBehaviorRatingComment.RATING_PERMISSION = new core_1.StringField('ratingPermission', FormBehaviorRatingComment, 'Edm.String');
    /**
     * Static representation of the [[ratingType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormBehaviorRatingComment.RATING_TYPE = new core_1.StringField('ratingType', FormBehaviorRatingComment, 'Edm.String');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormBehaviorRatingComment.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormBehaviorRatingComment, 'Edm.Int32');
    /**
     * Static representation of the [[textRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormBehaviorRatingComment.TEXT_RATING = new core_1.StringField('textRating', FormBehaviorRatingComment, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormBehaviorRatingComment.USER_ID = new core_1.StringField('userId', FormBehaviorRatingComment, 'Edm.String');
    /**
     * All fields of the FormBehaviorRatingComment entity.
     */
    FormBehaviorRatingComment._allFields = [
        FormBehaviorRatingComment.BEHAVIOR_ID,
        FormBehaviorRatingComment.COMMENT,
        FormBehaviorRatingComment.COMMENT_KEY,
        FormBehaviorRatingComment.COMMENT_LABEL,
        FormBehaviorRatingComment.COMMENT_PERMISSION,
        FormBehaviorRatingComment.FIRST_NAME,
        FormBehaviorRatingComment.FORM_CONTENT_ID,
        FormBehaviorRatingComment.FORM_DATA_ID,
        FormBehaviorRatingComment.FULL_NAME,
        FormBehaviorRatingComment.ITEM_ID,
        FormBehaviorRatingComment.LAST_NAME,
        FormBehaviorRatingComment.RATING,
        FormBehaviorRatingComment.RATING_KEY,
        FormBehaviorRatingComment.RATING_LABEL,
        FormBehaviorRatingComment.RATING_PERMISSION,
        FormBehaviorRatingComment.RATING_TYPE,
        FormBehaviorRatingComment.SECTION_INDEX,
        FormBehaviorRatingComment.TEXT_RATING,
        FormBehaviorRatingComment.USER_ID
    ];
    /**
     * All fields selector.
     */
    FormBehaviorRatingComment.ALL_FIELDS = new core_1.AllFields('*', FormBehaviorRatingComment);
    /**
     * All key fields of the FormBehaviorRatingComment entity.
     */
    FormBehaviorRatingComment._keyFields = [FormBehaviorRatingComment.BEHAVIOR_ID, FormBehaviorRatingComment.FORM_CONTENT_ID, FormBehaviorRatingComment.FORM_DATA_ID, FormBehaviorRatingComment.ITEM_ID, FormBehaviorRatingComment.RATING_TYPE, FormBehaviorRatingComment.SECTION_INDEX, FormBehaviorRatingComment.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property FormBehaviorRatingComment.
     */
    FormBehaviorRatingComment._keys = FormBehaviorRatingComment._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormBehaviorRatingComment = exports.FormBehaviorRatingComment || (exports.FormBehaviorRatingComment = {}));
exports.FormBehaviorRatingComment = FormBehaviorRatingComment;
//# sourceMappingURL=FormBehaviorRatingComment.js.map