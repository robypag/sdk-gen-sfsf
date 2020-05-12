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
var PendingDataAttributeBean_1 = require("./PendingDataAttributeBean");
var ChangeDataBean_1 = require("./ChangeDataBean");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[EssMssWorkflowAttributeBean.build]] instead.
 */
function createEssMssWorkflowAttributeBean(json) {
    return EssMssWorkflowAttributeBean.build(json);
}
exports.createEssMssWorkflowAttributeBean = createEssMssWorkflowAttributeBean;
/**
 * EssMssWorkflowAttributeBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var EssMssWorkflowAttributeBeanField = /** @class */ (function (_super) {
    __extends(EssMssWorkflowAttributeBeanField, _super);
    function EssMssWorkflowAttributeBeanField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[EssMssWorkflowAttributeBean.changeSet]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.changeSet = new PendingDataAttributeBean_1.PendingDataAttributeBeanField('changeSet', _this);
        /**
         * Representation of the [[EssMssWorkflowAttributeBean.entityName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.entityName = new core_1.ComplexTypeStringPropertyField('entityName', _this, 'Edm.String');
        /**
         * Representation of the [[EssMssWorkflowAttributeBean.fieldId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fieldId = new core_1.ComplexTypeStringPropertyField('fieldId', _this, 'Edm.String');
        /**
         * Representation of the [[EssMssWorkflowAttributeBean.fieldName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fieldName = new core_1.ComplexTypeStringPropertyField('fieldName', _this, 'Edm.String');
        /**
         * Representation of the [[EssMssWorkflowAttributeBean.id]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.id = new core_1.ComplexTypeStringPropertyField('id', _this, 'Edm.String');
        /**
         * Representation of the [[EssMssWorkflowAttributeBean.label]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.label = new core_1.ComplexTypeStringPropertyField('label', _this, 'Edm.String');
        /**
         * Representation of the [[EssMssWorkflowAttributeBean.newValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.newValue = new core_1.ComplexTypeStringPropertyField('newValue', _this, 'Edm.String');
        /**
         * Representation of the [[EssMssWorkflowAttributeBean.oldValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.oldValue = new core_1.ComplexTypeStringPropertyField('oldValue', _this, 'Edm.String');
        /**
         * Representation of the [[EssMssWorkflowAttributeBean.payComponents]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.payComponents = new ChangeDataBean_1.ChangeDataBeanField('payComponents', _this);
        /**
         * Representation of the [[EssMssWorkflowAttributeBean.type]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.type = new core_1.ComplexTypeStringPropertyField('type', _this, 'Edm.String');
        return _this;
    }
    return EssMssWorkflowAttributeBeanField;
}(core_1.ComplexTypeField));
exports.EssMssWorkflowAttributeBeanField = EssMssWorkflowAttributeBeanField;
var EssMssWorkflowAttributeBean;
(function (EssMssWorkflowAttributeBean) {
    function build(json) {
        return core_1.createComplexType(json, {
            changeSet: function (changeSet) { return ({ changeSet: PendingDataAttributeBean_1.PendingDataAttributeBean.build(changeSet) }); },
            entityName: function (entityName) { return ({ entityName: core_1.edmToTs(entityName, 'Edm.String') }); },
            fieldId: function (fieldId) { return ({ fieldId: core_1.edmToTs(fieldId, 'Edm.String') }); },
            fieldName: function (fieldName) { return ({ fieldName: core_1.edmToTs(fieldName, 'Edm.String') }); },
            id: function (id) { return ({ id: core_1.edmToTs(id, 'Edm.String') }); },
            label: function (label) { return ({ label: core_1.edmToTs(label, 'Edm.String') }); },
            newValue: function (newValue) { return ({ newValue: core_1.edmToTs(newValue, 'Edm.String') }); },
            oldValue: function (oldValue) { return ({ oldValue: core_1.edmToTs(oldValue, 'Edm.String') }); },
            payComponents: function (payComponents) { return ({ payComponents: ChangeDataBean_1.ChangeDataBean.build(payComponents) }); },
            type: function (type) { return ({ type: core_1.edmToTs(type, 'Edm.String') }); }
        });
    }
    EssMssWorkflowAttributeBean.build = build;
})(EssMssWorkflowAttributeBean = exports.EssMssWorkflowAttributeBean || (exports.EssMssWorkflowAttributeBean = {}));
//# sourceMappingURL=EssMssWorkflowAttributeBean.js.map