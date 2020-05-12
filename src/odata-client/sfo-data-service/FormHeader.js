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
var FormHeaderRequestBuilder_1 = require("./FormHeaderRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormHeader" of service "SFOData".
 */
var FormHeader = /** @class */ (function (_super) {
    __extends(FormHeader, _super);
    function FormHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormHeader`.
     * @returns A builder that constructs instances of entity type `FormHeader`.
     */
    FormHeader.builder = function () {
        return core_1.Entity.entityBuilder(FormHeader);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormHeader` entity type.
     * @returns A `FormHeader` request builder.
     */
    FormHeader.requestBuilder = function () {
        return new FormHeaderRequestBuilder_1.FormHeaderRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormHeader`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormHeader`.
     */
    FormHeader.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormHeader);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormHeader.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormHeader.
     */
    FormHeader._entityName = 'FormHeader';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormHeader.
     */
    FormHeader._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormHeader._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormHeader;
}(core_1.Entity));
exports.FormHeader = FormHeader;
var Attachment_1 = require("./Attachment");
var FormAuditTrail_1 = require("./FormAuditTrail");
var FormContent_1 = require("./FormContent");
var FormReviewFeedbackList_1 = require("./FormReviewFeedbackList");
var FormRouteMap_1 = require("./FormRouteMap");
var User_1 = require("./User");
var FormTemplate_1 = require("./FormTemplate");
(function (FormHeader) {
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormHeader.CREATION_DATE = new core_1.DateField('creationDate', FormHeader, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[currentStep]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormHeader.CURRENT_STEP = new core_1.StringField('currentStep', FormHeader, 'Edm.String');
    /**
     * Static representation of the [[dateAssigned]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormHeader.DATE_ASSIGNED = new core_1.DateField('dateAssigned', FormHeader, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormHeader.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormHeader, 'Edm.Int64');
    /**
     * Static representation of the [[formDataStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormHeader.FORM_DATA_STATUS = new core_1.BigNumberField('formDataStatus', FormHeader, 'Edm.Int64');
    /**
     * Static representation of the [[formDataVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormHeader.FORM_DATA_VERSION = new core_1.StringField('formDataVersion', FormHeader, 'Edm.String');
    /**
     * Static representation of the [[formLastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormHeader.FORM_LAST_MODIFIED_DATE = new core_1.DateField('formLastModifiedDate', FormHeader, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[formOriginator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormHeader.FORM_ORIGINATOR = new core_1.StringField('formOriginator', FormHeader, 'Edm.String');
    /**
     * Static representation of the [[formReviewDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormHeader.FORM_REVIEW_DUE_DATE = new core_1.DateField('formReviewDueDate', FormHeader, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[formReviewEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormHeader.FORM_REVIEW_END_DATE = new core_1.DateField('formReviewEndDate', FormHeader, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[formReviewStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormHeader.FORM_REVIEW_START_DATE = new core_1.DateField('formReviewStartDate', FormHeader, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[formSubjectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormHeader.FORM_SUBJECT_ID = new core_1.StringField('formSubjectId', FormHeader, 'Edm.String');
    /**
     * Static representation of the [[formTemplateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormHeader.FORM_TEMPLATE_ID = new core_1.BigNumberField('formTemplateId', FormHeader, 'Edm.Int64');
    /**
     * Static representation of the [[formTemplateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormHeader.FORM_TEMPLATE_TYPE = new core_1.StringField('formTemplateType', FormHeader, 'Edm.String');
    /**
     * Static representation of the [[formTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormHeader.FORM_TITLE = new core_1.StringField('formTitle', FormHeader, 'Edm.String');
    /**
     * Static representation of the [[isRated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormHeader.IS_RATED = new core_1.BooleanField('isRated', FormHeader, 'Edm.Boolean');
    /**
     * Static representation of the [[rating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormHeader.RATING = new core_1.BigNumberField('rating', FormHeader, 'Edm.Decimal');
    /**
     * Static representation of the [[sender]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormHeader.SENDER = new core_1.StringField('sender', FormHeader, 'Edm.String');
    /**
     * Static representation of the [[stepDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormHeader.STEP_DUE_DATE = new core_1.DateField('stepDueDate', FormHeader, 'Edm.DateTimeOffset');
    /**
     * Static representation of the one-to-many navigation property [[formAttachments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormHeader.FORM_ATTACHMENTS = new core_1.Link('formAttachments', FormHeader, Attachment_1.Attachment);
    /**
     * Static representation of the one-to-many navigation property [[formAuditTrails]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormHeader.FORM_AUDIT_TRAILS = new core_1.Link('formAuditTrails', FormHeader, FormAuditTrail_1.FormAuditTrail);
    /**
     * Static representation of the one-to-many navigation property [[formContents]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormHeader.FORM_CONTENTS = new core_1.Link('formContents', FormHeader, FormContent_1.FormContent);
    /**
     * Static representation of the one-to-one navigation property [[formFeedbackList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormHeader.FORM_FEEDBACK_LIST = new core_1.OneToOneLink('formFeedbackList', FormHeader, FormReviewFeedbackList_1.FormReviewFeedbackList);
    /**
     * Static representation of the one-to-one navigation property [[formLastContent]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormHeader.FORM_LAST_CONTENT = new core_1.OneToOneLink('formLastContent', FormHeader, FormContent_1.FormContent);
    /**
     * Static representation of the one-to-one navigation property [[formRouteMap]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormHeader.FORM_ROUTE_MAP = new core_1.OneToOneLink('formRouteMap', FormHeader, FormRouteMap_1.FormRouteMap);
    /**
     * Static representation of the one-to-one navigation property [[formSender]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormHeader.FORM_SENDER = new core_1.OneToOneLink('formSender', FormHeader, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[formSubject]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormHeader.FORM_SUBJECT = new core_1.OneToOneLink('formSubject', FormHeader, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[formTemplate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormHeader.FORM_TEMPLATE = new core_1.OneToOneLink('formTemplate', FormHeader, FormTemplate_1.FormTemplate);
    /**
     * All fields of the FormHeader entity.
     */
    FormHeader._allFields = [
        FormHeader.CREATION_DATE,
        FormHeader.CURRENT_STEP,
        FormHeader.DATE_ASSIGNED,
        FormHeader.FORM_DATA_ID,
        FormHeader.FORM_DATA_STATUS,
        FormHeader.FORM_DATA_VERSION,
        FormHeader.FORM_LAST_MODIFIED_DATE,
        FormHeader.FORM_ORIGINATOR,
        FormHeader.FORM_REVIEW_DUE_DATE,
        FormHeader.FORM_REVIEW_END_DATE,
        FormHeader.FORM_REVIEW_START_DATE,
        FormHeader.FORM_SUBJECT_ID,
        FormHeader.FORM_TEMPLATE_ID,
        FormHeader.FORM_TEMPLATE_TYPE,
        FormHeader.FORM_TITLE,
        FormHeader.IS_RATED,
        FormHeader.RATING,
        FormHeader.SENDER,
        FormHeader.STEP_DUE_DATE,
        FormHeader.FORM_ATTACHMENTS,
        FormHeader.FORM_AUDIT_TRAILS,
        FormHeader.FORM_CONTENTS,
        FormHeader.FORM_FEEDBACK_LIST,
        FormHeader.FORM_LAST_CONTENT,
        FormHeader.FORM_ROUTE_MAP,
        FormHeader.FORM_SENDER,
        FormHeader.FORM_SUBJECT,
        FormHeader.FORM_TEMPLATE
    ];
    /**
     * All fields selector.
     */
    FormHeader.ALL_FIELDS = new core_1.AllFields('*', FormHeader);
    /**
     * All key fields of the FormHeader entity.
     */
    FormHeader._keyFields = [FormHeader.FORM_DATA_ID];
    /**
     * Mapping of all key field names to the respective static field property FormHeader.
     */
    FormHeader._keys = FormHeader._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormHeader = exports.FormHeader || (exports.FormHeader = {}));
exports.FormHeader = FormHeader;
//# sourceMappingURL=FormHeader.js.map