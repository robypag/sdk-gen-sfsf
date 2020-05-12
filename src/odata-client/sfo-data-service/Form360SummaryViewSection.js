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
var Form360SummaryViewSectionRequestBuilder_1 = require("./Form360SummaryViewSectionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Form360SummaryViewSection" of service "SFOData".
 */
var Form360SummaryViewSection = /** @class */ (function (_super) {
    __extends(Form360SummaryViewSection, _super);
    function Form360SummaryViewSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Form360SummaryViewSection`.
     * @returns A builder that constructs instances of entity type `Form360SummaryViewSection`.
     */
    Form360SummaryViewSection.builder = function () {
        return core_1.Entity.entityBuilder(Form360SummaryViewSection);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Form360SummaryViewSection` entity type.
     * @returns A `Form360SummaryViewSection` request builder.
     */
    Form360SummaryViewSection.requestBuilder = function () {
        return new Form360SummaryViewSectionRequestBuilder_1.Form360SummaryViewSectionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Form360SummaryViewSection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Form360SummaryViewSection`.
     */
    Form360SummaryViewSection.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Form360SummaryViewSection);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Form360SummaryViewSection.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Form360SummaryViewSection.
     */
    Form360SummaryViewSection._entityName = 'Form360SummaryViewSection';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Form360SummaryViewSection.
     */
    Form360SummaryViewSection._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Form360SummaryViewSection._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Form360SummaryViewSection;
}(core_1.Entity));
exports.Form360SummaryViewSection = Form360SummaryViewSection;
var Form360SummaryViewCategory_1 = require("./Form360SummaryViewCategory");
var Form360SummaryViewRater_1 = require("./Form360SummaryViewRater");
(function (Form360SummaryViewSection) {
    /**
     * Static representation of the [[export360ReportUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewSection.EXPORT_360_REPORT_URL = new core_1.StringField('export360ReportURL', Form360SummaryViewSection, 'Edm.String');
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewSection.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', Form360SummaryViewSection, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewSection.FORM_DATA_ID = new core_1.BigNumberField('formDataId', Form360SummaryViewSection, 'Edm.Int64');
    /**
     * Static representation of the [[isActiveReportLink]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewSection.IS_ACTIVE_REPORT_LINK = new core_1.BooleanField('isActiveReportLink', Form360SummaryViewSection, 'Edm.Boolean');
    /**
     * Static representation of the [[isAddParticipant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewSection.IS_ADD_PARTICIPANT = new core_1.BooleanField('isAddParticipant', Form360SummaryViewSection, 'Edm.Boolean');
    /**
     * Static representation of the [[isAnonymous]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewSection.IS_ANONYMOUS = new core_1.BooleanField('isAnonymous', Form360SummaryViewSection, 'Edm.Boolean');
    /**
     * Static representation of the [[isRemoveParticipant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewSection.IS_REMOVE_PARTICIPANT = new core_1.BooleanField('isRemoveParticipant', Form360SummaryViewSection, 'Edm.Boolean');
    /**
     * Static representation of the [[isSendAllReminder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewSection.IS_SEND_ALL_REMINDER = new core_1.BooleanField('isSendAllReminder', Form360SummaryViewSection, 'Edm.Boolean');
    /**
     * Static representation of the [[isShow360ReportLink]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewSection.IS_SHOW_360_REPORT_LINK = new core_1.BooleanField('isShow360ReportLink', Form360SummaryViewSection, 'Edm.Boolean');
    /**
     * Static representation of the [[isShowCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewSection.IS_SHOW_CATEGORY = new core_1.BooleanField('isShowCategory', Form360SummaryViewSection, 'Edm.Boolean');
    /**
     * Static representation of the [[isShowCategoryWeights]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewSection.IS_SHOW_CATEGORY_WEIGHTS = new core_1.BooleanField('isShowCategoryWeights', Form360SummaryViewSection, 'Edm.Boolean');
    /**
     * Static representation of the [[isShowComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewSection.IS_SHOW_COMMENTS = new core_1.BooleanField('isShowComments', Form360SummaryViewSection, 'Edm.Boolean');
    /**
     * Static representation of the [[isShowExportBtn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewSection.IS_SHOW_EXPORT_BTN = new core_1.BooleanField('isShowExportBtn', Form360SummaryViewSection, 'Edm.Boolean');
    /**
     * Static representation of the [[isShowOverallRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewSection.IS_SHOW_OVERALL_RATING = new core_1.BooleanField('isShowOverallRating', Form360SummaryViewSection, 'Edm.Boolean');
    /**
     * Static representation of the [[isShowRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewSection.IS_SHOW_RATING = new core_1.BooleanField('isShowRating', Form360SummaryViewSection, 'Edm.Boolean');
    /**
     * Static representation of the [[isShowReportLink]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewSection.IS_SHOW_REPORT_LINK = new core_1.BooleanField('isShowReportLink', Form360SummaryViewSection, 'Edm.Boolean');
    /**
     * Static representation of the [[isShowSendBackForm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewSection.IS_SHOW_SEND_BACK_FORM = new core_1.BooleanField('isShowSendBackForm', Form360SummaryViewSection, 'Edm.Boolean');
    /**
     * Static representation of the [[maxRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewSection.MAX_RATING = new core_1.NumberField('maxRating', Form360SummaryViewSection, 'Edm.Double');
    /**
     * Static representation of the [[overallRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewSection.OVERALL_RATING = new core_1.NumberField('overallRating', Form360SummaryViewSection, 'Edm.Double');
    /**
     * Static representation of the [[overallRatingDisplayString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewSection.OVERALL_RATING_DISPLAY_STRING = new core_1.StringField('overallRatingDisplayString', Form360SummaryViewSection, 'Edm.String');
    /**
     * Static representation of the [[show360ReportUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewSection.SHOW_360_REPORT_URL = new core_1.StringField('show360ReportURL', Form360SummaryViewSection, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[categoryWeights]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewSection.CATEGORY_WEIGHTS = new core_1.Link('categoryWeights', Form360SummaryViewSection, Form360SummaryViewCategory_1.Form360SummaryViewCategory);
    /**
     * Static representation of the one-to-many navigation property [[formRaters]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewSection.FORM_RATERS = new core_1.Link('formRaters', Form360SummaryViewSection, Form360SummaryViewRater_1.Form360SummaryViewRater);
    /**
     * All fields of the Form360SummaryViewSection entity.
     */
    Form360SummaryViewSection._allFields = [
        Form360SummaryViewSection.EXPORT_360_REPORT_URL,
        Form360SummaryViewSection.FORM_CONTENT_ID,
        Form360SummaryViewSection.FORM_DATA_ID,
        Form360SummaryViewSection.IS_ACTIVE_REPORT_LINK,
        Form360SummaryViewSection.IS_ADD_PARTICIPANT,
        Form360SummaryViewSection.IS_ANONYMOUS,
        Form360SummaryViewSection.IS_REMOVE_PARTICIPANT,
        Form360SummaryViewSection.IS_SEND_ALL_REMINDER,
        Form360SummaryViewSection.IS_SHOW_360_REPORT_LINK,
        Form360SummaryViewSection.IS_SHOW_CATEGORY,
        Form360SummaryViewSection.IS_SHOW_CATEGORY_WEIGHTS,
        Form360SummaryViewSection.IS_SHOW_COMMENTS,
        Form360SummaryViewSection.IS_SHOW_EXPORT_BTN,
        Form360SummaryViewSection.IS_SHOW_OVERALL_RATING,
        Form360SummaryViewSection.IS_SHOW_RATING,
        Form360SummaryViewSection.IS_SHOW_REPORT_LINK,
        Form360SummaryViewSection.IS_SHOW_SEND_BACK_FORM,
        Form360SummaryViewSection.MAX_RATING,
        Form360SummaryViewSection.OVERALL_RATING,
        Form360SummaryViewSection.OVERALL_RATING_DISPLAY_STRING,
        Form360SummaryViewSection.SHOW_360_REPORT_URL,
        Form360SummaryViewSection.CATEGORY_WEIGHTS,
        Form360SummaryViewSection.FORM_RATERS
    ];
    /**
     * All fields selector.
     */
    Form360SummaryViewSection.ALL_FIELDS = new core_1.AllFields('*', Form360SummaryViewSection);
    /**
     * All key fields of the Form360SummaryViewSection entity.
     */
    Form360SummaryViewSection._keyFields = [Form360SummaryViewSection.FORM_CONTENT_ID, Form360SummaryViewSection.FORM_DATA_ID];
    /**
     * Mapping of all key field names to the respective static field property Form360SummaryViewSection.
     */
    Form360SummaryViewSection._keys = Form360SummaryViewSection._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Form360SummaryViewSection = exports.Form360SummaryViewSection || (exports.Form360SummaryViewSection = {}));
exports.Form360SummaryViewSection = Form360SummaryViewSection;
//# sourceMappingURL=Form360SummaryViewSection.js.map