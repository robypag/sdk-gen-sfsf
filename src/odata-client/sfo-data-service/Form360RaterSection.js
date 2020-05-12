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
var Form360RaterSectionRequestBuilder_1 = require("./Form360RaterSectionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Form360RaterSection" of service "SFOData".
 */
var Form360RaterSection = /** @class */ (function (_super) {
    __extends(Form360RaterSection, _super);
    function Form360RaterSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Form360RaterSection`.
     * @returns A builder that constructs instances of entity type `Form360RaterSection`.
     */
    Form360RaterSection.builder = function () {
        return core_1.Entity.entityBuilder(Form360RaterSection);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Form360RaterSection` entity type.
     * @returns A `Form360RaterSection` request builder.
     */
    Form360RaterSection.requestBuilder = function () {
        return new Form360RaterSectionRequestBuilder_1.Form360RaterSectionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Form360RaterSection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Form360RaterSection`.
     */
    Form360RaterSection.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Form360RaterSection);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Form360RaterSection.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Form360RaterSection.
     */
    Form360RaterSection._entityName = 'Form360RaterSection';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Form360RaterSection.
     */
    Form360RaterSection._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Form360RaterSection._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Form360RaterSection;
}(core_1.Entity));
exports.Form360RaterSection = Form360RaterSection;
var Form360Rater_1 = require("./Form360Rater");
(function (Form360RaterSection) {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360RaterSection.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', Form360RaterSection, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360RaterSection.FORM_DATA_ID = new core_1.BigNumberField('formDataId', Form360RaterSection, 'Edm.Int64');
    /**
     * Static representation of the [[formRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360RaterSection.FORM_RATING = new core_1.StringField('formRating', Form360RaterSection, 'Edm.String');
    /**
     * Static representation of the [[formStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360RaterSection.FORM_STATUS = new core_1.NumberField('formStatus', Form360RaterSection, 'Edm.Int32');
    /**
     * Static representation of the [[formStatusDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360RaterSection.FORM_STATUS_DESCRIPTION = new core_1.StringField('formStatusDescription', Form360RaterSection, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[form360Raters]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360RaterSection.FORM_360_RATERS = new core_1.Link('form360Raters', Form360RaterSection, Form360Rater_1.Form360Rater);
    /**
     * All fields of the Form360RaterSection entity.
     */
    Form360RaterSection._allFields = [
        Form360RaterSection.FORM_CONTENT_ID,
        Form360RaterSection.FORM_DATA_ID,
        Form360RaterSection.FORM_RATING,
        Form360RaterSection.FORM_STATUS,
        Form360RaterSection.FORM_STATUS_DESCRIPTION,
        Form360RaterSection.FORM_360_RATERS
    ];
    /**
     * All fields selector.
     */
    Form360RaterSection.ALL_FIELDS = new core_1.AllFields('*', Form360RaterSection);
    /**
     * All key fields of the Form360RaterSection entity.
     */
    Form360RaterSection._keyFields = [Form360RaterSection.FORM_CONTENT_ID, Form360RaterSection.FORM_DATA_ID];
    /**
     * Mapping of all key field names to the respective static field property Form360RaterSection.
     */
    Form360RaterSection._keys = Form360RaterSection._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Form360RaterSection = exports.Form360RaterSection || (exports.Form360RaterSection = {}));
exports.Form360RaterSection = Form360RaterSection;
//# sourceMappingURL=Form360RaterSection.js.map