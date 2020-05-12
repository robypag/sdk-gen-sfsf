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
var DgFieldOperator_1 = require("./DgFieldOperator");
/**
 * Request builder class for operations supported on the [[DgFieldOperator]] entity.
 */
var DgFieldOperatorRequestBuilder = /** @class */ (function (_super) {
    __extends(DgFieldOperatorRequestBuilder, _super);
    function DgFieldOperatorRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DgFieldOperator` entity based on its keys.
     * @param token Key property. See [[DgFieldOperator.token]].
     * @returns A request builder for creating requests to retrieve one `DgFieldOperator` entity based on its keys.
     */
    DgFieldOperatorRequestBuilder.prototype.getByKey = function (token) {
        return new core_1.GetByKeyRequestBuilder(DgFieldOperator_1.DgFieldOperator, { token: token });
    };
    /**
     * Returns a request builder for querying all `DgFieldOperator` entities.
     * @returns A request builder for creating requests to retrieve all `DgFieldOperator` entities.
     */
    DgFieldOperatorRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(DgFieldOperator_1.DgFieldOperator);
    };
    return DgFieldOperatorRequestBuilder;
}(core_1.RequestBuilder));
exports.DgFieldOperatorRequestBuilder = DgFieldOperatorRequestBuilder;
//# sourceMappingURL=DgFieldOperatorRequestBuilder.js.map