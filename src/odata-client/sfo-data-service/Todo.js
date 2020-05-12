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
var TodoRequestBuilder_1 = require("./TodoRequestBuilder");
var ToDoBean_1 = require("./ToDoBean");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Todo" of service "SFOData".
 */
var Todo = /** @class */ (function (_super) {
    __extends(Todo, _super);
    function Todo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Todo`.
     * @returns A builder that constructs instances of entity type `Todo`.
     */
    Todo.builder = function () {
        return core_1.Entity.entityBuilder(Todo);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Todo` entity type.
     * @returns A `Todo` request builder.
     */
    Todo.requestBuilder = function () {
        return new TodoRequestBuilder_1.TodoRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Todo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Todo`.
     */
    Todo.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Todo);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Todo.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Todo.
     */
    Todo._entityName = 'Todo';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Todo.
     */
    Todo._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Todo._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Todo;
}(core_1.Entity));
exports.Todo = Todo;
(function (Todo) {
    /**
     * Static representation of the [[categoryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Todo.CATEGORY_ID = new core_1.StringField('categoryId', Todo, 'Edm.String');
    /**
     * Static representation of the [[categoryLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Todo.CATEGORY_LABEL = new core_1.StringField('categoryLabel', Todo, 'Edm.String');
    /**
     * Static representation of the [[displayOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Todo.DISPLAY_ORDER = new core_1.NumberField('displayOrder', Todo, 'Edm.Int32');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Todo.STATUS = new core_1.NumberField('status', Todo, 'Edm.Int32');
    /**
     * Static representation of the [[todos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Todo.TODOS = new ToDoBean_1.ToDoBeanField('todos', Todo);
    /**
     * All fields of the Todo entity.
     */
    Todo._allFields = [
        Todo.CATEGORY_ID,
        Todo.CATEGORY_LABEL,
        Todo.DISPLAY_ORDER,
        Todo.STATUS,
        Todo.TODOS
    ];
    /**
     * All fields selector.
     */
    Todo.ALL_FIELDS = new core_1.AllFields('*', Todo);
    /**
     * All key fields of the Todo entity.
     */
    Todo._keyFields = [Todo.CATEGORY_ID];
    /**
     * Mapping of all key field names to the respective static field property Todo.
     */
    Todo._keys = Todo._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Todo = exports.Todo || (exports.Todo = {}));
exports.Todo = Todo;
//# sourceMappingURL=Todo.js.map