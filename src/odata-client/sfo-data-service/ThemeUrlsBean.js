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
 * @deprecated since v1.6.0. Use [[ThemeUrlsBean.build]] instead.
 */
function createThemeUrlsBean(json) {
    return ThemeUrlsBean.build(json);
}
exports.createThemeUrlsBean = createThemeUrlsBean;
/**
 * ThemeUrlsBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ThemeUrlsBeanField = /** @class */ (function (_super) {
    __extends(ThemeUrlsBeanField, _super);
    function ThemeUrlsBeanField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ThemeUrlsBean.baseUrl]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseUrl = new core_1.ComplexTypeStringPropertyField('baseUrl', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeUrlsBean.configUrl]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.configUrl = new core_1.ComplexTypeStringPropertyField('configUrl', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeUrlsBean.cssUrl]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cssUrl = new core_1.ComplexTypeStringPropertyField('cssUrl', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeUrlsBean.ui5BaseThemeRootUrl]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ui5BaseThemeRootUrl = new core_1.ComplexTypeStringPropertyField('ui5BaseThemeRootUrl', _this, 'Edm.String');
        return _this;
    }
    return ThemeUrlsBeanField;
}(core_1.ComplexTypeField));
exports.ThemeUrlsBeanField = ThemeUrlsBeanField;
var ThemeUrlsBean;
(function (ThemeUrlsBean) {
    function build(json) {
        return core_1.createComplexType(json, {
            baseUrl: function (baseUrl) { return ({ baseUrl: core_1.edmToTs(baseUrl, 'Edm.String') }); },
            configUrl: function (configUrl) { return ({ configUrl: core_1.edmToTs(configUrl, 'Edm.String') }); },
            cssUrl: function (cssUrl) { return ({ cssUrl: core_1.edmToTs(cssUrl, 'Edm.String') }); },
            ui5BaseThemeRootUrl: function (ui5BaseThemeRootUrl) { return ({ ui5BaseThemeRootUrl: core_1.edmToTs(ui5BaseThemeRootUrl, 'Edm.String') }); }
        });
    }
    ThemeUrlsBean.build = build;
})(ThemeUrlsBean = exports.ThemeUrlsBean || (exports.ThemeUrlsBean = {}));
//# sourceMappingURL=ThemeUrlsBean.js.map