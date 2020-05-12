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
var ContinuousFeedbackRequestBuilder_1 = require("./ContinuousFeedbackRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ContinuousFeedback" of service "SFOData".
 */
var ContinuousFeedback = /** @class */ (function (_super) {
    __extends(ContinuousFeedback, _super);
    function ContinuousFeedback() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ContinuousFeedback`.
     * @returns A builder that constructs instances of entity type `ContinuousFeedback`.
     */
    ContinuousFeedback.builder = function () {
        return core_1.Entity.entityBuilder(ContinuousFeedback);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ContinuousFeedback` entity type.
     * @returns A `ContinuousFeedback` request builder.
     */
    ContinuousFeedback.requestBuilder = function () {
        return new ContinuousFeedbackRequestBuilder_1.ContinuousFeedbackRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ContinuousFeedback`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ContinuousFeedback`.
     */
    ContinuousFeedback.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, ContinuousFeedback);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ContinuousFeedback.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ContinuousFeedback.
     */
    ContinuousFeedback._entityName = 'ContinuousFeedback';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ContinuousFeedback.
     */
    ContinuousFeedback._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    ContinuousFeedback._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ContinuousFeedback;
}(core_1.Entity));
exports.ContinuousFeedback = ContinuousFeedback;
var ContinuousFeedbackRequest_1 = require("./ContinuousFeedbackRequest");
var User_1 = require("./User");
(function (ContinuousFeedback) {
    /**
     * Static representation of the [[achievementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContinuousFeedback.ACHIEVEMENT_ID = new core_1.StringField('achievementId', ContinuousFeedback, 'Edm.String');
    /**
     * Static representation of the [[activityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContinuousFeedback.ACTIVITY_ID = new core_1.StringField('activityId', ContinuousFeedback, 'Edm.String');
    /**
     * Static representation of the [[dateReceived]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContinuousFeedback.DATE_RECEIVED = new core_1.DateField('dateReceived', ContinuousFeedback, 'Edm.DateTime');
    /**
     * Static representation of the [[feedbackId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContinuousFeedback.FEEDBACK_ID = new core_1.BigNumberField('feedbackId', ContinuousFeedback, 'Edm.Int64');
    /**
     * Static representation of the [[feedbackMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContinuousFeedback.FEEDBACK_MESSAGE = new core_1.StringField('feedbackMessage', ContinuousFeedback, 'Edm.String');
    /**
     * Static representation of the [[feedbackRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContinuousFeedback.FEEDBACK_REQUEST_ID = new core_1.BigNumberField('feedbackRequestId', ContinuousFeedback, 'Edm.Int64');
    /**
     * Static representation of the [[senderUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContinuousFeedback.SENDER_USER_ID = new core_1.StringField('senderUserId', ContinuousFeedback, 'Edm.String');
    /**
     * Static representation of the [[subjectUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContinuousFeedback.SUBJECT_USER_ID = new core_1.StringField('subjectUserId', ContinuousFeedback, 'Edm.String');
    /**
     * Static representation of the [[visibleToManager]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContinuousFeedback.VISIBLE_TO_MANAGER = new core_1.BooleanField('visibleToManager', ContinuousFeedback, 'Edm.Boolean');
    /**
     * Static representation of the one-to-one navigation property [[continuousFeedbackToContinuousFeedbackRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContinuousFeedback.CONTINUOUS_FEEDBACK_TO_CONTINUOUS_FEEDBACK_REQUEST_NAV = new core_1.OneToOneLink('continuousFeedbackToContinuousFeedbackRequestNav', ContinuousFeedback, ContinuousFeedbackRequest_1.ContinuousFeedbackRequest);
    /**
     * Static representation of the one-to-one navigation property [[continuousFeedbackToSenderUserNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContinuousFeedback.CONTINUOUS_FEEDBACK_TO_SENDER_USER_NAV = new core_1.OneToOneLink('continuousFeedbackToSenderUserNav', ContinuousFeedback, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[continuousFeedbackToSubjectUserNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContinuousFeedback.CONTINUOUS_FEEDBACK_TO_SUBJECT_USER_NAV = new core_1.OneToOneLink('continuousFeedbackToSubjectUserNav', ContinuousFeedback, User_1.User);
    /**
     * All fields of the ContinuousFeedback entity.
     */
    ContinuousFeedback._allFields = [
        ContinuousFeedback.ACHIEVEMENT_ID,
        ContinuousFeedback.ACTIVITY_ID,
        ContinuousFeedback.DATE_RECEIVED,
        ContinuousFeedback.FEEDBACK_ID,
        ContinuousFeedback.FEEDBACK_MESSAGE,
        ContinuousFeedback.FEEDBACK_REQUEST_ID,
        ContinuousFeedback.SENDER_USER_ID,
        ContinuousFeedback.SUBJECT_USER_ID,
        ContinuousFeedback.VISIBLE_TO_MANAGER,
        ContinuousFeedback.CONTINUOUS_FEEDBACK_TO_CONTINUOUS_FEEDBACK_REQUEST_NAV,
        ContinuousFeedback.CONTINUOUS_FEEDBACK_TO_SENDER_USER_NAV,
        ContinuousFeedback.CONTINUOUS_FEEDBACK_TO_SUBJECT_USER_NAV
    ];
    /**
     * All fields selector.
     */
    ContinuousFeedback.ALL_FIELDS = new core_1.AllFields('*', ContinuousFeedback);
    /**
     * All key fields of the ContinuousFeedback entity.
     */
    ContinuousFeedback._keyFields = [ContinuousFeedback.FEEDBACK_ID];
    /**
     * Mapping of all key field names to the respective static field property ContinuousFeedback.
     */
    ContinuousFeedback._keys = ContinuousFeedback._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ContinuousFeedback = exports.ContinuousFeedback || (exports.ContinuousFeedback = {}));
exports.ContinuousFeedback = ContinuousFeedback;
//# sourceMappingURL=ContinuousFeedback.js.map