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
 * @deprecated since v1.6.0. Use [[ThemeUrl.build]] instead.
 */
function createThemeUrl(json) {
    return ThemeUrl.build(json);
}
exports.createThemeUrl = createThemeUrl;
/**
 * ThemeUrlField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ThemeUrlField = /** @class */ (function (_super) {
    __extends(ThemeUrlField, _super);
    function ThemeUrlField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ThemeUrl.value]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.value = new core_1.ComplexTypeStringPropertyField('value', _this, 'Edm.String');
        return _this;
    }
    return ThemeUrlField;
}(core_1.ComplexTypeField));
exports.ThemeUrlField = ThemeUrlField;
var ThemeUrl;
(function (ThemeUrl) {
    function build(json) {
        return core_1.createComplexType(json, {
            value: function (value) { return ({ value: core_1.edmToTs(value, 'Edm.String') }); }
        });
    }
    ThemeUrl.build = build;
})(ThemeUrl = exports.ThemeUrl || (exports.ThemeUrl = {}));
//# sourceMappingURL=ThemeUrl.js.map