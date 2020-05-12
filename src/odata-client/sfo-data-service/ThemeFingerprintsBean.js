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
 * @deprecated since v1.6.0. Use [[ThemeFingerprintsBean.build]] instead.
 */
function createThemeFingerprintsBean(json) {
    return ThemeFingerprintsBean.build(json);
}
exports.createThemeFingerprintsBean = createThemeFingerprintsBean;
/**
 * ThemeFingerprintsBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ThemeFingerprintsBeanField = /** @class */ (function (_super) {
    __extends(ThemeFingerprintsBeanField, _super);
    function ThemeFingerprintsBeanField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ThemeFingerprintsBean.config]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.config = new core_1.ComplexTypeStringPropertyField('config', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeFingerprintsBean.css]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.css = new core_1.ComplexTypeStringPropertyField('css', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeFingerprintsBean.ui5BaseThemeRoot]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ui5BaseThemeRoot = new core_1.ComplexTypeStringPropertyField('ui5BaseThemeRoot', _this, 'Edm.String');
        return _this;
    }
    return ThemeFingerprintsBeanField;
}(core_1.ComplexTypeField));
exports.ThemeFingerprintsBeanField = ThemeFingerprintsBeanField;
var ThemeFingerprintsBean;
(function (ThemeFingerprintsBean) {
    function build(json) {
        return core_1.createComplexType(json, {
            config: function (config) { return ({ config: core_1.edmToTs(config, 'Edm.String') }); },
            css: function (css) { return ({ css: core_1.edmToTs(css, 'Edm.String') }); },
            ui5BaseThemeRoot: function (ui5BaseThemeRoot) { return ({ ui5BaseThemeRoot: core_1.edmToTs(ui5BaseThemeRoot, 'Edm.String') }); }
        });
    }
    ThemeFingerprintsBean.build = build;
})(ThemeFingerprintsBean = exports.ThemeFingerprintsBean || (exports.ThemeFingerprintsBean = {}));
//# sourceMappingURL=ThemeFingerprintsBean.js.map