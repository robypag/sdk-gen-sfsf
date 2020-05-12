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
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[Type.build]] instead.
 */
function createType(json) {
    return Type.build(json);
}
exports.createType = createType;
/**
 * TypeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TypeField = /** @class */ (function (_super) {
    __extends(TypeField, _super);
    function TypeField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[Type.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new core_1.ComplexTypeStringPropertyField('name', _this, 'Edm.String');
        /**
         * Representation of the [[Type.path]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.path = new core_1.ComplexTypeStringPropertyField('path', _this, 'Edm.String');
        return _this;
    }
    return TypeField;
}(core_1.ComplexTypeField));
exports.TypeField = TypeField;
var Type;
(function (Type) {
    function build(json) {
        return core_1.createComplexType(json, {
            name: function (name) { return ({ name: core_1.edmToTs(name, 'Edm.String') }); },
            path: function (path) { return ({ path: core_1.edmToTs(path, 'Edm.String') }); }
        });
    }
    Type.build = build;
})(Type = exports.Type || (exports.Type = {}));
//# sourceMappingURL=Type.js.map