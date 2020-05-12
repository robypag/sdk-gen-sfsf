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
var FormSectionConfigurationRequestBuilder_1 = require("./FormSectionConfigurationRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormSectionConfiguration" of service "SFOData".
 */
var FormSectionConfiguration = /** @class */ (function (_super) {
    __extends(FormSectionConfiguration, _super);
    function FormSectionConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormSectionConfiguration`.
     * @returns A builder that constructs instances of entity type `FormSectionConfiguration`.
     */
    FormSectionConfiguration.builder = function () {
        return core_1.Entity.entityBuilder(FormSectionConfiguration);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormSectionConfiguration` entity type.
     * @returns A `FormSectionConfiguration` request builder.
     */
    FormSectionConfiguration.requestBuilder = function () {
        return new FormSectionConfigurationRequestBuilder_1.FormSectionConfigurationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormSectionConfiguration`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormSectionConfiguration`.
     */
    FormSectionConfiguration.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormSectionConfiguration);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormSectionConfiguration.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormSectionConfiguration.
     */
    FormSectionConfiguration._entityName = 'FormSectionConfiguration';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormSectionConfiguration.
     */
    FormSectionConfiguration._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormSectionConfiguration._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormSectionConfiguration;
}(core_1.Entity));
exports.FormSectionConfiguration = FormSectionConfiguration;
var FormRatingScale_1 = require("./FormRatingScale");
(function (FormSectionConfiguration) {
    /**
     * Static representation of the [[addExistingObjEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSectionConfiguration.ADD_EXISTING_OBJ_ENABLED = new core_1.BooleanField('addExistingObjEnabled', FormSectionConfiguration, 'Edm.Boolean');
    /**
     * Static representation of the [[addItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSectionConfiguration.ADD_ITEM = new core_1.BooleanField('addItem', FormSectionConfiguration, 'Edm.Boolean');
    /**
     * Static representation of the [[autoPopulateWeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSectionConfiguration.AUTO_POPULATE_WEIGHT = new core_1.BooleanField('autoPopulateWeight', FormSectionConfiguration, 'Edm.Boolean');
    /**
     * Static representation of the [[behaviorModeOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSectionConfiguration.BEHAVIOR_MODE_OPTION = new core_1.NumberField('behaviorModeOption', FormSectionConfiguration, 'Edm.Int32');
    /**
     * Static representation of the [[enforcePlainTextCharacterLimit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSectionConfiguration.ENFORCE_PLAIN_TEXT_CHARACTER_LIMIT = new core_1.BooleanField('enforcePlainTextCharacterLimit', FormSectionConfiguration, 'Edm.Boolean');
    /**
     * Static representation of the [[enforceRteCharacterLimit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSectionConfiguration.ENFORCE_RTE_CHARACTER_LIMIT = new core_1.BooleanField('enforceRTECharacterLimit', FormSectionConfiguration, 'Edm.Boolean');
    /**
     * Static representation of the [[excludePrivateGoal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSectionConfiguration.EXCLUDE_PRIVATE_GOAL = new core_1.BooleanField('excludePrivateGoal', FormSectionConfiguration, 'Edm.Boolean');
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSectionConfiguration.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormSectionConfiguration, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSectionConfiguration.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormSectionConfiguration, 'Edm.Int64');
    /**
     * Static representation of the [[hasItemComment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSectionConfiguration.HAS_ITEM_COMMENT = new core_1.BooleanField('hasItemComment', FormSectionConfiguration, 'Edm.Boolean');
    /**
     * Static representation of the [[hasSectionComment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSectionConfiguration.HAS_SECTION_COMMENT = new core_1.BooleanField('hasSectionComment', FormSectionConfiguration, 'Edm.Boolean');
    /**
     * Static representation of the [[itemNonremovablePermission]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSectionConfiguration.ITEM_NONREMOVABLE_PERMISSION = new core_1.StringField('itemNonremovablePermission', FormSectionConfiguration, 'Edm.String');
    /**
     * Static representation of the [[objCategories]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSectionConfiguration.OBJ_CATEGORIES = new core_1.StringField('objCategories', FormSectionConfiguration, 'Edm.String');
    /**
     * Static representation of the [[objCategoriesCount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSectionConfiguration.OBJ_CATEGORIES_COUNT = new core_1.NumberField('objCategoriesCount', FormSectionConfiguration, 'Edm.Int32');
    /**
     * Static representation of the [[rateByBehavior]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSectionConfiguration.RATE_BY_BEHAVIOR = new core_1.BooleanField('rateByBehavior', FormSectionConfiguration, 'Edm.Boolean');
    /**
     * Static representation of the [[ratingOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSectionConfiguration.RATING_OPTION = new core_1.NumberField('ratingOption', FormSectionConfiguration, 'Edm.Int32');
    /**
     * Static representation of the [[ratingScaleLabelLinkEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSectionConfiguration.RATING_SCALE_LABEL_LINK_ENABLED = new core_1.BooleanField('ratingScaleLabelLinkEnabled', FormSectionConfiguration, 'Edm.Boolean');
    /**
     * Static representation of the [[sectionCommentRequired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSectionConfiguration.SECTION_COMMENT_REQUIRED = new core_1.BooleanField('sectionCommentRequired', FormSectionConfiguration, 'Edm.Boolean');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSectionConfiguration.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormSectionConfiguration, 'Edm.Int32');
    /**
     * Static representation of the [[sectionWeightPermission]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSectionConfiguration.SECTION_WEIGHT_PERMISSION = new core_1.StringField('sectionWeightPermission', FormSectionConfiguration, 'Edm.String');
    /**
     * Static representation of the [[smartWizardEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSectionConfiguration.SMART_WIZARD_ENABLED = new core_1.BooleanField('smartWizardEnabled', FormSectionConfiguration, 'Edm.Boolean');
    /**
     * Static representation of the [[teamRaterEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSectionConfiguration.TEAM_RATER_ENABLED = new core_1.BooleanField('teamRaterEnabled', FormSectionConfiguration, 'Edm.Boolean');
    /**
     * Static representation of the [[waca]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSectionConfiguration.WACA = new core_1.BooleanField('waca', FormSectionConfiguration, 'Edm.Boolean');
    /**
     * Static representation of the [[weightTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSectionConfiguration.WEIGHT_TOTAL = new core_1.StringField('weightTotal', FormSectionConfiguration, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[formBehaviorRatingScale]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSectionConfiguration.FORM_BEHAVIOR_RATING_SCALE = new core_1.OneToOneLink('formBehaviorRatingScale', FormSectionConfiguration, FormRatingScale_1.FormRatingScale);
    /**
     * Static representation of the one-to-one navigation property [[formRatingScale]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSectionConfiguration.FORM_RATING_SCALE = new core_1.OneToOneLink('formRatingScale', FormSectionConfiguration, FormRatingScale_1.FormRatingScale);
    /**
     * All fields of the FormSectionConfiguration entity.
     */
    FormSectionConfiguration._allFields = [
        FormSectionConfiguration.ADD_EXISTING_OBJ_ENABLED,
        FormSectionConfiguration.ADD_ITEM,
        FormSectionConfiguration.AUTO_POPULATE_WEIGHT,
        FormSectionConfiguration.BEHAVIOR_MODE_OPTION,
        FormSectionConfiguration.ENFORCE_PLAIN_TEXT_CHARACTER_LIMIT,
        FormSectionConfiguration.ENFORCE_RTE_CHARACTER_LIMIT,
        FormSectionConfiguration.EXCLUDE_PRIVATE_GOAL,
        FormSectionConfiguration.FORM_CONTENT_ID,
        FormSectionConfiguration.FORM_DATA_ID,
        FormSectionConfiguration.HAS_ITEM_COMMENT,
        FormSectionConfiguration.HAS_SECTION_COMMENT,
        FormSectionConfiguration.ITEM_NONREMOVABLE_PERMISSION,
        FormSectionConfiguration.OBJ_CATEGORIES,
        FormSectionConfiguration.OBJ_CATEGORIES_COUNT,
        FormSectionConfiguration.RATE_BY_BEHAVIOR,
        FormSectionConfiguration.RATING_OPTION,
        FormSectionConfiguration.RATING_SCALE_LABEL_LINK_ENABLED,
        FormSectionConfiguration.SECTION_COMMENT_REQUIRED,
        FormSectionConfiguration.SECTION_INDEX,
        FormSectionConfiguration.SECTION_WEIGHT_PERMISSION,
        FormSectionConfiguration.SMART_WIZARD_ENABLED,
        FormSectionConfiguration.TEAM_RATER_ENABLED,
        FormSectionConfiguration.WACA,
        FormSectionConfiguration.WEIGHT_TOTAL,
        FormSectionConfiguration.FORM_BEHAVIOR_RATING_SCALE,
        FormSectionConfiguration.FORM_RATING_SCALE
    ];
    /**
     * All fields selector.
     */
    FormSectionConfiguration.ALL_FIELDS = new core_1.AllFields('*', FormSectionConfiguration);
    /**
     * All key fields of the FormSectionConfiguration entity.
     */
    FormSectionConfiguration._keyFields = [FormSectionConfiguration.FORM_CONTENT_ID, FormSectionConfiguration.FORM_DATA_ID, FormSectionConfiguration.SECTION_INDEX];
    /**
     * Mapping of all key field names to the respective static field property FormSectionConfiguration.
     */
    FormSectionConfiguration._keys = FormSectionConfiguration._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormSectionConfiguration = exports.FormSectionConfiguration || (exports.FormSectionConfiguration = {}));
exports.FormSectionConfiguration = FormSectionConfiguration;
//# sourceMappingURL=FormSectionConfiguration.js.map