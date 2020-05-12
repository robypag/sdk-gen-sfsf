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
 * @deprecated since v1.6.0. Use [[RuleFieldMappingBean.build]] instead.
 */
function createRuleFieldMappingBean(json) {
    return RuleFieldMappingBean.build(json);
}
exports.createRuleFieldMappingBean = createRuleFieldMappingBean;
/**
 * RuleFieldMappingBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var RuleFieldMappingBeanField = /** @class */ (function (_super) {
    __extends(RuleFieldMappingBeanField, _super);
    function RuleFieldMappingBeanField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[RuleFieldMappingBean.fieldName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fieldName = new core_1.ComplexTypeStringPropertyField('fieldName', _this, 'Edm.String');
        /**
         * Representation of the [[RuleFieldMappingBean.fieldValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fieldValue = new core_1.ComplexTypeStringPropertyField('fieldValue', _this, 'Edm.String');
        return _this;
    }
    return RuleFieldMappingBeanField;
}(core_1.ComplexTypeField));
exports.RuleFieldMappingBeanField = RuleFieldMappingBeanField;
var RuleFieldMappingBean;
(function (RuleFieldMappingBean) {
    function build(json) {
        return core_1.createComplexType(json, {
            fieldName: function (fieldName) { return ({ fieldName: core_1.edmToTs(fieldName, 'Edm.String') }); },
            fieldValue: function (fieldValue) { return ({ fieldValue: core_1.edmToTs(fieldValue, 'Edm.String') }); }
        });
    }
    RuleFieldMappingBean.build = build;
})(RuleFieldMappingBean = exports.RuleFieldMappingBean || (exports.RuleFieldMappingBean = {}));
//# sourceMappingURL=RuleFieldMappingBean.js.map