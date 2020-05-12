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
var EssMssWorkflowAttributeBean_1 = require("./EssMssWorkflowAttributeBean");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[EssMssWorkflowSubAttributeBean.build]] instead.
 */
function createEssMssWorkflowSubAttributeBean(json) {
    return EssMssWorkflowSubAttributeBean.build(json);
}
exports.createEssMssWorkflowSubAttributeBean = createEssMssWorkflowSubAttributeBean;
/**
 * EssMssWorkflowSubAttributeBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var EssMssWorkflowSubAttributeBeanField = /** @class */ (function (_super) {
    __extends(EssMssWorkflowSubAttributeBeanField, _super);
    function EssMssWorkflowSubAttributeBeanField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[EssMssWorkflowSubAttributeBean.changeSet]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.changeSet = new EssMssWorkflowAttributeBean_1.EssMssWorkflowAttributeBeanField('changeSet', _this);
        /**
         * Representation of the [[EssMssWorkflowSubAttributeBean.changeSetGroupSubTitle]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.changeSetGroupSubTitle = new core_1.ComplexTypeStringPropertyField('changeSetGroupSubTitle', _this, 'Edm.String');
        return _this;
    }
    return EssMssWorkflowSubAttributeBeanField;
}(core_1.ComplexTypeField));
exports.EssMssWorkflowSubAttributeBeanField = EssMssWorkflowSubAttributeBeanField;
var EssMssWorkflowSubAttributeBean;
(function (EssMssWorkflowSubAttributeBean) {
    function build(json) {
        return core_1.createComplexType(json, {
            changeSet: function (changeSet) { return ({ changeSet: EssMssWorkflowAttributeBean_1.EssMssWorkflowAttributeBean.build(changeSet) }); },
            changeSetGroupSubTitle: function (changeSetGroupSubTitle) { return ({ changeSetGroupSubTitle: core_1.edmToTs(changeSetGroupSubTitle, 'Edm.String') }); }
        });
    }
    EssMssWorkflowSubAttributeBean.build = build;
})(EssMssWorkflowSubAttributeBean = exports.EssMssWorkflowSubAttributeBean || (exports.EssMssWorkflowSubAttributeBean = {}));
//# sourceMappingURL=EssMssWorkflowSubAttributeBean.js.map