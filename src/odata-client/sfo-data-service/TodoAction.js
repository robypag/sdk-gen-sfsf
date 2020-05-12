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
var TodoActionRequestBuilder_1 = require("./TodoActionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TodoAction" of service "SFOData".
 */
var TodoAction = /** @class */ (function (_super) {
    __extends(TodoAction, _super);
    function TodoAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TodoAction`.
     * @returns A builder that constructs instances of entity type `TodoAction`.
     */
    TodoAction.builder = function () {
        return core_1.Entity.entityBuilder(TodoAction);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TodoAction` entity type.
     * @returns A `TodoAction` request builder.
     */
    TodoAction.requestBuilder = function () {
        return new TodoActionRequestBuilder_1.TodoActionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TodoAction`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TodoAction`.
     */
    TodoAction.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TodoAction);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TodoAction.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TodoAction.
     */
    TodoAction._entityName = 'TodoAction';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TodoAction.
     */
    TodoAction._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TodoAction._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return TodoAction;
}(core_1.Entity));
exports.TodoAction = TodoAction;
var TodoCategory_1 = require("./TodoCategory");
(function (TodoAction) {
    /**
     * Static representation of the [[actionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoAction.ACTION_ID = new core_1.NumberField('actionId', TodoAction, 'Edm.Int32');
    /**
     * Static representation of the [[actionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoAction.ACTION_NAME = new core_1.StringField('actionName', TodoAction, 'Edm.String');
    /**
     * Static representation of the [[categoryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoAction.CATEGORY_ID = new core_1.StringField('categoryId', TodoAction, 'Edm.String');
    /**
     * Static representation of the [[functionImportName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoAction.FUNCTION_IMPORT_NAME = new core_1.StringField('functionImportName', TodoAction, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[categoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoAction.CATEGORY_NAV = new core_1.OneToOneLink('categoryNav', TodoAction, TodoCategory_1.TodoCategory);
    /**
     * All fields of the TodoAction entity.
     */
    TodoAction._allFields = [
        TodoAction.ACTION_ID,
        TodoAction.ACTION_NAME,
        TodoAction.CATEGORY_ID,
        TodoAction.FUNCTION_IMPORT_NAME,
        TodoAction.CATEGORY_NAV
    ];
    /**
     * All fields selector.
     */
    TodoAction.ALL_FIELDS = new core_1.AllFields('*', TodoAction);
    /**
     * All key fields of the TodoAction entity.
     */
    TodoAction._keyFields = [TodoAction.ACTION_ID, TodoAction.CATEGORY_ID];
    /**
     * Mapping of all key field names to the respective static field property TodoAction.
     */
    TodoAction._keys = TodoAction._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TodoAction = exports.TodoAction || (exports.TodoAction = {}));
exports.TodoAction = TodoAction;
//# sourceMappingURL=TodoAction.js.map