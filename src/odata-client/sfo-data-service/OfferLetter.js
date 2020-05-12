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
var OfferLetterRequestBuilder_1 = require("./OfferLetterRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "OfferLetter" of service "SFOData".
 */
var OfferLetter = /** @class */ (function (_super) {
    __extends(OfferLetter, _super);
    function OfferLetter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `OfferLetter`.
     * @returns A builder that constructs instances of entity type `OfferLetter`.
     */
    OfferLetter.builder = function () {
        return core_1.Entity.entityBuilder(OfferLetter);
    };
    /**
     * Returns a request builder to construct requests for operations on the `OfferLetter` entity type.
     * @returns A `OfferLetter` request builder.
     */
    OfferLetter.requestBuilder = function () {
        return new OfferLetterRequestBuilder_1.OfferLetterRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `OfferLetter`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `OfferLetter`.
     */
    OfferLetter.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, OfferLetter);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    OfferLetter.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for OfferLetter.
     */
    OfferLetter._entityName = 'OfferLetter';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for OfferLetter.
     */
    OfferLetter._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    OfferLetter._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return OfferLetter;
}(core_1.Entity));
exports.OfferLetter = OfferLetter;
var Attachment_1 = require("./Attachment");
var User_1 = require("./User");
var JobApplication_1 = require("./JobApplication");
(function (OfferLetter) {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.APPLICATION_ID = new core_1.BigNumberField('applicationId', OfferLetter, 'Edm.Int64');
    /**
     * Static representation of the [[body]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.BODY = new core_1.StringField('body', OfferLetter, 'Edm.String');
    /**
     * Static representation of the [[bodyLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.BODY_LOCALE = new core_1.StringField('bodyLocale', OfferLetter, 'Edm.String');
    /**
     * Static representation of the [[bodyTemplateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.BODY_TEMPLATE_ID = new core_1.BigNumberField('bodyTemplateId', OfferLetter, 'Edm.Int64');
    /**
     * Static representation of the [[bonusPayoutFreq]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.BONUS_PAYOUT_FREQ = new core_1.StringField('bonusPayoutFreq', OfferLetter, 'Edm.String');
    /**
     * Static representation of the [[candResponseComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.CAND_RESPONSE_COMMENTS = new core_1.StringField('candResponseComments', OfferLetter, 'Edm.String');
    /**
     * Static representation of the [[candResponseDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.CAND_RESPONSE_DATE = new core_1.DateField('candResponseDate', OfferLetter, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.COMMENTS = new core_1.StringField('comments', OfferLetter, 'Edm.String');
    /**
     * Static representation of the [[countryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.COUNTRY_CODE = new core_1.StringField('countryCode', OfferLetter, 'Edm.String');
    /**
     * Static representation of the [[countryName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.COUNTRY_NAME = new core_1.StringField('countryName', OfferLetter, 'Edm.String');
    /**
     * Static representation of the [[createDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.CREATE_DATE = new core_1.DateField('createDate', OfferLetter, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.CREATED_BY = new core_1.StringField('createdBy', OfferLetter, 'Edm.String');
    /**
     * Static representation of the [[currencyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.CURRENCY_CODE = new core_1.StringField('currencyCode', OfferLetter, 'Edm.String');
    /**
     * Static representation of the [[jobStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.JOB_START_DATE = new core_1.DateField('jobStartDate', OfferLetter, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[jobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.JOB_TITLE = new core_1.StringField('jobTitle', OfferLetter, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', OfferLetter, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', OfferLetter, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[locale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.LOCALE = new core_1.StringField('locale', OfferLetter, 'Edm.String');
    /**
     * Static representation of the [[localeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.LOCALE_CODE = new core_1.StringField('localeCode', OfferLetter, 'Edm.String');
    /**
     * Static representation of the [[mailboxes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.MAILBOXES = new core_1.StringField('mailboxes', OfferLetter, 'Edm.String');
    /**
     * Static representation of the [[offerExpirationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.OFFER_EXPIRATION_DATE = new core_1.DateField('offerExpirationDate', OfferLetter, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[offerLetter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.OFFER_LETTER = new core_1.BinaryField('offerLetter', OfferLetter, 'Edm.Binary');
    /**
     * Static representation of the [[offerLetterId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.OFFER_LETTER_ID = new core_1.BigNumberField('offerLetterId', OfferLetter, 'Edm.Int64');
    /**
     * Static representation of the [[offerSentDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.OFFER_SENT_DATE = new core_1.DateField('offerSentDate', OfferLetter, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[overtimeRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.OVERTIME_RATE = new core_1.BigNumberField('overtimeRate', OfferLetter, 'Edm.Int64');
    /**
     * Static representation of the [[salaryRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.SALARY_RATE = new core_1.BigNumberField('salaryRate', OfferLetter, 'Edm.Int64');
    /**
     * Static representation of the [[salaryRateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.SALARY_RATE_TYPE = new core_1.StringField('salaryRateType', OfferLetter, 'Edm.String');
    /**
     * Static representation of the [[sendMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.SEND_MODE = new core_1.StringField('sendMode', OfferLetter, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.STATUS = new core_1.StringField('status', OfferLetter, 'Edm.String');
    /**
     * Static representation of the [[stockGrant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.STOCK_GRANT = new core_1.BigNumberField('stockGrant', OfferLetter, 'Edm.Int64');
    /**
     * Static representation of the [[stockOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.STOCK_OPTION = new core_1.BigNumberField('stockOption', OfferLetter, 'Edm.Int64');
    /**
     * Static representation of the [[subject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.SUBJECT = new core_1.StringField('subject', OfferLetter, 'Edm.String');
    /**
     * Static representation of the [[targetBonusAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.TARGET_BONUS_AMOUNT = new core_1.BigNumberField('targetBonusAmount', OfferLetter, 'Edm.Int64');
    /**
     * Static representation of the [[targetBonusPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.TARGET_BONUS_PERCENT = new core_1.BigNumberField('targetBonusPercent', OfferLetter, 'Edm.Int64');
    /**
     * Static representation of the [[templateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.TEMPLATE_ID = new core_1.BigNumberField('templateId', OfferLetter, 'Edm.Int64');
    /**
     * Static representation of the [[templateName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.TEMPLATE_NAME = new core_1.StringField('templateName', OfferLetter, 'Edm.String');
    /**
     * Static representation of the [[tokens]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.TOKENS = new core_1.StringField('tokens', OfferLetter, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[attachments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.ATTACHMENTS = new core_1.Link('attachments', OfferLetter, Attachment_1.Attachment);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', OfferLetter, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[jobApplication]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.JOB_APPLICATION = new core_1.OneToOneLink('jobApplication', OfferLetter, JobApplication_1.JobApplication);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', OfferLetter, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[offerLetterPdFmail]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OfferLetter.OFFER_LETTER_PD_FMAIL = new core_1.OneToOneLink('offerLetterPDFmail', OfferLetter, Attachment_1.Attachment);
    /**
     * All fields of the OfferLetter entity.
     */
    OfferLetter._allFields = [
        OfferLetter.APPLICATION_ID,
        OfferLetter.BODY,
        OfferLetter.BODY_LOCALE,
        OfferLetter.BODY_TEMPLATE_ID,
        OfferLetter.BONUS_PAYOUT_FREQ,
        OfferLetter.CAND_RESPONSE_COMMENTS,
        OfferLetter.CAND_RESPONSE_DATE,
        OfferLetter.COMMENTS,
        OfferLetter.COUNTRY_CODE,
        OfferLetter.COUNTRY_NAME,
        OfferLetter.CREATE_DATE,
        OfferLetter.CREATED_BY,
        OfferLetter.CURRENCY_CODE,
        OfferLetter.JOB_START_DATE,
        OfferLetter.JOB_TITLE,
        OfferLetter.LAST_MODIFIED_BY,
        OfferLetter.LAST_MODIFIED_DATE,
        OfferLetter.LOCALE,
        OfferLetter.LOCALE_CODE,
        OfferLetter.MAILBOXES,
        OfferLetter.OFFER_EXPIRATION_DATE,
        OfferLetter.OFFER_LETTER,
        OfferLetter.OFFER_LETTER_ID,
        OfferLetter.OFFER_SENT_DATE,
        OfferLetter.OVERTIME_RATE,
        OfferLetter.SALARY_RATE,
        OfferLetter.SALARY_RATE_TYPE,
        OfferLetter.SEND_MODE,
        OfferLetter.STATUS,
        OfferLetter.STOCK_GRANT,
        OfferLetter.STOCK_OPTION,
        OfferLetter.SUBJECT,
        OfferLetter.TARGET_BONUS_AMOUNT,
        OfferLetter.TARGET_BONUS_PERCENT,
        OfferLetter.TEMPLATE_ID,
        OfferLetter.TEMPLATE_NAME,
        OfferLetter.TOKENS,
        OfferLetter.ATTACHMENTS,
        OfferLetter.CREATED_BY_NAV,
        OfferLetter.JOB_APPLICATION,
        OfferLetter.LAST_MODIFIED_BY_NAV,
        OfferLetter.OFFER_LETTER_PD_FMAIL
    ];
    /**
     * All fields selector.
     */
    OfferLetter.ALL_FIELDS = new core_1.AllFields('*', OfferLetter);
    /**
     * All key fields of the OfferLetter entity.
     */
    OfferLetter._keyFields = [OfferLetter.OFFER_LETTER_ID];
    /**
     * Mapping of all key field names to the respective static field property OfferLetter.
     */
    OfferLetter._keys = OfferLetter._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(OfferLetter = exports.OfferLetter || (exports.OfferLetter = {}));
exports.OfferLetter = OfferLetter;
//# sourceMappingURL=OfferLetter.js.map