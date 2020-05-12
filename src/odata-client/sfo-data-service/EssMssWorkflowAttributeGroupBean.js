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
var PendDataGroupBean_1 = require("./PendDataGroupBean");
var EssMssWorkflowSubAttributeBean_1 = require("./EssMssWorkflowSubAttributeBean");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[EssMssWorkflowAttributeGroupBean.build]] instead.
 */
function createEssMssWorkflowAttributeGroupBean(json) {
    return EssMssWorkflowAttributeGroupBean.build(json);
}
exports.createEssMssWorkflowAttributeGroupBean = createEssMssWorkflowAttributeGroupBean;
/**
 * EssMssWorkflowAttributeGroupBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var EssMssWorkflowAttributeGroupBeanField = /** @class */ (function (_super) {
    __extends(EssMssWorkflowAttributeGroupBeanField, _super);
    function EssMssWorkflowAttributeGroupBeanField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[EssMssWorkflowAttributeGroupBean.changeSet]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.changeSet = new EssMssWorkflowAttributeBean_1.EssMssWorkflowAttributeBeanField('changeSet', _this);
        /**
         * Representation of the [[EssMssWorkflowAttributeGroupBean.groups]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.groups = new PendDataGroupBean_1.PendDataGroupBeanField('groups', _this);
        /**
         * Representation of the [[EssMssWorkflowAttributeGroupBean.subChangeSetGroups]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subChangeSetGroups = new EssMssWorkflowSubAttributeBean_1.EssMssWorkflowSubAttributeBeanField('subChangeSetGroups', _this);
        /**
         * Representation of the [[EssMssWorkflowAttributeGroupBean.title]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.title = new core_1.ComplexTypeStringPropertyField('title', _this, 'Edm.String');
        return _this;
    }
    return EssMssWorkflowAttributeGroupBeanField;
}(core_1.ComplexTypeField));
exports.EssMssWorkflowAttributeGroupBeanField = EssMssWorkflowAttributeGroupBeanField;
var EssMssWorkflowAttributeGroupBean;
(function (EssMssWorkflowAttributeGroupBean) {
    function build(json) {
        return core_1.createComplexType(json, {
            changeSet: function (changeSet) { return ({ changeSet: EssMssWorkflowAttributeBean_1.EssMssWorkflowAttributeBean.build(changeSet) }); },
            groups: function (groups) { return ({ groups: PendDataGroupBean_1.PendDataGroupBean.build(groups) }); },
            subChangeSetGroups: function (subChangeSetGroups) { return ({ subChangeSetGroups: EssMssWorkflowSubAttributeBean_1.EssMssWorkflowSubAttributeBean.build(subChangeSetGroups) }); },
            title: function (title) { return ({ title: core_1.edmToTs(title, 'Edm.String') }); }
        });
    }
    EssMssWorkflowAttributeGroupBean.build = build;
})(EssMssWorkflowAttributeGroupBean = exports.EssMssWorkflowAttributeGroupBean || (exports.EssMssWorkflowAttributeGroupBean = {}));
//# sourceMappingURL=EssMssWorkflowAttributeGroupBean.js.map