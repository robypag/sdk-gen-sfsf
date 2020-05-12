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
 * @deprecated since v1.6.0. Use [[SefEventEntityParam.build]] instead.
 */
function createSefEventEntityParam(json) {
    return SefEventEntityParam.build(json);
}
exports.createSefEventEntityParam = createSefEventEntityParam;
/**
 * SefEventEntityParamField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SefEventEntityParamField = /** @class */ (function (_super) {
    __extends(SefEventEntityParamField, _super);
    function SefEventEntityParamField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[SefEventEntityParam.description]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.description = new core_1.ComplexTypeStringPropertyField('description', _this, 'Edm.String');
        /**
         * Representation of the [[SefEventEntityParam.descriptionMessageKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.descriptionMessageKey = new core_1.ComplexTypeStringPropertyField('descriptionMessageKey', _this, 'Edm.String');
        /**
         * Representation of the [[SefEventEntityParam.hasValueAlways]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.hasValueAlways = new core_1.ComplexTypeBooleanPropertyField('hasValueAlways', _this, 'Edm.Boolean');
        /**
         * Representation of the [[SefEventEntityParam.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new core_1.ComplexTypeStringPropertyField('name', _this, 'Edm.String');
        /**
         * Representation of the [[SefEventEntityParam.type]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.type = new core_1.ComplexTypeStringPropertyField('type', _this, 'Edm.String');
        return _this;
    }
    return SefEventEntityParamField;
}(core_1.ComplexTypeField));
exports.SefEventEntityParamField = SefEventEntityParamField;
var SefEventEntityParam;
(function (SefEventEntityParam) {
    function build(json) {
        return core_1.createComplexType(json, {
            description: function (description) { return ({ description: core_1.edmToTs(description, 'Edm.String') }); },
            descriptionMessageKey: function (descriptionMessageKey) { return ({ descriptionMessageKey: core_1.edmToTs(descriptionMessageKey, 'Edm.String') }); },
            hasValueAlways: function (hasValueAlways) { return ({ hasValueAlways: core_1.edmToTs(hasValueAlways, 'Edm.Boolean') }); },
            name: function (name) { return ({ name: core_1.edmToTs(name, 'Edm.String') }); },
            type: function (type) { return ({ type: core_1.edmToTs(type, 'Edm.String') }); }
        });
    }
    SefEventEntityParam.build = build;
})(SefEventEntityParam = exports.SefEventEntityParam || (exports.SefEventEntityParam = {}));
//# sourceMappingURL=SefEventEntityParam.js.map