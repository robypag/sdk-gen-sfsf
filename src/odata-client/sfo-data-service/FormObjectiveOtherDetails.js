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
var FormObjectiveOtherDetailsRequestBuilder_1 = require("./FormObjectiveOtherDetailsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormObjectiveOtherDetails" of service "SFOData".
 */
var FormObjectiveOtherDetails = /** @class */ (function (_super) {
    __extends(FormObjectiveOtherDetails, _super);
    function FormObjectiveOtherDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormObjectiveOtherDetails`.
     * @returns A builder that constructs instances of entity type `FormObjectiveOtherDetails`.
     */
    FormObjectiveOtherDetails.builder = function () {
        return core_1.Entity.entityBuilder(FormObjectiveOtherDetails);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormObjectiveOtherDetails` entity type.
     * @returns A `FormObjectiveOtherDetails` request builder.
     */
    FormObjectiveOtherDetails.requestBuilder = function () {
        return new FormObjectiveOtherDetailsRequestBuilder_1.FormObjectiveOtherDetailsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormObjectiveOtherDetails`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormObjectiveOtherDetails`.
     */
    FormObjectiveOtherDetails.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormObjectiveOtherDetails);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormObjectiveOtherDetails.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormObjectiveOtherDetails.
     */
    FormObjectiveOtherDetails._entityName = 'FormObjectiveOtherDetails';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormObjectiveOtherDetails.
     */
    FormObjectiveOtherDetails._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormObjectiveOtherDetails._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormObjectiveOtherDetails;
}(core_1.Entity));
exports.FormObjectiveOtherDetails = FormObjectiveOtherDetails;
var FormObjectiveOtherDetailsItem_1 = require("./FormObjectiveOtherDetailsItem");
(function (FormObjectiveOtherDetails) {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetails.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormObjectiveOtherDetails, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetails.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormObjectiveOtherDetails, 'Edm.Int64');
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetails.ITEM_ID = new core_1.BigNumberField('itemId', FormObjectiveOtherDetails, 'Edm.Int64');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetails.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormObjectiveOtherDetails, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[metricLookupTables]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetails.METRIC_LOOKUP_TABLES = new core_1.OneToOneLink('metricLookupTables', FormObjectiveOtherDetails, FormObjectiveOtherDetailsItem_1.FormObjectiveOtherDetailsItem);
    /**
     * Static representation of the one-to-one navigation property [[milestones]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetails.MILESTONES = new core_1.OneToOneLink('milestones', FormObjectiveOtherDetails, FormObjectiveOtherDetailsItem_1.FormObjectiveOtherDetailsItem);
    /**
     * Static representation of the one-to-one navigation property [[targets]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetails.TARGETS = new core_1.OneToOneLink('targets', FormObjectiveOtherDetails, FormObjectiveOtherDetailsItem_1.FormObjectiveOtherDetailsItem);
    /**
     * Static representation of the one-to-one navigation property [[tasks]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetails.TASKS = new core_1.OneToOneLink('tasks', FormObjectiveOtherDetails, FormObjectiveOtherDetailsItem_1.FormObjectiveOtherDetailsItem);
    /**
     * All fields of the FormObjectiveOtherDetails entity.
     */
    FormObjectiveOtherDetails._allFields = [
        FormObjectiveOtherDetails.FORM_CONTENT_ID,
        FormObjectiveOtherDetails.FORM_DATA_ID,
        FormObjectiveOtherDetails.ITEM_ID,
        FormObjectiveOtherDetails.SECTION_INDEX,
        FormObjectiveOtherDetails.METRIC_LOOKUP_TABLES,
        FormObjectiveOtherDetails.MILESTONES,
        FormObjectiveOtherDetails.TARGETS,
        FormObjectiveOtherDetails.TASKS
    ];
    /**
     * All fields selector.
     */
    FormObjectiveOtherDetails.ALL_FIELDS = new core_1.AllFields('*', FormObjectiveOtherDetails);
    /**
     * All key fields of the FormObjectiveOtherDetails entity.
     */
    FormObjectiveOtherDetails._keyFields = [FormObjectiveOtherDetails.FORM_CONTENT_ID, FormObjectiveOtherDetails.FORM_DATA_ID, FormObjectiveOtherDetails.ITEM_ID, FormObjectiveOtherDetails.SECTION_INDEX];
    /**
     * Mapping of all key field names to the respective static field property FormObjectiveOtherDetails.
     */
    FormObjectiveOtherDetails._keys = FormObjectiveOtherDetails._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormObjectiveOtherDetails = exports.FormObjectiveOtherDetails || (exports.FormObjectiveOtherDetails = {}));
exports.FormObjectiveOtherDetails = FormObjectiveOtherDetails;
//# sourceMappingURL=FormObjectiveOtherDetails.js.map