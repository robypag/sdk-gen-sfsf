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
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[ThemeTableConfig.build]] instead.
 */
function createThemeTableConfig(json) {
    return ThemeTableConfig.build(json);
}
exports.createThemeTableConfig = createThemeTableConfig;
/**
 * ThemeTableConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ThemeTableConfigField = /** @class */ (function (_super) {
    __extends(ThemeTableConfigField, _super);
    function ThemeTableConfigField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ThemeTableConfig.altRowBgColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.altRowBgColor = new ThemeColor_1.ThemeColorField('altRowBgColor', _this);
        /**
         * Representation of the [[ThemeTableConfig.disabledRowCellBgColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.disabledRowCellBgColor = new ThemeColor_1.ThemeColorField('disabledRowCellBgColor', _this);
        /**
         * Representation of the [[ThemeTableConfig.headerBgColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.headerBgColor = new ThemeColor_1.ThemeColorField('headerBgColor', _this);
        /**
         * Representation of the [[ThemeTableConfig.headerTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.headerTextColor = new ThemeColor_1.ThemeColorField('headerTextColor', _this);
        /**
         * Representation of the [[ThemeTableConfig.hoverRowBgColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.hoverRowBgColor = new ThemeColor_1.ThemeColorField('hoverRowBgColor', _this);
        /**
         * Representation of the [[ThemeTableConfig.linkColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.linkColor = new ThemeColor_1.ThemeColorField('linkColor', _this);
        /**
         * Representation of the [[ThemeTableConfig.rowBgColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowBgColor = new ThemeColor_1.ThemeColorField('rowBgColor', _this);
        /**
         * Representation of the [[ThemeTableConfig.selectedRowBgColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.selectedRowBgColor = new ThemeColor_1.ThemeColorField('selectedRowBgColor', _this);
        /**
         * Representation of the [[ThemeTableConfig.selectedSortedRowBgColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.selectedSortedRowBgColor = new ThemeColor_1.ThemeColorField('selectedSortedRowBgColor', _this);
        /**
         * Representation of the [[ThemeTableConfig.sortCellBgColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sortCellBgColor = new ThemeColor_1.ThemeColorField('sortCellBgColor', _this);
        /**
         * Representation of the [[ThemeTableConfig.textColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.textColor = new ThemeColor_1.ThemeColorField('textColor', _this);
        return _this;
    }
    return ThemeTableConfigField;
}(core_1.ComplexTypeField));
exports.ThemeTableConfigField = ThemeTableConfigField;
var ThemeTableConfig;
(function (ThemeTableConfig) {
    function build(json) {
        return core_1.createComplexType(json, {
            altRowBgColor: function (altRowBgColor) { return ({ altRowBgColor: ThemeColor_1.ThemeColor.build(altRowBgColor) }); },
            disabledRowCellBgColor: function (disabledRowCellBgColor) { return ({ disabledRowCellBgColor: ThemeColor_1.ThemeColor.build(disabledRowCellBgColor) }); },
            headerBgColor: function (headerBgColor) { return ({ headerBgColor: ThemeColor_1.ThemeColor.build(headerBgColor) }); },
            headerTextColor: function (headerTextColor) { return ({ headerTextColor: ThemeColor_1.ThemeColor.build(headerTextColor) }); },
            hoverRowBgColor: function (hoverRowBgColor) { return ({ hoverRowBgColor: ThemeColor_1.ThemeColor.build(hoverRowBgColor) }); },
            linkColor: function (linkColor) { return ({ linkColor: ThemeColor_1.ThemeColor.build(linkColor) }); },
            rowBgColor: function (rowBgColor) { return ({ rowBgColor: ThemeColor_1.ThemeColor.build(rowBgColor) }); },
            selectedRowBgColor: function (selectedRowBgColor) { return ({ selectedRowBgColor: ThemeColor_1.ThemeColor.build(selectedRowBgColor) }); },
            selectedSortedRowBgColor: function (selectedSortedRowBgColor) { return ({ selectedSortedRowBgColor: ThemeColor_1.ThemeColor.build(selectedSortedRowBgColor) }); },
            sortCellBgColor: function (sortCellBgColor) { return ({ sortCellBgColor: ThemeColor_1.ThemeColor.build(sortCellBgColor) }); },
            textColor: function (textColor) { return ({ textColor: ThemeColor_1.ThemeColor.build(textColor) }); }
        });
    }
    ThemeTableConfig.build = build;
})(ThemeTableConfig = exports.ThemeTableConfig || (exports.ThemeTableConfig = {}));
//# sourceMappingURL=ThemeTableConfig.js.map