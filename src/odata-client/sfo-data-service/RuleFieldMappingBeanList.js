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
var RuleFieldMappingBean_1 = require("./RuleFieldMappingBean");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[RuleFieldMappingBeanList.build]] instead.
 */
function createRuleFieldMappingBeanList(json) {
    return RuleFieldMappingBeanList.build(json);
}
exports.createRuleFieldMappingBeanList = createRuleFieldMappingBeanList;
/**
 * RuleFieldMappingBeanListField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var RuleFieldMappingBeanListField = /** @class */ (function (_super) {
    __extends(RuleFieldMappingBeanListField, _super);
    function RuleFieldMappingBeanListField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[RuleFieldMappingBeanList.ruleFieldMappings]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ruleFieldMappings = new RuleFieldMappingBean_1.RuleFieldMappingBeanField('ruleFieldMappings', _this);
        return _this;
    }
    return RuleFieldMappingBeanListField;
}(core_1.ComplexTypeField));
exports.RuleFieldMappingBeanListField = RuleFieldMappingBeanListField;
var RuleFieldMappingBeanList;
(function (RuleFieldMappingBeanList) {
    function build(json) {
        return core_1.createComplexType(json, {
            ruleFieldMappings: function (ruleFieldMappings) { return ({ ruleFieldMappings: RuleFieldMappingBean_1.RuleFieldMappingBean.build(ruleFieldMappings) }); }
        });
    }
    RuleFieldMappingBeanList.build = build;
})(RuleFieldMappingBeanList = exports.RuleFieldMappingBeanList || (exports.RuleFieldMappingBeanList = {}));
//# sourceMappingURL=RuleFieldMappingBeanList.js.map