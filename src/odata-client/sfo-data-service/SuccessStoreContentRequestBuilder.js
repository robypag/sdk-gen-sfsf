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
var core_1 = require("@sap-cloud-sdk/core");
var SuccessStoreContent_1 = require("./SuccessStoreContent");
/**
 * Request builder class for operations supported on the [[SuccessStoreContent]] entity.
 */
var SuccessStoreContentRequestBuilder = /** @class */ (function (_super) {
    __extends(SuccessStoreContentRequestBuilder, _super);
    function SuccessStoreContentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SuccessStoreContent` entity based on its keys.
     * @param contentId Key property. See [[SuccessStoreContent.contentId]].
     * @returns A request builder for creating requests to retrieve one `SuccessStoreContent` entity based on its keys.
     */
    SuccessStoreContentRequestBuilder.prototype.getByKey = function (contentId) {
        return new core_1.GetByKeyRequestBuilder(SuccessStoreContent_1.SuccessStoreContent, { contentId: contentId });
    };
    /**
     * Returns a request builder for querying all `SuccessStoreContent` entities.
     * @returns A request builder for creating requests to retrieve all `SuccessStoreContent` entities.
     */
    SuccessStoreContentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SuccessStoreContent_1.SuccessStoreContent);
    };
    return SuccessStoreContentRequestBuilder;
}(core_1.RequestBuilder));
exports.SuccessStoreContentRequestBuilder = SuccessStoreContentRequestBuilder;
//# sourceMappingURL=SuccessStoreContentRequestBuilder.js.map