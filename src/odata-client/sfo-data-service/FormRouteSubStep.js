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
var FormRouteSubStepRequestBuilder_1 = require("./FormRouteSubStepRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormRouteSubStep" of service "SFOData".
 */
var FormRouteSubStep = /** @class */ (function (_super) {
    __extends(FormRouteSubStep, _super);
    function FormRouteSubStep() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormRouteSubStep`.
     * @returns A builder that constructs instances of entity type `FormRouteSubStep`.
     */
    FormRouteSubStep.builder = function () {
        return core_1.Entity.entityBuilder(FormRouteSubStep);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormRouteSubStep` entity type.
     * @returns A `FormRouteSubStep` request builder.
     */
    FormRouteSubStep.requestBuilder = function () {
        return new FormRouteSubStepRequestBuilder_1.FormRouteSubStepRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormRouteSubStep`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormRouteSubStep`.
     */
    FormRouteSubStep.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormRouteSubStep);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormRouteSubStep.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormRouteSubStep.
     */
    FormRouteSubStep._entityName = 'FormRouteSubStep';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormRouteSubStep.
     */
    FormRouteSubStep._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormRouteSubStep._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormRouteSubStep;
}(core_1.Entity));
exports.FormRouteSubStep = FormRouteSubStep;
(function (FormRouteSubStep) {
    /**
     * Static representation of the [[currentStep]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRouteSubStep.CURRENT_STEP = new core_1.BooleanField('currentStep', FormRouteSubStep, 'Edm.Boolean');
    /**
     * Static representation of the [[entryUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRouteSubStep.ENTRY_USER = new core_1.BooleanField('entryUser', FormRouteSubStep, 'Edm.Boolean');
    /**
     * Static representation of the [[exitUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRouteSubStep.EXIT_USER = new core_1.BooleanField('exitUser', FormRouteSubStep, 'Edm.Boolean');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRouteSubStep.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormRouteSubStep, 'Edm.Int64');
    /**
     * Static representation of the [[stepOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRouteSubStep.STEP_ORDER = new core_1.NumberField('stepOrder', FormRouteSubStep, 'Edm.Int32');
    /**
     * Static representation of the [[subStepOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRouteSubStep.SUB_STEP_ORDER = new core_1.NumberField('subStepOrder', FormRouteSubStep, 'Edm.Int32');
    /**
     * Static representation of the [[userFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRouteSubStep.USER_FULL_NAME = new core_1.StringField('userFullName', FormRouteSubStep, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRouteSubStep.USER_ID = new core_1.StringField('userId', FormRouteSubStep, 'Edm.String');
    /**
     * Static representation of the [[userRole]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRouteSubStep.USER_ROLE = new core_1.StringField('userRole', FormRouteSubStep, 'Edm.String');
    /**
     * All fields of the FormRouteSubStep entity.
     */
    FormRouteSubStep._allFields = [
        FormRouteSubStep.CURRENT_STEP,
        FormRouteSubStep.ENTRY_USER,
        FormRouteSubStep.EXIT_USER,
        FormRouteSubStep.FORM_DATA_ID,
        FormRouteSubStep.STEP_ORDER,
        FormRouteSubStep.SUB_STEP_ORDER,
        FormRouteSubStep.USER_FULL_NAME,
        FormRouteSubStep.USER_ID,
        FormRouteSubStep.USER_ROLE
    ];
    /**
     * All fields selector.
     */
    FormRouteSubStep.ALL_FIELDS = new core_1.AllFields('*', FormRouteSubStep);
    /**
     * All key fields of the FormRouteSubStep entity.
     */
    FormRouteSubStep._keyFields = [FormRouteSubStep.FORM_DATA_ID, FormRouteSubStep.STEP_ORDER, FormRouteSubStep.SUB_STEP_ORDER];
    /**
     * Mapping of all key field names to the respective static field property FormRouteSubStep.
     */
    FormRouteSubStep._keys = FormRouteSubStep._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormRouteSubStep = exports.FormRouteSubStep || (exports.FormRouteSubStep = {}));
exports.FormRouteSubStep = FormRouteSubStep;
//# sourceMappingURL=FormRouteSubStep.js.map