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
 * @deprecated since v1.6.0. Use [[ChangeDataBean.build]] instead.
 */
function createChangeDataBean(json) {
    return ChangeDataBean.build(json);
}
exports.createChangeDataBean = createChangeDataBean;
/**
 * ChangeDataBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ChangeDataBeanField = /** @class */ (function (_super) {
    __extends(ChangeDataBeanField, _super);
    function ChangeDataBeanField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ChangeDataBean.label]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.label = new core_1.ComplexTypeStringPropertyField('label', _this, 'Edm.String');
        /**
         * Representation of the [[ChangeDataBean.newValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.newValue = new core_1.ComplexTypeStringPropertyField('newValue', _this, 'Edm.String');
        /**
         * Representation of the [[ChangeDataBean.oldValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.oldValue = new core_1.ComplexTypeStringPropertyField('oldValue', _this, 'Edm.String');
        return _this;
    }
    return ChangeDataBeanField;
}(core_1.ComplexTypeField));
exports.ChangeDataBeanField = ChangeDataBeanField;
var ChangeDataBean;
(function (ChangeDataBean) {
    function build(json) {
        return core_1.createComplexType(json, {
            label: function (label) { return ({ label: core_1.edmToTs(label, 'Edm.String') }); },
            newValue: function (newValue) { return ({ newValue: core_1.edmToTs(newValue, 'Edm.String') }); },
            oldValue: function (oldValue) { return ({ oldValue: core_1.edmToTs(oldValue, 'Edm.String') }); }
        });
    }
    ChangeDataBean.build = build;
})(ChangeDataBean = exports.ChangeDataBean || (exports.ChangeDataBean = {}));
//# sourceMappingURL=ChangeDataBean.js.map