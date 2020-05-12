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
var FoWfConfig_1 = require("./FoWfConfig");
/**
 * Request builder class for operations supported on the [[FoWfConfig]] entity.
 */
var FoWfConfigRequestBuilder = /** @class */ (function (_super) {
    __extends(FoWfConfigRequestBuilder, _super);
    function FoWfConfigRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoWfConfig` entity based on its keys.
     * @param externalCode Key property. See [[FoWfConfig.externalCode]].
     * @returns A request builder for creating requests to retrieve one `FoWfConfig` entity based on its keys.
     */
    FoWfConfigRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(FoWfConfig_1.FoWfConfig, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `FoWfConfig` entities.
     * @returns A request builder for creating requests to retrieve all `FoWfConfig` entities.
     */
    FoWfConfigRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoWfConfig_1.FoWfConfig);
    };
    return FoWfConfigRequestBuilder;
}(core_1.RequestBuilder));
exports.FoWfConfigRequestBuilder = FoWfConfigRequestBuilder;
//# sourceMappingURL=FoWfConfigRequestBuilder.js.map