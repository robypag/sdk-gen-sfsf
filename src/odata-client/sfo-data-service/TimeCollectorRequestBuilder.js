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
var TimeCollector_1 = require("./TimeCollector");
/**
 * Request builder class for operations supported on the [[TimeCollector]] entity.
 */
var TimeCollectorRequestBuilder = /** @class */ (function (_super) {
    __extends(TimeCollectorRequestBuilder, _super);
    function TimeCollectorRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TimeCollector` entity based on its keys.
     * @param externalCode Key property. See [[TimeCollector.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeCollector` entity based on its keys.
     */
    TimeCollectorRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(TimeCollector_1.TimeCollector, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `TimeCollector` entities.
     * @returns A request builder for creating requests to retrieve all `TimeCollector` entities.
     */
    TimeCollectorRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TimeCollector_1.TimeCollector);
    };
    return TimeCollectorRequestBuilder;
}(core_1.RequestBuilder));
exports.TimeCollectorRequestBuilder = TimeCollectorRequestBuilder;
//# sourceMappingURL=TimeCollectorRequestBuilder.js.map