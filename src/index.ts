import * as aws from "aws-sdk";
import * as awsl from "aws-lambda";
import _ from "lodash";

export async function handler(event: awsl.KinesisStreamEvent, context: awsl.Context) {
    let records = _.join(_.map(event.Records, r => {
        r.eventID
    }), ",");
    console.log(`Records ${records} received`);
    return "OK";
}