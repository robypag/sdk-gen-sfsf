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
 * @deprecated since v1.6.0. Use [[DynamicGroupUserBean.build]] instead.
 */
function createDynamicGroupUserBean(json) {
    return DynamicGroupUserBean.build(json);
}
exports.createDynamicGroupUserBean = createDynamicGroupUserBean;
/**
 * DynamicGroupUserBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DynamicGroupUserBeanField = /** @class */ (function (_super) {
    __extends(DynamicGroupUserBeanField, _super);
    function DynamicGroupUserBeanField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DynamicGroupUserBean.firstName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.firstName = new core_1.ComplexTypeStringPropertyField('firstName', _this, 'Edm.String');
        /**
         * Representation of the [[DynamicGroupUserBean.lastName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lastName = new core_1.ComplexTypeStringPropertyField('lastName', _this, 'Edm.String');
        /**
         * Representation of the [[DynamicGroupUserBean.middleName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.middleName = new core_1.ComplexTypeStringPropertyField('middleName', _this, 'Edm.String');
        /**
         * Representation of the [[DynamicGroupUserBean.userId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userId = new core_1.ComplexTypeStringPropertyField('userId', _this, 'Edm.String');
        /**
         * Representation of the [[DynamicGroupUserBean.userName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userName = new core_1.ComplexTypeStringPropertyField('userName', _this, 'Edm.String');
        return _this;
    }
    return DynamicGroupUserBeanField;
}(core_1.ComplexTypeField));
exports.DynamicGroupUserBeanField = DynamicGroupUserBeanField;
var DynamicGroupUserBean;
(function (DynamicGroupUserBean) {
    function build(json) {
        return core_1.createComplexType(json, {
            firstName: function (firstName) { return ({ firstName: core_1.edmToTs(firstName, 'Edm.String') }); },
            lastName: function (lastName) { return ({ lastName: core_1.edmToTs(lastName, 'Edm.String') }); },
            middleName: function (middleName) { return ({ middleName: core_1.edmToTs(middleName, 'Edm.String') }); },
            userId: function (userId) { return ({ userId: core_1.edmToTs(userId, 'Edm.String') }); },
            userName: function (userName) { return ({ userName: core_1.edmToTs(userName, 'Edm.String') }); }
        });
    }
    DynamicGroupUserBean.build = build;
})(DynamicGroupUserBean = exports.DynamicGroupUserBean || (exports.DynamicGroupUserBean = {}));
//# sourceMappingURL=DynamicGroupUserBean.js.map