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
 * @deprecated since v1.6.0. Use [[GetBizXActionResponse.build]] instead.
 */
function createGetBizXActionResponse(json) {
    return GetBizXActionResponse.build(json);
}
exports.createGetBizXActionResponse = createGetBizXActionResponse;
/**
 * GetBizXActionResponseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var GetBizXActionResponseField = /** @class */ (function (_super) {
    __extends(GetBizXActionResponseField, _super);
    function GetBizXActionResponseField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[GetBizXActionResponse.actionId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actionId = new core_1.ComplexTypeStringPropertyField('actionId', _this, 'Edm.String');
        /**
         * Representation of the [[GetBizXActionResponse.actionLabel]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actionLabel = new core_1.ComplexTypeStringPropertyField('actionLabel', _this, 'Edm.String');
        /**
         * Representation of the [[GetBizXActionResponse.deepLinkUrl]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.deepLinkUrl = new core_1.ComplexTypeStringPropertyField('deepLinkUrl', _this, 'Edm.String');
        /**
         * Representation of the [[GetBizXActionResponse.userId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userId = new core_1.ComplexTypeStringPropertyField('userId', _this, 'Edm.String');
        return _this;
    }
    return GetBizXActionResponseField;
}(core_1.ComplexTypeField));
exports.GetBizXActionResponseField = GetBizXActionResponseField;
var GetBizXActionResponse;
(function (GetBizXActionResponse) {
    function build(json) {
        return core_1.createComplexType(json, {
            actionId: function (actionId) { return ({ actionId: core_1.edmToTs(actionId, 'Edm.String') }); },
            actionLabel: function (actionLabel) { return ({ actionLabel: core_1.edmToTs(actionLabel, 'Edm.String') }); },
            deepLinkUrl: function (deepLinkUrl) { return ({ deepLinkUrl: core_1.edmToTs(deepLinkUrl, 'Edm.String') }); },
            userId: function (userId) { return ({ userId: core_1.edmToTs(userId, 'Edm.String') }); }
        });
    }
    GetBizXActionResponse.build = build;
})(GetBizXActionResponse = exports.GetBizXActionResponse || (exports.GetBizXActionResponse = {}));
//# sourceMappingURL=GetBizXActionResponse.js.map