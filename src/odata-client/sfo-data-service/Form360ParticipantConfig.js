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
var Form360ParticipantConfigRequestBuilder_1 = require("./Form360ParticipantConfigRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Form360ParticipantConfig" of service "SFOData".
 */
var Form360ParticipantConfig = /** @class */ (function (_super) {
    __extends(Form360ParticipantConfig, _super);
    function Form360ParticipantConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Form360ParticipantConfig`.
     * @returns A builder that constructs instances of entity type `Form360ParticipantConfig`.
     */
    Form360ParticipantConfig.builder = function () {
        return core_1.Entity.entityBuilder(Form360ParticipantConfig);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Form360ParticipantConfig` entity type.
     * @returns A `Form360ParticipantConfig` request builder.
     */
    Form360ParticipantConfig.requestBuilder = function () {
        return new Form360ParticipantConfigRequestBuilder_1.Form360ParticipantConfigRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Form360ParticipantConfig`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Form360ParticipantConfig`.
     */
    Form360ParticipantConfig.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Form360ParticipantConfig);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Form360ParticipantConfig.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Form360ParticipantConfig.
     */
    Form360ParticipantConfig._entityName = 'Form360ParticipantConfig';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Form360ParticipantConfig.
     */
    Form360ParticipantConfig._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Form360ParticipantConfig._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Form360ParticipantConfig;
}(core_1.Entity));
exports.Form360ParticipantConfig = Form360ParticipantConfig;
var Form360ParticipantCategory_1 = require("./Form360ParticipantCategory");
var Form360ParticipantColumn_1 = require("./Form360ParticipantColumn");
(function (Form360ParticipantConfig) {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ParticipantConfig.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', Form360ParticipantConfig, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ParticipantConfig.FORM_DATA_ID = new core_1.BigNumberField('formDataId', Form360ParticipantConfig, 'Edm.Int64');
    /**
     * Static representation of the one-to-many navigation property [[participantCategories]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ParticipantConfig.PARTICIPANT_CATEGORIES = new core_1.Link('participantCategories', Form360ParticipantConfig, Form360ParticipantCategory_1.Form360ParticipantCategory);
    /**
     * Static representation of the one-to-many navigation property [[participantColumns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ParticipantConfig.PARTICIPANT_COLUMNS = new core_1.Link('participantColumns', Form360ParticipantConfig, Form360ParticipantColumn_1.Form360ParticipantColumn);
    /**
     * All fields of the Form360ParticipantConfig entity.
     */
    Form360ParticipantConfig._allFields = [
        Form360ParticipantConfig.FORM_CONTENT_ID,
        Form360ParticipantConfig.FORM_DATA_ID,
        Form360ParticipantConfig.PARTICIPANT_CATEGORIES,
        Form360ParticipantConfig.PARTICIPANT_COLUMNS
    ];
    /**
     * All fields selector.
     */
    Form360ParticipantConfig.ALL_FIELDS = new core_1.AllFields('*', Form360ParticipantConfig);
    /**
     * All key fields of the Form360ParticipantConfig entity.
     */
    Form360ParticipantConfig._keyFields = [Form360ParticipantConfig.FORM_CONTENT_ID, Form360ParticipantConfig.FORM_DATA_ID];
    /**
     * Mapping of all key field names to the respective static field property Form360ParticipantConfig.
     */
    Form360ParticipantConfig._keys = Form360ParticipantConfig._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Form360ParticipantConfig = exports.Form360ParticipantConfig || (exports.Form360ParticipantConfig = {}));
exports.Form360ParticipantConfig = Form360ParticipantConfig;
//# sourceMappingURL=Form360ParticipantConfig.js.map