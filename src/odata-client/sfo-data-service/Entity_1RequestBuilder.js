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
var Entity_1_1 = require("./Entity_1");
/**
 * Request builder class for operations supported on the [[Entity_1]] entity.
 */
var Entity_1RequestBuilder = /** @class */ (function (_super) {
    __extends(Entity_1RequestBuilder, _super);
    function Entity_1RequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Entity_1` entity based on its keys.
     * @param path Key property. See [[Entity_1.path]].
     * @returns A request builder for creating requests to retrieve one `Entity_1` entity based on its keys.
     */
    Entity_1RequestBuilder.prototype.getByKey = function (path) {
        return new core_1.GetByKeyRequestBuilder(Entity_1_1.Entity_1, { path: path });
    };
    /**
     * Returns a request builder for querying all `Entity_1` entities.
     * @returns A request builder for creating requests to retrieve all `Entity_1` entities.
     */
    Entity_1RequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Entity_1_1.Entity_1);
    };
    return Entity_1RequestBuilder;
}(core_1.RequestBuilder));
exports.Entity_1RequestBuilder = Entity_1RequestBuilder;
//# sourceMappingURL=Entity_1RequestBuilder.js.map