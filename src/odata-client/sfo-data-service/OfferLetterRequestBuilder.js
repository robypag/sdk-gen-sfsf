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
var OfferLetter_1 = require("./OfferLetter");
/**
 * Request builder class for operations supported on the [[OfferLetter]] entity.
 */
var OfferLetterRequestBuilder = /** @class */ (function (_super) {
    __extends(OfferLetterRequestBuilder, _super);
    function OfferLetterRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `OfferLetter` entity based on its keys.
     * @param offerLetterId Key property. See [[OfferLetter.offerLetterId]].
     * @returns A request builder for creating requests to retrieve one `OfferLetter` entity based on its keys.
     */
    OfferLetterRequestBuilder.prototype.getByKey = function (offerLetterId) {
        return new core_1.GetByKeyRequestBuilder(OfferLetter_1.OfferLetter, { offerLetterId: offerLetterId });
    };
    /**
     * Returns a request builder for querying all `OfferLetter` entities.
     * @returns A request builder for creating requests to retrieve all `OfferLetter` entities.
     */
    OfferLetterRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(OfferLetter_1.OfferLetter);
    };
    /**
     * Returns a request builder for creating a `OfferLetter` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `OfferLetter`.
     */
    OfferLetterRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(OfferLetter_1.OfferLetter, entity);
    };
    return OfferLetterRequestBuilder;
}(core_1.RequestBuilder));
exports.OfferLetterRequestBuilder = OfferLetterRequestBuilder;
//# sourceMappingURL=OfferLetterRequestBuilder.js.map