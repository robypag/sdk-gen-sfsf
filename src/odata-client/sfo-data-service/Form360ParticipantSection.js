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
var Form360ParticipantSectionRequestBuilder_1 = require("./Form360ParticipantSectionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Form360ParticipantSection" of service "SFOData".
 */
var Form360ParticipantSection = /** @class */ (function (_super) {
    __extends(Form360ParticipantSection, _super);
    function Form360ParticipantSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Form360ParticipantSection`.
     * @returns A builder that constructs instances of entity type `Form360ParticipantSection`.
     */
    Form360ParticipantSection.builder = function () {
        return core_1.Entity.entityBuilder(Form360ParticipantSection);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Form360ParticipantSection` entity type.
     * @returns A `Form360ParticipantSection` request builder.
     */
    Form360ParticipantSection.requestBuilder = function () {
        return new Form360ParticipantSectionRequestBuilder_1.Form360ParticipantSectionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Form360ParticipantSection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Form360ParticipantSection`.
     */
    Form360ParticipantSection.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Form360ParticipantSection);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Form360ParticipantSection.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Form360ParticipantSection.
     */
    Form360ParticipantSection._entityName = 'Form360ParticipantSection';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Form360ParticipantSection.
     */
    Form360ParticipantSection._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Form360ParticipantSection._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Form360ParticipantSection;
}(core_1.Entity));
exports.Form360ParticipantSection = Form360ParticipantSection;
var Form360Participant_1 = require("./Form360Participant");
var Form360ParticipantConfig_1 = require("./Form360ParticipantConfig");
(function (Form360ParticipantSection) {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ParticipantSection.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', Form360ParticipantSection, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ParticipantSection.FORM_DATA_ID = new core_1.BigNumberField('formDataId', Form360ParticipantSection, 'Edm.Int64');
    /**
     * Static representation of the [[sectionConfigurable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ParticipantSection.SECTION_CONFIGURABLE = new core_1.BooleanField('sectionConfigurable', Form360ParticipantSection, 'Edm.Boolean');
    /**
     * Static representation of the [[sectionDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ParticipantSection.SECTION_DESCRIPTION = new core_1.StringField('sectionDescription', Form360ParticipantSection, 'Edm.String');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ParticipantSection.SECTION_INDEX = new core_1.NumberField('sectionIndex', Form360ParticipantSection, 'Edm.Int32');
    /**
     * Static representation of the [[sectionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ParticipantSection.SECTION_NAME = new core_1.StringField('sectionName', Form360ParticipantSection, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[formParticipants]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ParticipantSection.FORM_PARTICIPANTS = new core_1.Link('formParticipants', Form360ParticipantSection, Form360Participant_1.Form360Participant);
    /**
     * Static representation of the one-to-one navigation property [[participantConfig]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ParticipantSection.PARTICIPANT_CONFIG = new core_1.OneToOneLink('participantConfig', Form360ParticipantSection, Form360ParticipantConfig_1.Form360ParticipantConfig);
    /**
     * All fields of the Form360ParticipantSection entity.
     */
    Form360ParticipantSection._allFields = [
        Form360ParticipantSection.FORM_CONTENT_ID,
        Form360ParticipantSection.FORM_DATA_ID,
        Form360ParticipantSection.SECTION_CONFIGURABLE,
        Form360ParticipantSection.SECTION_DESCRIPTION,
        Form360ParticipantSection.SECTION_INDEX,
        Form360ParticipantSection.SECTION_NAME,
        Form360ParticipantSection.FORM_PARTICIPANTS,
        Form360ParticipantSection.PARTICIPANT_CONFIG
    ];
    /**
     * All fields selector.
     */
    Form360ParticipantSection.ALL_FIELDS = new core_1.AllFields('*', Form360ParticipantSection);
    /**
     * All key fields of the Form360ParticipantSection entity.
     */
    Form360ParticipantSection._keyFields = [Form360ParticipantSection.FORM_CONTENT_ID, Form360ParticipantSection.FORM_DATA_ID];
    /**
     * Mapping of all key field names to the respective static field property Form360ParticipantSection.
     */
    Form360ParticipantSection._keys = Form360ParticipantSection._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Form360ParticipantSection = exports.Form360ParticipantSection || (exports.Form360ParticipantSection = {}));
exports.Form360ParticipantSection = Form360ParticipantSection;
//# sourceMappingURL=Form360ParticipantSection.js.map