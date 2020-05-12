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
 * @deprecated since v1.6.0. Use [[IsUserEligibleForSpotAwardProgramResponse.build]] instead.
 */
function createIsUserEligibleForSpotAwardProgramResponse(json) {
    return IsUserEligibleForSpotAwardProgramResponse.build(json);
}
exports.createIsUserEligibleForSpotAwardProgramResponse = createIsUserEligibleForSpotAwardProgramResponse;
/**
 * IsUserEligibleForSpotAwardProgramResponseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var IsUserEligibleForSpotAwardProgramResponseField = /** @class */ (function (_super) {
    __extends(IsUserEligibleForSpotAwardProgramResponseField, _super);
    function IsUserEligibleForSpotAwardProgramResponseField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[IsUserEligibleForSpotAwardProgramResponse.isUserEligible]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isUserEligible = new core_1.ComplexTypeBooleanPropertyField('isUserEligible', _this, 'Edm.Boolean');
        return _this;
    }
    return IsUserEligibleForSpotAwardProgramResponseField;
}(core_1.ComplexTypeField));
exports.IsUserEligibleForSpotAwardProgramResponseField = IsUserEligibleForSpotAwardProgramResponseField;
var IsUserEligibleForSpotAwardProgramResponse;
(function (IsUserEligibleForSpotAwardProgramResponse) {
    function build(json) {
        return core_1.createComplexType(json, {
            isUserEligible: function (isUserEligible) { return ({ isUserEligible: core_1.edmToTs(isUserEligible, 'Edm.Boolean') }); }
        });
    }
    IsUserEligibleForSpotAwardProgramResponse.build = build;
})(IsUserEligibleForSpotAwardProgramResponse = exports.IsUserEligibleForSpotAwardProgramResponse || (exports.IsUserEligibleForSpotAwardProgramResponse = {}));
//# sourceMappingURL=IsUserEligibleForSpotAwardProgramResponse.js.map