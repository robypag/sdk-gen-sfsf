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
var ThemeColor_1 = require("./ThemeColor");
var ThemeLoginBackgroundConfig_1 = require("./ThemeLoginBackgroundConfig");
var ThemeLoginLogoConfig_1 = require("./ThemeLoginLogoConfig");
var ThemeButtonConfig_1 = require("./ThemeButtonConfig");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[ThemeLoginConfig.build]] instead.
 */
function createThemeLoginConfig(json) {
    return ThemeLoginConfig.build(json);
}
exports.createThemeLoginConfig = createThemeLoginConfig;
/**
 * ThemeLoginConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ThemeLoginConfigField = /** @class */ (function (_super) {
    __extends(ThemeLoginConfigField, _super);
    function ThemeLoginConfigField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ThemeLoginConfig.autofillBgColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.autofillBgColor = new ThemeColor_1.ThemeColorField('autofillBgColor', _this);
        /**
         * Representation of the [[ThemeLoginConfig.background]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.background = new ThemeLoginBackgroundConfig_1.ThemeLoginBackgroundConfigField('background', _this);
        /**
         * Representation of the [[ThemeLoginConfig.footerScheme]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.footerScheme = new core_1.ComplexTypeStringPropertyField('footerScheme', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeLoginConfig.logo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.logo = new ThemeLoginLogoConfig_1.ThemeLoginLogoConfigField('logo', _this);
        /**
         * Representation of the [[ThemeLoginConfig.primaryButton]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.primaryButton = new ThemeButtonConfig_1.ThemeButtonConfigField('primaryButton', _this);
        /**
         * Representation of the [[ThemeLoginConfig.primaryButtonOption]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.primaryButtonOption = new core_1.ComplexTypeStringPropertyField('primaryButtonOption', _this, 'Edm.String');
        return _this;
    }
    return ThemeLoginConfigField;
}(core_1.ComplexTypeField));
exports.ThemeLoginConfigField = ThemeLoginConfigField;
var ThemeLoginConfig;
(function (ThemeLoginConfig) {
    function build(json) {
        return core_1.createComplexType(json, {
            autofillBgColor: function (autofillBgColor) { return ({ autofillBgColor: ThemeColor_1.ThemeColor.build(autofillBgColor) }); },
            background: function (background) { return ({ background: ThemeLoginBackgroundConfig_1.ThemeLoginBackgroundConfig.build(background) }); },
            footerScheme: function (footerScheme) { return ({ footerScheme: core_1.edmToTs(footerScheme, 'Edm.String') }); },
            logo: function (logo) { return ({ logo: ThemeLoginLogoConfig_1.ThemeLoginLogoConfig.build(logo) }); },
            primaryButton: function (primaryButton) { return ({ primaryButton: ThemeButtonConfig_1.ThemeButtonConfig.build(primaryButton) }); },
            primaryButtonOption: function (primaryButtonOption) { return ({ primaryButtonOption: core_1.edmToTs(primaryButtonOption, 'Edm.String') }); }
        });
    }
    ThemeLoginConfig.build = build;
})(ThemeLoginConfig = exports.ThemeLoginConfig || (exports.ThemeLoginConfig = {}));
//# sourceMappingURL=ThemeLoginConfig.js.map