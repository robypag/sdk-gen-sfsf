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
 * @deprecated since v1.6.0. Use [[ThemeLandingPageConfig.build]] instead.
 */
function createThemeLandingPageConfig(json) {
    return ThemeLandingPageConfig.build(json);
}
exports.createThemeLandingPageConfig = createThemeLandingPageConfig;
/**
 * ThemeLandingPageConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ThemeLandingPageConfigField = /** @class */ (function (_super) {
    __extends(ThemeLandingPageConfigField, _super);
    function ThemeLandingPageConfigField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ThemeLandingPageConfig.themeId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.themeId = new core_1.ComplexTypeStringPropertyField('themeId', _this, 'Edm.String');
        return _this;
    }
    return ThemeLandingPageConfigField;
}(core_1.ComplexTypeField));
exports.ThemeLandingPageConfigField = ThemeLandingPageConfigField;
var ThemeLandingPageConfig;
(function (ThemeLandingPageConfig) {
    function build(json) {
        return core_1.createComplexType(json, {
            themeId: function (themeId) { return ({ themeId: core_1.edmToTs(themeId, 'Edm.String') }); }
        });
    }
    ThemeLandingPageConfig.build = build;
})(ThemeLandingPageConfig = exports.ThemeLandingPageConfig || (exports.ThemeLandingPageConfig = {}));
//# sourceMappingURL=ThemeLandingPageConfig.js.map