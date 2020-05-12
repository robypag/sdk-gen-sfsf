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
 * @deprecated since v1.6.0. Use [[MapEntry_String_Bool_.build]] instead.
 */
function createMapEntry_String_Bool_(json) {
    return MapEntry_String_Bool_.build(json);
}
exports.createMapEntry_String_Bool_ = createMapEntry_String_Bool_;
/**
 * MapEntry_String_Bool_Field
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var MapEntry_String_Bool_Field = /** @class */ (function (_super) {
    __extends(MapEntry_String_Bool_Field, _super);
    function MapEntry_String_Bool_Field() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[MapEntry_String_Bool_.key]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.key = new core_1.ComplexTypeStringPropertyField('key', _this, 'Edm.String');
        /**
         * Representation of the [[MapEntry_String_Bool_.value]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.value = new core_1.ComplexTypeBooleanPropertyField('value', _this, 'Edm.Boolean');
        return _this;
    }
    return MapEntry_String_Bool_Field;
}(core_1.ComplexTypeField));
exports.MapEntry_String_Bool_Field = MapEntry_String_Bool_Field;
var MapEntry_String_Bool_;
(function (MapEntry_String_Bool_) {
    function build(json) {
        return core_1.createComplexType(json, {
            key: function (key) { return ({ key: core_1.edmToTs(key, 'Edm.String') }); },
            value: function (value) { return ({ value: core_1.edmToTs(value, 'Edm.Boolean') }); }
        });
    }
    MapEntry_String_Bool_.build = build;
})(MapEntry_String_Bool_ = exports.MapEntry_String_Bool_ || (exports.MapEntry_String_Bool_ = {}));
//# sourceMappingURL=MapEntry_String_Bool_.js.map