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
var Navigation_1 = require("./Navigation");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[MapEntry_String_Navigation_.build]] instead.
 */
function createMapEntry_String_Navigation_(json) {
    return MapEntry_String_Navigation_.build(json);
}
exports.createMapEntry_String_Navigation_ = createMapEntry_String_Navigation_;
/**
 * MapEntry_String_Navigation_Field
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var MapEntry_String_Navigation_Field = /** @class */ (function (_super) {
    __extends(MapEntry_String_Navigation_Field, _super);
    function MapEntry_String_Navigation_Field() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[MapEntry_String_Navigation_.key]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.key = new core_1.ComplexTypeStringPropertyField('key', _this, 'Edm.String');
        /**
         * Representation of the [[MapEntry_String_Navigation_.value]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.value = new Navigation_1.NavigationField('value', _this);
        return _this;
    }
    return MapEntry_String_Navigation_Field;
}(core_1.ComplexTypeField));
exports.MapEntry_String_Navigation_Field = MapEntry_String_Navigation_Field;
var MapEntry_String_Navigation_;
(function (MapEntry_String_Navigation_) {
    function build(json) {
        return core_1.createComplexType(json, {
            key: function (key) { return ({ key: core_1.edmToTs(key, 'Edm.String') }); },
            value: function (value) { return ({ value: Navigation_1.Navigation.build(value) }); }
        });
    }
    MapEntry_String_Navigation_.build = build;
})(MapEntry_String_Navigation_ = exports.MapEntry_String_Navigation_ || (exports.MapEntry_String_Navigation_ = {}));
//# sourceMappingURL=MapEntry_String_Navigation_.js.map