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
var MdfBlockConfig_1 = require("./MdfBlockConfig");
/**
 * Request builder class for operations supported on the [[MdfBlockConfig]] entity.
 */
var MdfBlockConfigRequestBuilder = /** @class */ (function (_super) {
    __extends(MdfBlockConfigRequestBuilder, _super);
    function MdfBlockConfigRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `MdfBlockConfig` entity based on its keys.
     * @param code Key property. See [[MdfBlockConfig.code]].
     * @returns A request builder for creating requests to retrieve one `MdfBlockConfig` entity based on its keys.
     */
    MdfBlockConfigRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilder(MdfBlockConfig_1.MdfBlockConfig, { code: code });
    };
    /**
     * Returns a request builder for querying all `MdfBlockConfig` entities.
     * @returns A request builder for creating requests to retrieve all `MdfBlockConfig` entities.
     */
    MdfBlockConfigRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(MdfBlockConfig_1.MdfBlockConfig);
    };
    return MdfBlockConfigRequestBuilder;
}(core_1.RequestBuilder));
exports.MdfBlockConfigRequestBuilder = MdfBlockConfigRequestBuilder;
//# sourceMappingURL=MdfBlockConfigRequestBuilder.js.map