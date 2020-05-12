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
var OnboardingEquipmentTypeValue_1 = require("./OnboardingEquipmentTypeValue");
/**
 * Request builder class for operations supported on the [[OnboardingEquipmentTypeValue]] entity.
 */
var OnboardingEquipmentTypeValueRequestBuilder = /** @class */ (function (_super) {
    __extends(OnboardingEquipmentTypeValueRequestBuilder, _super);
    function OnboardingEquipmentTypeValueRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `OnboardingEquipmentTypeValue` entity based on its keys.
     * @param code Key property. See [[OnboardingEquipmentTypeValue.code]].
     * @returns A request builder for creating requests to retrieve one `OnboardingEquipmentTypeValue` entity based on its keys.
     */
    OnboardingEquipmentTypeValueRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilder(OnboardingEquipmentTypeValue_1.OnboardingEquipmentTypeValue, { code: code });
    };
    /**
     * Returns a request builder for querying all `OnboardingEquipmentTypeValue` entities.
     * @returns A request builder for creating requests to retrieve all `OnboardingEquipmentTypeValue` entities.
     */
    OnboardingEquipmentTypeValueRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(OnboardingEquipmentTypeValue_1.OnboardingEquipmentTypeValue);
    };
    return OnboardingEquipmentTypeValueRequestBuilder;
}(core_1.RequestBuilder));
exports.OnboardingEquipmentTypeValueRequestBuilder = OnboardingEquipmentTypeValueRequestBuilder;
//# sourceMappingURL=OnboardingEquipmentTypeValueRequestBuilder.js.map