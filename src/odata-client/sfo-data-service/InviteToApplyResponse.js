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
 * @deprecated since v1.6.0. Use [[InviteToApplyResponse.build]] instead.
 */
function createInviteToApplyResponse(json) {
    return InviteToApplyResponse.build(json);
}
exports.createInviteToApplyResponse = createInviteToApplyResponse;
/**
 * InviteToApplyResponseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var InviteToApplyResponseField = /** @class */ (function (_super) {
    __extends(InviteToApplyResponseField, _super);
    function InviteToApplyResponseField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[InviteToApplyResponse.candidateId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.candidateId = new core_1.ComplexTypeStringPropertyField('candidateId', _this, 'Edm.String');
        /**
         * Representation of the [[InviteToApplyResponse.message]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.message = new core_1.ComplexTypeStringPropertyField('message', _this, 'Edm.String');
        /**
         * Representation of the [[InviteToApplyResponse.status]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.status = new core_1.ComplexTypeStringPropertyField('status', _this, 'Edm.String');
        return _this;
    }
    return InviteToApplyResponseField;
}(core_1.ComplexTypeField));
exports.InviteToApplyResponseField = InviteToApplyResponseField;
var InviteToApplyResponse;
(function (InviteToApplyResponse) {
    function build(json) {
        return core_1.createComplexType(json, {
            candidateId: function (candidateId) { return ({ candidateId: core_1.edmToTs(candidateId, 'Edm.String') }); },
            message: function (message) { return ({ message: core_1.edmToTs(message, 'Edm.String') }); },
            status: function (status) { return ({ status: core_1.edmToTs(status, 'Edm.String') }); }
        });
    }
    InviteToApplyResponse.build = build;
})(InviteToApplyResponse = exports.InviteToApplyResponse || (exports.InviteToApplyResponse = {}));
//# sourceMappingURL=InviteToApplyResponse.js.map