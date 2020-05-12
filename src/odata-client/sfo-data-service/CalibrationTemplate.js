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
var CalibrationTemplateRequestBuilder_1 = require("./CalibrationTemplateRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CalibrationTemplate" of service "SFOData".
 */
var CalibrationTemplate = /** @class */ (function (_super) {
    __extends(CalibrationTemplate, _super);
    function CalibrationTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CalibrationTemplate`.
     * @returns A builder that constructs instances of entity type `CalibrationTemplate`.
     */
    CalibrationTemplate.builder = function () {
        return core_1.Entity.entityBuilder(CalibrationTemplate);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CalibrationTemplate` entity type.
     * @returns A `CalibrationTemplate` request builder.
     */
    CalibrationTemplate.requestBuilder = function () {
        return new CalibrationTemplateRequestBuilder_1.CalibrationTemplateRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CalibrationTemplate`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CalibrationTemplate`.
     */
    CalibrationTemplate.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, CalibrationTemplate);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CalibrationTemplate.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CalibrationTemplate.
     */
    CalibrationTemplate._entityName = 'CalibrationTemplate';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CalibrationTemplate.
     */
    CalibrationTemplate._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CalibrationTemplate._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CalibrationTemplate;
}(core_1.Entity));
exports.CalibrationTemplate = CalibrationTemplate;
var User_1 = require("./User");
(function (CalibrationTemplate) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationTemplate.CREATED_BY = new core_1.StringField('createdBy', CalibrationTemplate, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationTemplate.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', CalibrationTemplate, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationTemplate.END_DATE = new core_1.DateField('endDate', CalibrationTemplate, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationTemplate.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', CalibrationTemplate, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationTemplate.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', CalibrationTemplate, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationTemplate.START_DATE = new core_1.DateField('startDate', CalibrationTemplate, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationTemplate.STATUS = new core_1.NumberField('status', CalibrationTemplate, 'Edm.Int32');
    /**
     * Static representation of the [[templateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationTemplate.TEMPLATE_ID = new core_1.BigNumberField('templateId', CalibrationTemplate, 'Edm.Int64');
    /**
     * Static representation of the [[templateName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationTemplate.TEMPLATE_NAME = new core_1.StringField('templateName', CalibrationTemplate, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[executiveReviewerList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationTemplate.EXECUTIVE_REVIEWER_LIST = new core_1.Link('executiveReviewerList', CalibrationTemplate, User_1.User);
    /**
     * All fields of the CalibrationTemplate entity.
     */
    CalibrationTemplate._allFields = [
        CalibrationTemplate.CREATED_BY,
        CalibrationTemplate.CREATED_DATE_TIME,
        CalibrationTemplate.END_DATE,
        CalibrationTemplate.LAST_MODIFIED_BY,
        CalibrationTemplate.LAST_MODIFIED_DATE_TIME,
        CalibrationTemplate.START_DATE,
        CalibrationTemplate.STATUS,
        CalibrationTemplate.TEMPLATE_ID,
        CalibrationTemplate.TEMPLATE_NAME,
        CalibrationTemplate.EXECUTIVE_REVIEWER_LIST
    ];
    /**
     * All fields selector.
     */
    CalibrationTemplate.ALL_FIELDS = new core_1.AllFields('*', CalibrationTemplate);
    /**
     * All key fields of the CalibrationTemplate entity.
     */
    CalibrationTemplate._keyFields = [CalibrationTemplate.TEMPLATE_ID];
    /**
     * Mapping of all key field names to the respective static field property CalibrationTemplate.
     */
    CalibrationTemplate._keys = CalibrationTemplate._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CalibrationTemplate = exports.CalibrationTemplate || (exports.CalibrationTemplate = {}));
exports.CalibrationTemplate = CalibrationTemplate;
//# sourceMappingURL=CalibrationTemplate.js.map