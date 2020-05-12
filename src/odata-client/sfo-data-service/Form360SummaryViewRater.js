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
var Form360SummaryViewRaterRequestBuilder_1 = require("./Form360SummaryViewRaterRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Form360SummaryViewRater" of service "SFOData".
 */
var Form360SummaryViewRater = /** @class */ (function (_super) {
    __extends(Form360SummaryViewRater, _super);
    function Form360SummaryViewRater() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Form360SummaryViewRater`.
     * @returns A builder that constructs instances of entity type `Form360SummaryViewRater`.
     */
    Form360SummaryViewRater.builder = function () {
        return core_1.Entity.entityBuilder(Form360SummaryViewRater);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Form360SummaryViewRater` entity type.
     * @returns A `Form360SummaryViewRater` request builder.
     */
    Form360SummaryViewRater.requestBuilder = function () {
        return new Form360SummaryViewRaterRequestBuilder_1.Form360SummaryViewRaterRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Form360SummaryViewRater`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Form360SummaryViewRater`.
     */
    Form360SummaryViewRater.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Form360SummaryViewRater);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Form360SummaryViewRater.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Form360SummaryViewRater.
     */
    Form360SummaryViewRater._entityName = 'Form360SummaryViewRater';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Form360SummaryViewRater.
     */
    Form360SummaryViewRater._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Form360SummaryViewRater._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Form360SummaryViewRater;
}(core_1.Entity));
exports.Form360SummaryViewRater = Form360SummaryViewRater;
var User_1 = require("./User");
(function (Form360SummaryViewRater) {
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewRater.CATEGORY = new core_1.StringField('category', Form360SummaryViewRater, 'Edm.String');
    /**
     * Static representation of the [[comment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewRater.COMMENT = new core_1.StringField('comment', Form360SummaryViewRater, 'Edm.String');
    /**
     * Static representation of the [[displayName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewRater.DISPLAY_NAME = new core_1.StringField('displayName', Form360SummaryViewRater, 'Edm.String');
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewRater.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', Form360SummaryViewRater, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewRater.FORM_DATA_ID = new core_1.BigNumberField('formDataId', Form360SummaryViewRater, 'Edm.Int64');
    /**
     * Static representation of the [[formStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewRater.FORM_STATUS = new core_1.StringField('formStatus', Form360SummaryViewRater, 'Edm.String');
    /**
     * Static representation of the [[formStatusDisplayString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewRater.FORM_STATUS_DISPLAY_STRING = new core_1.StringField('formStatusDisplayString', Form360SummaryViewRater, 'Edm.String');
    /**
     * Static representation of the [[isDisplayAnonymous]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewRater.IS_DISPLAY_ANONYMOUS = new core_1.BooleanField('isDisplayAnonymous', Form360SummaryViewRater, 'Edm.Boolean');
    /**
     * Static representation of the [[isFixedParticipant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewRater.IS_FIXED_PARTICIPANT = new core_1.BooleanField('isFixedParticipant', Form360SummaryViewRater, 'Edm.Boolean');
    /**
     * Static representation of the [[isFormRecallable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewRater.IS_FORM_RECALLABLE = new core_1.BooleanField('isFormRecallable', Form360SummaryViewRater, 'Edm.Boolean');
    /**
     * Static representation of the [[isShowContentLink]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewRater.IS_SHOW_CONTENT_LINK = new core_1.BooleanField('isShowContentLink', Form360SummaryViewRater, 'Edm.Boolean');
    /**
     * Static representation of the [[isShowDocCommentsForSendBack]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewRater.IS_SHOW_DOC_COMMENTS_FOR_SEND_BACK = new core_1.BooleanField('isShowDocCommentsForSendBack', Form360SummaryViewRater, 'Edm.Boolean');
    /**
     * Static representation of the [[isShowReminderEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewRater.IS_SHOW_REMINDER_EMAIL = new core_1.BooleanField('isShowReminderEmail', Form360SummaryViewRater, 'Edm.Boolean');
    /**
     * Static representation of the [[maxRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewRater.MAX_RATING = new core_1.NumberField('maxRating', Form360SummaryViewRater, 'Edm.Double');
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewRater.ORDER = new core_1.NumberField('order', Form360SummaryViewRater, 'Edm.Int32');
    /**
     * Static representation of the [[overallRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewRater.OVERALL_RATING = new core_1.NumberField('overallRating', Form360SummaryViewRater, 'Edm.Double');
    /**
     * Static representation of the [[overallRatingDisplayString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewRater.OVERALL_RATING_DISPLAY_STRING = new core_1.StringField('overallRatingDisplayString', Form360SummaryViewRater, 'Edm.String');
    /**
     * Static representation of the [[participantId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewRater.PARTICIPANT_ID = new core_1.StringField('participantId', Form360SummaryViewRater, 'Edm.String');
    /**
     * Static representation of the [[showContentLinkUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewRater.SHOW_CONTENT_LINK_URL = new core_1.StringField('showContentLinkURL', Form360SummaryViewRater, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[participantUser]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewRater.PARTICIPANT_USER = new core_1.OneToOneLink('participantUser', Form360SummaryViewRater, User_1.User);
    /**
     * All fields of the Form360SummaryViewRater entity.
     */
    Form360SummaryViewRater._allFields = [
        Form360SummaryViewRater.CATEGORY,
        Form360SummaryViewRater.COMMENT,
        Form360SummaryViewRater.DISPLAY_NAME,
        Form360SummaryViewRater.FORM_CONTENT_ID,
        Form360SummaryViewRater.FORM_DATA_ID,
        Form360SummaryViewRater.FORM_STATUS,
        Form360SummaryViewRater.FORM_STATUS_DISPLAY_STRING,
        Form360SummaryViewRater.IS_DISPLAY_ANONYMOUS,
        Form360SummaryViewRater.IS_FIXED_PARTICIPANT,
        Form360SummaryViewRater.IS_FORM_RECALLABLE,
        Form360SummaryViewRater.IS_SHOW_CONTENT_LINK,
        Form360SummaryViewRater.IS_SHOW_DOC_COMMENTS_FOR_SEND_BACK,
        Form360SummaryViewRater.IS_SHOW_REMINDER_EMAIL,
        Form360SummaryViewRater.MAX_RATING,
        Form360SummaryViewRater.ORDER,
        Form360SummaryViewRater.OVERALL_RATING,
        Form360SummaryViewRater.OVERALL_RATING_DISPLAY_STRING,
        Form360SummaryViewRater.PARTICIPANT_ID,
        Form360SummaryViewRater.SHOW_CONTENT_LINK_URL,
        Form360SummaryViewRater.PARTICIPANT_USER
    ];
    /**
     * All fields selector.
     */
    Form360SummaryViewRater.ALL_FIELDS = new core_1.AllFields('*', Form360SummaryViewRater);
    /**
     * All key fields of the Form360SummaryViewRater entity.
     */
    Form360SummaryViewRater._keyFields = [Form360SummaryViewRater.FORM_CONTENT_ID, Form360SummaryViewRater.FORM_DATA_ID];
    /**
     * Mapping of all key field names to the respective static field property Form360SummaryViewRater.
     */
    Form360SummaryViewRater._keys = Form360SummaryViewRater._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Form360SummaryViewRater = exports.Form360SummaryViewRater || (exports.Form360SummaryViewRater = {}));
exports.Form360SummaryViewRater = Form360SummaryViewRater;
//# sourceMappingURL=Form360SummaryViewRater.js.map