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
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[ToDoEntry.build]] instead.
 */
function createToDoEntry(json) {
    return ToDoEntry.build(json);
}
exports.createToDoEntry = createToDoEntry;
/**
 * ToDoEntryField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ToDoEntryField = /** @class */ (function (_super) {
    __extends(ToDoEntryField, _super);
    function ToDoEntryField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ToDoEntry.completedDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.completedDate = new core_1.ComplexTypeDatePropertyField('completedDate', _this, 'Edm.DateTime');
        /**
         * Representation of the [[ToDoEntry.formDataId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.formDataId = new core_1.ComplexTypeBigNumberPropertyField('formDataId', _this, 'Edm.Int64');
        /**
         * Representation of the [[ToDoEntry.status]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.status = new core_1.ComplexTypeNumberPropertyField('status', _this, 'Edm.Int32');
        /**
         * Representation of the [[ToDoEntry.statusLabel]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.statusLabel = new core_1.ComplexTypeStringPropertyField('statusLabel', _this, 'Edm.String');
        /**
         * Representation of the [[ToDoEntry.subjectFullName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subjectFullName = new core_1.ComplexTypeStringPropertyField('subjectFullName', _this, 'Edm.String');
        /**
         * Representation of the [[ToDoEntry.subjectId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subjectId = new core_1.ComplexTypeStringPropertyField('subjectId', _this, 'Edm.String');
        /**
         * Representation of the [[ToDoEntry.url]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.url = new core_1.ComplexTypeStringPropertyField('url', _this, 'Edm.String');
        return _this;
    }
    return ToDoEntryField;
}(core_1.ComplexTypeField));
exports.ToDoEntryField = ToDoEntryField;
var ToDoEntry;
(function (ToDoEntry) {
    function build(json) {
        return core_1.createComplexType(json, {
            completedDate: function (completedDate) { return ({ completedDate: core_1.edmToTs(completedDate, 'Edm.DateTime') }); },
            formDataId: function (formDataId) { return ({ formDataId: core_1.edmToTs(formDataId, 'Edm.Int64') }); },
            status: function (status) { return ({ status: core_1.edmToTs(status, 'Edm.Int32') }); },
            statusLabel: function (statusLabel) { return ({ statusLabel: core_1.edmToTs(statusLabel, 'Edm.String') }); },
            subjectFullName: function (subjectFullName) { return ({ subjectFullName: core_1.edmToTs(subjectFullName, 'Edm.String') }); },
            subjectId: function (subjectId) { return ({ subjectId: core_1.edmToTs(subjectId, 'Edm.String') }); },
            url: function (url) { return ({ url: core_1.edmToTs(url, 'Edm.String') }); }
        });
    }
    ToDoEntry.build = build;
})(ToDoEntry = exports.ToDoEntry || (exports.ToDoEntry = {}));
//# sourceMappingURL=ToDoEntry.js.map