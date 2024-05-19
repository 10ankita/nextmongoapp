import { NextResponse } from "next/server";
import ConnectMongoDB from "../../../libs/mongoDB";
import Topic from "../../../models/Topic";

export async function POST(request) {
    const {title, description} = await request.json();
    await ConnectMongoDB();
    await Topic.create({title, description});
    return NextResponse.json({ message: "Topic created" }, { status:201 });
}

export async function GET() {
    await ConnectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({topics});
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await ConnectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic Deleted" }, { status: 200 });
}