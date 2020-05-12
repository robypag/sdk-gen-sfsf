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
var MapEntry_String_String_1 = require("./MapEntry_String_String_");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[GetMatchedGuideLineRuleInfoResponse.build]] instead.
 */
function createGetMatchedGuideLineRuleInfoResponse(json) {
    return GetMatchedGuideLineRuleInfoResponse.build(json);
}
exports.createGetMatchedGuideLineRuleInfoResponse = createGetMatchedGuideLineRuleInfoResponse;
/**
 * GetMatchedGuideLineRuleInfoResponseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var GetMatchedGuideLineRuleInfoResponseField = /** @class */ (function (_super) {
    __extends(GetMatchedGuideLineRuleInfoResponseField, _super);
    function GetMatchedGuideLineRuleInfoResponseField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[GetMatchedGuideLineRuleInfoResponse.userIdToMatchedGuideLineMap]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userIdToMatchedGuideLineMap = new MapEntry_String_String_1.MapEntry_String_String_Field('userIdToMatchedGuideLineMap', _this);
        return _this;
    }
    return GetMatchedGuideLineRuleInfoResponseField;
}(core_1.ComplexTypeField));
exports.GetMatchedGuideLineRuleInfoResponseField = GetMatchedGuideLineRuleInfoResponseField;
var GetMatchedGuideLineRuleInfoResponse;
(function (GetMatchedGuideLineRuleInfoResponse) {
    function build(json) {
        return core_1.createComplexType(json, {
            userIdToMatchedGuideLineMap: function (userIdToMatchedGuideLineMap) { return ({ userIdToMatchedGuideLineMap: MapEntry_String_String_1.MapEntry_String_String_.build(userIdToMatchedGuideLineMap) }); }
        });
    }
    GetMatchedGuideLineRuleInfoResponse.build = build;
})(GetMatchedGuideLineRuleInfoResponse = exports.GetMatchedGuideLineRuleInfoResponse || (exports.GetMatchedGuideLineRuleInfoResponse = {}));
//# sourceMappingURL=GetMatchedGuideLineRuleInfoResponse.js.map