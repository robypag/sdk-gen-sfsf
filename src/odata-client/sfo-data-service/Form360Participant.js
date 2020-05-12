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
var Form360ParticipantRequestBuilder_1 = require("./Form360ParticipantRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Form360Participant" of service "SFOData".
 */
var Form360Participant = /** @class */ (function (_super) {
    __extends(Form360Participant, _super);
    function Form360Participant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Form360Participant`.
     * @returns A builder that constructs instances of entity type `Form360Participant`.
     */
    Form360Participant.builder = function () {
        return core_1.Entity.entityBuilder(Form360Participant);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Form360Participant` entity type.
     * @returns A `Form360Participant` request builder.
     */
    Form360Participant.requestBuilder = function () {
        return new Form360ParticipantRequestBuilder_1.Form360ParticipantRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Form360Participant`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Form360Participant`.
     */
    Form360Participant.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Form360Participant);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Form360Participant.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Form360Participant.
     */
    Form360Participant._entityName = 'Form360Participant';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Form360Participant.
     */
    Form360Participant._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Form360Participant._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Form360Participant;
}(core_1.Entity));
exports.Form360Participant = Form360Participant;
var Form360ParticipantDetail_1 = require("./Form360ParticipantDetail");
var User_1 = require("./User");
(function (Form360Participant) {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Participant.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', Form360Participant, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Participant.FORM_DATA_ID = new core_1.BigNumberField('formDataId', Form360Participant, 'Edm.Int64');
    /**
     * Static representation of the [[isExternalUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Participant.IS_EXTERNAL_USER = new core_1.BooleanField('isExternalUser', Form360Participant, 'Edm.Boolean');
    /**
     * Static representation of the [[isFixedCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Participant.IS_FIXED_CATEGORY = new core_1.BooleanField('isFixedCategory', Form360Participant, 'Edm.Boolean');
    /**
     * Static representation of the [[isRemovable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Participant.IS_REMOVABLE = new core_1.BooleanField('isRemovable', Form360Participant, 'Edm.Boolean');
    /**
     * Static representation of the [[participantAction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Participant.PARTICIPANT_ACTION = new core_1.StringField('participantAction', Form360Participant, 'Edm.String');
    /**
     * Static representation of the [[participantCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Participant.PARTICIPANT_CATEGORY = new core_1.StringField('participantCategory', Form360Participant, 'Edm.String');
    /**
     * Static representation of the [[participantId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Participant.PARTICIPANT_ID = new core_1.StringField('participantId', Form360Participant, 'Edm.String');
    /**
     * Static representation of the [[participantOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Participant.PARTICIPANT_ORDER = new core_1.NumberField('participantOrder', Form360Participant, 'Edm.Int32');
    /**
     * Static representation of the [[participantUsername]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Participant.PARTICIPANT_USERNAME = new core_1.StringField('participantUsername', Form360Participant, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[participantDetails]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Participant.PARTICIPANT_DETAILS = new core_1.Link('participantDetails', Form360Participant, Form360ParticipantDetail_1.Form360ParticipantDetail);
    /**
     * Static representation of the one-to-one navigation property [[participantUser]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Participant.PARTICIPANT_USER = new core_1.OneToOneLink('participantUser', Form360Participant, User_1.User);
    /**
     * All fields of the Form360Participant entity.
     */
    Form360Participant._allFields = [
        Form360Participant.FORM_CONTENT_ID,
        Form360Participant.FORM_DATA_ID,
        Form360Participant.IS_EXTERNAL_USER,
        Form360Participant.IS_FIXED_CATEGORY,
        Form360Participant.IS_REMOVABLE,
        Form360Participant.PARTICIPANT_ACTION,
        Form360Participant.PARTICIPANT_CATEGORY,
        Form360Participant.PARTICIPANT_ID,
        Form360Participant.PARTICIPANT_ORDER,
        Form360Participant.PARTICIPANT_USERNAME,
        Form360Participant.PARTICIPANT_DETAILS,
        Form360Participant.PARTICIPANT_USER
    ];
    /**
     * All fields selector.
     */
    Form360Participant.ALL_FIELDS = new core_1.AllFields('*', Form360Participant);
    /**
     * All key fields of the Form360Participant entity.
     */
    Form360Participant._keyFields = [Form360Participant.FORM_CONTENT_ID, Form360Participant.FORM_DATA_ID, Form360Participant.PARTICIPANT_ID];
    /**
     * Mapping of all key field names to the respective static field property Form360Participant.
     */
    Form360Participant._keys = Form360Participant._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Form360Participant = exports.Form360Participant || (exports.Form360Participant = {}));
exports.Form360Participant = Form360Participant;
//# sourceMappingURL=Form360Participant.js.map