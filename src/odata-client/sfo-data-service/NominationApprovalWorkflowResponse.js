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
 * @deprecated since v1.6.0. Use [[NominationApprovalWorkflowResponse.build]] instead.
 */
function createNominationApprovalWorkflowResponse(json) {
    return NominationApprovalWorkflowResponse.build(json);
}
exports.createNominationApprovalWorkflowResponse = createNominationApprovalWorkflowResponse;
/**
 * NominationApprovalWorkflowResponseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var NominationApprovalWorkflowResponseField = /** @class */ (function (_super) {
    __extends(NominationApprovalWorkflowResponseField, _super);
    function NominationApprovalWorkflowResponseField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[NominationApprovalWorkflowResponse.message]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.message = new core_1.ComplexTypeStringPropertyField('message', _this, 'Edm.String');
        /**
         * Representation of the [[NominationApprovalWorkflowResponse.nomineeId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.nomineeId = new core_1.ComplexTypeBigNumberPropertyField('nomineeId', _this, 'Edm.Int64');
        /**
         * Representation of the [[NominationApprovalWorkflowResponse.status]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.status = new core_1.ComplexTypeStringPropertyField('status', _this, 'Edm.String');
        return _this;
    }
    return NominationApprovalWorkflowResponseField;
}(core_1.ComplexTypeField));
exports.NominationApprovalWorkflowResponseField = NominationApprovalWorkflowResponseField;
var NominationApprovalWorkflowResponse;
(function (NominationApprovalWorkflowResponse) {
    function build(json) {
        return core_1.createComplexType(json, {
            message: function (message) { return ({ message: core_1.edmToTs(message, 'Edm.String') }); },
            nomineeId: function (nomineeId) { return ({ nomineeId: core_1.edmToTs(nomineeId, 'Edm.Int64') }); },
            status: function (status) { return ({ status: core_1.edmToTs(status, 'Edm.String') }); }
        });
    }
    NominationApprovalWorkflowResponse.build = build;
})(NominationApprovalWorkflowResponse = exports.NominationApprovalWorkflowResponse || (exports.NominationApprovalWorkflowResponse = {}));
//# sourceMappingURL=NominationApprovalWorkflowResponse.js.map