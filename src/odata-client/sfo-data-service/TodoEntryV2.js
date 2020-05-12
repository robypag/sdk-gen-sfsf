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
var TodoEntryV2RequestBuilder_1 = require("./TodoEntryV2RequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TodoEntryV2" of service "SFOData".
 */
var TodoEntryV2 = /** @class */ (function (_super) {
    __extends(TodoEntryV2, _super);
    function TodoEntryV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TodoEntryV2`.
     * @returns A builder that constructs instances of entity type `TodoEntryV2`.
     */
    TodoEntryV2.builder = function () {
        return core_1.Entity.entityBuilder(TodoEntryV2);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TodoEntryV2` entity type.
     * @returns A `TodoEntryV2` request builder.
     */
    TodoEntryV2.requestBuilder = function () {
        return new TodoEntryV2RequestBuilder_1.TodoEntryV2RequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TodoEntryV2`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TodoEntryV2`.
     */
    TodoEntryV2.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TodoEntryV2);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TodoEntryV2.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TodoEntryV2.
     */
    TodoEntryV2._entityName = 'TodoEntryV2';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TodoEntryV2.
     */
    TodoEntryV2._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TodoEntryV2._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return TodoEntryV2;
}(core_1.Entity));
exports.TodoEntryV2 = TodoEntryV2;
var FormContent_1 = require("./FormContent");
var JobOffer_1 = require("./JobOffer");
var User_1 = require("./User");
var WfRequest_1 = require("./WfRequest");
(function (TodoEntryV2) {
    /**
     * Static representation of the [[categoryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV2.CATEGORY_ID = new core_1.StringField('categoryId', TodoEntryV2, 'Edm.String');
    /**
     * Static representation of the [[categoryLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV2.CATEGORY_LABEL = new core_1.StringField('categoryLabel', TodoEntryV2, 'Edm.String');
    /**
     * Static representation of the [[completedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV2.COMPLETED_DATE_TIME = new core_1.DateField('completedDateTime', TodoEntryV2, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV2.CREATED_DATE = new core_1.DateField('createdDate', TodoEntryV2, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV2.DUE_DATE = new core_1.DateField('dueDate', TodoEntryV2, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV2.FORM_DATA_ID = new core_1.NumberField('formDataId', TodoEntryV2, 'Edm.Int32');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV2.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', TodoEntryV2, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[linkUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV2.LINK_URL = new core_1.StringField('linkUrl', TodoEntryV2, 'Edm.String');
    /**
     * Static representation of the [[mobileLinkUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV2.MOBILE_LINK_URL = new core_1.StringField('mobileLinkUrl', TodoEntryV2, 'Edm.String');
    /**
     * Static representation of the [[routingStepOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV2.ROUTING_STEP_ORDER = new core_1.NumberField('routingStepOrder', TodoEntryV2, 'Edm.Int32');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV2.STATUS = new core_1.NumberField('status', TodoEntryV2, 'Edm.Int32');
    /**
     * Static representation of the [[subjectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV2.SUBJECT_ID = new core_1.StringField('subjectId', TodoEntryV2, 'Edm.String');
    /**
     * Static representation of the [[todoEntryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV2.TODO_ENTRY_ID = new core_1.BigNumberField('todoEntryId', TodoEntryV2, 'Edm.Decimal');
    /**
     * Static representation of the [[todoEntryName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV2.TODO_ENTRY_NAME = new core_1.StringField('todoEntryName', TodoEntryV2, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[formContentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV2.FORM_CONTENT_NAV = new core_1.Link('formContentNav', TodoEntryV2, FormContent_1.FormContent);
    /**
     * Static representation of the one-to-one navigation property [[recruitingJobOfferNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV2.RECRUITING_JOB_OFFER_NAV = new core_1.OneToOneLink('recruitingJobOfferNav', TodoEntryV2, JobOffer_1.JobOffer);
    /**
     * Static representation of the one-to-one navigation property [[userNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV2.USER_NAV = new core_1.OneToOneLink('userNav', TodoEntryV2, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV2.WF_REQUEST_NAV = new core_1.OneToOneLink('wfRequestNav', TodoEntryV2, WfRequest_1.WfRequest);
    /**
     * All fields of the TodoEntryV2 entity.
     */
    TodoEntryV2._allFields = [
        TodoEntryV2.CATEGORY_ID,
        TodoEntryV2.CATEGORY_LABEL,
        TodoEntryV2.COMPLETED_DATE_TIME,
        TodoEntryV2.CREATED_DATE,
        TodoEntryV2.DUE_DATE,
        TodoEntryV2.FORM_DATA_ID,
        TodoEntryV2.LAST_MODIFIED_DATE_TIME,
        TodoEntryV2.LINK_URL,
        TodoEntryV2.MOBILE_LINK_URL,
        TodoEntryV2.ROUTING_STEP_ORDER,
        TodoEntryV2.STATUS,
        TodoEntryV2.SUBJECT_ID,
        TodoEntryV2.TODO_ENTRY_ID,
        TodoEntryV2.TODO_ENTRY_NAME,
        TodoEntryV2.FORM_CONTENT_NAV,
        TodoEntryV2.RECRUITING_JOB_OFFER_NAV,
        TodoEntryV2.USER_NAV,
        TodoEntryV2.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    TodoEntryV2.ALL_FIELDS = new core_1.AllFields('*', TodoEntryV2);
    /**
     * All key fields of the TodoEntryV2 entity.
     */
    TodoEntryV2._keyFields = [TodoEntryV2.TODO_ENTRY_ID];
    /**
     * Mapping of all key field names to the respective static field property TodoEntryV2.
     */
    TodoEntryV2._keys = TodoEntryV2._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TodoEntryV2 = exports.TodoEntryV2 || (exports.TodoEntryV2 = {}));
exports.TodoEntryV2 = TodoEntryV2;
//# sourceMappingURL=TodoEntryV2.js.map