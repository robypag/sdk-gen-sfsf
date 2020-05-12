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
var Form360Participant_1 = require("./Form360Participant");
/**
 * Request builder class for operations supported on the [[Form360Participant]] entity.
 */
var Form360ParticipantRequestBuilder = /** @class */ (function (_super) {
    __extends(Form360ParticipantRequestBuilder, _super);
    function Form360ParticipantRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Form360Participant` entity based on its keys.
     * @param formContentId Key property. See [[Form360Participant.formContentId]].
     * @param formDataId Key property. See [[Form360Participant.formDataId]].
     * @param participantId Key property. See [[Form360Participant.participantId]].
     * @returns A request builder for creating requests to retrieve one `Form360Participant` entity based on its keys.
     */
    Form360ParticipantRequestBuilder.prototype.getByKey = function (formContentId, formDataId, participantId) {
        return new core_1.GetByKeyRequestBuilder(Form360Participant_1.Form360Participant, {
            formContentId: formContentId,
            formDataId: formDataId,
            participantId: participantId
        });
    };
    /**
     * Returns a request builder for querying all `Form360Participant` entities.
     * @returns A request builder for creating requests to retrieve all `Form360Participant` entities.
     */
    Form360ParticipantRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Form360Participant_1.Form360Participant);
    };
    return Form360ParticipantRequestBuilder;
}(core_1.RequestBuilder));
exports.Form360ParticipantRequestBuilder = Form360ParticipantRequestBuilder;
//# sourceMappingURL=Form360ParticipantRequestBuilder.js.map