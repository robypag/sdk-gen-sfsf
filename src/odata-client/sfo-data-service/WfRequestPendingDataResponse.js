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
var EssMssWorkflowAttributeGroupBean_1 = require("./EssMssWorkflowAttributeGroupBean");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[WfRequestPendingDataResponse.build]] instead.
 */
function createWfRequestPendingDataResponse(json) {
    return WfRequestPendingDataResponse.build(json);
}
exports.createWfRequestPendingDataResponse = createWfRequestPendingDataResponse;
/**
 * WfRequestPendingDataResponseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WfRequestPendingDataResponseField = /** @class */ (function (_super) {
    __extends(WfRequestPendingDataResponseField, _super);
    function WfRequestPendingDataResponseField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[WfRequestPendingDataResponse.wfRequestId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wfRequestId = new core_1.ComplexTypeBigNumberPropertyField('wfRequestId', _this, 'Edm.Int64');
        /**
         * Representation of the [[WfRequestPendingDataResponse.workflowAttributeGroups]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.workflowAttributeGroups = new EssMssWorkflowAttributeGroupBean_1.EssMssWorkflowAttributeGroupBeanField('workflowAttributeGroups', _this);
        return _this;
    }
    return WfRequestPendingDataResponseField;
}(core_1.ComplexTypeField));
exports.WfRequestPendingDataResponseField = WfRequestPendingDataResponseField;
var WfRequestPendingDataResponse;
(function (WfRequestPendingDataResponse) {
    function build(json) {
        return core_1.createComplexType(json, {
            wfRequestId: function (wfRequestId) { return ({ wfRequestId: core_1.edmToTs(wfRequestId, 'Edm.Int64') }); },
            workflowAttributeGroups: function (workflowAttributeGroups) { return ({ workflowAttributeGroups: EssMssWorkflowAttributeGroupBean_1.EssMssWorkflowAttributeGroupBean.build(workflowAttributeGroups) }); }
        });
    }
    WfRequestPendingDataResponse.build = build;
})(WfRequestPendingDataResponse = exports.WfRequestPendingDataResponse || (exports.WfRequestPendingDataResponse = {}));
//# sourceMappingURL=WfRequestPendingDataResponse.js.map