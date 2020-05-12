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
var Multiplicity_1 = require("./Multiplicity");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[AssociationEnd.build]] instead.
 */
function createAssociationEnd(json) {
    return AssociationEnd.build(json);
}
exports.createAssociationEnd = createAssociationEnd;
/**
 * AssociationEndField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var AssociationEndField = /** @class */ (function (_super) {
    __extends(AssociationEndField, _super);
    function AssociationEndField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[AssociationEnd.multiplicity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.multiplicity = new Multiplicity_1.MultiplicityField('multiplicity', _this);
        /**
         * Representation of the [[AssociationEnd.path]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.path = new core_1.ComplexTypeStringPropertyField('path', _this, 'Edm.String');
        /**
         * Representation of the [[AssociationEnd.role]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.role = new core_1.ComplexTypeStringPropertyField('role', _this, 'Edm.String');
        return _this;
    }
    return AssociationEndField;
}(core_1.ComplexTypeField));
exports.AssociationEndField = AssociationEndField;
var AssociationEnd;
(function (AssociationEnd) {
    function build(json) {
        return core_1.createComplexType(json, {
            multiplicity: function (multiplicity) { return ({ multiplicity: Multiplicity_1.Multiplicity.build(multiplicity) }); },
            path: function (path) { return ({ path: core_1.edmToTs(path, 'Edm.String') }); },
            role: function (role) { return ({ role: core_1.edmToTs(role, 'Edm.String') }); }
        });
    }
    AssociationEnd.build = build;
})(AssociationEnd = exports.AssociationEnd || (exports.AssociationEnd = {}));
//# sourceMappingURL=AssociationEnd.js.map