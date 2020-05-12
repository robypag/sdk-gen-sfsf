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
var MapEntry_String_String_1 = require("./MapEntry_String_String_");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[Localstring.build]] instead.
 */
function createLocalstring(json) {
    return Localstring.build(json);
}
exports.createLocalstring = createLocalstring;
/**
 * LocalstringField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var LocalstringField = /** @class */ (function (_super) {
    __extends(LocalstringField, _super);
    function LocalstringField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[Localstring.labels]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.labels = new MapEntry_String_String_1.MapEntry_String_String_Field('labels', _this);
        /**
         * Representation of the [[Localstring.mimeType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.mimeType = new core_1.ComplexTypeStringPropertyField('mimeType', _this, 'Edm.String');
        return _this;
    }
    return LocalstringField;
}(core_1.ComplexTypeField));
exports.LocalstringField = LocalstringField;
var Localstring;
(function (Localstring) {
    function build(json) {
        return core_1.createComplexType(json, {
            labels: function (labels) { return ({ labels: MapEntry_String_String_1.MapEntry_String_String_.build(labels) }); },
            mimeType: function (mimeType) { return ({ mimeType: core_1.edmToTs(mimeType, 'Edm.String') }); }
        });
    }
    Localstring.build = build;
})(Localstring = exports.Localstring || (exports.Localstring = {}));
//# sourceMappingURL=Localstring.js.map