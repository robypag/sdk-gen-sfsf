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
var FormItemConfigurationRequestBuilder_1 = require("./FormItemConfigurationRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormItemConfiguration" of service "SFOData".
 */
var FormItemConfiguration = /** @class */ (function (_super) {
    __extends(FormItemConfiguration, _super);
    function FormItemConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormItemConfiguration`.
     * @returns A builder that constructs instances of entity type `FormItemConfiguration`.
     */
    FormItemConfiguration.builder = function () {
        return core_1.Entity.entityBuilder(FormItemConfiguration);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormItemConfiguration` entity type.
     * @returns A `FormItemConfiguration` request builder.
     */
    FormItemConfiguration.requestBuilder = function () {
        return new FormItemConfigurationRequestBuilder_1.FormItemConfigurationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormItemConfiguration`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormItemConfiguration`.
     */
    FormItemConfiguration.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormItemConfiguration);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormItemConfiguration.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormItemConfiguration.
     */
    FormItemConfiguration._entityName = 'FormItemConfiguration';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormItemConfiguration.
     */
    FormItemConfiguration._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormItemConfiguration._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormItemConfiguration;
}(core_1.Entity));
exports.FormItemConfiguration = FormItemConfiguration;
(function (FormItemConfiguration) {
    /**
     * Static representation of the [[behaviorRemovable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormItemConfiguration.BEHAVIOR_REMOVABLE = new core_1.BooleanField('behaviorRemovable', FormItemConfiguration, 'Edm.Boolean');
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormItemConfiguration.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormItemConfiguration, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormItemConfiguration.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormItemConfiguration, 'Edm.Int64');
    /**
     * Static representation of the [[itemCommentRequired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormItemConfiguration.ITEM_COMMENT_REQUIRED = new core_1.BooleanField('itemCommentRequired', FormItemConfiguration, 'Edm.Boolean');
    /**
     * Static representation of the [[itemEditable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormItemConfiguration.ITEM_EDITABLE = new core_1.BooleanField('itemEditable', FormItemConfiguration, 'Edm.Boolean');
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormItemConfiguration.ITEM_ID = new core_1.BigNumberField('itemId', FormItemConfiguration, 'Edm.Int64');
    /**
     * Static representation of the [[itemRatingRequired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormItemConfiguration.ITEM_RATING_REQUIRED = new core_1.BooleanField('itemRatingRequired', FormItemConfiguration, 'Edm.Boolean');
    /**
     * Static representation of the [[itemRemovable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormItemConfiguration.ITEM_REMOVABLE = new core_1.BooleanField('itemRemovable', FormItemConfiguration, 'Edm.Boolean');
    /**
     * Static representation of the [[itemRemovableKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormItemConfiguration.ITEM_REMOVABLE_KEY = new core_1.StringField('itemRemovableKey', FormItemConfiguration, 'Edm.String');
    /**
     * Static representation of the [[itemWeightPermission]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormItemConfiguration.ITEM_WEIGHT_PERMISSION = new core_1.StringField('itemWeightPermission', FormItemConfiguration, 'Edm.String');
    /**
     * Static representation of the [[itemWeightRequired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormItemConfiguration.ITEM_WEIGHT_REQUIRED = new core_1.BooleanField('itemWeightRequired', FormItemConfiguration, 'Edm.Boolean');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormItemConfiguration.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormItemConfiguration, 'Edm.Int32');
    /**
     * Static representation of the [[suppressItemComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormItemConfiguration.SUPPRESS_ITEM_COMMENTS = new core_1.BooleanField('suppressItemComments', FormItemConfiguration, 'Edm.Boolean');
    /**
     * Static representation of the [[suppressItemCommentsLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormItemConfiguration.SUPPRESS_ITEM_COMMENTS_LABEL = new core_1.BooleanField('suppressItemCommentsLabel', FormItemConfiguration, 'Edm.Boolean');
    /**
     * All fields of the FormItemConfiguration entity.
     */
    FormItemConfiguration._allFields = [
        FormItemConfiguration.BEHAVIOR_REMOVABLE,
        FormItemConfiguration.FORM_CONTENT_ID,
        FormItemConfiguration.FORM_DATA_ID,
        FormItemConfiguration.ITEM_COMMENT_REQUIRED,
        FormItemConfiguration.ITEM_EDITABLE,
        FormItemConfiguration.ITEM_ID,
        FormItemConfiguration.ITEM_RATING_REQUIRED,
        FormItemConfiguration.ITEM_REMOVABLE,
        FormItemConfiguration.ITEM_REMOVABLE_KEY,
        FormItemConfiguration.ITEM_WEIGHT_PERMISSION,
        FormItemConfiguration.ITEM_WEIGHT_REQUIRED,
        FormItemConfiguration.SECTION_INDEX,
        FormItemConfiguration.SUPPRESS_ITEM_COMMENTS,
        FormItemConfiguration.SUPPRESS_ITEM_COMMENTS_LABEL
    ];
    /**
     * All fields selector.
     */
    FormItemConfiguration.ALL_FIELDS = new core_1.AllFields('*', FormItemConfiguration);
    /**
     * All key fields of the FormItemConfiguration entity.
     */
    FormItemConfiguration._keyFields = [FormItemConfiguration.FORM_CONTENT_ID, FormItemConfiguration.FORM_DATA_ID, FormItemConfiguration.ITEM_ID, FormItemConfiguration.SECTION_INDEX];
    /**
     * Mapping of all key field names to the respective static field property FormItemConfiguration.
     */
    FormItemConfiguration._keys = FormItemConfiguration._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormItemConfiguration = exports.FormItemConfiguration || (exports.FormItemConfiguration = {}));
exports.FormItemConfiguration = FormItemConfiguration;
//# sourceMappingURL=FormItemConfiguration.js.map