import { NextResponse } from "next/server";
import { fetchProjects } from "@/lib/services/projectService";

export async function GET() {
    const projects = await fetchProjects();

    return NextResponse.json(projects);
}