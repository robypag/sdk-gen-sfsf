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
var ThemeUrl_1 = require("./ThemeUrl");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[ThemeLoginLogoConfig.build]] instead.
 */
function createThemeLoginLogoConfig(json) {
    return ThemeLoginLogoConfig.build(json);
}
exports.createThemeLoginLogoConfig = createThemeLoginLogoConfig;
/**
 * ThemeLoginLogoConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ThemeLoginLogoConfigField = /** @class */ (function (_super) {
    __extends(ThemeLoginLogoConfigField, _super);
    function ThemeLoginLogoConfigField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ThemeLoginLogoConfig.option]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.option = new core_1.ComplexTypeStringPropertyField('option', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeLoginLogoConfig.systemType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.systemType = new core_1.ComplexTypeStringPropertyField('systemType', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeLoginLogoConfig.url]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.url = new ThemeUrl_1.ThemeUrlField('url', _this);
        return _this;
    }
    return ThemeLoginLogoConfigField;
}(core_1.ComplexTypeField));
exports.ThemeLoginLogoConfigField = ThemeLoginLogoConfigField;
var ThemeLoginLogoConfig;
(function (ThemeLoginLogoConfig) {
    function build(json) {
        return core_1.createComplexType(json, {
            option: function (option) { return ({ option: core_1.edmToTs(option, 'Edm.String') }); },
            systemType: function (systemType) { return ({ systemType: core_1.edmToTs(systemType, 'Edm.String') }); },
            url: function (url) { return ({ url: ThemeUrl_1.ThemeUrl.build(url) }); }
        });
    }
    ThemeLoginLogoConfig.build = build;
})(ThemeLoginLogoConfig = exports.ThemeLoginLogoConfig || (exports.ThemeLoginLogoConfig = {}));
//# sourceMappingURL=ThemeLoginLogoConfig.js.map