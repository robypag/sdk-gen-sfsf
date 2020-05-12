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
var FormRouteStepRequestBuilder_1 = require("./FormRouteStepRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormRouteStep" of service "SFOData".
 */
var FormRouteStep = /** @class */ (function (_super) {
    __extends(FormRouteStep, _super);
    function FormRouteStep() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormRouteStep`.
     * @returns A builder that constructs instances of entity type `FormRouteStep`.
     */
    FormRouteStep.builder = function () {
        return core_1.Entity.entityBuilder(FormRouteStep);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormRouteStep` entity type.
     * @returns A `FormRouteStep` request builder.
     */
    FormRouteStep.requestBuilder = function () {
        return new FormRouteStepRequestBuilder_1.FormRouteStepRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormRouteStep`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormRouteStep`.
     */
    FormRouteStep.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormRouteStep);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormRouteStep.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormRouteStep.
     */
    FormRouteStep._entityName = 'FormRouteStep';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormRouteStep.
     */
    FormRouteStep._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormRouteStep._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormRouteStep;
}(core_1.Entity));
exports.FormRouteStep = FormRouteStep;
var FormRouteSubStep_1 = require("./FormRouteSubStep");
(function (FormRouteStep) {
    /**
     * Static representation of the [[completed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRouteStep.COMPLETED = new core_1.BooleanField('completed', FormRouteStep, 'Edm.Boolean');
    /**
     * Static representation of the [[current]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRouteStep.CURRENT = new core_1.BooleanField('current', FormRouteStep, 'Edm.Boolean');
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRouteStep.DUE_DATE = new core_1.StringField('dueDate', FormRouteStep, 'Edm.String');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRouteStep.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormRouteStep, 'Edm.Int64');
    /**
     * Static representation of the [[overDue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRouteStep.OVER_DUE = new core_1.BooleanField('overDue', FormRouteStep, 'Edm.Boolean');
    /**
     * Static representation of the [[stageName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRouteStep.STAGE_NAME = new core_1.StringField('stageName', FormRouteStep, 'Edm.String');
    /**
     * Static representation of the [[stageType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRouteStep.STAGE_TYPE = new core_1.StringField('stageType', FormRouteStep, 'Edm.String');
    /**
     * Static representation of the [[stepDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRouteStep.STEP_DESCRIPTION = new core_1.StringField('stepDescription', FormRouteStep, 'Edm.String');
    /**
     * Static representation of the [[stepId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRouteStep.STEP_ID = new core_1.StringField('stepId', FormRouteStep, 'Edm.String');
    /**
     * Static representation of the [[stepName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRouteStep.STEP_NAME = new core_1.StringField('stepName', FormRouteStep, 'Edm.String');
    /**
     * Static representation of the [[stepOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRouteStep.STEP_ORDER = new core_1.NumberField('stepOrder', FormRouteStep, 'Edm.Int32');
    /**
     * Static representation of the [[stepType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRouteStep.STEP_TYPE = new core_1.StringField('stepType', FormRouteStep, 'Edm.String');
    /**
     * Static representation of the [[userFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRouteStep.USER_FULL_NAME = new core_1.StringField('userFullName', FormRouteStep, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRouteStep.USER_ID = new core_1.StringField('userId', FormRouteStep, 'Edm.String');
    /**
     * Static representation of the [[userRole]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRouteStep.USER_ROLE = new core_1.StringField('userRole', FormRouteStep, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[routeSubStep]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRouteStep.ROUTE_SUB_STEP = new core_1.Link('routeSubStep', FormRouteStep, FormRouteSubStep_1.FormRouteSubStep);
    /**
     * All fields of the FormRouteStep entity.
     */
    FormRouteStep._allFields = [
        FormRouteStep.COMPLETED,
        FormRouteStep.CURRENT,
        FormRouteStep.DUE_DATE,
        FormRouteStep.FORM_DATA_ID,
        FormRouteStep.OVER_DUE,
        FormRouteStep.STAGE_NAME,
        FormRouteStep.STAGE_TYPE,
        FormRouteStep.STEP_DESCRIPTION,
        FormRouteStep.STEP_ID,
        FormRouteStep.STEP_NAME,
        FormRouteStep.STEP_ORDER,
        FormRouteStep.STEP_TYPE,
        FormRouteStep.USER_FULL_NAME,
        FormRouteStep.USER_ID,
        FormRouteStep.USER_ROLE,
        FormRouteStep.ROUTE_SUB_STEP
    ];
    /**
     * All fields selector.
     */
    FormRouteStep.ALL_FIELDS = new core_1.AllFields('*', FormRouteStep);
    /**
     * All key fields of the FormRouteStep entity.
     */
    FormRouteStep._keyFields = [FormRouteStep.FORM_DATA_ID, FormRouteStep.STEP_ORDER];
    /**
     * Mapping of all key field names to the respective static field property FormRouteStep.
     */
    FormRouteStep._keys = FormRouteStep._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormRouteStep = exports.FormRouteStep || (exports.FormRouteStep = {}));
exports.FormRouteStep = FormRouteStep;
//# sourceMappingURL=FormRouteStep.js.map