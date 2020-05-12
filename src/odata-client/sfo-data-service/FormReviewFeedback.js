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
var FormReviewFeedbackRequestBuilder_1 = require("./FormReviewFeedbackRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormReviewFeedback" of service "SFOData".
 */
var FormReviewFeedback = /** @class */ (function (_super) {
    __extends(FormReviewFeedback, _super);
    function FormReviewFeedback() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormReviewFeedback`.
     * @returns A builder that constructs instances of entity type `FormReviewFeedback`.
     */
    FormReviewFeedback.builder = function () {
        return core_1.Entity.entityBuilder(FormReviewFeedback);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormReviewFeedback` entity type.
     * @returns A `FormReviewFeedback` request builder.
     */
    FormReviewFeedback.requestBuilder = function () {
        return new FormReviewFeedbackRequestBuilder_1.FormReviewFeedbackRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormReviewFeedback`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormReviewFeedback`.
     */
    FormReviewFeedback.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormReviewFeedback);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormReviewFeedback.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormReviewFeedback.
     */
    FormReviewFeedback._entityName = 'FormReviewFeedback';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormReviewFeedback.
     */
    FormReviewFeedback._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormReviewFeedback._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormReviewFeedback;
}(core_1.Entity));
exports.FormReviewFeedback = FormReviewFeedback;
(function (FormReviewFeedback) {
    /**
     * Static representation of the [[appraiserUserEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewFeedback.APPRAISER_USER_EMAIL = new core_1.StringField('appraiserUserEmail', FormReviewFeedback, 'Edm.String');
    /**
     * Static representation of the [[appraiserUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewFeedback.APPRAISER_USER_ID = new core_1.StringField('appraiserUserId', FormReviewFeedback, 'Edm.String');
    /**
     * Static representation of the [[companyId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewFeedback.COMPANY_ID = new core_1.StringField('companyId', FormReviewFeedback, 'Edm.String');
    /**
     * Static representation of the [[digiCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewFeedback.DIGI_CODE = new core_1.StringField('digiCode', FormReviewFeedback, 'Edm.String');
    /**
     * Static representation of the [[feedbackId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewFeedback.FEEDBACK_ID = new core_1.BigNumberField('feedbackId', FormReviewFeedback, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewFeedback.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormReviewFeedback, 'Edm.Int64');
    /**
     * Static representation of the [[pmFeedback]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewFeedback.PM_FEEDBACK = new core_1.StringField('pmFeedback', FormReviewFeedback, 'Edm.String');
    /**
     * Static representation of the [[requestDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewFeedback.REQUEST_DATE = new core_1.DateField('requestDate', FormReviewFeedback, 'Edm.DateTime');
    /**
     * Static representation of the [[requestUserEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewFeedback.REQUEST_USER_EMAIL = new core_1.StringField('requestUserEmail', FormReviewFeedback, 'Edm.String');
    /**
     * Static representation of the [[requestUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewFeedback.REQUEST_USER_ID = new core_1.StringField('requestUserId', FormReviewFeedback, 'Edm.String');
    /**
     * Static representation of the [[requestUserRole]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewFeedback.REQUEST_USER_ROLE = new core_1.StringField('requestUserRole', FormReviewFeedback, 'Edm.String');
    /**
     * Static representation of the [[responseDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewFeedback.RESPONSE_DATE = new core_1.DateField('responseDate', FormReviewFeedback, 'Edm.DateTime');
    /**
     * Static representation of the [[responseId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewFeedback.RESPONSE_ID = new core_1.StringField('responseId', FormReviewFeedback, 'Edm.String');
    /**
     * Static representation of the [[subjectUserEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewFeedback.SUBJECT_USER_EMAIL = new core_1.StringField('subjectUserEmail', FormReviewFeedback, 'Edm.String');
    /**
     * Static representation of the [[subjectUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormReviewFeedback.SUBJECT_USER_ID = new core_1.StringField('subjectUserId', FormReviewFeedback, 'Edm.String');
    /**
     * All fields of the FormReviewFeedback entity.
     */
    FormReviewFeedback._allFields = [
        FormReviewFeedback.APPRAISER_USER_EMAIL,
        FormReviewFeedback.APPRAISER_USER_ID,
        FormReviewFeedback.COMPANY_ID,
        FormReviewFeedback.DIGI_CODE,
        FormReviewFeedback.FEEDBACK_ID,
        FormReviewFeedback.FORM_DATA_ID,
        FormReviewFeedback.PM_FEEDBACK,
        FormReviewFeedback.REQUEST_DATE,
        FormReviewFeedback.REQUEST_USER_EMAIL,
        FormReviewFeedback.REQUEST_USER_ID,
        FormReviewFeedback.REQUEST_USER_ROLE,
        FormReviewFeedback.RESPONSE_DATE,
        FormReviewFeedback.RESPONSE_ID,
        FormReviewFeedback.SUBJECT_USER_EMAIL,
        FormReviewFeedback.SUBJECT_USER_ID
    ];
    /**
     * All fields selector.
     */
    FormReviewFeedback.ALL_FIELDS = new core_1.AllFields('*', FormReviewFeedback);
    /**
     * All key fields of the FormReviewFeedback entity.
     */
    FormReviewFeedback._keyFields = [FormReviewFeedback.FEEDBACK_ID];
    /**
     * Mapping of all key field names to the respective static field property FormReviewFeedback.
     */
    FormReviewFeedback._keys = FormReviewFeedback._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormReviewFeedback = exports.FormReviewFeedback || (exports.FormReviewFeedback = {}));
exports.FormReviewFeedback = FormReviewFeedback;
//# sourceMappingURL=FormReviewFeedback.js.map