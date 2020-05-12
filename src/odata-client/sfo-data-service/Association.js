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
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var AssociationEnd_1 = require("./AssociationEnd");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[Association.build]] instead.
 */
function createAssociation(json) {
    return Association.build(json);
}
exports.createAssociation = createAssociation;
/**
 * AssociationField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var AssociationField = /** @class */ (function (_super) {
    __extends(AssociationField, _super);
    function AssociationField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[Association.deletable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.deletable = new core_1.ComplexTypeBooleanPropertyField('deletable', _this, 'Edm.Boolean');
        /**
         * Representation of the [[Association.end1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.end1 = new AssociationEnd_1.AssociationEndField('end1', _this);
        /**
         * Representation of the [[Association.end2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.end2 = new AssociationEnd_1.AssociationEndField('end2', _this);
        /**
         * Representation of the [[Association.insertable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.insertable = new core_1.ComplexTypeBooleanPropertyField('insertable', _this, 'Edm.Boolean');
        /**
         * Representation of the [[Association.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new core_1.ComplexTypeStringPropertyField('name', _this, 'Edm.String');
        /**
         * Representation of the [[Association.path]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.path = new core_1.ComplexTypeStringPropertyField('path', _this, 'Edm.String');
        /**
         * Representation of the [[Association.updatable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.updatable = new core_1.ComplexTypeBooleanPropertyField('updatable', _this, 'Edm.Boolean');
        /**
         * Representation of the [[Association.upsertable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.upsertable = new core_1.ComplexTypeBooleanPropertyField('upsertable', _this, 'Edm.Boolean');
        return _this;
    }
    return AssociationField;
}(core_1.ComplexTypeField));
exports.AssociationField = AssociationField;
var Association;
(function (Association) {
    function build(json) {
        return core_1.createComplexType(json, {
            deletable: function (deletable) { return ({ deletable: core_1.edmToTs(deletable, 'Edm.Boolean') }); },
            end1: function (end1) { return ({ end1: AssociationEnd_1.AssociationEnd.build(end1) }); },
            end2: function (end2) { return ({ end2: AssociationEnd_1.AssociationEnd.build(end2) }); },
            insertable: function (insertable) { return ({ insertable: core_1.edmToTs(insertable, 'Edm.Boolean') }); },
            name: function (name) { return ({ name: core_1.edmToTs(name, 'Edm.String') }); },
            path: function (path) { return ({ path: core_1.edmToTs(path, 'Edm.String') }); },
            updatable: function (updatable) { return ({ updatable: core_1.edmToTs(updatable, 'Edm.Boolean') }); },
            upsertable: function (upsertable) { return ({ upsertable: core_1.edmToTs(upsertable, 'Edm.Boolean') }); }
        });
    }
    Association.build = build;
})(Association = exports.Association || (exports.Association = {}));
//# sourceMappingURL=Association.js.map