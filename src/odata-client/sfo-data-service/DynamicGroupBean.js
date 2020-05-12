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
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[DynamicGroupBean.build]] instead.
 */
function createDynamicGroupBean(json) {
    return DynamicGroupBean.build(json);
}
exports.createDynamicGroupBean = createDynamicGroupBean;
/**
 * DynamicGroupBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DynamicGroupBeanField = /** @class */ (function (_super) {
    __extends(DynamicGroupBeanField, _super);
    function DynamicGroupBeanField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DynamicGroupBean.groupId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.groupId = new core_1.ComplexTypeBigNumberPropertyField('groupId', _this, 'Edm.Int64');
        /**
         * Representation of the [[DynamicGroupBean.groupName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.groupName = new core_1.ComplexTypeStringPropertyField('groupName', _this, 'Edm.String');
        return _this;
    }
    return DynamicGroupBeanField;
}(core_1.ComplexTypeField));
exports.DynamicGroupBeanField = DynamicGroupBeanField;
var DynamicGroupBean;
(function (DynamicGroupBean) {
    function build(json) {
        return core_1.createComplexType(json, {
            groupId: function (groupId) { return ({ groupId: core_1.edmToTs(groupId, 'Edm.Int64') }); },
            groupName: function (groupName) { return ({ groupName: core_1.edmToTs(groupName, 'Edm.String') }); }
        });
    }
    DynamicGroupBean.build = build;
})(DynamicGroupBean = exports.DynamicGroupBean || (exports.DynamicGroupBean = {}));
//# sourceMappingURL=DynamicGroupBean.js.map