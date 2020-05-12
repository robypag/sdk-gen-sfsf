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
var OnboardingEquipmentType_1_1 = require("./OnboardingEquipmentType_1");
/**
 * Request builder class for operations supported on the [[OnboardingEquipmentType_1]] entity.
 */
var OnboardingEquipmentType_1RequestBuilder = /** @class */ (function (_super) {
    __extends(OnboardingEquipmentType_1RequestBuilder, _super);
    function OnboardingEquipmentType_1RequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `OnboardingEquipmentType_1` entity based on its keys.
     * @param code Key property. See [[OnboardingEquipmentType_1.code]].
     * @returns A request builder for creating requests to retrieve one `OnboardingEquipmentType_1` entity based on its keys.
     */
    OnboardingEquipmentType_1RequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilder(OnboardingEquipmentType_1_1.OnboardingEquipmentType_1, { code: code });
    };
    /**
     * Returns a request builder for querying all `OnboardingEquipmentType_1` entities.
     * @returns A request builder for creating requests to retrieve all `OnboardingEquipmentType_1` entities.
     */
    OnboardingEquipmentType_1RequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(OnboardingEquipmentType_1_1.OnboardingEquipmentType_1);
    };
    return OnboardingEquipmentType_1RequestBuilder;
}(core_1.RequestBuilder));
exports.OnboardingEquipmentType_1RequestBuilder = OnboardingEquipmentType_1RequestBuilder;
//# sourceMappingURL=OnboardingEquipmentType_1RequestBuilder.js.map