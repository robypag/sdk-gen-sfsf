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
 * @deprecated since v1.6.0. Use [[AccessibilityPreferences.build]] instead.
 */
function createAccessibilityPreferences(json) {
    return AccessibilityPreferences.build(json);
}
exports.createAccessibilityPreferences = createAccessibilityPreferences;
/**
 * AccessibilityPreferencesField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var AccessibilityPreferencesField = /** @class */ (function (_super) {
    __extends(AccessibilityPreferencesField, _super);
    function AccessibilityPreferencesField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[AccessibilityPreferences.blindnessSupport]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blindnessSupport = new core_1.ComplexTypeBooleanPropertyField('blindnessSupport', _this, 'Edm.Boolean');
        /**
         * Representation of the [[AccessibilityPreferences.colorVisionType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.colorVisionType = new core_1.ComplexTypeStringPropertyField('colorVisionType', _this, 'Edm.String');
        /**
         * Representation of the [[AccessibilityPreferences.keyboardOnlyNavigation]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.keyboardOnlyNavigation = new core_1.ComplexTypeBooleanPropertyField('keyboardOnlyNavigation', _this, 'Edm.Boolean');
        /**
         * Representation of the [[AccessibilityPreferences.lowVisionType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lowVisionType = new core_1.ComplexTypeStringPropertyField('lowVisionType', _this, 'Edm.String');
        return _this;
    }
    return AccessibilityPreferencesField;
}(core_1.ComplexTypeField));
exports.AccessibilityPreferencesField = AccessibilityPreferencesField;
var AccessibilityPreferences;
(function (AccessibilityPreferences) {
    function build(json) {
        return core_1.createComplexType(json, {
            blindnessSupport: function (blindnessSupport) { return ({ blindnessSupport: core_1.edmToTs(blindnessSupport, 'Edm.Boolean') }); },
            colorVisionType: function (colorVisionType) { return ({ colorVisionType: core_1.edmToTs(colorVisionType, 'Edm.String') }); },
            keyboardOnlyNavigation: function (keyboardOnlyNavigation) { return ({ keyboardOnlyNavigation: core_1.edmToTs(keyboardOnlyNavigation, 'Edm.Boolean') }); },
            lowVisionType: function (lowVisionType) { return ({ lowVisionType: core_1.edmToTs(lowVisionType, 'Edm.String') }); }
        });
    }
    AccessibilityPreferences.build = build;
})(AccessibilityPreferences = exports.AccessibilityPreferences || (exports.AccessibilityPreferences = {}));
//# sourceMappingURL=AccessibilityPreferences.js.map