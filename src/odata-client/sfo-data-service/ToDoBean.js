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
Object.defineProperty(exports, "__esModule", { value: true });
var ToDoEntry_1 = require("./ToDoEntry");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[ToDoBean.build]] instead.
 */
function createToDoBean(json) {
    return ToDoBean.build(json);
}
exports.createToDoBean = createToDoBean;
/**
 * ToDoBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ToDoBeanField = /** @class */ (function (_super) {
    __extends(ToDoBeanField, _super);
    function ToDoBeanField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ToDoBean.categoryId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.categoryId = new core_1.ComplexTypeStringPropertyField('categoryId', _this, 'Edm.String');
        /**
         * Representation of the [[ToDoBean.completedDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.completedDate = new core_1.ComplexTypeDatePropertyField('completedDate', _this, 'Edm.DateTime');
        /**
         * Representation of the [[ToDoBean.dueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dueDate = new core_1.ComplexTypeDatePropertyField('dueDate', _this, 'Edm.DateTime');
        /**
         * Representation of the [[ToDoBean.dueDateOffSet]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dueDateOffSet = new core_1.ComplexTypeNumberPropertyField('dueDateOffSet', _this, 'Edm.Int32');
        /**
         * Representation of the [[ToDoBean.entries]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.entries = new ToDoEntry_1.ToDoEntryField('entries', _this);
        /**
         * Representation of the [[ToDoBean.entryId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.entryId = new core_1.ComplexTypeNumberPropertyField('entryId', _this, 'Edm.Int32');
        /**
         * Representation of the [[ToDoBean.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new core_1.ComplexTypeStringPropertyField('name', _this, 'Edm.String');
        /**
         * Representation of the [[ToDoBean.status]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.status = new core_1.ComplexTypeNumberPropertyField('status', _this, 'Edm.Int32');
        /**
         * Representation of the [[ToDoBean.statusLabel]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.statusLabel = new core_1.ComplexTypeStringPropertyField('statusLabel', _this, 'Edm.String');
        /**
         * Representation of the [[ToDoBean.stepDescAlt]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stepDescAlt = new core_1.ComplexTypeStringPropertyField('stepDescAlt', _this, 'Edm.String');
        /**
         * Representation of the [[ToDoBean.todoItemId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.todoItemId = new core_1.ComplexTypeStringPropertyField('todoItemId', _this, 'Edm.String');
        /**
         * Representation of the [[ToDoBean.url]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.url = new core_1.ComplexTypeStringPropertyField('url', _this, 'Edm.String');
        return _this;
    }
    return ToDoBeanField;
}(core_1.ComplexTypeField));
exports.ToDoBeanField = ToDoBeanField;
var ToDoBean;
(function (ToDoBean) {
    function build(json) {
        return core_1.createComplexType(json, {
            categoryId: function (categoryId) { return ({ categoryId: core_1.edmToTs(categoryId, 'Edm.String') }); },
            completedDate: function (completedDate) { return ({ completedDate: core_1.edmToTs(completedDate, 'Edm.DateTime') }); },
            dueDate: function (dueDate) { return ({ dueDate: core_1.edmToTs(dueDate, 'Edm.DateTime') }); },
            dueDateOffSet: function (dueDateOffSet) { return ({ dueDateOffSet: core_1.edmToTs(dueDateOffSet, 'Edm.Int32') }); },
            entries: function (entries) { return ({ entries: ToDoEntry_1.ToDoEntry.build(entries) }); },
            entryId: function (entryId) { return ({ entryId: core_1.edmToTs(entryId, 'Edm.Int32') }); },
            name: function (name) { return ({ name: core_1.edmToTs(name, 'Edm.String') }); },
            status: function (status) { return ({ status: core_1.edmToTs(status, 'Edm.Int32') }); },
            statusLabel: function (statusLabel) { return ({ statusLabel: core_1.edmToTs(statusLabel, 'Edm.String') }); },
            stepDescAlt: function (stepDescAlt) { return ({ stepDescAlt: core_1.edmToTs(stepDescAlt, 'Edm.String') }); },
            todoItemId: function (todoItemId) { return ({ todoItemId: core_1.edmToTs(todoItemId, 'Edm.String') }); },
            url: function (url) { return ({ url: core_1.edmToTs(url, 'Edm.String') }); }
        });
    }
    ToDoBean.build = build;
})(ToDoBean = exports.ToDoBean || (exports.ToDoBean = {}));
//# sourceMappingURL=ToDoBean.js.map