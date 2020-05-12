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
var FormContentRequestBuilder_1 = require("./FormContentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormContent" of service "SFOData".
 */
var FormContent = /** @class */ (function (_super) {
    __extends(FormContent, _super);
    function FormContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormContent`.
     * @returns A builder that constructs instances of entity type `FormContent`.
     */
    FormContent.builder = function () {
        return core_1.Entity.entityBuilder(FormContent);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormContent` entity type.
     * @returns A `FormContent` request builder.
     */
    FormContent.requestBuilder = function () {
        return new FormContentRequestBuilder_1.FormContentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormContent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormContent`.
     */
    FormContent.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormContent);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormContent.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormContent.
     */
    FormContent._entityName = 'FormContent';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormContent.
     */
    FormContent._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormContent._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormContent;
}(core_1.Entity));
exports.FormContent = FormContent;
var FormFolder_1 = require("./FormFolder");
var Form360ReviewContentDetail_1 = require("./Form360ReviewContentDetail");
var FormHeader_1 = require("./FormHeader");
var FormPmReviewContentDetail_1 = require("./FormPmReviewContentDetail");
(function (FormContent) {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormContent.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormContent, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormContent.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormContent, 'Edm.Int64');
    /**
     * Static representation of the [[formSubjectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormContent.FORM_SUBJECT_ID = new core_1.StringField('formSubjectId', FormContent, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormContent.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', FormContent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormContent.STATUS = new core_1.BigNumberField('status', FormContent, 'Edm.Int64');
    /**
     * Static representation of the one-to-many navigation property [[folders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormContent.FOLDERS = new core_1.Link('folders', FormContent, FormFolder_1.FormFolder);
    /**
     * Static representation of the one-to-many navigation property [[form360ReviewContentDetail]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormContent.FORM_360_REVIEW_CONTENT_DETAIL = new core_1.Link('form360ReviewContentDetail', FormContent, Form360ReviewContentDetail_1.Form360ReviewContentDetail);
    /**
     * Static representation of the one-to-one navigation property [[formHeader]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormContent.FORM_HEADER = new core_1.OneToOneLink('formHeader', FormContent, FormHeader_1.FormHeader);
    /**
     * Static representation of the one-to-many navigation property [[pmReviewContentDetail]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormContent.PM_REVIEW_CONTENT_DETAIL = new core_1.Link('pmReviewContentDetail', FormContent, FormPmReviewContentDetail_1.FormPmReviewContentDetail);
    /**
     * All fields of the FormContent entity.
     */
    FormContent._allFields = [
        FormContent.FORM_CONTENT_ID,
        FormContent.FORM_DATA_ID,
        FormContent.FORM_SUBJECT_ID,
        FormContent.LAST_MODIFIED_DATE,
        FormContent.STATUS,
        FormContent.FOLDERS,
        FormContent.FORM_360_REVIEW_CONTENT_DETAIL,
        FormContent.FORM_HEADER,
        FormContent.PM_REVIEW_CONTENT_DETAIL
    ];
    /**
     * All fields selector.
     */
    FormContent.ALL_FIELDS = new core_1.AllFields('*', FormContent);
    /**
     * All key fields of the FormContent entity.
     */
    FormContent._keyFields = [FormContent.FORM_CONTENT_ID, FormContent.FORM_DATA_ID];
    /**
     * Mapping of all key field names to the respective static field property FormContent.
     */
    FormContent._keys = FormContent._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormContent = exports.FormContent || (exports.FormContent = {}));
exports.FormContent = FormContent;
//# sourceMappingURL=FormContent.js.map