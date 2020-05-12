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
var ContinuousFeedbackRequestRequestBuilder_1 = require("./ContinuousFeedbackRequestRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ContinuousFeedbackRequest" of service "SFOData".
 */
var ContinuousFeedbackRequest = /** @class */ (function (_super) {
    __extends(ContinuousFeedbackRequest, _super);
    function ContinuousFeedbackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ContinuousFeedbackRequest`.
     * @returns A builder that constructs instances of entity type `ContinuousFeedbackRequest`.
     */
    ContinuousFeedbackRequest.builder = function () {
        return core_1.Entity.entityBuilder(ContinuousFeedbackRequest);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ContinuousFeedbackRequest` entity type.
     * @returns A `ContinuousFeedbackRequest` request builder.
     */
    ContinuousFeedbackRequest.requestBuilder = function () {
        return new ContinuousFeedbackRequestRequestBuilder_1.ContinuousFeedbackRequestRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ContinuousFeedbackRequest`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ContinuousFeedbackRequest`.
     */
    ContinuousFeedbackRequest.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, ContinuousFeedbackRequest);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ContinuousFeedbackRequest.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ContinuousFeedbackRequest.
     */
    ContinuousFeedbackRequest._entityName = 'ContinuousFeedbackRequest';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ContinuousFeedbackRequest.
     */
    ContinuousFeedbackRequest._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    ContinuousFeedbackRequest._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ContinuousFeedbackRequest;
}(core_1.Entity));
exports.ContinuousFeedbackRequest = ContinuousFeedbackRequest;
var User_1 = require("./User");
var ContinuousFeedback_1 = require("./ContinuousFeedback");
(function (ContinuousFeedbackRequest) {
    /**
     * Static representation of the [[feedbackId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContinuousFeedbackRequest.FEEDBACK_ID = new core_1.BigNumberField('feedbackId', ContinuousFeedbackRequest, 'Edm.Int64');
    /**
     * Static representation of the [[requestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContinuousFeedbackRequest.REQUEST_ID = new core_1.BigNumberField('requestId', ContinuousFeedbackRequest, 'Edm.Int64');
    /**
     * Static representation of the [[requestText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContinuousFeedbackRequest.REQUEST_TEXT = new core_1.StringField('requestText', ContinuousFeedbackRequest, 'Edm.String');
    /**
     * Static representation of the [[requestedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContinuousFeedbackRequest.REQUESTED_DATE = new core_1.DateField('requestedDate', ContinuousFeedbackRequest, 'Edm.DateTime');
    /**
     * Static representation of the [[requestedForAchievementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContinuousFeedbackRequest.REQUESTED_FOR_ACHIEVEMENT_ID = new core_1.StringField('requestedForAchievementId', ContinuousFeedbackRequest, 'Edm.String');
    /**
     * Static representation of the [[requestedForActivityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContinuousFeedbackRequest.REQUESTED_FOR_ACTIVITY_ID = new core_1.StringField('requestedForActivityId', ContinuousFeedbackRequest, 'Edm.String');
    /**
     * Static representation of the [[requesteeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContinuousFeedbackRequest.REQUESTEE_ID = new core_1.StringField('requesteeId', ContinuousFeedbackRequest, 'Edm.String');
    /**
     * Static representation of the [[requesterId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContinuousFeedbackRequest.REQUESTER_ID = new core_1.StringField('requesterId', ContinuousFeedbackRequest, 'Edm.String');
    /**
     * Static representation of the [[subjectUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContinuousFeedbackRequest.SUBJECT_USER_ID = new core_1.StringField('subjectUserId', ContinuousFeedbackRequest, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[feedbackRequestToFeedbackRequesteeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContinuousFeedbackRequest.FEEDBACK_REQUEST_TO_FEEDBACK_REQUESTEE_NAV = new core_1.OneToOneLink('feedbackRequestToFeedbackRequesteeNav', ContinuousFeedbackRequest, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[feedbackRequestToFeedbackRequesterNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContinuousFeedbackRequest.FEEDBACK_REQUEST_TO_FEEDBACK_REQUESTER_NAV = new core_1.OneToOneLink('feedbackRequestToFeedbackRequesterNav', ContinuousFeedbackRequest, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[feedbackRequestToFeedbackResponseNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContinuousFeedbackRequest.FEEDBACK_REQUEST_TO_FEEDBACK_RESPONSE_NAV = new core_1.OneToOneLink('feedbackRequestToFeedbackResponseNav', ContinuousFeedbackRequest, ContinuousFeedback_1.ContinuousFeedback);
    /**
     * Static representation of the one-to-one navigation property [[feedbackRequestToSubjectUserNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContinuousFeedbackRequest.FEEDBACK_REQUEST_TO_SUBJECT_USER_NAV = new core_1.OneToOneLink('feedbackRequestToSubjectUserNav', ContinuousFeedbackRequest, User_1.User);
    /**
     * All fields of the ContinuousFeedbackRequest entity.
     */
    ContinuousFeedbackRequest._allFields = [
        ContinuousFeedbackRequest.FEEDBACK_ID,
        ContinuousFeedbackRequest.REQUEST_ID,
        ContinuousFeedbackRequest.REQUEST_TEXT,
        ContinuousFeedbackRequest.REQUESTED_DATE,
        ContinuousFeedbackRequest.REQUESTED_FOR_ACHIEVEMENT_ID,
        ContinuousFeedbackRequest.REQUESTED_FOR_ACTIVITY_ID,
        ContinuousFeedbackRequest.REQUESTEE_ID,
        ContinuousFeedbackRequest.REQUESTER_ID,
        ContinuousFeedbackRequest.SUBJECT_USER_ID,
        ContinuousFeedbackRequest.FEEDBACK_REQUEST_TO_FEEDBACK_REQUESTEE_NAV,
        ContinuousFeedbackRequest.FEEDBACK_REQUEST_TO_FEEDBACK_REQUESTER_NAV,
        ContinuousFeedbackRequest.FEEDBACK_REQUEST_TO_FEEDBACK_RESPONSE_NAV,
        ContinuousFeedbackRequest.FEEDBACK_REQUEST_TO_SUBJECT_USER_NAV
    ];
    /**
     * All fields selector.
     */
    ContinuousFeedbackRequest.ALL_FIELDS = new core_1.AllFields('*', ContinuousFeedbackRequest);
    /**
     * All key fields of the ContinuousFeedbackRequest entity.
     */
    ContinuousFeedbackRequest._keyFields = [ContinuousFeedbackRequest.REQUEST_ID];
    /**
     * Mapping of all key field names to the respective static field property ContinuousFeedbackRequest.
     */
    ContinuousFeedbackRequest._keys = ContinuousFeedbackRequest._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ContinuousFeedbackRequest = exports.ContinuousFeedbackRequest || (exports.ContinuousFeedbackRequest = {}));
exports.ContinuousFeedbackRequest = ContinuousFeedbackRequest;
//# sourceMappingURL=ContinuousFeedbackRequest.js.map