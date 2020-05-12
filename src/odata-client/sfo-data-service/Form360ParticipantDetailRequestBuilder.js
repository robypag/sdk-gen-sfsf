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
var Form360ParticipantDetail_1 = require("./Form360ParticipantDetail");
/**
 * Request builder class for operations supported on the [[Form360ParticipantDetail]] entity.
 */
var Form360ParticipantDetailRequestBuilder = /** @class */ (function (_super) {
    __extends(Form360ParticipantDetailRequestBuilder, _super);
    function Form360ParticipantDetailRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Form360ParticipantDetail` entity based on its keys.
     * @param columnKey Key property. See [[Form360ParticipantDetail.columnKey]].
     * @param formContentId Key property. See [[Form360ParticipantDetail.formContentId]].
     * @param formDataId Key property. See [[Form360ParticipantDetail.formDataId]].
     * @param participantId Key property. See [[Form360ParticipantDetail.participantId]].
     * @returns A request builder for creating requests to retrieve one `Form360ParticipantDetail` entity based on its keys.
     */
    Form360ParticipantDetailRequestBuilder.prototype.getByKey = function (columnKey, formContentId, formDataId, participantId) {
        return new core_1.GetByKeyRequestBuilder(Form360ParticipantDetail_1.Form360ParticipantDetail, {
            columnKey: columnKey,
            formContentId: formContentId,
            formDataId: formDataId,
            participantId: participantId
        });
    };
    /**
     * Returns a request builder for querying all `Form360ParticipantDetail` entities.
     * @returns A request builder for creating requests to retrieve all `Form360ParticipantDetail` entities.
     */
    Form360ParticipantDetailRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Form360ParticipantDetail_1.Form360ParticipantDetail);
    };
    return Form360ParticipantDetailRequestBuilder;
}(core_1.RequestBuilder));
exports.Form360ParticipantDetailRequestBuilder = Form360ParticipantDetailRequestBuilder;
//# sourceMappingURL=Form360ParticipantDetailRequestBuilder.js.map