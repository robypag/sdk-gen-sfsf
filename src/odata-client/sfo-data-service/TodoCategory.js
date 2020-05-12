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
var TodoCategoryRequestBuilder_1 = require("./TodoCategoryRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TodoCategory" of service "SFOData".
 */
var TodoCategory = /** @class */ (function (_super) {
    __extends(TodoCategory, _super);
    function TodoCategory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TodoCategory`.
     * @returns A builder that constructs instances of entity type `TodoCategory`.
     */
    TodoCategory.builder = function () {
        return core_1.Entity.entityBuilder(TodoCategory);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TodoCategory` entity type.
     * @returns A `TodoCategory` request builder.
     */
    TodoCategory.requestBuilder = function () {
        return new TodoCategoryRequestBuilder_1.TodoCategoryRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TodoCategory`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TodoCategory`.
     */
    TodoCategory.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TodoCategory);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TodoCategory.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TodoCategory.
     */
    TodoCategory._entityName = 'TodoCategory';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TodoCategory.
     */
    TodoCategory._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TodoCategory._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return TodoCategory;
}(core_1.Entity));
exports.TodoCategory = TodoCategory;
var TodoAction_1 = require("./TodoAction");
(function (TodoCategory) {
    /**
     * Static representation of the [[categoryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoCategory.CATEGORY_ID = new core_1.StringField('categoryId', TodoCategory, 'Edm.String');
    /**
     * Static representation of the [[categoryName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoCategory.CATEGORY_NAME = new core_1.StringField('categoryName', TodoCategory, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoCategory.DESCRIPTION = new core_1.StringField('description', TodoCategory, 'Edm.String');
    /**
     * Static representation of the [[domainEntityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoCategory.DOMAIN_ENTITY_NAME = new core_1.StringField('domainEntityName', TodoCategory, 'Edm.String');
    /**
     * Static representation of the [[expandable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoCategory.EXPANDABLE = new core_1.BooleanField('expandable', TodoCategory, 'Edm.Boolean');
    /**
     * Static representation of the [[external]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoCategory.EXTERNAL = new core_1.BooleanField('external', TodoCategory, 'Edm.Boolean');
    /**
     * Static representation of the [[functionalArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoCategory.FUNCTIONAL_AREA = new core_1.StringField('functionalArea', TodoCategory, 'Edm.String');
    /**
     * Static representation of the [[module]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoCategory.MODULE = new core_1.StringField('module', TodoCategory, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[actionsNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TodoCategory.ACTIONS_NAV = new core_1.Link('actionsNav', TodoCategory, TodoAction_1.TodoAction);
    /**
     * All fields of the TodoCategory entity.
     */
    TodoCategory._allFields = [
        TodoCategory.CATEGORY_ID,
        TodoCategory.CATEGORY_NAME,
        TodoCategory.DESCRIPTION,
        TodoCategory.DOMAIN_ENTITY_NAME,
        TodoCategory.EXPANDABLE,
        TodoCategory.EXTERNAL,
        TodoCategory.FUNCTIONAL_AREA,
        TodoCategory.MODULE,
        TodoCategory.ACTIONS_NAV
    ];
    /**
     * All fields selector.
     */
    TodoCategory.ALL_FIELDS = new core_1.AllFields('*', TodoCategory);
    /**
     * All key fields of the TodoCategory entity.
     */
    TodoCategory._keyFields = [TodoCategory.CATEGORY_ID];
    /**
     * Mapping of all key field names to the respective static field property TodoCategory.
     */
    TodoCategory._keys = TodoCategory._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TodoCategory = exports.TodoCategory || (exports.TodoCategory = {}));
exports.TodoCategory = TodoCategory;
//# sourceMappingURL=TodoCategory.js.map