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
var Form360ParticipantDetailRequestBuilder_1 = require("./Form360ParticipantDetailRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Form360ParticipantDetail" of service "SFOData".
 */
var Form360ParticipantDetail = /** @class */ (function (_super) {
    __extends(Form360ParticipantDetail, _super);
    function Form360ParticipantDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Form360ParticipantDetail`.
     * @returns A builder that constructs instances of entity type `Form360ParticipantDetail`.
     */
    Form360ParticipantDetail.builder = function () {
        return core_1.Entity.entityBuilder(Form360ParticipantDetail);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Form360ParticipantDetail` entity type.
     * @returns A `Form360ParticipantDetail` request builder.
     */
    Form360ParticipantDetail.requestBuilder = function () {
        return new Form360ParticipantDetailRequestBuilder_1.Form360ParticipantDetailRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Form360ParticipantDetail`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Form360ParticipantDetail`.
     */
    Form360ParticipantDetail.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Form360ParticipantDetail);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Form360ParticipantDetail.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Form360ParticipantDetail.
     */
    Form360ParticipantDetail._entityName = 'Form360ParticipantDetail';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Form360ParticipantDetail.
     */
    Form360ParticipantDetail._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Form360ParticipantDetail._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Form360ParticipantDetail;
}(core_1.Entity));
exports.Form360ParticipantDetail = Form360ParticipantDetail;
var User_1 = require("./User");
(function (Form360ParticipantDetail) {
    /**
     * Static representation of the [[columnKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ParticipantDetail.COLUMN_KEY = new core_1.StringField('columnKey', Form360ParticipantDetail, 'Edm.String');
    /**
     * Static representation of the [[columnValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ParticipantDetail.COLUMN_VALUE = new core_1.StringField('columnValue', Form360ParticipantDetail, 'Edm.String');
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ParticipantDetail.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', Form360ParticipantDetail, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ParticipantDetail.FORM_DATA_ID = new core_1.BigNumberField('formDataId', Form360ParticipantDetail, 'Edm.Int64');
    /**
     * Static representation of the [[participantId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ParticipantDetail.PARTICIPANT_ID = new core_1.StringField('participantId', Form360ParticipantDetail, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[participantUser]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ParticipantDetail.PARTICIPANT_USER = new core_1.OneToOneLink('participantUser', Form360ParticipantDetail, User_1.User);
    /**
     * All fields of the Form360ParticipantDetail entity.
     */
    Form360ParticipantDetail._allFields = [
        Form360ParticipantDetail.COLUMN_KEY,
        Form360ParticipantDetail.COLUMN_VALUE,
        Form360ParticipantDetail.FORM_CONTENT_ID,
        Form360ParticipantDetail.FORM_DATA_ID,
        Form360ParticipantDetail.PARTICIPANT_ID,
        Form360ParticipantDetail.PARTICIPANT_USER
    ];
    /**
     * All fields selector.
     */
    Form360ParticipantDetail.ALL_FIELDS = new core_1.AllFields('*', Form360ParticipantDetail);
    /**
     * All key fields of the Form360ParticipantDetail entity.
     */
    Form360ParticipantDetail._keyFields = [Form360ParticipantDetail.COLUMN_KEY, Form360ParticipantDetail.FORM_CONTENT_ID, Form360ParticipantDetail.FORM_DATA_ID, Form360ParticipantDetail.PARTICIPANT_ID];
    /**
     * Mapping of all key field names to the respective static field property Form360ParticipantDetail.
     */
    Form360ParticipantDetail._keys = Form360ParticipantDetail._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Form360ParticipantDetail = exports.Form360ParticipantDetail || (exports.Form360ParticipantDetail = {}));
exports.Form360ParticipantDetail = Form360ParticipantDetail;
//# sourceMappingURL=Form360ParticipantDetail.js.map