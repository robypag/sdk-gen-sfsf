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
var FormReviewFeedbackListRequestBuilder_1 = require("./FormReviewFeedbackListRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormReviewFeedbackList" of service "SFOData".
 */
var FormReviewFeedbackList = /** @class */ (function (_super) {
    __extends(FormReviewFeedbackList, _super);
    function FormReviewFeedbackList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormReviewFeedbackList`.
     * @returns A builder that constructs instances of entity type `FormReviewFeedbackList`.
     */
    FormReviewFeedbackList.builder = function () {
        return core_1.Entity.entityBuilder(FormReviewFeedbackList);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormReviewFeedbackList` entity type.
     * @returns A `FormReviewFeedbackList` request builder.
     */
    FormReviewFeedbackList.requestBuilder = function () {
        return new FormReviewFeedbackListRequestBuilder_1.FormReviewFeedbackListRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormReviewFeedbackList`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormReviewFeedbackList`.
     */
    FormReviewFeedbackList.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormReviewFeedbackList);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormReviewFeedbackList.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormReviewFeedbackList.
     */
    FormReviewFeedbackList._entityName = 'FormReviewFeedbackList';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormReviewFeedbackList.
     */
    FormReviewFeedbackList._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormReviewFeedbackList._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormReviewFeedbackList;
}(core_1.Entity));
exports.FormReviewFeedbackList = FormReviewFeedbackList;
var FormReviewFeedback_1 = require("./FormReviewFeedback");
(function (FormReviewFeedbackList) {
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewFeedbackList.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormReviewFeedbackList, 'Edm.Int64');
    /**
     * Static representation of the one-to-many navigation property [[formFeedbacks]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewFeedbackList.FORM_FEEDBACKS = new core_1.Link('formFeedbacks', FormReviewFeedbackList, FormReviewFeedback_1.FormReviewFeedback);
    /**
     * All fields of the FormReviewFeedbackList entity.
     */
    FormReviewFeedbackList._allFields = [
        FormReviewFeedbackList.FORM_DATA_ID,
        FormReviewFeedbackList.FORM_FEEDBACKS
    ];
    /**
     * All fields selector.
     */
    FormReviewFeedbackList.ALL_FIELDS = new core_1.AllFields('*', FormReviewFeedbackList);
    /**
     * All key fields of the FormReviewFeedbackList entity.
     */
    FormReviewFeedbackList._keyFields = [FormReviewFeedbackList.FORM_DATA_ID];
    /**
     * Mapping of all key field names to the respective static field property FormReviewFeedbackList.
     */
    FormReviewFeedbackList._keys = FormReviewFeedbackList._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormReviewFeedbackList = exports.FormReviewFeedbackList || (exports.FormReviewFeedbackList = {}));
exports.FormReviewFeedbackList = FormReviewFeedbackList;
//# sourceMappingURL=FormReviewFeedbackList.js.map