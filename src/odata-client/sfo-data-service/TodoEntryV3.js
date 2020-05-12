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
var TodoEntryV3RequestBuilder_1 = require("./TodoEntryV3RequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TodoEntryV3" of service "SFOData".
 */
var TodoEntryV3 = /** @class */ (function (_super) {
    __extends(TodoEntryV3, _super);
    function TodoEntryV3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TodoEntryV3`.
     * @returns A builder that constructs instances of entity type `TodoEntryV3`.
     */
    TodoEntryV3.builder = function () {
        return core_1.Entity.entityBuilder(TodoEntryV3);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TodoEntryV3` entity type.
     * @returns A `TodoEntryV3` request builder.
     */
    TodoEntryV3.requestBuilder = function () {
        return new TodoEntryV3RequestBuilder_1.TodoEntryV3RequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TodoEntryV3`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TodoEntryV3`.
     */
    TodoEntryV3.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TodoEntryV3);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TodoEntryV3.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TodoEntryV3.
     */
    TodoEntryV3._entityName = 'TodoEntryV3';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TodoEntryV3.
     */
    TodoEntryV3._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TodoEntryV3._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return TodoEntryV3;
}(core_1.Entity));
exports.TodoEntryV3 = TodoEntryV3;
var TodoCategory_1 = require("./TodoCategory");
var User_1 = require("./User");
(function (TodoEntryV3) {
    /**
     * Static representation of the [[categoryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV3.CATEGORY_ID = new core_1.StringField('categoryId', TodoEntryV3, 'Edm.String');
    /**
     * Static representation of the [[categoryLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV3.CATEGORY_LABEL = new core_1.StringField('categoryLabel', TodoEntryV3, 'Edm.String');
    /**
     * Static representation of the [[completedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV3.COMPLETED_DATE_TIME = new core_1.DateField('completedDateTime', TodoEntryV3, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV3.CREATED_DATE = new core_1.DateField('createdDate', TodoEntryV3, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV3.DESCRIPTION = new core_1.StringField('description', TodoEntryV3, 'Edm.String');
    /**
     * Static representation of the [[displayTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV3.DISPLAY_TITLE = new core_1.StringField('displayTitle', TodoEntryV3, 'Edm.String');
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV3.DUE_DATE = new core_1.DateField('dueDate', TodoEntryV3, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV3.FORM_DATA_ID = new core_1.NumberField('formDataId', TodoEntryV3, 'Edm.Int32');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV3.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', TodoEntryV3, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[linkUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV3.LINK_URL = new core_1.StringField('linkUrl', TodoEntryV3, 'Edm.String');
    /**
     * Static representation of the [[mobileLinkUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV3.MOBILE_LINK_URL = new core_1.StringField('mobileLinkUrl', TodoEntryV3, 'Edm.String');
    /**
     * Static representation of the [[priority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV3.PRIORITY = new core_1.NumberField('priority', TodoEntryV3, 'Edm.Int32');
    /**
     * Static representation of the [[routingStepOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV3.ROUTING_STEP_ORDER = new core_1.NumberField('routingStepOrder', TodoEntryV3, 'Edm.Int32');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV3.STATUS = new core_1.NumberField('status', TodoEntryV3, 'Edm.Int32');
    /**
     * Static representation of the [[subjectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV3.SUBJECT_ID = new core_1.StringField('subjectId', TodoEntryV3, 'Edm.String');
    /**
     * Static representation of the [[todoEntryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV3.TODO_ENTRY_ID = new core_1.BigNumberField('todoEntryId', TodoEntryV3, 'Edm.Decimal');
    /**
     * Static representation of the [[todoEntryName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV3.TODO_ENTRY_NAME = new core_1.StringField('todoEntryName', TodoEntryV3, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[categoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV3.CATEGORY_NAV = new core_1.OneToOneLink('categoryNav', TodoEntryV3, TodoCategory_1.TodoCategory);
    /**
     * Static representation of the one-to-one navigation property [[userNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoEntryV3.USER_NAV = new core_1.OneToOneLink('userNav', TodoEntryV3, User_1.User);
    /**
     * All fields of the TodoEntryV3 entity.
     */
    TodoEntryV3._allFields = [
        TodoEntryV3.CATEGORY_ID,
        TodoEntryV3.CATEGORY_LABEL,
        TodoEntryV3.COMPLETED_DATE_TIME,
        TodoEntryV3.CREATED_DATE,
        TodoEntryV3.DESCRIPTION,
        TodoEntryV3.DISPLAY_TITLE,
        TodoEntryV3.DUE_DATE,
        TodoEntryV3.FORM_DATA_ID,
        TodoEntryV3.LAST_MODIFIED_DATE_TIME,
        TodoEntryV3.LINK_URL,
        TodoEntryV3.MOBILE_LINK_URL,
        TodoEntryV3.PRIORITY,
        TodoEntryV3.ROUTING_STEP_ORDER,
        TodoEntryV3.STATUS,
        TodoEntryV3.SUBJECT_ID,
        TodoEntryV3.TODO_ENTRY_ID,
        TodoEntryV3.TODO_ENTRY_NAME,
        TodoEntryV3.CATEGORY_NAV,
        TodoEntryV3.USER_NAV
    ];
    /**
     * All fields selector.
     */
    TodoEntryV3.ALL_FIELDS = new core_1.AllFields('*', TodoEntryV3);
    /**
     * All key fields of the TodoEntryV3 entity.
     */
    TodoEntryV3._keyFields = [TodoEntryV3.TODO_ENTRY_ID];
    /**
     * Mapping of all key field names to the respective static field property TodoEntryV3.
     */
    TodoEntryV3._keys = TodoEntryV3._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TodoEntryV3 = exports.TodoEntryV3 || (exports.TodoEntryV3 = {}));
exports.TodoEntryV3 = TodoEntryV3;
//# sourceMappingURL=TodoEntryV3.js.map