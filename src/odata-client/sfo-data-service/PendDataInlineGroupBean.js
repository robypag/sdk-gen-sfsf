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
var EssMssWorkflowSubAttributeBean_1 = require("./EssMssWorkflowSubAttributeBean");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[PendDataInlineGroupBean.build]] instead.
 */
function createPendDataInlineGroupBean(json) {
    return PendDataInlineGroupBean.build(json);
}
exports.createPendDataInlineGroupBean = createPendDataInlineGroupBean;
/**
 * PendDataInlineGroupBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PendDataInlineGroupBeanField = /** @class */ (function (_super) {
    __extends(PendDataInlineGroupBeanField, _super);
    function PendDataInlineGroupBeanField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PendDataInlineGroupBean.changeSet]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.changeSet = new EssMssWorkflowAttributeBean_1.EssMssWorkflowAttributeBeanField('changeSet', _this);
        /**
         * Representation of the [[PendDataInlineGroupBean.subChangeSetGroups]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subChangeSetGroups = new EssMssWorkflowSubAttributeBean_1.EssMssWorkflowSubAttributeBeanField('subChangeSetGroups', _this);
        /**
         * Representation of the [[PendDataInlineGroupBean.title]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.title = new core_1.ComplexTypeStringPropertyField('title', _this, 'Edm.String');
        return _this;
    }
    return PendDataInlineGroupBeanField;
}(core_1.ComplexTypeField));
exports.PendDataInlineGroupBeanField = PendDataInlineGroupBeanField;
var PendDataInlineGroupBean;
(function (PendDataInlineGroupBean) {
    function build(json) {
        return core_1.createComplexType(json, {
            changeSet: function (changeSet) { return ({ changeSet: EssMssWorkflowAttributeBean_1.EssMssWorkflowAttributeBean.build(changeSet) }); },
            subChangeSetGroups: function (subChangeSetGroups) { return ({ subChangeSetGroups: EssMssWorkflowSubAttributeBean_1.EssMssWorkflowSubAttributeBean.build(subChangeSetGroups) }); },
            title: function (title) { return ({ title: core_1.edmToTs(title, 'Edm.String') }); }
        });
    }
    PendDataInlineGroupBean.build = build;
})(PendDataInlineGroupBean = exports.PendDataInlineGroupBean || (exports.PendDataInlineGroupBean = {}));
//# sourceMappingURL=PendDataInlineGroupBean.js.map