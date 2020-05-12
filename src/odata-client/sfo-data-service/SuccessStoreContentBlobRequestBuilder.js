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
var SuccessStoreContentBlob_1 = require("./SuccessStoreContentBlob");
/**
 * Request builder class for operations supported on the [[SuccessStoreContentBlob]] entity.
 */
var SuccessStoreContentBlobRequestBuilder = /** @class */ (function (_super) {
    __extends(SuccessStoreContentBlobRequestBuilder, _super);
    function SuccessStoreContentBlobRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SuccessStoreContentBlob` entity based on its keys.
     * @param contentId Key property. See [[SuccessStoreContentBlob.contentId]].
     * @returns A request builder for creating requests to retrieve one `SuccessStoreContentBlob` entity based on its keys.
     */
    SuccessStoreContentBlobRequestBuilder.prototype.getByKey = function (contentId) {
        return new core_1.GetByKeyRequestBuilder(SuccessStoreContentBlob_1.SuccessStoreContentBlob, { contentId: contentId });
    };
    /**
     * Returns a request builder for querying all `SuccessStoreContentBlob` entities.
     * @returns A request builder for creating requests to retrieve all `SuccessStoreContentBlob` entities.
     */
    SuccessStoreContentBlobRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SuccessStoreContentBlob_1.SuccessStoreContentBlob);
    };
    return SuccessStoreContentBlobRequestBuilder;
}(core_1.RequestBuilder));
exports.SuccessStoreContentBlobRequestBuilder = SuccessStoreContentBlobRequestBuilder;
//# sourceMappingURL=SuccessStoreContentBlobRequestBuilder.js.map